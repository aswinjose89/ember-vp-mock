module.exports = function(app) {
    var express = require('express'),
        dpRouter = express.Router(),
        fs = require('fs'),
        path = require('path');

    /*
       -------------------------API Calls for Deal checkliststarts here-----------------------------------------
        */

    //checklist data payload for CF and CM
    dpRouter.get('/data/:id', function(req, res) {
        var pageJSON;

        pageJSON = require('./deal-checklist/deal-checklist-master-modified.json');
        //pageJSON.dealChecklist.dealIdRef = req.params.id;
        pageJSON.dealChecklist.checklistRefId = req.params.id;
        pageJSON.dealChecklist.checklistInformation.dealId = req.params.id;

        // for CM module of deal-checklist
        if (req.params.id.indexOf('CM') > -1) {
            pageJSON = require('./deal-checklist/CM_ChecklistDataPayload_V1.3.json');
            pageJSON.dealChecklistCm.checklistRefId = req.params.id;
        }

        res.send(pageJSON);
    });

    //add new checklist API endpoint
    dpRouter.get('/data/create/:id', function(req, res) {
        var pageJSON;

        pageJSON = require('./deal-checklist/create.json');
        //pageJSON.dealChecklist.dealIdRef = req.params.id;
        pageJSON.checklistRefId = req.params.id;

        // for CM module of deal-checklist
        if (req.headers.referer.indexOf('deal-list-cm') > -1) {

        }

        res.send(pageJSON);
    });

    //save-draft
    dpRouter.put('/data/:id', function(req, res) {
        var pageJSON;
        pageJSON = require('./deal-checklist/deal-checklist-master-modified.json');
        pageJSON.dealChecklist.checklistRefId = req.params.id;

        // for CM module of deal-checklist
        if (req.params.id.indexOf('CM') > -1) {
            pageJSON = require('./deal-checklist/CM_ChecklistDataPayload_V1.3.json');
            pageJSON.dealChecklistCm.checklistRefId = req.params.id;
        }

        // req.body.dealChecklist.dealIdRef=null;
        setTimeout(function() {
            res.send(req.body);
        }, Math.floor(Math.random() * 1500));

    });

    //submit
    dpRouter.put('/data/submit/:id', function(req, res) {

        // for CM module of deal-checklist
        if (req.params.id.indexOf('CM') > -1) {
            //pageJSON = require('./deal-checklist/CM_ChecklistDataPayload_V1.3.json');
            //pageJSON.dealChecklistCm.checklistRefId = req.params.id;
            //
            for(var accessControl=0;accessControl<req.body.dealChecklistCm.accessControls.length;accessControl++){
                
                req.body.dealChecklistCm.accessControls[accessControl].referbackEnabled = null;
                req.body.dealChecklistCm.accessControls[accessControl].recallEnabled = "true";
                req.body.dealChecklistCm.accessControls[accessControl].cancelEnabled = "true";
                req.body.dealChecklistCm.accessControls[accessControl].saveDraftEnabled = null;
                req.body.dealChecklistCm.accessControls[accessControl].submitEnabled = null;
                req.body.dealChecklistCm.accessControls[accessControl].approveEnabled = null;
            }
            /*req.body.dealChecklistCm.accessControl.forEach(function(accessControl){

                accessControl.referbackEnabled = null;
                accessControl.recallEnabled = "true";
                accessControl.cancelEnabled = "true";
                accessControl.saveDraftEnabled = null;
                accessControl.submitEnabled = null;
                accessControl.approveEnabled = null;
            })*/
        } else {
            req.body.dealChecklist.checklistInformation.checklistStatus = "Under Review";

            //deal-team-leader
            /* req.body.dealChecklist.checklistInformation.readOnly= true;
                    req.body.dealChecklist.accessControl.referbackEnabled ="true";
                    req.body.dealChecklist.accessControl.recallEnabled = null;
                    req.body.dealChecklist.accessControl.cancelEnabled = null;
                    req.body.dealChecklist.accessControl.saveDraftEnabled = null;
                    req.body.dealChecklist.accessControl.submitEnabled = null;
                    req.body.dealChecklist.accessControl.approveEnabled = "true";      
            */
            //normal-user 
            req.body.dealChecklist.checklistInformation.readOnly = false;
            req.body.dealChecklist.accessControl.referbackEnabled = null;
            req.body.dealChecklist.accessControl.recallEnabled = "true";
            req.body.dealChecklist.accessControl.cancelEnabled = "true";
            req.body.dealChecklist.accessControl.saveDraftEnabled = null;
            req.body.dealChecklist.accessControl.submitEnabled = null;
            req.body.dealChecklist.accessControl.approveEnabled = null;


            //add workflow history record
            req.body.dealChecklist.checklistInformation.workflowHistories.push({
                "workflowId": "3184012",
                "workflowFields": [{
                    "labelId": "userName",
                    "labelName": "User Name",
                    "description": "Jean-Pierre Benichou"
                }, {
                    "labelId": "action",
                    "labelName": "Action",
                    "description": "Submit"
                }, {
                    "labelId": "date",
                    "labelName": "Date",
                    "description": Date.now()
                }, {
                    "labelId": "beforeStatus",
                    "labelName": "Before Status",
                    "description": "Under Review"
                }, {
                    "labelId": "afterStatus",
                    "labelName": "After Status",
                    "description": "Queried"
                }, {
                    "labelId": "comment",
                    "labelName": "Comment",
                    "description": "Checklist need further information on last section. Recalling to update the checklist."
                }]
            })
        }



        setTimeout(function() {
            res.send(req.body);
        }, Math.floor(Math.random() * 2000));
    });

    dpRouter.put('/data/approve/:id', function(req, res) {
        req.body.dealChecklist.checklistInformation.checklistStatus = "Completed";
        req.body.dealChecklist.checklistInformation.readOnly = true;

        req.body.dealChecklist.accessControl.cancelEnabled = null;
        req.body.dealChecklist.accessControl.saveDraftEnabled = null;
        req.body.dealChecklist.accessControl.submitEnabled = null;
        req.body.dealChecklist.accessControl.recallEnabled = null;
        req.body.dealChecklist.accessControl.approveEnabled = null;
        req.body.dealChecklist.accessControl.referbackEnabled = null;

        setTimeout(function() {
            res.send(req.body);
        }, Math.floor(Math.random() * 2000));
    });

    dpRouter.put('/data/recall/:id', function(req, res) {
        req.body.dealChecklist.checklistInformation.checklistStatus = "Queried";
        req.body.dealChecklist.checklistInformation.readOnly = false;

        req.body.dealChecklist.accessControl.cancelEnabled = "true";
        req.body.dealChecklist.accessControl.saveDraftEnabled = "true";
        req.body.dealChecklist.accessControl.submitEnabled = "false";
        req.body.dealChecklist.accessControl.recallEnabled = null;
        req.body.dealChecklist.accessControl.approveEnabled = null;
        req.body.dealChecklist.accessControl.referbackEnabled = null;

        setTimeout(function() {
            res.send(req.body);
        }, Math.floor(Math.random() * 2000));
    });

    dpRouter.put('/data/referback/:id', function(req, res) {
        req.body.dealChecklist.checklistInformation.checklistStatus = "Queried";
        req.body.dealChecklist.checklistInformation.readOnly = false;

        req.body.dealChecklist.accessControl.approveEnabled = "true";
        req.body.dealChecklist.accessControl.cancelEnabled = null;
        req.body.dealChecklist.accessControl.saveDraftEnabled = null;
        req.body.dealChecklist.accessControl.submitEnabled = null;
        req.body.dealChecklist.accessControl.recallEnabled = null;
        req.body.dealChecklist.accessControl.referbackEnabled = null;

        setTimeout(function() {
            res.send(req.body);
        }, Math.floor(Math.random() * 2000));
    });

      dpRouter.put('/data/complete/:id', function(req, res) {
        req.body.dealChecklist.checklistInformation.checklistStatus = "Completed";
        req.body.dealChecklist.checklistInformation.readOnly = false;

        req.body.dealChecklist.accessControl.approveEnabled = null;
        req.body.dealChecklist.accessControl.cancelEnabled = null;
        req.body.dealChecklist.accessControl.saveDraftEnabled = null;
        req.body.dealChecklist.accessControl.submitEnabled = null;
        req.body.dealChecklist.accessControl.recallEnabled = null;
        req.body.dealChecklist.accessControl.referbackEnabled = null;
        req.body.dealChecklist.accessControl.completeEnabled = null;

        setTimeout(function() {
            res.send(req.body);
        }, Math.floor(Math.random() * 2000));
    });

    //metadata for CF and CM
    dpRouter.get('/metadata/:id', function(req, res) {
        var pageJSON;

        pageJSON = require('./deal-checklist/MetaDataPayload_V1.3.json');
        pageJSON.metaDataPayload.dealIdRef = req.params.id;

        // for CM module of deal-chekclist
        if (req.params.id.indexOf('CM') > -1) {
            pageJSON = require('./deal-checklist/CM_MetaDataPayload_V1.0.json');
            pageJSON.metaDataPayload.dealIdRef = req.params.id;

        }
        res.send(pageJSON);
    });


    dpRouter.get('/deal/documents', function(req, res) {
        var pageJSON = require('./deal-checklist/linked-files.json');
        res.send(pageJSON);
    });

    dpRouter.get('/deal/documents/download/:doc_Id', function(req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=DealCheckListSampleFile.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });

    dpRouter.post('/deal/documents/upload/:deal_Id', function(req, res) {
        res.setHeader('Access-Control-Origin', '*');
        var myFunction = function() {
            res.send({
                data: "success",
                result: {
                    id: Math.floor(Math.random() * 1000100001)
                }
            });
        }
        setTimeout(myFunction, Math.floor(Math.random() * 2000));
    });

    //download pdf
    dpRouter.get('/report/:id', function(req, res) {

        var filePath = "/deal-checklist/sample.pdf"

        res.setHeader('Content-disposition', 'attachment; filename=sample.pdf');
        res.setHeader('Content-type', 'application/pdf');

        res.sendFile(path.join(__dirname, '/deal-checklist', 'sample.pdf'));
    });

    //bulk-download
    dpRouter.get('/deal/documents/download/all/:id', function(req, res) {

        var filePath = "/deal-checklist/sample.pdf"

        res.setHeader('Content-disposition', 'attachment; filename=sample.zip');
        res.setHeader('Content-type', 'application/pdf');

        res.sendFile(path.join(__dirname, '/deal-checklist', 'sample.zip'));
    });

    //landing page 
    dpRouter.get('/data/index/:id', function(req, res) {
        var pageJSON;

        pageJSON = require('./deal-checklist/ChecklistLandingPage.json');
        pageJSON.dealChecklistIndex.dealIdRef = req.params.id;

        if (req.params.id.indexOf('CM') > -1) {
            pageJSON = require('./deal-checklist/ChecklistLandingPageCM.json');
            pageJSON.dealChecklistIndex.dealIdRef = req.params.id;
        }

        res.send(pageJSON);
    });

    dpRouter.get('/unlock/:id', function(req, res) {
        res.send({
            data: "success",
            result: {
                dealId: req.params.id
            }
        });
    });


    //------- end of API calls for Deal Checklist --------



    app.use('/api/checklist', dpRouter);
};