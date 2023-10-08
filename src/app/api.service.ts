
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Person } from './person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
 
  baseURL: string ="http://localhost:3000/";//"https://swapi.dev/api/";//
 
  constructor(private http: HttpClient) {
  }
 
  get(): Observable<any> {
    console.log('getList_'+this.baseURL+'list')
    return this.http.get<any>(this.baseURL+'list' )
  }
 
  post(input:any ): Observable<any> {
    const body=JSON.stringify(input);
    console.log(body)
    return this.http.post(this.baseURL + 'list', body)
  }
 
}