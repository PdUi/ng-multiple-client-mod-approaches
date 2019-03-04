import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'dynamic', loadChildren: './dynamic-toggle/dynamic-toggle.module#DynamicToggleModule' },
      { path: 'route-matcher', loadChildren: './route-matcher-toggle/route-matcher-toggle.module#RouteMatcherToggleModule' },
      { path: 'route', loadChildren: './route-toggle/route-toggle.module#RouteToggleModule' },
      { path: 'if', loadChildren: './if-toggle/if-toggle.module#IfToggleModule' },
      { path: 'css', loadChildren: './css-class-toggle/css-class-toggle.module#CssClassToggleModule' },
      // { path: '', component: AppComponent, pathMatch: 'full' },
    ]), // , { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
