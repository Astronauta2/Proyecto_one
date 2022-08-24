import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent {



  // reactiveMenu: MenuItem[] = [
  //   {
  //     texto: 'Cotizacion',
  //     ruta: './reactive/cotizacion'
  //   },
  //   {
  //     texto: 'tienda',
  //     ruta: './reactive/tienda'
  //   },
  //   {
  //     texto: 'Switches',
  //     ruta: './reactive/switches'
  //   },
  // ];


  

}
