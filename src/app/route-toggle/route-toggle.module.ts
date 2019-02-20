import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { RouteAppComponent } from './route-app/route-app.component';
import { Client1Component } from './client1/client1.component';
import { Client2Component } from './client2/client2.component';
import { Client3Component } from './client3/client3.component';
import { ClientGuard } from './client.guard';

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
        canActivate: [ClientGuard],
        children: [
          { path: 'client1', component: Client1Component, pathMatch: 'full' },
          { path: 'client2', component: Client2Component, pathMatch: 'full' },
          { path: 'client3', component: Client3Component, pathMatch: 'full' }
        ]
      }
    ])
  ]
})
export class RouteToggleModule { }
