import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { RouteAppComponent } from './route-app/route-app.component';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';
import { Client3Component } from './client3/client3.component';

import { clientMatcher } from './matcher';

@NgModule({
  declarations: [
    RouteAppComponent,
    Client1Component,
    Client2Component,
    Client3Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: RouteAppComponent,
        children: [
          { path: 'client', component: Client1Component, matcher: clientMatcher.bind('client1') },
          { path: 'client', component: Client2Component, matcher: clientMatcher.bind('client2') },
          { path: 'client', component: Client3Component, matcher: clientMatcher.bind('client3') }
        ]
      }
    ])
  ]
})
export class RouteMatcherToggleModule { }
