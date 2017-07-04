url = require('url'),
    util = require('util');

module.exports = function (app) {
    var express = require('express'), gemsRouter = express.Router();

    gemsRouter.get('/picklist', function (req, res) {
        var pageJSON = require('./gems/picklist.json');
        res.send(pageJSON);
    });

    gemsRouter.get('/gemsCharts', function (req, res) {
        var pageJSON = require('./gems/gems-chart.json');
        res.send(pageJSON);
    });

    gemsRouter.get('/refData', function (req, res) {
        var pageJSON = require('./gems/ref-data.json');
        res.send(pageJSON);
    });

    gemsRouter.get('/cases/:id', function (req, res) {
        var pageJSON = require('./gems/caseDetails.json');
        res.send(pageJSON);
    });

    gemsRouter.get('/serviceRequests', function (req, res) {
        try{
        var qs = url.parse( req.url, true );
        console.log(util.inspect(qs.query));
        qs.query.criteria = JSON.parse(qs.query.criteria);
        qs.query.gridFilter = JSON.parse(qs.query.gridFilter);
        if(qs.query.criteria.timeRange == '1'){
            var pageJSON = require('./gems/portfolioOneMonth.json');
        } else if(qs.query.criteria.chartType == 'SC'){
            var pageJSON = require('./gems/portfolioSLA.json');
        } else {
            var pageJSON = require('./gems/portfolio.json');
        }
        pageJSON.serviceRequest.id = Math.random();
        //pageJSON.serviceRequest.cases = pageJSON.serviceRequest.cases.reverse();
        pageJSON.serviceRequest.cases.forEach(function(el, idx){
            //el.id = Math.random();
            //el.caseReference = ""+Math.random();
        })
        var reqInp = qs.query.gridFilter;
        var pageNum = reqInp.pagination.page;
        var size = reqInp.pagination.size;
        var retJSON = JSON.parse(JSON.stringify(pageJSON));
        //filtering
        if(reqInp && reqInp.filters && reqInp.filters.length > 0){
            var filterStr = '';
            for(var i=0; i< reqInp.filters.length; i++){
                if(filterStr !== '')
                   filterStr += "&&";
                var filterCol =  reqInp.filters[i].column;
                var filterVal = reqInp.filters[i].value
                var filterCond =  reqInp.filters[i].condition;
                if(filterCond === 'contains')
                    filterStr += "el."+filterCol+".indexOf("+filterVal+") > -1";
                else
                    filterStr += "el."+filterCol+"=='"+filterVal+"'";
            }
            console.log("filterStr", filterStr, retJSON.serviceRequest.cases.length)
            retJSON.serviceRequest.cases = retJSON.serviceRequest.cases.filter(function (el) {
                return eval(filterStr);
            });
            console.log("filterStr", filterStr, retJSON.serviceRequest.cases.length)
        }
        //Sorting
        if(reqInp && reqInp.sort !== null && typeof reqInp.sort !== "undefined"){
            var sortCol =  reqInp.sort.column;
            var reverse =  reqInp.sort.isAsc;
            sortOn(retJSON.serviceRequest.cases, sortCol, reverse, false);
        }
        //pagination
        if (retJSON.serviceRequest.cases.length > 9)
            retJSON.serviceRequest.cases = retJSON.serviceRequest.cases.splice((pageNum - 1) * size, ((pageNum - 1) * size) + size);
       res.send(retJSON);
        //res.send(pageJSON);
        }catch(e){
            console.log("********", e);
            var emptyJSON = require('./gems/portfolioEmpty.json');
            emptyJSON.serviceRequest.id = Math.random();
            res.send(emptyJSON);
        }
    })
    function sortByKey(array, key) {
        return array.sort(function(a, b) {
            var x = a[key]; var y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }
    var sortOn = function (arr, prop, reverse, numeric) {
        var sort_by = function (field, rev, primer) {
            return function (a, b) {
                a = primer(a[field]), b = primer(b[field]);
                return ((a < b) ? -1 : ((a > b) ? 1 : 0)) * (rev ? -1 : 1);
            }
        }
        if (numeric) {
            arr.sort(sort_by(prop, reverse, function (a) {
                return parseFloat(String(a).replace(/[^0-9.-]+/g, ''));
            }));
        } else {
            arr.sort(sort_by(prop, reverse, function (a) {
                return String(a).toUpperCase();
            }));
        }
    }

    gemsRouter.get('/complaintHeader', function (req, res) {
        var pageJSON = require('./gems/complaint-header.json');
        res.send(pageJSON);
    });
    gemsRouter.post('/clientComplaints', function (req, res) {
        var pageJSON = require('./gems/client-complaint.json');
        res.send(pageJSON);
    });
    gemsRouter.get('/clientComplaint/?:id', function (req, res) {
        var pageJSON = require('./gems/client-complaint-get.json');
        res.send(pageJSON);
    });
    gemsRouter.get('/complaintPicklist?:id', function (req, res) {
        var query = require('url').parse(req.url, true).query;
        var pageJSON = require('./gems/picklist-query.json');
        var obj = { complaintPicklist: {} };
        obj.complaintPicklist.id = "1";
        obj.complaintPicklist[query.picklistType] = pageJSON[query.picklistType];
        res.send(obj);
    });
    gemsRouter.get('/attachments', function (req, res) {
        var pageJSON = require('./gems/attachment.json');
        res.header("Access-Control-Allow-Origin", "*");
        res.send(pageJSON);
    });
    app.use('/api/gems', gemsRouter);
};
