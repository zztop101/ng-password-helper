import {Component, Output, EventEmitter } from '@angular/core';
import {EzPasswordRulesService} from './ez-password-rules.service';
import {Rule} from './rule';

@Component({
  selector: 'app-ez-password-helper',
  templateUrl: './ez-password-helper.component.html',
  styleUrls: ['./ez-password-helper.component.css'],
})
export class EzPasswordHelperComponent {

  public rules: Rule[];
  @Output() close: EventEmitter < boolean > = new EventEmitter < boolean > ();

  /**
   * @param  {EzPasswordRulesService} privateezPasswordRulesService
   */
  constructor(private ezPasswordRulesService: EzPasswordRulesService) {

    ezPasswordRulesService.getRulesData().subscribe(rulesdata => {
      this.rules = rulesdata;
    });

    this.rules = this.ezPasswordRulesService.getRules();

  }

  onClickClose() {
    this.close.emit(true);
  }

}

