import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private EmailAppServ:MyServiceService, private router:Router) { }
	regForm: FormGroup
	fullname;	
	username;
	dob;
	mail_id;
	address;
	phone_number;
	password;
		
  ngOnInit() {
	  this.regForm = new FormGroup({
			fullname: new FormControl(null, {
				validators: [Validators.required, Validators.minLength(4), Validators.maxLength(6)]
			}),
		username: new FormControl(null, {
			validators: [Validators.required, Validators.minLength(4), Validators.maxLength(6)]
		}),
		dob: new FormControl (null, {
			validators: [Validators.required]
		}),
		mail_id: new FormControl (null, {
			validators: [Validators.required]
		}),
		address: new FormControl (null, {
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
	onSubmit(){
		console.log(this.regForm);
		console.log(this.regForm.value);
		
		this.EmailAppServ.register(this.regForm.value).subscribe(dataset=>{
			console.log(dataset);
			if(JSON.parse(JSON.stringify(dataset)).message=="User created"){
            this.router.navigate(['/login']);
			}
			
		})
	}
}
