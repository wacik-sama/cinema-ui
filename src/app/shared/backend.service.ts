import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  restUrl = 'api';

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
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
