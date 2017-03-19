"use strict";
var path = require('path');
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var HeroRouter_1 = require('./HeroRouter');
// Creates and configures an ExpressJS web server.
var App = (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
        var router = express.Router();
        // placeholder route handler
        router.get('/*', function (req, res, next) {
            // res.json({
            //   message: 'Hello World2!'
            // });
            // all other routes are handled by Angular
            //app.get('/*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../index.html'));
            //});
        });
        this.express.use('/', router);
        this.express.use('/api/v1/heroes4', HeroRouter_1.default);
    };
    return App;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
//# sourceMappingURL=app.js.map