var express = require('express');
var router = express.Router();

var controller = require('./controller');

router.post('/sign-up', (req, res, next) => {
    return controller.add(req).then((result) => {
        return res.status(200).json({ data: result });
    }).catch((err) => next(err));
});

module.exports = router;