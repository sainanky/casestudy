import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer, range, Subject } from 'rxjs';
import { map, takeUntil, takeWhile, tap } from 'rxjs/operators';
import * as moment from 'moment';

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
  private ngUnsubscribe = new Subject();
  startCount : number = 0;
  pausedCount : number = 0;
  timerDateLogArr : any = [];
  @Output() opComp3Count = new EventEmitter<any>();
  @Output() opComp4Count = new EventEmitter<any>();

  ngOnInit(): void {
  }

  start(){
    this.isStart = false;
    this.startCount++;
    this.opComp4Count.emit({
      start : this.startCount,
      paused : this.pausedCount
    });
    let start = this.timerVal;
    this.addTimerLog('Started At');
    this.timerBox = timer(0, start + 1)
    this.timerBox
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((i : number) => {
      if(!this.isStart){
        this.timerVal--;
        this.opTimer.next(this.timerVal);
      }
    });
    
  }

  stop(){
    this.isStart = true;
    this.pausedCount++;
    this.opComp4Count.emit({
      start : this.startCount,
      paused : this.pausedCount
    });
    this.addTimerLog('Paused At');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addTimerLog(param : string){
    this.timerDateLogArr.push(`${param} - ${moment().format('DD-MM-yyyy hh:mm:ss a')}`);
    this.opComp3Count.emit(this.timerDateLogArr);
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
