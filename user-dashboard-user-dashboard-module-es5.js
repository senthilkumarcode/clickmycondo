function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-dashboard-user-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserDashboardComponentsUserdashEventsCompUserdashEventsCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-events-wrapper\">\n\t\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-sm-6\">\n\t\t\t\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/calendar-blue-icon.svg\" width=\"20\" />My Meetings</h5>\n\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('date')\">Date <span [ngClass]=\"getFieldOrderBy('date')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('time')\">Time <span [ngClass]=\"getFieldOrderBy('time')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subject')\">Subject <span [ngClass]=\"getFieldOrderBy('subject')\"></span></th>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t    </thead>\n\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t    <tr *ngFor=\"let event of meetingsEventData\">\n\t\t\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{event.date}}</a></td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.time}}</td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.subject}}</td>\n\t\t\t\t\t    </tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"col-sm-6\">\n\t\t\t\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/booking-blue-icon.svg\" width=\"24\" />My Facility Bookings</h5>\n\t\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t    <tr>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('date')\">Date <span [ngClass]=\"getFieldOrderBy('date')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('time')\">Time <span [ngClass]=\"getFieldOrderBy('time')\"></span></th>\n\t\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subject')\">Subject <span [ngClass]=\"getFieldOrderBy('subject')\"></span></th>\n\t\t\t\t\t\t    </tr>\n\t\t\t\t\t    </thead>\n\t\t\t\t\t    <tbody>\n\t\t\t\t\t\t    <tr *ngFor=\"let event of facilityEventData\">\n\t\t\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{event.date}}</a></td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.time}}</td>\n\t\t\t\t\t\t      <td class=\"grey\">{{event.subject}}</td>\n\t\t\t\t\t    </tbody>\n\t\t\t\t\t</table>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserDashboardComponentsUserdashMainCompUserdashMainCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"userdash-main-comp-wrapper\">\n\t\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body color-box user s-blue\">\n\t\t\t\t\t<h4>13.4K</h4>\n\t\t\t\t\t<h5>Pending Payments</h5>\n\t\t\t\t\t<p>&nbsp;</p>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/credit-white-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-box text-center\">Pay</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body color-box user l-red\">\n\t\t\t\t\t<h4>12 <span>(OPEN)</span></h4>\n\t\t\t\t\t<h5>My Tickets</h5>\n\t\t\t\t\t<p>from <span>last 7 days</span></p>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/booking-white-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-box text-center\">Create Ticket</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-4\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body color-box user green\">\n\t\t\t\t\t<h4>123</h4>\n\t\t\t\t\t<h5>My Visitors</h5>\n\t\t\t\t\t<p>1 Expected visitor from <span>last 7 days</span></p>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/view-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn-box text-center\">View Visitors</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserDashboardComponentsUserdashMessagesCompUserdashMessagesCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"userdash-messages-comp-wrapper\">\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body messages\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/alarm-blue-icon.svg\" width=\"20\" />Emergency Alert Messages</h5>\n\t\t\t\t\t<ng-container *ngFor=\"let message of emergencyMessagesData\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<span class=\"grey\">{{message.date}}</span>\n\t\t\t\t\t\t\t<span>{{message.text}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"card chart-card\">\n\t\t\t\t<div class=\"card-body chart-body messages\">\n\t\t\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/alarm-blue-icon.svg\" width=\"20\" />Notice Board Messages</h5>\n\t\t\t\t\t<ng-container *ngFor=\"let message of noticeMessagesData\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<span class=\"grey\">{{message.date}}</span>\n\t\t\t\t\t\t\t<span>{{message.text}}</span>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\t";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserDashboardUserDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-dashboard-wrapper\">\n\n\t\t<div class=\"message-box mb-4\">\n\t\t\t<h4>Hi <span class=\"text-capitialize\">{{userName}}</span></h4>\n\t\t\t<!-- <h5>We are here to help you.</h5> -->\n\t\t</div>\n\n\t\t<app-userdash-main-comp></app-userdash-main-comp>\n\t\t<app-userdash-messages-comp></app-userdash-messages-comp>\n\t\t<app-userdash-events-comp></app-userdash-events-comp>\n\n</div>";
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserDashboardComponentsUserdashEventsCompUserdashEventsCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvY29tcG9uZW50cy91c2VyZGFzaC1ldmVudHMtY29tcC91c2VyZGFzaC1ldmVudHMtY29tcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: UserdashEventsCompComponent */

  /***/
  function srcAppUserUserDashboardComponentsUserdashEventsCompUserdashEventsCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdashEventsCompComponent", function () {
      return UserdashEventsCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserdashEventsCompComponent =
    /*#__PURE__*/
    function () {
      function UserdashEventsCompComponent() {
        _classCallCheck(this, UserdashEventsCompComponent);

        this.unitFieldType = "unitno";
        this.unitOrder = true;
      }

      _createClass(UserdashEventsCompComponent, [{
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.meetingsEventData = [{
            'date': '24/11/2019',
            'time': '5:00-6:00 PM',
            'subject': 'Annual General Meeting'
          }, {
            'date': '23/12/2019',
            'time': '4:00-6:00 PM',
            'subject': 'Annual General Meeting'
          }];
          this.facilityEventData = [{
            'date': '24/11/2019',
            'time': '5:00-6:00 PM',
            'subject': 'Party Hall'
          }, {
            'date': '23/12/2019',
            'time': '4:00-6:00 PM',
            'subject': 'Tennis Court'
          }];
        }
      }]);

      return UserdashEventsCompComponent;
    }();

    UserdashEventsCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userdash-events-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userdash-events-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./userdash-events-comp.component.scss */
      "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserdashEventsCompComponent);
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.scss":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.scss ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserDashboardComponentsUserdashMainCompUserdashMainCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvY29tcG9uZW50cy91c2VyZGFzaC1tYWluLWNvbXAvdXNlcmRhc2gtbWFpbi1jb21wLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: UserdashMainCompComponent */

  /***/
  function srcAppUserUserDashboardComponentsUserdashMainCompUserdashMainCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdashMainCompComponent", function () {
      return UserdashMainCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserdashMainCompComponent =
    /*#__PURE__*/
    function () {
      function UserdashMainCompComponent() {
        _classCallCheck(this, UserdashMainCompComponent);
      }

      _createClass(UserdashMainCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserdashMainCompComponent;
    }();

    UserdashMainCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userdash-main-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userdash-main-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./userdash-main-comp.component.scss */
      "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserdashMainCompComponent);
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserDashboardComponentsUserdashMessagesCompUserdashMessagesCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1kYXNoYm9hcmQvY29tcG9uZW50cy91c2VyZGFzaC1tZXNzYWdlcy1jb21wL3VzZXJkYXNoLW1lc3NhZ2VzLWNvbXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: UserdashMessagesCompComponent */

  /***/
  function srcAppUserUserDashboardComponentsUserdashMessagesCompUserdashMessagesCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdashMessagesCompComponent", function () {
      return UserdashMessagesCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserdashMessagesCompComponent =
    /*#__PURE__*/
    function () {
      function UserdashMessagesCompComponent() {
        _classCallCheck(this, UserdashMessagesCompComponent);
      }

      _createClass(UserdashMessagesCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.emergencyMessagesData = [{
            'date': '01/12/2019',
            'text': 'Flood alert in your area'
          }, {
            'date': '23/11/2019',
            'text': 'Water leakage in Tower-B'
          }];
          this.noticeMessagesData = [{
            'date': '25/11/2019',
            'text': 'Playing kids movie this friday'
          }, {
            'date': '27/11/2019',
            'text': 'Swimming pool maintenance'
          }];
        }
      }]);

      return UserdashMessagesCompComponent;
    }();

    UserdashMessagesCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-userdash-messages-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./userdash-messages-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./userdash-messages-comp.component.scss */
      "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserdashMessagesCompComponent);
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/user-dashboard-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/user/user-dashboard/user-dashboard-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: UserDashboardRoutingModule */

  /***/
  function srcAppUserUserDashboardUserDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardRoutingModule", function () {
      return UserDashboardRoutingModule;
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


    var _user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-dashboard.component */
    "./src/app/user/user-dashboard/user-dashboard.component.ts");

    var routes = [{
      path: '',
      component: _user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"]
    }, {
      path: 'dashboard',
      component: _user_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["UserDashboardComponent"]
    }];

    var UserDashboardRoutingModule = function UserDashboardRoutingModule() {
      _classCallCheck(this, UserDashboardRoutingModule);
    };

    UserDashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserDashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/user-dashboard.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/user/user-dashboard/user-dashboard.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserDashboardUserDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-dashboard-wrapper .message-box h4 {\n  font-size: 2rem;\n  color: #191c1e;\n  margin: 0 0 4px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC91c2VyL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvdXNlci91c2VyLWRhc2hib2FyZC91c2VyLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQ3dFQSxlQUFBO0VEdEVJLGNFa0ZLO0VGakZMLGlCQUFBO0FHTE4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXItZGFzaGJvYXJkL3VzZXItZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi51c2VyLWRhc2hib2FyZC13cmFwcGVyIHtcblx0Lm1lc3NhZ2UtYm94IHtcblx0XHRoNCB7XG5cdFx0ICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0XHQgICAgY29sb3I6ICRncmV5LTkwMDtcblx0XHQgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG5cdFx0fVxuXHR9XG59XG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiLnVzZXItZGFzaGJvYXJkLXdyYXBwZXIgLm1lc3NhZ2UtYm94IGg0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzE5MWMxZTtcbiAgbWFyZ2luOiAwIDAgNHB4IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/user-dashboard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/user/user-dashboard/user-dashboard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: UserDashboardComponent */

  /***/
  function srcAppUserUserDashboardUserDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function () {
      return UserDashboardComponent;
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var UserDashboardComponent =
    /*#__PURE__*/
    function () {
      function UserDashboardComponent(userService, cookieService) {
        _classCallCheck(this, UserDashboardComponent);

        this.userService = userService;
        this.cookieService = cookieService;
        this.userName = "";
      }

      _createClass(UserDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userService.getUserById(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
            _this.userName = res[0].firstName;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return UserDashboardComponent;
    }();

    UserDashboardComponent.ctorParameters = function () {
      return [{
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    UserDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-dashboard/user-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-dashboard.component.scss */
      "./src/app/user/user-dashboard/user-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], UserDashboardComponent);
    /***/
  },

  /***/
  "./src/app/user/user-dashboard/user-dashboard.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/user-dashboard/user-dashboard.module.ts ***!
    \**************************************************************/

  /*! exports provided: UserDashboardModule */

  /***/
  function srcAppUserUserDashboardUserDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDashboardModule", function () {
      return UserDashboardModule;
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


    var _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-dashboard-routing.module */
    "./src/app/user/user-dashboard/user-dashboard-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-dashboard.component */
    "./src/app/user/user-dashboard/user-dashboard.component.ts");
    /* harmony import */


    var _components_userdash_main_comp_userdash_main_comp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/userdash-main-comp/userdash-main-comp.component */
    "./src/app/user/user-dashboard/components/userdash-main-comp/userdash-main-comp.component.ts");
    /* harmony import */


    var _components_userdash_messages_comp_userdash_messages_comp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/userdash-messages-comp/userdash-messages-comp.component */
    "./src/app/user/user-dashboard/components/userdash-messages-comp/userdash-messages-comp.component.ts");
    /* harmony import */


    var _components_userdash_events_comp_userdash_events_comp_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/userdash-events-comp/userdash-events-comp.component */
    "./src/app/user/user-dashboard/components/userdash-events-comp/userdash-events-comp.component.ts");

    var UserDashboardModule = function UserDashboardModule() {
      _classCallCheck(this, UserDashboardModule);
    };

    UserDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["UserDashboardComponent"], _components_userdash_main_comp_userdash_main_comp_component__WEBPACK_IMPORTED_MODULE_6__["UserdashMainCompComponent"], _components_userdash_messages_comp_userdash_messages_comp_component__WEBPACK_IMPORTED_MODULE_7__["UserdashMessagesCompComponent"], _components_userdash_events_comp_userdash_events_comp_component__WEBPACK_IMPORTED_MODULE_8__["UserdashEventsCompComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _user_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserDashboardRoutingModule"]]
    })], UserDashboardModule);
    /***/
  }
}]);
//# sourceMappingURL=user-dashboard-user-dashboard-module-es5.js.map