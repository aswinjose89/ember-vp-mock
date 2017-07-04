module.exports = function (app) {
    var express = require('express'),
        dpRouter = express.Router();

    dpRouter.get('/home/pipeline', function (req, res) {
        var pageJSON = require('./deal-pipeline/home.json');
        res.send(pageJSON);
    });

    dpRouter.get('/home/summary', function (req, res) {
        var pageJSON = require('./deal-pipeline/home.json');
        res.send(pageJSON);
    });

    dpRouter.get('/dealCharts', function (req, res) {
        var pageJSON = require('./deal-pipeline/chart.json');
        res.send(pageJSON);
    });
    dpRouter.get('/dealPipelineGrids', function (req, res) {
        var pageJSON = require('./deal-pipeline/grid.json');
        res.send(pageJSON);
    });
    dpRouter.get('/group', function (req, res) {
        var pageJSON = require('./deal-pipeline/group-search.json');
        res.send(pageJSON);
    });
    dpRouter.get('/clone', function (req, res) {
        var pageJSON = require('./deal-pipeline/clone.json');
        res.send(pageJSON);
    });
    dpRouter.get('/retag', function (req, res) {
        var pageJSON = require('./deal-pipeline/retag.json');
        res.send(pageJSON);
    });
    dpRouter.get('/client', function (req, res) {
        var pageJSON = require('./deal-pipeline/client-search.json');
        res.send(pageJSON);
    });
    dpRouter.get('/dealPipelineForm', function (req, res) {
        //Pass the respective product type when statring the mock. example ember s cf for corporate finance.
        var productType = 'cf';
        if (process.argv && process.argv[3]) {
            productType = process.argv[3];
        }
        var pageJSON = require('./deal-pipeline/deal-pipeline-' + productType + '.json');
        //pageJSON.dealPipeline.id = req.params.id;
        res.send(pageJSON);
    });

    dpRouter.get('/view/dealPipelineForm', function (req, res) {
        //Pass the respective product type when statring the mock. example ember s cf for corporate finance.
        var productType = 'cf';
        if (process.argv && process.argv[3]) {
            productType = process.argv[3];
        }
        var pageJSON = require('./deal-pipeline/deal-pipeline-' + productType + '.json');
        //pageJSON.dealPipeline.id = req.params.id;
        res.send(pageJSON);
    });

    dpRouter.get('/hos/get', function (req, res) {
        var pageJSON = require('./deal-pipeline/hos.json');
        //pageJSON.dealPipeline.id = req.params.id;
        res.send(pageJSON);
    });
    dpRouter.post('/privateFMDealTeam', function (req, res) {
        var pageJSON = require('./deal-pipeline/fm-private-deal.json');
        //pageJSON.dealPipeline.id = req.params.id;
        res.send(pageJSON);
    });
    dpRouter.get('/cmsCheck', function (req, res) {
        var pageJSON = require('./deal-pipeline/cms-check.json');
        //pageJSON.dealPipeline.id = req.params.id;
        res.send(pageJSON);
    });
    dpRouter.get('/hos/contact', function (req, res) {
        var pageJSON = require('./deal-pipeline/contact-detail.json');
        //pageJSON.dealPipeline.id = req.params.id;
        res.send(pageJSON);
    });
    dpRouter.get('/periodicFeeTypeSearch', function (req, res) {
        var pageJSON = require('./deal-pipeline/periodic-fee-list.json');
        res.send(pageJSON);
    });
    dpRouter.get('/dpPicklist', function (req, res) {
        var pageJSON = require('./deal-pipeline/dp-picklist.json');
        res.send(pageJSON);
    });
    dpRouter.post('/cctMembers/list', function (req, res) {
        var pageJSON = require('./deal-pipeline/team-member.json');
        res.send(pageJSON);
    });
    dpRouter.post('/nonCctMembers/search', function (req, res) {
        var pageJSON = require('./deal-pipeline/noncct-member.json');
        res.send(pageJSON);
    });
    dpRouter.get('/additionalClient', function (req, res) {
        var pageJSON = require('./deal-pipeline/additional-clients.json');
        res.send(pageJSON);
    });
    dpRouter.post('/pfam/search', function (req, res) {
        var pageJSON = require('./deal-pipeline/pfam-names.json');
        res.send(pageJSON);
    });
    dpRouter.get('/excel/export/:dealType', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=dealpipeline.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });
    dpRouter.get('/dealsToLink', function (req, res) {
        var pageJSON = require('./deal-pipeline/deals-to-link.json');
        res.send(pageJSON);
    });
    dpRouter.get('/searchDealsToLink', function (req, res) {
        var pageJSON = require('./deal-pipeline/search-deals-to-link.json');
        res.send(pageJSON);
    });
    dpRouter.get('/viewAuditTrail', function (req, res) {
        var pageJSON = require('./deal-pipeline/view-audit-trail.json');
        res.send(pageJSON);
    });
    dpRouter.get('/populateTbFxTeam', function (req, res) {
        var pageJSON = require('./deal-pipeline/populate-tb-fx-team.json');
        res.send(pageJSON);
    });
    dpRouter.get('/dealsToLinkList', function (req, res) {
        var pageJSON = require('./deal-pipeline/deals-to-link-list.json');
        res.send(pageJSON);
    });
    dpRouter.post('/attachment/upload', function (req, res) {
        var pageJSON = require('./deal-pipeline/attachment.json');
        res.send(pageJSON);
    });
    dpRouter.post('/dealOwner/search', function (req, res) {
        var pageJSON = require('./deal-pipeline/deal-owner.json');
        res.send(pageJSON);
    });
    dpRouter.post('/tbImplementationManager/search', function (req, res) {
        var pageJSON = require('./deal-pipeline/implementation-manager.json');
        res.send(pageJSON);
    });
    dpRouter.get('/tbUser/search', function (req, res) {
        var pageJSON = require('./deal-pipeline/tbUser.json');
        res.send(pageJSON);
    });
    dpRouter.get('/checkDuplicateDealName', function (req, res) {
        var pageJSON = require('./deal-pipeline/unique-deal.json');
        res.send(pageJSON);
    });
    app.use('/api/deal', dpRouter);
};