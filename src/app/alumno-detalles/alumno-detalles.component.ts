import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumnos';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-alumno-detalles',
  templateUrl: './alumno-detalles.component.html',
  styleUrls: ['./alumno-detalles.component.css']
})
export class AlumnoDetallesComponent implements OnInit {

  id:number;
  alumno: any;
  constructor(private routes:ActivatedRoute, private alumnoServicio:AlumnoService){}

  ngOnInit(): void {
      this.id = this.routes.snapshot.params['id'];
      this.alumno = new Alumno();
      this.alumnoServicio.verDetallesDelAlumno(this.id).subscribe(dato => {
        this.alumno = dato;
        swal (`Detalles del alumno ${this.alumno.nombreAlumno}`);
      });
  }

}
