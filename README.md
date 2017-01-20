# NgPasswordHelper


"AngularPasswordHelper" is an Angular 2 component that helps users enter a password
that matches the sites password policy. Some default rules have been provided or
 can easily customise.

## Installation

```
npm install ng-password-helper --save
```

## Demo

link coming soon !!

## Source

https://bitbucket.org/terrycms/ng-password-helper

## Usage

In app.module.ts import the module and customise the rules.

```
import { NgPasswordHelperModule, NgPasswordRulesService} from 'ng-password-helper';

@NgModule({
  declarations: [
    AppComponent,
    FirstErrorPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgPasswordHelperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  // Add this to the constructor if you want to add your own rules
  constructor(private ngPasswordRulesService: NgPasswordRulesService) {

     let rules = new Array();

     // use some default rules
     rules.push(ngPasswordRulesService.RULE_LENGTH);
     rules.push(ngPasswordRulesService.RULE_UPPER);
     rules.push(ngPasswordRulesService.RULE_LOWER);
     rules.push(ngPasswordRulesService.RULE_DIGIT);
     rules.push(ngPasswordRulesService.RULE_SPECIAL);

     // provide your own rule
     rules.push({desc: 'At least one special character!!',  regex: new RegExp('.*[!@#$%^&+=-].*'),  valid: false });
     ngPasswordRulesService.setRules(rules);

  }

}

```
For template driven forms add html similar to this. The main part to notice is the attribute on the input box
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
            type="password" #password="ngModel" required ngPasswordValidator>
          <small [hidden]="password.valid || (password.pristine && !f.submitted) || !((password.errors | firstError)==='required')">
           Password is required
        </small>
          <small [hidden]="password.valid || (password.pristine && !f.submitted) || !((password.errors | firstError)==='passwordRulesInvalid')">
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
<ng-password-helper class="password-helper"></ng-password-helper>

```

For Reactive Forms


```
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgPasswordRulesService } from 'ng-password-helper';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public passwordForm: any;
  public newPassword: FormControl;

  constructor(public ngPasswordRulesService: NgPasswordRulesService,
              public formBuilder: FormBuilder) {

    this.newPassword = formBuilder.control('', [this.passwordHelper.bind(this), Validators.required]);
    this.passwordForm = this.formBuilder.group({
      'newPassword': this.newPassword,
      'confirmPassword': ['', [Validators.required]]
    });
  }

  public passwordHelper(control: FormControl) {
      return this.ngPasswordRulesService.validPassword(control);
  }

}
```

and add html similar to this:

```
<div class="password-form">
  <form [formGroup]="passwordForm" novalidate>
    <div class="section">
      <p>Reactive Form</p>
      <div class="form">
        <div class="form-group">
          <label class="display-label" for="password">New Login Password</label><br>
          <input formControlName="newPassword"
                 autocomplete="off"
                 class="required mark-required form-control"
                 id="password"
                 name="password"
                 type="password">
          <small *ngIf="passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').hasError('required')">
             Password is required
          </small>
          <small *ngIf="passwordForm.get('newPassword').dirty && passwordForm.get('newPassword').hasError('passwordRulesInvalid')">
             Password is not valid
          </small>
        </div>
        <br>
        <div class="form-group">
          <label class="display-label" for="ConfirmPassword">Confirm Password</label><br>
          <input formControlName="confirmPassword"
                 autocomplete="off"
                 id="ConfirmPassword"
                 name="ConfirmPassword"
                 type="password">
        </div>
      </div>
    </div>
  </form>
</div>
<ng-password-helper class="password-helper"></ng-password-helper>
```


## Credit

I orginally got the idea from https://www.linkmarketservices.com.au.
Later, I found a jquery version on npm https://www.npmjs.com/package/passwordruleshelper.
I swiped the html and css found on the jquery version. Thanks!