function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alert-security-alert-security-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/alert-security.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/alert-security.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserAlertSecurityAlertSecurityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.html":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.html ***!
    \***************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserAlertSecurityComponentsSecurityEmergencyContactNumbersSecurityEmergencyContactNumbersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"emergency-contacts-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isContactsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isContactsLoaded\">\n\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header no-border\">\n\t\t\t\t<div class=\"float-left\">\n\t\t    \t\t<h5>Emergency Contact Numbers</h5>\n\t\t    \t</div>\n\t    \t</div>\n\t\t\t<div class=\"card-body p-0 lists\">\n\t\t\t\t\n\t\t\t\t<ng-container *ngFor=\"let item of emergencyList; let i = index\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t  <img class=\"mr-4\" src=\"assets/images/user-icon.svg\" width=\"22\" />\n\t\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t\t    <h6 class=\"mb-2\">{{item.contactCategory}}</h6>\n\t\t\t\t\t\t\t<p>{{item.contactNumber}}</p>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/security-my-history/security-my-history.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/security-my-history/security-my-history.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserAlertSecurityComponentsSecurityMyHistorySecurityMyHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"secuirty-my-history-wrapper\">\n\t\t\n\t<app-loader *ngIf=\"!isAlertsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAlertsLoaded\">\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t\t    \t\t<h5>My History</h5>\n\t\t    \t</div>\n\t    \t</div>\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\t\t      \n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('alertName')\">Type <span [ngClass]=\"getFieldOrderBy('alertName')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('date')\">Date <span [ngClass]=\"getFieldOrderBy('date')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('status')\">Status <span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let alert of alertList | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t      <td class=\"name text-capitalize\">\n\t\t\t\t\t      \n\t\t\t\t\t\t      <div class=\"media\">\n\t\t\t\t\t\t\t\t  <div class=\"s-circle {{getEmergencyType(alert.alertTypeId)}} text-center\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/images/{{getEmergencyType(alert.alertTypeId)}}-e-icon.svg\" width=\"14\" />\n\t\t\t\t\t\t      \t  </div>\n\t\t\t\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t\t\t\t    <div>{{getAlertName(alert.alertTypeId)}}</div>\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t  \t  </td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(alert.receivedDate)}}</td>\n\t\t\t\t\t  \t  <td class=\"grey\">\n\t\t\t\t\t  \t  \t<span class=\"badge small text-uppercase min\" [ngClass]=\"getAlertStatus(alert.alertStatusId)\">{{getAlertStatus(alert.alertStatusId)}}</span>\n\t\t\t\t\t  \t  </td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserAlertSecurityComponentsSendPanicAlertSendPanicAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"send-panic-wrapper\">\n\n\t<app-loader *ngIf=\"!isEmergenciesLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isEmergenciesLoaded\">\n\n\t\t<div class=\"message-box\">\n\t\t\t<h4>Hi <span class=\"text-capitialize\">{{userName}}</span></h4>\n\t\t\t<h4>We are here to help you.</h4>\n\t\t</div>\n\n\t\t<a href=\"javascript:void(0)\" class=\"n-text\" \n\t\t\trouterLink=\"/user/alert-security/emergency-contacts\" \n\t\t\trouterLinkActive=\"active\"\n\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t<div class=\"card e-card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icon float-left\">\n\t\t\t\t\t\t\t<img src=\"assets/images/siren-new-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4 class=\"float-left\">Emergency Contacts</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</a>\n\n\t\t<div class=\"alert-lists\">\n\t\t\t<h5>Select the emergency assistance needed</h5>\n\t\t\t<div class=\"alerts d-flex\">\n\t\t\t\t<div class=\"box card sos-card\" *ngFor=\"let item of emergencyList\">\n\t\t\t\t\t<div class=\"card-body\" [ngClass]=\"getEmergencyType(item.lookupValueId)\" (click)=\"showConfirmEmergency(item, getEmergencyType(item.lookupValueId))\">\n\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t<img src=\"assets/images/{{getEmergencyType(item.lookupValueId)}}-e-icon.svg\"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4>{{item.lookupValueName}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n \t\n\n\t<ng-template #confirmEmergencyRef let-alert>\n\t\t<div class=\"emergency-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body {{alert.type}}\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"details-wrapper\"  *ngIf=\"!isRangeDone && !isRequestSuccess && !isRequestDeleted\">\n\t\t\t\t\t\t<div class=\"details text-center\">\n\t\t\t\t\t\t\t<p>You have selected</p>\n\t\t\t\t\t\t\t<h4>{{alert.lookupValueName}}</h4>\n\t\t\t\t\t\t\t<div class=\"image-wrapper text-center\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/{{getEmergencyType(alert.lookupValueId)}}-e-icon.svg\" width=\"70\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h5>Slide to confirm the assistance</h5>\n\n\t\t\t\t\t\t<div class=\"range-slider {{getEmergencyType(alert.lookupValueId)}}\">\n\t\t\t\t\t\t\t<input type=\"range\" [(ngModel)]=\"rangeValue\" (ngModelChange)=\"getRangeValue(alert)\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"request-message\" *ngIf=\"isRangeDone\">\n\t\t\t\t\t\t<h4 class=\"mb-4\">Request is in progress</h4>\n\t\t\t\t\t\t<app-loader color=\"white\"></app-loader>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"success-message\" *ngIf=\"isRequestSuccess && !isRequestDeleted\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details text-center\">\n\t\t\t\t\t\t\t<p>You have requested</p>\n\t\t\t\t\t\t\t<h4>{{alert.lookupValueName}}</h4>\n\t\t\t\t\t\t\t<div class=\"image-wrapper text-center\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/checked-icon.svg\" width=\"70\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<h5>Your location has been shared. Hold tight. Support is on the way</h5>\n\n\t\t\t\t\t\t\t<div class=\"btn-wrapper\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn d-block tc-white mb-3 {{getEmergencyType(alert.lookupValueId)}}\" (click)=\"closeAlertModal()\">Ok</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn d-block tc-white\" (click)=\"cancelEmergency()\">Cancel Emergency</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"success-message\" *ngIf=\"isRequestDeleted\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details text-center\">\n\t\t\t\t\t\t\t<p>Your request for</p>\n\t\t\t\t\t\t\t<h4>{{alert.lookupValueName}}</h4>\n\t\t\t\t\t\t\t<div class=\"image-wrapper text-center\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/{{getEmergencyType(alert.lookupValueId)}}-e-icon.svg\" width=\"70\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<h5>has been cancelled. Thanks for contacting us</h5>\n\n\t\t\t\t\t\t\t<div class=\"btn-wrapper\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn d-block tc-white mb-3 {{getEmergencyType(alert.lookupValueId)}}\" (click)=\"closeAlertModal()\">Ok</a>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/user/alert-security/alert-security-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/user/alert-security/alert-security-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: AlertSecurityRoutingModule */

  /***/
  function srcAppUserAlertSecurityAlertSecurityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertSecurityRoutingModule", function () {
      return AlertSecurityRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_send_panic_alert_send_panic_alert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/send-panic-alert/send-panic-alert.component */
    "./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.ts");
    /* harmony import */


    var _components_security_my_history_security_my_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/security-my-history/security-my-history.component */
    "./src/app/user/alert-security/components/security-my-history/security-my-history.component.ts");
    /* harmony import */


    var _components_security_emergency_contact_numbers_security_emergency_contact_numbers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/security-emergency-contact-numbers/security-emergency-contact-numbers.component */
    "./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'send-panic-alert',
      pathMatch: 'full'
    }, {
      path: 'send-panic-alert',
      component: _components_send_panic_alert_send_panic_alert_component__WEBPACK_IMPORTED_MODULE_3__["SendPanicAlertComponent"]
    }, {
      path: 'my-history',
      component: _components_security_my_history_security_my_history_component__WEBPACK_IMPORTED_MODULE_4__["SecurityMyHistoryComponent"]
    }, {
      path: 'emergency-contacts',
      component: _components_security_emergency_contact_numbers_security_emergency_contact_numbers_component__WEBPACK_IMPORTED_MODULE_5__["SecurityEmergencyContactNumbersComponent"]
    }, {
      path: '**',
      redirectTo: 'send-panic-alert',
      pathMatch: 'full'
    }];

    var AlertSecurityRoutingModule = function AlertSecurityRoutingModule() {
      _classCallCheck(this, AlertSecurityRoutingModule);
    };

    AlertSecurityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AlertSecurityRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/alert-security/alert-security.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/user/alert-security/alert-security.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserAlertSecurityAlertSecurityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWxlcnQtc2VjdXJpdHkvYWxlcnQtc2VjdXJpdHkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/alert-security/alert-security.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/alert-security/alert-security.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AlertSecurityComponent */

  /***/
  function srcAppUserAlertSecurityAlertSecurityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertSecurityComponent", function () {
      return AlertSecurityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlertSecurityComponent =
    /*#__PURE__*/
    function () {
      function AlertSecurityComponent() {
        _classCallCheck(this, AlertSecurityComponent);
      }

      _createClass(AlertSecurityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlertSecurityComponent;
    }();

    AlertSecurityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert-security',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alert-security.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/alert-security.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alert-security.component.scss */
      "./src/app/user/alert-security/alert-security.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlertSecurityComponent);
    /***/
  },

  /***/
  "./src/app/user/alert-security/alert-security.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/alert-security/alert-security.module.ts ***!
    \**************************************************************/

  /*! exports provided: AlertSecurityModule */

  /***/
  function srcAppUserAlertSecurityAlertSecurityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertSecurityModule", function () {
      return AlertSecurityModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _alert_security_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./alert-security-routing.module */
    "./src/app/user/alert-security/alert-security-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _alert_security_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./alert-security.component */
    "./src/app/user/alert-security/alert-security.component.ts");
    /* harmony import */


    var _components_send_panic_alert_send_panic_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/send-panic-alert/send-panic-alert.component */
    "./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.ts");
    /* harmony import */


    var _components_security_my_history_security_my_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/security-my-history/security-my-history.component */
    "./src/app/user/alert-security/components/security-my-history/security-my-history.component.ts");
    /* harmony import */


    var _components_security_emergency_contact_numbers_security_emergency_contact_numbers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/security-emergency-contact-numbers/security-emergency-contact-numbers.component */
    "./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.ts");

    var AlertSecurityModule = function AlertSecurityModule() {
      _classCallCheck(this, AlertSecurityModule);
    };

    AlertSecurityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_alert_security_component__WEBPACK_IMPORTED_MODULE_5__["AlertSecurityComponent"], _components_send_panic_alert_send_panic_alert_component__WEBPACK_IMPORTED_MODULE_6__["SendPanicAlertComponent"], _components_security_my_history_security_my_history_component__WEBPACK_IMPORTED_MODULE_7__["SecurityMyHistoryComponent"], _components_security_emergency_contact_numbers_security_emergency_contact_numbers_component__WEBPACK_IMPORTED_MODULE_8__["SecurityEmergencyContactNumbersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _alert_security_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlertSecurityRoutingModule"]],
      bootstrap: [_alert_security_component__WEBPACK_IMPORTED_MODULE_5__["AlertSecurityComponent"]]
    })], AlertSecurityModule);
    /***/
  },

  /***/
  "./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.scss":
  /*!*************************************************************************************************************************************!*\
    !*** ./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.scss ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserAlertSecurityComponentsSecurityEmergencyContactNumbersSecurityEmergencyContactNumbersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWxlcnQtc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1lbWVyZ2VuY3ktY29udGFjdC1udW1iZXJzL3NlY3VyaXR5LWVtZXJnZW5jeS1jb250YWN0LW51bWJlcnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: SecurityEmergencyContactNumbersComponent */

  /***/
  function srcAppUserAlertSecurityComponentsSecurityEmergencyContactNumbersSecurityEmergencyContactNumbersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityEmergencyContactNumbersComponent", function () {
      return SecurityEmergencyContactNumbersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../.././api/services/alert.service */
    "./src/app/api/services/alert.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var SecurityEmergencyContactNumbersComponent =
    /*#__PURE__*/
    function () {
      function SecurityEmergencyContactNumbersComponent(alertService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, SecurityEmergencyContactNumbersComponent);

        this.alertService = alertService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isContactsLoaded = false;
      }

      _createClass(SecurityEmergencyContactNumbersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.alertService.getAllAlertEmergencyNumbers().subscribe(function (res) {
            _this.isContactsLoaded = true;
            _this.emergencyList = res;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return SecurityEmergencyContactNumbersComponent;
    }();

    SecurityEmergencyContactNumbersComponent.ctorParameters = function () {
      return [{
        type: _api_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    SecurityEmergencyContactNumbersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-security-emergency-contact-numbers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./security-emergency-contact-numbers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./security-emergency-contact-numbers.component.scss */
      "./src/app/user/alert-security/components/security-emergency-contact-numbers/security-emergency-contact-numbers.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], SecurityEmergencyContactNumbersComponent);
    /***/
  },

  /***/
  "./src/app/user/alert-security/components/security-my-history/security-my-history.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/user/alert-security/components/security-my-history/security-my-history.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserAlertSecurityComponentsSecurityMyHistorySecurityMyHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWxlcnQtc2VjdXJpdHkvY29tcG9uZW50cy9zZWN1cml0eS1teS1oaXN0b3J5L3NlY3VyaXR5LW15LWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/alert-security/components/security-my-history/security-my-history.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/user/alert-security/components/security-my-history/security-my-history.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: SecurityMyHistoryComponent */

  /***/
  function srcAppUserAlertSecurityComponentsSecurityMyHistorySecurityMyHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityMyHistoryComponent", function () {
      return SecurityMyHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../.././api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../.././api/services/alert.service */
    "./src/app/api/services/alert.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var SecurityMyHistoryComponent =
    /*#__PURE__*/
    function () {
      function SecurityMyHistoryComponent(apartmentService, alertService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, SecurityMyHistoryComponent);

        this.apartmentService = apartmentService;
        this.alertService = alertService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAlertsLoaded = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isMobile = false;
      }

      _createClass(SecurityMyHistoryComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "getEmergencyType",
        value: function getEmergencyType(id) {
          //medical
          if (id == 130) {
            return 'medical';
          } else if (id == 131) {
            return 'theft';
          } else if (id == 132) {
            return 'fire';
          } else if (id == 133) {
            return 'shooter';
          } else if (id == 134) {
            return 'police';
          } else {
            return 'other';
          }
        }
      }, {
        key: "getAlertName",
        value: function getAlertName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.emergencyTypeList, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getAlertStatus",
        value: function getAlertStatus(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.alertTypeList, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY, h:mm A");
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.apartmentService.getApartmentBlockUnitByUserId(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
            _this2.apartmentBlockUnitId = res[0].apartmentBlockUnitId;

            _this2.alertService.getAllApartmentBlockUnitAlertByApartmentBlockUnitId(_this2.apartmentBlockUnitId).subscribe(function (alert) {
              _this2.alertList = alert.filter(function (item) {
                return item.isActive;
              });
              _this2.totalItems = _this2.alertList.length;

              if (_this2.totalItems > _this2.itemLimit) {
                _this2.ItemEndIndex = _this2.itemLimit;
              } else {
                _this2.ItemEndIndex = _this2.totalItems;
              }

              _this2.isAlertsLoaded = true;
              console.log(_this2.alertList);
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          }); //get emergency types

          this.lookupService.getLookupValueByLookupTypeId(29).subscribe(function (res) {
            _this2.emergencyTypeList = res;
          }); //get alert status types

          this.lookupService.getLookupValueByLookupTypeId(30).subscribe(function (res) {
            _this2.alertTypeList = res;
          });
        }
      }]);

      return SecurityMyHistoryComponent;
    }();

    SecurityMyHistoryComponent.ctorParameters = function () {
      return [{
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    SecurityMyHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-security-my-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./security-my-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/security-my-history/security-my-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./security-my-history.component.scss */
      "./src/app/user/alert-security/components/security-my-history/security-my-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], SecurityMyHistoryComponent);
    /***/
  },

  /***/
  "./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserAlertSecurityComponentsSendPanicAlertSendPanicAlertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".send-panic-wrapper .message-box h4 {\n  font-size: 2rem;\n  color: #191c1e;\n  margin: 0 0 4px 0;\n}\n.send-panic-wrapper .alert-lists {\n  margin: 30px 0 0 0;\n}\n.send-panic-wrapper .alert-lists h5 {\n  font-size: 1.6rem;\n  color: #8391a1;\n}\n.send-panic-wrapper .alert-lists .alerts {\n  margin: 20px 0 0 0;\n  flex-direction: column;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body {\n  padding: 30px 20px;\n  color: #ffffff;\n  position: relative;\n  cursor: pointer;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-size: 62%;\n  opacity: 0.2;\n  -moz-opacity: 0.2;\n  -webkit-opacity: 0.2;\n  background-repeat: no-repeat;\n  background-position: right -73px;\n  left: 20%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .send-panic-wrapper .alert-lists .alerts .box .card-body:before {\n    background-size: 25%;\n    background-position: right -60px;\n    left: 0;\n  }\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body:hover:before {\n  background-size: 68%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .send-panic-wrapper .alert-lists .alerts .box .card-body:hover:before {\n    background-size: 32%;\n  }\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical {\n  background: #00bcd4;\n  background: linear-gradient(135deg, #00bcd4, #2196f3);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/medical-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical .icon {\n  margin: -1px 20px 0 0;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical .icon img {\n  width: 26px;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.theft {\n  background: #f7d061;\n  background: linear-gradient(135deg, #f7d061, #ef60a5);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.theft:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/theft-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.fire {\n  background: #FF9800;\n  background: linear-gradient(135deg, #FF9800, #E91E63);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.fire:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/fire-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.shooter {\n  background: #64a1fd;\n  background: linear-gradient(135deg, #64a1fd, #9100ff);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.shooter:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/shooter-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.police {\n  background: #61a1e1;\n  background: linear-gradient(135deg, #61a1e1, #06bf58);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.police:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/police-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.other {\n  background: #61a1e1;\n  background: linear-gradient(135deg, #61a1e1, #37e785);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body .icon, .send-panic-wrapper .alert-lists .alerts .box .card-body h4 {\n  float: left;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body .icon {\n  margin: -3px 20px 0 0;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body .icon img {\n  width: 32px;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body h4 {\n  font-size: 2rem;\n  color: #ffffff;\n}\n.send-panic-wrapper .e-card {\n  margin: 35px 0 40px 0;\n}\n.send-panic-wrapper .e-card .card-body {\n  padding: 25px 20px;\n}\n.send-panic-wrapper .e-card .card-body .icon {\n  margin: -9px 20px 0 0;\n}\n.send-panic-wrapper .e-card .card-body .icon img {\n  width: 36px;\n}\n.send-panic-wrapper .e-card .card-body h4 {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC91c2VyL2FsZXJ0LXNlY3VyaXR5L2NvbXBvbmVudHMvc2VuZC1wYW5pYy1hbGVydC9zZW5kLXBhbmljLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdXNlci9hbGVydC1zZWN1cml0eS9jb21wb25lbnRzL3NlbmQtcGFuaWMtYWxlcnQvc2VuZC1wYW5pYy1hbGVydC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUN1RUEsZUFBQTtFRHJFVSxjRWlGRDtFRmhGQyxpQkFBQTtBR05aO0FIVUM7RUFDQyxrQkFBQTtBR1JGO0FIU0U7RUM4REEsaUJBQUE7RUQ1RE8sY0VQSTtBQ0FiO0FIU0U7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0FHUEg7QUhTSTtFQUNDLGtCQUFBO0VBQ0EsY0V5Rkc7RUZ4Rkgsa0JFdEJBO0VGdUJBLGVBQUE7QUdQTDtBSFFLO0VBQ0MsV0FBQTtFQUNBLGtCRTNCRDtFRjRCQyxXQUFBO0VBQ0csWUFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtFSWxCUCxZSm1Cd0I7RUlsQnhCLGlCSmtCd0I7RUlqQnhCLG9CSmlCd0I7RUFDakIsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUlLUiwwQkpKUTtBR0ZUO0FIR1M7RUFaSjtJQWFLLG9CQUFBO0lBQ0EsZ0NBQUE7SUFDQSxPQUFBO0VHQVI7QUFDRjtBSEdNO0VBQ0Msb0JBQUE7RUlMTiwwQkpNTTtBR0NQO0FIQU87RUFIRDtJQUlFLG9CQUFBO0VHR047QUFDRjtBSEFLO0VJbUNILG1CQUFBO0VBRUEscURBQUE7QURoQ0Y7QUhITTtFQUNDLG9IQUFBO0FHS1A7QUhITTtFQUNDLHFCQUFBO0FHS1A7QUhKTztFQUNDLFdBQUE7QUdNUjtBSEZLO0VJdUJILG1CQUFBO0VBRUEscURBQUE7QURsQkY7QUhMTTtFQUNDLGtIQUFBO0FHT1A7QUhKSztFSWlCSCxtQkFBQTtFQUVBLHFEQUFBO0FEVkY7QUhQTTtFQUNDLGlIQUFBO0FHU1A7QUhOSztFSVdILG1CQUFBO0VBRUEscURBQUE7QURGRjtBSFRNO0VBQ0Msb0hBQUE7QUdXUDtBSFJLO0VJS0gsbUJBQUE7RUFFQSxxREFBQTtBRE1GO0FIWE07RUFDQyxtSEFBQTtBR2FQO0FIVks7RUlESCxtQkFBQTtFQUVBLHFEQUFBO0FEY0Y7QUhaSztFQUNDLFdBQUE7QUdjTjtBSFpLO0VBQ0MscUJBQUE7QUdjTjtBSGJNO0VBQ0MsV0FBQTtBR2VQO0FIWks7RUMxQkgsZUFBQTtFRDRCYSxjRVNQO0FDS1I7QUhSQztFQUNDLHFCQUFBO0FHVUY7QUhURTtFQUNDLGtCQUFBO0FHV0g7QUhWRztFQUNDLHFCQUFBO0FHWUo7QUhYSTtFQUNDLFdBQUE7QUdhTDtBSFZHO0VDNUNELGVBQUE7QUV5REYiLCJmaWxlIjoic3JjL2FwcC91c2VyL2FsZXJ0LXNlY3VyaXR5L2NvbXBvbmVudHMvc2VuZC1wYW5pYy1hbGVydC9zZW5kLXBhbmljLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5zZW5kLXBhbmljLXdyYXBwZXJ7XG5cblx0Lm1lc3NhZ2UtYm94IHtcblx0XHRoNCB7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXktOTAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG5cdFx0fVxuXHR9XG5cblx0LmFsZXJ0LWxpc3RzIHtcblx0XHRtYXJnaW46IDMwcHggMCAwIDA7XG5cdFx0aDUge1xuICAgICAgICBcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcbiAgICAgICAgXHRjb2xvcjogJGxpZ2h0LWJsdWU7XG5cdFx0fVxuXHRcdC5hbGVydHMge1xuXHRcdFx0bWFyZ2luOiAyMHB4IDAgMCAwO1xuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdC5ib3gge1xuXHRcdFx0XHQuY2FyZC1ib2R5IHtcblx0XHRcdFx0XHRwYWRkaW5nOiAzMHB4IDIwcHg7XG5cdFx0XHRcdFx0Y29sb3I6ICR3aGl0ZTtcblx0XHRcdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0ICAgIGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHQgICAgdG9wOiAwO1xuXHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kLXNpemU6IDYyJTtcblx0XHRcdFx0XHQgICAgQGluY2x1ZGUgb3BhY2l0eSgwLjIpO1xuXHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAtNzNweDtcblx0XHRcdFx0XHQgICAgbGVmdDogMjAlO1xuXHRcdFx0XHRcdCAgICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAwLjE1cyBlYXNlKTtcblx0XHRcdFx0XHQgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG5cdFx0XHRcdFx0ICAgIFx0YmFja2dyb3VuZC1zaXplOiAyNSU7XG5cdFx0XHRcdFx0XHQgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTYwcHg7XG5cdFx0XHRcdFx0XHQgICAgbGVmdDogMDtcblx0XHRcdFx0XHQgICAgfVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmOmhvdmVyIHtcblx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiA2OCU7XG5cdFx0XHRcdFx0XHRcdEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0XHRcdFx0XHRAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDMyJTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLm1lZGljYWwge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGUtbWVkLTAxLCAkZS1tZWQtMDIpO1xuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyN7JGltYWdlc30vbWVkaWNhbC1lLWljb24uc3ZnJykgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pY29uIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAtMXB4IDIwcHggMCAwO1xuXHRcdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAyNnB4O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYudGhlZnQge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGUtdGgtMDEsICRlLXRoLTAyKTtcblx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcjeyRpbWFnZXN9L3RoZWZ0LWUtaWNvbi5zdmcnKSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLmZpcmUge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGUtZmUtMDEsICRlLWZlLTAyKTtcblx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcjeyRpbWFnZXN9L2ZpcmUtZS1pY29uLnN2ZycpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYuc2hvb3RlciB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkZS1zaHItMDEsICRlLXNoci0wMik7XG5cdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnI3skaW1hZ2VzfS9zaG9vdGVyLWUtaWNvbi5zdmcnKSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLnBvbGljZSB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkZS1wYy0wMSwgJGUtcGMtMDIpO1xuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyN7JGltYWdlc30vcG9saWNlLWUtaWNvbi5zdmcnKSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQmLm90aGVyIHtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRlLW90LTAxLCAkZS1vdC0wMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5pY29uLCBoNCB7XG5cdFx0XHRcdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAtM3B4IDIwcHggMCAwO1xuXHRcdFx0XHRcdFx0aW1nIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMycHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGg0IHtcblx0ICAgICAgICAgICAgXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0ICAgICAgICAgICAgXHRcdGNvbG9yOiAkd2hpdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5lLWNhcmQge1xuXHRcdG1hcmdpbjogMzVweCAwIDQwcHggMDtcblx0XHQuY2FyZC1ib2R5IHtcblx0XHRcdHBhZGRpbmc6IDI1cHggMjBweDtcblx0XHRcdC5pY29uIHtcblx0XHRcdFx0bWFyZ2luOiAtOXB4IDIwcHggMCAwO1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAzNnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRoNCB7XG5cdCAgICBcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0pO1xuXHRcdFx0fVxuXHRcdH1cdFxuXHR9XG5cdFxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCIuc2VuZC1wYW5pYy13cmFwcGVyIC5tZXNzYWdlLWJveCBoNCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICMxOTFjMWU7XG4gIG1hcmdpbjogMCAwIDRweCAwO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMge1xuICBtYXJnaW46IDMwcHggMCAwIDA7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyBoNSB7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMge1xuICBtYXJnaW46IDIwcHggMCAwIDA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDMwcHggMjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtc2l6ZTogNjIlO1xuICBvcGFjaXR5OiAwLjI7XG4gIC1tb3otb3BhY2l0eTogMC4yO1xuICAtd2Via2l0LW9wYWNpdHk6IDAuMjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTczcHg7XG4gIGxlZnQ6IDIwJTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHk6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1JTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAtNjBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keTpob3ZlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLXNpemU6IDY4JTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcbiAgLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHk6aG92ZXI6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMyJTtcbiAgfVxufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkubWVkaWNhbCB7XG4gIGJhY2tncm91bmQ6ICMwMGJjZDQ7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oMTM1ZGVnKSwgIzAwYmNkNCwgIzIxOTZmMyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwMGJjZDQsICMyMTk2ZjMpO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkubWVkaWNhbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9tZWRpY2FsLWUtaWNvbi5zdmdcIikgIWltcG9ydGFudDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5Lm1lZGljYWwgLmljb24ge1xuICBtYXJnaW46IC0xcHggMjBweCAwIDA7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5tZWRpY2FsIC5pY29uIGltZyB7XG4gIHdpZHRoOiAyNnB4O1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkudGhlZnQge1xuICBiYWNrZ3JvdW5kOiAjZjdkMDYxO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKDEzNWRlZyksICNmN2QwNjEsICNlZjYwYTUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjdkMDYxLCAjZWY2MGE1KTtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5LnRoZWZ0OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3RoZWZ0LWUtaWNvbi5zdmdcIikgIWltcG9ydGFudDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5LmZpcmUge1xuICBiYWNrZ3JvdW5kOiAjRkY5ODAwO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKDEzNWRlZyksICNGRjk4MDAsICNFOTFFNjMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRkY5ODAwLCAjRTkxRTYzKTtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5LmZpcmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvZmlyZS1lLWljb24uc3ZnXCIpICFpbXBvcnRhbnQ7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5zaG9vdGVyIHtcbiAgYmFja2dyb3VuZDogIzY0YTFmZDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigxMzVkZWcpLCAjNjRhMWZkLCAjOTEwMGZmKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY0YTFmZCwgIzkxMDBmZik7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5zaG9vdGVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3Nob290ZXItZS1pY29uLnN2Z1wiKSAhaW1wb3J0YW50O1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkucG9saWNlIHtcbiAgYmFja2dyb3VuZDogIzYxYTFlMTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigxMzVkZWcpLCAjNjFhMWUxLCAjMDZiZjU4KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYxYTFlMSwgIzA2YmY1OCk7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5wb2xpY2U6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvcG9saWNlLWUtaWNvbi5zdmdcIikgIWltcG9ydGFudDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5Lm90aGVyIHtcbiAgYmFja2dyb3VuZDogIzYxYTFlMTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigxMzVkZWcpLCAjNjFhMWUxLCAjMzdlNzg1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzYxYTFlMSwgIzM3ZTc4NSk7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keSAuaWNvbiwgLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkgaDQge1xuICBmbG9hdDogbGVmdDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5IC5pY29uIHtcbiAgbWFyZ2luOiAtM3B4IDIwcHggMCAwO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkgLmljb24gaW1nIHtcbiAgd2lkdGg6IDMycHg7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keSBoNCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5lLWNhcmQge1xuICBtYXJnaW46IDM1cHggMCA0MHB4IDA7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5lLWNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDI1cHggMjBweDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmUtY2FyZCAuY2FyZC1ib2R5IC5pY29uIHtcbiAgbWFyZ2luOiAtOXB4IDIwcHggMCAwO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuZS1jYXJkIC5jYXJkLWJvZHkgLmljb24gaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5lLWNhcmQgLmNhcmQtYm9keSBoNCB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: SendPanicAlertComponent */

  /***/
  function srcAppUserAlertSecurityComponentsSendPanicAlertSendPanicAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SendPanicAlertComponent", function () {
      return SendPanicAlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../.././api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../.././api/services/alert.service */
    "./src/app/api/services/alert.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var SendPanicAlertComponent =
    /*#__PURE__*/
    function () {
      function SendPanicAlertComponent(injector, dialog, router, alertService, userService, apartmentService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, SendPanicAlertComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.alertService = alertService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isEmergenciesLoaded = false;
        this.rangeValue = 0;
        this.maxRange = 10;
        this.isRangeDone = false;
        this.isRequestSuccess = false;
        this.isRequestDeleted = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
      }

      _createClass(SendPanicAlertComponent, [{
        key: "getEmergencyType",
        value: function getEmergencyType(id) {
          //medical
          if (id == 130) {
            return 'medical';
          } else if (id == 131) {
            return 'theft';
          } else if (id == 132) {
            return 'fire';
          } else if (id == 133) {
            return 'shooter';
          } else if (id == 134) {
            return 'police';
          } else {
            return 'other';
          }
        }
      }, {
        key: "getRangeValue",
        value: function getRangeValue(alert) {
          var _this3 = this;

          if (this.rangeValue == '100') {
            this.isRangeDone = true;
            var details = {
              "apartmentBlockUnitId": this.apartmentBlockUnitId,
              "receivedDate": "2019-12-06T13:45:09.296Z",
              "alertTypeId": alert.lookupValueId,
              "location": "string",
              "gpslocation": this.gpsLocation,
              "assignedTo": 0,
              "alertStatusId": 135,
              "notes": "",
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-12-06T13:45:09.296Z",
              "updatedBy": 0,
              "updatedOn": "2019-12-06T13:45:09.296Z"
            };
            this.alertService.addApartmentBlockUnitAlert(details).subscribe(function (res) {
              if (res.message) {
                _this3.isRangeDone = false;
                _this3.isRequestSuccess = true;
                _this3.alertId = res.message;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }
      }, {
        key: "closeAlertModal",
        value: function closeAlertModal() {
          var _this4 = this;

          this.confirmDialogRef.close();
          this.confirmDialogRef.afterClosed().subscribe(function (data) {
            _this4.router.navigateByUrl('user/alert-security/my-history');
          });
        }
      }, {
        key: "showConfirmEmergency",
        value: function showConfirmEmergency(item, type) {
          var _this5 = this;

          var alert = item;
          alert.type = type;
          this.confirmDialogRef = this.dialog.open(this.confirmEmergencyRef, {
            panelClass: 'material',
            disableClose: true,
            data: alert
          });
          this.confirmDialogRef.afterClosed().subscribe(function (data) {
            _this5.isRangeDone = false;
          });
        }
      }, {
        key: "cancelEmergency",
        value: function cancelEmergency() {
          var _this6 = this;

          this.isRangeDone = true;
          var params = {
            apartmentBlockUnitAlertId: this.alertId,
            deleteBy: parseInt(this.cookieService.get('userId'))
          };
          this.alertService.deleteApartmentBlockUnitAlert(params).subscribe(function (res) {
            if (res.message) {
              _this6.isRangeDone = false;
              _this6.isRequestDeleted = true;
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "setCurrentLocation",
        value: function setCurrentLocation() {
          var _this7 = this;

          if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this7.gpsLocation = position.coords.latitude + ',' + position.coords.longitude;
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          //get emergency services
          this.lookupService.getLookupValueByLookupTypeId(29).subscribe(function (res) {
            _this8.isEmergenciesLoaded = true;
            _this8.emergencyList = res;
          });
          this.userService.getUserById(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
            _this8.userName = res[0].firstName;

            _this8.apartmentService.getApartmentBlockUnitByUserId(parseInt(_this8.cookieService.get('userId'))).subscribe(function (res) {
              _this8.apartmentBlockUnitId = res[0].apartmentBlockUnitId;
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
          this.setCurrentLocation();
        }
      }]);

      return SendPanicAlertComponent;
    }();

    SendPanicAlertComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _api_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("confirmEmergencyRef", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], SendPanicAlertComponent.prototype, "confirmEmergencyRef", void 0);
    SendPanicAlertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-send-panic-alert',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./send-panic-alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./send-panic-alert.component.scss */
      "./src/app/user/alert-security/components/send-panic-alert/send-panic-alert.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _api_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_8__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], SendPanicAlertComponent);
    /***/
  }
}]);
//# sourceMappingURL=alert-security-alert-security-module-es5.js.map