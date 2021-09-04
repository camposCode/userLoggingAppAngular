import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/personaModel';
import { PersonaService } from '../../persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() i: number;


  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personaService.saludar.emit(this.i);
  }

}
