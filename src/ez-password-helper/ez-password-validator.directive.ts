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

  validate(control: AbstractControl): { [key: string]: any } {

        let valid = false;
        let value = control.value;

        if (this.ezPasswordRulesService.validPassword(value)) {
          if (control.errors) {
            delete control.errors['ezInvalid'];
          }
          valid = true;
        }

        return valid ? null : {'ezInvalid': {value}};
    }
}
