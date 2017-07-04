module.exports = function (app) {
    var express = require('express'), router = express.Router();

    router.get('/getCaseData', function (req, res) {
        var data =  require('./activities/cdd.json')
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });

    app.use('/api/rmwb/cddClientReports', router);
};
