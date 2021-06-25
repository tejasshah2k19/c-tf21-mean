import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogincheckGuard implements CanActivate {
     
 
  constructor(private router: Router,private ts:ToastrService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isLoggedIn = localStorage.getItem("isLoggedIn") as string
    if (isLoggedIn == undefined || isLoggedIn == null) {
      this.router.navigateByUrl("/login")
      this.ts.error("Please login before accessing any resource","",{timeOut:3000})
      return false
    }
    //when we want to call this guard? 
    //when we access login?  logout?  home?  contaus? aboutus?  
    //listemployee?

    return true;//go ahead 

  }

}
