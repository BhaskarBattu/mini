import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class TvshowDescrptionService {
    constructor(private http: Http) { }
    public getTVshowDetails(tvshowname: any)
    {
        //event.preventDefault();
        let tvshowdata = {
            'tvshowname': tvshowname
        };
        return this.http.post('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/tvshows/tvshowDetails', tvshowdata);
    }
 public getTVshowComments (tvshowName: any)
   {
       //event.preventDefault();
       let tvshowComments = {
           'tvshowname': tvshowName
       };
       return this.http.post('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/tvshows/tvShowComments', tvshowComments);
   }
}
