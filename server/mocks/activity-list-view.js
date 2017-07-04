module.exports = function (app) {
    var express = require('express'),
    mockServerRouter = express.Router();
    mockServerRouter.post('/notifications/inbox/tasks/rmwb/all', function (req, res) {
        var limit = 20,
            firstIndex = (parseInt(req.body.pagination.page) - 1) * limit,
            lastIndex = (firstIndex + limit) - 1,
            activityList = null, data = null;
        activityList = getDummyData(firstIndex, lastIndex);
        data = {
            "meta" : { totalRecords : 67 },
            "tasks" : activityList
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });

    mockServerRouter.post('/notifications/inbox/tasks/rmwb/my', function (req, res) {
        var limit = 20,
            firstIndex = (parseInt(req.body.pagination.page) - 1) * limit,
            lastIndex = (firstIndex + limit) - 1,
            activityList = null, data = null;
        activityList = getDummyData(firstIndex, lastIndex);
        data = {
            "meta" : { totalRecords : 67 },
            "tasks" : activityList
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });

    /*mockServerRouter.post('/inbox/tasks/rmwb/my?smartFilter=My%20Favourite&status=active&sortBy=SORTBYDUEDATE&selectedPanel=Overdue', function (req, res) {
        var limit = 20,
            firstIndex = (parseInt(req.body.pagination.page) - 1) * limit,
            lastIndex = (firstIndex + limit) - 1,
            activityList = null, data = null;
        activityList = getDummyData(firstIndex, lastIndex);
        data = {
            "meta" : { totalRecords : 11 },
            "tasks" : activityList
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });*/

    mockServerRouter.post('/notifications/event/activities/rmwb/all', function (req, res) {
        var limit = 20,
            firstIndex = (parseInt(req.body.pagination.page) - 1) * limit,
            lastIndex = (firstIndex + limit) - 1,
            activityList = null, data = null;
        activityList = getDummyData(firstIndex, lastIndex);
        data = {
            "meta" : { totalRecords : 786 },
            "events" : activityList
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });

    mockServerRouter.post('/notifications/event/activities/rmwb/my', function (req, res) {
        var limit = 20,
            firstIndex = (parseInt(req.body.pagination.page) - 1) * limit,
            lastIndex = (firstIndex + limit) - 1,
            activityList = null, data = null;
        activityList = getDummyData(firstIndex, lastIndex);
        Ember.Logger.log("activityList event my");
        Ember.Logger.log(activityList);
        data = {
            "meta" : { totalRecords : 67 },
            "events" : activityList
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });

    mockServerRouter.get('/activitiesSearch/processHistory', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./globalSearch/processHistory.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/notifications/event/processHistory/:id', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./globalSearch/processHistory.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/delegateSearches', function (req, res) {
        var pageJSON = require('./calendar/delegate-search.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/reasonCodes', function (req, res) {
        var pageJSON = require('./calendar/reason-code.json');
        res.send(pageJSON);
    });

    //For Release and Delegate
    mockServerRouter.post('/rmwb/cddadmin/getReleaseData', function (req, res) {
        var pageJSON = require('./calendar/reason-code-data.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    mockServerRouter.post('/rmwb/cddadmin/getDelegationData', function (req, res) {
        var pageJSON = require('./calendar/delegate-data.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });

    mockServerRouter.post('/rmwb/cddadmin/submitRelease', function (req, res) {
        res.contentType('application/json');
        res.status(200);
        res.json({"status": "success", "message": "Task Released"});
    });

    /*mockServerRouter.post('/rmwb/cddadmin/submitRelease', function (req, res) {
        res.contentType('application/json');
        res.status(200);
        res.json({"status": "error", "message": "URL is null"});
    });*/

    mockServerRouter.post('/rmwb/cddadmin/submitDelegate', function (req, res) {
        res.contentType('application/json');
        res.status(200);
        res.json({"status": "success", "message": "Task Delegated"});
    });

    /*mockServerRouter.post('/rmwb/cddadmin/submitDelegate', function (req, res) {
        res.contentType('application/json');
        res.status(200);
        res.json({"status": "error", "message": "Technical exception has occured while performing Delegate. Please contact TOM.PSS@sc.com"});
    });*/


    app.use('/api', mockServerRouter);
};

function getDummyData(firstIndex, lastIndex) {
    var i = firstIndex, activityList, activityLists = [], data;

    if (firstIndex < lastIndex) {
        for (; i <= lastIndex; i++) {
            activityList = {
                "eventId": "12378" + i,
                "activityName": "RMGICUpdate",
                "customerName": "Client Name " + i,
                "activityCreatedDate": 1438760020464,
                "activityDelegateTo": "Delegate To" + i,
                "activityStatusDate": 1438760020464,
                "eventStatus": "Event Status" + i,
                "activityId": "A04R" + i,
                "activityOriginatedBy": "Activity Owner" + i,
                "eventStatusOwner": "Event Sta Own" + i,
                "inboxTaskId": "12378" + i,
                "taskStartDate": 1438760020464,
                "taskDueDate": 1438760020464, //1461307222837,//null, //1438760020464,//1461054356424,
                "activityDueDate": 1438760020464,
                "taskAction": "taskAction" + i,
                "taskAssignedDate": 1438760020464,
                "taskAssignedBy": "Task Assigned By" + i,
                "taskAssignedTo": "130252" + i,
                "taskDelegateTo": "130252" + i,
                "taskDelegatedFrom": "130252" + i,
                "taskName": "RMGICUpdate",
                "clientId": "123456",
                "groupId": "123456",
                "taskActionURL": "Task Action URL " + i,
                "taskType": "Task Type " + i,
                "actionStatus": "Action Status " + i
            }
            activityLists.push(activityList);
        }
    }
    return activityLists;
}
