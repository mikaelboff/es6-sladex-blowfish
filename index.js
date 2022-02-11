var Blowfish = require("./blowfish");

var encrypted = Blowfish.encrypt("String qualquer", "chave_de_teste", {
  cipherMode: 0,
  outputType: 0,
});

var decrypted = Blowfish.decrypt(encrypted, "chave_de_teste", {
  cipherMode: 0,
  outputType: 0,
});

console.log(`encrypted ${encrypted}`);

console.log(`decrypted ${decrypted}`);
