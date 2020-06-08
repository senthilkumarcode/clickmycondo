(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helpdesk-helpdesk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"{{report.menuName}}/{{report.lookupValueID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-edit-staff-wrapper\">\n\t\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Edit Staff</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isStaffSubmitted && !isStaffAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isStaffSubmitted && !isStaffAdded\">\n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitStaffForm(addStaffForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Category*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"CategoryType\" \n\t\t\t\t\t\t\t        id=\"CategoryType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"staff.category\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isStaffAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\">Staff added successfully!</h5>\n\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-setup-wrapper\">\n\n\t<h5 class=\"mb-3\">Add Ticket Category</h5>\n\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-body\">\n\n\t\t\t<!-- <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message> -->\n\n\t\t\t<app-loader *ngIf=\"!isTicketAddLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isTicketAddLoaded\">\n\n\t\t\t\t<form #addCategoryForm=\"ngForm\" name=\"addCategoryForm\" (ngSubmit)=\"submitTicketCategoryForm(addCategoryForm)\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Ticket Type<span class=\"mandatory\">*</span></label>\n\t\t\t                    <select\n\t\t\t\t\t\t\t        name=\"ticketType\"\n\t\t\t\t\t\t\t        id=\"ticketType\"\n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"ticketType\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngIf = \"isError\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of ticketTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Ticket Category<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"ticketCategory\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"ticketCategory\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<ul class=\"list-inline mt-25\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn lime-green mr-2\"\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"addCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isCategoryDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Private Category</h5>\n\t\t\t</div>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\"\n\t\t\t[(ngModel)]=\"categoryPrivateData\"\n\t\t\t(ngModelChange)=\"onGlSearchFilterPrivate()\">\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t\t<jqxGrid\n\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\"\n\t\t\t\t[source]=\"categoryPrivateListData\"\n\t\t\t\t[columns]=\"privateData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#privatedatagrid>\n\t\t\t</jqxGrid>\n\n\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Category <span (click)=\"sortUnitData('status')\" [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Supervisor <span (click)=\"sortUnitData('subcategory')\" [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Level-1 <span (click)=\"sortUnitData('level1')\" [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Level-2 <span (click)=\"sortUnitData('level2')\" [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t      <th scope=\"col\">L1 Escdays<span (click)=\"sortUnitData('l1day')\" [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\">L2 Escdays<span (click)=\"sortUnitData('l2day')\" [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryPrivateListData | simpleSearch: categoryPrivateData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.supervisor_name}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.level1}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.level2}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.l1escdays}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.l2escdays}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/helpdesk/edit-staff/{{category.lookupValueId}}\"\n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t  <a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"openDialog(category);\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=27;showConfirmModal(i);\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\n\t\t</div>\n\n\t</div>\n\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Common Category</h5>\n\t\t\t</div>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\"\n\t\t\t[(ngModel)]=\"categoryCommonData\"\n\t\t\t(ngModelChange)=\"onGlSearchFilterCommon()\">\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t<jqxGrid\n\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\"\n\t\t\t\t[source]=\"categoryCommonListData\"\n\t\t\t\t[columns]=\"commonData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#commondatagrid>\n\t\t\t</jqxGrid>\n\t\t<!-- <table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('status')\">Category <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('subcategory')\">Supervisor <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('level1')\">Level-1 <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('level2')\">Level-2 <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('l1day')\">Escalation to L1 day<span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('l2day')\">Escalation to L2day<span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\n\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let category of categoryCommonListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: categoryCommonData ; let i = index\">\n\t\t\t\t\t\t<td>{{category.lookupValueName}}</td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t\t\t\t\trouterLink=\"/ams/helpdesk/edit-staff/{{category.lookupValueId}}\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=26;showConfirmModal(i)\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\n\t\t</div>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  helpdesk-unassigned works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"helpdesk-create-ticket-wrapper\">\n\t\n\t<ng-container *ngFor=\"let ticket of ticketArray; let i = index\">\n\t\t<app-add-ticket [index]=\"i\" [array]=\"ticketArray\" (outputParams) = \"getTicketArray($event)\"></app-add-ticket>\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXJlcG9ydHMvaGVscGRlc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HelpdeskReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskReportsComponent", function() { return HelpdeskReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




let HelpdeskReportsComponent = class HelpdeskReportsComponent {
    constructor(lookupService, cookieService) {
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
    }
    ngOnInit() {
        let details = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 87,
            MenuName: 'HelpdeskTracker'
        };
        this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res) => {
            this.reportDataList = res;
            this.isDataLoaded = true;
        });
    }
};
HelpdeskReportsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
HelpdeskReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-reports.component.scss */ "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], HelpdeskReportsComponent);



/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXNldHVwL2hlbHBkZXNrLWVkaXQtc3RhZmYvaGVscGRlc2stZWRpdC1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: HelpdeskEditStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskEditStaffComponent", function() { return HelpdeskEditStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let HelpdeskEditStaffComponent = class HelpdeskEditStaffComponent {
    constructor(router, route, userService, staffService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isStaffSubmitted = false;
        this.isStaffAdded = false;
        this.isError = false;
        this.errorMessage = "";
    }
    submitStaffForm(form) {
    }
    ngOnInit() {
        this.staff = {};
        this.staff.category = "";
        let categoryParams = {
            LookupTypeId: 8
        };
        //staff category
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            this.staffCategoryData = res;
        }, error => {
        });
    }
};
HelpdeskEditStaffComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
HelpdeskEditStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-edit-staff',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-edit-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-edit-staff.component.scss */ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], HelpdeskEditStaffComponent);



/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay1zZXR1cC9oZWxwZGVzay1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts ***!
  \************************************************************************************/
/*! exports provided: HelpdeskSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskSetupComponent", function() { return HelpdeskSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");











let HelpdeskSetupComponent = class HelpdeskSetupComponent {
    constructor(injector, dialog, userService, lookupService, sharedService, cookieService, router) {
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.router = router;
        this.categoryPrivateData = "";
        this.categoryCommonData = "";
        this.isCategoryDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isTicketAddLoaded = false;
        this.ticketType = "";
        this.ticketCategory = "";
        this.staffDeleteTypeId = "";
        this.errorMessage = "";
        this.isError = false;
        this.selectedInput = "";
        this.result = '';
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    openDialog(data) {
        this.modalService.showTicketEditModal(data);
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
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    submitTicketCategoryForm(form) {
        this.isError = false;
        const message = `Are you sure you want to save this Ticket Category?`;
        const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModel"]("Confirm Action", message);
        const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            this.result = dialogResult;
            if (this.result) {
                //common category
                if (this.ticketType == "24") {
                    this.ticketTypeId = 17;
                    let categoryAvailable = this.commonCategory.find(x => x.lookupValueName == this.ticketCategory);
                    if (categoryAvailable) {
                        this.isError = true;
                        this.errorMessage = 'Ticket Category already available';
                        var errorDetails = {
                            msg: this.errorMessage,
                            type: "Error"
                        };
                        this.sharedService.setCustomAlertMessage(errorDetails);
                        form.reset();
                        this.isTicketAddLoaded = true;
                    }
                    else {
                        this.isTicketAddLoaded = false;
                        var details = {
                            "lookupTypeId": this.ticketTypeId,
                            "lookupValueName": this.ticketCategory,
                            "description": this.ticketCategory,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": "2019-11-16T14:50:08.217Z",
                            "updatedBy": 0,
                            "updatedOn": "2019-11-16T14:50:08.217Z"
                        };
                        let params = {
                            lookupvalue: details
                        };
                        this.lookupService.addLookupValue(params).subscribe((res) => {
                            this.isTicketAddLoaded = true;
                            this.isCategoryDataLoaded = false;
                            if (res.message) {
                                var errorDetails = {
                                    msg: 'Ticket Category added succesfully',
                                    type: "Success"
                                };
                                this.sharedService.setCustomAlertMessage(errorDetails);
                                let params = {
                                    LookupTypeId: this.ticketTypeId
                                };
                                this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                                    var categoryCommonListData = res.filter(item => {
                                        return item.isActive;
                                    });
                                    this.categoryCommonListData = categoryCommonListData;
                                    this.categoryCommonListData.sort((a, b) => a.lookupValueName.localeCompare(b.lookupValueName));
                                    this.gridSourceDataCommon = {
                                        localdata: this.categoryCommonListData,
                                        datatype: "array"
                                    };
                                    this.categoryCommonListData = new jqx.dataAdapter(this.gridSourceDataCommon);
                                    this.isCategoryDataLoaded = true;
                                }, error => {
                                });
                            }
                            else {
                                this.errorMessage = res.errorMessage;
                                var errorDetails = {
                                    msg: this.errorMessage,
                                    type: "Error"
                                };
                                this.sharedService.setCustomAlertMessage(errorDetails);
                            }
                        }, error => {
                        });
                    }
                    form.reset();
                    this.isError = true;
                    this.isTicketAddLoaded = true;
                }
                else {
                    this.ticketTypeId = 16;
                    let categoryAvailable = this.privateCategory.find(x => x.lookupValueName == this.ticketCategory);
                    if (categoryAvailable) {
                        this.isError = true;
                        this.errorMessage = 'Ticket Category already available';
                        var errorDetails = {
                            msg: this.errorMessage,
                            type: "Error"
                        };
                        this.sharedService.setCustomAlertMessage(errorDetails);
                        form.reset();
                        this.isTicketAddLoaded = true;
                    }
                    else {
                        this.isTicketAddLoaded = false;
                        var details = {
                            "lookupTypeId": this.ticketTypeId,
                            "lookupValueName": this.ticketCategory,
                            "description": this.ticketCategory,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": "2019-11-16T14:50:08.217Z",
                            "updatedBy": 0,
                            "updatedOn": "2019-11-16T14:50:08.217Z"
                        };
                        let params = {
                            lookupvalue: details
                        };
                        this.lookupService.addLookupValue(params).subscribe((res) => {
                            this.isTicketAddLoaded = true;
                            this.isCategoryDataLoaded = false;
                            let params = {
                                LookupTypeId: this.ticketTypeId
                            };
                            if (res.message) {
                                var errorDetails = {
                                    msg: 'Ticket Category added succesfully',
                                    type: "Success"
                                };
                                this.sharedService.setCustomAlertMessage(errorDetails);
                                this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                                    var categoryPrivateListData = res.filter(item => {
                                        return item.isActive;
                                    });
                                    this.categoryPrivateListData = categoryPrivateListData;
                                    this.categoryPrivateListData.sort((a, b) => a.lookupValueName.localeCompare(b.lookupValueName));
                                    this.gridSourceDataPrivate = {
                                        localdata: this.categoryPrivateListData,
                                        datatype: "array"
                                    };
                                    this.categoryPrivateListData = new jqx.dataAdapter(this.gridSourceDataPrivate);
                                    this.isCategoryDataLoaded = true;
                                }, error => {
                                });
                            }
                            else {
                                this.errorMessage = res.errorMessage;
                                if (this.errorMessage == 'addLookupValue Not Added as it already exist.')
                                    var errorDetails = {
                                        msg: 'Ticket Category not added as it already exist',
                                        type: "Error"
                                    };
                                this.sharedService.setCustomAlertMessage(errorDetails);
                            }
                        }, error => {
                        });
                        form.reset();
                        this.isError = true;
                        this.isTicketAddLoaded = true;
                    }
                }
            }
            else {
                this.isTicketAddLoaded = true;
            }
        });
    }
    selectColInput(type) {
        this.selectedInput = type;
    }
    onGlSearchFilterPrivate() {
        if (this.categoryPrivateData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.categoryPrivateData;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.privatedatagrid.showfiltercolumnbackground(false);
            this.privateData.forEach(item => {
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
    onGlSearchFilterCommon() {
        if (this.categoryCommonData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.categoryCommonData;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.commondatagrid.showfiltercolumnbackground(false);
            this.commonData.forEach(item => {
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
    onPrivateCatEdit(detail) {
        let dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
        let lookupValueId = dataRecord.lookupValueId;
        this.router.navigateByUrl('/ams/helpdesk/edit-staff/' + lookupValueId);
    }
    onCommonCatEdit(detail) {
        let dataRecord = this.commondatagrid.getrowdata(detail.rowId);
        let lookupValueId = dataRecord.lookupValueId;
        this.router.navigateByUrl('/ams/helpdesk/edit-staff/' + lookupValueId);
    }
    onPrivateCatDelete(detail) {
        let dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
        let lookupValueId = dataRecord.lookupValueId;
        this.modalService.showConfirmModal(lookupValueId);
    }
    onCommonCatDelete(detail) {
        let dataRecord = this.commondatagrid.getrowdata(detail.rowId);
        let lookupValueId = dataRecord.lookupValueId;
        this.modalService.showConfirmModal(lookupValueId);
    }
    ngOnInit() {
        //private
        var cellsrendererPrivate = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrendererPrivate = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        //private
        this.privateData = [{
                text: 'Category',
                datafield: 'description',
                width: 200,
                pinned: true,
                cellsrenderer: cellsrendererPrivate,
                renderer: columnrendererPrivate
            }, {
                text: 'Supervisor',
                datafield: 'ticketTypeId_Label',
                cellsrenderer: cellsrendererPrivate,
                minwidth: 80,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-1',
                datafield: 'level1',
                cellsrenderer: cellsrendererPrivate,
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'Level-2',
                datafield: 'level12',
                cellsrenderer: cellsrendererPrivate,
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'L1 escdays',
                datafield: 'l1escdays',
                cellsrenderer: cellsrendererPrivate,
                minwidth: 80,
                renderer: columnrendererPrivate
            }, {
                text: 'L2 escdays',
                datafield: 'l2escdays',
                cellsrenderer: cellsrendererPrivate,
                minwidth: 170,
                renderer: columnrendererPrivate
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererPrivate
            }];
        //common
        var cellsrendererCommon = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrendererCommon = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        // common
        this.commonData = [{
                text: 'Category',
                datafield: 'lookupValueName',
                width: 200,
                pinned: true,
                cellsrenderer: cellsrendererCommon,
                renderer: columnrendererCommon
            }, {
                text: 'Supervisor',
                datafield: 'ticketTypeId_Label',
                cellsrenderer: cellsrendererCommon,
                minwidth: 80,
                renderer: columnrendererCommon
            }, {
                text: 'Level-1',
                datafield: 'level1',
                cellsrenderer: cellsrendererCommon,
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'Level-2',
                datafield: 'level12',
                cellsrenderer: cellsrendererCommon,
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'Escalation to l1 day',
                datafield: 'l1escdays',
                cellsrenderer: cellsrendererCommon,
                minwidth: 80,
                renderer: columnrendererCommon
            }, {
                text: 'Escalation to l1 day',
                datafield: 'l2escdays',
                cellsrenderer: cellsrendererCommon,
                minwidth: 170,
                renderer: columnrendererCommon
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrendererCommon
            }];
        //get all ticketType type
        let ticketType = {
            LookupTypeId: 7
        };
        this.lookupService.getLookupValueByLookupTypeId(ticketType).subscribe((res) => {
            this.ticketTypeData = res;
            this.isTicketAddLoaded = true;
        }, error => {
        });
        //get all category
        this.getTicketListByCategory();
        // delete lookupvalue
        this.sharedService.unitlistdeleteindexcast.subscribe(lookupValue => {
            this.isCategoryDataLoaded = false;
            if (lookupValue != null) {
                let deleteParam = {
                    "lookupValueId": lookupValue,
                    "updateUserId": parseInt(this.cookieService.get('userId'))
                };
                this.lookupService.deleteLookupvalue(deleteParam).subscribe((res) => {
                    this.getTicketListByCategory();
                }, error => {
                    this.isError = true;
                    this.errorMessage = 'Could not delete ticket category ';
                });
            }
        });
    }
    getTicketListByCategory() {
        let categoryParams = {
            LookupTypeId: 16
        };
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            this.privateCategory = res.filter((item) => item['isActive'] === true);
            let categoryPrivateListData = res.filter((item) => item['isActive'] === true);
            categoryPrivateListData.forEach(element => {
                element.lookupValueName === "Electrical" ? (element.supervisor_name = "David", element.level1 = "john", element.level2 = "daniel", element.l1escdays = 8, element.l2escdays = 5) :
                    element.lookupValueName === "Painting" ? element.supervisor_name = "John" :
                        element.lookupValueName === "Refrigerator" ? element.supervisor_name = "Sam" : '';
            });
            this.categoryPrivateListData = categoryPrivateListData;
            this.categoryPrivateListData.sort((a, b) => a.lookupValueName.localeCompare(b.lookupValueName));
            this.gridSourceDataPrivate = {
                localdata: this.categoryPrivateListData,
                datatype: "array"
            };
            this.categoryPrivateListData = new jqx.dataAdapter(this.gridSourceDataPrivate);
            //get all common category
            let commonListParams = {
                LookupTypeId: 17
            };
            this.lookupService.getLookupValueByLookupTypeId(commonListParams).subscribe((res) => {
                this.commonCategory = res.filter((item) => item['isActive'] === true);
                var categoryCommonListData = res.filter(item => {
                    return item.isActive;
                });
                this.categoryCommonListData = categoryCommonListData;
                this.categoryCommonListData.sort((a, b) => a.lookupValueName.localeCompare(b.lookupValueName));
                this.gridSourceDataCommon = {
                    localdata: this.categoryCommonListData,
                    datatype: "array"
                };
                this.categoryCommonListData = new jqx.dataAdapter(this.gridSourceDataCommon);
                this.isCategoryDataLoaded = true;
            }, error => {
            });
        }, error => {
        });
    }
};
HelpdeskSetupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('privatedatagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])
], HelpdeskSetupComponent.prototype, "privatedatagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commondatagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])
], HelpdeskSetupComponent.prototype, "commondatagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onPrivateCatEdit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], HelpdeskSetupComponent.prototype, "onPrivateCatEdit", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCommonCatEdit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], HelpdeskSetupComponent.prototype, "onCommonCatEdit", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onPrivateCatDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], HelpdeskSetupComponent.prototype, "onPrivateCatDelete", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCommonCatDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], HelpdeskSetupComponent.prototype, "onCommonCatDelete", null);
HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-setup.component.scss */ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
], HelpdeskSetupComponent);

function showConfirmDeleteEventPrivate(row) {
    var event = new CustomEvent('onPrivateCatDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEventPrivate = showConfirmDeleteEventPrivate;
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

/***/ "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVuYXNzaWduZWQvaGVscGRlc2stdW5hc3NpZ25lZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: HelpdeskUnassignedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskUnassignedComponent", function() { return HelpdeskUnassignedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HelpdeskUnassignedComponent = class HelpdeskUnassignedComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpdeskUnassignedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-unassigned',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-unassigned.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-unassigned.component.scss */ "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HelpdeskUnassignedComponent);



/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVwZGF0ZS10aWNrZXQvaGVscGRlc2stdXBkYXRlLXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts ***!
  \****************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk-update-ticket.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk-update-ticket.component.scss */ "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], HelpdeskUpdateTicketComponent);



/***/ }),

/***/ "./src/app/ams/helpdesk/helpdesk-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ams/helpdesk/helpdesk-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HelpdeskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskRoutingModule", function() { return HelpdeskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/helpdesk-setup/helpdesk-setup.component */ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
/* harmony import */ var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */ "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
/* harmony import */ var _shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component */ "./src/app/shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component.ts");
/* harmony import */ var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */ "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
/* harmony import */ var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/helpdesk-reports/helpdesk-reports.component */ "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
/* harmony import */ var _shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/add-ticket/add-ticket.component */ "./src/app/shared/components/add-ticket/add-ticket.component.ts");
/* harmony import */ var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");










const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"] },
    { path: 'edit-staff/:id', component: _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskEditStaffComponent"] },
    { path: 'add-ticket', component: _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskUpdateTicketComponent"] },
    { path: 'edit-ticket/:id', component: _shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__["AddTicketComponent"] },
    { path: 'all-tickets', component: _shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskAllTicketsComponent"] },
    { path: 'unassigned', component: _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskUnassignedComponent"] },
    { path: 'reports', component: _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskReportsComponent"] },
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

/***/ "./src/app/ams/helpdesk/helpdesk.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ams/helpdesk/helpdesk.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9oZWxwZGVzay5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/helpdesk/helpdesk.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ams/helpdesk/helpdesk.component.ts ***!
  \****************************************************/
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
HelpdeskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./helpdesk.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./helpdesk.component.scss */ "./src/app/ams/helpdesk/helpdesk.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HelpdeskComponent);



/***/ }),

/***/ "./src/app/ams/helpdesk/helpdesk.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ams/helpdesk/helpdesk.module.ts ***!
  \*************************************************/
/*! exports provided: HelpdeskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpdeskModule", function() { return HelpdeskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpdesk-routing.module */ "./src/app/ams/helpdesk/helpdesk-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _helpdesk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpdesk.component */ "./src/app/ams/helpdesk/helpdesk.component.ts");
/* harmony import */ var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/helpdesk-setup/helpdesk-setup.component */ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
/* harmony import */ var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */ "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
/* harmony import */ var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */ "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
/* harmony import */ var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/helpdesk-reports/helpdesk-reports.component */ "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
/* harmony import */ var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */ "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");











let HelpdeskModule = class HelpdeskModule {
};
HelpdeskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _helpdesk_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskComponent"],
            _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskSetupComponent"],
            _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskUpdateTicketComponent"],
            _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskUnassignedComponent"],
            _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskReportsComponent"],
            _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskEditStaffComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskRoutingModule"]
        ],
        bootstrap: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskComponent"]]
    })
], HelpdeskModule);



/***/ })

}]);
//# sourceMappingURL=helpdesk-helpdesk-module-es2015.js.map