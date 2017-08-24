import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class RegistrationService
{
    constructor(private http: Http) { }
    public registration(postRegistration: any) {
      const headers = new Headers();
      headers.append('Content-Type',
        'application/json');
        return this.http.post ('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/addUserRegistration', postRegistration ,
          { headers: headers, withCredentials:true});
    }

}
