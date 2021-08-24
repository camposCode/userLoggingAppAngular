import { Component } from '@angular/core';
import { Persona } from './personaModel';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'agregar Persona dinamicamente';

  personas:Persona[]=[
    new Persona('jose', 'campos'),
    new Persona('byron', 'Polaskarides'),
    new Persona('rusty', 'Humeyuk'),
  ];
  personaAgregada(persona:Persona){
    this.personas.push(persona);
  }
}
