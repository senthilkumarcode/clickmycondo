(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-helpdesk-helpdesk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n\t\t<div class=\"main\">\n\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t\t<condo-card *ngIf=\"isDataLoaded && (isListOfTickets())\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\n\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t  <div class=\"ml-auto d-none d-md-block my-auto\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n\t\t\t\t\t  </div>\n\t\t\t\t\t  \n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t\t<condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n\t\t\t\t\t\t\t\t[fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n\t\t\t\t\t\t</div>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- De Activated Users -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListofAgedtickets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block my-auto\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n\t\t\t\t\t\t\t[fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\n\t\t<!-- vehicle info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListofUnassignedtickets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block my-auto\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control mt-4\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\" (ngModelChange)=\"onSearchFilter()\">\n\n\t\t\t\t  </div>\n\t\t\t\t  \n\t\t\t\t\t<div class=\"d-none d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<condo-select [fieldModel]=\"blockNo\" labelText=\"\" fieldPlaceholder=\"Select Tower\" fieldId=\"apartmentBlockId\"\n\t\t\t\t\t\t\t[fieldRequired]=\"\" [fieldList]=\"unitBlocksData\" [isDisabled]=\"false\"  fieldValue=\"apartmentBlockNumber\" (fieldParams)=\"getSelectedType($event)\"></condo-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Rental info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfExpiringRental()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Pets info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUsersWithPets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Units -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUnits()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Blocks -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfBlocks()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Tenant -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfTenants()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Owners -->\n\t\n\t\n\t\t<!-- List of Admins -->\n\t\n\t\n\t</div>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t\t<h5 class=\"mb-4\">Helpdesk Reports</h5>\n\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList; let i = index\">\n\n\t\t\t\t\t<condo-card>\n\t\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\" routerLink=\"{{getReportRedirectPath(report.lookupValueName)}}/{{report.lookupValueID}}\"\n\t\t\t\t\t\t\t routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t\t\t<div class=\"p-4 bg-cool-gray-50\"></div> \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</condo-card>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</ng-container>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-report-data-wrapper\">\n\t\t<div class=\"main\">\n\t\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t\t<condo-card *ngIf=\"isDataLoaded && (isListOfResidents() || isListOfApprovedUsers())\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- De Activated Users -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfDeactivatedUsers()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\n\t\t<!-- vehicle info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfResidentsVehicleInfo()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Rental info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfExpiringRental()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\n\t\t<!-- Pets info -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUsersWithPets()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Units -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfUnits()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Blocks -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfBlocks()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Tenant -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfTenants()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Owners -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfOwners()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t\t<!-- List of Admins -->\n\t\t<condo-card *ngIf=\"isDataLoaded && isListOfAdmins()\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userReportData\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<select name=\"blockId\" id=\"blockId\" class=\"form-control\" [(ngModel)]=\"blockId\"\n\t\t\t\t\t\t(ngModelChange)=\"getBlockDetails()\" required>\n\t\t\t\t\t\t<option value=\"\">All Blocks</option>\n\t\t\t\t\t\t<option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">\n\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"userReportDataList\" [columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"[columnsresize]=\"true\"   #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t\n\t</div>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-ticket-cateory-wrapper\">\n    <div class=\"main\">\n        <div class=\"bg-card shadow mb-0\">\n            <div class=\"d-flex\">\n                <h4 class=\"mb-4\">\n                    <span *ngIf=\"data.type == 'common'\">COMMON TICKET CATEGORY</span>\n                    <span *ngIf=\"data.type == 'private'\">PRIVATE TICKET CATEGORY</span>\n                </h4>\n                <mat-icon class=\"ml-auto\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n            </div>\n            <form #ticketCategoryForm=\"ngForm\" name=\"ticketCategoryForm\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Category Name<span class=\"mandatory\">*</span></label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" name=\"categoryName\" [(ngModel)]=\"ticketCategoryData.categoryName\" (input)=\"errorMessage=''\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                            labelText=\"Default Supervisor\"\n                            fieldPlaceholder=\"Default Supervisor\"\n                            [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"ticketCategoryData.staffOne\"\n                            fieldId=\"userId\"\n                            (fieldParams)=\"isExistUser($event,'one')\" \n                        ></condo-select>  \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <h6 class=\"mb-4\">Esclation Setup (Optional)</h6>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 1 After</label>\n                            <div class=\"d-flex\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Days\" name=\"escdayone\" [(ngModel)]=\"ticketCategoryData.escalationDaysOne\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-1 Manager\"\n                        fieldPlaceholder=\"Select Level-1 Manager\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffTwo\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'two')\" \n                        ></condo-select> \n                    </div>\n                    <div class=\"col-sm-12\">\n                        <div class=\"input-box\">\n                            <label>Auto Esclate to Level 2 After</label>\n                            <div class=\"d-flex\">\n                                <input type=\"text\" class=\"form-control d-inline-block w-40\" placeholder=\"Days\" name=\"escdaytwo\" [(ngModel)]=\"ticketCategoryData.escalationDaysTwo\">\n                                <label class=\"ml-4 align-self-end\">Days</label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <condo-select \n                        labelText=\"Select Level-2 Manager\"\n                        fieldPlaceholder=\"Select Level-2 Manager\"\n                        [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                        fieldValue=\"customLabel\"\n                        [fieldModel]=\"ticketCategoryData.staffThree\"\n                        fieldId=\"userId\"\n                        (fieldParams)=\"isExistUser($event,'three')\" \n                        ></condo-select> \n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <button class=\"float-right\" [disabled]=\"ticketCategoryForm.invalid\"  mat-flat-button  [color]=\"'primary'\" *ngIf=\"data.mode == 'create'\" (click)=\"createCategory()\">Submit</button>\n                        <button class=\"float-right\" [disabled]=\"ticketCategoryForm.invalid\"  mat-flat-button  [color]=\"'primary'\" *ngIf=\"data.mode == 'edit'\" (click)=\"updateCategory()\">Update</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"common-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Common Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto d-none d-md-block mr-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"commonFilter\"  (ngModelChange)=\"commonSearch()\">\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>\n                        Add Common Ticket Category</button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"commonListData\"\n                [columns]=\"commonColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #commondatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n        ");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"private-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Private Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto d-none d-md-block mr-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"privateFilter\"  (ngModelChange)=\"privateSearch()\">\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">\n                        <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>\n                        Add Private Ticket Category</button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"privateListData\"\n                [columns]=\"privateColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #privatedatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-all-tickets-wrapper content-layout right-sidebar-fullheight-basic-inner-scroll\">\n    <mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n        <mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n\t\t\t<div class=\"helpdesk-filter-drawer\">\n\t\t\t\t<div class=\"title\">\n\t\t\t\t\t<h4> Status </h4>\n\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<form>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Ticket Status\"\n                            fieldPlaceholder=\"Status\"\n                            [fieldList]=\"ticketStatusList\"\n                            fieldValue=\"lookupValueName\"\n                            [fieldModel]=\"filterData.ticketStatus\"\n                            fieldId=\"lookupValueId\"\n                            (fieldParams)=\"dropDownSelect($event,'status')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Staff\"\n                            fieldPlaceholder=\"Staff\"\n                            [fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"filterData.staff\"\n                            fieldId=\"staffId\"\n                            (fieldParams)=\"dropDownSelect($event,'staff')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<condo-select \n                            labelText=\"Supervisor\"\n                            fieldPlaceholder=\"Supervisor\"\n\t\t\t\t\t\t\t[fieldList]=\"staffsList | orderBy : 'staffName'\"\n                            fieldValue=\"customLabel\"\n                            [fieldModel]=\"filterData.supervisor\"\n                            fieldId=\"staffId\"\n                            (fieldParams)=\"dropDownSelect($event,'supervisor')\" \n                        \t></condo-select>  \n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<div class=\"text-right mt-4\">\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n        </mat-drawer>\n        <mat-drawer-content>\n\t\t\t<div class=\"main\">\n\t\t\t\t<!-- Loader -->\n\t\t\t\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\t\t\t\t<!-- Indicator -->\n\t\t\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t\t\t<ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/common-ticket-icon.svg\"><span>Common</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/private-ticket-icon.svg\"><span>Private</span></li>\n\t\t\t\t\t</ul>\n\t\t\t\t\n\t\t\t\t\t<ul class=\"legends ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-orange-900\"></span><span>High</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-green-900\"></span>Medium</li>\n\t\t\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots bg-purple-900\"></span>Low</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<!-- Table -->\n\t\t\t\t<condo-card *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='all-tickets'\">All Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='open-tickets'\">Open Assigned and Hold Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='closed-tickets'\">Closed Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='unassigned'\">Unassigned Tickets</span>\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"urlType=='assigned-to-me'\">My Tickets</span>\n\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" (ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"createTicketNavigate()\">Add Ticket</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"ml-3\" *ngIf=\"urlType=='all-tickets'\">\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t\t<jqxGrid\n\t\t\t\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t\t\t[pageable]=\"true\"\n\t\t\t\t\t\t\t[filterable]=\"true\"\n\t\t\t\t\t\t\t[sortable]=\"true\"\n\t\t\t\t\t\t\t[source]=\"ticketListData\"\n\t\t\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t\t\t#datagrid>\n\t\t\t\t\t\t</jqxGrid>\n\t\t\t\t\t</div>\n\t\t\t\t</condo-card>\n\t\t\t</div>\n        </mat-drawer-content>\n    </mat-drawer-container>\n</div>\n\n");

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

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9oZWxwZGVzay1yZXBvcnRzLWRhdGEvaGVscGRlc2stcmVwb3J0cy1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: HelpdeskReportsDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskReportsDataComponent", function() { return HelpdeskReportsDataComponent; });
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











let HelpdeskReportsDataComponent = class HelpdeskReportsDataComponent {
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
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
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
        console.log("total items ", this.totalItems);
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
            console.log("Itemendindex if", this.ItemEndIndex);
        }
        else {
            this.ItemEndIndex = this.totalItems;
            console.log("Itemendindex ", this.ItemEndIndex);
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
            LookupTypeId: 87
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
HelpdeskReportsDataComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"] }
];
HelpdeskReportsDataComponent.propDecorators = {
    gridResident: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['gridResident', { static: false },] }],
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }]
};
HelpdeskReportsDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-reports-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-reports-data.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_10__["TicketService"]])
], HelpdeskReportsDataComponent);



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
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
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
        console.log("total items ", this.totalItems);
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
            console.log("Itemendindex if", this.ItemEndIndex);
        }
        else {
            this.ItemEndIndex = this.totalItems;
            console.log("Itemendindex ", this.ItemEndIndex);
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
            LookupTypeId: 87
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./open-tickets-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./open-tickets-report.component.scss */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])
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
            this.ticketCategoryData.staffThree = event[0].userId;
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
            if (res.code == 200) {
                this.sharedService.openSnackBar('Category Created', 'success');
                this.createEsclation(res.responseData.value.message);
            }
            else {
                this.sharedService.openSnackBar(res.responseData.value.errorMessage, 'error');
            }
        }, (error) => {
            if (error.status == 0) {
                this.sharedService.openSnackBar('Network Error', 'error');
            }
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
            if (res.code == 200) {
                this.sharedService.openSnackBar(res.responseData.value.message, 'success');
                this.dialogRef.close(true);
            }
            else {
                this.sharedService.openSnackBar(res.errorMessage, 'error');
            }
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
    ngOnInit() {
        let staffParms = {
            apartmentId: this.sessionService.apartmentId,
            RoleTypeId: this.sessionService.roleTypeId
        };
        this.staffService.getAllStaffs(staffParms).subscribe((res) => {
            if (res.length) {
                res.forEach((ele) => {
                    ele.customLabel = `${ele.staffName}, ${ele.roleName} - ${ele.staffCategoryName}`;
                });
                this.staffsList = res;
            }
        }, error => {
            console.log(error);
        });
        //Edit Mode
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-ticket-category/add-ticket-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");









let CommonCategoryComponent = class CommonCategoryComponent {
    constructor(dialog, sharedService, ticketService, sessionService, injector) {
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.ticketService = ticketService;
        this.sessionService = sessionService;
        this.injector = injector;
        this.commonFilter = "";
        this.isDataLoaded = true;
        this.totalItems = 0;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    addTicket(mode, categoryId) {
        let data = { type: 'common', mode, categoryId };
        const dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
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
        this.modalService.showConfirmModal({ id: dataRecord.ticketCategoryId, index: detail.rowId });
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
                    localdata: res.reverse(),
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
                    let field = this.commonListData.loadedData[row].escalationLevelId0;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererCommon
            }, {
                text: 'Level-1',
                datafield: 'escalationLevelId1',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId1;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'L1 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId1;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererCommon
            }, {
                text: 'Level-2',
                datafield: 'escalationLevelId2',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId2;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'L2 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.commonListData.loadedData[row].escalationLevelId2;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
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
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererCommon
            }];
        //Delete Category
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null && item.id) {
                let params = {
                    apartmentId: this.sessionService.apartmentId,
                    ticketCategoryId: item.id,
                    deleteBy: this.sessionService.userId
                };
                this.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setUnitListDeleteIndex(null);
                        this.commondatagrid.deleterow(item.index);
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
    }
};
CommonCategoryComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_2__["SessionService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-ticket-category/add-ticket-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Ticket */ "./src/app/api/controllers/Ticket.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");









let PrivateCategoryComponent = class PrivateCategoryComponent {
    constructor(dialog, sharedService, ticketService, injector, sessionService) {
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.ticketService = ticketService;
        this.injector = injector;
        this.sessionService = sessionService;
        this.isDataLoaded = true;
        this.totalItems = 0;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    addTicket(mode, categoryId) {
        let data = { type: 'private', mode, categoryId };
        const dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_5__["AddTicketCategoryComponent"], {
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
        this.modalService.showConfirmModal({ id: dataRecord.ticketCategoryId, index: detail.rowId });
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
                    localdata: res.reverse(),
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
                    let field = this.privateListData.loadedData[row].escalationLevelId0;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-1',
                datafield: 'escalationLevelId1',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId1;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'L1 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId1;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-2',
                datafield: 'escalationLevelId2',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId2;
                    if (field && field.userName)
                        value = field.userName;
                    else
                        value = '';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'L2 escdays',
                cellsrenderer: (row, column, value) => {
                    let field = this.privateListData.loadedData[row].escalationLevelId2;
                    if (field && field.escalationDays)
                        value = field.escalationDays;
                    else
                        value = '';
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
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererPrivate
            }];
        //Delete Category
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null && item.id) {
                let params = {
                    apartmentId: this.sessionService.apartmentId,
                    ticketCategoryId: item.id,
                    deleteBy: this.sessionService.userId
                };
                this.ticketService.deleteTicketManagerByTicketCategoryId(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setUnitListDeleteIndex(null);
                        this.privatedatagrid.deleterow(item.index);
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
    }
};
PrivateCategoryComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
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
        return this.sessionService.isAdmin();
    }
    createTicketNavigate() {
        if (this.isAdmin())
            this.router.navigate(['/ams/helpdesk/create-ticket']);
        else
            this.router.navigate(['/user/servicedesk/create-ticket']);
    }
    //condo-select
    dropDownSelect(event, type) {
        if (type == 'status')
            this.filterData.ticketStatus = event[0].lookupValueId;
        else if (type == 'staff')
            this.filterData.staff = event[0].staffId;
        else if (type == 'supervisor')
            this.filterData.supervisor = event[0].staffId;
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
    filterApply() {
        this.goBack();
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
        });
    }
    clearFilter() {
        this.filterData.ticketStatus = null;
        this.filterData.staff = null;
        this.filterData.supervisor = null;
        this.getTicketByAdmin();
        this.goBack();
    }
    goBack() {
        this.matDrawer.close();
    }
    getTicketByAdmin() {
        this.isTicketDataLoaded = false;
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
                localdata: res,
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
            if (res) {
                let ticketInfo = {
                    localdata: res.reverse(),
                    datatype: "array"
                };
                this.totalItems = ticketInfo.localdata.length;
                this.ticketListData = new jqx.dataAdapter(ticketInfo);
                this.isTicketDataLoaded = true;
            }
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
                text: 'Subject',
                datafield: 'title',
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
            }];
        // delete item
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let dataRecord = this.datagrid.getrowdata(id);
                let ticketId = dataRecord.ticketId;
                let params = {
                    ticketId: ticketId,
                    deleteBy: parseInt(this.sessionService.userId)
                };
                this.ticketService.deleteTicket(params).subscribe((res) => {
                    this.datagrid.deleterow(id);
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.datagrid.refresh();
                });
            }
        });
        //Filter Purpose => Staff
        let staffParms = {
            apartmentId: this.sessionService.apartmentId,
            RoleTypeId: this.sessionService.roleTypeId
        };
        this.staffService.getAllStaffs(staffParms).subscribe((res) => {
            if (res.length) {
                res.forEach((ele) => {
                    ele.customLabel = `${ele.staffName}, ${ele.roleName} - ${ele.staffCategoryName}`;
                });
                this.staffsList = res;
            }
        }, error => {
            console.log(error);
        });
        //Filter Purpose => Ticket Status
        let statusParams = {
            LookupTypeId: 9
        };
        this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe((res) => {
            this.ticketStatusList = res;
        });
    }
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
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
/* harmony import */ var _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts");










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
    { path: 'reports/:name/:id', component: _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskReportsDataComponent"] },
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
/* harmony import */ var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/helpdesk-reports/helpdesk-reports.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
/* harmony import */ var _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/helpdesk-reports/open-tickets-report/open-tickets-report.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");
/* harmony import */ var _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/helpdesk-setup/add-ticket-category/add-ticket-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
/* harmony import */ var _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/helpdesk-setup/common-category/common-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts");
/* harmony import */ var _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/helpdesk-setup/private-category/private-category.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts");
/* harmony import */ var _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/helpdesk-ticket-filter/helpdesk-ticket-filter.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-ticket-filter/helpdesk-ticket-filter.component.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component */ "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports-data/helpdesk-reports-data.component.ts");
















let HelpdeskModule = class HelpdeskModule {
};
HelpdeskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"],
            _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskSetupComponent"],
            _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskReportsComponent"],
            _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_9__["OpenTicketsReportComponent"],
            _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_10__["AddTicketCategoryComponent"],
            _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_11__["CommonCategoryComponent"],
            _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_12__["PrivateCategoryComponent"],
            _components_helpdesk_ticket_filter_helpdesk_ticket_filter_component__WEBPACK_IMPORTED_MODULE_13__["HelpdeskTicketFilterComponent"],
            _components_helpdesk_reports_helpdesk_reports_data_helpdesk_reports_data_component__WEBPACK_IMPORTED_MODULE_15__["HelpdeskReportsDataComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskRoutingModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_14__["SelectModule"],
        ],
        bootstrap: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"]]
    })
], HelpdeskModule);



/***/ })

}]);
//# sourceMappingURL=modules-ams-helpdesk-helpdesk-module-es2015.js.map