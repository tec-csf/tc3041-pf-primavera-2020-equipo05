var passwordHash = require('password-hash');
var hashedPassword = passwordHash.generate('password123');

console.log(hashedPassword);

console.log(passwordHash.verify('password123', hashedPassword)); // true
console.log(passwordHash.verify('Password0', hashedPassword)); // false
