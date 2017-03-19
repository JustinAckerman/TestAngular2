import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ComposeMessageComponent }  from './compose-message.component';


import { CanDeactivateGuard }       from './services/can-deactivate-guard.service';
import { AuthGuard }                from './services/auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { PageNotFoundComponent }    from './not-found.component';
import { HomeComponent }            from './components/home/home.component'
import { AboutComponent }           from './components/about/about.component'
import { ChartComponent }           from './components/chart/chart.component'

const appRoutes: Routes = [

  { path: '',   component: ChartComponent, pathMatch: 'full' },

  { path: 'home',
    component: HomeComponent    
  },

   { path: 'about',
    component: AboutComponent
  },

   { path: 'chart',
    component: ChartComponent
  },


  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: SelectivePreloadingStrategy, enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CanDeactivateGuard,
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule { }