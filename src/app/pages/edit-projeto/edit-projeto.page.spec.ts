import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjetoPage } from './edit-projeto.page';

describe('EditProjetoPage', () => {
  let component: EditProjetoPage;
  let fixture: ComponentFixture<EditProjetoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjetoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjetoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
