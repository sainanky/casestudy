import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  constructor() { }
  dataArr : any = [];
  isGridView : boolean = true;

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    fetch('https://fakestoreapi.com/products?limit=40')
    .then(res=>res.json())
    .then(json=> {
      this.dataArr = json;
      console.log(json)
    });
  }

}
