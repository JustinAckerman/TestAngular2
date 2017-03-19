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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// import { ComposeMessageComponent }  from './compose-message.component';
var can_deactivate_guard_service_1 = require('./services/can-deactivate-guard.service');
var selective_preloading_strategy_1 = require('./selective-preloading-strategy');
var not_found_component_1 = require('./not-found.component');
var home_component_1 = require('./components/home/home.component');
var about_component_1 = require('./components/about/about.component');
var chart_component_1 = require('./components/chart/chart.component');
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