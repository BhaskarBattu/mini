"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var registration_component_1 = require("./registration.component");
var signin_cmponent_1 = require("./signin.cmponent");
var registration_service_1 = require("./registration.service");
var signin_service_1 = require("./signin.service");
var app_routing_module_1 = require("../app-routing.module");
var forms_2 = require("@angular/forms");
var UserManagementModule = (function () {
    function UserManagementModule() {
    }
    return UserManagementModule;
}());
UserManagementModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule, app_routing_module_1.AppRoutingModule, forms_2.ReactiveFormsModule],
        declarations: [registration_component_1.RegistrationComponent, signin_cmponent_1.SigninCmponent],
        providers: [registration_service_1.RegistrationService, signin_service_1.SigninService],
        exports: []
    })
], UserManagementModule);
exports.UserManagementModule = UserManagementModule;
//# sourceMappingURL=user-management.module.js.map