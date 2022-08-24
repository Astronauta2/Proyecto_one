import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveRoutingModule } from './reactive-routing.module';

import { PlanesAmdComponent } from './planes-amd/planes-amd.component';

import { TiendaComponent } from './tienda/tienda.component';
import { IntegralComponent } from './integral/integral.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';


@NgModule({
  declarations: [
    CotizacionComponent,
    PlanesAmdComponent,
    TiendaComponent,
    IntegralComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
