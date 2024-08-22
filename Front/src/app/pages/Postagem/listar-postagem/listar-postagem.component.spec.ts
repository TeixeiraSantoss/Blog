import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostagemComponent } from './listar-postagem.component';

describe('ListarPostagemComponent', () => {
  let component: ListarPostagemComponent;
  let fixture: ComponentFixture<ListarPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPostagemComponent]
    });
    fixture = TestBed.createComponent(ListarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
