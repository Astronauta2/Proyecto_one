import { Injectable } from "@angular/core";




@Injectable({
    providedIn: 'root'
})

export class TipoDeCuidadesService  {

    private _tipos_de_cuidades: string[] = ['Medellin', 'Cartajena', 'Bogota', 'Cali', 'Bello']


    get tipo_de_cuidades(): string[] {
        return [...this._tipos_de_cuidades];
    }

}