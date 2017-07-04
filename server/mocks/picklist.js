module.exports = function (app) {
    var express = require('express'), projectRouter = express.Router();

    projectRouter.get('/picklist/all', function (req, res) {
        var pageJSON = require('./core/picklist/all.json');
        res.send(pageJSON);
    });
    projectRouter.get('/wbpicklist', function (req, res) {
        var pageJSON = require('./prospects/picklist.json');
        res.send(pageJSON);
    });

    app.use('/api/core', projectRouter);
};
