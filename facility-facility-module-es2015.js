(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facility-facility-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"facility-add-slot-wrapper\">\n\t\n\n\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t<app-loader *ngIf=\"!isSlotSubmitted\"></app-loader>\n\n\t<ng-container *ngIf=\"isSlotSubmitted\">\n\t\t\n\t\t<form #addFacilitySlotForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitAddFacilitySlotForm(addFacilitySlotForm)\"  novalidate>\n\t\t\n\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>Begin Time*</label>\n                    <input class=\"form-control\" name=\"slotBeginTime\" [owlDateTime]=\"slotBeginTime\" [owlDateTimeTrigger]=\"slotBeginTime\" placeholder=\"Time\" [(ngModel)]=\"slot.slotBeginTime\" (dateTimeInput)=\"emitSlotTime()\" required>\n\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #slotBeginTime></owl-date-time>\n\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"slotBeginTime\">\n\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t\t\t\t</div>\n        \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>End Time*</label>\n                    <input class=\"form-control\" name=\"slotEndTime\" [min]=\"minEndTime\" [owlDateTime]=\"slotEndTime\" [owlDateTimeTrigger]=\"slotEndTime\" placeholder=\"Time\" [(ngModel)]=\"slot.slotEndTime\" (dateTimeInput)=\"emitSlotTime()\" required>\n\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #slotEndTime></owl-date-time>\n\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"slotEndTime\">\n\t\t\t\t\t\t\t<i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t\t\t\t\t</div>\n        \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"input-box\">\n                    <label>Cost (in rs)*</label>\n                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"cost\" [(ngModel)]=\"slot.cost\" required>\n        \t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\n\t\t\t\t<div class=\"input-box\">\n                    <label>Comments</label>\n                    <textarea placeholder=\"some text here\" name=\"comments\" [(ngModel)]=\"slot.comment\"></textarea>\n                </div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-12 text-right\" *ngIf = \"type !=='view'\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t<button class=\"btn blue mr-3\" [disabled]=\"addFacilitySlotForm.invalid\">Submit</button>\n\t\t\t\t<div class=\"btn trans-red\" (click)=\"showConfirmModal(slot)\">Delete</div>\n\t\t\t</div>\n\t\t\t\t\t\n\t\t</div>\n\n\t</form>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"facilitybooking-actions-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isBookingDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isBookingDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Bookings <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bookingData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/facility/create-booking\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Booking</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n  \t\t\t\n\t  \t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">ID\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilityBookingId')\" [ngClass]=\"getFieldOrderBy('apartmentFacilityBookingId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['apartmentFacilityBookingId']\" (ngModelChange)=\"selectColInput('apartmentFacilityBookingId')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Facility Name \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityName')\" [ngClass]=\"getFieldOrderBy('facilityName')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityName\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"facilityName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"apartmentFacilityId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"facilityCategoryData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityName', 'facilityName')\">\t\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Slot\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilitySlot')\" [ngClass]=\"getFieldOrderBy('apartmentFacilitySlot')\"></span>\n\t\t\t\t\t\t\t <app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"apartmentFacilitySlot\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"slotBeginTime\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"apartmentFacilitySlotId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"facilitySlotData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'apartmentFacilitySlot', 'slotBeginTime')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box> \n\t\t\t\t\t\t</th>\n<<<<<<< HEAD\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookingStatusId_Label')\" [ngClass]=\"getFieldOrderBy('facilityBookingStatusId_Label')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityBookingStatusId_Label\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"facilityBookingStatusId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"statusTypeData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityBookingStatusId_Label', 'lookupValueName')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n=======\n\t\t\t\t\t\t<th scope=\"col\">Unit&Block\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilityBookingId')\" [ngClass]=\"getFieldOrderBy('apartmentFacilityBookingId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['apartmentFacilityBookingId']\" (ngModelChange)=\"selectColInput('apartmentFacilityBookingId')\" >\n>>>>>>> master\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<th scope=\"col\">Event Date \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookedForDate')\" [ngClass]=\"getFieldOrderBy('facilityBookedForDate')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"facilityBookedForDate\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'facilityBookedForDate')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Created On \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('insertedOn')\" [ngClass]=\"getFieldOrderBy('insertedOn')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"insertedOn\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'insertedOn')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">User Name\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"User Name\" [(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Cost \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('amount')\" [ngClass]=\"getFieldOrderBy('amount')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Cost\" [(ngModel)]=\"columnField['amount']\" (ngModelChange)=\"selectColInput('amount')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Booked For\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('isBookingforGuest')\" [ngClass]=\"getFieldOrderBy('isBookingforGuest')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['isBookingforGuest']\" (ngModelChange)=\"selectColInput('isBookingforGuest')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookingStatus')\" [ngClass]=\"getFieldOrderBy('facilityBookingStatus')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityBookingStatus\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"facilityBookingStatusId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"statusTypeData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityBookingStatus', 'lookupValueName')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t      Actions\n\t\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t  \t </th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n<<<<<<< HEAD\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | simpleSearch: bookingData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\" [ngClass]=\"booking.isActive ? 'active' : 'notactive'\">\n=======\n<<<<<<< HEAD\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: bookingData | columnSearch: columnField:selectedInput ; let i = index\" [ngClass]=\"booking.isActive ? 'active' : 'notactive'\">\n\t\t\t\t\t <td class=\"name\">{{booking.apartmentFacilityBookingId}}</td>\n\t\t\t\t\t <td class=\"name\">{{getFacilityBookingName(booking, booking.apartmentFacilityId)}}</td>\n=======\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: bookingData | columnSearch: columnField:selectedInput | orderBy : unitFieldType: unitOrder ; let i = index\" [ngClass]=\"booking.isActive ? 'active' : 'notactive'\">\n>>>>>>> master\n\t\t\t\t      <td class=\"name\">{{getFacilityBookingName(booking, booking.apartmentFacilityId)}}</td>\n>>>>>>> master\n\t\t\t\t      <td class=\"grey\">{{getFacilityBookingSlot(booking, booking.slotId)}}</td>\n<<<<<<< HEAD\n\t\t\t\t      <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"booking.facilityBookingStatusId_Label\">{{booking.facilityBookingStatusId_Label}}</span></td>\n\t\t\t\t      <td class=\"grey\">{{getBookedDate(i, booking.bookedForDate)}}</td>\n=======\n\t\t\t\t\t  <td class=\"name\">{{getUserName(booking, booking.neededUserId)}}</td> \n\t\t\t\t\t  <td class=\"grey\">{{getBookedDate(i, booking.bookedForDate)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{getBookedDate(i, booking.insertedOn)}}</td>\n>>>>>>> master\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getUserName(booking, booking.neededUserId)}}</td>\n\t\t\t\t\t  <td class=\"grey\">\n\t\t\t\t\t\t<span *ngIf=\"booking.amount>0\">{{booking.amount}}</span>\n\t\t\t\t\t\t<span *ngIf=\"booking.amount==0\">Free</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t  <td class=\"name\">\n\t\t\t\t\t\t<span *ngIf=\"booking.isBookingforGuest\" style=\"color:limegreen;font-weight:bold\">G</span>\n\t\t\t\t\t\t<span *ngIf=\"!booking.isBookingforGuest\" style=\"color:brown;font-weight:bold\">U</span>  \n\t\t\t\t\t\t</td>\n\t\t\t\t\t  <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking, booking.facilityBookingStatusId)\">{{getBookingStatus(booking, booking.facilityBookingStatusId)}}</span></td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"invoiceDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"invoiceDropDown\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\"\n\t\t\t\t      \trouterLink=\"/ams/facility/edit-booking/{{booking.apartmentFacilityBookingId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(booking.apartmentFacilityBookingId)\">Delete</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf = \"booking.facilityBookingStatus ==='pending'  && isAdminLogin\" (click)=\"showApproveConfirmModal(booking)\">Approve</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf = \"booking.facilityBookingStatus ==='pending'  && isAdminLogin\" (click)=\"showRejectConfirmModal(booking)\">Reject</a>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\n  \t\t\t</table>\n\n  \t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-entry/facility-entry.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-entry/facility-entry.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5 *ngIf=\"isFacilityCategoryNew\">Add Facility</h5>\n                <h5 *ngIf=\"isFacilityCategoryUpdate && !isFacilityViewAlone\">Edit Facility</h5>\n                <h5 *ngIf=\"isFacilityCategoryUpdate && isFacilityViewAlone\">View Facility</h5>\n            </div>\n        <div class=\"col-sm-4\"> \n\t\t\t<button class=\"btn lime-green\" (click)=\"Goback()\" style=\"float: right;\" >\n\t\t\t\t<i class=\"fa fa-arrow-left\" aria-hidden=\"true\"> Go Back</i>\n\t\t\t</button>\n         </div>\n        </div>\n    </div>\n    \n    <div class=\"card-body\">\n        <div  class=\"card mt-20\" *ngIf=\"isFacilityCategoryNew || isFacilityCategoryUpdate\">\n            <div class=\"card-header\">\n               \n                <!-- <div class=\"float-right\" (click)=\"removeCategoryBox()\">\n                    <i-feather class=\"icon del\" name=\"x\"></i-feather>\n                </div> -->\n            </div>\n        \n            <div class=\"card-body p-0\" id=\"accordion\">\n                \n                    \n                    <ul class=\"list-group tabs clear\">\n        \n                        <li class=\"list-group-item\" [ngClass]=\"isSlotNew ? 'collapsed' : ''\" data-toggle=\"collapse\" data-target=\"#facilityCollapse\" aria-expanded=\"true\" aria-controls=\"facilityCollapseOne\">Facility Info</li>\n                        <div id=\"facilityCollapse\" class=\"collapse\" [ngClass]=\"isSlotNew ? '' : 'show'\" aria-labelledby=\"facilityCollapseOne\" data-parent=\"#accordion\">\n                            \n                            <div class=\"details\">\n                                \n                                <app-alert-message [message]=\"alertMessage\" [isError]=\"isCategoryError\" ></app-alert-message>\n        \n                                <form #facilitySettingsForm = \"ngForm\" name=\"visitorSettingsForm\" (ngSubmit)=\"submitFacilitySettingsForm(facilitySettingsForm)\"  novalidate>\n                        \n                                <div class=\"row\">\n                                    \n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Facility Name*</label>\n                                            <input  type=\"text\" class=\"form-control\" placeholder=\"Facility Name\" name=\"staffCategory\" [(ngModel)]=\"facility.facilityName\" required>\n                                        </div>\n                                    </div>\n                                   \n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Approval Required* </label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"approvalType\" id=\"Yes\" [(ngModel)]=\"facility.isApproved\"  [value]=\"true\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"approvalType\" id=\"No\" [(ngModel)]=\"facility.isApproved\" [value]=\"false\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"No\">No</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Disable Time Slot* </label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"enableTimeSlotBook\" id=\"enableSlotTime\" [(ngModel)]=\"facility.isSlotBooking\"  [value]=\"true\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"enableSlotTime\">Yes</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"enableTimeSlotBook\" id=\"disableSlotTime\" [(ngModel)]=\"facility.isSlotBooking\" [value]=\"false\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"disableSlotTime\">No</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Rate Type*</label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityRateBaseId\" id=\"hourType\"  [(ngModel)]=\"facility.rateBaseId\"  value=\"138\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"hourType\">Hour</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityRateBaseId\" id=\"dayType\" [(ngModel)]=\"facility.rateBaseId\" value=\"139\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"dayType\">Day</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Service Type*</label>\n                                            <div class=\"form-group\">\n                                                <input name=\"faclityTypeId\" id=\"paidType\" [(ngModel)]=\"facility.facilityTypeId\"  value=\"184\" type=\"radio\"required>\n                                                <label class=\"radio-inline\" for=\"paidType\">Paid</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input name=\"faclityTypeId\" id=\"freeType\" [(ngModel)]=\"facility.facilityTypeId\" value=\"185\" type=\"radio\"required>\n                                                <label class=\"radio-inline\" for=\"freeType\">Free</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"select-box\">\n                                            <label>Facility Location*</label>\n                                            <select \n                                                name=\"name\" \n                                                id=\"id\" \n                                                class=\"form-control\"\n                                                [(ngModel)]=\"facility.apartmentBlockId\" required>\n                                                <option value=\"0\"  selected >Select Location</option>\n                                                <option *ngFor=\"let item of lstTowers\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n                                            </select>\n                                        </div>\n                                    </div>\n                                   \n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Booking Amount ({{PesoValue}})</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Booking Amount\" name=\"amount\" [(ngModel)]=\"facility.amount\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Security Deposit ({{PesoValue}})*</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Security Amount\" name=\"deposit\" [(ngModel)]=\"facility.cautionDeposit\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Advance Booking In Days*</label>\n                                            <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Advance Amount\" name=\"autoCancelDays\" [(ngModel)]=\"facility.advanceBookingindays\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\" >\n                                            <label>Payment Due In Days*</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Payment Due Days\" name=\"autoCancelDays\" [(ngModel)]=\"facility.autoCancelDays\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Min Hours Booking*</label>\n                                            <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Min Hrs Booking\" name=\"minHoursBooking\" [(ngModel)]=\"facility.minHoursBooking\" required>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Facility Opens At*</label>\n                                            <input  class=\"form-control\" name=\"minTimeLimit\" [owlDateTime]=\"minTimeLimit\" [owlDateTimeTrigger]=\"minTimeLimit\" placeholder=\"Time\" [(ngModel)]=\"facility.minTimeLimit\" required>\n                                            <owl-date-time  [pickerType]=\"'timer'\" #minTimeLimit></owl-date-time>\n                                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"minTimeLimit\">\n                                                  <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                              </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\">\n                                            <label>Facility Closes At*</label>\n                                            <input  class=\"form-control\" name=\"maxTimeLimit\" [owlDateTime]=\"maxTimeLimit\" [owlDateTimeTrigger]=\"maxTimeLimit\" placeholder=\"Time\" [(ngModel)]=\"facility.maxTimeLimit\" required>\n                                            <owl-date-time  [pickerType]=\"'timer'\" #maxTimeLimit></owl-date-time>\n                                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"maxTimeLimit\">\n                                                  <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                              </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"input-box\" >\n                                            <label>Total No Of Occupancy</label>\n                                            <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"No Of Occupancy\" name=\"autoCancelDays\" [(ngModel)]=\"facility.totalallowedperson\" >\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-2\">\n                                        <div class=\"input-box radio-box\">\n                                            <label>Is Booking Allow</label>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityBookingAllowId\" id=\"EnaBookAllow\" [(ngModel)]=\"facility.isBookingAllowed\"  value=\"true\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"EnaBookAllow\">Yes</label>\n                                             </div>\n                                            <div class=\"form-group\">\n                                                <input  name=\"faclityBookingAllowId\" id=\"DisBookAllow\" [(ngModel)]=\"facility.isBookingAllowed\" value=\"false\" type=\"radio\" required>\n                                                <label class=\"radio-inline\" for=\"DisBookAllow\">No</label>\n                                             </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-10\">\n                                        <div class=\"input-box\">\n                                            <label>Accessed By*</label>\n                                            <ng-select [items]=\"lstTowers\" \n                                            [ngModelOptions]=\"{standalone: true}\"\n                                            bindLabel=\"apartmentBlockNumber\"\n                                            bindValue=\"apartmentBlockNumber\"\n                                            [multiple]=\"true\"\n                                            placeholder=\"Select Tower/Block List\"\n                                            (change)=\"onChange($event)\"\n                                            [(ngModel)]=\"selectedTowersIds\">\n                                 </ng-select>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                    \n                                        <div class=\"input-box\">\n                                            <label>Description</label>\n                                            <quill-editor \n                                                class=\"quill-editor\"\n                                                name=\"description\"\n                                                [(ngModel)]=\"facility.description\"\n                                                [placeholder]=\"editorPlacehorder\"\n                                                (onContentChanged)=\"onContentChanged($event)\">\n                                            </quill-editor>\n                                        </div>\n        \n                                    </div>\n                                    \n                                    <div class=\"col-sm-12 text-right\" *ngIf=\"!isFacilityViewAlone\">\n                                    \n                                        <button class=\"btn blue mr-2\"  [disabled]=\"facilitySettingsForm.invalid\">Submit</button>\n        \n                                    </div>\n        \n                                </div>\n        \n            \n                            </form>\n        \n                            </div>\n        \n                        </div>\n                        \n                        <ng-container *ngIf=\"!isFacilityCategoryNew\">\n        \n                            <ng-container  *ngFor=\"let slot of getSlots(facility.apartmentFacilitySlot); let i = index\">\n                                \n                            <li class=\"list-group-item collapsed\" data-toggle=\"collapse\" attr.data-target=\"#slotCollapse{{i}}\" aria-expanded=\"true\" attr.aria-controls=\"Collapse{{i}}\">\n                               \n                                    <span class=\"float-left\">Slot{{i+1}}</span><br>\n                                    <span class=\"float-left \" >{{getSlotTime(slot.slotBeginTime)}} - {{getSlotTime(slot.slotEndTime)}}</span>    \n                            \n                            </li>\n                                <div id=\"slotCollapse{{i}}\" class=\"collapse\" attr.aria-labelledby=\"Collapse{{i}}\" data-parent=\"#accordion\">\n                                    \n                                    <div class=\"details\" >\n                                        \n                                        <app-add-facility-slot [slot]=\"slot\" [facilityId]=\"facility.apartmentFacilityId\" [type]=\"isFacilityViewAlone?'view':'edit'\" (facilityParams)=\"getFacilityParams($event)\"></app-add-facility-slot>\n        \n                                    </div>\n        \n                                </div>\n        \n                            </ng-container>\n        \n                        </ng-container>\n        \n                        <ng-container *ngIf=\"facilitySlotLength == 0\">\n                            \n                            <li class=\"list-group-item collapsed\" [ngClass]=\"facilitySlotLength == 0 ? 'no-drop' : ''\" data-toggle=\"collapse\" data-target=\"#facilityNewCollapse\" aria-expanded=\"true\" aria-controls=\"facilityCollapseNewOne\">No Slots Available</li>\n                            <div id=\"facilityNewCollapse\" class=\"collapse\" attr.aria-labelledby=\"facilityCollapseNewOne\" data-parent=\"#accordion\">\n                                \n        \n        \n                            </div>\n        \n                        </ng-container>\n        \n                        <ng-container *ngIf=\"isSlotNew\">\n                            \n                            <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#facilitySlotNew\" aria-expanded=\"true\" aria-controls=\"facilityNewSlot\">New Slot</li>\n                            <div id=\"facilitySlotNew\" class=\"collapse show\" aria-labelledby=\"facilityNewSlot\" data-parent=\"#accordion\">\n                                \n                                <div class=\"details\" >\n                                    \n                                    <app-add-facility-slot [slot]=\"facility\" [facilityId]=\"facility.apartmentFacilityId\" type=\"new\" (facilityParams)=\"getFacilityParams($event)\"></app-add-facility-slot>\n        \n                                </div>\n        \n                            </div>\n        \n                        </ng-container>\n        \n                    </ul>\n        \n        \n            </div>\n        \n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-main/facility-main.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-main/facility-main.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-facility-setup *ngIf = \"Mode ==='List'\"></app-facility-setup>\n<app-facility-entry *ngIf = \"Mode ==='Entry'\"></app-facility-entry>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" >\n\t<div class=\"card-header\">\n\t\t<div class=\"row\">\n\t\t <div class=\"col-sm-8\">\n\t\t\t<h5>Facilities</h5>\n\t\t </div>\n\t\t <div class=\"col-sm-4\">\n\t\t\t<button class=\"btn lime-green\" (click)=\"addNewFacilityCategory()\" style=\"float: right;\" >\n\t\t\t\t<i class=\"fa fa-plus\" aria-hidden=\"true\"> Add New Facility</i>\n\t\t\t</button>\n\t\t </div>\n\t\t</div>\n\t</div>\n    <div class=\"card-body\">\n\t\t<ng-container>\n\t\t\t<div class=\"facility-settings-wrapper\">\n\n\t\t\t\t<app-loader *ngIf=\"!isFacilityCategoryLoaded\"></app-loader>\n\t\t\t\n\t\t\t\t<div class=\"category-list list-boxes big\" *ngIf=\"isFacilityCategoryLoaded\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngFor=\"let item of facilityCategoryData; let i = index\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon view\" name=\"eye\" (click)=\"viewFacility(item)\"></i-feather></a>\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateFacilityCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<h6>{{item.facilityName}}</h6>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.amount>0\">{{item.amount}}rs/- per {{getRateBase(item.rateBaseId)}}</p>\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"item.amount==0\">Free</p>\n\t\t\t\t\t\t\t\t\t<div class=\"bottom\">\n\t\t\t\t\t\t\t\t\t\t<p>{{getSlots(item.apartmentFacilitySlot).length}} Slot(s)</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t\t\t\t<a class=\"btn sf trans-white hover-green\" style=\"border: 2px solid;border-color: limegreen;\" (click)=\"addNewSlot(item)\">\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon sm plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t\t<span>Add Slot</span>\n\t\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\n\t\t\t\n\t\t\t</div>\n\t\t</ng-container>\n    </div>\n</div>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/facility.service */ "./src/app/api/services/facility.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
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
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddFacilitySlotComponent.prototype, "slot", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddFacilitySlotComponent.prototype, "facilityId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddFacilitySlotComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddFacilitySlotComponent.prototype, "facilityParams", void 0);
AddFacilitySlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-facility-slot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-facility-slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-facility-slot.component.scss */ "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/facility.service */ "./src/app/api/services/facility.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
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
        this.isAdminLogin = false;
        this.isBookingDataLoaded = false;
        this.unitFieldType = "facilityName";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.bookingData = "";
        this.staffData = "";
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
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
    selectColInput(value) {
        this.selectedInput = value;
    }
    onSelectChange(event, type, name) {
        if (!underscore__WEBPACK_IMPORTED_MODULE_9__["isEmpty"](event)) {
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
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_10__(event).format("DD/MM/YYYY");
        }
        else {
            this.columnField = {};
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getFacilityBookingName(booking, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.facilityCategoryData, function (item) {
            if (item.apartmentFacilityId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.bookingListData.map(obj => {
                if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                    obj.facilityName = data[0].facilityName;
                }
            });
            return data[0].facilityName;
        }
    }
    getFacilityBookingSlot(booking, id) {
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
            this.bookingListData.map(obj => {
                if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                    obj.apartmentFacilitySlot = slotBeginTime;
                }
            });
            return slotBeginTime + " - " + slotEndTime;
        }
    }
    getBookedDate(itr, date) {
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.bookingListData, (obj, index) => {
            obj.facilityBookedForDate = moment__WEBPACK_IMPORTED_MODULE_10__(obj.bookedForDate).format("DD/MM/YYYY");
        });
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
    }
    getUserName(booking, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.userListData, function (item) {
            if (item.userId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.bookingListData.map(obj => {
                if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                    obj.userName = data[0].firstName;
                }
            });
            return data[0].firstName;
        }
    }
    isAdmin() {
        this.isAdminLogin = (this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff') ? true : false;
        console.log(this.isAdminLogin);
    }
    getBookingStatus(booking, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.bookingListData.map(obj => {
                if (obj.apartmentFacilityBookingId == booking.apartmentFacilityBookingId) {
                    obj.facilityBookingStatus = data[0].lookupValueName.toLowerCase();
                }
            });
            return data[0].lookupValueName.toLowerCase();
        }
    }
    showConfirmModal(id) {
        this.modalService.showConfirmModal(id);
    }
    showRejectConfirmModal(data) {
        this.modalService.showRejectModal(data);
    }
    showApproveConfirmModal(data) {
        this.modalService.showApproveModal(data);
    }
    ngOnInit() {
        this.isAdmin();
        this.facilityService.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
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
            underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.facilitySlotData, item => {
                var beginTime = moment__WEBPACK_IMPORTED_MODULE_10__(item.slotBeginTime, 'HH:mm:ss').toDate();
                var slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_10__(beginTime).format('HH:mm A');
                item.slotBeginTime = slotBeginTime;
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
                data.isBookingforGuest = false;
                return data.isActive;
            });
            console.log(this.bookingListData);
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
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    apartmentFacilityBookingId: id,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.facilityService.deleteApartmentFacilityBooking(params).subscribe((res) => {
                    underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.bookingListData, (type) => {
                        if (type.apartmentFacilityBookingId == id) {
                            type.isActive = false;
                        }
                    });
                    setTimeout(() => {
                        this.bookingListData = this.bookingListData.filter((type) => type.ticketId !== id);
                        this.totalItems = this.bookingListData.length;
                        this.sharedService.setAlertMessage("Booking deleted");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
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
FacilityBookingActionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-booking-actions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-booking-actions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-booking-actions.component.scss */ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_facility_service__WEBPACK_IMPORTED_MODULE_4__["FacilityService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], FacilityBookingActionsComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-entry/facility-entry.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-entry/facility-entry.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LWVudHJ5L2ZhY2lsaXR5LWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-entry/facility-entry.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-entry/facility-entry.component.ts ***!
  \************************************************************************************/
/*! exports provided: FacilityEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityEntryComponent", function() { return FacilityEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _service_facility_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/facility-service.service */ "./src/app/ams/facility/service/facility-service.service.ts");
/* harmony import */ var src_app_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var src_app_api_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/services */ "./src/app/api/services.ts");










let FacilityEntryComponent = class FacilityEntryComponent {
    constructor(facilityservice, facilityapiservice, cd, cookieService, apartmentService, lookupSrv, sharedService, fb) {
        this.facilityservice = facilityservice;
        this.facilityapiservice = facilityapiservice;
        this.cd = cd;
        this.cookieService = cookieService;
        this.apartmentService = apartmentService;
        this.lookupSrv = lookupSrv;
        this.sharedService = sharedService;
        this.fb = fb;
        this.isFacilityCategoryNew = false;
        this.isSlotNew = false;
        this.isFacilityCategoryUpdate = false;
        this.isFacilityCategoryLoaded = false;
        this.isFacilityViewAlone = false;
        this.isCategoryError = false;
        this.alertMessage = "";
        this.selectedTowersIds = [];
        this.finalSelectedTowersId = [];
        this.lstTowers = [];
        this.tempArry = [];
    }
    ngOnInit() {
        this.LoadFacilityLocation();
        this.setPesoValue();
        this.cd.markForCheck();
        this.facilityservice.Mode.subscribe(res => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(res.data)) {
                this.isFacilityCategoryNew = res.data.isFacilityCategoryNew;
                this.isSlotNew = res.data.isSlotNew;
                this.facility = res.data.facility;
                this.isFacilityCategoryUpdate = res.data.isFacilityCategoryUpdate;
                this.isFacilityViewAlone = res.data.isFacilityViewAlone;
                if (this.isFacilityCategoryUpdate) {
                    this.updatefacilityData(this.facility);
                }
            }
        });
    }
    setPesoValue() {
        this.lookupSrv.getLookupValueByLookupTypeId(88).subscribe((res) => {
            console.log(res);
        });
        this.PesoValue = "₹";
    }
    LoadFacilityLocation() {
        this.lstTowers = [];
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            console.log('Tower Details');
            console.log(res);
            this.lstTowers = res;
            this.cd.markForCheck();
        });
    }
    onChange($event) {
        var res = new Array();
        $event.forEach(element => {
            res.push({ "apartmentId": element.apartmentId, "apartmentBlockId": element.apartmentBlockId });
        });
        this.finalSelectedTowersId = res;
    }
    updatefacilityData(item) {
        this.facility = item;
        this.facility.rateBaseId = item.rateBaseId.toString();
        this.facility.facilityTypeId = item.facilityTypeId.toString();
        this.facility.minTimeLimit = moment__WEBPACK_IMPORTED_MODULE_3__(item.minTimeLimit, 'HH:mm:ss').toDate();
        this.facility.maxTimeLimit = moment__WEBPACK_IMPORTED_MODULE_3__(item.maxTimeLimit, 'HH:mm:ss').toDate();
        this.facilitySlotLength = item.apartmentFacilitySlot.length;
        this.tempArry = [];
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            console.log('Tower Details');
            console.log(res);
            this.tempArry = res;
            this.cd.markForCheck();
        });
        var sampleAry = [{ apartmentId: 2, apartmentBlockId: 5 }, { apartmentId: 2, apartmentBlockId: 10 }];
        sampleAry.forEach(element => {
            this.tempArry.forEach(ele => {
                if (ele.apartmentBlockId === element.apartmentBlockId)
                    this.selectedTowersIds.push(ele.apartmentBlockNumber);
            });
        });
        console.log('Update');
        console.log(this.selectedTowersIds);
        console.log(this.tempArry);
        console.log(sampleAry);
        this.cd.markForCheck();
    }
    getSlots(items) {
        var slots = items.filter(item => {
            return item.isActive;
        });
        return slots;
    }
    getSlotTime(time) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(time).format('HH:mm A');
    }
    onContentChanged(event) {
        this.facility.description = event.html;
    }
    submitFacilitySettingsForm(form) {
        this.isFacilityCategoryLoaded = false;
        if (this.isFacilityCategoryNew) {
            let details = {
                "facilityName": this.facility.facilityName,
                "isApproved": this.facility.isApproved,
                "isSlotBooking": this.facility.isSlotBooking,
                "approvalRequired": this.facility.approvalRequired,
                "rateBaseId": parseInt(this.facility.rateBaseId),
                "facilityTypeId": parseInt(this.faclityTypeId),
                "apartmentBlockId": this.facility.apartmentBlockId,
                "amount": this.facility.amount,
                "cautionDeposit": this.facility.cautionDeposit,
                "advanceBookingindays": this.facility.advanceBookingindays,
                "autoCancelDays": this.facility.autoCancelDays,
                "minHoursBooking": this.facility.minHoursBooking,
                "minTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.minTimeLimit).format('HH:mm:ss'),
                "maxTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.maxTimeLimit).format('HH:mm:ss'),
                "totalallowedperson": this.facility.totalallowedperson,
                "isBookingAllowed": this.facility.isBookingAllowed,
                "description": this.facility.description,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "fileAttachmentId": null,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": moment__WEBPACK_IMPORTED_MODULE_3__().format(),
                "updatedBy": 0,
                "updatedOn": moment__WEBPACK_IMPORTED_MODULE_3__().format(),
                "apartmentFacilitySlot": null,
                "ApartmentFacilityAllowedBlock": this.finalSelectedTowersId
            };
            this.facilityapiservice.addApartmentFacility(details).subscribe((res) => {
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
                "facilityName": this.facility.facilityName,
                "isApproved": this.facility.isApproved,
                "isSlotBooking": this.facility.isSlotBooking,
                "approvalRequired": this.facility.approvalRequired,
                "rateBaseId": parseInt(this.facility.rateBaseId),
                "facilityTypeId": parseInt(this.faclityTypeId),
                "apartmentBlockId": this.facility.apartmentBlockId,
                "amount": this.facility.amount,
                "cautionDeposit": this.facility.cautionDeposit,
                "advanceBookingindays": this.facility.advanceBookingindays,
                "autoCancelDays": this.facility.autoCancelDays,
                "minHoursBooking": this.facility.minHoursBooking,
                "minTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.minTimeLimit).format('HH:mm:ss'),
                "maxTimeLimit": moment__WEBPACK_IMPORTED_MODULE_3__(this.facility.maxTimeLimit).format('HH:mm:ss'),
                "totalallowedperson": this.facility.totalallowedperson,
                "isBookingAllowed": this.facility.isBookingAllowed,
                "description": this.facility.description,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "fileAttachmentId": null,
                "isActive": true,
                "insertedBy": this.facility.insertedBy,
                "insertedOn": this.facility.insertedOn,
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": moment__WEBPACK_IMPORTED_MODULE_3__().format(),
                "apartmentFacilitySlot": null,
                "ApartmentFacilityAllowedBlock": this.finalSelectedTowersId
            };
            this.facilityapiservice.updateApartmentFacility(details).subscribe((res) => {
                if (res.message) {
                    this.isFacilityCategoryLoaded = true;
                    this.isFacilityCategoryLoaded = false;
                    this.facilityapiservice.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
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
    getFacilityParams(event) {
        this.isFacilityCategoryLoaded = false;
        this.facilityapiservice.getApartmentFacilitiesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.isFacilityCategoryLoaded = true;
        }, error => {
        });
    }
    Goback() {
        this.facilityservice.Mode.next({ mode: 'List', data: null });
    }
};
FacilityEntryComponent.ctorParameters = () => [
    { type: _service_facility_service_service__WEBPACK_IMPORTED_MODULE_7__["FacilityServiceService"] },
    { type: src_app_api_services__WEBPACK_IMPORTED_MODULE_9__["FacilityService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: src_app_api_services__WEBPACK_IMPORTED_MODULE_9__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
FacilityEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-entry/facility-entry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-entry.component.scss */ "./src/app/ams/facility/components/facility-entry/facility-entry.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_facility_service_service__WEBPACK_IMPORTED_MODULE_7__["FacilityServiceService"],
        src_app_api_services__WEBPACK_IMPORTED_MODULE_9__["FacilityService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_services_apartment_service__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"], src_app_api_services__WEBPACK_IMPORTED_MODULE_9__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], FacilityEntryComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-main/facility-main.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-main/facility-main.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LW1haW4vZmFjaWxpdHktbWFpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-main/facility-main.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-main/facility-main.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FacilityMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityMainComponent", function() { return FacilityMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_decorator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/decorator */ "./src/app/decorator/index.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_facility_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/facility-service.service */ "./src/app/ams/facility/service/facility-service.service.ts");





let FacilityMainComponent = class FacilityMainComponent {
    constructor(facilityservice, cd) {
        this.facilityservice = facilityservice;
        this.cd = cd;
        this.__subscription = {};
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.facilityservice.Mode.pipe(Object(src_app_decorator__WEBPACK_IMPORTED_MODULE_2__["untilDestroyed"])(this)).subscribe(data => {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(data)) {
                this.Mode = data.mode;
                this.cd.markForCheck();
            }
        });
    }
    ngOnDestroy() {
        this.facilityservice.Mode.next({ mode: 'List', data: null });
    }
};
FacilityMainComponent.ctorParameters = () => [
    { type: _service_facility_service_service__WEBPACK_IMPORTED_MODULE_4__["FacilityServiceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
FacilityMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-main/facility-main.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-main.component.scss */ "./src/app/ams/facility/components/facility-main/facility-main.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_facility_service_service__WEBPACK_IMPORTED_MODULE_4__["FacilityServiceService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], FacilityMainComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FacilityReportsComponent = class FacilityReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
FacilityReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-reports/facility-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-reports.component.scss */ "./src/app/ams/facility/components/facility-reports/facility-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/facility.service */ "./src/app/api/services/facility.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _service_facility_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/facility-service.service */ "./src/app/ams/facility/service/facility-service.service.ts");









let FacilitySetupComponent = class FacilitySetupComponent {
    constructor(injector, dialog, facilityService, facilitylocalservice, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.facilityService = facilityService;
        this.facilitylocalservice = facilitylocalservice;
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
    addNewFacilityCategory() {
        // this.isFacilityCategoryNew = true;
        // this.isSlotNew = false;
        // this.facility = {};
        var item = {
            isFacilityCategoryNew: true,
            isSlotNew: false,
            isFacilityCategoryUpdate: false,
            isFacilityViewAlone: false,
            facility: {}
        };
        this.facilitylocalservice.Mode.next({ mode: 'Entry', data: item });
    }
    addNewSlot(item) {
        // this.isFacilityCategoryUpdate = true;
        // this.isFacilityCategoryNew = false;
        // this.isSlotNew = true;
        // this.updatefacilityData(item);
        var itemData = {
            isFacilityCategoryNew: true,
            isSlotNew: true,
            facility: item,
            isFacilityCategoryUpdate: false,
            isFacilityViewAlone: false
        };
        this.facilitylocalservice.Mode.next({ mode: 'Entry', data: itemData });
    }
    viewFacility(item) {
        var itemData = {
            isFacilityCategoryNew: false,
            isSlotNew: false,
            facility: item,
            isFacilityViewAlone: true,
            isFacilityCategoryUpdate: true
        };
        this.facilitylocalservice.Mode.next({ mode: 'Entry', data: itemData });
    }
    updateFacilityCategory(item) {
        // this.isFacilityCategoryUpdate = true;
        // this.isFacilityCategoryNew = false;
        // this.isSlotNew = false;
        var itemData = {
            isFacilityCategoryNew: false,
            isSlotNew: false,
            facility: item,
            isFacilityViewAlone: false,
            isFacilityCategoryUpdate: true
        };
        this.facilitylocalservice.Mode.next({ mode: 'Entry', data: itemData });
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
    ngOnInit() {
        this.removeCategoryBox();
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
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: _service_facility_service_service__WEBPACK_IMPORTED_MODULE_8__["FacilityServiceService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
FacilitySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-setup.component.scss */ "./src/app/ams/facility/components/facility-setup/facility-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_facility_service__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        _service_facility_service_service__WEBPACK_IMPORTED_MODULE_8__["FacilityServiceService"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/facility-reports/facility-reports.component */ "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts");
/* harmony import */ var _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/facility-create-booking/facility-create-booking.component */ "./src/app/shared/components/facility-create-booking/facility-create-booking.component.ts");
/* harmony import */ var _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/facility-booking-actions/facility-booking-actions.component */ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts");
/* harmony import */ var _shared_components_full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/full-calendar/full-calendar.component */ "./src/app/shared/components/full-calendar/full-calendar.component.ts");
/* harmony import */ var _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/facility-main/facility-main.component */ "./src/app/ams/facility/components/facility-main/facility-main.component.ts");








const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_7__["FacilityMainComponent"] },
    { path: 'create-booking', component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["FacilityCreateBookingComponent"] },
    { path: 'edit-booking/:id', component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["FacilityCreateBookingComponent"] },
    { path: 'calendar', component: _shared_components_full_calendar_full_calendar_component__WEBPACK_IMPORTED_MODULE_6__["FullCalendarComponent"] },
    { path: 'all-bookings', component: _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingActionsComponent"] },
    { path: 'reports', component: _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__["FacilityReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let FacilityRoutingModule = class FacilityRoutingModule {
};
FacilityRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FacilityComponent = class FacilityComponent {
    constructor() { }
    ngOnInit() {
    }
};
FacilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/facility.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility.component.scss */ "./src/app/ams/facility/facility.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _facility_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./facility-routing.module */ "./src/app/ams/facility/facility-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _facility_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./facility.component */ "./src/app/ams/facility/facility.component.ts");
/* harmony import */ var _components_add_facility_slot_add_facility_slot_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-facility-slot/add-facility-slot.component */ "./src/app/ams/facility/components/add-facility-slot/add-facility-slot.component.ts");
/* harmony import */ var _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/facility-reports/facility-reports.component */ "./src/app/ams/facility/components/facility-reports/facility-reports.component.ts");
/* harmony import */ var _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/facility-setup/facility-setup.component */ "./src/app/ams/facility/components/facility-setup/facility-setup.component.ts");
/* harmony import */ var _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/facility-booking-actions/facility-booking-actions.component */ "./src/app/ams/facility/components/facility-booking-actions/facility-booking-actions.component.ts");
/* harmony import */ var _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/facility-main/facility-main.component */ "./src/app/ams/facility/components/facility-main/facility-main.component.ts");
/* harmony import */ var _components_facility_entry_facility_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/facility-entry/facility-entry.component */ "./src/app/ams/facility/components/facility-entry/facility-entry.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _components_facility_reject_action_facility_reject_action_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/facility-reject-action/facility-reject-action.component */ "./src/app/ams/facility/components/facility-reject-action/facility-reject-action.component.ts");
/* harmony import */ var _components_facility_reject_confirmation_modal_facility_reject_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/facility-reject-confirmation-modal/facility-reject-confirmation-modal.component */ "./src/app/ams/facility/components/facility-reject-confirmation-modal/facility-reject-confirmation-modal.component.ts");
/* harmony import */ var _components_facility_approve_confirmation_modal_facility_approve_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/facility-approve-confirmation-modal/facility-approve-confirmation-modal.component */ "./src/app/ams/facility/components/facility-approve-confirmation-modal/facility-approve-confirmation-modal.component.ts");

















let FacilityModule = class FacilityModule {
};
FacilityModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_7__["FacilityReportsComponent"],
            _components_facility_setup_facility_setup_component__WEBPACK_IMPORTED_MODULE_8__["FacilitySetupComponent"],
            _facility_component__WEBPACK_IMPORTED_MODULE_5__["FacilityComponent"],
            _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_9__["FacilityBookingActionsComponent"],
            _components_add_facility_slot_add_facility_slot_component__WEBPACK_IMPORTED_MODULE_6__["AddFacilitySlotComponent"],
            _components_facility_main_facility_main_component__WEBPACK_IMPORTED_MODULE_10__["FacilityMainComponent"],
            _components_facility_entry_facility_entry_component__WEBPACK_IMPORTED_MODULE_11__["FacilityEntryComponent"],
            _components_facility_reject_action_facility_reject_action_component__WEBPACK_IMPORTED_MODULE_14__["FacilityRejectActionComponent"],
            _components_facility_reject_confirmation_modal_facility_reject_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_15__["FacilityRejectConfirmationModalComponent"],
            _components_facility_approve_confirmation_modal_facility_approve_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_16__["FacilityApproveConfirmationModalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _facility_routing_module__WEBPACK_IMPORTED_MODULE_3__["FacilityRoutingModule"]
        ],
        bootstrap: [_facility_component__WEBPACK_IMPORTED_MODULE_5__["FacilityComponent"]]
    })
], FacilityModule);



/***/ }),

/***/ "./src/app/ams/facility/service/facility-service.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/ams/facility/service/facility-service.service.ts ***!
  \******************************************************************/
/*! exports provided: FacilityServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityServiceService", function() { return FacilityServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let FacilityServiceService = class FacilityServiceService {
    constructor() {
        this.Mode = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ mode: 'List', data: null });
        this.Mode$ = this.Mode.asObservable();
    }
};
FacilityServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FacilityServiceService);



/***/ }),

/***/ "./src/app/decorator/autounsubscribe.decorator.ts":
/*!********************************************************!*\
  !*** ./src/app/decorator/autounsubscribe.decorator.ts ***!
  \********************************************************/
/*! exports provided: componentDestroyed, untilDestroyed, takeUntilDestroye */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentDestroyed", function() { return componentDestroyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return untilDestroyed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "takeUntilDestroye", function() { return takeUntilDestroye; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
// export function AutoUnsubscribe(blackList = []): (constructor: any) => void {

//     return function (constructor): void {
//         const original = constructor.prototype.ngOnDestroy;
//         constructor.prototype.ngOnDestroy = function (): void {
//             this._ngUnsubscribe.observers.forEach(d => {
//                 d.complete();
//             });
//             this._ngUnsubscribe.next(null);
//             this._ngUnsubscribe.complete();
//             this._ngUnsubscribe.unsubscribe();
//             console.log(this._ngUnsubscribe);
//             original && typeof original === 'function' && original.apply(this, arguments);
//         };
//     };
// }
// import { Observable, ReplaySubject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// export function componentDestroyed(component: { ngOnDestroy(): void }): Observable<true> {
//     const modifiedComponent = component as { __componentDestroyed$?: Observable<true>; ngOnDestroy(): void };
//     if (modifiedComponent.__componentDestroyed$) {
//         return modifiedComponent.__componentDestroyed$;
//     }
//     const oldNgOnDestroy = component.ngOnDestroy;
//     const stop$ = new ReplaySubject<true>();
//     modifiedComponent.ngOnDestroy = () => {
//         // tslint:disable-next-line: no-unused-expression
//         oldNgOnDestroy && oldNgOnDestroy.apply(component);
//         stop$.next(true);
//         stop$.complete();
//         stop$.unsubscribe();
//     };
//     return modifiedComponent.__componentDestroyed$ = stop$.asObservable();
// }
// export function untilComponentDestroyed<T>(component: { ngOnDestroy(): void }): (source: Observable<T>) => Observable<T> {
//     return (source: Observable<T>) => source.pipe(takeUntil(componentDestroyed(component)));
// }


/**
 * Patch the component with unsubscribe behavior.
 *
 * @param component The component class (`this` conttext)
 * @return An observable representing the unsubscribe event
 */
function componentDestroyed(component) {
    if (component.componentDestroyed$) {
        return component.componentDestroyed$;
    }
    const originalNgOnDestroy = component.ngOnDestroy;
    const stop$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"]();
    component.ngOnDestroy = () => {
        stop$.observers.forEach(itm => {
            itm.next(true);
            itm.complete();
        });
        stop$.next(true);
        stop$.complete();
        stop$.unsubscribe();
        // istanbul ignore else
        if (originalNgOnDestroy) {
            originalNgOnDestroy.apply(component);
        }
    };
    return (component.componentDestroyed = stop$.asObservable());
}
/**
 * Un opérateur RxJS qui stop la souscription quand le composant est détruit (`ngOnDestroy`)
 *
 * @param component La classe du composant (`this`).
 */
function untilDestroyed(component) {
    return (source) => source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(componentDestroyed(component)));
}
function takeUntilDestroye(target) {
    const destroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    const subscription = [];
    const targetNgOnDestroy = target.ngOnDestroy;
    function ngOnDestroy() {
        destroy.next(true);
        destroy.complete();
        destroy.unsubscribe();
        if (targetNgOnDestroy) {
            targetNgOnDestroy.apply(this);
        }
    }
    target.ngOnDestroy = ngOnDestroy;
    return (source) => {
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(destroy));
    };
}


/***/ }),

/***/ "./src/app/decorator/index.ts":
/*!************************************!*\
  !*** ./src/app/decorator/index.ts ***!
  \************************************/
/*! exports provided: componentDestroyed, untilDestroyed, takeUntilDestroye */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./autounsubscribe.decorator */ "./src/app/decorator/autounsubscribe.decorator.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "componentDestroyed", function() { return _autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_1__["componentDestroyed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untilDestroyed", function() { return _autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_1__["untilDestroyed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "takeUntilDestroye", function() { return _autounsubscribe_decorator__WEBPACK_IMPORTED_MODULE_1__["takeUntilDestroye"]; });


// start:ng42.barrel

// end:ng42.barrel


/***/ })

}]);
//# sourceMappingURL=facility-facility-module-es2015.js.map