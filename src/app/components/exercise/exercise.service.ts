import { Injectable } from '@angular/core';
import { Ejercice } from './ejercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private people: Ejercice[] = [
      {
        nombre: 'Andrea',
        apellido: 'Sanchez',
        edad: 31,
        profesion: 'Medico',
        numeroDeHijos: 2
      },
      {
        nombre: 'Lionel',
        apellido: 'Tolosa',
        edad: 31,
        profesion: 'Informatico',
        numeroDeHijos: 2
      },
      {
        nombre: 'Mateo',
        apellido: 'Tolosa',
        edad: 1,
        profesion: 'Bebe',
        numeroDeHijos: 1
      }
  ];

  constructor() { }

  getPeople(): Ejercice[] {
    return this.people;
  }
}
