/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EzPasswordRulesService } from './ez-password-rules.service';

describe('Service: EzPasswordRules', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EzPasswordRulesService]
    });
  });

  it('should ...', inject([EzPasswordRulesService], (service: EzPasswordRulesService) => {
    expect(service).toBeTruthy();
  }));
});
