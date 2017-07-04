module.exports = function (app) {
    var express = require('express'), projectRouter = express.Router();

    projectRouter.get('/searchMembers', function (req, res) {
    	var pageJSON = "{}";
        if (req.query.searchValue) {
            pageJSON = require('./core/userSearch/ps-users.json');
        }
        res.send(require('./core/userSearch/ps-users.json'));
    });

    app.use('/api/core/users', projectRouter);
};
