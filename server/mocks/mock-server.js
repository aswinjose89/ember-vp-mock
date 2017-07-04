module.exports = function (app) {
  var express = require('express');
  var mockServerRouter = express.Router(),
    id = 1441262408449, startIndex = 1, rows = 1,
    children = 1441262408407;

  mockServerRouter.get('/core', function (req, res) {
    var tridentSearchJSON, pageJSON;
    if (req.query['searchEntity'] !== undefined && req.query['searchEntity'] === 'client-tri') {
      if (req.query['serviceQueryName'] !== undefined && req.query['serviceQueryName'] === 'getAssociatedSubsidiaries') {
        tridentSearchJSON = require('./search/core/clients-sub.json');
      } else {
        tridentSearchJSON = require('./search/core/clients.json');
      }

      res.send(tridentSearchJSON);
    } else if (req.query['searchEntity'] ===  'entitysearch') {
        pageJSON = require('./search/core/group-clients.json');
        res.send(pageJSON);
    } else {
      var data = require("./globalSearch/globalSearches.json");
      var category = req.query.searchEntity;
      var isMore = req.query.noOfRecs;

      if (category) {
        if(isMore) {
          if(category === 'ALL_CLIENTS') {
            data = require('./globalSearch/all-clients-more.json');
          }else{
            data = require('./globalSearch/clients-more.json');
          }
        }else if (category === "deals") {
          data = require("./globalSearch/dealSearch.json");
        } else if (category === "clientSearchResult") {
          data = require("./globalSearch/clientSearches.json");
        } else if(category === 'GS_ALL') {
          data = require('./globalSearch/all.json');
        }
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.json(data);
      /*
      setTimeout( ( function() {
        res.send(data)
      }), 3000);
      */
    }
  });

  // mockServerRouter.post('/', function (req, res) {
  //     res.status(201).end();
  // });
  //
  // mockServerRouter.get('/:id', function (req, res) {
  //     res.send({
  //         'mock-server': {
  //             id: req.params.id
  //         }
  //     });
  // });
  //
  // mockServerRouter.put('/:id', function (req, res) {
  //     res.send({
  //         'mock-server': {
  //             id: req.params.id
  //         }
  //     });
  // });
  //
  // mockServerRouter.delete('/:id', function (req, res) {
  //     res.status(204).end();
  // });

  app.use('/api/search', mockServerRouter);
};
