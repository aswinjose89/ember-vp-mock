module.exports = function (app) {
    var express = require('express'), apRouter = express.Router();
    apOldRouter = express.Router();
      apRouter.get('/history', function (req, res) {
              var pageJSON = require('./account-plan/account-plan-history.json');
        res.send(pageJSON);
    });
    apRouter.get('/audit/history/apf', function (req, res) {
        var pageJSON = require('./account-plan/apf-audit-history.json');
        res.send(pageJSON);
    });
    apRouter.get('/audit/auditexcel', function (req, res) {
        res.setHeader('Content-disposition', 'attachment; filename=audit.xls');
        res.setHeader('Content-type', 'application/octet-stream');
        res.status(200).end();
    });

    apRouter.post('/tbsales/export/excel/client-penetration', function(req, res) {
      res.setHeader('Content-disposition', 'attachment; filename=downloadGrid.xls');
      res.setHeader('Content-type', 'application/octet-stream');
      res.status(200).end();
    });

    apRouter.put('/saveAPFData/:entityType/:entityId/:id', function (req, res) {
        res.send({
            'data': 'success'
        });
    });
    apRouter.post('/coverage/attachment/uploadFile', function (req, res) {
        res.setHeader('Access-Control-Origin','*');
        var myFunction = function(){
           res.send({
                data:"success",
                result:{
                  id:Math.floor(Math.random()*1000100001)
                }
           } );
        }
        setTimeout(myFunction, Math.floor(Math.random()*2000));
    });
    apRouter.get('/coverage/attachment/download', function (req, res) {
        res.send({
             data:"success"
        });
    });
    apRouter.get('/account-plan-summary', function (req, res) {
            var pageJSON = require('./account-plan/account-plan-home.json');
            res.send(pageJSON);
    });

    apRouter.get('/account-plan-list/:entityType/:id', function (req, res) {
        var pageJSON = require('./account-plan/account-plan-list.json');
        res.send(pageJSON);
    });

    apRouter.get('/add-account-plan/:entityType/:id', function (req, res) {
        var pageJSON = require('./account-plan/add-account-plan.json');
        if(req.params.entityType=='user'){
          pageJSON = require('./account-plan/userSearch.json')
        }
        res.send(pageJSON);
    });

    apRouter.get('/picklist', function (req, res) {
        var pageJSON = require('./account-plan/ap-picklist.json');
        res.send(pageJSON);
    });

    //coverage jsons
    apRouter.get('/coverage/', function (req, res) {
        var pageJSON = require('./account-plan/coverage.json');
        res.send(pageJSON);
    });

    apRouter.put('/coverage/:id/liabilities/refresh/:id', function (req, res) {
        var pageJSON = require('./account-plan/liabilities.json');
        res.send(pageJSON);
    });

    apRouter.get('/coverage/:id/liabilities', function (req, res) {
        var pageJSON = require('./account-plan/liabilities.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/:id/client-strategy', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/:id/client-strategy-lite', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy-lite.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/:id/key-financials', function (req, res) {
        var pageJSON = require('./account-plan/key-financials.json');
        res.send(pageJSON);
    });
    apRouter.get('/peoplesoft-users', function (req, res) {
        var pageJSON = require('./account-plan/peoplesoft-users.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/:id/dealpipeline-history', function (req, res) {
        var pageJSON = require('./account-plan/dealpipeline-history.json');
        res.send(pageJSON);
    });
    apRouter.get('/dealpipeline-history/openDeals', function (req, res) {
        var pageJSON = require('./account-plan/openDeals.json');
        res.send(pageJSON);
    });
    apRouter.get('/dealpipeline-history/closedDeals', function (req, res) {
        var pageJSON = require('./account-plan/closedDeals.json');
        res.send(pageJSON);
    });
    apRouter.get('/dealpipeline-history/dealList', function (req, res) {
        var pageJSON = require('./account-plan/searchDeals.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/:id/signoff', function (req, res) {
        var pageJSON = require('./account-plan/signoff.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/:id/client-contact', function (req, res) {
        var pageJSON = require('./account-plan/clientContacts.json');
        res.send(pageJSON);
    });
    apRouter.put('/coverage/:id/client-contact/:id', function (req, res) {
        var pageJSON = require('./account-plan/clientContactsSave.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/:id/attachments', function (req, res) {
        var pageJSON = require('./account-plan/attachment.json');
        res.send(pageJSON);
    });
    apRouter.get('/contact/list', function (req, res) {
       var pageJSON = require('./account-plan/searchContact.json');
       res.send(pageJSON);
    });
   apRouter.get('/coverage/:id/client-strategy-investor', function (req, res) {
       var pageJSON = require('./account-plan/client-strategy-investor.json');
       res.send(pageJSON);
    });

    apRouter.get('/coverage/:id/wallet-sizing-funds', function (req, res) {
        var pageJSON = require('./account-plan/wallet-sizing-funds.json');
        res.send(pageJSON);
     });

     apRouter.put('/coverage/:id/wallet-sizing-fund/refresh/:id1', function (req, res) {
         var pageJSON = require('./account-plan/wallet-sizing-funds.json');
         res.send(pageJSON);
      });

      apRouter.put('/coverage/:id/wallet-sizing/refresh/:id1', function (req, res) {
          var pageJSON = require('./account-plan/wallet-sizing.json');
          res.send(pageJSON);
       });

       apRouter.put('/coverage/:id/wallet-sizing/:id1', function (req, res) {
           var pageJSON = require('./account-plan/wallet-sizing-put.json');
           res.send(pageJSON);
        });

     apRouter.get('/coverage/:id/wallet-sizing?:param', function (req, res) {
         var refresh = req.param('refresh');
         var pageJSON = require('./account-plan/wallet-sizing.json');
         if(refresh){
           pageJSON = require('./account-plan/wallet-sizing-refresh.json');
         }
         res.send(pageJSON);
      });
      apRouter.get('/refreshSettings/:id/:id1/:id2', function (req, res) {
          var pageJSON = require('./account-plan/refresh-setting.json');
          res.send(pageJSON);
       });
       apRouter.get('/account-plan-task-detail', function (req, res) {
           var pageJSON = require('./account-plan/account-plan-task-detail.json');
           res.send(pageJSON);
       });
       apRouter.put('/account-plan-task-detail/:id', function (req, res) {
           var pageJSON = require('./account-plan/account-plan-task-detail.json');
           res.send(pageJSON);
        });
       apRouter.post('/refreshSettings', function (req, res) {
           var pageJSON = require('./account-plan/refresh-setting.json');
           res.send(pageJSON);
        });
    apRouter.get('/deal/cr/apsearchdeals', function (req, res) {
      var pageJSON = require('./account-plan/search-deal.json');
      res.send(pageJSON);
    });
    apRouter.get('/coverage/attachment/deletedFiles', function (req, res) {
      var pageJSON = require('./account-plan/account-plan-task-detail.json');
      res.send(pageJSON);
    });
    apRouter.put('/contact/info/:id', function (req, res) {
      var pageJSON = require('./account-plan/searchContactDetails.json');
      res.send(pageJSON);
    });
    apRouter.get('/search-scb-contact/list', function (req, res) {
        var pageJSON = require('./account-plan/search-scb-contact.json');
        res.send(pageJSON);
    });
    apRouter.get('/coverage/key-financials/search/segment', function (req, res) {
      var pageJSON = require('./account-plan/search-segment.json');
      res.send(pageJSON);
    });
    apRouter.get('/coverage/summary', function (req, res) {
       var pageJSON = require('./account-plan/summary.json');
       res.send(pageJSON);
    });
    apRouter.get('/pdf/coverage/export-pdf', function (req, res) {
       var pageJSON = require('./account-plan/export-pdf.json');
       res.send(pageJSON);
    });
    apRouter.get('/coverage/audit/client-contact/:id', function (req, res) {
       var pageJSON = require('./account-plan/audit-history.json');
       res.send(pageJSON);
    });
    apRouter.get('/coverage/audit/client-strategy/:id', function (req, res) {
       var pageJSON = require('./account-plan/audit-history.json');
       res.send(pageJSON);
    });
    apRouter.get('/account-plan-list/audit/apf-section/:id', function (req, res) {
       var pageJSON = require('./account-plan/audit-history.json');
       res.send(pageJSON);
    });
    //estimated fees paid json get url
    apRouter.get('/coverage/:id/estimated-fees-paid', function (req, res) {
        var pageJSON = require('./account-plan/estimated-fees-paid.json');
        res.send(pageJSON);
    });
    //  TB Sales Json
    apRouter.get('/tbsales/', function (req, res) {
        var pageJSON = require('./account-plan/tbsales.json');
        res.send(pageJSON);
    });
    apRouter.get('/pdf/tbsales/export-pdf', function (req, res) {
       var pageJSON = require('./account-plan/export-pdf.json');
       res.send(pageJSON);
    });
    apRouter.get('/tbsales/:id/client-penetration/', function (req, res) {
        var pageJSON = require('./account-plan/clientPenetration.json');
        res.send(pageJSON);
    });
    apRouter.put('/tbsales/:id/client-penetration/:id1', function (req, res) {
        var pageJSON = require('./account-plan/clientPenetration.json');
        res.send(pageJSON);
    });
    apRouter.post('/tbsales/:id/client-penetration?:id1', function (req, res) {
        var pageJSON = require('./account-plan/clientPenetration.json');
        res.send(pageJSON);
    });

    apRouter.post('/tbsales/get/penetration/summary/data', function (req, res) {
        var pageJSON = require('./account-plan/summaryDetails.json');
        res.send(pageJSON);
    });
    apRouter.get('/tbsales/:id/actionplan', function (req, res) {
        var pageJSON = require('./account-plan/actionplans.json');
        res.send(pageJSON);
    });
    apRouter.get('/tbsales/:id/buyingbehaviour', function (req, res) {
        var pageJSON = require('./account-plan/buyingbehaviour.json');
        res.send(pageJSON);
    });
    apRouter.get('/tbsales/:id/signoff', function (req, res) {
        var pageJSON = require('./account-plan/signoff.json');
        res.send(pageJSON);
    });
    apRouter.get('/tbsales/:id/client-contact', function (req, res) {
        var pageJSON = require('./account-plan/clientContacts.json');
        res.send(pageJSON);
    });
    apRouter.put('/tbsales/:id/client-contact/:id', function (req, res) {
        var pageJSON = require('./account-plan/clientContactsSave.json');
        res.send(pageJSON);
    });

    apRouter.put('/contact/manualRefresh/:id', function (req, res) {
        var pageJSON = require('./account-plan/clientContactsSave.json');
        res.send(pageJSON);
    });

    apRouter.put('/tbsales/:id/financial/refresh/:id', function (req, res) {
        var pageJSON = require('./account-plan/financial.json');
        res.send(pageJSON);
    });

    apRouter.get('/tbsales/:id/financial', function (req, res) {
        var pageJSON = require('./account-plan/financial.json');
        res.send(pageJSON);
    });
    apRouter.get('/tbsales/buyingbehaviour/search/competitor', function (req, res) {
        var pageJSON = require('./account-plan/search-competitor.json');
        res.send(pageJSON);
    });
        apRouter.get('/add-account-plan/user/search', function (req, res) {
        var pageJSON = require('./account-plan/userSearch.json');
        res.send(pageJSON);
    });
    apRouter.get('/regionalTreasurer/search', function (req, res) {
    var pageJSON = require('./account-plan/regionalTreasurerSearch.json');
    res.send(pageJSON);
    });
    apRouter.get('/coverage/signoff/search/signatory', function (req, res) {
        var pageJSON = require('./account-plan/search-signatory.json');
        res.send(pageJSON);
    });
    apRouter.get('/tbsales/summary', function (req, res) {
       var pageJSON = require('./account-plan/summary.json');
       res.send(pageJSON);
    });

    // Section for Save promises to return
    apRouter.put('/coverage/:id', function (req, res) {
        var pageJSON = require('./account-plan/coverage-test.json');
        res.send(pageJSON);
    });
    apRouter.put('/add-account-plan/:entityType/:id/:id', function (req, res) {
        var pageJSON = require('./account-plan/create-account-plan.json');
        res.send(pageJSON);
    });
    apRouter.put('/coverage/:id/client-strategy/:id', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy.json');
        res.send(pageJSON);
    });
    apRouter.put('/coverage/:id/client-strategy-lite/:id', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy-lite.json');
        res.send(pageJSON);
    });
    apRouter.put('/coverage/:id/liabilities/:id', function (req, res) {
        var pageJSON = require('./account-plan/liabilities.json');
        res.send(pageJSON);
    });
    apRouter.put('/coverage/dealpipeline-history/:id', function (req, res) {
        var pageJSON = ({"msg": "success", "errorMessage": null});
        res.send(pageJSON);
    });
    apRouter.put('/coverage/:id/client-strategy-investor/:id', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy-investor.json');
        res.send(pageJSON);
    });
    apRouter.put('/coverage/:id/signoff/:id', function (req, res) {
       var pageJSON = require('./account-plan/signoff.json');
       res.send(pageJSON);
   });

    apRouter.put('/tbsales/:id/actionplan/:id', function (req, res) {
        var pageJSON = require('./account-plan/actionplans.json');
        res.send(pageJSON);
    });

    apRouter.put('/tbsales/:id/financial/:id', function (req, res) {
            var pageJSON = require('./account-plan/financial.json');
            res.send(pageJSON);
    });

    apRouter.put('/tbsales/:id/signoff/:id', function (req, res) {
       var pageJSON = require('./account-plan/signoff.json');
       res.send(pageJSON);
   });

    //Post requests
    apRouter.post('/coverage/:id/client-strategy', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy.json');
        res.send(pageJSON);
    });
    apRouter.post('/coverage/:id/client-strategy-lite', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy-lite.json');
        res.send(pageJSON);
    });
    apRouter.post('/coverage/:id/liabilities', function (req, res) {
        var pageJSON = require('./account-plan/liabilities.json');
        res.send(pageJSON);
    });
    apRouter.post('/coverage/:id/client-strategy-investor', function (req, res) {
        var pageJSON = require('./account-plan/client-strategy-investor.json');
        res.send(pageJSON);
    });
    apRouter.post('/coverage/:id/signoff', function (req, res) {
        var pageJSON = require('./account-plan/signoff.json');
        res.send(pageJSON);
    });

    apRouter.post('/tbsales/:id/liabilities', function (req, res) {
        var pageJSON = require('./account-plan/actionplan.json');
        res.send(pageJSON);
    });
    apRouter.post('/tbsales/:id/signoff', function (req, res) {
        var pageJSON = require('./account-plan/signoff.json');
        res.send(pageJSON);
    });

   apRouter.get('/company-profile/', function (req, res) {
       var pageJSON = require('./account-plan/company-profile.json');
       res.send(pageJSON);
   });

   apRouter.get('/company-profile/network/', function (req, res) {
       var pageJSON = require('./account-plan/network.json');
       res.send(pageJSON);
   });
   apRouter.get('/company-profile/operating-structure/', function (req, res) {
    var pageJSON = require('./account-plan/operating-structure.json');
    res.send(pageJSON);
});

    apRouter.get('/staticinfo', function (req, res) {
        var pageJSON = require('./account-plan/company-profile.json');
        res.send(pageJSON);
    });
    apRouter.get('/ap-client-information', function (req, res) {
       var pageJSON = require('./account-plan/client-information.json');
       res.send(pageJSON);
   });
   apRouter.put('/ap-client-information', function (req, res) {
      var pageJSON = require('./account-plan/client-information.json');
      res.send(pageJSON);
  });




   apRouter.put('/unlock?:id', function (req, res) {
      var pageJSON = require('./account-plan/signoff.json');
      res.send(pageJSON);
  });

    apRouter.get('/network', function (req, res) {
        var pageJSON = require('./account-plan/network.json');
        res.send(pageJSON);
    });

    apRouter.get('/network/FI', function (req, res) {
        var pageJSON = require('./account-plan/network-fi.json');
        res.send(pageJSON);
    });

    apRouter.get('/operating-structure', function (req, res) {
      var pageJSON = require('./account-plan/operating-structure.json');
      res.send(pageJSON);
  });

    apRouter.get('/network/searchBuyerSupplier?:id', function (req, res) {
        var pageJSON = require('./account-plan/search-supplier.json');
        res.send(pageJSON);
    });

    apRouter.get('/network/search/cmSearch', function (req, res) {
        var pageJSON = require('./account-plan/search-network-fi.json');
        res.send(pageJSON);
    });

    apRouter.post('/tbsales/saveAPReviewerComments/:id', function (req, res) {
        var pageJSON = require('./account-plan/reviewerComments.json');
        res.send(req.body);
    });
    apRouter.get('/tbsales/reviewerComments', function (req, res) {
        var pageJSON = require('./account-plan/reviewerCommentsFull.json');
        res.send(pageJSON);
    });

    apRouter.get('/companyProfileUpdatedDetails', function (req, res) {
        var pageJSON = require('./account-plan/companyProfileUpdatedDetails.json');
        res.send(pageJSON);
    });

    app.use('/api/company-profile', apRouter);

    apRouter.get('/search/cmSearch', function (req, res) {
        var pageJSON = require('./account-plan/search-network-fi.json');
        res.send(pageJSON);
    });




    apRouter.put('/unlock', function (req, res) {
       //var pageJSON = require('./account-plan/client-information.json');
       //res.send(pageJSON);
       return true;
   });

    app.use('/api/account-plan', apRouter);

    apOldRouter.get('/all?:id', function (req, res) {
       var pageJSON = require('./account-plan/old-ap-all.json');
       res.send(pageJSON);
    });
    app.use('/api/account-plan', apRouter);

    app.use('/api/accountPlans',apOldRouter);
};
