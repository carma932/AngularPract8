import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SolicitudAcceso, RespuestaAcceso} from '../interface/acceso-model';

@Injectable({
  providedIn: 'root',
})
export class ValidarAcceso {
  url = 'http://localhost:8080/api/evento/validarAcceso';
  constructor(private http: HttpClient) { }
  validarAcceso(datos: SolicitudAcceso): Observable<RespuestaAcceso>{
    return this.http.post<RespuestaAcceso>(this.url, datos);
  }
}
