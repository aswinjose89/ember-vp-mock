module.exports = function (app) {
    var express = require('express'),
        mockServerRouter = express.Router();

    mockServerRouter.get('/search', function (req, res) {
        var data =  {
            users : [{
                    "id": 1380327,
                    "roleHead":"N",
                    "psId":"1380327",
                    "firstName":"Comfort Warona",
                    "lastName":"Molelekeng",
                    "department":"BRDB, Branch Mgmt-Palapye",
                    "emailId": "comfort.warona@sc.com",
                    "jobTitle":"Director,Client Coverage Management,FI CCM-G,SCB UNITED STATES",
                    "shortDescription":null,
                    "userCountry":"Botswana",
                    "roleHeadType":1,
                    "atwUserType":1,
                    "atwUser":"N",
                    "imageLink": "wb-ui-base-app/images/user-photo.jpg",
                    "telephoneNumber" : "+1 (212) 667 0192",
                    "mobileNumber" : "(917) 445 6324",
                    "address" : "095 Avenue of Americas, New York, NY 10036",
                    "pseudoId" : 2000022,
                    "workbenchRoles" : "CDD_REPORT_VIEWER,CCM,GM,CCTADMIN,RM",
                }]
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });

    mockServerRouter.post('/profileInfo/save', function (req, res) {
        var data =  {
          "userProfile": {
            "roleHead": "N",
            "psId": "1297014",
            "firstName": "Sean Robert",
            "lastName": "Wallace",
            "emailId": "Sean.Wallace@sc.com",
            "telephoneNumber" : "+1 (212) 667 0192",
            "mobileNumber" : "(917) 445 6324",
            "address" : "095 Avenue of Americas, New York, NY 10036",
            "department": "Group Head-OCC-WB",
            "jobTitle": "Group Head of Origination & Client Coverage, Whole",
            "shortDescription": null,
            "userCountry": "Singapore",
            "roleHeadType": 1,
            "atwUserType": 0,
            "atwUser": "Y",
            "ldapRoles": [
              "ROLE_GM",
              "ROLE_CET_HUB",
              "ROLE_CCT_ADMIN",
              "ROLE_RM"
            ],
            "pseudoId": "1297014"
          },
          "userPreferenceMap": {
            "PREF0001_Locale": "English",
            "PREF0002_Client_Search_Filter": {
              "Client_Country": "India",
              "Client_Name": "Standard Chartered Bank"
            },
            "PREF0003_Group_Search_Filter": {
              "Group_Country": "Singapore",
              "Group_Name": "JP Morgan Group PLC"
            },
            "PREF0006_User_View": "Portfolio",
            "PREF0005_Preferred_Home_Page": "SALES_HOME",
            "PREF0009_Preferred_Pseudo_Id": "1297014",
            "PREF0007_Credit_Widget_Layout": {
              "1": {
                "rowId": 1,
                "position": "11",
                "size": "2",
                "component": "wb-creditevents-gadget"
              }
            },
            "PREF0004_Widget_Layout": {
              "1": {
                "position": 11,
                "widgetCode": "WDT1"
              },
              "2": {
                "position": 12,
                "widgetCode": ""
              },
              "3": {
                "position": 21,
                "widgetCode": ""
              },
              "4": {
                "position": 22,
                "widgetCode": ""
              }
            },
            "PREF0008_Preferred_Name": "Sean Robert- part123",
            "PREF0009_Prospects": {}
          }
        };
        res.header("Access-Control-Allow-Origin", "*");
        res.json(data);
    });
    app.use('/api/core/users', mockServerRouter);
}
