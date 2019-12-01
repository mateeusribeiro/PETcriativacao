import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionaPage } from './seleciona.page';

describe('SelecionaPage', () => {
  let component: SelecionaPage;
  let fixture: ComponentFixture<SelecionaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
