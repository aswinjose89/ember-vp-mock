module.exports = function (app) {
    var express = require('express'), dpRouter = express.Router();

    dpRouter.get('/home', function (req, res) {
        var pageJSON = require('./deal-referral/home.json');
        res.send(pageJSON);
    });
    dpRouter.get('/dealCharts', function (req, res) {
        var pageJSON = require('./deal-referral/chart.json');
        res.send(pageJSON);
    });
    dpRouter.get('/dealReferralGrids', function (req, res) {
        var pageJSON = require('./deal-referral/grid.json');
        res.send(pageJSON);
    });

    app.use('/api/referral', dpRouter);
};
