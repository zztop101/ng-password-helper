import { NgPasswordRulesService } from './ng-password-rules.service';
import { Rule } from './rule';
export declare class NgPasswordHelperComponent {
    private ngPasswordRulesService;
    rules: Rule[];
    /**
     * @param  {NgPasswordRulesService} ngPasswordRulesService
     */
    constructor(ngPasswordRulesService: NgPasswordRulesService);
}
