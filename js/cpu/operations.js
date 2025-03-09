/**
 * These are unofficial operations for the NES 2A03 CPU. Each operation contains information about cycles, addressing
 * mode, and corresponding operation code.
 */
export const UnofficialOperations = {
  "NOP": [ { addressMode: "ABS", opcode: 0x0C, cycles: 4 },
          { addressMode: "ABX", opcode: 0x3C, cycles: 4 },
          { addressMode: "ABX", opcode: 0x5C, cycles: 4 },
          { addressMode: "ABX", opcode: 0x7C, cycles: 4 },
          { addressMode: "ABX", opcode: 0xDC, cycles: 4 },
          { addressMode: "ABX", opcode: 0xFC, cycles: 4 },
          { addressMode: "ABX", opcode: 0x1C, cycles: 4 },
          { addressMode: "IMM", opcode: 0x89, cycles: 2 },
          { addressMode: "IMM", opcode: 0x80, cycles: 2 },
          { addressMode: "IMM", opcode: 0xC2, cycles: 2 },
          { addressMode: "IMM", opcode: 0xE2, cycles: 2 },
          { addressMode: "IMM", opcode: 0x82, cycles: 2 },
          { addressMode: "IMP", opcode: 0xEA, cycles: 2 },
          { addressMode: "IMP", opcode: 0x1A, cycles: 2 },
          { addressMode: "IMP", opcode: 0x3A, cycles: 2 },
          { addressMode: "IMP", opcode: 0x5A, cycles: 2 },
          { addressMode: "IMP", opcode: 0x7A, cycles: 2 },
          { addressMode: "IMP", opcode: 0xDA, cycles: 2 },
          { addressMode: "IMP", opcode: 0xFA, cycles: 2 },
          { addressMode: "ZP0", opcode: 0x04, cycles: 3 },
          { addressMode: "ZP0", opcode: 0x64, cycles: 3 },
          { addressMode: "ZP0", opcode: 0x44, cycles: 3 },
          { addressMode: "ZPX", opcode: 0x34, cycles: 4 },
          { addressMode: "ZPX", opcode: 0x54, cycles: 4 },
          { addressMode: "ZPX", opcode: 0x74, cycles: 4 },
          { addressMode: "ZPX", opcode: 0xD4, cycles: 4 },
          { addressMode: "ZPX", opcode: 0xF4, cycles: 4 },
          { addressMode: "ZPX", opcode: 0x14, cycles: 4 } ],
  "XXX": [ { addressMode: "ABS", opcode: 0x0F, cycles: 6 },
          { addressMode: "ABS", opcode: 0x2F, cycles: 6 },
          { addressMode: "ABS", opcode: 0x4F, cycles: 6 },
          { addressMode: "ABS", opcode: 0x6F, cycles: 6 },
          { addressMode: "ABS", opcode: 0x8F, cycles: 4 },
          { addressMode: "ABS", opcode: 0xAF, cycles: 4 },
          { addressMode: "ABS", opcode: 0xCF, cycles: 6 },
          { addressMode: "ABS", opcode: 0xEF, cycles: 6 },
          { addressMode: "ABX", opcode: 0x1F, cycles: 7 },
          { addressMode: "ABX", opcode: 0x3F, cycles: 7 },
          { addressMode: "ABX", opcode: 0x5F, cycles: 7 },
          { addressMode: "ABX", opcode: 0x7F, cycles: 7 },
          { addressMode: "ABX", opcode: 0xDF, cycles: 7 },
          { addressMode: "ABX", opcode: 0xFF, cycles: 7 },
          { addressMode: "ABX", opcode: 0x9E, cycles: 5 },
          { addressMode: "ABX", opcode: 0x9C, cycles: 5 },
          { addressMode: "ABY", opcode: 0x9F, cycles: 5 },
          { addressMode: "ABY", opcode: 0xBF, cycles: 4 },
          { addressMode: "ABY", opcode: 0x1B, cycles: 7 },
          { addressMode: "ABY", opcode: 0x3B, cycles: 7 },
          { addressMode: "ABY", opcode: 0x5B, cycles: 7 },
          { addressMode: "ABY", opcode: 0x7B, cycles: 7 },
          { addressMode: "ABY", opcode: 0x9B, cycles: 5 },
          { addressMode: "ABY", opcode: 0xBB, cycles: 4 },
          { addressMode: "ABY", opcode: 0xDB, cycles: 7 },
          { addressMode: "ABY", opcode: 0xFB, cycles: 7 },
          { addressMode: "IMM", opcode: 0x0B, cycles: 2 },
          { addressMode: "IMM", opcode: 0x2B, cycles: 2 },
          { addressMode: "IMM", opcode: 0x4B, cycles: 2 },
          { addressMode: "IMM", opcode: 0x6B, cycles: 2 },
          { addressMode: "IMM", opcode: 0x8B, cycles: 2 },
          { addressMode: "IMM", opcode: 0xAB, cycles: 2 },
          { addressMode: "IMM", opcode: 0xCB, cycles: 2 },
          { addressMode: "IMM", opcode: 0xEB, cycles: 2 },
          { addressMode: "IMP", opcode: 0x02, cycles: 2 },
          { addressMode: "IMP", opcode: 0x22, cycles: 2 },
          { addressMode: "IMP", opcode: 0x42, cycles: 2 },
          { addressMode: "IMP", opcode: 0x62, cycles: 2 },
          { addressMode: "IMP", opcode: 0x12, cycles: 2 },
          { addressMode: "IMP", opcode: 0x32, cycles: 2 },
          { addressMode: "IMP", opcode: 0x52, cycles: 2 },
          { addressMode: "IMP", opcode: 0x72, cycles: 2 },
          { addressMode: "IMP", opcode: 0x92, cycles: 2 },
          { addressMode: "IMP", opcode: 0xB2, cycles: 2 },
          { addressMode: "IMP", opcode: 0xD2, cycles: 2 },
          { addressMode: "IMP", opcode: 0xF2, cycles: 2 },
          { addressMode: "IZX", opcode: 0x23, cycles: 8 },
          { addressMode: "IZX", opcode: 0x43, cycles: 8 },
          { addressMode: "IZX", opcode: 0x63, cycles: 8 },
          { addressMode: "IZX", opcode: 0xC3, cycles: 8 },
          { addressMode: "IZX", opcode: 0xE3, cycles: 8 },
          { addressMode: "IZX", opcode: 0x83, cycles: 6 },
          { addressMode: "IZX", opcode: 0xA3, cycles: 6 },
          { addressMode: "IZX", opcode: 0x03, cycles: 8 },
          { addressMode: "IZY", opcode: 0x33, cycles: 8 },
          { addressMode: "IZY", opcode: 0x53, cycles: 8 },
          { addressMode: "IZY", opcode: 0x73, cycles: 8 },
          { addressMode: "IZY", opcode: 0xD3, cycles: 8 },
          { addressMode: "IZY", opcode: 0xF3, cycles: 8 },
          { addressMode: "IZY", opcode: 0x93, cycles: 6 },
          { addressMode: "IZY", opcode: 0xB3, cycles: 5 },
          { addressMode: "IZY", opcode: 0x13, cycles: 8 },
          { addressMode: "ZP0", opcode: 0x27, cycles: 5 },
          { addressMode: "ZP0", opcode: 0x47, cycles: 5 },
          { addressMode: "ZP0", opcode: 0x67, cycles: 5 },
          { addressMode: "ZP0", opcode: 0xC7, cycles: 5 },
          { addressMode: "ZP0", opcode: 0xE7, cycles: 5 },
          { addressMode: "ZP0", opcode: 0x87, cycles: 3 },
          { addressMode: "ZP0", opcode: 0xA7, cycles: 3 },
          { addressMode: "ZP0", opcode: 0x07, cycles: 5 },
          { addressMode: "ZPX", opcode: 0x37, cycles: 6 },
          { addressMode: "ZPX", opcode: 0x57, cycles: 6 },
          { addressMode: "ZPX", opcode: 0x77, cycles: 6 },
          { addressMode: "ZPX", opcode: 0xD7, cycles: 6 },
          { addressMode: "ZPX", opcode: 0xF7, cycles: 6 },
          { addressMode: "ZPX", opcode: 0x97, cycles: 4 },
          { addressMode: "ZPX", opcode: 0xB7, cycles: 4 },
          { addressMode: "ZPX", opcode: 0x17, cycles: 6 } ]
};

/**
 * These are official operations for the NES 2A03 CPU. Each operation contains information about cycles, addressing
 * mode, and corresponding operation code.
 */
export const OfficialOperations = {
  "ADC": [ { addressMode: "ABS", opcode: 0x6D, cycles: 4 },
          { addressMode: "ABX", opcode: 0x7D, cycles: 4 },
          { addressMode: "ABY", opcode: 0x79, cycles: 4 },
          { addressMode: "IMM", opcode: 0x69, cycles: 2 },
          { addressMode: "IZX", opcode: 0x61, cycles: 6 },
          { addressMode: "IZY", opcode: 0x71, cycles: 5 },
          { addressMode: "ZP0", opcode: 0x65, cycles: 3 },
          { addressMode: "ZPX", opcode: 0x75, cycles: 4 } ],
  "AND": [ { addressMode: "ABS", opcode: 0x2D, cycles: 4 },
          { addressMode: "ABX", opcode: 0x3D, cycles: 4 },
          { addressMode: "ABY", opcode: 0x39, cycles: 4 },
          { addressMode: "IMM", opcode: 0x29, cycles: 2 },
          { addressMode: "IZX", opcode: 0x21, cycles: 6 },
          { addressMode: "IZY", opcode: 0x31, cycles: 5 },
          { addressMode: "ZP0", opcode: 0x25, cycles: 3 },
          { addressMode: "ZPX", opcode: 0x35, cycles: 4 } ],
  "ASL": [ { addressMode: "ABS", opcode: 0x0E, cycles: 6 },
          { addressMode: "ABX", opcode: 0x1E, cycles: 7 },
          { addressMode: "IMP", opcode: 0x0A, cycles: 2 },
          { addressMode: "ZP0", opcode: 0x06, cycles: 5 },
          { addressMode: "ZPX", opcode: 0x16, cycles: 6 } ],
  "BCC": [ { addressMode: "REL", opcode: 0x90, cycles: 2 } ],
  "BCS": [ { addressMode: "REL", opcode: 0xB0, cycles: 2 } ],
  "BEQ": [ { addressMode: "REL", opcode: 0xF0, cycles: 2 } ],
  "BIT": [ { addressMode: "ABS", opcode: 0x2C, cycles: 4 },
          { addressMode: "ZP0", opcode: 0x24, cycles: 3 } ],
  "BMI": [ { addressMode: "REL", opcode: 0x30, cycles: 2 } ],
  "BNE": [ { addressMode: "REL", opcode: 0xD0, cycles: 2 } ],
  "BPL": [ { addressMode: "REL", opcode: 0x10, cycles: 2 } ],
  "BRK": [ { addressMode: "IMM", opcode: 0x00, cycles: 7 } ],
  "BVC": [ { addressMode: "REL", opcode: 0x50, cycles: 2 } ],
  "BVS": [ { addressMode: "REL", opcode: 0x70, cycles: 2 } ],
  "CLC": [ { addressMode: "IMP", opcode: 0x18, cycles: 2 } ],
  "CLD": [ { addressMode: "IMP", opcode: 0xD8, cycles: 2 } ],
  "CLI": [ { addressMode: "IMP", opcode: 0x58, cycles: 2 } ],
  "CLV": [ { addressMode: "IMP", opcode: 0xB8, cycles: 2 } ],
  "CMP": [ { addressMode: "ABS", opcode: 0xCD, cycles: 4 },
          { addressMode: "ABX", opcode: 0xDD, cycles: 4 },
          { addressMode: "ABY", opcode: 0xD9, cycles: 4 },
          { addressMode: "IMM", opcode: 0xC9, cycles: 2 },
          { addressMode: "IZX", opcode: 0xC1, cycles: 6 },
          { addressMode: "IZY", opcode: 0xD1, cycles: 5 },
          { addressMode: "ZP0", opcode: 0xC5, cycles: 3 },
          { addressMode: "ZPX", opcode: 0xD5, cycles: 4 } ],
  "CPY": [ { addressMode: "ABS", opcode: 0xCC, cycles: 4 },
          { addressMode: "IMM", opcode: 0xC0, cycles: 2 },
          { addressMode: "ZP0", opcode: 0xC4, cycles: 3 } ],
  "CPX": [ { addressMode: "ABS", opcode: 0xEC, cycles: 4 },
          { addressMode: "IMM", opcode: 0xE0, cycles: 2 },
          { addressMode: "ZP0", opcode: 0xE4, cycles: 3 } ],
  "DEC": [ { addressMode: "ABS", opcode: 0xCE, cycles: 6 },
          { addressMode: "ABX", opcode: 0xDE, cycles: 7 },
          { addressMode: "ZP0", opcode: 0xC6, cycles: 5 },
          { addressMode: "ZPX", opcode: 0xD6, cycles: 6 } ],
  "DEX": [ { addressMode: "IMP", opcode: 0xCA, cycles: 2 } ],
  "DEY": [ { addressMode: "IMP", opcode: 0x88, cycles: 2 } ],
  "EOR": [ { addressMode: "ABS", opcode: 0x4D, cycles: 4 },
          { addressMode: "ABX", opcode: 0x5D, cycles: 4 },
          { addressMode: "ABY", opcode: 0x59, cycles: 4 },
          { addressMode: "IMM", opcode: 0x49, cycles: 2 },
          { addressMode: "IZX", opcode: 0x41, cycles: 6 },
          { addressMode: "IZY", opcode: 0x51, cycles: 5 },
          { addressMode: "ZP0", opcode: 0x45, cycles: 3 },
          { addressMode: "ZPX", opcode: 0x55, cycles: 4 } ],
  "INC": [ { addressMode: "ABS", opcode: 0xEE, cycles: 6 },
          { addressMode: "ABX", opcode: 0xFE, cycles: 7 },
          { addressMode: "ZP0", opcode: 0xE6, cycles: 5 },
          { addressMode: "ZPX", opcode: 0xF6, cycles: 6 } ],
  "INX": [ { addressMode: "IMP", opcode: 0xE8, cycles: 2 } ],
  "INY": [ { addressMode: "IMP", opcode: 0xC8, cycles: 2 } ],
  "JMP": [ { addressMode: "ABS", opcode: 0x4C, cycles: 3 },
          { addressMode: "IND", opcode: 0x6C, cycles: 5 } ],
  "JSR": [ { addressMode: "ABS", opcode: 0x20, cycles: 6 } ],
  "LDA": [ { addressMode: "ABS", opcode: 0xAD, cycles: 4 },
          { addressMode: "ABX", opcode: 0xBD, cycles: 4 },
          { addressMode: "ABY", opcode: 0xB9, cycles: 4 },
          { addressMode: "IMM", opcode: 0xA9, cycles: 2 },
          { addressMode: "IZX", opcode: 0xA1, cycles: 6 },
          { addressMode: "IZY", opcode: 0xB1, cycles: 5 },
          { addressMode: "ZP0", opcode: 0xA5, cycles: 3 },
          { addressMode: "ZPX", opcode: 0xB5, cycles: 4 } ],
  "LDX": [ { addressMode: "ABS", opcode: 0xAE, cycles: 4 },
          { addressMode: "ABY", opcode: 0xBE, cycles: 4 },
          { addressMode: "IMM", opcode: 0xA2, cycles: 2 },
          { addressMode: "ZP0", opcode: 0xA6, cycles: 3 },
          { addressMode: "ZPY", opcode: 0xB6, cycles: 4 } ],
  "LDY": [ { addressMode: "ABS", opcode: 0xAC, cycles: 4 },
          { addressMode: "ABX", opcode: 0xBC, cycles: 4 },
          { addressMode: "IMM", opcode: 0xA0, cycles: 2 },
          { addressMode: "ZP0", opcode: 0xA4, cycles: 3 },
          { addressMode: "ZPX", opcode: 0xB4, cycles: 4 } ],
  "LSR": [ { addressMode: "ABS", opcode: 0x4E, cycles: 6 },
          { addressMode: "ABX", opcode: 0x5E, cycles: 7 },
          { addressMode: "IMP", opcode: 0x4A, cycles: 2 },
          { addressMode: "ZP0", opcode: 0x46, cycles: 5 },
          { addressMode: "ZPX", opcode: 0x56, cycles: 6 } ],
  "ORA": [ { addressMode: "ABS", opcode: 0x0D, cycles: 4 },
          { addressMode: "ABX", opcode: 0x1D, cycles: 4 },
          { addressMode: "ABY", opcode: 0x19, cycles: 4 },
          { addressMode: "IMM", opcode: 0x09, cycles: 2 },
          { addressMode: "IZX", opcode: 0x01, cycles: 6 },
          { addressMode: "IZY", opcode: 0x11, cycles: 5 },
          { addressMode: "ZP0", opcode: 0x05, cycles: 3 },
          { addressMode: "ZPX", opcode: 0x15, cycles: 4 } ],
  "PHA": [ { addressMode: "IMP", opcode: 0x48, cycles: 3 } ],
  "PHP": [ { addressMode: "IMP", opcode: 0x08, cycles: 3 } ],
  "PLA": [ { addressMode: "IMP", opcode: 0x68, cycles: 4 } ],
  "PLP": [ { addressMode: "IMP", opcode: 0x28, cycles: 4 } ],
  "ROL": [ { addressMode: "ABS", opcode: 0x2E, cycles: 6 },
          { addressMode: "ABX", opcode: 0x3E, cycles: 7 },
          { addressMode: "IMP", opcode: 0x2A, cycles: 2 },
          { addressMode: "ZP0", opcode: 0x26, cycles: 5 },
          { addressMode: "ZPX", opcode: 0x36, cycles: 6 } ],
  "ROR": [ { addressMode: "ABS", opcode: 0x6E, cycles: 6 },
          { addressMode: "ABX", opcode: 0x7E, cycles: 7 },
          { addressMode: "IMP", opcode: 0x6A, cycles: 2 },
          { addressMode: "ZP0", opcode: 0x66, cycles: 5 },
          { addressMode: "ZPX", opcode: 0x76, cycles: 6 } ],
  "RTI": [ { addressMode: "IMP", opcode: 0x40, cycles: 6 } ],
  "RTS": [ { addressMode: "IMP", opcode: 0x60, cycles: 6 } ],
  "SBC": [ { addressMode: "ABS", opcode: 0xED, cycles: 4 },
          { addressMode: "ABX", opcode: 0xFD, cycles: 4 },
          { addressMode: "ABY", opcode: 0xF9, cycles: 4 },
          { addressMode: "IMM", opcode: 0xE9, cycles: 2 },
          { addressMode: "IZX", opcode: 0xE1, cycles: 6 },
          { addressMode: "IZY", opcode: 0xF1, cycles: 5 },
          { addressMode: "ZP0", opcode: 0xE5, cycles: 3 },
          { addressMode: "ZPX", opcode: 0xF5, cycles: 4 } ],
  "SEC": [ { addressMode: "IMP", opcode: 0x38, cycles: 2 } ],
  "SED": [ { addressMode: "IMP", opcode: 0xF8, cycles: 2 } ],
  "SEI": [ { addressMode: "IMP", opcode: 0x78, cycles: 2 } ],
  "STA": [ { addressMode: "ABS", opcode: 0x8D, cycles: 4 },
          { addressMode: "ABX", opcode: 0x9D, cycles: 5 },
          { addressMode: "ABY", opcode: 0x99, cycles: 5 },
          { addressMode: "IZX", opcode: 0x81, cycles: 6 },
          { addressMode: "IZY", opcode: 0x91, cycles: 6 },
          { addressMode: "ZP0", opcode: 0x85, cycles: 3 },
          { addressMode: "ZPX", opcode: 0x95, cycles: 4 } ],
  "STX": [ { addressMode: "ABS", opcode: 0x8E, cycles: 4 },
          { addressMode: "ZP0", opcode: 0x86, cycles: 3 },
          { addressMode: "ZPY", opcode: 0x96, cycles: 4 } ],
  "STY": [ { addressMode: "ABS", opcode: 0x8C, cycles: 4 },
          { addressMode: "ZP0", opcode: 0x84, cycles: 3 },
          { addressMode: "ZPX", opcode: 0x94, cycles: 4 } ],
  "TAX": [ { addressMode: "IMP", opcode: 0xAA, cycles: 2 } ],
  "TAY": [ { addressMode: "IMP", opcode: 0xA8, cycles: 2 } ],
  "TYA": [ { addressMode: "IMP", opcode: 0x98, cycles: 2 } ],
  "TSX": [ { addressMode: "IMP", opcode: 0xBA, cycles: 2 } ],
  "TXA": [ { addressMode: "IMP", opcode: 0x8A, cycles: 2 } ],
  "TXS": [ { addressMode: "IMP", opcode: 0x9A, cycles: 2 } ]
};
