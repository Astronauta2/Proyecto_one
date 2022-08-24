import { Injectable } from "@angular/core";




@Injectable({
    providedIn: 'root'
})

export class TipoDeDocumentosService {

    private _tipo_de_documentos: string[] = ['Cedula de ciudadania', 'Pasaporte', 'Tarjeta de identidad', 'Cedula extranjera']


    get tipo_de_documentos(): string[] {
        return [...this._tipo_de_documentos];
    }

}