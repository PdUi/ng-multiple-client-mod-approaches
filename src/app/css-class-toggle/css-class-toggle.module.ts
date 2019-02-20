import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CssAppComponent } from './css-app/css-app.component';

@NgModule({
  declarations: [CssAppComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: CssAppComponent, pathMatch: 'full' }])
  ]
})
export class CssClassToggleModule { }
