import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {LoginService} from "./login.service";



@Injectable()
export class AuthcheckingService implements CanActivate {
  private errorMsg;
  private flag;
  constructor(private loginService: LoginService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return new Promise<boolean>((resolve, reject) =>this.loginService.checkForSession()
      .subscribe(data => {
        this.flag = data;
        if (this.flag === true)
        {

        }
        else if (this.flag === false) {
          alert('please login then only you can give rating');
          this.route.navigate(['/signin']);
        }
        resolve(true)
      }
      ,
        dataError => {
          this.errorMsg = dataError;
            resolve(false)
        }
      )
    )
  }
}
