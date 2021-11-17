import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-route6',
  templateUrl: './route6.component.html',
  styleUrls: ['./route6.component.scss']
})
export class Route6Component implements OnInit {

  constructor() { }
  containers : any = [];

  @HostListener('scroll', ['$event'])

  ngOnInit(): void {
    this.add(15);
  }

  add(len : number) {
    for(let i = 0; i < len; i++){
      this.containers.push(i);
    }
  }

  buttonClicked(index : number){
    alert(`Button in ${index + 1} div clicked`)
  }

  onScroll(event: any) {
    // visible height + pixel scrolled >= total height 
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.add(15);
    }
  }
}
