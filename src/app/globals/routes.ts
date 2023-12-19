import { Route } from './../interfaces/rutas.interfaces';

export const Routes: Array<Route>  = [
    // {
    //   path: '/pages/welcome',
    //   name: 'Welcome',
    //   subtitle: 'Welcome to the main page.'
    // } as Route,
    {
      path: '/pages/dashboard',
      name: 'Dashboard',
      subtitle: 'Welcome to Dashboard'
    } as Route,
    {
      path: '/pages/clients',
      name: 'Clients',
      subtitle: 'This page you can find the clients'
    } as Route,
    {
      path: '/pages/reportTemplates',
      name: 'Report templates',
      subtitle: 'You can find the report templates on this page'
    } as Route,
]