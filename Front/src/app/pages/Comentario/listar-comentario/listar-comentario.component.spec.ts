import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarComentarioComponent } from './listar-comentario.component';

describe('ListarComentarioComponent', () => {
  let component: ListarComentarioComponent;
  let fixture: ComponentFixture<ListarComentarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarComentarioComponent]
    });
    fixture = TestBed.createComponent(ListarComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
