# ES6 Sladex Blowfish

[![npm package][npm-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/es6-sladex-blowfish.svg?style=flat-square
[npm]: https://www.npmjs.org/package/es6-sladex-blowfish

[Blowfish](<https://en.wikipedia.org/wiki/Blowfish_(cipher)>) encryption library for browsers and Node.js from Dojo Toolkit 1.8.1 | Cut of by Sladex (xslade@gmail.com)

Works in Node.js 4+, IE10+ and all modern browsers.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Example](#example)
  - [Block cipher mode of operation](#block-cipher-mode-of-operation)
  - [Return type](#return-type)

## Installation

```
npm install es6-sladex-blowfish --save
```

## Usage

All input data should be a `String`.
Strings support all unicode including emoji ✨.

### Example

```js
import Blowfish, { MODE, TYPE } from 'es6-sladex-blowfish';

// third parameter is optional
const encrypted = Blowfish.encrypt("input text even with emoji 🎅", "super key",{cipherMode: MODE.ECB, outputType: TYPE.BASE64});

// third parameter is optional
const decrypted = Blowfish.decrypt(encrypted, "super key", {cipherMode: MODE.ECB, outputType: TYPE.BASE64}) as string)

console.log(encrypted);
console.log(decrypted);
```

### Block cipher mode of operation

https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation

```js
MODE.ECB; // (default) Electronic Codebook
MODE.CBC; // Cipher Block Chaining
MODE.PCBC; // Propagating Cipher Block Chaining
MODE.CFB; // Cipher Feedback
MODE.OFB; // Output Feedback
MODE.CTR; // Counter
```

### Return type

Which type of data should return method `decode`:

```js
TYPE.BASE64; // (default) Base64 String;
TYPE.HEX; // HexaDecimal String;
TYPE.STRING; // Uint8Array String;
TYPE.RAW; // Uint8Array
```
