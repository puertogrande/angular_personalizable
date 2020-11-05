import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioContenidoComponent } from './inicio-contenido.component';

describe('InicioContenidoComponent', () => {
  let component: InicioContenidoComponent;
  let fixture: ComponentFixture<InicioContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
