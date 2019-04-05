import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router'
import { MyServiceService } from './my-service.service';

@Injectable({
  providedIn: 'root'
})
export class MyAppAuthGuard implements CanActivate {
  constructor(private myService:MyServiceService,private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLogedFlag=this.myService.islogedIn();
      if(isLogedFlag){
        return true;
      }else{
        this.router.navigate(['/login']);
        return false;
      }
    
  }
  
}
