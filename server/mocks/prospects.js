module.exports = function (app) {
    var express = require('express'),
        prospectsRouter = express.Router();

    prospectsRouter.get('/activities', function (req, res) {
        var pageJSON = require('./prospects/all.json');
        res.send(pageJSON);
    });

    prospectsRouter.get('/chart', function (req, res) {
        var pageJSON = require('./prospects/chart.json');
        res.send(pageJSON);
    });

    prospectsRouter.get('/list', function (req, res) {
        var pageJSON = require('./prospects/list.json');
        res.send(pageJSON);
    });

    prospectsRouter.get('/export/:viewType/:pageFilter/:entityId', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=prospects.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });

    prospectsRouter.get('/summary?:id', function (req, res) {
        var pageJSON = require('./prospects/summary.json');
        res.send(pageJSON);
    });

    prospectsRouter.post('/notes', function (req, res) {
        var pageJSON = require('./prospects/notes.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/notes/:id', function (req, res) {
        var pageJSON = require('./prospects/notes.json');
        res.send(pageJSON);
    });
    prospectsRouter.delete('/notes/:id', function (req, res) {
        var pageJSON = {};
        res.send(pageJSON);
    });
    prospectsRouter.post('/actions', function (req, res) {
        var pageJSON = require('./prospects/actions.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/actions/:id', function (req, res) {
        var pageJSON = require('./prospects/actions.json');
        res.send(pageJSON);
    });
    prospectsRouter.get('/actions/:id', function (req, res) {
        var pageJSON = require('./prospects/actions.json');
        res.send(pageJSON);
    });
    prospectsRouter.post('/teamDetails', function (req, res) {
        var pageJSON = require('./prospects/teamDetails.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/teamDetails/:id', function (req, res) {
        var pageJSON = require('./prospects/teamDetails.json');
        res.send(pageJSON);
    });
    prospectsRouter.delete('/teamDetails/:id/:id', function (req, res) {
        var pageJSON = {};
        res.send(pageJSON);
    });
    prospectsRouter.post('/disQualify', function (req, res) {
        var pageJSON = require('./prospects/details-save-response.json');
        pageJSON.detail.id = "201612231001297020";
        res.send(pageJSON);
    });
    prospectsRouter.post('/reOpenProspect', function (req, res) {
        var pageJSON = {};
        res.send(pageJSON);
    });
    prospectsRouter.get('/details/:id', function (req, res) {
        var pageJSON = require('./prospects/details-save-response-get.json');
        pageJSON.detail.id = "201612231001297020";
        res.send(pageJSON);
    });

    prospectsRouter.get('/deals', function (req, res) {
        var pageJSON = require('./prospects/deal-details.json');
        res.send(pageJSON);
    });

    prospectsRouter.post('/details/save', function (req, res) {
        var pageJSON = require('./prospects/details-save-response.json');
        res.send(pageJSON);
    });
    prospectsRouter.post('/details/detectDuplicates', function (req, res) {
        var pageJSON = require('./prospects/details-duplicate-response.json');
        res.send(pageJSON);
    });

    prospectsRouter.put('/details/:id/save', function (req, res) {
        var pageJSON = require('./prospects/details-update-response.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/details/:id/reOpenProspect', function (req, res) {
        var pageJSON = require('./prospects/details-update-response.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/details/:id/disQualify', function (req, res) {
        var pageJSON = require('./prospects/details-update-response.json');
        res.send(pageJSON);
    });
    prospectsRouter.delete('/details/:id', function (req, res) {
        res.send({ status: 'success' });
    });

    prospectsRouter.get('/picklist', function (req, res) {
        var pageJSON = require('./prospects/picklist.json');
        res.send(pageJSON);
    });
    prospectsRouter.get('/getUserInfo/:id', function (req, res) {
        var pageJSON = require('./prospects/getUserInfo.json');
        res.send(pageJSON);
    });
    prospectsRouter.get('/teamDetails', function (req, res) {
        var pageJSON = require('./prospects/prospectTeam.json');
        res.send(pageJSON);
    });
    prospectsRouter.get('/getISICInfo', function (req, res) {
        var pageJSON = require('./prospects/getISICInfo.json');
        res.send(pageJSON);
    });
    prospectsRouter.post('/attachment/add', function (req, res) {
        var pageJSON = require('./prospects/attachment.json');
        pageJSON.attachment.docId = Math.random();
        res.send(pageJSON);
    });
    prospectsRouter.get('/coverageTeam/search', function (req, res) {
        var pageJSON = require('./prospects/coverageTeam.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/details/:id/publishGroupToCreditMate', function (req, res) {
        var pageJSON = require('./prospects/details-save-response.json');
        pageJSON.detail.bcaStatus = 'PUBLISHED';
        pageJSON.detail.bcaDate = new Date().getTime();
        res.send(pageJSON);
    });
    prospectsRouter.put('/details/:id/getUpdatedProspectTeam', function (req, res) {
        var pageJSON = require('./prospects/details-save-response.json');
        res.send(pageJSON);
    });
    prospectsRouter.post('/details/:id/getUpdatedProspectTeam', function (req, res) {
        var pageJSON = require('./prospects/details-save-response.json');
        res.send(pageJSON);
    });
    prospectsRouter.post('/summary', function (req, res) {
        var pageJSON = require('./prospects/summary.json');
        res.send(pageJSON);
    });
    prospectsRouter.post('/summary/filters', function (req, res) {
        var pageJSON = require('./prospects/summary-filter.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/summary', function (req, res) {
        var pageJSON = require('./prospects/summary-update.json');
        res.send(pageJSON);
    });
    prospectsRouter.get('/audit', function (req, res) {
        var pageJSON = require('./prospects/auditInfo.json');
        res.send(pageJSON);
    });
    prospectsRouter.get('/getStaticInformation', function (req, res) {
        var pageJSON = require('./prospects/staticInfo.json');
        res.send(pageJSON);
    });
    prospectsRouter.get('/admin/prospectPicklistMappings?:id', function (req, res) {
        var qs = url.parse( req.url, true );
        qs.query.request = JSON.parse(qs.query.request);
        var page = qs.query.request.gridFilter.pagination.page;
        var size = 2;
        var type = qs.query.request.type;
        var pageJSON;
        if(type === "ISIC_RESTRICTED_FI"){
            pageJSON = require('./prospects/restricted-fi.json');
        } else if(type === "ISIC_RESTRICTED_FGO") {
            pageJSON = require('./prospects/restricted-fgo.json');
        } else if(type === "ISIC_RESTRICTED_CBPIV" || type === "ISIC_RESTRICTED_CIBPIV"){
            pageJSON = require('./prospects/restricted-piv.json');
        } else if(type === "CB_CNTRY"){
            pageJSON = require('./prospects/cb-operating.json');
        }else if(type === "CB_RESTRICTED_CNTRY"){
            pageJSON = require('./prospects/restricted-cb-operating.json');
        }else if(type === "NON_CB_CNTRY_MARKETS"){
            pageJSON = require('./prospects/non-market.json');
        }
        var retJSON = JSON.parse(JSON.stringify(pageJSON));
        retJSON.prospectPicklistMappings.id = Math.random();
        retJSON.prospectPicklistMappings.prospectPicklist.forEach (function(el, index){
            el.code = el.code +  index;
        });
        retJSON.prospectPicklistMappings.prospectPicklist = retJSON.prospectPicklistMappings.prospectPicklist.splice((page - 1) * size, ((page - 1) * size) + size);
        res.send(retJSON);
    });
    prospectsRouter.get('/admin/prospectPicklists', function (req, res) {
        var pageJSON = require('./prospects/isic-search.json');
        res.send(pageJSON);
    });
    prospectsRouter.put('/admin/prospectPicklistMappings/:id', function (req, res) {
        req.body.prospectPicklistMappings.id = req.params.id;
        req.body.prospectPicklistMappings.prospectPicklist.forEach(function(el, index){
            if(!el.id){
                el.id = Math.random();
            }
        });
        res.send(req.body)
    });
    app.use('/api/prospect', prospectsRouter);
};
