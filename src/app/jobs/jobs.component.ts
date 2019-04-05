import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

public displayJobs;
regForm: FormGroup
public job_keywords = "";
formsjobs;
constructor(private getAllJobs: MyServiceService, private filterJobs: MyServiceService) {

this.getAllJobs.getJobs().subscribe(res=>{
 /*
  console.log("Am displaying Jobs");
  console.log(res);*/
  this.displayJobs = res;
})
}
ngOnInit() {
  this.regForm = new FormGroup({
    job_keywords: new FormControl (null, {
      validators: [Validators.required]
      
    })
})
}
onSubmit(){
  this.filterJobs.searchJobs(this.regForm.value.job_keywords).subscribe(res=>{
    /*
    console.log("Filtered jobs:");
    console.log(res['SearchedJobs']);*/
  this.displayJobs = res['SearchedJobs'];
  /*console.log(this.regForm);*/
  })
}


onApply(idf,title){
  let obj= {
      "job_id":idf,
  "empName":localStorage.getItem("candidName"),
  "empID": localStorage.getItem("candidId"),
   "job_title":title
 };
 console.log(obj);
 this.getAllJobs.jobApply(obj).subscribe(res=>{
   if(JSON.parse(JSON.stringify(res)).status=="Job Applied Successfully"){
        console.log(JSON.parse(JSON.stringify(res)).status)
 
 }
 })
 }
}
