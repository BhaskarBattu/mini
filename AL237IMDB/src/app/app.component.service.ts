import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AllSearch} from "./models/AllSearch";

@Injectable()
export class AppComponentService {
  constructor(private http: Http) {}

  private searchTh: AllSearch[];
  search(term: string): Observable<AllSearch[]> {
    return this.http
      .get(`http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/searchTerm/?name=${term}`)
      .map(response =>this.searchTh = response.json());
  }
}
