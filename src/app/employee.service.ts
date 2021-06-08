import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //create instance of HttpClient for consuming rest api 
  constructor(private httpClient:HttpClient) { }


  saveEmployee(employee:Employee):Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users.json"
     return this.httpClient.post(url,employee);
  }
}
