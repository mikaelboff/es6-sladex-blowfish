export enum MODE {
  ECB = 0,
  CBC = 1,
  PCBC = 2,
  CFB = 3,
  OFB = 4,
  CTR = 5,
}

export enum TYPE {
  BASE64 = 0,
  HEX = 1,
  STRING = 2,
  RAW = 3,
}

export default class Blowfish {
  static encrypt(
    plaintext: string,
    key: string,
    ao?: { cipherMode: MODE; outputType: TYPE }
  ): Uint8Array | string;

  static decrypt(
    ciphertext: string,
    key: string,
    ao?: { cipherMode: MODE; outputType: TYPE }
  ): Uint8Array | string;
}
