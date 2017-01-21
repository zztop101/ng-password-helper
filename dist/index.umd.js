(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs/Rx"), require("@angular/common"), require("@angular/core"), require("@angular/forms"));
	else if(typeof define === 'function' && define.amd)
		define("ng-password-helper", ["rxjs/Rx", "@angular/common", "@angular/core", "@angular/forms"], factory);
	else if(typeof exports === 'object')
		exports["ng-password-helper"] = factory(require("rxjs/Rx"), require("@angular/common"), require("@angular/core"), require("@angular/forms"));
	else
		root["ng-password-helper"] = factory(root["Rx"], root["ng"]["common"], root["ng"]["core"], root["ng"]["forms"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgPasswordRulesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgPasswordRulesService = (function () {
    /**
     * set up the default rules, can be overriden by the application
     * calling setRules.
     */
    function NgPasswordRulesService() {
        this.rules = new Array();
        this.rulesdata = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"](this.rules);
        this.RULE_LENGTH = { desc: 'At least 8 and no more than 32 characters',
            regex: new RegExp('^.{8,32}$'), valid: false };
        this.RULE_UPPER = { desc: 'At least one upper case character',
            regex: new RegExp('.*[A-Z].*'), valid: false };
        this.RULE_LOWER = { desc: 'At least one lower case character',
            regex: new RegExp('.*[a-z].*'), valid: false };
        this.RULE_DIGIT = { desc: 'At least one digit',
            regex: new RegExp('.*[0-9].*'), valid: false };
        this.RULE_SPECIAL = { desc: 'At least one of these special characters: ! @ # $ % ^ & *',
            regex: new RegExp('.*[\\*\\!@#$%^&+=].*'), valid: false };
        this.rules.push(this.RULE_LENGTH);
        this.rules.push(this.RULE_UPPER);
        this.rules.push(this.RULE_LOWER);
        this.rules.push(this.RULE_DIGIT);
        this.rules.push(this.RULE_SPECIAL);
    }
    /**
     * get rules as observable
     */
    NgPasswordRulesService.prototype.getRules = function () {
        return this.rulesdata.asObservable();
    };
    /**
     * Override the default rules, with application defined rules.
     *
     * @param  {Rule[]} rules
     */
    NgPasswordRulesService.prototype.setRules = function (rules) {
        this.rules = rules;
    };
    /**
     * Check to see if password entered passes the rules criteria.
     *
     * @param  {} value
     * return true or false if all rules criteria has been met.
     */
    NgPasswordRulesService.prototype.validPassword = function (control) {
        var value = control.value;
        var validCntr = 0;
        var valid = false;
        this.rules.forEach(function (element) {
            if (value) {
                element.valid = element.regex.test(value);
                if (element.valid) {
                    validCntr++;
                }
            }
            else {
                element.valid = false;
            }
        });
        this.rulesdata.next(this.rules);
        if (validCntr === this.rules.length) {
            if (control.errors) {
                delete control.errors['passwordRulesInvalid'];
            }
            valid = true;
        }
        return valid ? null : { 'passwordRulesInvalid': { value: value } };
    };
    NgPasswordRulesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], NgPasswordRulesService);
    return NgPasswordRulesService;
}());


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_password_rules_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgPasswordHelperComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgPasswordHelperComponent = (function () {
    /**
     * @param  {NgPasswordRulesService} ngPasswordRulesService
     */
    function NgPasswordHelperComponent(ngPasswordRulesService) {
        var _this = this;
        this.ngPasswordRulesService = ngPasswordRulesService;
        ngPasswordRulesService.getRules().subscribe(function (rulesdata) {
            _this.rules = rulesdata;
        });
    }
    NgPasswordHelperComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ng-password-helper',
            template: "\n  <div class=\"rules-list\" id=\"checkRulesList\"><span class=\"rules\">Your password must contain :</span>\n     <ul class=\"rules\" >\n       <li class=\"{{ rule.valid === true ? 'ok' : 'ko' }} \" *ngFor=\"let rule of rules\">{{rule.desc}}</li>\n     </ul>\n  </div>\n  ",
            styles: ["\n  div.rules-list {\n     margin-top: 10px;\n  }\n\n  div.rules-list .rules {\n     list-style-type: none;\n     padding: 0;\n  }\n\ndiv.rules-list li {\n  position: relative;\n}\n\ndiv.rules-list li.ko::before {\n  content: '\\f00d';\n  font: normal normal normal 14px/1 FontAwesome;\n  width: 32px;\n  font-size: 14px;\n  display: inline-block;\n  text-align: right;\n  margin-right: 10px;\n  color: #F00;\n}\n\ndiv.rules-list li.ok::before {\n  content: '\\f00c';\n  font: normal normal normal 14px/1 FontAwesome;\n  width: 32px;\n  font-size: 14px;\n  display: inline-block;\n  text-align: right;\n  margin-right: 10px;\n  color: #008000;\n}\n  "],
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1__ng_password_rules_service__["a" /* NgPasswordRulesService */]])
    ], NgPasswordHelperComponent);
    return NgPasswordHelperComponent;
}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_password_rules_service__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NgPasswordValidatorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgPasswordValidatorDirective = (function () {
    function NgPasswordValidatorDirective(ngPasswordRulesService) {
        this.ngPasswordRulesService = ngPasswordRulesService;
    }
    NgPasswordValidatorDirective.prototype.validate = function (control) {
        return this.ngPasswordRulesService.validPassword(control);
    };
    NgPasswordValidatorDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[ngPasswordValidator][formControlName],[ngPasswordValidator][formControl],[ngPasswordValidator][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return NgPasswordValidatorDirective; }), multi: true }
            ]
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2__ng_password_rules_service__["a" /* NgPasswordRulesService */]])
    ], NgPasswordValidatorDirective);
    return NgPasswordValidatorDirective;
}());


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
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_password_helper_component__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_password_validator_directive__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_password_rules_service__ = __webpack_require__(1);
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(exports, "NgPasswordHelperModule", function() { return NgPasswordHelperModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NgPasswordHelperModule = (function () {
    function NgPasswordHelperModule() {
    }
    NgPasswordHelperModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__ng_password_helper_component__["a" /* NgPasswordHelperComponent */],
                __WEBPACK_IMPORTED_MODULE_3__ng_password_validator_directive__["a" /* NgPasswordValidatorDirective */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__ng_password_rules_service__["a" /* NgPasswordRulesService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ng_password_helper_component__["a" /* NgPasswordHelperComponent */], __WEBPACK_IMPORTED_MODULE_3__ng_password_validator_directive__["a" /* NgPasswordValidatorDirective */]]
        }), 
        __metadata('design:paramtypes', [])
    ], NgPasswordHelperModule);
    return NgPasswordHelperModule;
}());


/***/ }
/******/ ]);
});
//# sourceMappingURL=index.umd.js.map