import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MovieDescrptionService {
    constructor(private http: Http) { }
    public getMovieDetails(movieName: any)
    {
        // event.preventDefault();
        let moviedata = {
            'moviename': movieName
        };
        return this.http.post('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/user/movieDetails', moviedata);
    }
    public getMovieComments (movieName: any)
    {
        // event.preventDefault();
        let movieComments = {
            'moviename': movieName
        };
        return this.http.post('http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/movies/movieComments', movieComments);
    }
}
