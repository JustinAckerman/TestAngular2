import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ComposeMessageComponent }  from './compose-message.component';


import { CanDeactivateGuard }       from './services/can-deactivate-guard.service';
import { AuthGuard }                from './services/auth-guard.service';
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import { PageNotFoundComponent }    from './not-found.component';
import { HomeComponent }            from './components/home/home.component'
import { AboutComponent }           from './components/about/about.component'

const appRoutes: Routes = [
//   {
//     path: 'compose',
//     component: ComposeMessageComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'admin',
//     loadChildren: 'app/admin/admin.module#AdminModule',
//     canLoad: [AuthGuard]
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
//     data: { preload: true }
//   },
//   { path: '',   redirectTo: 'home', pathMatch: 'full' },
//   { path: '',
//     pathMatch: 'prefix',
//     redirectTo: '/main'
//   },
  { path: '',   component: HomeComponent, pathMatch: 'full' },

  { path: 'home',
    component: HomeComponent    
  },

   { path: 'about',
    component: AboutComponent
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