import { Component, OnInit } from '@angular/core';
import { Alumnos } from './../alumnos';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  alumnos:Alumnos[];
 
  constructor(private alumnoServicio:AlumnoService, private router:Router ){}

  ngOnInit(): void {
     this.obtenerAlumnos()
  }

  actualizarAlumno(id:number){
    this.router.navigate(['actualizar-alumno', id]);
  }
 
  private obtenerAlumnos(){
    this.alumnoServicio.obtenerListaDeAlumnos() .subscribe(dato => {
      this.alumnos = dato;
    });
  }

  eliminarAlumno(id:number){
    this.alumnoServicio.eliminarAlumno(id).subscribe(dato =>{
      console.log(dato);
      this.obtenerAlumnos();
    });
  }

  verDetallesDelAlumno(id:number){
    this.router.navigate(['alumno-detalle',id]);
  }

}


