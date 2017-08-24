import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserManagementModule} from "./user-management/user-management.module";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardManagementModule} from "./dashboard-management/dashboard-management.module";
import {AppComponentService} from "./app.component.service";
import {SearchModule} from "./search-mangement/search-module";
import {LoginService} from "./login.service";
import {AuthcheckingService} from "./authchecking.service";
import {RatingComponent} from "./Rating/rating.component";
import {RatingService} from "./Rating/rating.service";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    UserManagementModule,
    DashboardManagementModule,
    SearchModule,
     CommonModule, ReactiveFormsModule
  ],
  providers: [AppComponentService, LoginService, AuthcheckingService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
