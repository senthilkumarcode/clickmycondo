(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-dashboard-dashboard-module~modules-ams-parking-management-parking-management-mod~18ebe70c"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.html":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.html ***!
  \*********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper content-layout right-sidebar-fullheight-basic-inner-scroll\">\n\t<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n\t\t<mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n\t\t\t<div class=\"helpdesk-filter-drawer p-5\">\n\t\t\t\t<div class=\"title row\">\n\t\t\t\t\t<h4> Filter By </h4>\n\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<condo-card>\n\t\t\t\t\t<div CondoCardHeader>\n\t\t\n\t\t\t\t\t\t<form #f=\"ngForm\">\n\t\t\n\t\t\t\t\t\t\t\t<div class=\"filter-box cleafix\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3\" [ngClass]=\"filterSelected == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllBlockData('all')\">All\n\t\t\t\t\t\t\t\t\t\t\t\t\tTowers</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [ngClass]=\"filterSelected != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleBlockActions\">{{singleBlock}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleBlockActions=\"matMenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let block of unitBlocksData\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item (click)=\"getSingleBlock(block)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{block.apartmentBlockNumber}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<condo-select labelText=\"Tower No\" fieldPlaceholder=\"Select Tower\" [fieldRequired]=\"'required'\" [fieldList]=\"unitBlocksData\"\n\t\t\t\t\t\t\t\t fieldValue=\"apartmentBlockNumber\" [fieldModel]=\"blockId\" fieldId=\"apartmentBlockId\" (fieldParams)=\"getSelectedBlock($event)\"></condo-select>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\t\tlabelText=\"Start Date\"\n\t\t\t\t\t\t\t\t\t\tfieldName=\"startDate\"\n\t\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t\t[fieldModel]=\"start_date\"\n\t\t\t\t\t\t\t\t\t\t(fieldParams)=\"getStartDate($event)\">\n\t\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\t\tlabelText=\"End Date\"\n\t\t\t\t\t\t\t\t\t\tfieldName=\"endDate\"\n\t\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t\t[fieldModel]=\"end_date\"\n\t\t\t\t\t\t\t\t\t\t(fieldParams)=\"getEndDate($event)\">\n\t\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right mt-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</condo-card>\n\t\t\t\n\t\t\t</div>\n\t\t</mat-drawer>\n\t\t<mat-drawer-content>\n\t\t\t<div class=\"main\">\n\t\n\t<ng-container>\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t\n\t\n\n\t\t<condo-card *ngIf=\"isDataLoaded\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"float-right\" *ngIf=\"!allLink\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/reports\" \n\t\t\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2 ml-3\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h5>{{pageName}}</h5>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto  my-auto\">\n\t\t\t\t\t\t\t<app-table-search [input]=\"reportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"listData\" [columns]=\"columnData\"\n\t\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\n\t\t</condo-card>\n\n\t</ng-container>\n</div>\n</mat-drawer-content>\n</mat-drawer-container>\n\t\n\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.scss ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC1yZXBvcnRzL3BhcmtpbmctbWFuYWdlbWVudC1yZXBvcnQtZGF0YS9wYXJraW5nLW1hbmFnZW1lbnQtcmVwb3J0LWRhdGEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.ts":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.ts ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: ParkingManagementReportDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementReportDataComponent", function() { return ParkingManagementReportDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _api_controllers_Parking__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../../api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");











let ParkingManagementReportDataComponent = class ParkingManagementReportDataComponent {
    constructor(route, apartmentService, parkingService, sharedService, sessionService) {
        this.route = route;
        this.apartmentService = apartmentService;
        this.parkingService = parkingService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.pageName = "";
        this.isDataLoaded = false;
        this.blockId = null;
        this.blockNo = "";
        this.end_date = null;
        this.start_date = null;
        this.visitTypeId = null;
        this.reportData = "";
        this.isReportSubmitted = false;
        this.filterSelected = "all";
        this.singleBlock = "Select Tower";
        this.allLink = false;
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'ParkingManagementReportData');
    }
    goBack() {
        this.matDrawer.close();
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).add(this.timeZone.offset, 'hours').format(this.timeZone.date);
    }
    getStartDate(event) {
        this.start_date = event;
    }
    getEndDate(event) {
        this.end_date = event;
    }
    submitReportsFilterForm() {
        let params = {
            ApartmentID: parseInt(this.sessionService.apartmentId),
            ApartmentBlockID: parseInt(this.blockId),
            StartDate: this.getDate(this.start_date),
            EndDate: this.getDate(this.end_date)
        };
        this.getDetails(params);
    }
    getDetails(params) {
        let serviceName;
        // let id = parseInt(this.route.params['value'].id);
        let name_ = this.route.params['value'].name;
        if (name_ == "List of Parking Slots") {
            serviceName = this.parkingService.getReportsForParkingSlotsMultiFilter(params);
        }
        else if (name_ == "List of Unassigned Parking Slots") {
            serviceName = this.parkingService.getReportsForParkingSlotsUnAssignedMultiFilter(params);
        }
        serviceName.subscribe((res) => {
            if (res.errorMessage) {
                this.reportsDataList = [];
                this.totalItems = this.reportsDataList.length;
            }
            else {
                this.reportsDataList = res;
                this.totalItems = this.reportsDataList.length;
                this.gridSourceData = {
                    localdata: this.reportsDataList,
                    datatype: "array"
                };
                this.listData = new jqx.dataAdapter(this.gridSourceData);
                this.isReportSubmitted = true;
                this.isDataLoaded = true;
            }
        }, error => {
            this.isReportSubmitted = true;
            this.isDataLoaded = true;
        });
    }
    getExpectedDate(val) {
        if (val != '') {
            return moment__WEBPACK_IMPORTED_MODULE_8__(val).format("MM/DD/YYYY");
        }
        else {
            return '';
        }
    }
    onGlSearchFilter(event) {
        if (event != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = event;
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
    cancel(form) {
        form.reset();
    }
    getSelectedBlock(event) {
        this.blockId = event[0].apartmentBlockId;
    }
    getSelectedVisit(event) {
        this.visitTypeId = event[0].lookupValueId;
    }
    filterApply() {
        this.goBack();
        this.isDataLoaded = false;
        let params = {
            ApartmentID: parseInt(this.sessionService.apartmentId),
            ApartmentBlockID: parseInt(this.blockId),
            StartDate: this.getDate(this.start_date),
            EndDate: this.getDate(this.end_date)
        };
        this.getDetails(params);
    }
    clearFilter() {
        this.myForm.form.reset();
        this.blockId = null;
        this.start_date = null;
        this.end_date = null;
        this.datagrid.clearfilters();
        // =this.getTicketByAdmin();
        let params = {
            ApartmentID: parseInt(this.sessionService.apartmentId),
            ApartmentBlockID: parseInt(this.blockId),
            StartDate: this.start_date === null ? moment__WEBPACK_IMPORTED_MODULE_8__().subtract(5, 'months').startOf('month').add(this.timeZone.offset, 'hours').format(this.timeZone.date) : this.getDate(this.start_date),
            EndDate: this.end_date === null ? moment__WEBPACK_IMPORTED_MODULE_8__().add(this.timeZone.offset, 'hours').format(this.timeZone.date) : this.getDate(this.end_date)
        };
        this.getDetails(params);
        this.goBack();
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        this.pageName = this.route.params['value'].title === undefined ? this.route.params['value'].name : this.route.params['value'].title;
        this.allLink = this.route.params['value'].link;
        let unitBlockParams = {
            apartmentId: parseInt(this.sessionService.apartmentId)
        };
        this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe((res) => {
            this.unitBlocksData = res;
        });
        let visitParams = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 15
        };
        this.isDataLoaded = false;
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Tower No',
                datafield: 'blockNo',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Unit No',
                datafield: 'unitNo',
                minwidth: 80,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Slot Name',
                datafield: 'slotName',
                cellsrenderer: cellsrenderer,
                minwidth: 130,
                renderer: columnrenderer
            }, {
                text: 'Slot Type',
                datafield: 'slotType',
                cellsrenderer: cellsrenderer,
                minwidth: 220,
                maxwidth: 250,
                renderer: columnrenderer
            }, {
                text: 'Vehicle Type',
                datafield: 'vehicleType',
                cellsrenderer: cellsrenderer,
                minwidth: 130,
                maxwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'UnAssigned Since',
                datafield: 'unAssignedSince',
                cellsrenderer: cellsrenderer,
                minwidth: 160,
                maxwidth: 180,
                renderer: columnrenderer
            }, {
                text: 'Sq. Feet',
                datafield: 'sqFeet',
                cellsrenderer: cellsrenderer,
                minwidth: 120,
                maxwidth: 150,
                renderer: columnrenderer
            }];
        this.fromDate = moment__WEBPACK_IMPORTED_MODULE_8__().subtract(12, 'months').endOf('month').format(this.timeZone.time);
        this.toDate = moment__WEBPACK_IMPORTED_MODULE_8__().format(this.timeZone.time);
        let params = {
            ApartmentID: parseInt(this.sessionService.apartmentId),
            ApartmentBlockID: parseInt(this.blockId)
        };
        this.getDetails(params);
    }
    getAllBlockData() {
        this.filterSelected = 'all';
        this.singleBlock = "Select Tower";
        this.blockId = "";
        this.datagrid.clearfilters();
    }
    getSingleBlock(block) {
        this.filterSelected = 'single';
        this.singleBlock = block.apartmentBlockNumber;
        this.blockId = block.apartmentBlockId;
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = this.singleBlock;
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
};
ParkingManagementReportDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: _api_controllers_Parking__WEBPACK_IMPORTED_MODULE_10__["ParkingService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }
];
ParkingManagementReportDataComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    matDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['matDrawer', { static: true },] }],
    myForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['f',] }]
};
ParkingManagementReportDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-report-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-report-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-report-data.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-report-data/parking-management-report-data.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _api_controllers_Parking__WEBPACK_IMPORTED_MODULE_10__["ParkingService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])
], ParkingManagementReportDataComponent);



/***/ })

}]);
//# sourceMappingURL=default~modules-ams-dashboard-dashboard-module~modules-ams-parking-management-parking-management-mod~18ebe70c-es2015.js.map