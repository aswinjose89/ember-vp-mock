module.exports = function(app) {
    var express = require('express'),
        mockServerRouter = express.Router(),
        clientId = 2000,
        groupId = 3000,
        selectedId = 4000;

    mockServerRouter.get('/staticInfo', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/static-data.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/task', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/taskList.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/task/changes', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/taskChangeList.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/task/submit', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/taskChangeList.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/home', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/client-group-details.json');
        /*var items = [];
        for(var i = 0; i < 5; i++) {
          var item = JSON.parse(JSON.stringify(pageJSON.clientGroupDetails[0]));
          item.id = groupId++;
          item.groupId = 'GRP00' + item.id;
          //item.groupId = 'GRP003000'; // modified to match the single update mock json id
          items.push(item)
        }
        pageJSON.clientGroupDetails = items;*/
        res.send(pageJSON);
    });

    mockServerRouter.post('/search/clientIdForGroups', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/client-id-for-group.json');
        res.send(pageJSON);
    });

    mockServerRouter.delete('/clm/releaseTask/*', function(req, res) {
        res.send("OK");
    });

    mockServerRouter.post('/clm/bulkRelease', function(req, res) {
        res.send("{}");
    });

    mockServerRouter.post('/clm/reassign', function(req, res) {
        res.send("{}");
    });

    mockServerRouter.post('/clm/taskDetails', function(req, res) {
        console.log(req);
        var pageJSON = "{}";
        pageJSON = require('./sdm/clm/task-detail.json');
        var items = [];
        for (var i = 0; i < 20; i++) {
            var item = JSON.parse(JSON.stringify(pageJSON.taskDetails[0]));
            item.acceptedById = i % 2;
            item.entity.id = i * 10000;
            item.isAccepted = Boolean(i % 2);
            item.entity.type = i % 2 === 0 ? 'client' : 'group';
            item.id = i;
            items.push(item);
        }
        pageJSON.taskDetails = items;
        pageJSON.meta.actionType = 'MyActions';
        res.send(pageJSON);
    });

    mockServerRouter.post('/tbtagging/groupDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/tbtagging/group-detail.json');
        /*var items = [];
        for(var i = 0; i < 20; i++) {
          var item = JSON.parse(JSON.stringify(pageJSON.groupDetails[0]));
          item.id = groupId++;
          items.push(item);
        }
        pageJSON.groupDetails = items;*/
        res.send(pageJSON);
    });

    mockServerRouter.post('/tbtagging/clientDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/tbtagging/client-detail.json');
        /*var items = [];
        for(var i = 0; i < 20; i++) {
          var item = JSON.parse(JSON.stringify(pageJSON.clientDetails[0]));
          item.id = groupId++;
          items.push(item);
        }
        pageJSON.clientDetails = items;*/
        res.send(pageJSON);
    });
    mockServerRouter.post('/uniqueFilter', function(req, res) {
        var pageJSON = require('./sdm/unique-filter.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/tbtagging/actionDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/tbtagging/action-detail.json');
        /*var items = [];
        for(var i = 0; i < 20; i++) {
          var item = JSON.parse(JSON.stringify(pageJSON.actionDetails[0]));
          item.entity.id =  i;
          item.entity.type = i % 2 === 0 ? 'client' : 'group';
          item.id = groupId++;
          items.push(item);
        }
        pageJSON.actionDetails = items;*/
        res.send(pageJSON);
    });

    mockServerRouter.post('/search/clients', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/client-details.json');
        /*var items = [];
        for(var i = 0; i < 20; i++) {
          var item = JSON.parse(JSON.stringify(pageJSON.clientDetails[0]));
          item.id = clientId++;
          item.clientId = 'CLI00' + item.id;
          //item.clientId = 'GRP003000'; // modified to match the single update mock json id
          items.push(item)
        }
        pageJSON.clientDetails = items;*/
        res.send(pageJSON);
    });

    mockServerRouter.post('/search/filterClients', function(req, res) {
        var pageJSON = "{}";
        // pageJSON = require('./sdm/ramtagging/client-details.json');
        pageJSON = require('./sdm/ramtagging/selected-client-details.json');
        /*var items = [];
        for(var i = 0; i < 20; i++) {
          var item = JSON.parse(JSON.stringify(pageJSON.selectedClientDetails[0]));
          item.id = clientId++;
          item.clientId = 'CLI00' + item.id;
          //item.clientId = 'GRP003000'; // modified to match the single update mock json id
          items.push(item)
        }
        pageJSON.selectedClientDetails = items;*/
        res.send(pageJSON);
    });

    mockServerRouter.post('/selected', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/selected-client-group-details.json');
        /*var items = [];
        for(var i = 0; i < 10; i++) {
          var clientItem = JSON.parse(JSON.stringify(pageJSON.selectedClientGroupDetails[0]));
          var groupItem = JSON.parse(JSON.stringify(pageJSON.selectedClientGroupDetails[1]));
          clientItem.id = clientId++;
          clientItem.clientId = 'GRP00' + clientItem.id;
          //clientItem.clientId = 'GRP003000'; // modified to match the single update mock json id
          groupItem.id = groupId++;
          groupItem.groupId = 'GRP00' + groupItem.id;
          //groupItem.groupId = 'GRP003000'; // modified to match the single update mock json id
          items.push(clientItem);
          items.push(groupItem);
        }
        pageJSON.selectedClientGroupDetails = items;*/
        res.send(pageJSON);
    });

    mockServerRouter.post('/ramtagging/fetchInflightDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/inflight-details.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/groupClientDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/ram-detail.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/groupClientDetails', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/ramtagging/update-ram-detail.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/confirmation', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/confirmation.json');
        res.send(pageJSON);
    });

    mockServerRouter.delete('/ramtagging/deleteRamDetails/:id', function(req, res) {
        var pageJSON = '{"success":true}';
        res.send(pageJSON);
    });

    mockServerRouter.get('/clientName', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/user-client.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/replaceRamUserList', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/replace-ram.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/replaceRamUserList', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/replace-ram.json');
        res.send(pageJSON);
    });
    mockServerRouter.get('/groupName', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/user-group.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/search/rmInfo', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/rm-user.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/hubEmpInfo', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/rm-user.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/comments', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/comments.json');
        /*pageJSON.comment.forEach(function (obj, index) {
            obj.hasNoException = true;
            obj.id = String(index) + req.body.search.pagination.page + '_' + req.body.selectedSearch.tabId;
        })*/

        res.send(pageJSON);
    });
    mockServerRouter.get('/task/export', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/comments.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/comments', function(req, res) {
        var pageJSON = '{"success": true}';
        res.send(pageJSON);
    });

    mockServerRouter.get('/document/url/:fileId', function(req, res) {
        var pageJSON = '{"filenetURL": "http://localhost:4212/api/sdm/ramtagging/export/1"}';
        res.send(pageJSON);
    });

    mockServerRouter.post('/document/upload', function(req, res) {
        res.setHeader('Access-Control-Origin', '*');
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

    mockServerRouter.get('/ramUserList', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/add-ram.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/deleteRam', function(req, res) {
        res.send(JSON.stringify({
            'deleteRam': {
                'id': 4,
                'count': 4,
                'uiServiceTokenID': '12dfg3',
                'exceptionCount': 1,
                'totalGroupCount': 10,
                'totalClientCount': 12,
                activityId: 'RM12312',
                validChangeCount: 0
            }
        }));
    });

    mockServerRouter.post('/updateCL', function(req, res) {
        var pageJSON = "{}";
        var response = {
            'sdmUpdateCoverageLocation': {
                'id': 4,
                'count': 4,
                uiServiceTokenID: '12dfg3',
                exceptionCount: 1,
                totalGroupCount: 10,
                totalClientCount: 12,
                activityId: 'RM00012123'
            }
        };
        if (req.body.sdmUpdateCoverageLocation.comments)
            response = { 'sdmUpdateCoverageLocation': { 'id': 4, activityId: 'a123' } };
        res.send(JSON.stringify(response));
    });
    mockServerRouter.post('/updateRam', function(req, res) {
        var response = {
            sdmUpdateReplaceRam: {
                id: 4,
                'count': 4,
                uiServiceTokenID: '12dfg3',
                exceptionCount: 4,
                totalGroupCount: 10,
                totalClientCount: 12,
                activityId: 'RM00012123'
            }
        };
        res.send(JSON.stringify(response));
    });

    mockServerRouter.get('/ramtagging/export/:uiServiceTokenID', function(req, res) {
        var file = __dirname + '/sdm/ramtagging/sample.xlsx';
        res.download(file); // Set disposition and send it.
    });

    mockServerRouter.get('/taskDetails/data/export', function(req, res) {
        var file = __dirname + '/sdm/ramtagging/sample.xlsx';
        res.download(file); // Set disposition and send it.
    });

    mockServerRouter.post('/search/rmInfo', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/rm-user.json');
        res.send(pageJSON);
    });

    mockServerRouter.get('/ramtagging/updateCoverageLocation', function(req, res) {
        var pageJSON = {
            sdmUpdateCoverageLocation: [{
                id: 1,
                uiServiceTokenID: req.params.uiServiceTokenID,
                activityId: 'a1234'
            }]
        };

        res.send(pageJSON);
    });

    mockServerRouter.post('/ramtagging/inherit', function(req, res) {


        var response = {
            'sdmInheritRam': {
                'id': 4,
                'count': 4,
                uiServiceTokenID: '12dfg3',
                "validation": {
                    "isAllClientsInherited": false,
                    "isClientInflightPresent": true,
                    "inheritedClientsCount": 0,
                    "clientInflightCount": 2,
                    "changesAtSciClientCount": 1,
                    "isInheritedClientsPresent": true,
                    "isGroupInflightPresent": true,
                    "groupInflightCount": 0,
                    inflightGroupClientCount: 0
                },
            }
        };
        if (req.body.sdmInheritRam.comments)
            response = { 'sdmInheritRam': { 'id': 4, activityId: 'a123' } };
        res.send(JSON.stringify(response));
    });

    mockServerRouter.get('/ramtagging/inherit', function(req, res) {

        var pageJSON = require('./sdm/ramtagging/update-coverage-location.json');
        var response = { 'sdmInheritRam': { 'id': 4, uiServiceTokenID: '12dfg3', activityId: 'a123' } };
        res.send(JSON.stringify(response));
    });

    mockServerRouter.post('/tbtagging/getTbEmpInfo', function(req, res) {
        var pageJSON = {};
        pageJSON = require('./sdm/tbtagging/rm-user.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/tbtagging/tbs', function(req, res) {

        var response = { 'tbSalesTag': { 'id': 4, uiUserToken: '12dfg3', location: 'test', roleType: 'sfadfsd' } };
        res.send(response);
    });

    mockServerRouter.get('/tbtagging/tbs', function(req, res) {

        var response = { 'tbSalesTag': [{ id: 1, uiUserToken: req.params.uiUserToken, activityId: 'a123sfgsfg4' }] };
        res.send(response);
    });

    mockServerRouter.post('/tbtagging/gts', function(req, res) {

        var response = require('./sdm/tbtagging/gts-tag.json');
        res.send(response);
    });

    mockServerRouter.get('/tbtagging/gts', function(req, res) {

        var response = require('./sdm/tbtagging/gts-tag.json');
        res.send(response);
    });

    mockServerRouter.post('/addRams', function(req, res) {
        res.send(JSON.stringify({
            "deleteRam": null,
            "sdmUpdateCoverageLocation": null,
            "addRam": {
                "success": true,
                "message": "Activity created successfully",
                "id": 0,
                "clientExceptionCount": 0,
                "count": 0,
                "exceptionCount": 0,
                "groupExceptionCount": 0,
                "totalClientCount": 10,
                "totalGroupCount": 2,
                "uiServiceTokenID": '12345',
                "activityId": "RAM0000000080",
                "operation": null
            },
            "updateRam": null,
            "activityDetails": null
        }));
    });



    mockServerRouter.get('/addRams', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/add-ram-exception.json');
        res.send(pageJSON);
    });

    mockServerRouter.post('/search/selectedRamEntity', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/selected-ram-client-list.json');
        var index = req.body.search.pagination.size;
        pageJSON.selectedRmClientLists.forEach(function(obj) {
            index--;
            obj.hasNoException = true;
            obj.id = String(index) + req.body.search.pagination.page + '_' + req.body.selectedSearch.tabId;
        })
        res.send(pageJSON);
    });

    mockServerRouter.post('/ramtagging/inlineRmClientList', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/inline-ram-client-list.json');
        console.log('--------------------------------------')
        console.log(pageJSON);
        var index = 0;
        pageJSON.inlineRmClientLists.forEach(function(obj) {
            index++;
            obj.hasNoException = true;
            obj.id = String(index) + req.body.search.pagination.page + '_' + req.body.selectedSearch.tabId;
        })
        res.send(pageJSON);
    });

    mockServerRouter.post('/search/selectedRamEntity/fiGroupsCount', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/fiGroupsCount.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/workflow/taskAction', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/acceptTask.json');
        res.send(pageJSON);
    });
    mockServerRouter.post('/ramtagging/edit', function(req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sdm/selected-ram-client-list.json');
        pageJSON.selectedRmClientLists.forEach(function(obj, index) {
            obj.hasNoException = false;
            obj.id = String(index) + req.body.search.pagination.page + '_' + req.body.selectedSearch.tabId;
        })
        res.send(pageJSON);
    });

    mockServerRouter.post('/tbtagging/groupDetailById', function(req, res) {
        var response = require('./sdm/tbtagging/group-detail-sales-coverage.json');
        res.send(response);
    });

    mockServerRouter.post('/activityDetails', function(req, res) {
        var response = require('./sdm/activity/task-detail.json');
        res.send(response);
    });

    mockServerRouter.post('/activityDetails/pagination/data', function(req, res) {
        console.log(req.body);
        var response = require('./sdm/activity/task-detail.json');
        var task = response.activityDetails.task.map(function(item, index) {
            var newItem = Object.assign({}, item);
            newItem.id = ((req.body.pagination.page - 1) * req.body.pagination.size) + (index + 1);
            newItem.entityName = newItem.id;
            return newItem;
        });

        res.send({
            activityTaskDetails: task
        });
    });
    mockServerRouter.post('/cancelChanges', function(req, res) {

        res.send({
            "deleteRam": null,
            "sdmUpdateCoverageLocation": null,
            "addRam": null,
            "updateRam": null,
            "activityTaskDetails": {
                "uiServiceTokenID": "94bfdaef-32bd-43a1-ab66-06c0b7525b28",
                "activityId": "RAM0000000119",
                "cancelChangesMap": {
                    "ALLOWED": [
                        "RAM0000000119-11018555-RAM-85",
                        "RAM0000000119-11018555-RAM-1"
                    ]
                }
            }
        });

    });
    mockServerRouter.get('/audit', function(req, res) {

        var response = require('./sdm/audit/audit.json');
        res.send(response);

    });

    mockServerRouter.get('/audit/task', function(req, res) {

        var response = require('./sdm/audit/task-detail.json');
        res.send(response);
    });

    mockServerRouter.get('/subprocess', function(req, res) {

        var response = require('./sdm/audit/subprocess.json');
        req.query.page = req.query.page || 1;
        req.query.size = req.query.size || 20;

        console.log(req);

        var task = response.subProcessDtls.audit.map(function(item, index) {
            var newItem = Object.assign({}, item);
            newItem.id = ((req.query.page - 1) * req.query.size) + (index + 1);
            newItem.entityName = newItem.id;
            return newItem;
        });
        res.send({ subProcessDtls: { audit: task, totalRecords: 44, id: "123sdfs123412" } });
    });

    mockServerRouter.post('/search/selectedRamEntity/fiGroupsCount', function(req, res) {
        var pageJSON = {};
        pageJSON.fiClientGroup = {};
        pageJSON.fiClientGroup.id = 2;
        pageJSON.fiClientGroup.fiGroupsCount = 2;


        res.send(pageJSON);
    });
    mockServerRouter.post('/search/selectedRamEntity/fiClientsCount', function(req, res) {
        var pageJSON = {};
        pageJSON.fiClientGroup = {};
        pageJSON.fiClientGroup.id = 2;
        pageJSON.fiClientGroup.fiClientsCount = 0;

        res.send(pageJSON);
    });

    mockServerRouter.post('/search/selectedRamEntity/entitiesWithoutRamCount', function(req, res) {
        var pageJSON = {};
        pageJSON.entitiesWithoutRAM = {};
        pageJSON.entitiesWithoutRAM.id = 0;
        pageJSON.entitiesWithoutRAM.countGroupsWithoutRam = 0;
        pageJSON.entitiesWithoutRAM.countClientsWithoutRam = 2;
        pageJSON.entitiesWithoutRAM.countEntitiesWithoutRam = 1;

        res.send(pageJSON);
    });

    mockServerRouter.post('/workflow/clm/reAssignTask', function(req, res) {
        var pageJSON = {};
        pageJSON["clm/inbox/clmAction"] = {};

        res.send(pageJSON);
    });

    mockServerRouter.post('/workflow/clm/bulkRelease', function(req, res) {
        var pageJSON = {};
        pageJSON["clm/inbox/clmAction"] = {};

        res.send(pageJSON);
    });

    mockServerRouter.post('/referbackTaskDetails', function(req, res) {
        var response = require('./sdm/referback/referback.json');
        res.send(response);
    });

    mockServerRouter.post('/workflow/submitReferBackTask', function(req, res) {
        res.send({});
    });


    app.use('/api/sdm', mockServerRouter);
};
