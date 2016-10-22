import {Component, Output, Input, EventEmitter } from '@angular/core';
import {EzPasswordRulesService} from './ez-password-rules.service';

@Component({
  selector: 'app-ez-password-helper',
  templateUrl: './ez-password-helper.component.html',
  styleUrls: ['./ez-password-helper.component.css'],
})
export class EzPasswordHelperComponent {

  rules: any[];

  @Input() password: string;
  @Output() close: EventEmitter < boolean > = new EventEmitter < boolean > ();

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

