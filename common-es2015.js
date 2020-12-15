(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n  <div class=\"main\">\n<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n<ng-container *ngIf=\"isDataLoaded\">\n\n  <h4 class=\"mb-4\"> Facility Reports</h4>\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 mb-4\" *ngFor=\"let report of reportDataList; let i = index\"> \n\n        <condo-card>\n\n            <div CondoCardHeader>\n              <a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"/ams/facility/reports/{{report.lookupValueName}}/{{report.lookupValueId}}\"\n               routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n            \n                <h6>{{report.lookupValueName}}</h6>\n                <p>{{report.description}}</p>\n            \n              </a>\n            </div>\n            <div CondoCardBody>\n              <div class=\"p-4 bg-cool-gray-50\"></div>\n            </div>\n  \n          </condo-card>\n          \n        </div>\n    </div>\n\n\n</ng-container>\n\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<h4 class=\"mb-4\">Visitor Management Reports </h4>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\n\t\t\t\t\t<condo-card>\n\n\t\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"/ams/visitor/reports/{{report.lookupValueName}}/{{report.lookupValueID}}\"\n\t\t\t\t\t\t\t routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t\t<div class=\"p-4 bg-cool-gray-50\"></div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</condo-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\t</div>\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-report/facility-report-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-report-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: FacilityReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityReportRoutingModule", function() { return FacilityReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facility-reports/facility-reports.component */ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts");
/* harmony import */ var _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facility-reports/facility-report-data/facility-report-data.component */ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");






const routes = [
    { path: '', component: _facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__["FacilityReportsComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: ':name/:id', component: _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_4__["FacilityReportDataComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
];
let FacilityReportRoutingModule = class FacilityReportRoutingModule {
};
FacilityReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FacilityReportRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-report/facility-report.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-report.module.ts ***!
  \********************************************************************************/
/*! exports provided: FacilityReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityReportModule", function() { return FacilityReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var _facility_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facility-report-routing.module */ "./src/app/modules/ams/facility/facility-report/facility-report-routing.module.ts");
/* harmony import */ var _facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facility-reports/facility-reports.component */ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts");
/* harmony import */ var _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./facility-reports/facility-report-data/facility-report-data.component */ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts");
/* harmony import */ var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/ui/list/list.module */ "./src/app/modules/ui/list/list.module.ts");










let FacilityReportModule = class FacilityReportModule {
};
FacilityReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__["FacilityReportsComponent"],
            _facility_reports_facility_report_data_facility_report_data_component__WEBPACK_IMPORTED_MODULE_8__["FacilityReportDataComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_9__["ListModule"],
            _facility_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["FacilityReportRoutingModule"]
        ]
    })
], FacilityReportModule);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LXJlcG9ydC9mYWNpbGl0eS1yZXBvcnRzL2ZhY2lsaXR5LXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FacilityReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityReportsComponent", function() { return FacilityReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");




let FacilityReportsComponent = class FacilityReportsComponent {
    constructor(sessionService, lookupService) {
        this.sessionService = sessionService;
        this.lookupService = lookupService;
        this.isDataLoaded = false;
    }
    ngOnInit() {
        this.reportDataList = [
            { lookupValueId: 'electricity', lookupValueName: 'List of Facilities Booking count', description: 'Provided the overall list of facilities in the condo', type: 'customer' },
            { lookupValueId: 'water', lookupValueName: 'List of Booked Facilities', description: 'Provides the list of Booked facilities', type: 'customer' },
            { lookupValueId: 'insurance', lookupValueName: 'Facility booking, approval pending', description: 'Provides the list of Approved Bookings', type: 'customer' },
            { lookupValueId: 'insurance', lookupValueName: 'Facility booking, Rejected', description: 'Provides list of Rejected Bookings', type: 'customer' },
            { lookupValueId: 'insurance', lookupValueName: 'List of cancelled booking', description: 'Provides the list of Cancelled Bookings', type: 'customer' },
        ];
        this.isDataLoaded = true;
        //  let details = {
        //   LookupTypeId: 87, //lookuptypeid for report
        //   MenuName: 'VisitorManagement'
        // }
        // this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res:any) => {
        //   this.reportDataList = res;
        //   this.isDataLoaded = true;
        // })
    }
};
FacilityReportsComponent.ctorParameters = () => [
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] }
];
FacilityReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-reports.component.scss */ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]])
], FacilityReportsComponent);



/***/ }),

/***/ "./src/app/modules/common/visitor/visitor-report/visitor-report-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/common/visitor/visitor-report/visitor-report-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: VisitorReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorReportRoutingModule", function() { return VisitorReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor-reports/visitor-reports.component */ "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.ts");
/* harmony import */ var _visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitor-reports/visitor-reports-data/visitor-reports-data.component */ "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");






const routes = [
    { path: '', component: _visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_3__["VisitorReportsComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: ':name/:id', component: _visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_4__["VisitorReportsDataComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
];
let VisitorReportRoutingModule = class VisitorReportRoutingModule {
};
VisitorReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VisitorReportRoutingModule);



/***/ }),

/***/ "./src/app/modules/common/visitor/visitor-report/visitor-report.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/common/visitor/visitor-report/visitor-report.module.ts ***!
  \********************************************************************************/
/*! exports provided: VisitorReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorReportModule", function() { return VisitorReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/ui/list/list.module */ "./src/app/modules/ui/list/list.module.ts");
/* harmony import */ var src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/ui/datepicker/datepicker.module */ "./src/app/modules/ui/datepicker/datepicker.module.ts");
/* harmony import */ var _visitor_report_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visitor-report-routing.module */ "./src/app/modules/common/visitor/visitor-report/visitor-report-routing.module.ts");
/* harmony import */ var _visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visitor-reports/visitor-reports.component */ "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.ts");
/* harmony import */ var _visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./visitor-reports/visitor-reports-data/visitor-reports-data.component */ "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts");











let VisitorReportModule = class VisitorReportModule {
};
VisitorReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_9__["VisitorReportsComponent"],
            _visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_10__["VisitorReportsDataComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
            src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
            src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"].forRoot(),
            _visitor_report_routing_module__WEBPACK_IMPORTED_MODULE_8__["VisitorReportRoutingModule"]
        ]
    })
], VisitorReportModule);



/***/ }),

/***/ "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL3Zpc2l0b3IvdmlzaXRvci1yZXBvcnQvdmlzaXRvci1yZXBvcnRzL3Zpc2l0b3ItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: VisitorReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorReportsComponent", function() { return VisitorReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");





let VisitorReportsComponent = class VisitorReportsComponent {
    constructor(lookupService, sharedService, sessionService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.isDataLoaded = false;
    }
    ngOnInit() {
        let details = {
            LookupTypeId: 87,
            MenuName: 'VisitorManagement'
        };
        this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res) => {
            this.reportDataList = res;
            // this.reportDataList = [
            //   { lookupValueName: 'List of Checked In Visitors', description: 'Provides the list of visitors checked-in for the specified duration', lookupValueId: 365 },
            //   { lookupValueName: 'List of Checked out Visitors', description: 'Provides the list of visitors checked-out for the specified duration', lookupValueId: 366 },
            //   { lookupValueName: 'List of Expected Visitors', description: 'Gives the list of visitors who are expected to check-in during the mentioned duration', lookupValueId: 367 }
            //   ]
            this.isDataLoaded = true;
        });
    }
};
VisitorReportsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
VisitorReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./visitor-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./visitor-reports.component.scss */ "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], VisitorReportsComponent);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map