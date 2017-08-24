import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchComponent} from "./search.component";
import {SearchService} from "./search.service";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  imports : [FormsModule, CommonModule, AppRoutingModule, ReactiveFormsModule, NgxPaginationModule],
  declarations : [SearchComponent],
  providers : [ SearchService ],
  exports : []
})

export class SearchModule{ }
