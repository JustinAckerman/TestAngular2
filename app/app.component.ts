import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
   <nav>
  <a routerLink="home" routerLinkActive="active">Home</a>
  <a routerLink="about" routerLinkActive="active">About</a>
  </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `,
})
export class AppComponent  { name = 'Angular'; }
