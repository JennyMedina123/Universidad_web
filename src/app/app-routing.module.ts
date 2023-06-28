import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { RegistrarAlumnosComponent } from './registrar-alumnos/registrar-alumnos.component';
import { ActualizarAlumnoComponent } from './actualizar-alumnos/actualizar-alumnos.component';
import { AlumnoDetallesComponent } from './alumno-detalles/alumno-detalles.component';

const routes: Routes = [
  {path : 'alumnos',component:ListaAlumnosComponent},
  {path:'',redirectTo:'alumnos', pathMatch: 'full'},
  {path : 'registrar-alumnos',component : RegistrarAlumnosComponent},
  {path : 'actualizar-alumno/:id',component : ActualizarAlumnoComponent},
  {path : 'alumno-detalle/:id',component : AlumnoDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
