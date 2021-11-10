import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route4',
  templateUrl: './route4.component.html',
  styleUrls: ['./route4.component.scss']
})
export class Route4Component implements OnInit {

  constructor() { }
  
  timerVal : number = 0;
  comp3Counts : any;
  comp4Counts : any;

  ngOnInit(): void {
  }

  getTimer(ev : any){
    this.timerVal = ev;
  }

  getComp4Count(ev : any){
    this.comp4Counts = ev;
  }

  getComp3Count(ev : any){
    this.comp3Counts = ev;
  }

}
