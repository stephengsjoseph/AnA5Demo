import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { BasictableComponent } from './basictable/basictable.component';

import { PaginatedtableComponent } from './paginatedtable/paginatedtable.component';
import { FormcontrolsComponent } from './formcontrols/formcontrols.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasictableComponent,
    PaginatedtableComponent,
    FormcontrolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
