import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jobPortal';

public user; 
constructor(private data: MyServiceService){
// this.data.showData().subscribe(dataset=>{
//   console.log("MyfirstSerive Data");
//   console.log(dataset);
  
  
// })

// let myBody={
//   text:"paresh sample test"
// }
// this.data.saveMydata(myBody).subscribe(dataset=>{
//   console.log(dataset);
  
// })
}

}
