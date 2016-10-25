/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EzPasswordHelperComponent } from './ez-password-helper.component';

describe('EzPasswordHelperComponent', () => {
  let component: EzPasswordHelperComponent;
  let fixture: ComponentFixture<EzPasswordHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EzPasswordHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EzPasswordHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
