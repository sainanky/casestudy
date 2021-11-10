import { Component, Input, OnInit } from '@angular/core';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  constructor(private _route4 : Route4Service) { }
  countArr : any;

  ngOnInit(): void {
    this._route4.currentComp3Source.subscribe(res=>{
      if(res){
        console.log("dsd")
        this.countArr = res;
      }
    });
  }

}
