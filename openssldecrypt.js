const crypto = require('crypto');

// Decrypt a message using the private key
const encryptedMessage = '...'; // the encrypted message
const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedMessage, 'base64'));

console.log(decrypted.toString('utf8'));