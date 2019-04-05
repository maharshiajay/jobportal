import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

ngOnInit() {
  }
/*
  public user; 
  constructor(private data: MyServiceService){
  this.data.showData().subscribe(dataset=>{
    console.log("MyfirstSerive Data");
    console.log(dataset);-
    this.user = dataset["todos"]
  })
  
  let myBody={
    text:"paresh sample test"
  }
  this.data.saveMydata(myBody).subscribe(dataset=>{
    console.log(dataset);
    
  })
  }
  */

}
