import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route3Component } from './route3.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path : "",
    component : Route3Component
  }
]

@NgModule({
  declarations: [
    Route3Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule
  ]
})
export class Route3Module { }
