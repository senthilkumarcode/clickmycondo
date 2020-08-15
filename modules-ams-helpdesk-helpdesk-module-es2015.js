(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-helpdesk-helpdesk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-4\">Helpdesk Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"/ams/helpdesk/open-tickets\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-tracker-reports-customer-reports\">\n\n\t<h4 class=\"main-title-mini\">Open Tickets</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\n\t\t\t<form #openTicketReportForm = \"ngForm\" name=\"openTicketReportForm\" (ngSubmit)=\"submitOpenTicketForm(openTicketReportForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select\n\t\t\t\t\t\t        name=\"blockNo\"\n\t\t\t\t\t\t        id=\"blockNo\"\n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockId\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label> Date From</label>\n\t\t                    <input class=\"form-control\" name=\"reportDateFrom\" [owlDateTime]=\"reportDateFrom\" [owlDateTimeTrigger]=\"reportDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.fromDate\">\n\t\t\t\t\t\t\t<owl-date-time #reportDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"reportDateFrom\">\n\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label> Date To</label>\n\t\t                    <input class=\"form-control\" name=\"reportDateTo\" [owlDateTime]=\"reportDateTo\" [owlDateTimeTrigger]=\"reportDateTo\" placeholder=\"Date\" [(ngModel)]=\"report.toDate\">\n\t\t\t\t\t\t\t<owl-date-time #reportDateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"reportDateTo\">\n\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Ticket Status</label>\n\t\t                    <select\n\t\t\t\t\t\t        name=\"tktStatus\"\n\t\t\t\t\t\t        id=\"tktStatus\"\n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.status\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of ticketStatusList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }} </option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Ticket Type</label>\n                        <select\n                    name=\"tktType\"\n                    id=\"tktType\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.type\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of ticketTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }} </option>\n              </select>\n                  </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Assigned Staff</label>\n                        <select\n                    name=\"tktPriority\"\n                    id=\"tktPriority\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.assignedStaff\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of staffDataList\" [value]=\"item.staffId\">{{ item.firstName }} </option>\n              </select>\n                  </div>\n          </div>\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"openTicketReportForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted && report.fromDate && report.toDate\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.fromDate)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.toDate)}}</span> </p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n              <th scope=\"col\" (click)=\"sortUnitData('Block')\">Block<span [ngClass]=\"getFieldOrderBy('Block')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('Date')\">Created Date<span [ngClass]=\"getFieldOrderBy('Date')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Type')\">Type<span [ngClass]=\"getFieldOrderBy('Type')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Status')\">Status<span [ngClass]=\"getFieldOrderBy('Status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Category')\">Category<span [ngClass]=\"getFieldOrderBy('Category')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('User')\">User<span [ngClass]=\"getFieldOrderBy('User')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('Assigned')\">Assigned To<span [ngClass]=\"getFieldOrderBy('Assigned')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of openTicketReport | simpleSearch: reportsData | sort : unitFieldType: unitOrder| slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n              <td class=\"name\">{{report.blockNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.createdOn)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.ticketType}}</td>\n              <td class=\"grey\">{{report.ticketStatus}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.subject}}</td>\n              <td class=\"grey\">{{report.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.staffName}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination\n\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-ticket-cateory-wrapper\">\n    <div class=\"main\">\n        <div class=\"bg-card shadow mb-0\">\n            <div class=\"d-flex\">\n                <h4 class=\"mb-4\">\n                    <span *ngIf=\"data.type == 'common'\">COMMON TICKET CATEGORY</span>\n                    <span *ngIf=\"data.type == 'private'\">PRIVATE TICKET CATEGORY</span>\n                </h4>\n                <mat-icon class=\"ml-auto\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n            </div>\n            <form>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Category Name<span class=\"mandatory\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" name=\"categoryName\" [(ngModel)]=\"ticketCategoryData.categoryName\" (input)=\"errorMessage=''\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                            labelText=\"Default Supervisor\"\n                            fieldPlaceholder=\"Default Supervisor\"\n                            [fieldList]=\"staffsList\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"ticketCategoryData.staffOne\"\n                            fieldId=\"userId\"\n                            (fieldParams)=\"isExistUser($event,'one')\" \n                        ></condo-select>  \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <h6 class=\"mb-4\">Esclation Setup (Optional)</h6>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 1 After</label>\n                            <div class=\"d-flex\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Days\" name=\"escdayone\" [(ngModel)]=\"ticketCategoryData.escalationDaysOne\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-1 Manager\"\n                        fieldPlaceholder=\"Select Level-1 Manager\"\n                        [fieldList]=\"staffsList\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffTwo\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'two')\" \n                        ></condo-select> \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 2 After</label>\n                            <div class=\"d-flex\">\n                                <input type=\"text\" class=\"form-control d-inline-block w-40\" placeholder=\"Days\" name=\"escdaytwo\" [(ngModel)]=\"ticketCategoryData.escalationDaysTwo\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-2 Manager\"\n                        fieldPlaceholder=\"Select Level-2 Manager\"\n                        [fieldList]=\"staffsList\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffThree\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'three')\" \n                        ></condo-select> \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <button class=\"float-right\"  mat-flat-button  [color]=\"'primary'\" *ngIf=\"data.mode == 'create'\" (click)=\"createCategory()\">Submit</button>\n                        <button class=\"float-right\"  mat-flat-button  [color]=\"'primary'\" *ngIf=\"data.mode == 'edit'\" (click)=\"updateCategory()\">Update</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"common-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Common Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto d-none d-md-block mr-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"commonFilter\"  (ngModelChange)=\"commonSearch()\">\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">Add Common Ticket Category</button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"commonListData\"\n                [columns]=\"commonColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #commondatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n        ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-setup-wrapper\">  \n\t<div class=\"main\">\n\t\t<h4 class=\"mb-4\">Settings</h4>\n\t\t<!-- Tips -->\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<mat-accordion>\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Tips</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"text-hint\">\n\t\t\t\t\t\t\t<p>Tips :  You have two types of Ticket Category to setup.</p>\n\t\t\t\t\t\t\t<p>Common category refer to the issues related to condo which is at common to all units (For Example : Swimming pool not clean)</p>\n\t\t\t\t\t\t\t<p>Private category refer to the issues inside  the units ( For Example : Plumbing inside the Condo)</p>\n\t\t\t\t\t\t\t<p class=\"mt-4\">We have some standard Common Categories created for you, you can assign a supervisor and assign escalation if you required.</p>\n\t\t\t\t\t\t\t<p>If you have supervisor assigned to a Category , tickets will get assigned to Supervisor automatically. Supervisor will have to re-assign the ticket to Staff.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t</div>\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<nav mat-tab-nav-bar>\n\t\t\t\t<a mat-tab-link *ngFor=\"let link of navArray\" [routerLink]=\"link.link\" \n\t\t\t\t\trouterLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\n\t\t\t\t{{link.name}}\n\t\t\t\t</a>\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"private-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Private Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto d-none d-md-block mr-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"privateFilter\"  (ngModelChange)=\"privateSearch()\">\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">Add Private Ticket Category</button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"privateListData\"\n                [columns]=\"privateColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #privatedatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-all-tickets-wrapper content-layout right-sidebar-fullheight-basic-inner-scroll\">\n    <mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n        <mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n\t\t\t<div class=\"helpdesk-filter-drawer\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h4> Status </h4>\n\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Ticket Status</label>\n\t\t\t\t\t\t\t\t<select name=\"ticketType\" id=\"ticketType\" class=\"form-control\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"filterData.ticketStatus\">\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of ticketStatusList\" [value]=\"item.lookupValueId\"> {{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Staff</label>\n\t\t\t\t\t\t\t\t<select name=\"assignedTo\" id=\"staff\" class=\"form-control\" [(ngModel)]=\"filterData.staff\">\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"null\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of staffsList\" [ngValue]=\"item.staffId\"> \n\t\t\t\t\t\t\t\t\t\t{{ item.staffName+' '+item.staffSubCategoryName+' '+item.roleName+' '+item.supervisorName+' '+ item.noofTicketsinProgress }}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Supervisor</label>\n\t\t\t\t\t\t\t\t<select name=\"assignedTo\" id=\"supervisor\" class=\"form-control\" [(ngModel)]=\"filterData.supervisor\">\n\t\t\t\t\t\t\t\t\t<option [ngValue]=\"null\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of staffsList\" [ngValue]=\"item.staffId\"> \n\t\t\t\t\t\t\t\t\t\t{{ item.staffName+' '+item.staffSubCategoryName+' '+item.roleName+' '+item.supervisorName+' '+ item.noofTicketsinProgress }}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"text-right mt-4\">\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Ticket Status\"\n                            fieldPlaceholder=\"Status\"\n                            [fieldList]=\"ticketStatusList\"\n                            fieldValue=\"lookupValueName\"\n                            [fieldModel]=\"filter.ticketStatus\"\n                            fieldId=\"lookupValueId\"\n                            (fieldParams)=\"dropDownSelect($event,'status')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Staff\"\n                            fieldPlaceholder=\"Staff\"\n                            [fieldList]=\"staffsList\"\n                            fieldValue=\"staffName\"\n                            [fieldModel]=\"filter.staff\"\n                            fieldId=\"staffId\"\n                            (fieldParams)=\"dropDownSelect($event,'staff')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Supervisor\"\n                            fieldPlaceholder=\"Supervisor\"\n                            [fieldList]=\"staffsList\"\n                            fieldValue=\"staffName\"\n                            [fieldModel]=\"supervisor\"\n                            fieldId=\"staffId\"\n                            (fieldParams)=\"dropDownSelect($event,'supervisor')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\t\t\t\t</form>\n\t\t\t</div>\n        </mat-drawer>\n        <mat-drawer-content>\n\t\t\t<div class=\"main\">\n\t\t\t\t<!-- Loader -->\n\t\t\t\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\t\t\t\t<!-- Indicator -->\n\t\t\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t\t\t<ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/common-ticket-icon.svg\"><span>Common</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/private-ticket-icon.svg\"><span>Private</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t\t<ul class=\"legends ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-orange-900\"></span><span>High</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-green-900\"></span>Medium</li>\n\t\t\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots bg-purple-900\"></span>Low</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Table -->\n\t\t\t\t<condo-card *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='all-tickets'\">All Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='open-tickets'\">Open Assigned and Hold Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='closed-tickets'\">Closed Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='unassigned'\">Unassigned Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='assigned-to-me'\">My Tickets</span>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" (ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"createTicketNavigate()\">Add Ticket</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t<jqxGrid\n\t\t\t\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t\t\t[pageable]=\"true\"\n\t\t\t\t\t\t\t[filterable]=\"true\"\n\t\t\t\t\t\t\t[sortable]=\"true\"\n\t\t\t\t\t\t\t[source]=\"ticketListData\"\n\t\t\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t\t\t#datagrid>\n\t\t\t\t\t\t</jqxGrid>\n\t\t\t\t\t</div>\n\t\t\t\t</condo-card>\n\t\t\t</div>\n        </mat-drawer-content>\n    </mat-drawer-container>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-unassigned-wrapper\">\n\t<div class=\"main\">\n\t\t<!-- Loader -->\n\t\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\t\t<!-- Indicator -->\n\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t<ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/common-ticket-icon.svg\"><span>Common</span></li>\n\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/private-ticket-icon.svg\"><span>Private</span></li>\n\t\t\t</ul>\n\t\t\n\t\t\t<ul class=\"legends ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-red-900\"></span><span>High</span></li>\n\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-orange-900\"></span>Medium</li>\n\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots bg-green-900\"></span>Low</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<!-- Table -->\n\t\t<condo-card *ngIf=\"isTicketDataLoaded\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>Unassigned Tickets</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" (ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid\n\t\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t[pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\"\n\t\t\t\t\t[sortable]=\"true\"\n\t\t\t\t\t[source]=\"ticketListData\"\n\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t#datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n</div>\n\t\t\n\t\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-create-ticket-wrapper\">\n\t\n\t<ng-container *ngFor=\"let ticket of ticketArray; let i = index\">\n\t\t<app-add-ticket [index]=\"i\" [array]=\"ticketArray\" (outputParams) = \"getTicketArray($event)\"></app-add-ticket>\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9oZWxwZGVzay1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts ***!
  \************************************************************************************************/
/*! exports provided: HelpdeskReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskReportsComponent", function() { return HelpdeskReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");




let HelpdeskReportsComponent = class HelpdeskReportsComponent {
    constructor(lookupService, sessionService) {
        this.lookupService = lookupService;
        this.sessionService = sessionService;
        this.isDataLoaded = false;
    }
    ngOnInit() {
        let details = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 87,
            MenuName: 'HelpdeskTracker'
        };
        this.reportDataList = [
            { lookupValueName: 'List of Open tickets', description: 'Gives the list of open tickets in the condo', type: 'customer' },
        ];
        this.isDataLoaded = true;
        // this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res:any) => {
        //
        //   this.reportDataList = res;
        //
        //   this.isDataLoaded = true;
        //
        // })
    }
};
HelpdeskReportsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }
];
HelpdeskReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-reports.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
], HelpdeskReportsComponent);



/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9vcGVuLXRpY2tldHMtcmVwb3J0L29wZW4tdGlja2V0cy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: OpenTicketsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTicketsReportComponent", function() { return OpenTicketsReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let OpenTicketsReportComponent = class OpenTicketsReportComponent {
    constructor(apartmentService, sharedService, staffService, ticketService, lookupService, sessionService) {
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.staffService = staffService;
        this.ticketService = ticketService;
        this.lookupService = lookupService;
        this.sessionService = sessionService;
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 8;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isReportSubmitted = true;
        this.isDataLoaded = true;
        this.ticketTypeParams = {
            LookupTypeId: 7
        };
        this.priortyParams = {
            LookupTypeId: 9
        };
        this.statusParams = {
            LookupTypeId: 14
        };
        this.apartmentParams = {
            apartmentId: this.sessionService.apartmentId
        };
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
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
    getDate(date) {
        if (date) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
        }
    }
    getType(type_id) {
        let type = this.ticketTypeList.find(x => x.lookupValueId === type_id);
        if (type) {
            return type.lookupValueName;
        }
    }
    getDateFormat(date) {
        if (date) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD");
        }
    }
    getTimeFormat(dateTime) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(dateTime).format("YYYY-MM-DD HH:mm");
    }
    submitOpenTicketForm(form) {
        this.isReportSubmitted = true;
        this.isDataLoaded = false;
        this.ItemStartIndex = 0;
        let details = {
            ApartmentID: this.sessionService.apartmentId,
            ApartmentBlockID: parseInt(this.report.apartmentBlockId),
            StartDate: this.getDateFormat(this.report.fromDate),
            EndDate: this.getDateFormat(this.report.toDate),
            TicketStatus: parseInt(this.report.status),
            TicketType: parseInt(this.report.type),
            AssignedToStaffId: parseInt(this.report.assignedStaff),
        };
        this.ticketService.getReportsForListofOpenCloseTicketsMultiFilter(details).subscribe((res) => {
            this.openTicketReport = res;
            this.totalItems = this.openTicketReport.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
            this.isReportSubmitted = false;
        }, error => {
        });
    }
    ngOnInit() {
        this.report = {};
        this.report.apartmentBlockId = "";
        this.report.apartmentBlockUnitId = "";
        this.apartmentService.getApartmentBlockByApartmentId(this.apartmentParams).subscribe((res) => {
            this.blockData = res;
        });
        this.lookupService.getLookupValueByLookupTypeId(this.ticketTypeParams).subscribe((res) => {
            this.ticketTypeList = res;
        });
        this.lookupService.getLookupValueByLookupTypeId(this.statusParams).subscribe((res) => {
            this.ticketStatusList = res;
        });
        this.staffService.getAllStaffsByApartmentId(this.apartmentParams).subscribe((res) => {
            this.staffDataList = res;
            this.staffDataList.sort((a, b) => a.firstName.localeCompare(b.firstName));
        });
        this.lookupService.getLookupValueByLookupTypeId(this.priortyParams).subscribe((res) => {
            this.ticketPriortyList = res;
        }, error => {
        });
    }
};
OpenTicketsReportComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
OpenTicketsReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-tickets-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./open-tickets-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./open-tickets-report.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
], OpenTicketsReportComponent);



/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvYWRkLXRpY2tldC1jYXRlZ29yeS9hZGQtdGlja2V0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: AddTicketCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTicketCategoryComponent", function() { return AddTicketCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");








let AddTicketCategoryComponent = class AddTicketCategoryComponent {
    constructor(dialogRef, staffService, sessionService, lookupService, ticketService, sharedService, data) {
        this.dialogRef = dialogRef;
        this.staffService = staffService;
        this.sessionService = sessionService;
        this.lookupService = lookupService;
        this.ticketService = ticketService;
        this.sharedService = sharedService;
        this.data = data;
        this.ticketCategoryData = {};
        this.staffsdropdownSettings = {};
        this.staffsList = [];
        this.editData = {};
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
    isExistUser(event, type) {
        if (type == 'one')
            this.ticketCategoryData.staffOne = event[0].userId;
        else if (type == 'two')
            this.ticketCategoryData.staffTwo = event[0].userId;
        else if (type == 'three')
            this.ticketCategoryData.staffThree;
    }
    createCategory() {
        let entity = {
            description: this.ticketCategoryData.categoryName,
            lookupTypeId: this.data.type == 'private' ? 16 : 17,
            lookupValueName: this.ticketCategoryData.categoryName,
            apartmentId: this.sessionService.apartmentId,
            insertedBy: parseInt(this.sessionService.userId),
            insertedOn: new Date().toISOString(),
            isActive: true,
            updatedBy: 0,
            updatedOn: null
        };
        let lookupvalue = {
            lookupvalue: entity
        };
        this.lookupService.addLookupValue(lookupvalue).subscribe((res) => {
            if (!isNaN(res.message))
                this.createEsclation(res.message);
            else
                this.errorMessage = res.errorMessage;
        });
    }
    createEsclation(ticketCategoryId) {
        let addTicket = [];
        let esclator = {
            ticketCategoryId: ticketCategoryId,
            ticketTypeId: this.data.type == 'private' ? 27 : 24,
            isDefault: true,
            isActive: true,
            apartmentId: this.sessionService.apartmentId,
            insertedBy: parseInt(this.sessionService.userId),
            insertedOn: new Date().toISOString(),
            updatedBy: this.data.mode == 'edit' ? parseInt(this.sessionService.userId) : 0,
            updatedOn: this.data.mode == 'edit' ? new Date().toISOString() : null
        };
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                let esclatorMain = {
                    ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerId : 0,
                    userId: this.ticketCategoryData.staffOne ? this.ticketCategoryData.staffOne : null,
                    escalationLevelId: 0,
                    escalationDays: 0,
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
            }
            else if (i == 1 && this.ticketCategoryData.staffTwo && this.ticketCategoryData.escalationDaysOne) {
                let esclatorMain = {
                    ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdOne : 0,
                    userId: this.ticketCategoryData.staffTwo,
                    escalationLevelId: 1,
                    escalationDays: this.ticketCategoryData.escalationDaysOne,
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
            }
            else if (i == 2 && this.ticketCategoryData.staffThree && this.ticketCategoryData.escalationDaysTwo) {
                let esclatorMain = {
                    ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdTwo : 0,
                    userId: this.ticketCategoryData.staffThree,
                    escalationLevelId: 2,
                    escalationDays: this.ticketCategoryData.escalationDaysTwo,
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
            }
        }
        let params = {
            ticketManagers: addTicket
        };
        this.ticketService.addTicketManagerMultiple(params).subscribe((res) => {
            if (!isNaN(res.message))
                this.sharedService.setAlertMessage("Created Successfully");
            else if (res.message)
                this.sharedService.setAlertMessage("Updated Successfully");
            else
                this.sharedService.setAlertMessage(res.errorMessage);
            this.dialogRef.close(true);
        });
    }
    updateCategory() {
        if (this.ticketCategoryData.categoryName != this.editData.ticketCategoryName) {
            let entity = {
                lookupValueId: this.editData.ticketCategoryId,
                description: this.ticketCategoryData.categoryName,
                lookupTypeId: this.data.type == 'private' ? 16 : 17,
                lookupValueName: this.ticketCategoryData.categoryName,
                apartmentId: this.sessionService.apartmentId,
                insertedBy: parseInt(this.sessionService.userId),
                insertedOn: new Date().toISOString(),
                isActive: true,
                updatedBy: parseInt(this.sessionService.userId),
                updatedOn: new Date().toISOString(),
            };
            let lookupvalue = {
                lookupvalue: entity
            };
            this.lookupService.updateLookupValue(lookupvalue).subscribe((res) => {
                if (res.message)
                    this.createEsclation(this.editData.ticketCategoryId);
                else
                    this.errorMessage = res.errorMessage;
            });
        }
        else {
            this.createEsclation(this.editData.ticketCategoryId);
        }
    }
    patchData() {
        if (this.data.mode == 'edit' && this.data.categoryId) {
            let queryParamBase = {
                apartmentId: this.sessionService.apartmentId,
                ticketCategoryId: this.data.categoryId,
                ticketTypeId: this.data.type == 'private' ? 27 : 24,
            };
            this.ticketService.getTicketManagerByTicketCategoryId(queryParamBase).subscribe((res) => {
                this.editData = res[0];
                this.ticketCategoryData.categoryName = res[0].ticketCategoryName;
                this.ticketCategoryData.ticketManagerId = res[0].escalationLevelId0.ticketManagerId;
                this.ticketCategoryData.staffOne = res[0].escalationLevelId0.userId;
                if (res[0].escalationLevelId1) {
                    this.ticketCategoryData.escalationDaysOne = res[0].escalationLevelId1.escalationDays;
                    this.ticketCategoryData.ticketManagerIdOne = res[0].escalationLevelId1.ticketManagerId;
                    this.ticketCategoryData.staffTwo = res[0].escalationLevelId1.userId;
                }
                if (res[0].escalationLevelId2) {
                    this.ticketCategoryData.escalationDaysTwo = res[0].escalationLevelId2.escalationDays;
                    this.ticketCategoryData.ticketManagerIdTwo = res[0].escalationLevelId2.ticketManagerId;
                    this.ticketCategoryData.staffThree = res[0].escalationLevelId2.userId;
                }
            });
        }
    }
    ngOnInit() {
        this.staffsdropdownSettings = {
            singleSelection: true,
            primaryKey: 'userId',
            labelKey: 'customLabel',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 130
        };
        this.staffService.getAllStaffs().subscribe((res) => {
            if (res.length) {
                res.forEach((ele) => {
                    ele.customLabel = `${ele.firstName} ${ele.lastName} ${ele.staffCategory_Label}`;
                });
                this.staffsList = res;
                ;
                //EditMode
                this.patchData();
            }
        }, error => {
            console.log(error);
        });
    }
};
AddTicketCategoryComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddTicketCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-ticket-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-ticket-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-ticket-category.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], Object])
], AddTicketCategoryComponent);



/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvY29tbW9uLWNhdGVnb3J5L2NvbW1vbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: CommonCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonCategoryComponent", function() { return CommonCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-ticket-category/add-ticket-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");








let CommonCategoryComponent = class CommonCategoryComponent {
    constructor(router, dialog, ticketService, sessionService) {
        this.router = router;
        this.dialog = dialog;
        this.ticketService = ticketService;
        this.sessionService = sessionService;
        this.commonFilter = "";
        this.isDataLoaded = true;
        this.totalItems = 0;
    }
    addTicket(mode, categoryId) {
        let data = { type: 'common', mode, categoryId };
        const dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__["AddTicketCategoryComponent"], {
            panelClass: 'material-dialog-medium',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getCommonCategoryList();
            }
        });
    }
    onCommonCatEdit(detail) {
        let dataRecord = this.commondatagrid.getrowdata(detail.rowId);
        this.addTicket('edit', dataRecord.ticketCategoryId);
    }
    onCommonCatDelete(detail) {
        let dataRecord = this.commondatagrid.getrowdata(detail.rowId);
        let lookupValueId = dataRecord.lookupValueId;
        // this.modalService.showConfirmModal(lookupValueId);
    }
    commonSearch() {
        if (this.commonFilter != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.commonFilter;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.commondatagrid.showfiltercolumnbackground(false);
            this.commonColumns.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.commondatagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.commondatagrid.applyfilters();
        }
        else {
            this.commondatagrid.clearfilters();
        }
    }
    getCommonCategoryList() {
        this.isDataLoaded = true;
        let params = {
            apartmentId: this.sessionService.apartmentId,
            ticketTypeId: 24,
        };
        this.ticketService.getAllTicketManagerByApartmentId(params).subscribe((res) => {
            if (res.length > 0) {
                this.totalItems = res.length;
                let data = {
                    localdata: res,
                    datatype: "array"
                };
                this.commonListData = new jqx.dataAdapter(data);
            }
            this.isDataLoaded = false;
        });
    }
    ngOnInit() {
        this.getCommonCategoryList();
        var cellsrendererCommon = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrendererCommon = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.commonColumns = [{
                text: 'Category',
                datafield: 'ticketCategoryName',
                width: 200,
                pinned: true,
                cellsrenderer: cellsrendererCommon,
                renderer: columnrendererCommon
            }, {
                text: 'Supervisor',
                datafield: "escalationLevelId0",
                cellsrenderer: (row, column, value) => {
                    if (value)
                        value = this.commonListData.loadedData[row].escalationLevelId0.userName;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererCommon
            }, {
                text: 'Level-1',
                datafield: 'escalationLevelId1',
                cellsrenderer: (row, column, value) => {
                    if (value)
                        value = this.commonListData.loadedData[row].escalationLevelId1.userName;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'L1 escdays',
                cellsrenderer: (row, column, value) => {
                    if (this.commonListData.loadedData[row].escalationLevelId1)
                        value = this.commonListData.loadedData[row].escalationLevelId1.escalationDays;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererCommon
            }, {
                text: 'Level-2',
                datafield: 'escalationLevelId2',
                cellsrenderer: (row, column, value) => {
                    if (value)
                        value = this.commonListData.loadedData[row].escalationLevelId2.userName;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'L2 escdays',
                cellsrenderer: (row, column, value) => {
                    if (this.commonListData.loadedData[row].escalationLevelId2)
                        value = this.commonListData.loadedData[row].escalationLevelId2.escalationDays;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererCommon
            }];
    }
};
CommonCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
];
CommonCategoryComponent.propDecorators = {
    commondatagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['commondatagrid', { static: false },] }],
    onCommonCatEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onCommonCatEdit', ['$event.detail'],] }],
    onCommonCatDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onCommonCatDelete', ['$event.detail'],] }]
};
CommonCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./common-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./common-category.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
], CommonCategoryComponent);

function showConfirmDeleteEventCommon(row) {
    var event = new CustomEvent('onCommonCatDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEventCommon = showConfirmDeleteEventCommon;
function editCommonCatEvent(row) {
    var event = new CustomEvent('onCommonCatEdit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editCommonCatEvent = editCommonCatEvent;


/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay1zZXR1cC9oZWxwZGVzay1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXNldHVwL2hlbHBkZXNrLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmRhdG9yeXtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HelpdeskSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskSetupComponent", function() { return HelpdeskSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HelpdeskSetupComponent = class HelpdeskSetupComponent {
    constructor() { }
    ngOnInit() {
        this.navArray = [
            { link: 'private-category', name: 'Private Category' },
            { link: 'common-category', name: 'Common Category' }
        ];
    }
};
HelpdeskSetupComponent.ctorParameters = () => [];
HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-setup.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HelpdeskSetupComponent);



/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvcHJpdmF0ZS1jYXRlZ29yeS9wcml2YXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: PrivateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateCategoryComponent", function() { return PrivateCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../add-ticket-category/add-ticket-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");








let PrivateCategoryComponent = class PrivateCategoryComponent {
    constructor(router, dialog, ticketService, sessionService) {
        this.router = router;
        this.dialog = dialog;
        this.ticketService = ticketService;
        this.sessionService = sessionService;
        this.isDataLoaded = true;
        this.totalItems = 0;
    }
    addTicket(mode, categoryId) {
        let data = { type: 'private', mode, categoryId };
        const dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__["AddTicketCategoryComponent"], {
            panelClass: 'material-dialog-medium',
            data: data
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getPrivateCategoryList();
            }
        });
    }
    onPrivateCatEdit(detail) {
        let dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
        this.addTicket('edit', dataRecord.ticketCategoryId);
    }
    onPrivateCatDelete(detail) {
        let dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
        let lookupValueId = dataRecord.lookupValueId;
        //this.modalService.showConfirmModal(lookupValueId);
    }
    privateSearch() {
        if (this.privateFilter != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.privateFilter;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.privatedatagrid.showfiltercolumnbackground(false);
            this.privateColumns.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.privatedatagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.privatedatagrid.applyfilters();
        }
        else {
            this.privatedatagrid.clearfilters();
        }
    }
    getPrivateCategoryList() {
        this.isDataLoaded = true;
        let params = {
            apartmentId: this.sessionService.apartmentId,
            ticketTypeId: 27,
        };
        this.ticketService.getAllTicketManagerByApartmentId(params).subscribe((res) => {
            if (res.length > 0) {
                this.totalItems = res.length;
                let data = {
                    localdata: res,
                    datatype: "array"
                };
                this.privateListData = new jqx.dataAdapter(data);
            }
            this.isDataLoaded = false;
        });
    }
    ngOnInit() {
        this.getPrivateCategoryList();
        var cellsrendererPrivate = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrendererPrivate = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.privateColumns = [{
                text: 'Category',
                datafield: 'ticketCategoryName',
                width: 200,
                pinned: true,
                cellsrenderer: cellsrendererPrivate,
                renderer: columnrendererPrivate
            }, {
                text: 'Supervisor',
                datafield: "escalationLevelId0",
                cellsrenderer: (row, column, value) => {
                    if (value)
                        value = this.privateListData.loadedData[row].escalationLevelId0.userName;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-1',
                datafield: 'escalationLevelId1',
                cellsrenderer: (row, column, value) => {
                    if (value)
                        value = this.privateListData.loadedData[row].escalationLevelId1.userName;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'L1 escdays',
                cellsrenderer: (row, column, value) => {
                    if (this.privateListData.loadedData[row].escalationLevelId1)
                        value = this.privateListData.loadedData[row].escalationLevelId1.escalationDays;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-2',
                datafield: 'escalationLevelId2',
                cellsrenderer: (row, column, value) => {
                    if (value)
                        value = this.privateListData.loadedData[row].escalationLevelId2.userName;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'L2 escdays',
                cellsrenderer: (row, column, value) => {
                    if (this.privateListData.loadedData[row].escalationLevelId2)
                        value = this.privateListData.loadedData[row].escalationLevelId2.escalationDays;
                    else
                        value = "";
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererPrivate
            }];
    }
};
PrivateCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] }
];
PrivateCategoryComponent.propDecorators = {
    privatedatagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['privatedatagrid', { static: false },] }],
    onPrivateCatEdit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onPrivateCatEdit', ['$event.detail'],] }],
    onPrivateCatDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onPrivateCatDelete', ['$event.detail'],] }]
};
PrivateCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./private-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./private-category.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"]])
], PrivateCategoryComponent);

function showConfirmDeleteEventPrivate(row) {
    var event = new CustomEvent('onPrivateCatDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEventPrivate = showConfirmDeleteEventPrivate;
function editPrivateCatEvent(row) {
    var event = new CustomEvent('onPrivateCatEdit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editPrivateCatEvent = editPrivateCatEvent;


/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("app-helpdesk-ticket-filter {\n  display: flex;\n  flex: 1 1 auto;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer {\n  max-width: 480px !important;\n  width: 480px !important;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer .helpdesk-filter-drawer {\n  padding: 30px 25px 30px 25px;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer .helpdesk-filter-drawer .title {\n  display: flex;\n  margin: 0 0 30px 0;\n}\napp-helpdesk-ticket-filter .mat-drawer-container .mat-drawer .helpdesk-filter-drawer .title h4 {\n  padding: 10px 0 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay10aWNrZXQtZmlsdGVyL2hlbHBkZXNrLXRpY2tldC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFEUTtFQUNJLDRCQUFBO0FBR1o7QUFGWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUhnQjtFQUNJLDhCQUFBO0FBS3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay10aWNrZXQtZmlsdGVyL2hlbHBkZXNrLXRpY2tldC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtaGVscGRlc2stdGlja2V0LWZpbHRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAubWF0LWRyYXdlci1jb250YWluZXIgLm1hdC1kcmF3ZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xuICAgICAgICAuaGVscGRlc2stZmlsdGVyLWRyYXdlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDI1cHggMzBweCAyNXB4O1xuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgICAgICAgICAgICAgICBoNCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAwIDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: HelpdeskTicketFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskTicketFilterComponent", function() { return HelpdeskTicketFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let HelpdeskTicketFilterComponent = class HelpdeskTicketFilterComponent {
    constructor(activateRouter, router, injector, userService, staffService, ticketService, lookupService, sharedService, sessionService) {
        this.activateRouter = activateRouter;
        this.router = router;
        this.injector = injector;
        this.userService = userService;
        this.staffService = staffService;
        this.ticketService = ticketService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.ticketData = "";
        this.isTicketDataLoaded = false;
        //Filter Purpose
        this.filterData = {
            ticketStatus: '',
            staff: null,
            supervisor: null
        };
        this.staffsList = [];
        this.ticketStatusList = [];
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    onEditTicket(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let ticketId = dataRecord.ticketId;
        if (this.isAdmin())
            this.router.navigateByUrl('/ams/helpdesk/edit-ticket/' + ticketId);
        else
            this.router.navigate(['/user/servicedesk/edit-ticket/' + ticketId]);
    }
    onTicketDelete(detail) {
        this.modalService.showConfirmModal(detail.rowId);
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'helpdeskData');
    }
    isAdmin() {
        return (this.sessionService.roleTypeName == 'Admin' || this.sessionService.roleTypeName == 'Staff') ? true : false;
    }
    createTicketNavigate() {
        if (this.isAdmin())
            this.router.navigate(['/ams/helpdesk/create-ticket']);
        else
            this.router.navigate(['/user/servicedesk/create-ticket']);
    }
    // condo-select
    // dropDownSelect(event,type) {
    //   if(type == 'status') 
    //     this.filter.ticketStatus = event[0].lookupValueId;
    //   else if(type == 'staff')
    //     this.filter.staff = event[0].staffId;
    //   else if(type == 'supervisor')
    //     this.filter.supervisor = event[0].staffId;
    // }
    onGlSearchFilter() {
        if (this.ticketData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.ticketData;
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
        this.isTicketDataLoaded = false;
        let params = {
            apartmentId: this.sessionService.apartmentId,
            ticketStatusIds: this.filterData.ticketStatus,
            assigntoSupervisorId: this.filterData.supervisor,
            assigntoStaffId: this.filterData.staff,
        };
        this.ticketService.getAllTicketsByApartmentId(params).subscribe((res) => {
            this.totalItems = res.length;
            let ticketInfo = {
                localdata: res.reverse(),
                datatype: "array"
            };
            this.ticketListData = new jqx.dataAdapter(ticketInfo);
            this.isTicketDataLoaded = true;
            this.goBack();
        });
    }
    clearFilter() {
        this.filterData = {
            ticketStatus: '',
            staff: null,
            supervisor: null
        };
        this.getTicketByAdmin();
        this.goBack();
    }
    goBack() {
        this.matDrawer.close();
    }
    getTicketByAdmin() {
        let params = {
            apartmentId: this.sessionService.apartmentId,
        };
        if (this.urlType == 'open-tickets') {
            params.ticketStatusIds = "32,33,46";
        }
        else if (this.urlType == 'closed-tickets') {
            params.ticketStatusIds = "34";
        }
        else if (this.urlType == 'unassigned') {
            params.isStaffassigned = false;
        }
        else if (this.urlType == 'assigned-to-me') {
            this.getTicketByUserId();
            return;
        }
        this.ticketService.getAllTicketsByApartmentId(params).subscribe((res) => {
            this.totalItems = res.length;
            let ticketInfo = {
                localdata: res.reverse(),
                datatype: "array"
            };
            this.ticketListData = new jqx.dataAdapter(ticketInfo);
            this.isTicketDataLoaded = true;
        });
    }
    getTicketByUserId() {
        let params = {
            apartmentId: this.sessionService.apartmentId,
            //ticketStatusIds: params.ticketStatusIds,
            userId: this.sessionService.userId,
        };
        this.ticketService.getAllTicketsAssignedtoUserByApartmentId(params).subscribe((res) => {
            this.totalItems = res.length;
            let ticketInfo = {
                localdata: res.reverse(),
                datatype: "array"
            };
            this.ticketListData = new jqx.dataAdapter(ticketInfo);
            this.isTicketDataLoaded = true;
        });
    }
    ngOnInit() {
        this.activateRouter.url.subscribe((data) => {
            this.urlType = data[0].path;
        });
        if (this.sessionService.roleTypeName == 'Admin' || this.sessionService.roleTypeName == 'Staff') {
            this.getTicketByAdmin();
        }
        else if (this.sessionService.roleTypeName == 'Tenant' || this.sessionService.roleTypeName == 'Owner') {
            this.getTicketByUserId();
        }
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Ticket ID',
                datafield: 'serialNo',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Type',
                datafield: 'ticketTypeId',
                cellsrenderer: (row, column, value) => {
                    if (value == 24) {
                        return '<div class="jqx-custom-inner-cell"><img src="assets/images/common-ticket-icon.svg"></div>';
                    }
                    else {
                        return '<div class="jqx-custom-inner-cell"><img src="assets/images/private-ticket-icon.svg"></div>';
                    }
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Status',
                datafield: 'ticketStatusId',
                cellsrenderer: (row, column, value) => {
                    let status, label;
                    if (value == 32) {
                        status = 'purple';
                        label = 'New';
                    }
                    else if (value == 33) {
                        status = 'orange';
                        label = 'Assigned';
                    }
                    else if (value == 34) {
                        status = 'green';
                        label = 'Resolved';
                    }
                    else if (value == 46) {
                        status = 'red';
                        label = 'On Hold';
                    }
                    return `<div class="jqx-custom-inner-cell">
             <div class="status-badge bg-status-${status}-700">
               <span class="font-bold text-status-${status}-900 text-uppercase">${label ? label : ''}</span>
             </div>
          </div>`;
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Category',
                datafield: 'ticketCategoryId_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Priority',
                datafield: 'ticketPriorityId',
                cellsrenderer: (row, column, value) => {
                    //47==High 48==Medium 49==Low
                    let priority;
                    if (value == 47) {
                        priority = 'bg-orange-900';
                    }
                    else if (value == 48) {
                        priority = 'bg-green-900';
                    }
                    else if (value == 49) {
                        priority = 'bg-purple-900';
                    }
                    return `<div class="simple-actions"><span class="dots ${priority}"></span></div>`;
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Description',
                datafield: 'description',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Supervisor',
                datafield: 'assignedTo_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'Assigned to Staff',
                datafield: 'staffId_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'Requested By',
                datafield: 'raisedby_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'Date Requested',
                datafield: 'insertedOn',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_12__(value).format("DD-MM-YYYY hh:mm A") + '</div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicket(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }
        ];
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let dataRecord = this.datagrid.getrowdata(id);
                let ticketId = dataRecord.ticketId;
                let params = {
                    ticketId: ticketId,
                    deleteBy: parseInt(this.sessionService.userId)
                };
                this.ticketService.deleteTicket(params).subscribe((res) => {
                    setTimeout(() => {
                        this.datagrid.deleterow(id);
                        this.totalItems = this.ticketListData.length;
                        this.sharedService.setAlertMessage("Ticket deleted");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                });
            }
        });
        //Filter Purpose => Staff
        let staffParams = {
            apartmentId: this.sessionService.apartmentId,
        };
        this.ticketService.getStaffToAssignTicketbyApartmentId(staffParams).subscribe((res) => {
            this.staffsList = res;
        });
        //Filter Purpose => Ticket Status
        let statusParams = {
            LookupTypeId: 9
        };
        this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe((res) => {
            this.ticketStatusList = res;
        });
    }
};
HelpdeskTicketFilterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }
];
HelpdeskTicketFilterComponent.propDecorators = {
    matDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['matDrawer', { static: true },] }],
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    onEditTicket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onEditTicket', ['$event.detail'],] }],
    onTicketDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onTicketDelete', ['$event.detail'],] }]
};
HelpdeskTicketFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-ticket-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-ticket-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-ticket-filter.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]])
], HelpdeskTicketFilterComponent);

function getClassName(value) {
    var name = value.split('-');
    return name[0].toLowerCase();
}
window.getClassName = getClassName;
function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onTicketDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;
function editTicket(row) {
    var event = new CustomEvent('onEditTicket', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editTicket = editTicket;


/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stdW5hc3NpZ25lZC9oZWxwZGVzay11bmFzc2lnbmVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: HelpdeskUnassignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskUnassignedComponent", function() { return HelpdeskUnassignedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);












let HelpdeskUnassignedComponent = class HelpdeskUnassignedComponent {
    constructor(router, injector, userService, staffService, ticketService, lookupService, sharedService, sessionService) {
        this.router = router;
        this.injector = injector;
        this.userService = userService;
        this.staffService = staffService;
        this.ticketService = ticketService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.ticketData = "";
        this.isTicketDataLoaded = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    onEditTicket(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let ticketId = dataRecord.ticketId;
        this.router.navigateByUrl('/ams/helpdesk/edit-ticket/' + ticketId);
    }
    onTicketDelete(detail) {
        this.modalService.showConfirmModal(detail.rowId);
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'helpdeskData');
    }
    isAdmin() {
        return (this.sessionService.roleTypeName == 'Admin' || this.sessionService.roleTypeName == 'Staff') ? true : false;
    }
    onGlSearchFilter() {
        if (this.ticketData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.ticketData;
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
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Ticket ID',
                datafield: 'serialNo',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Type',
                datafield: 'ticketTypeId',
                cellsrenderer: (row, column, value) => {
                    if (value == 24) {
                        return '<div class="jqx-custom-inner-cell"><img src="assets/images/common-ticket-icon.svg"></div>';
                    }
                    else {
                        return '<div class="jqx-custom-inner-cell"><img src="assets/images/private-ticket-icon.svg"></div>';
                    }
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Status',
                datafield: 'ticketStatusId_Label',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell"><span class="badge small min text-capitalize ' + getClassName(value) + '">' + value + '</span></div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Category',
                datafield: 'ticketCategoryId_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Priority',
                datafield: 'ticketPriorityId_Label',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell"><span class="dots rt-3 ' + getClassName(value) + '"></span></div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Description',
                datafield: 'description',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Assigned to',
                datafield: 'assignedTo_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'Requested By',
                datafield: 'raisedby_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'Date Requested',
                datafield: 'insertedOn',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_11__(value).format("DD-MM-YYYY hh:mm A") + '</div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        if (this.sessionService.roleTypeName == 'Admin' || this.sessionService.roleTypeName == 'Staff') {
            let params = {
                apartmentId: this.sessionService.apartmentId
            };
            this.ticketService.getAllTicketsByApartmentId(params).subscribe((res) => {
                //filter active true items
                var ticketListData = res.filter(data => {
                    return (data.isActive && data.assignedTo == null);
                });
                // for (var i = 0; i < ticketListData.length; i++) {
                //   if (ticketListData[i].ticketStatusId_Label == 'New') {
                //     ticketListData[i].ticketStatusId_Label = 'inprogress';
                //   }
                // }
                this.gridSourceData = {
                    localdata: ticketListData,
                    datatype: "array"
                };
                this.ticketListData = new jqx.dataAdapter(this.gridSourceData);
                this.isTicketDataLoaded = true;
            }, error => {
            });
        }
        if (this.sessionService.roleTypeName == 'Tenant' || this.sessionService.roleTypeName == 'Owner') {
            let params = {
                raisedUserId: parseInt(this.sessionService.userId)
            };
            this.ticketService.getTicketsByRaisedUserId(params).subscribe((res) => {
                //filter active true items
                var ticketListData = res.filter(data => {
                    return data.isActive;
                });
                this.gridSourceData = {
                    localdata: ticketListData,
                    datatype: "array"
                };
                this.ticketListData = new jqx.dataAdapter(this.gridSourceData);
                this.isTicketDataLoaded = true;
            }, error => {
            });
        }
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let dataRecord = this.datagrid.getrowdata(id);
                let ticketId = dataRecord.ticketId;
                let params = {
                    ticketId: ticketId,
                    deleteBy: parseInt(this.sessionService.userId)
                };
                this.ticketService.deleteTicket(params).subscribe((res) => {
                    /*_.each(this.ticketListData, (type)=>{
                      if(type.ticketId == id){
                        type.isActive = false;
                      }
                    })*/
                    setTimeout(() => {
                        /*this.ticketListData = this.ticketListData.filter((type) => type.ticketId !== id);*/
                        this.datagrid.deleterow(id);
                        this.totalItems = this.ticketListData.length;
                        this.sharedService.setAlertMessage("Ticket deleted");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
HelpdeskUnassignedComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"] }
];
HelpdeskUnassignedComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    onEditTicket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onEditTicket', ['$event.detail'],] }],
    onTicketDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onTicketDelete', ['$event.detail'],] }]
};
HelpdeskUnassignedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-unassigned',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-unassigned.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-unassigned.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_10__["SessionService"]])
], HelpdeskUnassignedComponent);

function getClassName(value) {
    var name = value.split('-');
    return name[0].toLowerCase();
}
window.getClassName = getClassName;
function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onTicketDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;
function editTicketEvent(row) {
    var event = new CustomEvent('onEditTicket', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editTicketEvent = editTicketEvent;


/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stdXBkYXRlLXRpY2tldC9oZWxwZGVzay11cGRhdGUtdGlja2V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: HelpdeskUpdateTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskUpdateTicketComponent", function() { return HelpdeskUpdateTicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HelpdeskUpdateTicketComponent = class HelpdeskUpdateTicketComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.ticketCount = 1;
        this.isEditTicket = false;
    }
    addTicket() {
        this.ticketCount++;
        this.ticketArray = Array(this.ticketCount).fill(0).map((x, i) => i);
    }
    getTicketArray(event) {
        this.ticketArray = event;
        this.ticketCount = this.ticketArray.length;
    }
    isMobileView() {
        return window.innerWidth <= 576;
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.isEditTicket = true;
        }
        this.ticketArray = Array(this.ticketCount).fill(0).map((x, i) => i);
    }
};
HelpdeskUpdateTicketComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
HelpdeskUpdateTicketComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-update-ticket',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-update-ticket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-update-ticket.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], HelpdeskUpdateTicketComponent);



/***/ }),

/***/ "./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: HelpdeskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskRoutingModule", function() { return HelpdeskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/helpdesk-setup/helpdesk-setup.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
/* harmony import */ var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/helpdesk-reports/helpdesk-reports.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
/* harmony import */ var _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/helpdesk-setup/private-category/private-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts");
/* harmony import */ var _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/helpdesk-setup/common-category/common-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts");
/* harmony import */ var src_app_shared_components_help_desk_create_ticket_help_desk_create_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/components/help-desk-create-ticket/help-desk-create-ticket.component */ "./src/app/shared/components/help-desk-create-ticket/help-desk-create-ticket.component.ts");
/* harmony import */ var _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/helpdesk-ticket-filter/helpdesk-ticket-filter.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts");









const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"],
        children: [
            { path: '', redirectTo: 'private-category', pathMatch: 'full' },
            { path: 'private-category', component: _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_5__["PrivateCategoryComponent"] },
            { path: 'common-category', component: _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_6__["CommonCategoryComponent"] },
            { path: '**', redirectTo: 'private-category', pathMatch: 'full' }
        ]
    },
    { path: 'create-ticket', component: src_app_shared_components_help_desk_create_ticket_help_desk_create_ticket_component__WEBPACK_IMPORTED_MODULE_7__["HelpDeskCreateTicketComponent"] },
    { path: 'edit-ticket/:id', component: src_app_shared_components_help_desk_create_ticket_help_desk_create_ticket_component__WEBPACK_IMPORTED_MODULE_7__["HelpDeskCreateTicketComponent"] },
    { path: 'unassigned', component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskTicketFilterComponent"] },
    { path: 'open-tickets', component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskTicketFilterComponent"] },
    { path: 'closed-tickets', component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskTicketFilterComponent"] },
    { path: 'assigned-to-me', component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskTicketFilterComponent"] },
    { path: 'all-tickets', component: _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskTicketFilterComponent"] },
    { path: 'reports', component: _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let HelpdeskRoutingModule = class HelpdeskRoutingModule {
};
HelpdeskRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HelpdeskRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/helpdesk/helpdesk.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/helpdesk.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2hlbHBkZXNrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/helpdesk.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/helpdesk.component.ts ***!
  \************************************************************/
/*! exports provided: HelpdeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function() { return HelpdeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HelpdeskComponent = class HelpdeskComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpdeskComponent.ctorParameters = () => [];
HelpdeskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk.component.scss */ "./src/app/modules/ams/helpdesk/helpdesk.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HelpdeskComponent);



/***/ }),

/***/ "./src/app/modules/ams/helpdesk/helpdesk.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/helpdesk.module.ts ***!
  \*********************************************************/
/*! exports provided: HelpdeskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskModule", function() { return HelpdeskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpdesk-routing.module */ "./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var _helpdesk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpdesk.component */ "./src/app/modules/ams/helpdesk/helpdesk.component.ts");
/* harmony import */ var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/helpdesk-setup/helpdesk-setup.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
/* harmony import */ var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
/* harmony import */ var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
/* harmony import */ var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/helpdesk-reports/helpdesk-reports.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
/* harmony import */ var _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/helpdesk-reports/open-tickets-report/open-tickets-report.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");
/* harmony import */ var _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/helpdesk-setup/add-ticket-category/add-ticket-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/helpdesk-setup/common-category/common-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts");
/* harmony import */ var _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/helpdesk-setup/private-category/private-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts");
/* harmony import */ var _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/helpdesk-ticket-filter/helpdesk-ticket-filter.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");

















let HelpdeskModule = class HelpdeskModule {
};
HelpdeskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"],
            _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskSetupComponent"],
            _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskUpdateTicketComponent"],
            _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskUnassignedComponent"],
            _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskReportsComponent"],
            _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_11__["OpenTicketsReportComponent"],
            _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_12__["AddTicketCategoryComponent"],
            _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_13__["CommonCategoryComponent"],
            _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_14__["PrivateCategoryComponent"],
            _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_15__["HelpdeskTicketFilterComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskRoutingModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_16__["SelectModule"],
        ],
        bootstrap: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"]]
    })
], HelpdeskModule);



/***/ })

}]);
//# sourceMappingURL=modules-ams-helpdesk-helpdesk-module-es2015.js.map