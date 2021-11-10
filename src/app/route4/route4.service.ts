import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Route4Service {

  constructor() { }

  private comp1Source = new BehaviorSubject(0);
  currentComp1Source = this.comp1Source.asObservable();

  private comp3Source = new BehaviorSubject([]);
  currentComp3Source = this.comp3Source.asObservable();

  private comp4Source = new BehaviorSubject({});
  currentComp4Source = this.comp4Source.asObservable();

  setComp1Info(number: number) {
    this.comp1Source.next(number)
  }

  setComp3Info(data: any) {
    this.comp3Source.next(data)
  }

  setComp4Info(data: any) {
    this.comp4Source.next(data)
  }
}
