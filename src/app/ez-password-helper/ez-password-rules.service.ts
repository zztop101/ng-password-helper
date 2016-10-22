import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class EzPasswordRulesService {

  rules: any[];
  keys: number[] = [4, 5, 1, 3, 2];
  private data: BehaviorSubject<number[]> = new BehaviorSubject(this.keys);

  constructor() {
    this.rules = new Array();
    this.rules[0] = {desc: 'At least 8 and no more than 32 characters', regex: new RegExp('^.{8,32}$'), valid: false };
    this.rules[1] = {desc: 'At least one upper case character', regex: new RegExp('.*[A-Z].*'), valid: false};
    this.rules[2] = {desc: 'At least one lower case character', regex: new RegExp('.*[a-z].*'), valid: false};
    this.rules[3] = {desc: 'At least one digit', regex: new RegExp('.*[0-9].*'), valid: false};
    this.rules[4] = {desc: 'At least one special character',  regex: new RegExp('.*[!@#$%^&+=].*'),  valid: false };
  }

  setRulesValid(rulevalid) {
    this.rules[0].valid = rulevalid;
    this.rules[1].valid = rulevalid;
    this.rules[2].valid = rulevalid;
    this.rules[3].valid = rulevalid;
    this.rules[4].valid = rulevalid;
  }

  public setKey(i: number, val: number): void {
    console.log('setKey');
    this.keys[i] = val;
    this.data.next(this.keys);
  }

  public getData(): Observable<number[]> {
    return this.data.asObservable();
  }

  public getKeys(): number[] {
    return this.keys;
  }

  getRules() {
    return this.rules;
  }

  validPassword(value) {
    let validCntr = 0;
    this.rules.forEach(
      function (element) {
        element.valid = element.regex.test(value);
        if (element.valid) {
            validCntr++;
        }
      }
    );
    return validCntr === this.rules.length;
  }

}


