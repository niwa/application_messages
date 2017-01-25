(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("@angular/http"), require("rxjs/Rx"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common", "@angular/http", "rxjs/Rx"], factory);
	else if(typeof exports === 'object')
		exports["niwa-application-messages"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"), require("@angular/http"), require("rxjs/Rx"));
	else
		root["niwa-application-messages"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"], root["@angular/http"], root["rxjs/Rx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var niwa_application_messages_module_1 = __webpack_require__(1);
	exports.NiwaApplicationMessagesModule = niwa_application_messages_module_1.NiwaApplicationMessagesModule;
	var niwa_application_messages_component_1 = __webpack_require__(6);
	exports.NiwaApplicationMessagesComponent = niwa_application_messages_component_1.NiwaApplicationMessagesComponent;
	var niwa_application_messages_service_1 = __webpack_require__(8);
	exports.NiwaApplicationMessagesService = niwa_application_messages_service_1.NiwaApplicationMessagesService;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var forms_1 = __webpack_require__(3);
	var common_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(5);
	var niwa_application_messages_component_1 = __webpack_require__(6);
	var NiwaApplicationMessagesModule = (function () {
	    function NiwaApplicationMessagesModule() {
	    }
	    NiwaApplicationMessagesModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule, http_1.HttpModule],
	            declarations: [niwa_application_messages_component_1.NiwaApplicationMessagesComponent],
	            exports: [niwa_application_messages_component_1.NiwaApplicationMessagesComponent],
	            entryComponents: [],
	            providers: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NiwaApplicationMessagesModule);
	    return NiwaApplicationMessagesModule;
	}());
	exports.NiwaApplicationMessagesModule = NiwaApplicationMessagesModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var message_1 = __webpack_require__(7);
	var niwa_application_messages_service_1 = __webpack_require__(8);
	var NiwaApplicationMessagesComponent = (function () {
	    function NiwaApplicationMessagesComponent(appMessagesService) {
	        this.appMessagesService = appMessagesService;
	        this.message = new message_1.Message('ok', "");
	    }
	    NiwaApplicationMessagesComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.appMessagesService.getMessage().subscribe(function (message) {
	            _this.message = message;
	        }, function (error) {
	            _this.error = error;
	            console.log(_this.error);
	        });
	    };
	    NiwaApplicationMessagesComponent = __decorate([
	        core_1.Component({
	            selector: 'niwa-application-messages',
	            providers: [niwa_application_messages_service_1.NiwaApplicationMessagesService],
	            template: "\n<div *ngIf=\"message\" class=\"{{message.status}}\">\n   \n</div>\n<div class=\"col-md-12\">\n    <div class=\"panel\">\n        <div class=\"panel-heading bg-{{message.cssClass}}\">\n            <span class=\"glyphicon glyphicon-wrench\"> </span>\n            {{message.text}}\n        </div>\n    </div>\n</div>\n\n"
	        }), 
	        __metadata('design:paramtypes', [niwa_application_messages_service_1.NiwaApplicationMessagesService])
	    ], NiwaApplicationMessagesComponent);
	    return NiwaApplicationMessagesComponent;
	}());
	exports.NiwaApplicationMessagesComponent = NiwaApplicationMessagesComponent;


/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	var Message = (function () {
	    function Message(status, text) {
	        this.text = text;
	        this.status = status;
	        switch (this.status) {
	            case 'ok':
	                this.cssClass = 'ok';
	                break;
	            case 'message':
	                this.cssClass = 'info';
	                break;
	            case 'maintenance':
	                this.cssClass = 'warning';
	                break;
	            case 'error':
	                this.cssClass = 'danger';
	                break;
	            default:
	                this.cssClass = this.status;
	                break;
	        }
	    }
	    return Message;
	}());
	exports.Message = Message;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Rx_1 = __webpack_require__(9);
	var http_1 = __webpack_require__(5);
	var message_1 = __webpack_require__(7);
	var NiwaApplicationMessagesService = (function () {
	    function NiwaApplicationMessagesService(http) {
	        this.http = http;
	        this.baseUrl = '/status/message';
	    }
	    NiwaApplicationMessagesService.prototype.getMessage = function () {
	        return this.http.get(this.baseUrl)
	            .map(this.mapResponse)
	            .catch(this.handleError);
	    };
	    NiwaApplicationMessagesService.prototype.handleError = function (error) {
	        return Rx_1.Observable.throw(error || 'Server Error');
	    };
	    NiwaApplicationMessagesService.prototype.mapResponse = function (res) {
	        var xml = res.text();
	        var oParser = new DOMParser();
	        var xmlDoc = oParser.parseFromString(xml, "text/xml");
	        var appMessageContainer = xmlDoc.getElementsByTagName("app_message");
	        var appstatus = appMessageContainer[0].getAttribute('status');
	        var text = appMessageContainer[0].getElementsByTagName("status_text")[0].childNodes[0].nodeValue;
	        var message = new message_1.Message(appstatus, text);
	        return message;
	    };
	    NiwaApplicationMessagesService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], NiwaApplicationMessagesService);
	    return NiwaApplicationMessagesService;
	}());
	exports.NiwaApplicationMessagesService = NiwaApplicationMessagesService;


/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=niwa-application-messages.umd.js.map