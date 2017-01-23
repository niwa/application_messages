import { Component, ViewEncapsulation } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

declare var moment: any;
moment['locale']('en-ca'); //e.g. fr-ca



@Component({
  selector: 'my-app',
  template: `<niwa-application-messages></niwa-application-messages>`,
  encapsulation: ViewEncapsulation.None,
  styles: [`
    ng2-utils-1 .ng2-datetime-picker-wrapper { display: inline-block }
    div { font-family: Courier; font-size: 13px}
    input { min-width: 200px; font-size: 15px; }
    input.ng-dirty { background: #ddd; }
    fieldset {display: inline-block; vertical-align: top; margin: 10px; padding: 20px }
  `]
})
export class AppComponent {



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
