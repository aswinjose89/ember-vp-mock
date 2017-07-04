module.exports = function (app) {
    var express = require('express'),
        clientHomeRouter = express.Router();

    clientHomeRouter.get('/clientRevenues', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./clientView/country-region-server.json');
        res.send(pageJSON);
    });

    clientHomeRouter.get('/countryRegions', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./clientView/country-region.json');
        res.send(pageJSON);
    });

    clientHomeRouter.get('/clientActivities', function (req, res) {
        var pageJSON = "{}";

        pageJSON = require('./client/activities.json');

        res.send(pageJSON);
    });

    clientHomeRouter.get('/subsidiaries/group/:groupId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./group/subsidiaries.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    clientHomeRouter.get('/info/group', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./group/home.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    clientHomeRouter.get('/home/group', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./group/home.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    clientHomeRouter.get('/home/client', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./client/home.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    clientHomeRouter.get('/team/audit/group/:groupId', function (req, res) {
        var pageJSON = "{}";

        pageJSON = require('./entity/client-team/audit/client-team-audit.json');
        res.send(pageJSON);
    });

    clientHomeRouter.get('/team/audit/client/:clientId/:subProfileId', function (req, res) {
        var pageJSON = "{}";

        pageJSON = require('./entity/client-team/audit/client-team-audit.json');
        res.send(pageJSON);
    });

    clientHomeRouter.get('/team/client/clientTeams', function (req, res) {
        var pageJSON = "{}";

        pageJSON = require('./entity/client-team/client-team.json');
        res.send(pageJSON);
    });
    clientHomeRouter.get('/team/group/:groupId', function (req, res) {
        var pageJSON = "{}";

        pageJSON = require('./entity/client-team/client-team-group.json');
        res.send(pageJSON);
    });
    clientHomeRouter.get('/team/client/:clientId/:subProfileId', function (req, res) {
        var pageJSON = "{}";

        pageJSON = require('./entity/client-team/client-team.json');
        res.send(pageJSON);
    });

    clientHomeRouter.post('/team/add/group/:groupId', function (req, res) {
        var pageJSON = require('./entity/client-team/client-team-ADD.json');
        res.send(pageJSON);
    });

    clientHomeRouter.post('/team/add/client/:clientId/:subProfileId', function (req, res) {
        var pageJSON = require('./entity/client-team/client-team-ADD.json');
        res.send(pageJSON);
    });

    clientHomeRouter.delete('/team/delete/group/:groupId/:id', function (req, res) {
        var pageJSON = require('./entity/client-team/client-team-DELETE.json');
        res.send(pageJSON);
    });

    clientHomeRouter.delete('/team/delete/client/:clientId/:subProfileId/:id', function (req, res) {
        var pageJSON = require('./entity/client-team/client-team-DELETE.json');
        res.send(pageJSON);
    });

    clientHomeRouter.put('/team/update/group/:groupId/:id', function (req, res) {
        var pageJSON = require('./entity/client-team/client-team-ADD.json');
        res.send(pageJSON);
    });

    clientHomeRouter.put('/team/update/client/:clientId/:subProfileId/:id', function (req, res) {
        var pageJSON = require('./entity/client-team/client-team-ADD.json');
        res.send(pageJSON);
    });

    clientHomeRouter.get('/home/client/company-profile/client', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./client/company-profile/client.json');
        res.send(pageJSON);
    });

    clientHomeRouter.get('/company-profile/group/:groupId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./group/company-profile/all.json');
        res.send(pageJSON);
    });

    clientHomeRouter.get('/company-profile/client/:clientId/:subProfileId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./client/company-profile/all.json');
        res.send(pageJSON);
    });

    app.use('/api/entity', clientHomeRouter);
};
