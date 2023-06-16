import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarAlumnosComponent } from './actualizar-alumnos.component';

describe('ActualizarAlumnosComponent', () => {
  let component: ActualizarAlumnosComponent;
  let fixture: ComponentFixture<ActualizarAlumnosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActualizarAlumnosComponent]
    });
    fixture = TestBed.createComponent(ActualizarAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
