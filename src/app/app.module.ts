import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarAlumnosComponent } from './registrar-alumnos/registrar-alumnos.component';
import { FormsModule } from '@angular/forms';
import { ActualizarAlumnoComponent } from './actualizar-alumnos/actualizar-alumnos.component';
import { AlumnoDetallesComponent } from './alumno-detalles/alumno-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    RegistrarAlumnosComponent,
    ActualizarAlumnoComponent,
    AlumnoDetallesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

