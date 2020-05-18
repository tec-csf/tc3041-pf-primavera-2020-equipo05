var passwordHash = require('password-hash');
var passwords = ["diego123", "gabriel123", "naji123", "eduardo123", "pavla123", "derrick123", "sidonia123", "alvinia123", "trumaine123", "waneta123", "derward123", "noni123", "jeralee123", "murielle123", "sibyl123", "appolonia", "miles123", "norma123", "chuck123", "broddy123"]

var hashedPasswords = []

for (let index = 0; index < passwords.length; index++) {
  hashedPasswords.push(passwordHash.generate(passwords[index]))

}
