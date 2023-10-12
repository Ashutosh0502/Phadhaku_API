const dbHelper = require('./dbHelper');

const post = {};

post.createPost = async (req) => {
    try {
        const res = await dbHelper.createPost(req.body);
        return res;
    } catch (err) {
        return Promise.reject(err);
    }
}

post.deletePost = async (req) => {
    try {
        if (!req.params.postId) return "input required!";
        await dbHelper.deletePost(req.params.postId);
        return "Post deleted!";
    } catch (err) {
        return Promise.reject(err);
    }
};

post.getAllUserPosts = async (req) => {
    try {
        if (!req.params.userId) return "userID Required!";
        return await dbHelper.getAllUserPosts(req.params.userId);
    } catch (err) {
        return Promise.reject(err);
    }
}

module.exports = post;