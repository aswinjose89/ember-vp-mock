module.exports = function (app) {
    var express = require('express'),
        creditHomeRouter = express.Router();

    creditHomeRouter.get('/favourites', function (req, res) {
        var pageJSON = "{}";
        
        if (req.query.limit) {
            pageJSON = require('./sales/my-favourites-more.json');
        } else {
            pageJSON = require('./sales/my-favourites.json');
        }
        res.send(pageJSON);
    });
        
    creditHomeRouter.get('/view/recents', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sales/recently-viewed.json');
        res.send(pageJSON);
    });

    creditHomeRouter.get('/home', function (req, res) {
        var pageJSON = "{}";
        
        if (req.query.isFilterRequired) {
            pageJSON = require('./credit/credit-changePortfolio.json');
        } else if (req.query.applyFilters) {
            pageJSON = require('./credit/credit-applyFilter.json');
        } else {
            pageJSON = require('./credit/home.json');
        }
        res.send(pageJSON);
    });

    creditHomeRouter.post('/home', function (req, res) {
        var pageJSON = "{}";
        
        if (req.query.isFilterRequired) {
            pageJSON = require('./credit/credit-changePortfolio.json');
        } else if (req.query.applyFilters) {
            pageJSON = require('./credit/credit-applyFilter.json');
        } else {
            pageJSON = require('./credit/home.json');
        }
        res.send(pageJSON);
    });

    creditHomeRouter.get('/revenue/clients/top', function (req, res) {
        var pageJSON = "{}";
        if (req.query.filter === 'Rev') {
            pageJSON = require('./sales/top-clients/revenue.json');
        } else if (req.query.filter === 'RoRWA') {
            pageJSON = require('./sales/top-clients/rorwa.json');
        } else {
            pageJSON = require('./sales/top-clients/top-clients.json');
        }
        
        res.send(pageJSON);
    });

    creditHomeRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    creditHomeRouter.delete('/favourites/:id', function (req, res) {
        res.status(204).end();
    });

    creditHomeRouter.post('/view/recents', function (req, res) {
         res.send("{}");
    });

    creditHomeRouter.get('/charts', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./credit/credit-chart.json');
        
        res.send(pageJSON);
    });

    creditHomeRouter.get('/grids', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./credit/credit-grid.json');
        
        res.send(pageJSON);
    });

    creditHomeRouter.get('/kpis', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./credit/credit-kpi.json');
        
        res.send(pageJSON);
    });

    creditHomeRouter.get('/entity', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./credit/credit-entity.json');
        
        res.send(pageJSON);
    });

    app.use('/api/credit', creditHomeRouter);    
};
