import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TvShows} from "../models/TvShows";
import {Observable} from "rxjs/Observable";
import {Movie} from "../models/movie";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DashboardService {
    private tvShowList: TvShows[];
   private movieList: Movie[];
    private movieUrl= 'http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/movies/onDashboardDispaly';
    private tvShowUrl= 'http://192.168.35.61:8080/IMDBRating-0.0.1-SNAPSHOT/tvshows/onDashboardDispaly';
    constructor (private http: Http) {}

  getMoviesWithObservable(): Observable<Movie[]> {
    return this.http.get(this.movieUrl)
      .map(response => this.movieList = (response.json()));
  }

    getTvShowsWithObservable(): Observable<TvShows[]> {
        return this.http.get(this.tvShowUrl)
            .map(response => this.tvShowList = (response.json()));
    }
}
