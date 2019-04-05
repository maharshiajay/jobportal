import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-candidate-profile',
  templateUrl: './candidate-profile.component.html',
  styleUrls: ['./candidate-profile.component.css']
})
export class CandidateProfileComponent implements OnInit {
public displayCandDetails;
status;
constructor(private getCandDetails: MyServiceService, private logoutService: MyServiceService, private route:Router) { 

  this.getCandDetails.getOneEmployeeDetails(localStorage.getItem("candidId")).subscribe(res=>{
    console.log("Am displaying Candidate Details");
    console.log(res);
    this.displayCandDetails = res['result'];
  })

}

  ngOnInit() {
  }

  AppLogout(){
   this.status = this.logoutService.logout();
    console.log(this.status);
    if(this.status== false){
      this.route.navigate(['/home']);
    }
    
  }
}
