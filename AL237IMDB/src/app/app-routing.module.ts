import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard-management/dashboard.component";
import {SigninCmponent} from "./user-management/signin.cmponent";
import {RegistrationComponent} from "./user-management/registration.component";
import {MoviedescriptionComponent} from "./dashboard-management/moviedescription/moviedescription.component";
import {TvshowdescriptionComponent} from "./dashboard-management/tvshowsdescription/tvshowdescription.component";
import {SearchComponent} from "./search-mangement/search.component";
import {MoviesComponent} from "./dashboard-management/moviedescription/movies.component";
import {TvshowsComponent} from "./dashboard-management/tvshowsdescription/tvshows.component";
import {AuthcheckingService} from "./authchecking.service";
import {RatingComponent} from "./Rating/rating.component";
import {LogoutComponent} from "./user-management/logout.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'signin',     component: SigninCmponent },
  { path: 'registration',     component: RegistrationComponent },
  { path: 'logout',     component: LogoutComponent },
  { path: 'dashboard/movieDescription/:id',  component: MoviedescriptionComponent},
  { path: 'dashboard/tvshowDescription/:tid',  component: TvshowdescriptionComponent},
  { path: 'search/:searchItemName', component: SearchComponent},
  { path: 'movies',   component: MoviesComponent },
  { path: 'tvshows',   component: TvshowsComponent },
  { path: 'rating',   canActivate:[AuthcheckingService],component: RatingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
