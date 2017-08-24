import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {CommonModule} from "@angular/common";
import {RegistrationComponent} from "./registration.component";
import {SigninCmponent} from "./signin.cmponent";
import {RegistrationService} from "./registration.service";
import {SigninService} from "./signin.service";
import {AppRoutingModule} from '../app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LogoutComponent} from "./logout.component";
import {LogoutService} from "./logout.service";



@NgModule({
    imports : [FormsModule, CommonModule, AppRoutingModule, ReactiveFormsModule],
    declarations : [RegistrationComponent,SigninCmponent, LogoutComponent],
    providers : [RegistrationService, SigninService, LogoutService],
    exports : []
})

export class UserManagementModule { }
