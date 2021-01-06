import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  restUrl = 'http://localhost:8080';

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

  getGenre(): Observable<any> {
    const url = this.restUrl + '/genre/get';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, options);
  }

  login(): Observable<any> {
    const url = this.restUrl + '/login';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, options);
  }

  register(): Observable<any> {
    const url = this.restUrl + '/user/add';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, options);
  }

  addMovieToFavList(login: string, movieId: string): Observable<any> {
    const obj = {login, movieId};
    const url = this.restUrl + '/user/movie/add';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, JSON.stringify(obj), options);
  }

  getMovies() {
    const url = this.restUrl + '/movie/get';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, JSON.stringify({}), options);
  }

}
