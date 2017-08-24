import {Component, OnInit} from "@angular/core";
import {Movie} from "../../models/movie";
import {ActivatedRoute, Router} from "@angular/router";
import {DashboardService} from "../dashboard.service";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

moviesTotalList: Movie[];
  loginres: any;
  constructor(private router: Router, private route: ActivatedRoute,
              private dashBoardServie: DashboardService) { }
  ngOnInit(): void {
    this.dashBoardServie.getMoviesWithObservable()
      .subscribe(data => {
        this.moviesTotalList = data}
      );
  }
  onClickMovie(movieid: any, moviename: any, moviepath: any, avgRating: any, memberCount: any) {
    this.router.navigate(['/dashboard/movieDescription/' + movieid, {id: movieid, moviename: moviename,
      movieImgPath: moviepath, movieAvRating: avgRating, movieRatingMemberCount: memberCount }]);
    window.location.reload();
  }
}
