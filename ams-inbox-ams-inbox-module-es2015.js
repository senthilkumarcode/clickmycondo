(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ams-inbox-ams-inbox-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/ams-inbox.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/ams-inbox.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  ams-inbox-history works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"checkin-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Compose Notification</h5>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isMessageSubmitted && !isMessageAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isMessageSubmitted && !isMessageAdded\">\n\n\t\t\t\t<form #addMessageForm = \"ngForm\" name=\"addMessageForm\" (ngSubmit)=\"submitAddMessageForm(addMessageForm)\"  novalidate>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isBlockSelected\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockUnitId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Subject*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"phoneNo\" [(ngModel)]=\"messageSubject\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Message*</label>\n\t\t\t                    <textarea placeholder=\"some text here\" name=\"messageContent\" [(ngModel)]=\"messageContent\" required></textarea>\n\t\t\t                </div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addMessageForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"{{report.menuName}}/{{report.lookupValueID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"inbox-setup-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInboxCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isInboxCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Categories</h4>\n\t\t<ng-container *ngFor=\"let item of inboxCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateInboxCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteInboxCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h4>{{item.lookupValueName}}</h4>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn blue\" (click)=\"addNewInboxCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Add New Category</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isInboxCategoryNew || isInboxCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 *ngIf=\"isInboxCategoryNew\">Add Category</h5>\n    \t\t\t<h5 *ngIf=\"!isInboxCategoryNew\">Update Category</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isInboxCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isInboxCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addInboxCategoryForm = \"ngForm\" name=\"addInboxCategoryForm\" (ngSubmit)=\"submitInboxCategoryForm(addInboxCategoryForm)\"  novalidate>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"inboxCategory\" [(ngModel)]=\"inboxCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Owner*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"inboxCategoryOwner\" \n\t\t\t\t\t\t\t        id=\"inboxCategoryOwner\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"inboxCategoryOwner\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of inboxCategoryOwnerData\" [value]=\"item.userId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addInboxCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./src/app/ams/ams-inbox/ams-inbox-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/ams-inbox/ams-inbox-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AmsInboxRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsInboxRoutingModule", function() { return AmsInboxRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ams-inbox-setup/ams-inbox-setup.component */ "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts");
/* harmony import */ var _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ams-inbox-notify/ams-inbox-notify.component */ "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts");
/* harmony import */ var _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ams-inbox-history/ams-inbox-history.component */ "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts");
/* harmony import */ var _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ams-inbox-reports/ams-inbox-reports.component */ "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts");







const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_3__["AmsInboxSetupComponent"] },
    { path: 'notify', component: _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_4__["AmsInboxNotifyComponent"] },
    { path: 'history', component: _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_5__["AmsInboxHistoryComponent"] },
    { path: 'reports', component: _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_6__["AmsInboxReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let AmsInboxRoutingModule = class AmsInboxRoutingModule {
};
AmsInboxRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AmsInboxRoutingModule);



/***/ }),

/***/ "./src/app/ams/ams-inbox/ams-inbox.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ams/ams-inbox/ams-inbox.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvYW1zLWluYm94LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/ams-inbox/ams-inbox.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ams/ams-inbox/ams-inbox.component.ts ***!
  \******************************************************/
/*! exports provided: AmsInboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsInboxComponent", function() { return AmsInboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AmsInboxComponent = class AmsInboxComponent {
    constructor() { }
    ngOnInit() {
    }
};
AmsInboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ams-inbox',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ams-inbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/ams-inbox.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ams-inbox.component.scss */ "./src/app/ams/ams-inbox/ams-inbox.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AmsInboxComponent);



/***/ }),

/***/ "./src/app/ams/ams-inbox/ams-inbox.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ams/ams-inbox/ams-inbox.module.ts ***!
  \***************************************************/
/*! exports provided: AmsInboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsInboxModule", function() { return AmsInboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ams_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ams-inbox-routing.module */ "./src/app/ams/ams-inbox/ams-inbox-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _ams_inbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ams-inbox.component */ "./src/app/ams/ams-inbox/ams-inbox.component.ts");
/* harmony import */ var _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ams-inbox-setup/ams-inbox-setup.component */ "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts");
/* harmony import */ var _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ams-inbox-notify/ams-inbox-notify.component */ "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts");
/* harmony import */ var _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ams-inbox-history/ams-inbox-history.component */ "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts");
/* harmony import */ var _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ams-inbox-reports/ams-inbox-reports.component */ "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts");










let AmsInboxModule = class AmsInboxModule {
};
AmsInboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _ams_inbox_component__WEBPACK_IMPORTED_MODULE_5__["AmsInboxComponent"],
            _components_ams_inbox_setup_ams_inbox_setup_component__WEBPACK_IMPORTED_MODULE_6__["AmsInboxSetupComponent"],
            _components_ams_inbox_notify_ams_inbox_notify_component__WEBPACK_IMPORTED_MODULE_7__["AmsInboxNotifyComponent"],
            _components_ams_inbox_history_ams_inbox_history_component__WEBPACK_IMPORTED_MODULE_8__["AmsInboxHistoryComponent"],
            _components_ams_inbox_reports_ams_inbox_reports_component__WEBPACK_IMPORTED_MODULE_9__["AmsInboxReportsComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _ams_inbox_routing_module__WEBPACK_IMPORTED_MODULE_3__["AmsInboxRoutingModule"]
        ],
        bootstrap: [_ams_inbox_component__WEBPACK_IMPORTED_MODULE_5__["AmsInboxComponent"]]
    })
], AmsInboxModule);



/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtaGlzdG9yeS9hbXMtaW5ib3gtaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AmsInboxHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsInboxHistoryComponent", function() { return AmsInboxHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AmsInboxHistoryComponent = class AmsInboxHistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
AmsInboxHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ams-inbox-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ams-inbox-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ams-inbox-history.component.scss */ "./src/app/ams/ams-inbox/components/ams-inbox-history/ams-inbox-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AmsInboxHistoryComponent);



/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtbm90aWZ5L2Ftcy1pbmJveC1ub3RpZnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AmsInboxNotifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsInboxNotifyComponent", function() { return AmsInboxNotifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/user */ "./src/app/api/controllers/user.ts");
/* harmony import */ var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/apartment */ "./src/app/api/controllers/apartment.ts");
/* harmony import */ var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/lookup */ "./src/app/api/controllers/lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let AmsInboxNotifyComponent = class AmsInboxNotifyComponent {
    constructor(userService, apartmentService, sharedService, lookupService, cookieService) {
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.apartmentBlockId = "";
        this.apartmentBlockUnitId = "";
        this.isBlockSelected = false;
        this.isMessageSubmitted = false;
        this.isMessageAdded = false;
        this.isError = false;
        this.errorMessage = "";
        this.messageSubject = "";
        this.messageContent = "";
    }
    getUnits() {
        let params = {
            apartmentBlockId: parseInt(this.apartmentBlockId),
            active: 1
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.isBlockSelected = true;
            this.unitData = res;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //get apartment blocks
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.blocksData = res;
        });
    }
};
AmsInboxNotifyComponent.ctorParameters = () => [
    { type: src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
AmsInboxNotifyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ams-inbox-notify',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ams-inbox-notify.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ams-inbox-notify.component.scss */ "./src/app/ams/ams-inbox/components/ams-inbox-notify/ams-inbox-notify.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], AmsInboxNotifyComponent);



/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtcmVwb3J0cy9hbXMtaW5ib3gtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AmsInboxReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsInboxReportsComponent", function() { return AmsInboxReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/lookup */ "./src/app/api/controllers/lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let AmsInboxReportsComponent = class AmsInboxReportsComponent {
    constructor(lookupService, sharedService, cookieService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
    }
    ngOnInit() {
        let details = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 87,
            MenuName: 'Inbox'
        };
        this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res) => {
            this.reportDataList = res;
            this.isDataLoaded = true;
        });
    }
};
AmsInboxReportsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
AmsInboxReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ams-inbox-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ams-inbox-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ams-inbox-reports.component.scss */ "./src/app/ams/ams-inbox/components/ams-inbox-reports/ams-inbox-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], AmsInboxReportsComponent);



/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hbXMtaW5ib3gvY29tcG9uZW50cy9hbXMtaW5ib3gtc2V0dXAvYW1zLWluYm94LXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AmsInboxSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmsInboxSetupComponent", function() { return AmsInboxSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/user */ "./src/app/api/controllers/user.ts");
/* harmony import */ var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/lookup */ "./src/app/api/controllers/lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let AmsInboxSetupComponent = class AmsInboxSetupComponent {
    constructor(userService, lookupService, sharedService, cookieService) {
        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isInboxCategoryLoaded = false;
        this.isInboxCategorySubmitted = true;
        this.isInboxCategoryNew = false;
        this.isInboxCategoryUpdate = false;
        this.inboxCategory = "";
        this.inboxCategoryOwner = "";
        this.inboxCategoryUpdateId = 0;
        this.errorMessage = "";
        this.isError = false;
    }
    addNewInboxCategory() {
        this.isInboxCategoryNew = true;
        this.isInboxCategoryUpdate = false;
    }
    updateInboxCategory(item) {
        this.isInboxCategoryUpdate = true;
        this.isInboxCategoryNew = false;
        this.inboxCategory = item.lookupValueName;
        this.inboxCategoryUpdateId = item.lookupValueId;
    }
    deleteInboxCategory(item, index) {
        this.isInboxCategoryLoaded = false;
        var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(params).subscribe((res) => {
            this.inboxCategoryData.splice(index, 1);
            this.isInboxCategoryLoaded = true;
        });
    }
    removeCategoryBox() {
        this.isInboxCategoryNew = false;
        this.isInboxCategoryUpdate = false;
        this.isError = false;
    }
    ngOnInit() {
        this.isInboxCategoryLoaded = true;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //get all users
        this.userService.getAllUsersByApartmentId(params).subscribe((res) => {
            this.inboxCategoryOwnerData = res;
        }, error => {
        });
    }
};
AmsInboxSetupComponent.ctorParameters = () => [
    { type: src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
AmsInboxSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ams-inbox-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ams-inbox-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ams-inbox-setup.component.scss */ "./src/app/ams/ams-inbox/components/ams-inbox-setup/ams-inbox-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], AmsInboxSetupComponent);



/***/ })

}]);
//# sourceMappingURL=ams-inbox-ams-inbox-module-es2015.js.map