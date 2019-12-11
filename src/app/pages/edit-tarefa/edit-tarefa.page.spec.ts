import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarefaPage } from './edit-tarefa.page';

describe('EditTarefaPage', () => {
  let component: EditTarefaPage;
  let fixture: ComponentFixture<EditTarefaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTarefaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarefaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
