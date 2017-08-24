import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()
export class RatingService {
  constructor(private http: Http) { }


  public login(postData: any){
    const headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    return this.http.get('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/invalidateSession',{ headers: headers,withCredentials:true});
  }

  public postCommeents(textareacomments: any,rating: any, username:any, moivieOrTvShow:any){
    let postcomments={
      'textareacomment':textareacomments,
      'rating':rating,
      'username':username,
      'movieortvshow':moivieOrTvShow
    };
    const headers = new Headers();
    headers.append('Content-Type',
      'application/json');
    return this.http.post('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/insertUserComments', postcomments
      ,{ headers: headers,withCredentials:true});
  }
}
