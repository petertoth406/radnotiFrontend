import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    let login = localStorage.getItem('login');
    console.log(login);
    if (login) {
      let loginObj = JSON.parse(login);
      console.log(loginObj);
      if (loginObj.isLoggedIn) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
