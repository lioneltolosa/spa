import { Component, OnInit, Input } from '@angular/core';
import { Ejercice } from '../exercise/ejercice';

@Component({
  selector: 'app-ejercice-tarjeta',
  templateUrl: './ejercice-tarjeta.component.html',
  styleUrls: ['./ejercice-tarjeta.component.css']
})
export class EjerciceTarjetaComponent implements OnInit {

  @Input() people: Ejercice;

  constructor() { }

  ngOnInit() {
  }

}
