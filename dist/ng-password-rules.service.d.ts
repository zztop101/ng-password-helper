import { Observable } from 'rxjs/Observable';
import { Rule } from './rule';
import { AbstractControl } from '@angular/forms';
export declare class NgPasswordRulesService {
    private rules;
    private rulesdata;
    RULE_LENGTH: Rule;
    RULE_UPPER: Rule;
    RULE_LOWER: Rule;
    RULE_DIGIT: Rule;
    RULE_SPECIAL: Rule;
    /**
     * set up the default rules, can be overriden by the application
     * calling setRules.
     */
    constructor();
    /**
     * get rules as observable
     */
    getRules(): Observable<any[]>;
    /**
     * Override the default rules, with application defined rules.
     *
     * @param  {Rule[]} rules
     */
    setRules(rules: Rule[]): void;
    /**
     * Check to see if password entered passes the rules criteria.
     *
     * @param  {} value
     * return true or false if all rules criteria has been met.
     */
    validPassword(control: AbstractControl): {
        'passwordRulesInvalid': {
            value: any;
        };
    };
}
