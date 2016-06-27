# NIWA Application Messages

This  module shows NIWA application messages in an Angular project.

###To install in a project use bower:
```
bower install https://github.com/niwa/application_messages.git
```


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





