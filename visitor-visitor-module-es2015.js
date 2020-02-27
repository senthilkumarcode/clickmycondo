(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-visitor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"checkin-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditVisitor\">Check In Visitor</span>\n    \t\t\t\t<span *ngIf=\"isEditVisitor\">Edit Visitor</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/visitor/expected-visitor\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVisitorSubmitted && !isVisitorAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted && !isVisitorAdded\">\n\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\" *ngIf=\"!isCheckout()\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Count*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor In-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedDuration\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Pass Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Type*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\" *ngIf=\"isCheckout()\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorName\" [(ngModel)]=\"visitor.visitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Count*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorCount\" [(ngModel)]=\"visitor.visitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"phoneNo\" [(ngModel)]=\"visitor.visitorPhone\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor In-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.visitorInTime\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Out-time</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.visitorOutTime\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration*</label>\n\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedDuration\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Pass Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Type*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\" *ngIf=\"!isCheckout()\">Check In</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\" *ngIf=\"isCheckout()\">Check Out</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isVisitorAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isCheckout()\">Visitor Checked In successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isCheckout()\">Visitor Checked Out successfully!</h5>\n\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"checkedout-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card card-table\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Checked-in Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorName')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('visitorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorPhone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorInTime')\">In-time <span [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorOutTime')\">Out-time <span [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockUnitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('blockUnitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: visitorData ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.visitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.visitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorInTime}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorOutTime}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockNo}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockUnitNo}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckOutContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/visitor/edit-visitor/{{visitor.visitorId}}/checkout\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<img src=\"assets/images/checkout-icon.svg\" width=\"20\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ng-template #popAddCheckOutContent>\n\t\t\t\t      \t\t<div class=\"pop-desp\">\n\t\t\t\t      \t\t\t<h5>CheckOut</h5>\n\t\t\t\t      \t\t</div>\n\t\t\t\t      \t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"expected-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card card-table\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Expected Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorName')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('visitorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorPhone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorInTime')\">Expected In-time <span [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorOutTime')\">Expected Out-time <span [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockUnitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('blockUnitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: visitorData ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.expectedVisitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedVisitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(visitor.expectedVisitorInTime)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(visitor.expectedVisitorOutTime)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockNo}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockUnitNo}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/visitor/edit-visitor/{{visitor.expectedVisitorId}}/checkin\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<img src=\"assets/images/checkin-icon.svg\" width=\"20\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ng-template #popAddCheckInContent>\n\t\t\t\t      \t\t<div class=\"pop-desp\">\n\t\t\t\t      \t\t\t<h5>CheckIn</h5>\n\t\t\t\t      \t\t</div>\n\t\t\t\t      \t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  visitor-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"visitor-settings\">\n\t\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Settings</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Save the Settings</p>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t<form #visitorSettingsForm = \"ngForm\" name=\"visitorSettingsForm\" (ngSubmit)=\"submitVisitorSettingsForm(visitorSettingsForm)\"  novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t<li class=\"list-group-item p-0 no-border mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t      \t\t<div class=\"form-check medium float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t\t    id=\"sendNotification\" \n\t\t\t\t\t\t\t\t\t    name=\"sendNotification\" \n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"sendNotification\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"sendNotification\"></label>\n\t\t\t\t\t\t\t\t\t    <p>Send Mobile App notifications to resident of flat on vsisitors check-in</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t      \t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item p-0 no-border mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t      \t\t<div class=\"form-check medium float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t\t    id=\"captureVehiclesDetails\" \n\t\t\t\t\t\t\t\t\t    name=\"captureVehiclesDetails\" \n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"captureVehiclesDetails\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"captureVehiclesDetails\"></label>\n\t\t\t\t\t\t\t\t\t    <p>Capture complete vehicle details</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t      \t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-group-item p-0 no-border mb-3\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t      \t\t<div class=\"form-check medium float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" \n\t\t\t\t\t\t\t\t\t    id=\"sendSMS\" \n\t\t\t\t\t\t\t\t\t    name=\"sendSMS\" \n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"sendSMS\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label\" for=\"sendSMS\"></label>\n\t\t\t\t\t\t\t\t\t    <p>Send SMS to resident of flat on vsisitors check-in</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t      \t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn blue mr-2\">Save</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/visitor.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/visitor.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1jaGVja2luL3Zpc2l0b3ItY2hlY2tpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VisitorCheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorCheckinComponent", function() { return VisitorCheckinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api/services/visitor.service */ "./src/app/api/services/visitor.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");









let VisitorCheckinComponent = class VisitorCheckinComponent {
    constructor(router, route, userService, apartmentService, visitorService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditVisitor = false;
        this.isVisitorSubmitted = false;
        this.isVisitorAdded = false;
        this.isError = false;
        this.errorMessage = "";
        this.visitTypeId = "";
        this.isExpectedVisitor = false;
        this.visitorStatus = "";
    }
    isCheckout() {
        return this.visitorStatus == 'checkout' ? true : false;
    }
    submitAddVisitorForm(form) {
        this.isVisitorSubmitted = true;
        this.isError = false;
        if (!this.isEditVisitor) {
            let expectedVisitorDetails = {
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "visitorName": this.visitor.expectedVisitorName,
                "visitorCount": this.visitor.expectedVisitorCount,
                "visitorPhone": this.visitor.expectedVisitorPhone,
                "passNumber": this.visitor.passNumber,
                "visitorInTime": this.visitor.expectedVisitorInTime,
                "visitorOutTime": this.visitor.expectedVisitorOutTime,
                "expectedDuration": this.visitor.expectedDuration,
                "meetingPersonId": 1,
                "visitTypeId": parseInt(this.visitTypeId),
                "visitorsOrg": "string",
                "entryGateId": null,
                "exitGateId": null,
                "purpose": "string",
                "enteredBy": parseInt(this.cookieService.get('userId')),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-18T17:08:51.188Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-18T17:08:51.188Z"
            };
            this.visitorService.addVisitor(expectedVisitorDetails).subscribe((res) => {
                if (res.message) {
                    this.isVisitorAdded = true;
                }
                else {
                    this.isVisitorSubmitted = false;
                    this.isVisitorAdded = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
                this.isVisitorSubmitted = false;
                this.isVisitorAdded = false;
                this.isError = true;
                this.errorMessage = error;
            });
        }
        if (this.isEditVisitor) {
            if (!this.isCheckout()) {
                let visitorDetails = {
                    "apartmentUnitId": this.apartmentUnitId,
                    "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                    "visitorName": this.visitor.expectedVisitorName,
                    "visitorCount": this.visitor.expectedVisitorCount,
                    "visitorPhone": this.visitor.expectedVisitorPhone,
                    "visitorVehicleTypeId": 1,
                    "visitorVehicleNumber": "string",
                    "visitingPlaceId": 1,
                    "passNumber": this.visitor.passNumber,
                    "isCheckedIn": true,
                    "visitorInTime": this.visitor.expectedVisitorInTime,
                    "isCheckedOut": false,
                    "visitorOutTime": null,
                    "expectedDuration": this.visitor.expectedDuration,
                    "meetingPersonId": 1,
                    "meetingPersonName": "string",
                    "visitTypeId": parseInt(this.visitTypeId),
                    "visitorsOrg": "string",
                    "entryGateId": null,
                    "exitGateId": null,
                    "purpose": "string",
                    "enteredBy": parseInt(this.cookieService.get('userId')),
                    "isActive": true,
                    "insertedBy": parseInt(this.cookieService.get('userId')),
                    "insertedOn": "2019-11-18T17:08:51.188Z",
                    "updatedBy": 0,
                    "updatedOn": "2019-11-18T17:08:51.188Z"
                };
                this.visitorService.addVisitor(visitorDetails).subscribe((res) => {
                    if (res.message) {
                        this.isVisitorAdded = true;
                    }
                    else {
                        this.isVisitorSubmitted = false;
                        this.isVisitorAdded = false;
                        this.isError = true;
                        this.errorMessage = res.errorMessage;
                    }
                }, error => {
                    this.isVisitorSubmitted = false;
                    this.isVisitorAdded = false;
                    this.isError = true;
                    this.errorMessage = error;
                });
            }
            else {
                let visitorDetails = {
                    "visitorId": parseInt(this.route.params['value'].id),
                    "apartmentUnitId": this.apartmentUnitId,
                    "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                    "visitorName": this.visitor.visitorName,
                    "visitorCount": this.visitor.visitorCount,
                    "visitorPhone": this.visitor.visitorPhone,
                    "visitorVehicleTypeId": 1,
                    "visitorVehicleNumber": "string",
                    "visitingPlaceId": 1,
                    "passNumber": this.visitor.passNumber,
                    "isCheckedIn": true,
                    "visitorInTime": this.visitor.visitorInTime,
                    "isCheckedOut": true,
                    "visitorOutTime": this.visitor.visitorOutTime,
                    "expectedDuration": this.visitor.expectedDuration,
                    "meetingPersonId": 1,
                    "meetingPersonName": "string",
                    "visitTypeId": parseInt(this.visitTypeId),
                    "visitorsOrg": "string",
                    "entryGateId": null,
                    "exitGateId": null,
                    "purpose": "string",
                    "enteredBy": parseInt(this.cookieService.get('userId')),
                    "isActive": true,
                    "insertedBy": 0,
                    "insertedOn": "2019-11-18T17:08:51.188Z",
                    "updatedBy": parseInt(this.cookieService.get('userId')),
                    "updatedOn": "2019-11-18T17:08:51.188Z"
                };
                this.visitorService.updateVisitor(visitorDetails).subscribe((res) => {
                    if (res.message) {
                        this.isVisitorAdded = true;
                    }
                    else {
                        this.isVisitorSubmitted = false;
                        this.isVisitorAdded = false;
                        this.isError = true;
                        this.errorMessage = res.errorMessage;
                    }
                }, error => {
                    this.isVisitorSubmitted = false;
                    this.isVisitorAdded = false;
                    this.isError = true;
                    this.errorMessage = error;
                });
            }
        }
    }
    ngOnInit() {
        this.visitor = {};
        if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
            this.visitorStatus = this.route.params['value'].type;
            if (this.route.params['value'].type == 'checkout') {
                this.visitorService.getVisitorById(this.route.params['value'].id).subscribe((res) => {
                    this.visitor = res[0];
                    this.visitTypeId = this.visitor.visitTypeId;
                }, error => {
                });
            }
            else {
                this.visitorService.getExpectedVisitorById(this.route.params['value'].id).subscribe((res) => {
                    this.visitor = res[0];
                    this.visitTypeId = this.visitor.visitTypeId;
                }, error => {
                });
            }
        }
        //visit type
        this.lookupService.getLookupValueByLookupTypeId(15).subscribe((res) => {
            this.visitByData = res;
        }, error => {
        });
        this.apartmentService.getApartmentBlockUnitByUserId(parseInt(this.cookieService.get('userId'))).subscribe((res) => {
            this.apartmentUnitId = res[0].apartmentBlockUnitId;
        }, error => {
        });
    }
};
VisitorCheckinComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"] },
    { type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
VisitorCheckinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-checkin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visitor-checkin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visitor-checkin.component.scss */ "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"],
        _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], VisitorCheckinComponent);



/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1jaGVja291dC92aXNpdG9yLWNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts ***!
  \***************************************************************************************/
/*! exports provided: VisitorCheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorCheckoutComponent", function() { return VisitorCheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/visitor.service */ "./src/app/api/services/visitor.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);









let VisitorCheckoutComponent = class VisitorCheckoutComponent {
    constructor(injector, apartmentService, visitorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
    getBlockUnit(id) {
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    getVisitorType() {
    }
    ngOnInit() {
        this.visitorService.getYetToCheckoutVisitorsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            //filter active true items
            this.visitorListData = res.filter(item => {
                return item.isActive && !item.isCheckedOut;
            });
            console.log(this.visitorListData);
            //get block and unit details
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.visitorListData, (item, index) => {
                this.apartmentService.getApartmentBlockUnitById(item.apartmentUnitId).subscribe((res) => {
                    this.visitorListData[index].blockNo = res[0].apartmentBlockNumber;
                    this.visitorListData[index].blockUnitNo = res[0].apartmentBlockUnitNumber;
                }, error => {
                });
            });
            this.totalItems = this.visitorListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isVisitorDataLoaded = true;
        });
        //get visit type
        this.lookupService.getLookupValueByLookupTypeId(15).subscribe((res) => {
            this.visitTypeData = res;
        }, error => {
        });
    }
};
VisitorCheckoutComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
VisitorCheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visitor-checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visitor-checkout.component.scss */ "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], VisitorCheckoutComponent);



/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1leHBlY3RlZC12aXNpdG9yL3Zpc2l0b3ItZXhwZWN0ZWQtdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VisitorExpectedVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorExpectedVisitorComponent", function() { return VisitorExpectedVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/visitor.service */ "./src/app/api/services/visitor.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










let VisitorExpectedVisitorComponent = class VisitorExpectedVisitorComponent {
    constructor(injector, apartmentService, visitorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
    getBlockUnit(id) {
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    getTimeFormat(dateTime) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(dateTime).format("YYYY-MM-DD HH:mm");
    }
    ngOnInit() {
        this.visitorService.getExpectedVisitorsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            //filter active true items
            this.visitorListData = res.filter(data => {
                return data.isActive;
            });
            //get block and unit details
            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.visitorListData, (item, index) => {
                this.apartmentService.getApartmentBlockUnitById(item.apartmentUnitId).subscribe((res) => {
                    this.visitorListData[index].blockNo = res[0].apartmentBlockNumber;
                    this.visitorListData[index].blockUnitNo = res[0].apartmentBlockUnitNumber;
                }, error => {
                });
            });
            this.totalItems = this.visitorListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isVisitorDataLoaded = true;
        });
        //get visit type
        this.lookupService.getLookupValueByLookupTypeId(15).subscribe((res) => {
            this.visitTypeData = res;
        }, error => {
        });
    }
};
VisitorExpectedVisitorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
VisitorExpectedVisitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-expected-visitor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visitor-expected-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visitor-expected-visitor.component.scss */ "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], VisitorExpectedVisitorComponent);



/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1yZXBvcnRzL3Zpc2l0b3ItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VisitorReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorReportsComponent", function() { return VisitorReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VisitorReportsComponent = class VisitorReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
VisitorReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visitor-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visitor-reports.component.scss */ "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VisitorReportsComponent);



/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1zZXR1cC92aXNpdG9yLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VisitorSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorSetupComponent", function() { return VisitorSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VisitorSetupComponent = class VisitorSetupComponent {
    constructor() {
        this.sendNotification = false;
        this.captureVehiclesDetails = false;
        this.sendSMS = false;
    }
    submitVisitorSettingsForm(form) {
    }
    ngOnInit() {
    }
};
VisitorSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-setup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visitor-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visitor-setup.component.scss */ "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VisitorSetupComponent);



/***/ }),

/***/ "./src/app/ams/visitor/visitor-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ams/visitor/visitor-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VisitorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorRoutingModule", function() { return VisitorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/visitor-setup/visitor-setup.component */ "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts");
/* harmony import */ var _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/visitor-checkin/visitor-checkin.component */ "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts");
/* harmony import */ var _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/visitor-checkout/visitor-checkout.component */ "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts");
/* harmony import */ var _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/visitor-expected-visitor/visitor-expected-visitor.component */ "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts");
/* harmony import */ var _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/visitor-reports/visitor-reports.component */ "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts");








const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_3__["VisitorSetupComponent"] },
    { path: 'checkin', component: _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__["VisitorCheckinComponent"] },
    { path: 'expected-visitor', component: _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_6__["VisitorExpectedVisitorComponent"] },
    { path: 'add-visitor', component: _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__["VisitorCheckinComponent"] },
    { path: 'edit-visitor/:id/:type', component: _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__["VisitorCheckinComponent"] },
    { path: 'checkout', component: _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_5__["VisitorCheckoutComponent"] },
    { path: 'reports', component: _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_7__["VisitorReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let VisitorRoutingModule = class VisitorRoutingModule {
};
VisitorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VisitorRoutingModule);



/***/ }),

/***/ "./src/app/ams/visitor/visitor.component.scss":
/*!****************************************************!*\
  !*** ./src/app/ams/visitor/visitor.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL3Zpc2l0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/visitor/visitor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/ams/visitor/visitor.component.ts ***!
  \**************************************************/
/*! exports provided: VisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorComponent", function() { return VisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VisitorComponent = class VisitorComponent {
    constructor() { }
    ngOnInit() {
    }
};
VisitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/visitor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./visitor.component.scss */ "./src/app/ams/visitor/visitor.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VisitorComponent);



/***/ }),

/***/ "./src/app/ams/visitor/visitor.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ams/visitor/visitor.module.ts ***!
  \***********************************************/
/*! exports provided: VisitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorModule", function() { return VisitorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor-routing.module */ "./src/app/ams/visitor/visitor-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _visitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor.component */ "./src/app/ams/visitor/visitor.component.ts");
/* harmony import */ var _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/visitor-setup/visitor-setup.component */ "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts");
/* harmony import */ var _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/visitor-checkin/visitor-checkin.component */ "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts");
/* harmony import */ var _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/visitor-checkout/visitor-checkout.component */ "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts");
/* harmony import */ var _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/visitor-expected-visitor/visitor-expected-visitor.component */ "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts");
/* harmony import */ var _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/visitor-reports/visitor-reports.component */ "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts");











let VisitorModule = class VisitorModule {
};
VisitorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _visitor_component__WEBPACK_IMPORTED_MODULE_5__["VisitorComponent"],
            _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_6__["VisitorSetupComponent"],
            _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_7__["VisitorCheckinComponent"],
            _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_8__["VisitorCheckoutComponent"],
            _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_9__["VisitorExpectedVisitorComponent"],
            _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_10__["VisitorReportsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__["VisitorRoutingModule"]
        ],
        bootstrap: [_visitor_component__WEBPACK_IMPORTED_MODULE_5__["VisitorComponent"]]
    })
], VisitorModule);



/***/ })

}]);
//# sourceMappingURL=visitor-visitor-module-es2015.js.map