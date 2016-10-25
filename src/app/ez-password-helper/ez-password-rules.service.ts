import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/Rx';
import {Rule} from './rule';

@Injectable()
export class EzPasswordRulesService {

  private rules: Rule[] = new Array();
  private rulesdata: BehaviorSubject<Rule[]> = new BehaviorSubject(this.rules);

  public RULE_LENGTH: Rule = {desc: 'At least 8 and no more than 32 characters',
    regex: new RegExp('^.{8,32}$'), valid: false };
  public RULE_UPPER: Rule = {desc: 'At least one upper case character',
    regex: new RegExp('.*[A-Z].*'), valid: false};
  public RULE_LOWER: Rule = {desc: 'At least one lower case character',
    regex: new RegExp('.*[a-z].*'), valid: false};
  public RULE_DIGIT: Rule = {desc: 'At least one digit',
    regex: new RegExp('.*[0-9].*'), valid: false};
  public RULE_SPECIAL: Rule = {desc: 'At least one of these special characters: ! @ # $ % ^ & *',
    regex: new RegExp('.*[\\*\\!@#$%^&+=].*'),  valid: false };

  /**
   * set up the default rules, can be overriden by the application
   * calling setRules.
   */
  constructor() {
    this.rules.push(this.RULE_LENGTH);
    this.rules.push(this.RULE_UPPER);
    this.rules.push(this.RULE_LOWER);
    this.rules.push(this.RULE_DIGIT);
    this.rules.push(this.RULE_SPECIAL);
  }

  /**
   * get rules as observable
   */
  public getRules(): Observable<any[]> {
    return this.rulesdata.asObservable();
  }

  /**
   * Override the default rules, with application defined rules.
   *
   * @param  {Rule[]} rules
   */
  public setRules(rules: Rule[]) {
    this.rules = rules;
  }

  /**
   * Check to see if password entered passes the rules criteria.
   *
   * @param  {} value
   * return true or false if all rules criteria has been met.
   */
  public validPassword(value: string) {
    let validCntr = 0;
    this.rules.forEach(
      function (element) {
        if (value) {
          element.valid = element.regex.test(value);
          if (element.valid) {
            validCntr++;
          }
        } else {
          element.valid = false;
        }
      }
    );
    this.rulesdata.next(this.rules);
    return validCntr === this.rules.length;
  }

}


