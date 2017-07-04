module.exports = function (app) {
    var express = require('express'),
        mockServerRouter = express.Router();

    mockServerRouter.get('/profile', function (req, res) {
        var data =  {
			"profileHome" : {
               "id": 1319360,
               "pseudoCount": "10",
               "loginCount": "10",
			   "scoreCardAccessible": true,
			   "icfiScoreCardAccessible": true,
			   "icfiScoreCardHeadRoleAccess": true
		   },
		   "meta": {
		     "mstrBaseUrl": "http://10.26.166.101:8884/MicroStrategy/servlet/mstrWeb",
			 "obieeAppUrl": "http://10.20.175.178:9502",
			 "obieeAdHocReportUrl": "http://10.20.175.178:9505"
		   }
		};

        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });
    app.use('/api/scorecard/user', mockServerRouter);
}
