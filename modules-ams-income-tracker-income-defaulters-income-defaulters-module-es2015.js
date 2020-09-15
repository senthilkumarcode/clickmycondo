(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-income-tracker-income-defaulters-income-defaulters-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-view-defaulters-wrapper\">\n\t\n\t<div class=\"main\">\n\n\t\t<app-loader *ngIf=\"!isDefaultersDataLoaded\"></app-loader>\n\n\t\t<condo-card *ngIf=\"isDefaultersDataLoaded\">\n\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>View Defaulters</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto mr-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" \n\t\t\t\t\t\t[disabled]=\"!isDefaultSelected\"\n\t\t\t\t\t\t(click)=\"sendEmail()\">\n\t\t\t\t\t\t<mat-icon class=\"mr-2\" [svgIcon]=\"'email'\"></mat-icon>\n\t\t\t\t\t\tSend Email</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" \n\t\t\t\t\t\t[disabled]=\"!isDefaultSelected\"\n\t\t\t\t\t\t(click)=\"sendSMS()\">\n\t\t\t\t\t\t<mat-icon class=\"mr-2\" [svgIcon]=\"'sms'\"></mat-icon>\t\n\t\t\t\t\t\tSend SMS</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"defaultData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\n\t\t\t<div CondoCardBody>\n\t\n\t\t\t\t<jqxGrid \n\t\t\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t\t[pageable]=\"true\" \n\t\t\t\t\t\t[filterable]=\"true\" \n\t\t\t\t\t\t[sortable]=\"true\" \n\t\t\t\t\t\t[source]=\"defaultDataList\"\n\t\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t\t[selectionmode]=\"'none'\"\n\t\t\t\t\t#datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t\t\n\t\t\t</div>\n\t\n\t\t</condo-card>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/ams/income-tracker/income-defaulters/income-defaulters-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/ams/income-tracker/income-defaulters/income-defaulters-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: routes, IncomeDefaultersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeDefaultersRoutingModule", function() { return IncomeDefaultersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-view-defaulters.component */ "./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.ts");




const routes = [
    { path: '', component: _income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_3__["IncomeViewDefaultersComponent"] }
];
let IncomeDefaultersRoutingModule = class IncomeDefaultersRoutingModule {
};
IncomeDefaultersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IncomeDefaultersRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/income-tracker/income-defaulters/income-defaulters.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ams/income-tracker/income-defaulters/income-defaulters.module.ts ***!
  \******************************************************************************************/
/*! exports provided: IncomeDefaultersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeDefaultersModule", function() { return IncomeDefaultersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _income_defaulters_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./income-defaulters-routing.module */ "./src/app/modules/ams/income-tracker/income-defaulters/income-defaulters-routing.module.ts");
/* harmony import */ var _income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./income-view-defaulters.component */ "./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.ts");









let IncomeDefaultersModule = class IncomeDefaultersModule {
};
IncomeDefaultersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewDefaultersComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_income_defaulters_routing_module__WEBPACK_IMPORTED_MODULE_6__["routes"]),
            _income_defaulters_routing_module__WEBPACK_IMPORTED_MODULE_6__["IncomeDefaultersRoutingModule"]
        ],
        bootstrap: [
            _income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewDefaultersComponent"]
        ]
    })
], IncomeDefaultersModule);



/***/ }),

/***/ "./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2luY29tZS10cmFja2VyL2luY29tZS1kZWZhdWx0ZXJzL2luY29tZS12aWV3LWRlZmF1bHRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IncomeViewDefaultersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeViewDefaultersComponent", function() { return IncomeViewDefaultersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let IncomeViewDefaultersComponent = class IncomeViewDefaultersComponent {
    constructor(userService, accountsService, sessionService, constantsService) {
        this.userService = userService;
        this.accountsService = accountsService;
        this.sessionService = sessionService;
        this.constantsService = constantsService;
        this.isDefaultersDataLoaded = false;
        this.defaultData = "";
        this.isDefaultSelected = false;
        this.selectAllDefaulters = false;
        this.sendMessage = null;
    }
    onSearchFilter() {
        if (this.defaultData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.defaultData;
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
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'helpdeskData');
    }
    onCheckDefaulterHeader(detail) {
        let allDataRecords = this.datagrid.getrows();
        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](allDataRecords, item => {
            item.checked = detail.checked;
        });
        this.isDefaultSelected = allDataRecords.some(item => {
            return item.checked;
        });
        this.selectedRows = allDataRecords.filter(item => {
            return item.checked;
        });
        this.datagrid.refresh();
    }
    onCheckDefaulterRow(detail) {
        let allDataRecords = this.datagrid.getrows();
        var dataRecord = this.datagrid.getrowdata(detail.rowId);
        dataRecord.checked = detail.checked;
        this.isDefaultSelected = allDataRecords.some(item => {
            return item.checked;
        });
        this.selectedRows = allDataRecords.filter(item => {
            return item.checked;
        });
    }
    sendEmail() {
        this.isDefaultersDataLoaded = false;
        this.selectedRows.forEach((item, index, array) => {
            let details = {
                "apartmentId": this.sessionService.apartmentId,
                "emailTemplateTypeId": 2,
                "_invoiceDetailsForEmail": [
                    {
                        "serialInvoiceId": item.invoiceNumber,
                        "emailId": item.emailSetting,
                        "invoiceAmt": item.due,
                        "dueDate": "2020-08-31T06:49:18.597Z",
                        "serialNo": item.serialNo,
                        "userName": item.primaryContact,
                        "towerUnit": item.unit
                    }
                ]
            };
            let params = {
                invoiceemailTemplate: details
            };
            this.userService.notifyDefaulters(params).subscribe((res) => {
                if (index === array.length - 1) {
                    this.isDefaultersDataLoaded = true;
                }
            }, error => {
                this.isDefaultersDataLoaded = true;
            });
        });
    }
    sendSMS() {
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    renderColumns() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: '',
                datafield: 'checked',
                width: 80,
                pinned: true,
                sortable: false,
                menu: false,
                cellsrenderer: (row, column, value) => {
                    var chkedProperty;
                    if (value) {
                        chkedProperty = 'checked="true"';
                    }
                    else {
                        chkedProperty = '';
                    }
                    return '<div class="jqx-custom-inner-cell">'
                        + '<div class="form-group mb-0 w-100">'
                        + '<div class="form-check text-center">'
                        + '<input type="checkbox" class="form-check-input" onClick="checkDefaulterRowEvent(' + row + ', this.checked)" id="defaultChecker' + row + '" name="defaultChecker' + row + '" ' + chkedProperty + '>'
                        + '<label class="form-check-label" for="defaultChecker' + row + '"></label>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
                },
                renderer: (value) => {
                    return '<div style="padding: 10px">'
                        + '<div class="form-group mb-0 w-100">'
                        + '<div class="form-check check-header text-center">'
                        + '<input type="checkbox" id="selectAllDefaulters" name="selectAllDefaulters" onClick="checkDefaulterHeaderEvent(event, this.checked)" >'
                        + '<label class="form-check-label" for="selectAllDefaulters"></label>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
                }
            },
            {
                text: 'Invoice ID',
                datafield: 'serialNo',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Tower Unit',
                datafield: 'unit',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Due Date',
                datafield: 'dueDate',
                minwidth: 100,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            }, {
                text: 'Primary Contact',
                datafield: 'primaryContact',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Phone',
                datafield: 'phone',
                minwidth: 180,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Amount',
                datafield: 'due',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Email',
                datafield: 'emailSetting',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }];
        this.isDefaultersDataLoaded = true;
    }
    ngOnInit() {
        let params = {
            apartmentId: this.sessionService.apartmentId
        };
        this.accountsService.getIncomeTrackerDefaulterByApartmentId(params).subscribe((res) => {
            var gridDefaultDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](gridDefaultDataList, item => {
                item.checked = false;
            });
            this.totalItems = gridDefaultDataList.length;
            this.gridSourceData = {
                localdata: gridDefaultDataList,
                datatype: "array"
            };
            this.defaultDataList = new jqx.dataAdapter(this.gridSourceData);
            this.renderColumns();
        }, error => {
            console.log(error);
        });
    }
};
IncomeViewDefaultersComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"] }
];
IncomeViewDefaultersComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    onCheckDefaulterHeader: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onCheckDefaulterHeader', ['$event.detail'],] }],
    onCheckDefaulterRow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onCheckDefaulterRow', ['$event.detail'],] }]
};
IncomeViewDefaultersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-defaulters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-view-defaulters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-view-defaulters.component.scss */ "./src/app/modules/ams/income-tracker/income-defaulters/income-view-defaulters.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_6__["ConstantsService"]])
], IncomeViewDefaultersComponent);

function checkDefaulterHeaderEvent(event, isChecked) {
    event.stopPropagation();
    var newEvent = new CustomEvent('onCheckDefaulterHeader', {
        detail: {
            checked: isChecked
        }
    });
    window.dispatchEvent(newEvent);
}
window.checkDefaulterHeaderEvent = checkDefaulterHeaderEvent;
function checkDefaulterRowEvent(row, isChecked) {
    var event = new CustomEvent('onCheckDefaulterRow', {
        detail: {
            rowId: row,
            checked: isChecked
        }
    });
    window.dispatchEvent(event);
}
window.checkDefaulterRowEvent = checkDefaulterRowEvent;


/***/ })

}]);
//# sourceMappingURL=modules-ams-income-tracker-income-defaulters-income-defaulters-module-es2015.js.map