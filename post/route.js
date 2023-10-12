const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/posts', (req, res, next) => {
    return controller.createPost(req).then((result) => {
        return res.status(200).json({ message: "Successfully created." });
    }).catch((err) => next(err));
});

router.delete("/deletepost/:postId", (req, res, next) =>
    controller
        .deletePost(req)
        .then((success) => res.status(200).json(success))
        .catch((err) => next(err))
);

router.get('/posts/:userId', (req, res, next) => {
    return controller.getAllUserPosts(req).then((results) => {
        return res.status(200).json(results);
    }).catch((err) => next(err));
});

module.exports = router;