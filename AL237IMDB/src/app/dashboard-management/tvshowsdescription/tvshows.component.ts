import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import {TvShows} from "../../models/TvShows";
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: [ './tvshows.component.css' ]
})
export class TvshowsComponent implements OnInit {

  tvShowsList: TvShows[];
  loginres: any;
  constructor(private router: Router, private route: ActivatedRoute,
              private dashBoardServie: DashboardService) { }
  ngOnInit(): void {

    this.dashBoardServie.getTvShowsWithObservable()
      .subscribe(tvdata => {
        this.tvShowsList = tvdata;
      });

  }

  onClickTvShow(tvshowid: any, tvshowname: any, tvshowpath: any, tvshowRating: any, memberscount: any){
    this.router.navigate(['/dashboard/tvshowDescription/' + tvshowid, {tid: tvshowid, tvshowname: tvshowname,
      tvshowImgPath: tvshowpath, tvshowAvRating: tvshowRating, tvshowRatingMemberCount: memberscount }]);
    window.location.reload();

  }
}
