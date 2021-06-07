import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  users: Array<any> = []

  user:User = {firstName:"",email:"",password:""}
  // firstName: string = ""
  // email: string = ""
  // password: string = ""
  constructor(private userService: UserService, private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  saveUser() {   

    console.log(this.user.firstName);
    // let user = { "firstName": this.firstName, "email": this.email, "password": this.password }
    this.userService.saveUser(this.user);
    this.toastr.success("Signup Done","Success",{
      timeOut:3000
    })
    
    this.router.navigateByUrl("/listusers");
  }

}


