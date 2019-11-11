import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiacadastroPage } from './noticiacadastro.page';

describe('NoticiacadastroPage', () => {
  let component: NoticiacadastroPage;
  let fixture: ComponentFixture<NoticiacadastroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiacadastroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiacadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
