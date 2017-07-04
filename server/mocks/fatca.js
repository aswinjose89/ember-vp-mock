module.exports = function (app) {
    var express = require('express'),
    	fatcaRouter = express.Router();

    fatcaRouter.get('/client/:clientId', function (req, res) {
    	var pageJSON = "{}";
            pageJSON = require('./activities/fatca/fatca-client.json');
        res.send(pageJSON);
    });

    fatcaRouter.get('/client/:clientId/exportexcel', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=test.txt');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });

    fatcaRouter.get('/portfolio', function (req, res) {
    	var pageJSON = "{}";
            pageJSON = require('./activities/fatca/fatca-portfolio.json');
        res.send(pageJSON);
    });

    fatcaRouter.get('/bulk', function (req, res) {
    	var pageJSON = "{}";
            pageJSON = require('./activities/fatca/bulk-fatca.json');
        res.send(pageJSON);
    });

    fatcaRouter.post('/bulk/approveFatcaCases', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./activities/fatca/bulk-fatca-approve.json');
        res.send(pageJSON);
    });

    fatcaRouter.get('/lookUpCRMID', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./search/crm/crm-name-search.json');
        res.send(pageJSON);
    });

    app.use('/api/fatca', fatcaRouter);
};
