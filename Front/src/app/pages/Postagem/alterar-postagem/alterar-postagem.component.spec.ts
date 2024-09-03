import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarPostagemComponent } from './alterar-postagem.component';

describe('AlterarPostagemComponent', () => {
  let component: AlterarPostagemComponent;
  let fixture: ComponentFixture<AlterarPostagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlterarPostagemComponent]
    });
    fixture = TestBed.createComponent(AlterarPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
