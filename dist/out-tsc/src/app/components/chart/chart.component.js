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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_service_1 = require("../../services/data.service");
var ChartComponent = (function () {
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
    function ChartComponent(dataServ) {
        var _this = this;
        this.dataServ = dataServ;
        this.isLoading = true;
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
        //console.log(dataServ.getHeroes());
        console.log("constructing chart component");
        this.dataServ.getHeroes().subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    }
    ChartComponent.prototype.ngOnInit = function () {
        console.log("initing chart component");
        // this.getCats();
        // this.addCatForm = this.formBuilder.group({
        //   name: this.name,
        //   age: this.age,
        //   weight: this.weight
        // });
    };
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
            40
        ];
        this.lineChartData = data;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    };
    return ChartComponent;
}());
ChartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chart',
        templateUrl: 'chart.html',
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], ChartComponent);
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map