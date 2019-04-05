import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comp-login',
  templateUrl: './comp-login.component.html',
  styleUrls: ['./comp-login.component.css']
})
export class CompLoginComponent implements OnInit {

  constructor(private empLoginService: MyServiceService, private route:Router) { }

  ngOnInit() {
  }

	empLogin(data){
		console.log(data)
		this.empLoginService.Emplogin(data.value).subscribe(dataset=>{
      if(JSON.parse(JSON.stringify(dataset)).token !=""){
        let tokenValue = localStorage.setItem("mytoken",JSON.parse(JSON.stringify(dataset)).token);
        let empName = localStorage.setItem("EmployerName",JSON.parse(JSON.stringify(dataset)).company_name);
        let empID = localStorage.setItem("EmployerId",JSON.parse(JSON.stringify(dataset)).userId);
        this.route.navigate(['/emp-profile'])
        console.log(tokenValue);    
      }else {
        console.log("Error");
        
      }
      
      console.log(dataset);
    })
	
	}
}
