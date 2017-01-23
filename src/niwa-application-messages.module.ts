import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule  } from '@angular/common';

import {NiwaApplicationMessagesComponent} from './niwa-application-messages.component'

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [NiwaApplicationMessagesComponent],
  exports:  [NiwaApplicationMessagesComponent],
  entryComponents: [],
  providers: []
})
export class NiwaApplicationMessagesModule {}
