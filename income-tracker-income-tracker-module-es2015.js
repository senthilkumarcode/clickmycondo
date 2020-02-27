(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-tracker-income-tracker-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-add-credit-wrapper\">\n\t\n\t<div class=\"card clear\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 *ngIf=\"!isEditCredit\">Add Credit Note</h5>\n    \t\t\t<h5 *ngIf=\"isEditCredit\">Edit Credit Note</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAccountDataLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t\t<form #addCreditNoteForm = \"ngForm\" name=\"addCreditNoteForm\" (ngSubmit)=\"submitAddCreditNoteForm(addCreditNoteForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isCreditSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isCreditSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\n\t\t\t\t\t\t <!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Select Block</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"showUnitData(apartmentBlockId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{item.apartmentBlockNumber}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div> \n\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isBlockSelected\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Select Unit</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockUnitId\" (ngModelChange)=\"showInvoiceData(apartmentBlockUnitId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitListData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitSelected\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Select Invoices</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"invoiceId\" \n\t\t\t\t\t\t\t        id=\"invoiceId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"credit.invoiceId\" (ngModelChange)=\"getInvoice(credit.invoiceId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of invoiceData\" [value]=\"item.custInvoiceId\">{{ item.custInvoiceId}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div> -->\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Posted On*</label>\n\t\t\t                    <input class=\"form-control\" name=\"invoiceDueDate\" [owlDateTime]=\"postedOn\" [owlDateTimeTrigger]=\"postedOn\" placeholder=\"Date\" [(ngModel)]=\"credit.insertedOn\">\n\t\t\t\t\t\t\t\t<owl-date-time #postedOn [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Amount*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter text\" name=\"creditAmount\" [(ngModel)]=\"credit.amount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"credit.comment\" required>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Email*</label>\n\t\t\t                    <label class=\"switch\">\n\t\t\t\t\t\t\t\t  \t<input type=\"checkbox\" name=\"isEmailSent\" [(ngModel)]=\"credit.isEmailSent\" >\n\t\t\t\t\t\t\t\t  \t<span class=\"slider round\" (click)=\"setActive()\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>SMS*</label>\n\t\t\t                    <label class=\"switch\">\n\t\t\t\t\t\t\t\t  \t<input type=\"checkbox\" name=\"isSmssent\" [(ngModel)]=\"credit.isSmssent\" >\n\t\t\t\t\t\t\t\t  \t<span class=\"slider round\" (click)=\"setActive()\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"addCreditNoteForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-pay-invoice-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear card-table\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Bills to be payed <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-header at-header\" *ngIf=\"isAccountDataLoaded\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" class=\"select\" [ngClass]=\"isNoItemsAvailable() ? 'no-link':''\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"selectAllInvoices\" \n\t\t\t\t\t\t\t\t    name=\"selectAllInvoices\" \n\t\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllInvoices\"\n\t                            \t(ngModelChange)=\"getAllInvoices()\" >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllInvoices\" [ngClass]=\"isNoItemsAvailable() ? 'disabled':'' \"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t     \t  </th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billNo')\">Bill No <span [ngClass]=\"getFieldOrderBy('billNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('custInvoiceDate')\">Bill Date<span [ngClass]=\"getFieldOrderBy('custInvoiceDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('dueDate')\">Due Date<span [ngClass]=\"getFieldOrderBy('dueDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('comments')\">Comments<span [ngClass]=\"getFieldOrderBy('comments')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('custInvoiceAmount')\">Bill Amount<span [ngClass]=\"getFieldOrderBy('custInvoiceAmount')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billToPay')\">Remaining Amount<span [ngClass]=\"getFieldOrderBy('billToPay')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t     \t<tr *ngFor=\"let invoice of invoiceDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: invoiceData ; let i = index\" [ngClass]=\"invoice.checked ? 'selected' : ''\">\n\t\t\t\t     \t  <td class=\"select\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"{{invoice.custInvoiceId}}\" \n\t\t                            name=\"{{invoice.custInvoiceId}}\"\n\t\t                            [(ngModel)]=\"invoice.checked\"\n\t\t                            (ngModelChange)=\"getSelectedInvoice(invoice)\"\n\t\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{invoice.custInvoiceId}}\"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t      \t  </td>\n\t\t\t\t\t      <td class=\"grey\"> <a href=\"javascript:void(0)\" class=\"t-decor tc-s-blue\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-invoice/{{invoice.custInvoiceId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">{{invoice.custInvoiceId}}</a></td>\n\t\t\t\t\t      <td class=\"name\">{{getInvoiceDate(invoice.custInvoiceDate)}}</td>\n\t\t\t\t\t      <td class=\"name\">{{getInvoiceDate(invoice.dueDate)}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.comments}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.custInvoiceAmount}}</td>\n\t\t\t\t\t      <td class=\"name\"></td>\n\t\t\t\t\t    </tr>\n\n\t\t\t\t     </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<app-income-post-collection *ngIf=\"isInvoiceSelected\" [totalAmountArray]=\"totalAmountArray\" [invoiceIdArray]=\"selectedInvoiceIdArray\" (collectionParams)=\"isCollectionMade($event)\"></app-income-post-collection>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-post-collection-wrapper mt-20\">\n\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Post Collection</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<form #postIncomeCollectionForm = \"ngForm\" name=\"postIncomeCollectionForm\" (ngSubmit)=\"submitIncomePostCollectionForm(postIncomeCollectionForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isCollectionSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isCollectionSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Amount*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter text\" name=\"collectionAmount\" [(ngModel)]=\"collection.amount\" readonly required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Instrument Type*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"InstrumentType\" \n\t\t\t\t\t\t\t        id=\"InstrumentType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.instrumentTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of instrumentTypeListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Deposit Slip Number*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"depositSlipNo\" \n\t\t\t\t\t\t\t        id=\"depositSlipNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.depositSlipNumber\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of depositSlipLisData\" [value]=\"item.id\">{{ item.id }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Post On*</label>\n\t\t\t                    <input class=\"form-control\" name=\"collectionPostOn\" [owlDateTime]=\"collectionPostOn\" [owlDateTimeTrigger]=\"collectionPostOn\" placeholder=\"Date\" [(ngModel)]=\"collection.postOn\">\n\t\t\t\t\t\t\t\t<owl-date-time #collectionPostOn [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Payment Status*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"paymentStatusType\" \n\t\t\t\t\t\t\t        id=\"paymentStatusType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.collectionStatusId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of paymentStatusListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comments\" [(ngModel)]=\"collection.comment\" required>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"postIncomeCollectionForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-post-invoice-wrapper\">\n\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 *ngIf=\"!isEditInvoice && isNewInvoice\">Post Single Invoice</h5>\n    \t\t\t<h5 *ngIf=\"isEditInvoice && !isNewInvoice\">Edit Single Invoice</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAccountDataLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t\t<form #postIncomeInvoiceForm = \"ngForm\" name=\"postIncomeInvoiceForm\" (ngSubmit)=\"submitIncomeInvoiceForm(postIncomeInvoiceForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isInvoiceSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isInvoiceSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Invoice Amount*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"invoiceAmount\" [(ngModel)]=\"invoice.custInvoiceAmount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Account*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"accountType\" \n\t\t\t\t\t\t\t        id=\"accountType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"invoice.glaccountId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of glAccountListData\" [value]=\"item.glaccountId\">{{ item.glaccountName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Invoice Date*</label>\n\t\t\t                    <input class=\"form-control\" name=\"invoiceDueDate\" [owlDateTime]=\"invoiceDueDate\" [owlDateTimeTrigger]=\"invoiceDueDate\" placeholder=\"Date\" [(ngModel)]=\"invoice.dueDate\">\n\t\t\t\t\t\t\t\t<owl-date-time #invoiceDueDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comments\" [(ngModel)]=\"invoice.comments\" required>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" #TAXInvoiceChecked class=\"form-check-input\" id=\"TAXInvoiceChecked\" name=\"TAXInvoiceChecked\" [(ngModel)]=\"invoice.isTax\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"TAXInvoiceChecked\">TAX</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh ml-5\">\n\t\t\t\t\t\t\t\t<div class=\"d-none d-md-block h-35\"></div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" #recurInvoiceChecked class=\"form-check-input\" id=\"recurInvoiceChecked\" name=\"recurInvoiceChecked\" [(ngModel)]=\"invoice.isRecurCustInvoice\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"recurInvoiceChecked\">Recur Invoice*</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"postIncomeInvoiceForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-post-invoice-fields-wrapper\">\n\n\t<form #postIncomeMultiInvoiceFieldsForm =\"ngForm\" name=\"postIncomeMultiInvoiceFieldsForm\">\n\t\n\t<div class=\"invoice-fields\" [ngClass]=\"postIncomeMultiInvoiceFieldsForm.valid ? 'valid' : ''\">\n\t\t\n\t\t<div class=\"float-close-wrapper\">\n\t\t\t\n\t\t\t<div class=\"float-close mb-3\" [ngClass]=\"isArrayOne() ? 'delete' : 'disabled'\" (click)=\"deleteBlock()\">\n    \t\t\t<i-feather class=\"icon rotate\" name=\"x\" width=\"18\"></i-feather>\n    \t\t</div>\n\n\t    \t<div class=\"float-close\" [ngClass]=\"this.invoiceForm.valid ? 'valid' : 'disabled'\">\n\t    \t\t<i-feather class=\"icon rotate\" name=\"check\" width=\"18\"></i-feather>\n\t    \t</div>\n\n\t\t</div>\n\n\t\t\t<div class=\"row\">\n\t\t\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"select-box\">\n\t\t               <label>Account*</label>\n\t\t               <select \n\t\t\t\t\t        name=\"accountType\" \n\t\t\t\t\t        id=\"accountType\" \n\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t        [(ngModel)]=\"invoiceGLAccountsData.glaccountId\"  \n\t\t\t\t\t        (ngModelChange)=\"onAccountChange(invoiceGLAccountsData.glaccountId)\"\n\t\t\t\t\t        required>\n\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t        <option *ngFor=\"let item of glAccountListData\" [value]=\"item.glaccountId\">{{ item.glaccountName }}</option>\n\t\t\t\t\t    </select>\n\t\t    \t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t                <label>Invoice Amount*</label>\n\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"invoiceAmount\" \n\t\t                [(ngModel)]=\"invoiceGLAccountsData.amount\" \n\t\t                (ngModelChange)=\"onInvoiceAmountChange(invoiceGLAccountsData.amount)\"\n\t\t                required>\n\t\t    \t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t                <label>Comments</label>\n\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comments\" \n\t\t                [(ngModel)]=\"invoiceGLAccountsData.comments\" \n\t\t                (ngModelChange)=\"onCommentChange(invoiceGLAccountsData.comments)\"\n\t\t                required>\n\t\t    \t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-post-invoice-wrapper\">\n\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 *ngIf=\"!isEditInvoice\">Post Multi Invoice</h5>\n    \t\t\t<h5 *ngIf=\"isEditInvoice\">Edit Multi Invoice</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAccountDataLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t\t<form #postIncomeMultiInvoiceForm = \"ngForm\" name=\"postIncomeMultiInvoiceForm\" (ngSubmit)=\"submitIncomeMultiInvoiceForm(postIncomeMultiInvoiceForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isInvoiceSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isInvoiceSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t\t<app-income-post-multi-invoice-fields \n\t\t\t\t\t\t*ngFor=\"let invoiceGLAccountsData of invoiceGLAccountsArray; let i = index\"\n\t\t\t\t\t\t[index]=\"i\"\n\t\t\t\t\t\t[invoiceGLAccountsArray]=\"invoiceGLAccountsArray\"\n\t\t\t\t\t\t(fieldParams) = getFieldParams($event)\n\t\t\t\t\t\t>\t\n\t\t\t\t\t\t</app-income-post-multi-invoice-fields>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Due Date*</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"invoiceDueDate\" [owlDateTime]=\"invoiceDueDate\" [owlDateTimeTrigger]=\"invoiceDueDate\" placeholder=\"Date\" [(ngModel)]=\"invoice.dueDate\">\n\t\t\t\t\t\t\t\t\t<owl-date-time #invoiceDueDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t  \t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group mt-sm-35\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" #GSTInvoiceChecked class=\"form-check-input\" id=\"GSTInvoiceChecked\" name=\"GSTInvoiceChecked\" [(ngModel)]=\"invoice.isTax\">\n\t\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"GSTInvoiceChecked\">VAT</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh ml-5\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group mt-sm-35\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" #recurInvoiceChecked class=\"form-check-input\" id=\"recurInvoiceChecked\" name=\"recurInvoiceChecked\" [(ngModel)]=\"invoice.isRecurCustInvoice\">\n\t\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"recurInvoiceChecked\">Recur Invoice</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue trans-border\" [disabled]=\"postIncomeMultiInvoiceForm.invalid || isFormInValid\">Submit</button>\n\t\t\t\t    \t\t\t<div class=\"btn trans-red ml-3\" (click)=\"addInvoice()\">Add Another Invoice</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-sub-ledger-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isSubLedgerDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isSubLedgerDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Pending</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Nill</li>\n\t</ul>\n\n\t<div class=\"card clear card-table\" *ngIf=\"isSubLedgerDataLoaded\">\n\t\t\n\t\t<div class=\"card-body filter-box\">\n  \t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n  \t\t\t<div class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"AllBlockDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"getAllBlockData('all')\" [ngClass]=\"getSelected('all')\">\n\t  \t\t\t\t<span>All Blocks</span>\n\t\t        </a>\n\t\t\t</div>\n  \t\t\t<div class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"singleBlockDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\" [ngClass]=\"getSelected('single')\">\n\t  \t\t\t\t<span>{{singleBlock}}</span>\n\t  \t\t\t\t<div class=\"arrow\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></div>\n\t\t        </a>\n\t\t        <div class=\"dropdown-menu\" aria-labelledby = \"singleBlockDropDown\">\n\t\t         \t<a href=\"javascript:void(0)\" *ngFor=\"let block of blockListData\" (click)=\"getSingleBlock(block)\">{{block.apartmentBlockNumber}}</a>\n\t\t        </div>\n\t\t\t</div>\n  \t\t</div>\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Sub Ledgers <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p>\n    \t\t\t\t<span *ngIf=\"filterSelected == 'all'\">All Blocks</span>\n    \t\t\t\t<span *ngIf=\"filterSelected != 'all'\">Residents under {{singleBlock}}</span>\n    \t\t\t</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"subLedgerData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('primayContact')\">Primary Contact <span [ngClass]=\"getFieldOrderBy('primayContact')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billToParty')\">Bill to Party <span [ngClass]=\"getFieldOrderBy('billToParty')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">Block Details <span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('due')\">Due<span [ngClass]=\"getFieldOrderBy('due')\"></span></th>\n\t\t\t\t      <th class=\"max-50 text-center\" scope=\"col\" (click)=\"sortUnitData('status')\">Status<span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th class=\"text-center\" scope=\"col\">Actions</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let ledger of subLedgerDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: subLedgerData ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{ledger.primayContact}}</td>\n\t\t\t\t      <td class=\"grey\">{{ledger.billToParty}}</td>\n\t\t\t\t      <td class=\"grey\">{{ledger.apartmentBlockNumber}} {{ledger.apartmentBlockUnitNumber}}</td>\n\t\t\t\t      <td class=\"name\">{{ledger.due}}</td>\n\t\t\t\t      <td class=\"name text-center\"><span class=\"dots ml-1\" [ngClass]=\"getDueAmount(ledger.due)\"></span></td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"invoiceDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"invoiceDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/income/view-invoice-history/{{ledger.apartmentBlockUnitId}}\">View History</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showInvoiceTypes(ledger)\">Post Invoice</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/income/post-collection/{{ledger.apartmentBlockUnitId}}\">Post Collection</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\">Print</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t\t    <tr class=\"selected\" *ngIf=\"isItemsAvailable()\">\n\t\t\t\t    \t<td class=\"name\">Net</td>\n\t\t\t\t    \t<td class=\"grey\"></td>\n\t\t\t\t    \t<td class=\"grey\"></td>\n\t\t\t\t    \t<td class=\"name\">{{netDueAmount}}</td>\n\t\t\t\t    \t<td class=\"name text-center\"><span class=\"dots ml-1\" [ngClass]=\"getDueAmount(netDueAmount)\"></span></td>\n\t\t\t\t    \t<td class=\"name\"></td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<div class=\"button-wrapper\" *ngIf=\"isItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">Total Amount Due : <span class=\"ml-1\">{{totalDueAmount}}</span></p>\n    \t\t\t<p class=\"snippet\">Total Excess Payments & Incentives Due : <span class=\"ml-1\">{{totalDueAmount - netDueAmount}}</span></p>\n    \t\t\t<p class=\"snippet\">Net Amount : <span class=\"ml-1\">{{netDueAmount}}</span></p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n  \t</div>\n\n  \t<ng-template #viewInvoiceTypeRef let-ledger>\n  \t\t\n  \t\t<div class=\"menu-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Select Invoice Types</h5>\n\t\t\t</div>\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body p-0 lists other\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" routerLink=\"/ams/income/post-invoice/{{ledger.apartmentBlockUnitId}}/new\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Invoice - Single Line</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" routerLink=\"/ams/income/post-multi-invoice/{{ledger.apartmentBlockUnitId}}/new\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Invoice - Multi Line</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" routerLink=\"/ams/income/add-credit/{{ledger.apartmentBlockUnitId}}/new\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Credit Note</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\">Refund Note</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n  \t</ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-tracker-ageing-wrapper\">\n\n\t<h4 class=\"main-title-mini float-left\">Account Ageing</h4>\n\t<h6 class=\"head-label\" *ngIf=\"isDataLoaded\">{{totalInvoices}} Invoices</h6>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"filter-box\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item title\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>\n\t\t\t\t\t\t\t<span>Filter</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\" (click)=\"setDataType('DueAge')\" [ngClass]=\"dataType == 'DueAge' ? 'active' : ''\">\n\t\t\t\t\t\t<p>Due Age</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\" (click)=\"setDataType('InvoiceAge')\" [ngClass]=\"dataType == 'InvoiceAge' ? 'active' : ''\">\n\t\t\t\t\t\t<p>Invoice Age</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 col-md-12 col-lg-12\">\n\t\t\t\n\t\t\t<div class=\"card clear account-chart-card\">\n\t\t\n\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t<app-loader *ngIf=\"!isChartLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"chart-box\" [ngClass]=\"!isChartLoaded ? 'hide-chart' : ''\">\n\t\t\t\t\t\t<canvas #incomePieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"legends-list\" *ngIf=\"isChartLoaded\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small low mr-2\"></span> 0 - 30 days</div>\n\t\t\t\t\t\t\t<div>{{this.totalAmountItem1}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small cyan mr-2\"></span> 31 - 60 days</div>\n\t\t\t\t\t\t\t<div>{{this.totalAmountItem3}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small m-red mr-2\"></span> 61 - 90 days</div>\n\t\t\t\t\t\t\t<div>{{this.totalAmountItem4}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small blue mr-2\"></span> Over 90 days</div>\n\t\t\t\t\t\t\t<div>{{this.totalAmountItem5}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\n\t\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card card-table clear table-accordion\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n    \t\t\t\t<h5>Collection on each Unit <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t\t<p class=\"d-none d-md-inline-block tc-blue\">Data as of Today ( {{asOfDate}} )</p>\n    \t\t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ageingData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn trans-white mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n    \t\t\t\t</li>\n\t    \t\t</ul>\n  \t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('primayContact')\">Tower Unit Name <span [ngClass]=\"getFieldOrderBy('primayContact')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billToParty')\">0 - 30 Days<span [ngClass]=\"getFieldOrderBy('billToParty')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">31 - 60 Days<span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">61 - 90 Days<span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('due')\">Over 90 Days<span [ngClass]=\"getFieldOrderBy('due')\"></span></th>\n\t\t\t\t\t      <th class=\"max-50 text-center\" scope=\"col\" (click)=\"sortUnitData('status')\">Total<span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t    \t<tbody>\n\t\t\t    \t\t<ng-container *ngFor=\"let ageing of ageingDataDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: ageingData ; let i = index\">\n\t\t\t    \t\t\t<tr data-toggle=\"collapse\" attr.data-target=\"#collapse{{ageing.unitID}}\" aria-expanded=\"true\" attr.aria-controls=\"collapse{{ageing.unitID}}\" class=\"collapsed\">\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t<div class=\"toggle-icon\"></div>\n\t\t\t\t\t\t\t\t<span>{{ageing.apartmentBlockNumber}} {{ageing.apartmentBlockUnitNumber}}</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt1 + ageing.bucketAmt2}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount1 + ageing.bucketCount2}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt3}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount3}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt4}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount4}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt5}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount5}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt6}}</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t    \t\t\t</tr>\n\t\t\t    \t\t\t<tr id=\"collapse{{ageing.unitID}}\" class=\"collapse\" attr.aria-labelledby=\"collapse{{ageing.unitID}}\" data-parent=\"#accordion\">\n\t\t\t    \t\t\t\t <td class=\"collapse-cell\" colspan=\"6\">\n\t\t\t\t    \t\t\t\t<table class=\"table\">\n\t\t\t\t    \t\t\t\t\t<tr class=\"details-wrapper\" *ngFor=\"let invoice of ageing.invoiceDetails\">\n\t\t\t\t    \t\t\t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<span class=\"dots small low\"></span>\n\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<p class=\"head\">Invoice ID</p>\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<p class=\"tc-grey\">{{invoice.custInvoiceId}}</p>\n\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t    \t\t\t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Invoice Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.invoiceAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Collection Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.collectionAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Due Date</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{getDate(invoice.dueDate)}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\" *ngIf=\"dateType == 'DueAge'\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Due Age</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.dueAge}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\" *ngIf=\"dateType != 'DueAge'\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Invoice Age</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.invoiceAge}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Balance Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.balanceAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t\t</td> \n\t\t\t    \t\t\t</tr>\n\t\t\t    \t\t</ng-container>\n\t\t\t    \t\t<tr class=\"selected\" *ngIf=\"isItemsAvailable()\">\n\t\t\t\t\t    \t<td class=\"name\">Total</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem1}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem3}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem4}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem5}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmount}}</td>\n\t\t\t\t    \t</tr>\n\t\t\t    \t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-credit-note-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isCreditNoteLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isCreditNoteLoaded\">\n\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/receipts\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/booking-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Receipts</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear card-table\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Credit Notes <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"creditNoteData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn l-blue mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('invoiceId')\">Invoice Id <span [ngClass]=\"getFieldOrderBy('invoiceId')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postedBy')\">Name <span [ngClass]=\"getFieldOrderBy('postedBy')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postedOn')\">Posted Date<span [ngClass]=\"getFieldOrderBy('postedOn')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('flatNo')\">Flat No<span [ngClass]=\"getFieldOrderBy('flatNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('amount')\">Amount<span [ngClass]=\"getFieldOrderBy('amount')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\">Sent Email</th>\n\t\t\t\t\t      <th scope=\"col\">SMS/Email</th>\n\t\t\t\t\t      <th scope=\"col\">Actions</th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let credit of creditNoteDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: creditNoteData ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{credit.invoiceId}}</td>\n\t\t\t\t\t      <td class=\"name\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{getCustomerName(credit.insertedBy)}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h5>Comments</h5>\n\t\t\t\t\t\t\t    \t\t\t<small>{{credit.comment}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(credit.insertedOn)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getBlockDetails(credit.invoiceId)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{credit.amount}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"credit.isEmailSent\" >\n\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateCreditItem(credit)\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"credit.isSmssent\" >\n\t\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateCreditItem(credit)\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      \t</div>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-credit/{{credit.creditNoteId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-view-defaulters-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDefaultersDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDefaultersDataLoaded\">\n\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear card-table\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>View Defaulters <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"defaultData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"selectAllDefaulters\" \n\t\t\t\t\t\t\t\t    name=\"selectAllDefaulters\" \n\t\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllDefaulters\"\n\t                            \t(ngModelChange)=\"getAllDefaulters()\" >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllDefaulters\"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t     \t  </th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('type')\">Type<span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unit')\">Unit<span [ngClass]=\"getFieldOrderBy('unit')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('primaryContact')\">Primary Contact <span [ngClass]=\"getFieldOrderBy('primaryContact')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone<span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('due')\">Amount<span [ngClass]=\"getFieldOrderBy('due')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('emailSetting')\">Email<span [ngClass]=\"getFieldOrderBy('emailSetting')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let default of defaultDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: defaultData ; let i = index\" [ngClass]=\"default.checked ? 'selected' : ''\">\n\t\t\t\t\t      <td class=\"select\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"{{default.invoiceNumber}}\" \n\t\t                            name=\"{{default.invoiceNumber}}\"\n\t\t                            [(ngModel)]=\"default.checked\"\n\t\t                            (ngModelChange)=\"getSelectedAllDefaulters(default)\"\n\t\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{default.invoiceNumber}}\"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t      \t  </td>\n\t\t\t\t\t      <td class=\"name\">{{default.type}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.unit}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.primaryContact}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.phone}}</td>\n\t\t\t\t\t      <td class=\"name\">{{default.due}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.emailSetting}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t\t<a class=\"btn lime-green sf\"\n\t    \t\t\t\t(click)=\"sendEmail()\"\n\t\t\t\t\t\t[ngClass]=\"!isDefaultSelected ? 'disabled' : ''\">\n\t\t\t\t\t\t<span>Send Email</span>\n\t    \t\t\t</a>\n\t    \t\t\t<a class=\"btn lime-green sf\"\n\t    \t\t\t\t(click)=\"sendSMS()\"\n\t\t\t\t\t\t[ngClass]=\"!isDefaultSelected ? 'disabled' : ''\">\n\t\t\t\t\t\t<span>Send SMS</span>\n\t    \t\t\t</a>\n\t    \t\t\t<!-- <form name=\"sendMessage\" novalidate>\n\t\t    \t\t\t<div class=\"input-box radio-box\">\n\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t                        <input name=\"sendMessage\" id=\"email\" [(ngModel)]=\"sendEmail\"  value=\"email\" type=\"radio\"required>\n\t\t                        <label class=\"radio-inline\" for=\"email\">Email</label>\n\t\t             \t\t</div>\n\t\t\t\t            <div class=\"form-group\">\n\t\t\t                    <input name=\"sendMessage\" id=\"sendSms\" [(ngModel)]=\"sendSms\" value=\"2\" type=\"radio\"required>\n\t\t\t                    <label class=\"radio-inline\" for=\"sendSms\">SMS</label>\n\t\t\t\t            </div>\n\t\t\t            </div>\n\t\t        \t</form> -->\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-view-invoice-history-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"legends list-inline\" *ngIf=\"isInvoiceDataLoaded\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Pending</li>\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Nill</li>\n\t\t</ul>\n\n\t\t<div class=\"card clear card-table\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Account History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t\t<p *ngIf=\"isAccountDataLoaded\">Resident under {{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-header at-header\" *ngIf=\"isAccountDataLoaded\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postedDate')\">Posted By<span [ngClass]=\"getFieldOrderBy('postedDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billNo')\">Bill No <span [ngClass]=\"getFieldOrderBy('billNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('receiptNo')\">Receipt No <span [ngClass]=\"getFieldOrderBy('receiptNo')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('balance')\">Due<span [ngClass]=\"getFieldOrderBy('balance')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('amountPaid')\">Amount Paid<span [ngClass]=\"getFieldOrderBy('amountPaid')\"></span></th>\n\t\t\t\t\t       <th class=\"max-50 text-center\" scope=\"col\" (click)=\"sortUnitData('status')\">Status<span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t\t      <th class=\"text-center\" scope=\"col\">Actions</th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let invoice of invoiceDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: invoiceData ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">\n\t\t\t\t\t      <a href=\"javascript:void(0)\" class=\"t-decor\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{getUserName(invoice.postedBy)}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h5>Posted Date</h5>\n\t\t\t\t\t\t\t    \t\t\t<small>{{getInvoiceDate(invoice.postedOn)}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h5>Comment</h5>\n\t\t\t\t\t\t\t    \t\t\t<small>{{invoice.comment}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"grey\"><a href=\"javascript:void(0)\" class=\"t-decor tc-s-blue\">{{invoice.billNo}}</a></td>\n\t\t\t\t\t      <td class=\"grey\"><a href=\"javascript:void(0)\" class=\"t-decor tc-s-blue\">{{invoice.receiptNo}}</a></td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.due}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.closingBalance}}</td>\n\t\t\t\t\t      <td class=\"name text-center\"><span class=\"dots ml-1\" [ngClass]=\"getDueAmount(invoice.due, invoice.closingBalance)\"></span></td>\n\t\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-3\" placement=\"top\" [ngbPopover]=\"popReverseContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t<i-feather class=\"icon send ot\" name=\"activity\"></i-feather>\n\t\t\t\t\t      \t<ng-template #popReverseContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<h5>Reverse</h5>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      \t</a>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-invoice/{{invoice.billNo}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t    \t\t\t\t  </td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-view-invoice-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ul class=\"legends list-inline\" *ngIf=\"isInvoiceDataLoaded\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Pending</li>\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Nill</li>\n\t\t</ul>\n\n\t\t<div class=\"card clear card-table\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>All Invoices <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th class=\"max-50\" scope=\"col\" (click)=\"sortUnitData('custInvoiceId')\">Invoice Id<span [ngClass]=\"getFieldOrderBy('custInvoiceId')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postedDate')\">Posted By<span [ngClass]=\"getFieldOrderBy('postedDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('glaccountId')\">Account<span [ngClass]=\"getFieldOrderBy('glaccountId')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('custInvoiceAmount')\">Due<span [ngClass]=\"getFieldOrderBy('custInvoiceAmount')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\">Sent Email</th>\n\t\t\t\t\t      <th scope=\"col\">SMS/Email</th>\n\t\t\t\t\t      <th class=\"text-center\" scope=\"col\">Actions</th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t     \t<tr *ngFor=\"let invoice of invoiceDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: invoiceData ; let i = index\">\n\t\t\t\t     \t  <td class=\"grey\"> <a href=\"javascript:void(0)\">{{invoice.custInvoiceId}}</a></td>\n\t\t\t\t\t      <td class=\"name\">\n\t\t\t\t\t      <a href=\"javascript:void(0)\" class=\"t-decor\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{getUserName(invoice.postedBy)}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h5>Posted Date</h5>\n\t\t\t\t\t\t\t    \t\t\t<small>{{getInvoiceDate(invoice.custInvoiceDate)}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h5>Comment</h5>\n\t\t\t\t\t\t\t    \t\t\t<small>{{invoice.comments}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"grey\">{{getAccountName(invoice.invoiceGLAccounts)}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.custInvoiceAmount}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"invoice.isEmailSent\" >\n\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateInvoiceItem(invoice)\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"invoice.isSmssent\" >\n\t\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateInvoiceItem(invoice)\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      \t</div>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-3\" role=\"button\" data-toggle=\"dropdown\" id=\"reverseIncomeInvoiceDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon send ot\" name=\"activity\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t\t\t\t\t      \t<div class=\"dropdown-menu page-menu icon-menu dropdown-menu-right\" aria-labelledby=\"reverseIncomeInvoiceDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t\t\t\t      \t<app-income-invoice-reverse [invoice]=\"invoice\"></app-income-invoice-reverse>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-invoice/{{invoice.custInvoiceId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t    \t\t\t\t  </td>\n\t\t\t\t\t    </tr>\n\n\t\t\t\t     </tbody>\n\t\t\t\t</table>\n\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"income-receipts-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isReceiptsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isReceiptsLoaded\">\n\n\t\t\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/creditnote\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Credit Note</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class=\"card card-table clear\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Total Receipts <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"receiptsData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn l-blue mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('paymentDate')\">Payment Date<span [ngClass]=\"getFieldOrderBy('paymentDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('flatNum')\">Flat No<span [ngClass]=\"getFieldOrderBy('flatNum')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('comment')\">Credit Note Amount<span [ngClass]=\"getFieldOrderBy('comment')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\">Email Sent</th>\n\t\t\t\t\t      <th scope=\"col\">SMS Sent</th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let receipt of receiptsDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: receiptsData ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{receipt.name}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h5>Comments</h5>\n\t\t\t\t\t\t\t    \t\t\t<small>{{receipt.comment}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(receipt.insertedOn)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{receipt.blockNum}} {{receipt.flatNum}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{receipt.amount}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"receipt.isEmailsent\" >\n\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"setActive(item)\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"receipt.isSmssent\" >\n\t\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"setActive(item)\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      \t</div>\n\t\t\t\t\t      </td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

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

/***/ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1hZGQtY3JlZGl0L2luY29tZS1hZGQtY3JlZGl0LmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");









let IncomeAddCreditComponent = class IncomeAddCreditComponent {
    constructor(router, route, userService, apartmentService, accountsService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isEditCredit = false;
        this.isCreditSubmitted = true;
        this.isBlockSelected = false;
        this.isUnitSelected = false;
        this.isAmountAdded = false;
        this.isError = false;
        this.alertMessage = "";
        this.isAccountDataLoaded = false;
    }
    showUnitData(blockId) {
        this.apartmentService.getApartmentBlockUnitByBlockId(blockId).subscribe((res) => {
            this.unitListData = res;
            this.apartmentBlockUnitId = "";
            this.isBlockSelected = true;
            this.isUnitSelected = false;
            this.isAmountAdded = false;
        });
    }
    showInvoiceData(unitId) {
        var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: unitId
        };
        this.accountsService.getCustInvoicesByApartmentBlockUnitId(params).subscribe((res) => {
            this.invoiceData = res;
            this.credit.invoiceId = "";
            this.isUnitSelected = true;
        });
    }
    getInvoice(invoiceId) {
        var data = this.invoiceData.filter(item => {
            return item.custInvoiceId == invoiceId;
        });
        var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            invoiceId: invoiceId
        };
        this.accountsService.getCollectionInvoiceByInvoiceId(params).subscribe((res) => {
            if (res === undefined || res.length == 0) {
                if (this.route.params['value'].type == undefined)
                    this.credit.collectionId = null;
                else
                    this.credit.collectionId = 0;
            }
            else {
                this.credit.collectionId = res[0].collectionId;
            }
        });
        this.credit.amount = data[0].custInvoiceAmount;
        this.isAmountAdded = true;
    }
    toggleEmail() {
        this.credit.isEmailSent = true;
    }
    toggleSms() {
        this.credit.isSmssent = !this.credit.isSmssent;
    }
    setActive() {
        return '';
    }
    getUnitData(id) {
        this.apartmentService.getApartmentBlockUnitById(id).subscribe((res) => {
            this.unitListData = res;
            this.apartmentBlockId = "" + res[0].apartmentBlockId;
            this.apartmentService.getApartmentBlockUnitByBlockId(res[0].apartmentBlockId).subscribe((res) => {
                this.unitListData = res;
            });
        });
    }
    getInvoiceData(id) {
    }
    submitAddCreditNoteForm(form) {
        if (!this.isEditCredit) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "amount": parseInt(this.credit.amount),
                "collectionId": 0,
                "invoiceId": 0,
                "isEmailSent": this.credit.isEmailSent,
                "isSmssent": this.credit.isSmssent,
                "comment": this.credit.comment,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": this.credit.insertedOn,
                "updatedBy": 0,
                "updatedOn": this.credit.insertedOn,
                "transReference1": "string",
                "transReference2": "string",
                "glAcctIndicator": "Income",
                "apartmentBlockUnitId": parseInt(this.route.params['value'].id)
            };
            this.accountsService.addCreditNote(details).subscribe((res) => {
                if (res.message) {
                    this.isCreditSubmitted = true;
                    this.sharedService.setAlertMessage("Credit Note added successfully");
                    this.router.navigate(['ams/income/creditnote']);
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
                "creditNoteId": this.credit.creditNoteId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "amount": parseInt(this.credit.amount),
                "collectionId": null,
                "invoiceId": null,
                "isEmailSent": this.credit.isEmailSent,
                "isSmssent": this.credit.isSmssent,
                "comment": this.credit.comment,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": this.credit.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": this.credit.insertedOn,
                "transReference1": "string",
                "transReference2": "string",
                "glAcctIndicator": "Income",
                "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId)
            };
            this.accountsService.updateCreditNote(details).subscribe((res) => {
                if (res.message) {
                    this.isCreditSubmitted = true;
                    this.sharedService.setAlertMessage("Credit Note updated successfully");
                    this.router.navigate(['ams/income/creditnote']);
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
        this.credit = {};
        this.credit.invoiceId = "";
        this.credit.comment = "";
        this.credit.isEmailSent = false;
        this.credit.isSmssent = false;
        this.apartmentBlockId = "";
        this.apartmentBlockUnitId = "";
        if (this.route.params['value'].id != undefined && this.route.params['value'].type == undefined) {
            var params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                creditNoteId: this.route.params['value'].id
            };
            this.accountsService.getCreditNoteById(params).subscribe((res) => {
                this.credit = res[0];
                this.apartmentBlockUnitId = "" + this.credit.apartmentBlockUnitId;
                /*this.getUnitData(this.credit.apartmentBlockUnitId);
    
              var invoiceParams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                apartmentBlockUnitId: this.credit.apartmentBlockUnitId
              }
    
              this.accountsService.getCustInvoicesByApartmentBlockUnitId(invoiceParams).subscribe((res:any) => {
                this.invoiceData = res;
                this.isUnitSelected = true;
              });*/
                this.isEditCredit = true;
                this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                    this.accountDataList = res.filter(item => {
                        return item.apartmentBlockUnitId == this.credit.apartmentBlockUnitId;
                    });
                    this.isAccountDataLoaded = true;
                });
            }, error => {
            });
        }
        else {
            this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.accountDataList = res.filter(item => {
                    return item.apartmentBlockUnitId == this.route.params['value'].id;
                });
                this.isAccountDataLoaded = true;
            });
            this.apartmentBlockUnitId = "" + this.route.params['value'].id;
            /*this.getUnitData(this.route.params['value'].id);
      
            var invoiceParams = {
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              apartmentBlockUnitId: this.credit.apartmentBlockUnitId
            }
      
            this.accountsService.getCustInvoicesByApartmentBlockUnitId(invoiceParams).subscribe((res:any) => {
              this.invoiceData = res;
              this.isUnitSelected = true;
            });
      
            this.isBlockSelected = true;*/
        }
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.blockData = res;
        });
    }
};
IncomeAddCreditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
IncomeAddCreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-add-credit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-add-credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-add-credit.component.scss */ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], IncomeAddCreditComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let IncomeInvoiceReverseComponent = class IncomeInvoiceReverseComponent {
    constructor(router, route, accountsService, sharedService, lookupService, cookieService) {
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
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
            "updatedBy": null,
            "updatedOn": null,
            "transReference1": "string",
            "transReference2": "string",
            "glAcctIndicator": "Income"
        };
        this.accountsService.addCustTransReversal(details).subscribe((res) => {
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
            this.isInvoiceSubmitted = true;
            this.isError = true;
            this.alertMessage = "Some error occured";
        });
    }
    ngOnInit() {
    }
};
IncomeInvoiceReverseComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomeInvoiceReverseComponent.prototype, "invoice", void 0);
IncomeInvoiceReverseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-invoice-reverse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-invoice-reverse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-invoice-reverse.component.scss */ "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeInvoiceReverseComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let IncomePayInvoiceComponent = class IncomePayInvoiceComponent {
    constructor(router, route, userService, accountsService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isInvoiceDataLoaded = false;
        this.invoiceData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.isInvoiceSelected = false;
        this.selectAllInvoices = false;
        this.isAccountDataLoaded = false;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    getUserName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDataList, function (item) {
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
    getInvoiceDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.glAccountListData, function (item) {
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
    getAllInvoices() {
        this.totalAmountArray = [];
        this.selectedInvoiceIdArray = [];
        if (this.selectAllInvoices) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceDataList, (item) => {
                item.checked = true;
                this.totalAmountArray.push(item.custInvoiceAmount);
                this.selectedInvoiceIdArray.push(item.custInvoiceId);
            });
            this.isInvoiceSelected = true;
        }
        else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceDataList, (item) => {
                item.checked = false;
            });
            this.isInvoiceSelected = false;
        }
    }
    getSelectedInvoice(invoice) {
        var length = 0;
        this.totalAmountArray = [];
        this.selectedInvoiceIdArray = [];
        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceDataList, (item) => {
            if (item.checked) {
                length++;
                this.totalAmountArray.push(item.custInvoiceAmount);
                this.selectedInvoiceIdArray.push(item.custInvoiceId);
            }
        });
        if (length > 0) {
            this.isInvoiceSelected = true;
        }
        else {
            this.isInvoiceSelected = false;
            this.totalAmountArray = [];
            this.selectedInvoiceIdArray = [];
        }
        if (length == 0) {
            this.selectAllInvoices = false;
            this.totalAmountArray = [];
            this.selectedInvoiceIdArray = [];
        }
        if (length == this.invoiceDataList.length) {
            this.selectAllInvoices = true;
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    isCollectionMade(event) {
        if (event)
            this.getCustInvoices();
    }
    getCustInvoices() {
        var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: this.route.params['value'].id
        };
        this.accountsService.getCustInvoicesByApartmentBlockUnitId(params).subscribe((res) => {
            this.invoiceDataList = res;
            this.totalItems = this.invoiceDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.userDataList = res;
                this.isInvoiceDataLoaded = true;
            }, error => {
            });
        });
    }
    ngOnInit() {
        this.getCustInvoices();
        this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.accountDataList = res.filter(item => {
                return item.apartmentBlockUnitId == this.route.params['value'].id;
            });
            this.isAccountDataLoaded = true;
        });
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGLAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
    }
};
IncomePayInvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
IncomePayInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-pay-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-pay-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-pay-invoice.component.scss */ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomePayInvoiceComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);








let IncomePostCollectionComponent = class IncomePostCollectionComponent {
    constructor(router, route, accountsService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.collection = {};
        this.isCollectionSubmitted = false;
        this.isError = false;
        this.alertMessage = "";
        this.collectionParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
    }
    submitIncomePostCollectionForm(form) {
        var custInvoiceObjArray = [];
        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceIdArray, (item, index) => {
            var details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "collectionId": 0,
                "invoiceId": item,
                "amount": this.totalAmountArray[index],
                "comment": "string",
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2020-01-10T06:59:54.422Z",
                "updatedBy": 0,
                "updatedOn": "2020-01-10T06:59:54.422Z"
            };
            custInvoiceObjArray.push(details);
        });
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
            "collectionStatus": "string",
            "isEmailSent": true,
            "isSmssent": true,
            "comment": this.collection.comment || "",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": "2019-12-15T19:36:14.09",
            "updatedBy": null,
            "updatedOn": null,
            "invoiceId": this.invoiceIdArray[0],
            "transReference1": "string",
            "transReference2": "string",
            "glAcctIndicator": "Asset",
            "collectionInvoice": custInvoiceObjArray
        };
        this.accountsService.addCollection(collectionDetails).subscribe((res) => {
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
        this.collection.amount = this.totalAmountArray.reduce((a, b) => {
            return a + b;
        });
        //payment status
        this.lookupService.getLookupValueByLookupTypeId(34).subscribe((res) => {
            this.paymentStatusListData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        //payment mode
        this.lookupService.getLookupValueByLookupTypeId(33).subscribe((res) => {
            this.instrumentTypeListData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGLAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
        this.depositSlipLisData = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        this.isCollectionSubmitted = true;
    }
    ngOnChanges(changes) {
        this.collection.amount = this.totalAmountArray.reduce((a, b) => {
            return a + b;
        });
        console.log(this.invoiceIdArray);
        console.log(this.totalAmountArray);
    }
};
IncomePostCollectionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomePostCollectionComponent.prototype, "totalAmountArray", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomePostCollectionComponent.prototype, "invoiceIdArray", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomePostCollectionComponent.prototype, "collectionParams", void 0);
IncomePostCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-post-collection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-post-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-post-collection.component.scss */ "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomePostCollectionComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LWludm9pY2UvaW5jb21lLXBvc3QtaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: IncomePostInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePostInvoiceComponent", function() { return IncomePostInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);









let IncomePostInvoiceComponent = class IncomePostInvoiceComponent {
    constructor(router, route, accountsService, userService, apartmentService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.isEditInvoice = false;
        this.isNewInvoice = false;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.isAccountDataLoaded = false;
    }
    submitIncomeInvoiceForm(form) {
        this.isInvoiceSubmitted = false;
        if (!this.isEditInvoice) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
                "custInvoiceAmount": parseInt(this.invoice.custInvoiceAmount),
                "custInvoiceDate": new Date().toISOString(),
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
                "billToPay": "string",
                "comments": this.invoice.comments || "",
                "penaltyAmount": 0,
                "penaltyComment": "string",
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": new Date().toISOString(),
                "transReference1": "string",
                "transReference2": "string",
                "invoiceGLAccounts": [
                    {
                        "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                        "invoiceId": 0,
                        "glaccountId": parseInt(this.invoice.glaccountId),
                        "comments": "string",
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": null,
                        "updatedOn": new Date().toISOString(),
                        "amount": parseInt(this.invoice.custInvoiceAmount)
                    }
                ]
            };
            this.accountsService.addCustInvoice(details).subscribe((res) => {
                if (res.message) {
                    this.isInvoiceSubmitted = true;
                    this.sharedService.setAlertMessage("Invoice added successfully");
                    this.router.navigate(['ams/income/subledger']);
                }
                else {
                    this.isInvoiceSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isInvoiceSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "custInvoiceId": this.invoice.custInvoiceId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": this.invoice.apartmentBlockUnitId,
                "custInvoiceAmount": parseInt(this.invoice.custInvoiceAmount),
                "custInvoiceDate": new Date().toISOString(),
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
                "billToPay": "string",
                "comments": this.invoice.comments || "",
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
                        "invoiceGlaccountId": this.invoice.invoiceGlaccountId,
                        "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                        "invoiceId": 0,
                        "glaccountId": parseInt(this.invoice.glaccountId),
                        "comments": "string",
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": parseInt(this.cookieService.get('userId')),
                        "updatedOn": new Date().toISOString(),
                        "amount": parseInt(this.invoice.custInvoiceAmount)
                    }
                ]
            };
            this.accountsService.updateCustInvoice(details).subscribe((res) => {
                if (res.message) {
                    this.isInvoiceSubmitted = true;
                    this.sharedService.setAlertMessage("Invoice updated successfully");
                    this.router.navigate(['ams/income/subledger']);
                }
                else {
                    this.isInvoiceSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isInvoiceSubmitted = true;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    ngOnInit() {
        this.invoice = {};
        this.invoice.primaryContact = "";
        this.invoice.glaccountId = "";
        this.invoice.isRecurCustInvoice = true;
        this.invoice.isTax = false;
        if (this.route.params['value'].id != undefined && this.route.params['value'].type == undefined) {
            this.isEditInvoice = true;
            var params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                invoiceId: this.route.params['value'].id
            };
            this.accountsService.getCustInvoiceById(params).subscribe((res) => {
                this.invoice = res[0];
                this.invoice.invoiceGlaccountId = this.invoice.invoiceGLAccounts[0].invoiceGlaccountId;
                this.invoice.glaccountId = this.invoice.invoiceGLAccounts[0].glaccountId;
                this.apartmentBlockUnitId = this.invoice.apartmentBlockUnitId;
            }, error => {
            });
            this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.accountDataList = res.filter(item => {
                    return item.apartmentBlockUnitId == this.apartmentBlockUnitId;
                });
                this.isAccountDataLoaded = true;
            });
            this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.userDataList = res.filter(item => {
                    return item.isActive;
                });
                this.apartmentService.getAllApartmentBlockUnitUsersByApartmentBlockUnitId(this.apartmentBlockUnitId).subscribe((res) => {
                    var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.userDataList, item => {
                        return item.userId == res[0].userId;
                    });
                    this.invoice.primaryContact = data[0].firstName + ' ' + data[0].lastName;
                });
            });
        }
        else {
            this.isNewInvoice = true;
            this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.accountDataList = res.filter(item => {
                    return item.apartmentBlockUnitId == this.route.params['value'].id;
                });
                this.isAccountDataLoaded = true;
            });
            this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.userDataList = res.filter(item => {
                    return item.isActive;
                });
                this.apartmentService.getAllApartmentBlockUnitUsersByApartmentBlockUnitId(this.route.params['value'].id).subscribe((res) => {
                    var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.userDataList, item => {
                        return item.userId == res[0].userId;
                    });
                    this.invoice.primaryContact = data[0].firstName + ' ' + data[0].lastName;
                });
            });
        }
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGLAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
    }
};
IncomePostInvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
IncomePostInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-post-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-post-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-post-invoice.component.scss */ "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], IncomePostInvoiceComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-post-invoice-fields-wrapper .invoice-fields {\n  position: relative;\n  padding: 0 0 20px 0;\n}\n.income-post-invoice-fields-wrapper .invoice-fields:after {\n  content: \"\";\n  position: absolute;\n  width: calc(100% + 40px);\n  height: 1px;\n  left: -20px;\n  bottom: 20px;\n  border-bottom: 1px solid #eaeaea;\n}\n.income-post-invoice-fields-wrapper .invoice-fields .float-close-wrapper {\n  float: right;\n}\n.income-post-invoice-fields-wrapper .invoice-fields .float-close-wrapper .float-close {\n  width: 24px;\n  height: 24px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 24px !important;\n  background-color: #5bcc73;\n  cursor: pointer;\n}\n.income-post-invoice-fields-wrapper .invoice-fields .float-close-wrapper .float-close.disabled {\n  background-color: #c5c6c7;\n  pointer-events: none;\n}\n.income-post-invoice-fields-wrapper .invoice-fields .float-close-wrapper .float-close.disabled .icon {\n  color: #e6e6e6;\n}\n.income-post-invoice-fields-wrapper .invoice-fields .float-close-wrapper .float-close.delete {\n  background-color: #ea7962;\n}\n.income-post-invoice-fields-wrapper .invoice-fields .float-close-wrapper .float-close.valid {\n  background-color: #5bcc73;\n}\n.income-post-invoice-fields-wrapper .invoice-fields .float-close-wrapper .float-close .icon {\n  cursor: pointer;\n  width: 14px;\n  color: #ffffff;\n  position: relative;\n  top: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlLWZpZWxkcy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlLWZpZWxkcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UtZmllbGRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UtZmllbGRzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQztFQUNDLGtCQ0RHO0VERUgsbUJBQUE7QUVKRjtBRktFO0VBQ0MsV0FBQTtFQUNBLGtCQ05FO0VET0Ysd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBRUhIO0FGS0U7RUFDQyxZQUFBO0FFSEg7QUZJRztFR3VERCxXSHREbUI7RUd1RG5CLFlIdkRtQjtFR3dEbkIsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUF2RUQsOEJBQUE7RUhjRyx5QkN1QlM7RUR0QlQsZUFBQTtBRUtKO0FGSkk7RUFDQyx5QkMyRE07RUQxRE4sb0JBQUE7QUVNTDtBRkxLO0VBQ0MsY0NZSztBQ0xYO0FGSkk7RUFDQyx5QkNiRztBQ21CUjtBRkpJO0VBQ0MseUJDVVE7QUNKYjtBRkpJO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQzRERztFRDNESCxrQkNuQ0E7RURvQ0EsUUFBQTtBRU1MIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmluY29tZS1wb3N0LWludm9pY2UtZmllbGRzLXdyYXBwZXIge1xuXHQuaW52b2ljZS1maWVsZHMge1xuXHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdHBhZGRpbmc6IDAgMCAyMHB4IDA7XG5cdFx0JjphZnRlciB7XG5cdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHR3aWR0aDogY2FsYygxMDAlICsgNDBweCk7XG5cdFx0XHRoZWlnaHQ6IDFweDtcblx0XHRcdGxlZnQ6IC0yMHB4O1xuXHRcdFx0Ym90dG9tOiAyMHB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5LTQ1MDtcblx0XHR9XG5cdFx0LmZsb2F0LWNsb3NlLXdyYXBwZXIge1xuXHRcdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdFx0LmZsb2F0LWNsb3NlIHtcblx0XHRcdFx0QGluY2x1ZGUgY2lyY2xlcygyNHB4KTtcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGxpbWUtZ3JlZW47XG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0Ji5kaXNhYmxlZHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS00ODA7XG5cdFx0XHRcdFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRncmV5LTUwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Ji5kZWxldGUge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRzLXJlZDtcblx0XHRcdFx0fVxuXHRcdFx0XHQmLnZhbGlkIHtcblx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkbGltZS1ncmVlbjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuaWNvbiB7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdHdpZHRoOiAxNHB4O1xuXHRcdFx0XHRcdGNvbG9yOiAkd2hpdGU7XG5cdFx0XHRcdFx0cG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdFx0dG9wOiAzcHg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1YmNjNzM7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyIsIi5pbmNvbWUtcG9zdC1pbnZvaWNlLWZpZWxkcy13cmFwcGVyIC5pbnZvaWNlLWZpZWxkcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLWZpZWxkcy13cmFwcGVyIC5pbnZvaWNlLWZpZWxkczphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDQwcHgpO1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS1maWVsZHMtd3JhcHBlciAuaW52b2ljZS1maWVsZHMgLmZsb2F0LWNsb3NlLXdyYXBwZXIge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS1maWVsZHMtd3JhcHBlciAuaW52b2ljZS1maWVsZHMgLmZsb2F0LWNsb3NlLXdyYXBwZXIgLmZsb2F0LWNsb3NlIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjRweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDI0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMjRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjYzczO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS1maWVsZHMtd3JhcHBlciAuaW52b2ljZS1maWVsZHMgLmZsb2F0LWNsb3NlLXdyYXBwZXIgLmZsb2F0LWNsb3NlLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzZjNztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS1maWVsZHMtd3JhcHBlciAuaW52b2ljZS1maWVsZHMgLmZsb2F0LWNsb3NlLXdyYXBwZXIgLmZsb2F0LWNsb3NlLmRpc2FibGVkIC5pY29uIHtcbiAgY29sb3I6ICNlNmU2ZTY7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS1maWVsZHMtd3JhcHBlciAuaW52b2ljZS1maWVsZHMgLmZsb2F0LWNsb3NlLXdyYXBwZXIgLmZsb2F0LWNsb3NlLmRlbGV0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTc5NjI7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS1maWVsZHMtd3JhcHBlciAuaW52b2ljZS1maWVsZHMgLmZsb2F0LWNsb3NlLXdyYXBwZXIgLmZsb2F0LWNsb3NlLnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzViY2M3Mztcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLWZpZWxkcy13cmFwcGVyIC5pbnZvaWNlLWZpZWxkcyAuZmxvYXQtY2xvc2Utd3JhcHBlciAuZmxvYXQtY2xvc2UgLmljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDNweDtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let IncomePostMultiInvoiceFieldsComponent = class IncomePostMultiInvoiceFieldsComponent {
    constructor(cd, router, route, accountsService, sharedService, cookieService) {
        this.cd = cd;
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.isEditInvoice = false;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.fieldParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    deleteBlock() {
        this.invoiceGLAccountsArray.splice(this.index, 1);
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    isArrayOne() {
        return this.invoiceGLAccountsArray.length > 1 ? true : false;
    }
    onAccountChange(id) {
        this.invoiceGLAccountsArray[this.index].glaccountId = parseInt(id);
        this.invoiceGLAccountsArray[this.index].form = this.invoiceForm.valid;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    onInvoiceAmountChange(value) {
        this.invoiceGLAccountsArray[this.index].amount = parseInt(value);
        this.invoiceGLAccountsArray[this.index].form = this.invoiceForm.valid;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    onCommentChange(value) {
        this.invoiceGLAccountsArray[this.index].comments = value;
        this.invoiceGLAccountsArray[this.index].form = this.invoiceForm.valid;
        this.fieldParams.emit(this.invoiceGLAccountsArray);
    }
    ngOnInit() {
        this.invoiceGLAccountsData = this.invoiceGLAccountsArray[this.index];
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGLAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
    }
    ngOnChanges(changes) {
        this.invoiceGLAccountsData = this.invoiceGLAccountsArray[this.index];
        console.log(this.invoiceGLAccountsArray);
    }
};
IncomePostMultiInvoiceFieldsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceGLAccountsArray", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomePostMultiInvoiceFieldsComponent.prototype, "fieldParams", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('postIncomeMultiInvoiceFieldsForm', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceForm", void 0);
IncomePostMultiInvoiceFieldsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-post-multi-invoice-fields',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-post-multi-invoice-fields.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-post-multi-invoice-fields.component.scss */ "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
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
/* harmony default export */ __webpack_exports__["default"] = (".income-post-invoice-wrapper .add-invoice-block {\n  padding: 10px 0;\n  border-bottom: 1px solid #eaeaea;\n}\n@media (max-width: 576px) {\n  .income-post-invoice-wrapper .add-invoice-btn {\n    background-color: transparent;\n    min-width: auto;\n    padding: 0;\n    margin-right: 0 !important;\n  }\n  .income-post-invoice-wrapper .add-invoice-btn .icon {\n    color: #00bcd4;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0M7RUFDQyxlQUFBO0VBQ0EsZ0NBQUE7QUNKRjtBRE9FO0VBREQ7SUFFRSw2QkUwRks7SUZ6RkwsZUFBQTtJQUNHLFVBQUE7SUFDQSwwQkFBQTtFQ0pKO0VES0k7SUFDQyxjRVNFO0VEWlA7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIHtcblx0LmFkZC1pbnZvaWNlLWJsb2NrIHtcblx0XHRwYWRkaW5nOiAxMHB4IDA7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5LTQ1MDtcblx0fVxuXHQuYWRkLWludm9pY2UtYnRuIHtcblx0XHRAbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR0cmFucztcblx0XHRcdG1pbi13aWR0aDogYXV0bztcblx0XHQgICAgcGFkZGluZzogMDtcblx0XHQgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG5cdFx0ICAgIC5pY29uIHtcblx0XHQgICAgXHRjb2xvcjogJHMtY3lhbjtcblx0XHQgICAgfVxuXHRcdH1cblx0fVxufSIsIi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmFkZC1pbnZvaWNlLWJsb2NrIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5hZGQtaW52b2ljZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG4gIC5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmFkZC1pbnZvaWNlLWJ0biAuaWNvbiB7XG4gICAgY29sb3I6ICMwMGJjZDQ7XG4gIH1cbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1YmNjNzM7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);







let IncomePostMultiInvoiceComponent = class IncomePostMultiInvoiceComponent {
    constructor(cd, router, route, accountsService, sharedService, cookieService) {
        this.cd = cd;
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.isEditInvoice = false;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.isFormInValid = true;
        this.isAccountDataLoaded = false;
    }
    addInvoice() {
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "invoiceId": 0,
            "glaccountId": this.invoiceGLAccountsData.glaccountId,
            "comments": "",
            "form": false,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": new Date().toISOString(),
            "amount": this.invoiceGLAccountsData.amount
        };
        this.invoiceGLAccountsArray.push(details);
        underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.invoiceGLAccountsArray, item => {
            if (item.form) {
                this.isFormInValid = false;
            }
            else {
                this.isFormInValid = true;
            }
        });
    }
    getFieldParams(event) {
        this.invoiceGLAccountsArray = event;
        underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.invoiceGLAccountsArray, item => {
            if (item.form) {
                this.isFormInValid = false;
            }
            else {
                this.isFormInValid = true;
            }
        });
    }
    submitIncomeMultiInvoiceForm(form) {
        this.isInvoiceSubmitted = false;
        var self = this;
        this.invoiceGLAccountsArray.map(function (item) {
            self.invoice.custInvoiceAmount = self.invoice.custInvoiceAmount + item.amount;
            delete item.form;
            return item;
        });
        let details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
            "custInvoiceAmount": parseInt(this.invoice.custInvoiceAmount),
            "custInvoiceDate": new Date().toISOString(),
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
            "billToPay": "string",
            "comments": this.invoice.comments || "",
            "penaltyAmount": 0,
            "penaltyComment": "string",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": new Date().toISOString(),
            "transReference1": "string",
            "transReference2": "string",
            "invoiceGLAccounts": this.invoiceGLAccountsArray
        };
        this.accountsService.addCustInvoice(details).subscribe((res) => {
            if (res.message) {
                this.isInvoiceSubmitted = true;
                this.sharedService.setAlertMessage("All Invoices added successfully");
                this.router.navigate(['ams/income/subledger']);
            }
            else {
                this.isInvoiceSubmitted = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isInvoiceSubmitted = true;
            this.isError = true;
            this.alertMessage = "Some error occured";
        });
    }
    ngOnInit() {
        this.invoice = {};
        this.invoice.custInvoiceAmount = 0;
        this.invoice.isRecurCustInvoice = true;
        this.invoice.isTax = false;
        this.invoiceGLAccountsData = {};
        this.invoiceGLAccountsData.glaccountId = "";
        this.invoiceGLAccountsData.amount = "";
        this.invoiceGLAccountsData.comments = "";
        this.invoiceGLAccountsArray = [
            {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "invoiceId": 0,
                "glaccountId": this.invoiceGLAccountsData.glaccountId,
                "comments": this.invoiceGLAccountsData.comments,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
                "amount": this.invoiceGLAccountsData.amount
            }
        ];
        this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.accountDataList = res.filter(item => {
                return item.apartmentBlockUnitId == this.route.params['value'].id;
            });
            this.isAccountDataLoaded = true;
        });
    }
};
IncomePostMultiInvoiceComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
IncomePostMultiInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-post-multi-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-post-multi-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-post-multi-invoice.component.scss */ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], IncomePostMultiInvoiceComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);








let IncomeSubLedgerComponent = class IncomeSubLedgerComponent {
    constructor(injector, dialog, apartmentService, accountsService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isSubLedgerDataLoaded = false;
        this.subLedgerData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.totalDueAmount = 0;
        this.netDueAmount = 0;
        this.filterSelected = "all";
        this.singleBlock = "Select Block";
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getDueAmount(value) {
        return value > 0 ? 'high' : 'low';
    }
    getSelected(type) {
        return this.filterSelected == type ? 'selected' : '';
    }
    clearFilter() {
        this.filterSelected = 'all';
        this.singleBlock = "Select Block";
    }
    showInvoiceTypes(ledger) {
        this.dialogRef = this.dialog.open(this.viewInvoiceTypeRef, {
            panelClass: 'material',
            disableClose: true,
            data: ledger
        });
    }
    dialogClose() {
        this.dialogRef.close();
    }
    getAllBlockData() {
        this.isSubLedgerDataLoaded = false;
        this.filterSelected = 'all';
        this.singleBlock = "Select Block";
        this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.subLedgerDataList = res;
            this.totalItems = this.subLedgerDataList.length;
            this.netDueAmount = 0;
            this.totalDueAmount = 0;
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.subLedgerDataList, (item, index) => {
                this.netDueAmount = this.netDueAmount + item.due;
                if (item.due >= 0)
                    this.totalDueAmount = this.totalDueAmount + item.due;
            });
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isSubLedgerDataLoaded = true;
        });
    }
    getSingleBlock(block) {
        this.filterSelected = 'single';
        this.singleBlock = block.apartmentBlockNumber;
        this.selectedBlockId = block.apartmentBlockId;
        this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.subLedgerDataList = res.filter(item => {
                return item.apartmentBlockNumber == this.singleBlock;
            });
            this.totalItems = this.subLedgerDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.netDueAmount = 0;
            this.totalDueAmount = 0;
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.subLedgerDataList, (item, index) => {
                this.netDueAmount = this.netDueAmount + item.due;
                if (item.due >= 0)
                    this.totalDueAmount = this.totalDueAmount + item.due;
            });
        });
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    ngOnInit() {
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.blockListData = res;
            this.getAllBlockData();
        });
    }
};
IncomeSubLedgerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewInvoiceTypeRef", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], IncomeSubLedgerComponent.prototype, "viewInvoiceTypeRef", void 0);
IncomeSubLedgerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-sub-ledger',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-sub-ledger.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-sub-ledger.component.scss */ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeSubLedgerComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".income-tracker-ageing-wrapper .filter-box {\n  margin: 30px 0 0 0;\n  padding: 0;\n  border: 0;\n}\n.income-tracker-ageing-wrapper .filter-box li {\n  border-right: 1px solid #eaeaea;\n  margin: 0;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.income-tracker-ageing-wrapper .filter-box li p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #585858;\n}\n.income-tracker-ageing-wrapper .filter-box li.title {\n  cursor: auto;\n}\n.income-tracker-ageing-wrapper .filter-box li.title p {\n  color: #8391a1 !important;\n}\n.income-tracker-ageing-wrapper .filter-box li.title p .icon {\n  width: 18px;\n  height: 18px;\n}\n.income-tracker-ageing-wrapper .filter-box li:not(.title):hover, .income-tracker-ageing-wrapper .filter-box li.active {\n  background-color: #5bcc73;\n}\n.income-tracker-ageing-wrapper .filter-box li:not(.title):hover p, .income-tracker-ageing-wrapper .filter-box li.active p {\n  color: #ffffff;\n}\n.income-tracker-ageing-wrapper .account-chart-card {\n  margin: 30px 0;\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box {\n  margin: 10px 0;\n  height: auto;\n  width: 300px;\n  float: left;\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .income-tracker-ageing-wrapper .account-chart-card .chart-box {\n    width: 235px;\n  }\n}\n@media (max-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .chart-box {\n    float: none;\n    width: auto;\n  }\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box canvas {\n  width: auto !important;\n  height: 100% !important;\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box.hide-chart {\n  overflow: hidden;\n  visibility: hidden;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list {\n  margin: 10px 0 0 0 !important;\n  text-align: center;\n}\n@media (max-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .legends-list {\n    text-align: left;\n    display: inline-block;\n    -webkit-transform: translateX(-45%) !important;\n    transform: translateX(-45%) !important;\n    position: relative;\n    left: 50%;\n  }\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li {\n  list-style: none;\n  margin: 0 !important;\n  padding: 8px 0;\n  overflow: auto;\n  width: 250px;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li div {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li div.title {\n  color: #373946;\n  float: left;\n  min-width: 180px !important;\n}\n@media (min-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .legends-list li div.title {\n    min-width: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1hZ2VpbmcvaW5jb21lLXRyYWNrZXItYWdlaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1hZ2VpbmcvaW5jb21lLXRyYWNrZXItYWdlaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL0FkbWluL0RvY3VtZW50cy93b3Jrcy92aXZlay85OS1hcGFydG1lbnQvYXBwLW5nOC9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0M7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSkY7QURLRTtFQUNDLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hIO0FESUc7RUVIRCxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBbUNBLGlCQUFBO0VGakNFLGNHOERPO0FGNURYO0FEQUc7RUFDQyxZQUFBO0FDRUo7QURESTtFQUNDLHlCQUFBO0FDR0w7QURGSztFQUNDLFdBQUE7RUFDQSxZQUFBO0FDSU47QURBRztFQUNDLHlCR2NTO0FGWmI7QURESTtFQUNDLGNHbUVHO0FGaEVSO0FERUM7RUFDQyxjQUFBO0FDQUY7QURDRTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSDtBREFHO0VBTEQ7SUFNRSxZQUFBO0VDR0Y7QUFDRjtBREZHO0VBUkQ7SUFTRSxXQUFBO0lBQ0EsV0FBQTtFQ0tGO0FBQ0Y7QURKRztFQUNDLHNCQUFBO0VBQ0EsdUJHd0VFO0FGbEVOO0FESkc7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDTUo7QURIRTtFQUNDLDZCQUFBO0VBQ0Esa0JBQUE7QUNLSDtBREpHO0VBSEQ7SUFJRSxnQkFBQTtJQUNBLHFCQUFBO0lJN0JILDhDQUFBO0lBRUEsc0NBQUE7SUo2Qk0sa0JHOURGO0lIK0RFLFNBQUE7RUNTTDtBQUNGO0FEUkc7RUFDQyxnQkFBQTtFQUNBLG9CQUFBO0VBQ0csY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDVVA7QURUSTtFRXpERixxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUE2QkEsaUJBQUE7RUY2QkcsY0dwRVE7QUZpRmI7QURaSztFQUNDLGNHSks7RUhLTCxXQUFBO0VBQ0EsMkJBQUE7QUNjTjtBRGJNO0VBSkQ7SUFLRSwwQkFBQTtFQ2dCTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXRyYWNrZXItYWdlaW5nL2luY29tZS10cmFja2VyLWFnZWluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIge1xuXHQuZmlsdGVyLWJveCB7XG5cdFx0bWFyZ2luOiAzMHB4IDAgMCAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdGxpIHtcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmV5LTQ1MDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHAge1xuXHRcdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHRjb2xvcjogJGdyZXktNzAwO1xuXHRcdFx0fVxuXHRcdFx0Ji50aXRsZSB7XG5cdFx0XHRcdGN1cnNvcjogYXV0bztcblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmOm5vdCgudGl0bGUpOmhvdmVyLCAmLmFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRjb2xvcjogJHdoaXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5hY2NvdW50LWNoYXJ0LWNhcmQge1xuXHRcdG1hcmdpbjogMzBweCAwO1xuXHRcdC5jaGFydC1ib3gge1xuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRcdHdpZHRoOiAyMzVweDtcblx0XHRcdH1cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0XHRmbG9hdDogbm9uZTtcblx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHR9XG5cdFx0XHRjYW52YXMge1xuXHRcdFx0XHR3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRoZWlnaHQ6ICRmdWxsO1xuXHRcdFx0fVxuXHRcdFx0Ji5oaWRlLWNoYXJ0IHtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQubGVnZW5kcy1saXN0IHtcblx0XHRcdG1hcmdpbjogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcdFx0XHRAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNDUlKSk7XG4gICAgXHRcdFx0cG9zaXRpb246ICRyZWw7XG4gICAgXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0fVxuXHRcdFx0bGkge1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBcdFx0XHRwYWRkaW5nOiA4cHggMDtcbiAgICBcdFx0XHRvdmVyZmxvdzogYXV0bztcbiAgICBcdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0QGluY2x1ZGUgaGVhZC1tZWRpdW07XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0XHRcdCYudGl0bGUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5maWx0ZXItYm94IGxpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhZWFlYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUgcCB7XG4gIGNvbG9yOiAjODM5MWExICFpbXBvcnRhbnQ7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUgcCAuaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGk6bm90KC50aXRsZSk6aG92ZXIsIC5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjYzczO1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5maWx0ZXItYm94IGxpOm5vdCgudGl0bGUpOmhvdmVyIHAsIC5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaS5hY3RpdmUgcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQge1xuICBtYXJnaW46IDMwcHggMDtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5jaGFydC1ib3gge1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmNoYXJ0LWJveCB7XG4gICAgd2lkdGg6IDIzNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmNoYXJ0LWJveCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5jaGFydC1ib3ggY2FudmFzIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAuY2hhcnQtYm94LmhpZGUtY2hhcnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAubGVnZW5kcy1saXN0IHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAubGVnZW5kcy1saXN0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDUlKSAhaW1wb3J0YW50O1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NSUpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NSUpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmxlZ2VuZHMtbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5sZWdlbmRzLWxpc3QgbGkgZGl2IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5sZWdlbmRzLWxpc3QgbGkgZGl2LnRpdGxlIHtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmxlZ2VuZHMtbGlzdCBsaSBkaXYudGl0bGUge1xuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1YmNjNzM7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4OyIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cblxuQG1peGluIHRyYW5zZm9ybSAoJHJ1bGVzKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0LW1vei10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHR0cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gdHJhbnNpdGlvbiAoJHJ1bGVzLi4uKSB7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHQtbW96LXRyYW5zaXRpb246ICRydWxlcztcblx0dHJhbnNpdGlvbjogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYW5pbWF0aW9uLWRlbGF5ICgkdmFsdWUpIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgLW1vei1hbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbiAgYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2l6aW5nICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIC1tb3otYm94LXNpemluZzogJHJ1bGVzO1xuICBib3gtc2l6aW5nOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhcHBlYXJhbmNlICgkcnVsZXMuLi4pIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiAkcnVsZXM7XG4gIC1tb3otYXBwZWFyYW5jZTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdmlzaWJpbGl0eSAoJHJ1bGVzKSB7XG4gIHZpc2liaWxpdHk6ICRydWxlcztcbn1cblxuQG1peGluIG5vLW1wICgpIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGNpcmNsZXMoJHIsICRiZzpudWxsLCAkdGM6bnVsbCkge1xuICB3aWR0aDogJHI7XG4gIGhlaWdodDogJHI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJnO1xuICBjb2xvcjogJHRjO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRyKTtcbn1cblxuQG1peGluIGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMuLi4pIHtcbiAgLy8gRGlyZWN0aW9uIGhhcyBiZWVuIG9taXR0ZWQgYW5kIGhhcHBlbnMgdG8gYmUgYSBjb2xvci1zdG9wXG4gIEBpZiBpcy1kaXJlY3Rpb24oJGRpcmVjdGlvbikgPT0gZmFsc2Uge1xuICAgICRjb2xvci1zdG9wczogJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzO1xuICAgICRkaXJlY3Rpb246IDE4MGRlZztcbiAgfVxuXG4gIGJhY2tncm91bmQ6IG50aChudGgoJGNvbG9yLXN0b3BzLCAxKSwgMSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24oJGRpcmVjdGlvbiksICRjb2xvci1zdG9wcyk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHMpO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let IncomeTrackerAgeingComponent = class IncomeTrackerAgeingComponent {
    constructor(accountsService, sharedService, cookieService) {
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isChartLoaded = false;
        this.ageingData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.totalInvoices = 0;
        this.dataType = 'DueAge';
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("MM-DD-YYYY");
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
                        data: [this.totalAmountItem1Percent, this.totalAmountItem3Percent, this.totalAmountItem4Percent, this.totalAmountItem5Percent],
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
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](this.chartRef.nativeElement, {
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
        this.asOfDate = moment__WEBPACK_IMPORTED_MODULE_7__().format('MM-DD-YYYY'); // todays date
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
        this.accountsService.GetARAgingCollectionDueSummary(ageingParams).subscribe((res) => {
            this.isDataLoaded = true;
            this.ageingDataDataList = res;
            this.totalItems = this.ageingDataDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.ageingDataDataList, (item, index) => {
                this.totalInvoices = this.totalInvoices + item.bucketCount1 + item.bucketCount2 + item.bucketCount3 + item.bucketCount4 + item.bucketCount5;
                this.totalAmountItem1 = this.totalAmountItem1 + item.bucketAmt1 + item.bucketAmt2;
                this.totalAmountItem3 = this.totalAmountItem3 + item.bucketAmt3;
                this.totalAmountItem4 = this.totalAmountItem4 + item.bucketAmt4;
                this.totalAmountItem5 = this.totalAmountItem5 + item.bucketAmt5;
                this.totalAmount = this.totalAmountItem1 + this.totalAmountItem3 + this.totalAmountItem4 + this.totalAmountItem5;
                this.totalAmountItem1Percent = Math.floor((this.totalAmountItem1 / this.totalAmount) * 100);
                this.totalAmountItem3Percent = Math.floor((this.totalAmountItem3 / this.totalAmount) * 100);
                this.totalAmountItem4Percent = Math.floor((this.totalAmountItem4 / this.totalAmount) * 100);
                this.totalAmountItem5Percent = Math.floor((this.totalAmountItem5 / this.totalAmount) * 100);
                if (index == this.ageingDataDataList.length - 1) {
                    this.drawChart();
                }
                var unitParams = {
                    ApartmentID: parseInt(this.cookieService.get('apartmentId')),
                    asOfDate: this.asOfDate,
                    unitId: item.unitID
                };
                this.accountsService.GetARAgingCollectionDueByUnitId(unitParams).subscribe((res) => {
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
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('incomePieChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], IncomeTrackerAgeingComponent.prototype, "chartRef", void 0);
IncomeTrackerAgeingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker-ageing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-tracker-ageing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-tracker-ageing.component.scss */ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], IncomeTrackerAgeingComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let IncomeViewCreditComponent = class IncomeViewCreditComponent {
    constructor(injector, dialog, userService, apartmentService, accountsService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isCreditNoteLoaded = false;
        this.creditNoteData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    getCustomerName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.userDataList, function (item) {
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
    getBlockDetails(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.custInvoiceDataList, function (item) {
            if (item.invoiceGLAccounts[0].invoiceId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].apartmentBlockNumber + ' ' + data[0].apartmentBlockUnitNumber;
        }
    }
    getEmailStatus(value) {
        if (value) {
            return 'Y';
        }
        else {
            return 'N';
        }
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
    }
    updateCreditItem(credit) {
        setTimeout(() => {
            this.isCreditNoteLoaded = false;
            var details = {
                "creditNoteId": parseInt(credit.creditNoteId),
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "amount": parseInt(credit.amount),
                "collectionId": parseInt(credit.collectionId),
                "invoiceId": parseInt(credit.invoiceId),
                "isEmailSent": credit.isEmailSent,
                "isSmssent": credit.isSmssent,
                "comment": credit.comment,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "transReference1": "string",
                "transReference2": "string",
                "glAcctIndicator": "Income",
                "apartmentBlockUnitId": parseInt(credit.apartmentBlockUnitId)
            };
            this.accountsService.updateCreditNote(details).subscribe((res) => {
                if (res.message) {
                    this.isCreditNoteLoaded = true;
                    this.sharedService.setAlertMessage("Credit Note updated successfully");
                }
                else {
                    this.isCreditNoteLoaded = true;
                }
            }, error => {
                this.isCreditNoteLoaded = true;
            });
        }, 1000);
    }
    ngOnInit() {
        this.userDataList = [];
        this.userService.getAllUsers().subscribe((res) => {
            /* this.userDataList = res.filter(item => {
              return item.apartmentId == parseInt(this.cookieService.get('apartmentId'))
            }); */
            this.userDataList = res;
            console.log(this.userDataList);
        });
        this.accountsService.getAllCreditNotes().subscribe((res) => {
            this.creditNoteDataList = res.filter(item => {
                return (item.apartmentId == parseInt(this.cookieService.get('apartmentId')) && item.isActive);
            });
            this.totalItems = this.creditNoteDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isCreditNoteLoaded = true;
            this.accountsService.getCustInvoicesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.custInvoiceDataList = res.filter(item => {
                    return item.isActive;
                });
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
    }
};
IncomeViewCreditComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
IncomeViewCreditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-credit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-view-credit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-view-credit.component.scss */ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], IncomeViewCreditComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);








let IncomeViewDefaultersComponent = class IncomeViewDefaultersComponent {
    constructor(router, route, userService, accountsService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDefaultersDataLoaded = false;
        this.defaultData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.isDefaultSelected = false;
        this.selectAllDefaulters = false;
        this.sendMessage = null;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    getAllDefaulters() {
        if (this.selectAllDefaulters) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, (item) => {
                item.checked = true;
            });
            this.isDefaultSelected = true;
        }
        else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, (item) => {
                item.checked = false;
            });
            this.isDefaultSelected = false;
        }
    }
    getSelectedAllDefaulters(unit) {
        var length = 0;
        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, (item) => {
            if (item.checked) {
                length++;
            }
        });
        if (length > 0) {
            this.isDefaultSelected = true;
        }
        else {
            this.isDefaultSelected = false;
        }
        if (length == 0) {
            this.selectAllDefaulters = false;
        }
        if (length == this.defaultDataList.length) {
            this.selectAllDefaulters = true;
        }
    }
    sendEmail() {
        this.isDefaultersDataLoaded = true;
        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, (item, index) => {
            if (item.checked) {
            }
        });
    }
    sendSMS() {
        this.isDefaultersDataLoaded = true;
        underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, (item, index) => {
            if (item.checked) {
            }
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    onResize(event) {
        if (event.target.innerWidth <= 991)
            this.isMobile = true;
        else
            this.isMobile = false;
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    ngOnInit() {
        this.accountsService.GetIncomeTrackerDefaulterByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.defaultDataList = res;
            this.totalItems = this.defaultDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDefaultersDataLoaded = true;
        }, error => {
            console.log(error);
        });
    }
};
IncomeViewDefaultersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], IncomeViewDefaultersComponent.prototype, "onResize", null);
IncomeViewDefaultersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-defaulters',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-view-defaulters.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-view-defaulters.component.scss */ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeViewDefaultersComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWludm9pY2UtaGlzdG9yeS9pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let IncomeViewInvoiceHistoryComponent = class IncomeViewInvoiceHistoryComponent {
    constructor(router, route, userService, accountsService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isInvoiceDataLoaded = false;
        this.invoiceData = "";
        this.isAccountDataLoaded = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    getUserName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDataList, function (item) {
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
    getInvoiceDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.glAccountListData, function (item) {
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
    ngOnInit() {
        this.accountsService.getAllGLAccounts().subscribe((res) => {
            var glAccountListData = res.filter(item => {
                return item.apartmentId == parseInt(this.cookieService.get('apartmentId'));
            });
            this.glAccountListData = glAccountListData;
        });
        var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: this.route.params['value'].id
        };
        this.accountsService.GetIncomeTrackerCustAccountHistoryByApartmentBlockUnitId(params).subscribe((res) => {
            this.invoiceDataList = res;
            this.totalItems = this.invoiceDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.accountDataList = res.filter(item => {
                    return item.apartmentBlockUnitId == this.route.params['value'].id;
                });
                this.isAccountDataLoaded = true;
                console.log(this.accountDataList);
            });
            this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.userDataList = res;
                this.isInvoiceDataLoaded = true;
            }, error => {
            });
        });
    }
};
IncomeViewInvoiceHistoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
IncomeViewInvoiceHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-invoice-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-view-invoice-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-view-invoice-history.component.scss */ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeViewInvoiceHistoryComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWludm9pY2UvaW5jb21lLXZpZXctaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let IncomeViewInvoiceComponent = class IncomeViewInvoiceComponent {
    constructor(router, route, userService, accountsService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isInvoiceDataLoaded = false;
        this.invoiceData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    getUserName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDataList, function (item) {
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
    getInvoiceDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
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
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.glAccountListData, function (item) {
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
    stopPropagation(event) {
        event.stopPropagation();
    }
    updateInvoiceItem(invoice) {
        setTimeout(() => {
            this.isInvoiceDataLoaded = false;
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
                "isEmailSent": false,
                "isSmssent": false,
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
            this.accountsService.updateCustInvoice(details).subscribe((res) => {
                if (res.message) {
                    this.isInvoiceDataLoaded = true;
                    this.sharedService.setAlertMessage("Invoice updated successfully");
                }
                else {
                    this.isInvoiceDataLoaded = true;
                }
            }, error => {
                this.isInvoiceDataLoaded = true;
            });
        }, 1000);
    }
    ngOnInit() {
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGLAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
        var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: this.route.params['value'].id
        };
        this.accountsService.getCustInvoicesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.invoiceDataList = res;
            this.totalItems = this.invoiceDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.userDataList = res;
                this.isInvoiceDataLoaded = true;
            }, error => {
            });
        });
    }
};
IncomeViewInvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
IncomeViewInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-invoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-view-invoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-view-invoice.component.scss */ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeViewInvoiceComponent);



/***/ }),

/***/ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LXJlY2VpcHRzL2luY29tZS12aWV3LXJlY2VpcHRzLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/accounts.service */ "./src/app/api/services/accounts.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let IncomeViewReceiptsComponent = class IncomeViewReceiptsComponent {
    constructor(injector, dialog, apartmentService, accountsService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isReceiptsLoaded = false;
        this.receiptsData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
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
    getEmailStatus(value) {
        if (value) {
            return 'Y';
        }
        else {
            return 'N';
        }
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
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
    ngOnInit() {
        this.accountsService.GetIncomeTrackerReceiptsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.receiptsDataList = res;
            this.totalItems = this.receiptsDataList.length;
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
};
IncomeViewReceiptsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
IncomeViewReceiptsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-view-receipts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-view-receipts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-view-receipts.component.scss */ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], IncomeViewReceiptsComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/income-sub-ledger/income-sub-ledger.component */ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts");
/* harmony import */ var _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/income-view-receipts/income-view-receipts.component */ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts");
/* harmony import */ var _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/income-view-credit/income-view-credit.component */ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts");
/* harmony import */ var _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/income-view-invoice/income-view-invoice.component */ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts");
/* harmony import */ var _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/income-view-invoice-history/income-view-invoice-history.component */ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts");
/* harmony import */ var _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/income-view-defaulters/income-view-defaulters.component */ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts");
/* harmony import */ var _components_income_post_invoice_income_post_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/income-post-invoice/income-post-invoice.component */ "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.ts");
/* harmony import */ var _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/income-post-multi-invoice/income-post-multi-invoice.component */ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts");
/* harmony import */ var _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/income-pay-invoice/income-pay-invoice.component */ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts");
/* harmony import */ var _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/income-tracker-ageing/income-tracker-ageing.component */ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts");
/* harmony import */ var _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/income-add-credit/income-add-credit.component */ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts");














const routes = [
    { path: '', redirectTo: 'subledger', pathMatch: 'full' },
    { path: 'subledger', component: _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_3__["IncomeSubLedgerComponent"] },
    { path: 'view-invoice-history/:id', component: _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewInvoiceHistoryComponent"] },
    { path: 'all-invoices', component: _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_6__["IncomeViewInvoiceComponent"] },
    { path: 'post-invoice/:id/:type', component: _components_income_post_invoice_income_post_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostInvoiceComponent"] },
    { path: 'post-multi-invoice/:id/:type', component: _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_10__["IncomePostMultiInvoiceComponent"] },
    { path: 'edit-invoice/:id', component: _components_income_post_invoice_income_post_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostInvoiceComponent"] },
    { path: 'post-collection/:id', component: _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_11__["IncomePayInvoiceComponent"] },
    { path: 'receipts', component: _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_4__["IncomeViewReceiptsComponent"] },
    { path: 'creditnote', component: _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_5__["IncomeViewCreditComponent"] },
    { path: 'add-credit/:id/:type', component: _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_13__["IncomeAddCreditComponent"] },
    { path: 'edit-credit/:id', component: _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_13__["IncomeAddCreditComponent"] },
    { path: 'defaulters', component: _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_8__["IncomeViewDefaultersComponent"] },
    { path: 'ageing', component: _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_12__["IncomeTrackerAgeingComponent"] },
    { path: '**', redirectTo: 'subledger', pathMatch: 'full' }
];
let IncomeTrackerRoutingModule = class IncomeTrackerRoutingModule {
};
IncomeTrackerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IncomeTrackerComponent = class IncomeTrackerComponent {
    constructor() { }
    ngOnInit() {
    }
};
IncomeTrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-tracker',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./income-tracker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/income-tracker.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./income-tracker.component.scss */ "./src/app/ams/income-tracker/income-tracker.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _income_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./income-tracker-routing.module */ "./src/app/ams/income-tracker/income-tracker-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _income_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./income-tracker.component */ "./src/app/ams/income-tracker/income-tracker.component.ts");
/* harmony import */ var _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/income-sub-ledger/income-sub-ledger.component */ "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts");
/* harmony import */ var _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/income-view-receipts/income-view-receipts.component */ "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts");
/* harmony import */ var _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/income-view-credit/income-view-credit.component */ "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts");
/* harmony import */ var _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/income-view-invoice/income-view-invoice.component */ "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts");
/* harmony import */ var _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/income-view-invoice-history/income-view-invoice-history.component */ "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts");
/* harmony import */ var _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/income-view-defaulters/income-view-defaulters.component */ "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts");
/* harmony import */ var _components_income_post_invoice_income_post_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/income-post-invoice/income-post-invoice.component */ "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.ts");
/* harmony import */ var _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/income-post-multi-invoice/income-post-multi-invoice.component */ "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts");
/* harmony import */ var _components_income_post_multi_invoice_fields_income_post_multi_invoice_fields_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component */ "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.ts");
/* harmony import */ var _components_income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/income-post-collection/income-post-collection.component */ "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.ts");
/* harmony import */ var _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/income-pay-invoice/income-pay-invoice.component */ "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts");
/* harmony import */ var _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/income-tracker-ageing/income-tracker-ageing.component */ "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts");
/* harmony import */ var _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/income-add-credit/income-add-credit.component */ "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts");
/* harmony import */ var _components_income_invoice_reverse_income_invoice_reverse_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/income-invoice-reverse/income-invoice-reverse.component */ "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.ts");




















let IncomeTrackerModule = class IncomeTrackerModule {
};
IncomeTrackerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _income_tracker_component__WEBPACK_IMPORTED_MODULE_5__["IncomeTrackerComponent"],
            _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_6__["IncomeSubLedgerComponent"],
            _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewReceiptsComponent"],
            _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_8__["IncomeViewCreditComponent"],
            _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomeViewInvoiceComponent"],
            _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_10__["IncomeViewInvoiceHistoryComponent"],
            _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_11__["IncomeViewDefaultersComponent"],
            _components_income_post_invoice_income_post_invoice_component__WEBPACK_IMPORTED_MODULE_12__["IncomePostInvoiceComponent"],
            _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_13__["IncomePostMultiInvoiceComponent"],
            _components_income_post_multi_invoice_fields_income_post_multi_invoice_fields_component__WEBPACK_IMPORTED_MODULE_14__["IncomePostMultiInvoiceFieldsComponent"],
            _components_income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_15__["IncomePostCollectionComponent"],
            _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_16__["IncomePayInvoiceComponent"],
            _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_18__["IncomeAddCreditComponent"],
            _components_income_invoice_reverse_income_invoice_reverse_component__WEBPACK_IMPORTED_MODULE_19__["IncomeInvoiceReverseComponent"],
            _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_17__["IncomeTrackerAgeingComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _income_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncomeTrackerRoutingModule"]
        ],
        bootstrap: [_income_tracker_component__WEBPACK_IMPORTED_MODULE_5__["IncomeTrackerComponent"]]
    })
], IncomeTrackerModule);



/***/ })

}]);
//# sourceMappingURL=income-tracker-income-tracker-module-es2015.js.map