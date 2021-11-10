import { Component, Input, OnInit } from '@angular/core';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.scss']
})
export class Comp4Component implements OnInit {

  constructor(private _route4 : Route4Service) { }
  count : any;

  ngOnInit(): void {
    this._route4.currentComp4Source.subscribe(res=>{
      if(res){
        this.count = res;
      }
    })
  }

}
