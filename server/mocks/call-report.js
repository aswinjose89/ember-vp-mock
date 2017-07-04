module.exports = function (app) {
    var express = require('express'), crRouter = express.Router();

    crRouter.get('/home', function (req, res) {
        var pageJSON = require('./call-report/home.json');
        res.send(pageJSON);
    });
    crRouter.get('/callReportCharts', function (req, res) {
        var pageJSON = require('./call-report/chart.json');
        res.send(pageJSON);
    });
    crRouter.get('/callReportBarcharts', function (req, res) {
        var pageJSON = require('./call-report/barchart.json');
        res.send(pageJSON);
    });
    crRouter.get('/callReportGrids', function (req, res) {
        var pageJSON = require('./call-report/grid.json');
        res.send(pageJSON);
    });
    crRouter.get('/excel', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=Callreports.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });
    crRouter.get('/search/groups', function (req, res) {
        var pageJSON = require('./call-report/group.json');
        res.send(pageJSON);
    });
    crRouter.get('/search/clients', function (req, res) {
        var pageJSON = require('./call-report/client.json');
        res.send(pageJSON);
    });
    crRouter.get('/search/deals', function (req, res) {
        var pageJSON = require('./call-report/deal.json');
        setTimeout((function() {res.send(pageJSON)}), 3000);
    });

    app.use('/api/callReports', crRouter);
};
