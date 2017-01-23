# NIWA Application Messages

This  module shows NIWA application messages in an Angular 2 project.

## How Does It Work

The service fetches a status message from the Application Messages internal server and displays it in a standard div. THis requires changes to the apache file to allow add ProxyPass settings.



## Install

1. add niwa-application-messages in your package.json requirements

        "niwa_application_messages": "git://github.com/niwa/application_messages.git",

2. import NiwaApplicationMessagesModule to your AppModule

        import { NgModule } from '@angular/core';
        import { FormsModule } from "@angular/forms";
        import { BrowserModule  } from '@angular/platform-browser';
        import { AppComponent } from './app.component';
        import {NiwaApplicationMessagesModule} from 'niwa-application-messages'

        @NgModule({
          imports: [BrowserModule, FormsModule, NiwaApplicationMessagesModule],
          declarations: [AppComponent],
          bootstrap: [ AppComponent ]
        })
        export class AppModule { }

## Use it in your code


       <niwa-application-messages></niwa-application-messages>


###To use this module
You need to set up a proxy pass rule in your Apache vhost file. It looks like this:
```
ProxyPass /status/message http://applicationmessages.niwa.co.nz/status/{projectName}
```

```
<Proxy *>

Order allow,deny

Allow from all

</Proxy>
```

### To set up your project in *NIWA Application Status Messages*

The paramater **projectName** is the name of your project set up here:
[applicationmessages.niwa.co.nz](applicationmessages.niwa.co.nz)


##Developing

After making changes - be sure to run `npm run build`