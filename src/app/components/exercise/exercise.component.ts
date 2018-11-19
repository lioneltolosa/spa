import { Component, OnInit } from '@angular/core';
import { ExerciseService } from './exercise.service';
import { Ejercice } from './ejercice';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  peoples: Ejercice[] = [];

  mia = {
    nombre: 'Andrea sanchez',
    apodo: 'Linda - bonita - Cochita '
  };


  constructor(private exerciseService: ExerciseService) {
    console.log('Servicio del ejercicio listo');
  }

  ngOnInit() {
    this.peoples = this.exerciseService.getPeoples();
  }

}
