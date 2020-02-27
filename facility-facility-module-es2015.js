(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facility-facility-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"facility-add-slot-wrapper\">\n\t\n\n\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t<app-loader *ngIf=\"!isSlotSubmitted\"></app-loader>\n\n\t<ng-container *ngIf=\"isSlotSubmitted\">\n\t\t\n\t\t<form #addFacilitySlotForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitAddFacilitySlotForm(addFacilitySlotForm)\"  novalidate>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>Begin Time*</label>\n                    <input class=\"form-control\" name=\"slotBeginTime\" [owlDateTime]=\"slotBeginTime\" [owlDateTimeTrigger]=\"slotBeginTime\" placeholder=\"Time\" [(ngModel)]=\"slot.slotBeginTime\" (dateTimeInput)=\"emitSlotTime()\" required>\n\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #slotBeginTime></owl-date-time>\n\t\t\t\t\t<div class=\"date-btn\">\n\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t\t\t\t</div>\n        \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>End Time*</label>\n                    <input class=\"form-control\" name=\"slotEndTime\" [min]=\"minEndTime\" [owlDateTime]=\"slotEndTime\" [owlDateTimeTrigger]=\"slotEndTime\" placeholder=\"Time\" [(ngModel)]=\"slot.slotEndTime\" (dateTimeInput)=\"emitSlotTime()\" required>\n\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #slotEndTime></owl-date-time>\n\t\t\t\t\t<div class=\"date-btn\">\n\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t\t\t\t\t</div>\n        \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>Cost (in rs)*</label>\n                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"cost\" [(ngModel)]=\"slot.cost\" required>\n        \t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\n\t\t\t\t<div class=\"input-box\">\n                    <label>Comments</label>\n                    <textarea placeholder=\"some text here\" name=\"comments\" [(ngModel)]=\"slot.comment\"></textarea>\n                </div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t<button class=\"btn blue mr-3\" [disabled]=\"addFacilitySlotForm.invalid\">Submit</button>\n\t\t\t\t<div class=\"btn trans-red\" (click)=\"showConfirmModal(slot)\">Delete</div>\n\t\t\t</div>\n\t\t\t\t\t\n\t\t</div>\n\n\t</form>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"facilitybooking-actions-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isBookingDataLoaded\"></app-loader>\n\n\t<div class=\"card card-table\" *ngIf=\"isBookingDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Bookings <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bookingData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/facility/create-booking\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Booking</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n  \t\t\t\n\t  \t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('firstName')\">Facility Name <span [ngClass]=\"getFieldOrderBy('firstName')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('slot')\">Slot<span [ngClass]=\"getFieldOrderBy('slot')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('date')\">Booked For <span [ngClass]=\"getFieldOrderBy('Date')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('userName')\">User Name<span [ngClass]=\"getFieldOrderBy('userName')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('cost')\">Cost <span [ngClass]=\"getFieldOrderBy('cost')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: bookingData ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      {{getFacilityBookingName(booking.apartmentFacilityId)}}\n\t\t\t\t      <span class=\"badge small text-capitalize alpha\" [ngClass]=\"getBookingStatus(booking.facilityBookingStatusId)\">{{getBookingStatus(booking.facilityBookingStatusId)}}</span>\n\t\t\t\t  \t  </td>\n\t\t\t\t      <td class=\"grey\">{{getFacilityBookingSlot(booking.slotId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBookedDate(booking.bookedForDate)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getUserName(booking.neededUserId)}}</td>\n\t\t\t\t      <td class=\"grey\">\n\t\t\t\t      \t<span *ngIf=\"booking.amount>0\">{{booking.amount}}</span>\n\t\t\t\t      \t<span *ngIf=\"booking.amount==0\">Free</span>\n\t\t\t\t      </td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\"\n\t\t\t\t      \trouterLink=\"/ams/facility/edit-booking/{{booking.apartmentFacilityBookingId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\n  \t\t\t</table>\n\n  \t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-reports/facility-reports.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-reports/facility-reports.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  facility-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"facility-settings-wrapper\">\n\n\t<app-loader *ngIf=\"!isFacilityCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes big\" *ngIf=\"isFacilityCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Facilities</h4>\n\t\t<ng-container *ngFor=\"let item of facilityCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/facility/view/{{item.apartmentFacilityId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateFacilityCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.facilityName}}</h6>\n\t\t\t\t\t\t<p *ngIf=\"item.amount>0\">{{item.amount}}rs/- per {{getRateBase(item.rateBaseId)}}</p>\n\t\t\t\t\t\t<p *ngIf=\"item.amount==0\">Free</p>\n\t\t\t\t\t\t<div class=\"bottom\">\n\t\t\t\t\t\t\t<p>{{getSlots(item.apartmentFacilitySlot).length}} Slot(s)</p>\n\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t<a class=\"btn sf trans-white hover-green\" (click)=\"addNewSlot(item)\">\n\t\t\t\t    \t\t\t\t<i-feather class=\"icon sm plus\" name=\"plus\"></i-feather>\n\t\t\t\t    \t\t\t\t<span>Add Slot</span>\n\t\t\t\t    \t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewFacilityCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Facility</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-20\" *ngIf=\"isFacilityCategoryNew || isFacilityCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isFacilityCategoryNew\">Add Facility</h6>\n    \t\t\t<h6 *ngIf=\"!isFacilityCategoryNew\">Edit Facility</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\n\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\t\t\t\n\t\t\t\t\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\n\t\t\t\t\t<li class=\"list-group-item\" [ngClass]=\"isSlotNew ? 'collapsed' : ''\" data-toggle=\"collapse\" data-target=\"#facilityCollapse\" aria-expanded=\"true\" aria-controls=\"facilityCollapseOne\">Facility Info</li>\n\t\t\t\t\t<div id=\"facilityCollapse\" class=\"collapse\" [ngClass]=\"isSlotNew ? '' : 'show'\" aria-labelledby=\"facilityCollapseOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isCategoryError\" ></app-alert-message>\n\n\t\t\t\t\t\t\t<form #facilitySettingsForm = \"ngForm\" name=\"visitorSettingsForm\" (ngSubmit)=\"submitFacilitySettingsForm(facilitySettingsForm)\"  novalidate>\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Facility Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"staffCategory\" [(ngModel)]=\"facility.facilityName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Approval Required* </label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"approvalType\" id=\"Yes\" [(ngModel)]=\"facility.approvalRequired\"  [value]=\"true\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"approvalType\" id=\"No\" [(ngModel)]=\"facility.approvalRequired\" [value]=\"false\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"No\">No</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Rate Type*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"faclityRateBaseId\" id=\"hourType\" [(ngModel)]=\"facility.rateBaseId\"  value=\"138\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"hourType\">Hour</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"faclityRateBaseId\" id=\"dayType\" [(ngModel)]=\"facility.rateBaseId\" value=\"139\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"dayType\">Day</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Service Type*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"faclityTypeId\" id=\"paidType\" [(ngModel)]=\"facility.facilityTypeId\"  value=\"184\" type=\"radio\"required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"paidType\">Paid</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"faclityTypeId\" id=\"freeType\" [(ngModel)]=\"facility.facilityTypeId\" value=\"185\" type=\"radio\"required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"freeType\">Free</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Cost (in rs)* {{facility.amount}}</label>\n\t\t\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"amount\" [(ngModel)]=\"facility.amount\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Deposit (in rs)*</label>\n\t\t\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"deposit\" [(ngModel)]=\"facility.cautionDeposit\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Auto Cancel (in days)*</label>\n\t\t\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"autoCancelDays\" [(ngModel)]=\"facility.autoCancelDays\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Min Hours Booking*</label>\n\t\t\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter value\" name=\"minHoursBooking\" [(ngModel)]=\"facility.minHoursBooking\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Min Time Limit*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"minTimeLimit\" [owlDateTime]=\"minTimeLimit\" [owlDateTimeTrigger]=\"minTimeLimit\" placeholder=\"Time\" [(ngModel)]=\"facility.minTimeLimit\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #minTimeLimit></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Max Time Limit*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"maxTimeLimit\" [owlDateTime]=\"maxTimeLimit\" [owlDateTimeTrigger]=\"maxTimeLimit\" placeholder=\"Time\" [(ngModel)]=\"facility.maxTimeLimit\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #maxTimeLimit></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Description</label>\n\t\t\t\t\t                    <quill-editor\n\t\t\t\t\t\t\t\t\t\t\tclass=\"quill-editor\"\n\t\t\t\t\t\t\t\t\t\t    name=\"description\"\n\t\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"facility.description\"\n\t\t\t\t\t\t\t\t\t\t    [placeholder]=\"editorPlacehorder\"\n\t\t\t\t\t\t\t\t\t\t    (onContentChanged)=\"onContentChanged($event)\">\n\t\t\t\t\t\t\t\t\t\t</quill-editor>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"facilitySettingsForm.invalid\">Submit</button>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\n\t\t\t\t\t\t</form>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngIf=\"!isFacilityCategoryNew\">\n\n\t\t\t\t\t\t<ng-container  *ngFor=\"let slot of getSlots(facility.apartmentFacilitySlot); let i = index\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" attr.data-target=\"#slotCollapse{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Collapse{{i}}\">\n\t\t\t\t\t\t\t<span class=\"float-left\">Slot{{i+1}}</span>\n\t\t\t\t\t\t\t<span class=\"float-left badge time ml-3 mt-2\">{{getSlotTime(slot.slotBeginTime)}} - {{getSlotTime(slot.slotEndTime)}}</span>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<div id=\"slotCollapse{{i}}\" class=\"collapse\" attr.aria-labelledby=\"Collapse{{i}}\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<app-add-facility-slot [slot]=\"slot\" [facilityId]=\"facility.apartmentFacilityId\" type=\"edit\" (facilityParams)=\"getFacilityParams($event)\"></app-add-facility-slot>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngIf=\"facilitySlotLength == 0\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" [ngClass]=\"facilitySlotLength == 0 ? 'no-drop' : ''\" data-toggle=\"collapse\" data-target=\"#facilityNewCollapse\" aria-expanded=\"true\" aria-controls=\"facilityCollapseNewOne\">No Slots Available</li>\n\t\t\t\t\t\t<div id=\"facilityNewCollapse\" class=\"collapse\" attr.aria-labelledby=\"facilityCollapseNewOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\n\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t<ng-container *ngIf=\"isSlotNew\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#facilitySlotNew\" aria-expanded=\"true\" aria-controls=\"facilityNewSlot\">New Slot</li>\n\t\t\t\t\t\t<div id=\"facilitySlotNew\" class=\"collapse show\" aria-labelledby=\"facilityNewSlot\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<app-add-facility-slot [slot]=\"facility\" [facilityId]=\"facility.apartmentFacilityId\" type=\"new\" (facilityParams)=\"getFacilityParams($event)\"></app-add-facility-slot>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</ul>\n\n\n\t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/facility.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/facility.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2FkZC1mYWNpbGl0eS1zbG90L2FkZC1mYWNpbGl0eS1zbG90LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddFacilitySlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFacilitySlotComponent", function() { return AddFacilitySlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/facility.service */ "./src/app/api/services/facility.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let AddFacilitySlotComponent = class AddFacilitySlotComponent {
    constructor(injector, dialog, facilityService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.facilityService = facilityService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.alertMessage = "";
        this.isError = false;
        this.isSlotSubmitted = true;
        this.facilityParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    submitAddFacilitySlotForm(form) {
        this.isSlotSubmitted = false;
        if (this.type == 'new') {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentFacilityId": this.slot.apartmentFacilityId,
                "slotBeginTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime).format('HH:mm:ss'),
                "slotEndTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime).format('HH:mm:ss'),
                "cost": this.slot.cost,
                "comment": this.slot.comment,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-12-16T12:34:36.708Z",
                "updatedBy": 0,
                "updatedOn": "2019-12-16T12:34:36.709Z"
            };
            this.facilityService.addApartmentFacilitySlot(details).subscribe((res) => {
                if (res.message) {
                    this.facilityParams.emit(true);
                    this.isSlotSubmitted = true;
                    this.sharedService.setAlertMessage("Slot added successfully");
                }
            }, error => {
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "apartmentFacilitySlotId": this.slot.apartmentFacilitySlotId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentFacilityId": this.slot.apartmentFacilityId,
                "slotBeginTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime).format('HH:mm:ss'),
                "slotEndTime": moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime).format('HH:mm:ss'),
                "cost": this.slot.cost,
                "comment": this.slot.comment,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-12-16T12:34:36.708Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-12-16T12:34:36.709Z"
            };
            this.facilityService.updateApartmentFacilitySlot(details).subscribe((res) => {
                if (res.message) {
                    this.facilityParams.emit(true);
                    this.isSlotSubmitted = true;
                    this.sharedService.setAlertMessage("Slot updated successfully");
                }
            }, error => {
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    emitSlotTime() {
        this.minEndTime = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime, 'HH:mm:ss').toDate();
        var begin = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime);
        var end = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime);
        //this.slotTimeDiff = Math.abs(begin.diff(end, 'hours'));
        //this.slot.cost = this.slotCost*this.slotTimeDiff;
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    ngOnInit() {
        if (this.type != 'new') {
            this.slot.slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotBeginTime, 'HH:mm:ss').toDate();
            this.slot.slotEndTime = moment__WEBPACK_IMPORTED_MODULE_7__(this.slot.slotEndTime, 'HH:mm:ss').toDate();
            //this.slot.cost = this.slotCost;
        }
        else {
            this.slot.comment = "";
        }
        // delete slot
        this.sharedService.unitlistdeleteindexcast.subscribe(slot => {
            if (slot != null) {
                var params = {
                    apartmentFacilityBookingId: slot.apartmentFacilitySlotId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.facilityService.deleteApartmentFacilitySlot(params).subscribe((res) => {
                    this.facilityParams.emit(true);
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
AddFacilitySlotComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddFacilitySlotComponent.prototype, "slot", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddFacilitySlotComponent.prototype, "facilityId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddFacilitySlotComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AddFacilitySlotComponent.prototype, "facilityParams", void 0);
AddFacilitySlotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-facility-slot',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-facility-slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-facility-slot.component.scss */ "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], AddFacilitySlotComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LWJvb2tpbmctYWN0aW9ucy9mYWNpbGl0eS1ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: FacilityBookingActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityBookingActionsComponent", function() { return FacilityBookingActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/facility.service */ "./src/app/api/services/facility.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let FacilityBookingActionsComponent = class FacilityBookingActionsComponent {
    constructor(router, route, injector, userService, facilityService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.injector = injector;
        this.userService = userService;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isBookingDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.bookingData = "";
        this.staffData = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
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
    getFacilityBookingName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilityCategoryData, function (item) {
            if (item.apartmentFacilityId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].facilityName;
        }
    }
    getFacilityBookingSlot(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilitySlotData, function (item) {
            if (item.apartmentFacilitySlotId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            var beginTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotBeginTime, 'HH:mm:ss').toDate();
            var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_10__(beginTime).format('HH:mm A');
            var EndTime = moment__WEBPACK_IMPORTED_MODULE_10__(data[0].slotEndTime, 'HH:mm:ss').toDate();
            var slotEndTime = moment__WEBPACK_IMPORTED_MODULE_10__(EndTime).format('HH:mm A');
            return slotBeginTime + " - " + slotEndTime;
        }
    }
    getBookedDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
    }
    getUserName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.userListData, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].firstName;
        }
    }
    getBookingStatus(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    ngOnInit() {
        this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            console.log(this.facilityCategoryData);
        }, error => {
        });
        //status 
        this.lookupService.getLookupValueByLookupTypeId(40).subscribe((res) => {
            this.statusTypeData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        this.facilityService.getApartmentFacilitySlotsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.facilitySlotData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        this.userService.getAllUsersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.userListData = res.filter(data => {
                return data.isActive;
            });
        }, error => {
        });
        this.facilityService.getApartmentFacilityBookingsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            //filter active true items
            this.bookingListData = res.filter(data => {
                return data.isActive;
            });
            this.totalItems = this.bookingListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isBookingDataLoaded = true;
        }, error => {
        });
        // delete booking
        this.sharedService.unitlistdeleteindexcast.subscribe(index => {
            if (index != null) {
                var params = {
                    apartmentFacilityBookingId: this.bookingListData[index].apartmentFacilityBookingId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.isBookingDataLoaded = false;
                this.facilityService.deleteApartmentFacilityBooking(params).subscribe((res) => {
                    this.bookingListData.splice(index, 1);
                    this.totalItems = this.bookingListData.length;
                    this.isBookingDataLoaded = true;
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
FacilityBookingActionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
FacilityBookingActionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-booking-actions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facility-booking-actions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facility-booking-actions.component.scss */ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], FacilityBookingActionsComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-reports/facility-reports.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-reports/facility-reports.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LXJlcG9ydHMvZmFjaWxpdHktcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-reports/facility-reports.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FacilityReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityReportsComponent", function() { return FacilityReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FacilityReportsComponent = class FacilityReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
FacilityReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facility-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-reports/facility-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facility-reports.component.scss */ "./src/app/ams/facility/components/facility-reports/facility-reports.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FacilityReportsComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-setup/facility-setup.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-setup/facility-setup.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LXNldHVwL2ZhY2lsaXR5LXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-setup/facility-setup.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-setup/facility-setup.component.ts ***!
  \************************************************************************************/
/*! exports provided: FacilitySetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitySetupComponent", function() { return FacilitySetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/facility.service */ "./src/app/api/services/facility.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let FacilitySetupComponent = class FacilitySetupComponent {
    constructor(injector, dialog, facilityService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isFacilityCategoryLoaded = false;
        this.isEditFacilityCategory = false;
        this.isFacilityCategoryNew = false;
        this.isFacilityCategoryUpdate = false;
        this.isSlotNew = false;
        this.isCategoryError = false;
        this.alertMessage = "";
        this.facilityAmount = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    onContentChanged(event) {
        this.facility.description = event.html;
    }
    submitFacilitySettingsForm(form) {
        this.isFacilityCategoryLoaded = false;
        if (this.isFacilityCategoryNew) {
            let details = {
                "facilityName": this.facility.facilityName,
                "description": this.facility.description,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "rateBaseId": parseInt(this.facility.rateBaseId),
                "amount": this.facility.amount,
                "approvalRequired": this.facility.approvalRequired,
                "isApproved": true,
                "facilityTypeId": parseInt(this.faclityTypeId),
                "minHoursBooking": this.facility.minHoursBooking,
                "autoCancelDays": this.facility.autoCancelDays,
                "cautionDeposit": this.facility.cautionDeposit,
                "minTimeLimit": moment__WEBPACK_IMPORTED_MODULE_8__(this.facility.minTimeLimit).format('HH:mm:ss'),
                "maxTimeLimit": moment__WEBPACK_IMPORTED_MODULE_8__(this.facility.maxTimeLimit).format('HH:mm:ss'),
                "fileAttachmentId": null,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-12-15T08:45:26.010Z",
                "updatedBy": 0,
                "updatedOn": "2019-12-15T08:45:26.010Z",
                "apartmentFacilitySlot": null
            };
            this.facilityService.addApartmentFacility(details).subscribe((res) => {
                if (res.message) {
                    this.isFacilityCategoryLoaded = true;
                    this.sharedService.setAlertMessage("Facility added successfully");
                }
                else {
                    this.isFacilityCategoryLoaded = true;
                    this.isCategoryError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isFacilityCategoryLoaded = true;
                this.isCategoryError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "apartmentFacilityId": this.facility.apartmentFacilityId,
                "facilityName": this.facility.facilityName,
                "description": this.facility.description,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "rateBaseId": parseInt(this.facility.rateBaseId),
                "amount": this.facility.amount,
                "approvalRequired": this.facility.approvalRequired,
                "isApproved": true,
                "facilityTypeId": parseInt(this.facility.facilityTypeId),
                "minHoursBooking": this.facility.minHoursBooking,
                "autoCancelDays": this.facility.autoCancelDays,
                "cautionDeposit": this.facility.cautionDeposit,
                "minTimeLimit": moment__WEBPACK_IMPORTED_MODULE_8__(this.facility.minTimeLimit).format('HH:mm:ss'),
                "maxTimeLimit": moment__WEBPACK_IMPORTED_MODULE_8__(this.facility.maxTimeLimit).format('HH:mm:ss'),
                "fileAttachmentId": null,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-12-15T08:45:26.010Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-12-15T08:45:26.010Z",
                "apartmentFacilitySlot": null
            };
            this.facilityService.updateApartmentFacility(details).subscribe((res) => {
                if (res.message) {
                    this.isFacilityCategoryLoaded = true;
                    this.isFacilityCategoryLoaded = false;
                    this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                        this.facilityCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                        this.isFacilityCategoryLoaded = true;
                        this.sharedService.setAlertMessage("Facility updated successfully");
                        console.log(res);
                    }, error => {
                    });
                }
                else {
                    this.isFacilityCategoryLoaded = true;
                    this.isCategoryError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isFacilityCategoryLoaded = true;
                this.isCategoryError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    addNewFacilityCategory() {
        this.isFacilityCategoryNew = true;
        this.isSlotNew = false;
        this.facility = {};
    }
    addNewSlot(item) {
        this.isFacilityCategoryUpdate = true;
        this.isFacilityCategoryNew = false;
        this.isSlotNew = true;
        this.updatefacilityData(item);
    }
    updateFacilityCategory(item) {
        this.isFacilityCategoryUpdate = true;
        this.isFacilityCategoryNew = false;
        this.isSlotNew = false;
        this.updatefacilityData(item);
    }
    updatefacilityData(item) {
        this.facility = item;
        this.facility.rateBaseId = item.rateBaseId.toString();
        this.facility.facilityTypeId = item.facilityTypeId.toString();
        this.facility.minTimeLimit = moment__WEBPACK_IMPORTED_MODULE_8__(item.minTimeLimit, 'HH:mm:ss').toDate();
        this.facility.maxTimeLimit = moment__WEBPACK_IMPORTED_MODULE_8__(item.maxTimeLimit, 'HH:mm:ss').toDate();
        this.facilitySlotLength = item.apartmentFacilitySlot.length;
    }
    removeCategoryBox() {
        this.isFacilityCategoryNew = false;
        this.isFacilityCategoryUpdate = false;
        this.isCategoryError = false;
    }
    getRateBase(id) {
        if (id == 138) {
            return 'Hour';
        }
        else {
            return 'Day';
        }
    }
    getSlots(items) {
        var slots = items.filter(item => {
            return item.isActive;
        });
        return slots;
    }
    getSlotTime(time) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(time).format('HH:mm A');
    }
    getFacilityParams(event) {
        this.isFacilityCategoryLoaded = false;
        this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.isFacilityCategoryLoaded = true;
        }, error => {
        });
    }
    ngOnInit() {
        this.facility = {};
        this.facility.description = "";
        this.facility.rateBaseId = "";
        this.facility.facilityTypeId = "";
        this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.isFacilityCategoryLoaded = true;
        }, error => {
        });
    }
};
FacilitySetupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
FacilitySetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-setup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facility-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facility-setup.component.scss */ "./src/app/ams/facility/components/facility-setup/facility-setup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], FacilitySetupComponent);



/***/ }),

/***/ "./src/app/ams/facility/facility-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/ams/facility/facility-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: FacilityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityRoutingModule", function() { return FacilityRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/facility-reports/facility-reports.component */ "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts");
/* harmony import */ var _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/facility-setup/facility-setup.component */ "./src/app/ams/facility/components/facility-setup/facility-setup.component.ts");
/* harmony import */ var _components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/facility-create-booking/facility-create-booking.component */ "./src/app/ams/facility/components/facility-create-booking/facility-create-booking.component.ts");
/* harmony import */ var _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/facility-booking-actions/facility-booking-actions.component */ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts");
/* harmony import */ var _shared_components_full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/full-calendar/full-calendar.component */ "./src/app/shared/components/full-calendar/full-calendar.component.ts");








const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_4__["FacilitySetupComponent"] },
    { path: 'create-booking', component: _components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityCreateBookingComponent"] },
    { path: 'edit-booking/:id', component: _components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityCreateBookingComponent"] },
    { path: 'calendar', component: _shared_components_full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_7__["FullCalendarComponent"] },
    { path: 'booking-actions', component: _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_6__["FacilityBookingActionsComponent"] },
    { path: 'reports', component: _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__["FacilityReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let FacilityRoutingModule = class FacilityRoutingModule {
};
FacilityRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FacilityRoutingModule);



/***/ }),

/***/ "./src/app/ams/facility/facility.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ams/facility/facility.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9mYWNpbGl0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/facility/facility.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ams/facility/facility.component.ts ***!
  \****************************************************/
/*! exports provided: FacilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityComponent", function() { return FacilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FacilityComponent = class FacilityComponent {
    constructor() { }
    ngOnInit() {
    }
};
FacilityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./facility.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/facility.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./facility.component.scss */ "./src/app/ams/facility/facility.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FacilityComponent);



/***/ }),

/***/ "./src/app/ams/facility/facility.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ams/facility/facility.module.ts ***!
  \*************************************************/
/*! exports provided: FacilityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityModule", function() { return FacilityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _facility_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facility-routing.module */ "./src/app/ams/facility/facility-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _facility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facility.component */ "./src/app/ams/facility/facility.component.ts");
/* harmony import */ var _components_add_facility_slot_add_facility_slot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-facility-slot/add-facility-slot.component */ "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.ts");
/* harmony import */ var _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/facility-reports/facility-reports.component */ "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts");
/* harmony import */ var _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/facility-setup/facility-setup.component */ "./src/app/ams/facility/components/facility-setup/facility-setup.component.ts");
/* harmony import */ var _components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/facility-create-booking/facility-create-booking.component */ "./src/app/ams/facility/components/facility-create-booking/facility-create-booking.component.ts");
/* harmony import */ var _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/facility-booking-actions/facility-booking-actions.component */ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts");











let FacilityModule = class FacilityModule {
};
FacilityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__["FacilityReportsComponent"],
            _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_8__["FacilitySetupComponent"],
            _facility_component__WEBPACK_IMPORTED_MODULE_5__["FacilityComponent"],
            _components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_9__["FacilityCreateBookingComponent"],
            _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_10__["FacilityBookingActionsComponent"],
            _components_add_facility_slot_add_facility_slot_component__WEBPACK_IMPORTED_MODULE_6__["AddFacilitySlotComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _facility_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacilityRoutingModule"]
        ],
        bootstrap: [_facility_component__WEBPACK_IMPORTED_MODULE_5__["FacilityComponent"]]
    })
], FacilityModule);



/***/ })

}]);
//# sourceMappingURL=facility-facility-module-es2015.js.map