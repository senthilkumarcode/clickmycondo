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


    var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Alert */
    "./src/app/api/controllers/Alert.ts");

    var SecurityEmergencyContactNumbersComponent =
    /*#__PURE__*/
    function () {
      function SecurityEmergencyContactNumbersComponent(alertService) {
        _classCallCheck(this, SecurityEmergencyContactNumbersComponent);

        this.alertService = alertService;
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
        type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])], SecurityEmergencyContactNumbersComponent);
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


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Alert */
    "./src/app/api/controllers/Alert.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
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

          var params = {
            userId: parseInt(this.cookieService.get('userId'))
          };
          this.apartmentService.getApartmentBlockUnitByUserId(params).subscribe(function (res) {
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
          });
          var emergencyListParams = {
            LookupTypeId: 29
          }; //get emergency types

          this.lookupService.getLookupValueByLookupTypeId(emergencyListParams).subscribe(function (res) {
            _this2.emergencyTypeList = res;
          });
          var alertListParams = {
            LookupTypeId: 30
          }; //get alert status types

          this.lookupService.getLookupValueByLookupTypeId(alertListParams).subscribe(function (res) {
            _this2.alertTypeList = res;
          });
        }
      }]);

      return SecurityMyHistoryComponent;
    }();

    SecurityMyHistoryComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__["AlertService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], SecurityMyHistoryComponent);
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


    __webpack_exports__["default"] = ".send-panic-wrapper .message-box h4 {\n  font-size: 2rem;\n  color: #191c1e;\n  margin: 0 0 4px 0;\n}\n.send-panic-wrapper .alert-lists {\n  margin: 30px 0 0 0;\n}\n.send-panic-wrapper .alert-lists h5 {\n  font-size: 1.6rem;\n  color: #8391a1;\n}\n.send-panic-wrapper .alert-lists .alerts {\n  margin: 20px 0 0 0;\n  flex-direction: column;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body {\n  padding: 30px 20px;\n  color: #ffffff;\n  position: relative;\n  cursor: pointer;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-size: 62%;\n  opacity: 0.2;\n  -moz-opacity: 0.2;\n  -webkit-opacity: 0.2;\n  background-repeat: no-repeat;\n  background-position: right -73px;\n  left: 20%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .send-panic-wrapper .alert-lists .alerts .box .card-body:before {\n    background-size: 25%;\n    background-position: right -60px;\n    left: 0;\n  }\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body:hover:before {\n  background-size: 68%;\n  transition: all 0.15s ease;\n}\n@media (min-width: 991px) {\n  .send-panic-wrapper .alert-lists .alerts .box .card-body:hover:before {\n    background-size: 32%;\n  }\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical {\n  background: #00bcd4;\n  background: linear-gradient(135deg, #00bcd4, #2196f3);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/medical-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical .icon {\n  margin: -1px 20px 0 0;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.medical .icon img {\n  width: 26px;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.theft {\n  background: #f7d061;\n  background: linear-gradient(135deg, #f7d061, #ef60a5);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.theft:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/theft-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.fire {\n  background: #FF9800;\n  background: linear-gradient(135deg, #FF9800, #E91E63);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.fire:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/fire-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.shooter {\n  background: #64a1fd;\n  background: linear-gradient(135deg, #64a1fd, #9100ff);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.shooter:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/shooter-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.police {\n  background: #61a1e1;\n  background: linear-gradient(135deg, #61a1e1, #06bf58);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.police:before {\n  background-image: url('https://senthilkumarcode.github.io/clickmycondo/assets/images/police-e-icon.svg') !important;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body.other {\n  background: #61a1e1;\n  background: linear-gradient(135deg, #61a1e1, #37e785);\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body .icon, .send-panic-wrapper .alert-lists .alerts .box .card-body h4 {\n  float: left;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body .icon {\n  margin: -3px 20px 0 0;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body .icon img {\n  width: 32px;\n}\n.send-panic-wrapper .alert-lists .alerts .box .card-body h4 {\n  font-size: 2rem;\n  color: #ffffff;\n}\n.send-panic-wrapper .e-card {\n  margin: 35px 0 40px 0;\n}\n.send-panic-wrapper .e-card .card-body {\n  padding: 25px 20px;\n}\n.send-panic-wrapper .e-card .card-body .icon {\n  margin: -9px 20px 0 0;\n}\n.send-panic-wrapper .e-card .card-body .icon img {\n  width: 36px;\n}\n.send-panic-wrapper .e-card .card-body h4 {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC91c2VyL2FsZXJ0LXNlY3VyaXR5L2NvbXBvbmVudHMvc2VuZC1wYW5pYy1hbGVydC9zZW5kLXBhbmljLWFsZXJ0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdXNlci9hbGVydC1zZWN1cml0eS9jb21wb25lbnRzL3NlbmQtcGFuaWMtYWxlcnQvc2VuZC1wYW5pYy1hbGVydC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUN1RUEsZUFBQTtFRHJFVSxjRW9GRDtFRm5GQyxpQkFBQTtBR05aO0FIVUM7RUFDQyxrQkFBQTtBR1JGO0FIU0U7RUM4REEsaUJBQUE7RUQ1RE8sY0VQSTtBQ0FiO0FIU0U7RUFDQyxrQkFBQTtFQUNBLHNCQUFBO0FHUEg7QUhTSTtFQUNDLGtCQUFBO0VBQ0EsY0U0Rkc7RUYzRkgsa0JFdEJBO0VGdUJBLGVBQUE7QUdQTDtBSFFLO0VBQ0MsV0FBQTtFQUNBLGtCRTNCRDtFRjRCQyxXQUFBO0VBQ0csWUFBQTtFQUNBLE1BQUE7RUFDQSxvQkFBQTtFSWxCUCxZSm1Cd0I7RUlsQnhCLGlCSmtCd0I7RUlqQnhCLG9CSmlCd0I7RUFDakIsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUlJUiwwQkpIUTtBR0ZUO0FIR1M7RUFaSjtJQWFLLG9CQUFBO0lBQ0EsZ0NBQUE7SUFDQSxPQUFBO0VHQVI7QUFDRjtBSEdNO0VBQ0Msb0JBQUE7RUlOTiwwQkpPTTtBR0NQO0FIQU87RUFIRDtJQUlFLG9CQUFBO0VHR047QUFDRjtBSEFLO0VJMENILG1CQUFBO0VBRUEscURBQUE7QUR2Q0Y7QUhITTtFQUNDLG9IQUFBO0FHS1A7QUhITTtFQUNDLHFCQUFBO0FHS1A7QUhKTztFQUNDLFdBQUE7QUdNUjtBSEZLO0VJOEJILG1CQUFBO0VBRUEscURBQUE7QUR6QkY7QUhMTTtFQUNDLGtIQUFBO0FHT1A7QUhKSztFSXdCSCxtQkFBQTtFQUVBLHFEQUFBO0FEakJGO0FIUE07RUFDQyxpSEFBQTtBR1NQO0FITks7RUlrQkgsbUJBQUE7RUFFQSxxREFBQTtBRFRGO0FIVE07RUFDQyxvSEFBQTtBR1dQO0FIUks7RUlZSCxtQkFBQTtFQUVBLHFEQUFBO0FEREY7QUhYTTtFQUNDLG1IQUFBO0FHYVA7QUhWSztFSU1ILG1CQUFBO0VBRUEscURBQUE7QURPRjtBSFpLO0VBQ0MsV0FBQTtBR2NOO0FIWks7RUFDQyxxQkFBQTtBR2NOO0FIYk07RUFDQyxXQUFBO0FHZVA7QUhaSztFQzFCSCxlQUFBO0VENEJhLGNFWVA7QUNFUjtBSFJDO0VBQ0MscUJBQUE7QUdVRjtBSFRFO0VBQ0Msa0JBQUE7QUdXSDtBSFZHO0VBQ0MscUJBQUE7QUdZSjtBSFhJO0VBQ0MsV0FBQTtBR2FMO0FIVkc7RUM1Q0QsZUFBQTtBRXlERiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvYWxlcnQtc2VjdXJpdHkvY29tcG9uZW50cy9zZW5kLXBhbmljLWFsZXJ0L3NlbmQtcGFuaWMtYWxlcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLnNlbmQtcGFuaWMtd3JhcHBlcntcblxuXHQubWVzc2FnZS1ib3gge1xuXHRcdGg0IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JleS05MDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCA0cHggMDtcblx0XHR9XG5cdH1cblxuXHQuYWxlcnQtbGlzdHMge1xuXHRcdG1hcmdpbjogMzBweCAwIDAgMDtcblx0XHRoNSB7XG4gICAgICAgIFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuICAgICAgICBcdGNvbG9yOiAkbGlnaHQtYmx1ZTtcblx0XHR9XG5cdFx0LmFsZXJ0cyB7XG5cdFx0XHRtYXJnaW46IDIwcHggMCAwIDA7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0LmJveCB7XG5cdFx0XHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0XHRcdHBhZGRpbmc6IDMwcHggMjBweDtcblx0XHRcdFx0XHRjb2xvcjogJHdoaXRlO1xuXHRcdFx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHQgICAgaGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRcdCAgICB0b3A6IDA7XG5cdFx0XHRcdFx0ICAgIGJhY2tncm91bmQtc2l6ZTogNjIlO1xuXHRcdFx0XHRcdCAgICBAaW5jbHVkZSBvcGFjaXR5KDAuMik7XG5cdFx0XHRcdFx0ICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0XHRcdFx0ICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC03M3B4O1xuXHRcdFx0XHRcdCAgICBsZWZ0OiAyMCU7XG5cdFx0XHRcdFx0ICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuMTVzIGVhc2UpO1xuXHRcdFx0XHRcdCAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkxcHgpIHtcblx0XHRcdFx0XHQgICAgXHRiYWNrZ3JvdW5kLXNpemU6IDI1JTtcblx0XHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAtNjBweDtcblx0XHRcdFx0XHRcdCAgICBsZWZ0OiAwO1xuXHRcdFx0XHRcdCAgICB9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDY4JTtcblx0XHRcdFx0XHRcdFx0QGluY2x1ZGUgdHJhbnNpdGlvbihhbGwgMC4xNXMgZWFzZSk7XG5cdFx0XHRcdFx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogMzIlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYubWVkaWNhbCB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkZS1tZWQtMDEsICRlLW1lZC0wMik7XG5cdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnI3skaW1hZ2VzfS9tZWRpY2FsLWUtaWNvbi5zdmcnKSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IC0xcHggMjBweCAwIDA7XG5cdFx0XHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDI2cHg7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji50aGVmdCB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkZS10aC0wMSwgJGUtdGgtMDIpO1xuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyN7JGltYWdlc30vdGhlZnQtZS1pY29uLnN2ZycpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYuZmlyZSB7XG5cdFx0XHRcdFx0XHRAaW5jbHVkZSBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkZS1mZS0wMSwgJGUtZmUtMDIpO1xuXHRcdFx0XHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyN7JGltYWdlc30vZmlyZS1lLWljb24uc3ZnJykgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ji5zaG9vdGVyIHtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRlLXNoci0wMSwgJGUtc2hyLTAyKTtcblx0XHRcdFx0XHRcdCY6YmVmb3JlIHtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcjeyRpbWFnZXN9L3Nob290ZXItZS1pY29uLnN2ZycpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYucG9saWNlIHtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRlLXBjLTAxLCAkZS1wYy0wMik7XG5cdFx0XHRcdFx0XHQmOmJlZm9yZSB7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnI3skaW1hZ2VzfS9wb2xpY2UtZS1pY29uLnN2ZycpICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdCYub3RoZXIge1xuXHRcdFx0XHRcdFx0QGluY2x1ZGUgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGUtb3QtMDEsICRlLW90LTAyKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lmljb24sIGg0IHtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0XHRtYXJnaW46IC0zcHggMjBweCAwIDA7XG5cdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzJweDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aDQge1xuXHQgICAgICAgICAgICBcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0pO1xuXHQgICAgICAgICAgICBcdFx0Y29sb3I6ICR3aGl0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmUtY2FyZCB7XG5cdFx0bWFyZ2luOiAzNXB4IDAgNDBweCAwO1xuXHRcdC5jYXJkLWJvZHkge1xuXHRcdFx0cGFkZGluZzogMjVweCAyMHB4O1xuXHRcdFx0Lmljb24ge1xuXHRcdFx0XHRtYXJnaW46IC05cHggMjBweCAwIDA7XG5cdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDM2cHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGg0IHtcblx0ICAgIFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bSk7XG5cdFx0XHR9XG5cdFx0fVx0XG5cdH1cblx0XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiLnNlbmQtcGFuaWMtd3JhcHBlciAubWVzc2FnZS1ib3ggaDQge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjMTkxYzFlO1xuICBtYXJnaW46IDAgMCA0cHggMDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIHtcbiAgbWFyZ2luOiAzMHB4IDAgMCAwO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgaDUge1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIHtcbiAgbWFyZ2luOiAyMHB4IDAgMCAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYyJTtcbiAgb3BhY2l0eTogMC4yO1xuICAtbW96LW9wYWNpdHk6IDAuMjtcbiAgLXdlYmtpdC1vcGFjaXR5OiAwLjI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC03M3B4O1xuICBsZWZ0OiAyMCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyNSU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgLTYwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHk6aG92ZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1zaXplOiA2OCU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MXB4KSB7XG4gIC5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5OmhvdmVyOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiAzMiU7XG4gIH1cbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5Lm1lZGljYWwge1xuICBiYWNrZ3JvdW5kOiAjMDBiY2Q0O1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKDEzNWRlZyksICMwMGJjZDQsICMyMTk2ZjMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDBiY2Q0LCAjMjE5NmYzKTtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5Lm1lZGljYWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbWVkaWNhbC1lLWljb24uc3ZnXCIpICFpbXBvcnRhbnQ7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5tZWRpY2FsIC5pY29uIHtcbiAgbWFyZ2luOiAtMXB4IDIwcHggMCAwO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkubWVkaWNhbCAuaWNvbiBpbWcge1xuICB3aWR0aDogMjZweDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5LnRoZWZ0IHtcbiAgYmFja2dyb3VuZDogI2Y3ZDA2MTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigxMzVkZWcpLCAjZjdkMDYxLCAjZWY2MGE1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y3ZDA2MSwgI2VmNjBhNSk7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS50aGVmdDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy90aGVmdC1lLWljb24uc3ZnXCIpICFpbXBvcnRhbnQ7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5maXJlIHtcbiAgYmFja2dyb3VuZDogI0ZGOTgwMDtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigxMzVkZWcpLCAjRkY5ODAwLCAjRTkxRTYzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0ZGOTgwMCwgI0U5MUU2Myk7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5maXJlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2ZpcmUtZS1pY29uLnN2Z1wiKSAhaW1wb3J0YW50O1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkuc2hvb3RlciB7XG4gIGJhY2tncm91bmQ6ICM2NGExZmQ7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oMTM1ZGVnKSwgIzY0YTFmZCwgIzkxMDBmZik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NGExZmQsICM5MTAwZmYpO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkuc2hvb3RlcjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9zaG9vdGVyLWUtaWNvbi5zdmdcIikgIWltcG9ydGFudDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5LnBvbGljZSB7XG4gIGJhY2tncm91bmQ6ICM2MWExZTE7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oMTM1ZGVnKSwgIzYxYTFlMSwgIzA2YmY1OCk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MWExZTEsICMwNmJmNTgpO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkucG9saWNlOmJlZm9yZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL3BvbGljZS1lLWljb24uc3ZnXCIpICFpbXBvcnRhbnQ7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keS5vdGhlciB7XG4gIGJhY2tncm91bmQ6ICM2MWExZTE7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oMTM1ZGVnKSwgIzYxYTFlMSwgIzM3ZTc4NSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MWExZTEsICMzN2U3ODUpO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkgLmljb24sIC5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5IGg0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5hbGVydC1saXN0cyAuYWxlcnRzIC5ib3ggLmNhcmQtYm9keSAuaWNvbiB7XG4gIG1hcmdpbjogLTNweCAyMHB4IDAgMDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmFsZXJ0LWxpc3RzIC5hbGVydHMgLmJveCAuY2FyZC1ib2R5IC5pY29uIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuYWxlcnQtbGlzdHMgLmFsZXJ0cyAuYm94IC5jYXJkLWJvZHkgaDQge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuZS1jYXJkIHtcbiAgbWFyZ2luOiAzNXB4IDAgNDBweCAwO1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuZS1jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAyNXB4IDIwcHg7XG59XG4uc2VuZC1wYW5pYy13cmFwcGVyIC5lLWNhcmQgLmNhcmQtYm9keSAuaWNvbiB7XG4gIG1hcmdpbjogLTlweCAyMHB4IDAgMDtcbn1cbi5zZW5kLXBhbmljLXdyYXBwZXIgLmUtY2FyZCAuY2FyZC1ib2R5IC5pY29uIGltZyB7XG4gIHdpZHRoOiAzNnB4O1xufVxuLnNlbmQtcGFuaWMtd3JhcHBlciAuZS1jYXJkIC5jYXJkLWJvZHkgaDQge1xuICBmb250LXNpemU6IDJyZW07XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIl19 */";
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


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Alert */
    "./src/app/api/controllers/Alert.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
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
            var params = {
              apartmentBlockUnitAlert: details
            };
            this.alertService.addApartmentBlockUnitAlert(params).subscribe(function (res) {
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

          var emergencyListParams = {
            LookupTypeId: 29
          }; //get emergency services

          this.lookupService.getLookupValueByLookupTypeId(emergencyListParams).subscribe(function (res) {
            _this8.isEmergenciesLoaded = true;
            _this8.emergencyList = res;
          });
          var userParams = {
            userid: parseInt(this.cookieService.get('userId'))
          };
          this.userService.getUserById(userParams).subscribe(function (res) {
            _this8.userName = res[0].firstName;
            var apartmentBlockUnitParams = {
              userId: parseInt(_this8.cookieService.get('userId'))
            };

            _this8.apartmentService.getApartmentBlockUnitByUserId(apartmentBlockUnitParams).subscribe(function (res) {
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
        type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_6__["AlertService"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], SendPanicAlertComponent);
    /***/
  }
}]);
//# sourceMappingURL=alert-security-alert-security-module-es5.js.map