import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumnos, Alumno } from './alumnos';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  // esta URL obtiene el listado de todos los alumnos en el backend
  private baseURL="http://localhost:8080/alumnos/";

  constructor( private httpClient : HttpClient) { }
  
  //Este metodo nos sirve para obtener los Alumnos
  obtenerListaDeAlumnos():Observable<Alumnos[]>{
    return this.httpClient.get<Alumnos[]>(`${this.baseURL}listar`);
  }
// este metodo sirve para registrar un alumno
  registrarAlumno(alumno:Alumno) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, alumno)
  }

  eliminarAlumno(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}${id}`);

  }

  verDetallesDelAlumno(id:number):Observable<Object>{
    return this.httpClient.get(`${this.baseURL}${id}`);

  
  }

  //este metodo sirve para actualizar el alumno
  actualizarAlumno(alumno:any) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,alumno);
  }
}
