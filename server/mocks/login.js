module.exports = function (app) {
    var express = require('express'),
        authRouter = express.Router(),
        loginCarousel = express.Router(),
        fs = require('fs'),
        successResponse, validateTokenResponse, failureResponse;

    successResponse = JSON.parse(fs.readFileSync(__dirname + '/auth/success.json'));
    validateTokenResponse = JSON.parse(fs.readFileSync(__dirname + '/auth/validateToken.json'));
    failureResponse = JSON.parse(fs.readFileSync(__dirname + '/auth/failure.json'));

    authRouter.post('/user/login', function (req, res) {
        if (req.body.username === "1001049" && req.body.password === "rmwb123") {
            res.send(successResponse);
        } else {
            res.send(successResponse);
        }
    });

    authRouter.get('/user/validate', function (req, res) {
        res.send(validateTokenResponse);
    });

    authRouter.get('/user/invalidate', function (req, res) {
        res.send({});
    });

    authRouter.put('/user/preference/save', function (req, res) {
        res.send(validateTokenResponse);
    });

    authRouter.put('/user/preference/update', function (req, res) {
        res.send({success: true});
    });

    app.use('/api/auth', authRouter);


    /*loginCarousel*/
    loginCarousel.get('/core/carousel', function(req, res) {
        var pageJSON = {};
        pageJSON = require('./auth/login-carousel.json');
        res.send(pageJSON);
    });

    app.use('/api/', loginCarousel);
};
