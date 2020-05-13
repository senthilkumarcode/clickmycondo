function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["income-tracker-income-tracker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeAddCreditIncomeAddCreditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-add-credit-wrapper\">\n\n\n\t<h5 class=\"mb-3\">\n\t\t<span *ngIf=\"!isEditCredit\">Add Credit Note</span>\n\t\t<span *ngIf=\"isEditCredit\">Edit Credit Note</span>\n\t</h5>\n\n\t<div class=\"card no-shadow mb-3\" *ngIf=\"isAccountDataLoaded\">\n\t\t<div class=\"card-header at-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n\t\t\t\t\t<p class=\"d-inline-block ft\">\n\t\t\t\t\t<span>Bill to party: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'billToParty' }}</p>\n\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t<span>Contact Person: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'primayContact' }}</p>\n\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t<span>Block: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockNumber' }}</p>\n\t\t\t\t\t\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t<span>Unit: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockUnitNumber' }}</p>\n\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\t</div>\n\t\n\t<div class=\"card clear\">\n\n\t\t<form #addCreditNoteForm = \"ngForm\" name=\"addCreditNoteForm\" (ngSubmit)=\"submitAddCreditNoteForm(addCreditNoteForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isCreditSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isCreditSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\n\t\t\t\t\t\t <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Select Block</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockId\" (ngModelChange)=\"showUnitData(apartmentBlockId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{item.apartmentBlockNumber}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div> \n\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isBlockSelected\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Select Unit</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockUnitId\" (ngModelChange)=\"showInvoiceData(apartmentBlockUnitId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitListData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitSelected\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Select Bill No</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"invoiceId\" \n\t\t\t\t\t\t\t        id=\"invoiceId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"credit.invoiceId\" (ngModelChange)=\"getInvoice(credit.invoiceId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of invoiceData\" [value]=\"item.custInvoiceId\">{{ item.custInvoiceId}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div> \n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Posted On*</label>\n\t\t\t                    <input class=\"form-control\" name=\"invoiceDueDate\" [owlDateTime]=\"postedOn\" [owlDateTimeTrigger]=\"postedOn\" placeholder=\"Date\" [(ngModel)]=\"credit.insertedOn\">\n\t\t\t\t\t\t\t\t<owl-date-time #postedOn [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"postedOn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Amount*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"creditAmount\" [(ngModel)]=\"credit.amount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"credit.comment\" required>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Email*</label>\n\t\t\t                    <label class=\"switch\">\n\t\t\t\t\t\t\t\t  \t<input type=\"checkbox\" name=\"isEmailSent\" [(ngModel)]=\"credit.isEmailSent\" >\n\t\t\t\t\t\t\t\t  \t<span class=\"slider round\" (click)=\"setActive()\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>SMS*</label>\n\t\t\t                    <label class=\"switch\">\n\t\t\t\t\t\t\t\t  \t<input type=\"checkbox\" name=\"isSmssent\" [(ngModel)]=\"credit.isSmssent\" >\n\t\t\t\t\t\t\t\t  \t<span class=\"slider round\" (click)=\"setActive()\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"addCreditNoteForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeInvoiceReverseIncomeInvoiceReverseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<app-loader *ngIf=\"!isInvoiceSubmitted\"></app-loader>\n\n<ng-container *ngIf=\"isInvoiceSubmitted\">\n\t<form #reverseIncomeInvoiceForm = \"ngForm\" name=\"reverseIncomeInvoiceForm\" (ngSubmit)=\"submitReverseIncomeInvoiceForm(reverseIncomeInvoiceForm)\"  novalidate>\n\n\t\t<div class=\"row\">\n\t\t\t\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"input-box\">\n\t\t            <label>Comments</label>\n\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"invoice.comment\" required>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t<button class=\"btn blue\" [disabled]=\"reverseIncomeInvoiceForm.invalid\">Submit</button>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n</ng-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomePayInvoiceIncomePayInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-pay-invoice-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"card no-shadow mb-3\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t<div class=\"card-header at-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<div class=\"sub-details\">\n\t\t\t\t\t\t<p class=\"d-inline-block ft\">\n\t\t\t\t\t\t<span>Bill to party: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'billToParty' }}</p>\n\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t\t<span>Contact Person: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'primayContact' }}</p>\n\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t\t<span>Block: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockNumber' }}</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t\t<span>Unit: </span>\n\t\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockUnitNumber' }}</p>\n\n\t    \t\t\t</div>\n\t    \t\t</div>\n\t\t  \t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Bills to be payed <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" class=\"select\" [ngClass]=\"isNoItemsAvailable() ? 'no-link':''\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"selectAllInvoices\" \n\t\t\t\t\t\t\t\t    name=\"selectAllInvoices\" \n\t\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllInvoices\"\n\t                            \t(ngModelChange)=\"getAllInvoices()\" >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllInvoices\" [ngClass]=\"isNoItemsAvailable() ? 'disabled':'' \"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t     \t  </th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('custInvoiceID')\">Bill No <span [ngClass]=\"getFieldOrderBy('custInvoiceID')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('custInvoiceDate')\">Bill Date<span [ngClass]=\"getFieldOrderBy('custInvoiceDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('dueDate')\">Due Date<span [ngClass]=\"getFieldOrderBy('dueDate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('comments')\">Comments<span [ngClass]=\"getFieldOrderBy('comments')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billAmount')\">Bill Amount<span [ngClass]=\"getFieldOrderBy('billAmount')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('remainingAmount')\">Remaining Amount<span [ngClass]=\"getFieldOrderBy('remainingAmount')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t     \t<tr *ngFor=\"let invoice of invoiceDataList | simpleSearch: invoiceData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\" [ngClass]=\"invoice.checked ? 'selected' : ''\">\n\t\t\t\t     \t  <td class=\"select\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"{{invoice.custInvoiceID}}\" \n\t\t                            name=\"{{invoice.custInvoiceID}}\"\n\t\t                            [(ngModel)]=\"invoice.checked\"\n\t\t                            (ngModelChange)=\"getSelectedInvoice(invoice)\"\n\t\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{invoice.custInvoiceID}}\"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t      \t  </td>\n\t\t\t\t\t      <td class=\"grey\"> <a href=\"javascript:void(0)\" class=\"t-decor tc-s-blue\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-invoice/{{invoice.custInvoiceID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">{{invoice.custInvoiceID}}</a></td>\n\t\t\t\t\t      <td class=\"name\">{{getInvoiceDate(invoice.custInvoiceDate)}}</td>\n\t\t\t\t\t      <td class=\"name\">{{getInvoiceDate(invoice.dueDate)}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.comments}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.billAmount}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.remainingAmount}}</td>\n\t\t\t\t\t    </tr>\n\n\t\t\t\t     </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<app-income-post-collection *ngIf=\"isInvoiceSelected\" [totalAmountArray]=\"totalAmountArray\" [invoiceIdArray]=\"selectedInvoiceIdArray\" (collectionParams)=\"isCollectionMade($event)\"></app-income-post-collection>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomePostCollectionIncomePostCollectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-post-collection-wrapper mt-20\">\n\n\t<h5 class=\"mb-3\">Post Collection</h5>\n\n\t<div class=\"card mb-30\">\n\n\t\t<form #postIncomeCollectionForm = \"ngForm\" name=\"postIncomeCollectionForm\" (ngSubmit)=\"submitIncomePostCollectionForm(postIncomeCollectionForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isCollectionSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isCollectionSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Amount*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" [customMin] =\"minCollectionAmount\" [customMax] =\"maxCollectionAmount\" class=\"form-control\" #collectionAmount=\"ngModel\" placeholder=\"Enter text\" name=\"collectionAmount\" [(ngModel)]=\"collection.amount\" required [readonly]=\"isMultipleEntry\">\n\t\t\t                    <div *ngIf=\"collectionAmount.errors\">\n\t\t\t\t\t\t  \t\t\t<p class=\"input-error\">Enter amount equal to or lesser than the selected entries</p>\n\t\t\t\t\t\t  \t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Instrument Type*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"InstrumentType\" \n\t\t\t\t\t\t\t        id=\"InstrumentType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.instrumentTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of instrumentTypeListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Deposit Slip Number*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"depositSlipNo\" \n\t\t\t\t\t\t\t        id=\"depositSlipNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.depositSlipNumber\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of depositSlipLisData\" [value]=\"item.id\">{{ item.id }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Post On*</label>\n\t\t\t                    <input class=\"form-control\" name=\"collectionPostOn\" [owlDateTime]=\"collectionPostOn\" [owlDateTimeTrigger]=\"collectionPostOn\" placeholder=\"Date\" [(ngModel)]=\"collection.postOn\">\n\t\t\t\t\t\t\t\t<owl-date-time #collectionPostOn [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"collectionPostOn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Payment Status*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"paymentStatusType\" \n\t\t\t\t\t\t\t        id=\"paymentStatusType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"collection.collectionStatusId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of paymentStatusListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comments\" [(ngModel)]=\"collection.comment\">\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"postIncomeCollectionForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomePostInvoiceIncomePostInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-post-invoice-wrapper\">\n\n\t<h5 class=\"mb-3\">\n\t\t<span *ngIf=\"!isEditInvoice && isNewInvoice\">Post Single Invoice</span>\n\t\t<span *ngIf=\"isEditInvoice && !isNewInvoice\">Edit Single Invoice</span>\n\t</h5>\n\n\t<div class=\"card no-shadow mb-3\" *ngIf=\"isAccountDataLoaded\">\n\t\t<div class=\"card-header at-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n\t\t\t\t\t<p class=\"d-inline-block ft\">\n\t\t\t\t\t<span>Bill to party: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'billToParty' }}</p>\n\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t<span>Contact Person: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'primayContact' }}</p>\n\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t<span>Block: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockNumber' }}</p>\n\t\t\t\t\t\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\">\n\t\t\t\t\t<span>Unit: </span>\n\t\t\t\t\t{{accountDataList | isdefined:'apartmentBlockUnitNumber' }}</p>\n\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\t</div>\n\n\t<div class=\"card clear mb-30\">\n\n\t\t<form #postIncomeInvoiceForm = \"ngForm\" name=\"postIncomeInvoiceForm\" (ngSubmit)=\"submitIncomeInvoiceForm(postIncomeInvoiceForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isInvoiceSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isInvoiceSubmitted\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Invoice Amount*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"invoiceAmount\" [(ngModel)]=\"invoice.custInvoiceAmount\" \n\t\t\t                    (ngModelChange)=\"onInvoiceAmountChange(invoice.custInvoiceAmount)\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Account*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"accountType\" \n\t\t\t\t\t\t\t        id=\"accountType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"invoice.glaccountId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of glAccountListData\" [value]=\"item.glaccountId\">{{ item.glaccountName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Invoice Date*</label>\n\t\t\t                    <input class=\"form-control\" name=\"invoiceDueDate\" [owlDateTime]=\"invoiceDueDate\" [owlDateTimeTrigger]=\"invoiceDueDate\" placeholder=\"Date\" [(ngModel)]=\"invoice.dueDate\">\n\t\t\t\t\t\t\t\t<owl-date-time #invoiceDueDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"invoiceDueDate\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                <label>Comments</label>\n\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comments\" [(ngModel)]=\"invoice.comments\">\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t\t\t<div class=\"form-group mt-sm-35\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"GSTInvoiceChecked\" name=\"GSTInvoiceChecked\" [(ngModel)]=\"invoice.isTax\" (ngModelChange)=\"onVatChange(invoice.isTax)\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"GSTInvoiceChecked\">VAT</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<ng-container *ngIf=\"invoice.isTax\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                <label>VAT</label>\n\t\t\t\t\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"\" name=\"invoiceVatPercent\" \n\t\t\t\t\t                [(ngModel)]=\"invoice.vatPercent\" \n\t\t\t\t\t                readonly>\n\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                <label>Discount</label>\n\t\t\t\t\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"\" name=\"invoiceDiscount\" \n\t\t\t\t\t                [(ngModel)]=\"invoice.discount\" \n\t\t\t\t\t                readonly>\n\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                <label>Total Amount</label>\n\t\t\t\t\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"\" name=\"totalAmount\" \n\t\t\t\t\t                [(ngModel)]=\"invoice.totalAmount\" \n\t\t\t\t\t                readonly>\n\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</ng-container>\n\n\n\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"postIncomeInvoiceForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomePostMultiInvoiceFieldsIncomePostMultiInvoiceFieldsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form #postIncomeMultiInvoiceFieldsForm =\"ngForm\" name=\"postIncomeMultiInvoiceFieldsForm\" novalidate>\n\t<div class=\"heads account-name-box\">\n\t\t<app-select-search-box\n\t\t\tfieldName = \"accountType{{index}}\" \n\t\t\tfieldText = \"\"\n\t\t\tisLabel = \"false\"\n\t\t\tfieldItemName=\"glaccountName\"\n\t\t\t[fieldModel] = \"invoiceGLAccountsData.glaccountName\"\n\t\t\tfieldPlaceholder = \"Type...\"\n\t\t\tfieldRequired = \"'required'\"\n\t\t\t[fieldList] = \"glAccountListData\"\n\t\t\t(inputChange) = \"onAccountChange($event, index)\">\t\t\t\t\t\t\t\n\t\t</app-select-search-box>\n\t</div>\n\t<div class=\"heads\">\n\t\t<div class=\"input-box\">\n\t\t    <input type=\"number\" OnlyNumber=\"true\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"invoiceAmount{{index}}\" \n\t\t    [(ngModel)]=\"invoiceGLAccountsData.amount\"\n\t\t    (ngModelChange)=\"onInvoiceAmountChange(invoiceGLAccountsData.amount, index)\" \n\t\t    required autocomplete=\"off\">\n\t\t</div>\n\t</div>\n\t<div class=\"heads\">\n\t\t<div class=\"input-box\">\n            <textarea placeholder=\"Enter\" name=\"comments{{index}}\" \n            [(ngModel)]=\"invoiceGLAccountsData.comments\" \n            (ngModelChange)=\"onCommentChange(invoiceGLAccountsData.comments, index)\" required autocomplete=\"off\">\n            </textarea>\n\t\t</div>\n\t</div>\n\t<div class=\"heads\">\n\t\t<div class=\"d-flex\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<div class=\"input-box discount-input\"> \n\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"discountDirectAmt{{index}}\" \n\t                [(ngModel)]=\"invoiceGLAccountsData.discountDirectAmt\"\n\t                (ngModelChange)=\"onDiscountAdded(invoiceGLAccountsData.discountDirectAmt, index)\"\n\t                [readonly]=\"!invoiceGLAccountsData.isDiscount\" autocomplete=\"off\">\n\t\t\t\t</div>\n\t\t\t</div>\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"input-box discount-box ml-3\">\n    \t\t\t\t<app-simple-select-box\n\t\t\t\t\t\tfieldName = \"discountType{{index}}\" \n\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t[fieldModel] = \"invoiceGLAccountsData.discountTypeId\"\n\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t[fieldRequired] = \"'null'\"\n\t\t\t\t\t\t[fieldList] = \"curTypeDataList\"\n\t\t\t\t\t\t[isDisabled] = \"!isFormValid(index)\"\n\t\t\t\t\t\t(inputChange) = \"onDiscountChange($event, index)\">\t\t\t\t\t\t\t\n\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t</div>\n    \t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"heads\">\n\t\t<div class=\"input-box tax-box\">\n\t\t\t<app-simple-select-box\n\t\t\t\tfieldName = \"vatType{{index}}\" \n\t\t\t\tfieldText = \"\"\n\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\tisLabel = \"false\"\n\t\t\t\t[fieldModel] = \"invoiceGLAccountsData.vatid\"\n\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t[fieldRequired] = \"'null'\"\n\t\t\t\t[fieldList] = \"vatTypeDataList\"\n\t\t\t\t[isDisabled] = \"!isFormValid(index)\"\n\t\t\t\t(inputChange) = \"onVatChange($event, index)\">\t\t\t\t\t\t\t\n\t\t\t</app-simple-select-box>\n\t\t</div>\n\t</div>\n\t<div class=\"heads\">\n\t\t<div class=\"input-box\">\n            <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"\" name=\"totalAmount{{index}}\" \n            [(ngModel)]=\"invoiceGLAccountsData.lineItemTotal\" \n            readonly>\n\t\t</div>\n\t</div>\n\t<div class=\"heads text-center\">\n\t\t<div class=\"float-close\" [ngClass]=\"isArrayOne() ? 'delete' : 'disabled'\" (click)=\"deleteBlock()\">\n\t    \t<i-feather class=\"icon rotate\" name=\"minus\" ></i-feather>\n\t\t</div>\n    \t<div class=\"float-close\" [ngClass]=\"isFormValid(index) ? 'valid' : 'disabled'\">\n    \t\t<i-feather class=\"icon rotate\" name=\"check\" ></i-feather>\n    \t</div>\n\t</div>\n</form>\n\n\n\t\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomePostMultiInvoiceIncomePostMultiInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-post-invoice-wrapper\">\n\n\t<h5 class=\"mb-3\" *ngIf=\"isSingleInvoice && !isEditInvoice\">\n\t\t<span>Post Single Invoice</span>\n\t</h5>\n\n\t<h5 class=\"mb-3\" *ngIf=\"!isSingleInvoice && !isEditInvoice\">\n\t\t<span>Post Multi Invoice</span>\n\t</h5>\n\n\t<h5 class=\"mb-3\" *ngIf=\"isEditInvoice\">\n\t\t<span>Edit Invoice</span>\n\t</h5>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isAccountDataLoaded\">\n\t\t\n\t\t<div class=\"card-header at-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<div class=\"card\" *ngIf=\"!isInvoiceSubmitted\">\n\t\t<div class=\"card-body\">\n\t\t\t<app-loader></app-loader>\n\t\t</div>\n\t</div>\n\n\t<ng-container *ngIf=\"isInvoiceSubmitted\">\n\n\t\t<form #postIncomeMultiInvoiceForm = \"ngForm\" name=\"postIncomeMultiInvoiceForm\" (ngSubmit)=\"submitIncomeMultiInvoiceForm(postIncomeMultiInvoiceForm)\"  novalidate>\n\n\t\t\t<div class=\"card clear mb-20\">\n\n\t\t\t\t<div class=\"card-body pb-0\">\n\n\t\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t\t<ng-container *ngIf=\"isInvoiceSubmitted\">\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Invoice Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"custInvoiceDate\" [owlDateTime]=\"custInvoiceDate\" [owlDateTimeTrigger]=\"custInvoiceDate\" placeholder=\"Date\" [(ngModel)]=\"invoice.custInvoiceDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #custInvoiceDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"custInvoiceDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Due Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"invoiceDueDate\" [owlDateTime]=\"invoiceDueDate\" [owlDateTimeTrigger]=\"invoiceDueDate\" placeholder=\"Date\" [(ngModel)]=\"invoice.dueDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #invoiceDueDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"invoiceDueDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\t\t\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<div class=\"card\">\n\n\t\t\t\t<div class=\"invoice-table\" malihu-scrollbar>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"card-body p-0 invoice-header\">\n\t\t\t\t\t\t<div class=\"w-250 heads\">Account*</div>\n\t\t\t\t\t\t<div class=\"w-150 heads\">Invoice Amount*</div>\n\t\t\t\t\t\t<div class=\"w-150 heads\">Comments*</div>\n\t\t\t\t\t\t<div class=\"w-220 heads\">Discount*</div>\n\t\t\t\t\t\t<div class=\"w-150 heads\">Tax*</div>\n\t\t\t\t\t\t<div class=\"w-70 heads\">Amount</div>\n\t\t\t\t\t\t<div class=\"w-50 heads\">Actions</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-body p-0 invoice-fields\" *ngFor=\"let invoiceGLAccountsData of invoiceGLAccountsArray; let i = index\" \n\t\t\t\t\tapp-income-post-multi-invoice-fields \n\t\t\t\t\t[invoiceGLAccountsArray] = \"invoiceGLAccountsArray\" \n\t\t\t\t\t[invoiceGLAccountsData] = \"invoiceGLAccountsData\"\n\t\t\t\t\t[index]=\"i\" \n\t\t\t\t\t(fieldParams) = \"getFieldParams($event)\"\n\t\t\t\t\t(taxParams) = \"getCustTaxInvoiceParams($event)\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t\n\n\t\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\t<div class=\"add-invoice-box\">\n\t\t\t\t\t\t<div *ngIf=\"!isSingleInvoice\" class=\"float-left add-invoice-link\" (click)=\"addInvoice()\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Another Line</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t<div class=\"total-box\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"offset-sm-7 col-sm-3\">\n\t\t\t\t\t\t\t<p>Sub Amount:</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2 amt\">\n\t\t\t\t\t\t\t<p><span class=\"ml-1\">{{invoice.subAmount}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\" *ngFor=\" let item of vatTypeDataList; let i = index \">\n\t\t\t\t\t\t<div class=\"offset-sm-7 col-sm-3\">\n\t\t\t\t\t\t\t<p>VAT: [{{item.lookupValueName}}%]:</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2 amt\">\n\t\t\t\t\t\t\t<p><span class=\"ml-1\">{{item.custVatTypeAmount}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"total-box final\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"offset-sm-7 col-sm-3\">\n\t\t\t\t\t\t\t<p>Total Amount:</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-2 amt\">\n\t\t\t\t\t\t\t<p><span class=\"ml-1\">{{invoice.custInvoiceAmount}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"card mt-3\">\n\t\t\t\t<div class=\"card-body text-right\">\n\t\t\t\t\t<button class=\"btn lime-green\" [disabled]=\"postIncomeMultiInvoiceForm.invalid || isFormInValid\" [ngClass]=\"\">Submit</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t</form>\n\t\t\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeSubLedgerIncomeSubLedgerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-sub-ledger-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isSubLedgerDataLoaded\"></app-loader>\n\n\t<div class=\"card clear ov mb-3\" *ngIf=\"isSubLedgerDataLoaded\">\n\t\t<div class=\"card-body no-border filter-box\">\n  \t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n  \t\t\t<div class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"AllBlockDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\" (click)=\"getAllBlockData('all')\" [ngClass]=\"getSelected('all')\">\n\t  \t\t\t\t<span>All Towers</span>\n\t\t        </a>\n\t\t\t</div>\n  \t\t\t<div class=\"dropdown\">\n\t\t\t\t<a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"singleBlockDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\" [ngClass]=\"getSelected('single')\">\n\t  \t\t\t\t<span>{{singleBlock}}</span>\n\t  \t\t\t\t<div class=\"arrow\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></div>\n\t\t        </a>\n\t\t        <div class=\"dropdown-menu\" aria-labelledby = \"singleBlockDropDown\">\n\t\t         \t<a href=\"javascript:void(0)\" *ngFor=\"let block of blockListData\" (click)=\"getSingleBlock(block)\">{{block.apartmentBlockNumber}}</a>\n\t\t        </div>\n\t\t\t</div>\n  \t\t</div>\n\t</div>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isSubLedgerDataLoaded\">\n\t\t\n\t\t\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Sub Ledgers <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p>\n    \t\t\t\t<span *ngIf=\"filterSelected == 'all'\">All Towers</span>\n    \t\t\t\t<span *ngIf=\"filterSelected != 'all'\">Residents under {{singleBlock}}</span>\n    \t\t\t</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"subLedgerData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"subLedgerDataList\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\t\t\t<div class=\"button-wrapper\" *ngIf=\"isItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">Total Amount Due : <span class=\"ml-1\">{{totalDueAmount}}</span></p>\n    \t\t\t<p class=\"snippet\">Total Excess Payments & Incentives Due : <span class=\"ml-1\">{{totalDueAmount - netDueAmount}}</span></p>\n    \t\t\t<p class=\"snippet\">Net Amount : <span class=\"ml-1\">{{netDueAmount}}</span></p>\n\t\t\t</div>\n\n\t\t</div>\n\n  \t</div>\n\n  \t<ng-template #viewInvoiceTypeRef let-ledger>\n  \t\t\n  \t\t<div class=\"menu-info rel\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Select Invoice Types</h5>\n\t\t\t</div>\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body p-0 lists other\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" routerLink=\"/ams/income/post-multi-invoice/{{ledger.apartmentBlockUnitId}}/single\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Invoice - Single Line</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" routerLink=\"/ams/income/post-multi-invoice/{{ledger.apartmentBlockUnitId}}/multi\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Invoice - Multi Line</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\" \n\t\t\t\t\t\t\t[ngClass]=\"ledger.isInvoiceAvailable ? '' : 'disabled'\"\n\t\t\t\t\t\t\trouterLink=\"/ams/income/add-credit/{{ledger.apartmentBlockUnitId}}/new\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\" (click)=\"dialogClose()\">Credit Note</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!-- <li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"tc-d-grey\">Refund Note</a>\n\t\t\t\t\t\t</li> -->\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n  \t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeTrackerAgeingIncomeTrackerAgeingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-tracker-ageing-wrapper\">\n\n\t<h4 class=\"main-title-mini float-left\">Account Ageing</h4>\n\t<h6 class=\"head-label\" *ngIf=\"isDataLoaded\">{{totalInvoices}} Invoices</h6>\n\n\t<div class=\"clear mt-3\">\n\t\t<h6 *ngIf=\"dataType == 'DueAge'\">As per Payment Due date</h6>\n\t\t<h6 *ngIf=\"dataType == 'InvoiceAge'\">As per Invoice Due date</h6>\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"filter-box clear\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item title\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t<i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>\n\t\t\t\t\t\t\t<span>Filter</span>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\" (click)=\"setDataType('DueAge')\" [ngClass]=\"dataType == 'DueAge' ? 'active' : ''\">\n\t\t\t\t\t\t<p>Due Age</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\" (click)=\"setDataType('InvoiceAge')\" [ngClass]=\"dataType == 'InvoiceAge' ? 'active' : ''\">\n\t\t\t\t\t\t<p>Invoice Age</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row\">\n\t\t<div class=\"col-sm-12 col-md-12 col-lg-12\">\n\t\t\t\n\t\t\t<div class=\"card clear account-chart-card\">\n\t\t\n\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t<app-loader *ngIf=\"!isChartLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"chart-box\" [ngClass]=\"!isChartLoaded ? 'hide-chart' : ''\">\n\t\t\t\t\t\t<canvas #incomePieChart></canvas>\n\t\t\t\t\t</div>\n\t\t\t\t\t<ul class=\"legends-list\" *ngIf=\"isChartLoaded\">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small low mr-2\"></span> 0 - 30 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem1}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small cyan mr-2\"></span> 31 - 60 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem3}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small m-red mr-2\"></span> 61 - 90 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem4}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t<span class=\"dots small blue mr-2\"></span> Over 90 days</div>\n\t\t\t\t\t\t\t<div>{{totalAmountItem5}}</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t\n\t\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card table-card clear table-accordion\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n    \t\t\t\t<h5>Collection on each Unit <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t\t<p class=\"d-none d-md-inline-block tc-blue\">Data as of Today ( {{asOfDate}} )</p>\n    \t\t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ageingData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn trans-white mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n    \t\t\t\t</li>\n\t    \t\t</ul>\n  \t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('towerUnit')\">Tower Unit Name <span [ngClass]=\"getFieldOrderBy('towerUnit')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('billToParty')\">0 - 30 Days<span [ngClass]=\"getFieldOrderBy('billToParty')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">31 - 60 Days<span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">61 - 90 Days<span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('due')\">Over 90 Days<span [ngClass]=\"getFieldOrderBy('due')\"></span></th>\n\t\t\t\t\t      <th class=\"max-50 text-center\" scope=\"col\" (click)=\"sortUnitData('status')\">Total<span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t    \t<tbody>\n\t\t\t    \t\t<ng-container *ngFor=\"let ageing of ageingDataDataList | simpleSearch: ageingData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t    \t\t\t<tr data-toggle=\"collapse\" attr.data-target=\"#collapse{{ageing.unitID}}\" aria-expanded=\"true\" attr.aria-controls=\"collapse{{ageing.unitID}}\" class=\"collapsed\">\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t<div class=\"toggle-icon\"></div>\n\t\t\t\t\t\t\t\t<span>{{ageing.towerUnit}}</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt1 + ageing.bucketAmt2}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount1 + ageing.bucketCount2}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt3}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount3}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt4}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount4}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt5}}</div>\n\t\t\t\t\t\t\t\t\t<div class=\"tc-grey\">{{ageing.bucketCount5}} Invoices</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t\t<div>{{ageing.bucketAmt6}}</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t    \t\t\t</tr>\n\t\t\t    \t\t\t<tr id=\"collapse{{ageing.unitID}}\" class=\"collapse\" attr.aria-labelledby=\"collapse{{ageing.unitID}}\" data-parent=\"#accordion\">\n\t\t\t    \t\t\t\t <td class=\"collapse-cell\" colspan=\"6\">\n\t\t\t\t    \t\t\t\t<table class=\"table\">\n\t\t\t\t    \t\t\t\t\t<tr class=\"details-wrapper\" *ngFor=\"let invoice of ageing.invoiceDetails\">\n\t\t\t\t    \t\t\t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<span class=\"dots small low\"></span>\n\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<p class=\"head\">Invoice ID</p>\n\t\t\t\t\t\t    \t\t\t\t\t\t\t<p class=\"tc-grey\">{{invoice.custInvoiceId}}</p>\n\t\t\t\t\t\t    \t\t\t\t\t\t</div>\n\t\t\t\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t    \t\t\t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Invoice Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.invoiceAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Collection Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.collectionAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Due Date</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{getDate(invoice.dueDate)}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\" *ngIf=\"dateType == 'DueAge'\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Due Age</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.dueAge}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\" *ngIf=\"dateType != 'DueAge'\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Invoice Age</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.invoiceAge}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t\t\t    \t\t\t\t<td class=\"details-info\">\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"head\">Balance Amount</p>\n\t\t\t\t\t\t    \t\t\t\t\t<p class=\"tc-grey desp\">{{invoice.balanceAmt}}</p>\n\t\t\t\t\t\t    \t\t\t\t</td>\n\t\t\t\t    \t\t\t\t\t</tr>\n\t\t\t\t    \t\t\t\t</table>\n\t\t\t    \t\t\t\t</td> \n\t\t\t    \t\t\t</tr>\n\t\t\t    \t\t</ng-container>\n\t\t\t    \t\t<tr class=\"selected\" *ngIf=\"isItemsAvailable()\">\n\t\t\t\t\t    \t<td class=\"name\">Total</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem1}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem3}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem4}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmountItem5}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{totalAmount}}</td>\n\t\t\t\t    \t</tr>\n\t\t\t    \t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.html":
  /*!************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.html ***!
    \************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeTrackerFilterIncomeTrackerFilterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"card mb-20 filter-card\" id=\"accordion\">\n\t\t\t\n\t<form #incomeFilterForm = \"ngForm\" name=\"incomeFilterForm\" (ngSubmit)=\"submitIncomeFilterForm(incomeFilterForm)\"  novalidate>\n\t\t\n\t\t<div class=\"card-header filter-box accor collapsed\" data-toggle=\"collapse\" data-target=\"#filterCollapseOne\" aria-expanded=\"true\" aria-controls=\"filterCollapseOne\">\n\t\t\t<h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n\t\t</div>\n\n\t\t<div id=\"filterCollapseOne\" class=\"collapse\" aria-labelledby=\"filterCollapseOne\" data-parent=\"#accordion\">\n\n\t\t\t<div class=\"card-header border-top\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t                    <label>Posted From</label>\n\t\t                    <input class=\"form-control\" name=\"PostStartDate\" [owlDateTime]=\"PostStartDate\" [owlDateTimeTrigger]=\"PostStartDate\" placeholder=\"Date\" [(ngModel)]=\"filter.PostStartDate\">\n\t\t\t\t\t\t\t<owl-date-time #PostStartDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostStartDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t            \t\t</div>\n\t\t\t\t\t</div> \n\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t                    <label>Posted To</label>\n\t\t                    <input class=\"form-control\" name=\"PostEndDate\" [owlDateTime]=\"PostEndDate\" [owlDateTimeTrigger]=\"PostEndDate\" placeholder=\"Date\" [(ngModel)]=\"filter.PostEndDate\">\n\t\t\t\t\t\t\t<owl-date-time #PostEndDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostEndDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t            \t\t</div>\n\t\t\t\t\t</div> \n\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box mb-2\">\n\t\t\t                <label>Bill Number</label>\n\t\t\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"billNo\" \n\t\t\t                [(ngModel)]=\"filter.billNo\">\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box mb-2\">\n\t\t\t                <label>Receipt Number</label>\n\t\t\t                <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter text\" name=\"receiptNo\" \n\t\t\t                [(ngModel)]=\"filter.receiptNo\">\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-header\">\n\n\t\t\t\t<ul class=\"list-inline\">\n\t\t\t\t\t<li class=\"list-inline-item mr-5\">\n\t\t\t\t\t\t<div class=\"input-box d-inline-block oh mb-0 mt-1\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"isInvoiceCreditNote\" name=\"isInvoiceCreditNote\" [(ngModel)]=\"filter.isCreditNote\" [value]=\"\">\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"isInvoiceCreditNote\">Is Credit Note</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<div class=\"input-box d-inline-block oh mb-0 mt-1\">\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"isInvoiceReverse\" name=\"isInvoiceReverse\" [(ngModel)]=\"filter.isReversed\">\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"isInvoiceReverse\">Is Reverse</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<ng-container *ngIf=\"!isFilterObjectNull()\">\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let key of Object.keys(filter)\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item filter-badge grey-blue\" [ngClass]=\"isItem(key) ? 'd-inline-block' : 'd-none' \">\n\t\t\t\t\t\t\t\t{{getFilterData(key)}}\n\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"removeFilterItem(key)\"></i-feather>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4 text-right\">\n\t\t\t\t\t\t<button class=\"btn lime-green sf\" [disabled]=\"isFilterObjectNull()\">Apply Filter</button>\n\t\t\t\t\t\t<div class=\"btn trans-red ml-3 sf\" (click)=\"clearFilterItems()\">Clear</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</form>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.html":
  /*!*******************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.html ***!
    \*******************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsCustomerIncomeTrackerReportsCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-tracker-reports-customer-reports\">\n\t\n\t<h4 class=\"main-title-mini\">Customer Journal Entries</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #incomeReportsCustomerForm = \"ngForm\" name=\"incomeReportsCustomerForm\" (ngSubmit)=\"submitIncomeReportsCustomerForm(incomeReportsCustomerForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockId\" (ngModelChange)=\"getUnits(report.apartmentBlockId)\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Unit No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockUnitId\" [disabled]=\"!isBlockSelected\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date From</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateFrom\" [owlDateTime]=\"documentDateFrom\" [owlDateTimeTrigger]=\"documentDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateFrom\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date To</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateTo\" [owlDateTime]=\"documentDateTo\" [owlDateTimeTrigger]=\"documentDateTo\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateTo\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date From*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingDateFrom\" [owlDateTime]=\"PostingDateFrom\" [owlDateTimeTrigger]=\"PostingDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateFrom\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date To*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingdateTo\" [owlDateTime]=\"PostingdateTo\" [owlDateTimeTrigger]=\"PostingdateTo\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateTo\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingdateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingdateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Account</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glAccountNo\" \n\t\t\t\t\t\t        id=\"glAccountNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLaccountID\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glAccountsDataList\" [value]=\"item.glaccountId\">{{ item.glaccountName }} {{item.glaccountId}}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Document Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glDocumentType\" \n\t\t\t\t\t\t        id=\"glDocumentType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLDocumentTypeID\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glDocumentTypeDataList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"incomeReportsCustomerForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.documentDateFrom)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.documentDateTo)}}</span> </p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('custInvoiceId')\">Customer Invoice Id<span [ngClass]=\"getFieldOrderBy('custInvoiceId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlock')\">Block No<span [ngClass]=\"getFieldOrderBy('apartmentBlock')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockUnitNumber')\">Unit No<span [ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('creditAmount')\">Credit Amount<span [ngClass]=\"getFieldOrderBy('creditAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('debitAmount')\">Debit Amount<span [ngClass]=\"getFieldOrderBy('debitAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('glaccountname')\">Gl Account Name<span [ngClass]=\"getFieldOrderBy('glaccountname')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('documentDate')\">Document Date<span [ngClass]=\"getFieldOrderBy('documentDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('enteredByName')\">Entered By<span [ngClass]=\"getFieldOrderBy('enteredByName')\"></span></th>\n\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('entryDateTime')\">Entry Date & Time<span [ngClass]=\"getFieldOrderBy('entryDateTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postingDate')\">Posting Date<span [ngClass]=\"getFieldOrderBy('postingDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('clearingDate')\">Clearing Date<span [ngClass]=\"getFieldOrderBy('clearingDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('clearingDocumentNumber')\">Clearing Document No <span [ngClass]=\"getFieldOrderBy('clearingDocumentNumber')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of reportsDataList | simpleSearch: reportsData | sort : unitFieldType: unitOrder| slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{report.custInvoiceId}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.apartmentBlock}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.apartmentBlockUnitNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.creditAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.debitAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.glaccountname}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.documentDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.enteredByName}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(report.entryDateTime)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.postingDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.clearingDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.clearingDocumentNumber}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.html":
  /*!***************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.html ***!
    \***************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsVendorIncomeTrackerReportsVendorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-tracker-reports-vendor-reports\">\n\t\n\t<h4 class=\"main-title-mini\">Vendor Journal Entries</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<form #incomeReportsVendorForm = \"ngForm\" name=\"incomeReportsVendorForm\" (ngSubmit)=\"submitIncomeReportsVendorForm(incomeReportsVendorForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date From</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateFrom\" [owlDateTime]=\"documentDateFrom\" [owlDateTimeTrigger]=\"documentDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateFrom\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Document Date To</label>\n\t\t                    <input class=\"form-control\" name=\"documentDateTo\" [owlDateTime]=\"documentDateTo\" [owlDateTimeTrigger]=\"documentDateTo\" placeholder=\"Date\" [(ngModel)]=\"report.documentDateTo\">\n\t\t\t\t\t\t\t<owl-date-time #documentDateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"documentDateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date From*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingDateFrom\" [owlDateTime]=\"PostingDateFrom\" [owlDateTimeTrigger]=\"PostingDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateFrom\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Posting Date To*</label>\n\t\t                    <input class=\"form-control\" name=\"PostingdateTo\" [owlDateTime]=\"PostingdateTo\" [owlDateTimeTrigger]=\"PostingdateTo\" placeholder=\"Date\" [(ngModel)]=\"report.PostingdateTo\" required>\n\t\t\t\t\t\t\t<owl-date-time #PostingdateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"PostingdateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Vendor</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"vendorName\" \n\t\t\t\t\t\t        id=\"vendorName\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.vendorId\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of vendorData\" [value]=\"item.vendorId\">{{ item.vendorName }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Account</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glAccountNo\" \n\t\t\t\t\t\t        id=\"glAccountNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLaccountID\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glAccountsDataList\" [value]=\"item.glaccountId\">{{ item.glaccountName }} {{item.glaccountId}}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Gl Document Type*</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"glDocumentType\" \n\t\t\t\t\t\t        id=\"glDocumentType\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.GLDocumentTypeID\" required>\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of glDocumentTypeDataList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"incomeReportsVendorForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.documentDateFrom)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.documentDateTo)}}</span> </p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      \n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('vendorName')\">Vendor Name<span [ngClass]=\"getFieldOrderBy('vendorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('vendorInvoiceId')\">Vendor Invoice Id<span [ngClass]=\"getFieldOrderBy('vendorInvoiceId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('creditAmount')\">Credit Amount<span [ngClass]=\"getFieldOrderBy('creditAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('debitAmount')\">Debit Amount<span [ngClass]=\"getFieldOrderBy('debitAmount')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('glaccountname')\">Gl Account Name<span [ngClass]=\"getFieldOrderBy('glaccountname')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('documentDate')\">Document Date<span [ngClass]=\"getFieldOrderBy('documentDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('documentNumber')\">Document No<span [ngClass]=\"getFieldOrderBy('documentNumber')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('enteredByName')\">Entered By<span [ngClass]=\"getFieldOrderBy('enteredByName')\"></span></th>\n\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('entryDateTime')\">Entry Date & Time<span [ngClass]=\"getFieldOrderBy('entryDateTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('postingDate')\">Posting Date<span [ngClass]=\"getFieldOrderBy('postingDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('clearingDate')\">Clearing Date<span [ngClass]=\"getFieldOrderBy('clearingDate')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of reportsDataList | simpleSearch: reportsData | sort : unitFieldType: unitOrder| slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{report.vendorName}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.vendorInvoiceId}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.creditAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.debitAmount}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.glaccountname}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.documentDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.documentNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.enteredByName}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(report.entryDateTime)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.postingDate)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.clearingDate)}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Select the reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportsDataList; let i = index\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/income/reports/{{report.type}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\t</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeTrackerSetupIncomeTrackerSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-tracker-setup-wrapper profile-section\">\n\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Settings</h5>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isSettingsDataLoaded\"></app-loader>\n\n\t\t\t<div class=\"icon-wrapper float-right\" *ngIf=\"!isEdit\">\n\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t</div>\n\n\t\t\t<div class=\"icon-wrapper float-right \" *ngIf=\"isEdit\">\n\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showEditForm()\"></i-feather>\n\t\t\t</div>\n\t\t\t<ng-container *ngIf=\"isSettingsDataLoaded && !isEdit\">\n\n\t\t\t\t<form #incomeSettingsForm=\"ngForm\" name=\"incomeSettingsForm\"\n\t\t\t\t\t(ngSubmit)=\"submitIncomeSettingsForm(incomeSettingsForm)\" novalidate>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Currency Type*</label>\n\t\t\t\t\t\t\t\t<p>{{setting.currencyId}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Customer Reconciliation Account*</label>\n\t\t\t\t\t\t\t\t<p>{{setting.glAccountId}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Customer Income Payment Term*</label>\n\t\t\t\t\t\t\t\t<p>{{setting.paymentTerm}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Customer Invoice VAT %*</label>\n\t\t\t\t\t\t\t\t<p>{{setting.vatPercentage}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<ng-container *ngIf=\"isSettingsDataLoaded && isEdit\">\n\n\t\t\t\t<form #incomeSettingsForm=\"ngForm\" name=\"incomeSettingsForm\"\n\t\t\t\t\t(ngSubmit)=\"submitIncomeSettingsForm(incomeSettingsForm)\" novalidate>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Currency Type*</label>\n\t\t\t\t\t\t\t\t<select name=\"currencyType\" id=\"currencyType\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setting.currencyId\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of currencyTypeDataList\" [value]=\"item.lookupValueName\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Customer Reconciliation Account*</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" name=\"glAccount\" id=\"glAccount\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setting.glAccountId\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Customer Income Payment Term*</label>\n\t\t\t\t\t\t\t\t<select name=\"paymentTerm\" id=\"paymentTerm\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setting.paymentTerm\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of paymentInvoiceDataList\" [value]=\"item.description\">\n\t\t\t\t\t\t\t\t\t\t{{ item.description }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Customer Invoice VAT %*</label>\n\t\t\t\t\t\t\t\t<select name=\"invoiceVat\" id=\"invoiceVat\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"setting.vatPercentage\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of vatPecentageDataList\" [value]=\"item.lookupValueName\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"incomeSettingsForm.invalid\">Save</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<div class=\"card mt-30\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Customer Penalty</h5>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isPenaltyDataLoaded\"></app-loader>\n\t\t\t<div class=\"icon-wrapper float-right\" *ngIf=\"!isPenaltyEdit\">\n\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\" (click)=\"showPenaltyEditForm()\"></i-feather>\n\t\t\t</div>\n\n\t\t\t<div class=\"icon-wrapper float-right \" *ngIf=\"isPenaltyEdit\">\n\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\" (click)=\"showPenaltyEditForm()\"></i-feather>\n\t\t\t</div>\n\t\t\t<ng-container *ngIf=\"isPenaltyDataLoaded && !isPenaltyEdit\">\n\n\t\t\t\t<form #incomePenaltySettingsForm=\"ngForm\" name=\"incomePenaltySettingsForm\"\n\t\t\t\t\t(ngSubmit)=\"submitIncomePenaltySettingsForm(incomePenaltySettingsForm)\" novalidate>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Type*</label>\n\t\t\t\t\t\t\t\t<p>{{penalty.penaltyTypeId}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Flat rate for Late payment*</label>\n\t\t\t\t\t\t\t\t<p>{{penalty.latePaymentId}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>% Penalty*</label>\n\t\t\t\t\t\t\t\t<p>{{penalty.penaltyPercentage}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Grace Period for Invoice*</label>\n\t\t\t\t\t\t\t\t<p>{{penalty.gracePeriodInvoiceId}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngIf=\"isPenaltyDataLoaded && isPenaltyEdit\">\n\n\t\t\t\t<form #incomePenaltySettingsForm=\"ngForm\" name=\"incomePenaltySettingsForm\"\n\t\t\t\t\t(ngSubmit)=\"submitIncomePenaltySettingsForm(incomePenaltySettingsForm)\" novalidate>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Type*</label>\n\t\t\t\t\t\t\t\t<select name=\"penaltyType\" id=\"penaltyType\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"penalty.penaltyTypeId\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of penaltyDataList\" [value]=\"item.lookupValueName\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Flat rate for Late payment*</label>\n\t\t\t\t\t\t\t\t<select name=\"latePayment\" id=\"latePayment\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"penalty.latePaymentId\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of lastPaymentDataList\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueId }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>% Penalty*</label>\n\t\t\t\t\t\t\t\t<select name=\"penaltyPercentage\" id=\"penaltyPercentage\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"penalty.penaltyPercentage\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of penaltyPercentageDataList\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueId }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Grace Period for Invoice*</label>\n\t\t\t\t\t\t\t\t<select name=\"gracePeriodInvoice\" id=\"gracePeriodInvoice\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"penalty.gracePeriodInvoiceId\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of gracePeriodInvoiceDataList\"\n\t\t\t\t\t\t\t\t\t\t[value]=\"item.lookupValueName\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\"\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"incomePenaltySettingsForm.invalid\">Save</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeViewCreditIncomeViewCreditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-credit-note-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isCreditNoteLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isCreditNoteLoaded\">\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Credit Notes <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"creditNoteData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn trans-white mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t       <th scope=\"col\">Invoice Id \n\t\t\t\t\t       \t<span (click)=\"sortUnitData('invoiceId')\" [ngClass]=\"getFieldOrderBy('invoiceId')\"></span>\n\t\t\t\t\t       \t<input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"columnField['invoiceId']\" (ngModelChange)=\"selectColInput('invoiceId')\" >\n\t\t\t\t\t       </th>\n\t\t\t\t\t      <th scope=\"col\">posted By \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('postedBy')\" [ngClass]=\"getFieldOrderBy('postedBy')\"></span>\n\t\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"postedByName\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"firstName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"postedBy\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"userDataList\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'postedByName', 'firstName')\">\t\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Credit Note Id \n\t\t\t\t\t       \t<span (click)=\"sortUnitData('creditNoteId')\" [ngClass]=\"getFieldOrderBy('creditNoteId')\"></span>\n\t\t\t\t\t       \t<input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"columnField['creditNoteId']\" (ngModelChange)=\"selectColInput('creditNoteId')\" >\n\t\t\t\t\t       </th>\n\t\t\t\t\t       <th scope=\"col\">Collection Id \n\t\t\t\t\t       \t<span (click)=\"sortUnitData('collectionId')\" [ngClass]=\"getFieldOrderBy('collectionId')\"></span>\n\t\t\t\t\t       \t<input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"columnField['collectionId']\" (ngModelChange)=\"selectColInput('collectionId')\" >\n\t\t\t\t\t       </th>\n\t\t\t\t\t      <th scope=\"col\">Posted Date\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('postedOn')\" [ngClass]=\"getFieldOrderBy('postedOn')\"></span>\n\t\t\t\t\t      \t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"postedOn\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'postedOn')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Tower Unit\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Tower Unit\" [(ngModel)]=\"columnField['block_Unit']\" (ngModelChange)=\"selectColInput('block_Unit')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Amount\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('amount')\" [ngClass]=\"getFieldOrderBy('amount')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Amount\" [(ngModel)]=\"columnField['amount']\" (ngModelChange)=\"selectColInput('amount')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      Sent Email\n\t\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t  \t  </th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      SMS/Email\n\t\t\t\t\t       <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t  \t  </th>\n\t\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t      \tActions\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t  \t  </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let credit of creditNoteDataList | simpleSearch: creditNoteData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{credit.invoiceId}}</td>\n\t\t\t\t\t      <td class=\"name\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{getCustomerName(credit.insertedBy)}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h5>Comments</h5>\n\t\t\t\t\t\t\t    \t\t\t<small>{{credit.comment}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"grey\">{{credit.creditNoteId}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{credit.collectionId}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(credit, credit.insertedOn)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{credit.block_Unit}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{credit.amount}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"credit.isEmailSent\" >\n\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateCreditItem(credit)\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"credit.isSmssent\" >\n\t\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateCreditItem(credit)\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      \t</div>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-credit/{{credit.creditNoteId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t\t\t\t\t\t  </td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html":
  /*!**************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeViewDefaultersIncomeViewDefaultersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-view-defaulters-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDefaultersDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDefaultersDataLoaded\">\n\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>View Defaulters <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"defaultData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\" class=\"select\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"selectAllDefaulters\" \n\t\t\t\t\t\t\t\t    name=\"selectAllDefaulters\" \n\t\t\t\t\t\t\t\t    [(ngModel)]=\"selectAllDefaulters\"\n\t                            \t(ngModelChange)=\"getAllDefaulters()\" >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"selectAllDefaulters\"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t     \t  </th>\n\t\t\t\t\t      <th scope=\"col\">Type\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('type')\" [ngClass]=\"getFieldOrderBy('type')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Type\" [(ngModel)]=\"columnField['type']\" (ngModelChange)=\"selectColInput('type')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Unit\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('unit')\" [ngClass]=\"getFieldOrderBy('unit')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Unit\" [(ngModel)]=\"columnField['Unit']\" (ngModelChange)=\"selectColInput('Unit')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Primary Contact \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('primaryContact')\" [ngClass]=\"getFieldOrderBy('primaryContact')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Primary Contact\" [(ngModel)]=\"columnField['primaryContact']\" (ngModelChange)=\"selectColInput('primaryContact')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Phone\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('phone')\" [ngClass]=\"getFieldOrderBy('phone')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"columnField['phone']\" (ngModelChange)=\"selectColInput('phone')\" >\n\t\t\t\t\t      \t</th>\n\t\t\t\t\t      <th scope=\"col\">Amount\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('due')\" [ngClass]=\"getFieldOrderBy('due')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Amount\" [(ngModel)]=\"columnField['due']\" (ngModelChange)=\"selectColInput('due')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Email\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('emailSetting')\" [ngClass]=\"getFieldOrderBy('emailSetting')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['emailSetting']\" (ngModelChange)=\"selectColInput('emailSetting')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let default of defaultDataList | simpleSearch: defaultData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex  ; let i = index\" [ngClass]=\"default.checked ? 'selected' : ''\">\n\t\t\t\t\t      <td class=\"select\">\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t      \t\t<div class=\"form-check float-left\">\n\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t    id=\"{{default.invoiceNumber}}\" \n\t\t                            name=\"{{default.invoiceNumber}}\"\n\t\t                            [(ngModel)]=\"default.checked\"\n\t\t                            (ngModelChange)=\"getSelectedAllDefaulters(default)\"\n\t\t\t\t\t\t\t\t    >\n\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"{{default.invoiceNumber}}\"></label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t      \t</div>\n\t\t\t\t      \t  </td>\n\t\t\t\t\t      <td class=\"name\">{{default.type}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.unit}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.primaryContact}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.phone}}</td>\n\t\t\t\t\t      <td class=\"name\">{{default.due}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{default.emailSetting}}</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper\">\n\t\t\t\t\t<a class=\"btn lime-green sf\"\n\t    \t\t\t\t(click)=\"sendEmail()\"\n\t\t\t\t\t\t[ngClass]=\"!isDefaultSelected ? 'disabled' : ''\">\n\t\t\t\t\t\t<span>Send Email</span>\n\t    \t\t\t</a>\n\t    \t\t\t<a class=\"btn lime-green sf\"\n\t    \t\t\t\t(click)=\"sendSMS()\"\n\t\t\t\t\t\t[ngClass]=\"!isDefaultSelected ? 'disabled' : ''\">\n\t\t\t\t\t\t<span>Send SMS</span>\n\t    \t\t\t</a>\n\t    \t\t\t<!-- <form name=\"sendMessage\" novalidate>\n\t\t    \t\t\t<div class=\"input-box radio-box\">\n\t\t\t    \t\t\t<div class=\"form-group\">\n\t\t                        <input name=\"sendMessage\" id=\"email\" [(ngModel)]=\"sendEmail\"  value=\"email\" type=\"radio\"required>\n\t\t                        <label class=\"radio-inline\" for=\"email\">Email</label>\n\t\t             \t\t</div>\n\t\t\t\t            <div class=\"form-group\">\n\t\t\t                    <input name=\"sendMessage\" id=\"sendSms\" [(ngModel)]=\"sendSms\" value=\"2\" type=\"radio\"required>\n\t\t\t                    <label class=\"radio-inline\" for=\"sendSms\">SMS</label>\n\t\t\t\t            </div>\n\t\t\t            </div>\n\t\t        \t</form> -->\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html":
  /*!************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeViewInvoiceHistoryIncomeViewInvoiceHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-view-invoice-history-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<div class=\"card mb-20 no-shadow\" *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAccountDataLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Bill to party: </span>{{accountDataList[0].billToParty}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Contact Person: </span>{{accountDataList[0].primayContact}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Unit: </span>{{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t</div>\n\n\t<app-income-tracker-filter \n\t*ngIf=\"isInvoiceDataLoaded\"\n\t(fieldParams) = getFieldParams($event)\n\t>\n\t\t\n\t</app-income-tracker-filter>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\n\t\t<ul class=\"legends list-inline\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"squares medium green\">C</span>Credit</li>\n\t\t\t<li class=\"list-inline-item\"><span class=\"squares medium red\">R</span>Reversed</li>\n\t\t</ul>\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Account History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t\t<p *ngIf=\"isAccountDataLoaded\">Resident under {{accountDataList[0].apartmentBlockNumber}} {{accountDataList[0].apartmentBlockUnitNumber}}</p>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" >\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t\n\n\t  \t\t<div class=\"card-body p-0\">\n\t  \t\t\t\n\t  \t\t\t\n\t  \t\t\t<table class=\"table table-checker table-resizable\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t     <th scope=\"col\">Posted Date\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('postedOn')\" [ngClass]=\"getFieldOrderBy('postedDate')\"></span>\n\t\t\t\t\t      \t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"postedDate\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'postedDate')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Bill No\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('billNo')\" [ngClass]=\"getFieldOrderBy('billNo')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Bill No\" [(ngModel)]=\"columnField['billNo']\" (ngModelChange)=\"selectColInput('billNo')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Receipt No\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('receiptNo')\" [ngClass]=\"getFieldOrderBy('receiptNo')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Bill No\" [(ngModel)]=\"columnField['receiptNo']\" (ngModelChange)=\"selectColInput('receiptNo')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Billed Amount\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('invoiceAmount')\" [ngClass]=\"getFieldOrderBy('invoiceAmount')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Bill No\" [(ngModel)]=\"columnField['invoiceAmount']\" (ngModelChange)=\"selectColInput('invoiceAmount')\" > \n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Receipt Amount\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('amountPaid')\" [ngClass]=\"getFieldOrderBy('amountPaid')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Bill No\" [(ngModel)]=\"columnField['amountPaid']\" (ngModelChange)=\"selectColInput('amountPaid')\" >  \n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Due\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('balance')\" [ngClass]=\"getFieldOrderBy('balance')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Bill No\" [(ngModel)]=\"columnField['balance']\" (ngModelChange)=\"selectColInput('balance')\" >  \n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th class=\"max-50 text-center\">Status\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th  class=\"simple-actions\" scope=\"col\">Actions\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let invoice of invoiceDataList | simpleSearch: invoiceData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">\n\t\t\t\t\t      <a href=\"javascript:void(0)\" class=\"t-decor\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{getInvoiceDate(i, invoice.postedDate)}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<p>Account</p>\n\t\t\t\t\t\t\t    \t\t\t<small>{{invoice.account}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<p>Comment</p>\n\t\t\t\t\t\t\t    \t\t\t<small>{{invoice.comments}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"grey\"><a href=\"javascript:void(0)\" class=\"t-decor tc-s-blue\">{{invoice.billNo}}</a></td>\n\t\t\t\t\t      <td class=\"grey\"><a href=\"javascript:void(0)\" class=\"t-decor tc-s-blue\">{{invoice.receiptNo}}</a></td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.invoiceAmount}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.amountPaid}}</td>\n\t\t\t\t\t      <td class=\"name\">{{invoice.balance}}</td>\n\t\t\t\t\t      <!--<td class=\"name text-center\">\n\t\t\t\t\t      \t<span *ngIf=\"invoice.isReversed\">Y</span>\n\t\t\t\t\t      \t<span *ngIf=\"!invoice.isReversed\">N</span>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t\t      \t<span *ngIf=\"invoice.isCreditNote\">Y</span>\n\t\t\t\t\t      \t<span *ngIf=\"!invoice.isCreditNote\">N</span>\n\t\t\t\t\t      </td> -->\n\t\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t\t      \t<span class=\"squares medium ml-1\" [ngClass]=\"invoice.isReversed ? 'red' : ''\">\n\t\t\t\t\t      \t\t<span *ngIf=\"invoice.isReversed\">R</span>\n\t\t\t\t\t      \t\t<span *ngIf=\"invoice.isCreditNote\">C</span>\n\t\t\t\t\t      \t</span>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" placement=\"top\" [ngbPopover]=\"popReverseContent\" triggers=\"mouseenter:mouseleave\" [ngClass]=\"invoice.isReversed ? 'disabled' : 'reverse' \"role=\"button\" data-toggle=\"dropdown\" id=\"reverseDropDownMenu\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t      \t\t<img class=\"svg reverse\" src=\"assets/images/undo-icon.svg\">\n\t\t\t\t\t\t      \t<ng-template #popReverseContent>\n\t\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t\t    \t<h6>Reverse</h6>\n\t\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      \t</a>\n\t\t\t\t\t      \t<div class=\"dropdown-menu page-menu\" aria-labelledby=\"reverseDropDownMenu\" (click)=\"stopPropagation($event)\">\n\t\t\t\t      \t\t\t<form #reverseInvoiceForm = \"ngForm\" name=\"reverseInvoiceForm\"  novalidate>\n\t\t\t\t      \t\t\t\t\t\n\t\t\t\t      \t\t\t\t<app-loader *ngIf=\"!isReverseSubmitted\"></app-loader>\n\t\t\t\t      \t\t\t\t\t\n\t\t      \t\t\t\t\t\t\n\t\t\t      \t\t\t\t\t\t<div class=\"row\" [ngClass]=\"isReverseSubmitted ? '' : 'slideup'\">\n\t\t\t      \t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t      \t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t                <label>Comments</label>\n\t\t\t\t\t\t\t\t\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comment\" [(ngModel)]=\"reverse.comment\" required>\n\t\t\t\t\t\t\t\t\t    \t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn blue t-no-decor\" (click)=\"reverseItem(invoice)\" [ngClass]=\"reverseInvoiceForm.invalid ? 'disabled' :''\">Submit</a>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t      \t\t\t\t\t\t</div>\n\n\n\t\t\t\t      \t\t\t</form>\n\t\t\t\t    \t\t</div>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t\t      \t*ngIf=\"invoice.billNo != null\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-invoice/{{invoice.billNo}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t\t      \t*ngIf=\"invoice.receiptNo != null\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-invoice/{{invoice.receiptNo}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t    \t\t\t\t  </td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t\t</div>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeViewInvoiceIncomeViewInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-view-invoice-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\t\t\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/income/subledger\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Sub Ledger</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!-- <ul class=\"legends list-inline\">\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Pending</li>\n\t\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Nill</li>\n\t\t</ul> -->\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>All Invoices <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t    \t\t\t</li>\n\t    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t  \t\t\t<jqxGrid \n\t\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t[pageable]=\"true\" \n\t\t\t\t\t[filterable]=\"true\" \n\t\t\t\t\t[sortable]=\"true\" \n\t\t\t\t\t[source]=\"invoiceDataList\"\n\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t#datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t\n\t\t\t\t\n\t\t\t\t<jqxPopover \n\t\t\t\t#reversePopOver \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[showCloseButton]=\"true\" \n\t\t\t\t[selector]=\"reversePopOverSelector\"\n\t\t\t\t[position]=\"'left'\"\n\t\t\t\t>\n\t\t\t\t\t<app-income-invoice-reverse [invoice]=\"invoice\"></app-income-invoice-reverse>\n\t\t\t\t</jqxPopover>\n\n\t  \t\t\t<!-- <table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      \tInvoice Id\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('custInvoiceId')\" [ngClass]=\"getFieldOrderBy('custInvoiceId')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"columnField['custInvoiceId']\" (ngModelChange)=\"selectColInput('custInvoiceId')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Invoice Date\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('postedOn')\" [ngClass]=\"getFieldOrderBy('postedOn')\"></span>\n\t\t\t\t\t      \t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"postedOn\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'postedOn')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      \tPosted By\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('postedByName')\" [ngClass]=\"getFieldOrderBy('postedByName')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Posted By\" [(ngModel)]=\"columnField['postedByName']\" (ngModelChange)=\"selectColInput('postedByName')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      \tTower Unit \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Tower Unit\" [(ngModel)]=\"columnField['block_Unit']\" (ngModelChange)=\"selectColInput('block_Unit')\" >\n\t\t\t\t\t  \t  </th>\n\t\t\t\t\t      <th scope=\"col\">Account\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('glaccountId')\" [ngClass]=\"getFieldOrderBy('glaccountId')\"></span>\n\t\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"glaccountName\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"glaccountName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"glaccountId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"glAccountListData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'glaccountName', 'glaccountName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t      </th> \n\t\t\t\t\t      <th scope=\"col\">Due\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('custInvoiceAmount')\" [ngClass]=\"getFieldOrderBy('custInvoiceAmount')\"></span>\n\t\t\t\t\t      \t <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['custInvoiceAmount']\"(ngModelChange)=\"selectColInput('custInvoiceAmount')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      Sent Email\n\t\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['isSmssent']\"(ngModelChange)=\"selectColInput('isSmssent')\" >\n\t\t\t\t\t  \t</th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      SMS/Email\n\t\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['isEmailSent']\"(ngModelChange)=\"selectColInput('isEmailSent')\" >\n\t\t\t\t\t  \t</th>\n\t\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t      Actions\n\t\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t  \t  </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t     \t<tr *ngFor=\"let invoice of invoiceDataList | simpleSearch: invoiceData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t     \t  <td class=\"grey\"> <a href=\"javascript:void(0)\">{{invoice.custInvoiceId}}</a></td>\n\t\t\t\t     \t  <td class=\"grey\">{{getInvoiceDate(invoice.custInvoiceDate)}}</td>\n\t\t\t\t\t      <td class=\"grey\">\n\t\t\t\t\t      <a href=\"javascript:void(0)\" class=\"t-decor\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{getUserName(invoice, invoice.postedBy)}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<h6>Comments</h6>\n\t\t\t\t\t\t\t    \t\t\t<p>{{invoice.comments}}</p>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t\t  <td class=\"grey\">{{invoice.block_Unit}}</td>\n\t\t\t\t\t     <td class=\"grey\">{{getAccountName(invoice, invoice.invoiceGLAccounts)}}</td> \n\t\t\t\t\t      <td class=\"grey\">{{invoice.custInvoiceAmount}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"invoice.isEmailSent\" >\n\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateInvoiceItem(invoice)\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"invoice.isSmssent\" >\n\t\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"updateInvoiceItem(invoice)\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      \t</div>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-3\" role=\"button\" data-toggle=\"dropdown\" id=\"reverseIncomeInvoiceDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon send ot\" name=\"activity\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t\t\t\t\t      \t<div class=\"dropdown-menu page-menu icon-menu dropdown-menu-right\" aria-labelledby=\"reverseIncomeInvoiceDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t\t\t\t      \t<app-income-invoice-reverse [invoice]=\"invoice\"></app-income-invoice-reverse>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t\t      \trouterLink=\"/ams/income/edit-invoice/{{invoice.custInvoiceId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t      \t</a>\n\t    \t\t\t\t  </td>\n\t\t\t\t\t    </tr>\n\n\t\t\t\t     </tbody>\n\t\t\t\t</table>\n\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination> -->\n\n\n\t  \t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\t<ng-template #viewInvoiceDetailsRef let-invoice>\n\n\t\t<div class=\"invoice-info info-modal-box rel\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Invoice Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerComponentsIncomeViewReceiptsIncomeViewReceiptsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-receipts-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isReceiptsLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isReceiptsLoaded\">\n\n\n\t\t<div class=\"card table-card clear\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Total Receipts <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"receiptsData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\t    \t\t\t\t<a class=\"btn trans-white mt_5\">\n\t    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t    \t\t\t\t\t<span>Print</span>\n\t    \t\t\t\t</a>\n\t    \t\t\t</li>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t  \t\t<div class=\"card-body p-0\">\n\n\t  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t      <th scope=\"col\">Receipt No \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('receiptNumber')\" [ngClass]=\"getFieldOrderBy('receiptNumber')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Receipt No\" [(ngModel)]=\"columnField['receiptNumber']\" (ngModelChange)=\"selectColInput('receiptNumber')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Name \n\t\t\t\t\t      \t<span (click)=\"sortUnitData('name')\" [ngClass]=\"getFieldOrderBy('name')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"NAME\" [(ngModel)]=\"columnField['name']\" (ngModelChange)=\"selectColInput('name')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Payment Date\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('paymentDateFormat')\" [ngClass]=\"getFieldOrderBy('paymentDateFormat')\"></span>\n\t\t\t\t\t      \t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"paymentDateFormat\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'paymentDateFormat')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Tower Unit\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Tower Unit\" [(ngModel)]=\"columnField['block_Unit']\" (ngModelChange)=\"selectColInput('block_Unit')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">Credit Note Amount\n\t\t\t\t\t      \t<span (click)=\"sortUnitData('amount')\" [ngClass]=\"getFieldOrderBy('amount')\"></span>\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Amount\" [(ngModel)]=\"columnField['amount']\" (ngModelChange)=\"selectColInput('amount')\" >\n\t\t\t\t\t      </th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      \tEmail Sent\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['isEmailsent']\" (ngModelChange)=\"selectColInput('isEmailsent')\" >\n\t\t\t\t\t  \t  </th>\n\t\t\t\t\t      <th scope=\"col\">\n\t\t\t\t\t      \tSMS Sent\n\t\t\t\t\t      \t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['isSmssent']\" (ngModelChange)=\"selectColInput('isSmssent')\" >\n\t\t\t\t\t  \t  </th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t    <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let receipt of receiptsDataList | simpleSearch: receiptsData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t      <td class=\"name\">{{receipt.receiptNumber}}</td>\n\t\t\t\t\t      <td class=\"grey\">\n\t\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t\t      \t{{receipt.name}}</a>\n\t\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t\t    \t\t\t<p>Comments</p>\n\t\t\t\t\t\t\t    \t\t\t<small>{{receipt.comment}}</small>\n\t\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td class=\"grey\">{{getDate(receipt, receipt.paymentDate)}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{receipt.block_Unit}}</td>\n\t\t\t\t\t      <td class=\"grey\">{{receipt.amount}}</td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"receipt.isEmailsent\" >\n\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"setActive(item)\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      </td>\n\t\t\t\t\t      <td>\n\t\t\t\t\t      \t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t  <input type=\"checkbox\" [(ngModel)]=\"receipt.isSmssent\" >\n\t\t\t\t\t\t\t\t\t  <span class=\"slider round\" (click)=\"setActive(item)\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t      \t</div>\n\t\t\t\t\t      </td>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/income-tracker.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/income-tracker.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsIncomeTrackerIncomeTrackerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeAddCreditIncomeAddCreditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1hZGQtY3JlZGl0L2luY29tZS1hZGQtY3JlZGl0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: IncomeAddCreditComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeAddCreditIncomeAddCreditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeAddCreditComponent", function () {
      return IncomeAddCreditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var IncomeAddCreditComponent =
    /*#__PURE__*/
    function () {
      function IncomeAddCreditComponent(router, route, userService, apartmentService, accountsService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, IncomeAddCreditComponent);

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

      _createClass(IncomeAddCreditComponent, [{
        key: "showUnitData",
        value: function showUnitData(blockId) {
          var _this = this;

          this.apartmentService.getApartmentBlockUnitByBlockId(blockId).subscribe(function (res) {
            _this.unitListData = res;
            _this.apartmentBlockUnitId = "";
            _this.isBlockSelected = true;
            _this.isUnitSelected = false;
            _this.isAmountAdded = false;
          });
        }
      }, {
        key: "showInvoiceData",
        value: function showInvoiceData(unitId) {
          var _this2 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: unitId
          };
          this.accountsService.getCustInvoicesByApartmentBlockUnitId(params).subscribe(function (res) {
            _this2.invoiceData = res;
            _this2.credit.invoiceId = "";
            _this2.isUnitSelected = true;
          });
        }
      }, {
        key: "getInvoice",
        value: function getInvoice(invoiceId) {
          var _this3 = this;

          var data = this.invoiceData.filter(function (item) {
            return item.custInvoiceId == invoiceId;
          });
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            invoiceId: invoiceId
          };
          this.accountsService.getCollectionInvoiceByInvoiceId(params).subscribe(function (res) {
            if (res === undefined || res.length == 0) {
              if (_this3.route.params['value'].type == undefined) _this3.credit.collectionId = null;else _this3.credit.collectionId = 0;
            } else {
              _this3.credit.collectionId = res[0].collectionId;
            }
          });
          this.credit.amount = data[0].custInvoiceAmount;
          this.isAmountAdded = true;
        }
      }, {
        key: "toggleEmail",
        value: function toggleEmail() {
          this.credit.isEmailSent = true;
        }
      }, {
        key: "toggleSms",
        value: function toggleSms() {
          this.credit.isSmssent = !this.credit.isSmssent;
        }
      }, {
        key: "setActive",
        value: function setActive() {
          return '';
        }
      }, {
        key: "getUnitData",
        value: function getUnitData(id) {
          var _this4 = this;

          this.apartmentService.getApartmentBlockUnitById(id).subscribe(function (res) {
            _this4.unitListData = res;
            _this4.apartmentBlockId = "" + res[0].apartmentBlockId;

            _this4.apartmentService.getApartmentBlockUnitByBlockId(res[0].apartmentBlockId).subscribe(function (res) {
              _this4.unitListData = res;
            });
          });
        }
      }, {
        key: "getInvoiceData",
        value: function getInvoiceData(id) {}
      }, {
        key: "submitAddCreditNoteForm",
        value: function submitAddCreditNoteForm(form) {
          var _this5 = this;

          if (!this.isEditCredit) {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "amount": parseInt(this.credit.amount),
              "collectionId": 0,
              "invoiceId": parseInt(this.credit.invoiceId),
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
            this.accountsService.addCreditNote(details).subscribe(function (res) {
              if (res.message) {
                _this5.isCreditSubmitted = true;

                _this5.sharedService.setAlertMessage("Credit Note added successfully");

                _this5.router.navigate(['ams/income/creditnote']);
              } else {
                _this5.isCreditSubmitted = true;
                _this5.isError = true;
                _this5.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this5.isCreditSubmitted = true;
              _this5.isError = true;
              _this5.alertMessage = "Some error occured";
            });
          } else {
            var _details = {
              "creditNoteId": this.credit.creditNoteId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "amount": parseInt(this.credit.amount),
              "collectionId": null,
              "invoiceId": parseInt(this.credit.invoiceId),
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
            this.accountsService.updateCreditNote(_details).subscribe(function (res) {
              if (res.message) {
                _this5.isCreditSubmitted = true;

                _this5.sharedService.setAlertMessage("Credit Note updated successfully");

                _this5.router.navigate(['ams/income/creditnote']);
              } else {
                _this5.isCreditSubmitted = true;
                _this5.isError = true;
                _this5.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this5.isCreditSubmitted = true;
              _this5.isError = true;
              _this5.alertMessage = "Some error occured";
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

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
            this.accountsService.getCreditNoteById(params).subscribe(function (res) {
              _this6.credit = res[0];

              if (_this6.credit.comment == 'string') {
                _this6.credit.comment = "";
              }

              _this6.apartmentBlockUnitId = "" + _this6.credit.apartmentBlockUnitId;

              _this6.getUnitData(_this6.credit.apartmentBlockUnitId);

              var invoiceParams = {
                apartmentId: parseInt(_this6.cookieService.get('apartmentId')),
                apartmentBlockUnitId: _this6.credit.apartmentBlockUnitId
              };

              _this6.accountsService.getCustInvoicesByApartmentBlockUnitId(invoiceParams).subscribe(function (res) {
                _this6.invoiceData = res;
              });

              _this6.isEditCredit = true;

              _this6.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(_this6.cookieService.get('apartmentId'))).subscribe(function (res) {
                _this6.accountDataList = res.filter(function (item) {
                  return item.apartmentBlockUnitId == _this6.credit.apartmentBlockUnitId;
                });
                _this6.isAccountDataLoaded = true;
              });
            }, function (error) {});
          } else {
            this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this6.accountDataList = res.filter(function (item) {
                return item.apartmentBlockUnitId == _this6.route.params['value'].id;
              });
              _this6.isAccountDataLoaded = true;
            });
            this.apartmentBlockUnitId = "" + this.route.params['value'].id;
            this.getUnitData(this.route.params['value'].id);
            var invoiceParams = {
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              apartmentBlockUnitId: this.apartmentBlockUnitId
            };
            this.accountsService.getCustInvoicesByApartmentBlockUnitId(invoiceParams).subscribe(function (res) {
              _this6.invoiceData = res;
              _this6.isUnitSelected = true;
            });
            this.isBlockSelected = true;
          }

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this6.blockData = res;
          });
        }
      }]);

      return IncomeAddCreditComponent;
    }();

    IncomeAddCreditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    IncomeAddCreditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-add-credit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-add-credit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-add-credit.component.scss */
      "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], IncomeAddCreditComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeInvoiceReverseIncomeInvoiceReverseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1pbnZvaWNlLXJldmVyc2UvaW5jb21lLWludm9pY2UtcmV2ZXJzZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: IncomeInvoiceReverseComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeInvoiceReverseIncomeInvoiceReverseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeInvoiceReverseComponent", function () {
      return IncomeInvoiceReverseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var IncomeInvoiceReverseComponent =
    /*#__PURE__*/
    function () {
      function IncomeInvoiceReverseComponent(router, route, accountsService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, IncomeInvoiceReverseComponent);

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

      _createClass(IncomeInvoiceReverseComponent, [{
        key: "submitReverseIncomeInvoiceForm",
        value: function submitReverseIncomeInvoiceForm(form) {
          var _this7 = this;

          this.isInvoiceSubmitted = false;
          var details = {
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
          this.accountsService.addCustTransReversal(details).subscribe(function (res) {
            if (res.message) {
              _this7.isInvoiceSubmitted = true;

              _this7.sharedService.setAlertMessage("Invoice reversed successfully");
            } else {
              _this7.isInvoiceSubmitted = true;
              _this7.isError = true;
              _this7.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this7.isInvoiceSubmitted = true;
            _this7.isError = true;
            _this7.alertMessage = "Some error occured";
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IncomeInvoiceReverseComponent;
    }();

    IncomeInvoiceReverseComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomeInvoiceReverseComponent.prototype, "invoice", void 0);
    IncomeInvoiceReverseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-invoice-reverse',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-invoice-reverse.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-invoice-reverse.component.scss */
      "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomeInvoiceReverseComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePayInvoiceIncomePayInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wYXktaW52b2ljZS9pbmNvbWUtcGF5LWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: IncomePayInvoiceComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePayInvoiceIncomePayInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePayInvoiceComponent", function () {
      return IncomePayInvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var IncomePayInvoiceComponent =
    /*#__PURE__*/
    function () {
      function IncomePayInvoiceComponent(router, route, userService, accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomePayInvoiceComponent);

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
        this.unitOrder = true;
        this.isMobile = false;
        this.isInvoiceSelected = false;
        this.selectAllInvoices = false;
        this.isAccountDataLoaded = false;
      }

      _createClass(IncomePayInvoiceComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "getUserName",
        value: function getUserName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDataList, function (item) {
            if (item.userId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].firstName + ' ' + data[0].lastName;
          }
        }
      }, {
        key: "getInvoiceDate",
        value: function getInvoiceDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getAccountName",
        value: function getAccountName(account) {
          var accountDetails = {
            glaccountId: 0
          };

          if (account == undefined || account.length == 0) {
            accountDetails.glaccountId = 0;
          } else {
            accountDetails.glaccountId = account[0].glaccountId;
          }

          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.glAccountListData, function (item) {
            if (item.glaccountId === accountDetails.glaccountId) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].glaccountName;
          }

          return '';
        }
      }, {
        key: "getAllInvoices",
        value: function getAllInvoices() {
          var _this8 = this;

          this.totalAmountArray = [];
          this.selectedInvoiceIdArray = [];

          if (this.selectAllInvoices) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceDataList, function (item) {
              item.checked = true;

              _this8.totalAmountArray.push(item.billAmount);

              _this8.selectedInvoiceIdArray.push(item.custInvoiceID);
            });
            this.isInvoiceSelected = true;
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceDataList, function (item) {
              item.checked = false;
            });
            this.isInvoiceSelected = false;
          }
        }
      }, {
        key: "getSelectedInvoice",
        value: function getSelectedInvoice(invoice) {
          var _this9 = this;

          var length = 0;
          this.totalAmountArray = [];
          this.selectedInvoiceIdArray = [];
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceDataList, function (item) {
            if (item.checked) {
              length++;

              _this9.totalAmountArray.push(item.billAmount);

              _this9.selectedInvoiceIdArray.push(item.custInvoiceID);
            }
          });

          if (length > 0) {
            this.isInvoiceSelected = true;
          } else {
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
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "isCollectionMade",
        value: function isCollectionMade(event) {
          if (event) {
            this.totalAmountArray = [];
            this.selectedInvoiceIdArray = [];
            this.isInvoiceSelected = false;
            this.getCustInvoices();
          }
        }
      }, {
        key: "getCustInvoices",
        value: function getCustInvoices() {
          var _this10 = this;

          this.accountsService.GetARBalancewithDueByAptBlkUnitId(this.route.params['value'].id).subscribe(function (res) {
            _this10.invoiceDataList = res;
            console.log(res);
            _this10.totalItems = _this10.invoiceDataList.length;

            if (_this10.totalItems > _this10.itemLimit) {
              _this10.ItemEndIndex = _this10.itemLimit;
            } else {
              _this10.ItemEndIndex = _this10.totalItems;
            }

            _this10.userService.getAllUsersByApartmentId(parseInt(_this10.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this10.userDataList = res;
              _this10.isInvoiceDataLoaded = true;
            }, function (error) {});
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.getCustInvoices();
          this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this11.accountDataList = res.filter(function (item) {
              return item.apartmentBlockUnitId == _this11.route.params['value'].id;
            });
            _this11.isAccountDataLoaded = true;
          });
          var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
          };
          this.accountsService.getGLAccountsByGroupId(accountParams).subscribe(function (res) {
            _this11.glAccountListData = res;
          });
        }
      }]);

      return IncomePayInvoiceComponent;
    }();

    IncomePayInvoiceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    IncomePayInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-pay-invoice',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-pay-invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-pay-invoice.component.scss */
      "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomePayInvoiceComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostCollectionIncomePostCollectionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LWNvbGxlY3Rpb24vaW5jb21lLXBvc3QtY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: IncomePostCollectionComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostCollectionIncomePostCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePostCollectionComponent", function () {
      return IncomePostCollectionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var IncomePostCollectionComponent =
    /*#__PURE__*/
    function () {
      function IncomePostCollectionComponent(router, route, accountsService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, IncomePostCollectionComponent);

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
        this.minCollectionAmount = 1;
        this.maxCollectionAmount = 0;
        this.isMultipleEntry = false;
        this.collectionParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
      }

      _createClass(IncomePostCollectionComponent, [{
        key: "submitIncomePostCollectionForm",
        value: function submitIncomePostCollectionForm(form) {
          var _this12 = this;

          var custInvoiceObjArray = [];

          if (this.invoiceIdArray.length == 1) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceIdArray, function (item, index) {
              var details = {
                "apartmentId": parseInt(_this12.cookieService.get('apartmentId')),
                "collectionId": 0,
                "invoiceId": item,
                "amount": _this12.collection.amount,
                "comment": "",
                "isActive": true,
                "insertedBy": parseInt(_this12.cookieService.get('userId')),
                "insertedOn": "2020-01-10T06:59:54.422Z",
                "updatedBy": 0,
                "updatedOn": "2020-01-10T06:59:54.422Z"
              };
              custInvoiceObjArray.push(details);
            });
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceIdArray, function (item, index) {
              var details = {
                "apartmentId": parseInt(_this12.cookieService.get('apartmentId')),
                "collectionId": 0,
                "invoiceId": item,
                "amount": _this12.totalAmountArray[index],
                "comment": "",
                "isActive": true,
                "insertedBy": parseInt(_this12.cookieService.get('userId')),
                "insertedOn": "2020-01-10T06:59:54.422Z",
                "updatedBy": 0,
                "updatedOn": "2020-01-10T06:59:54.422Z"
              };
              custInvoiceObjArray.push(details);
            });
          }

          this.isCollectionSubmitted = false;
          var collectionDetails = {
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
            "insertedOn": "2019-12-15T19:36:14.09",
            "updatedBy": null,
            "updatedOn": null,
            "invoiceId": this.invoiceIdArray[0],
            "transReference1": "",
            "transReference2": "",
            "glAcctIndicator": "Asset",
            "collectionInvoice": custInvoiceObjArray
          };
          this.accountsService.addCollection(collectionDetails).subscribe(function (res) {
            if (res.message) {
              _this12.isCollectionSubmitted = true;

              _this12.sharedService.setAlertMessage("Collection done successfully");

              _this12.collectionParams.emit(true);
            } else {
              _this12.isCollectionSubmitted = true;
              _this12.isError = true;
              _this12.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this12.isCollectionSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.collection = {};
          this.collection.instrumentTypeId = "";
          this.collection.collectionAccountTypeId = "";
          this.collection.depositSlipNumber = "";
          this.collection.collectionStatusId = ""; //if only one entry of collection data is added

          this.collection.amount = this.totalAmountArray[0];
          this.maxCollectionAmount = this.totalAmountArray[0]; //payment status

          this.lookupService.getLookupValueByLookupTypeId(34).subscribe(function (res) {
            _this13.paymentStatusListData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //payment mode

          this.lookupService.getLookupValueByLookupTypeId(33).subscribe(function (res) {
            _this13.instrumentTypeListData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
          };
          this.accountsService.getGLAccountsByGroupId(accountParams).subscribe(function (res) {
            _this13.glAccountListData = res;
          });
          this.depositSlipLisData = [{
            id: 1
          }, {
            id: 2
          }, {
            id: 3
          }, {
            id: 4
          }];
          this.isCollectionSubmitted = true;
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this14 = this;

          this.collection.amount = this.totalAmountArray.reduce(function (a, b) {
            _this14.maxCollectionAmount = a + b;
            return a + b;
          });

          if (this.totalAmountArray.length > 1) {
            this.isMultipleEntry = true;
          } else {
            this.isMultipleEntry = false;
            this.collection.amount = this.totalAmountArray[0];
            this.maxCollectionAmount = this.totalAmountArray[0];
          }
        }
      }]);

      return IncomePostCollectionComponent;
    }();

    IncomePostCollectionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostCollectionComponent.prototype, "totalAmountArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostCollectionComponent.prototype, "invoiceIdArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostCollectionComponent.prototype, "collectionParams", void 0);
    IncomePostCollectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-post-collection',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-post-collection.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-post-collection.component.scss */
      "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomePostCollectionComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostInvoiceIncomePostInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LWludm9pY2UvaW5jb21lLXBvc3QtaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: IncomePostInvoiceComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostInvoiceIncomePostInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePostInvoiceComponent", function () {
      return IncomePostInvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var IncomePostInvoiceComponent =
    /*#__PURE__*/
    function () {
      function IncomePostInvoiceComponent(router, route, accountsService, userService, apartmentService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, IncomePostInvoiceComponent);

        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.isEditInvoice = false;
        this.isNewInvoice = false;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.isAccountDataLoaded = false;
        this.glAccountIndicator = "Income";
      }

      _createClass(IncomePostInvoiceComponent, [{
        key: "submitIncomeInvoiceForm",
        value: function submitIncomeInvoiceForm(form) {
          var _this15 = this;

          this.isInvoiceSubmitted = false;

          if (!this.isEditInvoice) {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
              "custInvoiceAmount": parseInt(this.invoice.totalAmount),
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
              "invoiceGLAccounts": [{
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "invoiceId": 0,
                "glaccountId": parseInt(this.invoice.glaccountId),
                "comments": "string",
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": new Date().toISOString(),
                "amount": parseInt(this.invoice.totalAmount)
              }]
            };
            this.accountsService.addCustInvoice(details).subscribe(function (res) {
              if (res.message) {
                _this15.isInvoiceSubmitted = true;

                _this15.sharedService.setAlertMessage("Invoice added successfully");

                _this15.router.navigate(['ams/income/subledger']);
              } else {
                _this15.isInvoiceSubmitted = true;
                _this15.isError = true;
                _this15.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this15.isInvoiceSubmitted = true;
              _this15.isError = true;
              _this15.alertMessage = "Some error occured";
            });
          } else {
            var _details2 = {
              "custInvoiceId": this.invoice.custInvoiceId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "apartmentBlockUnitId": this.invoice.apartmentBlockUnitId,
              "custInvoiceAmount": parseInt(this.invoice.totalAmount),
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
              "invoiceGLAccounts": [{
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
                "amount": parseInt(this.invoice.totalAmount)
              }]
            };
            this.accountsService.updateCustInvoice(_details2).subscribe(function (res) {
              if (res.message) {
                _this15.isInvoiceSubmitted = true;

                _this15.sharedService.setAlertMessage("Invoice updated successfully");

                _this15.router.navigate(['ams/income/subledger']);
              } else {
                _this15.isInvoiceSubmitted = true;
                _this15.isError = true;
                _this15.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this15.isInvoiceSubmitted = true;
              _this15.isError = true;
              _this15.alertMessage = "Some error occured";
            });
          }
        }
      }, {
        key: "onInvoiceAmountChange",
        value: function onInvoiceAmountChange(value) {
          if (this.invoice.isTax) {
            var percent = (this.invoice.vatPercent - this.invoice.discount) / 100;
            this.invoice.totalAmount = value + value * percent;
          } else {
            this.invoice.totalAmount = value;
          }
        }
      }, {
        key: "onVatChange",
        value: function onVatChange(value) {
          var percent = (this.invoice.vatPercent - this.invoice.discount) / 100;
          this.invoice.totalAmount = this.invoice.custInvoiceAmount + this.invoice.custInvoiceAmount * percent;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

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
            this.accountsService.getCustInvoiceById(params).subscribe(function (res) {
              _this16.invoice = res[0];
              _this16.invoice.invoiceGlaccountId = _this16.invoice.invoiceGLAccounts[0].invoiceGlaccountId;
              _this16.invoice.glaccountId = _this16.invoice.invoiceGLAccounts[0].glaccountId;
              _this16.apartmentBlockUnitId = _this16.invoice.apartmentBlockUnitId;

              _this16.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(_this16.cookieService.get('apartmentId'))).subscribe(function (res) {
                _this16.accountDataList = res.filter(function (item) {
                  return item.apartmentBlockUnitId == _this16.apartmentBlockUnitId;
                });
                _this16.isAccountDataLoaded = true;
              });
            }, function (error) {});
            this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this16.userDataList = res.filter(function (item) {
                return item.isActive;
              });

              _this16.apartmentService.getAllApartmentBlockUnitUsersByApartmentBlockUnitId(_this16.apartmentBlockUnitId).subscribe(function (res) {
                var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](_this16.userDataList, function (item) {
                  return item.userId == res[0].userId;
                });
                _this16.invoice.primaryContact = data[0].firstName + ' ' + data[0].lastName;
              });
            });
          } else {
            this.isNewInvoice = true;
            this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this16.accountDataList = res.filter(function (item) {
                return item.apartmentBlockUnitId == _this16.route.params['value'].id;
              });
              _this16.isAccountDataLoaded = true;
            });
            this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this16.userDataList = res.filter(function (item) {
                return item.isActive;
              });

              _this16.apartmentService.getAllApartmentBlockUnitUsersByApartmentBlockUnitId(_this16.route.params['value'].id).subscribe(function (res) {
                var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](_this16.userDataList, function (item) {
                  return item.userId == res[0].userId;
                });
                _this16.invoice.primaryContact = data[0].firstName + ' ' + data[0].lastName;
              });
            });
          }

          this.accountsService.getAllGLAccounts().subscribe(function (res) {
            _this16.glAccountListData = res.filter(function (item) {
              return item.isActive && parseInt(_this16.cookieService.get('apartmentId')) && item.indicator == _this16.glAccountIndicator;
            });
          }); //VAT types

          this.lookupService.getLookupValueByLookupTypeId(77).subscribe(function (res) {
            _this16.vatTypeDataList = res;
            _this16.invoice.vatPercent = parseFloat(_this16.vatTypeDataList[0].lookupValueName);
          }); //discount types

          this.lookupService.getLookupValueByLookupTypeId(75).subscribe(function (res) {
            _this16.discountTypeDataList = res;
            _this16.invoice.discount = parseFloat(_this16.discountTypeDataList[0].lookupValueName);
          });
        }
      }]);

      return IncomePostInvoiceComponent;
    }();

    IncomePostInvoiceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    IncomePostInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-post-invoice',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-post-invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-post-invoice.component.scss */
      "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], IncomePostInvoiceComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostMultiInvoiceFieldsIncomePostMultiInvoiceFieldsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "form {\n  display: contents;\n}\nform .input-box, form .select-box {\n  margin: 0;\n}\nform .input-box input[readonly] {\n  background-color: #f9f9f9;\n}\nform .input-box input[readonly]:-webkit-autofill {\n  -webkit-box-shadow: 0 0 0px 1000px #e6e6e6 inset;\n  -webkit-text-fill-color: #e6e6e6;\n}\nform .input-box textarea {\n  height: auto !important;\n  border: none;\n  padding: 0;\n}\nform .input-box textarea:focus {\n  border: none !important;\n}\n.heads {\n  padding: 12px 14px;\n  display: table-cell;\n  border: none;\n  border-right: 1px solid #dee2e6;\n  border-top: 1px solid #dee2e6;\n}\n.heads:last-child {\n  border-right: none;\n  padding: 12px 0;\n}\n.float-close {\n  width: 23px;\n  height: 23px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 23px !important;\n  background-color: #5cd694;\n  cursor: pointer;\n  display: inline-block;\n  margin: 9px 4px;\n  line-height: 20px;\n}\n.float-close.disabled {\n  background-color: #c5c6c7;\n  pointer-events: none;\n}\n.float-close.disabled .icon {\n  color: #e6e6e6;\n}\n.float-close.delete {\n  background-color: #ea7962;\n}\n.float-close.valid {\n  background-color: #389583;\n}\n.float-close .icon {\n  cursor: pointer;\n  width: 13px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlLWZpZWxkcy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlLWZpZWxkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLGlCQUFBO0FDRkQ7QURHQztFQUNDLFNBQUE7QUNERjtBREtHO0VBQ1EseUJFb0dBO0FEdkdYO0FESVc7RUFDRSxnREFBQTtFQUNBLGdDRStCRjtBRGpDWDtBRE1FO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0pIO0FES0c7RUFDQyx1QkFBQTtBQ0hKO0FEUUE7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7QUNMRDtBRE1DO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDSkY7QURPQTtFR21DRSxXSGxDZ0I7RUdtQ2hCLFlIbkNnQjtFR29DaEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUF2RUQsOEJBQUE7RUhrQ0EseUJFU1k7RUZSWixlQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNHRDtBREZDO0VBQ0MseUJFb0RTO0VGbkRULG9CQUFBO0FDSUY7QURIRTtFQUNDLGNFTFE7QURVWDtBREZDO0VBQ0MseUJFcENNO0FEd0NSO0FERkM7RUFDQyx5QkVIUTtBRE9WO0FERkM7RUFDQyxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNFc0RNO0FEbERSIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS1maWVsZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcbmZvcm0ge1xuXHRkaXNwbGF5OiBjb250ZW50czs7XG5cdC5pbnB1dC1ib3gsIC5zZWxlY3QtYm94IHtcblx0XHRtYXJnaW46IDA7XG5cdH1cblx0LmlucHV0LWJveCB7XG5cdFx0aW5wdXQge1xuXHRcdFx0JltyZWFkb25seV0ge1xuXHQgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktMTUwO1xuXHQgICAgICAgICAgJjotd2Via2l0LWF1dG9maWxsIHtcblx0ICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMHB4IDEwMDBweCAkZ3JleS01MDAgaW5zZXQ7XG5cdCAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAkZ3JleS01MDA7XG5cdCAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHRcdH1cblx0XHR0ZXh0YXJlYSB7XG5cdFx0XHRoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4uaGVhZHMge1xuXHRwYWRkaW5nOiAxMnB4IDE0cHg7XG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdGJvcmRlcjpub25lO1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS00NjA7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAkZ3JleS00NjA7XG5cdCY6bGFzdC1jaGlsZCB7XG5cdFx0Ym9yZGVyLXJpZ2h0OiBub25lO1xuXHRcdHBhZGRpbmc6IDEycHggMDtcblx0fVxufVxuLmZsb2F0LWNsb3NlIHtcblx0QGluY2x1ZGUgY2lyY2xlcygyM3B4KTtcblx0YmFja2dyb3VuZC1jb2xvcjogJGxpbWUtZ3JlZW47XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRtYXJnaW46IDlweCA0cHg7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHQmLmRpc2FibGVke1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRncmV5LTQ4MDtcblx0XHRwb2ludGVyLWV2ZW50czogbm9uZTtcblx0XHQuaWNvbiB7XG5cdFx0XHRjb2xvcjogJGdyZXktNTAwO1xuXHRcdH1cblx0fVxuXHQmLmRlbGV0ZSB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHMtcmVkO1xuXHR9XG5cdCYudmFsaWQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRkLWdyZWVuO1xuXHR9XG5cdC5pY29uIHtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0d2lkdGg6IDEzcHg7XG5cdFx0Y29sb3I6ICR3aGl0ZTtcblx0fVxufVxuIiwiZm9ybSB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuZm9ybSAuaW5wdXQtYm94LCBmb3JtIC5zZWxlY3QtYm94IHtcbiAgbWFyZ2luOiAwO1xufVxuZm9ybSAuaW5wdXQtYm94IGlucHV0W3JlYWRvbmx5XSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG59XG5mb3JtIC5pbnB1dC1ib3ggaW5wdXRbcmVhZG9ubHldOi13ZWJraXQtYXV0b2ZpbGwge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwcHggMTAwMHB4ICNlNmU2ZTYgaW5zZXQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjZTZlNmU2O1xufVxuZm9ybSAuaW5wdXQtYm94IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbmZvcm0gLmlucHV0LWJveCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZHMge1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uaGVhZHM6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgcGFkZGluZzogMTJweCAwO1xufVxuXG4uZmxvYXQtY2xvc2Uge1xuICB3aWR0aDogMjNweDtcbiAgaGVpZ2h0OiAyM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjNweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Y2Q2OTQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDlweCA0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLmZsb2F0LWNsb3NlLmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1YzZjNztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZmxvYXQtY2xvc2UuZGlzYWJsZWQgLmljb24ge1xuICBjb2xvcjogI2U2ZTZlNjtcbn1cbi5mbG9hdC1jbG9zZS5kZWxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE3OTYyO1xufVxuLmZsb2F0LWNsb3NlLnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4OTU4Mztcbn1cbi5mbG9hdC1jbG9zZSAuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGlnaHQtZ3JlZW46ICNlZGY1ZTA7XG4kbS1ncmVlbjogIzU0Yjk0MTtcbiRkLWdyZWVuOiAjMzg5NTgzO1xuJGQtZ3JlZW4tMDI6ICNkYWUwY2Q7XG4kZHMtZ3JlZW46ICNlNGU3ZGY7XG4kZHMtZ3JlZW4tMDI6ICNmNGY3ZWY7XG5cbiRtLWJsdWU6ICMzZjUxYjU7XG4kcy1ibHVlOiAjNTI5ZWZmO1xuJGRzLWJsdWU6ICM2MDdkOGI7XG4kbWRzLWJsdWU6ICM2MDdkOGI7XG4kbC1ibHVlOiAjZWFlZmZkO1xuJGxnLWJsdWU6ICNlMGUzZWM7XG4kbGctYmx1ZS0wMjogI2Y0ZjRmNztcbiRsZy1ibHVlLTAzOiNkYWUyZTY7XG4kbGctYmx1ZS0wNDogIzcyN2Y4ZTtcbiRsZy1ibHVlLTA1OiAjZTdlY2VjO1xuJGxnLWJsdWUtMDY6ICNlOWVjZWY7XG4kbGctYmx1ZS0wNzogI2UxZjVmZTtcblxuLy9lbWVnZW5jeSBjb2xvcnM6XG4kZS1tZWQtMDE6ICMwMGJjZDQ7XG4kZS1tZWQtMDI6ICMyMTk2ZjM7XG5cbiRlLXRoLTAxOiAjZjdkMDYxO1xuJGUtdGgtMDI6ICNlZjYwYTU7XG5cbiRlLWZlLTAxOiAjRkY5ODAwO1xuJGUtZmUtMDI6ICNFOTFFNjM7XG5cbiRlLXNoci0wMTogIzY0YTFmZDtcbiRlLXNoci0wMjogIzkxMDBmZjtcblxuJGUtcGMtMDE6ICM2MWExZTE7XG4kZS1wYy0wMjogIzA2YmY1ODtcblxuJGUtb3QtMDE6ICM2MWExZTE7XG4kZS1vdC0wMjogIzM3ZTc4NTtcblxuJGdyZXktOTAwOiAjMTkxYzFlO1xuJGdyZXktODUwOiAjNjg2OTZiO1xuJGdyZXktODAwOiAjMzczOTQ2OyAvLyM0MjQ4NTY7XG4kZ3JleS03NTA6ICM3OTc5Nzk7XG4kZ3JleS03MDA6ICM1ODU4NTg7XG4kZ3JleS02MDA6ICNkZWRlZGU7XG4kZ3JleS02NTA6ICM1ZjVmNWY7XG4kZ3JleS01NTA6ICNiMWIxYjE7XG4kZ3JleS00ODA6ICNjNWM2Yzc7XG4kZ3JleS00NjA6ICNkZWUyZTY7XG4kZ3JleS00NzA6ICNlNWU1ZTU7XG4kZ3JleS00NTA6ICNlYWVhZWE7IC8vI2RlZTBlNDtcbiRncmV5LTQ0MDogI0M5RDBERjtcbiRncmV5LTQzMDogI2U0ZTRlNDtcbiRncmV5LTQxMDogI2VjZjBmNTtcbiRncmV5LTQwMDogI2VhZWFlYTtcbiRncmV5LTM1MDogIzhlOGU4ZTtcbiRncmV5LTI1MDogI2Y1ZjVmNTtcbiRncmV5LTIyMDogI2ZhZmFmYTtcbiRncmV5LTIxMDogI2YzZjVmNztcbiRncmV5LTE1MDogI2Y5ZjlmOTtcbiRncmV5LTEyMDogI2Y3ZjdmNztcbiRncmV5LTEzMDogI2Y2ZjZmNztcbiRncmV5LTEwMDogI2ZkZmRmZDtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGJsYWNrOiAjMDAwMDAwO1xuJHRyYW5zOiB0cmFuc3BhcmVudDtcblxuXG4vL3B1YmxpYyBwYWdlcyBjb2xvcnNcbiRkcy12OiMzNDI2M2M7XG4kbC1ncmV5LTAxOiNmMmYyZjI7XG4kbC1ncmV5LTAyOiNkZGRkZGQ7XG4kZ3JleS12OiAjNmU2NzczO1xuJGQtZ3JleS0wMTojOGE4YThhO1xuJHN0LWJsdWU6IzA1ODJjODtcbiRzdC1ibHVlLTAxOiAjMWNhMGQ1O1xuJHN0LWJsdWUtMDI6ICMwMTk3ZDQ7XG4kcG0tYmx1ZTojMjI5NmVmO1xuJGdyZXktcDojZjZlZWYzO1xuJHAtcmVkOiAjZmY0ZjVhO1xuJHAtZ3JleS0wMTogIzJmMmYyZjtcbiRwLWdyZXktMDI6ICM0ZDRhNGE7XG4kcC1ncmV5LTAzOiAjNjM2MTYxO1xuXG5cbi8vZm9udC1zaXplc1xuJGZ0LWJhc2U6MTA7XG4kZm9udC1iaWctMDM6NTA7XG4kZm9udC1iaWc6Mzg7XG4kZm9udC1iaWctMDI6MzY7XG4kZm9udC1oMjozNDtcbiRmb250LW1lZGl1bS0wMjoyNDtcbiRmb250LW1lZGl1bS0wMzoyNjtcbiRmb250LWgzOjI4O1xuJGZvbnQtaDMtMDI6MzI7XG4kZm9udC1oNDogMjI7XG4kZm9udC1tZWRpdW06MjA7XG4kZm9udC1iYXNlOjE4O1xuJGZvbnQtbm9ybWFsLTAyOjE1O1xuJGZvbnQtbm9ybWFsOjE2O1xuJGZvbnQtc21hbGw6MTQ7XG4kZm9udC1zbWFsbGVyOjEzO1xuJGZvbnQtdGlueToxMjtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDsiLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIHBsYWNlaG9sZGVyIHtcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7QGNvbnRlbnR9XG4gICY6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICAge0Bjb250ZW50fVxuICAmOjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgIHtAY29udGVudH1cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgICAgICB7QGNvbnRlbnR9ICBcbn1cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: IncomePostMultiInvoiceFieldsComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostMultiInvoiceFieldsIncomePostMultiInvoiceFieldsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePostMultiInvoiceFieldsComponent", function () {
      return IncomePostMultiInvoiceFieldsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var IncomePostMultiInvoiceFieldsComponent =
    /*#__PURE__*/
    function () {
      //invoiceGLAccountsDataSub: BehaviorSubject<any> = new BehaviorSubject(null);
      function IncomePostMultiInvoiceFieldsComponent(cd, router, route, accountsService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, IncomePostMultiInvoiceFieldsComponent);

        this.cd = cd;
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.isEditInvoice = false;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.glAccountIndicator = "Income";
        this.fieldParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.taxParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(IncomePostMultiInvoiceFieldsComponent, [{
        key: "deleteBlock",
        value: function deleteBlock() {
          this.invoiceGLAccountsArray.splice(this.index, 1);
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "isArrayOne",
        value: function isArrayOne() {
          return this.invoiceGLAccountsArray.length > 1 ? true : false;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isFormValid",
        value: function isFormValid(index) {
          return this.invoiceGLAccountsData.glaccountId == null || this.invoiceGLAccountsData.comments == "" || this.invoiceGLAccountsData.amount == "" ? false : true;
        }
      }, {
        key: "onAccountChange",
        value: function onAccountChange(item, index) {
          if (item != null) {
            this.invoiceGLAccountsData.glaccountName = item.glaccountName;
            this.invoiceGLAccountsData.glaccountId = parseInt(item.glaccountId);
          } else {
            this.invoiceGLAccountsData.glaccountName = "";
            this.invoiceGLAccountsData.glaccountId = null;
          }

          this.invoiceGLAccountsData.form = this.invoiceForm.valid;
          this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "onInvoiceAmountChange",
        value: function onInvoiceAmountChange(value, index) {
          if (value != null) {
            this.invoiceGLAccountsData.amount = parseFloat(value);
          } else {
            this.invoiceGLAccountsData.amount = 0;
          }

          this.calculateVat();
          this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - parseInt(this.invoiceGLAccountsData.discountAmount);
          this.invoiceGLAccountsData.form = this.invoiceForm.valid;
          this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "onDiscountChange",
        value: function onDiscountChange(event, index) {
          if (event != null) {
            this.invoiceGLAccountsData.isDiscount = true;
            this.invoiceGLAccountsData.discountId = event.lookupValueId;
            this.invoiceGLAccountsData.discountTypeId = event.lookupValueName;
            this.onDiscountAdded(this.invoiceGLAccountsData.discountDirectAmt, index);
          } else {
            this.invoiceGLAccountsData.isDiscount = false;
            this.invoiceGLAccountsData.discountId = "";
            this.invoiceGLAccountsData.discountTypeId = "";
            this.invoiceGLAccountsData.discountAmount = 0;
            this.invoiceGLAccountsData.discountDirectAmt = 0;
          }

          this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - parseInt(this.invoiceGLAccountsData.discountAmount);
          this.invoiceGLAccountsData.form = this.invoiceForm.valid;
          this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "onDiscountAdded",
        value: function onDiscountAdded(value, index) {
          if (value != null) {
            if (this.invoiceGLAccountsData.discountTypeId == '%') {
              this.calculateDiscountPercent(value, index);
            } else {
              this.calculateDiscountPeso(value, index);
            }
          }
        }
      }, {
        key: "calculateDiscountPercent",
        value: function calculateDiscountPercent(value, index) {
          if (value != null) {
            var percent = parseFloat(value) / 100;
            this.invoiceGLAccountsData.discountAmount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
          } else {
            this.invoiceGLAccountsData.isDiscount = false;
            this.invoiceGLAccountsData.discountAmount = 0;
            this.invoiceGLAccountsData.discountDirectAmt = 0;
          }

          this.calculateVat();
          this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - this.invoiceGLAccountsData.discountAmount;
          this.invoiceGLAccountsData.form = this.invoiceForm.valid;
          this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "calculateDiscountPeso",
        value: function calculateDiscountPeso(value, index) {
          if (value != null) {
            this.invoiceGLAccountsData.discountAmount = parseFloat(value);
          } else {
            this.invoiceGLAccountsData.isDiscount = false;
            this.invoiceGLAccountsData.discountAmount = 0;
            this.invoiceGLAccountsData.discountDirectAmt = 0;
          }

          this.calculateVat();
          this.invoiceGLAccountsData.lineItemTotal = this.invoiceGLAccountsData.amount - this.invoiceGLAccountsData.discountAmount;
          this.invoiceGLAccountsData.form = this.invoiceForm.valid;
          this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "onCommentChange",
        value: function onCommentChange(value, index) {
          this.invoiceGLAccountsData.comments = value;
          this.invoiceGLAccountsData.form = this.invoiceForm.valid;
          this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "onVatChange",
        value: function onVatChange(event, index) {
          if (event != null) {
            this.invoiceGLAccountsData.isTax = true;
            this.invoiceGLAccountsData.vatid = event.lookupValueName;
            var percent = parseFloat(event.lookupValueName) / 100;
            this.currentTaxLookupValueId = event.lookupValueId;
            this.custInvoiceTaxData.invoiceTaxId = event.lookupValueId;
            this.custInvoiceTaxData.isAdded = true;
            this.custInvoiceTaxData.invoiceTotalAmount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
            this.currentTaxAmount = this.custInvoiceTaxData.invoiceTotalAmount;
            this.taxParams.emit(this.custInvoiceTaxData);
          } else {
            this.invoiceGLAccountsData.isTax = false;
            this.invoiceGLAccountsData.vatid = "";
            var percent = 0;
            this.custInvoiceTaxData.invoiceTaxId = this.currentTaxLookupValueId;
            this.custInvoiceTaxData.isAdded = false;
            this.custInvoiceTaxData.invoiceTotalAmount = this.currentTaxAmount;
            this.taxParams.emit(this.custInvoiceTaxData);
          }

          this.invoiceGLAccountsData.vatamount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
          this.invoiceGLAccountsData.form = this.invoiceForm.valid;
          this.invoiceGLAccountsArray[index] = this.invoiceGLAccountsData;
          this.fieldParams.emit(this.invoiceGLAccountsArray);
        }
      }, {
        key: "calculateVat",
        value: function calculateVat() {
          if (this.invoiceGLAccountsData.isTax) {
            var percent = parseInt(this.invoiceGLAccountsData.vatid) / 100;
            this.invoiceGLAccountsData.vatamount = parseFloat(this.invoiceGLAccountsData.amount) * percent;

            if (this.invoiceGLAccountsData.vatid == "12.5") {
              this.invoiceGLAccountsData.tax1Id = "12.5";
              this.invoiceGLAccountsData.tax2Id = "";
              this.invoiceGLAccountsData.tax1Amount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
              this.invoiceGLAccountsData.tax2Amount = 0;
            } else {
              this.invoiceGLAccountsData.tax2Id = "15";
              this.invoiceGLAccountsData.tax1Id = "";
              this.invoiceGLAccountsData.tax2Amount = parseFloat(this.invoiceGLAccountsData.amount) * percent;
              this.invoiceGLAccountsData.tax1Amount = 0;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.custInvoiceTaxData = {
            "custinvoiceTaxId": 0,
            "custInvoiceId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
            "isAdded": true,
            "invoiceTaxId": 0,
            "invoiceTotalAmount": 0,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": null
          };
          this.accountsService.getAllGLAccounts().subscribe(function (res) {
            _this17.glAccountListData = res.filter(function (item) {
              return item.isActive && parseInt(_this17.cookieService.get('apartmentId')) && item.indicator == _this17.glAccountIndicator;
            });
          }); //VAT types

          this.lookupService.getLookupValueByLookupTypeId(77).subscribe(function (res) {
            _this17.vatTypeDataList = res;
          }); //discount types

          this.lookupService.getLookupValueByLookupTypeId(75).subscribe(function (res) {
            _this17.discountTypeDataList = res;
          }); //currency types

          this.lookupService.getLookupValueByLookupTypeId(88).subscribe(function (res) {
            _this17.curTypeDataList = res;
          });
        }
      }]);

      return IncomePostMultiInvoiceFieldsComponent;
    }();

    IncomePostMultiInvoiceFieldsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostMultiInvoiceFieldsComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceGLAccountsData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceGLAccountsArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostMultiInvoiceFieldsComponent.prototype, "fieldParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomePostMultiInvoiceFieldsComponent.prototype, "taxParams", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('postIncomeMultiInvoiceFieldsForm', {
      "static": true
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])], IncomePostMultiInvoiceFieldsComponent.prototype, "invoiceForm", void 0);
    IncomePostMultiInvoiceFieldsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: '[app-income-post-multi-invoice-fields]',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-post-multi-invoice-fields.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-post-multi-invoice-fields.component.scss */
      "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], IncomePostMultiInvoiceFieldsComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostMultiInvoiceIncomePostMultiInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".income-post-invoice-wrapper .add-invoice-block {\n  padding: 10px 0;\n  border-bottom: 1px solid #dee2e6;\n}\n.income-post-invoice-wrapper .invoice-table {\n  /*display: table;*/\n  width: 100% !important;\n  overflow: scroll;\n  float: left;\n}\n.income-post-invoice-wrapper .invoice-header {\n  display: table-row;\n}\n.income-post-invoice-wrapper .invoice-header .heads {\n  font-family: \"Lato\", sans-serif;\n  font-weight: 700;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  font-size: 1.2rem;\n  color: #373946;\n  text-transform: uppercase;\n  border: none;\n  border-right: 1px solid #dee2e6;\n  padding: 12px 14px;\n  display: table-cell;\n}\n.income-post-invoice-wrapper .invoice-fields {\n  display: table-row;\n}\n.income-post-invoice-wrapper .add-invoice-box {\n  padding: 12px 0 6px 10px;\n  border-top: 1px solid #eaeaea;\n  overflow: auto;\n}\n.income-post-invoice-wrapper .add-invoice-box .icon {\n  color: #373946;\n  width: 18px;\n  position: relative;\n  top: -2px;\n}\n.income-post-invoice-wrapper .add-invoice-box span {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  color: #585858;\n  margin: 0 0 0 6px;\n  font-size: 1.4rem;\n}\n.income-post-invoice-wrapper .add-invoice-box .add-invoice-link {\n  cursor: pointer;\n}\n.income-post-invoice-wrapper .add-invoice-box .add-invoice-link:hover span, .income-post-invoice-wrapper .add-invoice-box .add-invoice-link:hover .icon {\n  color: #54b941;\n}\n.income-post-invoice-wrapper .total-box {\n  padding: 15px 14px;\n  background-color: #f9f9f9;\n  text-align: right;\n}\n.income-post-invoice-wrapper .total-box p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  margin: 0 0 6px 0 !important;\n  font-size: 1.4rem;\n}\n.income-post-invoice-wrapper .total-box.final p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  margin: 10px 0 6px 0;\n  font-size: 1.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UvaW5jb21lLXBvc3QtbXVsdGktaW52b2ljZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL2ZvbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0M7RUFDQyxlQUFBO0VBQ0EsZ0NBQUE7QUNKRjtBRE1DO0VBQ0Msa0JBQUE7RUFDQSxzQkVxSkk7RUZwSkosZ0JBQUE7RUFDQSxXQUFBO0FDSkY7QURNQztFQUNDLGtCQUFBO0FDSkY7QURLRTtFR29EQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFJQSxpQkFBQTtFSDFEQyxjRXlFUTtFRnhFUix5QkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSDtBRENDO0VBQ0Msa0JBQUE7QUNDRjtBRENDO0VBQ0Msd0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNDRjtBREFFO0VBQ0MsY0V5RFE7RUZ4RFIsV0FBQTtFQUNBLGtCRWpDRTtFRmtDRixTQUFBO0FDRUg7QURBRTtFR01BLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFSE5DLGNFb0RRO0VGbkRSLGlCQUFBO0VHa0NELGlCQUFBO0FGN0JGO0FERkU7RUFDQyxlQUFBO0FDSUg7QURGSTtFQUNDLGNFRUs7QURFVjtBRENDO0VBQ0Msa0JBQUE7RUFDQSx5QkVxRFM7RUZwRFQsaUJBQUE7QUNDRjtBREFFO0VHckJBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUhtQkMsNEJBQUE7RUdnQkQsaUJBQUE7QUZURjtBREhHO0VHbkJELHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFSG1CRSxvQkFBQTtFR1VGLGlCQUFBO0FGRkYiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtcG9zdC1tdWx0aS1pbnZvaWNlL2luY29tZS1wb3N0LW11bHRpLWludm9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciB7XG5cdC5hZGQtaW52b2ljZS1ibG9jayB7XG5cdFx0cGFkZGluZzogMTBweCAwO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS00NjA7XG5cdH1cblx0Lmludm9pY2UtdGFibGUge1xuXHRcdC8qZGlzcGxheTogdGFibGU7Ki9cblx0XHR3aWR0aDogJGZ1bGw7XG5cdFx0b3ZlcmZsb3c6IHNjcm9sbDtcblx0XHRmbG9hdDogbGVmdDtcblx0fVxuXHQuaW52b2ljZS1oZWFkZXIge1xuXHRcdGRpc3BsYXk6IHRhYmxlLXJvdztcblx0XHQuaGVhZHMge1xuXHRcdFx0QGluY2x1ZGUgZGVzcC1tZWRpdW07XG5cdFx0XHRAaW5jbHVkZSBmdC1jYWxjKCRmb250LXRpbnkpO1xuXHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRib3JkZXI6bm9uZTtcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmV5LTQ2MDtcblx0XHRcdHBhZGRpbmc6IDEycHggMTRweDtcblx0XHRcdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdFx0fVxuXHR9XG5cdC5pbnZvaWNlLWZpZWxkcyB7XG5cdFx0ZGlzcGxheTogdGFibGUtcm93O1xuXHR9XG5cdC5hZGQtaW52b2ljZS1ib3gge1xuXHRcdHBhZGRpbmc6IDEycHggMCA2cHggMTBweDtcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgJGdyZXktNDUwO1xuXHRcdG92ZXJmbG93OiBhdXRvO1xuXHRcdC5pY29uIHtcblx0XHRcdGNvbG9yOiAkZ3JleS04MDA7XG5cdFx0XHR3aWR0aDogMThweDtcblx0XHRcdHBvc2l0aW9uOiAkcmVsO1xuXHRcdFx0dG9wOiAtMnB4O1xuXHRcdH1cblx0XHRzcGFuIHtcblx0XHRcdEBpbmNsdWRlIGhlYWQtbWVkaXVtO1xuXHRcdFx0Y29sb3I6ICRncmV5LTcwMDtcblx0XHRcdG1hcmdpbjogMCAwIDAgNnB4O1xuXHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0fVxuXHRcdC5hZGQtaW52b2ljZS1saW5rIHtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdCY6aG92ZXIge1xuXHRcdFx0XHRzcGFuLCAuaWNvbiB7XG5cdFx0XHRcdFx0Y29sb3I6ICRtLWdyZWVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC50b3RhbC1ib3gge1xuXHRcdHBhZGRpbmc6IDE1cHggMTRweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS0xNTA7XG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0cCB7XG5cdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XG5cdFx0XHRtYXJnaW46IDAgMCA2cHggMCAhaW1wb3J0YW50O1xuICAgICAgXHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdH1cblx0XHQmLmZpbmFsIHtcblx0XHRcdHAge1xuXHRcdFx0XHRAaW5jbHVkZSBoZWFkLW1lZGl1bTtcblx0XHRcdFx0bWFyZ2luOiAxMHB4IDAgNnB4IDA7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtbm9ybWFsKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iLCIuaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5hZGQtaW52b2ljZS1ibG9jayB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5pbnZvaWNlLXRhYmxlIHtcbiAgLypkaXNwbGF5OiB0YWJsZTsqL1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBmbG9hdDogbGVmdDtcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmludm9pY2UtaGVhZGVyIHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuaW52b2ljZS1oZWFkZXIgLmhlYWRzIHtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTJlNjtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuaW52b2ljZS1maWVsZHMge1xuICBkaXNwbGF5OiB0YWJsZS1yb3c7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5hZGQtaW52b2ljZS1ib3gge1xuICBwYWRkaW5nOiAxMnB4IDAgNnB4IDEwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmFkZC1pbnZvaWNlLWJveCAuaWNvbiB7XG4gIGNvbG9yOiAjMzczOTQ2O1xuICB3aWR0aDogMThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0ycHg7XG59XG4uaW5jb21lLXBvc3QtaW52b2ljZS13cmFwcGVyIC5hZGQtaW52b2ljZS1ib3ggc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICBjb2xvcjogIzU4NTg1ODtcbiAgbWFyZ2luOiAwIDAgMCA2cHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuYWRkLWludm9pY2UtYm94IC5hZGQtaW52b2ljZS1saW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAuYWRkLWludm9pY2UtYm94IC5hZGQtaW52b2ljZS1saW5rOmhvdmVyIHNwYW4sIC5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLmFkZC1pbnZvaWNlLWJveCAuYWRkLWludm9pY2UtbGluazpob3ZlciAuaWNvbiB7XG4gIGNvbG9yOiAjNTRiOTQxO1xufVxuLmluY29tZS1wb3N0LWludm9pY2Utd3JhcHBlciAudG90YWwtYm94IHtcbiAgcGFkZGluZzogMTVweCAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLnRvdGFsLWJveCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBtYXJnaW46IDAgMCA2cHggMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cbi5pbmNvbWUtcG9zdC1pbnZvaWNlLXdyYXBwZXIgLnRvdGFsLWJveC5maW5hbCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIG1hcmdpbjogMTBweCAwIDZweCAwO1xuICBmb250LXNpemU6IDEuNnJlbTtcbn0iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: IncomePostMultiInvoiceComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomePostMultiInvoiceIncomePostMultiInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomePostMultiInvoiceComponent", function () {
      return IncomePostMultiInvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var IncomePostMultiInvoiceComponent =
    /*#__PURE__*/
    function () {
      function IncomePostMultiInvoiceComponent(cd, router, route, accountsService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, IncomePostMultiInvoiceComponent);

        this.cd = cd;
        this.router = router;
        this.route = route;
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.invoiceId = "";
        this.custInvoiceTaxArray = [];
        this.isEditInvoice = false;
        this.isInvoiceSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.isFormInValid = true;
        this.isAccountDataLoaded = false;
        this.isSingleInvoice = false;
      }

      _createClass(IncomePostMultiInvoiceComponent, [{
        key: "addInvoice",
        value: function addInvoice() {
          var _this18 = this;

          var details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "invoiceId": 0,
            "glaccountId": parseInt(this.invoiceGLAccountsData.glaccountId),
            "glaccountName": this.invoiceGLAccountsData.glaccountName,
            "comments": "",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
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
            "isDiscount": false,
            "isTax": false,
            "discountTypeId": "",
            "discountDirectAmt": parseFloat(this.invoiceGLAccountsData.discountDirectAmt)
          };
          this.invoiceGLAccountsArray.push(details);
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceGLAccountsArray, function (item) {
            if (item.form) {
              _this18.isFormInValid = false;
            } else {
              _this18.isFormInValid = true;
            }
          });
        }
      }, {
        key: "getFieldParams",
        value: function getFieldParams(event) {
          var _this19 = this;

          this.invoiceGLAccountsArray = event;
          var self = this;
          self.invoice.subAmount = 0;
          self.invoice.totalVatamount = 0;
          self.invoice.totalDiscount = 0;
          self.invoice.custInvoiceAmount = 0;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceGLAccountsArray, function (item) {
            if (item.form) {
              _this19.isFormInValid = false;
            } else {
              _this19.isFormInValid = true;
            }

            self.invoice.subAmount = self.invoice.subAmount + item.lineItemTotal;
            self.invoice.totalDiscount = self.invoice.totalDiscount + item.discountAmount;
            self.invoice.totalVatamount = self.invoice.totalVatamount + item.vatamount;
            self.invoice.custInvoiceAmount = (parseFloat(self.invoice.subAmount) + parseFloat(self.invoice.totalVatamount)).toFixed(2);
          });
        }
      }, {
        key: "getCustTaxInvoiceParams",
        value: function getCustTaxInvoiceParams(event) {
          if (event.isAdded) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.vatTypeDataList, function (item) {
              if (item.lookupValueId == event.invoiceTaxId) {
                item.custVatTypeAmount = item.custVatTypeAmount + event.invoiceTotalAmount;
              }
            });
            this.custInvoiceTaxArray.push(event);
            console.log(this.custInvoiceTaxArray);
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.vatTypeDataList, function (item) {
              if (item.lookupValueId == event.invoiceTaxId) {
                item.custVatTypeAmount = item.custVatTypeAmount - event.invoiceTotalAmount;
              }
            });
            this.custInvoiceTaxArray = this.custInvoiceTaxArray.filter(function (item) {
              return item.invoiceTaxId != event.invoiceTaxId;
            });
            console.log(event);
            console.log(this.custInvoiceTaxArray);
          }
        }
      }, {
        key: "submitIncomeMultiInvoiceForm",
        value: function submitIncomeMultiInvoiceForm(form) {
          var _this20 = this;

          this.isInvoiceSubmitted = false;
          var self = this;
          this.invoiceGLAccountsArray.map(function (item) {
            delete item.form;
            delete item.glaccountName;
            return item;
          });
          this.custInvoiceTaxArray.map(function (item) {
            delete item.isAdded;
            return item;
          });
          var details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": parseInt(this.route.params['value'].id),
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
            "updatedBy": 0,
            "updatedOn": new Date().toISOString(),
            "transReference1": "",
            "transReference2": "",
            "totalVatamount": 0,
            "totalOtherTaxes": 0,
            "totalDiscount": 0,
            "isDiscount": this.invoice.isDiscount,
            "subAmount": 0,
            "invoiceGLAccounts": this.invoiceGLAccountsArray,
            "custinvoiceTax": this.custInvoiceTaxArray
          };
          this.accountsService.addCustInvoice(details).subscribe(function (res) {
            if (res.message) {
              _this20.isInvoiceSubmitted = true;

              _this20.sharedService.setAlertMessage("All Invoices added successfully");

              _this20.router.navigate(['ams/income/subledger']);
            } else {
              _this20.isInvoiceSubmitted = true;
              _this20.isError = true;
              _this20.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this20.isInvoiceSubmitted = true;
            _this20.isError = true;
            _this20.alertMessage = "Some error occured";
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.invoice = {};
          this.invoice.isTax = false;
          this.invoice.isDiscount = false;
          this.invoice.subAmount = 0;
          this.invoice.custInvoiceVatAmount = 0;
          this.invoice.custInvoiceAddVatAmount = 0;
          this.invoice.custInvoiceAmount = 0;
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
          this.invoiceGLAccountsArray = [{
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "invoiceId": 0,
            "glaccountId": parseInt(this.invoiceGLAccountsData.glaccountId),
            "glaccountName": this.invoiceGLAccountsData.glaccountName,
            "comments": "",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
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
            "isDiscount": false,
            "isTax": false,
            "discountTypeId": "",
            "discountDirectAmt": parseFloat(this.invoiceGLAccountsData.discountDirectAmt)
          }, {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "invoiceId": 0,
            "glaccountId": parseInt(this.invoiceGLAccountsData.glaccountId),
            "glaccountName": this.invoiceGLAccountsData.glaccountName,
            "comments": "",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
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
            "isDiscount": false,
            "isTax": false,
            "discountTypeId": "",
            "discountDirectAmt": parseFloat(this.invoiceGLAccountsData.discountDirectAmt)
          }];
          this.lookupService.getLookupValueByLookupTypeId(74).subscribe(function (res) {
            _this21.invoice.dueDate = moment__WEBPACK_IMPORTED_MODULE_8__().add(parseInt(res[0].lookupValueName), 'days');
          }); //for post single invoice

          if (this.route.params['value'].type == 'single' && this.route.params['value'].invoiceid == undefined) {
            this.invoiceGLAccountsArray.splice(0, 1);
            this.isSingleInvoice = true;
            this.isEditInvoice = false;
          } //for post multi invoice


          if (this.route.params['value'].type != 'single' && this.route.params['value'].invoiceid == undefined) {
            this.isSingleInvoice = false;
            this.isEditInvoice = false;
          } //for edit single and multi invoice


          if (this.route.params['value'].invoiceid != undefined) {
            this.isEditInvoice = true;
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              invoiceId: this.route.params['value'].invoiceid
            };
            this.accountsService.getCustInvoiceById(params).subscribe(function (res) {
              _this21.invoice = res[0];
              _this21.invoiceGLAccountsArray = _this21.invoice.invoiceGLAccounts;
              underscore__WEBPACK_IMPORTED_MODULE_7__["each"](_this21.invoiceGLAccountsArray, function (item) {
                var params = {
                  apartmentId: parseInt(_this21.cookieService.get('apartmentId')),
                  glAccountId: item.glaccountId
                };

                _this21.accountsService.getGLAccountsId(params).subscribe(function (res) {
                  item.glaccountName = res[0].glaccountName;
                });
              });
            });
          }

          this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this21.accountDataList = res.filter(function (item) {
              return item.apartmentBlockUnitId == _this21.route.params['value'].id;
            });
            _this21.isAccountDataLoaded = true;
          }); //VAT types

          this.lookupService.getLookupValueByLookupTypeId(77).subscribe(function (res) {
            _this21.vatTypeDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](_this21.vatTypeDataList, function (item) {
              item.custVatTypeAmount = 0;
            });
          });
        }
      }]);

      return IncomePostMultiInvoiceComponent;
    }();

    IncomePostMultiInvoiceComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    IncomePostMultiInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-post-multi-invoice',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-post-multi-invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-post-multi-invoice.component.scss */
      "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomePostMultiInvoiceComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeSubLedgerIncomeSubLedgerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS1zdWItbGVkZ2VyL2luY29tZS1zdWItbGVkZ2VyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: IncomeSubLedgerComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeSubLedgerIncomeSubLedgerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeSubLedgerComponent", function () {
      return IncomeSubLedgerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var IncomeSubLedgerComponent =
    /*#__PURE__*/
    function () {
      function IncomeSubLedgerComponent(router, injector, dialog, apartmentService, accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomeSubLedgerComponent);

        this.router = router;
        this.injector = injector;
        this.dialog = dialog;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isSubLedgerDataLoaded = false;
        this.subLedgerData = "";
        this.totalDueAmount = 0;
        this.netDueAmount = 0;
        this.filterSelected = "all";
        this.singleBlock = "Select Tower";
      }

      _createClass(IncomeSubLedgerComponent, [{
        key: "getDueAmount",
        value: function getDueAmount(value) {
          return value != 'Due' ? true : false;
        }
      }, {
        key: "getSelected",
        value: function getSelected(type) {
          return this.filterSelected == type ? 'selected' : '';
        }
      }, {
        key: "dialogClose",
        value: function dialogClose() {
          this.dialogRef.close();
        }
      }, {
        key: "getPrintParams",
        value: function getPrintParams(event) {
          this.datagrid.exportdata(event, 'helpdeskData');
        }
      }, {
        key: "getAllBlockData",
        value: function getAllBlockData() {
          var _this22 = this;

          this.filterSelected = 'all';
          this.singleBlock = "Select Block";
          this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            var subLedgerDataList = res;
            _this22.gridSourceData.localdata = subLedgerDataList;

            _this22.datagrid.updatebounddata('cells');

            _this22.calculateTotalAmount(subLedgerDataList);
          });
        }
      }, {
        key: "getSingleBlock",
        value: function getSingleBlock(block) {
          var _this23 = this;

          this.filterSelected = 'single';
          this.singleBlock = block.apartmentBlockNumber;
          this.selectedBlockId = block.apartmentBlockId;
          this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            var subLedgerDataList = res.filter(function (item) {
              return item.apartmentBlockNumber == _this23.singleBlock;
            });
            _this23.gridSourceData.localdata = subLedgerDataList;

            _this23.datagrid.updatebounddata('cells');

            _this23.calculateTotalAmount(subLedgerDataList);
          });
        }
      }, {
        key: "calculateTotalAmount",
        value: function calculateTotalAmount(subLedgerDataList) {
          var _this24 = this;

          this.totalItems = subLedgerDataList.length;
          this.netDueAmount = 0;
          this.totalDueAmount = 0;
          underscore__WEBPACK_IMPORTED_MODULE_9__["each"](subLedgerDataList, function (item, index) {
            _this24.netDueAmount = _this24.netDueAmount + item.due;
            if (item.due >= 0) _this24.totalDueAmount = _this24.totalDueAmount + item.due;
          });
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "onViewHistory",
        value: function onViewHistory(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          var apartmentBlockUnitId = dataRecord.apartmentBlockUnitId;
          this.router.navigateByUrl('/ams/income/view-invoice-history/' + apartmentBlockUnitId);
        }
      }, {
        key: "onShowInvoices",
        value: function onShowInvoices(detail) {
          var _this25 = this;

          var ledger = this.datagrid.getrowdata(detail.rowId);
          var invoiceParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: ledger.apartmentBlockUnitId
          };
          this.accountsService.getCustInvoicesByApartmentBlockUnitId(invoiceParams).subscribe(function (res) {
            if (res.length == 0) {
              ledger.isInvoiceAvailable = false;
            } else {
              ledger.isInvoiceAvailable = true;
            }

            _this25.dialogRef = _this25.dialog.open(_this25.viewInvoiceTypeRef, {
              panelClass: 'material',
              disableClose: true,
              data: ledger
            });
          });
        }
      }, {
        key: "onViewPostCollection",
        value: function onViewPostCollection(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          var apartmentBlockUnitId = dataRecord.apartmentBlockUnitId;
          this.router.navigateByUrl('/ams/income/post-collection/' + apartmentBlockUnitId);
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this26 = this;

          if (this.subLedgerData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.subLedgerData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this26.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "renderColumns",
        value: function renderColumns() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.columnData = [{
            text: 'Primary Contact',
            datafield: 'primayContact',
            width: 180,
            pinned: true,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Bill to Party',
            datafield: 'billToParty',
            minwidth: 180,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Tower Unit',
            datafield: 'block_Unit',
            minwidth: 120,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Due',
            datafield: 'due',
            minwidth: 150,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Status',
            datafield: 'due_Indicator',
            minwidth: 150,
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell"><span class="dots rt-1 ' + getClassName(value) + '"></span>' + value + '</div>';
            },
            renderer: columnrenderer
          }, {
            text: 'Actions',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellclassname: 'action-cell',
            cellsrenderer: function cellsrenderer(row) {
              return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="invoiceDropDown" aria-haspopup="true" aria-expanded="false">' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '</a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="invoiceDropDown">' + '<a href="javascript:void(0)" onClick="viewHistoryEvent(' + row + ')">View History</a>' + '<a href="javascript:void(0)" onClick="showInvoicesEvent(' + row + ')">Post Invoice</a>' + '<a href="javascript:void(0)" onClick="viewPostCollectionEvent(' + row + ')">Post Collection</a>' + '<a href="javascript:void(0)">Print</a>' + '</div>' + '</div>';
            },
            renderer: columnrenderer
          }];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this27.blockListData = res;

            _this27.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(_this27.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this27.isSubLedgerDataLoaded = true;
              _this27.filterSelected = 'all';
              _this27.singleBlock = "Select Block";
              var subLedgerDataList = res;
              _this27.gridSourceData = {
                localdata: subLedgerDataList,
                datatype: "array"
              };
              _this27.subLedgerDataList = new jqx.dataAdapter(_this27.gridSourceData);

              _this27.renderColumns();

              _this27.calculateTotalAmount(subLedgerDataList);
            });
          });
        }
      }]);

      return IncomeSubLedgerComponent;
    }();

    IncomeSubLedgerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_6__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewInvoiceTypeRef", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], IncomeSubLedgerComponent.prototype, "viewInvoiceTypeRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])], IncomeSubLedgerComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onViewHistory', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeSubLedgerComponent.prototype, "onViewHistory", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onShowInvoices', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeSubLedgerComponent.prototype, "onShowInvoices", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onViewPostCollection', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeSubLedgerComponent.prototype, "onViewPostCollection", null);
    IncomeSubLedgerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-sub-ledger',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-sub-ledger.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-sub-ledger.component.scss */
      "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_6__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], IncomeSubLedgerComponent);

    function getClassName(value) {
      return value != 'Due' ? 'high' : 'low';
    }

    window.getClassName = getClassName;

    function viewHistoryEvent(row) {
      var event = new CustomEvent('onViewHistory', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.viewHistoryEvent = viewHistoryEvent;

    function showInvoicesEvent(row) {
      var event = new CustomEvent('onShowInvoices', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.showInvoicesEvent = showInvoicesEvent;

    function viewPostCollectionEvent(row) {
      var event = new CustomEvent('onViewPostCollection', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.viewPostCollectionEvent = viewPostCollectionEvent;
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerAgeingIncomeTrackerAgeingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".income-tracker-ageing-wrapper .filter-box {\n  margin: 30px 0 0 0;\n  padding: 0;\n  border: 0;\n}\n.income-tracker-ageing-wrapper .filter-box li {\n  border-right: 1px solid #eaeaea;\n  margin: 0;\n  padding: 10px 20px;\n  cursor: pointer;\n}\n.income-tracker-ageing-wrapper .filter-box li p {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n  font-size: 1.4rem;\n  color: #585858;\n}\n.income-tracker-ageing-wrapper .filter-box li.title {\n  cursor: auto;\n}\n.income-tracker-ageing-wrapper .filter-box li.title p {\n  color: #8391a1 !important;\n}\n.income-tracker-ageing-wrapper .filter-box li.title p .icon {\n  width: 18px;\n  height: 18px;\n}\n.income-tracker-ageing-wrapper .filter-box li:not(.title):hover, .income-tracker-ageing-wrapper .filter-box li.active {\n  background-color: #5cd694;\n}\n.income-tracker-ageing-wrapper .filter-box li:not(.title):hover p, .income-tracker-ageing-wrapper .filter-box li.active p {\n  color: #ffffff;\n}\n.income-tracker-ageing-wrapper .account-chart-card {\n  margin: 30px 0;\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box {\n  margin: 10px 0;\n  height: auto;\n  width: 300px;\n  float: left;\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .income-tracker-ageing-wrapper .account-chart-card .chart-box {\n    width: 235px;\n  }\n}\n@media (max-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .chart-box {\n    float: none;\n    width: auto;\n  }\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box canvas {\n  width: auto !important;\n  height: 100% !important;\n}\n.income-tracker-ageing-wrapper .account-chart-card .chart-box.hide-chart {\n  overflow: hidden;\n  visibility: hidden;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list {\n  margin: 10px 0 0 0 !important;\n  text-align: center;\n}\n@media (max-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .legends-list {\n    text-align: left;\n    display: inline-block;\n    transform: translateX(-45%) !important;\n    position: relative;\n    left: 50%;\n  }\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li {\n  list-style: none;\n  margin: 0 !important;\n  padding: 8px 0;\n  overflow: auto;\n  width: 250px;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li div {\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.4rem;\n  color: #8391a1;\n}\n.income-tracker-ageing-wrapper .account-chart-card .legends-list li div.title {\n  color: #373946;\n  float: left;\n  min-width: 180px !important;\n}\n@media (min-width: 576px) {\n  .income-tracker-ageing-wrapper .account-chart-card .legends-list li div.title {\n    min-width: auto !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1hZ2VpbmcvaW5jb21lLXRyYWNrZXItYWdlaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdHJhY2tlci1hZ2VpbmcvaW5jb21lLXRyYWNrZXItYWdlaW5nLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0M7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSkY7QURLRTtFQUNDLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hIO0FESUc7RUV5QkQscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQW1DQSxpQkFBQTtFRjdERSxjRzhFTztBRjVFWDtBREFHO0VBQ0MsWUFBQTtBQ0VKO0FEREk7RUFDQyx5QkFBQTtBQ0dMO0FERks7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0lOO0FEQUc7RUFDQyx5QkdvQlM7QUZsQmI7QURESTtFQUNDLGNHb0ZHO0FGakZSO0FERUM7RUFDQyxjQUFBO0FDQUY7QURDRTtFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDSDtBREFHO0VBTEQ7SUFNRSxZQUFBO0VDR0Y7QUFDRjtBREZHO0VBUkQ7SUFTRSxXQUFBO0lBQ0EsV0FBQTtFQ0tGO0FBQ0Y7QURKRztFQUNDLHNCQUFBO0VBQ0EsdUJHMkdFO0FGckdOO0FESkc7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0FDTUo7QURIRTtFQUNDLDZCQUFBO0VBQ0Esa0JBQUE7QUNLSDtBREpHO0VBSEQ7SUFJRSxnQkFBQTtJQUNBLHFCQUFBO0lJM0JILHNDQUFBO0lKNkJNLGtCRzlERjtJSCtERSxTQUFBO0VDU0w7QUFDRjtBRFJHO0VBQ0MsZ0JBQUE7RUFDQSxvQkFBQTtFQUNHLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ1VQO0FEVEk7RUU3QkYscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBNkJBLGlCQUFBO0VGQ0csY0dwRVE7QUZpRmI7QURaSztFQUNDLGNHWUs7RUhYTCxXQUFBO0VBQ0EsMkJBQUE7QUNjTjtBRGJNO0VBSkQ7SUFLRSwwQkFBQTtFQ2dCTDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2luY29tZS10cmFja2VyL2NvbXBvbmVudHMvaW5jb21lLXRyYWNrZXItYWdlaW5nL2luY29tZS10cmFja2VyLWFnZWluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIge1xuXHQuZmlsdGVyLWJveCB7XG5cdFx0bWFyZ2luOiAzMHB4IDAgMCAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0Ym9yZGVyOiAwO1xuXHRcdGxpIHtcblx0XHRcdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRncmV5LTQ1MDtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdHBhZGRpbmc6IDEwcHggMjBweDtcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdHAge1xuXHRcdFx0XHRAaW5jbHVkZSBoZWFkLXJlZ3VsYXI7XG5cdFx0XHRcdEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGwpO1xuXHRcdFx0XHRjb2xvcjogJGdyZXktNzAwO1xuXHRcdFx0fVxuXHRcdFx0Ji50aXRsZSB7XG5cdFx0XHRcdGN1cnNvcjogYXV0bztcblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0Lmljb24ge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDE4cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDE4cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmOm5vdCgudGl0bGUpOmhvdmVyLCAmLmFjdGl2ZSB7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRjb2xvcjogJHdoaXRlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdC5hY2NvdW50LWNoYXJ0LWNhcmQge1xuXHRcdG1hcmdpbjogMzBweCAwO1xuXHRcdC5jaGFydC1ib3gge1xuXHRcdFx0bWFyZ2luOiAxMHB4IDA7XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0XHR3aWR0aDogMzAwcHg7XG5cdFx0XHRmbG9hdDogbGVmdDtcblx0XHRcdEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG5cdFx0XHRcdHdpZHRoOiAyMzVweDtcblx0XHRcdH1cblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuXHRcdFx0XHRmbG9hdDogbm9uZTtcblx0XHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHR9XG5cdFx0XHRjYW52YXMge1xuXHRcdFx0XHR3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRoZWlnaHQ6ICRmdWxsO1xuXHRcdFx0fVxuXHRcdFx0Ji5oaWRlLWNoYXJ0IHtcblx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xuXHRcdFx0fVxuXHRcdH1cblx0XHQubGVnZW5kcy1saXN0IHtcblx0XHRcdG1hcmdpbjogMTBweCAwIDAgMCAhaW1wb3J0YW50O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcdFx0XHRAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNDUlKSk7XG4gICAgXHRcdFx0cG9zaXRpb246ICRyZWw7XG4gICAgXHRcdFx0bGVmdDogNTAlO1xuXHRcdFx0fVxuXHRcdFx0bGkge1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBcdFx0XHRwYWRkaW5nOiA4cHggMDtcbiAgICBcdFx0XHRvdmVyZmxvdzogYXV0bztcbiAgICBcdFx0XHR3aWR0aDogMjUwcHg7XG5cdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0QGluY2x1ZGUgaGVhZC1tZWRpdW07XG5cdFx0XHRcdFx0QGluY2x1ZGUgZnQtY2FsYygkZm9udC1zbWFsbCk7XG5cdFx0XHRcdFx0Y29sb3I6ICRsaWdodC1ibHVlO1xuXHRcdFx0XHRcdCYudGl0bGUge1xuXHRcdFx0XHRcdFx0Y29sb3I6ICRncmV5LTgwMDtcblx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xuXHRcdFx0XHRcdFx0bWluLXdpZHRoOiAxODBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0QG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG5cdFx0XHRcdFx0XHRcdG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSIsIi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCB7XG4gIG1hcmdpbjogMzBweCAwIDAgMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5maWx0ZXItYm94IGxpIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2VhZWFlYTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICM1ODU4NTg7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUgcCB7XG4gIGNvbG9yOiAjODM5MWExICFpbXBvcnRhbnQ7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGkudGl0bGUgcCAuaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmZpbHRlci1ib3ggbGk6bm90KC50aXRsZSk6aG92ZXIsIC5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNkNjk0O1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5maWx0ZXItYm94IGxpOm5vdCgudGl0bGUpOmhvdmVyIHAsIC5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuZmlsdGVyLWJveCBsaS5hY3RpdmUgcCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQge1xuICBtYXJnaW46IDMwcHggMDtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5jaGFydC1ib3gge1xuICBtYXJnaW46IDEwcHggMDtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMzAwcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmNoYXJ0LWJveCB7XG4gICAgd2lkdGg6IDIzNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmNoYXJ0LWJveCB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5jaGFydC1ib3ggY2FudmFzIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAuY2hhcnQtYm94LmhpZGUtY2hhcnQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAubGVnZW5kcy1saXN0IHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuaW5jb21lLXRyYWNrZXItYWdlaW5nLXdyYXBwZXIgLmFjY291bnQtY2hhcnQtY2FyZCAubGVnZW5kcy1saXN0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDUlKSAhaW1wb3J0YW50O1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NSUpICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00NSUpICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDUwJTtcbiAgfVxufVxuLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmxlZ2VuZHMtbGlzdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAyNTBweDtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5sZWdlbmRzLWxpc3QgbGkgZGl2IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogIzgzOTFhMTtcbn1cbi5pbmNvbWUtdHJhY2tlci1hZ2Vpbmctd3JhcHBlciAuYWNjb3VudC1jaGFydC1jYXJkIC5sZWdlbmRzLWxpc3QgbGkgZGl2LnRpdGxlIHtcbiAgY29sb3I6ICMzNzM5NDY7XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE4MHB4ICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmluY29tZS10cmFja2VyLWFnZWluZy13cmFwcGVyIC5hY2NvdW50LWNoYXJ0LWNhcmQgLmxlZ2VuZHMtbGlzdCBsaSBkaXYudGl0bGUge1xuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCJcbiRmdGE6IEZvbnRBd2Vzb21lO1xuXG4kZmQ6Zml4ZWQ7XG4kYWJzOmFic29sdXRlO1xuJHJlbDpyZWxhdGl2ZTtcbiRzdDpzdGF0aWM7XG5cbiRkYXJrLWJsdWU6ICMwODNkNzE7XG4kZGFyay1ibHVlLTAyOiAjMjM2YWFmO1xuJGRhcmstYmx1ZS0wMzogIzEzNGI4MjtcbiRsaWdodC1ibHVlOiAjODM5MWExO1xuJGxpZ2h0LWJsdWUtMDI6ICNlZWYwZjM7XG4kZ3JleS1ibHVlOiAjZjNmOGZmO1xuJHMtYmx1ZTogIzAzYTlmNDtcbiRsaWdodC1yZWQ6ICNmZjU0N2I7XG4kbS1saWdodC1yZWQ6ICNmZjc2ODg7XG4kYnJpZ2h0LXJlZDogI2UyMzg1ZTtcbiRzLXJlZDogI2VhNzk2MjtcbiRzLXJlZC0wMjogI2ZmMzYzODtcbiRzLXJlZC0wMzogI2Y0NDMzNjtcbiRtLXJlZDogI2Q3NTczZDtcbiRkbS1yZWQ6ICM4ZTRkNDA7XG4kbC1wYWxlLXJlZDogI2ZmZjNmNTtcbiRoLXBhbGUtcmVkOiAjZmZmYmZiO1xuJGdyZXktcmVkIDogI2YxZGRkZDtcbiRzLWN5YW46ICMwMGJjZDQ7XG4kZC1jeWFuOiAjMDIyOTI1O1xuJGQtY3lhbi0wMjogIzA5YTU5NjtcbiR2ZC1jeWFuOiAjMDA2ZDZkO1xuJHBhbGUtY3lhbjogI2Q4ZmZmYjtcbiRzLWdyZXk6ICNjY2NjY2M7XG4kbC1ncmV5OiAjZDhlMGU2O1xuXG4kbGgtcmVkOiNlMjNmMDZjNDtcbiRsaC15ZWxsb3c6I2RjYmUwODtcbiRzLW9yYW5nZTogI2ZmOTgwMDtcbiRkLW9yYW5nZTogIzdkNjUyMDtcbiRkLW9yYW5nZS0wMjogIzUyNDcyODtcbiRzLXllbGxvdzogI2ZmZWIzYjtcbiRtLXllbGxvdzogI2ZmYzEwNztcbiRzLXZpb2xldDogIzY3M2FiNztcblxuJGdyZXktMzAwOiAjZjBmM2YzO1xuJGdyZXktMjAwOiAjZjZmOGY4O1xuJGdyZXktNTAwOiAjZTZlNmU2O1xuJGgtY3lhbjogIzAzY2NhNjtcbiRkcy1jeWFuOiAjODFiMjlhO1xuJGhkLWJsdWU6ICMwNDI4NTQ7XG5cbiRsaW1lLWdyZWVuOiAjNWNkNjk0OyAvLyM1YmNjNzNcbiRsaW1lLWdyZWVuLTAyOiAjNWNkNjdjO1xuJGxpZ2h0LWdyZWVuOiAjZWRmNWUwO1xuJG0tZ3JlZW46ICM1NGI5NDE7XG4kZC1ncmVlbjogIzM4OTU4MztcbiRkLWdyZWVuLTAyOiAjZGFlMGNkO1xuJGRzLWdyZWVuOiAjZTRlN2RmO1xuJGRzLWdyZWVuLTAyOiAjZjRmN2VmO1xuXG4kbS1ibHVlOiAjM2Y1MWI1O1xuJHMtYmx1ZTogIzUyOWVmZjtcbiRkcy1ibHVlOiAjNjA3ZDhiO1xuJG1kcy1ibHVlOiAjNjA3ZDhiO1xuJGwtYmx1ZTogI2VhZWZmZDtcbiRsZy1ibHVlOiAjZTBlM2VjO1xuJGxnLWJsdWUtMDI6ICNmNGY0Zjc7XG4kbGctYmx1ZS0wMzojZGFlMmU2O1xuJGxnLWJsdWUtMDQ6ICM3MjdmOGU7XG4kbGctYmx1ZS0wNTogI2U3ZWNlYztcbiRsZy1ibHVlLTA2OiAjZTllY2VmO1xuJGxnLWJsdWUtMDc6ICNlMWY1ZmU7XG5cbi8vZW1lZ2VuY3kgY29sb3JzOlxuJGUtbWVkLTAxOiAjMDBiY2Q0O1xuJGUtbWVkLTAyOiAjMjE5NmYzO1xuXG4kZS10aC0wMTogI2Y3ZDA2MTtcbiRlLXRoLTAyOiAjZWY2MGE1O1xuXG4kZS1mZS0wMTogI0ZGOTgwMDtcbiRlLWZlLTAyOiAjRTkxRTYzO1xuXG4kZS1zaHItMDE6ICM2NGExZmQ7XG4kZS1zaHItMDI6ICM5MTAwZmY7XG5cbiRlLXBjLTAxOiAjNjFhMWUxO1xuJGUtcGMtMDI6ICMwNmJmNTg7XG5cbiRlLW90LTAxOiAjNjFhMWUxO1xuJGUtb3QtMDI6ICMzN2U3ODU7XG5cbiRncmV5LTkwMDogIzE5MWMxZTtcbiRncmV5LTg1MDogIzY4Njk2YjtcbiRncmV5LTgwMDogIzM3Mzk0NjsgLy8jNDI0ODU2O1xuJGdyZXktNzUwOiAjNzk3OTc5O1xuJGdyZXktNzAwOiAjNTg1ODU4O1xuJGdyZXktNjAwOiAjZGVkZWRlO1xuJGdyZXktNjUwOiAjNWY1ZjVmO1xuJGdyZXktNTUwOiAjYjFiMWIxO1xuJGdyZXktNDgwOiAjYzVjNmM3O1xuJGdyZXktNDYwOiAjZGVlMmU2O1xuJGdyZXktNDcwOiAjZTVlNWU1O1xuJGdyZXktNDUwOiAjZWFlYWVhOyAvLyNkZWUwZTQ7XG4kZ3JleS00NDA6ICNDOUQwREY7XG4kZ3JleS00MzA6ICNlNGU0ZTQ7XG4kZ3JleS00MTA6ICNlY2YwZjU7XG4kZ3JleS00MDA6ICNlYWVhZWE7XG4kZ3JleS0zNTA6ICM4ZThlOGU7XG4kZ3JleS0yNTA6ICNmNWY1ZjU7XG4kZ3JleS0yMjA6ICNmYWZhZmE7XG4kZ3JleS0yMTA6ICNmM2Y1Zjc7XG4kZ3JleS0xNTA6ICNmOWY5Zjk7XG4kZ3JleS0xMjA6ICNmN2Y3Zjc7XG4kZ3JleS0xMzA6ICNmNmY2Zjc7XG4kZ3JleS0xMDA6ICNmZGZkZmQ7XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRibGFjazogIzAwMDAwMDtcbiR0cmFuczogdHJhbnNwYXJlbnQ7XG5cblxuLy9wdWJsaWMgcGFnZXMgY29sb3JzXG4kZHMtdjojMzQyNjNjO1xuJGwtZ3JleS0wMTojZjJmMmYyO1xuJGwtZ3JleS0wMjojZGRkZGRkO1xuJGdyZXktdjogIzZlNjc3MztcbiRkLWdyZXktMDE6IzhhOGE4YTtcbiRzdC1ibHVlOiMwNTgyYzg7XG4kc3QtYmx1ZS0wMTogIzFjYTBkNTtcbiRzdC1ibHVlLTAyOiAjMDE5N2Q0O1xuJHBtLWJsdWU6IzIyOTZlZjtcbiRncmV5LXA6I2Y2ZWVmMztcbiRwLXJlZDogI2ZmNGY1YTtcbiRwLWdyZXktMDE6ICMyZjJmMmY7XG4kcC1ncmV5LTAyOiAjNGQ0YTRhO1xuJHAtZ3JleS0wMzogIzYzNjE2MTtcblxuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7IiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cblxuQG1peGluIGJvcmRlci1yYWRpdXMgKCRyYWRpdXMpIHtcblx0LXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdC1tb3otYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzICgkcmFkaXVzKSB7XG4gIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gb3BhY2l0eSAoJHZhbHVlKSB7XG4gIG9wYWNpdHk6ICR2YWx1ZTtcbiAgLW1vei1vcGFjaXR5OiAkdmFsdWU7XG4gIC13ZWJraXQtb3BhY2l0eTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyAoJHJ1bGVzLi4uKSB7XG4gIGJveC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei1ib3gtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdGV4dC1zaGFkb3cgKCRydWxlcykge1xuICB0ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LXRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC13ZWJraXQtdGV4dC1zaGFkb3c6ICRydWxlcztcbn1cblxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: IncomeTrackerAgeingComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerAgeingIncomeTrackerAgeingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerAgeingComponent", function () {
      return IncomeTrackerAgeingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var IncomeTrackerAgeingComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerAgeingComponent(accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomeTrackerAgeingComponent);

        this.accountsService = accountsService;
        this.sharedService = sharedService;
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

      _createClass(IncomeTrackerAgeingComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "setDataType",
        value: function setDataType(type) {
          this.dataType = type;
          this.getAgeingData();
        }
      }, {
        key: "drawChart",
        value: function drawChart() {
          var _this28 = this;

          setTimeout(function () {
            _this28.isChartLoaded = true;
            var data = {
              labels: ["0-30 Days", "31-60 Days", "61-90 Days", "Over 90 Days"],
              datasets: [{
                data: [parseInt(_this28.totalAmountItem1Percent), parseInt(_this28.totalAmountItem3Percent), parseInt(_this28.totalAmountItem4Percent), parseInt(_this28.totalAmountItem5Percent)],
                backgroundColor: ["#5bcc73", "#00bcd4", "#ff3638", "#3f51b5"],
                hoverBackgroundColor: ["#5bcc73", "#00bcd4", "#ff3638", "#3f51b5"]
              }]
            };
            _this28.chart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](_this28.chartRef.nativeElement, {
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
                  onComplete: function onComplete(e) {}
                }
              }
            });
          }, 500);
        }
      }, {
        key: "getAgeingData",
        value: function getAgeingData() {
          var _this29 = this;

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
          this.accountsService.GetARAgingCollectionDueSummary(ageingParams).subscribe(function (res) {
            _this29.isDataLoaded = true;
            _this29.ageingDataDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](_this29.ageingDataDataList, function (item) {
              item.towerUnit = item.apartmentBlockNumber + ' ' + item.apartmentBlockUnitNumber;
            });
            _this29.totalItems = _this29.ageingDataDataList.length;

            if (_this29.totalItems > _this29.itemLimit) {
              _this29.ItemEndIndex = _this29.itemLimit;
            } else {
              _this29.ItemEndIndex = _this29.totalItems;
            }

            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](_this29.ageingDataDataList, function (item, index) {
              _this29.totalInvoices = _this29.totalInvoices + item.bucketCount1 + item.bucketCount2 + item.bucketCount3 + item.bucketCount4 + item.bucketCount5;
              _this29.totalAmountItem1 = _this29.totalAmountItem1 + item.bucketAmt1 + item.bucketAmt2;
              _this29.totalAmountItem3 = _this29.totalAmountItem3 + item.bucketAmt3;
              _this29.totalAmountItem4 = _this29.totalAmountItem4 + item.bucketAmt4;
              _this29.totalAmountItem5 = _this29.totalAmountItem5 + item.bucketAmt5;
              _this29.totalAmount = _this29.totalAmountItem1 + _this29.totalAmountItem3 + _this29.totalAmountItem4 + _this29.totalAmountItem5;
              _this29.totalAmountItem1Percent = _this29.totalAmountItem1 / _this29.totalAmount * 100;
              _this29.totalAmountItem3Percent = _this29.totalAmountItem3 / _this29.totalAmount * 100;
              _this29.totalAmountItem4Percent = _this29.totalAmountItem4 / _this29.totalAmount * 100;
              _this29.totalAmountItem5Percent = _this29.totalAmountItem5 / _this29.totalAmount * 100;

              if (index == _this29.ageingDataDataList.length - 1) {
                _this29.drawChart();
              }

              var unitParams = {
                ApartmentID: parseInt(_this29.cookieService.get('apartmentId')),
                asOfDate: _this29.asOfDate,
                unitId: item.unitID
              };

              _this29.accountsService.GetARAgingCollectionDueByUnitId(unitParams).subscribe(function (res) {
                item.invoiceDetails = res;
              }, function (error) {});
            });
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAgeingData();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return IncomeTrackerAgeingComponent;
    }();

    IncomeTrackerAgeingComponent.ctorParameters = function () {
      return [{
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('incomePieChart', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomeTrackerAgeingComponent.prototype, "chartRef", void 0);
    IncomeTrackerAgeingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-ageing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-ageing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-ageing.component.scss */
      "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], IncomeTrackerAgeingComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.scss":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.scss ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerFilterIncomeTrackerFilterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLWZpbHRlci9pbmNvbWUtdHJhY2tlci1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: IncomeTrackerFilterComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerFilterIncomeTrackerFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerFilterComponent", function () {
      return IncomeTrackerFilterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

    var IncomeTrackerFilterComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerFilterComponent(accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomeTrackerFilterComponent);

        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.Object = Object;
        this.fieldParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(IncomeTrackerFilterComponent, [{
        key: "onFilterFieldChange",
        value: function onFilterFieldChange(data) {
          this.filterDataList = data;
        }
      }, {
        key: "getFilterData",
        value: function getFilterData(key) {
          if (key == 'PostStartDate') {
            return this.getInvoiceDate(this.filter[key]);
          } else if (key == 'PostEndDate') {
            return this.getInvoiceDate(this.filter[key]);
          } else if (key == 'billNo') {
            return this.filter[key];
          } else if (key == 'receiptNo') {
            return this.filter[key];
          } else if (key == 'isReversed') {
            if (this.filter[key]) {
              return 'is Reverse';
            }
          } else if (key == 'isCreditNote') {
            if (this.filter[key]) {
              return 'is Credit Note';
            }
          }
        }
      }, {
        key: "removeFilterItem",
        value: function removeFilterItem(item) {
          if (typeof item == 'string' || typeof item == 'number') this.filter[item] = null;else this.filter[item] = false;

          if (this.isFilterObjectNull()) {
            this.resetFilter();
            this.fieldParams.emit(this.filter);
          }
        }
      }, {
        key: "isFilterObjectNull",
        value: function isFilterObjectNull() {
          for (var key in this.filter) {
            if (this.filter[key] != null && this.filter[key] != "") {
              return false;
            }
          }

          return true;
        }
      }, {
        key: "getInvoiceDate",
        value: function getInvoiceDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_5__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "clearFilterItems",
        value: function clearFilterItems() {
          this.resetFilter();
          this.fieldParams.emit(this.filter);
        }
      }, {
        key: "submitIncomeFilterForm",
        value: function submitIncomeFilterForm(form) {
          this.fieldParams.emit(this.filter);
        }
      }, {
        key: "isItem",
        value: function isItem(key) {
          return !this.filter[key] || this.filter[key] == null ? false : true;
        }
      }, {
        key: "resetFilter",
        value: function resetFilter() {
          this.filter = {};
          this.filter.isReversed = null;
          this.filter.isCreditNote = null;
          this.filter.PostStartDate = null;
          this.filter.PostEndDate = null;
          this.filter.billNo = null;
          this.filter.receiptNo = null;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetFilter();
        }
      }]);

      return IncomeTrackerFilterComponent;
    }();

    IncomeTrackerFilterComponent.ctorParameters = function () {
      return [{
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], IncomeTrackerFilterComponent.prototype, "fieldParams", void 0);
    IncomeTrackerFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-filter',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-filter.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-filter.component.scss */
      "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], IncomeTrackerFilterComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.scss":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.scss ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsCustomerIncomeTrackerReportsCustomerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXJlcG9ydHMvaW5jb21lLXRyYWNrZXItcmVwb3J0cy1jdXN0b21lci9pbmNvbWUtdHJhY2tlci1yZXBvcnRzLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts":
  /*!***************************************************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: IncomeTrackerReportsCustomerComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsCustomerIncomeTrackerReportsCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerReportsCustomerComponent", function () {
      return IncomeTrackerReportsCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var IncomeTrackerReportsCustomerComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerReportsCustomerComponent(apartmentService, accountsService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, IncomeTrackerReportsCustomerComponent);

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

      _createClass(IncomeTrackerReportsCustomerComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "getUnits",
        value: function getUnits(id) {
          var _this30 = this;

          this.apartmentService.getApartmentBlockUnitByBlockId(parseInt(id)).subscribe(function (res) {
            _this30.blockUnitData = res;
            _this30.isBlockSelected = true;
          });
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "getDateFormat",
        value: function getDateFormat(date) {
          return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
        }
      }, {
        key: "getTimeFormat",
        value: function getTimeFormat(dateTime) {
          return moment__WEBPACK_IMPORTED_MODULE_7__(dateTime).format("YYYY-MM-DD HH:mm");
        }
      }, {
        key: "submitIncomeReportsCustomerForm",
        value: function submitIncomeReportsCustomerForm(form) {
          var _this31 = this;

          this.isReportSubmitted = true;
          this.isDataLoaded = false;
          var details = {
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
          this.accountsService.getCustGltransactionsMultiFilter(details).subscribe(function (res) {
            _this31.reportsDataList = res;
            _this31.totalItems = _this31.reportsDataList.length;

            if (_this31.totalItems > _this31.itemLimit) {
              _this31.ItemEndIndex = _this31.itemLimit;
            } else {
              _this31.ItemEndIndex = _this31.totalItems;
            }

            _this31.isDataLoaded = true;
            _this31.isReportSubmitted = false;
          }, function (error) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this32 = this;

          this.report = {};
          this.report.apartmentBlockId = "";
          this.report.apartmentBlockUnitId = "";
          this.report.GLaccountID = "";
          this.report.GLDocumentTypeID = "";
          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this32.blockData = res;
          });
          this.accountsService.getAllGLAccounts().subscribe(function (res) {
            _this32.glAccountsDataList = res.filter(function (item) {
              return item.isActive && parseInt(_this32.cookieService.get('apartmentId')) && item.indicator == _this32.glAccountIndicator;
            });
          }); //Gl Document 

          this.lookupService.getLookupValueByLookupTypeId(31).subscribe(function (res) {
            _this32.glDocumentTypeDataList = res;
          }, function (error) {});
        }
      }]);

      return IncomeTrackerReportsCustomerComponent;
    }();

    IncomeTrackerReportsCustomerComponent.ctorParameters = function () {
      return [{
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    IncomeTrackerReportsCustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-reports-customer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-reports-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-reports-customer.component.scss */
      "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomeTrackerReportsCustomerComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.scss":
  /*!*************************************************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.scss ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsVendorIncomeTrackerReportsVendorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXJlcG9ydHMvaW5jb21lLXRyYWNrZXItcmVwb3J0cy12ZW5kb3IvaW5jb21lLXRyYWNrZXItcmVwb3J0cy12ZW5kb3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts":
  /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: IncomeTrackerReportsVendorComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsVendorIncomeTrackerReportsVendorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerReportsVendorComponent", function () {
      return IncomeTrackerReportsVendorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../api/services/vendor.service */
    "./src/app/api/services/vendor.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var IncomeTrackerReportsVendorComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerReportsVendorComponent(apartmentService, vendorService, accountsService, sharedService, lookupService, cookieService) {
        _classCallCheck(this, IncomeTrackerReportsVendorComponent);

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

      _createClass(IncomeTrackerReportsVendorComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          if (date != null) return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");else return "";
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "getDateFormat",
        value: function getDateFormat(date) {
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD");
        }
      }, {
        key: "getTimeFormat",
        value: function getTimeFormat(dateTime) {
          return moment__WEBPACK_IMPORTED_MODULE_8__(dateTime).format("YYYY-MM-DD HH:mm");
        }
      }, {
        key: "submitIncomeReportsVendorForm",
        value: function submitIncomeReportsVendorForm(form) {
          var _this33 = this;

          this.isReportSubmitted = true;
          this.isDataLoaded = false;
          var details = {
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
          this.accountsService.getVendorGltransactionsMultiFilter(details).subscribe(function (res) {
            _this33.reportsDataList = res;
            console.log(_this33.reportsDataList);
            _this33.totalItems = _this33.reportsDataList.length;

            if (_this33.totalItems > _this33.itemLimit) {
              _this33.ItemEndIndex = _this33.itemLimit;
            } else {
              _this33.ItemEndIndex = _this33.totalItems;
            }

            _this33.isDataLoaded = true;
            _this33.isReportSubmitted = false;
          }, function (error) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.report = {};
          this.report.apartmentBlockId = "";
          this.report.vendorId = "";
          this.report.GLaccountID = "";
          this.report.GLDocumentTypeID = "";
          this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this34.blockData = res;
          });
          this.vendorService.getVendorByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this34.vendorData = res;
          });
          this.accountsService.getAllGLAccounts().subscribe(function (res) {
            _this34.glAccountsDataList = res.filter(function (item) {
              return item.isActive && parseInt(_this34.cookieService.get('apartmentId')) && item.indicator == _this34.glAccountIndicator;
            });
          }); //Gl Document 

          this.lookupService.getLookupValueByLookupTypeId(31).subscribe(function (res) {
            _this34.glDocumentTypeDataList = res;
          }, function (error) {});
        }
      }]);

      return IncomeTrackerReportsVendorComponent;
    }();

    IncomeTrackerReportsVendorComponent.ctorParameters = function () {
      return [{
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_3__["VendorService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    IncomeTrackerReportsVendorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-reports-vendor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-reports-vendor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-reports-vendor.component.scss */
      "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_3__["VendorService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], IncomeTrackerReportsVendorComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXJlcG9ydHMvaW5jb21lLXRyYWNrZXItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: IncomeTrackerReportsComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerReportsIncomeTrackerReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerReportsComponent", function () {
      return IncomeTrackerReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var IncomeTrackerReportsComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerReportsComponent(sharedService, cookieService, lookupService) {
        _classCallCheck(this, IncomeTrackerReportsComponent);

        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.lookupService = lookupService;
        this.isDataLoaded = true;
      }

      _createClass(IncomeTrackerReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //     this.lookupService.getLookupValueByLookupTypeId(88).subscribe((res:any) => {
          //   		this.reportsDataList = res.filter(item => {
          //   			return item.isActive;
          //   		});
          // console.log('this.reportsDataList', this.reportsDataList)
          //     });
          this.reportsDataList = [{
            lookupValueName: 'Customer Journal Report',
            description: 'Gives the overall residents in the condo',
            type: 'customer'
          }, {
            lookupValueName: 'Vendor Journal Entires',
            description: 'List of users approved by the admin and relevant details submitted by the Use',
            type: 'vendor'
          }];
        }
      }]);

      return IncomeTrackerReportsComponent;
    }();

    IncomeTrackerReportsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }];
    };

    IncomeTrackerReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-reports.component.scss */
      "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]])], IncomeTrackerReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerSetupIncomeTrackerSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS10cmFja2VyLXNldHVwL2luY29tZS10cmFja2VyLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: IncomeTrackerSetupComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeTrackerSetupIncomeTrackerSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerSetupComponent", function () {
      return IncomeTrackerSetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var IncomeTrackerSetupComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerSetupComponent(accountsService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, IncomeTrackerSetupComponent);

        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isSettingsDataLoaded = true;
        this.isPenaltyDataLoaded = true;
        this.isError = false;
        this.errorMessage = false;
        this.glAccountIndicator = "Income";
        this.isEdit = false;
        this.isPenaltyEdit = false;
      }

      _createClass(IncomeTrackerSetupComponent, [{
        key: "submitIncomeSettingsForm",
        value: function submitIncomeSettingsForm(form) {
          this.setting.currencyId = this.setting.currencyId;
          this.setting.glAccountId = this.setting.glAccountId;
          this.setting.paymentTerm = this.setting.paymentTerm;
          this.setting.vatPercentage = this.setting.vatPercentage;
          this.isEdit = false;
          this.sharedService.setAlertMessage("updated successfully");
        }
      }, {
        key: "submitIncomePenalitySettingsForm",
        value: function submitIncomePenalitySettingsForm(form) {
          this.penalty.penaltyTypeId = "Daily Interest";
          this.penalty.latePaymentId = "124";
          this.penalty.penaltyPercentage = "10";
          this.penalty.gracePeriodInvoiceId = "50";
          this.isPenaltyEdit = false;
          this.sharedService.setAlertMessage("updated successfully");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.setting = {};
          this.setting.currencyId = "dollor";
          this.setting.glAccountId = "1234";
          this.setting.paymentTerm = "abcd";
          this.setting.vatPercentage = "10";
          this.penalty = {};
          this.penalty.penaltyTypeId = "Daily Interest";
          this.penalty.latePaymentId = "124";
          this.penalty.penaltyPercentage = "10";
          this.penalty.gracePeriodInvoiceId = "50"; //currency type

          this.lookupService.getLookupValueByLookupTypeId(88).subscribe(function (res) {
            _this35.currencyTypeDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
          this.accountsService.getAllGLAccounts().subscribe(function (res) {
            _this35.glAccountListData = res.filter(function (item) {
              return item.isActive && parseInt(_this35.cookieService.get('apartmentId')) && item.indicator == _this35.glAccountIndicator;
            });
          }); //payment term

          this.lookupService.getLookupValueByLookupTypeId(74).subscribe(function (res) {
            _this35.paymentInvoiceDataList = res.filter(function (item) {
              return item.isActive;
            });
          }); //VAT

          this.lookupService.getLookupValueByLookupTypeId(77).subscribe(function (res) {
            _this35.vatPecentageDataList = res.filter(function (item) {
              return item.isActive;
            });
          }); //penalty

          this.lookupService.getLookupValueByLookupTypeId(80).subscribe(function (res) {
            _this35.penaltyDataList = res.filter(function (item) {
              return item.isActive;
            });
          }); //late payment

          this.lookupService.getLookupValueByLookupTypeId(81).subscribe(function (res) {
            _this35.lastPaymentDataList = res.filter(function (item) {
              return item.isActive;
            });
          }); //% Penalty percentage

          this.lookupService.getLookupValueByLookupTypeId(82).subscribe(function (res) {
            _this35.penaltyPercentageDataList = res.filter(function (item) {
              return item.isActive;
            });
          }); //% grace period for invoice

          this.lookupService.getLookupValueByLookupTypeId(83).subscribe(function (res) {
            _this35.gracePeriodInvoiceDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }, {
        key: "showEditForm",
        value: function showEditForm() {
          this.isEdit = !this.isEdit;
        }
      }, {
        key: "showPenaltyEditForm",
        value: function showPenaltyEditForm() {
          this.isPenaltyEdit = !this.isPenaltyEdit;
        }
      }]);

      return IncomeTrackerSetupComponent;
    }();

    IncomeTrackerSetupComponent.ctorParameters = function () {
      return [{
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    IncomeTrackerSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker-setup.component.scss */
      "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], IncomeTrackerSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewCreditIncomeViewCreditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWNyZWRpdC9pbmNvbWUtdmlldy1jcmVkaXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: IncomeViewCreditComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewCreditIncomeViewCreditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeViewCreditComponent", function () {
      return IncomeViewCreditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var IncomeViewCreditComponent =
    /*#__PURE__*/
    function () {
      function IncomeViewCreditComponent(injector, dialog, userService, apartmentService, accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomeViewCreditComponent);

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
        this.itemLimit = 10;
        this.unitFieldType = "invoiceId";
        this.unitOrder = true;
        this.isMobile = false;
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(IncomeViewCreditComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event, type, name) {
          if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_9__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "getCustomerName",
        value: function getCustomerName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.userDataList, function (item) {
            if (item.userId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].firstName + ' ' + data[0].lastName;
          }
        }
      }, {
        key: "getBlockUnitDetails",
        value: function getBlockUnitDetails(credit, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.creditNoteDataList.map(function (obj) {
              if (obj.invoiceId == credit.invoiceId) {
                obj.towerUnit = data[0].apartmentBlockNumber + ' ' + data[0].apartmentBlockUnitNumber;
              }
            });
            return data[0].apartmentBlockNumber + ' ' + data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getEmailStatus",
        value: function getEmailStatus(value) {
          if (value) {
            return 'Y';
          } else {
            return 'N';
          }
        }
      }, {
        key: "getDate",
        value: function getDate(credit, date) {
          this.creditNoteDataList.map(function (obj) {
            if (obj.invoiceId == credit.invoiceId) {
              obj.postedOn = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
            }
          });
          return moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "updateCreditItem",
        value: function updateCreditItem(credit) {
          var _this36 = this;

          setTimeout(function () {
            _this36.isCreditNoteLoaded = false;
            var details = {
              "creditNoteId": parseInt(credit.creditNoteId),
              "apartmentId": parseInt(_this36.cookieService.get('apartmentId')),
              "amount": parseInt(credit.amount),
              "collectionId": parseInt(credit.collectionId),
              "invoiceId": parseInt(credit.invoiceId),
              "isEmailSent": credit.isEmailSent,
              "isSmssent": credit.isSmssent,
              "comment": credit.comment,
              "isActive": true,
              "insertedBy": parseInt(_this36.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(_this36.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "transReference1": "string",
              "transReference2": "string",
              "glAcctIndicator": "Income",
              "apartmentBlockUnitId": parseInt(credit.apartmentBlockUnitId)
            };

            _this36.accountsService.updateCreditNote(details).subscribe(function (res) {
              if (res.message) {
                _this36.isCreditNoteLoaded = true;

                _this36.sharedService.setAlertMessage("Credit Note updated successfully");
              } else {
                _this36.isCreditNoteLoaded = true;
              }
            }, function (error) {
              _this36.isCreditNoteLoaded = true;
            });
          }, 1000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.userDataList = [];
          this.userService.getAllUsers().subscribe(function (res) {
            _this37.userDataList = res;
          });
          this.accountsService.getCreditNotesByApartmentIdStatus(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this37.creditNoteDataList = res;
            _this37.totalItems = _this37.creditNoteDataList.length;

            if (_this37.totalItems > _this37.itemLimit) {
              _this37.ItemEndIndex = _this37.itemLimit;
            } else {
              _this37.ItemEndIndex = _this37.totalItems;
            }

            _this37.isCreditNoteLoaded = true;

            _this37.accountsService.getCustInvoicesByApartmentId(parseInt(_this37.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this37.custInvoiceDataList = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {
              console.log(error);
            });
          }, function (error) {
            console.log(error);
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this37.blockUnitData = res;
          });
        }
      }]);

      return IncomeViewCreditComponent;
    }();

    IncomeViewCreditComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    IncomeViewCreditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-view-credit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-view-credit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-view-credit.component.scss */
      "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], IncomeViewCreditComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.scss":
  /*!************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.scss ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewDefaultersIncomeViewDefaultersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWRlZmF1bHRlcnMvaW5jb21lLXZpZXctZGVmYXVsdGVycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts ***!
    \**********************************************************************************************************/

  /*! exports provided: IncomeViewDefaultersComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewDefaultersIncomeViewDefaultersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeViewDefaultersComponent", function () {
      return IncomeViewDefaultersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var IncomeViewDefaultersComponent =
    /*#__PURE__*/
    function () {
      function IncomeViewDefaultersComponent(router, route, userService, accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomeViewDefaultersComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDefaultersDataLoaded = false;
        this.defaultData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "type";
        this.unitOrder = true;
        this.isMobile = false;
        this.isDefaultSelected = false;
        this.selectAllDefaulters = false;
        this.sendMessage = null;
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(IncomeViewDefaultersComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "getAllDefaulters",
        value: function getAllDefaulters() {
          if (this.selectAllDefaulters) {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, function (item) {
              item.checked = true;
            });
            this.isDefaultSelected = true;
          } else {
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, function (item) {
              item.checked = false;
            });
            this.isDefaultSelected = false;
          }
        }
      }, {
        key: "getSelectedAllDefaulters",
        value: function getSelectedAllDefaulters(unit) {
          var length = 0;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, function (item) {
            if (item.checked) {
              length++;
            }
          });

          if (length > 0) {
            this.isDefaultSelected = true;
          } else {
            this.isDefaultSelected = false;
          }

          if (length == 0) {
            this.selectAllDefaulters = false;
          }

          if (length == this.defaultDataList.length) {
            this.selectAllDefaulters = true;
          }
        }
      }, {
        key: "sendEmail",
        value: function sendEmail() {
          this.isDefaultersDataLoaded = true;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, function (item, index) {
            if (item.checked) {}
          });
        }
      }, {
        key: "sendSMS",
        value: function sendSMS() {
          this.isDefaultersDataLoaded = true;
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.defaultDataList, function (item, index) {
            if (item.checked) {}
          });
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event, type, name) {
          if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "onResize",
        value: function onResize(event) {
          if (event.target.innerWidth <= 991) this.isMobile = true;else this.isMobile = false;
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.accountsService.GetIncomeTrackerDefaulterByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this38.defaultDataList = res;
            _this38.totalItems = _this38.defaultDataList.length;

            if (_this38.totalItems > _this38.itemLimit) {
              _this38.ItemEndIndex = _this38.itemLimit;
            } else {
              _this38.ItemEndIndex = _this38.totalItems;
            }

            _this38.isDefaultersDataLoaded = true;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return IncomeViewDefaultersComponent;
    }();

    IncomeViewDefaultersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeViewDefaultersComponent.prototype, "onResize", null);
    IncomeViewDefaultersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-view-defaulters',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-view-defaulters.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-view-defaulters.component.scss */
      "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomeViewDefaultersComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewInvoiceHistoryIncomeViewInvoiceHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".income-view-invoice-history-wrapper .slideup {\n  visibility: hidden;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3RvcnkvaW5jb21lLXZpZXctaW52b2ljZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3RvcnkvaW5jb21lLXZpZXctaW52b2ljZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtDO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9hbXMvaW5jb21lLXRyYWNrZXIvY29tcG9uZW50cy9pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3RvcnkvaW5jb21lLXZpZXctaW52b2ljZS1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIn5zcmMvc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL2ZvbnRzXCI7XG5cbi5pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3Rvcnktd3JhcHBlciB7XG5cdC5zbGlkZXVwIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdFx0aGVpZ2h0OiAyNXB4O1xuXHR9XG59XG5cbiIsIi5pbmNvbWUtdmlldy1pbnZvaWNlLWhpc3Rvcnktd3JhcHBlciAuc2xpZGV1cCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: IncomeViewInvoiceHistoryComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewInvoiceHistoryIncomeViewInvoiceHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeViewInvoiceHistoryComponent", function () {
      return IncomeViewInvoiceHistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var IncomeViewInvoiceHistoryComponent =
    /*#__PURE__*/
    function () {
      function IncomeViewInvoiceHistoryComponent(router, route, userService, accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomeViewInvoiceHistoryComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isInvoiceDataLoaded = false;
        this.isInvoiceDataTableLoaded = true;
        this.invoiceData = "";
        this.isAccountDataLoaded = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isMobile = false;
        this.selectedInput = "";
        this.columnField = {};
        this.isReverseSubmitted = true;
      }

      _createClass(IncomeViewInvoiceHistoryComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_8__(event).format("MM-DD-YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getUserName",
        value: function getUserName(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.userDataList, function (item) {
            if (item.userId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].firstName + ' ' + data[0].lastName;
          }
        }
      }, {
        key: "getInvoiceDate",
        value: function getInvoiceDate(itr, date) {
          underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceDataList, function (obj, index) {
            obj.postedOn = moment__WEBPACK_IMPORTED_MODULE_8__(obj.custInvoiceDate).format("MM-DD-YYYY");
          });
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
        }
      }, {
        key: "getAccountName",
        value: function getAccountName(account) {
          var accountDetails = {
            glaccountId: 0
          };

          if (account == undefined || account.length == 0) {
            accountDetails.glaccountId = 0;
          } else {
            accountDetails.glaccountId = account[0].glaccountId;
          }

          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.glAccountListData, function (item) {
            if (item.glaccountId === accountDetails.glaccountId) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].glaccountName;
          }

          return '';
        }
      }, {
        key: "getDueAmount",
        value: function getDueAmount(due, paid) {
          return due - paid > 0 ? 'high' : 'low';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "stopPropagation",
        value: function stopPropagation(event) {
          event.stopPropagation();
        }
      }, {
        key: "getFieldParams",
        value: function getFieldParams(event) {
          var _this39 = this;

          this.isInvoiceDataTableLoaded = false;
          var postStartDate = moment__WEBPACK_IMPORTED_MODULE_8__(event.PostStartDate).format('MM-DD-YYYY');
          var postEndDate = moment__WEBPACK_IMPORTED_MODULE_8__(event.PostEndDate).format('MM-DD-YYYY');
          var params = {
            ApartmentBlockUnitID: this.route.params['value'].id,
            PostStartDate: postStartDate,
            PostEndDate: postEndDate
          };
          this.accountsService.GetAccountHistoryByApartmentUnitId(params).subscribe(function (res) {
            _this39.invoiceDataList = res;
            console.log(res); //filter items

            if (event.isReversed != null) {
              _this39.invoiceDataList = _this39.invoiceDataList.filter(function (item) {
                return item.isReversed == event.isReversed;
              });
            }

            if (event.isCreditNote != null) {
              _this39.invoiceDataList = _this39.invoiceDataList.filter(function (item) {
                return item.isCreditNote == event.isCreditNote;
              });
            }

            if (event.postedDate != null) {
              _this39.invoiceDataList = _this39.invoiceDataList.filter(function (item) {
                return moment__WEBPACK_IMPORTED_MODULE_8__(item.postedDate).format("MM-DD-YYYY") == moment__WEBPACK_IMPORTED_MODULE_8__(event.postedDate).format("MM-DD-YYYY");
              });
            }

            if (event.billNo != null) {
              _this39.invoiceDataList = _this39.invoiceDataList.filter(function (item) {
                return item.billNo == event.billNo;
              });
            }

            if (event.receiptNo != null) {
              _this39.invoiceDataList = _this39.invoiceDataList.filter(function (item) {
                return item.receiptNo == event.receiptNo;
              });
            }

            _this39.invoiceDataList.sort(function (a, b) {
              return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
            });

            _this39.totalItems = _this39.invoiceDataList.length;

            if (_this39.totalItems > _this39.itemLimit) {
              _this39.ItemEndIndex = _this39.itemLimit;
            } else {
              _this39.ItemEndIndex = _this39.totalItems;
            }

            _this39.isInvoiceDataTableLoaded = true;
          }, function (error) {});
        }
      }, {
        key: "reverseItem",
        value: function reverseItem(item) {
          var _this40 = this;

          this.isReverseSubmitted = false;
          var details = {
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "amount": item.invoiceAmount,
            "collectionId": 0,
            "invoiceId": item.billNo,
            "isEmailSent": true,
            "isSmssent": true,
            "comment": this.reverse.comment,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": 0,
            "updatedOn": new Date().toISOString(),
            "transReference1": "string",
            "transReference2": "string",
            "glAcctIndicator": "string"
          };
          this.accountsService.addCustTransReversal(details).subscribe(function (res) {
            if (res.message) {
              _this40.reverse.comment = "";

              _this40.sharedService.setAlertMessage("Invoice Reversed");

              var params = {
                ApartmentBlockUnitID: _this40.route.params['value'].id
              };

              _this40.accountsService.GetAccountHistoryByApartmentUnitId(params).subscribe(function (res) {
                _this40.invoiceDataList = res;

                _this40.invoiceDataList.sort(function (a, b) {
                  return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
                });

                _this40.totalItems = _this40.invoiceDataList.length;

                if (_this40.totalItems > _this40.itemLimit) {
                  _this40.ItemEndIndex = _this40.itemLimit;
                } else {
                  _this40.ItemEndIndex = _this40.totalItems;
                }

                _this40.isReverseSubmitted = true;
              });
            } else {}
          }, function (error) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.reverse = {};
          this.accountsService.getAllGLAccounts().subscribe(function (res) {
            var glAccountListData = res.filter(function (item) {
              return item.apartmentId == parseInt(_this41.cookieService.get('apartmentId'));
            });
            _this41.glAccountListData = glAccountListData;
          });
          var params = {
            ApartmentBlockUnitID: this.route.params['value'].id
          };
          this.accountsService.GetAccountHistoryByApartmentUnitId(params).subscribe(function (res) {
            _this41.invoiceDataList = res; //sorting by date ( new to old )

            _this41.invoiceDataList.sort(function (a, b) {
              return new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime();
            });

            _this41.totalItems = _this41.invoiceDataList.length;

            if (_this41.totalItems > _this41.itemLimit) {
              _this41.ItemEndIndex = _this41.itemLimit;
            } else {
              _this41.ItemEndIndex = _this41.totalItems;
            }

            _this41.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(_this41.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this41.accountDataList = res.filter(function (item) {
                return item.apartmentBlockUnitId == _this41.route.params['value'].id;
              });
              _this41.isAccountDataLoaded = true;
            });

            _this41.userService.getAllUsersByApartmentId(parseInt(_this41.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this41.userDataList = res;
              _this41.isInvoiceDataLoaded = true;
            }, function (error) {});
          });
        }
      }]);

      return IncomeViewInvoiceHistoryComponent;
    }();

    IncomeViewInvoiceHistoryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    IncomeViewInvoiceHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-view-invoice-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-view-invoice-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-view-invoice-history.component.scss */
      "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomeViewInvoiceHistoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewInvoiceIncomeViewInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LWludm9pY2UvaW5jb21lLXZpZXctaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: IncomeViewInvoiceComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewInvoiceIncomeViewInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeViewInvoiceComponent", function () {
      return IncomeViewInvoiceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxwindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow.ts");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxpopover.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/services/constants.service */
    "./src/app/shared/services/constants.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);

    var IncomeViewInvoiceComponent =
    /*#__PURE__*/
    function () {
      function IncomeViewInvoiceComponent(dialog, router, route, userService, accountsService, sharedService, constantsService, cookieService) {
        _classCallCheck(this, IncomeViewInvoiceComponent);

        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.constantsService = constantsService;
        this.cookieService = cookieService;
        this.isInvoiceDataLoaded = false;
        this.invoiceData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "custInvoiceId";
        this.unitOrder = true;
        this.isMobile = false;
        this.glAccountIndicator = "Income";
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(IncomeViewInvoiceComponent, [{
        key: "getDueAmount",
        value: function getDueAmount(due, paid) {
          return due - paid > 0 ? 'high' : 'low';
        }
      }, {
        key: "stopPropagation",
        value: function stopPropagation(event) {
          event.stopPropagation();
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this42 = this;

          if (this.invoiceData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.invoiceData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this42.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "onDownloadInvoice",
        value: function onDownloadInvoice(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          var userData = {};
          this.dialog.open(this.viewInvoiceDetailsRef, {
            panelClass: 'material',
            disableClose: true,
            data: userData
          });
        }
      }, {
        key: "onEditInvoice",
        value: function onEditInvoice(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          var custInvoiceId = dataRecord.custInvoiceId;
          var apartmentBlockUnitId = dataRecord.apartmentBlockUnitId;
          this.router.navigateByUrl('/ams/income/edit-invoice/' + apartmentBlockUnitId + '/' + custInvoiceId);
        }
      }, {
        key: "onEditReverse",
        value: function onEditReverse(detail) {
          var _this43 = this;

          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          this.invoice = dataRecord;
          this.reversePopOverSelector = '#' + this.invoice.custInvoiceId;
          setTimeout(function () {
            _this43.reversePopOver.createComponent();

            _this43.reversePopOver.open();
          }, 100);
        }
      }, {
        key: "onUpdateInvoice",
        value: function onUpdateInvoice(detail) {
          var invoice = this.datagrid.getrowdata(detail.rowId);
          this.updateInvoiceItem(invoice, detail.column);
        }
      }, {
        key: "updateInvoiceItem",
        value: function updateInvoiceItem(invoice, type) {
          var _this44 = this;

          if (type == 'email') {
            if (invoice.isEmailSent) invoice.isEmailSent = false;else invoice.isEmailSent = true;
          } else {
            if (invoice.isSmssent) invoice.isSmssent = false;else invoice.isSmssent = true;
          }

          var details = {
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
            "invoiceGLAccounts": [{
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
            }]
          };
          this.accountsService.updateCustInvoice(details).subscribe(function (res) {
            if (res.message) {
              _this44.sharedService.setAlertMessage("Invoice updated successfully");
            } else {
              _this44.isInvoiceDataLoaded = true;
            }
          }, function (error) {
            _this44.isInvoiceDataLoaded = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this45 = this;

          var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
          };

          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.accountsService.getAllGLAccounts().subscribe(function (res) {
            _this45.glAccountListData = res.filter(function (item) {
              return item.isActive && parseInt(_this45.cookieService.get('apartmentId')) && item.indicator == _this45.glAccountIndicator;
            });
          });
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            apartmentBlockUnitId: this.route.params['value'].id
          };
          this.accountsService.getCustInvoicesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            var invoiceDataList = res;
            underscore__WEBPACK_IMPORTED_MODULE_12__["each"](invoiceDataList, function (item) {
              item.towerUnit = item.apartmentBlockNumber + ' ' + item.apartmentBlockUnitNumber;
            });
            _this45.invoice = invoiceDataList[0];
            _this45.reversePopOverSelector = '#' + _this45.invoice.custInvoiceId;
            _this45.gridSourceData = {
              localdata: invoiceDataList,
              datatype: "array"
            };
            _this45.invoiceDataList = new jqx.dataAdapter(_this45.gridSourceData);
            /*this.getSourceDataAdapter = (datafield: string): any => {
              let dataAdapter = new jqx.dataAdapter(this.gridSourceData, { uniqueDataFields: [datafield] });
              return dataAdapter;
            }*/

            _this45.totalItems = _this45.invoiceDataList.length;
            _this45.columnData = [{
              text: 'Invoice Id',
              datafield: 'custInvoiceId',
              width: 120,
              pinned: true,
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell"><a href="javascript:void(0)" class="mr-2 t-decor" onClick="downloadInvoiceEvent(' + row + ')">' + value + '</a></div>';
              },
              renderer: columnrenderer
            }, {
              text: 'Invoice Date',
              datafield: 'postedOn',
              minwidth: 120,
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_13__(value).format(_this45.constantsService.dateFormat) + '</div>';
              },
              renderer: columnrenderer
            }, {
              text: 'Posted By',
              datafield: 'postedByName',
              minwidth: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Tower Unit',
              datafield: 'block_Unit',
              minwidth: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Due',
              datafield: 'custInvoiceAmount',
              minwidth: 150,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Sent Email',
              datafield: 'isEmailSent',
              minwidth: 120,
              cellsrenderer: function cellsrenderer(row, column, value) {
                var chkedProperty;

                if (value) {
                  chkedProperty = 'checked="true"';
                } else {
                  chkedProperty = '';
                }

                return '<div class="jqx-custom-inner-cell">' + '<label class="switch float-left">' + '<input type="checkbox" id="invoiceEmail" name="invoiceEmail"' + chkedProperty + '>' + '<div class="slider round" onClick="updateInvoiceEvent(' + row + ', \'email\')"></div>' + '</label>' + '</div>';
              },
              renderer: columnrenderer
            }, {
              text: 'SMS/Email',
              datafield: 'isSmssent',
              minwidth: 120,
              cellsrenderer: function cellsrenderer(row, column, value) {
                var chkedProperty;

                if (value) {
                  chkedProperty = 'checked="true"';
                } else {
                  chkedProperty = '';
                }

                return '<div class="jqx-custom-inner-cell">' + '<label class="switch float-left">' + '<input type="checkbox" id="invoiceSMS" name="invoiceSMS"' + chkedProperty + '>' + '<div class="slider round" onClick="updateInvoiceEvent(' + row + ', \'sms\')"></div>' + '</label>' + '</div>';
              },
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                var elemId = invoiceDataList[row].custInvoiceId;
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editInvoiceEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" id="' + elemId + '" onClick="editReverseEvent(' + row + ')"><i class="fa fa-repeat icon delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrenderer
            }];

            _this45.userService.getAllUsersByApartmentId(parseInt(_this45.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this45.userDataList = res;
              _this45.isInvoiceDataLoaded = true;
            }, function (error) {});
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return IncomeViewInvoiceComponent;
    }();

    IncomeViewInvoiceComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_8__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
      }, {
        type: _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])], IncomeViewInvoiceComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopWindow', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxwindow__WEBPACK_IMPORTED_MODULE_5__["jqxWindowComponent"])], IncomeViewInvoiceComponent.prototype, "reversePopWindow", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('reversePopOver', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxpopover__WEBPACK_IMPORTED_MODULE_6__["jqxPopoverComponent"])], IncomeViewInvoiceComponent.prototype, "reversePopOver", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewInvoiceDetailsRef", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], IncomeViewInvoiceComponent.prototype, "viewInvoiceDetailsRef", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onDownloadInvoice', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeViewInvoiceComponent.prototype, "onDownloadInvoice", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditInvoice', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeViewInvoiceComponent.prototype, "onEditInvoice", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditReverse', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeViewInvoiceComponent.prototype, "onEditReverse", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onUpdateInvoice', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], IncomeViewInvoiceComponent.prototype, "onUpdateInvoice", null);
    IncomeViewInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-view-invoice',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-view-invoice.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-view-invoice.component.scss */
      "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_8__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"]])], IncomeViewInvoiceComponent);

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
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewReceiptsIncomeViewReceiptsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9jb21wb25lbnRzL2luY29tZS12aWV3LXJlY2VpcHRzL2luY29tZS12aWV3LXJlY2VpcHRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: IncomeViewReceiptsComponent */

  /***/
  function srcAppAmsIncomeTrackerComponentsIncomeViewReceiptsIncomeViewReceiptsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeViewReceiptsComponent", function () {
      return IncomeViewReceiptsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../.././api/services/accounts.service */
    "./src/app/api/services/accounts.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var IncomeViewReceiptsComponent =
    /*#__PURE__*/
    function () {
      function IncomeViewReceiptsComponent(injector, dialog, apartmentService, accountsService, sharedService, cookieService) {
        _classCallCheck(this, IncomeViewReceiptsComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.apartmentService = apartmentService;
        this.accountsService = accountsService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isReceiptsLoaded = false;
        this.receiptsData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "receiptNumber";
        this.unitOrder = true;
        this.isMobile = false;
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(IncomeViewReceiptsComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.unitFieldType = type;
          this.unitOrder = !this.unitOrder;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.unitFieldType == type) {
            return this.unitOrder ? 'asc' : 'desc';
          } else return '';
        }
      }, {
        key: "getEmailStatus",
        value: function getEmailStatus(value) {
          if (value) {
            return 'Y';
          } else {
            return 'N';
          }
        }
      }, {
        key: "getDate",
        value: function getDate(receipt, date) {
          this.receiptsDataList.map(function (obj) {
            if (obj.receiptNumber == receipt.receiptNumber) {
              obj.paymentDateFormat = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
            }
          });
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "setActive",
        value: function setActive(item) {
          return '';
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onSelectChange",
        value: function onSelectChange(event, type, name) {
          if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_8__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.accountsService.GetIncomeTrackerReceiptsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this46.receiptsDataList = res;
            console.log(res);
            _this46.totalItems = _this46.receiptsDataList.length;

            if (_this46.totalItems > _this46.itemLimit) {
              _this46.ItemEndIndex = _this46.itemLimit;
            } else {
              _this46.ItemEndIndex = _this46.totalItems;
            }

            _this46.isReceiptsLoaded = true;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return IncomeViewReceiptsComponent;
    }();

    IncomeViewReceiptsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    IncomeViewReceiptsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-view-receipts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-view-receipts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-view-receipts.component.scss */
      "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], _api_services_accounts_service__WEBPACK_IMPORTED_MODULE_4__["AccountsService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], IncomeViewReceiptsComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/income-tracker-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ams/income-tracker/income-tracker-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: IncomeTrackerRoutingModule */

  /***/
  function srcAppAmsIncomeTrackerIncomeTrackerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerRoutingModule", function () {
      return IncomeTrackerRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/income-sub-ledger/income-sub-ledger.component */
    "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts");
    /* harmony import */


    var _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/income-view-receipts/income-view-receipts.component */
    "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts");
    /* harmony import */


    var _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/income-view-credit/income-view-credit.component */
    "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts");
    /* harmony import */


    var _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/income-view-invoice/income-view-invoice.component */
    "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts");
    /* harmony import */


    var _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/income-view-invoice-history/income-view-invoice-history.component */
    "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts");
    /* harmony import */


    var _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/income-view-defaulters/income-view-defaulters.component */
    "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts");
    /* harmony import */


    var _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/income-post-multi-invoice/income-post-multi-invoice.component */
    "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts");
    /* harmony import */


    var _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/income-pay-invoice/income-pay-invoice.component */
    "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts");
    /* harmony import */


    var _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/income-tracker-ageing/income-tracker-ageing.component */
    "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts");
    /* harmony import */


    var _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/income-add-credit/income-add-credit.component */
    "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts");
    /* harmony import */


    var _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/income-tracker-reports/income-tracker-reports.component */
    "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts");
    /* harmony import */


    var _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/income-tracker-setup/income-tracker-setup.component */
    "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts");
    /* harmony import */


    var _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component */
    "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts");
    /* harmony import */


    var _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component */
    "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'subledger',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_14__["IncomeTrackerSetupComponent"]
    }, {
      path: 'subledger',
      component: _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_3__["IncomeSubLedgerComponent"]
    }, {
      path: 'view-invoice-history/:id',
      component: _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewInvoiceHistoryComponent"]
    }, {
      path: 'all-invoices',
      component: _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_6__["IncomeViewInvoiceComponent"]
    }, //{ path: 'post-invoice/:id/:type', component: IncomePostInvoiceComponent},
    {
      path: 'post-multi-invoice/:id/:type',
      component: _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostMultiInvoiceComponent"]
    }, //{ path: 'edit-invoice/:id', component: IncomePostInvoiceComponent},
    {
      path: 'edit-invoice/:id/:invoiceid',
      component: _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePostMultiInvoiceComponent"]
    }, {
      path: 'post-collection/:id',
      component: _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_10__["IncomePayInvoiceComponent"]
    }, {
      path: 'receipts',
      component: _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_4__["IncomeViewReceiptsComponent"]
    }, {
      path: 'creditnote',
      component: _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_5__["IncomeViewCreditComponent"]
    }, {
      path: 'add-credit/:id/:type',
      component: _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_12__["IncomeAddCreditComponent"]
    }, {
      path: 'edit-credit/:id',
      component: _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_12__["IncomeAddCreditComponent"]
    }, {
      path: 'defaulters',
      component: _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_8__["IncomeViewDefaultersComponent"]
    }, {
      path: 'ageing',
      component: _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_11__["IncomeTrackerAgeingComponent"]
    }, {
      path: 'reports',
      component: _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_13__["IncomeTrackerReportsComponent"]
    }, {
      path: 'reports/customer',
      component: _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_15__["IncomeTrackerReportsCustomerComponent"]
    }, {
      path: 'reports/vendor',
      component: _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_16__["IncomeTrackerReportsVendorComponent"]
    }, {
      path: '**',
      redirectTo: 'subledger',
      pathMatch: 'full'
    }];

    var IncomeTrackerRoutingModule = function IncomeTrackerRoutingModule() {
      _classCallCheck(this, IncomeTrackerRoutingModule);
    };

    IncomeTrackerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IncomeTrackerRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/income-tracker.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/ams/income-tracker/income-tracker.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsIncomeTrackerIncomeTrackerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9pbmNvbWUtdHJhY2tlci9pbmNvbWUtdHJhY2tlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/income-tracker.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/ams/income-tracker/income-tracker.component.ts ***!
    \****************************************************************/

  /*! exports provided: IncomeTrackerComponent */

  /***/
  function srcAppAmsIncomeTrackerIncomeTrackerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerComponent", function () {
      return IncomeTrackerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var IncomeTrackerComponent =
    /*#__PURE__*/
    function () {
      function IncomeTrackerComponent() {
        _classCallCheck(this, IncomeTrackerComponent);
      }

      _createClass(IncomeTrackerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IncomeTrackerComponent;
    }();

    IncomeTrackerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-income-tracker',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./income-tracker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/income-tracker/income-tracker.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./income-tracker.component.scss */
      "./src/app/ams/income-tracker/income-tracker.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], IncomeTrackerComponent);
    /***/
  },

  /***/
  "./src/app/ams/income-tracker/income-tracker.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/ams/income-tracker/income-tracker.module.ts ***!
    \*************************************************************/

  /*! exports provided: IncomeTrackerModule */

  /***/
  function srcAppAmsIncomeTrackerIncomeTrackerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IncomeTrackerModule", function () {
      return IncomeTrackerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _income_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./income-tracker-routing.module */
    "./src/app/ams/income-tracker/income-tracker-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _income_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./income-tracker.component */
    "./src/app/ams/income-tracker/income-tracker.component.ts");
    /* harmony import */


    var _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/income-sub-ledger/income-sub-ledger.component */
    "./src/app/ams/income-tracker/components/income-sub-ledger/income-sub-ledger.component.ts");
    /* harmony import */


    var _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/income-view-receipts/income-view-receipts.component */
    "./src/app/ams/income-tracker/components/income-view-receipts/income-view-receipts.component.ts");
    /* harmony import */


    var _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/income-view-credit/income-view-credit.component */
    "./src/app/ams/income-tracker/components/income-view-credit/income-view-credit.component.ts");
    /* harmony import */


    var _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/income-view-invoice/income-view-invoice.component */
    "./src/app/ams/income-tracker/components/income-view-invoice/income-view-invoice.component.ts");
    /* harmony import */


    var _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/income-view-invoice-history/income-view-invoice-history.component */
    "./src/app/ams/income-tracker/components/income-view-invoice-history/income-view-invoice-history.component.ts");
    /* harmony import */


    var _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/income-view-defaulters/income-view-defaulters.component */
    "./src/app/ams/income-tracker/components/income-view-defaulters/income-view-defaulters.component.ts");
    /* harmony import */


    var _components_income_post_invoice_income_post_invoice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/income-post-invoice/income-post-invoice.component */
    "./src/app/ams/income-tracker/components/income-post-invoice/income-post-invoice.component.ts");
    /* harmony import */


    var _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/income-post-multi-invoice/income-post-multi-invoice.component */
    "./src/app/ams/income-tracker/components/income-post-multi-invoice/income-post-multi-invoice.component.ts");
    /* harmony import */


    var _components_income_post_multi_invoice_fields_income_post_multi_invoice_fields_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component */
    "./src/app/ams/income-tracker/components/income-post-multi-invoice-fields/income-post-multi-invoice-fields.component.ts");
    /* harmony import */


    var _components_income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/income-post-collection/income-post-collection.component */
    "./src/app/ams/income-tracker/components/income-post-collection/income-post-collection.component.ts");
    /* harmony import */


    var _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/income-pay-invoice/income-pay-invoice.component */
    "./src/app/ams/income-tracker/components/income-pay-invoice/income-pay-invoice.component.ts");
    /* harmony import */


    var _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/income-tracker-ageing/income-tracker-ageing.component */
    "./src/app/ams/income-tracker/components/income-tracker-ageing/income-tracker-ageing.component.ts");
    /* harmony import */


    var _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/income-add-credit/income-add-credit.component */
    "./src/app/ams/income-tracker/components/income-add-credit/income-add-credit.component.ts");
    /* harmony import */


    var _components_income_invoice_reverse_income_invoice_reverse_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/income-invoice-reverse/income-invoice-reverse.component */
    "./src/app/ams/income-tracker/components/income-invoice-reverse/income-invoice-reverse.component.ts");
    /* harmony import */


    var _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/income-tracker-reports/income-tracker-reports.component */
    "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports.component.ts");
    /* harmony import */


    var _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/income-tracker-setup/income-tracker-setup.component */
    "./src/app/ams/income-tracker/components/income-tracker-setup/income-tracker-setup.component.ts");
    /* harmony import */


    var _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component */
    "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-customer/income-tracker-reports-customer.component.ts");
    /* harmony import */


    var _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component */
    "./src/app/ams/income-tracker/components/income-tracker-reports/income-tracker-reports-vendor/income-tracker-reports-vendor.component.ts");
    /* harmony import */


    var _components_income_tracker_filter_income_tracker_filter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/income-tracker-filter/income-tracker-filter.component */
    "./src/app/ams/income-tracker/components/income-tracker-filter/income-tracker-filter.component.ts");

    var IncomeTrackerModule = function IncomeTrackerModule() {
      _classCallCheck(this, IncomeTrackerModule);
    };

    IncomeTrackerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_income_tracker_component__WEBPACK_IMPORTED_MODULE_5__["IncomeTrackerComponent"], _components_income_sub_ledger_income_sub_ledger_component__WEBPACK_IMPORTED_MODULE_6__["IncomeSubLedgerComponent"], _components_income_view_receipts_income_view_receipts_component__WEBPACK_IMPORTED_MODULE_7__["IncomeViewReceiptsComponent"], _components_income_view_credit_income_view_credit_component__WEBPACK_IMPORTED_MODULE_8__["IncomeViewCreditComponent"], _components_income_view_invoice_income_view_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomeViewInvoiceComponent"], _components_income_view_invoice_history_income_view_invoice_history_component__WEBPACK_IMPORTED_MODULE_10__["IncomeViewInvoiceHistoryComponent"], _components_income_view_defaulters_income_view_defaulters_component__WEBPACK_IMPORTED_MODULE_11__["IncomeViewDefaultersComponent"], _components_income_post_invoice_income_post_invoice_component__WEBPACK_IMPORTED_MODULE_12__["IncomePostInvoiceComponent"], _components_income_post_multi_invoice_income_post_multi_invoice_component__WEBPACK_IMPORTED_MODULE_13__["IncomePostMultiInvoiceComponent"], _components_income_post_multi_invoice_fields_income_post_multi_invoice_fields_component__WEBPACK_IMPORTED_MODULE_14__["IncomePostMultiInvoiceFieldsComponent"], _components_income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_15__["IncomePostCollectionComponent"], _components_income_pay_invoice_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_16__["IncomePayInvoiceComponent"], _components_income_add_credit_income_add_credit_component__WEBPACK_IMPORTED_MODULE_18__["IncomeAddCreditComponent"], _components_income_invoice_reverse_income_invoice_reverse_component__WEBPACK_IMPORTED_MODULE_19__["IncomeInvoiceReverseComponent"], _components_income_tracker_ageing_income_tracker_ageing_component__WEBPACK_IMPORTED_MODULE_17__["IncomeTrackerAgeingComponent"], _components_income_tracker_reports_income_tracker_reports_component__WEBPACK_IMPORTED_MODULE_20__["IncomeTrackerReportsComponent"], _components_income_tracker_setup_income_tracker_setup_component__WEBPACK_IMPORTED_MODULE_21__["IncomeTrackerSetupComponent"], _components_income_tracker_reports_income_tracker_reports_customer_income_tracker_reports_customer_component__WEBPACK_IMPORTED_MODULE_22__["IncomeTrackerReportsCustomerComponent"], _components_income_tracker_reports_income_tracker_reports_vendor_income_tracker_reports_vendor_component__WEBPACK_IMPORTED_MODULE_23__["IncomeTrackerReportsVendorComponent"], _components_income_tracker_filter_income_tracker_filter_component__WEBPACK_IMPORTED_MODULE_24__["IncomeTrackerFilterComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _income_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["IncomeTrackerRoutingModule"]],
      bootstrap: [_income_tracker_component__WEBPACK_IMPORTED_MODULE_5__["IncomeTrackerComponent"]]
    })], IncomeTrackerModule);
    /***/
  }
}]);
//# sourceMappingURL=income-tracker-income-tracker-module-es5.js.map