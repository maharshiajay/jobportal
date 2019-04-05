import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  public displayJobs;
  constructor(private getAllJobs: MyServiceService) {
  
  this.getAllJobs.getJobs().subscribe(res=>{
    console.log("Am displaying Jobs");
    console.log(res);
    this.displayJobs = res;
  })
  }
    ngOnInit() {
    }
  
  }