import { Component, OnInit } from '@angular/core';
import { Alumnos } from './../alumnos';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

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
    this.alumnoServicio.obtenerListaDeAlumnos().subscribe(dato => {
      this.alumnos = dato;
    });
  }

  eliminarAlumno(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al alumno",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: ' btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.alumnoServicio.eliminarAlumno(id).subscribe(dato => {
          console.log(dato);
          this.obtenerAlumnos();
          swal(
            'Alumno eliminado',
            'El alumno ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesDelAlumno(id:number){
    this.router.navigate(['alumno-detalle',id]);
  }

}


