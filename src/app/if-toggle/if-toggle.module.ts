import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { IfAppComponent } from './if-app/if-app.component';

@NgModule({
  declarations: [IfAppComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: IfAppComponent, pathMatch: 'full' }])
  ]
})
export class IfToggleModule { }
