/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ps4Component } from './ps4.component';

describe('Ps4Component', () => {
  let component: Ps4Component;
  let fixture: ComponentFixture<Ps4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ps4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
