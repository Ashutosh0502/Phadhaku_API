const users = require('./model');

const usersDbHelper = {};

usersDbHelper.save = async (usersInput) => {
    try {
        return users.countDocuments({ email: usersInput.email }).then((count) => {
            if (count === 0) {
                let newUser = JSON.parse(JSON.stringify(usersInput));
                const obj = new users(newUser);
                return obj.save().then(() => { return obj; });
            } else {
                return 'user exist';
            }
        });

    } catch (err) {
        return Promise.reject(err);
    }
};

module.exports = usersDbHelper;