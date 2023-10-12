const Post = require('./model');

const postDbHelper = {};

postDbHelper.createPost = async (input) => {
    try {
        const obj = await Post(input);
        const result = obj.save().then(() => obj);
        return result;
    } catch (err) {
        return Promise.reject(err);
    }
};

postDbHelper.deletePost = async (postId) => {
    try {
        await Post.updateOne(
            { _id: postId },
            {
                $set: {
                    active: false,
                    modifiedDate: Date.now(),
                },
            }
        );
        return "";
    } catch (err) {
        return Promise.reject(err);
    }
};

postDbHelper.getAllUserPosts = async (userId) => {
    try {
        const userPosts = await Post.find({ "userId": userId, active: true })
            .sort({ createdDate: -1 })
        return userPosts;
    } catch (err) {
        return err;
    }
};

module.exports = postDbHelper;