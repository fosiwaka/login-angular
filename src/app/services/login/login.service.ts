import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, of } from 'rxjs';
import { LoginResponseService, User } from 'src/app/interfaces/user.interface';
import { HttpRequestService } from '../http-request/http-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpRequestService
  ) { }

  getUserClient(): LoginResponseService {
    let user: any = {
      remember: false,
      userName:  '',
      password: ''
    } as LoginResponseService
    type ObjectKey = keyof typeof user;

    Object.keys(user).forEach((key: string) => {
      user[key as ObjectKey] = sessionStorage.getItem(key) || ''
    })

    return user;
  }

  setUser(user: any) {
    const keys = Object.keys(user);
    type ObjectKey = keyof typeof user;
    keys.forEach((userKey: string ) =>  sessionStorage.setItem( userKey, user[userKey as ObjectKey]) )
  }

  setDataOnSessionStorage(userKey: string, data: string): void {
    sessionStorage.setItem( userKey, data );
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
