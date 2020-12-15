(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-dashboard-dashboard-module~modules-ams-staff-manager-staff-manager-module~module~43ed5161"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n\n    <mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n              <mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n                  <div class=\"helpdesk-filter-drawer p-5\">\n                      <div class=\"title row\">\n                          <h4> Filter By </h4>\n                          <div class=\"ml-auto\">\n                              <button mat-icon-button (click)=\"goBack()\">\n                                  <mat-icon [svgIcon]=\"'close'\"></mat-icon>\n                              </button>\n                          </div>\n                      </div>\n                      <condo-card>\n                          <div CondoCardHeader>\n              \n                              <form>\n              \n                                      <div class=\"filter-box cleafix\">\n                                              <div class=\"row align-items-center mb-4\">\n                                                  \n                                          \n                                                      <button mat-flat-button class=\"mr-3 mb-2\" [ngClass]=\"filterSelected == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllBlockData('all')\">All\n                                                          Towers</button>\n                                                      <button mat-flat-button [ngClass]=\"filterSelected != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleBlockActions\">{{singleBlock}}</button>\n                                                      <mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleBlockActions=\"matMenu\">\n                                                          <ng-container *ngFor=\"let block of unitBlocksData\">\n                                                              <button mat-menu-item (click)=\"getSingleBlock(block)\">\n                                                                  {{block.apartmentBlockNumber}}\n                                                              </button>\n                                                          </ng-container>\n                                                      </mat-menu>\n                                          \n                                                      <!-- <condo-select [fieldModel]=\"blockId\" labelText=\"Tower No\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                                                                                           [fieldRequired]=\"'required'\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select> -->\n                                                  \n                                              </div>\n                                          </div>\n                                  <div class=\"row\">\n              \n                                      <!-- <div class=\"col-sm-12\">\n                                              <condo-select labelText=\"Tower No\" fieldPlaceholder=\"Select Tower\" [fieldRequired]=\"'required'\" [fieldList]=\"unitBlocksData\"\n                                       fieldValue=\"apartmentBlockNumber\" [fieldModel]=\"blockId\" fieldId=\"apartmentBlockId\" (fieldParams)=\"getSelectedBlock($event)\"></condo-select>\n                                      \n                                      </div> -->\n\n                                     \n                                     \n                                  </div>\n                                  <!-- <div class=\"row\">\n                                          <div class=\"col-sm-12\">\n                                                  <div class=\"text-right mt-4\">\n                                                          <button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n                                                          <button mat-button (click)=\"clearFilter()\">Cancel</button>\n                                                      </div>\n                                              \n                                          </div>\n                                      \n                                  </div> -->\n              \n                              </form>\n                          </div>\n                      </condo-card>\n                  \n                  </div>\n              </mat-drawer>\n              <mat-drawer-content>\n<div class=\"main\">\n\n<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n<condo-card *ngIf=\"isDataLoaded\">\n      <div CondoCardHeader>\n              <div class=\"row\">\n                      <div class=\"float-right\" *ngIf=\"!allLink\">\n                                  \n                              <a href=\"javascript:void(0)\" routerLink=\"/ams/unit&users/reports\" \n                                  routerLinkActive=\"active\"\n                                  [routerLinkActiveOptions] = \"{exact:true}\">\n                                  <mat-icon class=\"mr-2 ml-3\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n                                  \n                              </a>\n                          \n                          </div>\n              </div>\n          <div class=\"d-flex\">\n              <div>\n                  <h4>List of Community Staffs</h4>\n                  <p>{{totalItems}} results</p>\n              </div>\n              <div class=\"ml-auto my-auto\">\n                      <app-table-search [input]=\"userReportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                  </div>\n                  <div class=\"mr-3 my-auto ml-3\">\n                          <app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n                      </div>\n                      <div class=\"mr-3 my-auto ml-3\">\n                          <button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n                              <mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n                          </button>\n                          <button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n                                  <mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n                                </button>\n                      </div>\n           \n      <!-- <div class=\"mr-3\">\n        <select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n        (ngModelChange)=\"getBlockDetails()\" required>\n        <option value=\"\">All Blocks</option>\n        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n          {{ item.apartmentBlockNumber }}</option>\n      </select>\n      </div> -->\n          </div>\n      </div>\n      <div CondoCardBody>\n          <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n              [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n              [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n          </jqxGrid>\n      </div>\n  </condo-card>\n\n\n</div>\n</mat-drawer-content>\n</mat-drawer-container>\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3N0YWZmLW1hbmFnZXIvY29tcG9uZW50cy9zdGFmZi1yZXBvcnRzL3N0YWZmLXJlcG9ydHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StaffReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffReportsComponent", function() { return StaffReportsComponent; });
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
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");












let StaffReportsComponent = class StaffReportsComponent {
    constructor(router, route, userService, apartmentService, lookupService, sharedService, sessionService, staffService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.staffService = staffService;
        this.pageName = "";
        this.pageDesp = "";
        this.userReportData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isDataLoaded = false;
        this.reportData = "";
        this.blockId = null;
        this.blockNo = "";
        this.end_date = null;
        this.start_date = null;
        this.filterSelected = "all";
        this.singleBlock = "Select Tower";
        this.allLink = false;
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
    filterApply() {
        this.goBack();
        let filtergroup = new jqx.filter();
        let filter_or_operator = 1;
        let filtervalue = this.blockNo;
        let filtercondition = 'contains';
        let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.operator = 'or';
        filtergroup.addfilter(filter_or_operator, filterData);
        this.datagrid.showfiltercolumnbackground(false);
        this.columnData.forEach(item => {
            if (item.datafield == 'blockNo') {
                this.datagrid.addfilter(item.datafield, filtergroup, true);
            }
            if (item.datafield == 'apartmentBlockNumber') {
                this.datagrid.addfilter(item.datafield, filtergroup, true);
            }
        });
        this.datagrid.applyfilters();
    }
    clearFilter() {
        this.blockId = null;
        this.start_date = null;
        this.end_date = null;
        this.datagrid.clearfilters();
        this.goBack();
    }
    goBack() {
        this.matDrawer.close();
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'UnitUsersReportData');
    }
    getSelectedBlock(event) {
        this.blockId = event[0].apartmentBlockId;
        this.blockNo = event[0].apartmentBlockNumber;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        // this.itemLimit = event.itemLimit;
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
        }
        else
            return '';
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
    isListOfCommunityStaffs() {
        return this.pageName == "List of Community Staffs";
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).add(this.timeZone.offset, 'hours').format(this.timeZone.time);
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
        var details = {
            ApartmentID: parseInt(localStorage.getItem('apartmentId')),
            ApartmentBlockID: this.blockId
        };
        this.columnData = [{
                text: 'StaffNo',
                datafield: 'serialNo',
                width: 150,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Staff Name',
                datafield: 'firstName',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Email Id',
                datafield: 'emailId',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Job Title',
                datafield: 'staffCategory_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Phone Number',
                datafield: 'phoneNumber_Label',
                cellsrenderer: cellsrenderer,
                width: 150,
                renderer: columnrenderer
            }];
        let vacantParams = {
            apartmentId: parseInt(this.sessionService.apartmentId),
            categoryId: 115,
        };
        this.staffService.getAllStaffsByApartmentIdCategoryId(vacantParams).subscribe((res) => {
            let gridSourceData = {
                localdata: res,
                datatype: "array"
            };
            this.userReportDataList = new jqx.dataAdapter(gridSourceData);
            this.isDataLoaded = true;
            this.showItems();
        });
    }
    showItems() {
        this.totalItems = this.userReportDataList["_source"]["localdata"].length;
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
        }
        else {
            this.ItemEndIndex = this.totalItems;
        }
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        // this.pageName = this.route.params['value'].name;
        this.allLink = this.route.params['value'].link;
        let unitBlockParams = {
            apartmentId: parseInt(localStorage.getItem('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe((res) => {
            this.unitBlocksData = res;
        });
        // let params = {
        // 	LookupTypeId: 87,
        // 	ApartmentId: this.sessionService.apartmentId
        // }
        // this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res: any) => {
        // 	var data = res.filter(item => {
        // 		return item.lookupValueId == this.route.params['value'].id
        // 	})
        // 	this.pageName = data[0].lookupValueName; //.replace('/', '');
        // 	this.pageDesp = data[0].description;
        // 	console.log(this.pageName);
        // });
        this.getBlockDetails();
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
StaffReportsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_11__["StaffService"] }
];
StaffReportsComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    matDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['matDrawer', { static: true },] }]
};
StaffReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-reports.component.scss */ "./src/app/modules/ams/staff-manager/components/staff-reports/staff-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_11__["StaffService"]])
], StaffReportsComponent);



/***/ })

}]);
//# sourceMappingURL=default~modules-ams-dashboard-dashboard-module~modules-ams-staff-manager-staff-manager-module~module~43ed5161-es2015.js.map