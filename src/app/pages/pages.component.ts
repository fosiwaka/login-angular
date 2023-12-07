import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { LoginResponseService } from '../interfaces/user.interface';
import { Ruta } from '../interfaces/rutas.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  public heightScreen: string = '';
  public isCollapsed = false;
  public user: LoginResponseService = {} as LoginResponseService;
  public rutas: Array<Ruta> = [
    {
      path: '/pages',
      name: 'inicio'
    } as Ruta,
    {
      path: '/pages/clientes',
      name: 'Clientes'
    } as Ruta,
    {
      path: '/pages/usuarios',
      name: 'Usuarios'
    } as Ruta
  ]

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
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
