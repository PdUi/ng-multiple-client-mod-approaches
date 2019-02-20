import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DynamicAppComponent } from './dynamic-app/dynamic-app.component';
import { DynamicDirective } from './dynamic.directive';

@NgModule({
  declarations: [
    DynamicAppComponent,
    DynamicDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: DynamicAppComponent }])
  ]
})
export class DynamicToggleModule { }
