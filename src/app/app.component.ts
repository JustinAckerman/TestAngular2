import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router }           from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{name}}</h1>
   <nav>
  <a routerLink="home" routerLinkActive="active">Home</a>
  <a routerLink="about" routerLinkActive="active">About</a>
  <a routerLink="chart" routerLinkActive="active">Chart</a>
  </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `,
})
export class AppComponent  { 
  name = 'Angular';
  constructor(public router: Router) {
    console.log("app component constructor");
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  } 
}
