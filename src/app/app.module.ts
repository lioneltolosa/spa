import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutes
import { AppRoutingModule } from './app.routes';

// Services
import { HeroesService } from './services/heroes.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ItemsComponent } from './components/items/items.component';
import { PipesComponent } from './components/pipes/pipes.component';


// Pipes
import {CapitalizadoPipe} from './pipes/capitalizado.pipe';
import {ContrasenaPipe} from './pipes/contrasena.pipe';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { EjerciceTarjetaComponent } from './components/ejercice-tarjeta/ejercice-tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent,
    HeroeTarjetaComponent,
    ItemsComponent,
    PipesComponent,
    CapitalizadoPipe,
    ContrasenaPipe,
    ExerciseComponent,
    EjerciceTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
