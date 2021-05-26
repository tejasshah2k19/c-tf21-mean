import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //global 
})
export class UserService {

 public users:Array<any>=[]

  constructor() { }
}
