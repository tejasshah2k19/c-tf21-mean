import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private userService:UserService) { }
  users:Array<any>=[]
  ngOnInit(): void {
    this.users = this.userService.getAllUsers(); 

  }

  deleteUser(email:string){

    this.userService.deleteUserByEmail(email);
    this.users = this.userService.getAllUsers();
  }
}
