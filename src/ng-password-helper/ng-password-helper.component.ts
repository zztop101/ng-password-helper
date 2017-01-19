import {Component} from '@angular/core';
import {NgPasswordRulesService} from './ng-password-rules.service';
import {Rule} from './rule';

@Component({
  selector: 'ng-password-helper',
  templateUrl: './ng-password-helper.component.html',
  styleUrls: ['./ng-password-helper.component.css'],
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

