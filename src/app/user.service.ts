import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //global 
})
export class UserService {

 public users:Array<any>=[]


 saveUser(data:any){
    this.users.push(data);
 }

 getAllUsers():Array<any>{
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
}
