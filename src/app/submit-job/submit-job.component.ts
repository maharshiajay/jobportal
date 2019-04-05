import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submit-job',
  templateUrl: './submit-job.component.html',
  styleUrls: ['./submit-job.component.css']
})
export class SubmitJobComponent implements OnInit {

  constructor(private JobPostAppServ:MyServiceService, private router:Router) { }
  regForm: FormGroup
  email_id;
  job_title;
  location;
  job_type;
  company_name;
  experiance;
  job_keywords;
  salary_package;
  job_desc;

  ngOnInit() {
	  this.regForm = new FormGroup({
			email_id: new FormControl(null, {
				validators: [Validators.required, Validators.minLength(4), Validators.maxLength(6)]
			}),
      job_title: new FormControl (null, {
        validators: [Validators.required]
      }),
      location: new FormControl (null, {
        validators: [Validators.required]
      }),
      job_type: new FormControl (null, {
        validators: [Validators.required]
      }),
      company_name: new FormControl (null, {
        validators: [Validators.required]
      }),
      experiance: new FormControl (null, {
        validators: [Validators.required]
      }),
      job_keywords: new FormControl (null, {
        validators: [Validators.required]
      }),
      salary_package: new FormControl (null, {
        validators: [Validators.required]
      }),
      job_desc: new FormControl (null, {
        validators: [Validators.required]
      })
	  })
  }

	onSubmit(){
		console.log(this.regForm);
		console.log(this.regForm.value);
		
		this.JobPostAppServ.jobPost(this.regForm.value).subscribe(dataset=>{
			console.log(dataset);
			if(JSON.parse(JSON.stringify(dataset)).message=="Job Posted Successfully"){
            this.router.navigate(['/emp-profile']);
			}
			
		})
	}
}
