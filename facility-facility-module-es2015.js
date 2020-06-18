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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"facilitybooking-actions-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isBookingDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isBookingDataLoaded\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Bookings <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"bookingData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/facility/create-booking\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Booking</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n  \t\t\t\n\t  \t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">ID\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilityBookingId')\" [ngClass]=\"getFieldOrderBy('apartmentFacilityBookingId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['apartmentFacilityBookingId']\" (ngModelChange)=\"selectColInput('apartmentFacilityBookingId')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Facility Name \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityName')\" [ngClass]=\"getFieldOrderBy('facilityName')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityName\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"facilityName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"apartmentFacilityId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"facilityCategoryData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityName', 'facilityName')\">\t\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Slot\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('apartmentFacilitySlot')\" [ngClass]=\"getFieldOrderBy('apartmentFacilitySlot')\"></span>\n\t\t\t\t\t\t\t <app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"apartmentFacilitySlot\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"slotBeginTime\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"apartmentFacilitySlotId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"facilitySlotData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'apartmentFacilitySlot', 'slotBeginTime')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box> \n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookingStatusId_Label')\" [ngClass]=\"getFieldOrderBy('facilityBookingStatusId_Label')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityBookingStatusId_Label\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"facilityBookingStatusId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"statusTypeData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityBookingStatusId_Label', 'lookupValueName')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<th scope=\"col\">Event Date \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookedForDate')\" [ngClass]=\"getFieldOrderBy('facilityBookedForDate')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"facilityBookedForDate\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'facilityBookedForDate')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Created On \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('insertedOn')\" [ngClass]=\"getFieldOrderBy('insertedOn')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"insertedOn\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'insertedOn')\"\n\t\t\t\t\t      \t></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">User Name\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"User Name\" [(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Cost \n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('amount')\" [ngClass]=\"getFieldOrderBy('amount')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Cost\" [(ngModel)]=\"columnField['amount']\" (ngModelChange)=\"selectColInput('amount')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Booked For\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('isBookingforGuest')\" [ngClass]=\"getFieldOrderBy('isBookingforGuest')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Booking ID\" [(ngModel)]=\"columnField['isBookingforGuest']\" (ngModelChange)=\"selectColInput('isBookingforGuest')\" >\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('facilityBookingStatus')\" [ngClass]=\"getFieldOrderBy('facilityBookingStatus')\"></span>\n\t\t\t\t\t\t\t<app-simple-select-box\n\t\t\t\t\t\t\t\tfieldName = \"facilityBookingStatus\" \n\t\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t\t[fieldModel] = \"facilityBookingStatusId\"\n\t\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t\t[fieldList] = \"statusTypeData\"\n\t\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'facilityBookingStatus', 'lookupValueName')\">\t\t\t\t\n\t\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t      Actions\n\t\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t\t  \t </th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\n\t\t\t\t<tbody>\n\t\t\t\t    <tr *ngFor=\"let booking of bookingListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: bookingData | columnSearch: columnField:selectedInput ; let i = index\" [ngClass]=\"booking.isActive ? 'active' : 'notactive'\">\n\t\t\t\t\t <td class=\"name\">{{booking.apartmentFacilityBookingId}}</td>\n\t\t\t\t      <td class=\"name\">{{getFacilityBookingName(booking, booking.apartmentFacilityId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{getFacilityBookingSlot(booking, booking.slotId)}}</td>\n\t\t\t\t      <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"booking.facilityBookingStatusId_Label\">{{booking.facilityBookingStatusId_Label}}</span></td>\n\t\t\t\t      <td class=\"grey\">{{getBookedDate(i, booking.bookedForDate)}}</td>\n\t\t\t\t\t  <td class=\"name\">{{getUserName(booking, booking.neededUserId)}}</td> \n\t\t\t\t\t  <td class=\"grey\">{{getBookedDate(i, booking.insertedOn)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getUserName(booking, booking.neededUserId)}}</td>\n\t\t\t\t\t  <td class=\"grey\">\n\t\t\t\t\t\t<span *ngIf=\"booking.amount>0\">{{booking.amount}}</span>\n\t\t\t\t\t\t<span *ngIf=\"booking.amount==0\">Free</span>\n\t\t\t\t\t</td>\n\t\t\t\t\t  <td class=\"name\">\n\t\t\t\t\t\t<span *ngIf=\"booking.isBookingforGuest\" style=\"color:limegreen;font-weight:bold\">G</span>\n\t\t\t\t\t\t<span *ngIf=\"!booking.isBookingforGuest\" style=\"color:brown;font-weight:bold\">U</span>  \n\t\t\t\t\t\t</td>\n\t\t\t\t\t  <td class=\"grey\"><span class=\"badge small min text-capitalize\" [ngClass]=\"getBookingStatus(booking, booking.facilityBookingStatusId)\">{{getBookingStatus(booking, booking.facilityBookingStatusId)}}</span></td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"invoiceDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"invoiceDropDown\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\"\n\t\t\t\t      \trouterLink=\"/ams/facility/edit-booking/{{booking.apartmentFacilityBookingId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\tEdit\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(booking.apartmentFacilityBookingId)\">Delete</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf = \"booking.facilityBookingStatus ==='pending'  && isAdminLogin\" (click)=\"showApproveConfirmModal(booking)\">Approve</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" *ngIf = \"booking.facilityBookingStatus ==='pending'  && isAdminLogin\" (click)=\"showRejectConfirmModal(booking)\">Reject</a>\n\t\t\t\t\t</div>\t\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\n  \t\t\t</table>\n\n  \t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-calender/facility-calender.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-calender/facility-calender.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<jqxScheduler #scheduler\n    [width]=\"getWidth()\" [height]=\"600\"\n    [date]=\"date\"\n    [source]=\"dataAdapter\"\n    [showLegend]=\"true\"\n    [dayNameFormat]=\"'abbr'\"\n    [resources]=\"resources\"\n    [view]=\"'timelineWeekView'\"\n    [views]=\"views\"\n    [appointmentDataFields]=\"appointmentDataFields\">\n</jqxScheduler>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-create/facility-create.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-create/facility-create.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-8\">\n                <h5 *ngIf=\"facilityType.type == 'create'\">Add Facility</h5>\n                <h5 *ngIf=\"facilityType.type == 'edit' || facilityType.type == 'slot'\">Edit Facility</h5>\n                <h5 *ngIf=\"facilityType.type == 'view'\">View Facility</h5>\n            </div>\n            <div class=\"col-sm-4\"> \n                <a class=\"btn lime-green float-right\" href=\"javascript:void(0)\" routerLink=\"facility/list\" [routerLinkActiveOptions] = \"{exact:true}\">\n                    <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"> Go Back</i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body facility-create-wrapper\">\n        <app-alert-message [message]=\"alertMessage\" [isError]=\"isCategoryError\" ></app-alert-message>\n        <p class=\"text-muted mt-3 mb-5 font-weight-bold alert\" *ngIf=\"facility.isSlotBooking\">Alert Messages : You have selected 'TIME SLOT' as YES, Please create slots for this facility.</p>\n        <form #facilitySettingsForm = \"ngForm\">\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"input-box\">\n                        <label>Facility Name*</label>\n                        <input  type=\"text\" class=\"form-control\" placeholder=\"Facility Name\" name=\"staffCategory\" [(ngModel)]=\"facility.facilityName\"\n                        autocomplete=\"off\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div class=\"input-box radio-box\">\n                        <label>Is Booking Allowed*</label>\n                        <div class=\"form-group\">\n                            <input  name=\"faclityBookingAllowId\" id=\"EnaBookAllow\" [(ngModel)]=\"facility.isBookingAllowed\"\n                             (change)=\"isBookingAllowed()\"  [value]=\"true\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"EnaBookAllow\">Yes</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <input  name=\"faclityBookingAllowId\" id=\"DisBookAllow\" [(ngModel)]=\"facility.isBookingAllowed\"\n                             (change)=\"isBookingAllowed()\"  [value]=\"false\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"DisBookAllow\">No</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-2\" *ngIf=\"facility.isBookingAllowed\">\n                    <div class=\"input-box radio-box\">\n                        <label>Rate Type*</label>\n                        <div class=\"form-group\">\n                            <input  name=\"faclityRateBaseId\" id=\"hourType\"  [(ngModel)]=\"facility.rateBaseId\" (change)=\"isHourDay()\"\n                              [value]=\"138\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"hourType\">Hour</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <input  name=\"faclityRateBaseId\" id=\"dayType\" [(ngModel)]=\"facility.rateBaseId\" (change)=\"isHourDay()\"\n                             [value]=\"139\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"dayType\">Day</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-2\" *ngIf=\"facility.isBookingAllowed && facility.rateBaseId == 138\">\n                    <div class=\"input-box radio-box\">\n                        <label>Enable Time Slot* </label>\n                        <div class=\"form-group\">\n                            <input  name=\"enableTimeSlotBook\" id=\"enableSlotTime\" [(ngModel)]=\"facility.isSlotBooking\"\n                             (change)=\"enableSlot()\" [value]=\"true\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"enableSlotTime\">Yes</label>\n                            </div>\n                        <div class=\"form-group\">\n                            <input  name=\"enableTimeSlotBook\" id=\"disableSlotTime\" [(ngModel)]=\"facility.isSlotBooking\"\n                             (change)=\"enableSlot()\" [value]=\"false\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"disableSlotTime\">No</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-2\">\n                    <div class=\"input-box radio-box\">\n                        <label>Service Type*</label>\n                        <div class=\"form-group\">\n                            <input name=\"faclityTypeId\" id=\"paidType\" [(ngModel)]=\"facility.facilityTypeId\" (change)=\"isPaidOrFree()\"\n                             [value]=\"184\" type=\"radio\"required>\n                            <label class=\"radio-inline\" for=\"paidType\">Paid</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <input name=\"faclityTypeId\" id=\"freeType\" [(ngModel)]=\"facility.facilityTypeId\" (change)=\"isPaidOrFree()\"\n                             [value]=\"185\" type=\"radio\"required>\n                            <label class=\"radio-inline\" for=\"freeType\">Free</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"select-box\">\n                        <label>Facility Location*</label>\n                        <select name=\"location\" class=\"form-control\" [(ngModel)]=\"facility.apartmentBlockId\" required>\n                            <option value=\"0\"  selected >Select Location</option>\n                            <option *ngFor=\"let item of towerslist\" [ngValue]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"facility.isBookingAllowed && facility.facilityTypeId == 184\">\n                    <div class=\"input-box\">\n                        <label>Booking Amount Per {{ facility.rateBaseId == 138 ? 'Hour' : 'Day'}} ({{pesoValue}})</label>\n                        <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Booking Amount\" name=\"amount\"\n                         [(ngModel)]=\"facility.amount\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"facility.facilityTypeId == 184\">\n                    <div class=\"input-box\">\n                        <label>Security Deposit ({{pesoValue}})*</label>\n                        <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Security Amount\" name=\"deposit\"\n                         [(ngModel)]=\"facility.cautionDeposit\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"facility.isBookingAllowed\">\n                    <div class=\"input-box\">\n                        <label>Advance Booking In Days*</label>\n                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Advance Booking Days\" name=\"advanceBookingindays\"\n                         [(ngModel)]=\"facility.advanceBookingindays\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"facility.isBookingAllowed && facility.facilityTypeId == 184\">\n                    <div class=\"input-box\" >\n                        <label>Payment Due In Days*</label>\n                        <input  type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Payment Due Days\" name=\"autoCancelDays\"\n                         [(ngModel)]=\"facility.autoCancelDays\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"facility.isBookingAllowed && facility.rateBaseId == 138\">\n                    <div class=\"input-box\">\n                        <label>Min Hours Booking*</label>\n                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Min Hrs Booking\" name=\"minHoursBooking\"\n                         [(ngModel)]=\"facility.minHoursBooking\" required>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"facility.isBookingAllowed\"> \n                    <div class=\"input-box\">\n                        <label>Facility Opens At*</label>\n                        <input  class=\"form-control\" name=\"minTimeLimit\" [owlDateTime]=\"minTimeLimit\" [owlDateTimeTrigger]=\"minTimeLimit\"\n                         placeholder=\"Time\" [(ngModel)]=\"facility.minTimeLimit\"\n                        autocomplete=\"off\" required>\n                        <owl-date-time  [pickerType]=\"'timer'\" #minTimeLimit></owl-date-time>\n                        <div class=\"date-btn\" [owlDateTimeTrigger]=\"minTimeLimit\">\n                            <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\" *ngIf=\"facility.isBookingAllowed\">\n                    <div class=\"input-box\">\n                        <label>Facility Closes At*</label>\n                        <input  class=\"form-control\" name=\"maxTimeLimit\" [owlDateTime]=\"maxTimeLimit\" [owlDateTimeTrigger]=\"maxTimeLimit\"\n                         placeholder=\"Time\" [(ngModel)]=\"facility.maxTimeLimit\"\n                        autocomplete=\"off\" required>\n                        <owl-date-time  [pickerType]=\"'timer'\" #maxTimeLimit></owl-date-time>\n                        <div class=\"date-btn\" [owlDateTimeTrigger]=\"maxTimeLimit\">\n                            <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"input-box\" >\n                        <label>Total No Of Occupancy</label>\n                        <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"No Of Occupancy\" name=\"autoCancelDays\"\n                         [(ngModel)]=\"facility.totalallowedperson\" >\n                    </div>\n                </div>\n                <div class=\"col-sm-2\" *ngIf=\"facility.isBookingAllowed\">\n                    <div class=\"input-box radio-box\">\n                        <label>Approval Required* </label>\n                        <div class=\"form-group\">\n                            <input  name=\"approvalType\" id=\"Yes\" [(ngModel)]=\"facility.isApproved\"  [value]=\"true\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n                        </div>\n                        <div class=\"form-group\">\n                            <input  name=\"approvalType\" id=\"No\" [(ngModel)]=\"facility.isApproved\" [value]=\"false\" type=\"radio\" required>\n                            <label class=\"radio-inline\" for=\"No\">No</label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-10\">\n                    <div class=\"input-box\">\n                        <label>Accessed By*</label>\n                        <angular2-multiselect [data]=\"accessTower.dropdownList\" name=\"accessTowerDropDown\"\n                            [(ngModel)]=\"accessTower.selectedItems\"\n                            [settings]=\"accessTowerdropdownSettings\">\n                        </angular2-multiselect>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 mt-3 mb-5\" *ngIf=\"facility.isSlotBooking\">\n                    <ul class=\"list-group tabs clear\" id=\"accordion2\">\n                        <li class=\"list-group-item\" #accordion2 data-toggle=\"collapse\" data-target=\"#slot\"\n                            aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                            <span class=\"font-med\">Slot</span>\n                        </li>\n                        <div id=\"slot\" [ngClass]=\"facility.apartmentFacilitySlot.length > 0 ? 'show': ''\" class=\"collapse\"\n                             aria-labelledby=\"headingOne\" data-parent=\"#accordion2\">\n                            <a class=\"btn lime-green float-right mt-2 mb-2\" (click)=\"addSlot()\">\n                                <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                            </a>\n                            <div class=\"mt-2 ml-2 mr-2\" *ngFor=\"let slot of facility.apartmentFacilitySlot;let i= index\">\n                                <ul class=\"list-group tabs clear col-sm-12\" id=\"accordions{{i}}\">\n                                    <li class=\"list-group-item\" #accordions{{i}} data-toggle=\"collapse\" attr.data-target=\"#test{{i}}\"\n                                        aria-expanded=\"false\" aria-controls=\"collapseOne{{i}}\">\n                                        <span class=\"font-med\">Slot {{i+1}} </span>\n                                        <i class=\"fa fa-trash text-danger float-right mr-5 mt-2\" (click)=deleteSlot(i,slot) aria-hidden=\"true\"></i>\n                                    </li>\n                                    <div id=\"test{{i}}\" [ngClass]=\"facilityType.type == 'slot' && facility.apartmentFacilitySlot.length-1 == i  ? 'show': ''\" class=\"collapse\"\n                                     aria-labelledby=\"headingOne{{i}}\" data-parent=\"#accordions{{i}}\">\n                                        <p class=\"error mt-1 mb-1 ml-4\" *ngIf=\"slot.error\">Please Enter Minimum {{facility.minHoursBooking}} Hours</p>\n                                        <div class=\"row mt-3 ml-2 mr-2\">\n                                            <div class=\"col-sm-4\">\n                                                <div class=\"input-box\">\n                                                    <label>Begin Time*</label>\n                                                    <input class=\"form-control\" name=\"slotBeginTime{{i}}\" [owlDateTime]=\"slotBeginTime\" [owlDateTimeTrigger]=\"slotBeginTime\"\n                                                     placeholder=\"Time\" [(ngModel)]=\"slot.slotBeginTime\" (dateTimeInput)=\"setMinTime(i)\" [required]=\"facility.isSlotBooking\" autocomplete=\"off\">\n                                                    <owl-date-time [pickerType]=\"'timer'\" #slotBeginTime></owl-date-time>\n                                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"slotBeginTime\">\n                                                        <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-4\">\n                                                <div class=\"input-box\">\n                                                    <label>End Time*</label>\n                                                    <input class=\"form-control\" name=\"slotEndTime{{i}}\" [min]=\"slot.slotBeginTime\" [max]=\"24\" [owlDateTime]=\"slotEndTime\"\n                                                     [owlDateTimeTrigger]=\"slotEndTime\" placeholder=\"Time\" [(ngModel)]=\"slot.slotEndTime\"\n                                                    (dateTimeInput)=\"setMinTime(i)\" [required]=\"facility.isSlotBooking\" autocomplete=\"off\">\n                                                    <owl-date-time [pickerType]=\"'timer'\" #slotEndTime></owl-date-time>\n                                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"slotEndTime\">\n                                                        <i-feather class=\"icon time float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-4\">\n                                                <div class=\"input-box\">\n                                                    <label>Cost per Slot ({{pesoValue}})*</label>\n                                                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"cost\" name=\"cost{{i}}\" [(ngModel)]=\"slot.cost\"\n                                                     [required]=\"facility.isSlotBooking\">\n                                                </div>\n                                            </div>\n                                            <div class=\"col-sm-12\">\n                                                <div class=\"input-box\">\n                                                    <label>Comments</label>\n                                                    <textarea placeholder=\"some text here\" name=\"comments{{i}}\" [(ngModel)]=\"slot.comment\"></textarea>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </ul>\n                            </div>\n                        </div>\n                    </ul>\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"input-box\">\n                        <label>Description</label>\n                        <quill-editor \n                            class=\"quill-editor\"\n                            name=\"description\"\n                            [(ngModel)]=\"facility.description\"\n                            [placeholder]=\"editorPlacehorder\">\n                        </quill-editor>\n                    </div>\n                </div>\n                <div class=\"col-sm-12 text-right\">\n                    <button class=\"btn blue mr-2\" [disabled]=\"facilitySettingsForm.invalid\" (click)=\"createFacility()\">Submit</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n    ");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-list/facility-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-list/facility-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" >\n    <div class=\"card-header\">\n        <div class=\"row\">\n            <div class=\"col-sm-9\">\n            <h5>Facilities</h5>\n            </div>\n            <div class=\"col-sm-2 ml-5\">\n            <a class=\"btn lime-green float-right ml-4\" (click)=\"addNewFacilityCategory()\" >\n                <i class=\"fa fa-plus\" aria-hidden=\"true\"> Add New Facility</i>\n            </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"card-body\">\n        <div class=\"ml-4 facility-settings-wrapper\">\n            <app-loader *ngIf=\"!isFacilityCategoryLoaded\"></app-loader>\n            <div class=\"category-list list-boxes big\" *ngIf=\"isFacilityCategoryLoaded\">\n                <li class=\"list-inline-item\"  *ngFor=\"let item of facilityCategoryData; let i = index\">\n                    <div class=\"card\">\n                        <div class=\"card-body nohover card-height\">\n                            <div class=\"icons\">\n                                <a href=\"javascript:void(0)\"><i-feather class=\"icon view\" name=\"eye\" (click)=\"viewFacility(item)\"></i-feather></a>\n                                <a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateFacility(item)\"></i-feather></a>\n                            </div>\n                            <h6>{{item.facilityName}}</h6>\n                            <p *ngIf=\"item.amount>0\">{{item.amount}} Per {{getRateBase(item.rateBaseId)}} {{pesoValue}}</p>\n                            <p *ngIf=\"item.amount==0\">Free</p>\n                            <div class=\"bottom\" *ngIf=\"item.rateBaseId == 138\">\n                                <p>{{getSlots(item.apartmentFacilitySlot).length}} Slot(s)</p>\n                                <div class=\"ml-auto\"> \n                                    <button class=\"btn sf trans-white hover-green\" [disabled]=\"!item.isSlotBooking\" (click)=\"addSlotFacility(item)\">\n                                        <i-feather class=\"icon sm plus\" name=\"plus\"></i-feather>\n                                        <span>Add Slot</span>\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </div>\n        </div>\n    </div>\n</div>");

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

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/*!*********************************************************************!*\
  !*** ./node_modules/util/node_modules/inherits/inherits_browser.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/*!******************************************************!*\
  !*** ./node_modules/util/support/isBufferBrowser.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/*!***********************************!*\
  !*** ./node_modules/util/util.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;


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
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
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
            let apartmentFacilityBookingParams = {
                apartmentFacilityBooking: details
            };
            this.facilityService.addApartmentFacilitySlot(apartmentFacilityBookingParams).subscribe((res) => {
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
            let apartmentFacilityBookingParams = {
                apartmentFacilityBooking: details
            };
            this.facilityService.updateApartmentFacilitySlot(apartmentFacilityBookingParams).subscribe((res) => {
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
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
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
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
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
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
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
        let apartmentParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitiesByApartmentId(apartmentParams).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let statusParams = {
            LookupTypeId: 40
        };
        //status 
        this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe((res) => {
            this.statusTypeData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let facilityParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitySlotsByApartmentId(facilityParams).subscribe((res) => {
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
        let userListParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.userService.getAllUsersByApartmentId(userListParams).subscribe((res) => {
            this.userListData = res.filter(data => {
                return data.isActive;
            });
        }, error => {
        });
        let bookingListParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilityBookingsByApartmentId(bookingListParams).subscribe((res) => {
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
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__["FacilityService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
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
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__["FacilityService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], FacilityBookingActionsComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-calender/facility-calender.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-calender/facility-calender.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LWNhbGVuZGVyL2ZhY2lsaXR5LWNhbGVuZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-calender/facility-calender.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-calender/facility-calender.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FacilityCalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityCalenderComponent", function() { return FacilityCalenderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxscheduler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let FacilityCalenderComponent = class FacilityCalenderComponent {
    constructor(facilityService, cookieService) {
        this.facilityService = facilityService;
        this.cookieService = cookieService;
        this.date = new jqx.date(new Date());
        this.source = {
            dataType: 'array',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            id: 'id',
        };
        this.resources = {
            colorScheme: 'scheme04',
            dataField: 'calendar',
            orientation: 'vertical',
        };
        this.appointmentDataFields = {
            from: 'start',
            to: 'end',
            id: 'id',
            description: 'description',
            location: 'place',
            subject: 'subject',
            resourceId: 'calendar'
        };
        this.views = [
            { type: 'timelineDayView', appointmentHeight: 30 },
            { type: 'timelineWeekView', appointmentHeight: 30 },
            { type: 'timelineMonthView', appointmentHeight: 30 }
        ];
    }
    getWidth() {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }
        return 1000;
    }
    ngOnInit() {
        let slot = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitySlotsByApartmentId(slot).subscribe((res) => {
            this.facilitySlotData = res.filter(item => {
                return item.isActive;
            });
        });
        let categoryParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitiesByApartmentId(categoryParams).subscribe((res) => {
            let facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            let bookingParams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.facilityService.getApartmentFacilityBookingsByApartmentId(bookingParams).subscribe((res) => {
                let facilityBookingData = res.filter(item => {
                    return item.isActive;
                });
                let calenderData = [];
                let room = 0;
                facilityBookingData.forEach((booking) => {
                    let nameItem = facilityCategoryData.filter(item => {
                        return item.apartmentFacilityId == booking.apartmentFacilityId;
                    });
                    let slotData = this.facilitySlotData.filter(item => {
                        return item.apartmentFacilitySlotId == booking.slotId;
                    });
                    if (slotData.length > 0 && nameItem.length > 0) {
                        room = room + 1;
                        let year = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).year();
                        let month = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).month();
                        let date = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).date();
                        let day = moment__WEBPACK_IMPORTED_MODULE_5__(booking.bookedForDate).day();
                        let startHours = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotBeginTime, 'hh:mm:ss').hour();
                        let startMin = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotBeginTime, 'hh:mm:ss').minute();
                        let endHours = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotEndTime, 'hh:mm:ss').hour();
                        let endMin = moment__WEBPACK_IMPORTED_MODULE_5__(slotData[0].slotEndTime, 'hh:mm:ss').minute();
                        let entity = {
                            id: booking.apartmentFacilityBookingId,
                            description: '',
                            location: '',
                            subject: nameItem[0].facilityName,
                            calendar: `Rooms 1`,
                            start: new Date(year, month, date, startHours, startMin),
                            end: new Date(year, month, date, endHours, endMin)
                        };
                        calenderData.push(entity);
                    }
                });
                this.source.localdata = calenderData;
                this.dataAdapter = new jqx.dataAdapter(this.source);
                this.resources.source = new jqx.dataAdapter(this.source);
            });
        });
    }
    ngAfterViewInit() {
        this.myScheduler.ensureAppointmentVisible('id2');
    }
};
FacilityCalenderComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scheduler', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxscheduler__WEBPACK_IMPORTED_MODULE_2__["jqxSchedulerComponent"])
], FacilityCalenderComponent.prototype, "myScheduler", void 0);
FacilityCalenderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-calender',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-calender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-calender/facility-calender.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-calender.component.scss */ "./src/app/ams/facility/components/facility-calender/facility-calender.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], FacilityCalenderComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-create/facility-create.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-create/facility-create.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .c-btn span {\n  font-size: 1.4rem;\n}\n\n.facility-create-wrapper .alert {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZmFjaWxpdHkvY29tcG9uZW50cy9mYWNpbGl0eS1jcmVhdGUvZmFjaWxpdHktY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIiwic3JjL2FwcC9hbXMvZmFjaWxpdHkvY29tcG9uZW50cy9mYWNpbGl0eS1jcmVhdGUvZmFjaWxpdHktY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VDd0VGLGlCQUFBO0FDNUVGOztBRlNJO0VDbUVGLGlCQUFBO0FDeEVGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2ZhY2lsaXR5L2NvbXBvbmVudHMvZmFjaWxpdHktY3JlYXRlL2ZhY2lsaXR5LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG5cbjo6bmctZGVlcCAuYy1idG4ge1xuICAgIHNwYW4ge1xuICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICB9XG59XG4uZmFjaWxpdHktY3JlYXRlLXdyYXBwZXIge1xuICAgIC5hbGVydCB7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtdGlueSk7XG4gICAgfVxufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5AbWl4aW4gcHVibGljLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuQG1peGluIHB1YmxpYy1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLWJvbGQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gaGVhZC1saWdodCB7XG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG5AbWl4aW4gaGVhZC1ib2xkIHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtcmVndWxhciB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBkZXNwLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbkBtaXhpbiBmdC1jYWxjKCRwaXhlbHMpIHtcbiAgZm9udC1zaXplOiAoICRwaXhlbHMgLyAkZnQtYmFzZSApICsgcmVtO1xufVxuIiwiOjpuZy1kZWVwIC5jLWJ0biBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5mYWNpbGl0eS1jcmVhdGUtd3JhcHBlciAuYWxlcnQge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-create/facility-create.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-create/facility-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FacilityCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityCreateComponent", function() { return FacilityCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









let FacilityCreateComponent = class FacilityCreateComponent {
    constructor(facilityapiservice, cookieService, apartmentService, lookupService, routerActivate, router, sharedService) {
        this.facilityapiservice = facilityapiservice;
        this.cookieService = cookieService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.routerActivate = routerActivate;
        this.router = router;
        this.sharedService = sharedService;
        this.facility = {
            apartmentFacilitySlot: [],
            apartmentFacilityAllowedBlock: []
        };
        this.accessTower = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.accessTowerdropdownSettings = {};
        this.alertMessage = "";
        this.isCategoryError = false;
    }
    isBookingAllowed() {
        this.facility.rateBaseId = '';
        this.facility.isSlotBooking = '';
        this.facility.amount = '';
        this.facility.advanceBookingindays = '';
        this.facility.autoCancelDays = '';
        this.facility.minHoursBooking = '';
        this.facility.minTimeLimit = '';
        this.facility.maxTimeLimit = '';
        this.facility.isApproved = '';
    }
    isHourDay() {
        if (this.facility.rateBaseId == 139) {
            this.facility.isSlotBooking = false;
            this.facility.minHoursBooking = null;
        }
        else {
            this.facility.isSlotBooking = '';
            this.facility.minHoursBooking = null;
        }
    }
    enableSlot() {
        if (this.facility.isSlotBooking) {
            this.addSlot();
        }
        else {
            this.facility.apartmentFacilitySlot = [];
        }
    }
    isPaidOrFree() {
        this.facility.amount = null;
        this.facility.cautionDeposit = null;
        this.facility.autoCancelDays = null;
    }
    addSlot() {
        let entity = {
            slotBeginTime: null,
            slotEndTime: null,
            cost: '',
            comment: '',
            apartmentFacilitySlotId: 0,
            apartmentFacilityId: this.facilityType.type == 'create' ? 0 : this.facility.apartmentFacilityId,
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            isActive: true,
            insertedBy: parseInt(this.cookieService.get('userId')),
            insertedOn: new Date().toISOString(),
            updatedBy: 0,
            updatedOn: null,
            error: false
        };
        this.facility.apartmentFacilitySlot.push(entity);
    }
    deleteSlot(index, data) {
        this.facility.apartmentFacilitySlot.splice(index, 1);
    }
    setMinTime(i) {
        let startTime = this.facility.apartmentFacilitySlot[i].slotBeginTime;
        let endTime = this.facility.apartmentFacilitySlot[i].slotEndTime;
        let difference;
        if (startTime && endTime) {
            difference = moment__WEBPACK_IMPORTED_MODULE_2__["duration"](moment__WEBPACK_IMPORTED_MODULE_2__(endTime).diff(moment__WEBPACK_IMPORTED_MODULE_2__(startTime)));
            let diffHours = difference.hours();
            let diffMinutes = difference.minutes();
            let totalDiffHrs = difference.hours() + (difference.minutes() / 60);
            if (totalDiffHrs >= this.facility.minHoursBooking) {
                this.facility.apartmentFacilitySlot[i].error = false;
                let cost = ((this.facility.amount / (this.facility.minHoursBooking * 60)) * ((diffHours * 60) + (diffMinutes)));
                this.facility.apartmentFacilitySlot[i].cost = cost.toFixed(2);
            }
            else {
                this.facility.apartmentFacilitySlot[i].error = true;
                this.facility.apartmentFacilitySlot[i].cost = '';
            }
        }
    }
    createFacility() {
        this.facility.apartmentFacilityId = this.facilityType.type == 'create' ? 0 : this.facility.apartmentFacilityId;
        this.facility.apartmentId = parseInt(this.cookieService.get('apartmentId'));
        this.facility.totalallowedperson = this.facility.totalallowedperson;
        this.facility.description = this.facility.description;
        this.facility.minTimeLimit = moment__WEBPACK_IMPORTED_MODULE_2__(this.facility.minTimeLimit).format('HH:mm:ss');
        this.facility.maxTimeLimit = moment__WEBPACK_IMPORTED_MODULE_2__(this.facility.maxTimeLimit).format('HH:mm:ss');
        this.facility.apartmentFacilityAllowedBlock = [];
        this.accessTower.selectedItems.forEach(ele => {
            let entity = {
                id: ele.id ? ele.id : 0,
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                apartmentBlockId: ele.apartmentBlockId,
                apartmentFacilityId: this.facilityType.type == 'create' ? 0 : this.facility.apartmentFacilityId,
                isActive: true,
                insertedBy: parseInt(this.cookieService.get('userId')),
                insertedOn: moment__WEBPACK_IMPORTED_MODULE_2__().format(),
                updatedBy: null,
                updatedOn: null
            };
            this.facility.apartmentFacilityAllowedBlock.push(entity);
        });
        if (this.facility.rateBaseId == 138 && this.facility.isSlotBooking) {
            this.facility.apartmentFacilitySlot.forEach((data) => {
                data.slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_2__(data.slotBeginTime).format('HH:mm:ss');
                data.slotEndTime = moment__WEBPACK_IMPORTED_MODULE_2__(data.slotEndTime).format('HH:mm:ss');
                delete data.error;
            });
        }
        else {
            this.facility.apartmentFacilitySlot = [];
        }
        let entity = {
            "approvalRequired": true,
            "fileAttachmentId": null,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
        };
        let apartmentFacilityParams = {
            apartmentFacility: Object.assign(Object.assign({}, this.facility), entity)
        };
        let apiName = this.facilityType.type == 'create' ? 'addApartmentFacility' : 'updateApartmentFacility';
        this.facilityapiservice[apiName](apartmentFacilityParams).subscribe((res) => {
            if (res.message) {
                let message = this.facilityType.type == 'create' ? 'Facility added successfully' : 'Facility Updated successfully';
                this.sharedService.setAlertMessage(message);
                this.router.navigate(['/ams/facility/list']);
            }
            else {
                this.isCategoryError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isCategoryError = true;
            this.alertMessage = "Server Error";
        });
    }
    getBlockNumber(id) {
        let data = this.towerslist.find((data) => data.apartmentBlockId == id);
        return data.apartmentBlockNumber;
    }
    ngOnInit() {
        this.accessTowerdropdownSettings = {
            singleSelection: false,
            primaryKey: 'apartmentBlockId',
            labelKey: 'apartmentBlockNumber',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 240
        };
        //Tower
        let towerParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(towerParams).subscribe((res) => {
            this.towerslist = res;
            res.forEach((data) => {
                this.accessTower.dropdownList.push({
                    apartmentBlockNumber: data.apartmentBlockNumber,
                    apartmentBlockId: data.apartmentBlockId
                });
            });
        });
        //Currency Value
        let params = {
            LookupTypeId: 101,
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.pesoValue = res[0].lookupValueName;
        });
        //Edit Based
        this.routerActivate.queryParams.subscribe((params) => {
            this.facilityType = params;
            if (params.type) {
                if (params.id) {
                    let entity = {
                        apartmentFacilityId: parseInt(params.id)
                    };
                    this.facilityapiservice.getApartmentFacilityByFacilityId(entity).subscribe((res) => {
                        this.facility = res[0];
                        this.facility.minTimeLimit = moment__WEBPACK_IMPORTED_MODULE_2__(this.facility.minTimeLimit, 'HH:mm:ss').format();
                        this.facility.maxTimeLimit = moment__WEBPACK_IMPORTED_MODULE_2__(this.facility.maxTimeLimit, 'HH:mm:ss').format();
                        this.facility.apartmentBlockId = this.facility.apartmentBlockID;
                        delete this.facility.apartmentBlockID;
                        this.facility.apartmentFacilitySlot.forEach((ele) => {
                            ele.slotBeginTime = moment__WEBPACK_IMPORTED_MODULE_2__(ele.slotBeginTime, 'HH:mm:ss').format();
                            ele.slotEndTime = moment__WEBPACK_IMPORTED_MODULE_2__(ele.slotEndTime, 'HH:mm:ss').format();
                        });
                        this.facility.apartmentFacilityAllowedBlock.forEach((data) => {
                            this.accessTower.selectedItems.push({
                                apartmentBlockNumber: this.getBlockNumber(data.apartmentBlockId),
                                apartmentBlockId: data.apartmentBlockId,
                                id: data.id
                            });
                        });
                        this.accessTower.selectedItems;
                        if (params.type == 'slot') {
                            this.addSlot();
                        }
                    });
                }
            }
            else {
                this.router.navigate(['ams/facility/list']);
            }
        });
    }
};
FacilityCreateComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_6__["FacilityService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
FacilityCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-create/facility-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-create.component.scss */ "./src/app/ams/facility/components/facility-create/facility-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_6__["FacilityService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
], FacilityCreateComponent);



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
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");











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
        let params = {
            LookupTypeId: 88
        };
        this.lookupSrv.getLookupValueByLookupTypeId(params).subscribe((res) => {
            console.log(res);
        });
        this.PesoValue = "₹";
    }
    LoadFacilityLocation() {
        this.lstTowers = [];
        let towerParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(towerParams).subscribe((res) => {
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
        let apartmentParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(apartmentParams).subscribe((res) => {
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
            let apartmentFacilityParams = {
                apartmentFacility: details
            };
            this.facilityapiservice.addApartmentFacility(apartmentFacilityParams).subscribe((res) => {
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
            let apartmentFacilityParams = {
                apartmentFacility: details
            };
            this.facilityapiservice.updateApartmentFacility(apartmentFacilityParams).subscribe((res) => {
                if (res.message) {
                    this.isFacilityCategoryLoaded = true;
                    this.isFacilityCategoryLoaded = false;
                    let params = {
                        apartmentId: parseInt(this.cookieService.get('apartmentId'))
                    };
                    this.facilityapiservice.getApartmentFacilitiesByApartmentId(params).subscribe((res) => {
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
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityapiservice.getApartmentFacilitiesByApartmentId(params).subscribe((res) => {
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
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_9__["FacilityService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"] },
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
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_9__["FacilityService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_10__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], FacilityEntryComponent);



/***/ }),

/***/ "./src/app/ams/facility/components/facility-list/facility-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-list/facility-list.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".facility-settings-wrapper button {\n  border: 2px solid #5cd67c;\n}\n.facility-settings-wrapper .btn.disabled, .facility-settings-wrapper .btn:disabled {\n  border: 2px solid #797979 !important;\n}\n.facility-settings-wrapper .card-height {\n  height: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvZmFjaWxpdHkvY29tcG9uZW50cy9mYWNpbGl0eS1saXN0L2ZhY2lsaXR5LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LWxpc3QvZmFjaWxpdHktbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJLHlCQUFBO0FDSlI7QURNSTtFQUNJLG9DQUFBO0FDSlI7QURNSTtFQUNJLGFBQUE7QUNKUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9mYWNpbGl0eS9jb21wb25lbnRzL2ZhY2lsaXR5LWxpc3QvZmFjaWxpdHktbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uZmFjaWxpdHktc2V0dGluZ3Mtd3JhcHBlciB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGxpbWUtZ3JlZW4tMDI7XG4gICAgfVxuICAgIC5idG4uZGlzYWJsZWQsIC5idG46ZGlzYWJsZWQge1xuICAgICAgICBib3JkZXIgOiAycHggc29saWQgJGdyZXktNzUwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jYXJkLWhlaWdodCB7XG4gICAgICAgIGhlaWdodCA6IDE3MHB4O1xuICAgIH1cbn0iLCIuZmFjaWxpdHktc2V0dGluZ3Mtd3JhcHBlciBidXR0b24ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNWNkNjdjO1xufVxuLmZhY2lsaXR5LXNldHRpbmdzLXdyYXBwZXIgLmJ0bi5kaXNhYmxlZCwgLmZhY2lsaXR5LXNldHRpbmdzLXdyYXBwZXIgLmJ0bjpkaXNhYmxlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM3OTc5NzkgIWltcG9ydGFudDtcbn1cbi5mYWNpbGl0eS1zZXR0aW5ncy13cmFwcGVyIC5jYXJkLWhlaWdodCB7XG4gIGhlaWdodDogMTcwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/facility/components/facility-list/facility-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/facility/components/facility-list/facility-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FacilityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilityListComponent", function() { return FacilityListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _service_facility_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/facility-service.service */ "./src/app/ams/facility/service/facility-service.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let FacilityListComponent = class FacilityListComponent {
    constructor(facilityService, facilitylocalservice, lookupService, sharedService, cookieService, router) {
        this.facilityService = facilityService;
        this.facilitylocalservice = facilitylocalservice;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.router = router;
        this.isFacilityCategoryLoaded = false;
    }
    addNewFacilityCategory() {
        this.router.navigate(['/ams/facility/setup'], { queryParams: { type: 'create' } });
    }
    viewFacility(data) {
        this.router.navigate(['/ams/facility/setup'], { queryParams: { type: 'view', id: data.apartmentFacilityId } });
    }
    updateFacility(data) {
        this.router.navigate(['/ams/facility/setup'], { queryParams: { type: 'edit', id: data.apartmentFacilityId } });
    }
    addSlotFacility(data) {
        this.router.navigate(['/ams/facility/setup'], { queryParams: { type: 'slot', id: data.apartmentFacilityId } });
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
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitiesByApartmentId(params).subscribe((res) => {
            this.facilityCategoryData = res.filter(item => {
                return item.isActive;
            });
            this.isFacilityCategoryLoaded = true;
        }, error => {
            console.log(error);
        });
        let entity = {
            LookupTypeId: 101,
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
        };
        this.lookupService.getLookupValueByLookupTypeId(entity).subscribe((res) => {
            this.pesoValue = res[0].lookupValueName;
        });
    }
};
FacilityListComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_2__["FacilityService"] },
    { type: _service_facility_service_service__WEBPACK_IMPORTED_MODULE_4__["FacilityServiceService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
FacilityListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-list/facility-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-list.component.scss */ "./src/app/ams/facility/components/facility-list/facility-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_2__["FacilityService"],
        _service_facility_service_service__WEBPACK_IMPORTED_MODULE_4__["FacilityServiceService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
], FacilityListComponent);



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
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _service_facility_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/facility-service.service */ "./src/app/ams/facility/service/facility-service.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");









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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
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
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.facilityService.getApartmentFacilitiesByApartmentId(params).subscribe((res) => {
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
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: _service_facility_service_service__WEBPACK_IMPORTED_MODULE_5__["FacilityServiceService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
FacilitySetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facility-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./facility-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/facility/components/facility-setup/facility-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./facility-setup.component.scss */ "./src/app/ams/facility/components/facility-setup/facility-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        _service_facility_service_service__WEBPACK_IMPORTED_MODULE_5__["FacilityServiceService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
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
/* harmony import */ var _components_facility_calender_facility_calender_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/facility-calender/facility-calender.component */ "./src/app/ams/facility/components/facility-calender/facility-calender.component.ts");
/* harmony import */ var _components_facility_list_facility_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/facility-list/facility-list.component */ "./src/app/ams/facility/components/facility-list/facility-list.component.ts");
/* harmony import */ var _components_facility_create_facility_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/facility-create/facility-create.component */ "./src/app/ams/facility/components/facility-create/facility-create.component.ts");









const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _components_facility_list_facility_list_component__WEBPACK_IMPORTED_MODULE_7__["FacilityListComponent"] },
    { path: 'setup', component: _components_facility_create_facility_create_component__WEBPACK_IMPORTED_MODULE_8__["FacilityCreateComponent"] },
    { path: 'create-booking', component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["FacilityCreateBookingComponent"] },
    { path: 'edit-booking/:id', component: _shared_components_facility_create_booking_facility_create_booking_component__WEBPACK_IMPORTED_MODULE_4__["FacilityCreateBookingComponent"] },
    { path: 'calendar', component: _components_facility_calender_facility_calender_component__WEBPACK_IMPORTED_MODULE_6__["FacilityCalenderComponent"] },
    { path: 'all-bookings', component: _components_facility_booking_actions_facility_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__["FacilityBookingActionsComponent"] },
    { path: 'reports', component: _components_facility_reports_facility_reports_component__WEBPACK_IMPORTED_MODULE_3__["FacilityReportsComponent"] },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
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
/* harmony import */ var _components_facility_calender_facility_calender_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/facility-calender/facility-calender.component */ "./src/app/ams/facility/components/facility-calender/facility-calender.component.ts");
/* harmony import */ var _components_facility_list_facility_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/facility-list/facility-list.component */ "./src/app/ams/facility/components/facility-list/facility-list.component.ts");
/* harmony import */ var _components_facility_create_facility_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/facility-create/facility-create.component */ "./src/app/ams/facility/components/facility-create/facility-create.component.ts");




















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
            _components_facility_approve_confirmation_modal_facility_approve_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_16__["FacilityApproveConfirmationModalComponent"],
            _components_facility_calender_facility_calender_component__WEBPACK_IMPORTED_MODULE_17__["FacilityCalenderComponent"],
            _components_facility_list_facility_list_component__WEBPACK_IMPORTED_MODULE_18__["FacilityListComponent"],
            _components_facility_create_facility_create_component__WEBPACK_IMPORTED_MODULE_19__["FacilityCreateComponent"]
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