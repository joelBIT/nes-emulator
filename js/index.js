'use strict';

const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get('id');
const worker = new Worker('js/emulator.js',{ type: "module" });
let nesWorkletNode;
let audioContext;
let userInteraction = false;

/**
 * |******************|
 * | Initialize Audio |
 * |******************|
 */


/**
 * The control of the canvas is transferred to the NES worker thread when the page has been loaded. As a result, the
 * worker thread takes care of the graphical processing and the player can interact with the interface without noticing
 * too much lag. The Audio Context and Audio Source are also initialized when the page has loaded.
 */
window.onload = () => {
  const canvas = document.getElementById("canvas").transferControlToOffscreen();
  worker.postMessage({ canvas: canvas }, [canvas]);

  audioContext = new AudioContext();
  nesWorkletNode = audioContext.audioWorklet.addModule('js/apu-worklet.js', { credentials: "omit" }).then(() => {
    nesWorkletNode = new AudioWorkletNode(audioContext, "apu-worklet");
    nesWorkletNode.connect(audioContext.destination);
    const source = audioContext.createBufferSource();
    source.buffer = audioContext.createBuffer(2, audioContext.sampleRate, audioContext.sampleRate);
    worker.onmessage = function(message) {
      nesWorkletNode.port.postMessage(message.data);   // Send address and data to APU
    };
  }).catch(error => console.log(error));
};

/**
 * Loads a game from query parameter 'id' if available.
 */
document.addEventListener("DOMContentLoaded", async (event) => {
  if (gameId) {
    const controllerConfiguration = setControllerConfiguration();
    worker.postMessage({ event: 'configuration', data: controllerConfiguration });
    await getRom();
  }
});

/**
 * |*************************|
 * | Handle controller input |
 * |*************************|
 */

const keyUpEventLogger = function(event) {
  worker.postMessage({event: 'keyup', value: event.code});

  if (navigator.userActivation.isActive && !userInteraction) {    // A user needs to interact with the page before the audio context can be resumed
    userInteraction = true;
    audioContext.resume();
  }
};

const keyDownEventLogger = function(event) {
  worker.postMessage({event: 'keydown', value: event.code});

  if (event.code === 'ArrowDown' || event.code === 'ArrowUp') {
    event.preventDefault();
  }
};

window.addEventListener("keyup", keyUpEventLogger);
window.addEventListener("keydown", keyDownEventLogger);

/**
 * |**************|
 * | Read NES ROM |
 * |**************|
 */

function readFile(event) {
  try {
    worker.postMessage({event: 'readFile', data: event.target.result});
    audioContext.resume();
  } catch (e) {
    console.log(e);
  }
}

/**
 * Performs check if file is NES ROM. If controller configuration is stored in local storage it is sent to the emulator.
 * Otherwise a default configuration is used. Then the input file is read.
 */
document.getElementById("nesfile").addEventListener('change', input => {
  if (!input.target.files.length) {
    alert('No file');
    return;
  }

  if (input.target.files[0].type !== 'application/x-nes-rom') {
    document.getElementById("nesfile").value = '';
    alert('File is not a NES ROM');
    return;
  }

  const controllerConfiguration = setControllerConfiguration();
  worker.postMessage({ event: 'configuration', data: controllerConfiguration });

  const fileReader = new FileReader();
  fileReader.addEventListener('load', readFile);
  fileReader.readAsArrayBuffer(input.target.files[0]);
});

/**
 * |**************************|
 * | Controller Configuration |
 * |**************************|
 */

const dialog = document.getElementById("dialog");
const showButton = document.querySelector(".show-button");
const closeButton = document.querySelector(".close-button");
const saveButton = document.querySelector(".save-button");

/**
 * Creates an array containing the controller configuration for player 1 and player 2.
 */
function setControllerConfiguration() {
  const controllerConfiguration = [];

  for (const key of keys) {
    if (localStorage.getItem(key.id)) {
      controllerConfiguration.push( { button: key.id, value: localStorage.getItem(key.id) } );
    } else {
      controllerConfiguration.push( { button: key.id, value: key.value } );
    }
  }

  return controllerConfiguration;
}

/**
 * Retrieve controller configuration from local storage. Use default values for buttons if configuration is not found.
 */
showButton.addEventListener("click", () => {
  for (const key of keys) {
    const button = localStorage.getItem(key.id);
    if (button) {
      key.value = button;
    } else {
      key.value = key.defaultValue;
    }
  }

  dialog.showModal();
  dialog.classList.remove('hidden');
});

/**
 * Set all buttons to default values if the modal is closed (i.e., closing without saving changes).
 */
closeButton.addEventListener("click", () => {
  dialog.close();
  for (const key of keys) {
    key.value = key.defaultValue;
    key.classList.remove('missing');
  }
  dialog.classList.add('hidden');
});

/**
 * Do not store configuration if player has left empty input fields when trying to save the controller configuration.
 * Store the controller configuration in local storage if all fields are nonempty.
 */
saveButton.addEventListener("click", (event) => {
  let missingValue = false;

  for (const key of keys) {
    if (!key.value) {
      missingValue = true;
      key.classList.add('missing');
    }
  }

  if (missingValue) {
    alert("Missing configuration");
    event.preventDefault();
    return;
  }

  for (const key of keys) {
    if (key.value) {
      localStorage.setItem(key.id, key.value);
    } else {
      localStorage.setItem(key.id, key.defaultValue);
    }
  }

  dialog.close();
  dialog.classList.add('hidden');
});

const keys = document.getElementsByClassName('key');
for (const key of keys) {
  key.addEventListener('focus', removeInputCharacter);
  key.addEventListener('focusout', addDefaultValueIfEmpty);
  key.addEventListener('keydown', setKeyCode);
  key.addEventListener('keyup', setDefaultValueIfKeyCodeMissing);
}

/**
 *  Remove the input character in order to prepare the field for the pressed key's code.
 */
function removeInputCharacter(event) {
  event.target.value = '';
}

/**
 *  If input text field is empty when focus is removed, add the button's default value instead.
 */
function addDefaultValueIfEmpty(event) {
  event.target.classList.remove('missing');
  if (!event.target.value) {
    event.target.value = event.target.defaultValue;
  }
}

/**
 *  Set default value if button has no value.
 */
function setDefaultValueIfKeyCodeMissing(event) {
  if (!event.code) {
    event.target.value = event.target.defaultValue;
  }
}

/**
 *  Show key code in input text field.
 */
function setKeyCode(event) {
  removeKeyWhereAlreadyUsed(event);
  event.target.value = event.code;
  event.preventDefault();
}

/**
 *  Removes the chosen key from other buttons if already in use.
 */
function removeKeyWhereAlreadyUsed(event) {
  const keyCode = event.code;
  for (const key of keys) {
    if (Object.is(key.value, keyCode)) {
      key.value = '';
    }
  }
}



/*************************
 * Load NES ROM from API *
 *************************/

const startButton = document.querySelector(".start-button");    // Start loaded rom

/**
 * Retrieves and loads a ROM based on the 'id' query parameter, if such exists.
 */
async function getRom() {
    const url = `https://tnkcekyijuynctkddkwy.supabase.co/storage/v1/object/public/roms//${gameId}.nes?download`;
    try {
      const response = await fetch(url);
      const buffer = new Uint8Array(60000000);
      const reader = response.body.getReader({ mode: "byob" });
      const finished = await reader.read(buffer);
      worker.postMessage({event: 'readFile', data: finished.value});
      startButton.classList.remove('hidden');
    } catch (error) {
      console.log(error);
    }
}

startButton.addEventListener('click', () => {
    getRom();
    window.location.reload();
});

/**
 * Reload page once to get game from cache when downloaded, if necessary.
 */
(() => {
  if (window.localStorage) {
      if (!localStorage.getItem('reload')) {
          localStorage['reload'] = true;
          window.location.reload();
      } else {
          localStorage.removeItem('reload');
      }
  }
})(); // Calling anonymous function here only