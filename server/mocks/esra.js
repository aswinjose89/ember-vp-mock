module.exports = function (app) {
    var express = require('express');
    var esraRouter = express.Router();
    var bodyParser = require('body-parser');
    var i = 0;
    app.use(bodyParser.json());

    esraRouter.get('/dealHeaders/:dealId', function (req, res) {
        var pageJSON = require('./dealcentre/esra/deal-headers.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });

    esraRouter.get('/esraActivities/:dealId', function (req, res) {
        var pageJSON = require('./dealcentre/esra/deal-activity.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });

    esraRouter.get('/dealDetails', function (req, res) {
        var pageJSON = require('./dealcentre/esra/deal-details.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });

    esraRouter.put('/dealDetails/:dealId', function (req, res) {
        var pageJSON = require('./dealcentre/esra/deal-details-save.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.post('/deal/documents/upload/:dealId', function (req, res) {
        res.setHeader('Access-Control-Origin', '*');
        var myFunction = function () {
            res.send({
                data: "success",
                result: {
                    id: Math.floor(Math.random() * 1000100001)
                }
            });
        }
        setTimeout(myFunction, Math.floor(Math.random() * 2000));
    });
    esraRouter.get('/documents/download/:doc_Id', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=DealCheckListSampleFile.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });
    esraRouter.get('/assessmentDetails', function (req, res) {
        var pageJSON = require('./dealcentre/esra/esra-assessement-get-opa.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.put('/assessmentDetails/:dealId/refresh', function (req, res) {
        var pageJSON = require('./dealcentre/esra/esra-assessement-get-opa-refresh.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.put('/assessmentDetails/:dealId', function (req, res) {
        var pageJSON = require('./dealcentre/esra/esra-assessement-get-opa.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.get('/picklist', function (req, res) {
        var pageJSON = require('./dealcentre/esra/picklist.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.get('/workflowHistories', function (req, res) {
        var pageJSON = require('./dealcentre/esra/workflow-history.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.put('/assessmentDetails/:dealId/addSector', function (req, res) {
        var pageJSON = require('./dealcentre/esra/esra-assessement-get-opa-sector.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
        //res.status(404).end();
    });
    esraRouter.put('/assessmentDetails/:dealId/deleteSector', function (req, res) {
        var pageJSON = require('./dealcentre/esra/esra-assessement-get-opa-refresh.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.put('/workflowAction', function (req, res) {
        console.log('req.body', req.body.dealHeader)
        var pageJSON = require('./dealcentre/esra/workflow-action.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.post('/upload/:deal_Id', function (req, res) {
        res.setHeader('Access-Control-Origin', '*');
        var myFunction = function () {
            res.send({
                data: "success",
                result: {
                    id: Math.floor(Math.random() * 1000100001)
                }
            });
        }
        setTimeout(myFunction, Math.floor(Math.random() * 2000));
    });
    esraRouter.get('/assignees', function (req, res) {
        var pageJSON = require('./dealcentre/esra/assignee.json');
        res.send(pageJSON);
    });
    esraRouter.get('/signoffRequirements', function (req, res) {
        console.log('req.body', req.body.dealHeader)
        var pageJSON = require('./dealcentre/esra/signoff-details.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.put('/signoffRequirements/:id', function (req, res) {
        console.log('req.body', req.body.dealHeader)
        var pageJSON = require('./dealcentre/esra/signoff-details-save.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.get('/searchDealTeamMembers', function (req, res) {
        var pageJSON = require('./dealcentre/esra/search-users.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.get('/searchESRMApprovers', function (req, res) {
        var pageJSON = require('./dealcentre/esra/searchESRMApprovers.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.get('/dealTeamMembers?:id', function (req, res) {
        if (req.query.request) {
            var pageJSON = require('./dealcentre/esra/deal-details.json');
            res.header("Access-Control-Allow-Origin", "*");
            res.json({ "dealTeamMember": pageJSON.dealDetails.dealTeamMember });
        }
        else {
            var pageJSON = require('./dealcentre/esra/deal-team-members-all.json');
            res.header("Access-Control-Allow-Origin", "*");
            res.json(pageJSON);
        }
    });
    esraRouter.get('/attachments', function (req, res) {
        var pageJSON = require('./dealcentre/esra/deal-details.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ "attachment": pageJSON.dealDetails.attachment });
    });
    esraRouter.get('/unlock', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.json({ "unlock": true });
    });
    esraRouter.post('/signoffDetails', function (req, res) {
        var pageJSON = require('./dealcentre/esra/signoff-details-create.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.put('/signoffDetails/:dealId', function (req, res) {
        var pageJSON = require('./dealcentre/esra/signoff-details-update.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.json(pageJSON);
    });
    esraRouter.get('/audit?:id', function(req, res){
        var tabName = req.param('tabName').toLowerCase();
        console.log('tabName', tabName);
        var pageJSON = require('./dealcentre/esra/esra-audit-info.json');
        res.json(pageJSON);
    });
    app.use('/api/esra', esraRouter);
};
