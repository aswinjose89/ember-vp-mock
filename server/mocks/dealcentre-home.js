module.exports = function (app) {
    var express = require('express'),
        dealcentreRouter = express.Router(); 

    dealcentreRouter.get('/home', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/home.json');
        res.send(pageJSON);
    });

    dealcentreRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    dealcentreRouter.get('/kpi', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/kpi.json');
        
        res.send(pageJSON);
    });

    dealcentreRouter.get('/monthlyChart', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/monthly-pipeline.json');
        
        res.send(pageJSON);
    });

    dealcentreRouter.get('/grid', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/monthly-pipeline-grid.json');
        
        res.send(pageJSON);
    });

    dealcentreRouter.get('/dcDealList', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/deal-by-stage.json');
        
        res.send(pageJSON);
    });

    dealcentreRouter.put('/dcDealList/:id', function (req, res) {
        res.status(200);
        res.json('{}');
    });

    dealcentreRouter.get('/dealTeam', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/dealTeam.json');
        
        res.send(pageJSON);
    });

    dealcentreRouter.get('/dcDealReferrals', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/referral.json');
        
        res.send(pageJSON);
    });


    dealcentreRouter.get('/dcDealKanbanView', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/deal-stage-kanban.json');
        res.send(pageJSON);    
    });
            
    dealcentreRouter.delete('/favourite/:dealId', function (req, res) {
        res.status(200);
        res.json('{}');
    });

    dealcentreRouter.post('/favourite', function (req, res) {
        res.status(200);
        res.json( {
                id: Date.now(),
                psId: "1511946",
                version: "1511946",
                dealId: "151194623534534534",
                dealName: "More 2 Test Deal2",
                activityId: "a1511946",
                entityId: "e1511946",
                entityName: "entity-name 1511946",
                entityType: "C",
                subProfileId: '1',
                hasWorkspaceAccess: false
            });
    });

    dealcentreRouter.get('/favourite', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/favourites.json');
        
        res.send(pageJSON);
    });

    dealcentreRouter.get('/deals/top', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./dealcentre/topDeals.json');
        
        res.send(pageJSON);
    });

    dealcentreRouter.post('/workspace/document/:deal_Id', function (req, res) {
        var randomNumber = Math.floor(Math.random() * 2);
        var requestObj = req.body;
        var responseObj = {
              "dealDocument": {
                "desc": requestObj.desc,
                "fileName": requestObj.fileName,
                "docId": "",
                "docCategory": requestObj.docCategory,
                "userPsid": "1157605",
                "dealId": requestObj.dealId,
                "overWriteFlag":false
              }
            }
        if(requestObj.docId){
            responseObj.dealDocument.docId=requestObj.docId;
            responseObj.dealDocument.overWriteFlag=true;
        }else{
            responseObj.dealDocument.docId=Math.floor(Math.random()*1000100001);
            responseObj.dealDocument.overWriteFlag=randomNumber===1?false:true;
        }
        var myFunction = function(){
           res.send(responseObj);
        }
        setTimeout(myFunction, Math.floor(Math.random()*1000));
    });        
       

    app.use('/api/dealcentre', dealcentreRouter);    
};
