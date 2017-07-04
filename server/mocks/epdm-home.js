module.exports = function (app) {
    var express = require('express'),
        epdmHomeRouter = express.Router();
	
	epdmHomeRouter.get('/clientAccountDetails', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/clientAccountDetails.json');
        
        res.send(pageJSON);
    });
    epdmHomeRouter.get('/userPreferences', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/filters.json');
        
        res.send(pageJSON);
    });
    epdmHomeRouter.get('/gam', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/gam.json');
        
        res.send(pageJSON);
    });
    epdmHomeRouter.get('/armCodes', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/arm-code.json');
        
        res.send(pageJSON);
    });
    epdmHomeRouter.get('/groupClient', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/group-client.json');
        
        res.send(pageJSON);
    });
    epdmHomeRouter.get('/clientManager', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/client-manager.json');
        
        res.send(pageJSON);
    });
    epdmHomeRouter.get('/productCodes', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/products.json');
        
        res.send(pageJSON);
    });
    epdmHomeRouter.get('/transactionDetails', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/transactionDetails.json');
        
        res.send(pageJSON);
    });

    epdmHomeRouter.get('/users', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./epdm/users.json');
        
        res.send(pageJSON);
    });

    epdmHomeRouter.post('/saveExcessPastDue', function (req, res) {
        res.send({message:"Success"});
    });
    app.use('/api/epdm', epdmHomeRouter);    
};
