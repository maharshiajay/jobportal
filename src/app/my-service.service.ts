import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private client: HttpClient) { }
  SuperAdminLogin(loginData){
    return this.client.post("https://besant-job-portal-application.herokuapp.com/users/signin",loginData).pipe(map(res=>{
      return res;
    }))
  }
  login(loginData){
    return this.client.post("https://besant-job-portal-application.herokuapp.com/users/signin",loginData).pipe(map(res=>{
      return res;
    }))
  }
  Emplogin(loginData){
    return this.client.post("https://besant-job-portal-application.herokuapp.com/users/employerLogin",loginData).pipe(map(res=>{
      return res;
    }))
  }
  register(myFormBody){
    return this.client.post('https://besant-job-portal-application.herokuapp.com/users/signup',myFormBody).pipe(map(res=>{
      return res;
    }))
  }
  Compregister(myFormBody){
    myFormBody.employerID=localStorage.getItem("EmployerId");
    console.log(myFormBody);
    return this.client.post('https://besant-job-portal-application.herokuapp.com/users/createUsers',myFormBody).pipe(map(res=>{
      return res;
    }))
  }
  
  jobPost(myFormBody){
    myFormBody.employerID=localStorage.getItem("EmployerId");
    console.log(myFormBody);
    
    return this.client.post('https://besant-job-portal-application.herokuapp.com/users/postJobDetails',myFormBody).pipe(map(res=>{
      return res;
    }))
  }
  getJobs(){
    return this.client.get('https://besant-job-portal-application.herokuapp.com/employee/getJobs').pipe(map(res=>{
      return res['Jobs'];
    }))
  }
  searchJobs(searchParams){
    console.log(searchParams);
    return this.client.get('https://besant-job-portal-application.herokuapp.com/employee/searchJobs/'+searchParams).pipe(map(res=>{
      return res;
    }))
  }
  getOneEmployeeDetails(candId){
    console.log(candId);
    return this.client.get('https://besant-job-portal-application.herokuapp.com/employee/getOneEmployee/'+candId).pipe(map(res=>{
      return res;
    }))
  }
  getAllPostedJobs(empID){
    console.log(empID);
    return this.client.get('https://besant-job-portal-application.herokuapp.com/employer/getAllPostedJobs/'+empID).pipe(map(res=>{
      return res;
    }))
  }
  jobApply(myFormBody){
    return this.client.post('https://besant-job-portal-application.herokuapp.com/employee/applyJob',myFormBody).pipe(map(res=>{
      return res;
    }))
  }
  logout(){
    localStorage.clear();
    return this.islogedIn();
  }
  islogedIn(){
    let isFlag=localStorage.getItem("mytoken");
       
    if(isFlag!=null){
      return true;
    }else{
      return false;
    }
  }
}
