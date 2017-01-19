import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { NgPasswordRulesService } from './ng-password-rules.service';

@Directive({
  selector: '[ngPasswordValidator][formControlName],[ngPasswordValidator][formControl],[ngPasswordValidator][ngModel]',
  providers: [
     { provide: NG_VALIDATORS, useExisting: forwardRef(() => NgPasswordValidatorDirective), multi: true }
  ]
})
export class NgPasswordValidatorDirective implements Validator {

  constructor(
    private ngPasswordRulesService: NgPasswordRulesService
  ) { }

  public validate(control: AbstractControl): { [key: string]: any } {
     return this.ngPasswordRulesService.validPassword(control);
  }
}
