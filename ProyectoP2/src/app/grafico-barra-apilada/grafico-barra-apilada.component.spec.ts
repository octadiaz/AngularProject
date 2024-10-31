import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarraApiladaComponent } from './grafico-barra-apilada.component';

describe('GraficoBarraApiladaComponent', () => {
  let component: GraficoBarraApiladaComponent;
  let fixture: ComponentFixture<GraficoBarraApiladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoBarraApiladaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoBarraApiladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
