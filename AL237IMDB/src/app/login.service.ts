import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class LoginService {
  private returnType: any;
  constructor(private http: Http) { }

  checkForSession() {

    return this.http.get('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/checkSession',{withCredentials: true})
      .map(response => this.returnType = (response.json()));
  }

}
