module.exports = function (app) {
    var express = require('express'),
        dealcentreRouter = express.Router();

    dealcentreRouter.get('/home', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/home.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get('/home/:dealId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/home.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get('/feebooking/:dealId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/fee-booking.json');
        res.send(pageJSON);
    });
    dealcentreRouter.get('/feebooking', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/fee-booking.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get(':dealId/feebooking', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/fee-booking.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get('/conflictclearance/:dealId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/cms.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get(':dealId/conflictclearance', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/cms.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get('/nameclearance/:dealId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/name-clearance.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get(':dealId/nameclearance', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/name-clearance.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get('/nameclearance/exportToExcel/:dealId', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=NameClearanceReport_23_Jul_2016.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });

    dealcentreRouter.get('/calendar/:dealId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/calendar.json');
        res.send(pageJSON);
    });

    dealcentreRouter.post('/activitydashboard/:dealId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/activitydashboard.json');
        res.send(pageJSON);
    });

	dealcentreRouter.get('/calendar/:dealId/:id', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/calendar-item.json');
        res.send(pageJSON);
    });

    dealcentreRouter.get('/calendar', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/calendar.json');
        res.send(pageJSON);
    });

    dealcentreRouter.post('/calendar', function (req, res) {
        res.send({
            'data': 'success'
        });
    });

    dealcentreRouter.put('/calendar/:dealId/:id', function (req, res) {
        res.send({
            'data': 'success'
        });
    });

    dealcentreRouter.delete('/calendar/:dealId/:id', function (req, res) {
        res.send({
            'data': 'success'
        });
    });

    dealcentreRouter.get('/document', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/documents.json');
        res.send(pageJSON);
    });

    dealcentreRouter.post('/document/:dealId', function (req, res) {
        res.send({
          "header": "SUCCESS",
          "dealDocument": [{
                "operation": "NO_CHANGE",
                "transactionId": "20160511123216362000040",
                "docId": "20160511100390194",
                "docCategory": "PP",
                "userPsid": "1193293",
                "userName": "Karungi,Carol",
                "updatedDt": 1462941135277,
                "overWriteFlag": true,
                "fileName": "Sample_File_1.txt",
                "dealId": "20160405100388930",
                "updatedDtValue": 1462941135277,
                "userDisplay": "1193293 - Karungi,Carol",
                "desc": "Sample_File_1.txt",
                "docType": "txt",
                "maxSizeExceed": false,
                "dealName": "PSR CMS lock issue",
                "activityList": []
            }]
        });
    });

	dealcentreRouter.post('/document/overwrite/:dealId', function (req, res) {
		res.send({
		  "header": "SUCCESS",
		  "dealDocument": [{
				"operation": "NO_CHANGE",
				"transactionId": "20160511123216362000040",
				"docId": "20160511100390194",
				"docCategory": "PP",
				"userPsid": "1193293",
				"userName": "Karungi,Carol",
				"updatedDt": 1462941135277,
				"overWriteFlag": false,
				"fileName": "Sample_File_1.txt",
				"dealId": "20160405100388930",
				"updatedDtValue": 1462941135277,
				"userDisplay": "1193293 - Karungi,Carol",
				"desc": "Sample_File_1.txt",
				"docType": "txt",
				"maxSizeExceed": false,
				"dealName": "PSR CMS lock issue",
				"activityList": []
			}]
		});
	});

    dealcentreRouter.put('/document/properties/:docId', function (req, res) {
        res.send({
            'data': 'success'
        });
    });

    dealcentreRouter.delete('/document/:docId', function (req, res) {
        res.send({
            'data': 'success'
        });
    });

    dealcentreRouter.post('/document/upload/:docId', function (req, res) {
        res.send({
            'data': 'success'
        });
    });

    dealcentreRouter.get('/document/url', function (req, res) {
        res.send({
			'filenetURL': '/api/accountplans/audit/auditexcel'
		});
    });

    dealcentreRouter.get('/rmwb-push-notification/subscribe', function (req, res) {
        var pageJSON = require('./calendar/Live_Feed_Data.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    dealcentreRouter.get('/activitydashboard/:dealId', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./dealcentre/workspace/activity-dashboard.json');
        res.send(pageJSON);;
    });

    app.use('/api/dealcentre/workspace', dealcentreRouter);
};
