import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  regForm: FormGroup
  public job_keywords;
  public searchResult;
  constructor(private filterJobs: MyServiceService) { 

  }

  
ngOnInit() {
  this.regForm = new FormGroup({
    job_keywords: new FormControl (null, {
      validators: [Validators.required]
      
    })
})
}

  @Output() public sliderFormResults = new EventEmitter();

  onSubmit(){
    this.filterJobs.searchJobs(this.regForm.value.job_keywords).subscribe(res=>{
      /*
      console.log("Filtered jobs:");
      console.log(res['SearchedJobs']);
    this.searchResult = res['SearchedJobs'];*/
    this.sliderFormResults.emit(this.searchResult = res['SearchedJobs'])
    })
  }
}
