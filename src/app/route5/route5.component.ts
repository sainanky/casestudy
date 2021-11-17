import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.scss']
})
export class Route5Component implements OnInit {

  constructor(private _data : DataService) { }
  dataArr : any = [];
  globalArr : any = [];
  cloumnsStatus : any = {
    name : '', class : '', section : '', sub1 : '', sub2 : '', sub3 : ''
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this._data.getJSON().subscribe(res=>{
      console.log(res)
      if(res['data']) {
        this.dataArr = res['data'];
        this.globalArr = [...this.dataArr];
      }
    })
  }

  sort(colName : string){
    let dataArr = [...this.globalArr];
    if(this.cloumnsStatus[colName] == '') this.cloumnsStatus[colName] = 'asc';
    else if(this.cloumnsStatus[colName] == 'asc') this.cloumnsStatus[colName] = 'desc';
    else this.cloumnsStatus[colName] = '';
    if(this.cloumnsStatus[colName] == 'asc'){
      this.dataArr = dataArr.sort((a : any, b : any) => a[colName] < b[colName] ? 1 : a[colName] > b[colName] ? -1 : 0)
    }
    else if(this.cloumnsStatus[colName] == 'desc'){
      this.dataArr = dataArr.sort((a : any, b : any) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
    }
    else this.dataArr = dataArr;
    console.log(this.cloumnsStatus)
  }

}
