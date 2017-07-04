module.exports = function (app) {
    var express = require('express'), contactsRouter = express.Router();

    contactsRouter.get('/contactsGrids', function (req, res) {
        var pageJSON = require('./contacts/contacts-grid.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/viewContact/contactsGrids', function (req, res) {
        var pageJSON = require('./contacts/contacts-grid.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/contactsCharts', function (req, res) {
        var pageJSON = require('./contacts/contacts-chart.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/contactsHome', function (req, res) {
        var pageJSON = require('./contacts/contacts-home.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/contactAddresses', function (req, res) {
        var pageJSON = require('./contacts/contact-address.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/viewContact/contact', function (req, res) {
        var pageJSON = require('./contacts/contacts.json');
        //pageJSON.contacts.id = 'new';
        res.send(pageJSON);
    });
    contactsRouter.get('/codePickList', function (req, res) {
        var pageJSON = require('./contacts/cnct-picklist.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/integration/scbEventPicklist', function (req, res) {
        var pageJSON = require('./contacts/scb-events.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/search/cctmembers', function (req, res) {
        var pageJSON = require('./contacts/other-members.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/search/paNames', function (req, res) {
        var pageJSON = require('./contacts/pa-names.json');
        res.send(pageJSON);
    });
    contactsRouter.put('/save/contact', function (req, res) {
        //var pageJSON = ({"statusCode": "500", "statusMessage": "Contact Saved Successfully","header":{"firstName":"Shyamala","lastName":"Viswanathan","contactId":"CNTCT-201503-158989"}});
        var pageJSON = require('./contacts/contacts_res.json');
        res.send(pageJSON);
    });
    contactsRouter.post('/EditContactService/updateContacts', function (req, res) {
        var pageJSON = ({"statusCode": "500", "statusMessage": "Bulk edit Successfully"});
        res.send(pageJSON);
    });
    contactsRouter.get('/searchGroups', function (req, res) {
        var pageJSON = require('./contacts/contacts-groups.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/searchClients', function (req, res) {
        var pageJSON = require('./contacts/contacts-clients.json');
        res.send(pageJSON);
    });
    contactsRouter.get('/search/associatedClients', function (req, res) {
        var pageJSON = require('./contacts/associated-client.json');
        //searchTerm = req.query.searchValue.toLowerCase(), value;

        res.send(pageJSON);
    });
	contactsRouter.get('/associatedGrids', function (req, res) {
        var pageJSON = require('./contacts/associated-grid.json');
        //searchTerm = req.query.searchValue.toLowerCase(), value;

        res.send(pageJSON);
    });
    contactsRouter.post('/file/upload', function (req, res) {
        var pageJSON = (["12213123231"]);
        //searchTerm = req.query.searchValue.toLowerCase(), value;

        res.send(pageJSON);
    });
    contactsRouter.get('/viewContact/validateContact', function (req, res) {
          var pageJSON = require('./contacts/duplicate-client.json');
          //searchTerm = req.query.searchValue.toLowerCase(), value;

          res.send(pageJSON);
      });
	contactsRouter.put('/associatedGrids/delete', function (req, res) {
        var pageJSON = ({"saveSuccess": true, "errorMessage": null});
        res.send(pageJSON);
    });
    contactsRouter.put('/associatedClients/save', function (req, res) {
        var pageJSON = ({"saveSuccess": true, "errorMessage": null});
        res.send(pageJSON);
    });
    contactsRouter.get('/search/clientSearch', function (req, res) {
        var pageJSON = require('./contacts/client-search.json');

        res.send(pageJSON);
    });
    contactsRouter.get('/search/groups', function (req, res) {
        var groups = require('./contacts/contacts-groups.json').groups.records,
        searchTerm = req.query.searchString.toLowerCase(), value;

        res.send({
            groups : groups.filter(function (a) {
            for (var key in a) {
                value = a[key];
                if (typeof value === "string") {
                    if (value.toLowerCase().indexOf(searchTerm) > -1) {
                        return true;
                    }
                }
            }
        })
        });
    });
    contactsRouter.get('/excelExport', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=CallReports.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });
    contactsRouter.get('/basicInformation/:id', function (req, res) {
        var pageJSON = require('./contacts/basic-information.json');
        res.send(pageJSON);
    });
    /*contactsRouter.put('/save/:id', function (req, res) {
        var pageJSON = ({"saveSuccess": true, "errorMessage": null});
        res.send(pageJSON);
    });*/
    contactsRouter.put('/save', function (req, res) {
        var pageJSON = ({"saveSuccess": true, "errorMessage": null});
        res.send(pageJSON);
    });
    contactsRouter.get('/removeContacts/', function (req, res) {
        var pageJSON = ({"saveSuccess": true, "errorMessage": null});
        res.send(pageJSON);
    });
     contactsRouter.get('/personalInformation/:id', function (req, res) {
        var pageJSON = require('./contacts/personal-information.json');
        res.send(pageJSON);
    });
    //contactImage
    contactsRouter.get('/checkActive',  function (req, res) {
        var pageJSON =  ({
            "activeContactList": [{
                "contactXRefId": "CNTCT-201503-158989",
                "modules": "Call Reports",
                "contactMasterId": null,
                "count": 0
            }]});
        res.send(pageJSON);
    });
    app.use('/api/contacts', contactsRouter);
    };
