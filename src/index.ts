import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgPasswordHelperComponent } from './ng-password-helper.component';
import { NgPasswordValidatorDirective } from './ng-password-validator.directive';
import { NgPasswordRulesService } from './ng-password-rules.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NgPasswordHelperComponent,
    NgPasswordValidatorDirective
  ],
  providers: [NgPasswordRulesService],
  declarations: [NgPasswordHelperComponent, NgPasswordValidatorDirective]
})
export class NgPasswordHelperModule { }
