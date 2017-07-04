module.exports = function (app) {
    var express = require('express'), clientLookupRouter = express.Router();

    clientLookupRouter.get('/clients/search', function (req, res) {
        res.send(require('./client/clients.json'));
    });

    clientLookupRouter.get('/fatca/fatcaClientSearch', function (req, res) {
        res.send(require('./search/fatca-client/fatca-client-search.json'));
    });
    clientLookupRouter.get('/entitlement/common', function (req, res) {
         res.send({"edit": true, "view": true});
    });
    app.use('/api/core', clientLookupRouter);
};
