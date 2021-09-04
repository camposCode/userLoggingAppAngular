import { Component, OnInit } from '@angular/core';
import { Persona } from './personaModel';
import { PersonaService } from './persona.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  titulo = 'agregar Persona dinamicamente';
  personas: Persona[] = [];

  constructor(private personaService: PersonaService){}
  ngOnInit(): void {
    this.personas = this.personaService.personas;
  }

  // personaAgregada(persona:Persona){
  //   // this.personas.push(persona);
  //   this.personaService.agregarPersona(persona);

  // }
}
