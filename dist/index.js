import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPasswordHelperComponent } from './ng-password-helper.component';
import { NgPasswordValidatorDirective } from './ng-password-validator.directive';
import { NgPasswordRulesService } from './ng-password-rules.service';
export var NgPasswordHelperModule = (function () {
    function NgPasswordHelperModule() {
    }
    NgPasswordHelperModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        NgPasswordHelperComponent,
                        NgPasswordValidatorDirective
                    ],
                    providers: [NgPasswordRulesService],
                    declarations: [NgPasswordHelperComponent, NgPasswordValidatorDirective]
                },] },
    ];
    /** @nocollapse */
    NgPasswordHelperModule.ctorParameters = function () { return []; };
    return NgPasswordHelperModule;
}());
//# sourceMappingURL=C:/_code/home/password-helper/ng-password-helper/index.js.map