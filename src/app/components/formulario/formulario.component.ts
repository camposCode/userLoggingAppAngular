import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from 'src/app/personaModel';
import { LoggingServiceService } from '../../logging-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [LoggingServiceService]
})
export class FormularioComponent implements OnInit {

  @Output() personaCreada = new EventEmitter<Persona>()

  // nombreInput:string = '';
  // apellidoInput:string = '';

  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;





  constructor(private loggingService: LoggingServiceService) { }

  ngOnInit(): void {
  }

  agregarPersona(){
    let personaNew = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.loggingService.enviarMensajeAConsola("enviamos persona: " + personaNew.nombre + ' ' + personaNew.apellido)
    this.personaCreada.emit(personaNew);
  }

}
