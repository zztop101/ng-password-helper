/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgPasswordRulesService } from './ng-password-rules.service';

describe('Service: NgPasswordRules', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgPasswordRulesService]
    });
  });

  it('should ...', inject([NgPasswordRulesService], (service: NgPasswordRulesService) => {
    expect(service).toBeTruthy();
  }));
});
