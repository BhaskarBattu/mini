import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {SearchService} from "./search.service";
import {AllSearch} from "../models/AllSearch";
import {DashboardService} from "../dashboard-management/dashboard.service";
import {Movie} from "../models/movie";
import {TvShows} from "../models/TvShows";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ]
})
export class SearchComponent implements  OnInit{
  parseSearch: any;
  moviesList: Movie[];
  tvShowsList: TvShows[];
  searchResponsePrint: AllSearch[];
  searchCommentResponsePrint: any;
  parsetvshowname: any;
  prsetvshowimagepath: any;

  constructor (private searchService: SearchService,
               private route: ActivatedRoute,
               private dashBoardServie: DashboardService,
               private router: Router ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: ParamMap) => { this.parseSearch = params['searchItemName'];});


    //    post service
  this.searchService.getSearchDetails(this.parseSearch)
      .subscribe((movieResponse) => {
        this.searchResponsePrint = movieResponse.json();
      });

    this.dashBoardServie.getMoviesWithObservable()
      .subscribe(data => {
        this.moviesList = data}
      );
    this.dashBoardServie.getTvShowsWithObservable()
      .subscribe(tvshowsdata => {
        this.tvShowsList = tvshowsdata
      });

   this.searchService.getSearchComments(this.parseSearch)
      .subscribe((movieCommentResponse) => {
        this.searchCommentResponsePrint = movieCommentResponse.json();
      });
  }
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
  goRating(tvshowname: any, tvshowimage): void {
    this.router.navigate(['/rating/',{giveratingName:tvshowname, giveratingImage: tvshowimage}]);
  }
}
