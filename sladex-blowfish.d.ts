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
  setIv(iv: string, inputType: string): void;

  encrypt(
    plaintext: string,
    key: string,
    ao: { outputType: number; cipherMode: number }
  ): Uint8Array | string;

  decode(
    ciphertext: string,
    key: string,
    ao: { outputType: number; cipherMode: number }
  ): Uint8Array | string;
}
