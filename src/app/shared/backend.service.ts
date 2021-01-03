import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  restUrl = 'localhost:8080';

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
  }

  constructor(private http: HttpClient) { }

  addMovie(movie): Observable<any> {
    const url = this.restUrl + '/movie/add';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, JSON.stringify(movie), options);
  }

}
