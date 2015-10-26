/* jshint node:true */
/* jshint -W101 */
'use strict';
//
var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 1337;
var environment = process.env.NODE_ENV || 'dev';
process.env.NODE_ENV = environment;
/* jshint ignore:start */

//to generate custom json data go to http://www.json-generator.com/
var customersJson = JSON.parse(fs.readFileSync(__dirname + '/../server/data/customers.json', 'utf8'));
var apiErrorJson = { "result": { "error": "unknown request" } };
/* jshint ignore:end */

//logger
app.all('*', function (req, res, next) {
    console.log(req.method + ' ' + req.path);
    //console.log(req.query);

    next(); // Passing the request to the next handler in the stack.
});

switch (environment) {
    case 'build':
        console.log('*** BUILD ***');

        app.get('api', function (req, res, next) {
            res.set('Content-Type', 'application/json');
            if (req.query.action == 'get_customers') {
                res.json(customersJson);
            } else {
                res.json(apiErrorJson);
            }
            next();
        });

        app.use('/favicon.ico', express.static(__dirname + '/../server/favicon.ico'));
        app.use(express.static(__dirname + '/../../build'));

        break;
    case 'dev':
        console.log('*** DEV ***');

        app.get('/api', function (req, res, next) {
            res.set('Content-Type', 'application/json');
            if (req.query.action == 'get_customers') {
                res.json(customersJson);
            } else {
                res.json(apiErrorJson);
            }
            next();
        });

        app.use('/favicon.ico', express.static(__dirname + '/../server/favicon.ico'));
        app.use('/temp', express.static(__dirname + '/../../temp'));
        app.use('/bower_components', express.static(__dirname + '/../../bower_components'));
        app.use('/src/client/app', express.static(__dirname + '/../client/app'));
        app.use('/app/ts/', express.static(__dirname + '/../client/ts')); //for debuging ts
        app.use(express.static(__dirname + '/../client'));

        break;
}
//*****************Setup View Engine vash:
//var controllers = require('./controllers');
//app.set('views', __dirname + '/views');
//app.set('view engine', 'vash');
//controllers.init(app);

var server = http.createServer(app);

server.listen(port, function () {
    console.log('Express server listening on port ' + port);
    console.log('cwd = ' + process.cwd());
    console.log('env = ' + environment);
});