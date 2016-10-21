import {
  Component,
  Output,
  Input,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChange
} from '@angular/core';

import { EzPasswordRulesService } from './ez-password-rules.service';

@Component({
  selector: 'app-ez-password-helper',
  templateUrl: './ez-password-helper.component.html',
  styleUrls: ['./ez-password-helper.component.css'],
  providers: [EzPasswordRulesService]
})
export class EzPasswordHelperComponent implements OnInit, OnChanges {

  // test regexp here:
  // https://regex101.com/r/cL2wT3/1

  // password rules
  /*
  rules: any = [{
    desc: 'At least 8 and no more than 32 characters',
    regex: new RegExp('^.{8,32}$'),
    valid: false
  }, {
    desc: 'At least one upper case character',
    regex: new RegExp('.*[A-Z].*'),
    valid: false
  }, {
    desc: 'At least one lower case character',
    regex: new RegExp('.*[a-z].*'),
    valid: false
  }, {
    desc: 'At least one digit',
    regex: new RegExp('.*[0-9].*'),
    valid: false
  }, {
    desc: 'At least one special character',
    regex: new RegExp('.*[!@#$%^&+=].*'),
    valid: false
  }];
  */

  rules: any[];

  @Input() password: string;
  @Output() close: EventEmitter < boolean > = new EventEmitter < boolean > ();
  @Output() valid: EventEmitter < boolean > = new EventEmitter < boolean > ();

  constructor(private ezPasswordRulesService: EzPasswordRulesService) {
    this.rules = this.ezPasswordRulesService.getRules();
  }

  ngOnInit() {}

  ngOnChanges(changes: {
    [propertyName: string]: SimpleChange
  }) {
    if (changes['password'].currentValue !== undefined) {
      let validCntr = 0;
      this.rules.forEach(
        function (element) {
          element.valid = element.regex.test(changes['password'].currentValue);
          if (element.valid) {
            validCntr++;
          }
        }
      );
      this.valid.emit(validCntr === this.rules.length);
    }
  }

  onClickClose() {
    this.close.emit(true);
  }

}

