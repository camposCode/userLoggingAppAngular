import { EventEmitter, Injectable } from '@angular/core';
import { Persona } from './personaModel';
import { LoggingServiceService } from './logging-service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  personas:Persona[]=[
    new Persona('jose', 'campos'),
    new Persona('byron', 'Polaskarides'),
    new Persona('rusty', 'Humeyuk'),
  ];

  saludar = new EventEmitter<number>();

  constructor(private logginService: LoggingServiceService){}

  agregarPersona(persona:Persona){
    this.logginService.enviarMensajeAConsola('agregamos persona: ' + persona.nombre + ' ' + persona.apellido)
    this.personas.push(persona);
  };

}
