import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {DashboardComponent} from "./dashboard.component";
import {MoviedescriptionComponent} from "./moviedescription/moviedescription.component";
import {DashboardService} from "./dashboard.service";
import {MovieDescrptionService} from "./moviedescription/movieDescrption.service";
import {TvshowdescriptionComponent} from "./tvshowsdescription/tvshowdescription.component";
import {TvshowDescrptionService} from "./tvshowsdescription/tvshowDescrption.service";
import {MoviesComponent} from "./moviedescription/movies.component";
import {TvshowsComponent} from "./tvshowsdescription/tvshows.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  imports : [FormsModule,
             CommonModule,
              AppRoutingModule,
                ReactiveFormsModule,
                NgxPaginationModule
      ],
  declarations : [DashboardComponent,
                  MoviedescriptionComponent,
                  TvshowdescriptionComponent,
                  MoviesComponent,
                  TvshowsComponent],
  providers : [ DashboardService,
                MovieDescrptionService,
                TvshowDescrptionService],
  exports : []
})

export class DashboardManagementModule { }
