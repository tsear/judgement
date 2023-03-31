const crypto = require('crypto');

// Generate a public-private key pair using OpenSSL
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

// Encrypt a message using the public key
const message = 'Hello, world!';
const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message));

console.log(encrypted.toString('base64'));