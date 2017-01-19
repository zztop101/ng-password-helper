import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { EzPasswordRulesService } from './ez-password-rules.service';

@Directive({
  selector: '[ezPasswordValidator][formControlName],[ezPasswordValidator][formControl],[ezPasswordValidator][ngModel]',
  providers: [
     { provide: NG_VALIDATORS, useExisting: forwardRef(() => EzPasswordValidatorDirective), multi: true }
  ]
})
export class EzPasswordValidatorDirective implements Validator {

  constructor(
    private ezPasswordRulesService: EzPasswordRulesService
  ) { }

  public validate(control: AbstractControl): { [key: string]: any } {
     return this.ezPasswordRulesService.validPassword(control);
  }
}
