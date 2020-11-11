(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-common-helpdesk-helpdesk-reports-helpdesk-reports-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n\t\t<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n\t\t\t\t<mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n\t\t\t\t\t<div class=\"helpdesk-filter-drawer p-5\">\n\t\t\t\t\t\t<div class=\"title row\">\n\t\t\t\t\t\t\t<h4> Filter By </h4>\n\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<condo-card>\n\t\t\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<form>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"filter-box cleafix\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"row align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3 mb-2\" [ngClass]=\"filterSelected == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllBlockData('all')\">All\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tTowers</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [ngClass]=\"filterSelected != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleBlockActions\">{{singleBlock}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleBlockActions=\"matMenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let block of unitBlocksData\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item (click)=\"getSingleBlock(block)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{block.apartmentBlockNumber}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <condo-select [fieldModel]=\"blockId\" labelText=\"Tower No\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t [fieldRequired]=\"'required'\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>Start Date<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"startDate\" placeholder=\"Date Time\" [(ngModel)]=\"start_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t\t\t\t\t<owl-date-time #startDate></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label>End Date<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"endDate\" placeholder=\"Date\" [(ngModel)]=\"end_date\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<owl-date-time #endDate></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right mt-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</condo-card>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</mat-drawer>\n\t\t\t\t<mat-drawer-content>\n\t\t<div class=\"main\">\n\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfTickets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/reports\" \n\t\t\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2 ml-3\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4>List of Open and closed tickets</h4>\n\t\t\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"ml-auto my-auto\">\n\t\t\t\t\t\t\t<app-table-search [input]=\"reportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- De Activated Users -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListofAgedtickets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/reports\" \n\t\t\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2 ml-3\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block my-auto\">\n\t\t\t\t\t\t<app-table-search [input]=\"reportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\n\t\t<!-- vehicle info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListofUnassignedtickets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/reports\" \n\t\t\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2 ml-3\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block my-auto\">\n\t\t\t\t\t\t<app-table-search [input]=\"reportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t\n\t\n\t\n\t</div>\n</mat-drawer-content>\n</mat-drawer-container>\n\t\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<h5 class=\"mb-4\">Helpdesk Reports</h5>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6 mb-4\" *ngFor=\"let report of reportDataList; let i = index\">\n\n\t\t\t\t\t<condo-card>\n\t\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"{{getReportRedirectPath(report.lookupValueName)}}/{{report.lookupValueID}}\"\n\t\t\t\t\t\t\t routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t\t\t<div class=\"p-4 bg-cool-gray-50\"></div> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</condo-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n\t\t<div class=\"main\">\n\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t\t<condo-card *ngIf=\"isDataLoaded && (isListOfResidents() || isListOfApprovedUsers())\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- De Activated Users -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfDeactivatedUsers()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\n\t\t<!-- vehicle info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfResidentsVehicleInfo()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Rental info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfExpiringRental()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Pets info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUsersWithPets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Units -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUnits()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Blocks -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfBlocks()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Tenant -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfTenants()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Owners -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfOwners()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Admins -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfAdmins()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t</div>\n\t</div>");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL2hlbHBkZXNrL2hlbHBkZXNrLXJlcG9ydHMvaGVscGRlc2stcmVwb3J0cy1kYXRhL2hlbHBkZXNrLXJlcG9ydHMtZGF0YS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: HelpdeskReportsDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskReportsDataComponent", function() { return HelpdeskReportsDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let HelpdeskReportsDataComponent = class HelpdeskReportsDataComponent {
    constructor(route, apartmentService, lookupService, sharedService, sessionService, ticketService) {
        this.route = route;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.ticketService = ticketService;
        this.pageName = "";
        this.pageDesp = "";
        this.userReportData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isDataLoaded = false;
        this.blockId = null;
        this.blockNo = "";
        this.end_date = null;
        this.start_date = null;
        this.reportData = "";
        this.filterSelected = "all";
        this.singleBlock = "Select Tower";
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
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).add(this.timeZone.offset, 'hours').format(this.timeZone.time);
    }
    getSelectedType(event) {
        this.blockId = event[0].apartmentBlockId;
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
    getBlockDetails() {
        //jqx column generating
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.isDataLoaded = false;
        if (this.isListOfTickets()) {
            this.columnData = [{
                    text: 'User Name',
                    datafield: 'userName',
                    minwidth: 150,
                    maxwidth: 170,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 120,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 110,
                    maxwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    minwidth: 100,
                    maxwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    minwidth: 100,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    minwidth: 220,
                    maxwidth: 240,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    minwidth: 120,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Status',
                    datafield: 'ticketStatus',
                    minwidth: 120,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var details = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.blockId === "" ? 1 : parseInt(this.blockId),
                StartDate: this.getDate(this.start_date),
                EndDate: this.getDate(this.end_date),
                TicketStatus: this.TicketStatus,
                TicketType: this.TicketType,
                TicketRaisedBy: this.TicketRaisedBy,
                AssignedToStaffId: this.AssignedToStaffId,
                StaffCategoryType: this.StaffCategoryType,
                StaffSubCategoryType: this.StaffSubCategoryType,
            };
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
                    minwidth: 130,
                    maxwidth: 140,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 100,
                    maxwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 100,
                    maxwidth: 110,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    minwidth: 100,
                    maxwidth: 110,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    minwidth: 100,
                    maxwidth: 110,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    minwidth: 220,
                    maxwidth: 240,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    minwidth: 100,
                    maxwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Age',
                    datafield: 'ticketAge',
                    minwidth: 80,
                    maxwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Status',
                    datafield: 'ticketStatus',
                    minwidth: 150,
                    maxwidth: 170,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var details = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.blockId === "" ? 1 : parseInt(this.blockId),
                StartDate: this.start_date === null ? "2020-01-01" : this.getDate(this.start_date),
                EndDate: this.end_date === null ? moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format(this.timeZone.time) : this.getDate(this.end_date),
                TicketStatus: this.TicketStatus,
                TicketType: this.TicketType,
                TicketRaisedBy: this.TicketRaisedBy,
                AssignedToStaffId: this.AssignedToStaffId,
                StaffCategoryType: this.StaffCategoryType,
                StaffSubCategoryType: this.StaffSubCategoryType,
            };
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
                    minwidth: 170,
                    maxwidth: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'blockNo',
                    minwidth: 130,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'unitNo',
                    minwidth: 110,
                    maxwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Type',
                    datafield: 'ticketType',
                    minwidth: 100,
                    maxwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'User Type',
                    datafield: 'userTypeName',
                    minwidth: 110,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Subject',
                    datafield: 'subject',
                    minwidth: 220,
                    maxwidth: 240,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Priority',
                    datafield: 'ticketPriority',
                    minwidth: 130,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Ticket Status',
                    datafield: 'ticketStatus',
                    minwidth: 130,
                    maxwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            var details = {
                ApartmentID: this.sessionService.apartmentId,
                ApartmentBlockID: this.blockId === "" ? 1 : parseInt(this.blockId),
                StartDate: this.start_date === null ? "2020-01-01" : this.getDate(this.start_date),
                EndDate: this.end_date === null ? moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format(this.timeZone.time) : this.getDate(this.end_date),
                TicketStatus: this.TicketStatus,
                TicketType: this.TicketType,
                TicketRaisedBy: this.TicketRaisedBy,
                AssignedToStaffId: this.AssignedToStaffId,
                StaffCategoryType: this.StaffCategoryType,
                StaffSubCategoryType: this.StaffSubCategoryType,
            };
            this.ticketService.getReportsForListofUnAssignedTicketsMultiFilter(details).subscribe((res) => {
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
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'HelpdeskReportsData');
    }
    goBack() {
        this.matDrawer.close();
    }
    filterApply() {
        this.goBack();
        this.isDataLoaded = false;
        this.getBlockDetails();
    }
    clearFilter() {
        this.blockId = "";
        this.start_date = null;
        this.end_date = null;
        this.filterSelected = 'all';
        this.singleBlock = "Select Tower";
        // =this.getTicketByAdmin();
        this.getBlockDetails();
        this.goBack();
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
HelpdeskReportsDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_8__["TicketService"] }
];
HelpdeskReportsDataComponent.propDecorators = {
    gridResident: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gridResident', { static: false },] }],
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    matDrawer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['matDrawer', { static: true },] }]
};
HelpdeskReportsDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-reports-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-reports-data.component.scss */ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_8__["TicketService"]])
], HelpdeskReportsDataComponent);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: HelpdeskReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskReportsRoutingModule", function() { return HelpdeskReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");
/* harmony import */ var _helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpdesk-reports-data/helpdesk-reports-data.component */ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts");
/* harmony import */ var _helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpdesk-reports.component */ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.ts");






const routes = [
    { path: '', component: _helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskReportsComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':name/:id', component: _helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskReportsDataComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
];
let HelpdeskReportsRoutingModule = class HelpdeskReportsRoutingModule {
};
HelpdeskReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HelpdeskReportsRoutingModule);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL2hlbHBkZXNrL2hlbHBkZXNrLXJlcG9ydHMvaGVscGRlc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.ts ***!
  \****************************************************************************************/
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
            LookupTypeId: 87,
            MenuName: 'HelpdeskTracker'
        };
        // this.reportDataList = [
        //   {lookupValueName: 'List of Open tickets', description:'Gives the list of open tickets in the condo',type:'customer'},
        // ]
        //  this.isDataLoaded = true;
        this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res) => {
            this.reportDataList = res;
            this.isDataLoaded = true;
        });
    }
    getReportRedirectPath(path) {
        return path.replace('/', '');
    }
};
HelpdeskReportsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }
];
HelpdeskReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-reports.component.scss */ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
], HelpdeskReportsComponent);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.module.ts ***!
  \*************************************************************************************/
/*! exports provided: HelpdeskReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskReportsModule", function() { return HelpdeskReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _helpdesk_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpdesk-reports-routing.module */ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-routing.module.ts");
/* harmony import */ var _helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpdesk-reports.component */ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports.component.ts");
/* harmony import */ var _open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./open-tickets-report/open-tickets-report.component */ "./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");
/* harmony import */ var _helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpdesk-reports-data/helpdesk-reports-data.component */ "./src/app/modules/common/helpdesk/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");










let HelpdeskReportsModule = class HelpdeskReportsModule {
};
HelpdeskReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskReportsComponent"],
            _open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_5__["OpenTicketsReportComponent"],
            _helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskReportsDataComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_9__["SelectModule"],
            _helpdesk_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskReportsRoutingModule"]
        ]
    })
], HelpdeskReportsModule);



/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29tbW9uL2hlbHBkZXNrL2hlbHBkZXNrLXJlcG9ydHMvb3Blbi10aWNrZXRzLXJlcG9ydC9vcGVuLXRpY2tldHMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: OpenTicketsReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTicketsReportComponent", function() { return OpenTicketsReportComponent; });
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










let OpenTicketsReportComponent = class OpenTicketsReportComponent {
    constructor(router, route, userService, apartmentService, lookupService, sharedService, sessionService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
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
    isListOfResidents() {
        return this.pageName == "List of Residents";
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
            ApartmentBlockID: this.blockId
        };
        if (this.isListOfResidents()) {
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
                },
                {
                    text: 'Vehicle Model',
                    datafield: 'vehicleModel',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Vehicle Number',
                    datafiled: 'vehicleNumber',
                    width: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            this.userService.getReportUnitUserResidentsbyApartmentIdBlockId(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfApprovedUsers()) {
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
                },
                {
                    text: 'Vehicle Model',
                    datafield: 'vehicleModel',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Vehicle Number',
                    datafiled: 'vehicleNumber',
                    width: 120,
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
        else if (this.isListOfExpiringRental()) {
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
                    text: 'Start Date',
                    datafield: 'agreementStartDate',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'End Date',
                    datafield: 'agreementEndDate',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Rental Lease',
                    datafield: 'rentalorLease',
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
                }
            ];
            this.userService.getReportExpiredRentLeaseAgreemtbyApartmentIdBlockId(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfUsersWithPets()) {
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
                    text: 'Pet Name',
                    datafield: 'petName',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Last Vaccination Date',
                    datafield: 'lastVaccinationDate',
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
            this.userService.getReportUnitUserPetInfobyApartmentIdBlockId(details).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfUnits()) {
            this.columnData = [{
                    text: 'User Type',
                    datafield: 'unitType',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Number',
                    datafield: 'apartmentBlockNumber',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Unit Number',
                    datafield: 'apartmentBlockUnitNumber',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Mobile',
                    datafield: 'intercom',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Available Date Date',
                    datafield: 'availableDate',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            let params = {
                apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockUnitByApartmentId(params).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfBlocks()) {
            this.columnData = [{
                    text: 'Block Number',
                    datafield: 'apartmentBlockNumber',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Common Area',
                    datafield: 'blockCommonArea',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Block Constructed Area',
                    datafield: 'blockConstructedArea',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Description',
                    datafield: 'description',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'No Of Units',
                    datafield: 'totalNounits',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'No Of Floors',
                    datafield: 'totalnofloors',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            let params = {
                apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfTenants()) {
            this.columnData = [{
                    text: 'Name',
                    datafield: 'firstName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Phone Number',
                    datafield: 'phoneNumber',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Gender',
                    datafield: 'genderId',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Email Id',
                    datafield: 'emailId',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Date of Birth',
                    datafield: 'dob',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            let params = {
                apartmentId: this.sessionService.apartmentId,
                roleId: 2
            };
            this.userService.getApartmentUsersByRoleId(params).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfOwners()) {
            this.columnData = [{
                    text: 'Name',
                    datafield: 'firstName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Phone Number',
                    datafield: 'phoneNumber',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Gender',
                    datafield: 'genderId',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Email Id',
                    datafield: 'emailId',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Date of Birth',
                    datafield: 'dob',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            let params = {
                apartmentId: this.sessionService.apartmentId,
                roleId: 4
            };
            this.userService.getApartmentUsersByRoleId(params).subscribe((res) => {
                let gridSourceData = {
                    localdata: res,
                    datatype: "array"
                };
                this.userReportDataList = new jqx.dataAdapter(gridSourceData);
                this.isDataLoaded = true;
                this.showItems();
            });
        }
        else if (this.isListOfAdmins()) {
            this.columnData = [{
                    text: 'Name',
                    datafield: 'firstName',
                    width: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Phone Number',
                    datafield: 'phoneNumber',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Gender',
                    datafield: 'genderId',
                    minwidth: 100,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Email Id',
                    datafield: 'emailId',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Date of Birth',
                    datafield: 'dob',
                    width: 200,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                }
            ];
            let params = {
                apartmentId: this.sessionService.apartmentId,
                roleId: 1
            };
            this.userService.getApartmentUsersByRoleId(params).subscribe((res) => {
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
        this.totalItems = this.userReportDataList.length;
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
OpenTicketsReportComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] }
];
OpenTicketsReportComponent.propDecorators = {
    gridResident: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gridResident', { static: false },] }]
};
OpenTicketsReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-tickets-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./open-tickets-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./open-tickets-report.component.scss */ "./src/app/modules/common/helpdesk/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])
], OpenTicketsReportComponent);



/***/ })

}]);
//# sourceMappingURL=modules-common-helpdesk-helpdesk-reports-helpdesk-reports-module-es2015.js.map