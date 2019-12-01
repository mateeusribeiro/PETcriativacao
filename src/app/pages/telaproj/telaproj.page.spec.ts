import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaprojPage } from './telaproj.page';

describe('TelaprojPage', () => {
  let component: TelaprojPage;
  let fixture: ComponentFixture<TelaprojPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaprojPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaprojPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
