import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/Rx';
import {Rule} from './rule';

@Injectable()
export class EzPasswordRulesService {

  private rules: Rule[];
  private rulesdata: BehaviorSubject<Rule[]> = new BehaviorSubject(this.rules);

  constructor() {
    this.rules = new Array();
    this.rules.push({desc: 'At least 8 and no more than 32 characters', regex: new RegExp('^.{8,32}$'), valid: false });
    this.rules.push({desc: 'At least one upper case character', regex: new RegExp('.*[A-Z].*'), valid: false});
    this.rules.push({desc: 'At least one lower case character', regex: new RegExp('.*[a-z].*'), valid: false});
    this.rules.push({desc: 'At least one digit', regex: new RegExp('.*[0-9].*'), valid: false});
    this.rules.push({desc: 'At least one special character',  regex: new RegExp('.*[!@#$%^&+=].*'),  valid: false });
  }

  public getRulesData(): Observable<any[]> {
    return this.rulesdata.asObservable();
  }

  public getRules() {
    return this.rules;
  }

  public validPassword(value) {
    let validCntr = 0;
    this.rules.forEach(
      function (element) {
        element.valid = element.regex.test(value);
        if (element.valid) {
            validCntr++;
        }
      }
    );
    this.rulesdata.next(this.rules);
    return validCntr === this.rules.length;
  }

}


