const bcrypt = require('bcrypt');

const saltRounds = 10; // Number of rounds for the hashing algorithm

const hashPassword = async (plainPassword) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(plainPassword, salt);
    return hash.toString('base64');
}

const verifyPassword = async (plainPassword, hash) => {
    const result = await bcrypt.compare(plainPassword, hash);
    return result;
}

module.exports = {
    hashPassword,
    verifyPassword
}