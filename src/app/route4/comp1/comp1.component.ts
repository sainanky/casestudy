import { Component, Input, OnInit } from '@angular/core';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  constructor(private _route4 : Route4Service) { }
  timerVal : number = 0;

  ngOnInit(): void {
    this._route4.currentComp1Source.subscribe(res=>{
      this.timerVal = res;
    });
  }

  ngOnChanges(){
  }

}
