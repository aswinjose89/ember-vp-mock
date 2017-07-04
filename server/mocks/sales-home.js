module.exports = function (app) {
    var express = require('express'),
        salesHomeRouter = express.Router();

    salesHomeRouter.get('/revenue/clientRevenues', function (req, res) {
        var pageJSON = "{}";
         if (req.query.currentYear === '2015') {
            pageJSON = require('./clientView/country-region-server1.json');
        } else {
            pageJSON = require('./clientView/country-region-server.json');
        }
        res.send(pageJSON);
    });

    salesHomeRouter.get('/revenue/countryRegions', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./clientView/country-region.json');
        res.send(pageJSON);
    });

    salesHomeRouter.get('/favourites', function (req, res) {
        var pageJSON = "{}";
        
        if (req.query.limit) {
            pageJSON = require('./sales/my-favourites-more.json');
        } else {
            pageJSON = require('./sales/my-favourites.json');
        }
        res.send(pageJSON);
    });

    salesHomeRouter.get('/revenue/kpis', function (req, res) {
        var pageJSON = "{}";
            pageJSON = require('./sales/user-revenue.json');
        
        res.send(pageJSON);
    });

    salesHomeRouter.get('/revenue/deals/metrics', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sales/deal-metric.json');
        res.send(pageJSON);
    });

    salesHomeRouter.get('/revenue/metrics', function (req, res) {
        var pageJSON = "{}";
        if (req.query.timePeriod === 'P12MOS') {
            pageJSON = require('./sales/revenue-gadget/revenue-gadget-P12MOS.json');
        }else if (req.query.timePeriod === 'N12MOS') {
            pageJSON = require('./sales/revenue-gadget/revenue-gadget-N12MOS.json');
        }else {
            pageJSON = require('./sales/revenue-gadget/revenue-gadget.json');
        }
        
        res.send(pageJSON);
    });

    salesHomeRouter.get('/revenue/clients', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sales/client-metrics.json');
        res.send(pageJSON);
    });
    	
    salesHomeRouter.get('/view/recents', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sales/recently-viewed.json');
        res.send(pageJSON);
    });

    salesHomeRouter.get('/activities', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sales/activity.json');
        res.send(pageJSON);
    });

    salesHomeRouter.get('/home', function (req, res) {
        var pageJSON = "{}";
        pageJSON = require('./sales/home.json');
        res.send(pageJSON);
    });

    salesHomeRouter.get('/revenue/clients/top', function (req, res) {
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

    salesHomeRouter.post('/', function (req, res) {
        res.status(201).end();
    });

    salesHomeRouter.put('/:id', function (req, res) {
        res.send({
            'top-clients': {
                id: req.params.id
            }
        });
    });

    salesHomeRouter.delete('/favourites/:id', function (req, res) {
        res.status(204).end();
    });

    salesHomeRouter.post('/favourites/add', function (req, res) {
         res.send("{}");
    });
    salesHomeRouter.post('/view/recents', function (req, res) {
         res.send("{}");
    });

    app.use('/api/sales', salesHomeRouter);    
};
