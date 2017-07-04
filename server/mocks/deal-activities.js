/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var psrRouter = express.Router();

  psrRouter.get('/dealActivitiesPicklists', function(req, res) {
    var pageJSON = require('./deal-activities/deal-activity-picklist.json');
    res.send(pageJSON);
  });

  psrRouter.get('/psrForm', function(req, res) {
    var pageJSON = require('./deal-activities/psr-form-model.json');
    res.send(pageJSON);
  });

  psrRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  psrRouter.get('/:id', function(req, res) {
    var pageJSON = require('./deal-activities/psr-form-model.json');
    res.send(pageJSON);
  });

  psrRouter.put('/:id', function(req, res) {
    res.send({
      'psr': {
        id: req.params.id
      }
    });
  });

  psrRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  //psr activity data payload for CF/CM
  psrRouter.get('/psrActivityPayloads/:id', function(req, res) {
    var pageJSON;

    pageJSON = require('./deal-activities/psr-activity-payload.json');
    //pageJSON.dealChecklist.dealIdRef = req.params.id;
    pageJSON.psrActivityPayload.dealIdRef = req.params.id;

    res.send(pageJSON);
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/psr', require('body-parser').json());
  app.use('/api/dealActivity', psrRouter);
};
