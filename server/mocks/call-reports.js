module.exports = function(app) {
    var express = require('express'),
        appRouter = express.Router(),
        path = require('path');

    //Find Duplicate entries
    appRouter.get('/findduplicatecallreports', function(req, res) {
        var pageJSON = require('./call-reports/find-duplicate-call-reports.json');
        res.send(pageJSON);
    });

    //Find SCB events for drop down
    appRouter.get('/scbevents', function(req, res) {
        var pageJSON = require('./call-reports/scb-events.json');
        res.send(pageJSON);
    });

    //Find SCB events for drop down
    appRouter.get('/search/taggedclients', function(req, res) {
        var pageJSON = require('./call-reports/tagged-clients.json');
        res.send(pageJSON);
    });
    //picklist call for call reports
    appRouter.get('/picklist', function(req, res) {
        var pageJSON = require('./call-reports/call-reports-picklist.json');
        res.send(pageJSON);
    });

    //Find assigned to for drop down
    appRouter.get('/search/assignee', function(req, res) {
        var pageJSON = require('./call-reports/assigned-to.json');
        res.send(pageJSON);
    });

    //Find existing report details
    appRouter.get('/callreport/:id', function(req, res) {
        var pageJSON = require('./call-reports/call-report-'+ req.params.id  +'.json');
        res.send(pageJSON);
    });
    //modify new call report
    appRouter.put('/callreport/:id', function(req, res) {
        var pageJSON = require('./call-reports/call-report-'+ req.params.id  +'.json');
        res.send(pageJSON);
    });
    //save new call report
    appRouter.post('/callreport', function(req, res) {
        var pageJSON = require('./call-reports/call-report-2016231209129.json');
        res.send(pageJSON);
    });

    //to Find Scb participants
    appRouter.get('/search/participants', function(req, res) {
        var pageJSON = require('./call-reports/scb-participants.json');
        res.send(pageJSON);
    });

    //Find client participants for drop down
    appRouter.get('/contact/list', function(req, res) {
        var pageJSON = require('./call-reports/client-participants.json');
        res.send(pageJSON);
    });

    //Find Deal or project names for drop down
    appRouter.get('/search/entitleddeals', function(req, res) {
        var pageJSON = require('./call-reports/existing-deal-details.json');
        res.send(pageJSON);
    });


    appRouter.get('/attachment/download/:doc_Id', function(req, res) {
        res.setHeader('Content-disposition', 'attachment; filenameCallReportsSampleFile.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });

    //Find Duplicate entries
    appRouter.get('/followupTask', function(req, res) {
        var pageJSON = require('./call-reports/followupTask.json');
        res.send(pageJSON);
    });
    appRouter.get('/reopen/:id', function(req, res){
        var pageJSON = require('./call-reports/call-report-reopen.json');
        res.send(pageJSON);
    })

    appRouter.get('/export/:id/pdf', function(req, res) {
        res.setHeader('Content-disposition', 'attachment; sample=sample.pdf');
        res.setHeader('Content-type', 'application/pdf');
        res.sendFile(path.join(__dirname, '/call-reports', 'sample.pdf'));
    });

    appRouter.put('/task/delegate', function(req, res) {
        var pageJSON = require('./call-reports/followup-task.json');
        res.send(pageJSON);
    });

    appRouter.get('/audit', function(req, res) {
        var pageJSON = require('./call-reports/audit-info.json');
        res.send(pageJSON);
    });

    appRouter.post('/attachment/upload', function(req, res) {
        console.log('inside upload file');
        res.setHeader('Access-Control-Origin', '*');
        console.log('inside upload file');
        var myFunction = function() {
            res.send({
                data: "success",
                result: {
                    id: Math.floor(Math.random() * 1000100001)
                }
            });
        }
        setTimeout(myFunction, Math.floor(Math.random() * 10000));
    });

    appRouter.post('/mailondemand/:id',function(req, res) {
        res.send({
                data: "success"
            });
    });

    app.use('/api/callreports', appRouter);
};
