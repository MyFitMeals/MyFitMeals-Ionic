import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getHelloWorld(): Observable<any> {
    console.log('Im here in service !')
    return this.http.get('http://localhost:5000');
  }
}
