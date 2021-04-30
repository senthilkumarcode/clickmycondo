(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-assets-assets-reports-assets-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n    <div class=\"main\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n    <condo-card *ngIf=\"isDataLoaded\">\n        <div CondoCardHeader>\n        \n\n            <div class=\"d-flex\">\n                    <div>\n                            <h4>{{pageName}}</h4>\n                            <p>{{totalItems}} results</p>\n                    </div>\n                \n                      <div class=\"ml-auto d-none d-md-block my-auto\">\n                            <input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n                  </div>\n                  \n                \n                    <div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n                            <condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n                            [fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n                    </div>\n              </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n                [enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-reports/assets-reports.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-reports/assets-reports.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n\n  \n    <div class=\"main\">\n      <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n      <ng-container *ngIf=\"isDataLoaded && !listType\">\n        <h4 class=\"mb-4\">Select the reports</h4>\n        <div class=\"row\">\n          <div class=\"col-sm-6 mb-4\" *ngFor=\"let report of reportDataList; let i = index\">\n            <condo-card>\n              <div CondoCardHeader>\n                <a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"/ams/assets/reports/{{report.lookupValueName}}/{{report.lookupValueID}}\"\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n                  <h6 class=\"mb-2\">{{report.lookupValueName}}</h6>\n                  <p>{{report.description}}</p>\n                </a>\n              </div>\n              <div CondoCardBody>\n                <div class=\"p-4 bg-cool-gray-50\"></div>\n              </div>\n            </condo-card>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n\n\n\n  <div class=\"parking-aa-unit-to-unit-allocation-wrapper\" *ngIf=\"listType == true\">\n    <ng-container>\n\n     \n      <div class=\"float-right\">\n        <div class=\"float-right\">\n          <div class=\"relative-icon\">\n            <a>\n              <div class=\"icon-wrapper\">\n                <img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n              </div>\n              <span class=\"d-inline-block\">View All Report</span>\n            </a>\n          </div>\n        </div>\n      </div>\n      \n  \n    \n  \n    </ng-container>\n    <div class=\"card table-card clear mt-3\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6 d-flex align-items-center\">\n\t\t\t\t\t\t<h5>Report  <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t\t   </div>\n\t\t\t\t\t<div class=\"col-sm-6 d-flex justify-content-end align-items-center\"> \n\t\t\t\t\t\t<ul class=\"list-inline\">\n              <app-print-dropdown  class=\"pt-5 b-1 pb-1\" (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n             \n              <li class=\"list-inline-item search d-none d-md-inline-block\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\"\n                (ngModelChange)=\"onGlSearchFilter()\" >\n              </li>\n              </ul>\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\t\t\t\n\t\t</div>\n        <div class=\"card-body p-0\">\n          <div  id=\"filterCard\" class=\"row collapse\">          \n            <div class=\"col-sm-3 pl-5 pb-4\">\n              <div class=\"select-box mb-2 pl-2\">\n                         <!-- <label>Select Tower No</label> -->\n                          <select \n                      name=\"blockId\" \n                      id=\"blockId\" \n                      class=\"form-control\"\n                      [(ngModel)]=\"blockId\" (ngModelChange)=\"getBlockDetails()\" required>\n                      <option value=\"\">All Blocks</option>\n                      <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n                  </select>\n                    </div>\n            </div>\n\n\n          </div>\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"[]\" [columns]=\"inventoryHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>\n\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2Fzc2V0cy9hc3NldHMtcmVwb3J0cy9hc3NldHMtcmVwb3J0LWRhdGEvYXNzZXRzLXJlcG9ydC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: AssetsReportDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsReportDataComponent", function() { return AssetsReportDataComponent; });
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











let AssetsReportDataComponent = class AssetsReportDataComponent {
    constructor(router, route, userService, apartmentService, lookupService, sharedService, sessionService, ticketService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.ticketService = ticketService;
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
    isListOfTickets() {
        return this.pageName == "List of tickets";
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
        var details = {
            ApartmentID: this.sessionService.apartmentId,
            ApartmentBlockID: this.blockId === "" ? 5 : this.blockId,
            StartDate: this.StartDate,
            EndDate: this.EndDate,
            TicketStatus: this.TicketStatus,
            TicketType: this.TicketType,
            TicketRaisedBy: this.TicketRaisedBy,
            AssignedToStaffId: this.AssignedToStaffId,
            StaffCategoryType: this.StaffCategoryType,
            StaffSubCategoryType: this.StaffSubCategoryType,
        };
        if (this.isListOfTickets()) {
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
            this.ticketService.getReportsForListofOpenCloseTicketsMultiFilter(details).subscribe((res) => {
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
        else if (this.isListofAgedtickets()) {
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
            this.ticketService.getReportsForListofAgedTicketsMultiFilter(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListofUnassignedtickets()) {
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
            this.userService.getReportApprovedUnitUserbyApartmentIdBlockId(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfDeactivatedUsers()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'unitUserName',
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
                    text: 'Email Id',
                    datafield: 'emailID',
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
                    text: 'Mobile',
                    datafield: 'mobile',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            this.userService.getReportDeActivatedUnitUserbyApartmentIdBlockId(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfResidentsVehicleInfo()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'unitUserName',
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
                    text: 'Vehicle Number',
                    datafield: 'vehicleNumber',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Vehicle Model',
                    datafield: 'vehicleModel',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Email Id',
                    datafield: 'emailID',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Mobile',
                    datafield: 'mobile',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            this.userService.getReportUnitUserResidentsVehicleInfobyApartmentIdBlockId(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
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
        let params = {
            LookupTypeId: 87,
            ApartmentId: this.sessionService.apartmentId
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            var data = res.filter(item => {
                return item.lookupValueId == this.route.params['value'].id;
            });
            this.pageName = data[0].lookupValueName.replace('/', '');
            this.pageDesp = data[0].description;
        });
        this.getBlockDetails();
    }
};
AssetsReportDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"] }
];
AssetsReportDataComponent.propDecorators = {
    gridResident: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gridResident', { static: false },] }],
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }]
};
AssetsReportDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-report-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-report-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-report-data.component.scss */ "./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"]])
], AssetsReportDataComponent);



/***/ }),

/***/ "./src/app/modules/ams/assets/assets-reports/assets-reports-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-reports/assets-reports-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: AssetsReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsReportsRoutingModule", function() { return AssetsReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");
/* harmony import */ var _assets_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets-reports.component */ "./src/app/modules/ams/assets/assets-reports/assets-reports.component.ts");
/* harmony import */ var _assets_report_data_assets_report_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets-report-data/assets-report-data.component */ "./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.ts");






const routes = [
    { path: '', component: _assets_reports_component__WEBPACK_IMPORTED_MODULE_4__["AssetsReportsComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':name/:id', component: _assets_report_data_assets_report_data_component__WEBPACK_IMPORTED_MODULE_5__["AssetsReportDataComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
let AssetsReportsRoutingModule = class AssetsReportsRoutingModule {
};
AssetsReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssetsReportsRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/assets/assets-reports/assets-reports.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-reports/assets-reports.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".filter-icon {\n  font-size: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvYXNzZXRzL2Fzc2V0cy1yZXBvcnRzL2Fzc2V0cy1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvYXNzZXRzL2Fzc2V0cy1yZXBvcnRzL2Fzc2V0cy1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1pY29ue1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/ams/assets/assets-reports/assets-reports.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-reports/assets-reports.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AssetsReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsReportsComponent", function() { return AssetsReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/PurchaseOrder */ "./src/app/api/controllers/PurchaseOrder.ts");










let AssetsReportsComponent = class AssetsReportsComponent {
    constructor(router, route, userService, apartmentService, lookupService, sharedService, sessionService, purchaseOrderService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.purchaseOrderService = purchaseOrderService;
        this.pageName = "";
        this.pageDesp = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isDataLoaded = false;
        this.blockId = "";
        this.blockNo = "All Blocks";
        this.reportDataList = [];
        this.warehouseData = [];
        this.searchWareHouseId = '';
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
    onGlSearchFilter() {
    }
    getReportData() {
        let details = {
            LookupTypeId: 87,
            MenuName: 'UnitUser'
        };
        this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res) => {
            this.reportDataList = res;
            this.isDataLoaded = true;
        });
    }
    showItems() {
        this.totalItems = this.userReportDataList.length;
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
        }
        else {
            this.ItemEndIndex = this.totalItems;
        }
    }
    ngOnInit() {
        this.pageName = this.route.params['value'].name;
        let unitBlockParams = {
            apartmentId: this.sessionService.apartmentId
        };
        this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe((res) => {
            this.unitBlocksData = res;
        });
        let params = {
            LookupTypeId: 87,
            ApartmentId: this.sessionService.apartmentId
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            var data = res.filter(item => {
                return item.lookupValueId == this.route.params['value'].id;
            });
            this.pageName = res[0].lookupValueName;
            this.pageDesp = res[0].description;
        });
        // this.getBlockDetails();
        this.getReportData();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.inventoryHeader = [{
                text: 'No',
                datafield: 'materialId',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Name',
                datafield: 'materialName',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: ' Desription',
                datafield: 'materialName1',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Qty',
                datafield: 'stockQty',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            },
            {
                text: 'Status',
                datafield: 'stockStatus',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }];
        this.getCurrentInventory();
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'InventoryCurrentDetails', true, null, true, 'https://www.jqwidgets.com/export_server/dataexport.php');
    }
    getCurrentInventory() {
        let params = {};
        params.ApartmentId = this.sessionService.apartmentId;
        this.purchaseOrderService.getAllInventoryCurrentCountByApartmentId(params).subscribe((res) => {
            if (res) {
                this.gridSourceData = {
                    localdata: res.length > 0 ? res : [],
                    datatype: "array"
                };
                this.inventoryHistoryData = new jqx.dataAdapter(this.gridSourceData);
            }
        });
    }
};
AssetsReportsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_9__["PurchaseOrderService"] }
];
AssetsReportsComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }]
};
AssetsReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-reports/assets-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-reports.component.scss */ "./src/app/modules/ams/assets/assets-reports/assets-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
        src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_9__["PurchaseOrderService"]])
], AssetsReportsComponent);



/***/ }),

/***/ "./src/app/modules/ams/assets/assets-reports/assets-reports.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-reports/assets-reports.module.ts ***!
  \****************************************************************************/
/*! exports provided: AssetsReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsReportsModule", function() { return AssetsReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var _assets_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets-reports-routing.module */ "./src/app/modules/ams/assets/assets-reports/assets-reports-routing.module.ts");
/* harmony import */ var _assets_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets-reports.component */ "./src/app/modules/ams/assets/assets-reports/assets-reports.component.ts");
/* harmony import */ var _assets_report_data_assets_report_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets-report-data/assets-report-data.component */ "./src/app/modules/ams/assets/assets-reports/assets-report-data/assets-report-data.component.ts");








let AssetsReportsModule = class AssetsReportsModule {
};
AssetsReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assets_reports_component__WEBPACK_IMPORTED_MODULE_6__["AssetsReportsComponent"], _assets_report_data_assets_report_data_component__WEBPACK_IMPORTED_MODULE_7__["AssetsReportDataComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            _assets_reports_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetsReportsRoutingModule"]
        ]
    })
], AssetsReportsModule);



/***/ })

}]);
//# sourceMappingURL=modules-ams-assets-assets-reports-assets-reports-module-es2015.js.map