import { Component } from '@angular/core';
import { NgPasswordRulesService } from './ng-password-rules.service';
import { Rule } from './rule';

@Component({
    selector: 'ng-password-helper',
    template: `
        <div class="rules-list" id="checkRulesList"><span class="rules">Your password must contain :</span>
            <ul class="rules">
                <li class="{{ rule.valid === true ? 'ok' : 'ko' }} " *ngFor="let rule of rules">{{rule.desc}}</li>
            </ul>
        </div>
    `,
    styles: [`
        div.rules-list .rules {
          list-style-type: none;
          padding: 0;
        }
        div.rules-list li {
          position: relative;
        }
        div.rules-list li.ko::before {
          content: '\\f00d';
          font: normal normal normal 14px/1 FontAwesome;
          width: 32px;
          font-size: 14px;
          display: inline-block;
          text-align: right;
          margin-right: 10px;
          color: #F00;
        }
        div.rules-list li.ok::before {
          content: '\\f00c';
          font: normal normal normal 14px/1 FontAwesome;
          width: 32px;
          font-size: 14px;
          display: inline-block;
          text-align: right;
          margin-right: 10px;
          color: #008000;
       }
    `],
})
export class NgPasswordHelperComponent {

    public rules: Rule[];

    /**
     * @param  {NgPasswordRulesService} ngPasswordRulesService
     */
    constructor(private ngPasswordRulesService: NgPasswordRulesService) {
        ngPasswordRulesService.getRules().subscribe(rulesdata => {
            this.rules = rulesdata;
        });
    }
}
