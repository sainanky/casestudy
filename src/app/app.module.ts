import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Module } from './route3/route3.module';
import { Route4Component } from './route4/route4.component';
import { Route4Module } from './route4/route4.module';
import { Route5Component } from './route5/route5.component';
import { Route6Component } from './route6/route6.component';
import { DataService } from './services/data/data.service';

const routes : Routes = [
  {
    path : "",
    redirectTo : "route1",
    pathMatch : "full"
  },
  {
    path : "route1",
    component : Route1Component
  },
  {
    path : "route2",
    component : Route2Component
  },
  {
    path : "route3",
    loadChildren : ()=> Route3Module
  },
  {
    path : "route4",
    loadChildren : ()=> Route4Module
  },
  {
    path : "route5",
    component : Route5Component
  },
  {
    path : "route6",
    component : Route6Component
  },
  {
    path : "route1",
    component : Route1Component
  }
]

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Route5Component,
    Route6Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
