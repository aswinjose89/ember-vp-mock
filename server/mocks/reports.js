module.exports = function (app) {
	var express = require('express'),
    reportsRouter =express.Router();
		obieeRouter =express.Router();

    reportsRouter.get('/all', function (req, res) {
        var pageJSON = {};
        pageJSON = require('./reports/reports.json');
        res.send(pageJSON);
    });

    reportsRouter.get('/my-client-access', function (req, res) {
        var pageJSON = {};
        if (req.query.filter) {
            var filter = JSON.parse(req.query.filter);
            if(filter.filters && filter.filters.length > 2) {
                pageJSON = require('./reports/my-client-access-page-blank.json');
            } else if(filter.page == 1) {
                pageJSON = require('./reports/my-client-access-page-blank.json');
            } else {
                pageJSON = require('./reports/my-client-access-page-2.json');
            }
        }else {
            pageJSON = require('./reports/my-client-access-page-2.json');
        }
        setTimeout((function() {res.send(pageJSON)}), 100);
    });


    reportsRouter.get('/atw-access', function (req, res) {
        var pageJSON = {};
        if (req.query.filter) {
            var filter = JSON.parse(req.query.filter);
            if(filter.filters  && filter.filters.length > 2) {
                pageJSON = require('./reports/atw-access-page-blank.json');
            } else if(filter.page == 1) {
                pageJSON = require('./reports/atw-access-page-1.json');
            } else {
                pageJSON = require('./reports/atw-access-page-2.json');
            }
        }else {
            pageJSON = require('./reports/atw-access-page-2.json');
        }
        setTimeout((function() {res.send(pageJSON)}), 100);

    });

    reportsRouter.get('/deal-activity-status', function (req, res) {
        var pageJSON = {};
        if (req.query.filter) {
            var filter = JSON.parse(req.query.filter);
            if(filter.filters && filter.filters.length > 2) {
                pageJSON = require('./reports/deal-activity-status-report-blank.json');
            } else if(filter.page == 1) {
                pageJSON = require('./reports/deal-activity-status-report-1.json');
            } else {
                pageJSON = require('./reports/deal-activity-status-report-2.json');
            }
        }else {
            pageJSON = require('./reports/deal-activity-status-report-2.json');
        }
        setTimeout((function() {res.send(pageJSON)}), 100);
    });

    reportsRouter.get('/pam-activity-status', function (req, res) {
        var pageJSON = {};
        if (req.query.filter) {
            var filter = JSON.parse(req.query.filter);
            if(filter.filters && filter.filters.length > 2) {
                pageJSON = require('./reports/pam-activity-status-report-blank.json');
            } else if(filter.page == 1) {
                pageJSON = require('./reports/pam-activity-status-report-1.json');
            } else {
                pageJSON = require('./reports/pam-activity-status-report-2.json');
            }
        }else {
            pageJSON = require('./reports/pam-activity-status-report-2.json');
        }

        setTimeout((function() {res.send(pageJSON)}), 100);
    });

    reportsRouter.get('/volcker', function (req, res) {
        var pageJSON = {};
        if (req.query.filter) {
            var filter = JSON.parse(req.query.filter);
            if(filter.filters && filter.filters.length > 2) {
                pageJSON = require('./reports/volcker-blank.json');
            } else if(filter.page == 1) {
                pageJSON = require('./reports/volcker-report-1.json');
            } else {
                pageJSON = require('./reports/volcker-report-2.json');
            }
        }else {
            pageJSON = require('./reports/volcker-2.json');
        }
        setTimeout((function() {res.send(pageJSON)}), 100);
    });


    reportsRouter.get('/risk-view', function (req, res) {
        var pageJSON = {};
        if (req.query.filter) {
            var filter = JSON.parse(req.query.filter);
            if(filter.filters  && filter.filters.length > 2) {
                pageJSON = require('./reports/risk-view-report-page-blank.json');
            } else if(filter.page == 1) {
                pageJSON = require('./reports/risk-view-report-page-1.json');
            } else {
                pageJSON = require('./reports/risk-view-report-page-2.json');
            }
        }else {
            pageJSON = require('./reports/risk-view-report-page-2.json');
        }

        setTimeout((function() {res.send(pageJSON)}), 100);

    });

    reportsRouter.get('/arm-code', function (req, res) {
        var pageJSON = {};
        pageJSON = require('./reports/arm-code.json');
        setTimeout((function() {res.send(pageJSON)}), 100);
    });

    reportsRouter.get('/risk-view/export', function (req, res) {
        var message = 'Your report is created successfully. It will be notified by inbox message.'
        res.json({ message: message });
    });

    reportsRouter.put('/:rpID', function (req, res) {
        res.status(200);
        res.json('{}');
    });

	reportsRouter.get('/list', function (req, res) {
		var pageJSON = {};
		pageJSON = require('./reports/list.json');
		res.send(pageJSON);
	});

	reportsRouter.get('/recent', function (req, res) {
		var pageJSON = {};
		pageJSON = require('./reports/recent.json');
		setTimeout((function() {res.send(pageJSON)}), 100);
	});

    reportsRouter.delete('/recent', function (req, res) {
        res.status(200);
        res.json('{}');
    });

    reportsRouter.get('/favourites', function (req, res) {
        var pageJSON = {};
        pageJSON = require('./reports/favourites.json');
        setTimeout((function() {res.send(pageJSON)}), 100);
    });

    reportsRouter.post('/favourites', function (req, res) {
        res.status(200);
        res.json('{}');
    });

    reportsRouter.delete('/favourites/:rpID', function (req, res) {
        res.status(200);
        res.json('{}');
    });

    reportsRouter.get('/shared', function (req, res) {
        var pageJSON = {};
        pageJSON = require('./reports/shared.json');
        setTimeout((function() {res.send(pageJSON)}), 100);
    });

    reportsRouter.get('/saved', function (req, res) {
        var pageJSON = {};
        pageJSON = require('./reports/saved.json');
        setTimeout((function() {res.send(pageJSON)}), 100);
    });

    reportsRouter.delete('/saved/:rpID', function (req, res) {
        res.status(200);
        res.json('{}');
    });

    reportsRouter.get('/mstrAuth', function (req, res) {
        res.send("SESSION@12345");
    });


	app.use('/api/reports', reportsRouter);

  obieeRouter.get('/auth/getOBIEESession/:reportName', function (req, res) {
        res.json({
            "nqID": "0qmkpl0asekc8mar7jelbh7vic5ple5rta810lkjh24hgb6r",
            "success": true
        });
        // res.status(500);
        // res.json({
        //     "errors": [
        //         {
        //             "id": "4b18bd89-6d5c-4a74-b2df-5633902263a2",
        //             "status": "401",
        //             "code": "SSO-OBIEE-1002",
        //             "title": "Unauthorized",
        //             "detail": "Not Access Privilege to OBIEE Project"
        //         }
        //     ]
        // });
    });

  app.use('/api/', obieeRouter);
};
