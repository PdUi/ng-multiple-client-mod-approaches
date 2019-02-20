import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'dynamic', loadChildren: './dynamic-toggle/dynamic-toggle.module#DynamicToggleModule' },
      { path: 'route', loadChildren: './route-toggle/route-toggle.module#RouteToggleModule' },
      { path: 'if', loadChildren: './if-toggle/if-toggle.module#IfToggleModule' },
      { path: 'css', loadChildren: './css-class-toggle/css-class-toggle.module#CssClassToggleModule' },
      // { path: '', component: AppComponent, pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
