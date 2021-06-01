import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router,private toastr:ToastrService) { }


  firstName: string = ""
  email: string = ""
  password: string = ""
  ngOnInit(): void {
    this.email = this.route.snapshot.params.email  
    console.log("email => "+this.email);
    let user =  this.userService.getUserByEmail(this.email);
    this.firstName = user.firstName
    this.password = user.password 


  }
  updateUser() {
    console.log(this.email);
    console.log(this.firstName);
    console.log(this.password);
    let user  = {"firstName":this.firstName,"email":this.email,"password":this.password}

    this.userService.updateUserByEmail(user);
    this.toastr.success("User Updated","",{
      timeOut:3000
    })
    this.router.navigateByUrl("/listusers")
    
  }

}
