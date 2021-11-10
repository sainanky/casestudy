import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route3',
  templateUrl: './route3.component.html',
  styleUrls: ['./route3.component.scss']
})
export class Route3Component implements OnInit {

  constructor() { }
  timerVal : number = 0;

  ngOnInit(): void {
  }

  getTimer(ev : any){
    console.log(ev)
    this.timerVal = ev;
  }

}
