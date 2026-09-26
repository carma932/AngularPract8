import {Component, signal} from '@angular/core';
import {RespuestaAcceso} from './interface/acceso-model';

@Component({
  selector: 'app-validar-acceso',
  imports: [],
  templateUrl: './validar-acceso.html',
  styleUrl: './validar-acceso.scss',
})
export class ValidarAcceso {
  cargando = signal (false);
  respuesta = signal<RespuestaAcceso | null>(null);

  constructor(private  validarAcceso : ValidarAcceso) { }
  onValidar(){
    this.respuesta.set(true)
  }

}
