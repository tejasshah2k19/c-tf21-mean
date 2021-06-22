import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { SessionService } from "../session.service";

@Component({
    selector:"app-login",
    templateUrl:"login.component.html"
})

export class LoginComponent{
    email:string = ""
    password:string = ""
    constructor(private sessionService:SessionService,private router:Router,private toastr:ToastrService)
    {

    }
    
    login(){
        this.sessionService.authenticate(this.email,this.password).subscribe(resp=>{
            //localstorage
            //sessionstorage
            //cookies 
            this.toastr.success("Login success","",{timeOut:3000})
            localStorage.setItem("isLoggedIn","yes")            
            this.router.navigateByUrl("/home")
        },err=>{
            this.toastr.error("Invalid Credentials","",{timeOut:3000})
            
        })
    }
}

