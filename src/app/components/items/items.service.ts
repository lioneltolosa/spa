import { Injectable } from '@angular/core';
import { ITEMS } from './mock';
import { Items } from './interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() {
    console.log('Servicio listo de los items');
  }

  // getItems(): Items[] {
  //   return ITEMS;
  // }

  getItems(): Observable<Items[]> {
    return of(ITEMS);
  }
}
