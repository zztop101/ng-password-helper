import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { NgPasswordRulesService } from './ng-password-rules.service';
export var NgPasswordValidatorDirective = (function () {
    function NgPasswordValidatorDirective(ngPasswordRulesService) {
        this.ngPasswordRulesService = ngPasswordRulesService;
    }
    NgPasswordValidatorDirective.prototype.validate = function (control) {
        return this.ngPasswordRulesService.validPassword(control);
    };
    NgPasswordValidatorDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ngPasswordValidator][formControlName],[ngPasswordValidator][formControl],[ngPasswordValidator][ngModel]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return NgPasswordValidatorDirective; }), multi: true }
                    ]
                },] },
    ];
    /** @nocollapse */
    NgPasswordValidatorDirective.ctorParameters = function () { return [
        { type: NgPasswordRulesService, },
    ]; };
    return NgPasswordValidatorDirective;
}());
//# sourceMappingURL=C:/_code/home/password-helper/ng-password-helper/ng-password-validator.directive.js.map