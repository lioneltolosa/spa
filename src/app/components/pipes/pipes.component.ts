import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: String = 'Lionel';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Lionel',
    alias: 'Coki',
    edad: 31,
    direccion: {
      calle: 'Venezuela',
      casa: '12'
    }
  };

  valorDePromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve ('Llego la data bebe'), 3500 );
  });

  fecha = new Date();

  constructor() { }

  ngOnInit() {
  }

}
