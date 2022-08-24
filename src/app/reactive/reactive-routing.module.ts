import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PlanesAmdComponent } from './planes-amd/planes-amd.component';

import { TiendaComponent } from './tienda/tienda.component';


import { IntegralComponent } from './integral/integral.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cotizacion',
        component: CotizacionComponent
      },
      {
        path: 'tienda',
        component: TiendaComponent
      },
      {
        path: 'planes-amd',
        component: PlanesAmdComponent
      },
      {
        path: 'integral',
        component: IntegralComponent
      },
      {
        path: '**',
        redirectTo: 'cotizacion'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ReactiveRoutingModule { }
