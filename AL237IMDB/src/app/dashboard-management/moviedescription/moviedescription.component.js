"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var movie_service_1 = require("../movie.service");
var router_1 = require("@angular/router");
var movieDescrption_service_1 = require("./movieDescrption.service");
var MoviedescriptionComponent = (function () {
    function MoviedescriptionComponent(movieService, movieDescService, route, router) {
        this.movieService = movieService;
        this.movieDescService = movieDescService;
        this.route = route;
        this.router = router;
    }
    /*ngOnInit(): void {
        // console.log('bhsl');
        this.route.paramMap.switchMap((params: ParamMap) => this.movieService.getMovieName(+params.get('id')))
            .subscribe(movie => this.movie = movie);
        // this.movieService.getMovies().then(movies => this.moviesList = movies.slice(0, 8));
    }*/
    MoviedescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.parseId = params['id'],
                _this.parseMovie = params['moviename'], _this.parseMoviePath = params['movieImgPath'],
                _this.parseAvgRating = params['movieAvRating'], _this.parseRatingMembersCount = params['movieRatingMemberCount'];
        });
        //    post service
        this.movieDescService.getMovieDetails(this.parseMovie)
            .subscribe(function (movieResponse) {
            _this.movieResponsePrint = movieResponse.json();
            console.log(_this.movieResponsePrint);
        });
        this.movieDescService.getMovieComments(this.parseMovie)
            .subscribe(function (movieCommentResponse) {
            _this.movieCommentResponsePrint = movieCommentResponse.json();
        });
    };
    MoviedescriptionComponent.prototype.goBack = function () {
        this.router.navigate(['/dashboard']);
    };
    return MoviedescriptionComponent;
}());
MoviedescriptionComponent = __decorate([
    core_1.Component({
        selector: 'my-moviedescription',
        templateUrl: './moviedescription.component.html',
        styleUrls: ['./moviedescription.component.css']
    }),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        movieDescrption_service_1.MovieDescrptionService,
        router_1.ActivatedRoute, router_1.Router])
], MoviedescriptionComponent);
exports.MoviedescriptionComponent = MoviedescriptionComponent;
//# sourceMappingURL=moviedescription.component.js.map