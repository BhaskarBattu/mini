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
var registration_service_1 = require("./registration.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var RegistrationComponent = (function () {
    function RegistrationComponent(regService, router, _formBuilder) {
        this.regService = regService;
        this.router = router;
        this._formBuilder = _formBuilder;
    }
    /*onSubmit(userReg: any)
    {
        console.log(userReg);
        this.regService.registration(userReg).subscribe((response) => {
           if (response.ok === true) {
            // if (response.status === 200) {
                this.responseRegistration = response.json();
                console.log(this.responseRegistration);
                if (this.responseRegistration === true) {
                    this.router.navigate(['/dashboard']);
                } else {
                    alert('username is already exists plese log in');
                    this.router.navigate(['/signin']);
                }
           }
        });
    }*/
    RegistrationComponent.prototype.ngOnInit = function () {
        this.userForm = this._formBuilder.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            lastName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            email: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            passwordRepeat: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            address: ['', [forms_1.Validators.required, forms_1.Validators.minLength(4)]],
            mobileno: ['', [forms_1.Validators.pattern('^[ 7-9][0-9]{9}$'), forms_1.Validators.required,
                    forms_1.Validators.minLength(10), forms_1.Validators.maxLength(10)]]
        });
    };
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.userForm.value);
        this.regService.registration(this.userForm.value).subscribe(function (response) {
            console.log(response);
            if (response.ok === true) {
                // if (response.status === 200) {
                _this.responseRegistration = response.json();
                console.log(_this.responseRegistration);
                if (_this.responseRegistration === true) {
                    _this.router.navigate(['/dashboard']);
                }
                else {
                    alert('username is already exists plese log in');
                    _this.router.navigate(['/signin']);
                }
            }
        });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        selector: 'my-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.css']
    }),
    __metadata("design:paramtypes", [registration_service_1.RegistrationService, router_1.Router, forms_1.FormBuilder])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map