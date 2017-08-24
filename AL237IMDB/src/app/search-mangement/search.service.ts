import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class SearchService {
  constructor(private http: Http) { }
  public getSearchDetails(searchName: any)
  {
   // event.preventDefault();
    let searchdata = {
      'moviename': searchName
    };
    return this.http.post('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/searchDetails', searchdata);
  }
  public getSearchComments (searchName: any)
  {
   // event.preventDefault();
    let searchComments = {
      'moviename': searchName
    };
    return this.http.post('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/searchItemComments', searchComments);
  }
}
