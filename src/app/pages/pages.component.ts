import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { LoginResponseService } from '../interfaces/user.interface';
import { Route } from '../interfaces/rutas.interfaces';
import { Router } from '@angular/router';
import { Routes } from '../globals/routes';

@Component({
  selector: 'app-welcome',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public heightScreen: string = '';
  public isCollapsed = false;
  public user: LoginResponseService = {} as LoginResponseService;
  public routes: Array<Route> = Routes;
  public currentRoute: Route = {} as Route;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.currentRoute = this.routes.find((route: Route) => route.path === this.router.url) || {} as Route;
    })
    
    console.log('this.currentRoute: ', this.currentRoute)
    this.heightScreen = `${screen.height -160}px`
    this.user = this.loginService.getUserClient()
  }

  loggout(): void {
    console.log('loggout')
    this.loginService.logout();
  }

  public navegarRuta(path: string): void {
    this.router.navigate([path])
  }

}
