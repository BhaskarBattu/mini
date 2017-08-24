import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {SigninService} from './signin.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Component({
    selector: 'app-signing',
    templateUrl: './signin.component.html',
    styleUrls: [ './signin.component.css' ],
    outputs: ['getUserRes']
})
export class SigninCmponent implements OnInit
{

    userForm: FormGroup;

    public userLoginResponse: any;
    @Output() getUserRes: EventEmitter<any>= new EventEmitter<any>(); // (this.userResponse = true);
    constructor(private router: Router,
                private signinService: SigninService,
                private _formBuilder: FormBuilder) { }
    ngOnInit() {
        this.userForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.minLength(4)]],
            password: ['', [Validators.required, Validators.minLength(8)]]

        });
    }
    onSubmit() {

      this.signinService.login(this.userForm.value).subscribe((response) => {
            if (response.ok === true) {
                this.userLoginResponse = response.json();
                console.log(this.userLoginResponse);
                if (this.userLoginResponse !== true) {
                    alert('Invalid user name plese log in');
                    this.router.navigate(['/signin']);

                } else {
                  alert('You are successfully signed in');
                   this.getUserRes.emit(this.userForm.value.email);
                   this.router.navigate(['/']);
                  localStorage.setItem('username',this.userForm.value.email);
                  localStorage.setItem('valid','true');

                  /*sessionStorage.setItem('username',this.userForm.value.email);
                  sessionStorage.setItem('valid','true');*/
                  location.reload();
                }
            }
        });
    }

}
