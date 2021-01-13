(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-facility-facility-create-booking-facility-create-booking-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"facility-view-calendar-wrapper\">\n    <div class=\"main\">\n        <app-loader *ngIf=\"!loadingData\"></app-loader>\n        <div class=\"bg-card shadow\" *ngIf=\"loadingData\">\n            <div class=\"text-right mb-4\" *ngIf=\"info && info.facilityId\">\n                <mat-icon [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n            </div>\n            <full-calendar [options]=\"calendarOptions\"></full-calendar>\n        </div>\n    </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.html":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.html ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"facility-create-booking-wrapper\">\n\t<div class=\"main\">\n\t\t<form #facilityBookingForm = \"ngForm\" name=\"facilityBookingForm\" novalidate>\n\t\t\t<!-- create,edit and view using Router -->\n\t\t\t<h4 class=\"mb-4\" *ngIf=\"!info.type\">\n\t\t\t\t<span *ngIf=\"urlType == 'create'\">Create Booking</span>\n\t\t\t\t<span *ngIf=\"urlType == 'edit'\">Edit Booking</span>\n\t\t\t\t<span *ngIf=\"urlType == 'view'\">View Booking</span>\n\t\t\t</h4>\n\t\t\t<condo-message class=\"mb-3\" *ngIf=\"message\"\n\t\t\t\t[appearance]=\"message.appearance\"\n\t\t\t\t[showIcon]=\"message.showIcon\"\n\t\t\t\t[type]=\"message.type\"\n\t\t\t\t[@shake]=\"message.shake\">\n\t\t\t\t{{message.content}}\n\t\t\t</condo-message>\n\t\t\t<div class=\"bg-card shadow\">\n\t\t\t\t<!--Create,edit and view using popup -->\n\t\t\t\t<div class=\"d-flex mb-4\" *ngIf=\"info.type\">\n\t\t\t\t\t<h4>\n\t\t\t\t\t\t<span *ngIf=\"urlType == 'create'\">Create Booking</span>\n\t\t\t\t\t\t<span *ngIf=\"urlType == 'view'\">View Booking</span>\n\t\t\t\t\t</h4>\n\t\t\t\t\t<mat-icon class=\"ml-auto\" *ngIf=\"info.type\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<!-- Facility Details -->\n\t\t\t\t<div class=\"row text-center\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"input-box radio-box mb-0\">\n\t\t\t\t\t\t\t<label>Booking For </label>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input  name=\"isBookingforGuest\" id=\"Yes\" [(ngModel)]=\"booking.isBookingforGuest\" (click)=\"bookedForChange()\" [value]=\"true\" type=\"radio\"\n\t\t\t\t\t\t\t\t[disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"Yes\">Guest</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<input  name=\"isBookingforGuest\" id=\"No\" [(ngModel)]=\"booking.isBookingforGuest\" (click)=\"bookedForChange()\" [value]=\"false\" type=\"radio\"\n\t\t\t\t\t\t\t\t[disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"No\">User</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<h6 class=\"mb-4\">Facility Details</h6>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\tlabelText=\"Facility Name\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Select Facility Name\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldList]=\"facilityCatList\"\n\t\t\t\t\t\t\tfieldValue=\"facilityName\"\n\t\t\t\t\t\t\t[fieldModel]=\"booking.apartmentFacilityId\"\n\t\t\t\t\t\t\tfieldId=\"apartmentFacilityId\"\n\t\t\t\t\t\t\t[isDisabled]=\"isDisable()\"\n\t\t\t\t\t\t\t(fieldParams)=\"setFacility($event)\" \n\t\t\t\t\t\t  ></condo-select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<a *ngIf=\"booking.apartmentFacilityId && !info.type\" class=\"float-right\"  href=\"javascript:void(0)\" (click)=\"viewBookingDetails()\">View Booking Details</a>\n\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\tlabelText=\"Select Date\"\n\t\t\t\t\t\t\tfieldName=\"eventDateTo\"\n\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldModel]=\"booking.bookedForDate\"\n\t\t\t\t\t\t\t[min]=\"advanceBookingDate\"\n\t\t\t\t\t\t\t[isDisabled]=\"isDisable()\"\n\t\t\t\t\t\t\t(fieldParams)=\"setBookedForDate($event)\">\n\t\t\t\t\t\t</app-datepicker>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"booking.apartmentFacilityId && facilitySlotData?.length > 0\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Select Slot<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<select name=\"slotId\" id=\"slotId\" class=\"form-control\" [(ngModel)]=\"booking.slotId\" (ngModelChange)=\"selectSlot()\" [disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t\t\t<option [ngValue]=\"null\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of facilitySlotData\" [ngValue]=\"item.apartmentFacilitySlotId\">\n\t\t\t\t\t\t\t\t{{getSlotTime(item.slotBeginTime)}} - {{getSlotTime(item.slotEndTime)}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"booking.apartmentFacilityId && facilitySlotData?.length == 0 && booking.rateBaseId == 138\"> \n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>From Time<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input  class=\"form-control\" name=\"bookedFromTime\" [owlDateTime]=\"bookedFromTime\" [owlDateTimeTrigger]=\"bookedFromTime\" placeholder=\"Time\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"booking.bookedFromTime\" (dateTimeInput)=\"setMinTime()\" [disabled]=\"isDisable()\" autocomplete=\"off\" required>\n\t\t\t\t\t\t\t<owl-date-time  [pickerType]=\"'timer'\" #bookedFromTime></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"bookedFromTime\">\n\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:clock\"></mat-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"booking.apartmentFacilityId && facilitySlotData?.length == 0 && booking.rateBaseId == 138\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>To Time<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input  class=\"form-control\" name=\"bookedToTime\" [owlDateTime]=\"bookedToTime\" [owlDateTimeTrigger]=\"bookedToTime\" placeholder=\"Time\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"booking.bookedToTime\" (dateTimeInput)=\"setMinTime()\" [disabled]=\"isDisable()\" autocomplete=\"off\" required>\n\t\t\t\t\t\t\t<owl-date-time  [pickerType]=\"'timer'\" #bookedToTime></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"bookedToTime\">\n\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:clock\"></mat-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<p class=\"error\" *ngIf=\"facilityBookingForm.controls.bookedToTime?.errors?.min\">Please Enter Min {{facilityBookingDetail.minHoursBooking}} Hours or Max {{facilityBookingDetail.minHoursBooking}} Hours</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Event Name<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input  type=\"text\"  class=\"form-control\" placeholder=\"Event Name\" name=\"eventName\" [(ngModel)]=\"booking.eventName\" [disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t\t<help-tooltip title=\"eventName\"></help-tooltip>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Payment Details -->\n\t\t\t<div class=\"bg-card shadow\" *ngIf=\"showBookingDetail()\">\n\t\t\t\t<h6 class=\"mb-4\">Booking Details</h6>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Security Amount ({{pesoValue}})</label>\n\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Security Amount\" name=\"securityDepositAmount\" [value]=\"booking.securityDepositAmount\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"facilityBookingDetail\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Booking Amount Per {{ booking.rateBaseId == 138 ? 'Hour' : 'Day'}} ({{pesoValue}})</label>\n\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Amount\" name=\"bookingAmoutPerRate\" [value]=\"facilityBookingDetail.amount\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Cost ({{pesoValue}})*</label>\n\t\t\t\t\t\t\t<input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Amount\" name=\"amount\" [value]=\"booking.amount\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\"> \n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Tax ({{taxPecentage}}%)</label>\n\t\t\t\t\t\t\t<input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Amount\" name=\"amount\" [value]=\"booking.tax\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Discount Amount ({{pesoValue}})</label>\n\t\t\t\t\t\t\t<input OnlyNumber=\"true\" (keyup)=\"calcDiscount()\" class=\"form-control\" placeholder=\"Discount\" name=\"discountAmt\" [(ngModel)]=\"booking.discount\" [disabled]=\"isDisable()\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<!-- Need to integrate -->\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Membership Discount ({{pesoValue}})</label>\n\t\t\t\t\t\t\t<input OnlyNumber=\"true\" (keyup)=\"calcDiscount()\" class=\"form-control\" placeholder=\"MemberShip Discount\"  [(ngModel)]=\"booking.membershipDiscountAmount\" name=\"memberDiscount\" [disabled]=\"isDisable()\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Final Booking Amount ({{pesoValue}})</label>\n\t\t\t\t\t\t\t<input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Total\" name=\"totalBillAmount\" [value]=\"booking.totalBillAmount\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Unit Details -->\n\t\t\t<div class=\"bg-card shadow\" *ngIf=\"isAdmin()\">\n\t\t\t\t<h6 class=\"mb-4\">Unit Resident Details</h6>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\tlabelText=\"Tower No\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Select Tower\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldList]=\"towerList\"\n\t\t\t\t\t\t\tfieldValue=\"block_Label\"\n\t\t\t\t\t\t\t[fieldModel]=\"booking.apartmentBlockId\"\n\t\t\t\t\t\t\tfieldId=\"block_Id\"\n\t\t\t\t\t\t\t[isDisabled]=\"isDisable()\"\n\t\t\t\t\t\t\t(fieldParams)=\"setSelectedBlock($event)\" \n\t\t\t\t\t\t></condo-select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"booking.apartmentBlockId\">\n\t\t\t\t\t\t  <condo-select \n\t\t\t\t\t\t\tlabelText=\"Unit No\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Select Unit\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldList]=\"unitList\"\n\t\t\t\t\t\t\tfieldValue=\"bu_Label\"\n\t\t\t\t\t\t\t[fieldModel]=\"booking.apartmentBlockUnitId\"\n\t\t\t\t\t\t\tfieldId=\"buId\"\n\t\t\t\t\t\t\t[isDisabled]=\"isDisable()\"\n\t\t\t\t\t\t\t(fieldParams)=\"setSelectedBlockUnit($event)\" \n\t\t\t\t\t\t></condo-select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"booking.apartmentBlockUnitId\">\n\t\t\t\t\t  <div class=\"input-box\">\n\t\t\t\t\t\t<label>Primary Name</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Primary Name\" name=\"primaryName\" [value]=\"primaryName\" readonly>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- Guest Details -->\n\t\t\t<div class=\"bg-card shadow\" *ngIf=\"booking.isBookingforGuest\">\n\t\t\t\t<h6 class=\"mb-4\">Guest Details</h6>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Guest Name <span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input  type=\"text\"  class=\"form-control\" placeholder=\"Guest Name\" name=\"guestName\" [(ngModel)]=\"booking.guestName\" [disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t\t<help-tooltip title=\"guestName\"></help-tooltip>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Guest Phone <span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Guest Phone\" name=\"guestPhone\" [(ngModel)]=\"booking.guestPhone\" [disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Relatioship To Guest <span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input  type=\"text\"  class=\"form-control\" placeholder=\"Relationship\" name=\"guestRelation\" [(ngModel)]=\"booking.guestRelation\" [disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>No Of Guest To Attend <span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"No Of Guest\" name=\"totalofguestsforevent\" [(ngModel)]=\"booking.totalofguestsforevent\" [disabled]=\"isDisable()\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- booked for, comment box and status -->\n\t\t\t<div class=\"bg-card shadow\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\" *ngIf=\"booking.apartmentBlockUnitId && booking.isBookingforGuest\">\n\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t<a *ngIf=\"urlType != 'view'\" class=\"ml-auto\" href=\"javascript:void(0)\" (click)=\"createVisitor()\">Create Visitor Pass</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\tlabelText=\"Visitor Pass\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Visitor Pass\"\n\t\t\t\t\t\t\t[fieldList]=\"visitorsList | orderBy : 'expectedVisitorName'\"\n\t\t\t\t\t\t\tfieldValue=\"customLabel\"\n\t\t\t\t\t\t\t[fieldModel]=\"booking.neededUserId\"\n\t\t\t\t\t\t\tfieldId=\"expectedVisitorId\"\n\t\t\t\t\t\t\ttoolTip=\"visitorPass\"\n\t\t\t\t\t\t\t(fieldParams)=\"setVisitor($event)\" \n\t\t\t\t\t\t></condo-select> \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isAdmin()\">\n\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\tlabelText=\"Status\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Select Status\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldList]=\"facilityStatus\"\n\t\t\t\t\t\t\tfieldValue=\"lookupValueName\"\n\t\t\t\t\t\t\t[fieldModel]=\"booking.facilityBookingStatusId\"\n\t\t\t\t\t\t\tfieldId=\"lookupValueId\"\n\t\t\t\t\t\t\t[isDisabled]=\"isDisable()\"\n\t\t\t\t\t\t\t(fieldParams)=\"setStatus($event)\" \n\t\t\t\t\t\t  ></condo-select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Comment</label>\n\t\t\t\t\t\t\t<textarea placeholder=\"Enter Comment\" name=\"comment\" [(ngModel)]=\"booking.comment\" [disabled]=\"isDisable()\"></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-12\" *ngIf=\"termsCondion\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t  <label>Terms and Condition</label>\n\t\t\t\t\t\t  <textarea name=\"terms\" [value]=\"termsCondion\" readonly></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t\t\t\t<button class=\"mr-2\" *ngIf=\"urlType == 'create'\" class=\"ml-2\" mat-button (click)=\"resetField()\">Clear</button>\n\t\t\t\t\t\t<submit-button [isSubmit]=\"isBookingSubmitted\"*ngIf=\"urlType=='create'\" (click)=\"createFacilityBooking()\">Create</submit-button>\n\t\t\t\t\t\t<button class=\"mr-2\" *ngIf=\"urlType == 'edit'\" class=\"ml-2\" mat-button (click)=\"back()\">Back</button>\n\t\t\t\t\t\t<submit-button [isSubmit]=\"isBookingSubmitted\"*ngIf=\"urlType=='edit'\" (click)=\"updateFacilityBooking()\">Update</submit-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.html":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.html ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"checkin-visitor-wrapper\">\n\t<div class=\"main\">\n\t\t<form #expectedVisitorForm=\"ngForm\">\n\t\t\t<div class=\"bg-card shadow mb-0\">\n\t\t\t\t<div class=\"d-flex mb-4\">\n\t\t\t\t\t<h4 class=\"mb-4\">Create Expected Visitor</h4>\n\t\t\t\t\t<mat-icon class=\"ml-auto\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n\t\t\t\t</div>\n\t\t\t\t<condo-message class=\"mb-3\" *ngIf=\"message\"\n\t\t\t\t\t[appearance]=\"message.appearance\"\n\t\t\t\t\t[showIcon]=\"message.showIcon\"\n\t\t\t\t\t[type]=\"message.type\"\n\t\t\t\t\t[@shake]=\"message.shake\">\n\t\t\t\t\t\t\t{{message.content}}\n\t\t\t\t</condo-message>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Expected Visitor Name<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Visitor Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Expected Visitor Count<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Visitor Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> \n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Expected Phone/Mobile No<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<ngx-intl-tel-input [inputId]=\"'userMobile'\"\n\t\t\t\t\t\t\t[preferredCountries]=\"preferredCountries\"\n\t\t\t\t\t\t\t[enableAutoCountrySelect]=\"true\" [enablePlaceholder]=\"true\"\n\t\t\t\t\t\t\t[searchCountryFlag]=\"true\"\n\t\t\t\t\t\t\t[searchCountryField]=\"[SearchCountryField.Iso2, SearchCountryField.Name]\"\n\t\t\t\t\t\t\t[selectFirstCountry]=\"false\"\n\t\t\t\t\t\t\t[selectedCountryISO]=\"selectedCountryISO\" [maxLength]=\"15\"\n\t\t\t\t\t\t\t[phoneValidation]=\"false\" [separateDialCode]=\"separateDialCode\"\n\t\t\t\t\t\t\t[(ngModel)]=\"visitor.expectedVisitorPhone\" name=\"phone\">\n\t\t\t\t\t\t</ngx-intl-tel-input>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\tlabelText=\"Expected Date/Time of Visit\"\n\t\t\t\t\t\t\tfieldName=\"visitorInTime\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\ttype=\"dateTime\"\n\t\t\t\t\t\t\t[fieldModel]=\"visitor.expectedVisitorInTime\"\n\t\t\t\t\t\t\t(fieldParams)=\"getExpectedVisitorInDate($event)\">\n\t\t\t\t\t\t</app-datepicker>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\tlabelText=\"Expected Out/Time of Visit\"\n\t\t\t\t\t\t\tfieldName=\"visitorOutTime\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\ttype=\"dateTime\"\n\t\t\t\t\t\t\t[fieldModel]=\"visitor.expectedVisitorOutTime\"\n\t\t\t\t\t\t\t(fieldParams)=\"getExpectedVisitorOutDate($event)\">\n\t\t\t\t\t\t</app-datepicker>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Expected Duration of Visit<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<input class=\"form-control\" placeholder=\"Duration Info\" name=\"durationInfo\" [value]=\"expectedDurationInfo\" [disabled]=\"true\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t<label>Expected Visit Category<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<select name=\"visitByCategory\" id=\"visitByCategory\" class=\"form-control\"[(ngModel)]=\"visitor.visitorCategoryId\" required>\n\t\t\t\t\t\t\t\t<option [ngValue]=\"null\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitCategoryList | orderBy : 'lookupValueName'\" [ngValue]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Reason for Visit<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t<textarea  type=\"text\" class=\"form-control purpose-box\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\" required></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12 float-right\">\n\t\t\t\t\t\t<submit-button (click)=\"createExpectedVisitor()\" [isSubmit]=\"isDataSubmitted\">Submit</submit-button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-facility-create-booking *ngIf=\"data.type=='facility-booking'\" [popUpInfo]=\"data.info\" (modalResult)=\"popUpResult($event)\"></app-facility-create-booking>\n<app-facility-calender *ngIf=\"data.type=='view-calendar-booking'\" [popUpInfo]=\"data.info\"></app-facility-calender>\n<app-facility-expected-visitor *ngIf=\"data.type=='create-visitor'\" [popUpInfo]=\"data.info\" (modalResult)=\"popUpResult($event)\"></app-facility-expected-visitor>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.html":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.html ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-facility-booking-list\">\n\t<div class=\"main\">\n\t\t<!-- Loader -->\n\t\t<app-loader *ngIf=\"!isBookingDataLoaded\"></app-loader>\n\t\t<!-- Table -->\n\t\t<condo-card *ngIf=\"isBookingDataLoaded\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>All Bookings</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto mr-3\">\n\t\t\t\t\t\t<app-table-search [input]=\"bookingSearch\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" routerLink=\"/user/facility/bookings/create-booking\">Create Booking</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid \n\t\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t[pageable]=\"true\" \n\t\t\t\t\t[filterable]=\"true\" \n\t\t\t\t\t[sortable]=\"true\" \n\t\t\t\t\t[source]=\"bookingListData\"\n\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t\t[enablehover]=\"false\" #datagrid>\n\t\t\t\t</jqxGrid> \n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LWNyZWF0ZS1ib29raW5nL2ZhY2lsaXR5LWNhbGVuZGVyL2ZhY2lsaXR5LWNhbGVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: FacilityCalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityCalenderComponent", function() { return FacilityCalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");





// import { CalendarOptions } from '@fullcalendar/angular';

let FacilityCalenderComponent = class FacilityCalenderComponent {
    // @Input('popUpInfo') info:any = {};
    // loadingData = false;
    // calendarOptions: CalendarOptions = {
    //   initialView: 'resourceTimelineDay',
    //   headerToolbar: {
    //     left: 'prev,next',
    //     center: 'title',
    //     right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
    //   },
    //   aspectRatio: 2,
    //   resourceAreaHeaderContent: 'Facility',
    //   selectable : true,
    //   select : this.addEvent.bind(this),
    //   eventClick: this.dateEventClick.bind(this),
    //   schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives",
    // };
    //timeZone:any;
    constructor(facilityService, sessionService, sharedService, dialog) {
        this.facilityService = facilityService;
        this.sessionService = sessionService;
        this.sharedService = sharedService;
        this.dialog = dialog;
    }
    // addEvent(calendarInfo) {
    //   if(!this.info.facilityId) {
    //     const dialogRef = this.dialog.open(FacilityModalComponent, {
    //       panelClass: 'material-dialog-big',
    //       height:'inherit',
    //       width:'auto',
    //       data: {
    //         type:'facility-booking',
    //         info: {
    //           type : 'create',
    //           dataFrom:'calendar',
    //           calendarData: calendarInfo
    //         }
    //       }
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //       if(result) {
    //         this.facilityBookingList()
    //       }
    //     });
    //   }
    // }
    // dateEventClick(info) {
    //   if(!this.info.facilityId) {
    //     let id = info.event.extendedProps.apartmentFacilityBookingId
    //     const dialogRef = this.dialog.open(FacilityModalComponent, {
    //       panelClass: 'material-dialog-big',
    //       height:'inherit',
    //       width:'auto',
    //       data: {
    //         type:'facility-booking',
    //         info: {
    //           type : 'view',
    //           dataFrom:'calendar',
    //           bookingId:id
    //         }
    //       }
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //       if(result) {
    //         this.facilityBookingList()
    //       }
    //     });
    //   }
    // }
    // facilityBookingList() {
    //   let bookingParams = {
    //     apartmentId: this.sessionService.apartmentId,
    //     facilityBookingStatusID: 188, //ApprovedId
    //   }
    //   this.facilityService.getApartmentFacilityBookingsByApartmentId(bookingParams).subscribe((res:any) => {
    //     if(res.length > 0) {
    //       if(this.info.facilityId) {  //popup
    //         for(let data of res) {
    //           if(this.info.facilityId == data.apartmentFacilityId) {
    //             data.resourceId = data.apartmentFacilityId;
    //             data.title = data.eventName;
    //             data.start =  `${moment(data.bookedForDate).format('YYYY-MM-DD')} ${data.bookedFromTime}`;
    //             data.end =  `${moment(data.bookedForDate).format('YYYY-MM-DD')} ${data.bookedToTime}`;
    //             data.color = 'red';
    //             break;
    //           } 
    //         }
    //       } else {                       //router
    //         res.forEach((data)=>{
    //           data.resourceId = data.apartmentFacilityId;
    //           data.title = data.eventName;
    //           data.start =  `${moment(data.bookedForDate).format('YYYY-MM-DD')} ${data.bookedFromTime}`;
    //           data.end =  `${moment(data.bookedForDate).format('YYYY-MM-DD')} ${data.bookedToTime}`;
    //           data.color = 'red';
    //         })
    //       }
    //       this.calendarOptions.events = res;
    //     }
    //     this.loadingData = true;
    //   })
    // }
    ngOnInit() {
        // this.sharedService.timezonecast.subscribe( timeZone => this.timeZone = timeZone )
        // //Facility List
        // let categoryParams = {
        //   apartmentId: this.sessionService.apartmentId
        // }
        // this.facilityService.getApartmentFacilitiesByApartmentId(categoryParams).subscribe((res:any) => {
        //   if(res.length > 0) {
        //     let rooms = [];
        //     if(this.info.facilityId) {  //popup
        //       for(let facility of res) {
        //         if(this.info.facilityId == facility.apartmentFacilityId) {
        //           rooms.push({id:facility.apartmentFacilityId,title:facility.facilityName});
        //           break;
        //         }
        //       }
        //     } else {                        //router
        //       res.forEach((data)=>{
        //         rooms.push({id:data.apartmentFacilityId,title:data.facilityName});
        //       })
        //     }
        //     this.calendarOptions.resources = rooms;
        //   }
        // })
        // this.facilityBookingList();
    }
};
FacilityCalenderComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_2__["FacilityService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
FacilityCalenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-calender',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-calender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-calender.component.scss */ "./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_2__["FacilityService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], FacilityCalenderComponent);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-create-booking-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: FacilityCreateBookingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityCreateBookingRoutingModule", function() { return FacilityCreateBookingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facility-create-booking/facility-create-booking.component */ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.ts");
/* harmony import */ var _user_facility_booking_list_user_facility_booking_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-facility-booking-list/user-facility-booking-list.component */ "./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.ts");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");






const routes = [
    { path: '', redirectTo: 'create-booking', pathMatch: 'full' },
    { path: 'create-booking', component: _facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_3__["FacilityCreateBookingComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'edit-booking/:id', component: _facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_3__["FacilityCreateBookingComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'view-booking/:id', component: _facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_3__["FacilityCreateBookingComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    // { path: 'view-facility-calendar', component: FacilityCalenderComponent, canActivate: [AuthGuard]},
    { path: 'all-bookings', component: _user_facility_booking_list_user_facility_booking_list_component__WEBPACK_IMPORTED_MODULE_4__["UserFacilityBookingListComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', redirectTo: 'create-booking', pathMatch: 'full' }
];
let FacilityCreateBookingRoutingModule = class FacilityCreateBookingRoutingModule {
};
FacilityCreateBookingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FacilityCreateBookingRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-create-booking.module.ts ***!
  \************************************************************************************************/
/*! exports provided: FacilityCreateBookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityCreateBookingModule", function() { return FacilityCreateBookingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _facility_create_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facility-create-booking-routing.module */ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking-routing.module.ts");
/* harmony import */ var _facility_calender_facility_calender_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./facility-calender/facility-calender.component */ "./src/app/modules/ams/facility/facility-create-booking/facility-calender/facility-calender.component.ts");
/* harmony import */ var _facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facility-create-booking/facility-create-booking.component */ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.ts");
/* harmony import */ var _facility_modal_facility_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facility-modal/facility-modal.component */ "./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.ts");
/* harmony import */ var _facility_expected_visitor_facility_expected_visitor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./facility-expected-visitor/facility-expected-visitor.component */ "./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.ts");
/* harmony import */ var _user_facility_booking_list_user_facility_booking_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-facility-booking-list/user-facility-booking-list.component */ "./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.ts");
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/ui/message/message.module */ "./src/app/modules/ui/message/message.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modules/ui/help-tooltip/help-tooltip.module */ "./src/app/modules/ui/help-tooltip/help-tooltip.module.ts");
/* harmony import */ var src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modules/ui/datepicker/datepicker.module */ "./src/app/modules/ui/datepicker/datepicker.module.ts");
















let FacilityCreateBookingModule = class FacilityCreateBookingModule {
};
FacilityCreateBookingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _facility_calender_facility_calender_component__WEBPACK_IMPORTED_MODULE_4__["FacilityCalenderComponent"],
            _facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_5__["FacilityCreateBookingComponent"],
            _facility_modal_facility_modal_component__WEBPACK_IMPORTED_MODULE_6__["FacilityModalComponent"],
            _facility_expected_visitor_facility_expected_visitor_component__WEBPACK_IMPORTED_MODULE_7__["FacilityExpectedVisitorComponent"],
            _user_facility_booking_list_user_facility_booking_list_component__WEBPACK_IMPORTED_MODULE_8__["UserFacilityBookingListComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_9__["NgxIntlTelInputModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_10__["SelectModule"],
            src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_11__["CondoMessageModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_13__["CondoCardModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_15__["DatepickerModule"].forRoot(),
            _facility_create_booking_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacilityCreateBookingRoutingModule"],
            src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_14__["HelpTooltipModule"]
        ]
    })
], FacilityCreateBookingModule);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.scss ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LWNyZWF0ZS1ib29raW5nL2ZhY2lsaXR5LWNyZWF0ZS1ib29raW5nL2ZhY2lsaXR5LWNyZWF0ZS1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: FacilityCreateBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityCreateBookingComponent", function() { return FacilityCreateBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/api/controllers/Visitor */ "./src/app/api/controllers/Visitor.ts");
/* harmony import */ var src_condo_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/@condo/animations */ "./src/@condo/animations/index.ts");
/* harmony import */ var _facility_modal_facility_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../facility-modal/facility-modal.component */ "./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.ts");
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
















let FacilityCreateBookingComponent = class FacilityCreateBookingComponent {
    constructor(router, route, userService, changeDetect, facilityService, lookupService, sharedService, apartmentService, sessionService, dialog, visitorService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.changeDetect = changeDetect;
        this.facilityService = facilityService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.apartmentService = apartmentService;
        this.sessionService = sessionService;
        this.dialog = dialog;
        this.visitorService = visitorService;
        this.info = {}; //value got from pop-up (edit mode,view mode and Calendar create Mode)
        this.modalResult = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.facilitySlotData = [];
        this.towerList = [];
        this.unitList = [];
        this.facilityStatus = [];
        this.facilityCatList = [];
        this.taxPecentage = 0;
        this.visitorsList = [];
        this.booking = {
            apartmentFacilityId: null,
            slotId: null,
            apartmentBlockId: null,
            apartmentBlockUnitId: null,
            facilityBookingStatusId: null,
            tax: null
        };
        this.primaryName = '';
        this.advanceBookingDate = moment__WEBPACK_IMPORTED_MODULE_10__();
        this.route.url.subscribe((data) => {
            let path = data[0].path;
            if (path == 'create-booking')
                this.urlType = 'create';
            else if (path == 'edit-booking')
                this.urlType = 'edit';
            else if (path == 'view-booking')
                this.urlType = 'view';
        });
    }
    resetField() {
        let radio = this.booking.isBookingforGuest;
        this.booking = {};
        this.facilityBookingForm.reset();
        this.booking.isBookingforGuest = radio;
        this.booking.bookedForDate = moment__WEBPACK_IMPORTED_MODULE_10__();
    }
    setBookedForDate(event) {
        this.booking.bookedForDate = event;
    }
    isAdmin() {
        return this.sessionService.isAdmin();
    }
    bookedForChange() {
        if (this.urlType != 'view' && !this.booking.isBookingforGuest) {
            this.booking.guestName = null;
            this.booking.guestPhone = null;
            this.booking.guestRelation = null;
            this.booking.totalofguestsforevent = null;
        }
    }
    isDisable() {
        return this.urlType == 'view' ? true : false;
    }
    getFacilityCategoryList() {
        let categoryParams = {
            apartmentId: this.sessionService.apartmentId
        };
        return this.facilityService.getApartmentFacilitiesByApartmentId(categoryParams);
    }
    getTower() {
        let tower = {
            apartmentId: this.sessionService.apartmentId
        };
        return this.apartmentService.getApartmentBlockAndBlockUnitByApartmentId(tower);
    }
    setFacility(event) {
        this.booking.apartmentFacilityId = event[0].apartmentFacilityId;
        if (event.length > 0)
            this.selectFacility('change');
        else {
            this.booking.slotId = '';
            this.booking.bookedFromTime = null;
            this.booking.bookedToTime = null;
            this.facilityBookingDetail = null;
            this.booking.securityDepositAmount = null;
            this.booking.rateBaseId = null;
            this.facilitySlotData = [];
            this.booking.totalBillAmount = null;
            this.booking.amount = null;
            this.booking.tax = null;
            this.termsCondion = '';
            this.booking.bookedForDate = null;
        }
    }
    selectFacility(event) {
        if (event) {
            this.booking.slotId = '';
            this.booking.bookedFromTime = null;
            this.booking.bookedToTime = null;
            this.booking.bookedForDate = null;
        }
        let selectedFacility = this.facilityCatList.filter(item => {
            if (item.apartmentFacilityId === parseInt(this.booking.apartmentFacilityId))
                return item;
        });
        if (selectedFacility.length > 0) {
            this.facilityBookingDetail = selectedFacility[0];
            let advanceBookingDays = selectedFacility[0].advanceBookingindays;
            if (advanceBookingDays) {
                this.advanceBookingDate = moment__WEBPACK_IMPORTED_MODULE_10__().add(advanceBookingDays, 'days');
                this.booking.bookedForDate = this.advanceBookingDate;
            }
            this.booking.securityDepositAmount = this.facilityBookingDetail.cautionDeposit;
            this.booking.rateBaseId = this.facilityBookingDetail.rateBaseId;
            if (this.facilityBookingDetail.apartmentFacilitySlot.length > 0)
                this.facilitySlotData = selectedFacility[0].apartmentFacilitySlot;
            else {
                this.facilitySlotData = [];
                if (event) {
                    this.booking.totalBillAmount = parseInt(this.facilityBookingDetail.amount);
                }
                this.booking.amount = parseInt(this.facilityBookingDetail.amount);
                this.booking.tax = parseInt((this.booking.amount * (this.taxPecentage / 100)).toFixed(2));
            }
            if (this.facilityBookingDetail.description) {
                this.termsCondion = this.facilityBookingDetail.description.replace(/<[^>]*>/g, '');
            }
        }
    }
    viewBookingDetails() {
        this.dialog.open(_facility_modal_facility_modal_component__WEBPACK_IMPORTED_MODULE_14__["FacilityModalComponent"], {
            panelClass: 'material-dialog-big',
            data: {
                type: 'view-calendar-booking',
                info: {
                    facilityId: this.booking.apartmentFacilityId
                }
            }
        });
    }
    showBookingDetail() {
        if (this.booking.apartmentFacilityId)
            return this.booking.apartmentFacilityId && this.booking.bookedForDate && ((this.facilityBookingDetail && this.facilityBookingDetail.facilityTypeId == 184 && this.booking.slotId) || (this.booking.bookedFromTime && this.booking.bookedToTime && this.booking.amount));
        else
            return false;
    }
    getSlotTime(time) {
        let date = moment__WEBPACK_IMPORTED_MODULE_10__(time, 'HH:mm:ss').toDate();
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format('hh:mm A');
    }
    selectSlot() {
        this.facilitySlotData.forEach((data) => {
            if (this.booking.slotId == data.apartmentFacilitySlotId) {
                this.booking.amount = parseInt(data.cost);
                this.booking.tax = parseInt((this.booking.amount * (this.taxPecentage / 100)).toFixed(2));
                this.booking.totalBillAmount = parseInt((this.booking.amount + this.booking.tax).toFixed(2));
                this.booking.discount = 0;
                this.booking.membershipDiscountAmount = 0;
            }
        });
    }
    setMinTime() {
        let fromTime = this.booking.bookedFromTime;
        let toTime = this.booking.bookedToTime;
        let difference;
        if (fromTime && toTime) {
            difference = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](moment__WEBPACK_IMPORTED_MODULE_10__(toTime).diff(moment__WEBPACK_IMPORTED_MODULE_10__(fromTime)));
            let diffHours = difference.hours();
            let diffMinutes = difference.minutes();
            let totalDiffHrs = diffHours + (diffMinutes / 60);
            if (totalDiffHrs >= this.facilityBookingDetail.minHoursBooking) {
                let cost = ((this.facilityBookingDetail.amount / (this.facilityBookingDetail.minHoursBooking * 60)) * ((diffHours * 60) + (diffMinutes)));
                this.booking.amount = parseInt(cost.toFixed(2));
                this.booking.tax = parseInt((this.booking.amount * (this.taxPecentage / 100)).toFixed(2));
                this.booking.totalBillAmount = parseInt((this.booking.amount + this.booking.tax).toFixed(2));
                // this.facilityBookingForm.controls.bookedToTime.setErrors(null);
            }
            else {
                //this.facilityBookingForm.controls.bookedToTime.setErrors({min:true});
                this.booking.amount = 0;
                this.booking.totalBillAmount = 0;
                this.booking.tax = 0;
            }
        }
    }
    calcDiscount() {
        let discount, memberShipDis, amount, totalDiscount;
        discount = parseInt(this.booking.discount ? this.booking.discount : 0);
        memberShipDis = parseInt(this.booking.membershipDiscountAmount ? this.booking.membershipDiscountAmount : 0);
        amount = parseInt(this.booking.amount ? this.booking.amount : 0);
        totalDiscount = parseInt(discount + memberShipDis);
        if (amount >= totalDiscount) {
            this.booking.totalBillAmount = parseInt(((amount + this.booking.tax) - totalDiscount).toFixed(2));
            //this.facilityBookingForm.controls.discountAmt.setErrors({min:false})
        }
        else {
            //this.facilityBookingForm.controls.discountAmt.setErrors({min:true})
            this.booking.totalBillAmount = 0;
        }
    }
    setSelectedBlock(event) {
        this.booking.apartmentBlockId = event[0].block_Id;
        this.getUnits('change');
    }
    getUnits(type) {
        if (type == 'change') {
            this.booking.apartmentBlockUnitId = null;
            this.booking.apartmentBlockUnitUserId = null;
        }
        for (let data of this.towerList) {
            if (this.booking.apartmentBlockId == data.block_Id) {
                this.unitList = data.blockUnit;
                if (type == 'edit') {
                    this.getVisitorsList();
                    this.getPrimaryName();
                }
                break;
            }
        }
    }
    setSelectedBlockUnit(event) {
        this.booking.apartmentBlockUnitId = event[0].buId;
        this.booking.neededUserId = null;
        this.visitorsList = [];
        this.getVisitorsList();
        this.getPrimaryName();
    }
    getPrimaryName() {
        for (let data of this.unitList) {
            if (this.booking.apartmentBlockUnitId == data.buId) {
                this.primaryName = data.pc_Label;
                this.booking.apartmentBlockUnitUserId = data.blockUnitUserId;
                break;
            }
        }
    }
    createVisitor() {
        const dialogRef = this.dialog.open(_facility_modal_facility_modal_component__WEBPACK_IMPORTED_MODULE_14__["FacilityModalComponent"], {
            panelClass: 'material-dialog-big',
            data: {
                type: 'create-visitor',
                info: {
                    apartmentBlockUnitId: this.booking.apartmentBlockUnitId,
                    location: this.selectedCountryISO
                }
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result && result.message && result.id) {
                let id = result.id.split('#');
                this.booking.neededUserId = Number(id[0]);
                this.getVisitorsList();
            }
        });
    }
    getVisitorsList() {
        let params = {
            apartmentUnitId: this.booking.apartmentBlockUnitId
        };
        this.visitorService.getExpectedVisitorsByApartmentUnitId(params).subscribe((res) => {
            if (res.length > 0) {
                this.visitorsList = res;
                this.visitorsList.forEach((ele) => {
                    ele.customLabel = `${ele.expectedVisitorName} ${ele.block_Unit} ${ele.expectedVisitorInTime} ${ele.expectedVisitorOutTime}`;
                });
            }
        });
    }
    setVisitor(event) {
        this.booking.neededUserId = event[0].expectedVisitorId;
    }
    routerConfig() {
        if (this.isAdmin()) {
            if (this.booking.facilityBookingStatusId == 188)
                this.router.navigate(['/ams/facility/bookings-status/confirmed']);
            else if (this.booking.facilityBookingStatusId == 189)
                this.router.navigate(['/ams/facility/bookings-status/pending']);
            else if (this.booking.facilityBookingStatusId == 208)
                this.router.navigate(['/ams/facility/bookings-status/cancelled']);
            else if (this.booking.facilityBookingStatusId == 385)
                this.router.navigate(['/ams/facility/bookings-status/rejected']);
        }
        else {
            this.router.navigate(['/user/facility/bookings/all-bookings']);
        }
    }
    pageNavigate(res, type) {
        if (res.message) {
            if (this.info.type == 'create') //popup
                this.modalResult.emit(true);
            else {
                if (type == 'create')
                    this.sharedService.openSnackBar('ApartmentFacilityBooking Created', 'success');
                else
                    this.sharedService.openSnackBar('ApartmentFacilityBooking Updated', 'success');
                this.routerConfig();
            }
        }
        else {
            this.sharedService.openSnackBar(res.errorMessage, 'error');
        }
    }
    setSlotStructure() {
        if (this.booking.rateBaseId == 139) { //BookingPerDay 
            this.booking.slotId = null;
            this.booking.isSlotBooking = false;
            this.booking.bookedFromTime = "00:00:01";
            this.booking.bookedToTime = "23:59:00";
            this.booking.apartmentFacilityIsSlotBooking_List = [{
                    "slotId": null,
                    "isSlotBooking": false,
                    "bookedForDate": this.booking.bookedForDate,
                    "bookedFromTime": "00:00:01",
                    "bookedToTime": "23:59:00"
                }];
        }
        else if (this.facilitySlotData.length == 0 && this.booking.rateBaseId == 138) { // BookingPerHour Without Slot
            this.booking.slotId = null;
            this.booking.isSlotBooking = false;
            this.booking.bookedFromTime = moment__WEBPACK_IMPORTED_MODULE_10__(this.booking.bookedFromTime).format('HH:mm:ss');
            this.booking.bookedToTime = moment__WEBPACK_IMPORTED_MODULE_10__(this.booking.bookedToTime).format('HH:mm:ss');
            this.booking.apartmentFacilityIsSlotBooking_List = [{
                    "slotId": null,
                    "isSlotBooking": false,
                    "bookedForDate": this.booking.bookedForDate,
                    "bookedFromTime": this.booking.bookedFromTime,
                    "bookedToTime": this.booking.bookedToTime
                }];
        }
        else if (this.facilitySlotData.length > 0 && this.booking.rateBaseId == 138) { //BookingPerHour with Slot
            this.booking.isSlotBooking = true;
            this.booking.bookedFromTime = null;
            this.booking.bookedToTime = null;
            this.booking.apartmentFacilityIsSlotBooking_List = [{
                    "slotId": this.booking.slotId,
                    "isSlotBooking": true,
                    "bookedForDate": this.booking.bookedForDate,
                    "bookedFromTime": null,
                    "bookedToTime": null
                }];
        }
        if (!this.booking.isBookingforGuest) { //Booked for USer
            this.booking.guestName = null;
            this.booking.guestPhone = null;
            this.booking.guestRelation = null;
            this.booking.totalofguestsforevent = null;
        }
    }
    setStatus(event) {
        this.booking.facilityBookingStatusId = event[0].lookupValueId;
    }
    createFacilityBooking() {
        this.message = null;
        if (!this.facilityBookingForm.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this.changeDetect.markForCheck();
        }
        else {
            this.isBookingSubmitted = true;
            this.setSlotStructure();
            let params = {
                apartmentFacilityBooking: Object.assign(Object.assign({}, this.booking), { isCancelled: false, cancelledBy: null, cancelledOn: '', cancelledAmount: 0, rateBaseIdName: this.booking.rateBaseId == 138 ? 'Hour' : 'Day', isApproved: false, apartmentId: this.sessionService.apartmentId, bookedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_11___default()().toISOString(), isActive: true, insertedBy: this.sessionService.userId, insertedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_11___default()().toISOString(), updatedBy: null, updatedOn: null })
            };
            this.facilityService.addApartmentFacilityBooking(params).subscribe((res) => {
                this.isBookingSubmitted = false;
                this.pageNavigate(res, 'create');
            }, (error) => {
                this.isBookingSubmitted = false;
                this.sharedService.openSnackBar('Server Error', 'error');
            });
        }
    }
    updateFacilityBooking() {
        this.message = null;
        if (!this.facilityBookingForm.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this.changeDetect.markForCheck();
        }
        else {
            this.isBookingSubmitted = true;
            this.setSlotStructure();
            let params = {
                apartmentFacilityBooking: Object.assign(Object.assign({}, this.booking), { rateBaseIdName: this.booking.rateBaseId == 138 ? 'Hour' : 'Day', updatedBy: this.sessionService.userId, updatedOn: moment_timezone__WEBPACK_IMPORTED_MODULE_11___default()().toISOString() })
            };
            this.facilityService.updateApartmentFacilityBooking(params).subscribe((res) => {
                this.isBookingSubmitted = false;
                this.pageNavigate(res, 'update');
            }, (error) => {
                this.isBookingSubmitted = false;
                this.sharedService.openSnackBar('Server Error', 'error');
            });
        }
    }
    back() {
        const message = `Are you sure, you want to exit the screen ?`;
        const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogModel"]("Confirm Action", message);
        const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_15__["CommonConfirmModalComponent"], {
            panelClass: 'material-dialog-medium',
            disableClose: true,
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.routerConfig();
            }
        });
    }
    editFacilityBooking(id) {
        let params = {
            apartmentFacilityBookingId: id,
        };
        this.facilityService.getApartmentFacilityBookingsByFacilityBookingId(params).subscribe((res) => {
            let _a = res[0], { bookedFromTime, bookedToTime, bookedForDate } = _a, response = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["bookedFromTime", "bookedToTime", "bookedForDate"]);
            this.booking = response;
            this.booking.bookedFromTime = moment__WEBPACK_IMPORTED_MODULE_10__(bookedFromTime, 'HH:mm:ss');
            this.booking.bookedToTime = moment__WEBPACK_IMPORTED_MODULE_10__(bookedToTime, 'HH:mm:ss');
            this.getFacilityCategoryList().subscribe((facility) => {
                if (res.length > 0) {
                    this.facilityCatList = facility;
                    this.selectFacility(null);
                }
            });
            this.getTower().subscribe((tower) => {
                if (res.length > 0) {
                    this.towerList = tower;
                    this.getUnits('edit');
                }
            });
        });
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        // Set TimeZone 
        if (this.route.parent) {
            this.route.parent.parent.parent.data.subscribe((data) => {
                if (data) {
                    let response = data.initialData.apartment;
                    this.selectedCountryISO = response.country.toLowerCase();
                }
            });
        }
        //User Login
        if (!this.isAdmin()) {
            this.booking.apartmentBlockId = this.sessionService.apartmentBlockID;
            this.booking.apartmentBlockUnitId = this.sessionService.apartmentBlockUnitID;
            this.booking.apartmentBlockUnitUserId = this.sessionService.apartmentBlockUnitUserId;
            this.booking.facilityBookingStatusId = 189; //pending
        }
        else {
            // Facility Status
            let statusParams = {
                LookupTypeId: 40,
                ApartmentId: this.sessionService.apartmentId
            };
            this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe((res) => {
                if (res.length > 0)
                    this.facilityStatus = res;
            });
        }
        this.booking.isBookingforGuest = true;
        this.booking.discount = 0;
        // Create Method Using POPUP 
        if (this.info && this.info.type == 'create')
            this.urlType = 'create';
        else if (this.info && this.info.type == 'view')
            this.urlType = 'view';
        if (this.urlType == 'create') {
            // Facility Category List 
            this.getFacilityCategoryList().subscribe((res) => {
                if (res.length > 0) {
                    this.facilityCatList = res;
                    if (this.info.type) {
                        let calendarInfo = this.info.calendarData;
                        this.booking.apartmentFacilityId = Number(calendarInfo.resource._resource.id);
                        this.booking.bookedForDate = moment__WEBPACK_IMPORTED_MODULE_10__(calendarInfo.startStr).format(),
                            this.selectFacility(null);
                    }
                }
            });
            // Tower List
            this.getTower().subscribe((res) => {
                if (res.length > 0)
                    this.towerList = res;
            });
        }
        // Currency Type
        let pesoParams = {
            LookupTypeId: 101,
            ApartmentId: this.sessionService.apartmentId
        };
        this.lookupService.getLookupValueByLookupTypeId(pesoParams).subscribe((res) => {
            if (res.length > 0)
                this.pesoValue = res[0].lookupValueName;
        });
        // Tax List
        let taxListParams = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 183
        };
        this.lookupService.getLookupValueByLookupTypeId(taxListParams).subscribe((res) => {
            if (res.length > 0) {
                this.taxPecentage = parseInt(res[0].lookupValueName);
            }
        });
        if (this.urlType && this.urlType != 'create') {
            let id;
            if (this.route.params['value'] && this.route.params['value'].id)
                id = this.route.params['value'].id;
            else if (this.info.bookingId)
                id = this.info.bookingId;
            this.editFacilityBooking(id);
        }
    }
};
FacilityCreateBookingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__["FacilityService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_12__["VisitorService"] }
];
FacilityCreateBookingComponent.propDecorators = {
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['popUpInfo',] }],
    modalResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    facilityBookingForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['facilityBookingForm',] }]
};
FacilityCreateBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-create-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-create-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_13__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-create-booking.component.scss */ "./src/app/modules/ams/facility/facility-create-booking/facility-create-booking/facility-create-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__["FacilityService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
        src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_12__["VisitorService"]])
], FacilityCreateBookingComponent);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.scss ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LWNyZWF0ZS1ib29raW5nL2ZhY2lsaXR5LWV4cGVjdGVkLXZpc2l0b3IvZmFjaWxpdHktZXhwZWN0ZWQtdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: FacilityExpectedVisitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityExpectedVisitorComponent", function() { return FacilityExpectedVisitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-intl-tel-input */ "./node_modules/ngx-intl-tel-input/__ivy_ngcc__/fesm2015/ngx-intl-tel-input.js");
/* harmony import */ var src_condo_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@condo/animations */ "./src/@condo/animations/index.ts");
/* harmony import */ var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Visitor */ "./src/app/api/controllers/Visitor.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");











let FacilityExpectedVisitorComponent = class FacilityExpectedVisitorComponent {
    constructor(visitorService, lookupService, sharedService, sessionService, activateRouter, _changeDetectorRef) {
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.activateRouter = activateRouter;
        this._changeDetectorRef = _changeDetectorRef;
        this.info = {};
        this.modalResult = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.visitor = {};
        this.expectedDurationInfo = '';
        this.visitTypeList = [];
        this.visitCategoryList = [];
        this.isDataSubmitted = false;
        this.SearchCountryField = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["SearchCountryField"];
        this.CountryISO = ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"];
        this.preferredCountries = [ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"].UnitedStates, ngx_intl_tel_input__WEBPACK_IMPORTED_MODULE_6__["CountryISO"].UnitedKingdom];
        this.message = null;
        this.selectedCountryISO = "";
    }
    getExpectedVisitorInDate(event) {
        this.visitor.expectedVisitorInTime = event;
        this.expectedDurationChange();
    }
    getExpectedVisitorOutDate(event) {
        this.visitor.expectedVisitorOutTime = event;
        this.expectedDurationChange();
    }
    expectedDurationChange() {
        if (this.visitor.expectedVisitorInTime && this.visitor.expectedVisitorOutTime) {
            let inDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.visitor.expectedVisitorInTime);
            let outDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.visitor.expectedVisitorOutTime);
            let diffDuration = moment__WEBPACK_IMPORTED_MODULE_4__["duration"](outDate.diff(inDate));
            this.expectedDurationInfo = diffDuration.days() + " days " + this.isSingleDigit(diffDuration.hours()) + ":" + this.isSingleDigit(diffDuration.minutes()) + " hours";
            let hours = diffDuration.asHours();
            this.visitor.expectedDuration = Math.round(hours);
        }
    }
    isSingleDigit(digit) {
        if (digit <= 0) {
            return '00';
        }
        else {
            return (digit.toString().length > 1) ? digit : '0' + digit;
        }
    }
    resetField() {
        this.visitor = {};
        this.visitor.visitTypeId = null;
        this.visitor.visitorCategoryId = null;
        this.expectedDurationInfo = '';
    }
    createExpectedVisitor() {
        this.isDataSubmitted = true;
        this.message = null;
        if (!this.form.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this._changeDetectorRef.markForCheck();
        }
        else {
            let params = {
                expectedVisitor: Object.assign(Object.assign({}, this.visitor), { "apartmentUnitId": this.info.apartmentBlockUnitId, "apartmentId": this.sessionService.apartmentId, "expectedVisitorPhone": this.visitor.expectedVisitorPhone.number, "isActive": true, "insertedBy": this.sessionService.userId, "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_5___default()().toISOString(), "updatedBy": null, "updatedOn": null, "enteredBy": parseInt(this.sessionService.userId), "meetingPersonId": 1, "visitorsOrg": "string", "entryGateId": null, "exitGateId": null, "tomeetStaffId": this.visitor.tomeetStaffId, "phonecountrycode": this.visitor.expectedVisitorPhone.countryCode })
            };
            this.visitorService.addExpectedVisitor(params).subscribe((res) => {
                this.isDataSubmitted = false;
                if (res.message) {
                    this.modalResult.emit({ message: 'success', id: res.message });
                }
            });
        }
    }
    ngOnInit() {
        this.sharedService.timezonecast.subscribe(timeZone => this.timeZone = timeZone);
        this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_4__().add(this.timeZone.offset, 'hours');
        this.resetField();
        //visit type
        let visitParams = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 15
        };
        this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe((res) => {
            this.visitTypeList = res;
        });
        //Visit Category
        let visitCategoryParams = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 100
        };
        this.lookupService.getLookupValueByLookupTypeId(visitCategoryParams).subscribe((res) => {
            this.visitCategoryList = res;
        });
        this.selectedCountryISO = this.info.location;
    }
};
FacilityExpectedVisitorComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_8__["VisitorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
FacilityExpectedVisitorComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['expectedVisitorForm',] }],
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['popUpInfo',] }],
    modalResult: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
FacilityExpectedVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-expected-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-expected-visitor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_7__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-expected-visitor.component.scss */ "./src/app/modules/ams/facility/facility-create-booking/facility-expected-visitor/facility-expected-visitor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_8__["VisitorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], FacilityExpectedVisitorComponent);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LWNyZWF0ZS1ib29raW5nL2ZhY2lsaXR5LW1vZGFsL2ZhY2lsaXR5LW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: FacilityModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityModalComponent", function() { return FacilityModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



let FacilityModalComponent = class FacilityModalComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    popUpResult(event) {
        this.dialogRef.close(event);
    }
};
FacilityModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
FacilityModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-modal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-modal.component.scss */ "./src/app/modules/ams/facility/facility-create-booking/facility-modal/facility-modal.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], FacilityModalComponent);



/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.scss":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.scss ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ZhY2lsaXR5L2ZhY2lsaXR5LWNyZWF0ZS1ib29raW5nL3VzZXItZmFjaWxpdHktYm9va2luZy1saXN0L3VzZXItZmFjaWxpdHktYm9va2luZy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.ts":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.ts ***!
  \*********************************************************************************************************************************/
/*! exports provided: UserFacilityBookingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFacilityBookingListComponent", function() { return UserFacilityBookingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");










let UserFacilityBookingListComponent = class UserFacilityBookingListComponent {
    constructor(facilityService, sessionService, router, injector, sharedService, dialog) {
        this.facilityService = facilityService;
        this.sessionService = sessionService;
        this.router = router;
        this.injector = injector;
        this.sharedService = sharedService;
        this.dialog = dialog;
        this.bookingSearch = '';
        this.isBookingDataLoaded = false;
        this.totalItems = 0;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    editBooking(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.router.navigate(['user/facility/bookings/edit-booking', dataRecord.apartmentFacilityBookingId]);
    }
    deleteBooking(detail) {
        this.modalService.showConfirmModal(detail.rowId);
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
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'BookingList');
    }
    getBookingList() {
        this.isBookingDataLoaded = false;
        let params = {
            apartmentId: this.sessionService.apartmentId,
            apartmentBlockUnitUserId: this.sessionService.apartmentBlockUnitUserId
        };
        this.facilityService.getApartmentFacilityBookingsByBlockunituserId(params).subscribe((res) => {
            if (res.length > 0) {
                let facility = {
                    localdata: res.reverse(),
                    datatype: "array"
                };
                this.totalItems = facility.localdata.length;
                this.bookingListData = new jqx.dataAdapter(facility);
            }
            this.isBookingDataLoaded = true;
        });
    }
    ngOnInit() {
        this.getBookingList();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Booking Id',
                datafield: 'serialNo',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Facility Name',
                datafield: 'apartmentFacilityName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Event Date',
                datafield: 'bookedForDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer,
            }, {
                text: 'Event Time',
                datafield: 'bookedFromTime',
                cellsrenderer: (row, column, value) => {
                    let time, fromTime, toTime = this.bookingListData.loadedData[row].bookedToTime;
                    if (value && toTime) {
                        fromTime = moment__WEBPACK_IMPORTED_MODULE_6__(value, 'HH:mm:ss').format('hh:mm A');
                        toTime = moment__WEBPACK_IMPORTED_MODULE_6__(toTime, 'HH:mm:ss').format('hh:mm A');
                        time = `${fromTime} - ${toTime}`;
                    }
                    else {
                        time = '-';
                    }
                    return '<div class="jqx-custom-inner-cell">' + time + '</div>';
                },
                cellsalign: 'center',
                align: 'center',
                minwidth: 160,
                renderer: columnrenderer
            }, {
                text: 'Total Hours',
                datafield: 'bookedToTime',
                cellsrenderer: (row, column, value) => {
                    let time, toTime, fromTime = this.bookingListData.loadedData[row].bookedFromTime;
                    if (fromTime && value) {
                        fromTime = moment__WEBPACK_IMPORTED_MODULE_6__(fromTime, 'HH:mm:ss').format();
                        toTime = moment__WEBPACK_IMPORTED_MODULE_6__(value, 'HH:mm:ss').format();
                        time = moment__WEBPACK_IMPORTED_MODULE_6__["duration"](moment__WEBPACK_IMPORTED_MODULE_6__(toTime).diff(moment__WEBPACK_IMPORTED_MODULE_6__(fromTime)));
                        if (time.minutes() == 0) {
                            time = `${time.hours()}hrs`;
                        }
                        else {
                            time = `${time.hours()}hrs ${time.minutes()}mins`;
                        }
                        if (time == '23hrs 58mins') {
                            time = '24hrs';
                        }
                    }
                    else {
                        time = '-';
                    }
                    return '<div class="jqx-custom-inner-cell ml-4">' + time + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Rate Type',
                datafield: 'rateBaseIdName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Cost',
                datafield: 'amount',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Discount',
                datafield: 'discount',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Final Bill',
                datafield: 'totalBillAmount',
                cellsalign: 'center',
                align: 'center',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer,
            }, {
                text: 'Booked For',
                datafield: 'isBookingforGuest',
                cellsrenderer: (row, column, value) => {
                    value = value ? 'Guest' : 'Unit User';
                    return '<div class="jqx-custom-inner-cell">' + value + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Status',
                datafield: 'facilityBookingStatusId',
                cellsrenderer: (row, column, value) => {
                    let status;
                    if (value == 189) { //Pending
                        status = 'purple';
                    }
                    else if (value == 188) { //completed
                        status = 'green';
                    }
                    else if (value == 208 || value == 385) { //Cancelled || Rejected
                        status = 'red';
                    }
                    return `<div class="jqx-custom-inner-cell">
          <div class="status-badge bg-status-${status}-700">
            <span class="font-bold text-status-${status}-900 text-uppercase">${this.bookingListData.loadedData[row].facilityBookingStatusId_Label}</span>
          </div>
        </div>`;
                },
                cellsalign: 'center',
                align: 'center',
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                cellsrenderer: (row) => {
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" class="mr-3" onClick="editFacilityBooking(' + row + ')" title="Edit Facility"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a>'
                        + '<a href="javascript:void(0)" onClick="deleteFacilityBooking(' + row + ')" title="Delete Facility"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a>'
                        + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }];
        //delete item
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let dataRecord = this.datagrid.getrowdata(id);
                let params = {
                    apartmentFacilityBookingId: dataRecord.apartmentFacilityBookingId,
                    deleteBy: parseInt(this.sessionService.userId)
                };
                this.facilityService.deleteApartmentFacilityBooking(params).subscribe((res) => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    if (res.message) {
                        this.datagrid.deleterow(id);
                        this.datagrid.refresh();
                        this.sharedService.openSnackBar(res.message, 'success');
                    }
                    else {
                        this.sharedService.openSnackBar(res.errorMessage, 'error');
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
    }
};
UserFacilityBookingListComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }
];
UserFacilityBookingListComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    editBooking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onEditFacility', ['$event.detail'],] }],
    deleteBooking: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onDeleteFacility', ['$event.detail'],] }]
};
UserFacilityBookingListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-facility-booking-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-facility-booking-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-facility-booking-list.component.scss */ "./src/app/modules/ams/facility/facility-create-booking/user-facility-booking-list/user-facility-booking-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
], UserFacilityBookingListComponent);

function editFacilityBooking(row) {
    var event = new CustomEvent('onEditFacility', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editFacilityBooking = editFacilityBooking;
function deleteFacilityBooking(row) {
    var event = new CustomEvent('onDeleteFacility', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.deleteFacilityBooking = deleteFacilityBooking;


/***/ })

}]);
//# sourceMappingURL=modules-ams-facility-facility-create-booking-facility-create-booking-module-es2015.js.map