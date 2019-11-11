import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetocadastroPage } from './projetocadastro.page';

describe('ProjetocadastroPage', () => {
  let component: ProjetocadastroPage;
  let fixture: ComponentFixture<ProjetocadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetocadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetocadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
