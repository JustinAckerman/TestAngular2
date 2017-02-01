import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { Router }           from '@angular/router';

import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent }   from './components/home/home.component';
import { AboutComponent }   from './components/about/about.component';
import { ChartComponent }   from './components/chart/chart.component';
import { PageNotFoundComponent }   from './not-found.component';

import {ChartsModule} from 'ng2-charts/ng2-charts'; 

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, ChartsModule ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, ChartComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration 

  constructor(public router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}