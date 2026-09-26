import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../interface/acceso-model';

@Injectable({
  providedIn: 'root'
})
export class ValidarAcceso {

  private readonly apiUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  listarUsuariosActivos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/listarUsuarios`);
  }

  guardarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  guardarAdmin(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/guardarAdmin`, usuario);
  }
}
