const crypto = require('crypto');

// Sign a message using the private key
const message = 'Hello, world!';
const signature = crypto.sign('sha256', Buffer.from(message), privateKey);

// Verify a signature using the public key
const isVerified = crypto.verify('sha256', Buffer.from(message), publicKey, signature);
