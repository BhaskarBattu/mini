import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DashboardService} from "./dashboard.service";
import {TvShows} from "../models/TvShows";
import {Movie} from "../models/movie";
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
    title = 'Tour of Dashboard';
  moviesList: Movie[];
  tvShowsList: TvShows[];
  loginres: any;
  constructor(private router: Router, private route: ActivatedRoute,
              private dashBoardServie: DashboardService) { }
    ngOnInit(): void {


      this.dashBoardServie.getMoviesWithObservable()
        .subscribe(data => {
          this.moviesList = data.slice(0,4)}
        );
     this.dashBoardServie.getTvShowsWithObservable()
        .subscribe(tvshowsdata => {
          this.tvShowsList = tvshowsdata.slice(0,4)
        });

    }

  onClickMovie(movieid: any, moviename: any, moviepath: any, avgRating: any, memberCount: any) {
    this.router.navigate(['/dashboard/movieDescription/' + movieid, {id: movieid, moviename: moviename,
      movieImgPath: moviepath, movieAvRating: avgRating, movieRatingMemberCount: memberCount }]);
    window.location.reload();
  }
  onClickTvShow(tvshowid: any, tvshowname: any, tvshowpath: any, tvshowRating: any, memberscount: any){
    this.router.navigate(['/dashboard/tvshowDescription/' + tvshowid, {tid: tvshowid, tvshowname: tvshowname,
      tvshowImgPath: tvshowpath, tvshowAvRating: tvshowRating, tvshowRatingMemberCount: memberscount }]);
    window.location.reload();

  }
}
