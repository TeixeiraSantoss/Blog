import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarComentarioComponent } from './cadastrar-comentario.component';

describe('CadastrarComentarioComponent', () => {
  let component: CadastrarComentarioComponent;
  let fixture: ComponentFixture<CadastrarComentarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarComentarioComponent]
    });
    fixture = TestBed.createComponent(CadastrarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
