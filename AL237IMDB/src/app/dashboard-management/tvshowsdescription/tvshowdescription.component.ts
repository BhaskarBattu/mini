import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {TvShows} from "../../models/TvShows";
import {TvshowDescrptionService} from "./tvshowDescrption.service";
import {TvShowComments} from "../../models/TvShowComments";

@Component({
    selector: 'app-tvshowdescription',
    templateUrl: './tvshowdescription.component.html',
    styleUrls: [ './tvshowdescription.component.css' ]
})
export  class TvshowdescriptionComponent implements OnInit {
    tvshow: TvShows;
    parsetvshowId: any;
    parsetvshowname: any;
    prsetvshowimagepath: any;
    parsetvshowavgRating: any;
    parsetvshowmembersCount: any;

    tvShowClickedResponse: any;
    tvShowComments: TvShowComments[];

    constructor (
                 private route: ActivatedRoute, private router: Router,
                 private tvshowDescService: TvshowDescrptionService) { }

    ngOnInit(): void {
        this.route.params
            .subscribe((params: ParamMap) => { this.parsetvshowId = params['tid'],
                this.parsetvshowname = params['tvshowname'], this.prsetvshowimagepath = params['tvshowImgPath'],
                this.parsetvshowavgRating = params['tvshowAvRating'], this.parsetvshowmembersCount = params['tvshowRatingMemberCount']});


        //    post service
        this.tvshowDescService.getTVshowDetails(this.parsetvshowname)
            .subscribe((tvShowResponse) => {
                this.tvShowClickedResponse = tvShowResponse.json();

            });
        //for TVSHOW comments
       this.tvshowDescService.getTVshowComments(this.parsetvshowname)
            .subscribe((tvShowCommentResponse) => {
            this.tvShowComments = tvShowCommentResponse.json();
        });
    }
    goBack(): void {
        this.router.navigate(['/dashboard']);
    }
  goRating(tvshowname: any, tvshowimage): void {
    this.router.navigate(['/rating/',{giveratingName:tvshowname, giveratingImage: tvshowimage}]);

  }
}
