url = require('url'),
util = require('util');
module.exports = function(app) {
  var express = require('express'),
    dpRouter = express.Router();
  //var multiparty = require('multiparty');

  dpRouter.get('/leadsAdmin/leadAuditTrails?:id', function(req, res) {
    var page = req.param('page');
    var size = req.param('size');
    var sort = req.param('sort');
    var type = JSON.parse(req.query.request).type;
    var pageJSON;
    if (type == 'ALERT') {
      pageJSON = require('./leads/audit-trail-alert.json');
    } else {
      pageJSON = require('./leads/audit-trail.json');
    }
    res.send(pageJSON);
  });
  dpRouter.post('/leadsAdmin/upload', function(req, res) {
    res.setHeader('Access-Control-Origin', '*');
    var myFunction = function() {
      clearTimeout(timeout);
      res.send({
        data: "success",
        status_code: "LEADS-100",
        status_message: "Uploaded Successfully",
        result: {
          id: Math.floor(Math.random() * 1000100001)
        }
      });
    };
    var timeout = setTimeout(myFunction, Math.floor(Math.random() * 2000));
  });

  dpRouter.get('/leadsAdmin/downloads?:param', function(req, res) {
    var pageJSON = require('./leads/download.json');
    res.send(pageJSON);
  });

  dpRouter.get('/management/leadSummaries?:id', function(req, res) {
     var qs = url.parse( req.url, true );
    qs.query.request = JSON.parse(qs.query.request);
    var page = qs.query.request.gridFilter.pagination.page;
    var status = JSON.parse(req.query.request).criteria.status;
    var expiresInDays = JSON.parse(req.query.request).criteria.expiresInDays;
    var size = 2;
    var pageJSON = require('./leads/lead-audit-summary.json');
    if(status == 'qualified'){
      pageJSON = require('./leads/lead-audit-summary-qualified.json');
    }else if(status == 'disqualified'){
      pageJSON = require('./leads/lead-audit-summary-disqualified.json');
    }
    var retJSON = JSON.parse(JSON.stringify(pageJSON));
    retJSON.leadSummaries.id = Math.random();
    retJSON.leadSummaries.leadDetail.forEach (function(el){
        el.subject = status + expiresInDays + el.subject +  Math.random();
    });
    retJSON.leadSummaries.leadDetail = retJSON.leadSummaries.leadDetail.splice((page - 1) * size, ((page - 1) * size) + size);
    var dropdown = qs.query.request.gridFilter.filterDropDown
    if(dropdown){
      var json = {
        leadSummaries: {
          id: Math.random(),
          leadDetail: []
        }
      };
      res.send(json);
    }
    res.send(retJSON);
  });

  dpRouter.get('/management/leadDetails?:id', function(req, res) {
    var page = req.param('page');
    var size = req.param('size');
    var sort = req.param('sort');
    var pageJSON = require('./leads/lead-details.json');
    res.send(pageJSON);
  });

  dpRouter.get('/management/searchUsers?:id', function(req, res) {
    var pageJSON = require('./leads/search-assignee.json');
    res.send(pageJSON);
  });

  dpRouter.get('/leadsAdmin/leadDisqualifyReasons/:id', function(req, res) {
    var pageJSON = require('./leads/leads-disqualify-reasons.json');
    res.send(pageJSON);
  });
  dpRouter.put('/leadsAdmin/leadDisqualifyReasons/:id', function(req, res) {
    console.log("req", req.params.id);
    var pageJSON = require('./leads/leads-disqualify-reasons.json');
    res.send(pageJSON);
  });

  dpRouter.get('/management/leadDetails/:id', function(req, res) {
    console.log("req", req.params.id);
    var pageJSON = require('./leads/lead-summary-details.json');
    pageJSON.leadDetails.id = req.params.id;
    res.send(pageJSON);
  });

  dpRouter.post('/management/leadDetails?:id', function(req, res) {
    console.log("req", req.body.leadDetail, req.query.action);
    if (req.query.action === 'continue') {
      var pageJSON = require('./leads/continue-lead-detail.json');
      pageJSON.leadDetail.id = req.body.leadDetail.id;
      res.send(pageJSON);
    } else {
      var pageJSON = require('./leads/save-lead-detail.json');
      pageJSON.leadDetail.id = req.body.leadDetail.id;
      res.send(pageJSON);
    }
  });

  dpRouter.post('/management/leadDetails/:id', function(req, res) {
    var pageJSON = require('./leads/edit-lead-detail.json');
    pageJSON.leadDetail.id = req.params.id;
    res.send(pageJSON);
  });

  dpRouter.post('/management/leadProcesses', function(req, res) {
    console.log("req", req.body.leadProcess);
    var pageJSON = require('./leads/leadAction.json');
    var responseJson = pageJSON.leadAction[0];
    responseJson.leadProcess.id = req.body.leadProcess.id;
    res.send(responseJson);
    // Error Handling Check
    //res.status(400).send(pageJSON.leadAction[3]);
  });

  dpRouter.get('/management/downloadGrid?:id', function(req, res) {
    res.setHeader('Content-disposition', 'attachment; filename=downloadGrid.xls');
    res.setHeader('Content-type', 'application/octet-stream');
    res.status(200).end();
  });

  dpRouter.get('/management/group', function(req, res) {
    var pageJSON = require('./leads/group-search.json');
    res.send(pageJSON);
  });
  dpRouter.get('/management/client', function(req, res) {
    var pageJSON = require('./leads/client-search.json');
    res.send(pageJSON);
  });

  dpRouter.get('/leadsAdmin/leadPriorityMappings', function(req, res) {
    var pageJSON = '';
    if (req.query.leadType == 'ETB' && req.query.segment == 'CB') {
      pageJSON = require('./leads/leads-priority-mappings.json');
      pageJSON.leadPriorityMappings.leadType = 'ETB';
      pageJSON.leadPriorityMappings.segment = 'CB';
    } else if (req.query.leadType == 'ALERT' && req.query.segment == 'CB') {
      pageJSON = require('./leads/leads-priority-mappings-alerts.json');
      pageJSON.leadPriorityMappings.leadType = 'ALERT';
      pageJSON.leadPriorityMappings.segment = 'CB';
    } else if (req.query.leadType == 'ETB' && req.query.segment == 'CIB') {
      pageJSON = require('./leads/leads-priority-mappings-cib.json');
      pageJSON.leadPriorityMappings.leadType = 'ETB';
      pageJSON.leadPriorityMappings.segment = 'CIB';
    } else {
      pageJSON = require('./leads/leads-priority-mappings.json');
      pageJSON.leadPriorityMappings.leadType = 'ALERT';
      pageJSON.leadPriorityMappings.segment = 'CIB';
    }
    res.send(pageJSON);
  });
  dpRouter.put('/leadsAdmin/leadPriorityMappings/:id', function(req, res) {
    var pageJSON = '';
    if (req.body.leadPriorityMappings.leadType == 'ETB' && req.body.leadPriorityMappings.segment == 'CB') {
      pageJSON = require('./leads/leads-priority-mappings.json');
      pageJSON.leadPriorityMappings.leadType = 'ETB';
      pageJSON.leadPriorityMappings.segment = 'CB';
    } else if (req.body.leadPriorityMappings.leadType == 'ALERT' && req.body.leadPriorityMappings.segment == 'CB') {
      pageJSON = require('./leads/leads-priority-mappings-alerts.json');
      pageJSON.leadPriorityMappings.leadType = 'ALERT';
      pageJSON.leadPriorityMappings.segment = 'CB';
    } else if (req.body.leadPriorityMappings.leadType == 'ETB' && req.body.leadPriorityMappings.segment == 'CIB') {
      pageJSON = require('./leads/leads-priority-mappings-cib.json');
      pageJSON.leadPriorityMappings.leadType = 'ETB';
      pageJSON.leadPriorityMappings.segment = 'CIB';
    } else {
      pageJSON = require('./leads/leads-priority-mappings.json');
      pageJSON.leadPriorityMappings.leadType = 'ALERT';
      pageJSON.leadPriorityMappings.segment = 'CIB';
    }
    res.send(pageJSON);
  });

  dpRouter.get('/management/leadPicklists', function(req, res) {
    var pageJSON = require('./leads/leads-picklist.json');
    res.send(pageJSON);
  });
  dpRouter.get('/management/picklist', function(req, res) {
    var pageJSON = require('./leads/leads-picklist.json');
    res.send(pageJSON);
  });
  dpRouter.put('/management/leadPicklists/:id', function(req, res) {
    console.log("req", req.params.id);
    var pageJSON = require('./leads/leads-picklist.json');
    res.send(pageJSON);
  });
  dpRouter.post('/management/leadPicklists', function(req, res) {
    console.log("req", req.params);
    var pageJSON = require('./leads/leads-picklist.json');
    res.send(pageJSON);
  });
  dpRouter.get('/management/picklist', function(req, res) {
    console.log("req", req.params);
    var pageJSON = require('./leads/leads-picklist.json');
    res.send(pageJSON);
  });

  app.use('/api/leads', dpRouter);
};
