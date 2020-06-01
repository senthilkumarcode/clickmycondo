function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsDashboardAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  admin-dashboard works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsDashboardSecurityDashboardSecurityDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  security-dashboard works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsDashboardStaffDashboardStaffDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  staff-dashboard works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedBankCompBankCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bank-comp--wrapper\">\n\t\n\t<div class=\"card table-card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/bank-blue-icon.svg\" width=\"18\" />Bank & Cash</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<p class=\"intro\">For Accounting period 01/04/2019 - 31/03/2019</p>\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Account <span [ngClass]=\"getFieldOrderBy('blockno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Balance <span [ngClass]=\"getFieldOrderBy('unitno')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let bank of bankCashData\">\n\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{bank.account}}</a></td>\n\t\t\t\t      <td class=\"grey\">{{bank.balance}}</td>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDashIncomeChartDashIncomeChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<jqxChart #myChart\n    [width]=\"getWidth()\" [height]=\"265\"\n    [title]=\"''\" [description]=\"''\" [showBorderLine]=\"false\"\n    [showLegend]=\"true\" [enableAnimations]=\"true\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"days\" [xAxis]=\"xAxis\"\n    [valueAxis]=\"valueAxis\" [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme02'\">\n</jqxChart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDashPieChartDashPieChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<jqxChart\n    [width]=\"getWidth()\" [height]=\"250\"\n    [title]=\"''\" [description]=\"''\"\n    [showLegend]=\"false\" [enableAnimations]=\"true\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"dataAdapter\"\n    [showBorderLine]=\"false\" [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme02'\">\n</jqxChart>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/date-model/date-model.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/date-model/date-model.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedDateModelDateModelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"date-modal-wrapper\">\n    <form #dashboardFilter=\"ngForm\" name=\"dashboardFilter\" *ngIf=\"data != 'unapprove' && data != 'unassigned' && data != 'openaged' && data != 'panicAlerts'\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"input-box\">\n                    <label>From Date</label>\n                    <input class=\"form-control\" name=\"Startdate\" [owlDateTime]=\"Startdate\"\n                    [owlDateTimeTrigger]=\"Startdate\" [(ngModel)]=\"dashboard.fromDate\" placeholder=\"From Date\" required>\n                    <owl-date-time #Startdate [pickerType]=\"'calendar'\"></owl-date-time>\n                    <div class=\"date-btn\">\n                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"input-box\">\n                    <label>To Date</label>\n                    <input class=\"form-control\" name=\"Enddate\" [owlDateTime]=\"Enddate\"\n                    [owlDateTimeTrigger]=\"Enddate\" [(ngModel)]=\"dashboard.toDate\" placeholder=\"To Date\" required>\n                    <owl-date-time #Enddate [pickerType]=\"'calendar'\"></owl-date-time>\n                    <div class=\"date-btn\">\n                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-wrapper\">\n            <div class=\"col-sm-12 text-right\">\n                <button  class=\"btn blue mr-3\"[disabled]=\"dashboardFilter.invalid\" (click)=\"onConfirm()\">Filter</button>\n                <button  class=\"btn trans-white\" (click)=\"onDismiss()\">Cancel</button>\n            </div>\n        </div>\n    </form>\n    <form #dateFilter=\"ngForm\" name=\"dateFilter\" *ngIf=\"data == 'unapprove' ||  data == 'unassigned' || data == 'openaged' || data == 'panicAlerts'\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"input-box\">\n                    <label *ngIf=\"data == 'unapprove' || data == 'openaged'\">Date</label>\n                    <label *ngIf=\"data == 'unassigned' || data == 'panicAlerts'\">From</label>\n                    <input class=\"form-control\" name=\"Fromdate\" [owlDateTime]=\"Fromdate\"\n                    [owlDateTimeTrigger]=\"Fromdate\" [(ngModel)]=\"dashboard.date\" placeholder=\"From Date\" required>\n                    <owl-date-time #Fromdate [pickerType]=\"'calendar'\"></owl-date-time>\n                    <div class=\"date-btn\">\n                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-sm-6\" *ngIf=\"data == 'openaged'\">\n                <div class=\"input-box\">\n                    <label>No of Days</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"No of days\" name=\"noOfDays\" [(ngModel)]=\"dashboard.noOfDays\">\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-wrapper\">\n            <div class=\"col-sm-12 text-right\">\n                <button  class=\"btn blue mr-3\" [disabled]=\"dateFilter.invalid\" (click)=\"onConfirm()\">Filter</button>\n                <button  class=\"btn trans-white\" (click)=\"onDismiss()\">Cancel</button>\n            </div>\n        </div>\n    </form>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedExpenseTrackerCompExpenseTrackerCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"expense-tracker-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/expense-blue-icon.svg\" width=\"22\" />Expense Tracker</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"chart-box mb-4\">\n\t\t\t\t\t\t<canvas #expensePieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h6 class=\"label text-center mb-3\">Variance Amount - 2261.1k</h6>\n\t\t\t\t\t<p class=\"intro text-center\">01-10-2018 to 01-10-2019</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"list-group lists\">\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Aug</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Sep</div>\n\t\t\t\t\t<div class=\"float-right\">1646.2K</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Oct</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedHelpdeskChartHelpdeskChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-doughnut-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t\n\t\t<div class=\"card-body chart-body simple\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/support-blue-icon.svg\" width=\"20\" />Helpdesk Tracker</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row rel\">\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"details-wrapper\">\n\t\t\t\t\t\t<div class=\"title\">Open Tickets</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Personal</h6>\n\t\t\t\t\t\t\t<h3>{{totalOpenPersonalTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Community</h6>\n\t\t\t\t\t\t\t<h3>{{totalOpenCommunityTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6 col-border\">\n\t\t\t\t\t<div class=\"details-wrapper col-border-padding\">\n\t\t\t\t\t\t<div class=\"title\">Urgent Tickets</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Personal</h6>\n\t\t\t\t\t\t\t<h3>{{totalUrgentPersonalTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Community</h6>\n\t\t\t\t\t\t\t<h3>{{totalUrgentCommunityTickets}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"btn-wrapper text-center\">\n\t\t\t\t<a class=\"btn sf blue\"\n\t\t\t\thref=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/helpdesk/add-ticket\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Lodge Tickets</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedIncomeTrackerCompIncomeTrackerCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-tracker-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/income-blue-icon.svg\" width=\"22\" />Income Tracker</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"chart-box mb-4\">\n\t\t\t\t\t\t<canvas #incomePieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h6 class=\"label text-center mb-3\">Balance Amount - 2261.1k</h6>\n\t\t\t\t\t<p class=\"intro text-center\">01-10-2018 to 01-10-2019</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"list-group lists\">\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Aug</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Sep</div>\n\t\t\t\t\t<div class=\"float-right\">1646.2K</div>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t<div class=\"float-left\">Oct</div>\n\t\t\t\t\t<div class=\"float-right\">0</div>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedLedgerCompLedgerCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ledger-comp--wrapper\">\n\t\n\t<div class=\"card table-card chart-card\">\n\t\t<div class=\"card-body chart-body\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/book-blue-icon.svg\" width=\"22\" />General Ledger</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<p class=\"intro\">For Accounting period 01/04/2019 - 31/03/2019</p>\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockno')\">Class <span [ngClass]=\"getFieldOrderBy('blockno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitno')\">Credit <span [ngClass]=\"getFieldOrderBy('unitno')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('sqrt')\">Debit <span [ngClass]=\"getFieldOrderBy('sqrt')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let ledge of ledgerData\">\n\t\t\t\t      <td class=\"name\"><a href=\"javascript:void(0)\">{{ledge.class}}</a></td>\n\t\t\t\t      <td class=\"grey\">{{ledge.credit}}</td>\n\t\t\t\t      <td class=\"grey\">{{ledge.debit}}</td>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedPaymentCompPaymentCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"payment-comp-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body text-box\">\n\t\t\t<h3 class=\"text-center\">34</h3>\n\t\t\t<h5 class=\"text-center d-block p-0\">Payment Defaulters</h5>\n\t\t</div>\n\t</div>\n\t<div class=\"card chart-card mt-2\">\n\t\t<div class=\"card-body chart-body text-box\">\n\t\t\t<h3 class=\"text-center\">1258</h3>\n\t\t\t<h5 class=\"text-center d-block p-0\">Pending Vendor Payments</h5>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedUnitChartUnitChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"unit-doughnut-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body\">\n\t\t\t<h5>Units</h5>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-4 legends\">\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<span class=\"dots small low mr-2\"></span>\n\t\t\t\t\t\t<span>Total Units</span>\n\t\t\t\t\t\t<span class=\"ml-3\">{{totalUnits}}</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<span class=\"dots small medium mr-2\"></span>\n\t\t\t\t\t\t<span>Admins</span>\n\t\t\t\t\t\t<span class=\"ml-3\">10</span>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t<span class=\"dots small cyan mr-2\"></span>\n\t\t\t\t\t\t<span>Logged-in users</span>\n\t\t\t\t\t\t<span class=\"ml-3\">5</span>\n\t\t\t\t\t</li>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-8\">\n\t\t\t\t\t<div class=\"chart-box\">\n\t\t\t\t\t\t<canvas #unitPieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedUsersChartUsersChartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"user-doughnut-wrapper\">\n\t<div class=\"card chart-card\">\n\t\t<div class=\"card-body chart-body simple\">\n\t\t\t<h5><img class=\"mr-3\" src=\"assets/images/user-blue-icon.svg\" width=\"20\" />Users & Units</h5>\n\t\t\t<div class=\"filter-menu\">\n\t\t\t\t<app-dash-filter-menu type=\"normal\"></app-dash-filter-menu>\n\t\t\t</div>\n\t\t\t<div class=\"row rel\">\n\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t<div class=\"details-wrapper\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t<h6>Total Users</h6>\n\t\t\t\t\t\t\t<h3>{{totalUsers}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"details clear mt-5\">\n\t\t\t\t\t\t\t<h6>Total Units</h6>\n\t\t\t\t\t\t\t<h3>{{totalUnits}}</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-7 col-border\">\n\t\t\t\t\t<div class=\"details-wrapper col-border-padding\">\n\t\t\t\t\t\t<div class=\"legends\">\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<div class=\"label\"><span class=\"dots small low mr-2\"></span><span class=\"mr-3\">{{totalUnapprovedUsers}}</span>Unapproved users</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t\t<div class=\"label\"><span class=\"dots small low mr-2\"></span><span class=\"mr-3\">140</span>Admin</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardComponentsSharedVisitorsCompVisitorsCompComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"visitors-camp-wrapper\">\n\t\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-sm-3\">\n\t\t\t<div class=\"card chart-card no-border ov\">\n\t\t\t\t<div class=\"card-body chart-body color-box s-blue ov\">\n\t\t\t\t\t<h3>20</h3>\n\t\t\t\t\t<h6>Panic alerts by Users</h6>\n\t\t\t\t\t<div class=\"range-box\">\n\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t<app-dash-filter-menu type=\"trans\"></app-dash-filter-menu>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/alarm-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3\">\n\t\t\t<div class=\"card chart-card no-border ov\">\n\t\t\t\t<div class=\"card-body chart-body color-box l-red ov\">\n\t\t\t\t\t<h3>04</h3>\n\t\t\t\t\t<h6>Parking/Rules Violations</h6>\n\t\t\t\t\t<div class=\"range-box\">\n\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t<app-dash-filter-menu type=\"trans\"></app-dash-filter-menu>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/wrong-access-icon.svg\" width=\"20\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6\">\n\t\t\t<div class=\"card chart-card no-border ov\">\n\t\t\t\t<div class=\"card-body chart-body color-box green ov\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t<h3>215</h3>\n\t\t\t\t\t\t\t\t<h6>Visitors Checked-in</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"details pb-0\">\n\t\t\t\t\t\t\t\t<h3>89</h3>\n\t\t\t\t\t\t\t\t<h6>Visitors Checked-out</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"range-box\">\n\t\t\t\t\t\t\t\t<div class=\"text\">\n\t\t\t\t\t\t\t\t\t<app-dash-filter-menu type=\"trans\"></app-dash-filter-menu>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t<img src=\"assets/images/view-icon.svg\" width=\"22\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/dashboard.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/dashboard.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dashboard-wrapper\">\n\t<ng-container *ngIf=\"isApartmentSelected\">\n\t\t<!-- <div class=\"message-box mb-4\">\n\t\t\t<h4>Hi <span class=\"text-capitialize\">{{userName}}</span></h4>\n\t\t</div> -->\n\t</ng-container>\n\n\t<div class=\"row mt-4\">\n\t\t<div class=\"col-sm-2 cust-pad\">\n\t\t\t<div class=\"unit-layout content-area\" #unit>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue text-left\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"flip(unit)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{totalUnits}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Total Units</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-left dark-blue link\" (click)=\"flip(unit)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{totalTowers}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Total Towers</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-2 cust-pad\">\n\t\t\t<div class= \"owner-layout\">\n\t\t\t\t<div class=\"card\" *ngIf= \"colType == 'owner'\">\n\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\"  aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"colType='tenants'\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{totalOwners}}</h6> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t<p>Total Owners</p>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" *ngIf= \"colType == 'tenants'\">\n\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"colType='admin'\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{totalTenants}}</h6> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t<p>Total Tenants</p>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card\" *ngIf= \"colType == 'admin'\">\n\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"colType='owner'\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{totalAdmins}}</h6> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t<p>Total Admins</p>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-2 cust-pad\">\n\t\t\t<div class=\"pending-layout content-area\" #pending>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"flip(pending)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{unAppPenAdmins}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Pending Admins</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" (click)=\"calenderPopUp('pending','admin')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-left dark-blue link\" (click)=\"flip(pending)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{unAppPenUsers}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Pending Users</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" (click)=\"calenderPopUp('pending','user')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t <!-- Integration Pending  -->\n\t\t<div class=\"col-sm-2 cust-pad\">\n\t\t\t<div class=\"pending-layout content-area\" #pend>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"flip(pend)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">108</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Total Units</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-left dark-blue link\" (click)=\"flip(pend)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">108</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Total Units</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-2 cust-pad\">\n\t\t\t<div class=\"move-in-layout content-area\" #unapprove>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"flip(unapprove)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{unAppMoveIn}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>UnApprove Move In</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" (click)=\"calenderPopUp('unapprove','movein')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"flip(unapprove)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{unAppMoveOut}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>UnApprove Move Out</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" (click)=\"calenderPopUp('unapprove','moveout')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-2 cust-pad\">\n\t\t\t<div class=\"move-out-layout content-area\" #upcoming>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right dark-blue link\" (click)=\"flip(upcoming)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{upComMoveIn}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Up Coming Move In</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" (click)=\"calenderPopUp('upcoming','movein')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-database dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-ellipsis-h dark-blue link mr-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-left dark-blue link\" (click)=\"flip(upcoming)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h6 class=\"mt-2\">{{upComMoveOut}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Up Coming Move Out</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link\" aria-hidden=\"true\" (click)=\"calenderPopUp('upcoming','moveout')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"second-row-layout content-area\" #ticket>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(ticket)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">Open Community</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{communityTickets}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('tickets','community')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(ticket)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">Open Personal</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{personalTickets}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('tickets','personal')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"second-row-layout content-area\" #highPriority>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(highPriority)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">High Priority Community</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{hpcommunityTickets}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('highPriority','community')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(highPriority)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">High Priority Personal</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{hppersonalTickets}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('highPriority','personal')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"second-row-layout content-area\" #unassigned>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(unassigned)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">Unassigned Community</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{unassignedCommunity}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('unassigned','community')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(unassigned)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">Unassigned Personal</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{unassignedPersonal}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('unassigned','personal')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"second-row-layout content-area\" #openaged>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(openaged)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">Open Community Aged</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{openCommunityAged}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('openaged','community')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right bg-card-body\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye link text-white mb-3\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card text-white\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right text-white link\" (click)=\"flip(openaged)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">Open Personal Aged</p> \n\t\t\t\t\t\t\t\t<h6 class=\"text-white mt-2\">{{openPersonalAged}}</h6> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right bg-card-footer\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<p class=\"text-white\">\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-calendar mr-3 text-white\" aria-hidden=\"true\"></i>Last day\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link text-white\" aria-hidden=\"true\" (click)=\"calenderPopUp('openaged','personal')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"align-left-right\">\n\t\t\t\t\t\t<h6 class=\"font-weight-bold\">Amount Receivable vs Amount Received</h6>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class=\"text-mute mt-2\">Current Month</p>\n\t\t\t\t\t<app-dash-pie-chart></app-dash-pie-chart>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<p>Campaign sent 2 days ago</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<div class=\"align-left-right mb-2\">\n\t\t\t\t\t\t<h6 class=\"font-weight-bold\">Income vs Expenses</h6>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t\t<app-dash-income-chart></app-dash-income-chart>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-footer\">\n\t\t\t\t\t<p>Data Information Certified</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"panic-layout content-area\" #panicAlerts>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(panicAlerts)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{inprogressPanic}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>InProgress Panic Alerts</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\" (click)=\"calenderPopUp('panicAlerts','inprogress')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(panicAlerts)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{openPanic}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Open Panic Alerts</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\" (click)=\"calenderPopUp('panicAlerts','open')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"payment-layout content-area\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{customerCount}}</h5> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t<p>Total Customer</p>\n\t\t\t\t\t\t<!-- <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Integration Pending -->\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"vendor-layout content-area\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{customerCount}}</h5> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t<p>Total Customer</p>\n\t\t\t\t\t\t<!-- <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"credit-note-layout content-area\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{creditNote}}</h5> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t<p>Total Credit Note</p>\n\t\t\t\t\t\t<!-- <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card meeting-schedule\">\n\t\t\t\t<div class=\"card-body dash-height\">\n\t\t\t\t\t<div class=\"align-left-right mb-2\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-calendar mr-3 dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<h6 class=\"font-weight-bold d-inline dark-blue\">Meeting Schedule</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p class=\"font-weight-bold d-inline mr-3 more\">More</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\" (click)=\"calenderPopUp('meeting','schedule')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"border-line mt-3\" *ngFor=\"let data of meetingList\">\n\t\t\t\t\t\t<div class=\"row mb-2\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<p class=\"more\">Mothly pass</p>\n\t\t\t\t\t\t\t\t<p class=\"font-weight-bold dark-blue\">Kowshick</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<p class=\"more\">Akshaya Apartment</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<p class=\"more\">{{data.fromTime }} - {{data.toTime}}</p>\n\t\t\t\t\t\t\t\t<p class=\"text-muted\">{{data.meetingDate | date: 'fullDate'}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card announcement\">\n\t\t\t\t<div class=\"card-body dash-height\">\n\t\t\t\t\t<div class=\"align-left-right mb-3\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h6 class=\"font-weight-bold d-inline dark-blue\">Announcement</h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"border-line ml-2 mt-4\">\n\t\t\t\t\t\t<div class=\"row mb-3\">\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<div class=\"announce-round\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-3\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"more\">PBI 234567 Location Dropdown Accessible</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Assign by email</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"border-line ml-2 mt-4\">\n\t\t\t\t\t\t<div class=\"row mb-2\">\n\t\t\t\t\t\t\t<div class=\"col-sm-10\">\n\t\t\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t\t\t<div class=\"announce-round\"></div>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-3\">\n\t\t\t\t\t\t\t\t\t\t<p class=\"more\">PBI 234567 Location Dropdown Accessible</p>\n\t\t\t\t\t\t\t\t\t\t<p class=\"text-muted\">Assign by email</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"visitors-layout content-area\" #visitors>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(visitors)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{visitorsIn}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Visitors IN</p>\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\" (click)=\"calenderPopUp('visitors','checkedIn')\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(visitors)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{visitorsOut}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Visitors Out</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"visitors-not-checked-layout content-area\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{visitorsNC}}</h5> \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t<p>Visitors Not Checked</p>\n\t\t\t\t\t\t<!-- <i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"parkings-layout content-area\" #parking>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(parking)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{parkingSlots}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Total Parking Slots</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(parking)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{unassignedParking}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Unassigned Parking</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-3 cust-pad\">\n\t\t\t<div class=\"facility-layout content-area\" #facility>\n\t\t\t\t<div class=\"front\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(facility)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{facBookingApproved}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Facility Booking Approved</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"back\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body align-left-right\">\n\t\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-eye cyan-color link\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t<i class=\"icon-lg fa fa-credit-card cyan-color mt-2\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-right cyan-color link\" (click)=\"flip(facility)\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t\t\t<h5 class=\"font-weight-bold dark-blue mt-4\">{{facBookingUnApproved}}</h5> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-footer align-left-right\">\n\t\t\t\t\t\t\t<p>Facility Booking UnApproved</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body align-left-right h-230\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-bell-o mr-3 dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<h6 class=\"font-weight-bold dark-blue d-inline\">Emergency Alert Messages</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body align-left-right h-230\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-bell-o mr-3 dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<h6 class=\"font-weight-bold dark-blue d-inline\">Emergency Alert Messages</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row mt-5\">\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body align-left-right h-230\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-calendar mr-3 dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<h6 class=\"font-weight-bold d-inline dark-blue\">My Meetings</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-sm-6 cust-pad\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body align-left-right h-230\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-calendar mr-3 dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<h6 class=\"font-weight-bold d-inline dark-blue\">My Facility Bookings</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<i class=\"icon-md fa fa-caret-down link dark-blue\" aria-hidden=\"true\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!-- <div class=\"dashboard-wrapper\">\n\t<ng-container *ngIf=\"isApartmentSelected\">\n\t\t<div class=\"message-box mb-4\">\n\t\t\t<h4>Hi <span class=\"text-capitialize\">{{userName}}</span></h4>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<app-visitors-comp></app-visitors-comp>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-5\">\n\t\t\t\t<app-users-chart></app-users-chart>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-7\">\n\t\t\t\t\t<app-helpdesk-chart></app-helpdesk-chart>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-4\">\n\t\t\t\t<app-income-tracker-comp></app-income-tracker-comp>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-4\">\n\t\t\t\t<app-payment-comp></app-payment-comp>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 col-md-12 col-lg-4\">\n\t\t\t\t<app-expense-tracker-comp></app-expense-tracker-comp>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<app-ledger-comp></app-ledger-comp>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t<app-bank-comp></app-bank-comp>\n\t\t\t</div>\n\t\t</div>\n\t</ng-container>\n\t\n</div> -->";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsDashboardAdminDashboardAdminDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAmsDashboardComponentsDashboardAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminDashboardComponent =
    /*#__PURE__*/
    function () {
      function AdminDashboardComponent() {
        _classCallCheck(this, AdminDashboardComponent);
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-admin-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./admin-dashboard.component.scss */
      "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsDashboardSecurityDashboardSecurityDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvc2VjdXJpdHktZGFzaGJvYXJkL3NlY3VyaXR5LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: SecurityDashboardComponent */

  /***/
  function srcAppAmsDashboardComponentsDashboardSecurityDashboardSecurityDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecurityDashboardComponent", function () {
      return SecurityDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SecurityDashboardComponent =
    /*#__PURE__*/
    function () {
      function SecurityDashboardComponent() {
        _classCallCheck(this, SecurityDashboardComponent);
      }

      _createClass(SecurityDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecurityDashboardComponent;
    }();

    SecurityDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-security-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./security-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./security-dashboard.component.scss */
      "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SecurityDashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsDashboardStaffDashboardStaffDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9kYXNoYm9hcmQvc3RhZmYtZGFzaGJvYXJkL3N0YWZmLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: StaffDashboardComponent */

  /***/
  function srcAppAmsDashboardComponentsDashboardStaffDashboardStaffDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffDashboardComponent", function () {
      return StaffDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaffDashboardComponent =
    /*#__PURE__*/
    function () {
      function StaffDashboardComponent() {
        _classCallCheck(this, StaffDashboardComponent);
      }

      _createClass(StaffDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffDashboardComponent;
    }();

    StaffDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-dashboard.component.scss */
      "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaffDashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedBankCompBankCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvYmFuay1jb21wL2JhbmstY29tcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: BankCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedBankCompBankCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BankCompComponent", function () {
      return BankCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BankCompComponent =
    /*#__PURE__*/
    function () {
      function BankCompComponent() {
        _classCallCheck(this, BankCompComponent);

        this.unitFieldType = "unitno";
        this.unitOrder = true;
      }

      _createClass(BankCompComponent, [{
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
          this.bankCashData = [{
            'account': 'Petty Cash',
            'balance': '15,114,575.72'
          }, {
            'account': 'Vijaya Bank',
            'balance': '15,114,575.72'
          }, {
            'account': 'Petty Cash',
            'balance': '15,114,575.72'
          }, {
            'account': 'Canara Bank',
            'balance': '15,114,575.72'
          }];
        }
      }]);

      return BankCompComponent;
    }();

    BankCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bank-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./bank-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./bank-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BankCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDashIncomeChartDashIncomeChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGFzaC1pbmNvbWUtY2hhcnQvZGFzaC1pbmNvbWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: DashIncomeChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDashIncomeChartDashIncomeChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashIncomeChartComponent", function () {
      return DashIncomeChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashIncomeChartComponent =
    /*#__PURE__*/
    function () {
      function DashIncomeChartComponent() {
        _classCallCheck(this, DashIncomeChartComponent);

        this.days = [{
          Day: 'Monday'
        }, {
          Day: 'Tuesday'
        }, {
          Day: 'Wednesday'
        }, {
          Day: 'Thursday'
        }, {
          Day: 'Friday'
        }, {
          Day: 'Saturday'
        }, {
          Day: 'Sunday'
        }];
        this.Keith = [{
          Minutes: 30
        }, {
          Minutes: 25
        }, {
          Minutes: 30
        }, {
          Minutes: 35
        }, {
          Minutes: 20
        }, {
          Minutes: 30
        }, {
          Minutes: 60
        }];
        this.Erica = [{
          Minutes: 15
        }, {
          Minutes: 25
        }, {
          Minutes: 20
        }, {
          Minutes: 25
        }, {
          Minutes: 20
        }, {
          Minutes: 20
        }, {
          Minutes: 45
        }];
        this.George = [{
          Minutes: 25
        }, {
          Minutes: 30
        }, {
          Minutes: 25
        }, {
          Minutes: 45
        }, {
          Minutes: 25
        }, {
          Minutes: 30
        }, {
          Minutes: 90
        }];
        this.padding = {
          left: 5,
          top: 5,
          right: 40,
          bottom: 5
        };
        this.titlePadding = {
          left: 90,
          top: 0,
          right: 0,
          bottom: 10
        };
        this.xAxis = {
          dataField: 'Day',
          gridLines: {
            visible: true
          }
        };
        this.valueAxis = {
          visible: true,
          title: {
            text: 'Time in minutes'
          }
        };
        this.seriesGroups = [{
          type: 'stackedline',
          source: this.Keith,
          series: [{
            dataField: 'Minutes',
            displayText: 'Keith'
          }]
        }, {
          type: 'stackedline',
          source: this.Erica,
          series: [{
            dataField: 'Minutes',
            displayText: 'Erica'
          }]
        }, {
          type: 'stackedline',
          source: this.George,
          series: [{
            dataField: 'Minutes',
            displayText: 'George'
          }]
        }];
      }

      _createClass(DashIncomeChartComponent, [{
        key: "getWidth",
        value: function getWidth() {
          if (document.body.offsetWidth < 850) {
            return '100%';
          }

          return 480;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashIncomeChartComponent;
    }();

    DashIncomeChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-income-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dash-income-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dash-income-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashIncomeChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDashPieChartDashPieChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGFzaC1waWUtY2hhcnQvZGFzaC1waWUtY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: DashPieChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDashPieChartDashPieChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashPieChartComponent", function () {
      return DashPieChartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashPieChartComponent =
    /*#__PURE__*/
    function () {
      function DashPieChartComponent() {
        var _this = this;

        _classCallCheck(this, DashPieChartComponent);

        this.data = [{
          "cliente": "Kowshick",
          "total": "10"
        }, {
          "cliente": "Murugan",
          "total": "20"
        }, {
          "cliente": "Raavan",
          "total": "30"
        }, {
          "cliente": "Recris",
          "total": "5"
        }];
        this.source = {
          datatype: 'json',
          datafields: [{
            name: 'cliente',
            type: 'string'
          }, {
            name: 'total',
            type: 'number'
          }],
          localdata: this.data,
          async: false
        };
        this.dataAdapter = new jqx.dataAdapter(this.source, {
          async: false,
          autoBind: true,
          loadError: function loadError(xhr, status, error) {
            alert('Error loading "' + _this.source.url + '" : ' + error);
          }
        });
        this.legendPosition = {
          left: 520,
          top: 140,
          width: 100,
          height: 100
        };
        this.padding = {
          left: 5,
          top: 5,
          right: 5,
          bottom: 5
        };
        this.titlePadding = {
          left: 0,
          top: 0,
          right: 0,
          bottom: 10
        };
        this.seriesGroups = [{
          type: 'donut',
          showLabels: true,
          series: [{
            dataField: 'total',
            displayText: 'cliente',
            labelRadius: 120,
            initialAngle: 15,
            radius: 90,
            innerRadius: 40,
            centerOffset: 0,
            formatSettings: {
              sufix: '%',
              decimalPlaces: 1
            }
          }]
        }];
      }

      _createClass(DashPieChartComponent, [{
        key: "getWidth",
        value: function getWidth() {
          if (document.body.offsetWidth < 850) {
            return '100%';
          }

          return 400;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashPieChartComponent;
    }();

    DashPieChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-pie-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dash-pie-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dash-pie-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashPieChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/date-model/date-model.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/date-model/date-model.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedDateModelDateModelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZGF0ZS1tb2RlbC9kYXRlLW1vZGVsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts ***!
    \************************************************************************************/

  /*! exports provided: DateModelComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedDateModelDateModelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DateModelComponent", function () {
      return DateModelComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var DateModelComponent =
    /*#__PURE__*/
    function () {
      function DateModelComponent(cookieService, dialogRef, data) {
        _classCallCheck(this, DateModelComponent);

        this.cookieService = cookieService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.dashboard = {
          apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
      }

      _createClass(DateModelComponent, [{
        key: "onConfirm",
        value: function onConfirm() {
          if (this.data == 'unapprove' || this.data == 'openaged' || this.data == 'panicAlerts' || this.data == 'unassigned') {
            this.dashboard.date = this.dashboard.date.toISOString();
          } else {
            this.dashboard.fromDate = this.dashboard.fromDate.toISOString();
            this.dashboard.toDate = this.dashboard.toDate.toISOString();
          }

          this.dialogRef.close(this.dashboard);
        }
      }, {
        key: "onDismiss",
        value: function onDismiss() {
          this.dialogRef.close(false);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DateModelComponent;
    }();

    DateModelComponent.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DateModelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-date-model',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./date-model.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/date-model/date-model.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./date-model.component.scss */
      "./src/app/ams/dashboard/components/shared/date-model/date-model.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], DateModelComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedExpenseTrackerCompExpenseTrackerCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvZXhwZW5zZS10cmFja2VyLWNvbXAvZXhwZW5zZS10cmFja2VyLWNvbXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ExpenseTrackerCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedExpenseTrackerCompExpenseTrackerCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpenseTrackerCompComponent", function () {
      return ExpenseTrackerCompComponent;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);

    var ExpenseTrackerCompComponent =
    /*#__PURE__*/
    function () {
      function ExpenseTrackerCompComponent() {
        _classCallCheck(this, ExpenseTrackerCompComponent);
      }

      _createClass(ExpenseTrackerCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          setTimeout(function () {
            var data = {
              labels: ["Expenses", "Budget"],
              datasets: [{
                barThickness: 15,
                data: [90, 80],
                backgroundColor: ["#52cc8e", "#ffeb3b"],
                hoverBackgroundColor: ["#52cc8e", "#ffeb3b"]
              }]
            };
            _this2.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](_this2.chartRef.nativeElement, {
              type: 'bar',
              data: data,
              options: {
                responsive: true,
                legend: {
                  display: false
                },
                tooltips: {
                  enabled: true
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                      display: false
                    },
                    ticks: {
                      fontColor: "#8391a1",
                      fontStyle: "normal",
                      fontSize: 12,
                      maxRotation: 0,
                      autoSkip: false
                    }
                  }],
                  yAxes: [{
                    gridLines: {
                      color: "rgba(200, 200, 200, 0.4)",
                      borderDash: [2, 2]
                    },
                    ticks: {
                      beginAtZero: true,
                      fontColor: "#8391a1",
                      fontStyle: "normal",
                      fontSize: 12,
                      callback: function callback(label, index, labels) {
                        return label;
                      }
                    },
                    scaleLabel: {
                      display: false
                    }
                  }]
                },
                animation: {
                  onComplete: function onComplete(e) {
                    /* var width = this.chart.width,
                    height = this.chart.height,
                    ctx = this.chart.ctx;
                                 ctx.restore();
                                 ctx.font = "2em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var numText = "-1052.5K",
                    textX = Math.round((width - ctx.measureText(numText).width) / 2),
                    textY = (height / 2) - 10;
                                 ctx.fillText(numText, textX, textY);
                    ctx.save();
                                 ctx.font = "1.6em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var fText = "Variance Amount";
                    textX = Math.round((width - ctx.measureText(fText).width) / 2),
                    textY = (height / 2) + 15;
                                 ctx.fillText(fText, textX, textY);
                    ctx.save(); */
                  }
                }
              }
            });
          }, 500);
        }
      }]);

      return ExpenseTrackerCompComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('expensePieChart', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ExpenseTrackerCompComponent.prototype, "chartRef", void 0);
    ExpenseTrackerCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-expense-tracker-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./expense-tracker-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./expense-tracker-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ExpenseTrackerCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedHelpdeskChartHelpdeskChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@media (max-width: 576px) {\n  .helpdesk-doughnut-wrapper .details-wrapper .title {\n    padding: 10px 0 0 0;\n  }\n}\n.helpdesk-doughnut-wrapper .details-wrapper .details:not(:last-child) {\n  padding: 0 20px 0 0;\n}\n@media (max-width: 576px) {\n  .helpdesk-doughnut-wrapper .details-wrapper .details:not(:last-child) {\n    padding: 0 35px 5px 0;\n  }\n}\n.helpdesk-doughnut-wrapper .btn-wrapper {\n  margin: 21px 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2hlbHBkZXNrLWNoYXJ0L2hlbHBkZXNrLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL2hlbHBkZXNrLWNoYXJ0L2hlbHBkZXNrLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFHO0VBREQ7SUFFVSxtQkFBQTtFQ05WO0FBQ0Y7QURTRztFQUNDLG1CQUFBO0FDUEo7QURRSTtFQUZEO0lBR1UscUJBQUE7RUNMWDtBQUNGO0FEU0M7RUFDQyxrQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC9oZWxwZGVzay1jaGFydC9oZWxwZGVzay1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG5cbi5oZWxwZGVzay1kb3VnaG51dC13cmFwcGVyIHtcblx0LmRldGFpbHMtd3JhcHBlciB7XG5cdFx0LnRpdGxlIHtcblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgIFx0XHRwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICAgICAgICBcdH1cblx0XHR9XG5cdFx0LmRldGFpbHMge1xuXHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuXHRcdFx0XHRwYWRkaW5nOiAwIDIwcHggMCAwO1xuXHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICBcdFx0XHRwYWRkaW5nOiAwIDM1cHggNXB4IDA7XG4gICAgICAgIFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5idG4td3JhcHBlciB7XG5cdFx0bWFyZ2luOiAyMXB4IDAgMCAwO1xuXHR9XG59IiwiQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oZWxwZGVzay1kb3VnaG51dC13cmFwcGVyIC5kZXRhaWxzLXdyYXBwZXIgLnRpdGxlIHtcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xuICB9XG59XG4uaGVscGRlc2stZG91Z2hudXQtd3JhcHBlciAuZGV0YWlscy13cmFwcGVyIC5kZXRhaWxzOm5vdCg6bGFzdC1jaGlsZCkge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gIC5oZWxwZGVzay1kb3VnaG51dC13cmFwcGVyIC5kZXRhaWxzLXdyYXBwZXIgLmRldGFpbHM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgcGFkZGluZzogMCAzNXB4IDVweCAwO1xuICB9XG59XG4uaGVscGRlc2stZG91Z2hudXQtd3JhcHBlciAuYnRuLXdyYXBwZXIge1xuICBtYXJnaW46IDIxcHggMCAwIDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: HelpdeskChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedHelpdeskChartHelpdeskChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskChartComponent", function () {
      return HelpdeskChartComponent;
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


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Ticket */
    "./src/app/api/controllers/Ticket.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var HelpdeskChartComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskChartComponent(injector, userService, ticketService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, HelpdeskChartComponent);

        this.injector = injector;
        this.userService = userService;
        this.ticketService = ticketService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(HelpdeskChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.ticketService.getAllTicketsByApartmentId(params).subscribe(function (res) {
            if (res.length == undefined || res.length == 0) {
              _this3.totalOpenPersonalTickets = 0;
              _this3.totalUrgentPersonalTickets = 0;
              _this3.totalUrgentPersonalTickets = 0;
              _this3.totalUrgentCommunityTickets = 0;
            } else {
              var openPersonalTickets = res.filter(function (item) {
                return item.ticketStatusId == 32 && item.ticketTypeId == 27; // new and personal tickets
              });
              _this3.totalOpenPersonalTickets = openPersonalTickets.length;
              var openCommunityTickets = res.filter(function (item) {
                return item.ticketStatusId == 32 && item.ticketTypeId == 26; // new and common tickets
              });
              _this3.totalOpenCommunityTickets = openCommunityTickets.length;
              var urgentPersonalTickets = res.filter(function (item) {
                return item.ticketPriorityId == 47 && item.ticketTypeId == 27; // priorty high and personal tickets
              });
              _this3.totalUrgentPersonalTickets = urgentPersonalTickets.length;
              var urgentCommunityTickets = res.filter(function (item) {
                return item.ticketPriorityId == 47 && item.ticketTypeId == 26; // priorty high and common tickets
              });
              _this3.totalUrgentCommunityTickets = urgentCommunityTickets.length;
            }
          });
        }
      }]);

      return HelpdeskChartComponent;
    }();

    HelpdeskChartComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_3__["TicketService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    HelpdeskChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_3__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], HelpdeskChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedIncomeTrackerCompIncomeTrackerCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvaW5jb21lLXRyYWNrZXItY29tcC9pbmNvbWUtdHJhY2tlci1jb21wLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: IncomeTrackerCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedIncomeTrackerCompIncomeTrackerCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerCompComponent", function () {
      return IncomeTrackerCompComponent;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);

    var IncomeTrackerCompComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerCompComponent() {
        _classCallCheck(this, IncomeTrackerCompComponent);
      }

      _createClass(IncomeTrackerCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          setTimeout(function () {
            var data = {
              labels: ["Colleced", "Balance"],
              datasets: [{
                data: [70, 30],
                backgroundColor: ["#ff3638", "#3f51b5"],
                hoverBackgroundColor: ["#ff3638", "#3f51b5"]
              }]
            };
            _this4.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](_this4.chartRef.nativeElement, {
              type: 'doughnut',
              data: data,
              options: {
                responsive: true,
                legend: {
                  display: false
                },
                cutoutPercentage: 30,
                rotation: 120,
                animation: {
                  onComplete: function onComplete(e) {
                    /* var width = this.chart.width,
                    height = this.chart.height,
                    ctx = this.chart.ctx;
                                 ctx.restore();
                                 ctx.font = "2em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var numText = "2261.1K",
                    textX = Math.round((width - ctx.measureText(numText).width) / 2),
                    textY = (height / 2) - 10;
                                 ctx.fillText(numText, textX, textY);
                    ctx.save();
                                 ctx.font = "1.6em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                                 var fText = "Balance";
                    textX = Math.round((width - ctx.measureText(fText).width) / 2),
                    textY = (height / 2) + 15;
                                 ctx.fillText(fText, textX, textY);
                    ctx.save(); */
                  }
                }
              }
            });
          }, 500);
        }
      }]);

      return IncomeTrackerCompComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('incomePieChart', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomeTrackerCompComponent.prototype, "chartRef", void 0);
    IncomeTrackerCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], IncomeTrackerCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedLedgerCompLedgerCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvbGVkZ2VyLWNvbXAvbGVkZ2VyLWNvbXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: LedgerCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedLedgerCompLedgerCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LedgerCompComponent", function () {
      return LedgerCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LedgerCompComponent =
    /*#__PURE__*/
    function () {
      function LedgerCompComponent() {
        _classCallCheck(this, LedgerCompComponent);

        this.unitFieldType = "unitno";
        this.unitOrder = true;
      }

      _createClass(LedgerCompComponent, [{
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
          this.ledgerData = [{
            'class': 'Assets',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }, {
            'class': 'Liablities',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }, {
            'class': 'Revenues',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }, {
            'class': 'Expenses',
            'credit': '22,546,459.74',
            'debit': '15,114,575.72'
          }];
        }
      }]);

      return LedgerCompComponent;
    }();

    LedgerCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ledger-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ledger-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ledger-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], LedgerCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedPaymentCompPaymentCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvcGF5bWVudC1jb21wL3BheW1lbnQtY29tcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: PaymentCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedPaymentCompPaymentCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentCompComponent", function () {
      return PaymentCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PaymentCompComponent =
    /*#__PURE__*/
    function () {
      function PaymentCompComponent() {
        _classCallCheck(this, PaymentCompComponent);
      }

      _createClass(PaymentCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PaymentCompComponent;
    }();

    PaymentCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./payment-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./payment-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PaymentCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedUnitChartUnitChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvdW5pdC1jaGFydC91bml0LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.ts ***!
    \************************************************************************************/

  /*! exports provided: UnitChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedUnitChartUnitChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitChartComponent", function () {
      return UnitChartComponent;
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


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var UnitChartComponent =
    /*#__PURE__*/
    function () {
      function UnitChartComponent(apartmentService, cookieService) {
        _classCallCheck(this, UnitChartComponent);

        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
      }

      _createClass(UnitChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
            _this5.totalUnits = res.length;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this6 = this;

          setTimeout(function () {
            var data = {
              labels: ["Total Units"],
              datasets: [{
                data: [5],
                backgroundColor: ["#52cc8e", "#3f51b5"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
              }]
            };
            _this6.chart = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"](_this6.chartRef.nativeElement, {
              type: 'doughnut',
              data: data,
              options: {
                responsive: true,
                legend: {
                  display: false
                },
                cutoutPercentage: 80,
                rotation: 120,
                animation: {
                  onComplete: function onComplete(e) {
                    var width = _this6.chart.width,
                        height = _this6.chart.height,
                        ctx = _this6.chart.ctx;
                    ctx.restore();
                    ctx.font = "2em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                    var numText = _this6.totalUnits,
                        textX = Math.round((width - ctx.measureText(numText).width) / 2),
                        textY = height / 2 - 10;
                    ctx.fillText(numText, textX, textY);
                    ctx.save();
                    ctx.font = "1.6em Maven Pro";
                    ctx.textBaseline = "middle";
                    ctx.fillStyle = "#4c4c4c";
                    var fText = "Total Units";
                    textX = Math.round((width - ctx.measureText(fText).width) / 2), textY = height / 2 + 15;
                    ctx.fillText(fText, textX, textY);
                    ctx.save();
                  }
                }
              }
            });
          }, 500);
        }
      }]);

      return UnitChartComponent;
    }();

    UnitChartComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('unitPieChart', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], UnitChartComponent.prototype, "chartRef", void 0);
    UnitChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unit-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./unit-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./unit-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], UnitChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedUsersChartUsersChartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-doughnut-wrapper .chart-box {\n  padding: inherit;\n  margin: -30px 0 0 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL3VzZXJzLWNoYXJ0L3VzZXJzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL3VzZXJzLWNoYXJ0L3VzZXJzLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1DO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtBQ0xGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC91c2Vycy1jaGFydC91c2Vycy1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4udXNlci1kb3VnaG51dC13cmFwcGVyIHtcblx0XG5cdC5jaGFydC1ib3gge1xuXHRcdHBhZGRpbmc6IGluaGVyaXQ7XG5cdFx0bWFyZ2luOiAtMzBweCAwIDAgMzBweDtcblx0fVxufSIsIi51c2VyLWRvdWdobnV0LXdyYXBwZXIgLmNoYXJ0LWJveCB7XG4gIHBhZGRpbmc6IGluaGVyaXQ7XG4gIG1hcmdpbjogLTMwcHggMCAwIDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: UsersChartComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedUsersChartUsersChartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersChartComponent", function () {
      return UsersChartComponent;
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


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var UsersChartComponent =
    /*#__PURE__*/
    function () {
      function UsersChartComponent(userService, apartmentService, cookieService) {
        _classCallCheck(this, UsersChartComponent);

        this.userService = userService;
        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
      }

      _createClass(UsersChartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.userService.getAllUsers().subscribe(function (res) {
            _this7.totalUsers = res.length;

            _this7.userService.getAllUnApprovedUsers().subscribe(function (res) {
              _this7.totalUnapprovedUsers = res.length;
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
          this.totalApprovedUsers = this.totalUsers - this.totalUnapprovedUsers;
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe(function (res) {
            _this7.totalUnits = res.length;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return UsersChartComponent;
    }();

    UsersChartComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    UsersChartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-chart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users-chart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users-chart.component.scss */
      "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], UsersChartComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardComponentsSharedVisitorsCompVisitorsCompComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".visitors-camp-wrapper .card {\n  margin: 0 0 15px 0;\n}\n.visitors-camp-wrapper .card .card-body {\n  padding: 12px 19px 0 19px;\n}\n.visitors-camp-wrapper .card .range-box {\n  position: relative;\n  padding: 10px 0;\n}\n.visitors-camp-wrapper .card .range-box:before {\n  content: \"\";\n  position: absolute;\n  width: calc(100% + 45px);\n  left: -25px;\n  height: 1px;\n  background-color: rgba(255, 255, 255, 0.3);\n}\n.visitors-camp-wrapper .card .range-box .text {\n  position: relative;\n  float: right;\n}\n@media (max-width: 576px) {\n  .visitors-camp-wrapper .details {\n    padding: 0 0 15px 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvc2hhcmVkL3Zpc2l0b3JzLWNvbXAvdmlzaXRvcnMtY29tcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2Rhc2hib2FyZC9jb21wb25lbnRzL3NoYXJlZC92aXNpdG9ycy1jb21wL3Zpc2l0b3JzLWNvbXAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1DO0VBQ0Msa0JBQUE7QUNMRjtBRE1FO0VBQ0MseUJBQUE7QUNKSDtBRE1FO0VBQ0Msa0JFUEU7RUZRRixlQUFBO0FDSkg7QURLRztFQUNDLFdBQUE7RUFDQSxrQkVaQztFRmFELHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtBQ0hKO0FES0c7RUFDQyxrQkVsQkM7RUZtQkQsWUFBQTtBQ0hKO0FEU0U7RUFERDtJQUVPLG1CQUFBO0VDTk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvY29tcG9uZW50cy9zaGFyZWQvdmlzaXRvcnMtY29tcC92aXNpdG9ycy1jb21wLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cblxuLnZpc2l0b3JzLWNhbXAtd3JhcHBlciB7XG5cdC5jYXJkIHtcblx0XHRtYXJnaW46IDAgMCAxNXB4IDA7XG5cdFx0LmNhcmQtYm9keSB7XG5cdFx0XHRwYWRkaW5nOiAxMnB4IDE5cHggMCAxOXB4O1xuXHRcdH1cblx0XHQucmFuZ2UtYm94IHtcblx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0cGFkZGluZzogMTBweCAwO1xuXHRcdFx0JjpiZWZvcmUge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHRwb3NpdGlvbjogJGFicztcblx0XHRcdFx0d2lkdGg6IGNhbGMoMTAwJSArIDQ1cHgpO1xuXHRcdFx0XHRsZWZ0OiAtMjVweDtcblx0XHRcdFx0aGVpZ2h0OiAxcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjMpO1xuXHRcdFx0fVxuXHRcdFx0LnRleHQge1xuXHRcdFx0XHRwb3NpdGlvbjogJHJlbDtcblx0XHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0fVxuXHR9XG5cdC5kZXRhaWxzIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgICAgIFx0XHRwYWRkaW5nOiAwIDAgMTVweCAwO1xuICAgIFx0fVxuXHR9XG59IiwiLnZpc2l0b3JzLWNhbXAtd3JhcHBlciAuY2FyZCB7XG4gIG1hcmdpbjogMCAwIDE1cHggMDtcbn1cbi52aXNpdG9ycy1jYW1wLXdyYXBwZXIgLmNhcmQgLmNhcmQtYm9keSB7XG4gIHBhZGRpbmc6IDEycHggMTlweCAwIDE5cHg7XG59XG4udmlzaXRvcnMtY2FtcC13cmFwcGVyIC5jYXJkIC5yYW5nZS1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi52aXNpdG9ycy1jYW1wLXdyYXBwZXIgLmNhcmQgLnJhbmdlLWJveDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA0NXB4KTtcbiAgbGVmdDogLTI1cHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG4udmlzaXRvcnMtY2FtcC13cmFwcGVyIC5jYXJkIC5yYW5nZS1ib3ggLnRleHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsb2F0OiByaWdodDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAudmlzaXRvcnMtY2FtcC13cmFwcGVyIC5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICB9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: VisitorsCompComponent */

  /***/
  function srcAppAmsDashboardComponentsSharedVisitorsCompVisitorsCompComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorsCompComponent", function () {
      return VisitorsCompComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var VisitorsCompComponent =
    /*#__PURE__*/
    function () {
      function VisitorsCompComponent() {
        _classCallCheck(this, VisitorsCompComponent);
      }

      _createClass(VisitorsCompComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VisitorsCompComponent;
    }();

    VisitorsCompComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitors-comp',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitors-comp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitors-comp.component.scss */
      "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], VisitorsCompComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: routes, DashboardRoutingModule */

  /***/
  function srcAppAmsDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/ams/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'dashboard',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dashboard-wrapper .message-box h4 {\n  font-size: 2rem;\n  color: #191c1e;\n  margin: 0 0 4px 0;\n}\n\n.dashboard-wrapper .cust-pad {\n  padding-left: 5px !important;\n  padding-right: 5px !important;\n}\n\n.dashboard-wrapper .card {\n  border-radius: 10px !important;\n}\n\n.dashboard-wrapper .card .card-body {\n  padding: 10px;\n}\n\n.dashboard-wrapper .content-area {\n  transform: perspective(1000px);\n  transition: 1s;\n  transform-style: preserve-3d;\n  position: relative;\n  width: 100%;\n}\n\n.dashboard-wrapper .content-area .front {\n  position: relative;\n  transform: rotateY(0deg);\n  z-index: 2;\n  width: 100%;\n}\n\n.dashboard-wrapper .content-area .front.flip-bk {\n  transform: rotateY(180deg);\n}\n\n.dashboard-wrapper .content-area .back.flip-ft {\n  transform: rotateY(0deg);\n}\n\n.dashboard-wrapper .content-area .back {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: rotateY(-180deg);\n  width: 100%;\n}\n\n.dashboard-wrapper .content-area .front, .dashboard-wrapper .content-area .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: 1s;\n  transform-style: preserve-3d;\n}\n\n.dashboard-wrapper .align-left-right {\n  display: flex;\n  justify-content: space-between;\n}\n\n.dashboard-wrapper .icon-lg:before {\n  font-size: 3rem;\n}\n\n.dashboard-wrapper .icon-md::before {\n  font-size: 1.6rem;\n}\n\n.dashboard-wrapper .icon-sm::before {\n  font-size: 1.2rem;\n}\n\n.dashboard-wrapper .card-footer p {\n  font-size: 1.2rem;\n}\n\n.dashboard-wrapper .second-row-layout .bg-card-body {\n  background-color: #00d1fa;\n}\n\n.dashboard-wrapper .second-row-layout .bg-card-body p {\n  font-size: 1.4rem;\n}\n\n.dashboard-wrapper .second-row-layout .bg-card-footer {\n  background-color: #236aaf;\n}\n\n.dashboard-wrapper .cyan-color {\n  color: #00d1fa;\n}\n\n.dashboard-wrapper .dark-blue {\n  color: #236aaf;\n}\n\n.dashboard-wrapper .more {\n  font-size: 1.4rem;\n}\n\n.dashboard-wrapper .border-line {\n  border-bottom: 2px solid #dedede;\n}\n\n.dashboard-wrapper .dash-height {\n  height: 309px;\n  overflow-y: auto;\n}\n\n.dashboard-wrapper .meeting-schedule .border-line:last-child, .dashboard-wrapper .announcement .border-line:last-child {\n  border-bottom: unset;\n}\n\n.dashboard-wrapper .announce-round {\n  width: 40px;\n  height: 35px;\n  border-radius: 50%;\n  background-color: #236aaf;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Ftcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VDd0VBLGVBQUE7RUR0RUksY0VxRks7RUZwRkwsaUJBQUE7QUdMTjs7QUhXQztFQUNDLDRCQUFBO0VBQ0EsNkJBQUE7QUdSRjs7QUhXQztFQUNDLDhCQUFBO0FHVEY7O0FIVUU7RUFDQyxhQUFBO0FHUkg7O0FIWUM7RUFDQyw4QkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBR1ZGOztBSFdFO0VBQ0Msa0JBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FHVEg7O0FIV0U7RUFDQywwQkFBQTtBR1RIOztBSFdFO0VBQ0Msd0JBQUE7QUdUSDs7QUhXRTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUdUSDs7QUhXRTtFQUNDLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUdUSDs7QUhhQztFQUNDLGFBQUE7RUFDQSw4QkFBQTtBR1hGOztBSGNDO0VDY0MsZUFBQTtBRXpCRjs7QUhjQztFQ1dDLGlCQUFBO0FFdEJGOztBSGNDO0VDUUMsaUJBQUE7QUVuQkY7O0FIZ0JFO0VDR0EsaUJBQUE7QUVoQkY7O0FIbUJFO0VBQ0MseUJFckRRO0FDb0NYOztBSGtCRztFQ0xELGlCQUFBO0FFVkY7O0FIbUJFO0VBQ0MseUJFL0VZO0FDOERmOztBSHFCQztFQUNDLGNFaEVTO0FDNkNYOztBSHNCQztFQUNDLGNFeEZhO0FDb0VmOztBSHVCQztFQ3RCQyxpQkFBQTtBRUVGOztBSHdCQztFQUNDLGdDQUFBO0FHdEJGOztBSHdCQztFQUNDLGFBQUE7RUFDQSxnQkFBQTtBR3RCRjs7QUh5QkU7RUFDQyxvQkFBQTtBR3ZCSDs7QUgwQkM7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFL0dhO0FDdUZmIiwiZmlsZSI6InNyYy9hcHAvYW1zL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmRhc2hib2FyZC13cmFwcGVyIHtcblx0Lm1lc3NhZ2UtYm94IHtcblx0XHRoNCB7XG5cdFx0ICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbWVkaXVtKTtcblx0XHQgICAgY29sb3I6ICRncmV5LTkwMDtcblx0XHQgICAgbWFyZ2luOiAwIDAgNHB4IDA7XG5cdFx0fVxuXHR9XG59XG5cbi5kYXNoYm9hcmQtd3JhcHBlciB7XG5cdC5jdXN0LXBhZCB7XG5cdFx0cGFkZGluZy1sZWZ0OiA1cHggIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcblx0fVxuXG5cdC5jYXJkIHtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG5cdFx0LmNhcmQtYm9keSB7XG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdH1cblx0fVxuXHRcblx0LmNvbnRlbnQtYXJlYSB7XG5cdFx0dHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpO1xuXHRcdHRyYW5zaXRpb246IDFzO1xuXHRcdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdC5mcm9udCB7XG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG5cdFx0XHR6LWluZGV4OiAyO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHRcdC5mcm9udC5mbGlwLWJrIHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuXHRcdH1cblx0XHQuYmFjay5mbGlwLWZ0IHtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcblx0XHR9XG5cdFx0LmJhY2sge1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0dG9wOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHQuZnJvbnQsIC5iYWNrIHtcblx0XHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblx0XHRcdHRyYW5zaXRpb246IDFzO1xuXHRcdFx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcblx0XHR9XG5cdH1cblx0XG5cdC5hbGlnbi1sZWZ0LXJpZ2h0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXHRcblx0Lmljb24tbGc6YmVmb3JlIHtcblx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LW1lZGl1bS0wNCk7XG5cdH1cblx0Lmljb24tbWQ6OmJlZm9yZSB7XG5cdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuXHR9XG5cdC5pY29uLXNtOjpiZWZvcmUge1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7XG5cdH1cblx0XG5cdC5jYXJkLWZvb3RlciB7XG5cdFx0cCB7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXRpbnkpO1xuXHRcdH1cblx0fVxuXHRcblx0LnNlY29uZC1yb3ctbGF5b3V0IHtcblx0XHQuYmctY2FyZC1ib2R5IHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRkLWN5YW4tMDM7XG5cdFx0XHRwIHtcblx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5iZy1jYXJkLWZvb3RlciB7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ibHVlLTAyO1xuXHRcdH0gXG5cdH1cblxuXHQuY3lhbi1jb2xvciB7XG5cdFx0Y29sb3IgOiAkZC1jeWFuLTAzO1xuXHR9XG5cblx0LmRhcmstYmx1ZSB7XG5cdFx0Y29sb3IgOiAkZGFyay1ibHVlLTAyO1xuXHR9XG5cblx0Lm1vcmUge1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHR9XG5cblx0LmJvcmRlci1saW5lIHtcblx0XHRib3JkZXItYm90dG9tOiAycHggc29saWQgJGdyZXktNjAwO1xuXHR9XG5cdC5kYXNoLWhlaWdodCB7XG5cdFx0aGVpZ2h0OiAzMDlweDtcblx0XHRvdmVyZmxvdy15OiBhdXRvO1xuXHR9XG5cdC5tZWV0aW5nLXNjaGVkdWxlLCAuYW5ub3VuY2VtZW50IHtcblx0XHQuYm9yZGVyLWxpbmU6bGFzdC1jaGlsZCB7XG5cdFx0XHRib3JkZXItYm90dG9tOiB1bnNldDtcblx0XHR9XG5cdH1cblx0LmFubm91bmNlLXJvdW5kIHtcblx0XHR3aWR0aDogNDBweDtcblx0XHRoZWlnaHQ6IDM1cHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWUtMDI7XG5cdH1cbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCIuZGFzaGJvYXJkLXdyYXBwZXIgLm1lc3NhZ2UtYm94IGg0IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogIzE5MWMxZTtcbiAgbWFyZ2luOiAwIDAgNHB4IDA7XG59XG5cbi5kYXNoYm9hcmQtd3JhcHBlciAuY3VzdC1wYWQge1xuICBwYWRkaW5nLWxlZnQ6IDVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuY29udGVudC1hcmVhIHtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMDAwcHgpO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuY29udGVudC1hcmVhIC5mcm9udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB6LWluZGV4OiAyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuY29udGVudC1hcmVhIC5mcm9udC5mbGlwLWJrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG59XG4uZGFzaGJvYXJkLXdyYXBwZXIgLmNvbnRlbnQtYXJlYSAuYmFjay5mbGlwLWZ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5jb250ZW50LWFyZWEgLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuY29udGVudC1hcmVhIC5mcm9udCwgLmRhc2hib2FyZC13cmFwcGVyIC5jb250ZW50LWFyZWEgLmJhY2sge1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDFzO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5hbGlnbi1sZWZ0LXJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5pY29uLWxnOmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuaWNvbi1tZDo6YmVmb3JlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG59XG4uZGFzaGJvYXJkLXdyYXBwZXIgLmljb24tc206OmJlZm9yZSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5jYXJkLWZvb3RlciBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZGFzaGJvYXJkLXdyYXBwZXIgLnNlY29uZC1yb3ctbGF5b3V0IC5iZy1jYXJkLWJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMWZhO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5zZWNvbmQtcm93LWxheW91dCAuYmctY2FyZC1ib2R5IHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuc2Vjb25kLXJvdy1sYXlvdXQgLmJnLWNhcmQtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNmFhZjtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAuY3lhbi1jb2xvciB7XG4gIGNvbG9yOiAjMDBkMWZhO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5kYXJrLWJsdWUge1xuICBjb2xvcjogIzIzNmFhZjtcbn1cbi5kYXNoYm9hcmQtd3JhcHBlciAubW9yZSB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5ib3JkZXItbGluZSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVkZWRlO1xufVxuLmRhc2hib2FyZC13cmFwcGVyIC5kYXNoLWhlaWdodCB7XG4gIGhlaWdodDogMzA5cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uZGFzaGJvYXJkLXdyYXBwZXIgLm1lZXRpbmctc2NoZWR1bGUgLmJvcmRlci1saW5lOmxhc3QtY2hpbGQsIC5kYXNoYm9hcmQtd3JhcHBlciAuYW5ub3VuY2VtZW50IC5ib3JkZXItbGluZTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG59XG4uZGFzaGJvYXJkLXdyYXBwZXIgLmFubm91bmNlLXJvdW5kIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM2YWFmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard.component.ts ***!
    \******************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAmsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shared/date-model/date-model.component */
    "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(userService, sharedService, cookieService, dashboardService, dialog) {
        _classCallCheck(this, DashboardComponent);

        this.userService = userService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dashboardService = dashboardService;
        this.dialog = dialog;
        this.isApartmentSelected = false;
        this.userRole = "";
        this.array4 = [1, 2, 3, 4];
        this.array2 = [1, 2];
        this.colType = "owner";
        this.totalUnits = 0;
        this.totalTowers = 0;
        this.totalOwners = 0;
        this.totalTenants = 0;
        this.totalAdmins = 0;
        this.unAppPenAdmins = 0;
        this.unAppPenUsers = 0;
        this.unAppMoveIn = 0;
        this.unAppMoveOut = 0;
        this.upComMoveIn = 0;
        this.upComMoveOut = 0;
        this.communityTickets = 0;
        this.personalTickets = 0;
        this.hpcommunityTickets = 0;
        this.hppersonalTickets = 0;
        this.unassignedCommunity = 0;
        this.unassignedPersonal = 0;
        this.openCommunityAged = 0;
        this.openPersonalAged = 0;
        this.inprogressPanic = 0;
        this.openPanic = 0;
        this.customerCount = 0;
        this.creditNote = 0;
        this.visitorsOut = 0;
        this.visitorsIn = 0;
        this.visitorsNC = 0;
        this.parkingSlots = 0;
        this.unassignedParking = 0;
        this.facBookingApproved = 0;
        this.facBookingUnApproved = 0;
      }

      _createClass(DashboardComponent, [{
        key: "isAdmin",
        value: function isAdmin() {
          return this.userRole == "Admin" ? true : false;
        }
      }, {
        key: "isSecurity",
        value: function isSecurity() {
          return this.userRole == "Security" ? true : false;
        }
      }, {
        key: "isStaff",
        value: function isStaff() {
          return this.userRole == "Staff" ? true : false;
        }
      }, {
        key: "flip",
        value: function flip(data) {
          var front = data.firstElementChild;
          var back = data.lastElementChild;

          if (front.classList.contains('flip-bk') && back.classList.contains('flip-ft')) {
            front.classList.remove('flip-bk');
            back.classList.remove('flip-ft');
          } else {
            front.classList.add('flip-bk');
            back.classList.add('flip-ft');
          }
        }
      }, {
        key: "calenderPopUp",
        value: function calenderPopUp(type, mode) {
          var _this8 = this;

          var dialogRef = this.dialog.open(_components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_7__["DateModelComponent"], {
            width: '400px',
            height: '175px',
            data: type
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (type == 'pending' && mode == 'admin') {
                _this8.unapprovedUsersAdmin(result);
              } else if (type == 'pending' && mode == 'user') {
                _this8.unapprovedUsersUser(result);
              } else if (type == 'unapprove' && mode == 'movein') {
                _this8.unapprovedMovein(result);
              } else if (type == 'unapprove' && mode == 'moveout') {
                _this8.unapprovedMoveout(result);
              } else if (type == 'upcoming' && mode == 'movein') {
                _this8.upcomingMovein(result);
              } else if (type == 'upcoming' && mode == 'moveout') {
                _this8.upcomingMoveout(result);
              } else if (type == 'tickets' && mode == 'community') {
                _this8.openCommunityTickets(result);
              } else if (type == 'tickets' && mode == 'personal') {
                _this8.openPersonalTickets(result);
              } else if (type == 'highPriority' && mode == 'community') {
                _this8.hpOpenCommunityTickets(result);
              } else if (type == 'highPriority' && mode == 'personal') {
                _this8.hpOpenPersonalTickets(result);
              } else if (type == 'unassigned' && mode == 'community') {
                _this8.unassignedCommunityTickets(result);
              } else if (type == 'unassigned' && mode == 'personal') {
                _this8.unassignedPersonalTickets(result);
              } else if (type == 'openaged' && mode == 'community') {
                _this8.openCommunityAgedTickets(result);
              } else if (type == 'openaged' && mode == 'personal') {
                _this8.openPersonalAgedTickets(result);
              } else if (type == 'panicAlerts' && mode == 'inprogress') {
                _this8.inProgressPanicAlerts(result);
              } else if (type == 'panicAlerts' && mode == 'open') {
                _this8.openPanicAlerts(result);
              } else if (type == 'meeting' && mode == 'schedule') {
                _this8.scheduledMeeting(result);
              } else if (type == 'visitors' && mode == 'checkedIn') {
                _this8.visitorsCheckedIn(result);
              }
            }
          });
        } //First Row

      }, {
        key: "unapprovedUsersAdmin",
        value: function unapprovedUsersAdmin(data) {
          var _this9 = this;

          this.dashboardService.getDashUnapprovedUsersPendingAdminbyApartmentId(data).subscribe(function (res) {
            _this9.unAppPenAdmins = res.unapprovedUsersPendingAdmin;
          });
        }
      }, {
        key: "unapprovedUsersUser",
        value: function unapprovedUsersUser(data) {
          var _this10 = this;

          this.dashboardService.getDashUnapprovedUsersPendingusersbyApartmentId(data).subscribe(function (res) {
            _this10.unAppPenUsers = res.unapprovedPendingusers;
          });
        }
      }, {
        key: "unapprovedMovein",
        value: function unapprovedMovein(entity) {
          var _this11 = this;

          this.dashboardService.getDashunapprovedmoveinbyApartmentId(entity).subscribe(function (res) {
            _this11.unAppMoveIn = res.unapprovedMoveIn;
          });
        }
      }, {
        key: "unapprovedMoveout",
        value: function unapprovedMoveout(entity) {
          var _this12 = this;

          this.dashboardService.getDashunapprovedmoveoutbyApartmentId(entity).subscribe(function (res) {
            _this12.unAppMoveOut = res.unapprovedMoveOut;
          });
        }
      }, {
        key: "upcomingMovein",
        value: function upcomingMovein(entity) {
          var _this13 = this;

          this.dashboardService.getDashupcomingmoveinApartmentId(entity).subscribe(function (res) {
            _this13.upComMoveIn = res.upcomingWeeklyApprovedMoveInCounts;
          });
        }
      }, {
        key: "upcomingMoveout",
        value: function upcomingMoveout(entity) {
          var _this14 = this;

          this.dashboardService.getDashupcomingmoveoutApprovedbyApartmentId(entity).subscribe(function (res) {
            _this14.upComMoveOut = res.upcomingMoveOut;
          });
        } //Second Row

      }, {
        key: "openCommunityTickets",
        value: function openCommunityTickets(entity) {
          var _this15 = this;

          this.dashboardService.getDashOpencommticketsbyApartmentId(entity).subscribe(function (res) {
            _this15.communityTickets = res.openCommunitytickets;
          });
        }
      }, {
        key: "openPersonalTickets",
        value: function openPersonalTickets(entity) {
          var _this16 = this;

          this.dashboardService.getDashOpenpersonalticketsbyApartmentId(entity).subscribe(function (res) {
            _this16.personalTickets = res.openPersonalticket;
          });
        }
      }, {
        key: "hpOpenCommunityTickets",
        value: function hpOpenCommunityTickets(entity) {
          var _this17 = this;

          this.dashboardService.getDashHighpriorityopenCommunityTicketsbyApartmentId(entity).subscribe(function (res) {
            _this17.hpcommunityTickets = res.highPriorityOpenCommunityTicket;
          });
        }
      }, {
        key: "hpOpenPersonalTickets",
        value: function hpOpenPersonalTickets(entity) {
          var _this18 = this;

          this.dashboardService.getDashHighpriorityopenpersonalTicketsbyApartmentId(entity).subscribe(function (res) {
            _this18.hppersonalTickets = res.highPriorityOpenPersonalTicket;
          });
        }
      }, {
        key: "unassignedCommunityTickets",
        value: function unassignedCommunityTickets(entity) {
          var _this19 = this;

          var params = {
            fromDate: entity.date,
            apartmentId: entity.apartmentId
          };
          this.dashboardService.getDashUnassignedCommunityTicketsbyApartmentId(params).subscribe(function (res) {
            _this19.unassignedCommunity = res.unassignedCommunityTickets;
          });
        }
      }, {
        key: "unassignedPersonalTickets",
        value: function unassignedPersonalTickets(entity) {
          var _this20 = this;

          var params = {
            fromDate: entity.date,
            apartmentId: entity.apartmentId
          };
          this.dashboardService.getDashUnassignedpersonalTicketsbyApartmentId(params).subscribe(function (res) {
            _this20.unassignedPersonal = res.unassignedPersonalTickets;
          });
        }
      }, {
        key: "openCommunityAgedTickets",
        value: function openCommunityAgedTickets(entity) {
          var _this21 = this;

          this.dashboardService.getDashOpenCommunityAgedTicketsbyApartmentIDbyDays(entity).subscribe(function (res) {
            _this21.openCommunityAged = res.openCommunityAgedTickets;
          });
        }
      }, {
        key: "openPersonalAgedTickets",
        value: function openPersonalAgedTickets(entity) {
          var _this22 = this;

          this.dashboardService.getDashOpenPersonalAgedTicketsbyApartmentIDbyDays(entity).subscribe(function (res) {
            _this22.openPersonalAged = res.openPersonalAgedTickets;
          });
        } //Fourth Row 

      }, {
        key: "inProgressPanicAlerts",
        value: function inProgressPanicAlerts(entity) {
          var _this23 = this;

          var params = {
            fromDate: entity.date,
            apartmentId: entity.apartmentId
          };
          this.dashboardService.getDashinProgressPanicAlertsbyApartmentId(params).subscribe(function (res) {
            _this23.inprogressPanic = res.inProgressPanicAlerts;
          });
        }
      }, {
        key: "openPanicAlerts",
        value: function openPanicAlerts(entity) {
          var _this24 = this;

          var params = {
            fromDate: entity.date,
            apartmentId: entity.apartmentId
          };
          this.dashboardService.getDashOpenPanicAlertsbyApartmentId(params).subscribe(function (res) {
            _this24.openPanic = res.openPanicAlerts;
          });
        }
      }, {
        key: "paymentCustomerCount",
        value: function paymentCustomerCount() {
          var _this25 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashpaymentdefaultersasoftodayybyApartmentId(params).subscribe(function (res) {
            _this25.customerCount = res.returnDefautlers;
          });
        }
      }, {
        key: "creditNoteApplied",
        value: function creditNoteApplied() {
          var _this26 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashcreditnoteappliedbyApartmentId(params).subscribe(function (res) {
            _this26.creditNote = res.creditNotesCount;
          });
        } //Fiveth Row

      }, {
        key: "scheduledMeeting",
        value: function scheduledMeeting(entity) {
          var _this27 = this;

          this.dashboardService.getDashlistupcomingmeetingbyApartmentId(entity).subscribe(function (res) {
            _this27.meetingList = res;
          });
        } //sixth Row 

      }, {
        key: "visitorsCheckedIn",
        value: function visitorsCheckedIn(entity) {
          var _this28 = this;

          var params = {
            startDate: entity.fromDate,
            EndDate: entity.toDate,
            apartmentId: entity.apartmentId
          };
          this.dashboardService.getDashVisitorsCheckedinbyApartmentId(params).subscribe(function (res) {
            _this28.visitorsIn = res.visitorsCheckIn;
          });
        }
      }, {
        key: "visitorsCheckedOut",
        value: function visitorsCheckedOut() {
          var _this29 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashVisitorsCheckedouttodaybyApartmentId(params).subscribe(function (res) {
            _this29.visitorsOut = res.visitorsCheckedouttoday;
          });
        }
      }, {
        key: "visitorsNotChecked",
        value: function visitorsNotChecked() {
          var _this30 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashVisitorsNotcheckedtodaybyApartmentId(params).subscribe(function (res) {
            _this30.visitorsNC = res.visitorsNotcheckedtoday;
          });
        }
      }, {
        key: "parkingslotsbyApartment",
        value: function parkingslotsbyApartment() {
          var _this31 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashuptotalparkingslotsbyApartmentId(params).subscribe(function (res) {
            _this31.parkingSlots = res.totalParkingSlots;
          });
        }
      }, {
        key: "unassignedParkingslotsbyApartment",
        value: function unassignedParkingslotsbyApartment() {
          var _this32 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashuptotalparkingslotsunassignedbyApartmentId(params).subscribe(function (res) {
            _this32.unassignedParking = res.unassignedParkingSlots;
          });
        }
      }, {
        key: "facilityBookingApproved",
        value: function facilityBookingApproved() {
          var _this33 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashufacilitybookingapprovedtodaybyApartmentId(params).subscribe(function (res) {
            _this33.facBookingApproved = res.approvedfaclitiesTodayCount;
          });
        }
      }, {
        key: "facilityBookingUnApproved",
        value: function facilityBookingUnApproved() {
          var _this34 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.dashboardService.getDashufacilitybookingunapprovedbyApartmentId(params).subscribe(function (res) {
            _this34.facBookingUnApproved = res.unapprovedfaclities;
          });
        }
      }, {
        key: "firstRow",
        value: function firstRow() {
          var _this35 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          var entity = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            fromDate: new Date().toISOString(),
            toDate: new Date().toISOString()
          };
          var data = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            date: new Date().toISOString()
          }; //First Row First Col

          this.dashboardService.getDashTotalunitsbyApartmentId(params).subscribe(function (res) {
            _this35.totalUnits = res.totalUnits;
          });
          this.dashboardService.getDashTotalTowersbyApartmentId(params).subscribe(function (res) {
            _this35.totalTowers = res.totalTowers;
          }); //First Row Second Col

          this.dashboardService.getDashTotalownersbyApartmentId(params).subscribe(function (res) {
            _this35.totalOwners = res.totalOwners;
          });
          this.dashboardService.getDashTotalTenantsbyApartmentId(params).subscribe(function (res) {
            _this35.totalTenants = res.totalTenants;
          });
          this.dashboardService.getDashTotalAdminsbyApartmentId(params).subscribe(function (res) {
            _this35.totalAdmins = res.totalAdmins;
          }); //First Row Third Col
          // this.unapprovedUsersAdmin(entity);
          // this.unapprovedUsersUser(entity);
          // //First Row Fifth Col
          // this.unapprovedMovein(data);
          // this.upcomingMovein(entity);
          // //First Row Sixth Col
          // this.unapprovedMoveout(data);
          // this.upcomingMoveout(entity);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.firstRow();
          this.paymentCustomerCount();
          this.creditNoteApplied();
          this.visitorsCheckedOut();
          this.visitorsNotChecked();
          this.parkingslotsbyApartment();
          this.unassignedParkingslotsbyApartment();
          this.facilityBookingApproved();
          this.facilityBookingUnApproved();
          this.userRole = this.cookieService.get('userRole');
          var params = {
            userid: parseInt(this.cookieService.get('userId'))
          };
          this.userService.getUserById(params).subscribe(function (res) {
            _this36.userName = res[0].firstName;
          }, function (error) {
            console.log(error);
          });
          this.sharedService.apartmentselectedcast.subscribe(function (isSelected) {
            _this36.isApartmentSelected = isSelected;
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_5__["DashBoardService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/ams/dashboard/dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_5__["DashBoardService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/ams/dashboard/dashboard.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/ams/dashboard/dashboard.module.ts ***!
    \***************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppAmsDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/ams/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../.././auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/ams/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/dashboard/admin-dashboard/admin-dashboard.component */
    "./src/app/ams/dashboard/components/dashboard/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _components_dashboard_security_dashboard_security_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/dashboard/security-dashboard/security-dashboard.component */
    "./src/app/ams/dashboard/components/dashboard/security-dashboard/security-dashboard.component.ts");
    /* harmony import */


    var _components_dashboard_staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/dashboard/staff-dashboard/staff-dashboard.component */
    "./src/app/ams/dashboard/components/dashboard/staff-dashboard/staff-dashboard.component.ts");
    /* harmony import */


    var _components_shared_users_chart_users_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/shared/users-chart/users-chart.component */
    "./src/app/ams/dashboard/components/shared/users-chart/users-chart.component.ts");
    /* harmony import */


    var _components_shared_unit_chart_unit_chart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/shared/unit-chart/unit-chart.component */
    "./src/app/ams/dashboard/components/shared/unit-chart/unit-chart.component.ts");
    /* harmony import */


    var _components_shared_helpdesk_chart_helpdesk_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/shared/helpdesk-chart/helpdesk-chart.component */
    "./src/app/ams/dashboard/components/shared/helpdesk-chart/helpdesk-chart.component.ts");
    /* harmony import */


    var _components_shared_visitors_comp_visitors_comp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/shared/visitors-comp/visitors-comp.component */
    "./src/app/ams/dashboard/components/shared/visitors-comp/visitors-comp.component.ts");
    /* harmony import */


    var _components_shared_ledger_comp_ledger_comp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/shared/ledger-comp/ledger-comp.component */
    "./src/app/ams/dashboard/components/shared/ledger-comp/ledger-comp.component.ts");
    /* harmony import */


    var _components_shared_bank_comp_bank_comp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/shared/bank-comp/bank-comp.component */
    "./src/app/ams/dashboard/components/shared/bank-comp/bank-comp.component.ts");
    /* harmony import */


    var _components_shared_income_tracker_comp_income_tracker_comp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/shared/income-tracker-comp/income-tracker-comp.component */
    "./src/app/ams/dashboard/components/shared/income-tracker-comp/income-tracker-comp.component.ts");
    /* harmony import */


    var _components_shared_expense_tracker_comp_expense_tracker_comp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/shared/expense-tracker-comp/expense-tracker-comp.component */
    "./src/app/ams/dashboard/components/shared/expense-tracker-comp/expense-tracker-comp.component.ts");
    /* harmony import */


    var _components_shared_payment_comp_payment_comp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/shared/payment-comp/payment-comp.component */
    "./src/app/ams/dashboard/components/shared/payment-comp/payment-comp.component.ts");
    /* harmony import */


    var src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! src/app/api/controllers/DashBoard */
    "./src/app/api/controllers/DashBoard.ts");
    /* harmony import */


    var _components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/shared/date-model/date-model.component */
    "./src/app/ams/dashboard/components/shared/date-model/date-model.component.ts");
    /* harmony import */


    var _components_shared_dash_pie_chart_dash_pie_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/shared/dash-pie-chart/dash-pie-chart.component */
    "./src/app/ams/dashboard/components/shared/dash-pie-chart/dash-pie-chart.component.ts");
    /* harmony import */


    var _components_shared_dash_income_chart_dash_income_chart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/shared/dash-income-chart/dash-income-chart.component */
    "./src/app/ams/dashboard/components/shared/dash-income-chart/dash-income-chart.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _components_dashboard_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminDashboardComponent"], _components_dashboard_security_dashboard_security_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["SecurityDashboardComponent"], _components_dashboard_staff_dashboard_staff_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["StaffDashboardComponent"], _components_shared_users_chart_users_chart_component__WEBPACK_IMPORTED_MODULE_12__["UsersChartComponent"], _components_shared_unit_chart_unit_chart_component__WEBPACK_IMPORTED_MODULE_13__["UnitChartComponent"], _components_shared_helpdesk_chart_helpdesk_chart_component__WEBPACK_IMPORTED_MODULE_14__["HelpdeskChartComponent"], _components_shared_visitors_comp_visitors_comp_component__WEBPACK_IMPORTED_MODULE_15__["VisitorsCompComponent"], _components_shared_ledger_comp_ledger_comp_component__WEBPACK_IMPORTED_MODULE_16__["LedgerCompComponent"], _components_shared_bank_comp_bank_comp_component__WEBPACK_IMPORTED_MODULE_17__["BankCompComponent"], _components_shared_income_tracker_comp_income_tracker_comp_component__WEBPACK_IMPORTED_MODULE_18__["IncomeTrackerCompComponent"], _components_shared_expense_tracker_comp_expense_tracker_comp_component__WEBPACK_IMPORTED_MODULE_19__["ExpenseTrackerCompComponent"], _components_shared_payment_comp_payment_comp_component__WEBPACK_IMPORTED_MODULE_20__["PaymentCompComponent"], _components_shared_date_model_date_model_component__WEBPACK_IMPORTED_MODULE_22__["DateModelComponent"], _components_shared_dash_pie_chart_dash_pie_chart_component__WEBPACK_IMPORTED_MODULE_23__["DashPieChartComponent"], _components_shared_dash_income_chart_dash_income_chart_component__WEBPACK_IMPORTED_MODULE_24__["DashIncomeChartComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]],
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], src_app_api_controllers_DashBoard__WEBPACK_IMPORTED_MODULE_21__["DashBoardService"]],
      bootstrap: [_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/api/controllers/DashBoard.ts":
  /*!**********************************************!*\
    !*** ./src/app/api/controllers/DashBoard.ts ***!
    \**********************************************/

  /*! exports provided: DashBoardService */

  /***/
  function srcAppApiControllersDashBoardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardService", function () {
      return DashBoardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* tslint:disable:max-line-length */

    /**
     * v1
     * AMS API
     * undefined
     */


    var DashBoardService =
    /*#__PURE__*/
    function () {
      function DashBoardService(http) {
        _classCallCheck(this, DashBoardService);

        this.http = http;
      }
      /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalunitsbyApartmentID */


      _createClass(DashBoardService, [{
        key: "getDashTotalunitsbyApartmentId",
        value: function getDashTotalunitsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                value = _ref2[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalunitsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTowersbyApartmentID */

      }, {
        key: "getDashTotalTowersbyApartmentId",
        value: function getDashTotalTowersbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalTowersbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalownersbyApartmentID */

      }, {
        key: "getDashTotalownersbyApartmentId",
        value: function getDashTotalownersbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalownersbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalTenantsbyApartmentID */

      }, {
        key: "getDashTotalTenantsbyApartmentId",
        value: function getDashTotalTenantsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                key = _ref8[0],
                value = _ref8[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalTenantsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalAdminsbyApartmentID */

      }, {
        key: "getDashTotalAdminsbyApartmentId",
        value: function getDashTotalAdminsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 2),
                key = _ref10[0],
                value = _ref10[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalAdminsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalStaffbyApartmentID */

      }, {
        key: "getDashTotalStaffbyApartmentId",
        value: function getDashTotalStaffbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
                key = _ref12[0],
                value = _ref12[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalStaffbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID */

      }, {
        key: "getDashUnapprovedUsersPendingAdminbyApartmentId",
        value: function getDashUnapprovedUsersPendingAdminbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref13) {
            var _ref14 = _slicedToArray(_ref13, 2),
                key = _ref14[0],
                value = _ref14[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnapprovedUsersPendingAdminbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID */

      }, {
        key: "getDashUnapprovedUsersPendingusersbyApartmentId",
        value: function getDashUnapprovedUsersPendingusersbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref15) {
            var _ref16 = _slicedToArray(_ref15, 2),
                key = _ref16[0],
                value = _ref16[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnapprovedUsersPendingusersbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpencommticketsbyApartmentID */

      }, {
        key: "getDashOpencommticketsbyApartmentId",
        value: function getDashOpencommticketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref17) {
            var _ref18 = _slicedToArray(_ref17, 2),
                key = _ref18[0],
                value = _ref18[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpencommticketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenpersonalticketsbyApartmentID */

      }, {
        key: "getDashOpenpersonalticketsbyApartmentId",
        value: function getDashOpenpersonalticketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref19) {
            var _ref20 = _slicedToArray(_ref19, 2),
                key = _ref20[0],
                value = _ref20[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenpersonalticketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID */

      }, {
        key: "getDashHighpriorityopenpersonalTicketsbyApartmentId",
        value: function getDashHighpriorityopenpersonalTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref21) {
            var _ref22 = _slicedToArray(_ref21, 2),
                key = _ref22[0],
                value = _ref22[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashHighpriorityopenpersonalTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID */

      }, {
        key: "getDashHighpriorityopenCommunityTicketsbyApartmentId",
        value: function getDashHighpriorityopenCommunityTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref23) {
            var _ref24 = _slicedToArray(_ref23, 2),
                key = _ref24[0],
                value = _ref24[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashHighpriorityopenCommunityTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays */

      }, {
        key: "getDashOpenPersonalAgedTicketsbyApartmentIDbyDays",
        value: function getDashOpenPersonalAgedTicketsbyApartmentIDbyDays(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
            noOfDays: params.noOfDays
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref25) {
            var _ref26 = _slicedToArray(_ref25, 2),
                key = _ref26[0],
                value = _ref26[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenPersonalAgedTicketsbyApartmentIDbyDays", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays */

      }, {
        key: "getDashOpenCommunityAgedTicketsbyApartmentIDbyDays",
        value: function getDashOpenCommunityAgedTicketsbyApartmentIDbyDays(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date,
            noOfDays: params.noOfDays
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref27) {
            var _ref28 = _slicedToArray(_ref27, 2),
                key = _ref28[0],
                value = _ref28[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenCommunityAgedTicketsbyApartmentIDbyDays", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID */

      }, {
        key: "getDashUnassignedpersonalTicketsbyApartmentId",
        value: function getDashUnassignedpersonalTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref29) {
            var _ref30 = _slicedToArray(_ref29, 2),
                key = _ref30[0],
                value = _ref30[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnassignedpersonalTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID */

      }, {
        key: "getDashUnassignedCommunityTicketsbyApartmentId",
        value: function getDashUnassignedCommunityTicketsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref31) {
            var _ref32 = _slicedToArray(_ref31, 2),
                key = _ref32[0],
                value = _ref32[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashUnassignedCommunityTicketsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashinProgressPanicAlertsbyApartmentID */

      }, {
        key: "getDashinProgressPanicAlertsbyApartmentId",
        value: function getDashinProgressPanicAlertsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref33) {
            var _ref34 = _slicedToArray(_ref33, 2),
                key = _ref34[0],
                value = _ref34[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashinProgressPanicAlertsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashOpenPanicAlertsbyApartmentID */

      }, {
        key: "getDashOpenPanicAlertsbyApartmentId",
        value: function getDashOpenPanicAlertsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref35) {
            var _ref36 = _slicedToArray(_ref35, 2),
                key = _ref36[0],
                value = _ref36[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashOpenPanicAlertsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedinbyApartmentID */

      }, {
        key: "getDashVisitorsCheckedinbyApartmentId",
        value: function getDashVisitorsCheckedinbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            startDate: params.startDate,
            EndDate: params.EndDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref37) {
            var _ref38 = _slicedToArray(_ref37, 2),
                key = _ref38[0],
                value = _ref38[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashVisitorsCheckedinbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID */

      }, {
        key: "getDashVisitorsCheckedouttodaybyApartmentId",
        value: function getDashVisitorsCheckedouttodaybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref39) {
            var _ref40 = _slicedToArray(_ref39, 2),
                key = _ref40[0],
                value = _ref40[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashVisitorsCheckedouttodaybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID */

      }, {
        key: "getDashVisitorsNotcheckedtodaybyApartmentId",
        value: function getDashVisitorsNotcheckedtodaybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref41) {
            var _ref42 = _slicedToArray(_ref41, 2),
                key = _ref42[0],
                value = _ref42[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashVisitorsNotcheckedtodaybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveinbyApartmentID */

      }, {
        key: "getDashunapprovedmoveinbyApartmentId",
        value: function getDashunapprovedmoveinbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref43) {
            var _ref44 = _slicedToArray(_ref43, 2),
                key = _ref44[0],
                value = _ref44[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashunapprovedmoveinbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashunapprovedmoveoutbyApartmentID */

      }, {
        key: "getDashunapprovedmoveoutbyApartmentId",
        value: function getDashunapprovedmoveoutbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            date: params.date
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref45) {
            var _ref46 = _slicedToArray(_ref45, 2),
                key = _ref46[0],
                value = _ref46[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashunapprovedmoveoutbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveinApartmentID */

      }, {
        key: "getDashupcomingmoveinApartmentId",
        value: function getDashupcomingmoveinApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref47) {
            var _ref48 = _slicedToArray(_ref47, 2),
                key = _ref48[0],
                value = _ref48[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashupcomingmoveinApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID */

      }, {
        key: "getDashupcomingmoveoutApprovedbyApartmentId",
        value: function getDashupcomingmoveoutApprovedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref49) {
            var _ref50 = _slicedToArray(_ref49, 2),
                key = _ref50[0],
                value = _ref50[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashupcomingmoveoutApprovedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsbyApartmentID */

      }, {
        key: "getDashuptotalparkingslotsbyApartmentId",
        value: function getDashuptotalparkingslotsbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref51) {
            var _ref52 = _slicedToArray(_ref51, 2),
                key = _ref52[0],
                value = _ref52[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashuptotalparkingslotsbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID */

      }, {
        key: "getDashuptotalparkingslotsunassignedbyApartmentId",
        value: function getDashuptotalparkingslotsunassignedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref53) {
            var _ref54 = _slicedToArray(_ref53, 2),
                key = _ref54[0],
                value = _ref54[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashuptotalparkingslotsunassignedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID */

      }, {
        key: "getDashufacilitybookingunapprovedbyApartmentId",
        value: function getDashufacilitybookingunapprovedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref55) {
            var _ref56 = _slicedToArray(_ref55, 2),
                key = _ref56[0],
                value = _ref56[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashufacilitybookingunapprovedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID */

      }, {
        key: "getDashufacilitybookingapprovedtodaybyApartmentId",
        value: function getDashufacilitybookingapprovedtodaybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref57) {
            var _ref58 = _slicedToArray(_ref57, 2),
                key = _ref58[0],
                value = _ref58[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashufacilitybookingapprovedtodaybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistupcomingmeetingbyApartmentID */

      }, {
        key: "getDashlistupcomingmeetingbyApartmentId",
        value: function getDashlistupcomingmeetingbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref59) {
            var _ref60 = _slicedToArray(_ref59, 2),
                key = _ref60[0],
                value = _ref60[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashlistupcomingmeetingbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashlistBroadcastsentbyApartmentID */

      }, {
        key: "getDashlistBroadcastsentbyApartmentId",
        value: function getDashlistBroadcastsentbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            fromDate: params.fromDate,
            toDate: params.toDate
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref61) {
            var _ref62 = _slicedToArray(_ref61, 2),
                key = _ref62[0],
                value = _ref62[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashlistBroadcastsentbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID */

      }, {
        key: "getDashTotalamtbilledcustomersthismonthbyApartmentId",
        value: function getDashTotalamtbilledcustomersthismonthbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref63) {
            var _ref64 = _slicedToArray(_ref63, 2),
                key = _ref64[0],
                value = _ref64[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalamtbilledcustomersthismonthbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID */

      }, {
        key: "getDashTotalamtreceivedcustomersthismonthbyApartmentId",
        value: function getDashTotalamtreceivedcustomersthismonthbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref65) {
            var _ref66 = _slicedToArray(_ref65, 2),
                key = _ref66[0],
                value = _ref66[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashTotalamtreceivedcustomersthismonthbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID */

      }, {
        key: "getDashpaymentdefaultersasoftodayybyApartmentId",
        value: function getDashpaymentdefaultersasoftodayybyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref67) {
            var _ref68 = _slicedToArray(_ref67, 2),
                key = _ref68[0],
                value = _ref68[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashpaymentdefaultersasoftodayybyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashcreditnoteappliedbyApartmentID */

      }, {
        key: "getDashcreditnoteappliedbyApartmentId",
        value: function getDashcreditnoteappliedbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref69) {
            var _ref70 = _slicedToArray(_ref69, 2),
                key = _ref70[0],
                value = _ref70[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashcreditnoteappliedbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPapprovalpendingbyApartmentID */

      }, {
        key: "getDashWPapprovalpendingbyApartmentId",
        value: function getDashWPapprovalpendingbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref71) {
            var _ref72 = _slicedToArray(_ref71, 2),
                key = _ref72[0],
                value = _ref72[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashWPapprovalpendingbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetDashWPupcomingbyApartmentID */

      }, {
        key: "getDashWPupcomingbyApartmentId",
        value: function getDashWPupcomingbyApartmentId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref73) {
            var _ref74 = _slicedToArray(_ref73, 2),
                key = _ref74[0],
                value = _ref74[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetDashWPupcomingbyApartmentID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/getUDashVehiclecountbyblockunituser */

      }, {
        key: "getUDashVehiclecountbyblockunituser",
        value: function getUDashVehiclecountbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref75) {
            var _ref76 = _slicedToArray(_ref75, 2),
                key = _ref76[0],
                value = _ref76[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/getUDashVehiclecountbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalpetstbyblockunituser */

      }, {
        key: "getUDashTotalpetstbyblockunituser",
        value: function getUDashTotalpetstbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref77) {
            var _ref78 = _slicedToArray(_ref77, 2),
                key = _ref78[0],
                value = _ref78[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashTotalpetstbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashPrivateStaffbyblockunituser */

      }, {
        key: "getUDashPrivateStaffbyblockunituser",
        value: function getUDashPrivateStaffbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref79) {
            var _ref80 = _slicedToArray(_ref79, 2),
                key = _ref80[0],
                value = _ref80[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashPrivateStaffbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituser */

      }, {
        key: "getUDashOpenticektsbyblockunituser",
        value: function getUDashOpenticektsbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref81) {
            var _ref82 = _slicedToArray(_ref81, 2),
                key = _ref82[0],
                value = _ref82[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashOpenticektsbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority */

      }, {
        key: "getUDashOpenticektsbyblockunituserTicketpriority",
        value: function getUDashOpenticektsbyblockunituserTicketpriority(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockunituserId: params.blockunituserId,
            priority: params.priority
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref83) {
            var _ref84 = _slicedToArray(_ref83, 2),
                key = _ref84[0],
                value = _ref84[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashOpenticektsbyblockunituserTicketpriority", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorcheckedinbyblockunituser */

      }, {
        key: "getUDashVisitorcheckedinbyblockunituser",
        value: function getUDashVisitorcheckedinbyblockunituser(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            startDate: params.startDate,
            EndDate: params.EndDate,
            blockUnitUserId: params.blockUnitUserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref85) {
            var _ref86 = _slicedToArray(_ref85, 2),
                key = _ref86[0],
                value = _ref86[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashVisitorcheckedinbyblockunituser", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID */

      }, {
        key: "getUDashVisitorNoTcheckeddoubyblockunitId",
        value: function getUDashVisitorNoTcheckeddoubyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            blockUnitUserId: params.blockUnitUserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref87) {
            var _ref88 = _slicedToArray(_ref87, 2),
                key = _ref88[0],
                value = _ref88[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashVisitorNOTcheckeddoubyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashTotalparkingbyblockunitID */

      }, {
        key: "getUDashTotalparkingbyblockunitId",
        value: function getUDashTotalparkingbyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitId: params.blockUnitId,
            blockUnitUserId: params.blockUnitUserId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref89) {
            var _ref90 = _slicedToArray(_ref89, 2),
                key = _ref90[0],
                value = _ref90[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashTotalparkingbyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDapprovedfacilittbookingbyblockunitID */

      }, {
        key: "getUDapprovedfacilittbookingbyblockunitId",
        value: function getUDapprovedfacilittbookingbyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref91) {
            var _ref92 = _slicedToArray(_ref91, 2),
                key = _ref92[0],
                value = _ref92[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDapprovedfacilittbookingbyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashWaterunitsbyblockunitID */

      }, {
        key: "getUDashWaterunitsbyblockunitId",
        value: function getUDashWaterunitsbyblockunitId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref93) {
            var _ref94 = _slicedToArray(_ref93, 2),
                key = _ref94[0],
                value = _ref94[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashWaterunitsbyblockunitID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashCurrentViolationsbyblockunituserID */

      }, {
        key: "getUDashCurrentViolationsbyblockunituserId",
        value: function getUDashCurrentViolationsbyblockunituserId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref95) {
            var _ref96 = _slicedToArray(_ref95, 2),
                key = _ref96[0],
                value = _ref96[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashCurrentViolationsbyblockunituserID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetUDashActiveWorkpermitbyblockunituserID */

      }, {
        key: "getUDashActiveWorkpermitbyblockunituserId",
        value: function getUDashActiveWorkpermitbyblockunituserId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            blockUnitUserID: params.blockUnitUserID,
            BlockUnitId: params.BlockUnitId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref97) {
            var _ref98 = _slicedToArray(_ref97, 2),
                key = _ref98[0],
                value = _ref98[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetUDashActiveWorkpermitbyblockunituserID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetVehicleNumberbyStaffID */

      }, {
        key: "getVehicleNumberbyStaffId",
        value: function getVehicleNumberbyStaffId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref99) {
            var _ref100 = _slicedToArray(_ref99, 2),
                key = _ref100[0],
                value = _ref100[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetVehicleNumberbyStaffID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetTicketsassignedtouserbyUserID */

      }, {
        key: "getTicketsassignedtouserbyUserId",
        value: function getTicketsassignedtouserbyUserId(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            UserID: params.UserID,
            TicketType: params.TicketType,
            Priority: params.Priority
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref101) {
            var _ref102 = _slicedToArray(_ref101, 2),
                key = _ref102[0],
                value = _ref102[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetTicketsassignedtouserbyUserID", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getassetsowned */

      }, {
        key: "getassetsowned",
        value: function getassetsowned(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref103) {
            var _ref104 = _slicedToArray(_ref103, 2),
                key = _ref104[0],
                value = _ref104[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/Getassetsowned", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetAssetsassignedformaintenance */

      }, {
        key: "getAssetsassignedformaintenance",
        value: function getAssetsassignedformaintenance(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref105) {
            var _ref106 = _slicedToArray(_ref105, 2),
                key = _ref106[0],
                value = _ref106[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetAssetsassignedformaintenance", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetLowinventorystock */

      }, {
        key: "getLowinventorystock",
        value: function getLowinventorystock(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref107) {
            var _ref108 = _slicedToArray(_ref107, 2),
                key = _ref108[0],
                value = _ref108[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetLowinventorystock", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/Getfacilityeventstoday */

      }, {
        key: "getfacilityeventstoday",
        value: function getfacilityeventstoday(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref109) {
            var _ref110 = _slicedToArray(_ref109, 2),
                key = _ref110[0],
                value = _ref110[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/Getfacilityeventstoday", {
            params: queryParams
          });
        }
        /** http://undefined/swagger/swagger-ui.html#!/DashBoard/GetStaffSalary */

      }, {
        key: "getStaffSalary",
        value: function getStaffSalary(params) {
          var queryParamBase = {
            apartmentId: params.apartmentId,
            staffId: params.staffId
          };
          var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          Object.entries(queryParamBase).forEach(function (_ref111) {
            var _ref112 = _slicedToArray(_ref111, 2),
                key = _ref112[0],
                value = _ref112[1];

            if (value !== undefined) {
              if (typeof value === 'string') queryParams = queryParams.set(key, value);else if (Array.isArray(value)) value.forEach(function (v) {
                return queryParams = queryParams.append(key, v);
              });else queryParams = queryParams.set(key, JSON.stringify(value));
            }
          });
          return this.http.get("/api/DashBoard/GetStaffSalary", {
            params: queryParams
          });
        }
      }]);

      return DashBoardService;
    }();

    DashBoardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DashBoardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DashBoardService);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map