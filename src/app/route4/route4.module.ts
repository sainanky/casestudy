import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Route4Component } from './route4.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { FormsModule } from '@angular/forms';
import { Route4Service } from './route4.service';

const routes : Routes = [
  {
    path : "",
    component : Route4Component
  }
]

@NgModule({
  declarations: [
    Route4Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule
  ],
  providers : [Route4Service]
})
export class Route4Module { }
