import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import {ActivatedRoute, ParamMap, Router} from '@angular/router';
 import {MovieDescrptionService} from './movieDescrption.service';
import {Movie} from "../../models/movie";
import {MovieComments} from "../../models/MovieComments";




@Component({
    selector: 'app-moviedescription',
    templateUrl: './moviedescription.component.html',
    styleUrls: [ './moviedescription.component.css' ]
})
export  class MoviedescriptionComponent implements OnInit {
    movie: Movie;
    parseId: any;
    parseMovie: any;
    parseMoviePath: any;
    parseAvgRating: any;
    parseRatingMembersCount: any;
    movieResponsePrint: any;
    movieCommentResponsePrint: MovieComments[];
    constructor (private movieDescService: MovieDescrptionService,
                 private route: ActivatedRoute, private router: Router ) { }

    ngOnInit(): void {
        this.route.params
            .subscribe((params: ParamMap) => { this.parseId = params['id'],
                this.parseMovie = params['moviename'], this.parseMoviePath = params['movieImgPath'],
                this.parseAvgRating = params['movieAvRating'], this.parseRatingMembersCount = params['movieRatingMemberCount']; });

        //    post service
        this.movieDescService.getMovieDetails(this.parseMovie)
            .subscribe((movieResponse) => {
                this.movieResponsePrint = movieResponse.json();
            });
        this.movieDescService.getMovieComments(this.parseMovie)
            .subscribe((movieCommentResponse) => {
            this.movieCommentResponsePrint = movieCommentResponse.json();
        });
    }
    goBack(): void {
        this.router.navigate(['/dashboard']);
    }
  onClickMovie(movieid: any, moviename: any, moviepath: any, avgRating: any, memberCount: any) {
    this.router.navigate(['/dashboard/movieDescription/' + movieid, {id: movieid, moviename: moviename,
      movieImgPath: moviepath, movieAvRating: avgRating, movieRatingMemberCount: memberCount }]);
  }
  goRating(moviename: any, movieimage): void {
    this.router.navigate(['/rating/',{giveratingName:moviename, giveratingImage: movieimage}]);

  }
}
