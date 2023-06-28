import  swal  from 'sweetalert2';
import { AlumnoService } from './../alumno.service';
import { Alumno } from './../alumnos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-alumnos',
  templateUrl: './actualizar-alumnos.component.html',
  styleUrls: ['./actualizar-alumnos.component.css']
})
export class ActualizarAlumnoComponent implements OnInit {

  id:number;
  alumno: any;
  constructor(private alumnoService:AlumnoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alumnoService.verDetallesDelAlumno(this.id).subscribe(dato =>{
      this.alumno = dato;
    },error => console.log(error));
  }

  irAlaListaDeAlumnos(){
    this.router.navigate(['/alumnos']);
    swal('Alumno actualizado',`El alumno ${this.alumno.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit(){
    const { telefono, nombreAlumno, fecha_Nacimiento, idAlumno } = this.alumno;
    console.log(this.alumno)
    let newAlumno = { telefono,  fecha_Nacimiento, idAlumno, nombreAlumno }
    this.alumnoService.actualizarAlumno(newAlumno).subscribe(dato => {
      this.irAlaListaDeAlumnos();
    },error => console.log(error));
  }
}
