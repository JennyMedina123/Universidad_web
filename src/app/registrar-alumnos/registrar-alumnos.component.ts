import { AlumnoService } from '../alumno.service';
import { Alumno } from './../alumnos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-alumnos',
  templateUrl: './registrar-alumnos.component.html',
  styleUrls: ['./registrar-alumnos.component.css']
})
export class RegistrarAlumnosComponent implements OnInit{

  alumno : Alumno = new Alumno();
  constructor(private alumnoServicio:AlumnoService,private router:Router) {}
  
  ngOnInit(): void{}

  guardarAlumno(){
    this.alumnoServicio.registrarAlumno(this.alumno).subscribe(dato => {
    console.log(dato);
    this.irAlaListaDeAlumno();
    }, error => console.log(error));
  }

  irAlaListaDeAlumno(){
    this.router.navigate(['/alumnos']);
  }

  onSubmit(){
    this.guardarAlumno();
  }
}
