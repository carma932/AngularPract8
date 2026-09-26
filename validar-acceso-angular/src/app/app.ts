import { Component } from '@angular/core';
import { ValidarAcceso } from './validar-acceso/validar-acceso';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValidarAcceso],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'validar-acceso-angular';
}
