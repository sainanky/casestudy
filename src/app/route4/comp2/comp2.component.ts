import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, timer, range, Subject } from 'rxjs';
import { map, takeUntil, takeWhile, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { Route4Service } from '../route4.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  constructor(private _route4 : Route4Service) { }
  isStart : boolean = true;
  timerVal : number = 0;
  countDown : any;
  timerBox : any;
  private ngUnsubscribe = new Subject();
  startCount : number = 0;
  pausedCount : number = 0;
  timerDateLogArr : any = [];

  ngOnInit(): void {
  }

  start(){
    this.isStart = false;
    this.startCount++;
    this._route4.setComp4Info({
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
        this._route4.setComp1Info(this.timerVal);
      }
    });
    
  }

  stop(){
    this.isStart = true;
    this.pausedCount++;
    this._route4.setComp4Info({
      start : this.startCount,
      paused : this.pausedCount
    });
    this.addTimerLog('Paused At');
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  reset(){
    this.isStart = true;
    this.timerVal = 0;
    this.timerDateLogArr = [];
    this._route4.setComp1Info(this.timerVal);
    this._route4.setComp3Info(this.timerDateLogArr);
    this._route4.setComp4Info({});
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  addTimerLog(param : string){
    this.timerDateLogArr.push(`${param} - ${moment().format('DD-MM-yyyy hh:mm:ss a')}`);
    this._route4.setComp3Info(this.timerDateLogArr);
  }

  ngOnDestroy(){
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
