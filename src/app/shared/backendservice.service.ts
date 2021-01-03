import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {

  restUrl = "";

  getHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  constructor() { }
}
