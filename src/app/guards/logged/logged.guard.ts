import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginResponseService } from 'src/app/interfaces/user.interface';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})

export class LoggedGuard implements CanActivate {

  constructor (
    public router: Router,
    private loginService: LoginService
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let result: boolean;
    const user: LoginResponseService = this.loginService.getUserClient();

    if (user?.userName !== '') {
      result = true;
    } else {
      result = false;
      this.router.navigate(['/login'])
    }

    return result;
  }
}