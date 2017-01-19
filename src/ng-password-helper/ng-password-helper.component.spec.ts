/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgPasswordHelperComponent } from './ng-password-helper.component';

describe('NgPasswordHelperComponent', () => {
  let component: NgPasswordHelperComponent;
  let fixture: ComponentFixture<NgPasswordHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPasswordHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPasswordHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
