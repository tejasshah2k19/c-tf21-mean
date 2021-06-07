import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router,private toastr:ToastrService) { }


 user:User = {email:"",firstName:"",password:""}

 ngOnInit(): void {

    this.user.email = this.route.snapshot.params.email  
    console.log("email => "+this.user.email);
    this.user =  this.userService.getUserByEmail(this.user.email);
 }
 
  updateUser() {
    console.log(this.user);
    
    this.userService.updateUserByEmail(this.user.email);
    this.toastr.success("User Updated","",{
      timeOut:3000
    })
    this.router.navigateByUrl("/listusers")
    
  }

}
