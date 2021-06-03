(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.html":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsFacilityFacilityReportFacilityReportsFacilityReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n  <div class=\"main\">\n<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n<ng-container *ngIf=\"isDataLoaded\">\n\n  <h4 class=\"mb-4\">{{'FACILITY.REPORTS.TITLE' | translate}}</h4>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 mb-4\" *ngFor=\"let report of reportDataList; let i = index\"> \n\n        <condo-card>\n\n            <div CondoCardHeader>\n              <a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"/ams/facility/reports/{{report.lookupValueName}}/{{report.lookupValueId}}\"\n               routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n            \n                <h6>{{report.lookupValueName}}</h6>\n                <p>{{report.description}}</p>\n            \n              </a>\n            </div>\n            <div CondoCardBody>\n              <div class=\"p-4 bg-cool-gray-50\"></div>\n            </div>\n  \n          </condo-card>\n          \n        </div>\n    </div>\n\n\n</ng-container>\n\n</div>\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-report.component.html":
    /*!***************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-report.component.html ***!
      \***************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesCommonVisitorVisitorReportVisitorReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"visitor-report-wrapper\">\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<h4 class=\"mb-4\">{{'VISITOR.REPORTS.TITLE' | translate}} </h4>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\n\t\t\t\t\t<condo-card>\n\n\t\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"/ams/visitor/reports/{{getReportName(report.lookupValueName)}}/{{report.lookupValueID}}\"\n\t\t\t\t\t\t\t routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t\t<div class=\"p-4 bg-cool-gray-50\"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</condo-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/facility/facility-report/facility-report-routing.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/ams/facility/facility-report/facility-report-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: FacilityReportRoutingModule */

    /***/
    function srcAppModulesAmsFacilityFacilityReportFacilityReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacilityReportRoutingModule", function () {
        return FacilityReportRoutingModule;
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


      var _facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./facility-reports/facility-reports.component */
      "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts");
      /* harmony import */


      var _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./facility-reports/facility-report-data/facility-report-data.component */
      "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts");
      /* harmony import */


      var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/auth/guards/auth.guard */
      "./src/app/core/auth/guards/auth.guard.ts");

      var routes = [{
        path: '',
        component: _facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__["FacilityReportsComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: ':name/:id',
        component: _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_4__["FacilityReportDataComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }];

      var FacilityReportRoutingModule = function FacilityReportRoutingModule() {
        _classCallCheck(this, FacilityReportRoutingModule);
      };

      FacilityReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FacilityReportRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/facility/facility-report/facility-report.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/ams/facility/facility-report/facility-report.module.ts ***!
      \********************************************************************************/

    /*! exports provided: FacilityReportModule */

    /***/
    function srcAppModulesAmsFacilityFacilityReportFacilityReportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacilityReportModule", function () {
        return FacilityReportModule;
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var _facility_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./facility-report-routing.module */
      "./src/app/modules/ams/facility/facility-report/facility-report-routing.module.ts");
      /* harmony import */


      var _facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./facility-reports/facility-reports.component */
      "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts");
      /* harmony import */


      var _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./facility-reports/facility-report-data/facility-report-data.component */
      "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts");
      /* harmony import */


      var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/ui/list/list.module */
      "./src/app/modules/ui/list/list.module.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var FacilityReportModule = function FacilityReportModule() {
        _classCallCheck(this, FacilityReportModule);
      };

      FacilityReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__["FacilityReportsComponent"], _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_8__["FacilityReportDataComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_9__["ListModule"], _facility_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["FacilityReportRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
      })], FacilityReportModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.scss":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.scss ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsFacilityFacilityReportFacilityReportsFacilityReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LXJlcG9ydC9mYWNpbGl0eS1yZXBvcnRzL2ZhY2lsaXR5LXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: FacilityReportsComponent */

    /***/
    function srcAppModulesAmsFacilityFacilityReportFacilityReportsFacilityReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FacilityReportsComponent", function () {
        return FacilityReportsComponent;
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


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");

      var FacilityReportsComponent = /*#__PURE__*/function () {
        function FacilityReportsComponent(sessionService, lookupService) {
          _classCallCheck(this, FacilityReportsComponent);

          this.sessionService = sessionService;
          this.lookupService = lookupService;
          this.isDataLoaded = false;
        }

        _createClass(FacilityReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reportDataList = [{
              lookupValueId: 'electricity',
              lookupValueName: 'List of Facilities Booking count',
              description: 'Provided the overall list of facilities in the condo',
              type: 'customer'
            }, {
              lookupValueId: 'water',
              lookupValueName: 'List of Booked Facilities',
              description: 'Provides the list of Booked facilities',
              type: 'customer'
            }, {
              lookupValueId: 'insurance',
              lookupValueName: 'Facility booking, approval pending',
              description: 'Provides the list of Approved Bookings',
              type: 'customer'
            }, {
              lookupValueId: 'insurance',
              lookupValueName: 'Facility booking, Rejected',
              description: 'Provides list of Rejected Bookings',
              type: 'customer'
            }, {
              lookupValueId: 'insurance',
              lookupValueName: 'List of cancelled booking',
              description: 'Provides the list of Cancelled Bookings',
              type: 'customer'
            }];
            this.isDataLoaded = true; //  let details = {
            //   LookupTypeId: 87, //lookuptypeid for report
            //   MenuName: 'VisitorManagement'
            // }
            // this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res:any) => {
            //   this.reportDataList = res;
            //   this.isDataLoaded = true;
            // })
          }
        }]);

        return FacilityReportsComponent;
      }();

      FacilityReportsComponent.ctorParameters = function () {
        return [{
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }];
      };

      FacilityReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./facility-reports.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./facility-reports.component.scss */
        "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]])], FacilityReportsComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/staff-manager/staff-setup/staff-setup.service.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/ams/staff-manager/staff-setup/staff-setup.service.ts ***!
      \******************************************************************************/

    /*! exports provided: StaffSetupService */

    /***/
    function srcAppModulesAmsStaffManagerStaffSetupStaffSetupServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StaffSetupService", function () {
        return StaffSetupService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var StaffSetupService = /*#__PURE__*/function () {
        function StaffSetupService() {
          _classCallCheck(this, StaffSetupService);

          this.staffSetupMatDrawer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.staffsetupmatdrawercast = this.staffSetupMatDrawer.asObservable();
          this.staffSetupEntryRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.staffsetupentryrefreshcast = this.staffSetupEntryRefresh.asObservable();
        }

        _createClass(StaffSetupService, [{
          key: "getStaffSetupMatDrawer",
          value: function getStaffSetupMatDrawer() {
            return this.staffSetupMatDrawer.value;
          }
        }, {
          key: "setStaffSetupMatDrawer",
          value: function setStaffSetupMatDrawer(value) {
            this.staffSetupMatDrawer.next(value);
          }
        }, {
          key: "getStaffetupEntryRefresh",
          value: function getStaffetupEntryRefresh() {
            return this.staffSetupEntryRefresh.value;
          }
        }, {
          key: "setStaffSetupEntryRefresh",
          value: function setStaffSetupEntryRefresh(value) {
            this.staffSetupEntryRefresh.next(value);
          }
        }]);

        return StaffSetupService;
      }();

      StaffSetupService.ctorParameters = function () {
        return [];
      };

      StaffSetupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaffSetupService);
      /***/
    },

    /***/
    "./src/app/modules/collective/add-lookup/add-lookup.service.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/modules/collective/add-lookup/add-lookup.service.ts ***!
      \*********************************************************************/

    /*! exports provided: AddLookupService */

    /***/
    function srcAppModulesCollectiveAddLookupAddLookupServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddLookupService", function () {
        return AddLookupService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var AddLookupService = /*#__PURE__*/function () {
        function AddLookupService() {
          _classCallCheck(this, AddLookupService);

          this.addLookupMatDrawer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.addlookupmatdrawercast = this.addLookupMatDrawer.asObservable();
          this.addLookupEntryRefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.addlookupentryrefreshcast = this.addLookupEntryRefresh.asObservable();
          this.addLookupOpenMatDrawer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
          this.addlookupopenmatdrawercast = this.addLookupOpenMatDrawer.asObservable();
        }

        _createClass(AddLookupService, [{
          key: "getAddLookupMatDrawer",
          value: function getAddLookupMatDrawer() {
            return this.addLookupMatDrawer.value;
          }
        }, {
          key: "setAddLookupMatDrawer",
          value: function setAddLookupMatDrawer(value) {
            this.addLookupMatDrawer.next(value);
          }
        }, {
          key: "getAddLookupEntryRefresh",
          value: function getAddLookupEntryRefresh() {
            return this.addLookupEntryRefresh.value;
          }
        }, {
          key: "setAddLookupEntryRefresh",
          value: function setAddLookupEntryRefresh(value) {
            this.addLookupEntryRefresh.next(value);
          }
        }, {
          key: "getAddLookupOpenMatDrawer",
          value: function getAddLookupOpenMatDrawer() {
            return this.addLookupOpenMatDrawer.value;
          }
        }, {
          key: "setAddLookupOpenMatDrawer",
          value: function setAddLookupOpenMatDrawer(value) {
            this.addLookupOpenMatDrawer.next(value);
          }
        }]);

        return AddLookupService;
      }();

      AddLookupService.ctorParameters = function () {
        return [];
      };

      AddLookupService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AddLookupService);
      /***/
    },

    /***/
    "./src/app/modules/collective/add-lookup/data.ts":
    /*!*******************************************************!*\
      !*** ./src/app/modules/collective/add-lookup/data.ts ***!
      \*******************************************************/

    /*! exports provided: types */

    /***/
    function srcAppModulesCollectiveAddLookupDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "types", function () {
        return types;
      });

      var types = [{
        "label": "category",
        "lookuptypeId": 19,
        "subcategorylookuptypeid": 68,
        "title": "Asset Category",
        "select": "Select Asset",
        "add": "Asset added successfully",
        "update": "Asset updated successfully",
        "error": "Asset already exists",
        "delete": "Asset deleted successfully",
        "path": "/ams/assets/settings/list/category",
        "subcategory": true
      }, {
        "label": "maintenance-types",
        "lookuptypeId": 167,
        "subcategorylookuptypeid": 168,
        "title": "Asset Maintenance Types",
        "select": "Select Maintenance Type",
        "add": "Asset added successfully",
        "update": "Maintenance updated successfully",
        "error": "Maintenance already exists",
        "delete": "Maintenance deleted successfully",
        "path": "/ams/assets/settings/list/maintenance-types",
        "subcategory": true
      }, {
        "label": "inventory",
        "lookuptypeId": 174,
        "subcategorylookuptypeid": 175,
        "title": "Inventory",
        "select": "Select Inventory",
        "add": "Inventory added successfully",
        "update": "Inventory updated successfully",
        "error": "Inventory already exists",
        "delete": "Inventory deleted successfully",
        "path": "/ams/inventory/settings/list/category",
        "subcategory": true
      }, {
        "label": "associate-staff",
        "lookuptypeId": 204,
        "subcategorylookuptypeid": 26,
        "title": "Department",
        "select": "Select Department",
        "add": "Job Title added successfully",
        "update": "Job Title updated successfully",
        "error": "Job Title already exists",
        "delete": "Job Title deleted successfully",
        "path": "/ams/staff/settings/list/department",
        "subcategory": true
      }, {
        "label": "personal-staff",
        "lookuptypeId": 204,
        "subcategorylookuptypeid": null,
        "title": "Department",
        "select": "Select Department",
        "add": "Personal Staff added successfully",
        "update": "Personal Staff updated successfully",
        "error": "Personal Staff already exists",
        "delete": "Personal Staff deleted successfully",
        "path": "/ams/staff/settings/list/personal",
        "subcategory": false
      }, {
        "label": "violation-category",
        "lookuptypeId": 78,
        "subcategorylookuptypeid": null,
        "title": "Violation Category",
        "select": "Select Department",
        "add": "Violation category added successfully",
        "update": "Violation category updated successfully",
        "error": "Violation already exists",
        "delete": "Violation category deleted successfully",
        "path": "/ams/violation/setup/list/category",
        "subcategory": false
      }, {
        "label": "package-type",
        "lookuptypeId": 169,
        "subcategorylookuptypeid": null,
        "title": "Package Type",
        "select": "Select Package",
        "add": "Package Type added successfully",
        "update": "Package Type updated successfully",
        "error": "Package Type already exists",
        "delete": "Package Type deleted successfully",
        "path": "/ams/parcel-delivery/setup/list/package-type",
        "subcategory": false
      }, {
        "label": "delivery-type",
        "lookuptypeId": 170,
        "subcategorylookuptypeid": null,
        "title": "Delivery Type",
        "select": "Select Delivery",
        "add": "Delivery Type added successfully",
        "update": "Delivery Type updated successfully",
        "error": "Delivery Type already exists",
        "delete": "Delivery Type deleted successfully",
        "path": "/ams/parcel-delivery/setup/list/delivery-type",
        "subcategory": false
      }, {
        "label": "parcel-slot-type",
        "lookuptypeId": 172,
        "subcategorylookuptypeid": null,
        "title": "Slot",
        "select": "Select Slot",
        "add": "Slot added successfully",
        "update": "Slot updated successfully",
        "error": "Slot already exists",
        "delete": "Slot deleted successfully",
        "path": "/ams/parcel-delivery/setup/list/parcel-slot-type",
        "subcategory": false
      }];
      /***/
    },

    /***/
    "./src/app/modules/common/visitor/visitor-report/visitor-report-routing.module.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/common/visitor/visitor-report/visitor-report-routing.module.ts ***!
      \****************************************************************************************/

    /*! exports provided: VisitorReportRoutingModule */

    /***/
    function srcAppModulesCommonVisitorVisitorReportVisitorReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorReportRoutingModule", function () {
        return VisitorReportRoutingModule;
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


      var _visitor_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visitor-report.component */
      "./src/app/modules/common/visitor/visitor-report/visitor-report.component.ts");
      /* harmony import */


      var _visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./visitor-reports-data/visitor-reports-data.component */
      "./src/app/modules/common/visitor/visitor-report/visitor-reports-data/visitor-reports-data.component.ts");
      /* harmony import */


      var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/auth/guards/auth.guard */
      "./src/app/core/auth/guards/auth.guard.ts");

      var routes = [{
        path: '',
        component: _visitor_report_component__WEBPACK_IMPORTED_MODULE_3__["VisitorReportComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }, {
        path: ':name/:id',
        component: _visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_4__["VisitorReportsDataComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
      }];

      var VisitorReportRoutingModule = function VisitorReportRoutingModule() {
        _classCallCheck(this, VisitorReportRoutingModule);
      };

      VisitorReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitorReportRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/common/visitor/visitor-report/visitor-report.component.scss":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/common/visitor/visitor-report/visitor-report.component.scss ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesCommonVisitorVisitorReportVisitorReportComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL3Zpc2l0b3IvdmlzaXRvci1yZXBvcnQvdmlzaXRvci1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/common/visitor/visitor-report/visitor-report.component.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/common/visitor/visitor-report/visitor-report.component.ts ***!
      \***********************************************************************************/

    /*! exports provided: VisitorReportComponent */

    /***/
    function srcAppModulesCommonVisitorVisitorReportVisitorReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorReportComponent", function () {
        return VisitorReportComponent;
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


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");

      var VisitorReportComponent = /*#__PURE__*/function () {
        function VisitorReportComponent(lookupService) {
          _classCallCheck(this, VisitorReportComponent);

          this.lookupService = lookupService;
          this.isDataLoaded = false;
        }

        _createClass(VisitorReportComponent, [{
          key: "getReportName",
          value: function getReportName(name) {
            return name.replace(/\s+/g, '-').toLowerCase();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var details = {
              LookupTypeId: 87,
              MenuName: 'VisitorManagement'
            };
            this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
              _this.reportDataList = res;
              _this.isDataLoaded = true;
            });
          }
        }]);

        return VisitorReportComponent;
      }();

      VisitorReportComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
        }];
      };

      VisitorReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-report.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-report.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-report.component.scss */
        "./src/app/modules/common/visitor/visitor-report/visitor-report.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]])], VisitorReportComponent);
      /***/
    },

    /***/
    "./src/app/modules/common/visitor/visitor-report/visitor-report.module.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/common/visitor/visitor-report/visitor-report.module.ts ***!
      \********************************************************************************/

    /*! exports provided: VisitorReportModule */

    /***/
    function srcAppModulesCommonVisitorVisitorReportVisitorReportModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorReportModule", function () {
        return VisitorReportModule;
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/list/list.module */
      "./src/app/modules/ui/list/list.module.ts");
      /* harmony import */


      var src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/ui/datepicker/datepicker.module */
      "./src/app/modules/ui/datepicker/datepicker.module.ts");
      /* harmony import */


      var _visitor_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./visitor-report.component */
      "./src/app/modules/common/visitor/visitor-report/visitor-report.component.ts");
      /* harmony import */


      var _visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./visitor-reports-data/visitor-reports-data.component */
      "./src/app/modules/common/visitor/visitor-report/visitor-reports-data/visitor-reports-data.component.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _visitor_report_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./visitor-report-routing.module */
      "./src/app/modules/common/visitor/visitor-report/visitor-report-routing.module.ts");

      var VisitorReportModule = function VisitorReportModule() {
        _classCallCheck(this, VisitorReportModule);
      };

      VisitorReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_visitor_report_component__WEBPACK_IMPORTED_MODULE_8__["VisitorReportComponent"], _visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_9__["VisitorReportsDataComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"], src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"], src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"].forRoot(), _visitor_report_routing_module__WEBPACK_IMPORTED_MODULE_11__["VisitorReportRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
      })], VisitorReportModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map