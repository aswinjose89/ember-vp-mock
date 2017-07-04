module.exports = function (app) {
  var express = require('express'),
    appRouter = express.Router();

  //Home  - Trident Listing
  appRouter.get('/tridents', function (req, res) {
    if (req.query['searchText'] !== undefined && req.query['searchText'] === 'foo') {
      var x = [];
      res.send(x);
    } else if (req.query['clientId'] && false) {
      res.status('500').send();
      //res.json({"tridents":[]});
    } else {
      var pageJSON = require('../_data/tridents/tridents.json');
      res.send(pageJSON);
    }
  });

  //Search Suggestions
  appRouter.get('/trident-search', function (req, res) {
    var pageJSON = require('../_data/tridents/search-suggestions.json');
    res.send(pageJSON);
  });

  // Dashboard - Trident Chart
  appRouter.get('/tridents/summaryData/:id', function (req, res) {
    var pageJSON;
    if (req.params.id === '100') {
      pageJSON = require('../_data/tridents/100/trident_summary_data.json');
      res.send(pageJSON);
    } else if (req.params.id === '113') {
      pageJSON = require('../_data/tridents/113/trident_summary_data.json');
      res.send(pageJSON);
    } else {
      pageJSON = require('../_data/tridents/trident_summary_data.json');
      res.send(pageJSON);
    }
  });

  // List all the groups and clients for a trident
  appRouter.get('/tridents/:id', function (req, res) {
    var pageJSON;
    if (req.params.id === '100') {
      pageJSON = require('../_data/tridents/100/trident_group.json');
      res.send(pageJSON);
    } else if (req.params.id === '113') {
      pageJSON = require('../_data/tridents/113/trident_group.json');
      res.send(pageJSON);
    } else {
      pageJSON = require('../_data/tridents/trident_group.json');
      res.send(pageJSON);
    }
  });

  // Update proposed value
  appRouter.put('/tridents/:id', function (req, res) {
    res.status('204').send();
  });

  appRouter.post('/tridents/:id/renew', function (req, res) {
    res.json({
      "message": "SUCCESS",
      "tridentId": "113",
      "details": []
    });
    //res.status('204').send();
  });

  appRouter.post('/tridents/:id/finalise', function (req, res) {
    res.status('204').send();
  });

  appRouter.post('/tridents/:id/duplicate', function (req, res) {
    res.json({
      "message": "SUCCESS",
      "tridentId": "113",
      "details": []
    });
    //res.status('204').send();
  });

  // Amend Trident
  appRouter.post('/tridents/:id/amend', function (req, res) {
    res.json({
      "message": "SUCCESS",
      "tridentId": "113",
      "details": []
    });
  });

  // Dashboard - Groups and Clients in a Trident
  appRouter.get('/tridents/:id/entities', function (req, res) {
    var pageJSON;
    if (req.params.id === '100') {
      pageJSON = require('../_data/tridents/100/trident_group.json');
    } else if (req.params.id === '113') {
      pageJSON = require('../_data/tridents/113/trident_group.json');
    } else {
      pageJSON = require('../_data/tridents/trident_group.json');
    }
    res.send(pageJSON);
  });

  // Remove client from Trident
  appRouter.delete('/tridents/:id/entities/:entityXRefId', function (req, res) {
    res.status('204').send();
  });

  // Input values
  appRouter.get('/tridents/:id/clients/:entityId/:orginLoc/inputvalues/:modelId', function (req, res) {
    var pageJSON = require('../_data/tridents/input-values.json');
    res.send(pageJSON);
  });

  appRouter.get('/tridents/references/support-documents', function (req, res) {
    var pageJSON = require('../_data/tridents/support-documents.json');
    res.send(pageJSON);
  });

  appRouter.get('/tridents/references/credit-grades', function (req, res) {
    var pageJSON = require('../_data/tridents/grade-levels.json');
    res.send(pageJSON);
  });

  appRouter.get('/tridents/references/booking-locations', function (req, res) {
    var pageJSON = require('../_data/tridents/ccr.json');
    res.send(pageJSON);
  });

  appRouter.get('/tridents/references/support-types', function (req, res) {
    var pageJSON = require('../_data/tridents/support-types.json');
    res.send(pageJSON);
  });

  // Dashboard - Models list on the client details screen, in a Trident
  appRouter.get('/tridents/:id/entities/:entityId/:orgLocId/models', function (req, res) {
    var pageJSON = require('../_data/tridents/select-model.json');
    if (req.params.entityId === '6d8c1947-6c1d-4f62-a9c6-fa78ed8def42') {
      pageJSON = require('../_data/tridents/select-model-empty.json');
    }
    res.send(pageJSON);
  });

  // Delete Trident
  appRouter.delete('/tridents/:id', function (req, res) {
    res.status('204').send();
  });

  // Update Credit Grade for Client Model Trident
  appRouter.put('/tridents/:id/clients/:entityId/models/:modelId/creditgrade/:creditGrade', function (req, res) {
    var pageJSON = require('../_data/tridents/update-credit-grade.json');
    res.send(pageJSON);
  });

  // Update Select Model
  appRouter.put('/tridents/:id/clients/:entityId/:orgLoc/models/:modelId', function (req, res) {
    res.status('204').send();
  });

  // Delete Select Model
  appRouter.delete('/tridents/:id/clients/:entityId/:orgLoc/models/:modelId', function (req, res) {
    res.status('204').send();
  });

  // Create Trident
  appRouter.post('/tridents/', function (req, res) {
    var newTridentJSON = require('../_data/tridents/100/new-trident.json');
    res.send(newTridentJSON);
  });

  // Add Client
  appRouter.post('/tridents/:id/entities', function (req, res) {
    res.status('204').send();
  });

  // Input values Post
  appRouter.post('/tridents/:id/clients/:entityId/:orginLoc/inputvalues/', function (req, res) {
    res.status('204').send();
  });

  // Input values Put
  appRouter.put('/tridents/:id/clients/:entityId/:orginLoc/inputvalues/:modelId', function (req, res) {
    res.status('204').send();
  });

  // client borrower check
  appRouter.post('/tridents/clients/mainborrower', function (req, res) {
    var pageJSON = require('../_data/tridents/main-borrower.json');
    res.send(pageJSON);
  });

  // quick edit post
  appRouter.post('/tridents/:id/quickupdate', function (req, res) {
    res.status('204').send();
  });

  // Deactivate a Client
  appRouter.put('/tridents/:id/entities/deactivate', function (req, res) {
    res.status('204').send();
  });

  // Activate a Client
  appRouter.put('/tridents/:id/entities/activate', function (req, res) {
    res.status('204').send();
  });

  // Activate a Client
  appRouter.put('/tridents/:id/assigngroup/:entityXRefId/:groupId', function (req, res) {
    res.status('204').send();
  });

  app.use('/api', appRouter);
};
