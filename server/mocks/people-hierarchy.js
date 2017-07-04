module.exports = function (app) {
    var express = require('express'),
        mockServerRouter = express.Router();

    mockServerRouter.get('/peopleHierarchy/:psId', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        var user, pageJSON = "{}";
        pageJSON = require('./people-hierarchy/people-hierarchy.json');
        user = pageJSON.peopleHierarchies.filter(function (a) {
            return (a.x_alias === req.params.psId);
        });
        
        res.send({peopleHierarchy: user[0]});
    });

    mockServerRouter.get('/peopleHierarchy', function (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        //res.setHeader('Content-type', 'application/x-javascript; charset=utf-8');
        var user, pageJSON = "{}";
        pageJSON = require('./people-hierarchy/people-hierarchy.json');
        console.log('req.query.x_alias =>' + req.query.x_alias);
        if (req.query.x_alias) {
        	console.log('In filter Query');
        	user = pageJSON.peopleHierarchies.filter(function (a) {
	            return (a.x_manager_alias === req.query.x_alias);
	        });
        } else if (req.query.filterQuery) {
        	console.log('In filter Query');
        	// user = pageJSON.peopleHierarchies.filter(function (a) {
	        //     return (a.x_alias.toLowerCase().indexOf(req.query.filterQuery) >-1 || a.x_first_name.toLowerCase().indexOf(req.query.filterQuery) >-1 ||
	        //     	a.x_last_name.toLowerCase().indexOf(req.query.filterQuery) >-1);
	        // });
    		user =  [{
			        "x_alias": "1297014",
			        "x_first_name": "Sunny Sun Yu",
			        "x_last_name": "Leung",
			        "x_manager_alias": "1102424",
			        "email": "Sunny.SY.Leung@sc.com",
			        "title": "Branch Manager",
			        "department": "BB Branch Managers",
			        "country": "Hong Kong",
			        "role": "RM",
			        "hasNodes": true,
			        "breadcrums": "/1001049/1302275/1428867/1102441/1134875/1339211/1102424/1297014",
			        "office": "+65 6530 3326",
			        "mobile": "+65 9711 2868",
			        "address": null,
			 		"childNodes": [{
				        "x_alias": "1324521",
				        "x_first_name": "Kong Sang",
				        "x_last_name": "Tsui",
				        "x_manager_alias": "1297014",
				        "email": "Steven-Kong-Sang.Tsui@sc.com",
				        "title": "Relationship Manager, Priority Banking",
				        "department": "BB RM, PrB Mei Foo Stage I Br",
				        "country": "Hong Kong",
				        "role": null,
				        "breadcrums": "/1001049/1302275/1428867/1102441/1134875/1339211/1102424/1297014/1324521",
				        "office": null,
				        "mobile": null,
				        "address": null, 
				  		"hasNodes": false,
				        "isFirstLevel": false,
				        "imageLink": "/api/core/users/profileInfo/image/1324521",
				        "childNodes": [],
				        "data": null
				        
				    }, {
				        "x_alias": "1101847",
				        "x_first_name": "Virginia Yin Fong",
				        "x_last_name": "Ng",
				        "x_manager_alias": "1297014",
				        "email": "Virginia.Ng@sc.com",
				        "title": "Senior Branch Services Manager",
				        "department": "BB Mei Foo Stage I Br",
				        "country": "Hong Kong",
				        "role": null,
				        "hasNodes": true,
				        "breadcrums": "/1001049/1302275/1428867/1102441/1134875/1339211/1102424/1297014/1101847",
				        "office": null,
				        "mobile": null,
				        "address": null, 
				        "isFirstLevel": false,
				        "imageLink": "/api/core/users/profileInfo/image/1101847",
				        "childNodes": [],
				        "data": null
				        
				    }],
			        "isFirstLevel": true,
			        "imageLink": "/api/core/users/profileInfo/image/1297014",
			        "data": null
			    }];
        } else {
        	user = pageJSON.peopleHierarchies.filter(function (a) {
	            return a.isFirstLevel;
	        });
        }
        
        res.send({peopleHierarchies: user, expandToPSId: '1101847'});
    });

    app.use('/api/core/users/profileInfo', mockServerRouter);
}
