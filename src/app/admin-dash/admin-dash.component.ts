import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  status;
  constructor(private CompRegAppServ:MyServiceService, private logoutService: MyServiceService, private router:Router) { }
	CompregForm: FormGroup
	comapny_name;	
	address;
	offical_email_id;
	website;
	About_comapny;
	phone_number;
	password;
		
  ngOnInit() {
	  this.CompregForm = new FormGroup({
			company_name: new FormControl(null, {
				validators: [Validators.required, Validators.minLength(4), Validators.maxLength(6)]
			}),
      address: new FormControl(null, {
			validators: [Validators.required, Validators.minLength(4), Validators.maxLength(6)]
		}),
		offical_email_id: new FormControl (null, {
			validators: [Validators.required]
		}),
		website: new FormControl (null, {
			validators: [Validators.required]
		}),
		About_company: new FormControl (null, {
			validators: [Validators.required]
		}),
		phone_number: new FormControl (null, {
			validators: [Validators.required]
		}),
		password: new FormControl (null, {
			validators: [Validators.required]
		})
	  })
  }
	onCompRegSubmit(){
		console.log(this.CompregForm);
		console.log(this.CompregForm.value);
		
		this.CompRegAppServ.Compregister(this.CompregForm.value).subscribe(dataset=>{
			console.log(dataset);
			if(JSON.parse(JSON.stringify(dataset)).message=="Company registered successfully"){
            this.router.navigate(['/login']);
			}
			
		})
  }
  
  AppLogout(){
    this.status = this.logoutService.logout();
     console.log(this.status);
     if(this.status== false){
       this.router.navigate(['/home']);
     }
     
   }
}

