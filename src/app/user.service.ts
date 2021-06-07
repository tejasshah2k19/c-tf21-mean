import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root' //global 
})
export class UserService {

 public users:Array<User>=[]


 saveUser(data:User){
    this.users.push(data);
 }

 getAllUsers():Array<User>{
   return this.users; 
 }

 deleteUserByEmail(email:string){
       //console.log(email);
    // let searchUser = -1
    // for(let i=0;i<this.userService.users.length;i++){
    //   if(this.userService.users[i].email == email){
    //       searchUser = i;
    //       break;
    //   }
    // }
    // this.userService.users.splice(searchUser,1);
    // console.log(this.userService.users) 
    this.users =  this.users.filter(u=>u.email != email)
 }
  constructor() { }

 getUserByEmail(email:string):any{

  for(let i=0;i<this.users.length;i++){
    if(this.users[i].email == email ){
      return this.users[i]
    }
  } 
  return null
 }

 updateUserByEmail(user:any){

  for(let i=0;i<this.users.length;i++){
    if(this.users[i].email == user.email ){
      this.users[i] = user 
    }
  }

 }

}
