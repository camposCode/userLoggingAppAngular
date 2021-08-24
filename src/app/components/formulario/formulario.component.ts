import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from 'src/app/personaModel';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>()

  // nombreInput:string = '';
  // apellidoInput:string = '';

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;


  agregarPersona(){
    let personaNew = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personaCreada.emit(personaNew);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
