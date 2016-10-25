import {Component} from '@angular/core';
import {EzPasswordRulesService} from './ez-password-rules.service';
import {Rule} from './rule';

@Component({
  selector: 'ez-password-helper',
  templateUrl: './ez-password-helper.component.html',
  styleUrls: ['./ez-password-helper.component.css'],
})
export class EzPasswordHelperComponent {

  public rules: Rule[];

  /**
   * @param  {EzPasswordRulesService} privateezPasswordRulesService
   */
  constructor(private ezPasswordRulesService: EzPasswordRulesService) {
    ezPasswordRulesService.getRules().subscribe(rulesdata => {
      this.rules = rulesdata;
    });
  }

}

