webpackJsonp([1,4],{

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var name_list_service_1 = __webpack_require__(400);
var AboutComponent = (function () {
    function AboutComponent(list) {
        this.list = list;
    }
    AboutComponent.prototype.addName = function (newName) {
        this.list.add(newName);
        newName = '';
        // prevent default form submit behavior to refresh the page
        return false;
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about',
            styles: [
                "\n      ul li a {\n        color:blue;\n        cursor:pointer;\n      }\n    "
            ],
            template: __webpack_require__(460),
            providers: [name_list_service_1.NameList]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof name_list_service_1.NameList !== 'undefined' && name_list_service_1.NameList) === 'function' && _a) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var ChartComponent = (function () {
    function ChartComponent() {
        //   public barChartOptions:any = {
        //     scaleShowVerticalLines: false,
        //     responsive: true
        //   };
        //   public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
        //   public barChartType:string = 'bar';
        //   public barChartLegend:boolean = true;
        //   public barChartData:any[] = [
        //     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        //     {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
        //   ];
        //   // events
        //   public chartClicked(e:any):void {
        //     console.log(e);
        //   }
        //   public chartHovered(e:any):void {
        //     console.log(e);
        //   }
        //   public randomize():void {
        //     // Only Change 3 values
        //     let data = [
        //       Math.round(Math.random() * 100),
        //       59,
        //       80,
        //       (Math.random() * 100),
        //       56,
        //       (Math.random() * 100),
        //       40];
        //     let clone = JSON.parse(JSON.stringify(this.barChartData));
        //     clone[0].data = data;
        //     this.barChartData = clone;
        //     /**
        //      * (My guess), for Angular to recognize the change in the dataset
        //      * it has to change the dataset variable directly,
        //      * so one way around it, is to clone the data, change it and then
        //      * assign it;
        //      */
        //   }
        // }
        this.lineChartData = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        //   public lineChartData:any[] = [
        //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
        // ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.pieChartType = 'pie';
        // Pie
        this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
        this.pieChartData = [300, 500, 100];
    }
    ChartComponent.prototype.randomizeType = function () {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
        this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
    };
    ChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.randomize = function () {
        // Only Change 3 values
        var data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        this.lineChartData = data;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    ChartComponent = __decorate([
        core_1.Component({
            selector: 'chart',
            template: __webpack_require__(461)
        }), 
        __metadata('design:paramtypes', [])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            template: __webpack_require__(462),
            styles: [__webpack_require__(455)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        core_1.Component({
            template: '<h2>Page not found</h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 286;


/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var platform_browser_dynamic_1 = __webpack_require__(365);
var app_module_1 = __webpack_require__(397);
var environment_1 = __webpack_require__(401);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(151);
// import { ComposeMessageComponent }  from './compose-message.component';
var can_deactivate_guard_service_1 = __webpack_require__(399);
var selective_preloading_strategy_1 = __webpack_require__(398);
var not_found_component_1 = __webpack_require__(258);
var home_component_1 = __webpack_require__(257);
var about_component_1 = __webpack_require__(255);
var chart_component_1 = __webpack_require__(256);
var appRoutes = [
    { path: '', component: chart_component_1.ChartComponent, pathMatch: 'full' },
    { path: 'home',
        component: home_component_1.HomeComponent
    },
    { path: 'about',
        component: about_component_1.AboutComponent
    },
    { path: 'chart',
        component: chart_component_1.ChartComponent
    },
    { path: '**', component: not_found_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes, { preloadingStrategy: selective_preloading_strategy_1.SelectivePreloadingStrategy, enableTracing: true })
            ],
            exports: [
                router_1.RouterModule
            ],
            providers: [
                can_deactivate_guard_service_1.CanDeactivateGuard,
                selective_preloading_strategy_1.SelectivePreloadingStrategy
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(151);
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.name = 'Angular';
        console.log("app component constructor");
        //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: "<h1>Hello {{name}}</h1>\n   <nav>\n  <a routerLink=\"home\" routerLinkActive=\"active\">Home</a>\n  <a routerLink=\"about\" routerLinkActive=\"active\">About</a>\n  <a routerLink=\"chart\" routerLinkActive=\"active\">Chart</a>\n  </nav>\n    <router-outlet></router-outlet>\n    <router-outlet name=\"popup\"></router-outlet>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(143);
var router_1 = __webpack_require__(151);
var app_component_1 = __webpack_require__(396);
var app_routing_module_1 = __webpack_require__(395);
var home_component_1 = __webpack_require__(257);
var about_component_1 = __webpack_require__(255);
var chart_component_1 = __webpack_require__(256);
var not_found_component_1 = __webpack_require__(258);
var ng2_charts_1 = __webpack_require__(458);
var AppModule = (function () {
    // Diagnostic only: inspect router configuration 
    function AppModule(router) {
        this.router = router;
        console.log("app module constructor");
        // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, ng2_charts_1.ChartsModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, about_component_1.AboutComponent, chart_component_1.ChartComponent, not_found_component_1.PageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
__webpack_require__(466);
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(11);
var SelectivePreloadingStrategy = (function () {
    function SelectivePreloadingStrategy() {
        this.preloadedModules = [];
    }
    SelectivePreloadingStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            // add the route path to our preloaded module array
            this.preloadedModules.push(route.path);
            // log the route path to the console
            console.log('Preloaded: ' + route.path);
            return load();
        }
        else {
            return Observable_1.Observable.of(null);
        }
    };
    SelectivePreloadingStrategy = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SelectivePreloadingStrategy);
    return SelectivePreloadingStrategy;
}());
exports.SelectivePreloadingStrategy = SelectivePreloadingStrategy;
//# sourceMappingURL=selective-preloading-strategy.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var CanDeactivateGuard = (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());
exports.CanDeactivateGuard = CanDeactivateGuard;
//# sourceMappingURL=can-deactivate-guard.service.js.map

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var NameList = (function () {
    function NameList() {
        this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    NameList.prototype.get = function () {
        return this.names;
    };
    NameList.prototype.add = function (value) {
        console.log(value);
        this.names.push(value);
    };
    NameList.prototype.remove = function (index) {
        this.names.splice(index, 1);
    };
    return NameList;
}());
exports.NameList = NameList;
//# sourceMappingURL=name_list.service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 455:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(171)();
// imports


// module
exports.push([module.i, ".note {\r\n  color: #a8a8a8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  For reward, here is a list of awesome computer scientists!\r\n</p>\r\n\r\n<p>\r\n  You want more? Add them yourself!\r\n</p>\r\n\r\n<form (submit)=\"addName(newname.value); \">\r\n  <input #newname>\r\n  <button type=\"submit\">Add</button>\r\n</form>\r\n\r\n<ul>\r\n  <!--<li *ngFor=\"#name of list.get(); #i = index;\"><span>{{name}}</span>&nbsp;<a (click)=\"list.remove(i)\">remove</a></li>-->\r\n  <li *ngFor=\"let name of list.get(); let i = index\"><span>{{name}}</span>&nbsp;<a (click)=\"list.remove(i)\">remove</a></li>\r\n</ul>\r\n"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "\r\n <h1>Howdy!</h1>\r\n\r\n<!--<div>\r\n  <div style=\"display: block\">\r\n    <canvas baseChart\r\n            [datasets]=\"barChartData\"\r\n            [labels]=\"barChartLabels\"\r\n            [options]=\"barChartOptions\"\r\n            [legend]=\"barChartLegend\"\r\n            [chartType]=\"barChartType\"\r\n            (chartHover)=\"chartHovered($event)\"\r\n            (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n  <button (click)=\"randomize()\">Update</button>\r\n</div>-->\r\n\r\n  <div class=\"col-md-12 text-center\" style=\"margin-top: 10px;height: 50%\">\r\n    <button (click)=\"randomizeType()\" style=\"display: inline-block\">Toggle</button>\r\n     <button (click)=\"randomize()\">Update</button>\r\n  </div>\r\n\r\n  <div class=\"col-md-6\">\r\n\r\n    <canvas baseChart\r\n                [data]=\"lineChartData\"\r\n                [labels]=\"lineChartLabels\"\r\n                [options]=\"lineChartOptions\"\r\n                [chartType]=\"lineChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <canvas baseChart\r\n                [data]=\"pieChartData\"\r\n                [labels]=\"pieChartLabels\"\r\n                [chartType]=\"pieChartType\"\r\n                (chartHover)=\"chartHovered($event)\"\r\n                (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = " <h1>Howdy!</h1>\r\n\r\n<h2>\r\n  Gratz! \r\n  <!--<smile></smile>-->\r\n</h2>\r\n\r\n<p class=\"note\">\r\n  TEST WORKED!\r\n  Click <em>about (above)</em> to get your reward!\r\n</p>\r\n"

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(287);


/***/ })

},[480]);
//# sourceMappingURL=main.bundle.js.map