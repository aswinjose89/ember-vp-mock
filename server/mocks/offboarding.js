module.exports = function(app) {
    var express = require('express'),
        mockServerRouter = express.Router(),
        clientId = 2000,
        groupId = 3000,
        selectedId = 4000;

    mockServerRouter.get('/staticInfo', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/static-data.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/user/roles', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/user-role.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/clients', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/user-client.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/validate/search', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/search-entity.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/validate/details', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/search-exception.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/validate/inflightEntities', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/inflight-entity.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON['offboarding/inflightEntity'][0]));
            item.id = i + 1;
            item.entityId = item.id + 300;
            item.activityId = item.id + 100;
            items.push(item)
        }
        pageJSON["offboarding/inflightEntity"] = items;
        res.send(pageJSON);


    });

    mockServerRouter.post('/validate/exposureEntities', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/exposure-entity.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/validate/borrowingClients', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/borrowing-client.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/caseIds', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/case-id.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/getLocations', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-locations.json');
        for (var i = 0; i < pageJSON.clientLocations.length; i++)
            pageJSON.clientLocations[i].id = req.query.clientId + "-" + pageJSON.clientLocations[i].id;
        res.send(pageJSON);
    });


    mockServerRouter.get('/task/getLocations', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/task-client-locations.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/clients/accounts', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-accounts.json');
        for (var i = 0; i < pageJSON.clientLocationAccounts.length; i++) {
            pageJSON.clientLocationAccounts[i].id = req.query.locationId + "-ACC-" + (i + 1);
            pageJSON.clientLocationAccounts[i].changeKey = req.query.locationId + "-ACC-" + (i + 1);
        }
        pageJSON['offboarding/clientLocationAccounts'] = pageJSON.clientLocationAccounts;
        pageJSON['offboarding/clientGaAccounts'] = pageJSON.clientLocationAccounts;
        pageJSON['offboarding/clientBbaAccounts'] = pageJSON.clientLocationAccounts;
        res.send(pageJSON);
    });

    mockServerRouter.get('/activity/client/accounts', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-accounts.json');
        for (var i = 0; i < pageJSON.clientLocationAccounts.length; i++) {
            pageJSON.clientLocationAccounts[i].id = req.query.clientId + "-ACC-" + (i + 1);
            pageJSON.clientLocationAccounts[i].changeKey = req.query.clientId + "-ACC-" + (i + 1);
        }
        pageJSON['offboarding/clientLocationAccounts'] = pageJSON.clientLocationAccounts;
        pageJSON['offboarding/clientGaAccounts'] = pageJSON.clientLocationAccounts;
        res.send(pageJSON);
    });
    mockServerRouter.get('/activity/accounts', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-accounts.json');
        for (var i = 0; i < pageJSON.clientLocationAccounts.length; i++) {
            pageJSON.clientLocationAccounts[i].id = req.query.locationId + "-ACC-" + (i + 1);
            pageJSON.clientLocationAccounts[i].changeKey = req.query.locationId + "-ACC-" + (i + 1);
        }
        pageJSON['offboarding/clientLocationAccounts'] = pageJSON.clientLocationAccounts;
        pageJSON['offboarding/clientGaAccounts'] = pageJSON.clientLocationAccounts;
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/getBBAAccounts', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-accounts.json');
        for (var i = 0; i < pageJSON.clientLocationAccounts.length; i++)
            pageJSON.clientLocationAccounts[i].id = req.query.clientLeId + "-ACC-" + (i + 1);
        pageJSON['offboarding/clientBbaAccounts'] = pageJSON.clientLocationAccounts;
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/getGAAccounts', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-accounts.json');
        pageJSON.clientGaAccounts = pageJSON.clientLocationAccounts;
        for (var i = 0; i < pageJSON.clientGaAccounts.length; i++)
            pageJSON.clientGaAccounts[i].id = req.query.locationId + "-ACC-" + (i + 1);
        pageJSON['offboarding/clientGaAccounts'] = pageJSON.clientGaAccounts;
        res.send(pageJSON);
    });

    mockServerRouter.get('/task/getTPAccounts', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-tp-accounts.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/groups', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/user-group.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/clientexit/geTpAccountExposures', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/tp-account-exposures.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/getUserList', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/user-list.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/getClosureReason', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/closure-reason.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/document/url/:fileId', function(req, res) {
        var pageJSON = '{"filenetURL": "http://localhost:4212/api/sdm/ramtagging/export/1"}';
        res.send(pageJSON);
    });

    mockServerRouter.post('/document/upload', function(req, res) {
        res.setHeader('Access-Control-Origin', '*');
        var pageJson = require('./offboarding/ioClientData.json');
        var myFunction = function() {
            res.send({
                data: "success",
                result: {
                    id: Math.floor(Math.random() * 1000100001)
                }
            });
        };
        setTimeout(myFunction, Math.floor(Math.random() * 2000));
    });
    mockServerRouter.post('/tasklist/initiateOffBoarding/upload', function(req, res) {
        res.setHeader('Access-Control-Origin', '*');
        var pageJson = require('./offboarding/ioClientData.json');
        var myFunction = function() {
            res.send({
                data: "success",
                result: {
                    id: Math.floor(Math.random() * 1000100001),
                    clientData: pageJson
                }
            });
        };
        setTimeout(myFunction, Math.floor(Math.random() * 2000));
    });

    mockServerRouter.get('/task/home', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/task.json');
        var items = [],
            clientItems = [],
            accountItems = [],
            locationItems = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON.task.groupExits[0]));
            var clientItem = JSON.parse(JSON.stringify(pageJSON.task.clientExits[0]));
            var locationItem = JSON.parse(JSON.stringify(pageJSON.task.locationExits[0]));
            var accountItem = JSON.parse(JSON.stringify(pageJSON.task.accountExits[0]));
            item.id = groupId++;
            clientItem.id = clientId++;
            locationItem.id = clientId++;
            accountItem.id = clientId++;
            item.entityId = 'GROUP' + item.id;
            clientItem.entityId = 'CLIENT' + clientItem.id;
            locationItem.entityId = 'LOCATION' + locationItem.id;
            accountItem.entityId = 'ACCOUNT' + accountItem.id;
            items.push(item);
            clientItems.push(clientItem);
            locationItems.push(locationItem);
            accountItems.push(accountItem);
        }
        var object = {
            "offboarding/task": {
                id: pageJSON.task.id,
                groupExits: items,
                clientExits: clientItems,
                locationExits: locationItems,
                accountExits: accountItems,
                taskInfo: pageJSON.task.taskInfo,
                meta: pageJSON.task.meta
            }
        }
        res.send(object);
    });

    mockServerRouter.post('/task/comment', function(req, res) {
        res.send({
            "offboarding/taskComment": {
                id: 1,
                notes: {
                    id: 2,
                    comments: 'text',
                    documents: [{
                        id: 3,
                        docId: '123',
                        docName: 'dummy',
                        docType: 'pdf'
                    }]
                }
            }
        });
    });

    mockServerRouter.post('/coft/coftDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/coft-task.json');
        var items = [],
            clientItems = [],
            tpTaskTrackers = [];
        for (var i = 0; i < 20; i++) {
            var clientItem = JSON.parse(JSON.stringify(pageJSON.coftTask.clientExits[0]));
            var tpTaskTracker = JSON.parse(JSON.stringify(pageJSON.coftTask.tpTrackerTasks[0]));
            clientItem.id = clientId++;
            tpTaskTracker.id = clientId++;
            clientItem.entityId = 'CLIENT' + clientItem.id;
            clientItems.push(clientItem);
            tpTaskTrackers.push(tpTaskTracker);
        }
        var object = {
            "offboarding/coftTask": {
                id: pageJSON.coftTask.id,
                clientExits: clientItems,
                tpTrackerTasks: tpTaskTrackers,
                taskInfo: pageJSON.coftTask.taskInfo,
                meta: pageJSON.coftTask.meta
            }
        }

        res.send(object);
    });

    mockServerRouter.post('/coft/tpTaskTrackerDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/coft-task.json');
        var items = [],
            tpTaskTrackers = [];
        for (var i = 0; i < 20; i++) {
            var tpTaskTracker = JSON.parse(JSON.stringify(pageJSON.coftTask.tpTrackerTasks[0]));
            tpTaskTracker.id = clientId++;
            tpTaskTrackers.push(tpTaskTracker);
        }
        var object = {
            "offboarding/coftTracker": tpTaskTrackers,
            "meta": pageJSON.coftTask.meta
        }
        res.send(object);
    });

    mockServerRouter.post('/task/group/clients', function(req, res) {
        var pageJSON = {};
        taskJSON = require('./offboarding/task.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(taskJSON.task.clientExits[0]));
            item.id = clientId++;
            item.entityId = 'CLIENT' + item.id;
            items.push(item);
        }
        pageJSON['offboarding/groupExitClients'] = items;
        pageJSON.meta = {
            totalRecords: taskJSON.task.meta.clientExitCount
        };
        res.send(pageJSON);
    });

    mockServerRouter.get('/task/close', function(req, res) {
        res.send({
            success: true,
            message: 'You have successfully closed the task'
        });
    });

    mockServerRouter.post('/task/groupExit', function(req, res) {
        var pageJSON = {};
        taskJSON = require('./offboarding/task.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(taskJSON.task.groupExits[0]));
            item.id = groupId++;
            item.entityId = 'GROUP' + item.id;
            items.push(item);
        }
        pageJSON['offboarding/groupExits'] = items;
        pageJSON.meta = {
            totalRecords: taskJSON.task.meta.groupExitCount
        };
        res.send(pageJSON);
    });

    mockServerRouter.post('/task/save', function(req, res) {
        var pageJSON = {
            "offboarding/entityExitAction": {
                success: true,
                message: 'my test message',
                uiServiceTokenID: 'dasdasfwr-312ddw-31241d-3wsa',
                meta: {
                    clientExitCount: 2,
                    locationExitCount: 5,
                    accountExitCount: 7,
                    groupExitCount: 8
                }
            }
        };
        res.send(pageJSON);
    });

    mockServerRouter.post('/coft/submitCoftAction', function(req, res) {
        var pageJSON = {
            "offboarding/coftExitAction": {
                success: true,
                message: 'my test message',
                uiServiceTokenID: 'dasdasfwr-312ddw-31241d-3wsa',
                meta: {
                    clientExitCount: 2,
                    locationExitCount: 5,
                    accountExitCount: 7,
                    groupExitCount: 8
                }
            }
        };
        res.send(pageJSON);
    });

    mockServerRouter.post('/task/clientExit', function(req, res) {
        var pageJSON = {};
        taskJSON = require('./offboarding/task.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(taskJSON.task.clientExits[0]));
            item.id = clientId++;
            item.entityId = 'CLIENT' + item.id;
            items.push(item);
        }
        pageJSON['offboarding/clientExits'] = items;
        pageJSON.meta = {
            totalRecords: taskJSON.task.meta.clientExitCount
        };
        res.send(pageJSON);
    });

    mockServerRouter.post('/coft/documentVerificationDetails', function(req, res) {
        var pageJSON = {};
        taskJSON = require('./offboarding/task.json');
        var items = [],
            ids = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(taskJSON.task.clientExits[0]));
            item.id = clientId++;
            item.entityId = 'CLIENT' + item.id;
            items.push(item);
            ids.push(item.entityId);
        }
        pageJSON['offboarding/coftExits'] = items;
        pageJSON.meta = {
            totalRecords: 200,
            clientExitCount: 200,
            clientExitIds: ids,
            locationExitCount: 2,
            accountExitCount: 3,
            taskTrackerCount: 36,
            accountDetailsCount: 50,
            changeKeys: ids
        }
        res.send(pageJSON);
    });

    mockServerRouter.post('/task/locationExit', function(req, res) {
        var pageJSON = {};
        taskJSON = require('./offboarding/task.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(taskJSON.task.locationExits[0]));
            item.id = clientId++;
            item.entityId = 'LOCATION' + item.id;
            items.push(item);
        }
        pageJSON['offboarding/locationExits'] = items;
        pageJSON.meta = {
            totalRecords: taskJSON.task.meta.locationExitCount
        };
        res.send(pageJSON);
    });

    mockServerRouter.post('/audit/auditInfo', function(req, res) {
        var pageJSON = require('./offboarding/audit.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/task/accountExit', function(req, res) {
        var pageJSON = {};
        taskJSON = require('./offboarding/task.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(taskJSON.task.accountExits[0]));
            item.id = clientId++;
            item.entityId = 'LOCATION' + item.id;
            items.push(item);
        }
        pageJSON['offboarding/accountExits'] = items;
        pageJSON.meta = {
            totalRecords: taskJSON.task.meta.accountExitCount
        }
        res.send(pageJSON);
    });

    mockServerRouter.post('/task/client/categories', function(req, res) {
        var pageJSON = require('./offboarding/task-category.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/coft/categoryDetails', function(req, res) {
        var pageJSON = require('./offboarding/coft-task-category.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON['offboarding/coftExitCategory'].locationDetails[0]));
            item.id = clientId++;
            item.entityId = 'ACCOUNT';
            items.push(item);
        }
        pageJSON['offboarding/coftExitCategory'].locationDetails = items;
        res.send(pageJSON);
    });

    mockServerRouter.post('/task/client/categories/accounts', function(req, res) {
        var pageJSON = require('./offboarding/task-account.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON['offboarding/clientExitAccount'].accountDetails[0]));
            item.id = clientId++;
            item.entityId = 'ACCOUNT' + item.id;
            items.push(item);
        }
        pageJSON['offboarding/clientExitAccount'].accountDetails = items;
        res.send(pageJSON);
    });

    mockServerRouter.post('/coft/accountAndCaseDetails', function(req, res) {
        var pageJSON = require('./offboarding/coft-task-account.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON['offboarding/coftExitAccount'].accountDetails[0]));
            item.id = clientId++;
            item.entityId = 'ACCOUNT';
            items.push(item);
        }
        pageJSON['offboarding/coftExitAccount'].accountDetails = items;
        res.send(pageJSON);
    });

    mockServerRouter.get('/inboxHomes', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/inbox-home.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/coftTasks', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/coft-task.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/inbox/task', function(req, res) {
        res.send(JSON.stringify({
            'selectedId': ['123', '456']
        }));
    });

    mockServerRouter.get('/getCaseDetail', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/task-client-locations.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/clients', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-detail.json');
        var string = JSON.stringify(pageJSON).replace(/111317064/g, req.query.clientLeId);

        res.send(JSON.parse(string));
    });

    mockServerRouter.get('/activity/client', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-detail.json');
        var string = JSON.stringify(pageJSON).replace(/111317064/g, req.query.clientId);

        res.send(JSON.parse(string));
    });

    mockServerRouter.post('/activity/cancel', function(req, res) {
        var pageJSON = "{}";


        res.send(pageJSON);
    });

    mockServerRouter.post('/activity/client', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-detail.json');
        var string = JSON.stringify(pageJSON).replace(/111317064/g, req.body.clientId);

        res.send(JSON.parse(string));
    });

    mockServerRouter.post('/clients', function(req, res) {

        var response = require('./offboarding/client-details.json');

        //return res.send(response);

        var page = req.body.search.pagination ? req.body.search.pagination.page : 1;
        var size = req.body.search.pagination ? req.body.search.pagination.size : 20;

        var startIndex = ((page - 1) * size),
            endIndex = ((page - 1) * size) + 20;

        var object = {
            "offboarding/clientDetails": []
        };

        for (var index = 0; index < 20; index++) {
            var newItem = Object.assign({}, response.clientDetails[0]);
            newItem.id = response.clientDetails[0].clientLeId + "-" + (startIndex + index);
            newItem.clientLeId = newItem.id;
            object['offboarding/clientDetails'][index] = newItem;
        }
        object['offboarding/groupDetails'] = response['offboarding/groupDetails'];
        object.meta = response.meta;
        res.send(object);
    });

    mockServerRouter.post('/activity/clientDetails', function(req, res) {

        var response = require('./offboarding/client-details.json');

        var page = req.body.pagination ? req.body.pagination.page : 1;
        var size = req.body.pagination ? req.body.pagination.size : 20;

        var startIndex = ((page - 1) * size),
            endIndex = ((page - 1) * size) + 20;

        var object = {
            "offboarding/clientDetails": []
        };

        for (var index = 0; index < 20; index++) {
            var newItem = Object.assign({}, response.clientDetails[0]);
            newItem.id = response.clientDetails[0].clientLeId + "-" + (startIndex + index);
            newItem.clientLeId = newItem.id;
            object['offboarding/clientDetails'][index] = newItem;
        }
        object['offboarding/groupDetails'] = response['offboarding/groupDetails'];
        object.meta = response.meta;
        res.send(object);
    });

    mockServerRouter.post('/activityClients', function(req, res) {

        var response = require('./offboarding/client-details.json');

        var page = req.body.pagination ? req.body.pagination.page : 1;
        var size = req.body.pagination ? req.body.pagination.size : 20;

        var startIndex = ((page - 1) * size),
            endIndex = ((page - 1) * size) + 20;

        var object = {
            "offboarding/clientDetails": []
        };

        for (var index = 0; index < 20; index++) {
            var newItem = Object.assign({}, response.clientDetails[0]);
            newItem.id = response.clientDetails[0].clientLeId + "-" + (startIndex + index);
            newItem.clientLeId = newItem.id;
            object['offboarding/clientDetails'][index] = newItem;
        }
        object.meta = response.meta;
        res.send(object);
    });

    mockServerRouter.post('/group/save', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/group-exit-save.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/activity/saveOrSubmitCheckList', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/group-exit-save.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/checklist/stakeholders', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/stakeholders.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/activity/checklistDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/checklist-detail.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/tasklist/taskList', function(req, res) {
        var pageJSON = "{}";
        if (req.query.taskCode === 'COFT' || req.query.taskCode === 'TPTASK') {
            pageJSON = require('./offboarding/coft-inbox.json');
        }
        if (req.query.filters || req.query.pagination) {

            pageJSON['offboarding/inbox/task-list'].forEach(function(item) {
                item.id = item.id + new Date();
            });
            pageJSON['meta'].page = req.query.pagination.page;
        } else {
            pageJSON = require('./offboarding/coft-inbox.json');
        }

        res.send(pageJSON);
    });
    mockServerRouter.post('/tasklist/activities', function(req, res) {
        var pageJSON = require('./offboarding/activity-inbox.json');
        if (req.query.filters || req.query.pagination) {

            pageJSON['offboarding/inbox/activity'].forEach(function(item) {
                item.id = item.id + new Date();
            });
            pageJSON['meta'].page = req.query.pagination.page;
        }
        res.send(pageJSON);
    });
    mockServerRouter.post('/tasklist/requestTracker', function(req, res) {
        var pageJSON = require('./offboarding/request-tracker.json');
        if (req.query.filters || req.query.pagination) {

            pageJSON['offboarding/inbox/request-tracker'].forEach(function(item) {
                item.id = item.id + new Date();
            });
            pageJSON['meta'].page = req.query.pagination.page;
        }
        res.send(pageJSON);
    });
    mockServerRouter.get('/tasklist/initiateOffboarding', function(req, res) {
        var pageJSON = require('./offboarding/initiate-offboarding.json');
        if (req.query.filters || req.query.pagination) {

            pageJSON.forEach(function(item) {
                item.id = item.id + new Date();
            });
            pageJSON['meta'].page = req.query.pagination.page;
        }
        res.send(pageJSON);
    });

    mockServerRouter.get('/task/tp/home', function(req, res) {
        var pageJSON = require('./offboarding/tp-task-list.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/task/tp/home', function(req, res) {
        var pageJSON = require('./offboarding/tp-task-list.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/task/referback/home', function(req, res) {
        var pageJSON = require('./offboarding/referback/client-details.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/task/referback/client/categories', function (req, res) {
        var pageJSON = require('./offboarding/referback/client-category-details.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/task/referback/client/category/accounts', function(req, res) {
        var pageJSON = require('./offboarding/referback/category-accounts.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/task/tp/accounts', function(req, res) {
        var pageJSON = require('./offboarding/tp-task-list.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/tasklist/hubEmpInfo', function(req, res) {
        var pageJSON = {};
        pageJSON = require('./offboarding/coft-user.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/tasklist/reAssignTasks', function(req, res) {
        var pageJSON = {};
        pageJSON["offboarding/inbox/task-action"] = {};

        res.send(pageJSON);
    });

    mockServerRouter.post('/tasklist/releaseTasks', function(req, res) {
        var pageJSON = {};
        pageJSON["offboarding/inbox/task-action"] = {};

        res.send(pageJSON);
    });
    mockServerRouter.post('/tasklist/acceptTasks', function(req, res) {
        var pageJSON = {};
        pageJSON["offboarding/inbox/task-action"] = {};

        res.send(pageJSON);
    });

    mockServerRouter.post('/validate/clientTypes', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/client-type.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/coft/workflowHistorys', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/workflow-history.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/getChecklistDetail', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/activity/act-detail.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/activity/actDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/activity/act-detail.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/task/referback/cancel', function(req, res) {
        var pageJSON = '{"id":1,"offboarding/task/referback/action":{"id":1,"success":true,"uiServiceTokenID":"da791f10-d8f9-4846-84c3-24d3e14282c6","meta":{"clientExitCount":0,"locationExitCount":0,"accountExitCount":0,"groupExitCount":0,"gaCaseCount":0,"bbaCaseCount":0,"locationCount":0,"totalRecords":0}}}';
        res.send(pageJSON);
    });
    mockServerRouter.post('/task/referback/submit', function(req, res) {
        var pageJSON = "{}";
        res.send(pageJSON);
    });
    mockServerRouter.post('/task/referback/checklist', function(req, res) {
        var pageJSON = require('./offboarding/referback/client-checklist.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/validate/nonInflightEntities', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/non-inflight-entity.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON['offboarding/nonInflightEntity'][0]));
            item.id = i + 1;
            item.entityId = item.id + 300;
            item.activityId = item.id + 100;
            items.push(item)
        }
        pageJSON["offboarding/nonInflightEntity"] = items;
        res.send(pageJSON);

    });

    mockServerRouter.get('/checklist/details', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/checklist-data.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/groups/clients', function(req, res) {

        var response = require('./offboarding/client-details.json');

        var page = req.body.search.pagination ? req.body.search.pagination.page : 1;
        var size = req.body.search.pagination ? req.body.search.pagination.size : 20;

        var startIndex = ((page - 1) * size),
            endIndex = ((page - 1) * size) + 20;

        var object = {
            "offboarding/clientDetails": []
        };

        for (var index = 0; index < 20; index++) {
            var newItem = Object.assign({}, response.clientDetails[0]);
            newItem.id = response.clientDetails[0].clientLeId + "-" + (startIndex + index);
            newItem.clientLeId = newItem.id;
            object['offboarding/clientDetails'][index] = newItem;
        }
        object['offboarding/groupDetails'] = response['offboarding/groupDetails'];
        object.meta = response.meta;
        res.send(object);
    });

    mockServerRouter.post('/validate/exception/group/clients', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/group-exception-client.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/groupsOld', function(req, res) {
        var saveonly = req.body.search.saveOnly ? true : false;
        var pageJSON = "{}";
        pageJSON = require('./offboarding/group-details.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON['offboarding/groupDetails'][0]));
            item.id = groupId++;
            item.groupId = 'GROUP' + item.id;
            item.saved = saveonly;
            items.push(item)
        }
        pageJSON['offboarding/groupDetails'] = items;
        res.send(pageJSON);
    });

    mockServerRouter.post('/groups', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/group-details.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/activity/checkListDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./offboarding/checklist-detail.json');
        res.send(pageJSON);
    });

    app.use('/api/offboarding', mockServerRouter);
};
