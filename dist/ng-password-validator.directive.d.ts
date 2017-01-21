import { Validator, AbstractControl } from '@angular/forms';
import { NgPasswordRulesService } from './ng-password-rules.service';
export declare class NgPasswordValidatorDirective implements Validator {
    private ngPasswordRulesService;
    constructor(ngPasswordRulesService: NgPasswordRulesService);
    validate(control: AbstractControl): {
        [key: string]: any;
    };
}
