define(["angular","am.service"],function(e){return e.module("am.controller",["am.service"]).controller("amController",["amService",function(e){var n=this;e.get().then(function(e){n.app_message=e})}])});