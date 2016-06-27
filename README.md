# NIWA Application Messages

This  module allows to show NIWA application messages in an Angular project. It is written in requirejs style (AMD).

If your project is an Angular + Requirejs project simply clone it and change the URL in the am.service.js file to point to the correct
URL set up for your applications messages

$http.get('/status/message').then(function (response)  ...


To use this module you will need to set up a proxy pass rule in your Apache vhost file. It looks like this:


ProxyPass /status/message http://applicationmessages.niwa.co.nz/status/{projectName}

<Proxy *>

Order allow,deny

Allow from all

</Proxy>


Whereby projectName is the name of your project set up here:
[applicationmessages.niwa.co.nz](applicationmessages.niwa.co.nz)

