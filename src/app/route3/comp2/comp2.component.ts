import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer, range } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor() { }
  isStart : boolean = true;
  @Output() opTimer = new EventEmitter<number>();
  timerVal : number = 0;
  countDown : any;
  timerBox : any;

  ngOnInit(): void {
  }

  start(){
    this.isStart = false;
    let start = this.timerVal;
    this.timerBox = timer(0, start + 1)
    this.timerBox
    .subscribe((i : number) => {
      if(!this.isStart){
        let num = this.timerVal - i;
        // this.timerVal = num;
        this.opTimer.next(num);
      }
    });
    
  }

  stop(){
    this.isStart = true;
  }
}
