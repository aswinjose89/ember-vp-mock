module.exports = function (app) {
    var express = require('express'), projectRouter = express.Router();

    projectRouter.get('/all', function (req, res) {

        var modulesToPreload = [
        'group-segments',
        'case-types',
        'isic-codes',
        'risk-types',
        'goods-types',
        'client-types',
        'legal-constitutions',
        'account-types',
        'countries',
        'product-groups',
        'custody-types',
        'document-types',
        'id-document-types',
        'document-categories',
        'legal-entities',
        'fatca-statuses',
        'fund-types',
        'md3-validation-results',
        'relationship-types',
        'business-segments',
        'products',
        'customer-groups',
        'business-sub-segments', //Curerently not coming in all service
        'country-offices', // Currently doesnt have a seperate server
        'client-relationship-types',
        'additional-codes',
        'adverse-media',
        'transaction-types',
        'risks',
        'currency-types',
        'ownership-statuses',
        'mifid-classifications',
        'adverse-media-dates',
        'exchanges',
        'vat-code-statuses',
        'client-segments',
        'client-sub-segments',
        'fatca-reasons',
        'case-statuses',
        'case-sub-statuses',
        'activity-types',
        'cdd-types'
        ],
        allJSON = {}, loadedData;

        modulesToPreload.forEach(function (module) {
            loadedData = require('./rdm/' + module + '.json');
            for (key in loadedData) {
                allJSON[key] = loadedData[key]
            }
        });

        res.send(allJSON);
    });

    projectRouter.get('/users', function (req, res) {
        var users = require('./rdm/users.json').users,
        searchTerm = req.query.searchValue.toLowerCase(), value;

        res.send({
            users : users.filter(function (a) {
            for (var key in a) {
                value = a[key];
                if (typeof value === "string") {
                    if (value.toLowerCase().indexOf(searchTerm) > -1) {
                        return true;
                    }
                }
            }
        })
        });
    });

    projectRouter.get('/business-sub-segments', function (req, res) {
        var subSegements = require('./rdm/business_sub-segments.json'),
        businessSegmentCode =  req.query.businessSegmentCode;
        if (req.query.businessSegmentCode) {
            res.send({
                businessSubSegments : subSegements.businessSubSegments.filter(function (a) {
                    return a.businessSegmentCode === businessSegmentCode;
                })
            });
        } else {
            res.send(subSegements);
        }
    });

    projectRouter.get('/:resourceName', function (req, res) {
        res.send(require('./rdm/' + req.params.resourceName + '.json'));
    });

    app.use('/api/rdm', projectRouter);
};
