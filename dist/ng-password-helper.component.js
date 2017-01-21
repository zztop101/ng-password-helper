import { Component } from '@angular/core';
import { NgPasswordRulesService } from './ng-password-rules.service';
export var NgPasswordHelperComponent = (function () {
    /**
     * @param  {NgPasswordRulesService} ngPasswordRulesService
     */
    function NgPasswordHelperComponent(ngPasswordRulesService) {
        var _this = this;
        this.ngPasswordRulesService = ngPasswordRulesService;
        ngPasswordRulesService.getRules().subscribe(function (rulesdata) {
            _this.rules = rulesdata;
        });
    }
    NgPasswordHelperComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-password-helper',
                    template: "\n  <div class=\"rules-list\" id=\"checkRulesList\"><span class=\"rules\">Your password must contain :</span>\n     <ul class=\"rules\" >\n       <li class=\"{{ rule.valid === true ? 'ok' : 'ko' }} \" *ngFor=\"let rule of rules\">{{rule.desc}}</li>\n     </ul>\n  </div>\n  ",
                    styles: ["\n  div.rules-list {\n     margin-top: 10px;\n  }\n\n  div.rules-list .rules {\n     list-style-type: none;\n     padding: 0;\n  }\n\ndiv.rules-list li {\n  position: relative;\n}\n\ndiv.rules-list li.ko::before {\n  content: '\\f00d';\n  font: normal normal normal 14px/1 FontAwesome;\n  width: 32px;\n  font-size: 14px;\n  display: inline-block;\n  text-align: right;\n  margin-right: 10px;\n  color: #F00;\n}\n\ndiv.rules-list li.ok::before {\n  content: '\\f00c';\n  font: normal normal normal 14px/1 FontAwesome;\n  width: 32px;\n  font-size: 14px;\n  display: inline-block;\n  text-align: right;\n  margin-right: 10px;\n  color: #008000;\n}\n  "],
                },] },
    ];
    /** @nocollapse */
    NgPasswordHelperComponent.ctorParameters = function () { return [
        { type: NgPasswordRulesService, },
    ]; };
    return NgPasswordHelperComponent;
}());
//# sourceMappingURL=C:/_code/home/password-helper/ng-password-helper/ng-password-helper.component.js.map