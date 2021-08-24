import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingServiceService {

  enviarMensajeAConsola(mensaje:string){
    console.log(mensaje);
  }

  constructor() { }
}
