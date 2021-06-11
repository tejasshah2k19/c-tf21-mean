import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
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

  getAllEmployees():Observable<any>{
    let url = "http://restapi2020.herokuapp.com/api/users.json"
    return this.httpClient.get(url)
  }

  deleteEmployeeById(id:number):Observable<any>{
    let url  = "http://restapi2020.herokuapp.com/api/users/"+id+".json"
    
    return this.httpClient.delete(url)
  }



}
