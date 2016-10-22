import {Component, Output, Input, EventEmitter, OnInit, OnChanges, SimpleChange } from '@angular/core';
import {EzPasswordRulesService} from './ez-password-rules.service';

@Component({
  selector: 'app-ez-password-helper',
  templateUrl: './ez-password-helper.component.html',
  styleUrls: ['./ez-password-helper.component.css'],
})
export class EzPasswordHelperComponent implements OnInit, OnChanges {

  rules: any[];
  keys: number[] = [4, 5, 1, 3, 2];

  @Input() password: string;
  @Output() close: EventEmitter < boolean > = new EventEmitter < boolean > ();

  constructor(private ezPasswordRulesService: EzPasswordRulesService) {
    this.rules = this.ezPasswordRulesService.getRules();
    ezPasswordRulesService.getData().subscribe(data => {
      console.log('Helper component Data changes data ', data);
      this.keys = data;
    });
  }

  ngOnInit() {}

  ngOnChanges(changes: {
    [propertyName: string]: SimpleChange
  }) {
    this.rules = this.ezPasswordRulesService.getRules();
    /*
    if (changes['password'].currentValue !== undefined) {
      let validCntr = 0;
      this.rules.forEach(
        function (element) {
          element.valid = element.regex.test(changes['password'].currentValue);
          if (element.valid) {
            validCntr++;
          }
        }
      );
    }
    */
  }

  onClickClose() {
    this.close.emit(true);
  }

}

