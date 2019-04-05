import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-login',
  templateUrl: './my-login.component.html',
  styleUrls: ['./my-login.component.css']
})
export class MyLoginComponent implements OnInit {

  constructor(private AdminLoginService: MyServiceService, private route:Router) { }

  ngOnInit() {
  }

	AdminLogin(data){
		console.log(data)
		this.AdminLoginService.SuperAdminLogin(data.value).subscribe(dataset=>{
      if(JSON.parse(JSON.stringify(dataset)).token !=""){
        let tokenValue = localStorage.setItem("mytoken",JSON.parse(JSON.stringify(dataset)).token);
        this.route.navigate(['/admin-dash'])
        console.log(tokenValue);    
      }else {
        console.log("Error");
        
      }
      
      console.log(dataset);
    })
	
	}
}
