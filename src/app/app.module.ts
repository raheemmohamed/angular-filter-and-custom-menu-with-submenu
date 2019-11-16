import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuFilterComponent } from './component/menu-filter/menu-filter.component';

import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/scrollpanel';

import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';

import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    AppComponent,
    MenuFilterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    ScrollPanelModule,
    MenuModule,
    ClickOutsideModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
