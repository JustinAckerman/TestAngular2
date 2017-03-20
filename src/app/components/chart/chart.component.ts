import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'chart',
  templateUrl: 'chart.html',
  providers: [DataService]
})

export class ChartComponent implements OnInit{

  isLoading = true;

  ngOnInit() {

    console.log("initing chart component");
    // this.getCats();

    // this.addCatForm = this.formBuilder.group({
    //   name: this.name,
    //   age: this.age,
    //   weight: this.weight
    // });
  }

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

constructor(public dataServ: DataService) {

//console.log(dataServ.getHeroes());
console.log("constructing chart component");

    this.dataServ.getHeroes().subscribe(
      data => console.log(data),
      error => console.log(error),
      () => this.isLoading = false
    );

}


  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  //   public lineChartData:any[] = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  // ];

    


  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }


 public randomize():void {
    // Only Change 3 values
    let data = [
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
  }


}