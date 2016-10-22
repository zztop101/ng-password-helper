import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzPasswordHelperComponent } from './ez-password-helper.component';
import { EzPasswordValidatorDirective } from './ez-password-validator.directive';
import { EzPasswordRulesService } from './ez-password-rules.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EzPasswordHelperComponent,
    EzPasswordValidatorDirective
  ],
  providers: [EzPasswordRulesService],
  declarations: [EzPasswordHelperComponent, EzPasswordValidatorDirective]
})
export class EzPasswordHelperModule { }
