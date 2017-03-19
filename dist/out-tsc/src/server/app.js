"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var HeroRouter_1 = require("./HeroRouter");
// Creates and configures an ExpressJS web server.
var App = (function () {
    //Run configuration methods on the Express instance.
    function App() {
        console.log("constructing server app");
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
        console.log("test32");
        console.log("dir: " + __dirname + '/../../../../dist');
        this.express.use('/', express.static(__dirname + '/../../../../dist'));
        //api routes
        this.express.use('/api/v1/heroes5', HeroRouter_1.default);
        // all other routes are handled by Angular
        // let router = express.Router();  
        // router.get('/*', (req, res) => {
        //   res.sendFile(path.join(__dirname,'../../../index.html'));
        // });
        // this.express.use('/', router);
        this.express.get('/*', function (req, res) {
            res.sendFile(path.join(__dirname, '../../../index.html'));
        });
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map