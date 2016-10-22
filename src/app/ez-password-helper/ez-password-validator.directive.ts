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

        console.log('directive start value = ', value);

        // validate against the rules ( do in the service)

        // Parent and children communicate via a service

        // just fudge for now
        if (value && value === 'aaa') {
          //this.ezPasswordRulesService.setRulesValid(true);
          console.log('directive valid');
          delete control.errors['ezInvalid'];
          if (!Object.keys(control.errors).length) {
             control.setErrors(null);
          }
        }

        if (value && value !== 'aaa') {
            console.log('dirctive invalid');
            //this.ezPasswordRulesService.setRulesValid(false);
            valid = true;  // set to false and swap the return. 
        }

        return valid ? {'ezInvalid': {value}} : null;

    }

}
