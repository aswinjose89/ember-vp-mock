module.exports = function (app) {
    var express = require('express'),
        clientsHomeRouter = express.Router();

    clientsHomeRouter.get('/subsidiaries/:groupId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./clients/subsidiaries.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    clientsHomeRouter.get('/subsidiaries', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./clients/subsidiaries.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    clientsHomeRouter.put('/subsidiaries/:subsidiaryId', function (req, res) {
    	console.log("Subsidiary put request");
        res.send({
            'mock-server': {
                id: req.params.subsidiaryId
            }
        });
    });

    app.use('/api/clienthome/group', clientsHomeRouter);    
};
