import { Injectable } from '@angular/core';
import { from, Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  url = "http://192.168.1.111:9000/api/"
  userName =  new Subject<any>();  
  userEmail = new Subject<any>();
  userPhoneNo = new Subject<any>();
  adminEmail = new Subject<any>();
  adminPhoneNo = new Subject<any>();  
  loginButton = new Subject<boolean>();
  constructor(private http:HttpClient) { }

  registration(data): Observable<any>{
    return this.http.post(this.url,data)
  }
  login(data): Observable<any>{
    return this.http.post(`${this.url}login`,data)
  }
  singelData(token): Observable<any>{
    return this.http.get(`${this.url}single-data`, {headers: new HttpHeaders().set("Authorization",`Token ${token}`)})
  }
  logOut(token): Observable<any>{
    return this.http.delete(`${this.url}single-data`, {headers: new HttpHeaders().set("Authorization",`Token ${token}`)})
  }
  messageSend(token,data): Observable<any>{
    return this.http.post(`${this.url}msg`,data, {headers: new HttpHeaders().set("Authorization",`Token ${token}`)})
  }
  allMessage(token): Observable<any>{
    return this.http.get(`${this.url}msg`, {headers: new HttpHeaders().set("Authorization",`Token ${token}`)})
  }
}
