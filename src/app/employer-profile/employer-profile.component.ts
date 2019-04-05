import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
//import { DisPostedJobsComponent } from '../dis-posted-jobs/dis-posted-jobs.component';

@Component({
  selector: 'app-employer-profile',
  templateUrl: './employer-profile.component.html',
  styleUrls: ['./employer-profile.component.css']
})
export class EmployerProfileComponent implements OnInit { 

  constructor(private getPostedJobs: MyServiceService, /*private showCandidates: DisPostedJobsComponent*/) { 
  }

  //public candidates  = this.showCandidates.allApplicants;
  ngOnInit() {
    
  }
}
