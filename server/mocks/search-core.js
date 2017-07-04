module.exports = function (app) {
    var express = require('express'),
        apRouter = express.Router();

    apRouter.get('/search/core', function (req, res) {
      if(req.query.searchQuery === 'error'){
        res.status(500).send('Simulated Search Error !');
      } else {
        var pageJSON = require('./search/core/clients.json');
        res.send(pageJSON);
      }
    });

    apRouter.post('/wb/core/groupsearch', function (req, res) {
      if(req.query.searchQuery === 'error'){
        res.status(500).send('Simulated Search Error !');
      } else {
        var pageJSON = require('./search/core/groupsearch.json');
        res.send(pageJSON);
      }
    });
    apRouter.post('/core/groupsearch', function (req, res) {
      if(req && req.query && req.query.searchQuery === 'error'){
        res.status(500).send('Simulated Search Error !');
      } else {
        var pageJSON = require('./search/core/groupsearch.json');
        res.send(pageJSON);
      }
    });
    apRouter.post('/core/entitysearch', function (req, res) {
      if(req.query.searchQuery === 'error'){
        res.status(500).send('Simulated Search Error !');
      } else {
        var pageJSON = require('./search/core/entitysearch.json');
        res.send(pageJSON);
      }
    });
    apRouter.post('/core/usersearch', function (req, res) {
      if(req.query.searchQuery === 'error'){
        res.status(500).send('Simulated Search Error !');
      } else {
        var pageJSON = require('./search/core/usersearch.json');
        res.send(pageJSON);
      }
    });

    app.use('/api', apRouter);
};
