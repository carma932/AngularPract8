import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ValidarAcceso as ValidarAccesoService } from './service/validar-acceso';
import { Usuario } from './interface/acceso-model';

@Component({
  selector: 'app-validar-acceso',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validar-acceso.html',
  styleUrl: './validar-acceso.scss'
})
export class ValidarAcceso implements OnInit {

  usuarios: Usuario[] = [];
  cargando = false;
  error = '';

  // Datos del formulario
  nombre = '';
  email = '';
  esAdmin = false;
  guardando = false;
  mensajeGuardado = '';

  constructor(private validarAccesoService: ValidarAccesoService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.error = '';
    this.validarAccesoService.listarUsuariosActivos().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al listar usuarios';
        this.cargando = false;
        console.error(err);
      }
    });
  }

  onGuardar(): void {
    if (!this.nombre || !this.email) {
      this.mensajeGuardado = 'Completa nombre y email';
      return;
    }

    this.guardando = true;
    this.mensajeGuardado = '';

    const nuevoUsuario: Usuario = {
      nombre: this.nombre,
      email: this.email
    };

    const peticion = this.esAdmin
      ? this.validarAccesoService.guardarAdmin(nuevoUsuario)
      : this.validarAccesoService.guardarUsuario(nuevoUsuario);

    peticion.subscribe({
      next: () => {
        this.mensajeGuardado = 'Usuario guardado correctamente';
        this.guardando = false;
        this.nombre = '';
        this.email = '';
        this.esAdmin = false;
        this.cargarUsuarios(); // refresca la lista
      },
      error: (err) => {
        this.mensajeGuardado = 'Error al guardar usuario';
        this.guardando = false;
        console.error(err);
      }
    });
  }
}
