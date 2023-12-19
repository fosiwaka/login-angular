import { Route } from './../interfaces/rutas.interfaces';

export const Routes: Array<Route>  = [
    {
      path: '/pages/welcome',
      name: 'Welcome'
    } as Route,
    {
      path: '/pages/dashboard',
      name: 'Dashboard'
    } as Route,
    {
      path: '/pages/clients',
      name: 'Clients'
    } as Route,
    {
      path: '/pages/reportTemplates',
      name: 'Report templates'
    } as Route,
]