import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAreaComponent } from './grafico-area.component';

describe('GraficoAreaComponent', () => {
  let component: GraficoAreaComponent;
  let fixture: ComponentFixture<GraficoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoAreaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
