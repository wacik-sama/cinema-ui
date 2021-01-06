import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  restUrl = 'http://localhost:8080';
  userConfig: any;

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

  login(login: string, password: string): Observable<any> {
    const url = this.restUrl + '/user/login';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, JSON.stringify({login, password}), options);
  }

  register(login: string, password: string, name: string, surname: string): Observable<any> {
    // tslint:disable-next-line:variable-name
    const role_ids: any = [];
    role_ids.push(1);
    const url = this.restUrl + '/user/add';
    const options = {
      headers: this.getHeaders()
    };
    return this.http.post(url, JSON.stringify({login, password, name, surname, role_ids}), options);
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

  getUserConfigByName(login: string) {
    const url = this.restUrl + '/user/get/' + login;
    const options = {
      headers: this.getHeaders()
    };
    return this.http.get(url, options);
  }

}
