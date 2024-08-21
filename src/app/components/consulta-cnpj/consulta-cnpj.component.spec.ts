import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCnpjComponent } from './consulta-cnpj.component';

describe('ConsultaCnpjComponent', () => {
  let component: ConsultaCnpjComponent;
  let fixture: ComponentFixture<ConsultaCnpjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaCnpjComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCnpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
