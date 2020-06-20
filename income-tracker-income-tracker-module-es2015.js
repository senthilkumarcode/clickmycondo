(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-tracker-income-tracker-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-actions/income-actions.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-actions/income-actions.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-actions-wrapper\">\n\n    <ul class=\"icon-tabs\">\n\t\t<li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" \n            routerLink=\"pay-invoice/{{actionIndex}}\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/coin-stack-icon.svg\" /></span>\n\t\t\t\t<span>Collection</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n            <a class=\"nav-link \" href=\"javascript:void(0)\"\n            routerLink=\"view-invoice-history/{{actionIndex}}\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/time-icon.svg\" /></span>\n\t\t\t\t<span>Account History</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n            <a class=\"nav-link \" href=\"javascript:void(0)\"\n            routerLink=\"view-creditnote/{{actionIndex}}\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/credit-note-icon.svg\" /></span>\n\t\t\t\t<span>Credit Notes</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n            <a class=\"nav-link \" href=\"javascript:void(0)\"\n            routerLink=\"customer-advances/{{actionIndex}}\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/income-icon.svg\" /></span>\n\t\t\t\t<span>Customer Advances</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n            <a class=\"nav-link \" href=\"javascript:void(0)\"\n            routerLink=\"security-deposit/{{actionIndex}}\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/money-bag-icon-02.svg\" /></span>\n\t\t\t\t<span>Security Deposit</span>\n\t\t\t</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link \" href=\"javascript:void(0)\"\n            routerLink=\"journal/{{actionIndex}}\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/journal-icon.svg\" /></span>\n\t\t\t\t<span>Journal Entry</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n    \n    <div class=\"d-block mt-50\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-add-credit-wrapper\">\n\t<form #addCreditNoteForm = \"ngForm\" name=\"addCreditNoteForm\" (ngSubmit)=\"submitAddCreditNoteForm(addCreditNoteForm)\"  novalidate>\n\n\t\t\t\n\t\t<app-loader *ngIf=\"!isCreditSubmitted\"></app-loader>\n\n\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t<ng-container *ngIf=\"isCreditSubmitted\">\n\t\t\t\n\t\t\t<div [ngClass]=\"isPageCredit ? 'card ov' : ''\">\n\n\t\t\t\t<div [ngClass]=\"isPageCredit ? 'card-body ov' : ''\">\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf =\"isGeneralCredit\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Block No*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\tname=\"blockNo\" \n\t\t\t\t\t\t\t\t\tid=\"blockNo\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Block\"\n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isGeneralCredit\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Unit No*</label>\n\t\t\t\t\t\t\t   <select \n\t\t\t\t\t\t\t\t\tname=\"unitNo\" \n\t\t\t\t\t\t\t\t\tid=\"unitNo\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Unit\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"apartmentBlockUnitId\" (ngModelChange)=\"getAllCollection(apartmentBlockUnitId)\" [disabled] = \"!isBlockSelected\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEdit\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<app-select-search-box\n\t\t\t\t\t\t\t\t\tfieldName = \"collectionId\" \n\t\t\t\t\t\t\t\t\tfieldText = \"Select Bill No\"\n\t\t\t\t\t\t\t\t\tisLabel = \"true\"\n\t\t\t\t\t\t\t\t\tfieldItemName=\"collectionId\"\n\t\t\t\t\t\t\t\t\t[fieldModel] = \"credit.collectionId\"\n\t\t\t\t\t\t\t\t\tfieldPlaceholder = \"Type...\"\n\t\t\t\t\t\t\t\t\tfieldRequired = \"'required'\"\n\t\t\t\t\t\t\t\t\t[fieldList] = \"billData\"\n\t\t\t\t\t\t\t\t\t[disabled] = \"!isUnitSelected\"\n\t\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event)\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</app-select-search-box>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEdit\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Amount*</label>\n\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"creditAmount\" [(ngModel)]=\"credit.amount\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t\t<div [ngClass]=\"isEdit ? 'col-sm-12' : 'col-sm-4'\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Comments</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"credit.comment\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\n\t\t\n\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue submit-btn\" [disabled]=\"addCreditNoteForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\n\t</form> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-add-customer-advance-wrapper\">\n\t<form #addCustomerAdvanceForm = \"ngForm\" name=\"addCustomerAdvanceForm\" (ngSubmit)=\"submitAddCustomerAdvanceForm(addCustomerAdvanceForm)\"  novalidate>\n\n\t\t\t\n\t\t<app-loader *ngIf=\"!isAdvanceSubmitted\"></app-loader>\n\n\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t<ng-container *ngIf=\"isAdvanceSubmitted\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\n\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t<app-select-search-box\n\t\t\t\t\t\t\tfieldName = \"collectionId\" \n\t\t\t\t\t\t\tfieldText = \"Select Gl Account\"\n\t\t\t\t\t\t\tisLabel = \"true\"\n\t\t\t\t\t\t\tfieldItemName=\"glaccountName\"\n\t\t\t\t\t\t\t[fieldModel] = \"advance.glaccountName\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Type...\"\n\t\t\t\t\t\t\tfieldRequired = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"glAccountsDataList\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event)\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-select-search-box>\n\t\t\t\t\t</div>\n\t\t\t\t</div> \n\n\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Amount*</label>\n\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"advanceAmount\" [(ngModel)]=\"advance.amount\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div [ngClass]=\"isEdit ? 'col-sm-12' : 'col-sm-4'\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Comments</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"advance.comment\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"addCustomerAdvanceForm.invalid\">Submit</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\n\t</form> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-add-security-deposit-wrapper\">\n\t<form #addSecuityDepositForm = \"ngForm\" name=\"addSecuityDepositForm\" (ngSubmit)=\"submitAddSecuityDepositForm(addSecuityDepositForm)\"  novalidate>\n\n\t\t\t\n\t\t<app-loader *ngIf=\"!isDepositSubmitted\"></app-loader>\n\n\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t<ng-container *ngIf=\"isDepositSubmitted\">\n\t\t\t\n\t\t\t<div class=\"row\">\n\t\t\t\n\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t<app-select-search-box\n\t\t\t\t\t\t\tfieldName = \"collectionId\" \n\t\t\t\t\t\t\tfieldText = \"Select Gl Account\"\n\t\t\t\t\t\t\tisLabel = \"true\"\n\t\t\t\t\t\t\tfieldItemName=\"glaccountName\"\n\t\t\t\t\t\t\t[fieldModel] = \"deposit.glaccountName\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Type...\"\n\t\t\t\t\t\t\tfieldRequired = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"glAccountsDataList\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event)\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-select-search-box>\n\t\t\t\t\t</div>\n\t\t\t\t</div> \n\n\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEdit\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Amount*</label>\n\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"advanceAmount\" [(ngModel)]=\"deposit.amount\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div [ngClass]=\"isEdit ? 'col-sm-12' : 'col-sm-4'\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Comments</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"deposit.comment\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"addSecuityDepositForm.invalid\">Submit</button>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</ng-container>\n\n\n\t</form> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-all-credits-wrapper\">\n\n    <app-loader *ngIf=\"!isCreditNoteLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isCreditNoteLoaded\">\n\n        <div class=\"card clear table-card\">\n\n            <div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Credit Notes <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t placeholder=\"Search...\" [(ngModel)]=\"creditNoteData\" \n\t\t\t\t\t\t (ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t<li class=\"list-inline-item\">\n\n                        <button class=\"btn lime-green mt_5\" mat-button [matMenuTriggerFor]=\"addCreditNoteMenu\" (click)=\"addCreditNote()\">\n                            <i-feather class=\"icon plus va-i\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Credit Note</span>\n                        </button>\n                        <mat-menu #addCreditNoteMenu=\"matMenu\">\n                            <app-income-add-credit \n                                [credit]=\"credit\" \n                                [isEdit]=\"isEditCredit\"\n                                [isGeneralCredit]=\"isGeneralCredit\" \n                                (outputParams)=\"getCreditParams($event)\">\n                            </app-income-add-credit>\n                        </mat-menu>\n                        \n\t\t\t\t\t</li>\n\t    \t\t</ul>\n              </div>\n              \n              <div class=\"card-body p-0\">\n                \n                <jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"creditNoteDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n                #datagrid>\n                </jqxGrid> \n\n                <jqxPopover \n                    #reversePopOver\n                    [theme]=\"'material'\" \n                    [showCloseButton]=\"true\" \n                    [selector]=\"popOverSelector\"\n                    [position]=\"popOverPosition\"\n                    >\n                        <app-income-add-credit \n                        [credit]=\"credit\" \n                        [isEdit]=\"isEditCredit\" \n                        (outputParams)=\"getCreditParams($event)\">\n\n                        </app-income-add-credit>\n                </jqxPopover>\n\n            </div>\n\n        </div>\n\n    </ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"income-customer-advances-wrapper\">\n\n    <app-loader *ngIf=\"!isAdvancesLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAdvancesLoaded\">\n\n        <div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Customer Advances <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t placeholder=\"Search...\" [(ngModel)]=\"customerAdvancesData\" \n\t\t\t\t\t\t (ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t<li class=\"list-inline-item\">\n\n\t\t\t\t\t\t<a class=\"btn lime-green mt_5\" id=\"addCustomerAdvancesElement\" (click)=\"addCustomerAdvances()\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Customer Advances</span>\n\t\t\t\t\t\t</a>\n\t\n\t\t\t\t\t</li>\n\t    \t\t</ul>\n            </div>\n\n            <div class=\"card-body p-0\">\n\t\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"customerAdvancesDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\n\t\t\t<jqxPopover \n\t\t\t\t#reversePopOver\n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[showCloseButton]=\"true\" \n\t\t\t\t[selector]=\"popOverSelector\"\n\t\t\t\t[position]=\"popOverPosition\">\n\t\t\t\t\n\t\t\t\t<app-income-add-customer-advance\n\t\t\t\t[advance]=\"advance\" \n\t\t\t\t[isEdit]=\"isEditAdvance\" \n\t\t\t\t(outputParams)=\"getCustomerAdvancesParams($event)\">\n                </app-income-add-customer-advance>\n                \n\t\t\t</jqxPopover>\n\n\t\t\t</div>\n\n        </div>\n\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-loader *ngIf=\"!isReceiptSubmitted\"></app-loader>\n\n<ng-container *ngIf=\"isReceiptSubmitted\">\n\t<form #reverseIncomeHistoryForm = \"ngForm\" name=\"reverseIncomeHistoryForm\" (ngSubmit)=\"submitReverseIncomeHistoryForm(reverseIncomeHistoryForm)\"  novalidate>\n\n\t\t<div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"input-box\">\n\t\t            <label>Comments</label>\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"invoice.comment\" required>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<button class=\"btn blue\" [disabled]=\"reverseIncomeHistoryForm.invalid\">Submit</button>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-invoice-credit-wrapper\">\n\n    <ul class=\"icon-tabs\">\n\t\t<li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" \n            routerLink=\"post-invoice\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/post-invoice-icon.svg\" /></span>\n\t\t\t\t<span>Post Invoice</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li class=\"nav-item\">\n            <a class=\"nav-link \" href=\"javascript:void(0)\"\n            routerLink=\"add-credit/gen\" \n            routerLinkActive=\"active\"\n            [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<span class=\"icon\"><img class=\"svg\" src=\"assets/images/credit-note-icon.svg\" /></span>\n\t\t\t\t<span>Create Credit</span>\n\t\t\t</a>\n        </li>\n    </ul>\n\n    <div class=\"d-block mt-50\">\n        <router-outlet></router-outlet>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-loader *ngIf=\"!isInvoiceSubmitted\"></app-loader>\n\n<ng-container *ngIf=\"isInvoiceSubmitted\">\n\t<form #reverseIncomeInvoiceForm = \"ngForm\" name=\"reverseIncomeInvoiceForm\" (ngSubmit)=\"submitReverseIncomeInvoiceForm(reverseIncomeInvoiceForm)\"  novalidate>\n\n\t\t<div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"input-box\">\n\t\t            <label>Comments</label>\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"invoice.comment\" required>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<button class=\"btn blue\" [disabled]=\"reverseIncomeInvoiceForm.invalid\">Submit</button>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-journal/income-journal.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-journal/income-journal.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-journal-wrapper\">\n\n    <h4 class=\"main-title-mini\">Journal Entries</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #incomeReportsForm = \"ngForm\" name=\"incomeReportsForm\" (ngSubmit)=\"submitIncomeReportsForm(incomeReportsForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date From*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingDateFrom\" [owlDateTime]=\"PostingDateFrom\" [owlDateTimeTrigger]=\"PostingDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateFrom\" autocomplete=\"off\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date To*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingdateTo\" [owlDateTime]=\"PostingdateTo\" [owlDateTimeTrigger]=\"PostingdateTo\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateTo\" autocomplete=\"off\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingdateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingdateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"incomeReportsForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n    </div>\n    \n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<!-- <p *ngIf=\"!isReportSubmitted\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.documentDateFrom)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.documentDateTo)}}</span> </p> -->\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t placeholder=\"Search...\" [(ngModel)]=\"reportsData\" \n\t\t\t\t\t (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t</ul>\n  \t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"reportsDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-pay-invoice-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"card no-shadow mb-3\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t<div class=\"card-header at-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<div class=\"sub-details\">\n\t\t\t\t\t\t<p class=\"d-inline-block ft\">\n\t\t\t\t\t\t<span>Bill to party: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'billToParty' }}</p>\n\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t\t<span>Contact Person: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'primayContact' }}</p>\n\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t\t<span>Block: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockNumber' }}</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t\t<span>Unit: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockUnitNumber' }}</p>\n\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t\t  \t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Bills to be payed <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t\t</li>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t</ul>\n\t  \t\t</div>\n\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t\t\t\t<jqxGrid \n\t\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t[pageable]=\"true\" \n\t\t\t\t\t[filterable]=\"true\" \n\t\t\t\t\t[sortable]=\"true\" \n\t\t\t\t\t[source]=\"invoiceDataList\"\n\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t#datagrid>\n\t  \t\t\t</jqxGrid>\n\t  \t\t\t\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<app-income-post-collection *ngIf=\"isInvoiceSelected\" [totalAmountArray]=\"totalAmountArray\" [invoiceIdArray]=\"selectedInvoiceIdArray\" (collectionParams)=\"isCollectionMade($event)\"></app-income-post-collection>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-post-collection-wrapper mt-20\">\n\n\t<h5 class=\"mb-3\">Post Collection</h5>\n\n\t<div class=\"card mb-30\">\n\n\t\t<form #postIncomeCollectionForm = \"ngForm\" name=\"postIncomeCollectionForm\" (ngSubmit)=\"submitIncomePostCollectionForm(postIncomeCollectionForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isCollectionSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isCollectionSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Amount*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" [customMin] =\"minCollectionAmount\" [customMax] =\"maxCollectionAmount\" class=\"form-control\" #collectionAmount=\"ngModel\" placeholder=\"Enter text\" name=\"collectionAmount\" [(ngModel)]=\"collection.amount\" required [readonly]=\"isMultipleEntry\">\n\t\t\t                    <div *ngIf=\"collectionAmount.errors\">\n\t\t\t\t\t\t  \t\t\t<p class=\"input-error\">Enter amount equal to or lesser than the selected entries</p>\n\t\t\t\t\t\t  \t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Instrument Type*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"InstrumentType\" \n\t\t\t\t\t\t\t        id=\"InstrumentType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.instrumentTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of instrumentTypeListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Deposit Slip Number*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"depositSlipNo\" \n\t\t\t\t\t\t\t        id=\"depositSlipNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.depositSlipNumber\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of depositSlipLisData\" [value]=\"item.id\">{{ item.id }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Post On*</label>\n\t\t\t                    <input class=\"form-control\" name=\"collectionPostOn\" [owlDateTime]=\"collectionPostOn\" [owlDateTimeTrigger]=\"collectionPostOn\" placeholder=\"Date\" [(ngModel)]=\"collection.postOn\">\n\t\t\t\t\t\t\t\t<owl-date-time #collectionPostOn [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"collectionPostOn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Payment Status*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"paymentStatusType\" \n\t\t\t\t\t\t\t        id=\"paymentStatusType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.collectionStatusId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of paymentStatusListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comments\" [(ngModel)]=\"collection.comment\">\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"postIncomeCollectionForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #postIncomeMultiInvoiceFieldsForm =\"ngForm\" name=\"postIncomeMultiInvoiceFieldsForm\" novalidate>\n\t<div class=\"heads\">\n\t\t<p>{{index + 1}}</p>\n\t</div>\n\t<div class=\"heads account-name-box\" [ngClass]=\"isDeselectColumn()\">\n\t\t<app-select-search-box\n\t\t\tfieldName = \"accountType{{index}}\" \n\t\t\tfieldText = \"\"\n\t\t\tisLabel = \"false\"\n\t\t\tfieldItemName=\"glaccountName\"\n\t\t\t[fieldModel] = \"invoiceGLAccountsData.glaccountName\"\n\t\t\tfieldPlaceholder = \"Type...\"\n\t\t\tfieldRequired = \"'required'\"\n\t\t\t[fieldList] = \"glAccountListData\"\n\t\t\t[isDisabled] = \"isEditInvoice\"\n\t\t\t(inputChange) = \"onAccountChange($event, index)\">\t\t\t\t\t\t\t\n\t\t</app-select-search-box>\n\t</div>\n\t<div class=\"heads\" [ngClass]=\"isDeselectColumn()\">\n\t\t<div class=\"input-box\">\n\t\t    <input type=\"textbox\" class=\"form-control\" placeholder=\"Enter\" name=\"invoiceAmount{{index}}\" \n\t\t    [(ngModel)]=\"invoiceGLAccountsData.amount\"\n\t\t    (ngModelChange)=\"onInvoiceAmountChange(invoiceGLAccountsData.amount, index)\" \n\t\t    required autocomplete=\"off\" [tabindex]=\"isTabIndexDisabled()\" TwoDecimaPlaces>\n\t\t</div>\n\t</div>\n\t<div class=\"heads\">\n\t\t<div class=\"input-box\">\n            <textarea placeholder=\"Enter\" name=\"comments{{index}}\" \n            [(ngModel)]=\"invoiceGLAccountsData.comments\" \n            (ngModelChange)=\"onCommentChange(invoiceGLAccountsData.comments, index)\" required autocomplete=\"off\">\n            </textarea>\n\t\t</div>\n\t</div>\n\t<div class=\"heads\" [ngClass]=\"isDeselectColumn()\">\n\t\t<div class=\"d-flex\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<div class=\"input-box discount-input\"> \n\t                <input type=\"textbox\" class=\"form-control\" placeholder=\"Enter\" name=\"discountDirectAmt{{index}}\" \n\t                [(ngModel)]=\"invoiceGLAccountsData.discountDirectAmt\"\n\t                (ngModelChange)=\"onDiscountAdded(invoiceGLAccountsData.discountDirectAmt, index)\"\n\t                [readonly]=\"!invoiceGLAccountsData.isDiscount\" autocomplete=\"off\" [tabindex]=\"isTabIndexDisabled()\" TwoDecimaPlaces>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"input-box discount-box ml-3\">\n    \t\t\t\t<app-simple-select-box\n\t\t\t\t\t\tfieldName = \"discountType{{index}}\" \n\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t[fieldModel] = \"invoiceGLAccountsData.discountTypeId\"\n\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t[fieldRequired] = \"'null'\"\n\t\t\t\t\t\t[fieldList] = \"discountTypeDataList\"\n\t\t\t\t\t\t[isDisabled] = \"!isFormValid(index)\"\n\t\t\t\t\t\t(inputChange) = \"onDiscountChange($event, index)\">\t\t\t\t\t\t\t\n\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t</div>\n    \t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"heads\" [ngClass]=\"isDeselectColumn()\">\n\t\t<div class=\"input-box tax-box\">\n\t\t\t<app-simple-select-box\n\t\t\t\tfieldName = \"vatType{{index}}\" \n\t\t\t\tfieldText = \"\"\n\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\tisLabel = \"false\"\n\t\t\t\t[fieldModel] = \"invoiceGLAccountsData.vatid\"\n\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t[fieldRequired] = \"'null'\"\n\t\t\t\t[fieldList] = \"vatTypeDataList\"\n\t\t\t\t[isDisabled] = \"!isFormValid(index)\"\n\t\t\t\t(inputChange) = \"onVatChange($event, index)\">\t\t\t\t\t\t\t\n\t\t\t</app-simple-select-box>\n\t\t</div>\n\t</div>\n\t<div class=\"heads\" [ngClass]=\"isDeselectColumn()\">\n\t\t<div class=\"input-box\">\n            <input type=\"textbox\" class=\"form-control\" placeholder=\"\" name=\"totalAmount{{index}}\" \n            [(ngModel)]=\"invoiceGLAccountsData.lineItemTotal\" readonly [tabindex]=\"isTabIndexDisabled()\" TwoDecimaPlaces>\n\t\t</div>\n\t</div>\n\t<div class=\"heads text-center\">\n\t\t<div class=\"float-close\" [ngClass]=\" [ isArrayOne() ? 'delete' : 'disabled', isEditInvoice ? 'disabled' : '' ]\" (click)=\"deleteBlock()\">\n\t    \t<i-feather class=\"icon rotate\" name=\"minus\" ></i-feather>\n\t\t</div>\n    \t<div class=\"float-close\" [ngClass]=\" [ isFormValid(index) ? 'valid' : 'disabled', isEditInvoice ? 'disabled' : '' ]\">\n    \t\t<i-feather class=\"icon rotate\" name=\"check\" ></i-feather>\n    \t</div>\n\t</div>\n</form>\n\n\n\t\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-post-invoice-wrapper\">\n\n\t<h5 class=\"mb-3\" *ngIf=\"isSingleInvoice && !isEditInvoice && !isGeneralInvoice\">\n\t\t<span>Post Single Invoice</span>\n\t</h5>\n\n\t<h5 class=\"mb-3\" *ngIf=\"!isSingleInvoice && !isEditInvoice && !isGeneralInvoice\">\n\t\t<span>Post Multi Invoice</span>\n\t</h5>\n\t\n\n\t<h5 class=\"mb-3\" *ngIf=\"isEditInvoice && !isGeneralInvoice\">\n\t\t<span>Edit Invoice</span>\n\t</h5>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isAccountDataLoaded && !isGeneralInvoice\">\n\t\t\n\t\t<div class=\"card-header at-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t<p class=\"d-inline-block ft mr-md-4\" *ngIf=\"isEditInvoice\"><span>Invoice ID: </span>{{invoice.custInvoiceId}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isInvoiceSubmitted\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceSubmitted\">\n\n\t\t<form #postIncomeMultiInvoiceForm = \"ngForm\" name=\"postIncomeMultiInvoiceForm\" (ngSubmit)=\"submitIncomeMultiInvoiceForm(postIncomeMultiInvoiceForm)\"  novalidate>\n\n\t\t\t<div class=\"card clear mb-20\">\n\n\t\t\t\t<div class=\"card-body pb-0\">\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf =\"isGeneralInvoice\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t\t\tid=\"blockNo\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Block\"\n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"isGeneralInvoice\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Select Unit\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockUnitId\" [disabled] = \"!isBlockSelected\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Invoice Date*</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" \n\t\t\t\t\t\t\t\t\tname=\"custInvoiceDate\" \n\t\t\t\t\t\t\t\t\t[owlDateTime]=\"custInvoiceDate\" \n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"custInvoiceDate\" \n\t\t\t\t\t\t\t\t\tplaceholder=\"Date\" [(ngModel)]=\"invoice.custInvoiceDate\" \n\t\t\t\t\t\t\t\t\trequired \n\t\t\t\t\t\t\t\t\t[readonly]=\"isEditInvoice\"\n\t\t\t\t\t\t\t\t\t[ngClass]=\"isEditInvoice ? 'no-link' : ''\" [tabindex]=\"isEditInvoice ? -1 : 0\">\n\t\t\t\t\t\t\t\t<owl-date-time #custInvoiceDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"custInvoiceDate\" [ngClass]=\"isEditInvoice ? 'no-link' : ''\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Due Date*</label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" \n\t\t\t\t\t\t\t\tname=\"invoiceDueDate\" \n\t\t\t\t\t\t\t\t[owlDateTime]=\"invoiceDueDate\" \n\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"invoiceDueDate\" \n\t\t\t\t\t\t\t\tplaceholder=\"Date\" [(ngModel)]=\"invoice.dueDate\" \n\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t[readonly]=\"isEditInvoice\"\n\t\t\t\t\t\t\t\t[ngClass]=\"isEditInvoice ? 'no-link' : ''\" [tabindex]=\"isEditInvoice ? -1 : 0\">\n\t\t\t\t\t\t\t\t<owl-date-time #invoiceDueDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"invoiceDueDate\" [ngClass]=\"isEditInvoice ? 'no-link' : ''\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\t\t\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<div class=\"card\">\n\n\t\t\t\t<div class=\"invoice-card-wrapper\">\n\t\t\t\t\t<div class=\"invoice-table\">\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"card-body p-0 invoice-header\">\n\t\t\t\t\t\t\t<div class=\"w-50 heads\">S.No</div>\n\t\t\t\t\t\t\t<div class=\"w-250 heads\">Account*</div>\n\t\t\t\t\t\t\t<div class=\"w-120 heads\">Invoice Amount*</div>\n\t\t\t\t\t\t\t<div class=\"w-200 heads\">Comments*</div>\n\t\t\t\t\t\t\t<div class=\"w-220 heads\">Discount*</div>\n\t\t\t\t\t\t\t<div class=\"w-120 heads\">Tax*</div>\n\t\t\t\t\t\t\t<div class=\"w-120 heads\">Amount</div>\n\t\t\t\t\t\t\t<div class=\"w-50 heads\">Actions</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body p-0 invoice-fields\"\n\t\t\t\t\t\t\t*ngFor=\"let invoiceGLAccountsData of invoiceGLAccountsArray; let i = index\" \n\t\t\t\t\t\t\tapp-income-post-multi-invoice-fields \n\t\t\t\t\t\t\t[invoiceGLAccountsArray] = \"invoiceGLAccountsArray\" \n\t\t\t\t\t\t\t[invoiceGLAccountsData] = \"invoiceGLAccountsData\"\n\t\t\t\t\t\t\t[isEditInvoice]=\"isEditInvoice\"\n\t\t\t\t\t\t\t[index]=\"i\" \n\t\t\t\t\t\t\t(fieldParams) = \"getFieldParams($event)\"\n\t\t\t\t\t\t\t(taxParams) = \"getCustTaxInvoiceParams($event)\">\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t<div class=\"card-body p-0\" *ngIf=\"!isEditInvoice && !isSingleInvoice\">\n\t\t\t\t\t<div class=\"add-invoice-box\">\n\t\t\t\t\t\t<div class=\"float-left add-invoice-link\" (click)=\"addInvoice()\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Another Line</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"total-box border-top\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"offset-md-4 col-md-2 col-6\">\n\t\t\t\t\t\t\t<p>Sub Amount</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 d-none d-md-block\"></div>\n\t\t\t\t\t\t<div class=\"col-md-2 col-6\">\n\t\t\t\t\t\t\t<p class=\"text-right\"><span class=\"ml-1\">{{invoice.subAmount}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngFor=\" let item of vatTypeDataList; let i = index \">\n\t\t\t\t\t\t<div class=\"offset-md-4 col-md-2 col-6\">\n\t\t\t\t\t\t\t<p>VAT [{{item.lookupValueName}}%]:</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 d-none d-md-block\"></div>\n\t\t\t\t\t\t<div class=\"col-md-2 col-6\">\n\t\t\t\t\t\t\t<p class=\"text-right\"><span class=\"ml-1\">{{item.custVatTypeAmount}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"offset-md-4 col-md-6 col-9\">\n\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t<p>Discount</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"float-left ml-4\" [ngClass]=\"isDeselectColumn()\">\n\t\t\t\t\t\t\t\t<div class=\"input-box discount-input\"> \n\t\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"discountFinalAmount\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"invoice.invoicefinalinputdiscount\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"onDiscountFinalAdded(invoice.invoicefinalinputdiscount)\" \n\t\t\t\t\t\t\t\t\t[readonly]=\"!invoice.isFinalDiscount || isEditInvoice\" autocomplete=\"off\"\n\t\t\t\t\t\t\t\t\t[tabindex]=\"isEditInvoice ? -1 : 0\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"float-left ml-3\">\n\t\t\t\t\t\t\t\t<div class=\"input-box discount-box rel\">\n\t\t\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\t\t\tfieldName = \"discountGenType\" \n\t\t\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t\t\t[fieldModel] = \"invoice.finalDiscountTypeName\"\n\t\t\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t\t\t[fieldRequired] = \"'null'\"\n\t\t\t\t\t\t\t\t\t\t[fieldList] = \"discountFinalTypeDataList\"\n\t\t\t\t\t\t\t\t\t\t[isDisabled] = \"isEditInvoice\"\n\t\t\t\t\t\t\t\t\t\t(inputChange) = \"onDiscountFinalChange($event)\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-2 col-3\">\n\t\t\t\t\t\t\t<p class=\"text-right\">{{invoice.invoicefinaldiscount}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"total-box final border-top\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"offset-md-4 col-md-2 col-6\">\n\t\t\t\t\t\t\t<p>Total</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4 d-none d-md-block\"></div>\n\t\t\t\t\t\t<div class=\"col-md-2 col-6\">\n\t\t\t\t\t\t\t<p class=\"text-right\"><span class=\"ml-1\">{{invoice.custInvoiceAmount}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<button class=\"btn lime-green float-right mt-4\" [disabled]=\"postIncomeMultiInvoiceForm.invalid || isFormInValid\" [ngClass]=\"\">Submit</button>\n\n\t\t</form>\n\t\t\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-loader *ngIf=\"!isReceiptSubmitted\"></app-loader>\n\n<ng-container *ngIf=\"isReceiptSubmitted\">\n\t<form #reverseIncomeReceiptsForm = \"ngForm\" name=\"reverseIncomeReceiptsForm\" (ngSubmit)=\"submitReverseIncomeReceiptsForm(reverseIncomeReceiptsForm)\"  novalidate>\n\n\t\t<div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"input-box\">\n\t\t            <label>Comments</label>\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"receipts.comment\" required>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<button class=\"btn blue\" [disabled]=\"reverseIncomeReceiptsForm.invalid\">Submit</button>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"income-security-deposit-wrapper\">\n\n    <app-loader *ngIf=\"!isDepositLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDepositLoaded\">\n\n        <div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Security Deposit <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t placeholder=\"Search...\" [(ngModel)]=\"securityDepositData\" \n\t\t\t\t\t\t (ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t<li class=\"list-inline-item\">\n\n\t\t\t\t\t\t<a class=\"btn lime-green mt_5\" id=\"addSecurityDepositElement\" (click)=\"addSecurityDeposit()\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Security Deposit</span>\n\t\t\t\t\t\t</a>\n\t\n\t\t\t\t\t</li>\n\t    \t\t</ul>\n            </div>\n\n            <div class=\"card-body p-0\">\n\t\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"securityDepositDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\n\t\t\t<jqxPopover \n\t\t\t#reversePopOver\n\t\t\t[theme]=\"'material'\"\n\t\t\t[width]=\"popoverWidth\"\n\t\t\t[offset]=\"popoverOffset\" \n\t\t\t[showCloseButton]=\"true\" \n\t\t\t[selector]=\"popOverSelector\"\n\t\t\t[position]=\"popOverPosition\"\n\t\t\t>\n\t\t\t\t<app-income-add-security-deposit\n\t\t\t\t[deposit]=\"deposit\" \n\t\t\t\t[isEdit]=\"isEditDeposit\" \n\t\t\t\t(outputParams)=\"getSecurityDepositParams($event)\">\n                </app-income-add-security-deposit>\n                \n\t\t\t</jqxPopover>\n\n\t\t\t</div>\n\n        </div>\n\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-sub-ledger-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isSubLedgerDataLoaded\"></app-loader>\n\n\t<div class=\"card clear ov mb-3\" *ngIf=\"isSubLedgerDataLoaded\">\n\t\t<div class=\"card-body no-border filter-box\">\n  \t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n  \t\t\t<div class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"AllBlockDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"getAllBlockData('all')\" [ngClass]=\"getSelected('all')\">\n\t  \t\t\t\t<span>All Towers</span>\n\t\t        </a>\n\t\t\t</div>\n  \t\t\t<div class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"singleBlockDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\" [ngClass]=\"getSelected('single')\">\n\t  \t\t\t\t<span>{{singleBlock}}</span>\n\t  \t\t\t\t<div class=\"arrow\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></div>\n\t\t        </a>\n\t\t        <div class=\"dropdown-menu\" aria-labelledby = \"singleBlockDropDown\">\n\t\t         \t<a href=\"javascript:void(0)\" *ngFor=\"let block of blockListData\" (click)=\"getSingleBlock(block)\">{{block.apartmentBlockNumber}}</a>\n\t\t        </div>\n\t\t\t</div>\n  \t\t</div>\n\t</div>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isSubLedgerDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Sub Ledgers <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p>\n    \t\t\t\t<span *ngIf=\"filterSelected == 'all'\">All Towers</span>\n    \t\t\t\t<span *ngIf=\"filterSelected != 'all'\">Residents under {{singleBlock}}</span>\n    \t\t\t</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"subLedgerData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"subLedgerDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\t\t\t<div class=\"button-wrapper\" *ngIf=\"isItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">Total Amount Due : <span class=\"ml-1\">{{totalDueAmount}}</span></p>\n    \t\t\t<p class=\"snippet\">Total Excess Payments & Incentives Due : <span class=\"ml-1\">{{totalDueAmount - netDueAmount}}</span></p>\n    \t\t\t<p class=\"snippet\">Net Amount : <span class=\"ml-1\">{{netDueAmount}}</span></p>\n\t\t\t</div>\n\n\t\t</div>\n\n  \t</div>\n\n  \t<ng-template #viewInvoiceTypeRef let-ledger>\n  \t\t\n  \t\t<div class=\"menu-info rel\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Select Invoice Types</h5>\n\t\t\t</div>\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body p-0 lists other\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" routerLink=\"/ams/income/post-multi-invoice/{{ledger.apartmentBlockUnitId}}/single\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Invoice - Single Line</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" routerLink=\"/ams/income/post-multi-invoice/{{ledger.apartmentBlockUnitId}}/multi\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Invoice - Multi Line</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" \n\t\t\t\t\t\t\t[ngClass]=\"ledger.isInvoiceAvailable ? '' : 'disabled'\"\n\t\t\t\t\t\t\trouterLink=\"/ams/income/add-credit/{{ledger.apartmentBlockUnitId}}/new\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Credit Note</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n  \t</ng-template>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-tracker-ageing-wrapper\">\n\n\t<h4 class=\"main-title-mini float-left\">Account Ageing</h4>\n\t<h6 class=\"head-label\" *ngIf=\"isDataLoaded\">{{totalInvoices}} Invoices</h6>\n\n\t<div class=\"clear mt-3\">\n\t\t<h6 *ngIf=\"dataType == 'DueAge'\">As per Payment Due date</h6>\n\t\t<h6 *ngIf=\"dataType == 'InvoiceAge'\">As per Invoice Due date</h6>\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"filter-box clear\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item title\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>\n\t\t\t\t\t\t\t<span>Filter</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\" (click)=\"setDataType('DueAge')\" [ngClass]=\"dataType == 'DueAge' ? 'active' : ''\">\n\t\t\t\t\t\t<p>Due Age</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\" (click)=\"setDataType('InvoiceAge')\" [ngClass]=\"dataType == 'InvoiceAge' ? 'active' : ''\">\n\t\t\t\t\t\t<p>Invoice Age</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 col-md-12 col-lg-12\">\n\t\t\t\n\t\t\t<div class=\"card clear account-chart-card\">\n\t\t\n\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t<app-loader *ngIf=\"!isChartLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"chart-box\" [ngClass]=\"!isChartLoaded ? 'hide-chart' : ''\">\n\t\t\t\t\t\t<canvas #incomePieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"legends-list\" *ngIf=\"isChartLoaded\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small low mr-2\"></span> 0 - 30 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem1}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small cyan mr-2\"></span> 31 - 60 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem3}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small m-red mr-2\"></span> 61 - 90 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem4}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small blue mr-2\"></span> Over 90 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem5}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\n\t\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card table-card clear table-accordion\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n    \t\t\t\t<h5>Collection on each Unit <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t\t<p class=\"d-none d-md-inline-block tc-blue\">Data as of Today ( {{asOfDate}} )</p>\n    \t\t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ageingData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn trans-white mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n    \t\t\t\t</li>\n\t    \t\t</ul>\n  \t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('towerUnit')\">Tower Unit Name <span [ngClass]=\"getFieldOrderBy('towerUnit')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billToParty')\">0 - 30 Days<span [ngClass]=\"getFieldOrderBy('billToParty')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">31 - 60 Days<span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">61 - 90 Days<span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('due')\">Over 90 Days<span [ngClass]=\"getFieldOrderBy('due')\"></span></th>\n\t\t\t\t\t      <th class=\"max-50 text-center\" scope=\"col\" (click)=\"sortUnitData('status')\">Total<span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t    \t<tbody>\n\t\t\t    \t\t<ng-container *ngFor=\"let ageing of ageingDataDataList | simpleSearch: ageingData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t    \t\t\t<tr data-toggle=\"collapse\" attr.data-target=\"#collapse{{ageing.unitID}}\" aria-expanded=\"true\" attr.aria-controls=\"collapse{{ageing.unitID}}\" class=\"collapsed\">\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t<div class=\"toggle-icon\"></div>\n\t\t\t\t\t\t\t\t<span>{{ageing.towerUnit}}</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt1 + ageing.bucketAmt2}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount1 + ageing.bucketCount2}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt3}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount3}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt4}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount4}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt5}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount5}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt6}}</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t    \t\t\t</tr>\n\t\t\t    \t\t\t<tr id=\"collapse{{ageing.unitID}}\" class=\"collapse\" attr.aria-labelledby=\"collapse{{ageing.unitID}}\" data-parent=\"#accordion\">\n\t\t\t    \t\t\t\t <td class=\"collapse-cell\" colspan=\"6\">\n\t\t\t\t    \t\t\t\t<table class=\"table\">\n\t\t\t\t    \t\t\t\t\t<tr class=\"details-wrapper\" *ngFor=\"let invoice of ageing.invoiceDetails\">\n\t\t\t\t    \t\t\t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<span class=\"dots small low\"></span>\n\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<p class=\"head\">Invoice ID</p>\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<p class=\"tc-grey\">{{invoice.custInvoiceId}}</p>\n\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t    \t\t\t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Invoice Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.invoiceAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Collection Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.collectionAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Due Date</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{getDate(invoice.dueDate)}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\" *ngIf=\"dateType == 'DueAge'\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Due Age</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.dueAge}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\" *ngIf=\"dateType != 'DueAge'\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Invoice Age</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.invoiceAge}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Balance Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.balanceAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t\t</td> \n\t\t\t    \t\t\t</tr>\n\t\t\t    \t\t</ng-container>\n\t\t\t    \t\t<tr class=\"selected\" *ngIf=\"isItemsAvailable()\">\n\t\t\t\t\t    \t<td class=\"name\">Total</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem1}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem3}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem4}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem5}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmount}}</td>\n\t\t\t\t    \t</tr>\n\t\t\t    \t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"card mb-20 filter-card\" id=\"accordion\">\n\t\t\t\n\t<form #incomeFilterForm = \"ngForm\" name=\"incomeFilterForm\" (ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\"  novalidate>\n\t\t\n\t\t<div class=\"card-header filter-box accor collapsed\" data-toggle=\"collapse\" data-target=\"#filterCollapseOne\" aria-expanded=\"true\" aria-controls=\"filterCollapseOne\">\n\t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n\t\t</div>\n\n\t\t<div id=\"filterCollapseOne\" class=\"collapse\" aria-labelledby=\"filterCollapseOne\" data-parent=\"#accordion\">\n\n\t\t\t<div class=\"card-header border-top\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t                    <label>Posted From</label>\n\t\t                    <input class=\"form-control\" name=\"PostStartDate\" [owlDateTime]=\"PostStartDate\" [owlDateTimeTrigger]=\"PostStartDate\" placeholder=\"Date\" [(ngModel)]=\"filter.PostStartDate\">\n\t\t\t\t\t\t\t<owl-date-time #PostStartDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostStartDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t            \t\t</div>\n\t\t\t\t\t</div> \n\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t                    <label>Posted To</label>\n\t\t                    <input class=\"form-control\" name=\"PostEndDate\" [owlDateTime]=\"PostEndDate\" [owlDateTimeTrigger]=\"PostEndDate\" placeholder=\"Date\" [(ngModel)]=\"filter.PostEndDate\">\n\t\t\t\t\t\t\t<owl-date-time #PostEndDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostEndDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t            \t\t</div>\n\t\t\t\t\t</div> \n\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box mb-2\">\n\t\t\t                <label>Bill Number</label>\n\t\t\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"billNo\" \n\t\t\t                [(ngModel)]=\"filter.billNo\">\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box mb-2\">\n\t\t\t                <label>Receipt Number</label>\n\t\t\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"receiptNo\" \n\t\t\t                [(ngModel)]=\"filter.receiptNo\">\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-header\">\n\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item mr-5\">\n\t\t\t\t\t\t<div class=\"input-box d-inline-block oh mb-0 mt-1\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"isInvoiceCreditNote\" name=\"isInvoiceCreditNote\" [(ngModel)]=\"filter.isCreditNote\" [value]=\"\">\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"isInvoiceCreditNote\">Is Credit Note</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<div class=\"input-box d-inline-block oh mb-0 mt-1\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"isInvoiceReverse\" name=\"isInvoiceReverse\" [(ngModel)]=\"filter.isReversed\">\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"isInvoiceReverse\">Is Reverse</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<ng-container *ngIf=\"!isFilterObjectNull()\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let key of Object.keys(filter)\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item filter-badge grey-blue\" [ngClass]=\"isItem(key) ? 'd-inline-block' : 'd-none' \">\n\t\t\t\t\t\t\t\t{{getFilterData(key)}}\n\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"removeFilterItem(key)\"></i-feather>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 text-right\">\n\t\t\t\t\t\t<button class=\"btn lime-green sf\" [disabled]=\"isFilterObjectNull()\">Apply Filter</button>\n\t\t\t\t\t\t<div class=\"btn trans-red ml-3 sf\" (click)=\"clearFilterItems()\">Clear</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.html":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.html ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-tracker-reports-customer-reports\">\n\t\n\t<h4 class=\"main-title-mini\">Customer Journal Entries</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #incomeReportsCustomerForm = \"ngForm\" name=\"incomeReportsCustomerForm\" (ngSubmit)=\"submitIncomeReportsCustomerForm(incomeReportsCustomerForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockId\" (ngModelChange)=\"getUnits(report.apartmentBlockId)\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockUnitId\" [disabled]=\"!isBlockSelected\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date From</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateFrom\" [owlDateTime]=\"documentDateFrom\" [owlDateTimeTrigger]=\"documentDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateFrom\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date To</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateTo\" [owlDateTime]=\"documentDateTo\" [owlDateTimeTrigger]=\"documentDateTo\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateTo\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date From*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingDateFrom\" [owlDateTime]=\"PostingDateFrom\" [owlDateTimeTrigger]=\"PostingDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateFrom\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date To*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingdateTo\" [owlDateTime]=\"PostingdateTo\" [owlDateTimeTrigger]=\"PostingdateTo\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateTo\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingdateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingdateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Account</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glAccountNo\" \n\t\t\t\t\t\t        id=\"glAccountNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLaccountID\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glAccountsDataList\" [value]=\"item.glaccountId\">{{ item.glaccountName }} {{item.glaccountId}}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Document Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glDocumentType\" \n\t\t\t\t\t\t        id=\"glDocumentType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLDocumentTypeID\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glDocumentTypeDataList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"incomeReportsCustomerForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.documentDateFrom)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.documentDateTo)}}</span> </p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('custInvoiceId')\">Customer Invoice Id<span [ngClass]=\"getFieldOrderBy('custInvoiceId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlock')\">Block No<span [ngClass]=\"getFieldOrderBy('apartmentBlock')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockUnitNumber')\">Unit No<span [ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('creditAmount')\">Credit Amount<span [ngClass]=\"getFieldOrderBy('creditAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('debitAmount')\">Debit Amount<span [ngClass]=\"getFieldOrderBy('debitAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('glaccountname')\">Gl Account Name<span [ngClass]=\"getFieldOrderBy('glaccountname')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('documentDate')\">Document Date<span [ngClass]=\"getFieldOrderBy('documentDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('enteredByName')\">Entered By<span [ngClass]=\"getFieldOrderBy('enteredByName')\"></span></th>\n\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('entryDateTime')\">Entry Date & Time<span [ngClass]=\"getFieldOrderBy('entryDateTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postingDate')\">Posting Date<span [ngClass]=\"getFieldOrderBy('postingDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('clearingDate')\">Clearing Date<span [ngClass]=\"getFieldOrderBy('clearingDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('clearingDocumentNumber')\">Clearing Document No <span [ngClass]=\"getFieldOrderBy('clearingDocumentNumber')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of reportsDataList | simpleSearch: reportsData | sort : unitFieldType: unitOrder| slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{report.custInvoiceId}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.apartmentBlock}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.apartmentBlockUnitNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.creditAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.debitAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.glaccountname}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.documentDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.enteredByName}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(report.entryDateTime)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.postingDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.clearingDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.clearingDocumentNumber}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.html":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.html ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-tracker-reports-vendor-reports\">\n\t\n\t<h4 class=\"main-title-mini\">Vendor Journal Entries</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #incomeReportsVendorForm = \"ngForm\" name=\"incomeReportsVendorForm\" (ngSubmit)=\"submitIncomeReportsVendorForm(incomeReportsVendorForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date From</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateFrom\" [owlDateTime]=\"documentDateFrom\" [owlDateTimeTrigger]=\"documentDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateFrom\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date To</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateTo\" [owlDateTime]=\"documentDateTo\" [owlDateTimeTrigger]=\"documentDateTo\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateTo\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date From*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingDateFrom\" [owlDateTime]=\"PostingDateFrom\" [owlDateTimeTrigger]=\"PostingDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateFrom\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date To*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingdateTo\" [owlDateTime]=\"PostingdateTo\" [owlDateTimeTrigger]=\"PostingdateTo\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateTo\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingdateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingdateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Vendor</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"vendorName\" \n\t\t\t\t\t\t        id=\"vendorName\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.vendorId\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of vendorData\" [value]=\"item.vendorId\">{{ item.vendorName }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Account</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glAccountNo\" \n\t\t\t\t\t\t        id=\"glAccountNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLaccountID\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glAccountsDataList\" [value]=\"item.glaccountId\">{{ item.glaccountName }} {{item.glaccountId}}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Document Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glDocumentType\" \n\t\t\t\t\t\t        id=\"glDocumentType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLDocumentTypeID\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glDocumentTypeDataList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"incomeReportsVendorForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.documentDateFrom)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.documentDateTo)}}</span> </p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('vendorName')\">Vendor Name<span [ngClass]=\"getFieldOrderBy('vendorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('vendorInvoiceId')\">Vendor Invoice Id<span [ngClass]=\"getFieldOrderBy('vendorInvoiceId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('creditAmount')\">Credit Amount<span [ngClass]=\"getFieldOrderBy('creditAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('debitAmount')\">Debit Amount<span [ngClass]=\"getFieldOrderBy('debitAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('glaccountname')\">Gl Account Name<span [ngClass]=\"getFieldOrderBy('glaccountname')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('documentDate')\">Document Date<span [ngClass]=\"getFieldOrderBy('documentDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('documentNumber')\">Document No<span [ngClass]=\"getFieldOrderBy('documentNumber')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('enteredByName')\">Entered By<span [ngClass]=\"getFieldOrderBy('enteredByName')\"></span></th>\n\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('entryDateTime')\">Entry Date & Time<span [ngClass]=\"getFieldOrderBy('entryDateTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postingDate')\">Posting Date<span [ngClass]=\"getFieldOrderBy('postingDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('clearingDate')\">Clearing Date<span [ngClass]=\"getFieldOrderBy('clearingDate')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of reportsDataList | simpleSearch: reportsData | sort : unitFieldType: unitOrder| slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{report.vendorName}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.vendorInvoiceId}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.creditAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.debitAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.glaccountname}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.documentDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.documentNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.enteredByName}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(report.entryDateTime)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.postingDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.clearingDate)}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Select the reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportsDataList; let i = index\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/income/reports/{{report.type}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\t</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.html":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.html ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card table-card mb-30\" *ngIf=\"isAutoInvoicingDataLoaded\">\n    <div class=\"card-header\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-6 d-flex align-items-center\">\n                <h5>Auto Invoicing <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"card-body p-0\">\n        <form>\n            <table class=\"table colname\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" (click)=\"sortUnitData('glaccountId')\">GL Account<span\n                                [ngClass]=\"getFieldOrderBy('glaccountId')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('tower')\">Tower<span\n                                [ngClass]=\"getFieldOrderBy('tower')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('feeperSqftpermonth')\">Fee per Sqft/month<span\n                                [ngClass]=\"getFieldOrderBy('feeperSqftpermonth')\"></span></th>\n                        <!-- <th scope=\"col\" (click)=\"sortUnitData('monthQuarterlyYear')\">M/Q/A<span\n                                [ngClass]=\"getFieldOrderBy('monthQuarterlyYear')\"></span></th> -->\n                        <th scope=\"col\" (click)=\"sortUnitData('fixedFee')\">Fixed Fee<span\n                                [ngClass]=\"getFieldOrderBy('fixedFee')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('vatId')\">% VAT ID<span\n                                [ngClass]=\"getFieldOrderBy('vatId')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('taxId')\">% Tax ID<span\n                                [ngClass]=\"getFieldOrderBy('taxId')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('effectiveDate')\">effective Date<span\n                                [ngClass]=\"getFieldOrderBy('effectiveDate')\"></span></th>\n                        <th scope=\"col\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container>\n                        <tr>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <mat-select name=\"glacc\" [(ngModel)]=\"row.glaccountId\">\n                                        <mat-option *ngFor=\"let item of glAccountList\" [value]=\"item.glaccountId\">\n                                            {{ item.glaccountNumber}} - {{ item.glaccountName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <!-- <mat-form-field class=\"w-100\">\n                                        <input matInput type=\"text\" name=\"blockId\" [(ngModel)]=\"row.apartmentBlockId\">\n                                    </mat-form-field> -->\n                                <mat-form-field class=\"w-100\">\n                                    <mat-select name=\"blockId\" [(ngModel)]=\"row.tower\">\n                                        <mat-option *ngFor=\"let item of blockDataList\" [value]=\"item.apartmentBlockId\">\n                                            {{ item.apartmentBlockNumber}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <input matInput type=\"text\" name=\"fpspm\" [(ngModel)]=\"row.feeperSqftpermonth\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <input matInput type=\"text\" name=\"fixFee\" [(ngModel)]=\"row.fixedFee\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <mat-select name=\"vat\" [(ngModel)]=\"row.vatId\">\n                                        <mat-option *ngFor=\"let item of vatPecentageDataList\"\n                                            [value]=\"item.lookupValueId\">\n                                            {{ item.lookupValueName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <mat-select name=\"tax\" [(ngModel)]=\"row.taxId\">\n                                        <mat-option *ngFor=\"let item of taxPecentageDataList\"\n                                            [value]=\"item.lookupValueId\">\n                                            {{ item.lookupValueName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <div class=\"input-box mb-0\">\n                                    <input class=\"form-control stock-date\" name=\"effecDate\"\n                                        [owlDateTime]=\"effectiveDate\" [owlDateTimeTrigger]=\"effectiveDate\"\n                                        placeholder=\"\" [(ngModel)]=\"row.effectiveDate\" required>\n                                    <owl-date-time #effectiveDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                    <div class=\"date-btn\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <i class=\"fa fa-floppy-o save-icon\"\n                                    [ngStyle]=\"!row.glaccountId || !row.tower || !row.feeperSqftpermonth || !row.fixedFee || !row.vatId || !row.taxId || !row.effectiveDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                                    (click)=\"addAutoinvoiceConfig(row)\" aria-hidden=\"true\"></i>\n                                <!-- <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(i,'null')\"\n\t\t\t\t\t\t\t\t\t\t\t\taria-hidden=\"true\"></i> -->\n                            </td>\n                        </tr>\n                        <!-- </form> -->\n                    </ng-container>\n                    <ng-container\n                        *ngFor=\"let list of autoInvoicingData | slice:ItemStartIndex:ItemEndIndex;let autoInvoiceIndex=index\">\n                        <tr>\n                            <td>\n                                <span [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\">\n                                    <span *ngFor=\" let item of glAccountList\">\n                                        <span *ngIf=\"item.glaccountId == list.glaccountId\">{{ item.glaccountNumber}} -\n                                            {{ item.glaccountName }}</span>\n                                    </span>\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\">\n                                    <mat-select name=\"glaccountId\" [(ngModel)]=\"list.glaccountId\">\n                                        <mat-option *ngFor=\"let item of glAccountList\" [value]=\"item.glaccountId\">\n                                            {{ item.glaccountNumber}} - {{ item.glaccountName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\">\n                                    <span *ngFor=\" let item of blockDataList\">\n                                        <span\n                                            *ngIf=\"item.apartmentBlockId == list.tower\">{{ item.apartmentBlockNumber}}</span>\n                                    </span>\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\">\n                                    <mat-select name=\"apartmentBlockId\" [(ngModel)]=\"list.tower\">\n                                        <mat-option *ngFor=\"let item of blockDataList\" [value]=\"item.apartmentBlockId\">\n                                            {{ item.apartmentBlockNumber}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\">\n                                    {{list.feeperSqftpermonth}}\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\">\n                                    <input matInput type=\"text\" name=\"feeperSqftpermonth\"\n                                        [(ngModel)]=\"list.feeperSqftpermonth\">\n                                </mat-form-field>\n\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\">\n                                    {{list.fixedFee}}\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\">\n                                    <input matInput type=\"text\" name=\"fixedFee\" [(ngModel)]=\"list.fixedFee\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\">\n                                    <span *ngFor=\" let item of vatPecentageDataList\">\n                                        <span *ngIf=\"list.vatId == item.lookupValueId\">{{item.lookupValueName}}</span>\n                                    </span>\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\">\n                                    <mat-select name=\"vatId\" [(ngModel)]=\"list.vatId\">\n                                        <mat-option *ngFor=\"let item of  vatPecentageDataList\"\n                                            [value]=\"item.lookupValueId\">\n                                            {{ item.lookupValueName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\">\n                                    <span *ngFor=\" let item of taxPecentageDataList\">\n                                        <span *ngIf=\"list.taxId == item.lookupValueId\">{{item.lookupValueName}}</span>\n                                    </span>\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\">\n                                    <mat-select name=\"taxId\" [(ngModel)]=\"list.taxId\">\n                                        <mat-option *ngFor=\"let item of taxPecentageDataList\"\n                                            [value]=\"item.lookupValueId\">\n                                            {{ item.lookupValueName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\">\n                                    {{list.effectiveDate?(list.effectiveDate | date: 'dd/MM/yyyy'):'--'}}\n                                </span>\n                                <div class=\"input-box mb-0\" *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\">\n                                    <input class=\"form-control stock-date\" name=\"effectiveDate\"\n                                        [owlDateTime]=\"effectiveDate\" [owlDateTimeTrigger]=\"effectiveDate\"\n                                        placeholder=\"\" [(ngModel)]=\"list.effectiveDate\" required>\n                                    <owl-date-time #effectiveDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                    <div class=\"date-btn\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"\n                                    [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\"\n                                    (click)=\"updateAutoInvoiceIndex = autoInvoiceIndex\" aria-hidden=\"true\"></i>\n                                <i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\"\n                                    [ngStyle]=\"!list.glaccountId || !list.tower || !list.feeperSqftpermonth || !list.fixedFee || !list.vatId || !list.taxId || !list.effectiveDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                                    *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\"\n                                    (click)=\"updateAutoinvoiceConfig(list)\"></i>\n                                <i class=\"fa fa-times pad-top pl-2\" title=\"cancel\"\n                                    *ngIf=\"updateAutoInvoiceIndex == autoInvoiceIndex\"\n                                    (click)=\"updateAutoInvoiceIndex = -1\"></i>\n                                <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(index,list)\"\n                                    [ngStyle]=\"updateAutoInvoiceIndex == autoInvoiceIndex?{'display':'none'}:''\"\n                                    aria-hidden=\"true\"></i>\n\n                            </td>\n                        </tr>\n                    </ng-container>\n                </tbody>\n\n            </table>\n            <app-pagination *ngIf=\"autoInvoicingData.length > 0 \" [totalItems]=\"totalItems\"\n                [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\"\n                (outputParams)=\"getIndexParams($event)\">\n            </app-pagination>\n            <!-- <div class=\"action-container\">\n                <button mat-raised-button type=\"submit\" (click)=\"addRow()\">Add row</button>\n                <button mat-raised-button [disabled]=\"autoInvoicingTable.invalid\" type=\"submit\"\n                    (click)=\"submitForm()\">Submit</button>\n            </div> -->\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.html":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.html ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-tracker-setup-wrapper\">\n\n    <form #incomeSetupForm = \"ngForm\" name=\"incomeSetupForm\" novalidate>\n\n        <div class=\"card ov\">\n    \n            <div class=\"card-body ov profile-section\">\n                    \n                    <div class=\"row\">\n                        \n                        <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"select-box\">\n                                <label>Currency Type*</label>\n                                <select name=\"currencyTypeId\" id=\"currencyTypeId\" class=\"form-control\"\n                                    [(ngModel)]=\"currencyTypeId\" readonly>\n                                    <option value=\"\" disabled selected hidden>select</option>\n                                    <option *ngFor=\"let item of currencyTypeDataList\"\n                                        [value]=\"item.lookupValueId\">\n                                    {{item.lookupValueName}}</option>\n                                </select>\n                            </div>\n                        </div>\n        \n                        <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"select-box\">\n                                <label>AR Control GL Account*</label>\n                                <select name=\"glaccountId\" id=\"glaccountId\" class=\"form-control\"\n                                    [(ngModel)]=\"glaccountId\" (ngModelChange)=\"addCustAccount()\" readonly>\n                                    <option value=\"\" disabled selected hidden>select</option>\n                                    <option *ngFor=\"let item of glAccountListData\" [value]=\"item.glaccountId\">{{item.glaccountName}}</option>\n                                </select>\n                            </div>\n                        </div>\n        \n                        <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"input-box\">\n                                <label>Customer Income Payment Term*</label>\n                                \n                                <div class=\"d-flex\">\n                                    <div class=\"input-wrapper\">\n                                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" \n                                        placeholder=\"Enter\" name=\"customerIncomePayment\"\n                                        [(ngModel)]=\"customerIncomeName\" (ngModelChange)=\"checkCustomerIncome()\" autocomplete=\"off\">\n                                        <i-feather *ngIf=\"customerIncomeName != null\" (click)=\"clearCustomerIncome()\" class=\"clear-icon\" name=\"x-circle\" ></i-feather>\n                                    </div>\n                                    <div class=\"btn-list\">\n                                        <a class=\"btn mr-3\" (click)=\"submitCustomerIncomePayment()\" [ngClass]=\"isCustomerIncomePayment()\">\n                                            <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                                        </a>\n                                        <a class=\"btn\" role=\"button\" data-toggle=\"dropdown\" \n                                            id=\"viewCustomerIncomePaymentDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <i-feather class=\"icon view\" name=\"eye\"></i-feather>\n                                        </a>\n                                        <div class=\"dropdown-menu mobile-menu\" aria-labelledby=\"viewCustomerIncomePaymentDropDown\">\n                                            <li *ngFor=\"let item of custIncomePaymentlist\" class=\"list-group-item\">\n                                                {{item.lookupValueName}}\n                                                <!-- <i-feather (click)=\"deleteLookupValueItem($event, item, 'income')\" class=\"icon del\" name=\"trash\"></i-feather> -->\n                                            </li>\n                                        </div>\n                                    </div>\n                                </div>\n                                \n                            </div>   \n                        </div>\n        \n                        <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"input-box\">\n                                <label>% VAT*</label>\n                                <div class=\"d-flex\">\n                                    <div class=\"input-wrapper\">\n                                        <input type=\"number\" OnlyNumber=\"true\" \n                                        class=\"form-control\" placeholder=\"Enter\" \n                                        name=\"customerVAT\" [(ngModel)]=\"customerVatName\" (ngModelChange)=\"checkCustomerVat()\" autocomplete=\"off\">\n                                        <i-feather *ngIf=\"customerVatName != null\" (click)=\"clearCustomerVat()\" class=\"clear-icon\" name=\"x-circle\" ></i-feather>\n                                    </div>\n                                    <div class=\"btn-list\">\n                                        <a class=\"btn mr-3\" (click)=\"submitCustomerVat()\" [ngClass]=\"isCustomerVAT()\">\n                                            <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                                        </a>\n                                        <a class=\"btn\" role=\"button\" data-toggle=\"dropdown\" \n                                        id=\"viewCustomerVatDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <i-feather class=\"icon view\" name=\"eye\"></i-feather>\n                                        </a>\n                                        <div class=\"dropdown-menu mobile-menu\" aria-labelledby=\"viewCustomerVatDropDown\">\n                                            <ng-container *ngFor=\"let item of vatPecentageDataList; let i = index\">\n                                                <li class=\"list-group-item\">{{item.lookupValueName}}</li>\n                                            </ng-container>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n        \n                        <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"input-box\">\n                                <label>% TAX*</label>\n                                <div class=\"d-flex\">\n                                    <div class=\"input-wrapper\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"customerTAX\" [(ngModel)]=\"customerTaxName\" (ngModelChange)=\"checkCustomerTax()\" autocomplete=\"off\">\n                                        <i-feather *ngIf=\"customerTaxName != null\" (click)=\"clearCustomerTax()\" class=\"clear-icon\" name=\"x-circle\" ></i-feather>\n                                    </div>\n                                     <div class=\"btn-list\">\n                                        <a class=\"btn mr-3\" (click)=\"submitCustomerTax()\" [ngClass]=\"isCustomerTAX()\">\n                                            <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                                        </a>\n                                        <a class=\"btn\" role=\"button\" data-toggle=\"dropdown\" \n                                        id=\"viewCustomerTaxDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <i-feather class=\"icon view\" name=\"eye\"></i-feather>\n                                        </a>\n                                        <div class=\"dropdown-menu mobile-menu\" aria-labelledby=\"viewCustomerTaxDropDown\">\n                                            <ng-container *ngFor=\"let item of taxPecentageDataList; let i = index\">\n                                                <li class=\"list-group-item\">{{item.lookupValueName}}</li>\n                                            </ng-container>\n                                        </div>\n                                     </div>\n                                </div>\n                            </div>\n                        </div>\n        \n                    </div>\n        \n            </div>\n        \n        </div>\n\n    </form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.html":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.html ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card table-card mb-30\" *ngIf=\"isPenaltySetupDataLoaded\">\n    <div class=\"card-header\">\n\n        <div class=\"row\">\n            <div class=\"col-sm-6 d-flex align-items-center\">\n                <h5>Penalty Setup<span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"card-body p-0\">\n        <form>\n            <table class=\"table colname\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\" (click)=\"sortUnitData('glAcccountId')\">GL Account<span\n                                [ngClass]=\"getFieldOrderBy('glAcccountId')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('penaltyTypeFrequencyConfigId')\">Penalty Type<span\n                                [ngClass]=\"getFieldOrderBy('penaltyTypeFrequencyConfigId')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockId')\">Tower<span\n                                [ngClass]=\"getFieldOrderBy('apartmentBlockId')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('penaltyAmount')\">Flat Penalty Amount<span\n                                [ngClass]=\"getFieldOrderBy('penaltyAmount')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('interest')\">Late Payment Interest<span\n                                [ngClass]=\"getFieldOrderBy('interest')\"></span></th>\n                        <th scope=\"col\" (click)=\"sortUnitData('effectiveDate')\">Effective Date<span\n                                [ngClass]=\"getFieldOrderBy('effectiveDate')\"></span></th>\n                        <th scope=\"col\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container>\n                        <tr>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <mat-select name=\"glacc\" [(ngModel)]=\"row.glaccountId\">\n                                        <mat-option *ngFor=\"let item of glAccountList\" [value]=\"item.glaccountId\">\n                                            {{ item.glaccountNumber}} - {{ item.glaccountName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <input matInput type=\"text\" name=\"penaltyTypefreq\"\n                                        [(ngModel)]=\"row.penaltyTypeFrequencyConfigId\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <!-- <mat-form-field class=\"w-100\">\n                                    <input matInput type=\"text\" name=\"blockId\" [(ngModel)]=\"row.apartmentBlockId\">\n                                </mat-form-field> -->\n                                <mat-form-field class=\"w-100\">\n                                    <mat-select name=\"blockId\" [(ngModel)]=\"row.apartmentBlockId\">\n                                        <mat-option *ngFor=\"let item of blockDataList\" [value]=\"item.apartmentBlockId\">\n                                            {{ item.apartmentBlockNumber}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <input matInput type=\"text\" name=\"penaltyAmt\" [(ngModel)]=\"row.penaltyAmount\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <mat-form-field class=\"w-100\">\n                                    <input matInput type=\"text\" name=\"intrst\" [(ngModel)]=\"row.interest\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <div class=\"input-box mb-0\">\n                                    <input class=\"form-control stock-date\" name=\"effecDate\"\n                                        [owlDateTime]=\"effectiveDate\" [owlDateTimeTrigger]=\"effectiveDate\"\n                                        placeholder=\"\" [(ngModel)]=\"row.effectiveDate\" required>\n                                    <owl-date-time #effectiveDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                    <div class=\"date-btn\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <i class=\"fa fa-floppy-o save-icon\"\n                                    [ngStyle]=\"!row.glaccountId || !row.penaltyTypeFrequencyConfigId || !row.apartmentBlockId || !row.penaltyAmount || !row.interest || !row.effectiveDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                                    (click)=\"addPenaltyConfig(row)\" aria-hidden=\"true\"></i>\n                            </td>\n                            <!-- <td>\n                                <i class=\"fa fa-floppy-o save-icon\"\n                                    [ngStyle]=\" !row.penaltyTypeFrequencyConfigId || !row.apartmentBlockId || !row.penaltyAmount || !row.interest || !row.effectiveDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                                    (click)=\"addPenaltyConfig(row)\" aria-hidden=\"true\"></i>\n                            </td> -->\n                        </tr>\n                        <!-- </form> -->\n                    </ng-container>\n\n                    <ng-container\n                        *ngFor=\"let list of penaltyData | slice:ItemStartIndex:ItemEndIndex;let penaltyIndex=index\">\n                        <tr>\n                            <td>\n                                <span [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\">\n                                    <span *ngFor=\" let item of glAccountList\">\n                                        <span *ngIf=\"item.glaccountId == list.glaccountId\">{{ item.glaccountNumber}} -\n                                            {{ item.glaccountName }}</span>\n                                    </span>\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updatePenaltyRowIndex == penaltyIndex\">\n                                    <mat-select name=\"glaccountId\" [(ngModel)]=\"list.glaccountId\">\n                                        <mat-option *ngFor=\"let item of glAccountList\" [value]=\"item.glaccountId\">\n                                            {{ item.glaccountNumber}} - {{ item.glaccountName }}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\">\n                                    {{list.penaltyTypeFrequencyConfigId}}\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updatePenaltyRowIndex == penaltyIndex\">\n                                    <input matInput type=\"text\" name=\"penaltyTypeFrequencyConfigId\"\n                                        [(ngModel)]=\"list.penaltyTypeFrequencyConfigId\">\n                                </mat-form-field>\n\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\">\n                                    <span *ngFor=\" let item of blockDataList\">\n                                        <span\n                                            *ngIf=\"item.apartmentBlockId == list.apartmentBlockId\">{{ item.apartmentBlockNumber}}</span>\n                                    </span>\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updatePenaltyRowIndex == penaltyIndex\">\n                                    <mat-select name=\"apartmentBlockId\" [(ngModel)]=\"list.apartmentBlockId\">\n                                        <mat-option *ngFor=\"let item of blockDataList\" [value]=\"item.apartmentBlockId\">\n                                            {{ item.apartmentBlockNumber}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\">\n                                    {{list.penaltyAmount}}\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updatePenaltyRowIndex == penaltyIndex\">\n                                    <input matInput type=\"text\" name=\"penaltyAmount\" [(ngModel)]=\"list.penaltyAmount\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\">\n                                    {{list.interest}}\n                                </span>\n                                <mat-form-field class=\"w-100\" *ngIf=\"updatePenaltyRowIndex == penaltyIndex\">\n                                    <input matInput type=\"text\" name=\"interest\" [(ngModel)]=\"list.interest\">\n                                </mat-form-field>\n                            </td>\n                            <td>\n                                <span [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\">\n                                    {{list.effectiveDate?(list.effectiveDate | date: 'dd/MM/yyyy'):'--'}}\n                                </span>\n                                <div class=\"input-box mb-0\" *ngIf=\"updatePenaltyRowIndex == penaltyIndex\">\n                                    <input class=\"form-control stock-date\" name=\"effectiveDate\"\n                                        [owlDateTime]=\"effectiveDate\" [owlDateTimeTrigger]=\"effectiveDate\"\n                                        placeholder=\"\" [(ngModel)]=\"list.effectiveDate\" required>\n                                    <owl-date-time #effectiveDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                    <div class=\"date-btn\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </td>\n                            <td>\n                                <i class=\"fa fa-pencil-square-o pl-2\" title=\"edit\"\n                                    [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\"\n                                    (click)=\"updatePenaltyRowIndex = penaltyIndex\" aria-hidden=\"true\"></i>\n                                <!-- <i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\"\n                                    [ngStyle]=\"!list.glaccountId || !list.penaltyTypeFrequencyConfigId || !list.apartmentBlockId || !list.penaltyAmount || !list.interest || !list.effectiveDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                                    *ngIf=\"updatePenaltyRowIndex == penaltyIndex\"\n                                    (click)=\"updateAutoinvoiceConfig(list)\"></i> -->\n                                <i class=\"fa fa-floppy-o pl-2 pr-3 pad-top\" title=\"save\"\n                                    [ngStyle]=\" !list.penaltyTypeFrequencyConfigId || !list.apartmentBlockId || !list.penaltyAmount || !list.interest || !list.effectiveDate?{'pointer-events':'none','opacity':'0.4'}:''\"\n                                    *ngIf=\"updatePenaltyRowIndex == penaltyIndex\"\n                                    (click)=\"updatePenaltyConfig(list)\"></i>\n                                <i class=\"fa fa-times pad-top pl-2\" title=\"cancel\"\n                                    *ngIf=\"updatePenaltyRowIndex == penaltyIndex\"\n                                    (click)=\"updatePenaltyRowIndex = -1\"></i>\n                                <i class=\"fa fa-trash pl-2\" (click)=\"deleteRow(index,list)\"\n                                    [ngStyle]=\"updatePenaltyRowIndex == penaltyIndex?{'display':'none'}:''\"\n                                    aria-hidden=\"true\"></i>\n\n                            </td>\n                        </tr>\n\n                    </ng-container>\n                </tbody>\n\n            </table>\n            <app-pagination *ngIf=\"penaltyData.length > 0 \" [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\"\n                [ItemEndIndex]=\"ItemEndIndex\" [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n            </app-pagination>\n            <!-- <div class=\"action-container\">\n                <button mat-raised-button type=\"submit\" (click)=\"addPenaltyRow()\">Add row</button>\n                <button mat-raised-button [disabled]=\"penaltyTable.invalid\" type=\"submit\"\n                    (click)=\"submitPenaltySetupForm()\">Submit</button>\n            </div> -->\n        </form>\n    </div>\n</div>\n<div class=\"card table-card mb-30\" *ngIf=\"isPenaltySetupDataLoaded\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-6 d-flex align-items-center\">\n                <h5>Penalty Type</h5>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body p-0 \">\n        <table class=\"table colname \" [ngClass]=\"isMobileView()\">\n            <thead>\n                <tr>\n                    <th scope=\"col\" class=\"staticTable\">Penalty Type</th>\n                    <th scope=\"col\">Description</th>\n                </tr>\n            </thead>\n            <tbody>\n                <ng-container *ngFor=\"let data of penaltyTypeDataList ; let i=index\">\n                    <tr>\n                        <td>{{data.penaltyTypedata}}</td>\n                        <td>{{data.description}}</td>\n                    </tr>\n                </ng-container>\n            </tbody>\n        </table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-credit-note-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isCreditNoteLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isCreditNoteLoaded\">\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Credit Notes <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"\n\t\t\t\t\t\t placeholder=\"Search...\" [(ngModel)]=\"creditNoteData\" \n\t\t\t\t\t\t (ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t<li class=\"list-inline-item\">\n\n\t\t\t\t\t\t<a class=\"btn lime-green mt_5\" id=\"addCreditNoteElement\" (click)=\"addCreditNote()\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Credit Note</span>\n\t\t\t\t\t\t</a>\n\t\n\t\t\t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\t\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"creditNoteDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\n\t\t\t<jqxPopover \n\t\t\t#reversePopOver\n\t\t\t[theme]=\"'material'\" \n\t\t\t[showCloseButton]=\"true\" \n\t\t\t[selector]=\"popOverSelector\"\n\t\t\t[position]=\"popOverPosition\"\n\t\t\t>\n\t\t\t\t<app-income-add-credit \n\t\t\t\t[credit]=\"credit\" \n\t\t\t\t[isEdit]=\"isEditCredit\" \n\t\t\t\t(outputParams)=\"getCreditParams($event)\">\n\n\t\t\t\t</app-income-add-credit>\n\t\t\t</jqxPopover>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-view-defaulters-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDefaultersDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDefaultersDataLoaded\">\n\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>View Defaulters <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"defaultData\" (ngModelChange)=\"onSearchFilter()\">\n\t\t\t\t\t</li>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t\t\t\t<jqxGrid \n\t\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t[pageable]=\"true\" \n\t\t\t\t\t[filterable]=\"true\" \n\t\t\t\t\t[sortable]=\"true\" \n\t\t\t\t\t[source]=\"defaultDataList\"\n\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t[selectionmode]=\"'none'\"\n\t\t\t\t#datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t\t<a class=\"btn lime-green sf\"\n\t    \t\t\t\t(click)=\"sendEmail()\"\n\t\t\t\t\t\t[ngClass]=\"!isDefaultSelected ? 'disabled' : ''\">\n\t\t\t\t\t\t<span>Send Email</span>\n\t    \t\t\t</a>\n\t    \t\t\t<a class=\"btn lime-green sf\"\n\t    \t\t\t\t(click)=\"sendSMS()\"\n\t\t\t\t\t\t[ngClass]=\"!isDefaultSelected ? 'disabled' : ''\">\n\t\t\t\t\t\t<span>Send SMS</span>\n\t    \t\t\t</a>\n\t\t\t\t</div>  \n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-view-invoice-history-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAccountDataLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<app-income-tracker-filter \n\t*ngIf=\"isInvoiceDataLoaded\"\n\t(fieldParams) = getFieldParams($event)\n\t>\n\t\t\n\t</app-income-tracker-filter>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\n\t\t<ul class=\"legends list-inline\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"squares medium red\">R</span>Reversed</li>\n\t\t</ul>\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Account History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t\t<p *ngIf=\"isAccountDataLoaded\">Resident under {{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" \n\t\t\t\t\t\tplaceholder=\"Search...\" [(ngModel)]=\"invoiceData\" \n\t\t\t\t\t\t(ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"invoiceDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid>\n\t\t\t\n\n\t\t\t<jqxPopover \n\t\t\t#reversePopOver \n\t\t\t[theme]=\"'material'\" \n\t\t\t[showCloseButton]=\"true\" \n\t\t\t[selector]=\"invoicePopOverSlector\"\n\t\t\t[position]=\"'left'\"\n\t\t\t>\n\t\t\t\t<app-income-history-reverse [invoice]=\"invoice\">\n\n\t\t\t\t</app-income-history-reverse>\n\t\t\t</jqxPopover>\n\t  \t\t\t\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-view-invoice-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- <ul class=\"legends list-inline\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Pending</li>\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Nill</li>\n\t\t</ul> -->\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>All Invoices <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" \n\t\t\t\t\t\tplaceholder=\"Search...\" [(ngModel)]=\"invoiceData\" \n\t\t\t\t\t\t(ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t  \t\t\t<jqxGrid \n\t\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t[pageable]=\"true\" \n\t\t\t\t\t[filterable]=\"true\" \n\t\t\t\t\t[sortable]=\"true\" \n\t\t\t\t\t[source]=\"invoiceDataList\"\n\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t#datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t\n\t\t\t\t\n\t\t\t\t<jqxPopover \n\t\t\t\t#reversePopOver \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[showCloseButton]=\"submitFlag\" \n\t\t\t\t[selector]=\"reversePopOverSelector\"\n\t\t\t\t[position]=\"'left'\"\n\t\t\t\t>\n\t\t\t\t\t<app-income-invoice-reverse (childEvent)=\"onClose($event)\" [invoice]=\"invoice\"></app-income-invoice-reverse>\n\t\t\t\t</jqxPopover>\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #viewInvoiceDetailsRef let-invoice>\n\n\t\t<div class=\"invoice-info info-modal-box rel\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h6>Invoice Info</h6>\n\t\t\t</div>\n\n\t\t\t<app-loader *ngIf=\"!isInvoicePrintLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isInvoicePrintLoaded\">\n\t\t\t\t<div class=\"card no-shadow\">\n\t\t\t\t\t<div id=\"InvoiceElement\">\n\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t<h5 class=\"text-center\">{{apartmentDetails.apartmentName}}</h5>\n\t\t\t\t\t\t\t<div class=\"other-info text-center mt-2\">\n\t\t\t\t\t\t\t\t<div class=\"address\">{{apartmentDetails.address1}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"other-info grey text-center mt-2\">\n\t\t\t\t\t\t\t\t<div class=\"address\">Mobile No: {{apartmentDetails.phoneNumber}}</div>\n\t\t\t\t\t\t\t\t<div class=\"email ml-3\">Email: {{apartmentDetails.emailId}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<p><span>Tower Unit:</span> {{invoice.apartmentBlockNumber}}</p>\n\t\t\t\t\t\t\t\t\t<p><span>Contact Person:</span> </p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6 text-lg-right\">\n\t\t\t\t\t\t\t\t\t<p><span>Invoice ID:</span> {{invoice.custInvoiceId}}</p>\n\t\t\t\t\t\t\t\t\t<p><span>Invoice Date:</span> {{getDate(invoice.postedOn)}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body p-0 border-bottom\">\n\t\t\t\t\t\t\t<table class=\"table card-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Income Accounts</th>\n\t\t\t\t\t\t\t\t\t\t<th>Rate</th>\n\t\t\t\t\t\t\t\t\t\t<th>Comments</th>\n\t\t\t\t\t\t\t\t\t\t<th>Discount</th>\n\t\t\t\t\t\t\t\t\t\t<th>Tax</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of invoice.invoiceGLAccounts; let i = index\">\n\t\t\t\t\t\t\t\t\t\t<td>{{item.glaccountName}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.amount}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.comments}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.discountAmount}} ({{item.discountTypeId}})</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.vatamount}} [{{ getVatType(custTaxDetails[i])}}%]</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.lineItemTotal + item.vatamount}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\">Final Discount:</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{invoice.invoicefinalinputdiscount}} ({{invoice.finalDiscountTypeName}})</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<tr class=\"total\">\n\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\">Total Amount:</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{invoice.custInvoiceAmount}}</td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body no-border pb-0\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<p class=\"bottom\">{{apartmentTerms[0].termsTemplate}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body no-border pt-0\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 mt-5 text-center\">\n\t\t\t\t\t\t\t\t<div class=\"btn blue sf small\" (click)=\"printInvoice()\">Print</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</div>\n\n\t</ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-receipts-wrapper\">\n\n\t<app-loader *ngIf=\"!isReceiptsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isReceiptsLoaded\">\n\n\t\t<ul class=\"legends list-inline\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"squares medium red\">R</span>Reversed</li>\n\t\t</ul>\n\n\t\t<div class=\"card table-card clear\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Total Receipts <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" \n\t\t\t\t\t\tplaceholder=\"Search...\" [(ngModel)]=\"receiptsData\" \n\t\t\t\t\t\t(ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn trans-white mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"receiptsDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid>\n\t\t\n\t\t\t\n\t\t\t<jqxPopover \n\t\t\t#reversePopOver \n\t\t\t[theme]=\"'material'\" \n\t\t\t[showCloseButton]=\"true\" \n\t\t\t[selector]=\"reversePopOverSelectorReceipt\"\n\t\t\t[position]=\"'left'\"\n\t\t\t>\n\t\t\t\t<app-income-receipts-reverse (childEvent)=\"onClose($event)\" [receipts]=\"receipts\">\n\n\t\t\t\t</app-income-receipts-reverse>\n\t\t\t</jqxPopover>\n\t  \t\t\t\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\t<ng-template #viewReceiptsDetailsRef let-receipt>\n\n\t\t<div class=\"invoice-info info-modal-box rel\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h6>RECEIPT</h6>\n\t\t\t</div>\n\n\t\t\t<app-loader *ngIf=\"!isReceiptPrintLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isReceiptPrintLoaded\">\n\t\t\t\t<div class=\"card no-shadow\">\n\t\t\t\t\t<div id=\"InvoiceElement\">\n\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t<h5 class=\"text-center\">Purva Fountainsquare</h5>\n\t\t\t\t\t\t\t<div class=\"other-info text-center mt-2\">\n\t\t\t\t\t\t\t\t<div class=\"address\">Purva Fountain Square Marathahalli Junction,, Bangalore, Karnataka\n\t\t\t\t\t\t\t\t\t- 560037</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"other-info grey text-center mt-2\">\n\t\t\t\t\t\t\t\t<div class=\"address\">Phone: 08042181514</div>\n\t\t\t\t\t\t\t\t<!-- <div class=\"email ml-3\">Email: {{apartmentDetails.emailId}}</div> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<p><span>Tower Unit:</span> 2 </p>\n\t\t\t\t\t\t\t\t\t<p><span>Contact Person:</span> </p>\n\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<p><span>Receipt ID:</span> {{receiptInfoDetails[0].collectionId}}</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t<p><span>Receipt Date:</span> {{getReceiptInfoDate(receiptInfoDetails[0].postedOn)}}\n\t\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 unit\">\n\t\t\t\t\t\t\t\t\t<p>Received from .... of Unit ....</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body p-0 border-bottom\">\n\t\t\t\t\t\t\t<table class=\"table card-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t<th>Account Applied</th>\n\t\t\t\t\t\t\t\t\t\t<th>Bill NO & Date</th>\n\t\t\t\t\t\t\t\t\t\t<th>Amount RCVD</th>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let item of receiptInfoDetails[0].collectionInvoice; let i = index\">\n\t\t\t\t\t\t\t\t\t\t<td>{{item.comment}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.insertedOn}}</td>\n\t\t\t\t\t\t\t\t\t\t<td>{{item.amount}}</td>\n\t\t\t\t\t\t\t\t\t\t<!-- <td>{{item.lineItemTotal + item.vatamount}}</td> -->\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t<!-- <tr>\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\">Final Discount:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{invoice.invoicefinalinputdiscount}} ({{invoice.finalDiscountTypeName}})</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t<tr class=\"total\">\n\t\t\t\t\t\t\t\t\t\t\t<td colspan=\"5\">Total Amount:</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{invoice.custInvoiceAmount}}</td>\n\t\t\t\t\t\t\t\t\t\t</tr> -->\n\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body no-border pb-0\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 unit\">\n\t\t\t\t\t\t\t\t\t<p>Payment Instrument : Online Payment</p>\n\t\t\t\t\t\t\t\t\t<p>Instrument Bank : Gateway</p>\n\t\t\t\t\t\t\t\t\t<p>Reference NO : PFS002577930</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body no-border pb-0\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t\t<p class=\"bottom\">Transaction is Successful</p>\n\t\t\t\t\t\t\t\t\t<p class=\"bottom\">Electronically generated, does not require signature</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body details\">\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 generated\">\n\t\t\t\t\t\t\t\t\t<p>Generated from <span>ADDA</span></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body no-border pt-0\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 mt-5 text-center\">\n\t\t\t\t\t\t\t\t<div class=\"btn blue sf small\" (click)=\"printInvoice()\">Print</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</div>\n\n\t</ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/income-tracker.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/income-tracker.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-actions/income-actions.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-actions/income-actions.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.income-actions-wrapper .icon-tabs {\n  display: flex;\n  justify-content: center;\n}\n.income-actions-wrapper .icon-tabs li {\n  padding: 0;\n}\n.income-actions-wrapper .icon-tabs li:not(:last-child) {\n  margin-right: 30px;\n}\n.income-actions-wrapper .icon-tabs li a {\n  color: #585858;\n  font-size: 1.6rem;\n  border-radius: 6px !important;\n  padding: 4px 10px;\n  position: relative;\n}\n.income-actions-wrapper .icon-tabs li a span {\n  white-space: nowrap;\n}\n.income-actions-wrapper .icon-tabs li a .icon {\n  text-align: center;\n  display: block;\n  margin: 0 0 6px 0;\n}\n.income-actions-wrapper .icon-tabs li a .icon .svg {\n  width: 25px;\n  height: 25px;\n  fill: #585858;\n}\n.income-actions-wrapper .icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n.income-actions-wrapper .icon-tabs li a.active .icon .svg {\n  fill: #ffffff;\n}\n.income-actions-wrapper .icon-tabs li a.active:after {\n  font-family: FontAwesome;\n  content: \"\";\n  position: absolute;\n  bottom: -32px;\n  transform: translateX(-50%) !important;\n  color: #3f51b5;\n  font-size: 5rem;\n  left: 50%;\n}\n@media (max-width: 767px) {\n  .income-actions-wrapper .icon-tabs {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    flex-direction: row;\n    justify-content: start;\n  }\n  .income-actions-wrapper .icon-tabs li {\n    flex: 0 0 auto;\n    height: 90px;\n  }\n  .income-actions-wrapper .icon-tabs li:not(:last-child) {\n    margin-right: 15px;\n  }\n  .income-actions-wrapper .icon-tabs li a .icon .svg {\n    width: 20px;\n    height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLWFjdGlvbnMvaW5jb21lLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLWFjdGlvbnMvaW5jb21lLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNLWjtFQUNGLGFBQUE7RUFDQSx1QkFBQTtBREhGO0FDSUU7RUFDQyxVQUFBO0FERkg7QUNHSztFQUNDLGtCQUFBO0FERE47QUNHSztFQUNDLGNDbUZLO0VDbkJULGlCQUFBO0VDdkVELDZCQUFBO0VIVUcsaUJBQUE7RUFDSyxrQkNiSjtBRmNMO0FDQUk7RUFDQyxtQkFBQTtBREVMO0FDQVM7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDTCxpQkFBQTtBREVMO0FDRFU7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFDb0VBO0FGakVYO0FDQVM7RUFDQyx5QkM0QkQ7RUQzQkMsY0NvRkY7QUZsRlI7QUNBVztFQUNDLGFDaUZKO0FGL0VSO0FDQ1U7RUFDQyx3QkN4Q0w7RUR5Q0ssWUFBQTtFQUNBLGtCQ3ZDTjtFRHdDTSxhQUFBO0VHUFYsc0NBQUE7RUhTVSxjQ2VGO0VDaUJQLGVBQUE7RUY5QlMsU0FBQTtBREdYO0FDRVM7RUFoREw7SUFpRFEsaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7RURDVjtFQ0FVO0lBQ0ksY0FBQTtJQUNBLFlBQUE7RURFZDtFQ0RjO0lBQ0ksa0JBQUE7RURHbEI7RUNDc0I7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFREMxQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLWFjdGlvbnMvaW5jb21lLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaW5jb21lLWFjdGlvbnMtd3JhcHBlciAuaWNvbi10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaW5jb21lLWFjdGlvbnMtd3JhcHBlciAuaWNvbi10YWJzIGxpIHtcbiAgcGFkZGluZzogMDtcbn1cbi5pbmNvbWUtYWN0aW9ucy13cmFwcGVyIC5pY29uLXRhYnMgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5pbmNvbWUtYWN0aW9ucy13cmFwcGVyIC5pY29uLXRhYnMgbGkgYSB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5jb21lLWFjdGlvbnMtd3JhcHBlciAuaWNvbi10YWJzIGxpIGEgc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaW5jb21lLWFjdGlvbnMtd3JhcHBlciAuaWNvbi10YWJzIGxpIGEgLmljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCA2cHggMDtcbn1cbi5pbmNvbWUtYWN0aW9ucy13cmFwcGVyIC5pY29uLXRhYnMgbGkgYSAuaWNvbiAuc3ZnIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgZmlsbDogIzU4NTg1ODtcbn1cbi5pbmNvbWUtYWN0aW9ucy13cmFwcGVyIC5pY29uLXRhYnMgbGkgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pbmNvbWUtYWN0aW9ucy13cmFwcGVyIC5pY29uLXRhYnMgbGkgYS5hY3RpdmUgLmljb24gLnN2ZyB7XG4gIGZpbGw6ICNmZmZmZmY7XG59XG4uaW5jb21lLWFjdGlvbnMtd3JhcHBlciAuaWNvbi10YWJzIGxpIGEuYWN0aXZlOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICBjb250ZW50OiBcIu+DnVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTMycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzNmNTFiNTtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBsZWZ0OiA1MCU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmluY29tZS1hY3Rpb25zLXdyYXBwZXIgLmljb24tdGFicyB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIH1cbiAgLmluY29tZS1hY3Rpb25zLXdyYXBwZXIgLmljb24tdGFicyBsaSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG4gIC5pbmNvbWUtYWN0aW9ucy13cmFwcGVyIC5pY29uLXRhYnMgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5pbmNvbWUtYWN0aW9ucy13cmFwcGVyIC5pY29uLXRhYnMgbGkgYSAuaWNvbiAuc3ZnIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gIH1cbn0iLCJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmluY29tZS1hY3Rpb25zLXdyYXBwZXIge1xuICAgIC5pY29uLXRhYnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bGkge1xuXHRcdFx0cGFkZGluZzogMDtcbiAgXHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuICBcdFx0XHRcdG1hcmdpbi1yaWdodDogMzBweDtcbiAgXHRcdFx0fVxuICBcdFx0XHRhIHtcbiAgXHRcdFx0XHRjb2xvcjogJGdyZXktNzAwO1xuICAgICBcdCBcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuICAgICBcdCBcdFx0QGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg2cHgpO1xuXHRcdFx0XHRwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgXHQgXHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHR9XG4gICAgIFx0IFx0XHQuaWNvbiB7XG4gICAgIFx0IFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgXHQgXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgNnB4IDA7XG4gICAgIFx0IFx0XHRcdC5zdmcge1xuICAgICBcdCBcdFx0XHRcdHdpZHRoOiAyNXB4O1xuICAgICBcdCBcdFx0XHRcdGhlaWdodDogMjVweDtcbiAgICAgXHQgXHRcdFx0XHRmaWxsOiAkZ3JleS03MDA7XG4gICAgIFx0IFx0XHRcdH1cbiAgICAgXHQgXHRcdH1cbiAgICAgXHQgXHRcdCYuYWN0aXZlIHtcbiAgICAgXHQgXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJG0tYmx1ZTtcbiAgICAgXHQgXHRcdFx0Y29sb3I6ICR3aGl0ZTtcbiAgICAgXHQgXHRcdFx0Lmljb24ge1xuICAgICBcdCBcdFx0XHRcdC5zdmcge1xuICAgICBcdCBcdFx0XHRcdFx0ZmlsbDogJHdoaXRlO1xuICAgICBcdCBcdFx0XHRcdH1cbiAgICAgXHQgXHRcdFx0fVxuICAgICBcdCBcdFx0XHQmOmFmdGVyIHtcbiAgICAgXHQgXHRcdFx0XHRmb250LWZhbWlseTogJGZ0YTtcbiAgICAgXHQgXHRcdFx0XHRjb250ZW50OiBcIlxcZjBkZFwiO1xuICAgICBcdCBcdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuICAgICBcdCBcdFx0XHRcdGJvdHRvbTogLTMycHg7XG4gICAgIFx0IFx0XHRcdFx0QGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTUwJSkpO1xuICAgICBcdCBcdFx0XHRcdGNvbG9yOiAkbS1ibHVlO1xuICAgICBcdCBcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtYmlnLTAzKTtcbiAgICAgXHQgXHRcdFx0XHRsZWZ0OiA1MCU7XG4gICAgIFx0IFx0XHRcdH1cbiAgICAgXHQgXHRcdH1cbiAgXHRcdFx0fVxuXHRcdH1cbiAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-actions/income-actions.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-actions/income-actions.component.ts ***!
  \******************************************************************************************/
/*! exports provided: IncomeActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeActionsComponent", function() { return IncomeActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");




let IncomeActionsComponent = class IncomeActionsComponent {
    constructor(router, route, sharedService) {
        this.router = router;
        this.route = route;
        this.sharedService = sharedService;
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                let path = this.router.url;
                let name = path.split('/');
                if (path.indexOf('actions') != -1) {
                    let id = name[name.length - 1];
                    this.sharedService.setActionIncomeTrackerIndex(id);
                }
            }
        });
    }
    ngOnInit() {
        this.sharedService.actionincometrackerindexcast.subscribe(actionIndex => this.actionIndex = actionIndex);
    }
};
IncomeActionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
IncomeActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-actions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-actions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-actions/income-actions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-actions.component.scss */ "./src/app/ams/income-tracker/components/income-actions/income-actions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
], IncomeActionsComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-add-credit-wrapper ::ng-deep .select-group .search-control {\n  right: 5px !important;\n}\n.income-add-credit-wrapper ::ng-deep .select-group .search-control .icon {\n  width: 18px;\n  height: 18px;\n}\n::ng-deep .jqx-popover {\n  margin-right: 20px;\n}\n::ng-deep .jqx-popover .jqx-popover-arrow {\n  margin-left: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWRkLWNyZWRpdC9pbmNvbWUtYWRkLWNyZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLWFkZC1jcmVkaXQvaW5jb21lLWFkZC1jcmVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTVE7RUFDSSxxQkFBQTtBQ0xaO0FETVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0poQjtBRFdJO0VBQ0ksa0JBQUE7QUNSUjtBRFNRO0VBQ0ksNEJBQUE7QUNQWiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1hZGQtY3JlZGl0L2luY29tZS1hZGQtY3JlZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5pbmNvbWUtYWRkLWNyZWRpdC13cmFwcGVyIHtcbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAuc2VsZWN0LWdyb3VwIC5zZWFyY2gtY29udHJvbCB7XG4gICAgICAgICAgICByaWdodDogNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG46Om5nLWRlZXAge1xuICAgIC5qcXgtcG9wb3ZlciB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgLmpxeC1wb3BvdmVyLWFycm93IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIuaW5jb21lLWFkZC1jcmVkaXQtd3JhcHBlciA6Om5nLWRlZXAgLnNlbGVjdC1ncm91cCAuc2VhcmNoLWNvbnRyb2wge1xuICByaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG4uaW5jb21lLWFkZC1jcmVkaXQtd3JhcHBlciA6Om5nLWRlZXAgLnNlbGVjdC1ncm91cCAuc2VhcmNoLWNvbnRyb2wgLmljb24ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLmpxeC1wb3BvdmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuOjpuZy1kZWVwIC5qcXgtcG9wb3ZlciAuanF4LXBvcG92ZXItYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts ***!
  \************************************************************************************************/
/*! exports provided: IncomeAddCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeAddCreditComponent", function() { return IncomeAddCreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let IncomeAddCreditComponent = class IncomeAddCreditComponent {
    constructor(router, route, el, accountsService, apartmentService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.el = el;
        this.accountsService = accountsService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isCreditSubmitted = false;
        this.isError = false;
        this.alertMessage = "";
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.apartmentBlockId = "";
        this.apartmentBlockUnitId = "";
        this.isPageCredit = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onClick(e) {
        const className = e.target.className;
        if (!className.includes('submit-btn')) {
            e.stopPropagation();
            e.preventDefault();
            return false;
        }
    }
    getUnits() {
        let params = {
            apartmentBlockId: parseInt(this.apartmentBlockId)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.isBlockSelected = true;
            this.unitData = res;
        }, error => {
            console.log(error);
        });
    }
    getAllCollection(id) {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: id
        };
        this.accountsService.getAllCollectionInvoicesByApartmentBlockUnitId(params).subscribe((res) => {
            this.billData = res;
            this.isCreditSubmitted = true;
            this.isUnitSelected = true;
        });
    }
    onSelectChange(event) {
        if (event != null)
            this.credit.collectionId = event.collectionId;
    }
    submitAddCreditNoteForm(form) {
        if (!this.isEdit) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                "blockUnitUserId": null,
                "custCreditNoteId": null,
                "glaccountId": null,
                "invoiceId": this.credit.invoiceId,
                "collectionId": parseInt(this.credit.collectionId),
                "transactionType": 0,
                "amount": parseInt(this.credit.amount),
                "comment": this.credit.comment,
                "comment2": this.credit.comment,
                "active": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null
            };
            let params = {
                custCreditNote: details
            };
            this.accountsService.addCustCreditNotes(params).subscribe((res) => {
                if (res.creditNoteId) {
                    this.isCreditSubmitted = true;
                    this.sharedService.setAlertMessage("Credit Note added successfully");
                    this.outputParams.emit(true);
                    this.credit = {};
                }
                else {
                    this.isCreditSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isCreditSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "id": this.credit.creditNoteId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                "blockUnitUserId": null,
                "custCreditNoteId": this.credit.creditNoteId,
                "glaccountId": null,
                "invoiceId": this.credit.invoiceId,
                "collectionId": parseInt(this.credit.collectionId),
                "transactionType": 0,
                "amount": parseInt(this.credit.amount),
                "comment": this.credit.comment,
                "comment2": this.credit.comment,
                "active": true,
                "insertedBy": this.credit.insertedBy,
                "insertedOn": this.credit.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let params = {
                custCreditNote: details
            };
            this.accountsService.updateCustCreditNotes(params).subscribe((res) => {
                if (res.message) {
                    this.isCreditSubmitted = true;
                    this.sharedService.setAlertMessage("Credit Note updated successfully");
                    this.outputParams.emit(true);
                }
                else {
                    this.isCreditSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isCreditSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.apartmentBlockUnitId = this.route.params['value'].id;
            this.getAllCollection(this.route.params['value'].id);
        }
        else {
            this.credit = {};
            this.credit.collectionId = "";
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            //get apartment blocks
            this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
                this.blocksData = res;
                this.isCreditSubmitted = true;
            });
        }
        if (this.route.params['value'].type != undefined) {
            this.isPageCredit = true;
        }
    }
    ngOnChanges(changes) {
        if (this.isEdit) {
            this.apartmentBlockUnitId = `${this.credit.apartmentBlockUnitId}`;
        }
    }
};
IncomeAddCreditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddCreditComponent.prototype, "credit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], IncomeAddCreditComponent.prototype, "isEdit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], IncomeAddCreditComponent.prototype, "isGeneralCredit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddCreditComponent.prototype, "outputParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addCreditNoteForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddCreditComponent.prototype, "addCreditNoteForm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addCreditNoteElem'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], IncomeAddCreditComponent.prototype, "addCreditNoteElem", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MouseEvent]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeAddCreditComponent.prototype, "onClick", null);
IncomeAddCreditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-add-credit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-add-credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-add-credit.component.scss */ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeAddCreditComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-add-customer-advance-wrapper ::ng-deep .select-group .search-control {\n  right: 5px !important;\n}\n.income-add-customer-advance-wrapper ::ng-deep .select-group .search-control .icon {\n  width: 18px;\n  height: 18px;\n}\n::ng-deep .jqx-popover {\n  margin-right: 20px;\n}\n::ng-deep .jqx-popover .jqx-popover-arrow {\n  margin-left: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWRkLWN1c3RvbWVyLWFkdmFuY2UvaW5jb21lLWFkZC1jdXN0b21lci1hZHZhbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWRkLWN1c3RvbWVyLWFkdmFuY2UvaW5jb21lLWFkZC1jdXN0b21lci1hZHZhbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VBQ0kscUJBQUE7QUNMWjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKaEI7QURXSTtFQUNJLGtCQUFBO0FDUlI7QURTUTtFQUNJLDRCQUFBO0FDUFoiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWRkLWN1c3RvbWVyLWFkdmFuY2UvaW5jb21lLWFkZC1jdXN0b21lci1hZHZhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5pbmNvbWUtYWRkLWN1c3RvbWVyLWFkdmFuY2Utd3JhcHBlciB7XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLnNlbGVjdC1ncm91cCAuc2VhcmNoLWNvbnRyb2wge1xuICAgICAgICAgICAgcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgICAuanF4LXBvcG92ZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIC5qcXgtcG9wb3Zlci1hcnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmluY29tZS1hZGQtY3VzdG9tZXItYWR2YW5jZS13cmFwcGVyIDo6bmctZGVlcCAuc2VsZWN0LWdyb3VwIC5zZWFyY2gtY29udHJvbCB7XG4gIHJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cbi5pbmNvbWUtYWRkLWN1c3RvbWVyLWFkdmFuY2Utd3JhcHBlciA6Om5nLWRlZXAgLnNlbGVjdC1ncm91cCAuc2VhcmNoLWNvbnRyb2wgLmljb24ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLmpxeC1wb3BvdmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuOjpuZy1kZWVwIC5qcXgtcG9wb3ZlciAuanF4LXBvcG92ZXItYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: IncomeAddCustomerAdvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeAddCustomerAdvanceComponent", function() { return IncomeAddCustomerAdvanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let IncomeAddCustomerAdvanceComponent = class IncomeAddCustomerAdvanceComponent {
    constructor(router, route, accountsService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAdvanceSubmitted = false;
        this.isError = false;
        this.alertMessage = "";
        this.glAccountIndicator = "Cust_Invoice";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    getCollection(id) {
        var data = this.billData.filter(item => {
            return item.collectionId == id;
        });
        if (data == undefined || data.length == 0) {
            return '';
        }
        else {
            this.advance.invoiceId = data[0].invoiceId;
        }
    }
    onSelectChange(event) {
        if (event != null)
            this.advance.glaccountId = event.glaccountId;
    }
    submitAddCustomerAdvanceForm(form) {
        if (!this.isEdit) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
                "blockUnitUserId": null,
                "glaccountId": parseInt(this.advance.glaccountId),
                "invoiceId": 1,
                "collectionId": null,
                "transactionType": 1,
                "amount": parseInt(this.advance.amount),
                "comment": this.advance.comment,
                "comment2": this.advance.comment,
                "active": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null
            };
            let params = {
                custAdvance: details
            };
            this.accountsService.addAdvance(params).subscribe((res) => {
                if (res.error == 'Sucess') {
                    this.isAdvanceSubmitted = true;
                    this.sharedService.setAlertMessage("Customer Advance added successfully");
                    this.outputParams.emit(true);
                    /*this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
                    this.router.navigateByUrl('/ams/income/actions/view-creditnote/' + this.route.params['value'].id));*/
                }
                else {
                    this.isAdvanceSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAdvanceSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
                "blockUnitUserId": this.advance.blockUnitUserId,
                "advanceId": this.advance.custCreditNoteId,
                "glaccountId": this.advance.glaccountId,
                "invoiceId": this.advance.invoiceId,
                "collectionId": parseInt(this.advance.collectionId),
                "transactionType": this.advance.transactionType,
                "amount": parseInt(this.advance.amount),
                "comment": this.advance.comment,
                "comment2": this.advance.comment,
                "active": this.advance.active,
                "insertedBy": this.advance.insertedBy,
                "insertedOn": this.advance.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let params = {
                custAdvance: details
            };
            /*this.accountsService.addAdvance(params).subscribe((res:any) => {
    
    
                if(res.creditNoteId){
    
                  this.isAdvanceSubmitted = true;
                  this.sharedService.setAlertMessage("Customer Advance updated successfully");
    
                }
                else {
    
                  this.isAdvanceSubmitted = true;
                  this.isError = true;
                  this.alertMessage = res.errorMessage;
    
                }
    
    
            },
            error => {
              this.isAdvanceSubmitted = true;
              this.isError = true;
              this.alertMessage = "Some error occured";
              });*/
        }
    }
    ngOnInit() {
        this.advance.glaccountId = "";
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: this.route.params['value'].id
        };
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            this.glAccountsDataList = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
            this.isAdvanceSubmitted = true;
        });
    }
    ngOnChanges(changes) {
        this.advance.collectionId = "";
    }
};
IncomeAddCustomerAdvanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddCustomerAdvanceComponent.prototype, "advance", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], IncomeAddCustomerAdvanceComponent.prototype, "isEdit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddCustomerAdvanceComponent.prototype, "outputParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addCustomerAdvanceForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddCustomerAdvanceComponent.prototype, "addCustomerAdvanceForm", void 0);
IncomeAddCustomerAdvanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-add-customer-advance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-add-customer-advance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-add-customer-advance.component.scss */ "./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], IncomeAddCustomerAdvanceComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-add-security-deposit-wrapper ::ng-deep .select-group .search-control {\n  right: 5px !important;\n}\n.income-add-security-deposit-wrapper ::ng-deep .select-group .search-control .icon {\n  width: 18px;\n  height: 18px;\n}\n::ng-deep .jqx-popover {\n  margin-right: 20px;\n}\n::ng-deep .jqx-popover .jqx-popover-arrow {\n  margin-left: 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWRkLXNlY3VyaXR5LWRlcG9zaXQvaW5jb21lLWFkZC1zZWN1cml0eS1kZXBvc2l0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWRkLXNlY3VyaXR5LWRlcG9zaXQvaW5jb21lLWFkZC1zZWN1cml0eS1kZXBvc2l0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1RO0VBQ0kscUJBQUE7QUNMWjtBRE1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNKaEI7QURXSTtFQUNJLGtCQUFBO0FDUlI7QURTUTtFQUNJLDRCQUFBO0FDUFoiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWRkLXNlY3VyaXR5LWRlcG9zaXQvaW5jb21lLWFkZC1zZWN1cml0eS1kZXBvc2l0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5pbmNvbWUtYWRkLXNlY3VyaXR5LWRlcG9zaXQtd3JhcHBlciB7XG4gICAgOjpuZy1kZWVwIHtcbiAgICAgICAgLnNlbGVjdC1ncm91cCAuc2VhcmNoLWNvbnRyb2wge1xuICAgICAgICAgICAgcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuOjpuZy1kZWVwIHtcbiAgICAuanF4LXBvcG92ZXIge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIC5qcXgtcG9wb3Zlci1hcnJvdyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLmluY29tZS1hZGQtc2VjdXJpdHktZGVwb3NpdC13cmFwcGVyIDo6bmctZGVlcCAuc2VsZWN0LWdyb3VwIC5zZWFyY2gtY29udHJvbCB7XG4gIHJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cbi5pbmNvbWUtYWRkLXNlY3VyaXR5LWRlcG9zaXQtd3JhcHBlciA6Om5nLWRlZXAgLnNlbGVjdC1ncm91cCAuc2VhcmNoLWNvbnRyb2wgLmljb24ge1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG46Om5nLWRlZXAgLmpxeC1wb3BvdmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuOjpuZy1kZWVwIC5qcXgtcG9wb3ZlciAuanF4LXBvcG92ZXItYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMjBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: IncomeAddSecurityDepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeAddSecurityDepositComponent", function() { return IncomeAddSecurityDepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let IncomeAddSecurityDepositComponent = class IncomeAddSecurityDepositComponent {
    constructor(router, route, accountsService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDepositSubmitted = false;
        this.glAccountIndicator = "Cust_Invoice";
        this.isError = false;
        this.alertMessage = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onSelectChange(event) {
        if (event != null)
            this.deposit.glaccountId = event.glaccountId;
    }
    submitAddSecuityDepositForm(form) {
        if (!this.isEdit) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
                "blockUnitUserId": null,
                "securityDepositId": 0,
                "glaccountId": parseInt(this.deposit.glaccountId),
                "invoiceId": null,
                "collectionId": null,
                "transactionType": 0,
                "amount": parseInt(this.deposit.amount),
                "comment": this.deposit.comment,
                "comment2": this.deposit.comment,
                "active": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null
            };
            let params = {
                custSecurity: details
            };
            this.accountsService.addSecurityDeposit(params).subscribe((res) => {
                if (res.creditNoteId) {
                    this.isDepositSubmitted = true;
                    this.sharedService.setAlertMessage("Security Deposit added successfully");
                    this.outputParams.emit(true);
                }
                else {
                    this.isDepositSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isDepositSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
                "blockUnitUserId": this.deposit.blockUnitUserId,
                "securityDepositId": this.deposit.custCreditNoteId,
                "glaccountId": this.deposit.glaccountId,
                "invoiceId": this.deposit.invoiceId,
                "collectionId": parseInt(this.deposit.collectionId),
                "transactionType": this.deposit.transactionType,
                "amount": parseInt(this.deposit.amount),
                "comment": this.deposit.comment,
                "comment2": this.deposit.comment,
                "active": this.deposit.active,
                "insertedBy": this.deposit.insertedBy,
                "insertedOn": this.deposit.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let params = {
                custSecurity: details
            };
            /*this.accountsService.addAdvance(params).subscribe((res:any) => {
    
    
                if(res.creditNoteId){
    
                  this.isAdvanceSubmitted = true;
                  this.sharedService.setAlertMessage("Customer Advance updated successfully");
    
                }
                else {
    
                  this.isAdvanceSubmitted = true;
                  this.isError = true;
                  this.alertMessage = res.errorMessage;
    
                }
    
    
            },
            error => {
              this.isAdvanceSubmitted = true;
              this.isError = true;
              this.alertMessage = "Some error occured";
              });*/
        }
    }
    ngOnInit() {
        this.deposit.glaccountId = "";
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: this.route.params['value'].id
        };
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            this.glAccountsDataList = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
            this.isDepositSubmitted = true;
        });
    }
    ngOnChanges(changes) {
        this.deposit.glaccountId = "";
    }
};
IncomeAddSecurityDepositComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddSecurityDepositComponent.prototype, "deposit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], IncomeAddSecurityDepositComponent.prototype, "isEdit", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddSecurityDepositComponent.prototype, "outputParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addSecuityDepositForm'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeAddSecurityDepositComponent.prototype, "addSecuityDepositForm", void 0);
IncomeAddSecurityDepositComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-add-security-deposit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-add-security-deposit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-add-security-deposit.component.scss */ "./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], IncomeAddSecurityDepositComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .mat-menu-panel {\n  max-width: 700px !important;\n  padding: 19px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWxsLWNyZWRpdHMvaW5jb21lLWFsbC1jcmVkaXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWxsLWNyZWRpdHMvaW5jb21lLWFsbC1jcmVkaXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBQ0ksMkJBQUE7RUFDQSxhQUFBO0FDTFIiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtYWxsLWNyZWRpdHMvaW5jb21lLWFsbC1jcmVkaXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cblxuOjpuZy1kZWVwIHtcbiAgICAubWF0LW1lbnUtcGFuZWwge1xuICAgICAgICBtYXgtd2lkdGg6IDcwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDE5cHg7XG4gICAgfVxufVxuIiwiOjpuZy1kZWVwIC5tYXQtbWVudS1wYW5lbCB7XG4gIG1heC13aWR0aDogNzAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTlweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IncomeAllCreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeAllCreditsComponent", function() { return IncomeAllCreditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");








let IncomeAllCreditsComponent = class IncomeAllCreditsComponent {
    constructor(dialog, route, accountsService, cookieService) {
        this.dialog = dialog;
        this.route = route;
        this.accountsService = accountsService;
        this.cookieService = cookieService;
        this.isCreditNoteLoaded = false;
        this.creditNoteData = "";
        this.isEditCredit = false;
        this.isGeneralCredit = true;
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'CreditnoteData');
    }
    onGlSearchFilter() {
        if (this.creditNoteData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.creditNoteData;
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
    onEditCreditNote(detail) {
        this.isEditCredit = true;
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let creditNoteId = dataRecord.creditNoteId;
        this.credit = dataRecord;
        this.popOverSelector = '#' + creditNoteId;
        this.popOverPosition = 'left';
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    onUpdateInvoice(detail) {
        var invoice = this.datagrid.getrowdata(detail.rowId);
    }
    getCreditParams(event) {
        this.getCreditNotesData();
    }
    addCreditNote() {
        this.isEditCredit = false;
    }
    getCreditNotesData() {
        this.isCreditNoteLoaded = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getCreditNotesByApartmentId(params).subscribe((res) => {
            var creditNoteDataList = res;
            this.gridSourceData = {
                localdata: creditNoteDataList,
                datatype: "array"
            };
            this.creditNoteDataList = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = creditNoteDataList.length;
            this.isCreditNoteLoaded = true;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.credit = {};
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Creditnote Id',
                datafield: 'creditNoteId',
                width: 120,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Amount',
                datafield: 'amount',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Invoice Id',
                datafield: 'invoiceId',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Collection Id',
                datafield: 'collectionId',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Comments',
                datafield: 'comment',
                minwidth: 180,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Sent Email',
                datafield: 'isEmailSent',
                minwidth: 120,
                cellsrenderer: (row, column, value) => {
                    var chkedProperty;
                    if (value) {
                        chkedProperty = 'checked="true"';
                    }
                    else {
                        chkedProperty = '';
                    }
                    return '<div class="jqx-custom-inner-cell">'
                        + '<label class="switch float-left">'
                        + '<input type="checkbox" id="invoiceEmail" name="invoiceEmail"' + chkedProperty + '>'
                        + '<div class="slider round" onClick="updateInvoiceEvent(' + row + ', \'email\')"></div>'
                        + '</label>'
                        + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Sent SMS',
                datafield: 'isSmssent',
                minwidth: 120,
                cellsrenderer: (row, column, value) => {
                    var chkedProperty;
                    if (value) {
                        chkedProperty = 'checked="true"';
                    }
                    else {
                        chkedProperty = '';
                    }
                    return '<div class="jqx-custom-inner-cell">'
                        + '<label class="switch float-left">'
                        + '<input type="checkbox" id="invoiceSms" name="invoiceSms"' + chkedProperty + '>'
                        + '<div class="slider round" onClick="updateInvoiceEvent(' + row + ', \'sms\')"></div>'
                        + '</label>'
                        + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    let elemId = this.creditNoteDataList.loadedData[row].creditNoteId;
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" id="' + elemId + '" onClick="editCreditNoteEvent(' + row + ')" ><i class="icon fa fa-pencil edit" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        this.getCreditNotesData();
    }
};
IncomeAllCreditsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_6__["jqxGridComponent"])
], IncomeAllCreditsComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_7__["jqxPopoverComponent"])
], IncomeAllCreditsComponent.prototype, "reversePopOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditCreditNote', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeAllCreditsComponent.prototype, "onEditCreditNote", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onUpdateInvoice', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeAllCreditsComponent.prototype, "onUpdateInvoice", null);
IncomeAllCreditsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-all-credits',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-all-credits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-all-credits.component.scss */ "./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], IncomeAllCreditsComponent);

let editCreditNoteEvent = row => {
    let event = new CustomEvent('onEditCreditNote', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editCreditNoteEvent = editCreditNoteEvent;
let updateInvoiceEvent = (row, type) => {
    var event = new CustomEvent('onUpdateInvoice', {
        detail: {
            rowId: row,
            column: type
        }
    });
    window.dispatchEvent(event);
};
window.updateInvoiceEvent = updateInvoiceEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1jdXN0b21lci1hZHZhbmNlcy9pbmNvbWUtY3VzdG9tZXItYWR2YW5jZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: IncomeCustomerAdvancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeCustomerAdvancesComponent", function() { return IncomeCustomerAdvancesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");









let IncomeCustomerAdvancesComponent = class IncomeCustomerAdvancesComponent {
    constructor(route, dialog, apartmentService, accountsService, cookieService) {
        this.route = route;
        this.dialog = dialog;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.cookieService = cookieService;
        this.isAdvancesLoaded = false;
        this.customerAdvancesData = "";
        this.advance = {};
        this.isEditAdvance = false;
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'CustomerAdvancesData');
    }
    onGlSearchFilter() {
        if (this.customerAdvancesData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.customerAdvancesData;
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
    getCustomerAdvancesParams(event) {
        this.reversePopOver.close();
        this.getCustomerAdvancesData();
    }
    addCustomerAdvances() {
        this.isEditAdvance = false;
        this.popOverSelector = '#addCustomerAdvancesElement';
        this.popOverPosition = 'bottom';
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    onCustomerAdvances(detail) {
        this.isEditAdvance = true;
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let transactionId = dataRecord.transactionId;
        this.advance = dataRecord;
        this.popOverSelector = '#' + transactionId;
        this.popOverPosition = 'left';
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    getCustomerAdvancesData() {
        this.isAdvancesLoaded = false;
        let blockUnitParams = {
            apartmentBlockUnitId: this.apartmentBlockUnitId
        };
        this.apartmentService.getAllApartmentBlockUnitUsersByApartmentBlockUnitId(blockUnitParams).subscribe((res) => {
            this.apartmentBlockUnitUserId = res[0].apartmentBlockUnitUserId;
            let params = {
                blockUnitUserId: this.apartmentBlockUnitUserId,
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.accountsService.getAdvanceByApartmentBlockUnitUserId(params).subscribe((res) => {
                var customerAdvancesDataList = res;
                this.gridSourceData = {
                    localdata: customerAdvancesDataList,
                    datatype: "array"
                };
                this.customerAdvancesDataList = new jqx.dataAdapter(this.gridSourceData);
                this.totalItems = customerAdvancesDataList.length;
                this.isAdvancesLoaded = true;
            }, error => {
                console.log(error);
            });
        });
    }
    ngOnInit() {
        this.apartmentBlockUnitId = this.route.params['value'].id;
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Transaction Id',
                datafield: 'transactionId',
                width: 220,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Advance Added',
                datafield: 'creditAmount',
                cellsrenderer: cellsrenderer,
                minwidth: 180,
                renderer: columnrenderer
            }, {
                text: 'Comments',
                datafield: 'comments',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Amount paid for bill',
                datafield: 'billId_CreatedAgainst',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Paid for Bill No',
                datafield: 'billId_AdjustedInvoice',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Advance Balance',
                datafield: 'balance',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    let elemId = this.customerAdvancesDataList.loadedData[row].transactionId;
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" id="' + elemId + '" onClick="editCustomerAdvancesEvent(' + row + ')" ><i class="icon fa fa-pencil edit" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        this.getCustomerAdvancesData();
    }
};
IncomeCustomerAdvancesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
], IncomeCustomerAdvancesComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_8__["jqxPopoverComponent"])
], IncomeCustomerAdvancesComponent.prototype, "reversePopOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCustomerAdvances', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeCustomerAdvancesComponent.prototype, "onCustomerAdvances", null);
IncomeCustomerAdvancesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-customer-advances',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-customer-advances.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-customer-advances.component.scss */ "./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_5__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeCustomerAdvancesComponent);

let editCustomerAdvancesEvent = row => {
    let event = new CustomEvent('onCustomerAdvances', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editCustomerAdvancesEvent = editCustomerAdvancesEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1oaXN0b3J5LXJldmVyc2UvaW5jb21lLWhpc3RvcnktcmV2ZXJzZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IncomeHistoryReverseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeHistoryReverseComponent", function() { return IncomeHistoryReverseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let IncomeHistoryReverseComponent = class IncomeHistoryReverseComponent {
    constructor(accountsService, sharedService, cookieService) {
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isReceiptSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submitReverseIncomeHistoryForm(form) {
        this.isReceiptSubmitted = false;
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "amount": this.invoice.invoiceAmount,
            "collectionId": 0,
            "invoiceId": this.invoice.billNo,
            "isEmailSent": true,
            "isSmssent": true,
            "comment": this.invoice.comment,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": new Date().toISOString(),
            "transReference1": "string",
            "transReference2": "string",
            "glAcctIndicator": "string"
        };
        let params = {
            custTransReversal: details
        };
        this.accountsService.addCustTransReversal(params).subscribe((res) => {
            if (res.message) {
                this.isReceiptSubmitted = true;
                this.sharedService.setAlertMessage("Invoice reversed successfully");
            }
            else {
                this.isReceiptSubmitted = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isReceiptSubmitted = true;
            this.isError = true;
            this.alertMessage = "Some error occured";
        }, () => {
            this.childEvent.emit(true);
        });
    }
    ngOnInit() {
    }
};
IncomeHistoryReverseComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeHistoryReverseComponent.prototype, "invoice", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeHistoryReverseComponent.prototype, "childEvent", void 0);
IncomeHistoryReverseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-history-reverse',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-history-reverse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-history-reverse.component.scss */ "./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], IncomeHistoryReverseComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.income-invoice-credit-wrapper .icon-tabs {\n  display: flex;\n  justify-content: center;\n}\n.income-invoice-credit-wrapper .icon-tabs li {\n  padding: 0;\n}\n.income-invoice-credit-wrapper .icon-tabs li:not(:last-child) {\n  margin-right: 30px;\n}\n.income-invoice-credit-wrapper .icon-tabs li a {\n  color: #585858;\n  font-size: 1.6rem;\n  border-radius: 6px !important;\n  padding: 4px 10px;\n  position: relative;\n}\n.income-invoice-credit-wrapper .icon-tabs li a span {\n  white-space: nowrap;\n}\n.income-invoice-credit-wrapper .icon-tabs li a .icon {\n  text-align: center;\n  display: block;\n  margin: 0 0 6px 0;\n}\n.income-invoice-credit-wrapper .icon-tabs li a .icon .svg {\n  width: 25px;\n  height: 25px;\n  fill: #585858;\n}\n.income-invoice-credit-wrapper .icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n.income-invoice-credit-wrapper .icon-tabs li a.active .icon .svg {\n  fill: #ffffff;\n}\n.income-invoice-credit-wrapper .icon-tabs li a.active:after {\n  font-family: FontAwesome;\n  content: \"\";\n  position: absolute;\n  bottom: -32px;\n  transform: translateX(-50%) !important;\n  color: #3f51b5;\n  font-size: 5rem;\n  left: 50%;\n}\n@media (max-width: 767px) {\n  .income-invoice-credit-wrapper .icon-tabs {\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    flex-direction: row;\n    justify-content: start;\n  }\n  .income-invoice-credit-wrapper .icon-tabs li {\n    flex: 0 0 auto;\n    height: 90px;\n  }\n  .income-invoice-credit-wrapper .icon-tabs li:not(:last-child) {\n    margin-right: 15px;\n  }\n  .income-invoice-credit-wrapper .icon-tabs li a .icon .svg {\n    width: 20px;\n    height: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLWludm9pY2UtY3JlZGl0L2luY29tZS1pbnZvaWNlLWNyZWRpdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtaW52b2ljZS1jcmVkaXQvaW5jb21lLWludm9pY2UtY3JlZGl0LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDS1o7RUFDRixhQUFBO0VBQ0EsdUJBQUE7QURIRjtBQ0lFO0VBQ0MsVUFBQTtBREZIO0FDR0s7RUFDQyxrQkFBQTtBREROO0FDR0s7RUFDQyxjQ21GSztFQ25CVCxpQkFBQTtFQ3ZFRCw2QkFBQTtFSFVHLGlCQUFBO0VBQ0ssa0JDYko7QUZjTDtBQ0FJO0VBQ0MsbUJBQUE7QURFTDtBQ0FTO0VBQ0Msa0JBQUE7RUFDQSxjQUFBO0VBQ0wsaUJBQUE7QURFTDtBQ0RVO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQ29FQTtBRmpFWDtBQ0FTO0VBQ0MseUJDNEJEO0VEM0JDLGNDb0ZGO0FGbEZSO0FDQVc7RUFDQyxhQ2lGSjtBRi9FUjtBQ0NVO0VBQ0Msd0JDeENMO0VEeUNLLFlBQUE7RUFDQSxrQkN2Q047RUR3Q00sYUFBQTtFR1BWLHNDQUFBO0VIU1UsY0NlRjtFQ2lCUCxlQUFBO0VGOUJTLFNBQUE7QURHWDtBQ0VTO0VBaERMO0lBaURRLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0VEQ1Y7RUNBVTtJQUNJLGNBQUE7SUFDQSxZQUFBO0VERWQ7RUNEYztJQUNJLGtCQUFBO0VER2xCO0VDQ3NCO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RURDMUI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1pbnZvaWNlLWNyZWRpdC9pbmNvbWUtaW52b2ljZS1jcmVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaW5jb21lLWludm9pY2UtY3JlZGl0LXdyYXBwZXIgLmljb24tdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmluY29tZS1pbnZvaWNlLWNyZWRpdC13cmFwcGVyIC5pY29uLXRhYnMgbGkge1xuICBwYWRkaW5nOiAwO1xufVxuLmluY29tZS1pbnZvaWNlLWNyZWRpdC13cmFwcGVyIC5pY29uLXRhYnMgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbn1cbi5pbmNvbWUtaW52b2ljZS1jcmVkaXQtd3JhcHBlciAuaWNvbi10YWJzIGxpIGEge1xuICBjb2xvcjogIzU4NTg1ODtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluY29tZS1pbnZvaWNlLWNyZWRpdC13cmFwcGVyIC5pY29uLXRhYnMgbGkgYSBzcGFuIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5pbmNvbWUtaW52b2ljZS1jcmVkaXQtd3JhcHBlciAuaWNvbi10YWJzIGxpIGEgLmljb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgMCA2cHggMDtcbn1cbi5pbmNvbWUtaW52b2ljZS1jcmVkaXQtd3JhcHBlciAuaWNvbi10YWJzIGxpIGEgLmljb24gLnN2ZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZpbGw6ICM1ODU4NTg7XG59XG4uaW5jb21lLWludm9pY2UtY3JlZGl0LXdyYXBwZXIgLmljb24tdGFicyBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmluY29tZS1pbnZvaWNlLWNyZWRpdC13cmFwcGVyIC5pY29uLXRhYnMgbGkgYS5hY3RpdmUgLmljb24gLnN2ZyB7XG4gIGZpbGw6ICNmZmZmZmY7XG59XG4uaW5jb21lLWludm9pY2UtY3JlZGl0LXdyYXBwZXIgLmljb24tdGFicyBsaSBhLmFjdGl2ZTphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgY29udGVudDogXCLvg51cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0zMnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzZjUxYjU7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgbGVmdDogNTAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5pbmNvbWUtaW52b2ljZS1jcmVkaXQtd3JhcHBlciAuaWNvbi10YWJzIHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgfVxuICAuaW5jb21lLWludm9pY2UtY3JlZGl0LXdyYXBwZXIgLmljb24tdGFicyBsaSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiA5MHB4O1xuICB9XG4gIC5pbmNvbWUtaW52b2ljZS1jcmVkaXQtd3JhcHBlciAuaWNvbi10YWJzIGxpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxuICAuaW5jb21lLWludm9pY2UtY3JlZGl0LXdyYXBwZXIgLmljb24tdGFicyBsaSBhIC5pY29uIC5zdmcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxufSIsIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uaW5jb21lLWludm9pY2UtY3JlZGl0LXdyYXBwZXIge1xuICAgIC5pY29uLXRhYnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0bGkge1xuXHRcdFx0cGFkZGluZzogMDtcbiAgXHRcdFx0Jjpub3QoOmxhc3QtY2hpbGQpe1xuICBcdFx0XHRcdG1hcmdpbi1yaWdodDogMzBweDtcbiAgXHRcdFx0fVxuICBcdFx0XHRhIHtcbiAgXHRcdFx0XHRjb2xvcjogJGdyZXktNzAwO1xuICAgICBcdCBcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1ub3JtYWwpO1xuICAgICBcdCBcdFx0QGluY2x1ZGUgYm9yZGVyLXJhZGl1cyg2cHgpO1xuXHRcdFx0XHRwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgXHQgXHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0XHRzcGFuIHtcblx0XHRcdFx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdFx0XHR9XG4gICAgIFx0IFx0XHQuaWNvbiB7XG4gICAgIFx0IFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgXHQgXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAgNnB4IDA7XG4gICAgIFx0IFx0XHRcdC5zdmcge1xuICAgICBcdCBcdFx0XHRcdHdpZHRoOiAyNXB4O1xuICAgICBcdCBcdFx0XHRcdGhlaWdodDogMjVweDtcbiAgICAgXHQgXHRcdFx0XHRmaWxsOiAkZ3JleS03MDA7XG4gICAgIFx0IFx0XHRcdH1cbiAgICAgXHQgXHRcdH1cbiAgICAgXHQgXHRcdCYuYWN0aXZlIHtcbiAgICAgXHQgXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJG0tYmx1ZTtcbiAgICAgXHQgXHRcdFx0Y29sb3I6ICR3aGl0ZTtcbiAgICAgXHQgXHRcdFx0Lmljb24ge1xuICAgICBcdCBcdFx0XHRcdC5zdmcge1xuICAgICBcdCBcdFx0XHRcdFx0ZmlsbDogJHdoaXRlO1xuICAgICBcdCBcdFx0XHRcdH1cbiAgICAgXHQgXHRcdFx0fVxuICAgICBcdCBcdFx0XHQmOmFmdGVyIHtcbiAgICAgXHQgXHRcdFx0XHRmb250LWZhbWlseTogJGZ0YTtcbiAgICAgXHQgXHRcdFx0XHRjb250ZW50OiBcIlxcZjBkZFwiO1xuICAgICBcdCBcdFx0XHRcdHBvc2l0aW9uOiAkYWJzO1xuICAgICBcdCBcdFx0XHRcdGJvdHRvbTogLTMycHg7XG4gICAgIFx0IFx0XHRcdFx0QGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTUwJSkpO1xuICAgICBcdCBcdFx0XHRcdGNvbG9yOiAkbS1ibHVlO1xuICAgICBcdCBcdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtYmlnLTAzKTtcbiAgICAgXHQgXHRcdFx0XHRsZWZ0OiA1MCU7XG4gICAgIFx0IFx0XHRcdH1cbiAgICAgXHQgXHRcdH1cbiAgXHRcdFx0fVxuXHRcdH1cbiAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKXtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnN2ZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgfVxuXHR9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: IncomeInvoiceCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeInvoiceCreditComponent", function() { return IncomeInvoiceCreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IncomeInvoiceCreditComponent = class IncomeInvoiceCreditComponent {
    constructor() { }
    ngOnInit() {
    }
};
IncomeInvoiceCreditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-invoice-credit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-invoice-credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-invoice-credit.component.scss */ "./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IncomeInvoiceCreditComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1pbnZvaWNlLXJldmVyc2UvaW5jb21lLWludm9pY2UtcmV2ZXJzZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IncomeInvoiceReverseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeInvoiceReverseComponent", function() { return IncomeInvoiceReverseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let IncomeInvoiceReverseComponent = class IncomeInvoiceReverseComponent {
    constructor(accountsService, sharedService, cookieService) {
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submitReverseIncomeInvoiceForm(form) {
        this.isInvoiceSubmitted = false;
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "amount": this.invoice.custInvoiceAmount,
            "collectionId": 0,
            "invoiceId": this.invoice.custInvoiceId,
            "isEmailSent": true,
            "isSmssent": true,
            "comment": this.invoice.comment,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString(),
            "transReference1": "string",
            "transReference2": "string",
            "glAcctIndicator": "Income"
        };
        let params = {
            custTransReversal: details
        };
        this.accountsService.addCustTransReversal(params).subscribe((res) => {
            if (res.message) {
                this.isInvoiceSubmitted = true;
                this.sharedService.setAlertMessage("Invoice reversed successfully");
            }
            else {
                this.isInvoiceSubmitted = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            //this.isInvoiceSubmitted = true;
            this.isError = true;
            this.alertMessage = "Some error occured";
        }, () => {
            this.isInvoiceSubmitted = true;
            this.childEvent.emit(true);
        });
    }
    ngOnInit() {
    }
};
IncomeInvoiceReverseComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeInvoiceReverseComponent.prototype, "invoice", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeInvoiceReverseComponent.prototype, "childEvent", void 0);
IncomeInvoiceReverseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-invoice-reverse',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-invoice-reverse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-invoice-reverse.component.scss */ "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], IncomeInvoiceReverseComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-journal/income-journal.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-journal/income-journal.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1qb3VybmFsL2luY29tZS1qb3VybmFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-journal/income-journal.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-journal/income-journal.component.ts ***!
  \******************************************************************************************/
/*! exports provided: IncomeJournalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeJournalComponent", function() { return IncomeJournalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");










let IncomeJournalComponent = class IncomeJournalComponent {
    constructor(route, apartmentService, accountsService, constantsService, lookupService, cookieService) {
        this.route = route;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.constantsService = constantsService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.glAccountIndicator = "Cust_Invoice";
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 8;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isReportSubmitted = true;
        this.isDataLoaded = true;
    }
    getUnits(id) {
        let params = {
            apartmentBlockId: parseInt(id)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.blockUnitData = res;
            this.isBlockSelected = true;
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'JournalData');
    }
    onGlSearchFilter() {
        if (this.reportsData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.reportsData;
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
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format(this.constantsService.dateFormat);
    }
    getDateFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD");
    }
    submitIncomeReportsForm(form) {
        this.isReportSubmitted = true;
        this.isDataLoaded = false;
        let details = {
            BlockID: null,
            ApartmentBlockUnitId: parseInt(this.apartmentBlockUnitId),
            DocumentdateFrom: null,
            DocumentdateTo: null,
            PostingdateFrom: this.getDateFormat(this.report.PostingdateFrom),
            PostingdateTo: this.getDateFormat(this.report.PostingdateTo),
            GLaccountID: null,
            GLDocumentTypeID: null,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getCustGltransactionsMultiFilter(details).subscribe((res) => {
            var reportsDataList = res;
            this.gridSourceData = {
                localdata: reportsDataList,
                datatype: "array"
            };
            this.reportsDataList = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = reportsDataList.length;
            console.log(reportsDataList);
            this.isDataLoaded = true;
            this.isReportSubmitted = false;
        }, error => {
        });
    }
    ngOnInit() {
        this.report = {};
        this.apartmentBlockUnitId = parseInt(this.route.params['value'].id);
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Customer Invoice Id',
                datafield: 'custInvoiceId',
                width: 180,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Block No',
                datafield: 'apartmentBlock',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Unit No',
                datafield: 'apartmentBlockUnitNumber',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Credit Amount',
                datafield: 'creditAmount',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Debit Amount',
                datafield: 'debitAmount',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Gl Account Name',
                datafield: 'glaccountname',
                width: 180,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Document Date',
                datafield: 'documentDate',
                width: 180,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Entered By',
                datafield: 'enteredByName',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Entry Date & Time',
                datafield: 'entryDateTime',
                width: 180,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format(this.constantsService.dateTimeFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Posting Date',
                datafield: 'postingDate',
                width: 180,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Clearing Date',
                datafield: 'clearingDate',
                width: 180,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Clearing Document No',
                datafield: 'clearingDocumentNumber',
                width: 180,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }
        ];
        this.report.GLaccountID = "";
        this.report.GLDocumentTypeID = "";
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blockData = res;
        });
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            this.glAccountsDataList = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
        });
        let glDocParams = {
            LookupTypeId: 31
        };
        //Gl Document 
        this.lookupService.getLookupValueByLookupTypeId(glDocParams).subscribe((res) => {
            this.glDocumentTypeDataList = res;
        }, error => {
        });
    }
};
IncomeJournalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__["jqxGridComponent"])
], IncomeJournalComponent.prototype, "datagrid", void 0);
IncomeJournalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-journal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-journal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-journal/income-journal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-journal.component.scss */ "./src/app/ams/income-tracker/components/income-journal/income-journal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], IncomeJournalComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wYXktaW52b2ljZS9pbmNvbWUtcGF5LWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IncomePayInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePayInvoiceComponent", function() { return IncomePayInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");









let IncomePayInvoiceComponent = class IncomePayInvoiceComponent {
    constructor(route, accountsService, sharedService, constantsService, cookieService) {
        this.route = route;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.constantsService = constantsService;
        this.cookieService = cookieService;
        this.isInvoiceDataLoaded = false;
        this.invoiceData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isMobile = false;
        this.isInvoiceSelected = false;
        this.selectAllInvoices = false;
        this.isAccountDataLoaded = false;
    }
    isCollectionMade(event) {
        if (event) {
            this.totalAmountArray = [];
            this.selectedInvoiceIdArray = [];
            this.isInvoiceSelected = false;
            this.getCustInvoices();
        }
    }
    onCheckInvoiceHeader(detail) {
        let allDataRecords = this.datagrid.getrows();
        this.totalAmountArray = [];
        this.selectedInvoiceIdArray = [];
        allDataRecords.forEach(item => {
            item.checked = detail.checked;
            this.totalAmountArray.push(item.remainingAmount);
            this.selectedInvoiceIdArray.push(item.custInvoiceID);
        });
        this.isInvoiceSelected = allDataRecords.some(item => {
            return item.checked;
        });
        this.datagrid.refresh();
    }
    onCheckInvoiceRow(detail) {
        let allDataRecords = this.datagrid.getrows();
        var dataRecord = this.datagrid.getrowdata(detail.rowId);
        dataRecord.checked = detail.checked;
        this.totalAmountArray = [];
        this.selectedInvoiceIdArray = [];
        allDataRecords.forEach(item => {
            if (item.checked) {
                length++;
                this.totalAmountArray.push(item.remainingAmount);
                this.selectedInvoiceIdArray.push(item.custInvoiceID);
            }
        });
        this.isInvoiceSelected = allDataRecords.some(item => {
            return item.checked;
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'PayInvoiceData');
    }
    onGlSearchFilter() {
        if (this.invoiceData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.invoiceData;
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
    renderColumns() {
        let cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        let columnrenderer = (value) => {
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
                        + '<input type="checkbox" class="form-check-input" onClick="checkInvoiceRowEvent(' + row + ', this.checked)" id="defaultChecker' + row + '" name="defaultChecker' + row + '" ' + chkedProperty + '>'
                        + '<label class="form-check-label" for="defaultChecker' + row + '"></label>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
                },
                renderer: (value) => {
                    return '<div style="padding: 10px">'
                        + '<div class="form-group mb-0 w-100">'
                        + '<div class="form-check check-header text-center">'
                        + '<input type="checkbox" id="selectAllDefaulters" name="selectAllDefaulters" onClick="checkInvoiceHeaderEvent(event, this.checked)" >'
                        + '<label class="form-check-label" for="selectAllDefaulters"></label>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
                }
            },
            {
                text: 'Bill No',
                datafield: 'custInvoiceID',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Bill Date',
                datafield: 'custInvoiceDate',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Due Date',
                datafield: 'dueDate',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Comments',
                datafield: 'comments',
                minwidth: 180,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Bill Amount',
                datafield: 'billAmount',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Remaining Amount',
                datafield: 'remainingAmount',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }];
    }
    getCustInvoices() {
        let params = {
            ApartmentBlockUnitID: this.route.params['value'].id
        };
        this.accountsService.getArBalancewithDueByAptBlkUnitId(params).subscribe((res) => {
            var invoiceDataList = res;
            this.gridSourceData = {
                localdata: invoiceDataList,
                datatype: "array"
            };
            this.invoiceDataList = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = invoiceDataList.length;
            this.isInvoiceDataLoaded = true;
            this.renderColumns();
        });
    }
    ngOnInit() {
        this.getCustInvoices();
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getIncomeTrackerSubLedgersByApartmentId(params).subscribe((res) => {
            this.accountDataList = res.filter(item => {
                return item.apartmentBlockUnitId == this.route.params['value'].id;
            });
            this.isAccountDataLoaded = true;
        });
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGlAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
        this.sharedService.setActionIncomeTrackerIndex(this.route.params['value'].id);
    }
};
IncomePayInvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])
], IncomePayInvoiceComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCheckInvoiceHeader', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomePayInvoiceComponent.prototype, "onCheckInvoiceHeader", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCheckInvoiceRow', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomePayInvoiceComponent.prototype, "onCheckInvoiceRow", null);
IncomePayInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-pay-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-pay-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-pay-invoice.component.scss */ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomePayInvoiceComponent);

let checkInvoiceHeaderEvent = (event, isChecked) => {
    event.stopPropagation();
    var newEvent = new CustomEvent('onCheckInvoiceHeader', {
        detail: {
            checked: isChecked
        }
    });
    window.dispatchEvent(newEvent);
};
window.checkInvoiceHeaderEvent = checkInvoiceHeaderEvent;
let checkInvoiceRowEvent = (row, isChecked) => {
    var event = new CustomEvent('onCheckInvoiceRow', {
        detail: {
            rowId: row,
            checked: isChecked
        }
    });
    window.dispatchEvent(event);
};
window.checkInvoiceRowEvent = checkInvoiceRowEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LWNvbGxlY3Rpb24vaW5jb21lLXBvc3QtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IncomePostCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePostCollectionComponent", function() { return IncomePostCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");







let IncomePostCollectionComponent = class IncomePostCollectionComponent {
    constructor(accountsService, lookupService, sharedService, cookieService) {
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.collection = {};
        this.isCollectionSubmitted = false;
        this.isError = false;
        this.alertMessage = "";
        this.minCollectionAmount = 1;
        this.maxCollectionAmount = 0;
        this.isMultipleEntry = false;
        this.collectionParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
    }
    submitIncomePostCollectionForm(form) {
        var custInvoiceObjArray = [];
        if (this.invoiceIdArray.length == 1) {
            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.invoiceIdArray, (item, index) => {
                var details = {
                    "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                    "collectionId": 0,
                    "invoiceId": item,
                    "glAccountId": 0,
                    "instrumentTypeId": parseInt(this.collection.instrumentTypeId),
                    "amount": this.collection.amount,
                    "comment": "",
                    "isActive": true,
                    "insertedBy": parseInt(this.cookieService.get('userId')),
                    "insertedOn": "2020-01-10T06:59:54.422Z",
                    "updatedBy": 0,
                    "updatedOn": "2020-01-10T06:59:54.422Z"
                };
                custInvoiceObjArray.push(details);
            });
        }
        else {
            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.invoiceIdArray, (item, index) => {
                var details = {
                    "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                    "collectionId": 0,
                    "invoiceId": item,
                    "glAccountId": 0,
                    "instrumentTypeId": parseInt(this.collection.instrumentTypeId),
                    "amount": this.totalAmountArray[index],
                    "comment": "",
                    "isActive": true,
                    "insertedBy": parseInt(this.cookieService.get('userId')),
                    "insertedOn": "2020-01-10T06:59:54.422Z",
                    "updatedBy": 0,
                    "updatedOn": "2020-01-10T06:59:54.422Z"
                };
                custInvoiceObjArray.push(details);
            });
        }
        this.isCollectionSubmitted = false;
        let collectionDetails = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "receiptNumber": 0,
            "receiptDate": new Date().toISOString(),
            "amount": parseInt(this.collection.amount),
            "instrumentTypeId": parseInt(this.collection.instrumentTypeId),
            "postOn": this.collection.postOn || new Date().toISOString(),
            "collectionAccountTypeId": 165,
            "depositSlipNumber": 0,
            "postExcessAmountTo": 0,
            "collectionStatusId": parseInt(this.collection.collectionStatusId),
            "collectionStatus": "",
            "isEmailSent": true,
            "isSmssent": true,
            "comment": this.collection.comment || "",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "invoiceId": this.invoiceIdArray[0],
            "transReference1": "",
            "transReference2": "",
            "glAcctIndicator": "Asset",
            "collectionInvoice": custInvoiceObjArray
        };
        let params = {
            collection: collectionDetails
        };
        this.accountsService.addCollection(params).subscribe((res) => {
            if (res.message) {
                this.isCollectionSubmitted = true;
                this.sharedService.setAlertMessage("Collection done successfully");
                this.collectionParams.emit(true);
            }
            else {
                this.isCollectionSubmitted = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isCollectionSubmitted = true;
        });
    }
    ngOnInit() {
        this.collection = {};
        this.collection.instrumentTypeId = "";
        this.collection.collectionAccountTypeId = "";
        this.collection.depositSlipNumber = "";
        this.collection.collectionStatusId = "";
        //if only one entry of collection data is added
        this.collection.amount = this.totalAmountArray[0];
        this.maxCollectionAmount = this.totalAmountArray[0];
        let paymentListParams = {
            LookupTypeId: 34
        };
        //payment status
        this.lookupService.getLookupValueByLookupTypeId(paymentListParams).subscribe((res) => {
            this.paymentStatusListData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let insListParams = {
            LookupTypeId: 33
        };
        //payment mode
        this.lookupService.getLookupValueByLookupTypeId(insListParams).subscribe((res) => {
            this.instrumentTypeListData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGlAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
        this.depositSlipLisData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        this.isCollectionSubmitted = true;
    }
    ngOnChanges(changes) {
        this.collection.amount = this.totalAmountArray.reduce((a, b) => {
            this.maxCollectionAmount = a + b;
            return a + b;
        });
        if (this.totalAmountArray.length > 1) {
            this.isMultipleEntry = true;
        }
        else {
            this.isMultipleEntry = false;
            this.collection.amount = this.totalAmountArray[0];
            this.maxCollectionAmount = this.totalAmountArray[0];
        }
    }
};
IncomePostCollectionComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostCollectionComponent.prototype, "totalAmountArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostCollectionComponent.prototype, "invoiceIdArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostCollectionComponent.prototype, "collectionParams", void 0);
IncomePostCollectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-post-collection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-post-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-post-collection.component.scss */ "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], IncomePostCollectionComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form {\n  display: contents;\n}\nform .input-box, form .select-box {\n  margin: 0;\n}\nform .input-box input[readonly] {\n  background-color: #f9f9f9;\n}\nform .input-box input[readonly]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px #e6e6e6 inset;\n  -webkit-text-fill-color: #e6e6e6;\n}\nform .input-box ::ng-deep input {\n  height: 34px !important;\n  border-radius: 0 !important;\n}\nform .input-box ::ng-deep .select-list-dropdown {\n  min-width: 100px;\n}\nform .input-box textarea {\n  height: auto !important;\n  border: none;\n  padding: 0;\n}\nform .input-box textarea:focus {\n  border: none !important;\n}\nform .account-name-box ::ng-deep input {\n  padding: 0;\n  width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\nform .discount-box ::ng-deep .clear-filter {\n  z-index: 1000;\n  position: relative;\n  top: -24px;\n  right: -20px;\n}\n.heads {\n  padding: 0 24px 0 14px;\n  display: table-cell;\n  border: none;\n  border-right: 1px solid #dee2e6;\n  border-top: 1px solid #dee2e6;\n}\n.heads:last-child {\n  border-right: none;\n  padding: 12px 0;\n}\n.heads.deselect .select-group[_ngcontent-iqr-c297] .simple-select[_ngcontent-iqr-c297] + .select-arrow.down[_ngcontent-iqr-c297]:before {\n  color: #8e8e8e !important;\n}\n.heads p {\n  font-size: 1.4rem;\n  color: #373946;\n}\n.float-close {\n  width: 23px;\n  height: 23px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 23px !important;\n  background-color: #5cd694;\n  cursor: pointer;\n  display: inline-block;\n  margin: 9px 4px;\n  line-height: 20px;\n}\n.float-close.disabled {\n  background-color: #f0f3f3 !important;\n  pointer-events: none;\n}\n.float-close.disabled .icon {\n  color: #e6e6e6;\n}\n.float-close.delete {\n  background-color: #ea7962;\n}\n.float-close.valid {\n  background-color: #389583;\n}\n.float-close .icon {\n  cursor: pointer;\n  width: 13px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlLWZpZWxkcy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlLWZpZWxkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLGlCQUFBO0FDRkQ7QURHQztFQUNDLFNBQUE7QUNERjtBREtHO0VBQ1EseUJFc0dBO0FEekdYO0FESVc7RUFDRSxnREFBQTtFQUNBLGdDRWdDRjtBRGxDWDtBRE9HO0VBQ0MsdUJBQUE7RUdiSCwyQkFBQTtBRldEO0FES0c7RUFDQyxnQkFBQTtBQ0hKO0FETUU7RUFDQyx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDSkg7QURLRztFQUNDLHVCQUFBO0FDSEo7QURTRztFQUNDLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1BKO0FEYUc7RUFDQyxhQUFBO0VBQ0Esa0JFN0NDO0VGOENELFVBQUE7RUFDQSxZQUFBO0FDWEo7QURnQkE7RUFDQyxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUNiRDtBRGNDO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDWkY7QURlRTtFQUNDLHlCQUFBO0FDYkg7QURnQkM7RUlNQyxpQkFBQTtFSkpBLGNFcUJTO0FEbkNYO0FEaUJBO0VHSUUsV0hIZ0I7RUdJaEIsWUhKZ0I7RUdLaEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUE5RUQsOEJBQUE7RUh3RUEseUJFNUJZO0VGNkJaLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BEO0FEUUM7RUFDQyxvQ0FBQTtFQUNBLG9CQUFBO0FDTkY7QURPRTtFQUNDLGNFMUNRO0FEcUNYO0FEUUM7RUFDQyx5QkUxRU07QURvRVI7QURRQztFQUNDLHlCRXZDUTtBRGlDVjtBRFFDO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxjRWtCTTtBRHhCUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UtZmllbGRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UtZmllbGRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5mb3JtIHtcblx0ZGlzcGxheTogY29udGVudHM7O1xuXHQuaW5wdXQtYm94LCAuc2VsZWN0LWJveCB7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cdC5pbnB1dC1ib3gge1xuXHRcdGlucHV0IHtcblx0XHRcdCZbcmVhZG9ubHldIHtcblx0ICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LTE1MDtcblx0ICAgICAgICAgICY6LXdlYmtpdC1hdXRvZmlsbCB7XG5cdCAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggJGdyZXktNTAwIGluc2V0O1xuXHQgICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogJGdyZXktNTAwO1xuXHQgICAgICAgICAgfVxuXHQgICAgICAgIH1cblx0XHR9XG5cdFx0OjpuZy1kZWVwIHtcblx0XHRcdGlucHV0IHtcblx0XHRcdFx0aGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMClcblx0XHRcdH1cblx0XHRcdC5zZWxlY3QtbGlzdC1kcm9wZG93biB7XG5cdFx0XHRcdG1pbi13aWR0aDogMTAwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRleHRhcmVhIHtcblx0XHRcdGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdCY6Zm9jdXMge1xuXHRcdFx0XHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmFjY291bnQtbmFtZS1ib3gge1xuXHRcdDo6bmctZGVlcCB7XG5cdFx0XHRpbnB1dCB7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdHdpZHRoOiAxODBweDtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5kaXNjb3VudC1ib3gge1xuXHRcdDo6bmctZGVlcCB7XG5cdFx0XHQuY2xlYXItZmlsdGVyIHtcblx0XHRcdFx0ei1pbmRleDogMTAwMDtcblx0XHRcdFx0cG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdHRvcDogLTI0cHg7XG5cdFx0XHRcdHJpZ2h0OiAtMjBweDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbi5oZWFkcyB7XG5cdHBhZGRpbmc6IDAgMjRweCAwIDE0cHg7XG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdGJvcmRlcjpub25lO1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS00NjA7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00NjA7XG5cdCY6bGFzdC1jaGlsZCB7XG5cdFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xuXHRcdHBhZGRpbmc6IDEycHggMDtcblx0fVxuXHQmLmRlc2VsZWN0IHtcblx0XHQuc2VsZWN0LWdyb3VwW19uZ2NvbnRlbnQtaXFyLWMyOTddIC5zaW1wbGUtc2VsZWN0W19uZ2NvbnRlbnQtaXFyLWMyOTddICsgLnNlbGVjdC1hcnJvdy5kb3duW19uZ2NvbnRlbnQtaXFyLWMyOTddOmJlZm9yZSB7XG5cdFx0XHRjb2xvcjogJGdyZXktMzUwICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cdHAge1xuXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdH1cbn1cbi5mbG9hdC1jbG9zZSB7XG5cdEBpbmNsdWRlIGNpcmNsZXMoMjNweCk7XG5cdGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0bWFyZ2luOiA5cHggNHB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0Ji5kaXNhYmxlZHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0zMDAgIWltcG9ydGFudDtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHQuaWNvbiB7XG5cdFx0XHRjb2xvcjogJGdyZXktNTAwO1xuXHRcdH1cblx0fVxuXHQmLmRlbGV0ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHMtcmVkO1xuXHR9XG5cdCYudmFsaWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRkLWdyZWVuO1xuXHR9XG5cdC5pY29uIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0d2lkdGg6IDEzcHg7XG5cdFx0Y29sb3I6ICR3aGl0ZTtcblx0fVxufVxuIiwiZm9ybSB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuZm9ybSAuaW5wdXQtYm94LCBmb3JtIC5zZWxlY3QtYm94IHtcbiAgbWFyZ2luOiAwO1xufVxuZm9ybSAuaW5wdXQtYm94IGlucHV0W3JlYWRvbmx5XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5mb3JtIC5pbnB1dC1ib3ggaW5wdXRbcmVhZG9ubHldOi13ZWJraXQtYXV0b2ZpbGwge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICNlNmU2ZTYgaW5zZXQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZTZlNmU2O1xufVxuZm9ybSAuaW5wdXQtYm94IDo6bmctZGVlcCBpbnB1dCB7XG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn1cbmZvcm0gLmlucHV0LWJveCA6Om5nLWRlZXAgLnNlbGVjdC1saXN0LWRyb3Bkb3duIHtcbiAgbWluLXdpZHRoOiAxMDBweDtcbn1cbmZvcm0gLmlucHV0LWJveCB0ZXh0YXJlYSB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5mb3JtIC5pbnB1dC1ib3ggdGV4dGFyZWE6Zm9jdXMge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbmZvcm0gLmFjY291bnQtbmFtZS1ib3ggOjpuZy1kZWVwIGlucHV0IHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE4MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmZvcm0gLmRpc2NvdW50LWJveCA6Om5nLWRlZXAgLmNsZWFyLWZpbHRlciB7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjRweDtcbiAgcmlnaHQ6IC0yMHB4O1xufVxuXG4uaGVhZHMge1xuICBwYWRkaW5nOiAwIDI0cHggMCAxNHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuLmhlYWRzOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIHBhZGRpbmc6IDEycHggMDtcbn1cbi5oZWFkcy5kZXNlbGVjdCAuc2VsZWN0LWdyb3VwW19uZ2NvbnRlbnQtaXFyLWMyOTddIC5zaW1wbGUtc2VsZWN0W19uZ2NvbnRlbnQtaXFyLWMyOTddICsgLnNlbGVjdC1hcnJvdy5kb3duW19uZ2NvbnRlbnQtaXFyLWMyOTddOmJlZm9yZSB7XG4gIGNvbG9yOiAjOGU4ZThlICFpbXBvcnRhbnQ7XG59XG4uaGVhZHMgcCB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzM3Mzk0Njtcbn1cblxuLmZsb2F0LWNsb3NlIHtcbiAgd2lkdGg6IDIzcHg7XG4gIGhlaWdodDogMjNweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDIzcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNkNjk0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA5cHggNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi5mbG9hdC1jbG9zZS5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYzZjMgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZmxvYXQtY2xvc2UuZGlzYWJsZWQgLmljb24ge1xuICBjb2xvcjogI2U2ZTZlNjtcbn1cbi5mbG9hdC1jbG9zZS5kZWxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE3OTYyO1xufVxuLmZsb2F0LWNsb3NlLnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTU4Mztcbn1cbi5mbG9hdC1jbG9zZSAuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: IncomePostMultiInvoiceFieldsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePostMultiInvoiceFieldsComponent", function() { return IncomePostMultiInvoiceFieldsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let IncomePostMultiInvoiceFieldsComponent = class IncomePostMultiInvoiceFieldsComponent {
    constructor(route, accountsService, lookupService, cookieService) {
        this.route = route;
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.glAccountIndicator = "Income";
        this.apartmentBlockUnitId = "";
        this.fieldParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.taxParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    deleteBlock() {
        this.invoiceGLAccountsArray.splice(this.index, 1);
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    isArrayOne() {
        return this.invoiceGLAccountsArray.length > 1 ? true : false;
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isFormValid(index) {
        return (this.invoiceGLAccountsData.glaccountId == null || this.invoiceGLAccountsData.comments == "" || this.invoiceGLAccountsData.amount == "") ? false : true;
    }
    isDeselectColumn() {
        return this.isEditInvoice ? 'deselect' : '';
    }
    isTabIndexDisabled() {
        return this.isEditInvoice ? -1 : 0;
    }
    onAccountChange(item, index) {
        if (item != null) {
            this.invoiceGLAccountsData.glaccountName = item.glaccountName;
            this.invoiceGLAccountsData.glaccountId = parseInt(item.glaccountId);
        }
        else {
            this.invoiceGLAccountsData.glaccountName = "";
            this.invoiceGLAccountsData.glaccountId = null;
        }
        this.invoiceGLAccountsData.form = this.invoiceForm.valid;
        this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    onInvoiceAmountChange(value, index) {
        if (value != "") {
            this.invoiceGLAccountsData.amount = parseFloat(value);
        }
        else {
            this.invoiceGLAccountsData.amount = 0;
        }
        this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - parseFloat(this.invoiceGLAccountsData.discountAmount);
        this.invoiceGLAccountsData.form = this.invoiceForm.valid;
        this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
        this.calculateVat();
    }
    onCommentChange(value, index) {
        this.invoiceGLAccountsData.comments = value;
        this.invoiceGLAccountsData.form = this.invoiceForm.valid;
        this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    onDiscountChange(event, index) {
        if (event != null) {
            this.invoiceGLAccountsData.isDiscount = true;
            this.invoiceGLAccountsData.discountId = event.lookupValueId;
            this.invoiceGLAccountsData.discountTypeId = event.lookupValueName;
            this.onDiscountAdded(this.invoiceGLAccountsData.discountDirectAmt, index);
        }
        else {
            this.invoiceGLAccountsData.isDiscount = false;
            this.invoiceGLAccountsData.discountId = "";
            this.invoiceGLAccountsData.discountTypeId = "";
            this.invoiceGLAccountsData.discountAmount = 0;
            this.invoiceGLAccountsData.discountDirectAmt = 0;
        }
        this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - parseFloat(this.invoiceGLAccountsData.discountAmount);
        this.invoiceGLAccountsData.form = this.invoiceForm.valid;
        this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    onDiscountAdded(value, index) {
        if (value != null) {
            if (this.invoiceGLAccountsData.discountTypeId == '%') {
                this.calculateDiscountPercent(value, index);
            }
            else {
                this.calculateDiscountPeso(value, index);
            }
        }
    }
    calculateDiscountPercent(value, index) {
        if (value != null) {
            var percent = parseFloat(value) / 100;
            this.invoiceGLAccountsData.discountAmount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
        }
        else {
            this.invoiceGLAccountsData.isDiscount = false;
            this.invoiceGLAccountsData.discountAmount = 0;
            this.invoiceGLAccountsData.discountDirectAmt = 0;
        }
        this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - this.invoiceGLAccountsData.discountAmount;
        this.invoiceGLAccountsData.form = this.invoiceForm.valid;
        this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
        this.calculateVat();
    }
    calculateDiscountPeso(value, index) {
        if (value != null) {
            this.invoiceGLAccountsData.discountAmount = parseFloat(value);
        }
        else {
            this.invoiceGLAccountsData.isDiscount = false;
            this.invoiceGLAccountsData.discountAmount = 0;
            this.invoiceGLAccountsData.discountDirectAmt = 0;
        }
        this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - this.invoiceGLAccountsData.discountAmount;
        this.invoiceGLAccountsData.form = this.invoiceForm.valid;
        this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
        this.calculateVat();
    }
    onVatChange(event, index) {
        if (event != null) {
            this.invoiceGLAccountsData.isTax = true;
            this.invoiceGLAccountsData.vatid = event.lookupValueName;
            var percent = parseFloat(event.lookupValueName) / 100;
            this.custInvoiceTaxData.isAdded = true;
            this.custInvoiceTaxData.invoiceTaxId = event.lookupValueId;
            this.custInvoiceTaxData.custInvoiceId = new Date().valueOf(); // generate unique id;
            this.currentTaxId = event.lookupValueId;
            this.custInvoiceTaxData.invoiceTotalAmount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
            this.taxParams.emit(this.custInvoiceTaxData);
        }
        else {
            this.invoiceGLAccountsData.isTax = false;
            this.invoiceGLAccountsData.vatid = 0;
            var percent = 0;
            this.custInvoiceTaxData.invoiceTaxId = this.currentTaxId;
            this.custInvoiceTaxData.isAdded = false;
            this.custInvoiceTaxData.invoiceTotalAmount = 0;
            this.taxParams.emit(this.custInvoiceTaxData);
        }
        this.invoiceGLAccountsData.vatamount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
        this.invoiceGLAccountsData.form = this.invoiceForm.valid;
        this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    calculateVat() {
        if (this.invoiceGLAccountsData.isTax) {
            var percent = parseFloat(this.invoiceGLAccountsData.vatid) / 100;
            this.invoiceGLAccountsData.vatamount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
            this.custInvoiceTaxData.invoiceTotalAmount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
            this.taxParams.emit(this.custInvoiceTaxData);
        }
    }
    ngOnInit() {
        this.apartmentBlockUnitId = this.route.params['value'].id;
        this.custInvoiceTaxData = {
            "custinvoiceTaxId": 0,
            "custInvoiceId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
            "isAdded": true,
            "invoiceTaxId": 0,
            "invoiceTotalAmount": 0,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": null
        };
        if (this.isEditInvoice) {
            this.invoiceGLAccountsData.form = true;
        }
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            this.glAccountListData = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
        });
        let vatListParams = {
            LookupTypeId: 77
        };
        //VAT types
        this.lookupService.getLookupValueByLookupTypeId(vatListParams).subscribe((res) => {
            this.vatTypeDataList = res;
        });
        let disListParams = {
            LookupTypeId: 88
        };
        //discount types
        this.lookupService.getLookupValueByLookupTypeId(disListParams).subscribe((res) => {
            this.discountTypeDataList = res;
        });
    }
};
IncomePostMultiInvoiceFieldsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceGLAccountsData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceGLAccountsArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "isEditInvoice", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "fieldParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "taxParams", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('postIncomeMultiInvoiceFieldsForm', { static: true }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceForm", void 0);
IncomePostMultiInvoiceFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[app-income-post-multi-invoice-fields]',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-post-multi-invoice-fields.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-post-multi-invoice-fields.component.scss */ "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomePostMultiInvoiceFieldsComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.scss ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-post-invoice-wrapper .add-invoice-block {\n  padding: 10px 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.income-post-invoice-wrapper .invoice-table {\n  width: 100% !important;\n  overflow-x: scroll;\n  overflow-y: visible;\n  float: left;\n}\n.income-post-invoice-wrapper .invoice-header {\n  display: table-row;\n}\n.income-post-invoice-wrapper .invoice-header .heads {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem;\n  color: #373946;\n  text-transform: uppercase;\n  border: none;\n  border-right: 1px solid #dee2e6;\n  padding: 10px 14px;\n  display: table-cell;\n}\n.income-post-invoice-wrapper .invoice-fields {\n  display: table-row;\n}\n.income-post-invoice-wrapper .add-invoice-box {\n  padding: 12px 0 6px 10px;\n  border-top: 1px solid #eaeaea;\n  overflow: auto;\n}\n.income-post-invoice-wrapper .add-invoice-box .icon {\n  color: #373946;\n  width: 18px;\n  position: relative;\n  top: -2px;\n}\n.income-post-invoice-wrapper .add-invoice-box span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: #585858;\n  margin: 0 0 0 6px;\n  font-size: 1.4rem;\n}\n.income-post-invoice-wrapper .add-invoice-box .add-invoice-link {\n  cursor: pointer;\n}\n.income-post-invoice-wrapper .add-invoice-box .add-invoice-link:hover span, .income-post-invoice-wrapper .add-invoice-box .add-invoice-link:hover .icon {\n  color: #54b941;\n}\n.income-post-invoice-wrapper .total-box {\n  padding: 15px 14px;\n}\n.income-post-invoice-wrapper .total-box p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  margin: 8px 0 !important;\n  font-size: 1.3rem;\n}\n.income-post-invoice-wrapper .total-box.final p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  margin: 0 !important;\n  font-size: 1.4rem;\n}\n.income-post-invoice-wrapper .total-box .discount-input input {\n  width: 100px;\n  border-radius: 0 !important;\n  height: 34px;\n}\n.income-post-invoice-wrapper .total-box .discount-input input[readonly] {\n  background-color: #f9f9f9;\n}\n.income-post-invoice-wrapper .total-box .discount-box ::ng-deep input {\n  width: 100px;\n  border-radius: 0 !important;\n  height: 34px;\n}\n.income-post-invoice-wrapper .total-box .discount-box ::ng-deep .select-arrow {\n  color: #8e8e8e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0MsZUFBQTtFQUNBLGdDQUFBO0FDSkY7QURNQztFQUNDLHNCRTBKSTtFRnpKSixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0pGO0FETUM7RUFDQyxrQkFBQTtBQ0pGO0FES0U7RUc0Q0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQWFBLGlCQUFBO0VIMURDLGNFMkVRO0VGMUVSLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NIO0FERUM7RUFDQyxrQkFBQTtBQ0FGO0FERUM7RUFDQyx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQ0FGO0FEQ0U7RUFDQyxjRTJEUTtFRjFEUixXQUFBO0VBQ0Esa0JFakNFO0VGa0NGLFNBQUE7QUNDSDtBRENFO0VHTUEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VITkMsY0VzRFE7RUZyRFIsaUJBQUE7RUdrQ0QsaUJBQUE7QUY5QkY7QURERTtFQUNDLGVBQUE7QUNHSDtBRERJO0VBQ0MsY0VJSztBRERWO0FERUM7RUFDQyxrQkFBQTtBQ0FGO0FEQ0U7RUduQkEscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFSGlCQyx3QkFBQTtFR2tCRCxpQkFBQTtBRlpGO0FERkc7RUdqQkQscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VIaUJFLG9CQUFBO0VHWUYsaUJBQUE7QUZMRjtBREZHO0VBQ0MsWUFBQTtFSWpFSCwyQkFBQTtFSm1FRyxZQUFBO0FDTUo7QURMSTtFQUNDLHlCRXFDTTtBRDlCWDtBRERJO0VBQ0MsWUFBQTtFSTVFSiwyQkFBQTtFSjhFSSxZQUFBO0FDS0w7QURISTtFQUNDLGNFcUJNO0FEaEJYIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIge1xuXHQuYWRkLWludm9pY2UtYmxvY2sge1xuXHRcdHBhZGRpbmc6IDEwcHggMDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXktNDYwO1xuXHR9XG5cdC5pbnZvaWNlLXRhYmxlIHtcblx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHRcdG92ZXJmbG93LXk6IHZpc2libGU7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdH1cblx0Lmludm9pY2UtaGVhZGVyIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1yb3c7XG5cdFx0LmhlYWRzIHtcblx0XHRcdEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcblx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7XG5cdFx0XHRjb2xvcjogJGdyZXktODAwO1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdGJvcmRlcjpub25lO1xuXHRcdFx0Ym9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyZXktNDYwO1xuXHRcdFx0cGFkZGluZzogMTBweCAxNHB4O1xuXHRcdFx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0XHR9XG5cdH1cblx0Lmludm9pY2UtZmllbGRzIHtcblx0XHRkaXNwbGF5OiB0YWJsZS1yb3c7XG5cdH1cblx0LmFkZC1pbnZvaWNlLWJveCB7XG5cdFx0cGFkZGluZzogMTJweCAwIDZweCAxMHB4O1xuXHRcdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00NTA7XG5cdFx0b3ZlcmZsb3c6IGF1dG87XG5cdFx0Lmljb24ge1xuXHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdHdpZHRoOiAxOHB4O1xuXHRcdFx0cG9zaXRpb246ICRyZWw7XG5cdFx0XHR0b3A6IC0ycHg7XG5cdFx0fVxuXHRcdHNwYW4ge1xuXHRcdFx0QGluY2x1ZGUgaGVhZC1tZWRpdW07XG5cdFx0XHRjb2xvcjogJGdyZXktNzAwO1xuXHRcdFx0bWFyZ2luOiAwIDAgMCA2cHg7XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHR9XG5cdFx0LmFkZC1pbnZvaWNlLWxpbmsge1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0Jjpob3ZlciB7XG5cdFx0XHRcdHNwYW4sIC5pY29uIHtcblx0XHRcdFx0XHRjb2xvcjogJG0tZ3JlZW47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LnRvdGFsLWJveCB7XG5cdFx0cGFkZGluZzogMTVweCAxNHB4O1xuXHRcdHAge1xuXHRcdFx0QGluY2x1ZGUgaGVhZC1yZWd1bGFyO1xuXHRcdFx0bWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xuXHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbGVyKTtcblx0XHR9XG5cdFx0Ji5maW5hbCB7XG5cdFx0XHRwIHtcblx0XHRcdFx0QGluY2x1ZGUgaGVhZC1tZWRpdW07XG5cdFx0XHRcdG1hcmdpbjogMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0LmRpc2NvdW50LWlucHV0IHtcblx0XHRcdGlucHV0IHtcblx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xuXHRcdFx0XHRoZWlnaHQ6IDM0cHg7XG5cdFx0XHRcdCZbcmVhZG9ubHldIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0xNTA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0LmRpc2NvdW50LWJveCB7XG5cdFx0XHQ6Om5nLWRlZXAge1xuXHRcdFx0XHRpbnB1dCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCk7XG5cdFx0XHRcdFx0aGVpZ2h0OiAzNHB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5zZWxlY3QtYXJyb3cge1xuXHRcdFx0XHRcdGNvbG9yOiAkZ3JleS0zNTA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIuaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5hZGQtaW52b2ljZS1ibG9jayB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5pbnZvaWNlLXRhYmxlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xuICBmbG9hdDogbGVmdDtcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtaGVhZGVyIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuaW52b2ljZS1oZWFkZXIgLmhlYWRzIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuaW52b2ljZS1maWVsZHMge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5hZGQtaW52b2ljZS1ib3gge1xuICBwYWRkaW5nOiAxMnB4IDAgNnB4IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmFkZC1pbnZvaWNlLWJveCAuaWNvbiB7XG4gIGNvbG9yOiAjMzczOTQ2O1xuICB3aWR0aDogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5hZGQtaW52b2ljZS1ib3ggc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogIzU4NTg1ODtcbiAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuYWRkLWludm9pY2UtYm94IC5hZGQtaW52b2ljZS1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuYWRkLWludm9pY2UtYm94IC5hZGQtaW52b2ljZS1saW5rOmhvdmVyIHNwYW4sIC5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmFkZC1pbnZvaWNlLWJveCAuYWRkLWludm9pY2UtbGluazpob3ZlciAuaWNvbiB7XG4gIGNvbG9yOiAjNTRiOTQxO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAudG90YWwtYm94IHtcbiAgcGFkZGluZzogMTVweCAxNHB4O1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAudG90YWwtYm94IHAge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC50b3RhbC1ib3guZmluYWwgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC50b3RhbC1ib3ggLmRpc2NvdW50LWlucHV0IGlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAudG90YWwtYm94IC5kaXNjb3VudC1pbnB1dCBpbnB1dFtyZWFkb25seV0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAudG90YWwtYm94IC5kaXNjb3VudC1ib3ggOjpuZy1kZWVwIGlucHV0IHtcbiAgd2lkdGg6IDEwMHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAudG90YWwtYm94IC5kaXNjb3VudC1ib3ggOjpuZy1kZWVwIC5zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogIzhlOGU4ZTtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gZGVzZWxlY3QgKCkge1xuICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XG5cdC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW8tdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gZmxpcCgkZGlyZWN0aW9uKSB7XG4gIHRyYW5zZm9ybSA6IHJvdGF0ZVkoJGRpcmVjdGlvbik7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: IncomePostMultiInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePostMultiInvoiceComponent", function() { return IncomePostMultiInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let IncomePostMultiInvoiceComponent = class IncomePostMultiInvoiceComponent {
    constructor(router, route, apartmentService, accountsService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.isInvoiceSubmitted = true;
        this.custInvoiceTaxArray = [];
        this.isEditInvoice = false;
        this.isFormInValid = true;
        this.isAccountDataLoaded = false;
        this.isSingleInvoice = false;
        this.isGeneralInvoice = false;
        this.isBlockSelected = false;
        this.apartmentBlockId = "";
        this.apartmentBlockUnitId = "";
    }
    addInvoice() {
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "invoiceId": 0,
            "glaccountId": parseInt(this.invoiceGLAccountsData.glaccountId),
            "glaccountName": this.invoiceGLAccountsData.glaccountName,
            "comments": "",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": new Date().toISOString(),
            "amount": parseFloat(this.invoiceGLAccountsData.amount),
            "vatid": "",
            "vatamount": parseFloat(this.invoiceGLAccountsData.vatamount),
            "tax1Id": "",
            "tax1Amount": parseFloat(this.invoiceGLAccountsData.tax1Amount),
            "tax2Id": "",
            "tax2Amount": parseFloat(this.invoiceGLAccountsData.tax2Amount),
            "tax3Id": "",
            "tax3Amount": parseFloat(this.invoiceGLAccountsData.tax3Amount),
            "discountId": "",
            "discountAmount": parseFloat(this.invoiceGLAccountsData.discountAmount),
            "lineItemTotal": parseFloat(this.invoiceGLAccountsData.lineItemTotal),
            "form": false,
            "isDiscount": false,
            "isTax": false,
            "discountTypeId": "",
            "discountDirectAmt": parseFloat(this.invoiceGLAccountsData.discountDirectAmt)
        };
        this.invoiceGLAccountsArray.push(details);
        this.isFormInValid = underscore__WEBPACK_IMPORTED_MODULE_8__["some"](this.invoiceGLAccountsArray, item => {
            return !item.form;
        });
    }
    getFieldParams(event) {
        this.invoiceGLAccountsArray = event;
        this.isFormInValid = underscore__WEBPACK_IMPORTED_MODULE_8__["some"](this.invoiceGLAccountsArray, item => {
            return !item.form;
        });
        let subAmount = this.invoiceGLAccountsArray.map(item => item.lineItemTotal).reduce((a, b) => a + b);
        this.invoice.subAmount = parseFloat(subAmount).toFixed(2);
        let totalVatamount = this.invoiceGLAccountsArray.map(item => item.vatamount).reduce((a, b) => a + b);
        this.invoice.totalVatamount = parseFloat(totalVatamount).toFixed(2);
        let totalDiscount = this.invoiceGLAccountsArray.map(item => item.totalDiscount).reduce((a, b) => a + b);
        this.invoice.totalDiscount = parseFloat(totalDiscount).toFixed(2);
        this.invoice.custInvoiceAmount = (parseFloat(this.invoice.subAmount) + parseFloat(this.invoice.totalVatamount) - parseFloat(this.invoice.invoicefinaldiscount)).toFixed(2);
    }
    getCustTaxInvoiceParams(event) {
        if (event.isAdded) {
            if (!this.custInvoiceTaxArray.includes(event))
                this.custInvoiceTaxArray.push(event);
        }
        else {
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.vatTypeDataList, item => {
                if (item.lookupValueId == event.invoiceTaxId) {
                    item.custVatTypeAmount = 0;
                }
            });
            this.custInvoiceTaxArray = this.custInvoiceTaxArray.filter(item => {
                return item.custInvoiceId != event.custInvoiceId;
            });
        }
        this.vatTypeDataList.forEach(item => {
            var data = this.custInvoiceTaxArray.filter(invoice => {
                return item.lookupValueId == invoice.invoiceTaxId;
            });
            item.custVatTypeAmount = data.reduce((total, invoice) => {
                return total + invoice.invoiceTotalAmount;
            }, 0);
        });
    }
    onDiscountFinalChange(event) {
        if (event != null) {
            this.invoice.isFinalDiscount = true;
            this.invoice.finalDiscountTypeName = event.lookupValueName;
            this.invoice.invoicefinaldiscountId = event.lookupValueId.toString();
            this.onDiscountFinalAdded(this.invoice.invoicefinalinputdiscount);
        }
        else {
            this.invoice.isFinalDiscount = false;
            this.invoice.invoicefinalinputdiscount = 0;
            this.invoice.invoicefinaldiscount = 0;
            this.invoice.finalDiscountTypeName = "";
            this.invoice.invoicefinaldiscountId = "";
        }
        this.getFieldParams(this.invoiceGLAccountsArray);
    }
    onDiscountFinalAdded(value) {
        if (this.invoice.finalDiscountTypeName == '%') {
            this.calculateDiscountPercent(value);
        }
        else if (this.invoice.finalDiscountTypeName == 'Pesos') {
            this.calculateDiscountPeso(value);
        }
        else {
            this.invoice.invoicefinaldiscount = 0;
        }
    }
    calculateDiscountPercent(value) {
        var totalVatAmount = 0;
        underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.invoiceGLAccountsArray, item => {
            totalVatAmount = totalVatAmount + item.vatamount;
        });
        if (value != null) {
            var percent = parseFloat(value) / 100;
            this.invoice.invoicefinaldiscount = (this.invoice.subAmount + totalVatAmount) * percent;
        }
        else {
            this.invoice.invoicefinaldiscount = 0;
        }
        this.getFieldParams(this.invoiceGLAccountsArray);
    }
    calculateDiscountPeso(value) {
        if (value != null) {
            this.invoice.invoicefinaldiscount = parseFloat(value);
        }
        else {
            this.invoice.invoicefinaldiscount = 0;
        }
        this.getFieldParams(this.invoiceGLAccountsArray);
    }
    submitIncomeMultiInvoiceForm(form) {
        this.isInvoiceSubmitted = false;
        this.invoiceGLAccountsArray.map(item => {
            delete item.form;
            return item;
        });
        this.custInvoiceTaxArray.map(item => {
            delete item.isAdded;
            return item;
        });
        if (!this.isEditInvoice) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                "custInvoiceAmount": parseFloat(this.invoice.custInvoiceAmount),
                "custInvoiceDate": this.invoice.custInvoiceDate,
                "dueDate": this.invoice.dueDate,
                "tax1": 0,
                "tax2": 0,
                "tax3": 0,
                "isTax": this.invoice.isTax,
                "isRecurCustInvoice": this.invoice.isRecurCustInvoice,
                "isEmailSent": false,
                "isSmssent": false,
                "custInvoiceStatusId": 1,
                "postedBy": parseInt(this.cookieService.get('userId')),
                "postedOn": new Date().toISOString(),
                "billToPay": "",
                "comments": this.invoice.comments || "",
                "penaltyAmount": 0,
                "penaltyComment": "",
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
                "transReference1": "",
                "transReference2": "",
                "totalVatamount": 0,
                "totalOtherTaxes": 0,
                "totalDiscount": 0,
                "isDiscount": this.invoice.isDiscount,
                "subAmount": this.invoice.subAmount,
                "isFinalDiscount": this.invoice.isFinalDiscount,
                "invoicefinaldiscount": this.invoice.invoicefinaldiscount,
                "invoicefinalinputdiscount": this.invoice.invoicefinalinputdiscount,
                "invoicefinaldiscountId": this.invoice.invoicefinaldiscountId,
                "finalDiscountTypeName": this.invoice.finalDiscountTypeName,
                "serialNo": 0,
                "invoiceGLAccounts": this.invoiceGLAccountsArray,
                "custinvoiceTax": this.custInvoiceTaxArray
            };
            let params = {
                invoice: details
            };
            this.accountsService.addCustInvoice(params).subscribe((res) => {
                if (res.message) {
                    this.isInvoiceSubmitted = true;
                    this.sharedService.setAlertMessage("All Invoices added successfully");
                    this.router.navigate(['ams/income/subledger']);
                }
                else {
                    this.isInvoiceSubmitted = true;
                }
            }, error => {
                this.isInvoiceSubmitted = true;
            });
        }
        else {
            let details = {
                "custInvoiceId": this.invoice.custInvoiceId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                "custInvoiceAmount": parseFloat(this.invoice.custInvoiceAmount),
                "custInvoiceDate": this.invoice.custInvoiceDate,
                "dueDate": this.invoice.dueDate,
                "tax1": this.invoice.tax1,
                "tax2": this.invoice.tax2,
                "tax3": this.invoice.tax3,
                "isTax": this.invoice.isTax,
                "isRecurCustInvoice": this.invoice.isRecurCustInvoice,
                "isEmailSent": this.invoice.isEmailSent,
                "isSmssent": this.invoice.isSmssent,
                "custInvoiceStatusId": this.invoice.custInvoiceStatusId,
                "postedBy": parseInt(this.cookieService.get('userId')),
                "postedOn": this.invoice.postedOn,
                "billToPay": this.invoice.billToPay,
                "comments": this.invoice.comments,
                "penaltyAmount": this.invoice.penaltyAmount,
                "penaltyComment": this.invoice.penaltyComment,
                "isActive": this.invoice.isActive,
                "insertedBy": this.invoice.insertedBy,
                "insertedOn": this.invoice.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "transReference1": this.invoice.transReference1,
                "transReference2": this.invoice.transReference2,
                "totalVatamount": this.invoice.totalVatamount,
                "totalOtherTaxes": this.invoice.totalOtherTaxes,
                "totalDiscount": this.invoice.totalDiscount,
                "isDiscount": this.invoice.isDiscount,
                "subAmount": this.invoice.subAmount,
                "isFinalDiscount": this.invoice.isFinalDiscount,
                "invoicefinaldiscount": this.invoice.invoicefinaldiscount,
                "invoicefinalinputdiscount": this.invoice.invoicefinalinputdiscount,
                "invoicefinaldiscountId": this.invoice.invoicefinaldiscountId,
                "finalDiscountTypeName": this.invoice.finalDiscountTypeName,
                "serialNo": 0,
                "invoiceGLAccounts": this.invoiceGLAccountsArray,
                "custinvoiceTax": this.custInvoiceTaxArray
            };
            let params = {
                invoice: details
            };
            this.accountsService.updateCustInvoice(params).subscribe((res) => {
                if (res.message) {
                    this.isInvoiceSubmitted = true;
                    this.sharedService.setAlertMessage("All Invoices updated successfully");
                    this.router.navigate(['ams/income/subledger']);
                }
                else {
                    this.isInvoiceSubmitted = true;
                }
            }, error => {
                this.isInvoiceSubmitted = true;
            });
        }
    }
    isDeselectColumn() {
        return this.isEditInvoice ? 'deselect' : '';
    }
    getUnits() {
        let params = {
            apartmentBlockId: parseInt(this.apartmentBlockId)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.isBlockSelected = true;
            this.unitData = res;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.apartmentBlockUnitId = this.route.params['value'].id;
        this.invoice = {};
        this.invoice.isTax = false;
        this.invoice.isDiscount = false;
        this.invoice.subAmount = 0;
        this.invoice.totalVatamount = 0;
        this.invoice.totalDiscount = 0;
        this.invoice.custInvoiceAmount = 0;
        this.invoice.custInvoiceVatAmount = 0;
        this.invoice.custInvoiceAddVatAmount = 0;
        this.invoice.isFinalDiscount = false;
        this.invoice.invoicefinaldiscount = 0;
        this.invoice.invoicefinalinputdiscount = 0;
        this.invoice.invoicefinaldiscountId = "";
        this.invoice.finalDiscountTypeName = "";
        this.invoice.isRecurCustInvoice = true;
        this.invoice.custInvoiceDate = new Date().toISOString();
        this.invoiceGLAccountsData = {};
        this.invoiceGLAccountsData.glaccountId = "";
        this.invoiceGLAccountsData.glaccountName = "";
        this.invoiceGLAccountsData.vatid = "";
        this.invoiceGLAccountsData.discountId = "";
        this.invoiceGLAccountsData.amount = 0;
        this.invoiceGLAccountsData.isTax = false;
        this.invoiceGLAccountsData.isDiscount = false;
        this.invoiceGLAccountsData.discountAmount = 0;
        this.invoiceGLAccountsData.discountDirectAmt = 0;
        this.invoiceGLAccountsData.vatamount = 0;
        this.invoiceGLAccountsData.lineItemTotal = 0;
        this.invoiceGLAccountsData.comments = "";
        this.invoiceGLAccountsData.tax1Id = "";
        this.invoiceGLAccountsData.tax1Amount = 0;
        this.invoiceGLAccountsData.tax2Id = "";
        this.invoiceGLAccountsData.tax2Amount = 0;
        this.invoiceGLAccountsData.tax3Id = "";
        this.invoiceGLAccountsData.tax3Amount = 0;
        this.invoiceGLAccountsArray = [
            {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "invoiceId": 0,
                "glaccountId": parseInt(this.invoiceGLAccountsData.glaccountId),
                "glaccountName": this.invoiceGLAccountsData.glaccountName,
                "comments": "",
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
                "amount": parseFloat(this.invoiceGLAccountsData.amount),
                "vatid": "",
                "vatamount": parseFloat(this.invoiceGLAccountsData.vatamount),
                "tax1Id": "",
                "tax1Amount": parseFloat(this.invoiceGLAccountsData.tax1Amount),
                "tax2Id": "",
                "tax2Amount": parseFloat(this.invoiceGLAccountsData.tax2Amount),
                "tax3Id": "",
                "tax3Amount": parseFloat(this.invoiceGLAccountsData.tax3Amount),
                "discountId": "",
                "discountAmount": parseFloat(this.invoiceGLAccountsData.discountAmount),
                "lineItemTotal": parseFloat(this.invoiceGLAccountsData.lineItemTotal),
                "form": false,
                "isDiscount": false,
                "isTax": false,
                "discountTypeId": "",
                "discountDirectAmt": parseFloat(this.invoiceGLAccountsData.discountDirectAmt)
            },
            {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "invoiceId": 0,
                "glaccountId": parseInt(this.invoiceGLAccountsData.glaccountId),
                "glaccountName": this.invoiceGLAccountsData.glaccountName,
                "comments": "",
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
                "amount": parseFloat(this.invoiceGLAccountsData.amount),
                "vatid": "",
                "vatamount": parseFloat(this.invoiceGLAccountsData.vatamount),
                "tax1Id": "",
                "tax1Amount": parseFloat(this.invoiceGLAccountsData.tax1Amount),
                "tax2Id": "",
                "tax2Amount": parseFloat(this.invoiceGLAccountsData.tax2Amount),
                "tax3Id": "",
                "tax3Amount": parseFloat(this.invoiceGLAccountsData.tax3Amount),
                "discountId": "",
                "discountAmount": parseFloat(this.invoiceGLAccountsData.discountAmount),
                "lineItemTotal": parseFloat(this.invoiceGLAccountsData.lineItemTotal),
                "form": false,
                "isDiscount": false,
                "isTax": false,
                "discountTypeId": "",
                "discountDirectAmt": parseFloat(this.invoiceGLAccountsData.discountDirectAmt)
            }
        ];
        let dateParams = {
            LookupTypeId: 74
        };
        this.lookupService.getLookupValueByLookupTypeId(dateParams).subscribe((res) => {
            this.invoice.dueDate = moment__WEBPACK_IMPORTED_MODULE_9__().add(parseInt(res[0].lookupValueName), 'days');
        });
        let vatListParams = {
            LookupTypeId: 77
        };
        //VAT types
        this.lookupService.getLookupValueByLookupTypeId(vatListParams).subscribe((res) => {
            this.vatTypeDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.vatTypeDataList, item => {
                item.custVatTypeAmount = 0;
            });
        });
        let disListParams = {
            LookupTypeId: 88
        };
        //discount types
        this.lookupService.getLookupValueByLookupTypeId(disListParams).subscribe((res) => {
            this.discountFinalTypeDataList = res;
        });
        //for post single invoice
        if (this.route.params['value'].type == 'single' && this.route.params['value'].invoiceid == undefined) {
            this.invoiceGLAccountsArray.splice(0, 1);
            this.isSingleInvoice = true;
            this.isEditInvoice = false;
            this.isGeneralInvoice = false;
        }
        //for post multi invoice
        if (this.route.params['value'].type != 'single' && this.route.params['value'].invoiceid == undefined) {
            this.isSingleInvoice = false;
            this.isEditInvoice = false;
            this.isGeneralInvoice = false;
        }
        //for edit single and multi invoice
        if (this.route.params['value'].invoiceid != undefined) {
            this.isInvoiceSubmitted = false;
            this.isFormInValid = false;
            this.isEditInvoice = true;
            this.isGeneralInvoice = false;
            var params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                invoiceId: this.route.params['value'].invoiceid
            };
            this.accountsService.getCustInvoiceById(params).subscribe((res) => {
                this.invoice = res[0];
                this.invoiceGLAccountsArray = this.invoice.invoiceGLAccounts;
                this.invoiceGLAccountsArray.forEach(item => {
                    item.form = true;
                });
                this.custInvoiceTaxArray = this.invoice.custinvoiceTax;
                //getting vat amount list
                underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.vatTypeDataList, item => {
                    var totalVatAmount = 0;
                    underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.custInvoiceTaxArray, data => {
                        if (data.invoiceTaxId == item.lookupValueId) {
                            item.custVatTypeAmount = data.invoiceTotalAmount;
                        }
                    });
                });
                this.isInvoiceSubmitted = true;
            });
        }
        //for general invoice
        if (this.route.params['value'].type == undefined && this.route.params['value'].invoiceid == undefined) {
            this.isSingleInvoice = false;
            this.isEditInvoice = false;
            this.isGeneralInvoice = true;
            this.apartmentBlockUnitId = "";
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            //get apartment blocks
            this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
                this.blocksData = res;
            });
        }
        let accountListParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getIncomeTrackerSubLedgersByApartmentId(accountListParams).subscribe((res) => {
            this.accountDataList = res.filter(item => {
                return item.apartmentBlockUnitId == this.route.params['value'].id;
            });
            this.isAccountDataLoaded = true;
        });
    }
};
IncomePostMultiInvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
IncomePostMultiInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-post-multi-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-post-multi-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-post-multi-invoice.component.scss */ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], IncomePostMultiInvoiceComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1yZWNlaXB0cy1yZXZlcnNlL2luY29tZS1yZWNlaXB0cy1yZXZlcnNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: IncomeReceiptsReverseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeReceiptsReverseComponent", function() { return IncomeReceiptsReverseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let IncomeReceiptsReverseComponent = class IncomeReceiptsReverseComponent {
    constructor(accountsService, sharedService, cookieService) {
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isReceiptSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submitReverseIncomeReceiptsForm(form) {
        this.isReceiptSubmitted = false;
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": this.receipts.apartmentBlockUnitID,
            "amount": this.receipts.amount,
            "collectionId": this.receipts.collectionId,
            "invoiceId": this.receipts.invoiceId,
            "isEmailSent": this.receipts.isEmailSent,
            "isSmssent": this.receipts.isSmssent,
            "comment": this.receipts.comment,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString()
        };
        let params = {
            custCollectionReversal: details
        };
        this.accountsService.addCustCollectionReversal(params).subscribe((res) => {
            if (res.message) {
                this.isReceiptSubmitted = true;
                this.sharedService.setAlertMessage("Invoice reversed successfully");
            }
            else {
                this.isReceiptSubmitted = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            //this.isReceiptSubmitted = true;
            this.isError = true;
            this.alertMessage = "Some error occured";
        }, () => {
            this.isReceiptSubmitted = true;
            this.childEvent.emit(true);
        });
    }
    ngOnInit() {
    }
};
IncomeReceiptsReverseComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeReceiptsReverseComponent.prototype, "receipts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeReceiptsReverseComponent.prototype, "childEvent", void 0);
IncomeReceiptsReverseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-receipts-reverse',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-receipts-reverse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-receipts-reverse.component.scss */ "./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], IncomeReceiptsReverseComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1zZWN1cml0eS1kZXBvc2l0L2luY29tZS1zZWN1cml0eS1kZXBvc2l0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: IncomeSecurityDepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeSecurityDepositComponent", function() { return IncomeSecurityDepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");








let IncomeSecurityDepositComponent = class IncomeSecurityDepositComponent {
    constructor(route, dialog, accountsService, cookieService) {
        this.route = route;
        this.dialog = dialog;
        this.accountsService = accountsService;
        this.cookieService = cookieService;
        this.isDepositLoaded = false;
        this.securityDepositData = "";
        this.deposit = {};
        this.isEditDeposit = false;
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'SecurityDepositData');
    }
    onGlSearchFilter() {
        if (this.securityDepositData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.securityDepositData;
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
    getSecurityDepositParams(event) {
        this.reversePopOver.close();
        this.getSecurityDepositData();
    }
    addSecurityDeposit() {
        this.isEditDeposit = false;
        this.popOverSelector = '#addSecurityDepositElement';
        this.popOverPosition = 'bottom';
        this.popoverWidth = '600';
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    onSecurityDeposit(detail) {
        this.isEditDeposit = true;
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let transactionId = dataRecord.transactionId;
        this.deposit = dataRecord;
        this.popOverSelector = '#' + transactionId;
        this.popOverPosition = 'left';
        this.popoverWidth = '200';
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    getSecurityDepositData() {
        this.isDepositLoaded = false;
        let params = {
            blockUnitId: this.apartmentBlockUnitId,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getSecurityDepositByApartmentBlockUnitId(params).subscribe((res) => {
            var securityDepositDataList = res;
            this.gridSourceData = {
                localdata: securityDepositDataList,
                datatype: "array"
            };
            this.securityDepositDataList = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = securityDepositDataList.length;
            this.isDepositLoaded = true;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.apartmentBlockUnitId = parseInt(this.route.params['value'].id);
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Transaction Id',
                datafield: 'transactionId',
                width: 220,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Security Deposit Paid',
                datafield: 'creditAmount',
                cellsrenderer: cellsrenderer,
                minwidth: 180,
                renderer: columnrenderer
            }, {
                text: 'Deposit Reason',
                datafield: 'comments',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Amount Dedcuted/Used',
                datafield: 'debitAmount',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Reason for Deduction',
                datafield: 'comments2',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Secuirty Deposit Balance',
                datafield: 'balance',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    let elemId = this.securityDepositDataList.loadedData[row].transactionId;
                    console.log(elemId);
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" id="' + elemId + '" onClick="editSecurityDepositEvent(' + row + ')" ><i class="icon fa fa-pencil edit" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        this.getSecurityDepositData();
    }
};
IncomeSecurityDepositComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_6__["jqxGridComponent"])
], IncomeSecurityDepositComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_7__["jqxPopoverComponent"])
], IncomeSecurityDepositComponent.prototype, "reversePopOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onSecurityDeposit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeSecurityDepositComponent.prototype, "onSecurityDeposit", null);
IncomeSecurityDepositComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-security-deposit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-security-deposit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-security-deposit.component.scss */ "./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], IncomeSecurityDepositComponent);

let editSecurityDepositEvent = row => {
    let event = new CustomEvent('onSecurityDeposit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editSecurityDepositEvent = editSecurityDepositEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1zdWItbGVkZ2VyL2luY29tZS1zdWItbGVkZ2VyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts ***!
  \************************************************************************************************/
/*! exports provided: IncomeSubLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeSubLedgerComponent", function() { return IncomeSubLedgerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");









let IncomeSubLedgerComponent = class IncomeSubLedgerComponent {
    constructor(router, dialog, apartmentService, accountsService, cookieService) {
        this.router = router;
        this.dialog = dialog;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.cookieService = cookieService;
        this.isSubLedgerDataLoaded = false;
        this.subLedgerData = "";
        this.totalDueAmount = 0;
        this.netDueAmount = 0;
        this.filterSelected = "all";
        this.singleBlock = "Select Tower";
        this.params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
    }
    getDueAmount(value) {
        return value != 'Due' ? true : false;
    }
    getSelected(type) {
        return this.filterSelected == type ? 'selected' : '';
    }
    dialogClose() {
        this.dialogRef.close();
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'helpdeskData');
    }
    getAllBlockData() {
        this.filterSelected = 'all';
        this.singleBlock = "Select Block";
        var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getIncomeTrackerSubLedgersByApartmentId(params).subscribe((res) => {
            var subLedgerDataList = res;
            console.log(res);
            this.gridSourceData.localdata = subLedgerDataList;
            this.datagrid.updatebounddata('cells');
            this.calculateTotalAmount(subLedgerDataList);
        });
    }
    getSingleBlock(block) {
        this.filterSelected = 'single';
        this.singleBlock = block.apartmentBlockNumber;
        this.selectedBlockId = block.apartmentBlockId;
        this.accountsService.getIncomeTrackerSubLedgersByApartmentId(this.params).subscribe((res) => {
            var subLedgerDataList = res.filter(item => {
                return item.apartmentBlockNumber == this.singleBlock;
            });
            this.gridSourceData.localdata = subLedgerDataList;
            this.datagrid.updatebounddata('cells');
            this.calculateTotalAmount(subLedgerDataList);
        });
    }
    calculateTotalAmount(subLedgerDataList) {
        this.totalItems = subLedgerDataList.length;
        this.netDueAmount = 0;
        this.totalDueAmount = 0;
        underscore__WEBPACK_IMPORTED_MODULE_8__["each"](subLedgerDataList, (item, index) => {
            this.netDueAmount = this.netDueAmount + item.due;
            if (item.due >= 0)
                this.totalDueAmount = this.totalDueAmount + item.due;
        });
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    onViewHistory(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let apartmentBlockUnitId = dataRecord.apartmentBlockUnitId;
        this.router.navigateByUrl('/ams/income/view-invoice-history/' + apartmentBlockUnitId);
    }
    onShowSingleInvoice(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let apartmentBlockUnitId = dataRecord.apartmentBlockUnitId;
        this.router.navigateByUrl('/ams/income/post-multi-invoice/' + apartmentBlockUnitId + '/single');
    }
    onShowMultiInvoice(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let apartmentBlockUnitId = dataRecord.apartmentBlockUnitId;
        this.router.navigateByUrl('/ams/income/post-multi-invoice/' + apartmentBlockUnitId + '/multi');
    }
    onActions(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.router.navigateByUrl('/ams/income/actions/pay-invoice/' + dataRecord.apartmentBlockUnitId);
    }
    onGlSearchFilter() {
        if (this.subLedgerData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.subLedgerData;
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
    renderColumns() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Primary Contact',
                datafield: 'primayContact',
                width: 180,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Bill to Party',
                datafield: 'billToParty',
                width: 180,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Tower Unit',
                datafield: 'block_Unit',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Due',
                datafield: 'due',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'advance',
                datafield: 'advance',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'credits',
                datafield: 'credits',
                width: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Status',
                datafield: 'due_Indicator',
                width: 150,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell"><span class="dots rt-1 ' + getClassName(value) + '"></span>' + value + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: '',
                minwidth: 120,
                sortable: false,
                menu: false,
                cellclassname: 'action-cell',
                cellsrenderer: (row) => {
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="invoiceDropDown" aria-haspopup="true" aria-expanded="false">'
                        + '<span class="icon delete mr-2">'
                        + '<svg height="16" viewBox="-26 0 477 477.96064" width="16" xmlns="http://www.w3.org/2000/svg">'
                        + '<path fill="" d="m335.769531 235.914062v-127.589843c0-2.78125-1.15625-5.433594-3.191406-7.324219l-105.84375-98.324219c-1.847656-1.71875-4.28125-2.675781-6.804687-2.675781h-175.449219c-24.289063.0273438-43.972657 19.710938-44 44v335.792969c.027343 24.289062 19.710937 43.972656 44 44h155.382812c30.578125 45.125 87.140625 64.835937 139.140625 48.488281s87.109375-64.882812 86.363282-119.386719c-.746094-54.503906-37.167969-102.0625-89.597657-116.980469zm-105.097656-202.285156 70.976563 65.9375h-46.976563c-13.246094-.015625-23.984375-10.753906-24-24zm-186.191406 370.164063c-13.25-.015625-23.984375-10.753907-24-24v-335.792969c.015625-13.25 10.75-23.984375 24-24h166.191406v55.566406c.027344 24.289063 19.710937 43.972656 44 44h61.101563v112.417969c-34.90625-3.925781-69.832032 7.210937-96.023438 30.621094-26.191406 23.410156-41.160156 56.875-41.15625 92-.015625 16.925781 3.46875 33.671875 10.234375 49.1875zm257.503906 54.207031c-57.101563 0-103.394531-46.292969-103.394531-103.394531 0-57.101563 46.292968-103.394531 103.394531-103.394531 57.105469 0 103.394531 46.292968 103.394531 103.394531-.0625 57.078125-46.316406 103.328125-103.394531 103.394531zm0 0"/>'
                        + '<path fill="" d="m354.488281 342.945312h-40.84375v-40.84375c0-5.523437-4.476562-10-10-10-5.523437 0-10 4.476563-10 10v40.84375h-40.84375c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10h40.84375v46.375c0 5.523438 4.476563 10 10 10 5.523438 0 10-4.476562 10-10v-46.375h40.84375c5.523438 0 10-4.476562 10-10 0-5.519531-4.476562-10-10-10zm0 0"/>'
                        + '</svg>'
                        + '</span>'
                        + '</a>'
                        + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="invoiceDropDown">'
                        + '<a href="javascript:void(0)" onClick="showSingleInvoiceEvent(' + row + ')">Post Single Invoice</a>'
                        + '<a href="javascript:void(0)" onClick="showMultiInvoiceEvent(' + row + ')">Post Multi Invoice</a>'
                        + '</div>'
                        + '<a href="javascript:void(0)" class="btn action mr-2" onClick="actionEvent(' + row + ')">'
                        + 'Action'
                        + '</a>'
                        + '</div>';
                },
                renderer: columnrenderer
            }];
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.blockListData = res;
            var params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.accountsService.getIncomeTrackerSubLedgersByApartmentId(params).subscribe((res) => {
                this.isSubLedgerDataLoaded = true;
                this.filterSelected = 'all';
                this.singleBlock = "Select Block";
                var subLedgerDataList = res;
                this.gridSourceData = {
                    localdata: subLedgerDataList,
                    datatype: "array"
                };
                this.subLedgerDataList = new jqx.dataAdapter(this.gridSourceData);
                this.renderColumns();
                this.calculateTotalAmount(subLedgerDataList);
            });
        });
    }
};
IncomeSubLedgerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_6__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewInvoiceTypeRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IncomeSubLedgerComponent.prototype, "viewInvoiceTypeRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])
], IncomeSubLedgerComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onViewHistory', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeSubLedgerComponent.prototype, "onViewHistory", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onShowSingleInvoice', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeSubLedgerComponent.prototype, "onShowSingleInvoice", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onShowMultiInvoice', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeSubLedgerComponent.prototype, "onShowMultiInvoice", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onActions', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeSubLedgerComponent.prototype, "onActions", null);
IncomeSubLedgerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-sub-ledger',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-sub-ledger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html")).default,
        providers: [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_6__["AccountsService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-sub-ledger.component.scss */ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_6__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], IncomeSubLedgerComponent);

let getClassName = value => {
    return value != 'Due' ? 'high' : 'low';
};
window.getClassName = getClassName;
let viewHistoryEvent = row => {
    var event = new CustomEvent('onViewHistory', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.viewHistoryEvent = viewHistoryEvent;
let showSingleInvoiceEvent = row => {
    var event = new CustomEvent('onShowSingleInvoice', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.showSingleInvoiceEvent = showSingleInvoiceEvent;
let showMultiInvoiceEvent = row => {
    var event = new CustomEvent('onShowMultiInvoice', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.showMultiInvoiceEvent = showMultiInvoiceEvent;
let actionEvent = row => {
    var event = new CustomEvent('onActions', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.actionEvent = actionEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-tracker-ageing-wrapper .filter-box {\n  margin: 30px 0 0 0;\n  padding: 0;\n  border: 0;\n}\n.income-tracker-ageing-wrapper .filter-box li {\n  border-right: 1px solid #eaeaea;\n  margin: 0;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.income-tracker-ageing-wrapper .filter-box li p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #585858;\n}\n.income-tracker-ageing-wrapper .filter-box li.title {\n  cursor: auto;\n}\n.income-tracker-ageing-wrapper .filter-box li.title p {\n  color: #8391a1 !important;\n}\n.income-tracker-ageing-wrapper .filter-box li.title p .icon {\n  width: 18px;\n  height: 18px;\n}\n.income-tracker-ageing-wrapper .filter-box li:not(.title):hover, .income-tracker-ageing-wrapper .filter-box li.active {\n  background-color: #5cd694;\n}\n.income-tracker-ageing-wrapper .filter-box li:not(.title):hover p, .income-tracker-ageing-wrapper .filter-box li.active p {\n  color: #ffffff;\n}\n.income-tracker-ageing-wrapper .account-chart-card {\n  margin: 30px 0;\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box {\n  margin: 10px 0;\n  height: auto;\n  width: 300px;\n  float: left;\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .income-tracker-ageing-wrapper .account-chart-card .chart-box {\n    width: 235px;\n  }\n}\n@media (max-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .chart-box {\n    float: none;\n    width: auto;\n  }\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box canvas {\n  width: auto !important;\n  height: 100% !important;\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box.hide-chart {\n  overflow: hidden;\n  visibility: hidden;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list {\n  margin: 10px 0 0 0 !important;\n  text-align: center;\n}\n@media (max-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .legends-list {\n    text-align: left;\n    display: inline-block;\n    transform: translateX(-45%) !important;\n    position: relative;\n    left: 50%;\n  }\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li {\n  list-style: none;\n  margin: 0 !important;\n  padding: 8px 0;\n  overflow: auto;\n  width: 250px;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li div {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li div.title {\n  color: #373946;\n  float: left;\n  min-width: 180px !important;\n}\n@media (min-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .legends-list li div.title {\n    min-width: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1hZ2VpbmcvaW5jb21lLXRyYWNrZXItYWdlaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1hZ2VpbmcvaW5jb21lLXRyYWNrZXItYWdlaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0M7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSkY7QURLRTtFQUNDLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hIO0FESUc7RUV5QkQscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQW1DQSxpQkFBQTtFRjdERSxjR2dGTztBRjlFWDtBREFHO0VBQ0MsWUFBQTtBQ0VKO0FEREk7RUFDQyx5QkFBQTtBQ0dMO0FERks7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0lOO0FEQUc7RUFDQyx5QkdxQlM7QUZuQmI7QURESTtFQUNDLGNHc0ZHO0FGbkZSO0FERUM7RUFDQyxjQUFBO0FDQUY7QURDRTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSDtBREFHO0VBTEQ7SUFNRSxZQUFBO0VDR0Y7QUFDRjtBREZHO0VBUkQ7SUFTRSxXQUFBO0lBQ0EsV0FBQTtFQ0tGO0FBQ0Y7QURKRztFQUNDLHNCQUFBO0VBQ0EsdUJHK0dFO0FGekdOO0FESkc7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDTUo7QURIRTtFQUNDLDZCQUFBO0VBQ0Esa0JBQUE7QUNLSDtBREpHO0VBSEQ7SUFJRSxnQkFBQTtJQUNBLHFCQUFBO0lJNUJILHNDQUFBO0lKOEJNLGtCRzlERjtJSCtERSxTQUFBO0VDU0w7QUFDRjtBRFJHO0VBQ0MsZ0JBQUE7RUFDQSxvQkFBQTtFQUNHLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1VQO0FEVEk7RUU3QkYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBNkJBLGlCQUFBO0VGQ0csY0dwRVE7QUZpRmI7QURaSztFQUNDLGNHY0s7RUhiTCxXQUFBO0VBQ0EsMkJBQUE7QUNjTjtBRGJNO0VBSkQ7SUFLRSwwQkFBQTtFQ2dCTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXRyYWNrZXItYWdlaW5nL2luY29tZS10cmFja2VyLWFnZWluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIge1xuXHQuZmlsdGVyLWJveCB7XG5cdFx0bWFyZ2luOiAzMHB4IDAgMCAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdGxpIHtcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmV5LTQ1MDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHAge1xuXHRcdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHRjb2xvcjogJGdyZXktNzAwO1xuXHRcdFx0fVxuXHRcdFx0Ji50aXRsZSB7XG5cdFx0XHRcdGN1cnNvcjogYXV0bztcblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmOm5vdCgudGl0bGUpOmhvdmVyLCAmLmFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRjb2xvcjogJHdoaXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5hY2NvdW50LWNoYXJ0LWNhcmQge1xuXHRcdG1hcmdpbjogMzBweCAwO1xuXHRcdC5jaGFydC1ib3gge1xuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRcdHdpZHRoOiAyMzVweDtcblx0XHRcdH1cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0XHRmbG9hdDogbm9uZTtcblx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHR9XG5cdFx0XHRjYW52YXMge1xuXHRcdFx0XHR3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRoZWlnaHQ6ICRmdWxsO1xuXHRcdFx0fVxuXHRcdFx0Ji5oaWRlLWNoYXJ0IHtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQubGVnZW5kcy1saXN0IHtcblx0XHRcdG1hcmdpbjogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcdFx0XHRAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNDUlKSk7XG4gICAgXHRcdFx0cG9zaXRpb246ICRyZWw7XG4gICAgXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0fVxuXHRcdFx0bGkge1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBcdFx0XHRwYWRkaW5nOiA4cHggMDtcbiAgICBcdFx0XHRvdmVyZmxvdzogYXV0bztcbiAgICBcdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0QGluY2x1ZGUgaGVhZC1tZWRpdW07XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0XHRcdCYudGl0bGUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5maWx0ZXItYm94IGxpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhZWFlYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUgcCB7XG4gIGNvbG9yOiAjODM5MWExICFpbXBvcnRhbnQ7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUgcCAuaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGk6bm90KC50aXRsZSk6aG92ZXIsIC5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNkNjk0O1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5maWx0ZXItYm94IGxpOm5vdCgudGl0bGUpOmhvdmVyIHAsIC5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaS5hY3RpdmUgcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQge1xuICBtYXJnaW46IDMwcHggMDtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5jaGFydC1ib3gge1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmNoYXJ0LWJveCB7XG4gICAgd2lkdGg6IDIzNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmNoYXJ0LWJveCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5jaGFydC1ib3ggY2FudmFzIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAuY2hhcnQtYm94LmhpZGUtY2hhcnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAubGVnZW5kcy1saXN0IHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAubGVnZW5kcy1saXN0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDUlKSAhaW1wb3J0YW50O1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NSUpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NSUpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmxlZ2VuZHMtbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5sZWdlbmRzLWxpc3QgbGkgZGl2IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5sZWdlbmRzLWxpc3QgbGkgZGl2LnRpdGxlIHtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmxlZ2VuZHMtbGlzdCBsaSBkaXYudGl0bGUge1xuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: IncomeTrackerAgeingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerAgeingComponent", function() { return IncomeTrackerAgeingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let IncomeTrackerAgeingComponent = class IncomeTrackerAgeingComponent {
    constructor(accountsService, cookieService) {
        this.accountsService = accountsService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isChartLoaded = false;
        this.ageingData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isMobile = false;
        this.totalInvoices = 0;
        this.dataType = 'DueAge';
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
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format("MM-DD-YYYY");
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
    setDataType(type) {
        this.dataType = type;
        this.getAgeingData();
    }
    drawChart() {
        setTimeout(() => {
            this.isChartLoaded = true;
            var data = {
                labels: [
                    "0-30 Days",
                    "31-60 Days",
                    "61-90 Days",
                    "Over 90 Days"
                ],
                datasets: [
                    {
                        data: [parseInt(this.totalAmountItem1Percent), parseInt(this.totalAmountItem3Percent), parseInt(this.totalAmountItem4Percent), parseInt(this.totalAmountItem5Percent)],
                        backgroundColor: [
                            "#5bcc73",
                            "#00bcd4",
                            "#ff3638",
                            "#3f51b5"
                        ],
                        hoverBackgroundColor: [
                            "#5bcc73",
                            "#00bcd4",
                            "#ff3638",
                            "#3f51b5"
                        ]
                    }
                ]
            };
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartRef.nativeElement, {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true,
                    legend: {
                        display: false
                    },
                    cutoutPercentage: 60,
                    rotation: 120,
                    animation: {
                        onComplete: (e) => {
                        }
                    }
                }
            });
        }, 500);
    }
    getAgeingData() {
        this.totalAmountItem1 = 0;
        this.totalAmountItem3 = 0;
        this.totalAmountItem4 = 0;
        this.totalAmountItem5 = 0;
        this.totalAmount = 0;
        this.totalAmountItem1Percent = 0;
        this.totalAmountItem3Percent = 0;
        this.totalAmountItem4Percent = 0;
        this.totalAmountItem5Percent = 0;
        this.totalInvoices = 0;
        this.asOfDate = moment__WEBPACK_IMPORTED_MODULE_6__().format('MM-DD-YYYY'); // todays date
        var ageingParams = {
            ApartmentID: parseInt(this.cookieService.get('apartmentId')),
            asOfDate: this.asOfDate,
            type: this.dataType,
            AgeFrom1: 0,
            AgeTo1: 10,
            AgeFrom2: 11,
            AgeTo2: 30,
            AgeFrom3: 31,
            AgeTo3: 60,
            AgeFrom4: 61,
            AgeTo4: 90,
            AgeFrom5: 91,
            AgeTo5: null
        };
        this.isDataLoaded = false;
        this.isChartLoaded = false;
        this.accountsService.getArAgingCollectionDueSummary(ageingParams).subscribe((res) => {
            this.isDataLoaded = true;
            this.ageingDataDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_5__["each"](this.ageingDataDataList, item => {
                item.towerUnit = item.apartmentBlockNumber + ' ' + item.apartmentBlockUnitNumber;
            });
            this.totalItems = this.ageingDataDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            underscore__WEBPACK_IMPORTED_MODULE_5__["each"](this.ageingDataDataList, (item, index) => {
                this.totalInvoices = this.totalInvoices + item.bucketCount1 + item.bucketCount2 + item.bucketCount3 + item.bucketCount4 + item.bucketCount5;
                this.totalAmountItem1 = this.totalAmountItem1 + item.bucketAmt1 + item.bucketAmt2;
                this.totalAmountItem3 = this.totalAmountItem3 + item.bucketAmt3;
                this.totalAmountItem4 = this.totalAmountItem4 + item.bucketAmt4;
                this.totalAmountItem5 = this.totalAmountItem5 + item.bucketAmt5;
                this.totalAmount = this.totalAmountItem1 + this.totalAmountItem3 + this.totalAmountItem4 + this.totalAmountItem5;
                this.totalAmountItem1Percent = (this.totalAmountItem1 / this.totalAmount) * 100;
                this.totalAmountItem3Percent = (this.totalAmountItem3 / this.totalAmount) * 100;
                this.totalAmountItem4Percent = (this.totalAmountItem4 / this.totalAmount) * 100;
                this.totalAmountItem5Percent = (this.totalAmountItem5 / this.totalAmount) * 100;
                if (index == this.ageingDataDataList.length - 1) {
                    this.drawChart();
                }
                var unitParams = {
                    ApartmentID: parseInt(this.cookieService.get('apartmentId')),
                    asOfDate: this.asOfDate,
                    unitId: item.unitID
                };
                this.accountsService.getArAgingCollectionDueByUnitId(unitParams).subscribe((res) => {
                    item.invoiceDetails = res;
                }, error => {
                });
            });
        });
    }
    ngOnInit() {
        this.getAgeingData();
    }
    ngAfterViewInit() {
    }
};
IncomeTrackerAgeingComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('incomePieChart', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeTrackerAgeingComponent.prototype, "chartRef", void 0);
IncomeTrackerAgeingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-ageing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-ageing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-ageing.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], IncomeTrackerAgeingComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLWZpbHRlci9pbmNvbWUtdHJhY2tlci1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: IncomeTrackerFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerFilterComponent", function() { return IncomeTrackerFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);



let IncomeTrackerFilterComponent = class IncomeTrackerFilterComponent {
    constructor() {
        this.Object = Object;
        this.fieldParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onFilterFieldChange(data) {
        this.filterDataList = data;
    }
    getFilterData(key) {
        if (key == 'PostStartDate') {
            return this.getInvoiceDate(this.filter[key]);
        }
        else if (key == 'PostEndDate') {
            return this.getInvoiceDate(this.filter[key]);
        }
        else if (key == 'billNo') {
            return this.filter[key];
        }
        else if (key == 'receiptNo') {
            return this.filter[key];
        }
        else if (key == 'isReversed') {
            if (this.filter[key]) {
                return 'is Reverse';
            }
        }
        else if (key == 'isCreditNote') {
            if (this.filter[key]) {
                return 'is Credit Note';
            }
        }
    }
    removeFilterItem(item) {
        if (typeof item == 'string' || typeof item == 'number')
            this.filter[item] = null;
        else
            this.filter[item] = false;
        if (this.isFilterObjectNull()) {
            this.resetFilter();
            this.fieldParams.emit(this.filter);
        }
    }
    isFilterObjectNull() {
        for (var key in this.filter) {
            if (this.filter[key] != null && this.filter[key] != "") {
                return false;
            }
        }
        return true;
    }
    getInvoiceDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_2__(date).format("MM-DD-YYYY");
    }
    clearFilterItems() {
        this.resetFilter();
        this.fieldParams.emit(this.filter);
    }
    submitIncomeFilterForm(form) {
        this.fieldParams.emit(this.filter);
    }
    isItem(key) {
        return !this.filter[key] || this.filter[key] == null ? false : true;
    }
    resetFilter() {
        this.filter = {};
        this.filter.isReversed = null;
        this.filter.isCreditNote = null;
        this.filter.PostStartDate = null;
        this.filter.PostEndDate = null;
        this.filter.billNo = null;
        this.filter.receiptNo = null;
    }
    ngOnInit() {
        this.resetFilter();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], IncomeTrackerFilterComponent.prototype, "fieldParams", void 0);
IncomeTrackerFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-filter.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IncomeTrackerFilterComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.scss ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXJlcG9ydHMvaW5jb21lLXRyYWNrZXItcmVwb3J0cy1jdXN0b21lci9pbmNvbWUtdHJhY2tlci1yZXBvcnRzLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts ***!
  \***************************************************************************************************************************************************/
/*! exports provided: IncomeTrackerReportsCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerReportsCustomerComponent", function() { return IncomeTrackerReportsCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let IncomeTrackerReportsCustomerComponent = class IncomeTrackerReportsCustomerComponent {
    constructor(apartmentService, accountsService, sharedService, lookupService, cookieService) {
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.glAccountIndicator = "Cust_Invoice";
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 8;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isReportSubmitted = true;
        this.isDataLoaded = true;
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
    getUnits(id) {
        let params = {
            apartmentBlockId: parseInt(id)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.blockUnitData = res;
            this.isBlockSelected = true;
        });
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
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("MM-DD-YYYY");
    }
    getDateFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
    }
    getTimeFormat(dateTime) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(dateTime).format("YYYY-MM-DD HH:mm");
    }
    submitIncomeReportsCustomerForm(form) {
        this.isReportSubmitted = true;
        this.isDataLoaded = false;
        let details = {
            BlockID: parseInt(this.report.apartmentBlockId),
            ApartmentBlockUnitId: parseInt(this.report.apartmentBlockUnitId),
            DocumentdateFrom: this.getDateFormat(this.report.documentDateFrom),
            DocumentdateTo: this.getDateFormat(this.report.documentDateTo),
            PostingdateFrom: this.getDateFormat(this.report.PostingdateFrom),
            PostingdateTo: this.getDateFormat(this.report.PostingdateTo),
            GLaccountID: parseInt(this.report.GLaccountID),
            GLDocumentTypeID: 142,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getCustGltransactionsMultiFilter(details).subscribe((res) => {
            this.reportsDataList = res;
            this.totalItems = this.reportsDataList.length;
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
        this.report.GLaccountID = "";
        this.report.GLDocumentTypeID = "";
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blockData = res;
        });
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            this.glAccountsDataList = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
        });
        let glDocParams = {
            LookupTypeId: 31
        };
        //Gl Document 
        this.lookupService.getLookupValueByLookupTypeId(glDocParams).subscribe((res) => {
            this.glDocumentTypeDataList = res;
        }, error => {
        });
    }
};
IncomeTrackerReportsCustomerComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
IncomeTrackerReportsCustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-reports-customer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-reports-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-reports-customer.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeTrackerReportsCustomerComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.scss ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXJlcG9ydHMvaW5jb21lLXRyYWNrZXItcmVwb3J0cy12ZW5kb3IvaW5jb21lLXRyYWNrZXItcmVwb3J0cy12ZW5kb3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: IncomeTrackerReportsVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerReportsVendorComponent", function() { return IncomeTrackerReportsVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let IncomeTrackerReportsVendorComponent = class IncomeTrackerReportsVendorComponent {
    constructor(apartmentService, vendorService, accountsService, sharedService, lookupService, cookieService) {
        this.apartmentService = apartmentService;
        this.vendorService = vendorService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.glAccountIndicator = "Liability";
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 8;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isReportSubmitted = true;
        this.isDataLoaded = true;
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
    getDate(date) {
        if (date != null)
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
        else
            return "";
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
    getDateFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD");
    }
    getTimeFormat(dateTime) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(dateTime).format("YYYY-MM-DD HH:mm");
    }
    submitIncomeReportsVendorForm(form) {
        this.isReportSubmitted = true;
        this.isDataLoaded = false;
        let details = {
            BlockID: null,
            DocumentdateFrom: this.getDateFormat(this.report.documentDateFrom),
            DocumentdateTo: this.getDateFormat(this.report.documentDateTo),
            PostingdateFrom: this.getDateFormat(this.report.PostingdateFrom),
            PostingdateTo: this.getDateFormat(this.report.PostingdateTo),
            VendorId: parseInt(this.report.vendorId),
            GLaccountID: parseInt(this.report.GLaccountID),
            GLDocumentTypeID: 149,
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getVendorGltransactionsMultiFilter(details).subscribe((res) => {
            this.reportsDataList = res;
            this.totalItems = this.reportsDataList.length;
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
        this.report.vendorId = "";
        this.report.GLaccountID = "";
        this.report.GLDocumentTypeID = "";
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blockData = res;
        });
        let vendorParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendorService.getVendorByApartmentId(vendorParams).subscribe((res) => {
            this.vendorData = res;
        });
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            this.glAccountsDataList = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
        });
        let glDocParams = {
            LookupTypeId: 31
        };
        //Gl Document 
        this.lookupService.getLookupValueByLookupTypeId(glDocParams).subscribe((res) => {
            this.glDocumentTypeDataList = res;
        }, error => {
        });
    }
};
IncomeTrackerReportsVendorComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__["VendorService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
IncomeTrackerReportsVendorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-reports-vendor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-reports-vendor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-reports-vendor.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__["VendorService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], IncomeTrackerReportsVendorComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXJlcG9ydHMvaW5jb21lLXRyYWNrZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IncomeTrackerReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerReportsComponent", function() { return IncomeTrackerReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IncomeTrackerReportsComponent = class IncomeTrackerReportsComponent {
    constructor() {
        this.isDataLoaded = true;
    }
    ngOnInit() {
        this.reportsDataList = [
            { lookupValueName: 'Customer Journal Report', description: 'Gives the overall residents in the condo', type: 'customer' },
        ];
    }
};
IncomeTrackerReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-reports.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IncomeTrackerReportsComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.scss ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card.table-card .card-body {\n  overflow: hidden;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\nheader {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.colname th,\ntd {\n  padding: 14px 10px 14px 10px;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.effective-date {\n  border-color: rgba(0, 0, 0, 0.42);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: unset;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.stock-date {\n  border-color: rgba(0, 0, 0, 0.42);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: unset;\n}\n\n.save-icon {\n  padding-left: 7px;\n  padding-top: 27px;\n}\n\n.fa-floppy-o {\n  color: #54b941;\n}\n\n.cus-input {\n  border-radius: 8px;\n  border: 1px solid #dadada;\n  padding-left: 10px;\n  height: 30px;\n}\n\n.save-icon {\n  padding-left: 7px;\n  padding-top: 27px;\n}\n\n.fa-times {\n  color: #ff3638;\n}\n\n.search-left {\n  left: 2px !important;\n}\n\n.pad-top {\n  padding-top: 22px;\n}\n\n@media only screen and (min-width: 300px) and (max-width: 767px) {\n  .card.table-card .card-body {\n    overflow: scroll;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC1hdXRvLWludm9pY2luZy9pbmNvbWUtdHJhY2tlci1zZXR1cC1hdXRvLWludm9pY2luZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXRyYWNrZXItc2V0dXAvaW5jb21lLXRyYWNrZXItc2V0dXAtYXV0by1pbnZvaWNpbmcvaW5jb21lLXRyYWNrZXItc2V0dXAtYXV0by1pbnZvaWNpbmcuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHRTtFQUNFLFdBQUE7QUNBSjs7QURHRTtFQUNFLFVBQUE7QUNBSjs7QURHRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdFO0VBQ0UsYUFBQTtBQ0FKOztBREdFOzs7RUFHRSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHRTs7RUFFRSw0QkFBQTtBQ0FKOztBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHRTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUU7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7QUNDSjs7QURFRTs7O0VBR0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FEQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0VKOztBREVFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0U3RVE7QUQrRVY7O0FEQUE7RUFDRSxrQkFBQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDSUY7O0FEREE7RUFDQyxjRS9IVTtBRG1JWDs7QURGQTtFQUNFLG9CQUFBO0FDS0Y7O0FERkE7RUFDRSxpQkFBQTtBQ0tGOztBREhFO0VBRUU7SUFDQSxnQkFBQTtFQ0tGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC1hdXRvLWludm9pY2luZy9pbmNvbWUtdHJhY2tlci1zZXR1cC1hdXRvLWludm9pY2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvZm9udHMuc2Nzcyc7XG4uY2FyZC50YWJsZS1jYXJkIC5jYXJkLWJvZHkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC53ZC0xMDAge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAud2QtNTAge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbiAgXG4gIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIH1cbiAgXG4gIG1hdC1pY29uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gIC5hY3Rpb24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAudGFibGUge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC50YWJsZSB0Ym9keSB0ciB0ZCxcbiAgLnRhYmxlIHRoZWFkIHRoLFxuICAudGFibGUgdGhlYWQge1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICB9XG4gIFxuICAuY29sbmFtZSB0aCxcbiAgdGQge1xuICAgIHBhZGRpbmc6IDE0cHggMTBweCAxNHB4IDEwcHg7XG4gIH1cbiAgXG4gIHNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuICBcbiAgLmVmZmVjdGl2ZS1kYXRle1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwuNDIpO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gIH1cblxuICBtYXQtaWNvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICAuYWN0aW9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLnRhYmxlIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG4gIFxuICAudGFibGUgdGJvZHkgdHIgdGQsXG4gIC50YWJsZSB0aGVhZCB0aCxcbiAgLnRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTJlNjtcbiAgfVxuICBcbiAgLm91dHB1dCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICBcbiAgLmRlbGV0ZSB7XG4gICAgY29sb3I6IHJlZCAgO1xuICB9XG4gIFxuICAuZG9uZSB7XG4gICAgY29sb3I6IGdyZWVuO1xuICB9XG4gIFxuICAuZWRpdCB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgfVxuICBzcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIFxuICB9XG4gIFxuICAuc3RvY2stZGF0ZXtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjQyKTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgfVxuXG4gIGlucHV0OmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XG59XG4uc2F2ZS1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7IFxuICBwYWRkaW5nLXRvcDogMjdweDtcbn1cblxuLmZhLWZsb3BweS1ve1xuICBjb2xvcjogJG0tZ3JlZW4gO1xufVxuLmN1cy1pbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWRhZGE7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5zYXZlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDdweDsgXG4gIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuXG4uZmEtdGltZXN7XG4gY29sb3I6ICRzLXJlZC0wMjtcbn1cbi5zZWFyY2gtbGVmdHtcbiAgbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWQtdG9we1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLnRhYmxlLWNhcmQgeyBcbiAgICAuY2FyZC1ib2R5IHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuIH1cbiAgfVxufSIsIi5jYXJkLnRhYmxlLWNhcmQgLmNhcmQtYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53ZC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUgdGJvZHkgdHIgdGQsXG4udGFibGUgdGhlYWQgdGgsXG4udGFibGUgdGhlYWQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uY29sbmFtZSB0aCxcbnRkIHtcbiAgcGFkZGluZzogMTRweCAxMHB4IDE0cHggMTBweDtcbn1cblxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmVmZmVjdGl2ZS1kYXRlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xufVxuXG5tYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB0Ym9keSB0ciB0ZCxcbi50YWJsZSB0aGVhZCB0aCxcbi50YWJsZSB0aGVhZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5vdXRwdXQge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uZGVsZXRlIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmRvbmUge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5lZGl0IHtcbiAgY29sb3I6IHllbGxvdztcbn1cblxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLnN0b2NrLWRhdGUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogdW5zZXQ7XG59XG5cbi5zYXZlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59XG5cbi5mYS1mbG9wcHktbyB7XG4gIGNvbG9yOiAjNTRiOTQxO1xufVxuXG4uY3VzLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGFkYWRhO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnNhdmUtaWNvbiB7XG4gIHBhZGRpbmctbGVmdDogN3B4O1xuICBwYWRkaW5nLXRvcDogMjdweDtcbn1cblxuLmZhLXRpbWVzIHtcbiAgY29sb3I6ICNmZjM2Mzg7XG59XG5cbi5zZWFyY2gtbGVmdCB7XG4gIGxlZnQ6IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucGFkLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAyMnB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQudGFibGUtY2FyZCAuY2FyZC1ib2R5IHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG59IiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.ts":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.ts ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: IncomeTrackerSetupAutoInvoicingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerSetupAutoInvoicingComponent", function() { return IncomeTrackerSetupAutoInvoicingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");









let IncomeTrackerSetupAutoInvoicingComponent = class IncomeTrackerSetupAutoInvoicingComponent {
    constructor(accountsService, lookupService, sharedService, cookieService, fb, apartmentService, injector) {
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.fb = fb;
        this.apartmentService = apartmentService;
        this.injector = injector;
        this.isAutoInvoicingDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.autoInvoicingData = [];
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.row = {};
        this.deleteType = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
        }
        else
            return '';
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    addAutoinvoiceConfig(data) {
        let reqObj = {};
        reqObj = {
            "id": data.id,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "tower": data.tower,
            "category": "string",
            "glaccountId": data.glaccountId,
            "feeperSqftpermonth": data.feeperSqftpermonth,
            "fixedFee": data.fixedFee,
            "vatId": data.vatId,
            "taxId": data.taxId,
            "active": true,
            "effectiveDate": data.effectiveDate,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString,
        };
        let params = {};
        params.autoinvoiceConfig = reqObj;
        this.accountsService.addAutoinvoiceConfig(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Auto invoice config added successfully");
                this.row = {};
                this.getAutoinvoiceConfigByApartmentId();
            }
        });
    }
    updateAutoinvoiceConfig(data) {
        let reqObj = {};
        reqObj = {
            "id": data.id,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "tower": data.tower,
            "category": "string",
            "glaccountId": data.glaccountId,
            "feeperSqftpermonth": parseInt(data.feeperSqftpermonth),
            "fixedFee": parseInt(data.fixedFee),
            "vatId": parseInt(data.vatId),
            "taxId": parseInt(data.taxId),
            "active": true,
            "effectiveDate": data.effectiveDate,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString,
        };
        let params = {};
        params.autoinvoiceConfig = reqObj;
        this.accountsService.updateAutoinvoiceConfig(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Auto invoice config Updated successfully");
                this.isEditRow = false;
                this.updateAutoInvoiceIndex = -1;
                this.row = {};
                this.getAutoinvoiceConfigByApartmentId();
            }
        });
    }
    getAutoinvoiceConfigByApartmentId() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
        };
        this.accountsService.getAutoinvoiceConfigByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                this.autoInvoicingData = res && res.length > 0 ? res : [];
                console.log("auto invoice ", this.autoInvoicingData);
                this.totalItems = this.autoInvoicingData.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
            }
        });
    }
    getGlAccountsIdbyGlAccountTypeId() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            GLAccountTypeId: 165
        };
        this.accountsService.getGlAccountsIdbyGlAccountTypeId(queryParamBase).subscribe((res) => {
            if (res) {
                this.glAccountList = res ? res : [];
                console.log(this.glAccountList);
            }
        });
    }
    getApartmentBlockByApartmentId() {
        let blockListParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockListParams).subscribe((res) => {
            this.blockDataList = res ? res : [];
        });
    }
    deleteRow(index, data) {
        this.deleteType = true;
        console.log("data.id", data);
        this.modalService.showConfirmModal(data.id);
    }
    ngOnInit() {
        this.isAutoInvoicingDataLoaded = true;
        this.getApartmentBlockByApartmentId();
        //VAT
        let vatListParams = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 77
        };
        this.lookupService.getLookupValueByLookupTypeId(vatListParams).subscribe((res) => {
            this.vatPecentageDataList = res.filter(item => {
                return item.isActive;
            });
        });
        //TAx
        let taxListParams = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 183
        };
        this.lookupService.getLookupValueByLookupTypeId(taxListParams).subscribe((res) => {
            this.taxPecentageDataList = res.filter(item => {
                return item.isActive;
            });
        });
        this.getGlAccountsIdbyGlAccountTypeId();
        setTimeout(() => {
            this.getAutoinvoiceConfigByApartmentId();
        }, 1000);
        //DeleteRow
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            console.log("id", id);
            if (id != null) {
                if (this.deleteType) {
                    let deleteparam = {};
                    deleteparam = {
                        apartmentId: this.cookieService.get('apartmentId'),
                        Id: id,
                        deleteBy: parseInt(this.cookieService.get('userId'))
                    };
                    this.accountsService.deleteAutoinvoiceConfig(deleteparam).subscribe((res) => {
                        if (res.message) {
                            this.getAutoinvoiceConfigByApartmentId();
                            setTimeout(() => {
                                this.sharedService.setAlertMessage("Auto invoicing deleted successfully");
                                this.sharedService.setUnitListDeleteIndex(null);
                            }, 500);
                        }
                        else {
                            this.sharedService.setAlertMessage(res.errorMessage);
                        }
                        this.deleteType = true;
                    }, error => {
                        console.log(error);
                    });
                }
            }
        });
    }
};
IncomeTrackerSetupAutoInvoicingComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
IncomeTrackerSetupAutoInvoicingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-setup-auto-invoicing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-setup-auto-invoicing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-setup-auto-invoicing.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], IncomeTrackerSetupAutoInvoicingComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.scss ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-tracker-setup-wrapper .input-box, .income-tracker-setup-wrapper .select-box {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.2rem;\n  color: #585858;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.income-tracker-setup-wrapper .input-box .input-wrapper, .income-tracker-setup-wrapper .select-box .input-wrapper {\n  width: 100% !important;\n  position: relative;\n}\n.income-tracker-setup-wrapper .input-box .input-wrapper .clear-icon, .income-tracker-setup-wrapper .select-box .input-wrapper .clear-icon {\n  position: absolute;\n  right: 10px;\n  top: 9px;\n  color: #d7573d;\n  width: 18px;\n  cursor: pointer;\n}\n.income-tracker-setup-wrapper .input-box .btn-list, .income-tracker-setup-wrapper .select-box .btn-list {\n  margin: 0 0 0 10px;\n  display: inline-flex;\n}\n.income-tracker-setup-wrapper .input-box .btn-list a, .income-tracker-setup-wrapper .select-box .btn-list a {\n  min-width: auto;\n  padding: 4px 8px;\n  margin: 0;\n  height: 38px;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease;\n  border: 1px solid #c5c6c7;\n}\n.income-tracker-setup-wrapper .input-box .btn-list a .icon, .income-tracker-setup-wrapper .select-box .btn-list a .icon {\n  margin: 0;\n  color: #585858;\n  width: 18px;\n}\n.income-tracker-setup-wrapper .input-box .btn-list a .icon.view, .income-tracker-setup-wrapper .select-box .btn-list a .icon.view {\n  width: 16px;\n}\n.income-tracker-setup-wrapper .input-box .btn-list a .icon.edit, .income-tracker-setup-wrapper .select-box .btn-list a .icon.edit {\n  width: 14px;\n}\n.income-tracker-setup-wrapper .input-box .btn-list a:hover, .income-tracker-setup-wrapper .select-box .btn-list a:hover {\n  border: 1px solid #a4afba;\n  transition: all 0.3s ease;\n}\n.income-tracker-setup-wrapper .input-box .btn-list a[aria-expanded=true], .income-tracker-setup-wrapper .select-box .btn-list a[aria-expanded=true] {\n  background-color: #f5f5f5;\n}\n.income-tracker-setup-wrapper .input-box .btn-list .dropdown-menu, .income-tracker-setup-wrapper .select-box .btn-list .dropdown-menu {\n  margin: 4px 0 0 0;\n  padding: 0;\n  border: 1px solid #e6e6e6;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  -moz-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  -webkit-box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n}\n.income-tracker-setup-wrapper .input-box .btn-list .dropdown-menu li, .income-tracker-setup-wrapper .select-box .btn-list .dropdown-menu li {\n  color: #8391a1;\n  margin: 0;\n  padding: 8px 10px;\n  border: 0;\n  border-bottom: 1px solid #dee2e6;\n  font-size: 1.4rem;\n}\n.income-tracker-setup-wrapper .input-box .btn-list .dropdown-menu li:last-child, .income-tracker-setup-wrapper .select-box .btn-list .dropdown-menu li:last-child {\n  border-bottom: none;\n}\n.income-tracker-setup-wrapper .input-box .btn-list .dropdown-menu li .icon, .income-tracker-setup-wrapper .select-box .btn-list .dropdown-menu li .icon {\n  float: right;\n  width: 14px;\n  color: #d7573d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC1nZW5lcmFsL2luY29tZS10cmFja2VyLXNldHVwLWdlbmVyYWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC1nZW5lcmFsL2luY29tZS10cmFja2VyLXNldHVwLWdlbmVyYWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1FO0VDdURBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxpQkFBQTtFRHJFRSxjRXdGTztFRnZGUCx5QkFBQTtFQUNBLHFCQUFBO0FHREo7QUhFSTtFQUNFLHNCRXVKQTtFRnRKQSxrQkVURDtBQ1NMO0FIQ007RUFDRSxrQkVaSDtFRmFHLFdBQUE7RUFDQSxRQUFBO0VBQ0EsY0VFQTtFRkRBLFdBQUE7RUFDQSxlQUFBO0FHQ1I7QUhFSTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7QUdBTjtBSENNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUlTUCx5QkpSTztFQUNBLHlCQUFBO0FHR1I7QUhGUTtFQUNFLFNBQUE7RUFDQSxjRTBEQztFRnpERCxXQUFBO0FHSVY7QUhIVTtFQUNFLFdBQUE7QUdLWjtBSEhVO0VBQ0UsV0FBQTtBR0taO0FIRlE7RUFDRSx5QkFBQTtFSU5ULHlCSk9TO0FHTVY7QUhKUTtFQUNFLHlCRXlEQztBQ25EWDtBSEhNO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUlwQ04saUZKcUNNO0VJcENOLHNGSm9DTTtFSW5DTix5RkptQ007QUdPUjtBSE5RO0VBQ0ksY0VuREM7RUZvREQsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VDWVYsaUJBQUE7QUVIRjtBSFBZO0VBQ0UsbUJBQUE7QUdTZDtBSFBZO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjRXJETjtBQzhEUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXNldHVwL2luY29tZS10cmFja2VyLXNldHVwLWdlbmVyYWwvaW5jb21lLXRyYWNrZXItc2V0dXAtZ2VuZXJhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvZm9udHMuc2Nzc1wiO1xuXG5cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIHtcbiAgLmlucHV0LWJveCwgLnNlbGVjdC1ib3gge1xuICAgIEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcbiAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXRpbnkpO1xuICAgIGNvbG9yOiAkZ3JleS03MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC40cHg7XG4gICAgLmlucHV0LXdyYXBwZXIge1xuICAgICAgd2lkdGg6ICRmdWxsO1xuICAgICAgcG9zaXRpb246ICRyZWw7XG4gICAgICAuY2xlYXItaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiAkYWJzO1xuICAgICAgICByaWdodDogMTBweDtcbiAgICAgICAgdG9wOiA5cHg7XG4gICAgICAgIGNvbG9yOiAkbS1yZWQ7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4tbGlzdCB7XG4gICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgIGEge1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuM3MgZWFzZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRncmV5LTQ4MDtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBjb2xvcjogJGdyZXktNzAwO1xuICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgICYudmlldyB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5lZGl0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGdyZXktNDYwLCAyMCUpO1xuICAgICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuM3MgZWFzZSk7XG4gICAgICAgIH1cbiAgICAgICAgJlthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktMjUwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIG1hcmdpbjogNHB4IDAgMCAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKCRibGFjaywgOTAlKTtcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDRweCA2cHggLTFweCByZ2JhKCRibGFjaywuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoJGJsYWNrLC4wNikpO1xuICAgICAgICBsaSB7XG4gICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS00NjA7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAkbS1yZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiRkLWN5YW4tMDM6IzAwZDFmYTtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpbWUtZ3JlZW4tMDM6ICM1MmM1NzA7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LW1lZGl1bS0wNDozMDtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LWJhc2UtMDI6MTE7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7XG5cbiIsIi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3gsIC5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5zZWxlY3QtYm94IHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICM1ODU4NTg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbn1cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3ggLmlucHV0LXdyYXBwZXIsIC5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5zZWxlY3QtYm94IC5pbnB1dC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLmlucHV0LWJveCAuaW5wdXQtd3JhcHBlciAuY2xlYXItaWNvbiwgLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLnNlbGVjdC1ib3ggLmlucHV0LXdyYXBwZXIgLmNsZWFyLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDlweDtcbiAgY29sb3I6ICNkNzU3M2Q7XG4gIHdpZHRoOiAxOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5jb21lLXRyYWNrZXItc2V0dXAtd3JhcHBlciAuaW5wdXQtYm94IC5idG4tbGlzdCwgLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLnNlbGVjdC1ib3ggLmJ0bi1saXN0IHtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3ggLmJ0bi1saXN0IGEsIC5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5zZWxlY3QtYm94IC5idG4tbGlzdCBhIHtcbiAgbWluLXdpZHRoOiBhdXRvO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMzhweDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1YzZjNztcbn1cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3ggLmJ0bi1saXN0IGEgLmljb24sIC5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5zZWxlY3QtYm94IC5idG4tbGlzdCBhIC5pY29uIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzU4NTg1ODtcbiAgd2lkdGg6IDE4cHg7XG59XG4uaW5jb21lLXRyYWNrZXItc2V0dXAtd3JhcHBlciAuaW5wdXQtYm94IC5idG4tbGlzdCBhIC5pY29uLnZpZXcsIC5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5zZWxlY3QtYm94IC5idG4tbGlzdCBhIC5pY29uLnZpZXcge1xuICB3aWR0aDogMTZweDtcbn1cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3ggLmJ0bi1saXN0IGEgLmljb24uZWRpdCwgLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLnNlbGVjdC1ib3ggLmJ0bi1saXN0IGEgLmljb24uZWRpdCB7XG4gIHdpZHRoOiAxNHB4O1xufVxuLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLmlucHV0LWJveCAuYnRuLWxpc3QgYTpob3ZlciwgLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLnNlbGVjdC1ib3ggLmJ0bi1saXN0IGE6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjYTRhZmJhO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3ggLmJ0bi1saXN0IGFbYXJpYS1leHBhbmRlZD10cnVlXSwgLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLnNlbGVjdC1ib3ggLmJ0bi1saXN0IGFbYXJpYS1leHBhbmRlZD10cnVlXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG4uaW5jb21lLXRyYWNrZXItc2V0dXAtd3JhcHBlciAuaW5wdXQtYm94IC5idG4tbGlzdCAuZHJvcGRvd24tbWVudSwgLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLnNlbGVjdC1ib3ggLmJ0bi1saXN0IC5kcm9wZG93bi1tZW51IHtcbiAgbWFyZ2luOiA0cHggMCAwIDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xufVxuLmluY29tZS10cmFja2VyLXNldHVwLXdyYXBwZXIgLmlucHV0LWJveCAuYnRuLWxpc3QgLmRyb3Bkb3duLW1lbnUgbGksIC5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5zZWxlY3QtYm94IC5idG4tbGlzdCAuZHJvcGRvd24tbWVudSBsaSB7XG4gIGNvbG9yOiAjODM5MWExO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDhweCAxMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3ggLmJ0bi1saXN0IC5kcm9wZG93bi1tZW51IGxpOmxhc3QtY2hpbGQsIC5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5zZWxlY3QtYm94IC5idG4tbGlzdCAuZHJvcGRvd24tbWVudSBsaTpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5pbmNvbWUtdHJhY2tlci1zZXR1cC13cmFwcGVyIC5pbnB1dC1ib3ggLmJ0bi1saXN0IC5kcm9wZG93bi1tZW51IGxpIC5pY29uLCAuaW5jb21lLXRyYWNrZXItc2V0dXAtd3JhcHBlciAuc2VsZWN0LWJveCAuYnRuLWxpc3QgLmRyb3Bkb3duLW1lbnUgbGkgLmljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiAxNHB4O1xuICBjb2xvcjogI2Q3NTczZDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBmbGlwKCRkaXJlY3Rpb24pIHtcbiAgdHJhbnNmb3JtIDogcm90YXRlWSgkZGlyZWN0aW9uKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: IncomeTrackerSetupGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerSetupGeneralComponent", function() { return IncomeTrackerSetupGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let IncomeTrackerSetupGeneralComponent = class IncomeTrackerSetupGeneralComponent {
    constructor(accountsService, lookupService, sharedService, cookieService) {
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isError = false;
        this.errorMessage = false;
        this.glAccountIndicator = "Income";
        this.currencyTypeId = "";
        this.glaccountId = "";
    }
    addCustAccount() {
        var data = this.glAccountListData.filter(item => {
            return item.glaccountId == this.glaccountId;
        });
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "glaccountId": parseInt(this.glaccountId),
            "comment": data[0].glaccountName,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null
        };
        let params = {
            custAccount: details
        };
        this.accountsService.addCustAccount(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("Gl Account added successfully");
            }
        });
    }
    isCustomerIncomePayment() {
        return this.customerIncomeName == null ? 'disabled' : '';
    }
    isCustomerVAT() {
        return this.customerVatName == null ? 'disabled' : '';
    }
    isCustomerTAX() {
        return this.customerTaxName == null ? 'disabled' : '';
    }
    getCustomerIncomePayment() {
        let custPayParams = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 74
        };
        this.lookupService.getLookupValueByLookupTypeId(custPayParams).subscribe((res) => {
            this.custIncomePaymentlist = res.filter(item => {
                return item.isActive;
            });
        });
    }
    clearCustomerIncome() {
        this.customerIncomeName = null;
        this.customerIncomeLookupValueId = null;
    }
    checkCustomerIncome() {
        if (this.customerIncomeName == null) {
            this.customerIncomeLookupValueId = null;
        }
    }
    submitCustomerIncomePayment() {
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "lookupTypeId": 74,
            "lookupValueName": `${this.customerIncomeName}`,
            "description": `${this.customerIncomeName}`,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "menuName": "string",
            "notes": "string",
            "isCommon": true,
            "module": "string",
            "subModule": "string",
            "isDisabled": true
        };
        let params = {
            lookupvalue: details
        };
        this.lookupService.addLookupValue(params).subscribe((res) => {
            this.clearCustomerIncome();
            this.sharedService.setAlertMessage("Customer Income Payment Term added successfully");
            this.getCustomerIncomePayment();
        });
    }
    getCustomerVat() {
        //VAT
        let vatListParams = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 77
        };
        this.lookupService.getLookupValueByLookupTypeId(vatListParams).subscribe((res) => {
            this.vatPecentageDataList = res.filter(item => {
                return item.isActive;
            });
        });
    }
    clearCustomerVat() {
        this.customerVatName = null;
        this.customerVatLookupValueId = null;
    }
    checkCustomerVat() {
        if (this.customerVatName == null) {
            this.customerVatLookupValueId = null;
        }
    }
    submitCustomerVat() {
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "lookupTypeId": 77,
            "lookupValueName": `${this.customerVatName}`,
            "description": `${this.customerVatName}`,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "menuName": "string",
            "notes": "string",
            "isCommon": true,
            "module": "string",
            "subModule": "string",
            "isDisabled": true
        };
        let params = {
            lookupvalue: details
        };
        this.lookupService.addLookupValue(params).subscribe((res) => {
            this.clearCustomerVat();
            this.sharedService.setAlertMessage("Customer Vat added successfully");
            this.getCustomerVat();
        });
    }
    getCustomerTax() {
        //Tax
        let taxListParams = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 183
        };
        this.lookupService.getLookupValueByLookupTypeId(taxListParams).subscribe((res) => {
            this.taxPecentageDataList = res.filter(item => {
                return item.isActive;
            });
        });
    }
    clearCustomerTax() {
        this.customerTaxName = null;
        this.customerTaxLookupValueId = null;
    }
    checkCustomerTax() {
        if (this.customerTaxName == null) {
            this.customerTaxLookupValueId = null;
        }
    }
    submitCustomerTax() {
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "lookupTypeId": 183,
            "lookupValueName": `${this.customerTaxName}`,
            "description": `${this.customerTaxName}`,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "menuName": "string",
            "notes": "string",
            "isCommon": true,
            "module": "string",
            "subModule": "string",
            "isDisabled": true
        };
        let params = {
            lookupvalue: details
        };
        this.lookupService.addLookupValue(params).subscribe((res) => {
            this.clearCustomerTax();
            this.sharedService.setAlertMessage("Customer Tax added successfully");
            this.getCustomerTax();
        });
    }
    deleteLookupValueItem(event, item, type) {
        event.stopPropagation();
        let details = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(details).subscribe((res) => {
            if (type = 'income')
                this.getCustomerIncomePayment();
            else if (type = "vat")
                this.getCustomerVat();
            else
                this.getCustomerTax();
        });
    }
    ngOnInit() {
        this.getCustomerIncomePayment();
        this.getCustomerVat();
        this.getCustomerTax();
        //currency type
        let params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 101
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.currencyTypeDataList = res.filter(item => {
                return item.isActive;
            });
            this.currencyTypeId = this.currencyTypeDataList[0].lookupValueId;
        });
        //GLAccountTypeId
        let glAccountTypeIdparams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            GLAccountTypeId: 165
        };
        this.accountsService.getGlAccountsIdbyGlAccountTypeId(glAccountTypeIdparams).subscribe((res) => {
            this.glAccountListData = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
            this.glaccountId = this.glAccountListData[0].glaccountId;
        });
    }
};
IncomeTrackerSetupGeneralComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
IncomeTrackerSetupGeneralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-setup-general',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-setup-general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-setup-general.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], IncomeTrackerSetupGeneralComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.scss":
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.scss ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card.table-card .card-body {\n  overflow: hidden;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\nheader {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.colname th,\ntd {\n  padding: 14px 10px 14px 10px;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.effective-date {\n  border-color: rgba(0, 0, 0, 0.42);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: unset;\n}\n\n.card.table-card .card-body {\n  overflow: hidden;\n}\n\n.subCategory {\n  padding-top: 10px;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  padding-bottom: 10px;\n}\n\n.subCategory li {\n  list-style-type: circle;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\nheader {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.stock-date {\n  border-color: rgba(0, 0, 0, 0.42);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: unset;\n}\n\n.save-icon {\n  padding-left: 7px;\n  padding-top: 27px;\n}\n\n.fa-times {\n  color: #ff3638;\n}\n\n.search-left {\n  left: 2px !important;\n}\n\n.pad-top {\n  padding-top: 22px;\n}\n\n@media only screen and (min-width: 300px) and (max-width: 767px) {\n  .card.table-card .card-body {\n    overflow: scroll;\n  }\n}\n\n.staticTable {\n  width: 280px;\n}\n\nform input:required.ng-dirty.ng-invalid {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC1wZW5hbHR5LXNldHVwL2luY29tZS10cmFja2VyLXNldHVwLXBlbmFsdHktc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXNldHVwL2luY29tZS10cmFja2VyLXNldHVwLXBlbmFsdHktc2V0dXAvaW5jb21lLXRyYWNrZXItc2V0dXAtcGVuYWx0eS1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxnQkFBQTtBQ0ZGOztBREtBO0VBQ0UsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsVUFBQTtBQ0ZGOztBREtBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FES0E7RUFDRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0FDRkY7O0FETUE7OztFQUdFLDhCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQ0hGOztBRE1BOztFQUVFLDRCQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FETUE7RUFDRSxVQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0FDSEY7O0FETUE7RUFDRSxhQUFBO0FDSEY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0ZGOztBREtBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0VFdERBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUZvREEsb0JBQUE7QUNHRjs7QURGRTtFQUNFLHVCQUFBO0FDSUo7O0FEQUE7RUFDRSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxVQUFBO0FDR0Y7O0FEQUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QURBQTtFQUNFLFVBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7QUNHRjs7QURBQTtFQUNFLGFBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSUY7O0FEREE7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSxjR3ZKUztBRjRKWDs7QURIQTtFQUNFLG9CQUFBO0FDTUY7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBRUk7SUFDRSxnQkFBQTtFQ01KO0FBQ0Y7O0FESEE7RUFDRSxZQUFBO0FDS0Y7O0FERkE7RUFDRSxZQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC1wZW5hbHR5LXNldHVwL2luY29tZS10cmFja2VyLXNldHVwLXBlbmFsdHktc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy9mb250cy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY2FyZC50YWJsZS1jYXJkIC5jYXJkLWJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ud2QtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZC01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbm1hdC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnRhYmxlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuXG4udGFibGUgdGJvZHkgdHIgdGQsXG4udGFibGUgdGhlYWQgdGgsXG4udGFibGUgdGhlYWQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uY29sbmFtZSB0aCxcbnRkIHtcbiAgcGFkZGluZzogMTRweCAxMHB4IDE0cHggMTBweDtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZG9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVkaXQge1xuICBjb2xvcjogeWVsbG93O1xufVxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmVmZmVjdGl2ZS1kYXRlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiB1bnNldDtcbn1cblxuLmNhcmQudGFibGUtY2FyZCAuY2FyZC1ib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnN1YkNhdGVnb3J5IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIEBpbmNsdWRlIGhlYWQtcmVndWxhcigpO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogY2lyY2xlO1xuICB9XG59XG5cbi53ZC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ub3V0cHV0IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kb25lIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZWRpdCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5zcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uc3RvY2stZGF0ZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiB1bnNldDtcbn1cbi5zYXZlLWljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59XG5cbi5mYS10aW1lcyB7XG4gIGNvbG9yOiAkcy1yZWQtMDI7XG59XG4uc2VhcmNoLWxlZnQge1xuICBsZWZ0OiAycHggIWltcG9ydGFudDtcbn1cblxuLnBhZC10b3Age1xuICBwYWRkaW5nLXRvcDogMjJweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC50YWJsZS1jYXJkIHtcbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuICB9XG59XG4uc3RhdGljVGFibGUge1xuICB3aWR0aDogMjgwcHg7XG59XG5cbmZvcm0gaW5wdXQ6cmVxdWlyZWQubmctZGlydHkubmctaW52YWxpZCB7XG4gIGJvcmRlcjpub25lO1xufSIsIi5jYXJkLnRhYmxlLWNhcmQgLmNhcmQtYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53ZC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUgdGJvZHkgdHIgdGQsXG4udGFibGUgdGhlYWQgdGgsXG4udGFibGUgdGhlYWQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uY29sbmFtZSB0aCxcbnRkIHtcbiAgcGFkZGluZzogMTRweCAxMHB4IDE0cHggMTBweDtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZG9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVkaXQge1xuICBjb2xvcjogeWVsbG93O1xufVxuXG5zcGFuLnVpLWNvbHVtbi1yZXNpemVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4uZWZmZWN0aXZlLWRhdGUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogdW5zZXQ7XG59XG5cbi5jYXJkLnRhYmxlLWNhcmQgLmNhcmQtYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWJDYXRlZ29yeSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnN1YkNhdGVnb3J5IGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG59XG5cbi53ZC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ub3V0cHV0IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kb25lIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZWRpdCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5zdG9jay1kYXRlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHVuc2V0O1xufVxuXG4uc2F2ZS1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctdG9wOiAyN3B4O1xufVxuXG4uZmEtdGltZXMge1xuICBjb2xvcjogI2ZmMzYzODtcbn1cblxuLnNlYXJjaC1sZWZ0IHtcbiAgbGVmdDogMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWQtdG9wIHtcbiAgcGFkZGluZy10b3A6IDIycHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZC50YWJsZS1jYXJkIC5jYXJkLWJvZHkge1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbn1cbi5zdGF0aWNUYWJsZSB7XG4gIHdpZHRoOiAyODBweDtcbn1cblxuZm9ybSBpbnB1dDpyZXF1aXJlZC5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiBub25lO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.ts":
/*!*******************************************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.ts ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: IncomeTrackerSetupPenaltySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerSetupPenaltySetupComponent", function() { return IncomeTrackerSetupPenaltySetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");









let IncomeTrackerSetupPenaltySetupComponent = class IncomeTrackerSetupPenaltySetupComponent {
    constructor(accountsService, lookupService, sharedService, cookieService, injector, apartmentService, fb) {
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.fb = fb;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isPenaltySetupDataLoaded = false;
        this.penaltyData = [];
        this.itemLimit = 10;
        this.ItemStartIndex = 0;
        this.row = {};
        this.deleteType = false;
        //penaltydatalistTable
        this.penaltyTypeDataList = [
            {
                penaltyTypedata: "1. % Interest per day",
                description: "Calculate the penalty after grace period. (Bill date of next month - Due date (grace period)"
            },
            {
                penaltyTypedata: "2. % Interest per month",
                description: "Even if there is one day delay in payment grace period date, per month interest rate will be charged"
            },
            {
                penaltyTypedata: "3. Flat Penalty per day",
                description: ""
            },
            {
                penaltyTypedata: "4. Flat Penalty per month",
                description: ""
            },
        ];
        this.isActiveList = [
            {
                id: 1,
                isactive: "yes"
            },
            {
                id: 2,
                isactive: "no"
            }
        ];
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
        }
        else
            return '';
    }
    addPenaltyConfig(data) {
        let reqObj = {};
        reqObj = {
            "penaltyId": 0,
            "penaltyAmount": data.penaltyAmount,
            "isActive": true,
            "effectiveDate": data.effectiveDate,
            "isFlatfee": true,
            "interest": data.interest,
            "description": "string",
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockId": data.apartmentBlockId,
            "penaltyTypeFrequencyConfigId": data.penaltyTypeFrequencyConfigId
        };
        let params = {};
        params.penaltyConfig = reqObj;
        console.log("added data ", params);
        this.accountsService.addPenaltyConfig(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("Penalty Setup Config added successfully");
                this.isAssetLoaded = false;
                this.row = {};
                this.getAllPenaltyConfigByApartmentId();
            }
            else {
                this.sharedService.setAlertMessage(res.errorMessage);
            }
        });
    }
    updatePenaltyConfig(data) {
        let reqObj = {};
        reqObj = {
            "penaltyId": data.penaltyId,
            "penaltyAmount": data.penaltyAmount,
            "isActive": data.isActive,
            "effectiveDate": data.effectiveDate,
            "isFlatfee": data.isFlatfee,
            "interest": data.interest,
            "description": "string",
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockId": data.apartmentBlockId,
            "penaltyTypeFrequencyConfigId": data.penaltyTypeFrequencyConfigId
        };
        let params = {};
        params.penaltyConfig = reqObj;
        this.accountsService.updatePenaltyConfig(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage("Penalty setup config Updated successfully");
                // this.isAssetLoaded = false;
                this.isEditRow = false;
                this.updatePenaltyRowIndex = -1;
                this.getAllPenaltyConfigByApartmentId();
            }
        });
    }
    deleteRow(index, data) {
        // const control = this.userTable.get('tableRows') as FormArray;
        // control.removeAt(index);
        console.log(data.penaltyId);
        this.deleteType = true;
        this.modalService.showConfirmModal(data.penaltyId);
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    getAllPenaltyConfigByApartmentId() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
        };
        this.isAssetLoaded = true;
        this.accountsService.getAllPenaltyConfigByApartmentId(queryParamBase).subscribe((res) => {
            if (res) {
                console.log("resp of penalty", res);
                // this.penaltyData = [];
                this.penaltyData = res && res.length > 0 ? res : [];
                this.isAssetLoaded = false;
                // this.tempWarehouseData = this.warehouseData;
                this.totalItems = this.penaltyData.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
            }
        });
    }
    getPenaltyConfigByPenaltyId() {
        let queryParamBase = {};
        console.log("data[0]", this.penaltyData);
        queryParamBase = {
            PenaltyId: 1
        };
        this.isAssetLoaded = true;
        this.accountsService.getPenaltyConfigByPenaltyId(queryParamBase).subscribe((res) => {
            if (res) {
                this.isAssetLoaded = false;
                this.penaltyType = res ? res : [];
                console.log("penalty type ==> ", this.penaltyType);
            }
        });
    }
    getGlAccountsIdbyGlAccountTypeId() {
        let queryParamBase = {};
        queryParamBase = {
            apartmentId: this.cookieService.get('apartmentId'),
            GLAccountTypeId: 165
        };
        //  this.isAssetLoaded = true;
        this.accountsService.getGlAccountsIdbyGlAccountTypeId(queryParamBase).subscribe((res) => {
            if (res) {
                // this.isAssetLoaded = false;
                this.glAccountList = res ? res : [];
                console.log(this.glAccountList);
            }
        });
    }
    getApartmentBlockByApartmentId() {
        let blockListParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockListParams).subscribe((res) => {
            this.blockDataList = res ? res : [];
        });
    }
    ngOnInit() {
        this.isPenaltySetupDataLoaded = true;
        // this.addPenaltyRow();
        this.getGlAccountsIdbyGlAccountTypeId();
        this.getPenaltyConfigByPenaltyId();
        this.getAllPenaltyConfigByApartmentId();
        this.getApartmentBlockByApartmentId();
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                if (this.deleteType) {
                    let param = {};
                    param = {
                        apartmentId: this.cookieService.get('apartmentId'),
                        PenaltyId: id,
                        deleteBy: parseInt(this.cookieService.get('userId'))
                    };
                    this.accountsService.deletePenaltyConfig(param).subscribe((res) => {
                        if (res.message) {
                            this.getAllPenaltyConfigByApartmentId();
                            setTimeout(() => {
                                this.sharedService.setAlertMessage("Penalty deleted successfully");
                                this.sharedService.setUnitListDeleteIndex(null);
                            }, 500);
                        }
                        else {
                            this.sharedService.setAlertMessage(res.errorMessage);
                        }
                        this.deleteType = false;
                    }, error => {
                        console.log(error);
                    });
                }
            }
        });
    }
};
IncomeTrackerSetupPenaltySetupComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
IncomeTrackerSetupPenaltySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-setup-penalty-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-setup-penalty-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-setup-penalty-setup.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], IncomeTrackerSetupPenaltySetupComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".save {\n  margin: 25px 0px 0px 25px;\n}\n\n.editbutton {\n  margin: 20px 10px 0px 0px;\n}\n\n.card.table-card .card-body {\n  overflow: hidden;\n}\n\n.wd-100 {\n  width: 100%;\n}\n\n.wd-50 {\n  width: 50%;\n}\n\nheader {\n  background-color: #333;\n  color: #fff;\n  overflow: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 15px;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 50px;\n}\n\nmat-icon {\n  cursor: pointer;\n}\n\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n\n.table {\n  padding: 20px;\n}\n\n.table tbody tr td,\n.table thead th,\n.table thead {\n  border-left: 1px solid #dee2e6;\n  border-right: 1px solid #dee2e6;\n  border-bottom: 1px solid #dee2e6;\n}\n\n.colname th,\ntd {\n  padding: 14px 10px 14px 10px;\n}\n\n.output {\n  padding: 20px;\n}\n\n.delete {\n  color: red;\n}\n\n.done {\n  color: green;\n}\n\n.edit {\n  color: yellow;\n}\n\nspan.ui-column-resizer {\n  width: 100%;\n  height: 100%;\n  cursor: col-resize;\n  padding: 30px;\n}\n\n.effective-date {\n  border-color: rgba(0, 0, 0, 0.42);\n  border-top: none;\n  border-left: none;\n  border-right: none;\n}\n\ninput:focus {\n  outline: none;\n  box-shadow: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXRyYWNrZXItc2V0dXAvaW5jb21lLXRyYWNrZXItc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSx5QkFBQTtBQ0pGOztBRE1BO0VBQ0UseUJBQUE7QUNIRjs7QURRQTtFQUNFLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTs7O0VBR0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FDTEY7O0FEUUE7O0VBRUUsNEJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURRQTtFQUNFLFVBQUE7QUNMRjs7QURRQTtFQUNFLFlBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7QUNMRjs7QURPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDSkY7O0FET0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1zZXR1cC9pbmNvbWUtdHJhY2tlci1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zY3NzL3ZhcmlhYmxlcy5zY3NzXCI7XG5cbi8vIGdlbmVyYWxcblxuLnNhdmUge1xuICBtYXJnaW46IDI1cHggMHB4IDBweCAyNXB4O1xufVxuLmVkaXRidXR0b24ge1xuICBtYXJnaW46IDIwcHggMTBweCAwcHggMHB4O1xufVxuXG4vL2F1dG8taW52b2ljaW5nXG5cbi5jYXJkLnRhYmxlLWNhcmQgLmNhcmQtYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53ZC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndkLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxubWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4udGFibGUgdGJvZHkgdHIgdGQsXG4udGFibGUgdGhlYWQgdGgsXG4udGFibGUgdGhlYWQge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uY29sbmFtZSB0aCxcbnRkIHtcbiAgcGFkZGluZzogMTRweCAxMHB4IDE0cHggMTBweDtcbn1cblxuLm91dHB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5kZWxldGUge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZG9uZSB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmVkaXQge1xuICBjb2xvcjogeWVsbG93O1xufVxuc3Bhbi51aS1jb2x1bW4tcmVzaXplciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGN1cnNvcjogY29sLXJlc2l6ZTtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmVmZmVjdGl2ZS1kYXRle1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsLjQyKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbmlucHV0OmZvY3Vze1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiB1bnNldDtcbn0iLCIuc2F2ZSB7XG4gIG1hcmdpbjogMjVweCAwcHggMHB4IDI1cHg7XG59XG5cbi5lZGl0YnV0dG9uIHtcbiAgbWFyZ2luOiAyMHB4IDEwcHggMHB4IDBweDtcbn1cblxuLmNhcmQudGFibGUtY2FyZCAuY2FyZC1ib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLndkLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2QtNTAge1xuICB3aWR0aDogNTAlO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG5tYXQtaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFjdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi50YWJsZSB0Ym9keSB0ciB0ZCxcbi50YWJsZSB0aGVhZCB0aCxcbi50YWJsZSB0aGVhZCB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cbi5jb2xuYW1lIHRoLFxudGQge1xuICBwYWRkaW5nOiAxNHB4IDEwcHggMTRweCAxMHB4O1xufVxuXG4ub3V0cHV0IHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmRlbGV0ZSB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5kb25lIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZWRpdCB7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbnNwYW4udWktY29sdW1uLXJlc2l6ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IGNvbC1yZXNpemU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5lZmZlY3RpdmUtZGF0ZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiB1bnNldDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: IncomeTrackerSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerSetupComponent", function() { return IncomeTrackerSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IncomeTrackerSetupComponent = class IncomeTrackerSetupComponent {
    ngOnInit() {
        this.navArray = [
            { link: 'general', name: 'General' },
            { link: 'auto-invoicing', name: 'Auto Invoicing' },
            { link: 'penalty-setup', name: 'Penalty Setup' }
        ];
    }
};
IncomeTrackerSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker-setup.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.scss")).default]
    })
], IncomeTrackerSetupComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWNyZWRpdC9pbmNvbWUtdmlldy1jcmVkaXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: IncomeViewCreditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeViewCreditComponent", function() { return IncomeViewCreditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");







let IncomeViewCreditComponent = class IncomeViewCreditComponent {
    constructor(dialog, route, accountsService) {
        this.dialog = dialog;
        this.route = route;
        this.accountsService = accountsService;
        this.isCreditNoteLoaded = false;
        this.creditNoteData = "";
        this.credit = {};
        this.isEditCredit = false;
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'CreditnoteData');
    }
    onGlSearchFilter() {
        if (this.creditNoteData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.creditNoteData;
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
    getCreditParams(event) {
        this.getCreditNotesData();
    }
    addCreditNote() {
        this.isEditCredit = false;
        this.popOverSelector = '#addCreditNoteElement';
        this.popOverPosition = 'bottom';
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    onEditCreditNote(detail) {
        this.isEditCredit = true;
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let transactionId = dataRecord.transactionId;
        this.credit = dataRecord;
        this.popOverSelector = '#' + transactionId;
        this.popOverPosition = 'left';
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    getCreditNotesData() {
        this.isCreditNoteLoaded = false;
        let params = {
            blockUnitId: this.apartmentBlockUnitId
        };
        this.accountsService.getCreditNotesByApartmentBlockUnit(params).subscribe((res) => {
            var creditNoteDataList = res;
            this.gridSourceData = {
                localdata: creditNoteDataList,
                datatype: "array"
            };
            this.creditNoteDataList = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = creditNoteDataList.length;
            this.isCreditNoteLoaded = true;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.apartmentBlockUnitId = this.route.params['value'].id;
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Creditnote Transaction Id',
                datafield: 'transactionId',
                width: 220,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Credit Amount Added',
                datafield: 'creditAmount',
                cellsrenderer: cellsrenderer,
                minwidth: 180,
                renderer: columnrenderer
            }, {
                text: 'Comments',
                datafield: 'comments',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Created for Bill',
                datafield: 'billId_CreatedAgainst',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Amount paid for bill',
                datafield: 'debitAmount',
                minwidth: 180,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Paid for Bill No',
                datafield: 'billId_AdjustedInvoice',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Credit Balance',
                datafield: 'balance',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    let elemId = this.creditNoteDataList.loadedData[row].transactionId;
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" id="' + elemId + '" onClick="editCreditNoteEvent(' + row + ')" ><i class="icon fa fa-pencil edit" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        this.getCreditNotesData();
    }
};
IncomeViewCreditComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], IncomeViewCreditComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_6__["jqxPopoverComponent"])
], IncomeViewCreditComponent.prototype, "reversePopOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditCreditNote', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewCreditComponent.prototype, "onEditCreditNote", null);
IncomeViewCreditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-credit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-view-credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-view-credit.component.scss */ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]])
], IncomeViewCreditComponent);

let editCreditNoteEvent = row => {
    let event = new CustomEvent('onEditCreditNote', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editCreditNoteEvent = editCreditNoteEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWRlZmF1bHRlcnMvaW5jb21lLXZpZXctZGVmYXVsdGVycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: IncomeViewDefaultersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeViewDefaultersComponent", function() { return IncomeViewDefaultersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");






let IncomeViewDefaultersComponent = class IncomeViewDefaultersComponent {
    constructor(accountsService, cookieService) {
        this.accountsService = accountsService;
        this.cookieService = cookieService;
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
        underscore__WEBPACK_IMPORTED_MODULE_5__["each"](allDataRecords, item => {
            item.checked = detail.checked;
        });
        this.isDefaultSelected = allDataRecords.some(item => {
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
    }
    sendEmail() {
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
                text: 'Type',
                datafield: 'type',
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
            },
            {
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
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }];
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getIncomeTrackerDefaulterByApartmentId(params).subscribe((res) => {
            this.gridDefaultDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_5__["each"](this.gridDefaultDataList, item => {
                item.checked = false;
            });
            this.gridSourceData = {
                localdata: this.gridDefaultDataList,
                datatype: "array"
            };
            this.defaultDataList = new jqx.dataAdapter(this.gridSourceData);
            this.renderColumns();
            this.totalItems = this.defaultDataList.length;
            this.isDefaultersDataLoaded = true;
        }, error => {
            console.log(error);
        });
    }
};
IncomeViewDefaultersComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], IncomeViewDefaultersComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCheckDefaulterHeader', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewDefaultersComponent.prototype, "onCheckDefaulterHeader", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCheckDefaulterRow', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewDefaultersComponent.prototype, "onCheckDefaulterRow", null);
IncomeViewDefaultersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-defaulters',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-view-defaulters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-view-defaulters.component.scss */ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
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


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-view-invoice-history-wrapper .slideup {\n  visibility: hidden;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3RvcnkvaW5jb21lLXZpZXctaW52b2ljZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3RvcnkvaW5jb21lLXZpZXctaW52b2ljZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3RvcnkvaW5jb21lLXZpZXctaW52b2ljZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3Rvcnktd3JhcHBlciB7XG5cdC5zbGlkZXVwIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0aGVpZ2h0OiAyNXB4O1xuXHR9XG59XG5cbiIsIi5pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3Rvcnktd3JhcHBlciAuc2xpZGV1cCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: IncomeViewInvoiceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeViewInvoiceHistoryComponent", function() { return IncomeViewInvoiceHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");
/* harmony import */ var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");











let IncomeViewInvoiceHistoryComponent = class IncomeViewInvoiceHistoryComponent {
    constructor(route, userService, accountsService, cookieService, constantsService, router) {
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.cookieService = cookieService;
        this.constantsService = constantsService;
        this.router = router;
        this.isInvoiceDataLoaded = false;
        this.isInvoiceDataTableLoaded = true;
        this.invoiceData = "";
        this.isAccountDataLoaded = false;
        this.isReverseSubmitted = true;
    }
    getUserName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.userDataList, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].firstName + ' ' + data[0].lastName;
        }
    }
    getInvoiceDate(itr, date) {
        underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.invoiceDataList, (obj, index) => {
            obj.postedOn = moment__WEBPACK_IMPORTED_MODULE_7__(obj.custInvoiceDate).format("MM-DD-YYYY");
        });
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("MM-DD-YYYY");
    }
    getAccountName(account) {
        var accountDetails = {
            glaccountId: 0
        };
        if (account == undefined || account.length == 0) {
            accountDetails.glaccountId = 0;
        }
        else {
            accountDetails.glaccountId = account[0].glaccountId;
        }
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.glAccountListData, function (item) {
            if (item.glaccountId === accountDetails.glaccountId)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].glaccountName;
        }
        return '';
    }
    getDueAmount(due, paid) {
        return (due - paid) > 0 ? 'high' : 'low';
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    getFieldParams(event) {
        this.isInvoiceDataTableLoaded = false;
        var postStartDate = moment__WEBPACK_IMPORTED_MODULE_7__(event.PostStartDate).format('MM-DD-YYYY');
        var postEndDate = moment__WEBPACK_IMPORTED_MODULE_7__(event.PostEndDate).format('MM-DD-YYYY');
        var params = {
            ApartmentBlockUnitID: this.route.params['value'].id,
            PostStartDate: postStartDate,
            PostEndDate: postEndDate,
        };
        this.accountsService.getAccountHistoryByApartmentUnitId(params).subscribe((res) => {
            this.invoiceDataList = res;
            this.invoiceDataList.forEach(item => {
                return item.reversalId != null ? item.isReverseIdAvailable = true : item.isReverseIdAvailable = false;
            });
            //filter items
            if (event.isReversed != null) {
                this.invoiceDataList = this.invoiceDataList.filter(item => { return item.isReversed == event.isReversed; });
            }
            if (event.isCreditNote != null) {
                this.invoiceDataList = this.invoiceDataList.filter(item => { return item.isCreditNote == event.isCreditNote; });
            }
            if (event.postedDate != null) {
                this.invoiceDataList = this.invoiceDataList.filter(item => { return moment__WEBPACK_IMPORTED_MODULE_7__(item.postedDate).format("MM-DD-YYYY") == moment__WEBPACK_IMPORTED_MODULE_7__(event.postedDate).format("MM-DD-YYYY"); });
            }
            if (event.billNo != null) {
                this.invoiceDataList = this.invoiceDataList.filter(item => { return item.billNo == event.billNo; });
            }
            if (event.receiptNo != null) {
                this.invoiceDataList = this.invoiceDataList.filter(item => { return item.receiptNo == event.receiptNo; });
            }
            this.invoiceDataList.sort((a, b) => {
                return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
            });
            this.totalItems = this.invoiceDataList.length;
            this.isInvoiceDataTableLoaded = true;
        }, error => {
        });
    }
    tableBinding() {
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            var glAccountListData = res.filter(item => {
                return item.apartmentId == parseInt(this.cookieService.get('apartmentId'));
            });
            this.glAccountListData = glAccountListData;
        });
        var params = {
            ApartmentBlockUnitID: this.route.params['value'].id
        };
        this.accountsService.getAccountHistoryByApartmentUnitId(params).subscribe((res) => {
            this.invoiceDataList = res;
            this.invoiceDataList.forEach(item => {
                return item.reversalId != null ? item.isReverseIdAvailable = true : item.isReverseIdAvailable = false;
            });
            this.invoice = this.invoiceDataList[0];
            this.invoicePopOverSlector = '#' + this.invoice.billNo;
            console.log(this.invoiceDataList);
            //sorting by date ( new to old )
            this.invoiceDataList.sort((a, b) => {
                return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
            });
            this.totalItems = this.invoiceDataList.length;
            this.gridSourceData = {
                localdata: this.invoiceDataList,
                datatype: "array"
            };
            this.invoiceDataList = new jqx.dataAdapter(this.gridSourceData);
            let accountListParams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.accountsService.getIncomeTrackerSubLedgersByApartmentId(accountListParams).subscribe((res) => {
                this.accountDataList = res.filter(item => {
                    return item.apartmentBlockUnitId == this.route.params['value'].id;
                });
                this.isAccountDataLoaded = true;
            });
            let userListParams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.userService.getAllUsersByApartmentId(userListParams).subscribe((res) => {
                this.userDataList = res;
                this.isInvoiceDataLoaded = true;
            }, error => {
            });
        });
    }
    onGlSearchFilter() {
        if (this.invoiceData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.invoiceData;
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
    onAccHistroyEdit(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let billNo = dataRecord.billNo;
        this.router.navigateByUrl('/ams/income/edit-invoice/' + billNo);
    }
    onEditReverse(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.invoice = dataRecord;
        this.invoicePopOverSlector = '#invoiceHistory' + detail.rowId;
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 300);
    }
    ngOnInit() {
        this.tableBinding();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Posted Date',
                datafield: 'postedDate',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Bill No',
                datafield: 'billNo',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Reversal Id',
                datafield: 'reversalId',
                minwidth: 120,
                renderer: columnrenderer
            },
            {
                text: 'Receipt No',
                datafield: 'receiptNo',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Billed Amount',
                datafield: 'invoiceAmount',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Reciept Amount',
                datafield: 'amountPaid',
                minwidth: 120,
                renderer: columnrenderer
            },
            {
                text: 'Due',
                datafield: 'balance',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Status',
                datafield: 'isReversed',
                minwidth: 150,
                cellclassname: 'text-center',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">'
                        + '<span class="squares medium ml-1 ' + getStatusClassName(value) + '">R</span>'
                        + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                datafield: 'isReverseIdAvailable',
                minwidth: 120,
                cellsrenderer: (row, coloumn, value) => {
                    let elemId = 'invoiceHistory' + row;
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" class="mr-2 ' + getReverseStatus(value) + '" id="' + elemId + '" onClick="editReverseEvent(' + row + ')">'
                        + '<i class="fa fa-undo icon delete ' + getReverseStatus(value) + '" aria-hidden="true"></i>'
                        + '</a>'
                        + '<a href="javascript:void(0)" class="mr-2" onClick="editAccHistroyEvent(' + row + ')">'
                        + '<i class="fa fa-pencil icon edit" aria-hidden="true"></i>'
                        + '</a>'
                        + '</div>';
                },
                renderer: columnrenderer
            }];
    }
};
IncomeViewInvoiceHistoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])
], IncomeViewInvoiceHistoryComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_9__["jqxPopoverComponent"])
], IncomeViewInvoiceHistoryComponent.prototype, "reversePopOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onAccHistroyEdit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewInvoiceHistoryComponent.prototype, "onAccHistroyEdit", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditReverse', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewInvoiceHistoryComponent.prototype, "onEditReverse", null);
IncomeViewInvoiceHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-invoice-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-view-invoice-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-view-invoice-history.component.scss */ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], IncomeViewInvoiceHistoryComponent);

let getStatusClassName = value => {
    return value ? 'red' : 'd-none';
};
let getReverseStatus = value => {
    return value ? 'disabled' : '';
};
let editReverseEvent = row => {
    let event = new CustomEvent('onEditReverse', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editReverseEvent = editReverseEvent;
let editAccHistroyEvent = row => {
    let event = new CustomEvent('onAccHistroyEdit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editAccHistroyEvent = editAccHistroyEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .ams-all-invoices .material .mat-dialog-container {\n  width: 1200px;\n  height: 500px;\n  overflow: auto;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box h5 {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: #52c570;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .other-info .address, ::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .other-info .email {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  display: inline-block;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .other-info.grey .address, ::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .other-info.grey .email {\n  color: #8391a1;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .details {\n  padding: 10px 19px;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .details p {\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .details p span {\n  color: #373946;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .table thead th {\n  padding: 12px 20px;\n  background-color: #eaeaea;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box .table tr.total td {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n}\n::ng-deep .ams-all-invoices .material .mat-dialog-container .info-modal-box p.bottom {\n  font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1pbnZvaWNlL2luY29tZS12aWV3LWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWludm9pY2UvaW5jb21lLXZpZXctaW52b2ljZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNMSjtBRE9RO0VFb0NOLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFRnBDVSxjR3dDSTtBRjNDaEI7QURNWTtFRTZDViwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBYUEsaUJBQUE7RUYzRGMscUJBQUE7QUNBaEI7QURHZ0I7RUFDSSxjR1pQO0FGV2I7QURLUTtFQUNJLGtCQUFBO0FDSFo7QURJWTtFRWlEVixpQkFBQTtFRi9DYyxjR3BCSDtBRmtCYjtBREdnQjtFQUNJLGNHOERUO0FGL0RYO0FES1E7RUFDSSxrQkFBQTtFQUNBLHlCR2lFRDtBRnBFWDtBRE1ZO0VFMkJWLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQ0FBQTtBRDlCRjtBREVRO0VFZ0NOLGlCQUFBO0FEL0JGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXZpZXctaW52b2ljZS9pbmNvbWUtdmlldy1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cblxuXG46Om5nLWRlZXAgLmFtcy1hbGwtaW52b2ljZXMgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEyMDBweDtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC5pbmZvLW1vZGFsLWJveCB7XG4gICAgICAgIGg1IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuICAgICAgICAgICAgY29sb3I6ICRsaW1lLWdyZWVuLTAzO1xuICAgICAgICB9XG4gICAgICAgIC5vdGhlci1pbmZvIHtcbiAgICAgICAgICAgIC5hZGRyZXNzLCAuZW1haWwge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRlc3AtcmVndWxhcjtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmdyZXkge1xuICAgICAgICAgICAgICAgIC5hZGRyZXNzLCAuZW1haWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTlweDtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRncmV5LTgwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRhYmxlIHRoZWFkIHRoIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LTQ1MDtcbiAgICAgICAgfVxuICAgICAgICAudGFibGUge1xuICAgICAgICAgICAgdHIudG90YWwgdGQge1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGRlc3AtbWVkaXVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHAuYm90dG9tIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI6Om5nLWRlZXAgLmFtcy1hbGwtaW52b2ljZXMgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOjpuZy1kZWVwIC5hbXMtYWxsLWludm9pY2VzIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IGg1IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGNvbG9yOiAjNTJjNTcwO1xufVxuOjpuZy1kZWVwIC5hbXMtYWxsLWludm9pY2VzIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IC5vdGhlci1pbmZvIC5hZGRyZXNzLCA6Om5nLWRlZXAgLmFtcy1hbGwtaW52b2ljZXMgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLm90aGVyLWluZm8gLmVtYWlsIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOjpuZy1kZWVwIC5hbXMtYWxsLWludm9pY2VzIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IC5vdGhlci1pbmZvLmdyZXkgLmFkZHJlc3MsIDo6bmctZGVlcCAuYW1zLWFsbC1pbnZvaWNlcyAubWF0ZXJpYWwgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5pbmZvLW1vZGFsLWJveCAub3RoZXItaW5mby5ncmV5IC5lbWFpbCB7XG4gIGNvbG9yOiAjODM5MWExO1xufVxuOjpuZy1kZWVwIC5hbXMtYWxsLWludm9pY2VzIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMTBweCAxOXB4O1xufVxuOjpuZy1kZWVwIC5hbXMtYWxsLWludm9pY2VzIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IC5kZXRhaWxzIHAge1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM4MzkxYTE7XG59XG46Om5nLWRlZXAgLmFtcy1hbGwtaW52b2ljZXMgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLmRldGFpbHMgcCBzcGFuIHtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG46Om5nLWRlZXAgLmFtcy1hbGwtaW52b2ljZXMgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLnRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xufVxuOjpuZy1kZWVwIC5hbXMtYWxsLWludm9pY2VzIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IC50YWJsZSB0ci50b3RhbCB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cbjo6bmctZGVlcCAuYW1zLWFsbC1pbnZvaWNlcyAubWF0ZXJpYWwgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5pbmZvLW1vZGFsLWJveCBwLmJvdHRvbSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiXG4kZnRhOiBGb250QXdlc29tZTtcblxuJGZkOmZpeGVkO1xuJGFiczphYnNvbHV0ZTtcbiRyZWw6cmVsYXRpdmU7XG4kc3Q6c3RhdGljO1xuXG4kZGFyay1ibHVlOiAjMDgzZDcxO1xuJGRhcmstYmx1ZS0wMjogIzIzNmFhZjtcbiRkYXJrLWJsdWUtMDM6ICMxMzRiODI7XG4kbGlnaHQtYmx1ZTogIzgzOTFhMTtcbiRsaWdodC1ibHVlLTAyOiAjZWVmMGYzO1xuJGdyZXktYmx1ZTogI2YzZjhmZjtcbiRzLWJsdWU6ICMwM2E5ZjQ7XG4kbGlnaHQtcmVkOiAjZmY1NDdiO1xuJG0tbGlnaHQtcmVkOiAjZmY3Njg4O1xuJGJyaWdodC1yZWQ6ICNlMjM4NWU7XG4kcy1yZWQ6ICNlYTc5NjI7XG4kcy1yZWQtMDI6ICNmZjM2Mzg7XG4kcy1yZWQtMDM6ICNmNDQzMzY7XG4kbS1yZWQ6ICNkNzU3M2Q7XG4kZG0tcmVkOiAjOGU0ZDQwO1xuJGwtcGFsZS1yZWQ6ICNmZmYzZjU7XG4kaC1wYWxlLXJlZDogI2ZmZmJmYjtcbiRncmV5LXJlZCA6ICNmMWRkZGQ7XG4kcy1jeWFuOiAjMDBiY2Q0O1xuJGQtY3lhbjogIzAyMjkyNTtcbiRkLWN5YW4tMDI6ICMwOWE1OTY7XG4kZC1jeWFuLTAzOiMwMGQxZmE7XG4kdmQtY3lhbjogIzAwNmQ2ZDtcbiRwYWxlLWN5YW46ICNkOGZmZmI7XG4kcy1ncmV5OiAjY2NjY2NjO1xuJGwtZ3JleTogI2Q4ZTBlNjtcblxuJGxoLXJlZDojZTIzZjA2YzQ7XG4kbGgteWVsbG93OiNkY2JlMDg7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kZC1vcmFuZ2UtMDI6ICM1MjQ3Mjg7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kbS15ZWxsb3c6ICNmZmMxMDc7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzVjZDY5NDsgLy8jNWJjYzczXG4kbGltZS1ncmVlbi0wMjogIzVjZDY3YztcbiRsaW1lLWdyZWVuLTAzOiAjNTJjNTcwO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1tZWRpdW0tMDQ6MzA7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC1iYXNlLTAyOjExO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: IncomeViewInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeViewInvoiceComponent", function() { return IncomeViewInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxwindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_17__);


















let IncomeViewInvoiceComponent = class IncomeViewInvoiceComponent {
    constructor(dialog, router, route, userService, accountsService, apartmentService, lookupService, sharedService, constantsService, cookieService) {
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.constantsService = constantsService;
        this.cookieService = cookieService;
        this.isInvoiceDataLoaded = false;
        this.isInvoicePrintLoaded = false;
        this.invoiceData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "custInvoiceId";
        this.unitOrder = true;
        this.isMobile = false;
        this.glAccountIndicator = "Income";
        this.config = {};
        this.submitFlag = true;
    }
    getDueAmount(due, paid) {
        return (due - paid) > 0 ? 'high' : 'low';
    }
    stopPropagation(event) {
        event.stopPropagation();
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_15__(date).format(this.constantsService.dateFormat);
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    printInvoice() {
        var data = document.getElementById('InvoiceElement');
        html2canvas__WEBPACK_IMPORTED_MODULE_16___default()(data).then(canvas => {
            var imgWidth = 208;
            var pageHeight = 295;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            var heightLeft = imgHeight;
            const contentDataURL = canvas.toDataURL('image/png');
            let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_17__('p', 'mm', 'a4'); // A4 size page of PDF  
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('invoice.pdf');
        });
    }
    onGlSearchFilter() {
        if (this.invoiceData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.invoiceData;
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
    onDownloadInvoice(detail) {
        let invoice = this.datagrid.getrowdata(detail.rowId);
        this.isInvoicePrintLoaded = false;
        this.dialog.open(this.viewInvoiceDetailsRef, {
            panelClass: 'material',
            data: invoice
        });
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            invoiceId: invoice.custInvoiceId
        };
        this.accountsService.getCustInvoiceById(params).subscribe((res) => {
            this.custTaxDetails = res[0].custinvoiceTax;
            this.isInvoicePrintLoaded = true;
        });
    }
    onEditInvoice(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let custInvoiceId = dataRecord.custInvoiceId;
        let apartmentBlockUnitId = dataRecord.apartmentBlockUnitId;
        this.router.navigateByUrl('/ams/income/edit-invoice/' + apartmentBlockUnitId + '/' + custInvoiceId);
    }
    onEditReverse(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.invoice = dataRecord;
        this.reversePopOverSelector = '#' + this.invoice.custInvoiceId;
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 100);
    }
    onUpdateInvoice(detail) {
        var invoice = this.datagrid.getrowdata(detail.rowId);
        this.updateInvoiceItem(invoice, detail.column);
    }
    getVatType(custInvoiceItem) {
        var id = custInvoiceItem.invoiceTaxId;
        var data = this.vatTypeDataList.filter(item => {
            if (id == item.lookupValueId) {
                return item;
            }
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    updateInvoiceItem(invoice, type) {
        if (type == 'email') {
            if (invoice.isEmailSent)
                invoice.isEmailSent = false;
            else
                invoice.isEmailSent = true;
        }
        else {
            if (invoice.isSmssent)
                invoice.isSmssent = false;
            else
                invoice.isSmssent = true;
        }
        let details = {
            "custInvoiceId": invoice.custInvoiceId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": invoice.apartmentBlockUnitId,
            "custInvoiceAmount": parseInt(invoice.custInvoiceAmount),
            "custInvoiceDate": new Date().toISOString(),
            "dueDate": invoice.dueDate,
            "tax1": 0,
            "tax2": 0,
            "tax3": 0,
            "isTax": invoice.isTax,
            "isRecurCustInvoice": invoice.isRecurCustInvoice,
            "isEmailSent": invoice.isEmailSent,
            "isSmssent": invoice.isSmssent,
            "custInvoiceStatusId": 1,
            "postedBy": parseInt(this.cookieService.get('userId')),
            "postedOn": new Date().toISOString(),
            "billToPay": "string",
            "comments": invoice.comments || "",
            "penaltyAmount": 0,
            "penaltyComment": "string",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString(),
            "transReference1": "string",
            "transReference2": "string",
            "invoiceGLAccounts": [
                {
                    "invoiceGlaccountId": invoice.invoiceGLAccounts[0].invoiceGlaccountId,
                    "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                    "invoiceId": 0,
                    "glaccountId": invoice.invoiceGLAccounts[0].glaccountId,
                    "comments": "string",
                    "isActive": true,
                    "insertedBy": parseInt(this.cookieService.get('userId')),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": parseInt(this.cookieService.get('userId')),
                    "updatedOn": new Date().toISOString(),
                    "amount": invoice.custInvoiceAmount
                }
            ]
        };
        let params = {
            invoice: details
        };
        this.accountsService.updateCustInvoice(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("Invoice updated successfully");
            }
            else {
                this.isInvoiceDataLoaded = true;
            }
        }, error => {
            this.isInvoiceDataLoaded = true;
        });
    }
    onClose(event) {
        this.submitFlag = true;
        this.tableBindingdata();
    }
    ngOnInit() {
        this.popperDataSource = {
            localdata: true,
            datatype: "boolean"
        };
        this.submitFlag = new jqx.dataAdapter(this.popperDataSource);
        let apartmentParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            active: 1
        };
        this.apartmentService.getApartmentByApartmentId(apartmentParams).subscribe((res) => {
            this.apartmentDetails = res[0];
        });
        let termsParams = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getAllTermsConditionsByApartmentId(termsParams).subscribe((res) => {
            this.apartmentTerms = res.filter(item => {
                return item.termsNo == '2'; //invoice terms
            });
        });
        let vatListParams = {
            LookupTypeId: 77
        };
        //VAT types
        this.lookupService.getLookupValueByLookupTypeId(vatListParams).subscribe((res) => {
            this.vatTypeDataList = res;
        });
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getAllGlAccounts().subscribe((res) => {
            this.glAccountListData = res.filter(item => {
                return item.isActive && parseInt(this.cookieService.get('apartmentId')) && item.indicator == this.glAccountIndicator;
            });
        });
        //BIND THE TABLE
        this.tableBindingdata();
    }
    tableBindingdata() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getCustInvoicesByApartmentId(params).subscribe((res) => {
            var invoiceDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_14__["each"](invoiceDataList, item => {
                item.towerUnit = item.apartmentBlockNumber + ' ' + item.apartmentBlockUnitNumber;
            });
            this.invoice = invoiceDataList[0];
            this.reversePopOverSelector = '#' + this.invoice.custInvoiceId;
            this.gridSourceData = {
                localdata: invoiceDataList,
                datatype: "array"
            };
            this.invoiceDataList = new jqx.dataAdapter(this.gridSourceData);
            /*this.getSourceDataAdapter = (datafield: string): any => {
              let dataAdapter = new jqx.dataAdapter(this.gridSourceData, { uniqueDataFields: [datafield] });
              return dataAdapter;
            }*/
            this.totalItems = this.invoiceDataList.length;
            var cellsrenderer = (row, column, value) => {
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };
            var columnrenderer = (value) => {
                return '<div style="padding: 14px">' + value + '</div>';
            };
            this.columnData = [{
                    text: 'Invoice Id',
                    datafield: 'custInvoiceId',
                    width: 120,
                    pinned: true,
                    cellsrenderer: (row, column, value) => {
                        return '<div class="jqx-custom-inner-cell"><a href="javascript:void(0)" class="mr-2 t-decor" onClick="downloadInvoiceEvent(' + row + ')">' + value + '</a></div>';
                    },
                    renderer: columnrenderer
                },
                {
                    text: 'Invoice Date',
                    datafield: 'postedOn',
                    minwidth: 120,
                    cellsrenderer: (row, column, value) => {
                        return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_15__(value).format(this.constantsService.dateFormat) + '</div>';
                    },
                    renderer: columnrenderer
                },
                {
                    text: 'Posted By',
                    datafield: 'postedByName',
                    minwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Tower Unit',
                    datafield: 'block_Unit',
                    minwidth: 120,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Due',
                    datafield: 'custInvoiceAmount',
                    minwidth: 150,
                    cellsrenderer: cellsrenderer,
                    renderer: columnrenderer
                },
                {
                    text: 'Sent Email',
                    datafield: 'isEmailSent',
                    minwidth: 120,
                    cellsrenderer: (row, column, value) => {
                        var chkedProperty;
                        if (value) {
                            chkedProperty = 'checked="true"';
                        }
                        else {
                            chkedProperty = '';
                        }
                        return '<div class="jqx-custom-inner-cell">'
                            + '<label class="switch float-left">'
                            + '<input type="checkbox" id="invoiceEmail" name="invoiceEmail"' + chkedProperty + '>'
                            + '<div class="slider round" onClick="updateInvoiceEvent(' + row + ', \'email\')"></div>'
                            + '</label>'
                            + '</div>';
                    },
                    renderer: columnrenderer
                },
                {
                    text: 'Due Date',
                    datafield: 'dueDate',
                    minwidth: 120,
                    cellsrenderer: (row, column, value) => {
                        return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_15__(value).format(this.constantsService.dateFormat) + '</div>';
                    },
                    renderer: columnrenderer
                },
                {
                    text: 'Actions',
                    cellsalign: 'center',
                    align: 'center',
                    minwidth: 120,
                    datafield: 'isReversed',
                    cellsrenderer: (row, coloumn, value) => {
                        let isreverse = value;
                        let reverse = { 'obj1': 'd-block', 'obj2': 'd-none' };
                        let rdata = { 'obj1': 'd-none', 'obj2': 'd-block' };
                        let valueData = isreverse === false ? reverse : rdata;
                        let elemId = invoiceDataList[row].custInvoiceId;
                        // return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editInvoiceEvent('+ row +')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" id="'+ elemId +'" onClick="editReverseEvent('+ row +')"><i class="fa fa-repeat icon delete" aria-hidden="true"></i></a></div>'
                        return '<div class="simple-actions">'
                            + '<a href="javascript:void(0)" class="mr-2" onClick="editInvoiceEvent(' + row + ')">'
                            + '<i class="fa fa-pencil icon edit" aria-hidden="true"></i>'
                            + '</a>'
                            + '<div class="' + valueData.obj1 + '">'
                            + '<div href="javascript:void(0)" class="mr-2" id="' + elemId + '" onClick="editReverseEvent(' + row + ')">'
                            + '<i class="fa fa-repeat icon delete" aria-hidden="true"></i>'
                            + '</div>'
                            + '</div>'
                            + '<div>'
                            + '<span class="' + valueData.obj2 + '">R</span>'
                            + '</div>'
                            + '</div>';
                    },
                    renderer: columnrenderer
                }];
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.userService.getAllUsersByApartmentId(params).subscribe((res) => {
                this.userDataList = res;
                this.isInvoiceDataLoaded = true;
            }, error => {
            });
        });
    }
    ngAfterViewInit() {
    }
};
IncomeViewInvoiceComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_8__["AccountsService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"] },
    { type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_12__["ConstantsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], IncomeViewInvoiceComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopWindow', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxwindow__WEBPACK_IMPORTED_MODULE_5__["jqxWindowComponent"])
], IncomeViewInvoiceComponent.prototype, "reversePopWindow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_6__["jqxPopoverComponent"])
], IncomeViewInvoiceComponent.prototype, "reversePopOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewInvoiceDetailsRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IncomeViewInvoiceComponent.prototype, "viewInvoiceDetailsRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onDownloadInvoice', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewInvoiceComponent.prototype, "onDownloadInvoice", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditInvoice', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewInvoiceComponent.prototype, "onEditInvoice", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditReverse', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewInvoiceComponent.prototype, "onEditReverse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onUpdateInvoice', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewInvoiceComponent.prototype, "onUpdateInvoice", null);
IncomeViewInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-view-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-view-invoice.component.scss */ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_8__["AccountsService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_9__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"],
        _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_12__["ConstantsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__["CookieService"]])
], IncomeViewInvoiceComponent);

function downloadInvoiceEvent(row) {
    var event = new CustomEvent('onDownloadInvoice', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.downloadInvoiceEvent = downloadInvoiceEvent;
function editInvoiceEvent(row) {
    var event = new CustomEvent('onEditInvoice', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editInvoiceEvent = editInvoiceEvent;
function editReverseEvent(row) {
    var event = new CustomEvent('onEditReverse', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editReverseEvent = editReverseEvent;
function updateInvoiceEvent(row, type) {
    var event = new CustomEvent('onUpdateInvoice', {
        detail: {
            rowId: row,
            column: type
        }
    });
    window.dispatchEvent(event);
}
window.updateInvoiceEvent = updateInvoiceEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .material .mat-dialog-container {\n  width: 1200px;\n  height: 650px;\n  overflow: auto;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box h5 {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: #52c570;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box .other-info .address,\n::ng-deep .material .mat-dialog-container .info-modal-box .other-info .email {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  display: inline-block;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box .other-info.grey .address,\n::ng-deep .material .mat-dialog-container .info-modal-box .other-info.grey .email {\n  color: #8391a1;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box .details {\n  padding: 10px 19px;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box .details p {\n  font-size: 1.4rem;\n  color: #8391a1;\n  float: right;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box .details p span {\n  color: #373946;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box .table thead th {\n  padding: 12px 20px;\n  background-color: #eaeaea;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box .table tr.total td {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n}\n::ng-deep .material .mat-dialog-container .info-modal-box p.bottom {\n  font-size: 1.3rem;\n}\n.unit p {\n  font-size: 14px;\n}\n.generated p span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: #52c570;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1yZWNlaXB0cy9pbmNvbWUtdmlldy1yZWNlaXB0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXZpZXctcmVjZWlwdHMvaW5jb21lLXZpZXctcmVjZWlwdHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FDSEY7QURLSTtFRXNDRixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUZ0Q0ksY0cwQ1U7QUYzQ2hCO0FESU07O0VFK0NKLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFhQSxpQkFBQTtFRjVETSxxQkFBQTtBQ0VSO0FEQ1E7O0VBRUUsY0daRztBRmFiO0FER0k7RUFDRSxrQkFBQTtBQ0ROO0FERU07RUVpREosaUJBQUE7RUYvQ00sY0dwQks7RUhxQkwsWUFBQTtBQ0FSO0FEQ1E7RUFDRSxjRzZEQztBRjVEWDtBREdJO0VBQ0Usa0JBQUE7RUFDQSx5QkdnRUs7QUZqRVg7QURJTTtFRTBCSiwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUQzQkY7QURBSTtFRStCRixpQkFBQTtBRDVCRjtBRElFO0VBQ0UsZUFBQTtBQ0RKO0FETVE7RUViTixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUZhVSxjR1RJO0FGUWhCIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXZpZXctcmVjZWlwdHMvaW5jb21lLXZpZXctcmVjZWlwdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuOjpuZy1kZWVwIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICB3aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDY1MHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLmluZm8tbW9kYWwtYm94IHtcbiAgICBoNSB7XG4gICAgICBAaW5jbHVkZSBoZWFkLW1lZGl1bTtcbiAgICAgIGNvbG9yOiAkbGltZS1ncmVlbi0wMztcbiAgICB9XG4gICAgLm90aGVyLWluZm8ge1xuICAgICAgLmFkZHJlc3MsXG4gICAgICAuZW1haWwge1xuICAgICAgICBAaW5jbHVkZSBkZXNwLXJlZ3VsYXI7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgICAmLmdyZXkge1xuICAgICAgICAuYWRkcmVzcyxcbiAgICAgICAgLmVtYWlsIHtcbiAgICAgICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmRldGFpbHMge1xuICAgICAgcGFkZGluZzogMTBweCAxOXB4O1xuICAgICAgcCB7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuICAgICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgY29sb3I6ICRncmV5LTgwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAudGFibGUgdGhlYWQgdGgge1xuICAgICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktNDUwO1xuICAgIH1cbiAgICAudGFibGUge1xuICAgICAgdHIudG90YWwgdGQge1xuICAgICAgICBAaW5jbHVkZSBkZXNwLW1lZGl1bTtcbiAgICAgIH1cbiAgICB9XG4gICAgcC5ib3R0b20ge1xuICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbGVyKTtcbiAgICB9XG4gIH1cbn1cblxuLnVuaXQge1xuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cbi5nZW5lcmF0ZWR7XG4gICAgcHtcbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuICAgICAgICAgICAgY29sb3I6ICRsaW1lLWdyZWVuLTAzOztcbiAgICAgICAgfVxuICAgIH1cbiAgIFxufSIsIjo6bmctZGVlcCAubWF0ZXJpYWwgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiA2NTBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG46Om5nLWRlZXAgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggaDUge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgY29sb3I6ICM1MmM1NzA7XG59XG46Om5nLWRlZXAgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLm90aGVyLWluZm8gLmFkZHJlc3MsXG46Om5nLWRlZXAgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLm90aGVyLWluZm8gLmVtYWlsIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuOjpuZy1kZWVwIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IC5vdGhlci1pbmZvLmdyZXkgLmFkZHJlc3MsXG46Om5nLWRlZXAgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLm90aGVyLWluZm8uZ3JleSAuZW1haWwge1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbjo6bmctZGVlcCAubWF0ZXJpYWwgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5pbmZvLW1vZGFsLWJveCAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDEwcHggMTlweDtcbn1cbjo6bmctZGVlcCAubWF0ZXJpYWwgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5pbmZvLW1vZGFsLWJveCAuZGV0YWlscyBwIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjODM5MWExO1xuICBmbG9hdDogcmlnaHQ7XG59XG46Om5nLWRlZXAgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLmRldGFpbHMgcCBzcGFuIHtcbiAgY29sb3I6ICMzNzM5NDY7XG59XG46Om5nLWRlZXAgLm1hdGVyaWFsIC5tYXQtZGlhbG9nLWNvbnRhaW5lciAuaW5mby1tb2RhbC1ib3ggLnRhYmxlIHRoZWFkIHRoIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xufVxuOjpuZy1kZWVwIC5tYXRlcmlhbCAubWF0LWRpYWxvZy1jb250YWluZXIgLmluZm8tbW9kYWwtYm94IC50YWJsZSB0ci50b3RhbCB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cbjo6bmctZGVlcCAubWF0ZXJpYWwgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5pbmZvLW1vZGFsLWJveCBwLmJvdHRvbSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udW5pdCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZ2VuZXJhdGVkIHAgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogIzUyYzU3MDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIGhlYWQtbGlnaHQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbn1cblxuQG1peGluIGhlYWQtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG5AbWl4aW4gZnQtY2FsYygkcGl4ZWxzKSB7XG4gIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbn1cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: IncomeViewReceiptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeViewReceiptsComponent", function() { return IncomeViewReceiptsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxwindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");











let IncomeViewReceiptsComponent = class IncomeViewReceiptsComponent {
    constructor(dialog, accountsService, cookieService, constantsService) {
        this.dialog = dialog;
        this.accountsService = accountsService;
        this.cookieService = cookieService;
        this.constantsService = constantsService;
        this.isReceiptsLoaded = false;
        this.receiptsData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "receiptNumber";
        this.unitOrder = true;
        this.isMobile = false;
        this.selectedInput = "";
        this.columnField = {};
        this.isReceiptPrintLoaded = false;
        this.submitFlag = true;
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
    getEmailStatus(value) {
        if (value) {
            return 'Y';
        }
        else {
            return 'N';
        }
    }
    getDate(receipt, date) {
        this.receiptsDataList.map(obj => {
            if (obj.receiptNumber == receipt.receiptNumber) {
                obj.paymentDateFormat = moment__WEBPACK_IMPORTED_MODULE_6__(date).format("DD/MM/YYYY");
            }
        });
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format("DD/MM/YYYY");
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
    setActive(item) {
        return '';
    }
    selectColInput(value) {
        this.selectedInput = value;
    }
    onSelectChange(event, type, name) {
        if (!underscore__WEBPACK_IMPORTED_MODULE_5__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
        }
        else {
            this.columnField = {};
        }
    }
    onDateChange(event, type) {
        if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_6__(event).format("DD/MM/YYYY");
        }
        else {
            this.columnField = {};
        }
    }
    onGlSearchFilter() {
        if (this.receiptsData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.receiptsData;
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
    onEditReverse(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.receipts = dataRecord;
        this.reversePopOverSelectorReceipt = '#' + this.receipts.receiptNumber;
        setTimeout(() => {
            this.reversePopOver.createComponent();
            this.reversePopOver.open();
        }, 100);
    }
    onUpdateInvoice(detail) {
        var invoice = this.datagrid.getrowdata(detail.rowId);
        // this.updateInvoiceItem(invoice, detail.column);
    }
    //receiptInfo
    downloadReceiptEvent() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            collectionId: 188
        };
        this.isReceiptPrintLoaded = false;
        this.accountsService.getCollectionByCollectionId(params).subscribe((res) => {
            // this.custTaxDetails = res[0].custinvoiceTax
            this.isReceiptPrintLoaded = true;
            this.receiptInfoDetails = res;
            console.log("receipt list ", res);
        });
        this.dialog.open(this.viewReceiptsDetailsRef, {
            panelClass: 'material',
            data: this.receiptInfoDetails
        });
    }
    getReceiptInfoDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_6__(date).format(this.constantsService.dateFormat);
    }
    tablebinding() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.accountsService.getIncomeTrackerReceiptsByApartmentId(params)
            .subscribe((res) => {
            this.receiptsDataList = res;
            this.receipts = this.receiptsDataList[0];
            this.reversePopOverSelectorReceipt = '#' + this.receipts.receiptNumber;
            this.gridSourceData = {
                localdata: this.receiptsDataList,
                datatype: "array"
            };
            this.receiptsDataList = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = this.receiptsDataList.length;
            console.log('aaa', this.receiptsDataList);
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isReceiptsLoaded = true;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.popperDataSource = {
            localdata: true,
            datatype: "boolean"
        };
        this.submitFlag = new jqx.dataAdapter(this.popperDataSource);
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Receipt No',
                datafield: 'receiptNumber',
                width: 120,
                pinned: true,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell"><a href="javascript:void(0)" class="mr-2 t-decor" onClick="downloadInvoiceEvent(' + row + ')">' + value + '</a></div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Name',
                datafield: 'name',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Payment Date',
                datafield: 'paymentDate',
                minwidth: 120,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Tower Unit',
                datafield: 'block_Unit',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Receipt Amount',
                datafield: 'amount',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Sent Email',
                datafield: 'isEmailSent',
                minwidth: 120,
                cellsrenderer: (row, column, value) => {
                    var chkedProperty;
                    if (value) {
                        chkedProperty = 'checked="true"';
                    }
                    else {
                        chkedProperty = '';
                    }
                    return '<div class="jqx-custom-inner-cell">'
                        + '<label class="switch float-left">'
                        + '<input type="checkbox" id="invoiceEmail" name="invoiceEmail"' + chkedProperty + '>'
                        + '<div class="slider round" onClick="updateInvoiceEvent(' + row + ', \'email\')"></div>'
                        + '</label>'
                        + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                minwidth: 120,
                datafield: 'isReversed',
                cellsrenderer: (row, coloumn, value) => {
                    let elemId = this.receiptsDataList.loadedData[row].receiptNumber;
                    // return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editInvoiceEvent('+ row +')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" id="'+ elemId +'" onClick="editReverseEvent('+ row +')"><i class="fa fa-repeat icon delete" aria-hidden="true"></i></a></div>'
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" class="mr-2 ' + getReverseStatus(value) + '" id="' + elemId + '" onClick="editReverseEvent(' + row + ')">'
                        + '<i class="fa fa-repeat icon delete" aria-hidden="true"></i>'
                        + '</a>'
                        + '<span class="squares medium ml-1 ' + getStatusClassName(value) + '">R</span>'
                        + '</div>';
                },
                renderer: columnrenderer
            }];
        this.tablebinding();
    }
};
IncomeViewReceiptsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewReceiptsDetailsRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IncomeViewReceiptsComponent.prototype, "viewReceiptsDetailsRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
], IncomeViewReceiptsComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopWindow', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxwindow__WEBPACK_IMPORTED_MODULE_8__["jqxWindowComponent"])
], IncomeViewReceiptsComponent.prototype, "reversePopWindow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_9__["jqxPopoverComponent"])
], IncomeViewReceiptsComponent.prototype, "reversePopOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewInvoiceDetailsRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IncomeViewReceiptsComponent.prototype, "viewInvoiceDetailsRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditReverse', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewReceiptsComponent.prototype, "onEditReverse", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onUpdateInvoice', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], IncomeViewReceiptsComponent.prototype, "onUpdateInvoice", null);
IncomeViewReceiptsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-receipts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-view-receipts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-view-receipts.component.scss */ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"]])
], IncomeViewReceiptsComponent);

let getStatusClassName = value => {
    return value ? 'red' : 'd-none';
};
let getReverseStatus = value => {
    return value ? 'd-none' : 'd-inline-block';
};
let editReverseEvent = row => {
    var event = new CustomEvent('onEditReverse', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editReverseEvent = editReverseEvent;
let updateInvoiceEvent = (row, type) => {
    var event = new CustomEvent('onUpdateInvoice', {
        detail: {
            rowId: row,
            column: type
        }
    });
    window.dispatchEvent(event);
};
window.updateInvoiceEvent = updateInvoiceEvent;


/***/ }),

/***/ "./src/app/ams/income-tracker/income-tracker-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ams/income-tracker/income-tracker-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: IncomeTrackerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerRoutingModule", function() { return IncomeTrackerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/income-sub-ledger/income-sub-ledger.component */ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts");
/* harmony import */ var _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/income-view-receipts/income-view-receipts.component */ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts");
/* harmony import */ var _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/income-view-credit/income-view-credit.component */ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts");
/* harmony import */ var _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/income-view-invoice/income-view-invoice.component */ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts");
/* harmony import */ var _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/income-view-invoice-history/income-view-invoice-history.component */ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts");
/* harmony import */ var _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/income-view-defaulters/income-view-defaulters.component */ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts");
/* harmony import */ var _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/income-post-multi-invoice/income-post-multi-invoice.component */ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts");
/* harmony import */ var _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/income-pay-invoice/income-pay-invoice.component */ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts");
/* harmony import */ var _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/income-tracker-ageing/income-tracker-ageing.component */ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts");
/* harmony import */ var _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/income-add-credit/income-add-credit.component */ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts");
/* harmony import */ var _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/income-tracker-reports/income-tracker-reports.component */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts");
/* harmony import */ var _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts");
/* harmony import */ var _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_general_income_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_auto_invoicing_income_tracker_setup_auto_invoicing_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_penalty_setup_income_tracker_setup_penalty_setup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.ts");
/* harmony import */ var _components_income_actions_income_actions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/income-actions/income-actions.component */ "./src/app/ams/income-tracker/components/income-actions/income-actions.component.ts");
/* harmony import */ var _components_income_customer_advances_income_customer_advances_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/income-customer-advances/income-customer-advances.component */ "./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.ts");
/* harmony import */ var _components_income_security_deposit_income_security_deposit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/income-security-deposit/income-security-deposit.component */ "./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.ts");
/* harmony import */ var _components_income_journal_income_journal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/income-journal/income-journal.component */ "./src/app/ams/income-tracker/components/income-journal/income-journal.component.ts");
/* harmony import */ var _components_income_invoice_credit_income_invoice_credit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/income-invoice-credit/income-invoice-credit.component */ "./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.ts");
/* harmony import */ var _components_income_all_credits_income_all_credits_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/income-all-credits/income-all-credits.component */ "./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.ts");


























const routes = [
    { path: '', redirectTo: 'subledger', pathMatch: 'full' },
    {
        path: 'settings', component: _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_14__["IncomeTrackerSetupComponent"],
        children: [
            { path: 'general', component: _components_income_tracker_setup_income_tracker_setup_general_income_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_17__["IncomeTrackerSetupGeneralComponent"], pathMatch: 'full' },
            { path: 'auto-invoicing', component: _components_income_tracker_setup_income_tracker_setup_auto_invoicing_income_tracker_setup_auto_invoicing_component__WEBPACK_IMPORTED_MODULE_18__["IncomeTrackerSetupAutoInvoicingComponent"] },
            { path: 'penalty-setup', component: _components_income_tracker_setup_income_tracker_setup_penalty_setup_income_tracker_setup_penalty_setup_component__WEBPACK_IMPORTED_MODULE_19__["IncomeTrackerSetupPenaltySetupComponent"] },
            { path: '**', redirectTo: 'general', pathMatch: 'full' }
        ]
    },
    { path: 'actions', component: _components_income_actions_income_actions_component__WEBPACK_IMPORTED_MODULE_20__["IncomeActionsComponent"],
        children: [
            { path: 'pay-invoice/:id', component: _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_10__["IncomePayInvoiceComponent"], pathMatch: 'full' },
            { path: 'view-invoice-history/:id', component: _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewInvoiceHistoryComponent"] },
            { path: 'view-creditnote/:id', component: _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_5__["IncomeViewCreditComponent"] },
            { path: 'customer-advances/:id', component: _components_income_customer_advances_income_customer_advances_component__WEBPACK_IMPORTED_MODULE_21__["IncomeCustomerAdvancesComponent"] },
            { path: 'security-deposit/:id', component: _components_income_security_deposit_income_security_deposit_component__WEBPACK_IMPORTED_MODULE_22__["IncomeSecurityDepositComponent"] },
            { path: 'journal/:id', component: _components_income_journal_income_journal_component__WEBPACK_IMPORTED_MODULE_23__["IncomeJournalComponent"] },
            { path: '**', redirectTo: 'pay-invoice/:id', pathMatch: 'full' }
        ]
    },
    { path: 'invoice-credit', component: _components_income_invoice_credit_income_invoice_credit_component__WEBPACK_IMPORTED_MODULE_24__["IncomeInvoiceCreditComponent"],
        children: [
            { path: 'post-invoice', component: _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostMultiInvoiceComponent"], pathMatch: 'full' },
            { path: 'add-credit/:type', component: _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_12__["IncomeAddCreditComponent"], pathMatch: 'full' },
            { path: '**', redirectTo: 'post-invoice', pathMatch: 'full' }
        ]
    },
    { path: 'subledger', component: _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_3__["IncomeSubLedgerComponent"] },
    { path: 'view-invoice-history/:id', component: _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewInvoiceHistoryComponent"] },
    { path: 'all-invoices', component: _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_6__["IncomeViewInvoiceComponent"] },
    { path: 'all-creditnotes', component: _components_income_all_credits_income_all_credits_component__WEBPACK_IMPORTED_MODULE_25__["IncomeAllCreditsComponent"] },
    { path: 'post-invoice', component: _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostMultiInvoiceComponent"] },
    { path: 'post-multi-invoice/:id/:type', component: _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostMultiInvoiceComponent"] },
    { path: 'edit-invoice/:id/:invoiceid', component: _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostMultiInvoiceComponent"] },
    { path: 'pay-invoice/:id', component: _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_10__["IncomePayInvoiceComponent"] },
    { path: 'receipts', component: _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_4__["IncomeViewReceiptsComponent"] },
    { path: 'creditnote', component: _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_5__["IncomeViewCreditComponent"] },
    { path: 'add-credit/:id', component: _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_12__["IncomeAddCreditComponent"] },
    { path: 'edit-credit/:id', component: _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_12__["IncomeAddCreditComponent"] },
    { path: 'defaulters', component: _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_8__["IncomeViewDefaultersComponent"] },
    { path: 'ageing', component: _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_11__["IncomeTrackerAgeingComponent"] },
    { path: 'reports', component: _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_13__["IncomeTrackerReportsComponent"] },
    { path: 'reports/customer', component: _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_15__["IncomeTrackerReportsCustomerComponent"] },
    { path: 'reports/vendor', component: _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_16__["IncomeTrackerReportsVendorComponent"] },
    { path: '**', redirectTo: 'subledger', pathMatch: 'full' }
];
let IncomeTrackerRoutingModule = class IncomeTrackerRoutingModule {
};
IncomeTrackerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], IncomeTrackerRoutingModule);



/***/ }),

/***/ "./src/app/ams/income-tracker/income-tracker.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/ams/income-tracker/income-tracker.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9pbmNvbWUtdHJhY2tlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/income-tracker.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ams/income-tracker/income-tracker.component.ts ***!
  \****************************************************************/
/*! exports provided: IncomeTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerComponent", function() { return IncomeTrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IncomeTrackerComponent = class IncomeTrackerComponent {
    constructor() { }
    ngOnInit() {
    }
};
IncomeTrackerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./income-tracker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/income-tracker.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./income-tracker.component.scss */ "./src/app/ams/income-tracker/income-tracker.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IncomeTrackerComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/income-tracker.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ams/income-tracker/income-tracker.module.ts ***!
  \*************************************************************/
/*! exports provided: IncomeTrackerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomeTrackerModule", function() { return IncomeTrackerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _income_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-tracker-routing.module */ "./src/app/ams/income-tracker/income-tracker-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _income_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./income-tracker.component */ "./src/app/ams/income-tracker/income-tracker.component.ts");
/* harmony import */ var _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/income-sub-ledger/income-sub-ledger.component */ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts");
/* harmony import */ var _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/income-view-receipts/income-view-receipts.component */ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts");
/* harmony import */ var _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/income-view-credit/income-view-credit.component */ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts");
/* harmony import */ var _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/income-view-invoice/income-view-invoice.component */ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts");
/* harmony import */ var _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/income-view-invoice-history/income-view-invoice-history.component */ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts");
/* harmony import */ var _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/income-view-defaulters/income-view-defaulters.component */ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts");
/* harmony import */ var _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/income-post-multi-invoice/income-post-multi-invoice.component */ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts");
/* harmony import */ var _components_income_post_multi_invoice_fields_income_post_multi_invoice_fields_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component */ "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.ts");
/* harmony import */ var _components_income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/income-post-collection/income-post-collection.component */ "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.ts");
/* harmony import */ var _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/income-pay-invoice/income-pay-invoice.component */ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts");
/* harmony import */ var _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/income-tracker-ageing/income-tracker-ageing.component */ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts");
/* harmony import */ var _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/income-add-credit/income-add-credit.component */ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts");
/* harmony import */ var _components_income_invoice_reverse_income_invoice_reverse_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/income-invoice-reverse/income-invoice-reverse.component */ "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.ts");
/* harmony import */ var _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/income-tracker-reports/income-tracker-reports.component */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts");
/* harmony import */ var _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts");
/* harmony import */ var _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component */ "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts");
/* harmony import */ var _components_income_tracker_filter_income_tracker_filter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/income-tracker-filter/income-tracker-filter.component */ "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.ts");
/* harmony import */ var _components_income_receipts_reverse_income_receipts_reverse_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/income-receipts-reverse/income-receipts-reverse.component */ "./src/app/ams/income-tracker/components/income-receipts-reverse/income-receipts-reverse.component.ts");
/* harmony import */ var _components_income_history_reverse_income_history_reverse_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/income-history-reverse/income-history-reverse.component */ "./src/app/ams/income-tracker/components/income-history-reverse/income-history-reverse.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_general_income_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-general/income-tracker-setup-general.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_auto_invoicing_income_tracker_setup_auto_invoicing_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-auto-invoicing/income-tracker-setup-auto-invoicing.component.ts");
/* harmony import */ var _components_income_tracker_setup_income_tracker_setup_penalty_setup_income_tracker_setup_penalty_setup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component */ "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup-penalty-setup/income-tracker-setup-penalty-setup.component.ts");
/* harmony import */ var _components_income_actions_income_actions_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/income-actions/income-actions.component */ "./src/app/ams/income-tracker/components/income-actions/income-actions.component.ts");
/* harmony import */ var _components_income_customer_advances_income_customer_advances_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/income-customer-advances/income-customer-advances.component */ "./src/app/ams/income-tracker/components/income-customer-advances/income-customer-advances.component.ts");
/* harmony import */ var _components_income_security_deposit_income_security_deposit_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/income-security-deposit/income-security-deposit.component */ "./src/app/ams/income-tracker/components/income-security-deposit/income-security-deposit.component.ts");
/* harmony import */ var _components_income_journal_income_journal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/income-journal/income-journal.component */ "./src/app/ams/income-tracker/components/income-journal/income-journal.component.ts");
/* harmony import */ var _components_income_add_customer_advance_income_add_customer_advance_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/income-add-customer-advance/income-add-customer-advance.component */ "./src/app/ams/income-tracker/components/income-add-customer-advance/income-add-customer-advance.component.ts");
/* harmony import */ var _components_income_add_security_deposit_income_add_security_deposit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/income-add-security-deposit/income-add-security-deposit.component */ "./src/app/ams/income-tracker/components/income-add-security-deposit/income-add-security-deposit.component.ts");
/* harmony import */ var _components_income_invoice_credit_income_invoice_credit_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/income-invoice-credit/income-invoice-credit.component */ "./src/app/ams/income-tracker/components/income-invoice-credit/income-invoice-credit.component.ts");
/* harmony import */ var _components_income_all_credits_income_all_credits_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/income-all-credits/income-all-credits.component */ "./src/app/ams/income-tracker/components/income-all-credits/income-all-credits.component.ts");





































let IncomeTrackerModule = class IncomeTrackerModule {
};
IncomeTrackerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _income_tracker_component__WEBPACK_IMPORTED_MODULE_5__["IncomeTrackerComponent"],
            _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_6__["IncomeSubLedgerComponent"],
            _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewReceiptsComponent"],
            _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_8__["IncomeViewCreditComponent"],
            _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomeViewInvoiceComponent"],
            _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_10__["IncomeViewInvoiceHistoryComponent"],
            _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_11__["IncomeViewDefaultersComponent"],
            _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_12__["IncomePostMultiInvoiceComponent"],
            _components_income_post_multi_invoice_fields_income_post_multi_invoice_fields_component__WEBPACK_IMPORTED_MODULE_13__["IncomePostMultiInvoiceFieldsComponent"],
            _components_income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_14__["IncomePostCollectionComponent"],
            _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_15__["IncomePayInvoiceComponent"],
            _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_17__["IncomeAddCreditComponent"],
            _components_income_invoice_reverse_income_invoice_reverse_component__WEBPACK_IMPORTED_MODULE_18__["IncomeInvoiceReverseComponent"],
            _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_16__["IncomeTrackerAgeingComponent"],
            _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_19__["IncomeTrackerReportsComponent"],
            _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_20__["IncomeTrackerSetupComponent"],
            _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_21__["IncomeTrackerReportsCustomerComponent"],
            _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_22__["IncomeTrackerReportsVendorComponent"],
            _components_income_tracker_filter_income_tracker_filter_component__WEBPACK_IMPORTED_MODULE_23__["IncomeTrackerFilterComponent"],
            _components_income_receipts_reverse_income_receipts_reverse_component__WEBPACK_IMPORTED_MODULE_24__["IncomeReceiptsReverseComponent"],
            _components_income_history_reverse_income_history_reverse_component__WEBPACK_IMPORTED_MODULE_25__["IncomeHistoryReverseComponent"],
            _components_income_tracker_setup_income_tracker_setup_general_income_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_26__["IncomeTrackerSetupGeneralComponent"],
            _components_income_tracker_setup_income_tracker_setup_auto_invoicing_income_tracker_setup_auto_invoicing_component__WEBPACK_IMPORTED_MODULE_27__["IncomeTrackerSetupAutoInvoicingComponent"],
            _components_income_tracker_setup_income_tracker_setup_penalty_setup_income_tracker_setup_penalty_setup_component__WEBPACK_IMPORTED_MODULE_28__["IncomeTrackerSetupPenaltySetupComponent"],
            _components_income_actions_income_actions_component__WEBPACK_IMPORTED_MODULE_29__["IncomeActionsComponent"],
            _components_income_customer_advances_income_customer_advances_component__WEBPACK_IMPORTED_MODULE_30__["IncomeCustomerAdvancesComponent"],
            _components_income_security_deposit_income_security_deposit_component__WEBPACK_IMPORTED_MODULE_31__["IncomeSecurityDepositComponent"],
            _components_income_journal_income_journal_component__WEBPACK_IMPORTED_MODULE_32__["IncomeJournalComponent"],
            _components_income_add_customer_advance_income_add_customer_advance_component__WEBPACK_IMPORTED_MODULE_33__["IncomeAddCustomerAdvanceComponent"],
            _components_income_add_security_deposit_income_add_security_deposit_component__WEBPACK_IMPORTED_MODULE_34__["IncomeAddSecurityDepositComponent"],
            _components_income_invoice_credit_income_invoice_credit_component__WEBPACK_IMPORTED_MODULE_35__["IncomeInvoiceCreditComponent"],
            _components_income_all_credits_income_all_credits_component__WEBPACK_IMPORTED_MODULE_36__["IncomeAllCreditsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _income_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncomeTrackerRoutingModule"]
        ],
        bootstrap: [_income_tracker_component__WEBPACK_IMPORTED_MODULE_5__["IncomeTrackerComponent"]]
    })
], IncomeTrackerModule);



/***/ })

}]);
//# sourceMappingURL=income-tracker-income-tracker-module-es2015.js.map