const dbHelper = require('./dbHelper');

const users = {};

users.add = async (req) => {
    try {
        const res = await dbHelper.save(req.body);
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
};

module.exports = users;