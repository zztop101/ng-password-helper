import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EzPasswordHelperComponent } from './ez-password-helper.component';
import { EzPasswordValidatorDirective } from './ez-password-validator.directive';
import { EzPasswordValidatorDirective } from './ez-password-helper/ez-password-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    EzPasswordHelperComponent
  ],
  declarations: [EzPasswordHelperComponent, EzPasswordValidatorDirective, EzPasswordValidatorDirective]
})
export class EzPasswordHelperModule { }
