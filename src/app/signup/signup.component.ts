import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  users: Array<any> = []


  firstName: string = ""
  email: string = ""
  password: string = ""
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser() {

    console.log(this.firstName);
    let user = { "firstName": this.firstName, "email": this.email, "password": this.password }
    this.userService.saveUser(user);
    this.router.navigateByUrl("/listusers");
  }

}


