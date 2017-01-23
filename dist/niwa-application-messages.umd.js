(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/forms", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["niwa-application-messages"] = factory(require("@angular/core"), require("@angular/forms"), require("@angular/common"));
	else
		root["niwa-application-messages"] = factory(root["@angular/core"], root["@angular/forms"], root["@angular/common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
	var niwa_application_messages_component_1 = __webpack_require__(5);
	exports.NiwaApplicationMessagesComponent = niwa_application_messages_component_1.NiwaApplicationMessagesComponent;


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
	var niwa_application_messages_component_1 = __webpack_require__(5);
	var NiwaApplicationMessagesModule = (function () {
	    function NiwaApplicationMessagesModule() {
	    }
	    NiwaApplicationMessagesModule = __decorate([
	        core_1.NgModule({
	            imports: [common_1.CommonModule, forms_1.FormsModule],
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
	var message_1 = __webpack_require__(6);
	var NiwaApplicationMessagesComponent = (function () {
	    function NiwaApplicationMessagesComponent() {
	        this.message = new message_1.Message('maintenance', "This system will be undergoing maintenance soon");
	    }
	    NiwaApplicationMessagesComponent = __decorate([
	        core_1.Component({
	            selector: 'niwa-application-messages',
	            template: "<div *ngIf=\"message\" class=\"{{message.status}}\">\n            {{message.text}}\n</div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], NiwaApplicationMessagesComponent);
	    return NiwaApplicationMessagesComponent;
	}());
	exports.NiwaApplicationMessagesComponent = NiwaApplicationMessagesComponent;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	var Message = (function () {
	    function Message(status, text) {
	        this.text = text;
	        this.status = status;
	    }
	    return Message;
	}());
	exports.Message = Message;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=niwa-application-messages.umd.js.map