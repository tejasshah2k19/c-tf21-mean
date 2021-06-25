import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient: HttpClient) { }
  //post when we have new resources entry in server 
  //put / path ==> when we modify an existing resource on server 


  authenticate(email: string, password: string): Observable<any> {
    let url = "http://restapi2020.herokuapp.com/api/login.json"
    let data = { "email": email, "password": password }
    return this.httpClient.post(url, data);
  }


  forgetPassword(email: string): Observable<any> {
    let url = "http://localhost:9999/forgetpassword/"
    return this.httpClient.get(url+email)
  }
}
