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
<section role='main'>
    <div class='container col-sm-12'>
        <form class='col-sm-5 col-sm-offset-4' autocomplete='off' #f="ngForm" novalidate (ngSubmit)="save(f.value, f.valid)">
            <br>
            <fieldset>
                <div class="form-group">
                    <label for="passwordField">Password</label>
                    <input id="password" name="password" autocomplete="off" [(ngModel)]="model.password" #password="ngModel" class="required mark-required form-control" type="password" required ngPasswordValidator>
                    <span [hidden]="password.valid || !((password.errors | firstError)==='required')" class="error">Password is required</span>
                    <span [hidden]="password.valid || !((password.errors | firstError)==='passwordRulesInvalid')" class="error">Password is not valid</span>
                    <span [hidden]="!password.valid" class="ok">Password is valid</span>
                </div>
            </fieldset>
            <ng-password-helper class="password-helper"></ng-password-helper>
        </form>
    </div>
</section>

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
      'newPassword': this.newPassword
    });
  }

  public passwordHelper(control: FormControl) {
      return this.ngPasswordRulesService.validPassword(control);
  }

}
```

and add html similar to this:

```
<section role='main'>
    <div class='container col-sm-12'>
        <form class='col-sm-5 col-sm-offset-4' autocomplete='off' [formGroup]="passwordForm" novalidate (ngSubmit)="save(f.value, f.valid)">
            <br>
            <fieldset>
                <div class="form-group">
                    <label for="passwordField">Password</label>
                    <input id="password" name="password" autocomplete="off" class="required mark-required form-control" type="password" formControlName="newPassword">
                    <span *ngIf="passwordForm.get('newPassword').hasError('passwordRulesInvalid')" class="error">Password is not valid</span>
                    <span *ngIf="passwordForm.get('newPassword').valid" class="ok">Password is valid</span>
                </div>
            </fieldset>
            <ng-password-helper class="password-helper"></ng-password-helper>
        </form>
    </div>
</section>
```

## Credit

I orginally got the idea from https://www.linkmarketservices.com.au.
Later, I found a jquery version on npm https://www.npmjs.com/package/passwordruleshelper.
I swiped the html and css found on the jquery version. Thanks!