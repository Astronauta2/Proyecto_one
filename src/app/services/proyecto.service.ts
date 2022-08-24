import { Injectable } from '@angular/core';
import { collection, Firestore, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Places } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(private firestore: Firestore) { }


  addCotizacion(cotizacion: Places) {
    const placeRef = collection(this.firestore, 'cotizacion');
    return addDoc(placeRef, cotizacion);
  }

  getPlaces(): Observable<Places[]> {
    const placeRef = collection(this.firestore, 'cotizacion');
    return collectionData(placeRef, { idField: 'nombre' }) as Observable<Places[]>;
  }

}
