module.exports = function(app) {
  var express = require('express');
  var calendarRouter = express.Router();

  calendarRouter.get('/', function(req, res) {
    var pageJSON, activityJSON, currentTimestamp = Date.now();
    pageJSON = {
        "scheduler": {
          "id": 1,
          "events": [{
              "id": 1,
              "start": currentTimestamp,
              "end": currentTimestamp + (60 * 60 * 1000),
              "isAllDay": false,
              "title": "Breakfast"
          }, {
              "id": 2,
              "start": currentTimestamp + (2 * 60 * 60 * 1000),
              "end": currentTimestamp + (3* 60 * 60 * 1000),
              "title": "Job Interview"
          }, {
              "id": 3,
              "start": currentTimestamp + (5 * 24 * 60 * 60 * 1000),
              "end": currentTimestamp + (5 * 24 * 61 * 60 * 1000),
              "isAllDay": false,
              "title": "Interview 12345"
          }, {
              "id": 4,
              "start": currentTimestamp + (15 * 24 * 60 * 60 * 1000),
              "end": currentTimestamp + ((60 * 60 * 1000) * ((15 * 24) + 1)),
              "title": "Interview 1234567"
          }]
        }
    };
    activityJSON = require('./calendar/activity-list.json');
    res.send({
      "calendar": {
        "id": 1,
        "activityList": activityJSON.activityList,
        "scheduler": pageJSON.scheduler
      }
    });
  });

  calendarRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  calendarRouter.get('/:id', function(req, res) {
    res.send({
      'calendar': {
        id: req.params.id
      }
    });
  });

  calendarRouter.put('/:id', function(req, res) {
    res.send({
      'calendar': {
        id: req.params.id
      }
    });
  });

  calendarRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/calendar', calendarRouter);
};
