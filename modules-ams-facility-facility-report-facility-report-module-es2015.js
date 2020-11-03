(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-facility-facility-report-facility-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n    <div class=\"main\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n    <condo-card *ngIf=\"isDataLoaded && (isListOfFacilitiesBookingCount())\">\n        <div CondoCardHeader>\n        \n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div>\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofBookedFacilities())\">\n        <div CondoCardHeader>\n        \n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div>\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofPendingBooked())\">\n        <div CondoCardHeader>\n        \n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div>\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofFacilityBookingRejected())\">\n        <div CondoCardHeader>\n        \n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div>\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <condo-card *ngIf=\"isDataLoaded && (isListofcancelledbooking())\">\n        <div CondoCardHeader>\n        \n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div>\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    </div>\n    </div>");

/***/ }),

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

/***/ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LXJlcG9ydC9mYWNpbGl0eS1yZXBvcnRzL2ZhY2lsaXR5LXJlcG9ydC1kYXRhL2ZhY2lsaXR5LXJlcG9ydC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: FacilityReportDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityReportDataComponent", function() { return FacilityReportDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");












let FacilityReportDataComponent = class FacilityReportDataComponent {
    constructor(router, route, userService, apartmentService, lookupService, sharedService, sessionService, ticketService, facilityService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.ticketService = ticketService;
        this.facilityService = facilityService;
        this.pageName = "";
        this.pageDesp = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isDataLoaded = false;
        this.blockId = parseInt(localStorage.getItem('apartmentBlockID'));
        this.blockNo = "All Blocks";
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    isListOfResidents() {
        return this.pageName == "List of Residents";
    }
    isListOfFacilitiesBookingCount() {
        return this.pageName == "List of Facilities Booking count";
    }
    isListofBookedFacilities() {
        return this.pageName == "List of Booked Facilities";
    }
    isListofPendingBooked() {
        return this.pageName == "Facility booking, approval pending";
    }
    isListofFacilityBookingRejected() {
        return this.pageName == "Facility booking, Rejected";
    }
    isListofcancelledbooking() {
        return this.pageName == "List of cancelled booking";
    }
    isListofAgedtickets() {
        return this.pageName == "List of Aged tickets";
    }
    isListofUnassignedtickets() {
        return this.pageName == "List of Unassigned tickets";
    }
    isListOfApprovedUsers() {
        return this.pageName == "List of Approved Users";
    }
    isListOfDeactivatedUsers() {
        return this.pageName == "List of De-activated Users";
    }
    isListOfResidentsVehicleInfo() {
        return this.pageName == "List of Residents Vehicle Info";
    }
    isListOfExpiringRental() {
        return this.pageName == "List of Expiring Rental  Lease Agreements";
    }
    isListOfUsersWithPets() {
        return this.pageName == "List of Users with Pets";
    }
    isListOfUnits() {
        return this.pageName == "List of Units";
    }
    isListOfBlocks() {
        return this.pageName == "List of Blocks";
    }
    isListOfOwners() {
        return this.pageName == "List of Owners";
    }
    isListOfTenants() {
        return this.pageName == "List of Tenants";
    }
    isListOfAdmins() {
        return this.pageName == "List of Admins";
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).add(this.timeZone.offset, 'hours').format(this.timeZone.time);
    }
    getSelectedType(event) {
        this.blockId = event[0].apartmentBlockId;
        this.blockNo = event[0].apartmentBlockId;
        if (this.blockId != "" && this.blockId != null) {
            let filterGroup = new jqx.filter();
            let filterOperator = 1;
            let filterValue = event[0].apartmentBlockNumber;
            let filterCondition = 'contains';
            let filterData = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            filterGroup.operator = 'or';
            filterGroup.addfilter(filterOperator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield === 'blockNo') {
                    this.datagrid.addfilter(item.datafield, filterGroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    onSearchFilter() {
        if (this.userReportData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.userReportData;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    getBlockDetails() {
        //jqx column generating
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.isDataLoaded = false;
        if (this.isListOfFacilitiesBookingCount()) {
            this.columnData = [{
                    text: 'Facility Name',
                    datafield: 'facilityName',
                    width: 300,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Facility Booking Count',
                    datafield: 'facilityBookingCount',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var details = {
                apartmentId: this.sessionService.apartmentId
            };
            this.facilityService.getReportsFacilityBookingCount(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.totalItems = this.userReportDataList.length;
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofBookedFacilities()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var paramdetails = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.sessionService.apartmentBlockID,
                FacilityTypeID: 184
            };
            this.facilityService.getReportsFacilityForBookedFacilityMultiFilter(paramdetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofPendingBooked()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var paramdetails = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.sessionService.apartmentBlockID,
                FacilityTypeID: 184
            };
            this.facilityService.getReportsFacilityForPendingBookedFacilityMultiFilter(paramdetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofFacilityBookingRejected()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var paramdetails = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.sessionService.apartmentBlockID,
                FacilityTypeID: 184
            };
            this.facilityService.getReportsFacilityForRejectedBookedFacilityMultiFilter(paramdetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofcancelledbooking()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var paramdetails = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.sessionService.apartmentBlockID,
                FacilityTypeID: 184
            };
            this.facilityService.getReportsFacilityForCancelledBookedFacilityMultiFilter(paramdetails).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        // else if (this.isListofUnassignedtickets()) {
        // 	this.columnData = [{
        // 		text: 'User Name',
        // 		datafield: 'userName',
        // 		width: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Block Number',
        // 		datafield: 'blockNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Unit Number',
        // 		datafield: 'unitNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Ticket Type',
        // 		datafield: 'ticketType',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'User Type',
        // 		datafield: 'userTypeName',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Subject',
        // 		datafield: 'subject',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Ticket Priority',
        // 		datafield: 'ticketPriority',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	}
        // 	];
        // 	this.userService.getReportApprovedUnitUserbyApartmentIdBlockId(details).subscribe((res: any) => {
        // 		let gridSourceData = {
        // 			localdata: res,
        // 			datatype: "array"
        // 		}
        // 		this.userReportDataList = new jqx.dataAdapter(gridSourceData);
        // 		this.isDataLoaded = true;
        // 		this.showItems();
        // 	})
        // }
        // else if (this.isListOfDeactivatedUsers()) {
        // 	this.columnData = [{
        // 		text: 'User Name',
        // 		datafield: 'unitUserName',
        // 		width: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Block Number',
        // 		datafield: 'blockNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Unit Number',
        // 		datafield: 'unitNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Email Id',
        // 		datafield: 'emailID',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'User Type',
        // 		datafield: 'userTypeName',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Mobile',
        // 		datafield: 'mobile',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	}
        // 	];
        // 	this.userService.getReportDeActivatedUnitUserbyApartmentIdBlockId(details).subscribe((res: any) => {
        // 		let gridSourceData = {
        // 			localdata: res,
        // 			datatype: "array"
        // 		}
        // 		this.userReportDataList = new jqx.dataAdapter(gridSourceData);
        // 		this.isDataLoaded = true;
        // 		this.showItems();
        // 	})
        // }
        // else if (this.isListOfResidentsVehicleInfo()) {
        // 	this.columnData = [{
        // 		text: 'User Name',
        // 		datafield: 'unitUserName',
        // 		width: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Block Number',
        // 		datafield: 'blockNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Unit Number',
        // 		datafield: 'unitNo',
        // 		minwidth: 100,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Vehicle Number',
        // 		datafield: 'vehicleNumber',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Vehicle Model',
        // 		datafield: 'vehicleModel',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Email Id',
        // 		datafield: 'emailID',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	},
        // 	{
        // 		text: 'Mobile',
        // 		datafield: 'mobile',
        // 		width: 200,
        // 		cellsrenderer: cellsrenderer,
        // 		renderer: columnrenderer
        // 	}
        // 	];
        // 	this.userService.getReportUnitUserResidentsVehicleInfobyApartmentIdBlockId(details).subscribe((res: any) => {
        // 		let gridSourceData = {
        // 			localdata: res,
        // 			datatype: "array"
        // 		}
        // 		this.userReportDataList = new jqx.dataAdapter(gridSourceData);
        // 		this.isDataLoaded = true;
        // 		this.showItems();
        // 	})
        // }
    }
    showItems() {
        this.totalItems = this.userReportDataList["_source"].localdata.length;
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
        }
        else {
            this.ItemEndIndex = this.totalItems;
        }
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        this.pageName = this.route.params['value'].name;
        let unitBlockParams = {
            apartmentId: this.sessionService.apartmentId
        };
        this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe((res) => {
            this.unitBlocksData = res;
        });
        // let params = {
        // 	LookupTypeId: 87
        // }
        // this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res: any) => {
        // 	var data = res.filter(item => {
        // 		return item.lookupValueId == this.route.params['value'].id
        // 	})
        // 	this.pageName = data[0].lookupValueName.replace('/', '');
        // 	this.pageDesp = data[0].description;
        // });
        this.getBlockDetails();
    }
};
FacilityReportDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_11__["FacilityService"] }
];
FacilityReportDataComponent.propDecorators = {
    gridResident: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gridResident', { static: false },] }],
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }]
};
FacilityReportDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-report-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-report-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-report-data.component.scss */ "./src/app/modules/ams/facility/facility-report/facility-reports/facility-report-data/facility-report-data.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_11__["FacilityService"]])
], FacilityReportDataComponent);



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



/***/ })

}]);
//# sourceMappingURL=modules-ams-facility-facility-report-facility-report-module-es2015.js.map