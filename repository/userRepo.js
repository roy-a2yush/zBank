var User = require('../models/User');

// User.findAll()
//     .then(users => console.log(users))
//     .catch(error => console.error(error));

const getUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ where: { email } });
        if (user) {
            return user.dataValues;
        } else {
            return null
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const createUser = async (userObj) => {
    try {
        const user = await User.create(userObj);
        return user.dataValues;
    } catch (error) {
        // console.error(error);
        throw error;
    }
}

const getUserByEmailAndPassword = async (email, password) => {
    try {
        const user = await User.findOne({ where: { email, password } });
        console.log(user)
        if (user) {
            return user.dataValues;
        
        } else {
            return null
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    getUserByEmail,
    createUser,
    getUserByEmailAndPassword
}