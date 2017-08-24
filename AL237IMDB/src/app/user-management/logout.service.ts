import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class LogoutService {
  constructor(private http: Http) {
  }


  public logout() {
    const headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    return this.http.get('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/invalidateSession', {
      headers: headers,
      withCredentials: true
    });
  }
}
