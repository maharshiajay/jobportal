import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: MyServiceService,private route:Router) { }

  ngOnInit() {
  }
	myLogin(data){
		console.log(data)
		this.loginService.login(data.value).subscribe(dataset=>{
      if(JSON.parse(JSON.stringify(dataset)).token !=""){
        let tokenValue = localStorage.setItem("mytoken",JSON.parse(JSON.stringify(dataset)).token);
        let candName = localStorage.setItem("candidName",JSON.parse(JSON.stringify(dataset)).name);
        let candID = localStorage.setItem("candidId",JSON.parse(JSON.stringify(dataset)).userId);
        this.route.navigate(['/candidate-profile'])
        console.log(tokenValue);    
      }else {
        console.log("Error");
        
      }
      
      console.log(dataset);
    })
	
	}
}
