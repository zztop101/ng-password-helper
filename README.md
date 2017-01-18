# EzPasswordHelper

## Introduction

"AngularPasswordRules" is an Angular 2 component that helps users enter a password 
that matches the sites password policy. Useful on the change password screen. Some default
rules have been provided or can easily customise.

## Installation

```
npm install ng-password-helper
```

## Demo

link coming soon ! 

## Usage

In app.module.ts

```
import { EzPasswordHelperModule, EzPasswordRulesService} from 'ez-password-helper';

@NgModule({
  declarations: [
    AppComponent,
    FirstErrorPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EzPasswordHelperModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Add this to the constructor if you want to add your own rules
  constructor(private ezPasswordRulesService: EzPasswordRulesService) {
      
     let rules = new Array();

     // use some default rules
     rules.push(ezPasswordRulesService.RULE_LENGTH);
     rules.push(ezPasswordRulesService.RULE_UPPER);
     rules.push(ezPasswordRulesService.RULE_LOWER);
     rules.push(ezPasswordRulesService.RULE_DIGIT);
     rules.push(ezPasswordRulesService.RULE_SPECIAL); 

     // provide your own rule
     rules.push({desc: 'At least one special character!!',  regex: new RegExp('.*[!@#$%^&+=-].*'),  valid: false });
     ezPasswordRulesService.setRules(rules);
     
  }

}

```

Then set up your template similar to this, note the attribute on the input box
and the rules helper at the bottom.

```
<div class="password-form">
  <form #f="ngForm" novalidate (ngSubmit)="save(f.value, f.valid)">
    <div class="section">
      <p>Please enter and confirm your new login password, and verify your transaction password.
      </p>
      <div class="errorContainer" id="mainErrorDiv">
        <ol></ol>
      </div>
      <div class="form">
        <div class="form-group">
          <label class="display-label" for="password">New Login Password</label>
          <!--
          Add the attribute to the password input box 
          -->
          <input autocomplete="off" [(ngModel)]="model.password" class="required mark-required form-control" id="password" name="password"
            type="password" #password="ngModel" required ezPasswordValidator>
          <small [hidden]="password.valid || (password.pristine && !f.submitted) || !((password.errors | firstError)==='required')">
           Password is required
        </small>
          <small [hidden]="password.valid || (password.pristine && !f.submitted) || !((password.errors | firstError)==='ezInvalid')">
           Password is not valid
        </small>
        </div>
        <br>
        <div class="form-group">
          <label class="display-label" for="ConfirmPassword">Confirm Password</label>
          <input autocomplete="off" data-bind="value: ConfirmPassword" id="ConfirmPassword" name="ConfirmPassword" type="password">
        </div>
      </div>
    </div>
    <br>
  </form>
</div>

<!--
Displays the rules and a cross or tick as the rule has met the definition.
Override css to change look and feel of the helper.
-->
<ez-password-helper class="password-helper"></ez-password-helper>

```
