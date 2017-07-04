module.exports = function (app) {
    var express = require('express'),
        mockServerRouter = express.Router();

    mockServerRouter.get('/rps', function (req, res) {
        var rps = require('./rpdm/rps.json');
        if(JSON.parse(req.query.rpSearchReq).rpCategory === "ENTITY"){
            rps = require('./rpdm/rps-entity.json');
        }
        res.json(rps);
    });
    mockServerRouter.get('/rps', function (req, res) {
        var rps = require('./rpdm/rps.json');
        res.json(rps);
    });
    mockServerRouter.get('/countries', function (req, res) {
        var rp = require('./rpdm/countries.json');
        res.json(rp);
    });
    mockServerRouter.get('/clients', function (req, res) {
        var rp = require('./rpdm/clients.json');
        res.json(rp);
    });
    mockServerRouter.get('/typerefvalues', function (req, res) {
        var rp = require('./rpdm/typerefvalues.json');
        res.json(rp);
    });
    mockServerRouter.post('/rp', function (req, res) {
        res.status(200);
        var rp = require('./rpdm/rp.json');
        rp.rp.rpID = Math.random().toString(36).substring(2, 15);
        res.json(rp);
    });
    mockServerRouter.put('/rp/:rpID', function (req, res) {
        res.status(200);
        res.json({success: true});
    });
    mockServerRouter.delete('/rp/:rpID', function (req, res) {
        res.status(200);
        res.json({success: true});
    });

    mockServerRouter.get('/reports', function (req, res) {
      var rps = require('./rpdm/reports.json');
      res.json(rps);
    });
    mockServerRouter.get('/tasks', function (req, res) {
      var rps = require('./rpdm/tasks.json');
      res.json(rps);
    });

    mockServerRouter.get('/rpclients', function (req, res) {
        res.status(200);
        res.json({rpclients: { "id": 1}});
    });

    app.use('/api/rpdm', mockServerRouter);
};
