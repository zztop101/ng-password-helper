import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';
export var NgPasswordRulesService = (function () {
    /**
     * set up the default rules, can be overriden by the application
     * calling setRules.
     */
    function NgPasswordRulesService() {
        this.rules = new Array();
        this.rulesdata = new BehaviorSubject(this.rules);
        this.RULE_LENGTH = { desc: 'At least 8 and no more than 32 characters',
            regex: new RegExp('^.{8,32}$'), valid: false };
        this.RULE_UPPER = { desc: 'At least one upper case character',
            regex: new RegExp('.*[A-Z].*'), valid: false };
        this.RULE_LOWER = { desc: 'At least one lower case character',
            regex: new RegExp('.*[a-z].*'), valid: false };
        this.RULE_DIGIT = { desc: 'At least one digit',
            regex: new RegExp('.*[0-9].*'), valid: false };
        this.RULE_SPECIAL = { desc: 'At least one of these special characters: ! @ # $ % ^ & *',
            regex: new RegExp('.*[\\*\\!@#$%^&+=].*'), valid: false };
        this.rules.push(this.RULE_LENGTH);
        this.rules.push(this.RULE_UPPER);
        this.rules.push(this.RULE_LOWER);
        this.rules.push(this.RULE_DIGIT);
        this.rules.push(this.RULE_SPECIAL);
    }
    /**
     * get rules as observable
     */
    NgPasswordRulesService.prototype.getRules = function () {
        return this.rulesdata.asObservable();
    };
    /**
     * Override the default rules, with application defined rules.
     *
     * @param  {Rule[]} rules
     */
    NgPasswordRulesService.prototype.setRules = function (rules) {
        this.rules = rules;
    };
    /**
     * Check to see if password entered passes the rules criteria.
     *
     * @param  {} value
     * return true or false if all rules criteria has been met.
     */
    NgPasswordRulesService.prototype.validPassword = function (control) {
        var value = control.value;
        var validCntr = 0;
        var valid = false;
        this.rules.forEach(function (element) {
            if (value) {
                element.valid = element.regex.test(value);
                if (element.valid) {
                    validCntr++;
                }
            }
            else {
                element.valid = false;
            }
        });
        this.rulesdata.next(this.rules);
        if (validCntr === this.rules.length) {
            if (control.errors) {
                delete control.errors['passwordRulesInvalid'];
            }
            valid = true;
        }
        return valid ? null : { 'passwordRulesInvalid': { value: value } };
    };
    NgPasswordRulesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    NgPasswordRulesService.ctorParameters = function () { return []; };
    return NgPasswordRulesService;
}());
//# sourceMappingURL=C:/_code/home/password-helper/ng-password-helper/ng-password-rules.service.js.map