import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.scss']
})
export class Route2Component implements OnInit {

  constructor() { }
  dataArr : any = [];
  globalDataArr : any = [];
  isGridView : boolean = true;
  priceFilterVal : string = '';

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    fetch('https://fakestoreapi.com/products?limit=40')
    .then(res=>res.json())
    .then(json=> {
      this.dataArr = json;
      this.globalDataArr = [...this.dataArr];
    });
  }

  filterData(){
    let param = this.priceFilterVal;
    let gDataArr = [...this.globalDataArr];
    if(param == 'low'){
      this.dataArr = gDataArr.sort((a : any,b : any)=>{
        return a.price - b.price;
      })
    }
    else if(param == 'high'){
      this.dataArr = gDataArr.sort((a : any,b : any)=>{
        return b.price - a.price;
      })
    }
    else this.dataArr = gDataArr;
  }

}
