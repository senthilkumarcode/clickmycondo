(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-parking-management-parking-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-slots-container-wrapper\">\n\t<ng-container *ngFor=\"let slot of slotArray; let i = index\">\n\t\t<app-add-slot [index]=\"i\" [array]=\"slotArray\" (outputParams) = \"getSlotArray($event)\"></app-add-slot>\n\t</ng-container>\n\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addSlot()\" *ngIf=\"!isEditSlot\">\n\t\t<span class=\"icon\">+</span>\n\t</a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-slot-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditSlot\">Add Slot</span>\n    \t\t\t\t<span *ngIf=\"isEditSlot\">Edit Slot</span>\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"isArrayOne() && !isEditSlot\" (click)=\"deleteSlot()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isSlotSubmitted && !isSlotAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isSlotSubmitted && !isSlotAdded\">\n\n\t\t\t\t<form #addSlotForm = \"ngForm\" name=\"addSlotForm\" (ngSubmit)=\"submitAddSlotForm(addSlotForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\" [(ngModel)]=\"slot.slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Slot Type</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"slotType\" id=\"Member\" [(ngModel)]=\"slotType\"  value=\"81\" type=\"radio\">\n\t\t                            <label class=\"radio-inline\" for=\"Member\">Member</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"slotType\" id=\"Guest\" [(ngModel)]=\"slotType\" value=\"82\" type=\"radio\">\n\t\t                            <label class=\"radio-inline\" for=\"Guest\">Guest</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\" *ngIf=\"isSlotSelected || isEditSlot\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.apartmentBlockUnitId\" required [disabled]=\"!isBlockSelected\">\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Comment</label>\n\t\t\t                    <textarea placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"slot.comment\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addSlotForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isSlotAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isEditSlot\">Slot added successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isEditSlot\">Slot updated successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-vehicle-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditVehicle\">Add Vehicle</span>\n    \t\t\t\t<span *ngIf=\"isEditVehicle\">Edit Vehicle</span>\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/allotted\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVehicleSubmitted && !isVehicleAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVehicleSubmitted && !isVehicleAdded\">\n\n\t\t\t\t<form #addVehicleForm = \"ngForm\" name=\"addVehicleForm\" (ngSubmit)=\"submitAddVehicleForm(addVehicleForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleNumber\" [(ngModel)]=\"vehicle.vehicleNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"vehicleType\" \n\t\t\t\t\t\t\t        id=\"vehicleType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"vehicleTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of vehicleTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Manufacturer</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleManufacturer\" [(ngModel)]=\"vehicle.vehicleManufacturer\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Model</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleModel\" [(ngModel)]=\"vehicle.vehicleModel\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Driver Number</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleDriverNumber\" [(ngModel)]=\"vehicle.vehicleDriverNumber\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Color</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleColor\" [(ngModel)]=\"vehicle.vehicleColor\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVehicleForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isVehicleAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isEditVehicle\">Vehicle added successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isEditVehicle\">Vehicle updated successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"slot-confirm-wrapper\">\n  <h5 class=\"font-weight-bold mb-4\">{{allocateSlotData.slotMainTypeName | uppercase}}</h5>\n  <form #slotConfirmation = \"ngForm\">\n    <div class=\"row mb-4\">\n      <div class=\"col-sm-7\">\n        <p class=\"allocate-heading\">Allocate Parking Slot: {{allocateSlotData.slotName}}</p>\n      </div>\n      <div class=\"col-sm-5\">\n        <p class=\"allocate-heading\">Located In : {{allocateSlotData.parkingSlotBlockNumber_Label}}</p>\n      </div>\n    </div>\n    <!-- Unit Owned -->\n    <div class=\"row mb-4\" *ngIf=\"allocateSlotData.slotMainTypeId == 299\">\n      <div class=\"col-sm-6\">\n        <p class=\"allocate-heading\">Contact Name{{allocateSlotData.isPrimaryContactName}}</p>\n      </div>\n    </div>\n    <div class=\"row\" *ngIf=\"allocateSlotData.slotMainTypeId == 299\">\n      <div class=\"col-sm-6\">\n        <label>Tower</label>\n          <select name=\"slotBlockno\" id=\"slotBlockno\" [(ngModel)]=\"towerId\" (ngModelChange)=\"getUnits('change')\" class=\"form-control\">\n            <option disabled selected hidden>Select</option>\n            <option *ngFor=\"let item of towerList\" [ngValue]=\"item.apartmentBlockId\">{{item.apartmentBlockNumber}}</option>\n          </select>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"select-box\">\n          <label>Unit No</label>\n          <select name=\"unitNo\" id=\"unitNo\" class=\"form-control\" [(ngModel)]=\"allocateSlotData.apartmentBlockUnitId\" required>\n            <option value=\"\" disabled selected hidden>Select</option>\n            <option *ngFor=\"let item of blockUnit\" [ngValue]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n          </select>\n        </div>\n      </div>\n    </div>\n     <!-- Communuity Owned -->\n    <div class=\"row\" *ngIf=\"allocateSlotData.slotMainTypeId == 300\">\n      <div class=\"col-sm-12\">\n        <div class=\"select-box\">\n            <label>Staff</label>\n            <angular2-multiselect [data]=\"staffsList.dropdownList\" name=\"staffsdropdown\" [(ngModel)]=\"staffsList.selectedItems\" \n            [settings]=\"staffsdropdownSettings\" required>\n            </angular2-multiselect>\n        </div> \n    </div>\n    </div>\n    <div class=\"row mb-2\">\n      <div class=\"col-sm-12\">\n        <div class=\"input-box\">\n          <label>Comments</label>\n          <textarea class=\"comment-box\" placeholder=\"some text here\" [(ngModel)]=\"allocateSlotData.comment\" rows=\"2\" name=\"comment\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"row btn-wrapper\">\n      <div class=\"col-sm-12 text-right\">\n        <button class=\"btn blue mr-3\" [disabled]=\"slotConfirmation.invalid\" (click)=\"slotAllocation()\">Submit</button>\n        <a href=\"javascript:void(0)\" class=\"btn trans-white\" (click)=\"onDismiss()\">Cancel</a>\n      </div>\n    </div>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-view-available-slots-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 class=\"mt-3\" >View Available lots</h5> \n\t\t\t</div>\n\t\t\t<!-- <div class=\"float-right\">\n\t\t\t\t<ul class=\"list-inline float-left\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n    \t\t</div> -->\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #searchBooking = \"ngForm\" name=\"searchBooking\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [(ngModel)]=\"searchBookingHistory.StartDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [(ngModel)]=\"searchBookingHistory.StartTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [(ngModel)]=\"searchBookingHistory.EndDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [(ngModel)]=\"searchBookingHistory.EndTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                    </div>\n\n\t\t\t\t\t<!-- <div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Tower</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"tower\" \n\t\t\t\t\t\t\t        id=\"tower\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div> \n                     \n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Type </label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"stype\" \n\t\t\t\t\t\t\t        id=\"stype\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                    </div> -->\n \n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-left mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"searchBooking.invalid\" (click)=\"getBookingHistoryList()\"   >Search</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form> \n\t\t\t\n\t\t</div>\n\n\t</div>\n \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Add and Edit the slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> \n    \t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body p-0\"> \n\t\t\t<div class=\"scrolling outer\">\n                <div class=\"inner\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <th scope=\"col\">Slot No<span></span></th>\n\t\t\t\t\t\t\t  <th scope=\"col\">Slot Location<span ></span></th>\n\t\t\t\t\t\t\t  <th scope=\"col\">Parking Type<span></span></th>  \n\t\t\t\t\t\t\t  <th scope=\"col\">From Date</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">From Time</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">To Date</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">To Time</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">Visitor ID</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t <tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t\t\t<td class=\"grey\">Car</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">03:57</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">05:50</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">100001</td> \n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t\t\t<td class=\"grey\">Car</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">03:57</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">05:50</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">100001</td> \n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t\t\t<td class=\"grey\">Car</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">03:57</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">05:50</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">100001</td> \n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t\t </tbody> \n\t\t\t\t\t\t</table> \n\t\t\t</div>\n\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"10\"  \n\t\t\t\t[ItemStartIndex]=\"1\"\n\t\t\t\t[ItemEndIndex] = \"10\"\n\t\t\t\t[itemLimit] = \"5\"\n\t\t\t\t(outputParams) = \"1\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-booking-community-to-other-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>View Booking</h5>\n              <p class=\"d-none d-md-inline-block\">View Booking Community Owned to Unit</p>\n          </div>\n          \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                        <th scope=\"col\">Slot Name</th>\n                        <th scope=\"col\">Slot Type</th>\n                        <th scope=\"col\">Unit No </th>\n                        <th scope=\"col\">Resident Name</th> \n                        <th scope=\"col\">Vehicle NO</th> \n                        <th scope=\"col\">Start Date & Time</th>\n                        <th scope=\"col\">End Date & Time</th> \n                        <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                        <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n                       \n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-parkings-slots-wrapper\">\n        <div class=\"card clear table-card mt-30\">\n          <div class=\"card-header\">\n              <div class=\"float-left\">\n                  <h5>View Booking</h5>\n                  <p class=\"d-none d-md-inline-block\">View Booking Community Owned to Unit</p>\n              </div>\n               \n          </div>\n    \n            <div class=\"card-body p-0\">  \n                  <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                            <th scope=\"col\">Slot Name</th>\n                            <th scope=\"col\">Slot Type</th>\n                            <th scope=\"col\">Rented by (type)</th>\n                            <th scope=\"col\">Unit No </th>\n                            <th scope=\"col\">Resident Name</th> \n                            <th scope=\"col\">Vehicle ID</th> \n                            <th scope=\"col\">Vehicle NO</th> \n                            <th scope=\"col\">Visitor Name</th> \n                            <th scope=\"col\">Visitor Contact</th> \n                            <th scope=\"col\">Start Date & Time</th>\n                            <th scope=\"col\">End Date & Time</th> \n                            <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                            <th class=\"text-center\" scope=\"col\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody> \n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n    \n                          \n                      </tbody>\n                  </table> \n              </div>\n           \n                  <app-pagination \n                      [totalItems]=\"20\"  \n                      [ItemStartIndex]=\"1\"\n                      [ItemEndIndex] = \"20\"\n                      [itemLimit] = \"5\" >\t\n                  </app-pagination>\n              \n          </div>\n        </div> \n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-allocate-slots-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-allocated-slots\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Allocated Slots</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\"> \n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tAllocate Parking Slot\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form name=\"addSlotForm\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotBlockno\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotType\" \n\t\t\t\t\t\t\t        id=\"SlotType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Unit Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"UnitBlockNo\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Permanent Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"PermanentUnitNo\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Status</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"Status\" \n\t\t\t\t\t\t\t        id=\"Status\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Staff</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"Staffid\" \n\t\t\t\t\t\t\t        id=\"Staffid\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"301\">Staff 1</option>\n\t\t\t\t\t\t\t\t\t<option value=\"301\">Staff 1</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Slot added successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-allocation-availability-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/set-parking-availablity/unit-parking-availablity\" \n\t\t\t\trouterLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Availability</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5 *ngIf=\"type == 'unit'\">Create Unit to Unit Temporary Allocation</h5>\n\t\t\t\t<h5 *ngIf=\"type == 'community'\">Create Unit to Community</h5>\n\t\t\t\t<h5 *ngIf=\"type == 'other'\">Create Community to Unit</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\t\t\t<form #allocation = \"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t\t<div class=\"row mb-2\">\n\t\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t\t\t<h6 class=\"font-weight-bold pt-3 ml-3\">Search your Slot</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter Three characters to search SlotNo or Owner Name or Owner UnitNo \" name=\"parkingId\" matInput class=\"form-control\" \n\t\t\t\t\t\t\t[(ngModel)]=\"parkingSlotData.displaySlotNumber\" (ngModelChange)=\"slotSubject.next($event)\" [matAutocomplete]=\"auto\">\n\t\t\t\t\t\t\t<mat-autocomplete #auto = \"matAutocomplete\" (optionSelected)=\"onSelectSlot($event)\">\n\t\t\t\t\t\t\t\t<mat-option *ngFor = \"let option of slotData$ | async\" [value] = \"option\">\n\t\t\t\t\t\t\t\t\t{{option.parkingSlotNo}} location {{option.slotTypeName}} ({{option.permOwner}} {{option.apartmentBlockNumber}} {{option.apartmentBlockUnitNumber}})\n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t</mat-autocomplete>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\" *ngIf=\"parkingSlotData.parkingSlotID\">\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Parking Slot Number</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.parkingSlotNo\" placeholder=\"Slot Number\" name=\"slotNumber\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Block No</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.apartmentBlockNumber\" placeholder=\"Slot Location\" name=\"slotLocation\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Permanent Unit No</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.apartmentBlockUnitNumber\" placeholder=\"Slot Type\" name=\"slotTypeName\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Unit Owner</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.permOwner\" placeholder=\"Permanent Owner\" name=\"permOwner\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"type != 'community'\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Temp Block No*</label>\n\t\t\t\t\t\t\t<select name=\"apartmentBlockId\" id=\"blockNo\" class=\"form-control\" [(ngModel)]=\"blockId\" (ngModelChange)=\"getUnits('change')\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of towerList\" [ngValue]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\" *ngIf=\"type != 'community'\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Temp Unit No*</label>\n\t\t\t\t\t\t\t<select name=\"unitNo\" id=\"unitNo\" class=\"form-control\" (change)=\"getVisitorsList('unit')\" [disabled]=\"viewMode\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of unitList\" [ngValue]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Temp Owner</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Temporary owner\" name=\"primaryName\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Start Date</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" name=\"startDate\" [(ngModel)]=\"parkingSlotData.startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n\t\t\t\t\t\t\t<owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Start Time</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" name=\"startTime\" [(ngModel)]=\"parkingSlotData.startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>End Date</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" name=\"endDate\" [(ngModel)]=\"parkingSlotData.endDate\"  [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n\t\t\t\t\t\t\t<owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> \n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>End Time</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" name=\"endTime\" [(ngModel)]=\"parkingSlotData.endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> \n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Slot Rate Type</label>\n\t\t\t\t\t\t\t<select name=\"SlotRateType\" id=\"SlotRateType\"  class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of slotRateList\" [ngValue]=\"item.id\">{{item.name}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Price</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Price\" name=\"price\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Status</label>\n\t\t\t\t\t\t\t<select name=\"status\" id=\"status\"  class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of statusList\" [ngValue]=\"item.lookupValueId\">{{item.lookupValueName}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\t\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" (click)=\"submitParkingSlot()\">Submit</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form> \n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-parking-slots\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Parking Slot</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t{{isCreateSlot ? 'Create Parking Slot' : 'Update Parking Slot'}}\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\t\t\t<form #createParkingSlotForm = \"ngForm\" name=\"addSlotForm\" (ngSubmit)=\"parkingSlot()\"  novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Slot Name</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter Slot Name\" [(ngModel)]=\"createSlot.slotName\" name=\"slotName\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Slot Location</label>\n\t\t\t\t\t\t\t<select name=\"slotBlockno\" id=\"slotBlockno\" [(ngModel)]=\"createSlot.parkingSlotBlockNumber\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<option disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of towerList\" [ngValue]=\"item.apartmentBlockId\">{{item.apartmentBlockNumber}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Slot Main Type</label>\n\t\t\t\t\t\t\t<select name=\"SlotMainType\" id=\"SlotMainType\" [(ngModel)]=\"createSlot.slotMainTypeId\" (change)=\"selectSlotType()\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of slotMainTypeList\" [ngValue]=\"item.lookupValueId\">{{item.lookupValueName}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"createSlot.slotMainTypeId == 299\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Slot Type</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"Unit Owned\" readonly>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"createSlot.slotMainTypeId == 300\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Slot Type</label>\n\t\t\t\t\t\t\t<select name=\"SlotType\" id=\"SlotType\" [(ngModel)]=\"createSlot.slotTypeId\" class=\"form-control\">\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of slotTypeList\" [ngValue]=\"item.lookupValueId\">{{item.lookupValueName}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Vehicle Type</label>\n\t\t\t\t\t\t\t<select name=\"ParkingType\" id=\"ParkingType\" [(ngModel)]=\"createSlot.parkingTypeId\" class=\"form-control\" >\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of parkingTypeList\" [ngValue]=\"item.id\">{{item.name}}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Sq.M</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"createSlot.sqrFt\"  placeholder=\"Enter value\" name=\"sqm\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n    <mat-accordion class=\"pt-5\">\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <div class=\"flex wd-100\">\n                        <div class=\"flex wd-50\">Filter</div>\n                    </div>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <!-- <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5 class=\"mt-3\" >View Available lots</h5> \n                    </div>\n                    <div class=\"float-right\">\n                        <ul class=\"list-inline float-left\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            \n        \n            </div> -->\n            <div class=\"card-body\"> \n        \n                <form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n                                <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                                <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Tower</label>\n                                <select \n                                    name=\"tower\" \n                                    id=\"tower\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n                                </select>\n                            </div>\n                        </div> \n                     \n                        <!-- <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Type </label>\n                                <select    \n                                    name=\"stype\" \n                                    id=\"stype\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n                                </select>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-9 d-flex justify-content-end align-items-center\">\n                            <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                        </div>\n                    </div>\n \n                    <!-- <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <ul class=\"list-inline float-left mt-4\">\n                                <li class=\"list-inline-item\">\n                                    <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                </form> \n            \n        </div>\n            \n        </mat-expansion-panel>\n    </mat-accordion>\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Community to Others Allocation</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n                </li>\n                \n                <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n                    [routerLink]=\"['/ams/parking-management/create-allocation','other']\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Allocate</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n  \n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n      </div>\n     \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n    <mat-accordion class=\"pt-5\">\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <div class=\"flex wd-100\">\n                        <div class=\"flex wd-50\">Filter</div>\n                    </div>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <!-- <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5 class=\"mt-3\" >View Available lots</h5> \n                    </div>\n                    <div class=\"float-right\">\n                        <ul class=\"list-inline float-left\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            \n        \n            </div> -->\n            <div class=\"card-body\"> \n        \n                <form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n                                <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                                <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Tower</label>\n                                <select \n                                    name=\"tower\" \n                                    id=\"tower\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n                                </select>\n                            </div>\n                        </div> \n                     \n                        <!-- <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Type </label>\n                                <select \n                                    name=\"stype\" \n                                    id=\"stype\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n                                </select>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-9 d-flex justify-content-end align-items-center\">\n                            <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                        </div>\n                    </div>\n \n                    <!-- <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <ul class=\"list-inline float-left mt-4\">\n                                <li class=\"list-inline-item\">\n                                    <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                </form> \n            \n        </div>\n            \n        </mat-expansion-panel>\n    </mat-accordion>\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Unit to Community</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n                </li>\n                \n                <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n                    [routerLink]=\"['/ams/parking-management/create-allocation','community']\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Allocate</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n  \n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n      </div>    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <mat-accordion class=\"pt-5\">\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <div class=\"flex wd-100\">\n                        <div class=\"flex wd-50\">Filter</div>\n                    </div>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <!-- <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5 class=\"mt-3\" >View Available lots</h5> \n                    </div>\n                    <div class=\"float-right\">\n                        <ul class=\"list-inline float-left\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            \n        \n            </div> -->\n            <div class=\"card-body\"> \n        \n                <form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n                                <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                                <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Tower</label>\n                                <select \n                                    name=\"tower\" \n                                    id=\"tower\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n                                </select>\n                            </div>\n                        </div> \n                     \n                        <!-- <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Type </label>\n                                <select \n                                    name=\"stype\" \n                                    id=\"stype\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n                                </select>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-9 d-flex justify-content-end align-items-center\">\n                            <button class=\"btn blue mr-2\" (click)=\"searchList()\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                        </div>\n                    </div>\n \n                    <!-- <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <ul class=\"list-inline float-left mt-4\">\n                                <li class=\"list-inline-item\">\n                                    <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                </form> \n            \n        </div>\n            \n        </mat-expansion-panel>\n    </mat-accordion>\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Unit to Unit Allocation</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" [routerLink]=\"['/ams/parking-management/create-allocation','unit']\" \n                        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Allocate</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-wrapper\">\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <ul class=\"legends list-inline\" *ngIf=\"!isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots bg-red-900\"></span>UnAllocated</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots bg-green-900\"></span>Allocated</li>\n\t</ul>\n    <div class=\"card table-card mt-30 clear\" *ngIf=\"!isDataLoaded\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Manage Allocated Slots</h5>\n                <p class=\"d-none d-md-inline-block\">View Allocated Slots</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item d-none search d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"allocateFilter\"  (ngModelChange)=\"searchAllocate()\" >\n                </li>\n                <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                 <li class=\"list-inline-item\"></li>  <!-- This Line is Must, If you removed console error occurred -->\n            </ul>\n        </div>\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"allocatedSlotData\" [columns]=\"allocatedSlotHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.html":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.html ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>You are Booking Sot: A101 locatedin Tower 1</h2>\n<div mat-dialog-content>\n    <form>\n<div class=\"row\">\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>From</label>\n                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\"\n                    placeholder=\"Start Date\">\n                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>To</label>\n                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\"\n                    placeholder=\"End Date\">\n                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>Visitor ID</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n            </div>\n        </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Phone</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Vehicle No</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Rate</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Total Amount</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n</div>\n</form>\n\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button class=\"btn blue\">\n        <!-- {{config.type=='ADD'? 'Submit':'Update'}} -->\n        Submit\n    </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-booking-community-to-other-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Booking</h5>\n              <p class=\"d-none d-md-inline-block\">Manage Booking Community to Other</p>\n          </div>\n           \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                      <th scope=\"col\">Slot Type</th>\n                      <th scope=\"col\">Rented by (type)</th>\n                      <th scope=\"col\">Unit No </th>\n                      <th scope=\"col\">Resident Name</th>\n                      <th scope=\"col\">Visitor ID</th>\n                      <th scope=\"col\">Vehicle NO</th>\n                      <th scope=\"col\">Visitor Name</th>\n                      <th scope=\"col\">Visitor Contact</th>\n                      <th scope=\"col\">Start Date & Time</th>\n                      <th scope=\"col\">End Date & Time</th>\n                      <th scope=\"col\">Slot Rate Type</th>\n                      <th scope=\"col\">Fees</th>\n                      <th scope=\"col\">Paid (Y/N)</th>\n                      <th scope=\"col\">Paid Date & Time</th>\n                      <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                      <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-booking-unit-to-community-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Booking</h5>\n              <p class=\"d-none d-md-inline-block\">Manage Booking Unit to Community</p>\n          </div>\n          \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                      <th scope=\"col\">Slot Name</th>\n                      <th scope=\"col\">Slot Type</th>\n                      <th scope=\"col\">Rented by (type)</th>\n                      <th scope=\"col\">Unit No </th>\n                      <th scope=\"col\">Resident Name</th>\n                      <th scope=\"col\">Visitor ID</th>\n                      <th scope=\"col\">Vehicle NO</th>\n                      <th scope=\"col\">Visitor Name</th>\n                      <th scope=\"col\">Visitor Contact</th>\n                      <th scope=\"col\">Start Date & Time</th>\n                      <th scope=\"col\">End Date & Time</th>\n                      <th scope=\"col\">Slot Rate Type</th>\n                      <th scope=\"col\">Fees</th>\n                      <th scope=\"col\">Paid (Y/N)</th>\n                      <th scope=\"col\">Paid Date & Time</th>\n                      <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                      <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-view-available-slots-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 class=\"mt-3\" >View Available lots</h5> \n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<ul class=\"list-inline float-left\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                    </div>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Tower</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"tower\" \n\t\t\t\t\t\t\t        id=\"tower\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div> \n                     \n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Type </label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"stype\" \n\t\t\t\t\t\t\t        id=\"stype\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                    </div>\n \n\t\t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-left mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t</form> \n\t\t\t\n\t\t</div>\n\n\t</div>\n \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Add and Edit the slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> \n    \t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body p-0\"> \n\t\t\t<div class=\"scrolling outer\">\n                <div class=\"inner\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Available Slot<span></span></th>\n\t\t\t\t      <th scope=\"col\">Tower <span ></span></th>\n\t\t\t\t      <th scope=\"col\">Community Owned/Community Temp Owned<span></span></th>  \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\t (click)=\"openConfirmation()\"  >\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A102</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A103</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-3</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t     </tbody> \n\t\t\t\t</table> \n\t\t\t</div>\n\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"10\"  \n\t\t\t\t[ItemStartIndex]=\"1\"\n\t\t\t\t[ItemEndIndex] = \"10\"\n\t\t\t\t[itemLimit] = \"5\"\n\t\t\t\t(outputParams) = \"1\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.html":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-common-filter-wrapper\">\n    <ul class=\"list-group tabs clear filter-collapse\" id=\"accordion2\">\n        <li class=\"list-group-item\" #accordion2 data-toggle=\"collapse\" data-target=\"#parking\"\n            aria-expanded=\"false\" aria-controls=\"collapseOne\">\n            <h6>Filter</h6>\n        </li>\n        <div id=\"parking\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion2\">\n            <div class=\"card\">\n                <div class=\"card-body\"> \n                    <form>\n                        <div class=\"row\"> \n                            <div class=\"col-sm-3\">\n                                <div class=\"input-box\">\n                                    <label>Start Date</label>\n                                    <input class=\"form-control\" name=\"startDate\" [(ngModel)]=\"filter.startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                    <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"input-box\">\n                                    <label>Start Time</label>\n                                    <input class=\"form-control\" name=\"startTime\" [(ngModel)]=\"filter.startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Start Time\">\n                                    <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\">\n                                <div class=\"input-box\">\n                                    <label>End Date</label>\n                                    <input class=\"form-control\" name=\"endDate\" [(ngModel)]=\"filter.endDate\"  [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                    <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </div> \n                            <div class=\"col-sm-3\">\n                                <div class=\"input-box\">\n                                    <label>End Time</label>\n                                    <input class=\"form-control\" name=\"endTime\" [(ngModel)]=\"filter.endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                                    <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                                    <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                        <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                    </div>\n                                </div>\n                            </div> \n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <ul class=\"list-inline float-right mt-4\">\n                                    <li class=\"list-inline-item\">\n                                        <button class=\"btn blue\" (click)=\"filterSlot()\">Submit</button>\n                                        <button class=\"btn mr-2\" (click)=\"filterSlot()\">Cancel</button>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </ul>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-parkings-slots-wrapper\">\n\t<app-loader *ngIf=\"isDataLoaded\"></app-loader>\n  \t<div class=\"card table-card mt-30 clear\" *ngIf=\"!isDataLoaded\">\n        <div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Parking Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Manage Parking Slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"slotFilter\"  (ngModelChange)=\"searchSlot()\" >\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t\t<li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\" routerLink=\"/ams/parking-management/create-parking-slot\" routerLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Parking Slot</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n\t\t</div>\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"slotDataList\" [columns]=\"slotHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid>\n        </div>\n\t</div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-management-allotted-wrapper\">\n\t\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Select Block</h5>\n    \t\t</div>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n\t\t\t<form name=\"selectBlockForm\" novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockNumber\"\n\t\t\t\t\t\t        (ngModelChange)=\"showSelectedBlockSlots()\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\t\t\t  \n\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockNumber\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t    </select>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n  \t</div>\n\n  \t<app-loader *ngIf=\"!isDataLoaded && isBlockSelected\"></app-loader>\n\n  \t<div class=\"card table-card mt-30\" *ngIf=\"isDataLoaded\">\n  \t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Allotted Slots</h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n  \t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('slotName')\">Slot Name <span [ngClass]=\"getFieldOrderBy('slotName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('userName')\">Person Name <span [ngClass]=\"getFieldOrderBy('userName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('slotType')\">Slot Type <span [ngClass]=\"getFieldOrderBy('slotType')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Flat No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Vehicle Details <span></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let slot of allottedSlotListData | simpleSearch: unitData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex; let i = index\">\n\t\t\t\t      <td>{{slot.slotName}}</td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popNameContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{slot.userName}}</a>\n\t\t\t\t      \t<ng-template #popNameContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.type}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>From Date</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.fromdate}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>To Date</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.todate}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Comments</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.notes}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getSlotType(slot.slotTypeId, i)}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.blockNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.unitNo}}</td>\n\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-green\"  *ngIf=\"slot.isVehicleAvailable\" (click)=\"showVehicleInfo(i)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-blue\"  *ngIf=\"slot.isVehicleAvailable\" routerLink=\"/ams/parking-management/edit-vehicle/{{slot.vehicleId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t<i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>\n\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-s-blue\"  *ngIf=\"!slot.isVehicleAvailable\" (click)=\"showVehicleInfo(i)\" placement=\"top\" [ngbPopover]=\"popVehicleContent\" triggers=\"mouseenter:mouseleave\" routerLink=\"/ams/parking-management/add-vehicle/{{slot.parkingSlotId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t<i-feather class=\"icon plus\" name=\"plus\"></i-feather></a>\n\t\t\t\t      \t<ng-template #popVehicleContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<h5>Add Vehicle</h5>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      \n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n  \t</div>\n\n  \t<ng-template #viewVehicleRef let-vehicle>\n    \t<div class=\"vehicle-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Vehicle Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Number</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Type</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.type}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Manufacturer</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleManufacturer}}<span *ngIf=\"vehicle.vehicleManufacturer === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Model</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleModel}}<span *ngIf=\"vehicle.vehicleModel === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Driver Number</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleDriverNumber}}<span *ngIf=\"vehicle.vehicleDriverNumber === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Color</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleColor}}<span *ngIf=\"vehicle.vehicleColor === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  parking-management-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-add-setup-vehicle-type-wrapper\">\n\t<div *ngIf=\"config.type == 'Vehicle Type';else raiseTicket\">\n\t\t<form #addVehicleForm = \"ngForm\" name=\"addVehicleForm\" (ngSubmit)=\"submitAddVehicleForm(addVehicleForm)\"  novalidate>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>{{config.type}}</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"vehicleCategory\" [(ngModel)]=\"vehicleCategory\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVehicleForm.invalid\">{{config.category == 'add'? 'Submit':'Update'}}</button>\n\t\t\t\t\t<button class=\"btn mr-2\" (click)=\"closeDialog(false)\"  >Cancel</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n\t<ng-template #raiseTicket>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12 d-flex flex-row-reverse\">\n\t\t\t\t<h6 class=\"mt-1 mb-1 font-weight-bold\">Please Raise a Service Ticket</h6>\n\t\t\t\t<button class=\"btn mr-2\" (click)=\"closeDialog(false)\">Cancel</button>\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n\t\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-settings\">\n\n\n\t<div class=\"row\">\n\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Vehicle Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isVehicleDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isVehicleDataLoaded\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of vehicleCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">\n\t\t\t\t\t\t\t\t\t<span>{{item.lookupValueName}}</span>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" placement=\"left\" triggers=\"manual\" #vehicleType=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"vehicleType.open()\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<i-feather (click)=\"deleteType(item,2)\"   class=\"icon x-circle\" name=\"x-circle\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Vehicle Type',category:'edit'}\"  [typeId]=\"2\" [typeData]=\"{valueId:item.lookupValueId,valueName:item.lookupValueName}\" (emitConfig)=\"refreshList($event);vehicleType.close()\" (toggleDialog)=\"vehicleType.close()\"  >\n\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" placement=\"left\" triggers=\"manual\" #vehicleType=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"vehicleType.open()\">\n\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Vehicle Type',category:'add'}\" [typeId]=\"2\" (emitConfig)=\"refreshList($event);vehicleType.close()\" (toggleDialog)=\"vehicleType.close()\" ></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Slot Main Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isSlotMainDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isSlotMainDataLoaded\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of slotMainCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">\n\t\t\t\t\t\t\t\t\t<span>{{item.lookupValueName}}</span>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" placement=\"left\" triggers=\"manual\" #mainSlot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"mainSlot.open()\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\"\n\t\t\t\t\t\t\t\t\t\t\taria-labelledby=\"editVehicleDropDown\">\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"edit\"\n\t\t\t\t\t\t\t\t\t\t\t\t[typeId]=\"item.lookupValueId\"></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Main Type',category:'edit'}\" [typeId]=\"71\" [typeData]=\"{valueId:item.lookupValueId,valueName:item.lookupValueName}\" (emitConfig)=\"refreshList($event);mainSlot.close()\" (toggleDialog)=\"mainSlot.close()\">\n\t\t\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<i-feather (click)=\"deleteType(item,71)\"   class=\"icon x-circle\" name=\"x-circle\"></i-feather>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" placement=\"left\" triggers=\"manual\" #mainSlot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"mainSlot.open()\" >\n\t\t\t\t\t\t\t\tAdd<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Main Type',category:'add'}\" [typeId]=\"71\" (emitConfig)=\"refreshList($event);mainSlot.close()\" (toggleDialog)=\"mainSlot.close()\" ></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"addVehicleDropDown\">\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"add\"></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Slot Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isSlotDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isSlotDataLoaded\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of slotCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">\n\t\t\t\t\t\t\t\t\t<span>{{item.lookupValueName}}</span>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\"  placement=\"left\" triggers=\"manual\" #slot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"slot.open()\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\"\n\t\t\t\t\t\t\t\t\t\t\taria-labelledby=\"editSlotDropDown\">\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"edit\"\n\t\t\t\t\t\t\t\t\t\t\t\t[typeId]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Type',category:'edit'}\" [typeId]=\"18\" [typeData]=\"{valueId:item.lookupValueId,valueName:item.lookupValueName}\" (emitConfig)=\"refreshList($event);slot.close()\" (toggleDialog)=\"slot.close()\">\n\t\t\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<i-feather (click)=\"deleteType(item,18)\"   class=\"icon x-circle\" name=\"x-circle\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" placement=\"left\" triggers=\"manual\" #slot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"slot.open()\">\n\t\t\t\t\t\t\t\tAdd<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Type',category:'add'}\" [typeId]=\"18\" (emitConfig)=\"refreshList($event);slot.close()\" (toggleDialog)=\"slot.close()\" ></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"addSlotDropDown\">\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"add\">\n\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\n\t\t\t</div>\n\n\n\n\t\t</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-management-slot-types-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 slot-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slot Type <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Slot types</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"slotData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewSlotType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Slot</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n                      <th scope=\"col\">S.No</th>\n                      <th scope=\"col\">Slot Main Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Slot Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let slot of slotDataList | simpleSearch: slotData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{i + 1}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.description}}</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateSlotType(slot)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteSlotType(slot)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 slot-type-card\" *ngIf=\"isSlotTypeNew || isSlotTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isSlotTypeNew\">Add Slot Type</h6>\n    \t\t\t<h6 *ngIf=\"!isSlotTypeNew\">Update Slot Type</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeSlotTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<app-alert-message [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isSlotTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isSlotTypeSubmitted\">\n\n\t\t\t\t<form #addSlotTypeForm = \"ngForm\" name=\"addSlotTypeForm\"  (ngSubmit)=\"submitAddSlotTypeForm(addSlotTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Slot Main Type*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"slotMainType\" \n\t\t\t\t\t\t\t        id=\"slotMainType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.slotMainType\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of slotMainTypeDataList\" [value]=\"item.lookupValueName\">{{item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label> Slot Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\" SlotType\"  [(ngModel)]=\"slot.slotType\"   required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addSlotTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  parking-management-unallotted works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-management-vehicle-types-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 vehicle-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Vechile Type <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Vehicle types</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"vehicleData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewVehicleType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Vehicle</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Sno <span [ngClass]=\"getFieldOrderBy('primayContact')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Vehicle Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let vehicle of vehicleDataList | simpleSearch: vehicleData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{i + 1}}</td>\n\t\t\t\t      <td class=\"grey\">{{vehicle.lookupValueName}}</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateVehicleType(vehicle)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteVehicleType(vehicle)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 vehicle-type-card\" *ngIf=\"isVehicleTypeNew || isVehicleTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isVehicleTypeNew\">Add Vehicle Type</h6>\n    \t\t\t<h6 *ngIf=\"!isVehicleTypeNew\">Update Vehicle Type</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeVehicleTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<app-alert-message [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isVehicleTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isVehicleTypeSubmitted\">\n\n\t\t\t\t<form #addvehicleTypeForm = \"ngForm\" name=\"addvehicleTypeForm\"  (ngSubmit)=\"submitAddvehicleTypeForm(addvehicleTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"vehicleType\" [(ngModel)]=\"vehicleType\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addvehicleTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-setup-wrapper\">\n\t\t<app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n\t\t<div class=\"d-block mt-5\">\n\t\t\t<div class=\"pt-3\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-setup-wrapper\">\n    <div class=\"card mb-30\" *ngIf=\"isShowCreateSlot\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5 class=\"mt-3\">Setup Slot Rate Type</h5>\n            </div>\n        </div>\n        <div class=\"card-body\">\n            <ng-container>\n                <form #addslotypeForm=\"ngForm\" name=\"addslotypeForm\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"select-box\">\n                                <label>Slot Rate Type*</label>\n                                <select name=\"SlotRateType\" id=\"SlotRateType\" class=\"form-control\"\n                                    [(ngModel)]=\"slotRateParam.name\" required>\n                                    <option value=\"Per Hour\">Per Hour</option>\n                                    <option value=\"Daily 24 Hrs\">Daily 24 Hrs</option>\n                                    <option value=\"Monthly\">Monthly</option>\n                                    <option value=\"Yearly\">Yearly</option>\n                                    <option value=\"Quaterly\">Quarterly</option>\n                                    <option value=\"Overnight 12 Hrs\">Overnight 12 Hrs</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-box\">\n                                <label> Rate*</label>\n                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"slotRateParam.fee\"\n                                    placeholder=\"Enter text\" name=\"rate\" required>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"select-box\">\n                                <label>Calculation Type *</label>\n                                <select name=\"CalculationType \" id=\"CalculationType\" class=\"form-control\"\n                                    [(ngModel)]=\"slotRateParam.feeCalcultionType\" required>\n                                    <option value=\"One Time\">Onetime</option>\n                                    <option value=\"Daily\">Daily</option>\n                                    <option value=\"Monthly\">Monthly</option>\n                                </select>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12 d-flex justify-content-end\">\n                            <button class=\"btn blue mr-2\" [disabled]=\"addslotypeForm.invalid\"\n                                (click)=\"slotRateType()\">{{isCreateSlot ? 'Submit' : 'Update'}}</button>\n                            <button class=\"btn\" (click)=\"isShowCreateSlot=false\"  >Cancel</button>\n                        </div>\n                    </div>\n\n                </form>\n            </ng-container>\n        </div>\n    </div>\n\n\n    <div class=\"card table-card mb-30\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Slot Rate Type</h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"filterSlotRate\" \n    \t\t\t\t(ngModelChange)=\"searchSlotRate()\" >\n                </li>\n\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" (click)=\"isShowCreateSlot=true;isCreateSlot=true;\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Create Slot Rate</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"slotRateData\" [columns]=\"slotRateHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-view-available-slots-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>View Available lots</h5> \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                    </div>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Tower</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"tower\" \n\t\t\t\t\t\t\t        id=\"tower\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div> \n                     \n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Type </label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"stype\" \n\t\t\t\t\t\t\t        id=\"stype\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Unit Owned\" >Unit Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                    </div>\n \n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-left mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form> \n\t\t\t\n\t\t</div>\n\n\t</div>\n \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Add and Edit the slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> \n    \t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body p-0\"> \n\t\t\t<div class=\"scrolling outer\">\n                <div class=\"inner\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Available Slot<span></span></th>\n\t\t\t\t      <th scope=\"col\">Tower <span ></span></th>\n\t\t\t\t      <th scope=\"col\">Unit owned/Community Owned<span></span></th>  \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A102</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A103</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-3</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t     </tbody> \n\t\t\t\t</table> \n\t\t\t</div>\n\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"10\"  \n\t\t\t\t[ItemStartIndex]=\"1\"\n\t\t\t\t[ItemEndIndex] = \"10\"\n\t\t\t\t[itemLimit] = \"5\"\n\t\t\t\t(outputParams) = \"1\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.html":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.html ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"community-parking-availability-wrapper\">\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <ng-container *ngIf=\"!isDataLoaded\">\n        <app-parking-manage-filter [type]=\"'unit'\" (filterObj)=\"filterData($event)\"></app-parking-manage-filter>\n    </ng-container>\n    <div *ngIf=\"!isDataLoaded\" class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Make Community Parking Available</h5>\n                <p class=\"d-none d-md-inline-block\">You are making Community Parking Available for Booking</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"communityFilter\" (ngModelChange)=\"communitySearch()\">\n                </li>\n                <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" [routerLink]=\"['/ams/parking-management/create-availability','community']\"\n                        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Set Availablity</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"communityAllocationData\" [columns]=\"communityAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-availability-wrapper\">\n    <div class=\"relative-card float-right\">\n        <div class=\"relative-icon\">\n            <a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/set-parking-availablity/unit-parking-availablity\" \n                routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n                <div class=\"icon-wrapper\">\n                    <img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n                </div>\n                <span class=\"d-inline-block\">View Availability</span>\n            </a>\n        </div>\n    </div>\n    <div class=\"card clear mb-30\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Set Availability for {{type | titlecase}} Parking</h5>\n            </div>\n        </div>\n        <div class=\"card-body\"> \n            <form #createParkingSlotForm = \"ngForm\" name=\"addSlotForm\" novalidate>\n                <div class=\"row mb-2\">\n                    <div class=\"col-sm-2\">\n                        <h6 class=\"font-weight-bold pt-3 ml-3\">Search your Slot</h6>\n                    </div>\n                    <div class=\"col-sm-8\">\n                        <div class=\"input-box\">\n                            <input type=\"text\" placeholder=\"Enter Three characters to search SlotNo or Owner Name or Owner UnitNo \" name=\"parkingId\" matInput class=\"form-control\" \n                            [(ngModel)]=\"parkingSlotData.displaySlotNumber\" (ngModelChange)=\"slotSubject.next($event)\" [matAutocomplete]=\"auto\">\n                            <mat-autocomplete #auto = \"matAutocomplete\" (optionSelected)=\"onSelectSlot($event)\">\n                                <mat-option *ngFor = \"let option of slotData$ | async\" [value] = \"option\">\n                                    {{option.parkingSlotNo}} location {{option.slotTypeName}} ({{option.permOwner}} {{option.apartmentBlockNumber}} {{option.apartmentBlockUnitNumber}})\n                                </mat-option>\n                            </mat-autocomplete>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"parkingSlotData.parkingSlotID\">\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Parking Slot Number</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.parkingSlotNo\" placeholder=\"Slot Number\" name=\"slotNumber\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Slot Location</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.parkingSlotBlockNumber\" placeholder=\"Slot Location\" name=\"slotLocation\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Slot Type</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.slotTypeName\" placeholder=\"Slot Type\" name=\"slotTypeName\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Owner</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"parkingSlotData.permOwner\" placeholder=\"Permanent Owner\" name=\"permOwner\" readonly>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\"> \n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Start Date</label>\n                            <input class=\"form-control\" name=\"startDate\" [(ngModel)]=\"parkingSlotData.startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                            <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Start Time</label>\n                            <input class=\"form-control\" name=\"startTime\" [(ngModel)]=\"parkingSlotData.startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Start Time\">\n                            <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n                                <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>End Date</label>\n                            <input class=\"form-control\" name=\"endDate\" [(ngModel)]=\"parkingSlotData.endDate\"  [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                            <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                            </div>\n                        </div>\n                    </div> \n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>End Time</label>\n                            <input class=\"form-control\" name=\"endTime\" [(ngModel)]=\"parkingSlotData.endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                            <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                            <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                            </div>\n                        </div>\n                    </div> \n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <ul class=\"list-inline float-right mt-4\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\" (click)=\"submitParkingSlot()\">Submit</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </form> \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.html":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.html ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"unit-parking-availability-wrapper\">\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <ng-container *ngIf=\"!isDataLoaded\">\n        <app-parking-manage-filter [type]=\"'unit'\" (filterObj)=\"filterData($event)\"></app-parking-manage-filter>\n    </ng-container>\n    <div *ngIf=\"!isDataLoaded\" class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Make Unit Parking Available</h5>\n                <p class=\"d-none d-md-inline-block\">You are making Resident Parking Available(on behalf ofresident)</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitFilter\" (ngModelChange)=\"unitSearch()\">\n                </li>\n                <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" [routerLink]=\"['/ams/parking-management/create-availability','unit']\" \n                        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Set Availablity</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/parking-management.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/parking-management.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL2FkZC1zbG90LWNvbnRhaW5lci9hZGQtc2xvdC1jb250YWluZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddSlotContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSlotContainerComponent", function() { return AddSlotContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AddSlotContainerComponent = class AddSlotContainerComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.slotCount = 1;
        this.isEditSlot = false;
    }
    addSlot() {
        this.slotCount++;
        this.slotArray = Array(this.slotCount).fill(0).map((x, i) => i);
    }
    getSlotArray(event) {
        this.slotCount = event;
        this.slotArray = Array(this.slotCount).fill(0).map((x, i) => i);
    }
    ngOnInit() {
        if (this.route.params['value'].id != undefined) {
            this.isEditSlot = true;
        }
        this.slotArray = Array(this.slotCount).fill(0).map((x, i) => i);
    }
};
AddSlotContainerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddSlotContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-slot-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-slot-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-slot-container.component.scss */ "./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddSlotContainerComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL2FkZC1zbG90L2FkZC1zbG90LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AddSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSlotComponent", function() { return AddSlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








let AddSlotComponent = class AddSlotComponent {
    constructor(router, route, vehicleService, apartmentService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.vehicleService = vehicleService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.slotType = null;
        this.apartmentBlockId = "";
        this.apartmentBlockUnitId = "";
        this.isEditSlot = false;
        this.isSlotSelected = false;
        this.isSlotSubmitted = false;
        this.isSlotAdded = false;
        this.isError = false;
        this.errorMessage = "";
        this.isBlockSelected = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    isArrayOne() {
        return this.slotArray.length > 1 ? true : false;
    }
    deleteSlot() {
        this.slotArray.splice(this.index, 1);
        this.outputParams.emit(this.slotArray.length);
    }
    getUnits() {
        let blockParams = {
            apartmentBlockId: parseInt(this.slot.apartmentBlockId)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(blockParams).subscribe((res) => {
            this.isSlotSelected = true;
            this.isBlockSelected = true;
            this.unitData = res;
        }, error => {
            console.log(error);
        });
    }
    submitAddSlotForm(form) {
        this.isSlotSubmitted = true;
        if (!this.isEditSlot) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.slot.apartmentBlockUnitId),
                "slotName": this.slot.slotName,
                "slotTypeId": parseInt(this.slotType),
                "comment": this.slot.comment,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-19T19:53:19.815Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-19T19:53:19.815Z"
            };
            let params = {
                parkingSlot: details
            };
            this.vehicleService.addParkingSlot(params).subscribe((res) => {
                if (res.message) {
                    this.isSlotAdded = true;
                }
                else {
                    this.isSlotSubmitted = false;
                    this.isSlotAdded = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
            });
        }
        else {
            let details = {
                "parkingSlotId": this.route.params['value'].id,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "apartmentBlockUnitId": parseInt(this.slot.apartmentBlockUnitId),
                "slotName": this.slot.slotName,
                "slotTypeId": parseInt(this.slotType),
                "comment": this.slot.comment,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-19T19:53:19.815Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-19T19:53:19.815Z"
            };
            let params = {
                parkingSlot: details
            };
            this.vehicleService.updateParkingSlot(params).subscribe((res) => {
                if (res.message) {
                    this.isSlotAdded = true;
                }
                else {
                    this.isSlotSubmitted = false;
                    this.isSlotAdded = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
            });
        }
    }
    ngOnInit() {
        this.slot = {};
        this.slotType = "";
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //get apartment blocks
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.blocksData = res;
        });
        if (this.route.params['value'].id != undefined) {
            this.isEditSlot = true;
            this.isBlockSelected = false;
            this.vehicleService.getParkingSlotById(this.route.params['value'].id).subscribe((res) => {
                this.slot = res[0];
                this.slotType = this.slot.slotTypeId.toString();
                this.slot.apartmentBlockUnitId = res[0].apartmentBlockUnitId.toString();
                //get block unit
                this.apartmentService.getApartmentBlockUnitById(this.slot.apartmentBlockUnitId).subscribe((block) => {
                    this.slot.apartmentBlockId = block[0].apartmentBlockId.toString();
                    let params = {
                        apartmentBlockId: parseInt(this.slot.apartmentBlockId)
                    };
                    this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
                        this.isSlotSelected = true;
                        this.unitData = res;
                    }, error => {
                        console.log(error);
                    });
                }, error => {
                });
            }, error => {
            });
        }
    }
};
AddSlotComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddSlotComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddSlotComponent.prototype, "slotArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddSlotComponent.prototype, "outputParams", void 0);
AddSlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-slot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-slot.component.scss */ "./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AddSlotComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL2FkZC12ZWhpY2xlL2FkZC12ZWhpY2xlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








let AddVehicleComponent = class AddVehicleComponent {
    constructor(router, route, vehicleService, apartmentService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.vehicleService = vehicleService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditVehicle = false;
        this.isVehicleSubmitted = false;
        this.isVehicleAdded = false;
        this.isError = false;
        this.errorMessage = "";
        this.vehicleTypeId = "";
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    submitAddVehicleForm(form) {
        this.isVehicleSubmitted = true;
        if (!this.isEditVehicle) {
            let details = {
                "vehicleNumber": this.vehicle.vehicleNumber,
                "vehicleTypeId": parseInt(this.vehicleTypeId),
                "vehicleManufacturer": this.vehicle.vehicleManufacturer,
                "vehicleModel": this.vehicle.vehicleModel,
                "vehicleDriverNumber": this.vehicle.vehicleDriverNumber,
                "vehicleColor": this.vehicle.vehicleColor,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T06:34:51.891Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-20T06:34:51.891Z"
            };
            let params = {
                vehicle: details
            };
            this.vehicleService.addVehicle(params).subscribe((res) => {
                if (res.message) {
                    var vehicleId = res.message;
                    let mapVehicleDetails = {
                        "apartmentBlockUnitId": this.apartmentBlockUnitId,
                        "vehicleId": vehicleId,
                        "userId": parseInt(this.cookieService.get('userId')),
                        "documentId": 0,
                        "parkingSlotId": parseInt(this.route.params['value'].slotid),
                        "stickerNumber": "string",
                        "rfid": "string",
                        "fromDate": "2019-11-20T07:23:30.495Z",
                        "toDate": "2019-11-20T07:23:30.495Z",
                        "isPassIssued": true,
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": "2019-11-20T07:23:30.495Z",
                        "updatedBy": 0,
                        "updatedOn": "2019-11-20T07:23:30.495Z"
                    };
                    let params = {
                        apartmentBlockUnitVehicle: mapVehicleDetails
                    };
                    this.vehicleService.addApartmentBlockUnitVehicle(params).subscribe((res) => {
                        if (res.message) {
                            this.isVehicleAdded = true;
                        }
                    });
                }
                else {
                    this.isVehicleSubmitted = false;
                    this.isVehicleAdded = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            }, error => {
            });
        }
        else {
            let details = {
                "vehicleId": parseInt(this.route.params['value'].id),
                "vehicleNumber": this.vehicle.vehicleNumber,
                "vehicleTypeId": parseInt(this.vehicleTypeId),
                "vehicleManufacturer": this.vehicle.vehicleManufacturer,
                "vehicleModel": this.vehicle.vehicleModel,
                "vehicleDriverNumber": this.vehicle.vehicleDriverNumber,
                "vehicleColor": this.vehicle.vehicleColor,
                "isActive": true,
                "insertedBy": 3,
                "insertedOn": "2019-11-20T06:34:51.891Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-20T06:34:51.891Z"
            };
            let params = {
                vehicle: details
            };
            this.vehicleService.updateVehicle(params).subscribe((res) => {
                if (res.message) {
                    this.isVehicleAdded = true;
                }
                else {
                    this.isVehicleSubmitted = false;
                    this.isVehicleAdded = false;
                    this.isError = true;
                    this.errorMessage = res.errorMessage;
                }
            });
        }
    }
    ngOnInit() {
        this.vehicle = {};
        let params = {
            LookupTypeId: 2
        };
        //get vehicle type
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.vehicleTypeData = res;
            console.log(res);
        });
        if (this.route.params['value'].id != undefined) {
            this.isEditVehicle = true;
            this.vehicleService.getVehicleByVehicleId(this.route.params['value'].id).subscribe((res) => {
                this.vehicle = res[0];
                this.vehicleTypeId = res[0].vehicleTypeId.toString();
            });
        }
        if (this.route.params['value'].slotid != undefined) {
            this.vehicleService.getParkingSlotById(this.route.params['value'].slotid).subscribe((res) => {
                this.apartmentBlockUnitId = res[0].apartmentBlockUnitId;
            });
        }
    }
};
AddVehicleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddVehicleComponent.prototype, "outputParams", void 0);
AddVehicleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vehicle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-vehicle.component.scss */ "./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AddVehicleComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/* @mixin desp-regular {\n   font-family: 'Lato', sans-serif;\n   font-weight: 400;\n   letter-spacing: 0.3px;   \n   -webkit-font-smoothing: inherit;\n   -moz-osx-font-smoothing: inherit;\n }\n\n @mixin desp-medium {\n   font-family: 'Lato', sans-serif;\n   font-weight: 700;\n   letter-spacing: 0.3px;\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale;\n   text-rendering: optimizeLegibility;\n } */\n.slot-confirm-wrapper .allocate-heading {\n  font-size: 1.5rem;\n}\n.slot-confirm-wrapper .comment-box {\n  height: unset;\n}\n.slot-confirm-wrapper ::ng-deep .c-btn span {\n  font-size: 1.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL190aGVtaW5nLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9AY29uZG8vc3R5bGVzL3V0aWxpdGllcy9fdHlwb2dyYXBoeS5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL2FsbG9jYXRlZC1zbG90LWNvbmZpcm1hdGlvbi9hbGxvY2F0ZWQtc2xvdC1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL2FsbG9jYXRlZC1zbG90LWNvbmZpcm1hdGlvbi9hbGxvY2F0ZWQtc2xvdC1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcTVDQSxrQ0FBQTtBQXVpREEsMkNBQUE7QUF3Q0EscUJBQUE7QUN6NkZDOzs7Ozs7Ozs7Ozs7Ozs7SUFBQTtBQ2pERztFRHFGQSxpQkFBQTtBRTFFSjtBRFJJO0VBQ0ksYUFBQTtBQ1VSO0FETlE7RUQ2RUosaUJBQUE7QUVwRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hbGxvY2F0ZWQtc2xvdC1jb25maXJtYXRpb24vYWxsb2NhdGVkLXNsb3QtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGFsbCB0aGUgdGhlbWluZyBmdW5jdGlvbmFsaXR5LlxuLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjogMTAwMCAhZGVmYXVsdDtcbiRjZGstei1pbmRleC1vdmVybGF5OiAxMDAwICFkZWZhdWx0O1xuJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpICFkZWZhdWx0O1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cblxuQG1peGluIGNkay1vdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWNvbnRhaW5lcjtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktYmFja2Ryb3A7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZCBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFja1xuICAgICAgLy8gdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuIE5vdGUgdGhhdCB3ZSBjYW4ndCB1c2UgdGhlIGBjZGstaGlnaC1jb250cmFzdGBcbiAgICAgIC8vIG1peGluLCBiZWNhdXNlIHdlIGNhbid0IG5vcm1hbGl6ZSB0aGUgaW1wb3J0IHBhdGggdG8gdGhlIF9hMTF5LnNjc3MgYm90aCBmb3IgdGhlXG4gICAgICAvLyBzb3VyY2UgYW5kIHdoZW4gdGhpcyBmaWxlIGlzIGRpc3RyaWJ1dGVkLiBTZWUgIzEwOTA4LlxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJiwgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbkBtaXhpbiBjZGstYTExeSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB9XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gIEBpZiAoJHNlbGVjdG9yLWNvbnRleHQgPT0gJycpIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skc2VsZWN0b3ItY29udGV4dH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vLy9cbi8vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8vICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gY2RrLWhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlLCAkZW5jYXBzdWxhdGlvbjogJ2FueScpIHtcbiAgQGlmICgkdGFyZ2V0ICE9ICdhY3RpdmUnIGFuZCAkdGFyZ2V0ICE9ICdibGFjay1vbi13aGl0ZScgYW5kICR0YXJnZXQgIT0gJ3doaXRlLW9uLWJsYWNrJykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCB2YWx1ZSBcIiN7JHRhcmdldH1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJhY3RpdmVcIiwgXCJibGFjay1vbi13aGl0ZVwiLCBhbmQgXCJ3aGl0ZS1vbi1ibGFja1wiJztcbiAgfVxuXG4gIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdhbnknKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IGVuY2Fwc3VsYXRpb24gXCIjeyRlbmNhcHN1bGF0aW9ufVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcIm9uXCIsIFwib2ZmXCIsIGFuZCBcImFueVwiJztcbiAgfVxuXG4gIC8vIElmIHRoZSBzZWxlY3RvciBjb250ZXh0IGhhcyBtdWx0aXBsZSBwYXJ0cywgc3VjaCBhcyBgLnNlY3Rpb24sIC5yZWdpb25gLCBqdXN0IGRvaW5nXG4gIC8vIGAuY2RrLWhpZ2gtY29udHJhc3QteHh4ICN7Jn1gIHdpbGwgb25seSBhcHBseSB0aGUgcGFyZW50IHNlbGVjdG9yIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZVxuICAvLyBjb250ZXh0LiBXZSBhZGRyZXNzIHRoaXMgYnkgbmVzdGluZyB0aGUgc2VsZWN0b3IgY29udGV4dCB1bmRlciAuY2RrLWhpZ2gtY29udHJhc3QuXG4gIEBhdC1yb290IHtcbiAgICAkc2VsZWN0b3ItY29udGV4dDogI3smfTtcblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0ge1xuICAgICAgICBAaW5jbHVkZSBfY2RrLW9wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvZmYnKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSA6aG9zdCB7XG4gICAgICAgIEBpbmNsdWRlIF9jZGstb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIGNkay10ZXh0LWZpZWxkIHtcbiAgLy8gS2V5ZnJhbWVzIHRoYXQgYXBwbHkgbm8gc3R5bGVzLCBidXQgYWxsb3cgdXMgdG8gbW9uaXRvciB3aGVuIGFuIHRleHQgZmllbGQgYmVjb21lcyBhdXRvZmlsbGVkXG4gIC8vIGJ5IHdhdGNoaW5nIGZvciB0aGUgYW5pbWF0aW9uIGV2ZW50cyB0aGF0IGFyZSBmaXJlZCB3aGVuIHRoZXkgc3RhcnQuIE5vdGU6IHRoZSAvKiEqLyBjb21tZW50IGlzXG4gIC8vIG5lZWRlZCB0byBwcmV2ZW50IExpYlNhc3MgZnJvbSBzdHJpcHBpbmcgdGhlIGtleWZyYW1lcyBvdXQuXG4gIC8vIEJhc2VkIG9uOiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsvKiEqL31cbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgey8qISovfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zO1xuICB9XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gICAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXkgZm9yIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LCBvciB0aGUgYW5pbWF0aW9uc3RhcnRcbiAgICAvLyBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zLFxuICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHRvb2x0aXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAoXG4gIHN0YXR1cy1iYXI6IGJsYWNrLFxuICBhcHAtYmFyOiAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgYmFja2dyb3VuZDogIzMwMzAzMCxcbiAgaG92ZXI6ICAgICAgcmdiYSh3aGl0ZSwgMC4wNCksIC8vIFRPRE8oa2FyYSk6IGNoZWNrIHN0eWxlIHdpdGggTWF0ZXJpYWwgRGVzaWduIFVYXG4gIGNhcmQ6ICAgICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uOiByZ2JhKHdoaXRlLCAwLjEyKSxcbiAgcmFpc2VkLWJ1dHRvbjogbWFwLWdldCgkbWF0LWdyZXksIDgwMCksXG4gIGZvY3VzZWQtYnV0dG9uOiAkbGlnaHQtZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogYmxhY2ssXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBibGFjayxcbiAgdG9vbHRpcDogbWFwX2dldCgkbWF0LWdyZXksIDcwMCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG5cblxuLy8gRm9yIGEgZ2l2ZW4gaHVlIGluIGEgcGFsZXR0ZSwgcmV0dXJuIHRoZSBjb250cmFzdCBjb2xvciBmcm9tIHRoZSBtYXAgb2YgY29udHJhc3QgcGFsZXR0ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRodWVcbkBmdW5jdGlvbiBtYXQtY29udHJhc3QoJHBhbGV0dGUsICRodWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUsIGNvbnRyYXN0KSwgJGh1ZSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIG1hcCBvZiBodWVzIHRvIGNvbG9ycyBmb3IgYSB0aGVtZS4gVGhpcyBpcyB1c2VkIHRvIGRlZmluZSBhIHRoZW1lIHBhbGV0dGUgaW4gdGVybXNcbi8vIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gaHVlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJHByaW1hcnlcbi8vIEBwYXJhbSAkbGlnaHRlclxuQGZ1bmN0aW9uIG1hdC1wYWxldHRlKCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0OiA1MDAsICRsaWdodGVyOiAxMDAsICRkYXJrZXI6IDcwMCwgJHRleHQ6ICRkZWZhdWx0KSB7XG4gICRyZXN1bHQ6IG1hcF9tZXJnZSgkYmFzZS1wYWxldHRlLCAoXG4gICAgZGVmYXVsdDogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpLFxuICAgIHRleHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJHRleHQpLFxuXG4gICAgZGVmYXVsdC1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRkYXJrZXIpXG4gICkpO1xuXG4gIC8vIEZvciBlYWNoIGh1ZSBpbiB0aGUgcGFsZXR0ZSwgYWRkIGEgXCItY29udHJhc3RcIiBjb2xvciB0byB0aGUgbWFwLlxuICBAZWFjaCAkaHVlLCAkY29sb3IgaW4gJGJhc2UtcGFsZXR0ZSB7XG4gICAgJHJlc3VsdDogbWFwX21lcmdlKCRyZXN1bHQsIChcbiAgICAgICcjeyRodWV9LWNvbnRyYXN0JzogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRodWUpXG4gICAgKSk7XG4gIH1cblxuICBAcmV0dXJuICRyZXN1bHQ7XG59XG5cblxuLy8gR2V0cyBhIGNvbG9yIGZyb20gYSB0aGVtZSBwYWxldHRlICh0aGUgb3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIFRoZSBodWUgY2FuIGJlIG9uZSBvZiB0aGUgc3RhbmRhcmQgdmFsdWVzICg1MDAsIEE0MDAsIGV0Yy4pLCBvbmUgb2YgdGhlIHRocmVlIHByZWNvbmZpZ3VyZWRcbi8vIGh1ZXMgKGRlZmF1bHQsIGxpZ2h0ZXIsIGRhcmtlciksIG9yIGFueSBvZiB0aGUgYWZvcmVtZW50aW9uZWQgcHJlZml4ZWQgd2l0aCBcIi1jb250cmFzdFwiLlxuLy9cbi8vIEBwYXJhbSAkY29sb3ItbWFwIFRoZSB0aGVtZSBwYWxldHRlIChvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gQHBhcmFtICRodWUgVGhlIGh1ZSBmcm9tIHRoZSBwYWxldHRlIHRvIHVzZS4gSWYgdGhpcyBpcyBhIHZhbHVlIGJldHdlZW4gMCBhbmQgMSwgaXQgd2lsbFxuLy8gICAgIGJlIHRyZWF0ZWQgYXMgb3BhY2l0eS5cbi8vIEBwYXJhbSAkb3BhY2l0eSBUaGUgYWxwaGEgY2hhbm5lbCB2YWx1ZSBmb3IgdGhlIGNvbG9yLlxuQGZ1bmN0aW9uIG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZTogZGVmYXVsdCwgJG9wYWNpdHk6IG51bGwpIHtcbiAgLy8gSWYgaHVlS2V5IGlzIGEgbnVtYmVyIGJldHdlZW4gemVybyBhbmQgb25lLCB0aGVuIGl0IGFjdHVhbGx5IGNvbnRhaW5zIGFuXG4gIC8vIG9wYWNpdHkgdmFsdWUsIHNvIHJlY2FsbCB0aGlzIGZ1bmN0aW9uIHdpdGggdGhlIGRlZmF1bHQgaHVlIGFuZCB0aGF0IGdpdmVuIG9wYWNpdHkuXG4gIEBpZiB0eXBlLW9mKCRodWUpID09IG51bWJlciBhbmQgJGh1ZSA+PSAwIGFuZCAkaHVlIDw9IDEge1xuICAgIEByZXR1cm4gbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LCAkaHVlKTtcbiAgfVxuXG4gICRjb2xvcjogbWFwLWdldCgkcGFsZXR0ZSwgJGh1ZSk7XG5cbiAgQGlmICh0eXBlLW9mKCRjb2xvcikgIT0gY29sb3IpIHtcbiAgICAvLyBJZiB0aGUgJGNvbG9yIHJlc29sdmVkIHRvIHNvbWV0aGluZyBkaWZmZXJlbnQgZnJvbSBhIGNvbG9yIChlLmcuIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAvLyB3ZSBjYW4ndCBhcHBseSB0aGUgb3BhY2l0eSBhbnl3YXkgc28gd2UgcmV0dXJuIHRoZSB2YWx1ZSBhcyBpcywgb3RoZXJ3aXNlIFNhc3MgY2FuXG4gICAgLy8gdGhyb3cgYW4gZXJyb3Igb3Igb3V0cHV0IHNvbWV0aGluZyBpbnZhbGlkLlxuICAgIEByZXR1cm4gJGNvbG9yO1xuICB9XG5cbiAgQHJldHVybiByZ2JhKCRjb2xvciwgaWYoJG9wYWNpdHkgPT0gbnVsbCwgb3BhY2l0eSgkY29sb3IpLCAkb3BhY2l0eSkpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGxpZ2h0IHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtbGlnaHQtdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IGZhbHNlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgZGFyayB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWRhcmstdGhlbWUoJHByaW1hcnksICRhY2NlbnQsICR3YXJuOiBtYXQtcGFsZXR0ZSgkbWF0LXJlZCkpIHtcbiAgQHJldHVybiAoXG4gICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgYWNjZW50OiAkYWNjZW50LFxuICAgIHdhcm46ICR3YXJuLFxuICAgIGlzLWRhcms6IHRydWUsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQsXG4gICk7XG59XG5cblxuXG4kbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5OiAwLjE7XG5cbkBtaXhpbiBtYXQtcmlwcGxlKCkge1xuXG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gUHJvbW90ZSBjb250YWluZXJzIHRoYXQgaGF2ZSByaXBwbGVzIHRvIGEgbmV3IGxheWVyLiBXZSB3YW50IHRvIHRhcmdldCBgOm5vdCg6ZW1wdHkpYCxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYWxsIHJpcHBsZSBjb250YWluZXJzIHRvIGhhdmUgdGhlaXIgb3duIGxheWVyIHNpbmNlIHRoZXkncmUgdXNlZCBpbiBhXG4gICAgLy8gbG90IG9mIHBsYWNlcyBhbmQgdGhlIGxheWVyIGlzIG9ubHkgcmVsZXZhbnQgd2hpbGUgYW5pbWF0aW5nLiBOb3RlIHRoYXQgaWRlYWxseSB3ZSdkIHVzZVxuICAgIC8vIHRoZSBgY29udGFpbmAgcHJvcGVydHkgaGVyZSAoc2VlICMxMzE3NSksIGJlY2F1c2UgYDplbXB0eWAgY2FuIGJlIGJyb2tlbiBieSBoYXZpbmcgZXh0cmFcbiAgICAvLyB0ZXh0IGluc2lkZSB0aGUgZWxlbWVudCwgYnV0IGl0IGlzbid0IHZlcnkgd2VsbCBzdXBwb3J0ZWQgeWV0LlxuICAgICY6bm90KDplbXB0eSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLy8gSWYgdGhlIHJpcHBsZSBjb2xvciBpcyByZXNvbHZlcyB0byBhIGNvbG9yICp0eXBlKiwgd2UgY2FuIHVzZSBpdCBkaXJlY3RseSwgb3RoZXJ3aXNlXG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpIHdlIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29sb3IgYW5kIHNldHRpbmcgYW4gb3BhY2l0eS5cbiAgICBAaWYgKHR5cGUtb2YoJGZvcmVncm91bmQtYmFzZSkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWJhc2U7XG4gICAgICBvcGFjaXR5OiAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLiBBbHNvIG5vdGUgdGhhdCB0aGlzIG5lZWRzIHRvIGJlIGJlbG93IGAubWF0LXByaW1hcnlgXG4gIC8vIGluIG9yZGVyIHRvIGFsbG93IGZvciB0aGUgY29sb3IgdG8gYmUgb3ZlcndyaXR0ZW4gaWYgdGhlIGNoZWNrYm94IGlzIGluc2lkZSBhIHBhcmVudCB0aGF0XG4gIC8vIGhhcyBgbWF0LWFjY2VudGAgYW5kIGlzIHBsYWNlZCBpbnNpZGUgYW5vdGhlciBwYXJlbnQgdGhhdCBoYXMgYG1hdC1wcmltYXJ5YC5cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG4vLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZXMgaGVyZSBjb21lIGZyb21cbi8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1jb25maWcoXG4gICRmb250LWZhbWlseTogICAnUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxuICAkZGlzcGxheS00OiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTEycHgsIDExMnB4LCAzMDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDVlbSksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDJlbSksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDAsICRsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW0pLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje21hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKX0gKiAwLjgzKSxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgICAvLyBjYWxjIGlzIHVzZWQgaGVyZSB0byBzdXBwb3J0IGNzcyB2YXJpYWJsZXNcbiAgICAgIGNhbGMoI3ttYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSl9ICogMC42NyksXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAubWF0LWRpc3BsYXktNCwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS00IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS00KTtcbiAgICBtYXJnaW46IDAgMCA1NnB4O1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTMsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMyB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMyk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0yLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTIpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtYWNjZW50IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLXdhcm4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1oaWRkZW4ge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtZGlzYWJsZWQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICAkYXBwLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2JhY2tncm91bmQnKTtcbiAgICAgICRiYWRnZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgICAvLyBUaGUgZGlzYWJsZWQgY29sb3IgdXN1YWxseSBoYXMgc29tZSBraW5kIG9mIG9wYWNpdHksIGJ1dCBiZWNhdXNlIHRoZSBiYWRnZSBpcyBvdmVybGF5ZWRcbiAgICAgIC8vIG9uIHRvcCBvZiBzb21ldGhpbmcgZWxzZSwgaXQgd29uJ3QgbG9vayBnb29kIGlmIGl0J3Mgb3BhcXVlLiBJZiBpdCBpcyBhIGNvbG9yICp0eXBlKixcbiAgICAgIC8vIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZCB1c2luZ1xuICAgICAgLy8gdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kIHdoZW5cbiAgICAgIC8vIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLlxuICAgICAgQGlmICh0eXBlLW9mKCRiYWRnZS1jb2xvcikgPT0gY29sb3IgYW5kIHR5cGUtb2YoJGFwcC1iYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgICAkYmFkZ2Utb3BhY2l0eTogb3BhY2l0eSgkYmFkZ2UtY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBtaXgoJGFwcC1iYWNrZ3JvdW5kLCByZ2JhKCRiYWRnZS1jb2xvciwgMSksICgxIC0gJGJhZGdlLW9wYWNpdHkpICogMTAwJSk7XG4gICAgICB9XG4gICAgICBAZWxzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICRiYWRnZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAubmctYW5pbWF0ZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQsXG4gIC5tYXQtYmFkZ2UtY29udGVudC5fbWF0LWFuaW1hdGlvbi1ub29wYWJsZSB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgLy8gU2V0IHRoZSBmb250IHNpemUgdG8gNzUlIG9mIHRoZSBvcmlnaW5hbC5cbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMC43NTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuLy8gQXBwbGllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBmb3IgYSByaXBwbGUuIElmIHRoZSB2YWx1ZSBwcm92aWRlZCBpcyBub3QgYSBTYXNzIGNvbG9yLFxuLy8gd2UgYXNzdW1lIHRoYXQgd2UndmUgYmVlbiBnaXZlbiBhIENTUyB2YXJpYWJsZS4gU2luY2Ugd2UgY2FuJ3QgcGVyZm9ybSBhbHBoYS1ibGVuZGluZ1xuLy8gb24gYSBDU1MgdmFyaWFibGUsIHdlIGluc3RlYWQgYWRkIHRoZSBvcGFjaXR5IGRpcmVjdGx5IHRvIHRoZSByaXBwbGUgZWxlbWVudC5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpIHtcbiAgJGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJGh1ZSwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWJhY2tncm91bmQoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1yaXBwbGUtYmFja2dyb3VuZCgkYWNjZW50LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1iYWNrZ3JvdW5kKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgdGV4dCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuXG4gIC8vIFRoZSBjb2xvciBvZiB0aGUgY2hlY2tib3gncyBjaGVja21hcmsgLyBtaXhlZG1hcmsuXG4gICRjaGVja2JveC1tYXJrLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuXG4gIC8vIE5PVEUodHJhdmlza2F1Zm1hbik6IFdoaWxlIHRoZSBzcGVjIGNhbGxzIGZvciB0cmFuc2x1Y2VudCBibGFja3Mvd2hpdGVzIGZvciBkaXNhYmxlZCBjb2xvcnMsXG4gIC8vIHRoaXMgZG9lcyBub3Qgd29yayB3ZWxsIHdpdGggZWxlbWVudHMgbGF5ZXJlZCBvbiB0b3Agb2Ygb25lIGFub3RoZXIuIFRvIGdldCBhcm91bmQgdGhpcyB3ZVxuICAvLyBibGVuZCB0aGUgY29sb3JzIHRvZ2V0aGVyIGJhc2VkIG9uIHRoZSBiYXNlIGNvbG9yIGFuZCB0aGUgdGhlbWUgYmFja2dyb3VuZC5cbiAgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyazogIzY4Njg2ODtcbiAgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQ6ICNiMGIwYjA7XG4gICRkaXNhYmxlZC1jb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcmssICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0KTtcblxuICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICAgIGZpbGw6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1jaGVja21hcmstcGF0aCB7XG4gICAgLy8gIWltcG9ydGFudCBpcyBuZWVkZWQgaGVyZSBiZWNhdXNlIGEgc3Ryb2tlIG11c3QgYmUgc2V0IGFzIGFuXG4gICAgLy8gYXR0cmlidXRlIG9uIHRoZSBTVkcgaW4gb3JkZXIgZm9yIGxpbmUgYW5pbWF0aW9uIHRvIHdvcmsgcHJvcGVybHkuXG4gICAgc3Ryb2tlOiAkY2hlY2tib3gtbWFyay1jb2xvciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gIC8vIHRvIGNvbnRyb2wgaG93IG9wYXF1ZSB0aGUgcmlwcGxlIHNob3VsZCBiZS5cbiAgLm1hdC1jaGVja2JveCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgYmFzZSk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrZWQ6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLFxuICAubWF0LWNoZWNrYm94OmFjdGl2ZTpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5cbi8vIEFwcGxpZXMgdGhlIGJhY2tncm91bmQgY29sb3IgZm9yIGEgcmlwcGxlIGVsZW1lbnQuXG4vLyBJZiB0aGUgY29sb3IgdmFsdWUgcHJvdmlkZWQgaXMgbm90IGEgU2FzcyBjb2xvcixcbi8vIHdlIGFzc3VtZSB0aGF0IHdlJ3ZlIGJlZW4gZ2l2ZW4gYSBDU1MgdmFyaWFibGUuXG4vLyBTaW5jZSB3ZSBjYW4ndCBwZXJmb3JtIGFscGhhLWJsZW5kaW5nIG9uIGEgQ1NTIHZhcmlhYmxlLFxuLy8gd2UgaW5zdGVhZCBhZGQgdGhlIG9wYWNpdHkgZGlyZWN0bHkgdG8gdGhlIHJpcHBsZSBlbGVtZW50LlxuQG1peGluIF9tYXQtY2hpcHMtcmlwcGxlLWJhY2tncm91bmQoJHBhbGV0dGUsICRkZWZhdWx0LWNvbnRyYXN0LCAkb3BhY2l0eSkge1xuICAkYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkZGVmYXVsdC1jb250cmFzdCwgJG9wYWNpdHkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcjtcbiAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kLWNvbG9yKSAhPSBjb2xvcikge1xuICAgIG9wYWNpdHk6ICRvcGFjaXR5O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHBhbGV0dGUpIHtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCksIG1hdC1jb2xvcigkcGFsZXR0ZSkpO1xuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgQGluY2x1ZGUgX21hdC1jaGlwcy1yaXBwbGUtYmFja2dyb3VuZCgkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCwgMC4xKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHVuc2VsZWN0ZWQtY2hpcCk7XG4gICR1bnNlbGVjdGVkLWZvcmVncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IoJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZCwgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZCk7XG5cbiAgICAmOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIHtcbiAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMywgJHRoZW1lKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1jaGlwLXJlbW92ZTpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjQ7XG4gICAgfVxuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkIHtcbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hpcCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuXG4gICAgLm1hdC1jaGlwLXRyYWlsaW5nLWljb24ubWF0LWljb24sXG4gICAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10YWJsZSB0aGVhZCwgLm1hdC10YWJsZSB0Ym9keSwgLm1hdC10YWJsZSB0Zm9vdCxcbiAgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuICBbbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4gIC5tYXQtdGFibGUtc3RpY2t5IHtcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICB9XG5cbiAgbWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxuICB0aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdGFibGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWhlYWRlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aDogMXB4O1xuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50OiAwLjY7XG4kbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ6IDAuMjtcbiRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU6IDEzcHggIWRlZmF1bHQ7XG4kbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplOiAxMXB4ICFkZWZhdWx0O1xuXG5AbWl4aW4gX21hdC1kYXRlcGlja2VyLWNvbG9yKCRwYWxldHRlKSB7XG4gIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgJGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBmYWRlLW91dCgkYmFja2dyb3VuZCwgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0byBiYWNrZ3JvdW5kIHRvIGEgY29sb3IgKGUuZy4gaXQncyBhIENTUyB2YXJpYWJsZSksXG4gICAgICAvLyBmYWxsIGJhY2sgdG8gZmFkaW5nIHRoZSBjb250ZW50IG91dCB2aWEgYG9wYWNpdHlgLlxuICAgICAgb3BhY2l0eTogJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGhcbiAgICAgICAgICAgICAgICBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLy8gVGhlIHByZXYvbmV4dCBidXR0b25zIG5lZWQgYSBiaXQgbW9yZSBzcGVjaWZpY2l0eSB0b1xuICAvLyBhdm9pZCBiZWluZyBvdmVyd3JpdHRlbiBieSB0aGUgLm1hdC1pY29uLWJ1dHRvbi5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1uZXh0LWJ1dHRvbixcbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGljb24pO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlci1kaXZpZGVyOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIsXG4gIC5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlLFxuICAuY2RrLXByb2dyYW0tZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlIHtcbiAgICAmID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgIC8vIE5vdGU6IHRob3VnaCBpdCdzIG5vdCB0ZXh0LCB0aGUgYm9yZGVyIGlzIGEgaGludCBhYm91dCB0aGUgZmFjdCB0aGF0IHRoaXMgaXMgdG9kYXkncyBkYXRlLFxuICAgIC8vIHNvIHdlIHVzZSB0aGUgaGludCBjb2xvci5cbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgJGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgYm9yZGVyLWNvbG9yOiBmYWRlLW91dCgkY29sb3IsICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHRoZSBjb2xvciBkaWRuJ3QgcmVzb2x2ZSB0byBhIGNvbG9yIHZhbHVlLCBidXQgc29tZXRoaW5nIGxpa2UgYSBDU1MgdmFyaWFibGUsIHdlIGNhbid0XG4gICAgICAvLyBmYWRlIGl0IG91dCBzbyB3ZSBmYWxsIGJhY2sgdG8gcmVkdWNpbmcgdGhlIGVsZW1lbnQgb3BhY2l0eS4gTm90ZSB0aGF0IHdlIGRvbid0IHVzZSB0aGVcbiAgICAgIC8vICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudCwgYmVjYXVzZSBoaW50IHRleHQgdXN1YWxseSBoYXMgc29tZSBvcGFjaXR5IGFwcGxpZWRcbiAgICAgIC8vIHRvIGl0IGFscmVhZHkgYW5kIHdlIGRvbid0IHdhbnQgdGhlbSB0byBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlci5cbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSwgdGV4dCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jYWxlbmRhciB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keSB7XG4gICAgZm9udC1zaXplOiAkbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuICAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXIgdGgge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6ICRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpYWxvZy1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDI0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1kaWFsb2ctdGl0bGUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWFjdGlvbi1yb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtLFxuICAubWF0LWFjdGlvbi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LXNpbmdsZS1zZWxlY3RlZC1vcHRpb24ge1xuICAgICYsICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTogMC43O1xuICAkbWF0LXNsaWRlci10aWNrLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eSk7XG4gICRtYXQtc2xpZGVyLXRpY2stc2l6ZTogMnB4O1xuXG4gIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtcHJpbWFyeSB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcHJpbWFyeSk7XG4gIH1cblxuICAubWF0LWFjY2VudCB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkYWNjZW50KTtcbiAgfVxuXG4gIC5tYXQtd2FybiB7XG4gICAgQGluY2x1ZGUgX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkd2Fybik7XG4gIH1cblxuICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAkb3BhY2l0eTogMC4yO1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQsICRvcGFjaXR5KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXI6aG92ZXIsXG4gIC5jZGstZm9jdXNlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1kaXNhYmxlZCB7XG4gICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbiAgICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLW1pbi12YWx1ZSB7XG4gICAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgICAkb3BhY2l0eTogMC4xMjtcbiAgICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAkb3BhY2l0eSk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG5cbiAgICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAgIC8vIENTUyB2YXJpYWJsZXMgc28gd2UgbmVlZCB0byB1c2UgYG9wYWNpdHlgIGFzIGEgZmFsbGJhY2suXG4gICAgICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYixcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItdGljay1jb2xvcjtcblxuICAgIC8vIGBtYXQtY29sb3JgIHVzZXMgYHJnYmFgIGZvciB0aGUgb3BhY2l0eSB3aGljaCB3b24ndCB3b3JrIHdpdGhcbiAgICAvLyBDU1MgdmFyaWFibGVzIHNvIHdlIG5lZWQgdG8gdXNlIGBvcGFjaXR5YCBhcyBhIGZhbGxiYWNrLlxuICAgIEBpZiAodHlwZS1vZigkbWF0LXNsaWRlci10aWNrLWNvbG9yKSAhPSBjb2xvcikge1xuICAgICAgb3BhY2l0eTogJG1hdC1zbGlkZXItdGljay1vcGFjaXR5O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gICAgLy8gRmlyZWZveCBkb2Vzbid0IGRyYXcgdGhlIGdyYWRpZW50IGNvcnJlY3RseSB3aXRoICd0byByaWdodCdcbiAgICAvLyAoc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEzMTQzMTkpLlxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRtYXQtc2xpZGVyLXRpY2stY29sb3IsXG4gICAgICAgICRtYXQtc2xpZGVyLXRpY2stY29sb3IgJG1hdC1zbGlkZXItdGljay1zaXplLCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG5cbiAgICAvLyBgbWF0LWNvbG9yYCB1c2VzIGByZ2JhYCBmb3IgdGhlIG9wYWNpdHkgd2hpY2ggd29uJ3Qgd29yayB3aXRoXG4gICAgLy8gQ1NTIHZhcmlhYmxlcyBzbyB3ZSBuZWVkIHRvIHVzZSBgb3BhY2l0eWAgYXMgYSBmYWxsYmFjay5cbiAgICBAaWYgKHR5cGUtb2YoJG1hdC1zbGlkZXItdGljay1jb2xvcikgIT0gY29sb3IpIHtcbiAgICAgIG9wYWNpdHk6ICRtYXQtc2xpZGVyLXRpY2stb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc3RlcC1oZWFkZXIge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkLFxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gT24gdG91Y2ggZGV2aWNlcyB0aGUgOmhvdmVyIHN0YXRlIHdpbGwgbGluZ2VyIG9uIHRoZSBlbGVtZW50IGFmdGVyIGEgdGFwLlxuICAgIC8vIFJlc2V0IGl0IHZpYSBgQG1lZGlhYCBhZnRlciB0aGUgZGVjbGFyYXRpb24sIGJlY2F1c2UgdGhlIG1lZGlhIHF1ZXJ5IGlzbid0XG4gICAgLy8gc3VwcG9ydGVkIGJ5IGFsbCBicm93c2VycyB5ZXQuXG4gICAgQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLFxuICAgIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbiB7XG4gICAgICAvLyBUT0RPKGpvc2VwaHBlcnJvdHQpOiBVcGRhdGUgdG8gdXNpbmcgYSBjb3JyZWN0ZWQgZGlzYWJsZWQtdGV4dCBjb250cmFzdFxuICAgICAgLy8gaW5zdGVhZCBvZiBzZWNvbmRhcnktdGV4dC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gIH1cblxuICAubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YmVmb3JlLFxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLCAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9O1xuICB9XG5cbiAgLm1hdC1zdGVwLXN1Yi1sYWJlbC1lcnJvciB7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gICAgfTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgJHRhYmxlLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgICAkdGV4dC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG5cbiAgICAvLyBCZWNhdXNlIHRoZSBhcnJvdyBpcyBtYWRlIHVwIG9mIG11bHRpcGxlIGVsZW1lbnRzIHRoYXQgYXJlIHN0YWNrZWQgb24gdG9wIG9mIGVhY2ggb3RoZXIsXG4gICAgLy8gd2UgY2FuJ3QgdXNlIHRoZSBzZW1pLXRyYXNwYXJlbnQgY29sb3IgZnJvbSB0aGUgdGhlbWUgZGlyZWN0bHkuIElmIHRoZSB2YWx1ZSBpcyBhIGNvbG9yXG4gICAgLy8gKnR5cGUqLCB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmRcbiAgICAvLyB1c2luZyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmRcbiAgICAvLyB3aGVuIG1peGluZyB0aGUgY29sb3JzIHRvZ2V0aGVyLiBPdGhlcndpc2UsIGlmIGl0IHJlc29sdmVzIHRvIHNvbWV0aGluZyBkaWZmZXJlbnRcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSksIHdlIHVzZSB0aGUgY29sb3IgZGlyZWN0bHkuXG4gICAgQGlmICh0eXBlLW9mKCR0YWJsZS1iYWNrZ3JvdW5kKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkdGV4dC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgICR0ZXh0LW9wYWNpdHk6IG9wYWNpdHkoJHRleHQtY29sb3IpO1xuICAgICAgY29sb3I6IG1peCgkdGFibGUtYmFja2dyb3VuZCwgcmdiYSgkdGV4dC1jb2xvciwgMSksICgxIC0gJHRleHQtb3BhY2l0eSkgKiAxMDAlKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgY29sb3I6ICR0ZXh0LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYnMtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaGVhZGVyLWJvcmRlcjogMXB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC10YWItbmF2LWJhcixcbiAgLm1hdC10YWItaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkaGVhZGVyLWJvcmRlcjtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciB7XG4gICAgLm1hdC10YWItbmF2LWJhcixcbiAgICAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyLXRvcDogJGhlYWRlci1ib3JkZXI7XG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAvLyBSZW1vdmUgaGVhZGVyIGJvcmRlciB3aGVuIHRoZXJlIGlzIGEgYmFja2dyb3VuZCBjb2xvclxuICAubWF0LXRhYi1ncm91cFtjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIC5tYXQtdGFiLWhlYWRlcixcbiAgLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cCwgLm1hdC10YWItbmF2LWJhciB7XG4gICAgJHRoZW1lLWNvbG9yczogKFxuICAgICAgcHJpbWFyeTogJHByaW1hcnksXG4gICAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgICB3YXJuOiAkd2FyblxuICAgICk7XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IHRoZSBmb3JlZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzXG4gICAgICAmLm1hdC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IpO1xuXG4gICAgICAgIC8vIE92ZXJyaWRlIGluayBiYXIgd2hlbiBiYWNrZ3JvdW5kIGNvbG9yIGlzIHRoZSBzYW1lXG4gICAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtaW5rLWJhcigkY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0YWJzIGFuZCBvdmVycmlkZSBmb2N1cyBjb2xvclxuICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCRjb2xvcik7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRjb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LWluay1iYXIoJGNvbG9yLCAkaHVlOiBkZWZhdWx0KSB7XG4gIC5tYXQtaW5rLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRjb2xvciwgJGh1ZSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFiLWxhYmVsLWZvY3VzKCR0YWItZm9jdXMtY29sb3IpIHtcbiAgLm1hdC10YWItbGFiZWwsXG4gIC5tYXQtdGFiLWxpbmsge1xuICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgJi5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgICAgICY6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkdGFiLWZvY3VzLWNvbG9yLCBsaWdodGVyLCAwLjMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWJzLWJhY2tncm91bmQoJGJhY2tncm91bmQtY29sb3IpIHtcbiAgLy8gU2V0IGJhY2tncm91bmQgY29sb3IgZm9yIHRoZSB0YWIgZ3JvdXBcbiAgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1saW5rcywgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYXBwLWJhcik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sYmFyLFxuICAubWF0LXRvb2xiYXIgaDEsXG4gIC5tYXQtdG9vbGJhciBoMixcbiAgLm1hdC10b29sYmFyIGgzLFxuICAubWF0LXRvb2xiYXIgaDQsXG4gIC5tYXQtdG9vbGJhciBoNSxcbiAgLm1hdC10b29sYmFyIGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cblxuXG5cbiRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0OiAyMnB4O1xuJG1hdC10b29sdGlwLWZvbnQtc2l6ZTogMTBweDtcbiRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nOiAoJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtZm9udC1zaXplKSAvIDI7XG5cbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQ6IDMwcHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU6IDE0cHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nOlxuICAgICgkbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplKSAvIDI7XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdG9vbHRpcCwgMC45KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgICBmb250LXNpemU6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZztcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcblxuICAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICAgIC8vIFVzZSB0aGUgcHJpbWFyeSB0ZXh0IG9uIHRoZSBkYXJrIHRoZW1lLCBldmVuIHRob3VnaCB0aGUgbGlnaHRlciBvbmUgdXNlc1xuICAgIC8vIGEgc2Vjb25kYXJ5LCBiZWNhdXNlIHRoZSBjb250cmFzdCBvbiB0aGUgbGlnaHQgcHJpbWFyeSB0ZXh0IGlzIHBvb3IuXG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkZGFyay1wcmltYXJ5LXRleHQsICRsaWdodC1zZWNvbmRhcnktdGV4dCk7XG4gICAgYmFja2dyb3VuZDogaWYoJGlzLWRhcmstdGhlbWUsIG1hcC1nZXQoJG1hdC1ncmV5LCA1MCksICMzMjMyMzIpO1xuXG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCBpbmhlcml0LCBtYXQtY29sb3IoJGFjY2VudCwgdGV4dCkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNpbXBsZS1zbmFja2JhciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogaW5oZXJpdDtcbiAgICAgIHNpemU6IGluaGVyaXQ7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGZpbGwgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGZpbGwtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4xLCAwLjA0KSk7XG4gICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMDUsIDAuMDIpKTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdG9wIG9mIHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctdG9wOiAwLjI1ZW07XG4gIC8vIFRoZSBwYWRkaW5nIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmctYm90dG9tOiAwLjc1ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBmaWxsIGFwcGVhcmFuY2UuXG4gICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC41ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nLXRvcCAwICRpbmZpeC1wYWRkaW5nLWJvdHRvbSAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmctdG9wO1xuICAgICAgbWFyZ2luLXRvcDogJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBsZWdhY3kgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtaGludCB7XG4gICAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFdlIHVzZSBwZXJzcGVjdGl2ZSB0byBmaXggdGhlIHRleHQgYmx1cnJpbmVzcyBhcyBkZXNjcmliZWQgaGVyZTpcbiAgLy8gaHR0cDovL3d3dy51c2VyYWdlbnRtYW4uY29tL2Jsb2cvMjAxNC8wNS8wNC9maXhpbmctdHlwb2dyYXBoeS1pbnNpZGUtb2YtMi1kLWNzcy10cmFuc2Zvcm1zL1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nKSBzY2FsZSgkZm9udC1zY2FsZSkgcGVyc3BlY3RpdmUoMTAwcHgpXG4gIHRyYW5zbGF0ZVooMC4wMDFweCArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuXG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbi8vIFNhbWUgYXMgbWl4aW4gYWJvdmUsIGJ1dCBvbWl0cyB0aGUgdHJhbnNsYXRlWiBmb3IgcHJpbnRpbmcgcHVycG9zZXMuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludCgkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgLy8gVGhlIHRyaWNrcyBhYm92ZSB1c2VkIHRvIHNtb290aCBvdXQgdGhlIGFuaW1hdGlvbiBvbiBjaHJvbWUgYW5kIGZpcmVmb3ggYWN0dWFsbHkgbWFrZSB0aGluZ3NcbiAgLy8gd29yc2Ugb24gSUUsIHNvIHdlIGRvbid0IGluY2x1ZGUgdGhlbSBpbiB0aGUgSUUgdmVyc2lvbi5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHNlZW0gdG8gbWVhc3VyZSBmcm9tIHRoZSBlZGdlXG4gIC8vIG9mIHRoZSB0ZXh0IGl0c2VsZiwgbm90IHRoZSBlZGdlIG9mIHRoZSBsaW5lOyB0aGVyZWZvcmUgd2Ugc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbSAtICRsaW5lLXNwYWNpbmc7XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLiBXZSBhZ2FpbiBuZWVkIHRvIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nIHNpbmNlIHRoZSBtb2NrcyBtZWFzdXJlIHRvIHRoZSBlZGdlIG9mIHRoZVxuICAvLyB0ZXh0LCBub3QgdGhlICBlZGdlIG9mIHRoZSBsaW5lLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlIC0gKCRsaW5lLXNwYWNpbmcgKiAyKTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHJhbnNsYXRlWiBjYXVzZXMgdGhlIGxhYmVsIHRvIG5vdCBhcHBlYXIgd2hpbGUgcHJpbnRpbmcsIHNvIHdlIG92ZXJyaWRlIGl0IHRvIG5vdFxuICAvLyBhcHBseSB0cmFuc2xhdGVaIHdoaWxlIHByaW50aW5nXG4gIEBtZWRpYSBwcmludCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjAgd2lsbCByZWx5IG9uIEF1dG9maWxsTW9uaXRvciBpbnN0ZWFkLlxuICAgICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICRvdXRsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjMsIDAuMTIpKTtcbiAgJG91dGxpbmUtY29sb3ItaG92ZXI6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJG91dGxpbmUtY29sb3ItcHJpbWFyeTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJG91dGxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICRvdXRsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjE1LCAwLjA2KSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1ob3ZlcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXByaW1hcnk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFzcyByZXBlYXRlZCBzbyB0aGF0IHJ1bGUgaXMgc3BlY2lmaWMgZW5vdWdoIHRvIG92ZXJyaWRlIGZvY3VzZWQgYWNjZW50IGNvbG9yIGNhc2UuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIGNvbG9yOiAkbGFiZWwtZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWRpc2FibGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlKVxuICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nOiAxZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBhbW91bnQgd2Ugb2Zmc2V0IHRoZSBsYWJlbCBmcm9tIHRoZSBpbnB1dCB0ZXh0IGluIHRoZSBvdXRsaW5lIGFwcGVhcmFuY2UuXG4gICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0OiAtMC4yNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICAgIG1hcmdpbi10b3A6ICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIHN0YW5kYXJkIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNDIpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpIHt9XG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgYXBwbHkgdG8gYWxsIGFwcGVhcmFuY2VzIG9mIHRoZSBmb3JtLWZpZWxkLlxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAvLyBMYWJlbCBjb2xvcnMuIFJlcXVpcmVkIGlzIHVzZWQgZm9yIHRoZSBgKmAgc3RhciBzaG93biBpbiB0aGUgbGFiZWwuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC42KSk7XG4gICRmb2N1c2VkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIHRleHQpO1xuICAkcmVxdWlyZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcblxuICAvLyBVbmRlcmxpbmUgY29sb3JzLlxuICAkdW5kZXJsaW5lLWNvbG9yLWJhc2U6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDEsIDAuODcpKTtcbiAgJHVuZGVybGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50LCB0ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4sIHRleHQpO1xuICAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1oaW50IHtcbiAgICBjb2xvcjogJGxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRmb2N1c2VkLWxhYmVsLWNvbG9yO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAkcmVxdWlyZWQtbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWJhc2U7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuXG4gICAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIFN0eWxpbmcgZm9yIHRoZSBlcnJvciBzdGF0ZSBvZiB0aGUgZm9ybSBmaWVsZC4gTm90ZSB0aGF0IHdoaWxlIHRoZSBzYW1lIGNhbiBiZVxuICAvLyBhY2hpZXZlZCB3aXRoIHRoZSBuZy0qIGNsYXNzZXMsIHdlIHVzZSB0aGlzIGFwcHJvYWNoIGluIG9yZGVyIHRvIGVuc3VyZSB0aGF0IHRoZSBzYW1lXG4gIC8vIGxvZ2ljIGlzIHVzZWQgdG8gc3R5bGUgdGhlIGVycm9yIHN0YXRlIGFuZCB0byBzaG93IHRoZSBlcnJvciBtZXNzYWdlcy5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuXG4gICAgICAmLm1hdC1hY2NlbnQsXG4gICAgICAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLm1hdC1lcnJvciB7XG4gICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKTtcbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlOiAxLjU7XG5cbiAgLy8gVGhlIHBhZGRpbmcgb24gdGhlIGluZml4LiBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZS5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgbGFiZWwgYW5kIHN1YnNjcmlwdCB0ZXh0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGlucHV0KTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4LFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IHtcbiAgICAvLyBBbGxvdyBpY29ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgaWNvbiBidXR0b25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbi1idXR0b24ge1xuICAgICAgaGVpZ2h0OiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG4gICAgICB3aWR0aDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBoZWlnaHQ6ICRsaW5lLWhlaWdodCAqIDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgLy8gVGhyb3dzIG9mZiB0aGUgYmFzZWxpbmUgaWYgd2UgZG8gaXQgYXMgYSByZWFsIG1hcmdpbiwgc28gd2UgZG8gaXQgYXMgYSBib3JkZXIgaW5zdGVhZC5cbiAgICBib3JkZXItdG9wOiAkaW5maXgtbWFyZ2luLXRvcCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG5cbiAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgdG9wOiAtJGluZml4LW1hcmdpbi10b3A7XG4gICAgcGFkZGluZy10b3A6ICRpbmZpeC1tYXJnaW4tdG9wO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAvLyBXZSB3YW50IHRoZSB1bmRlcmxpbmUgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2l6ZTtcbiAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQgKGFkanVzdGVkIGZvciB0aGUgc21hbGxlciBmb250IHNpemUpO1xuICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdHJlZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRyZWUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10cmVlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlcyBhbGwgb2YgdGhlIHR5cG9ncmFwaGljIHN0eWxlcy5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJGNvbmZpZzogbnVsbCkge1xuICBAaWYgJGNvbmZpZyA9PSBudWxsIHtcbiAgICAkY29uZmlnOiBtYXQtdHlwb2dyYXBoeS1jb25maWcoKTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBtYXQtY29yZSgkdHlwb2dyYXBoeS1jb25maWc6IG51bGwpIHtcbiAgQGluY2x1ZGUgYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCR0eXBvZ3JhcGh5LWNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLWExMXkoKTtcbiAgQGluY2x1ZGUgY2RrLW92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLXRleHQtZmllbGQoKTtcbn1cblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBkZXBlbmQgb24gdGhlIHRoZW1lLlxuQG1peGluIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wc2V1ZG8tY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcblxuICAvLyBQcm92aWRlcyBleHRlcm5hbCBDU1MgY2xhc3NlcyBmb3IgZWFjaCBlbGV2YXRpb24gdmFsdWUuIEVhY2ggQ1NTIGNsYXNzIGlzIGZvcm1hdHRlZCBhc1xuICAvLyBgbWF0LWVsZXZhdGlvbi16JHpWYWx1ZWAgd2hlcmUgYCR6VmFsdWVgIGNvcnJlc3BvbmRzIHRvIHRoZSB6LXNwYWNlIHRvIHdoaWNoIHRoZSBlbGVtZW50IGlzXG4gIC8vIGVsZXZhdGVkLlxuICBAZm9yICR6VmFsdWUgZnJvbSAwIHRocm91Z2ggMjQge1xuICAgIC4jeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9I3skelZhbHVlfSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlIHVzZXIncyBjb250ZW50IGlzbid0XG4gIC8vIGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLiBOb3RlIHRoYXQgd2UgbmVlZCB0byBleGNsdWRlIHRoZSBhbXBlcnNhbmRcbiAgLy8gc2VsZWN0b3IgaW4gY2FzZSB0aGUgbWl4aW4gaXMgaW5jbHVkZWQgYXQgdGhlIHRvcCBsZXZlbC5cbiAgLm1hdC1hcHAtYmFja2dyb3VuZCN7aWYoJiwgJywgJi5tYXQtYXBwLWJhY2tncm91bmQnLCAnJyl9IHtcbiAgICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLy8gTWFya2VyIHRoYXQgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgdXNlciBoYXMgYWRkZWQgYSB0aGVtZSB0byB0aGVpciBwYWdlLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC10aGVtZS1sb2FkZWQtbWFya2VyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWRpdmlkZXIge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWRpdmlkZXItdmVydGljYWwge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBDcmVhdGUgYSB0aGVtZS5cbkBtaXhpbiBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCR0aGVtZSkge1xuICBAaW5jbHVkZSBtYXQtY29yZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGl2aWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpO1xufVxuIiwiXG4vLyBET05UIE1PRElGWVxuQG1peGluIHB1YmxpYy1saWdodCB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICBcbiAgQG1peGluIHB1YmxpYy1yZWd1bGFyIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIFxuICBAbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICBcbiAgQG1peGluIHB1YmxpYy1ib2xkIHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIFxuICBAbWl4aW4gaGVhZC1saWdodCB7XG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIH1cbiAgXG4gIEBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgfVxuICBcbiAgQG1peGluIGhlYWQtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICB9XG4gIFxuICBAbWl4aW4gaGVhZC1ib2xkIHtcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIH1cbiAgXG4gLyogQG1peGluIGRlc3AtcmVndWxhciB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDsgICBcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICB9XG4gIFxuICBAbWl4aW4gZGVzcC1tZWRpdW0ge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICB9ICovXG5cbiAgQG1peGluIGRlc3AtcmVndWxhciB7XG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgfVxuICBcbiAgQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjNweDtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIH1cbiAgXG5cbiAgQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICAgIGZvbnQtc2l6ZTogKCAkcGl4ZWxzIC8gJGZ0LWJhc2UgKSArIHJlbTtcbiAgfVxuICAiLCJAaW1wb3J0IFwifnNyYy9AY29uZG8vc3R5bGVzL2NvbmRvXCI7XG5cbkBpbmNsdWRlIGNvbmRvLXRoZW1lIHtcblxuXHQkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAgICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICAgXG59XG5cbi5zbG90LWNvbmZpcm0td3JhcHBlciB7XG4gICAgLmFsbG9jYXRlLWhlYWRpbmcge1xuICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbC0wMik7XG4gICAgfVxuICAgIC5jb21tZW50LWJveCB7XG4gICAgICAgIGhlaWdodDogdW5zZXQ7XG4gICAgfVxuICAgIDo6bmctZGVlcCAuYy1idG4ge1xuICAgICAgICAvL3dpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIvKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cbi8qIEBtaXhpbiBkZXNwLXJlZ3VsYXIge1xuICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICBsZXR0ZXItc3BhY2luZzogMC4zcHg7ICAgXG4gICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gfVxuXG4gQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XG4gICBmb250LXdlaWdodDogNzAwO1xuICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiB9ICovXG4uc2xvdC1jb25maXJtLXdyYXBwZXIgLmFsbG9jYXRlLWhlYWRpbmcge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbi5zbG90LWNvbmZpcm0td3JhcHBlciAuY29tbWVudC1ib3gge1xuICBoZWlnaHQ6IHVuc2V0O1xufVxuLnNsb3QtY29uZmlybS13cmFwcGVyIDo6bmctZGVlcCAuYy1idG4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: AllocatedSlotConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocatedSlotConfirmationComponent", function() { return AllocatedSlotConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");








let AllocatedSlotConfirmationComponent = class AllocatedSlotConfirmationComponent {
    constructor(dialogRef, apartmentService, vehicleService, sharedService, staffService, cookieService, data) {
        this.dialogRef = dialogRef;
        this.apartmentService = apartmentService;
        this.vehicleService = vehicleService;
        this.sharedService = sharedService;
        this.staffService = staffService;
        this.cookieService = cookieService;
        this.data = data;
        this.allocateSlotData = {};
        this.blockUnit = [];
        this.towerList = [];
        this.staffsList = {
            "dropdownList": [],
            "selectedItems": []
        };
        this.staffsdropdownSettings = {};
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
    getUnits(type) {
        if (type == 'change') {
            this.allocateSlotData.apartmentBlockUnitId = '';
        }
        let unitParams = {
            apartmentBlockId: this.towerId
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(unitParams).subscribe((res) => {
            this.blockUnit = res;
        }, error => {
            console.log(error);
        });
    }
    slotAllocation() {
        let entity = {
            apartmentId: this.allocateSlotData.apartmentId,
            parkingSlotBlockNumber: this.allocateSlotData.parkingSlotBlockNumber,
            apartmentBlockUnitId: this.allocateSlotData.apartmentBlockUnitId,
            comment: this.allocateSlotData.comment,
            isActive: true,
            parkingSlotId: this.allocateSlotData.parkingSlotId,
            parkingTypeId: this.allocateSlotData.parkingTypeId,
            permSlotStatusId: parseInt(this.allocateSlotData.permSlotStatusId),
            slotMainTypeId: this.allocateSlotData.slotMainTypeId,
            slotName: this.allocateSlotData.slotName,
            slotStatusId: this.allocateSlotData.slotStatusId,
            slotTypeId: this.allocateSlotData.slotTypeId,
            sqrFt: this.allocateSlotData.sqrFt,
            insertedBy: this.allocateSlotData.insertedBy,
            insertedOn: this.allocateSlotData.insertedOn,
            tempApartmentBlockUnitUserId: null,
            staffId: this.allocateSlotData.slotMainTypeId == 300 ? this.staffsList.selectedItems[0].staffId : null,
            updatedBy: parseInt(this.cookieService.get('userId')),
            updatedOn: new Date().toISOString()
        };
        let parkingSlot = {
            parkingSlot: entity
        };
        this.vehicleService.updateParkingSlot(parkingSlot).subscribe(resp => {
            this.sharedService.setAlertMessage("Parking Slot Updated successfully");
            this.dialogRef.close(true);
        });
    }
    ngOnInit() {
        this.staffsdropdownSettings = {
            singleSelection: true,
            primaryKey: 'userId',
            labelKey: 'customLabel',
            enableSearchFilter: true,
            enableFilterSelectAll: false,
            autoPosition: false,
            maxHeight: 130
        };
        this.allocateSlotData = this.data;
        this.towerId = this.allocateSlotData.apartmentBlockId;
        if (this.allocateSlotData.slotMainTypeId == 299) {
            //unit owned Tower
            let towerParams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.apartmentService.getApartmentBlockByApartmentId(towerParams).subscribe((res) => {
                this.towerList = res;
                if (this.towerId) { //Edit Mode
                    this.getUnits('editMode');
                }
            }, error => {
                console.log(error);
            });
        }
        else {
            //community Owned staff
            this.staffService.getAllStaffs().subscribe((res) => {
                if (res.length) {
                    this.staffsList.dropdownList = res.filter((ele) => {
                        ele.customLabel = `${ele.firstName} ${ele.lastName} ${ele.staffCategory_Label}`;
                        return ele.isActive;
                    });
                    if (this.allocateSlotData.staffId) {
                        this.staffsList.selectedItems = this.staffsList.dropdownList.filter(data => data.staffId == parseInt(this.allocateSlotData.staffId));
                    }
                }
            }, error => {
                console.log(error);
            });
        }
    }
};
AllocatedSlotConfirmationComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__["StaffService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AllocatedSlotConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-allocated-slot-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./allocated-slot-confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./allocated-slot-confirmation.component.scss */ "./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_4__["VehicleService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_7__["StaffService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], Object])
], AllocatedSlotConfirmationComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctYWRtaW4tdmlldy1ib29raW5nL3BhcmtpbmctYWRtaW4tdmlldy1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ParkingAdminViewBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAdminViewBookingComponent", function() { return ParkingAdminViewBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





let ParkingAdminViewBookingComponent = class ParkingAdminViewBookingComponent {
    constructor(cookieService, parkingService) {
        this.cookieService = cookieService;
        this.parkingService = parkingService;
    }
    ngOnInit() {
        this.searchBookingHistory = {
            ApartmentID: this.cookieService.get('apartmentId'),
            StartDate: '',
            EndDate: '',
            StartTime: '',
            EndTime: ''
        };
    }
    getBookingHistoryList() {
        let searchHistoryParam = {
            ApartmentID: Number(this.cookieService.get('apartmentId')),
            StartDate: this.searchBookingHistory.StartDate,
            EndDate: this.searchBookingHistory.EndDate,
            StartTime: moment__WEBPACK_IMPORTED_MODULE_4__(this.searchBookingHistory.StartTime, 'hh:mm a').format(),
            EndTime: moment__WEBPACK_IMPORTED_MODULE_4__(this.searchBookingHistory.EndTime, 'hh:mm a').format()
        };
        this.parkingService.getParkingAllocationSummary(searchHistoryParam).subscribe(resp => {
            console.log('resp', resp);
        }, error => {
        });
    }
};
ParkingAdminViewBookingComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"] }
];
ParkingAdminViewBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-admin-view-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-admin-view-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-admin-view-booking.component.scss */ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"]])
], ParkingAdminViewBookingComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctYWRtaW4tdmlldy1ib29raW5nL3BhcmtpbmctYm9va2luZy12aWV3LWNvbW11bml0eS1vd25lZC10by11bml0L3BhcmtpbmctYm9va2luZy12aWV3LWNvbW11bml0eS1vd25lZC10by11bml0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: ParkingBookingViewCommunityOwnedToUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingBookingViewCommunityOwnedToUnitComponent", function() { return ParkingBookingViewCommunityOwnedToUnitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingBookingViewCommunityOwnedToUnitComponent = class ParkingBookingViewCommunityOwnedToUnitComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingBookingViewCommunityOwnedToUnitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-booking-view-community-owned-to-unit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-booking-view-community-owned-to-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-booking-view-community-owned-to-unit.component.scss */ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingBookingViewCommunityOwnedToUnitComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctYWRtaW4tdmlldy1ib29raW5nL3BhcmtpbmctYm9va2luZy12aWV3LWNvbW11bml0eS1vd25lZC10by12aXN0b3IvcGFya2luZy1ib29raW5nLXZpZXctY29tbXVuaXR5LW93bmVkLXRvLXZpc3Rvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: ParkingBookingViewCommunityOwnedToVistorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingBookingViewCommunityOwnedToVistorComponent", function() { return ParkingBookingViewCommunityOwnedToVistorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingBookingViewCommunityOwnedToVistorComponent = class ParkingBookingViewCommunityOwnedToVistorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingBookingViewCommunityOwnedToVistorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-booking-view-community-owned-to-vistor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-booking-view-community-owned-to-vistor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-booking-view-community-owned-to-vistor.component.scss */ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingBookingViewCommunityOwnedToVistorComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctYWxsb2NhdGUtc2xvdHMvcGFya2luZy1hbGxvY2F0ZS1zbG90cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ParkingAllocateSlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAllocateSlotsComponent", function() { return ParkingAllocateSlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingAllocateSlotsComponent = class ParkingAllocateSlotsComponent {
    constructor() {
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
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
    ngOnInit() {
    }
};
ParkingAllocateSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-allocate-slots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-allocate-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-allocate-slots.component.scss */ "./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingAllocateSlotsComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctY3JlYXRlLXBhcmtpbmctYm9va2luZy9wYXJraW5nLWNyZWF0ZS1wYXJraW5nLWJvb2tpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ParkingCreateParkingBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingCreateParkingBookingComponent", function() { return ParkingCreateParkingBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");











let ParkingCreateParkingBookingComponent = class ParkingCreateParkingBookingComponent {
    constructor(parkingService, cookieService, sharedService, router, lookupService, apartmentService, activateRouter) {
        this.parkingService = parkingService;
        this.cookieService = cookieService;
        this.sharedService = sharedService;
        this.router = router;
        this.lookupService = lookupService;
        this.apartmentService = apartmentService;
        this.activateRouter = activateRouter;
        this.slotSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.parkingSlotData = {};
        this.slotRateList = [];
        this.statusList = [];
        this.towerList = [];
        this.unitList = [];
    }
    onSelectSlot(event) {
        let selectedValue = event.option.value;
        this.parkingSlotData.displaySlotNumber = `${selectedValue.parkingSlotNo} location ${selectedValue.slotTypeName}(${selectedValue.permOwner} ${selectedValue.apartmentBlockNumber} ${selectedValue.apartmentBlockUnitNumber})`;
        this.parkingSlotData.parkingSlotNo = selectedValue.parkingSlotNo;
        this.parkingSlotData.parkingSlotID = selectedValue.parkingSlotID;
        this.parkingSlotData.apartmentBlockUnitNumber = selectedValue.apartmentBlockUnitNumber;
        this.parkingSlotData.permOwner = selectedValue.permOwner;
        this.parkingSlotData.slotTypeId = selectedValue.slotTypeId;
        this.parkingSlotData.apartmentBlockNumber = selectedValue.apartmentBlockNumber;
    }
    submitParkingSlot() {
        let entity = {
            "id": 0,
            "startDate": this.parkingSlotData.startDate,
            "endDate": this.parkingSlotData.endDate,
            "startTime": moment__WEBPACK_IMPORTED_MODULE_8__(this.parkingSlotData.startTime).format('HH:mm:ss'),
            "endTime": moment__WEBPACK_IMPORTED_MODULE_8__(this.parkingSlotData.endTime).format('HH:mm:ss'),
            "availabelParkingId": 0,
            "rentedParkingAllocationTypeId": 0,
            "totalFee": 0,
            "isCancelled": true,
            "refundAmount": 0,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "visitorId": 0,
            "apartmentBlockUnitId": 0,
            "currentParkingTrackerId": 0,
            "addToMonthyBill": true
        };
        let parking = {
            allocParking: entity
        };
        this.parkingService.allocateParking(parking).subscribe((res) => {
            if (!isNaN(res.message)) {
                this.sharedService.setAlertMessage("Parking Slot Created successfully");
                this.router.navigate(['/ams/parking-management/set-parking-availablity/unit-parking-availablity']);
            }
            else if (res.message) {
                this.sharedService.setAlertMessage(res.message);
            }
            else {
                this.sharedService.setAlertMessage(res.errorMessage);
            }
        });
    }
    getUnits(type) {
        let unitParams = {
            apartmentBlockId: this.blockId
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(unitParams).subscribe((res) => {
            this.unitList = res;
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(param => this.type = param['type']);
        this.slotData$ = this.slotSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(data => data.length > 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(term => {
            let entity = {
                ApartmentID: parseInt(this.cookieService.get('apartmentId')),
                KeywordSlotNo: term,
                SlotTypeID: this.type == 'unit' ? 299 : 300,
            };
            return this.parkingService.getParkingSlotNoByKeyword(entity);
        }));
        this.slotData$.subscribe(res => {
            if (res.length > 0) {
                this.parkingSlotList = res;
            }
        });
        //Slot Rate Type List
        let getParam = {
            ApartmantId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.parkingService.getParkingAllocationType(getParam).subscribe((resp) => {
            this.slotRateList = resp.filter(data => {
                return data.isActive;
            });
        }, error => {
            console.log(error);
        });
        //Status
        let slotTypeParams = {
            LookupTypeId: 97
        };
        this.lookupService.getLookupValueByLookupTypeId(slotTypeParams).subscribe((res) => {
            this.statusList = res.filter(item => {
                return item.isActive;
            });
        });
        //tower
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.towerList = res;
        });
    }
};
ParkingCreateParkingBookingComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__["ApartmentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ParkingCreateParkingBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-create-parking-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-create-parking-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-create-parking-booking.component.scss */ "./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_9__["LookupService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_10__["ApartmentService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], ParkingCreateParkingBookingComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctY3JlYXRlLXBhcmtpbmctc2xvdC9wYXJraW5nLWNyZWF0ZS1wYXJraW5nLXNsb3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ParkingCreateParkingSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingCreateParkingSlotComponent", function() { return ParkingCreateParkingSlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");









let ParkingCreateParkingSlotComponent = class ParkingCreateParkingSlotComponent {
    constructor(parkingService, vehicleService, lookupService, router, apartmentService, cookieService, sharedService, activatedRoute) {
        this.parkingService = parkingService;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.router = router;
        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.slotMainTypeList = [];
        this.slotTypeList = [];
        this.parkingTypeList = [];
        this.towerList = [];
        this.isCreateSlot = true;
    }
    ngOnInit() {
        this.createSlot = {
            "parkingSlotId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "apartmentBlockUnitId": null,
            "slotName": "",
            "slotTypeId": 0,
            "slotStatusId": null,
            "comment": "",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "parkingTypeId": 0,
            "parkingSlotBlockNumber": 0,
            "sqrFt": 0,
            "slotMainTypeId": 0,
            "permSlotStatusId": null
        };
        this.getMasterData();
        this.slotId = this.activatedRoute.params['value'].id;
        if (this.slotId) {
            this.isCreateSlot = false;
            this.getParkingSlot();
        }
        else {
            this.isCreateSlot = true;
        }
    }
    getMasterData() {
        let mainTypeParam = {
            LookupTypeId: 71
        };
        //slot main type
        this.lookupService.getLookupValueByLookupTypeId(mainTypeParam).subscribe((res) => {
            this.slotMainTypeList = res.filter(item => {
                return item.isActive;
            });
        });
        //slot type
        let slotTypeParams = {
            LookupTypeId: 18
        };
        this.lookupService.getLookupValueByLookupTypeId(slotTypeParams).subscribe((res) => {
            this.slotTypeList = res.filter(item => {
                return item.isActive;
            });
        });
        //parking type
        this.parkingService.getParkingType().subscribe((resp) => {
            this.parkingTypeList = resp;
        });
        let towerParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(towerParams).subscribe((res) => {
            this.towerList = res;
        });
    }
    getParkingSlot() {
        let params = {
            parkingSlotId: this.slotId,
        };
        this.vehicleService.getParkingSlotById(params).subscribe(resp => {
            this.createSlot = resp[0];
        });
    }
    selectSlotType() {
        if (this.createSlot.slotMainTypeId == 299) { //  Unit Slot Type is applicable for Unit Owned
            this.createSlot.slotTypeId = 81; // Unit Owned Id
        }
        else {
            this.slotTypeList.forEach((data, index) => {
                if (data.lookupValueId == 81) {
                    this.slotTypeList.splice(index, 1);
                }
            });
        }
    }
    parkingSlot() {
        let entity = {
            parkingSlot: this.createSlot
        };
        if (this.isCreateSlot) {
            this.createSlot.sqrFt = parseFloat(this.createSlot.sqrFt);
            this.vehicleService.addParkingSlot(entity).subscribe(resp => {
                this.sharedService.setAlertMessage("Parking Slot Created successfully");
                this.router.navigate(['/ams/parking-management/manage-parking-slots']);
            });
        }
        else {
            this.vehicleService.updateParkingSlot(entity).subscribe(resp => {
                this.sharedService.setAlertMessage("Parking Slot Updated successfully");
                this.router.navigate(['/ams/parking-management/manage-parking-slots']);
            });
        }
    }
};
ParkingCreateParkingSlotComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ParkingCreateParkingSlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-create-parking-slot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-create-parking-slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-create-parking-slot.component.scss */ "./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_5__["VehicleService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_8__["ApartmentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], ParkingCreateParkingSlotComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWFsbG9jYXRlLWF2YWlsYWJpbGl0eS1saXN0L3BhcmtpbmctYWEtY29tbXVuaXR5LXRvLW90aGVycy9wYXJraW5nLWFhLWNvbW11bml0eS10by1vdGhlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: ParkingAaCommunityToOthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAaCommunityToOthersComponent", function() { return ParkingAaCommunityToOthersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");



let ParkingAaCommunityToOthersComponent = class ParkingAaCommunityToOthersComponent {
    constructor() { }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.unitAllocationHeader = [{
                text: 'SLOT TYPE',
                datafield: 'slotType',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'SLOT BLOCK NO',
                datafield: 'slotBlockNo',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'TEMP BLOCK',
                datafield: 'tempBlock',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'TEMP UNIT',
                datafield: 'tempUnit',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'START DATE & TIME',
                datafield: 'startDateTime',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END DATA & TIME',
                datafield: 'endDateTime',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'SLOT RATE TYPE',
                datafield: 'slotRateType',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'PRICE',
                datafield: 'price',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'STATUS',
                cellsalign: 'status',
                align: 'center',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        //  var ticketListData = res.filter(data => {
        //   return data.isActive
        // })
        let localData = [];
        this.gridSourceData = {
            localdata: localData,
            datatype: "array"
        };
        this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], ParkingAaCommunityToOthersComponent.prototype, "datagrid", void 0);
ParkingAaCommunityToOthersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-aa-community-to-others',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-aa-community-to-others.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-aa-community-to-others.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingAaCommunityToOthersComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWFsbG9jYXRlLWF2YWlsYWJpbGl0eS1saXN0L3BhcmtpbmctYWEtdW5pdC10by1jb21tdW5pdHkvcGFya2luZy1hYS11bml0LXRvLWNvbW11bml0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: ParkingAaUnitToCommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAaUnitToCommunityComponent", function() { return ParkingAaUnitToCommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let ParkingAaUnitToCommunityComponent = class ParkingAaUnitToCommunityComponent {
    constructor(parkingService, cookieService) {
        this.parkingService = parkingService;
        this.cookieService = cookieService;
    }
    getUnitAvailability() {
        let params = {
            ApartmantId: parseInt(this.cookieService.get('apartmentId')),
            ApartmentBlockId: null,
            ParkingSlotId: null,
            StartDate: null,
            EndDate: null,
            StartTime: null,
            EndTime: null,
            SlotMainTypeID: 299 //UnitOwnedId
        };
        this.parkingService.getAllRentedParkingAllocation(params).subscribe((res) => {
            this.unitAllocationData = res;
            this.gridSourceData = {
                localdata: this.unitAllocationData,
                datatype: "array"
            };
            this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
        });
    }
    ngOnInit() {
        this.getUnitAvailability();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.unitAllocationHeader = [{
                text: 'SLOT Name',
                datafield: 'slotname',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'SLOT Type',
                datafield: 'spelotTy',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Perm.Owner Unit',
                datafield: 'tempBlock',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Perm.Owner Name',
                datafield: 'permOwner',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Temp.Owner Unit',
                datafield: 'permr',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Temp.Owner Name',
                datafield: 'per',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'START DATE',
                datafield: 'startDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'START TIME',
                datafield: 'startTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END DATE',
                datafield: 'endDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END TIME',
                datafield: 'endTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'SlotRate Type',
                cellsalign: 'status',
                align: 'center',
                width: 130,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Price',
                cellsalign: 'stat',
                align: 'center',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }];
    }
};
ParkingAaUnitToCommunityComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], ParkingAaUnitToCommunityComponent.prototype, "datagrid", void 0);
ParkingAaUnitToCommunityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-aa-unit-to-community',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-aa-unit-to-community.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-aa-unit-to-community.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], ParkingAaUnitToCommunityComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWFsbG9jYXRlLWF2YWlsYWJpbGl0eS1saXN0L3BhcmtpbmctYWEtdW5pdC10by11bml0LWFsbG9jYXRpb24vcGFya2luZy1hYS11bml0LXRvLXVuaXQtYWxsb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: ParkingAaUnitToUnitAllocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAaUnitToUnitAllocationComponent", function() { return ParkingAaUnitToUnitAllocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let ParkingAaUnitToUnitAllocationComponent = class ParkingAaUnitToUnitAllocationComponent {
    constructor(parkingService, cookieService) {
        this.parkingService = parkingService;
        this.cookieService = cookieService;
    }
    getUnitAvailability() {
        let params = {
            ApartmantId: parseInt(this.cookieService.get('apartmentId')),
            ApartmentBlockId: null,
            ParkingSlotId: null,
            StartDate: null,
            EndDate: null,
            StartTime: null,
            EndTime: null,
            SlotMainTypeID: 299 //UnitOwnedId
        };
        this.parkingService.getAllRentedParkingAllocation(params).subscribe((res) => {
            this.unitAllocationData = res;
            this.gridSourceData = {
                localdata: this.unitAllocationData,
                datatype: "array"
            };
            this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
        });
    }
    ngOnInit() {
        this.getUnitAvailability();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.unitAllocationHeader = [{
                text: 'SLOT Name',
                datafield: 'slotName',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'SLOT Type',
                datafield: 'slotType',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Perm.Owner Unit',
                datafield: 'ownerUnit',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Perm.Owner Name',
                datafield: 'permOwner',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Temp.Owner Unit',
                datafield: 'permr',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Temp.Owner Name',
                datafield: 'per',
                minwidth: 140,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'START DATE',
                datafield: 'startDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'START TIME',
                datafield: 'startTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END DATE',
                datafield: 'endDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END TIME',
                datafield: 'endTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'SlotRate Type',
                cellsalign: 'status',
                align: 'center',
                width: 130,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Price',
                cellsalign: 'stat',
                align: 'center',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }];
    }
    searchList() {
        let searchParam = {
            AppartmantId: 2,
            ApartmentBlockId: 5,
            ParkingSlotId: null,
            StartDate: "",
            EndDate: "",
            StartTime: "",
            EndTime: "",
        };
        this.parkingService.getAllRentedParkingAllocation(searchParam).subscribe(resp => {
        }, error => {
        });
    }
};
ParkingAaUnitToUnitAllocationComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], ParkingAaUnitToUnitAllocationComponent.prototype, "datagrid", void 0);
ParkingAaUnitToUnitAllocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-aa-unit-to-unit-allocation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-aa-unit-to-unit-allocation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-aa-unit-to-unit-allocation.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], ParkingAaUnitToUnitAllocationComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWFsbG9jYXRlLWF2YWlsYWJpbGl0eS1saXN0L3BhcmtpbmctbWFuYWdlLWFsbG9jYXRlLWF2YWlsYWJpbGl0eS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: ParkingManageAllocateAvailabilityListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageAllocateAvailabilityListComponent", function() { return ParkingManageAllocateAvailabilityListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManageAllocateAvailabilityListComponent = class ParkingManageAllocateAvailabilityListComponent {
    constructor() { }
    ngOnInit() {
        this.navArray = [
            { link: 'unit-to-unit-allocation', name: 'Unit to Unit Temp.Allocation' },
            { link: 'unit-to-community', name: 'Unit to Community' },
            { link: 'community-to-others', name: 'Community to Others' }
        ];
    }
};
ParkingManageAllocateAvailabilityListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-allocate-availability-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-allocate-availability-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-allocate-availability-list.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageAllocateAvailabilityListComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWFsbG9jYXRlZC1zbG90cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZWQtc2xvdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ParkingManageAllocatedSlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageAllocatedSlotsComponent", function() { return ParkingManageAllocatedSlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../allocated-slot-confirmation/allocated-slot-confirmation.component */ "./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");









let ParkingManageAllocatedSlotsComponent = class ParkingManageAllocatedSlotsComponent {
    constructor(injector, dialog, vehicleService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.vehicleService = vehicleService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = true;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    ondeleteSlot(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let parkingSlotId = dataRecord.parkingSlotId;
        this.modalService.showConfirmModal(parkingSlotId);
    }
    oneditSlot(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        const dialogRef = this.dialog.open(_allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["AllocatedSlotConfirmationComponent"], {
            width: '600px',
            height: 'auto',
            data: dataRecord
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getAllocatedSlot();
            }
        });
    }
    searchAllocate() {
        if (this.allocateFilter != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.allocateFilter;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.allocatedSlotHeader.forEach(item => {
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
    getAllocatedSlot() {
        this.isDataLoaded = true;
        let getParam = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vehicleService.getParkingSlotByApartmentId(getParam).subscribe((res) => {
            var rawSlotRateType = res.filter(data => {
                return data.isActive;
            });
            let arrangeSlotRawData = {
                localdata: rawSlotRateType,
                datatype: "array"
            };
            this.allocatedSlotData = new jqx.dataAdapter(arrangeSlotRawData);
            this.isDataLoaded = false;
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'AllocatedSlot');
    }
    ngOnInit() {
        this.getAllocatedSlot();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.allocatedSlotHeader = [{
                text: 'slot name',
                datafield: 'slotName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Slot Location',
                cellsalign: 'center',
                align: 'center',
                datafield: 'parkingSlotBlockNumber_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'owner unit',
                cellsalign: 'center',
                align: 'center',
                datafield: 'apartmentBlockUnitNumber',
                cellsrenderer: (row, column, unit) => {
                    let block = this.allocatedSlotData.loadedData[row].apartmentBlockNumber;
                    block = block == null ? '' : block;
                    unit = unit == null ? '' : unit;
                    return `<div class="jqx-custom-inner-cell">${block} ${unit}</div>`;
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'slot main type',
                datafield: 'slotMainTypeName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'slot type',
                datafield: 'slotTypeName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'allocations',
                datafield: 'slotMainTypeId',
                cellsalign: 'center',
                align: 'center',
                cellsrenderer: (row, column, typeId) => {
                    if ((typeId == 299 && this.allocatedSlotData.loadedData[row].apartmentBlockUnitId) || (typeId == 300 && this.allocatedSlotData.loadedData[row].staffId)) {
                        return '<div class="simple-actions"><span class="dots bg-green-900"></div>';
                    }
                    else {
                        return '<div class="simple-actions"><span class="dots bg-red-900 link" onClick="editAllocateSlot(' + row + ')"></div>';
                    }
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editAllocateSlot(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDelete(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }];
        //delete item
        this.apiUnsubcribe = this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                var params = {
                    parkingSlotId: item,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.vehicleService.deleteParkingSlot(params).subscribe((res) => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.getAllocatedSlot();
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiUnsubcribe.unsubscribe();
    }
};
ParkingManageAllocatedSlotsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_7__["VehicleService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], ParkingManageAllocatedSlotsComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:ondeleteSlot', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ParkingManageAllocatedSlotsComponent.prototype, "ondeleteSlot", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:oneditSlot', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ParkingManageAllocatedSlotsComponent.prototype, "oneditSlot", null);
ParkingManageAllocatedSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-allocated-slots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-allocated-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-allocated-slots.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_7__["VehicleService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], ParkingManageAllocatedSlotsComponent);

function showConfirmDelete(row) {
    var event = new CustomEvent('ondeleteSlot', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDelete = showConfirmDelete;
function editAllocateSlot(row) {
    var event = new CustomEvent('oneditSlot', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editAllocateSlot = editAllocateSlot;


/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.scss ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWJvb2tpbmcvYm9va2luZy1jb25maXJtYXRpb24vYm9va2luZy1jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: BookingConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingConfirmationComponent", function() { return BookingConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");



let BookingConfirmationComponent = class BookingConfirmationComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    close() {
    }
};
BookingConfirmationComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
BookingConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./booking-confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./booking-confirmation.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], BookingConfirmationComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWJvb2tpbmcvcGFya2luZy1tYW5hZ2UtYm9va2luZy1jb21tdW5pdHktdG8tb3RoZXIvcGFya2luZy1tYW5hZ2UtYm9va2luZy1jb21tdW5pdHktdG8tb3RoZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: ParkingManageBookingCommunityToOtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageBookingCommunityToOtherComponent", function() { return ParkingManageBookingCommunityToOtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManageBookingCommunityToOtherComponent = class ParkingManageBookingCommunityToOtherComponent {
    constructor() {
        this.isMobile = false;
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    ngOnInit() {
    }
};
ParkingManageBookingCommunityToOtherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-booking-community-to-other',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-booking-community-to-other.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-booking-community-to-other.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageBookingCommunityToOtherComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWJvb2tpbmcvcGFya2luZy1tYW5hZ2UtYm9va2luZy11bml0LXRvLWNvbW11bml0eS9wYXJraW5nLW1hbmFnZS1ib29raW5nLXVuaXQtdG8tY29tbXVuaXR5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: ParkingManageBookingUnitToCommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageBookingUnitToCommunityComponent", function() { return ParkingManageBookingUnitToCommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManageBookingUnitToCommunityComponent = class ParkingManageBookingUnitToCommunityComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingManageBookingUnitToCommunityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-booking-unit-to-community',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-booking-unit-to-community.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-booking-unit-to-community.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageBookingUnitToCommunityComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWJvb2tpbmcvcGFya2luZy1tYW5hZ2UtYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ParkingManageBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageBookingComponent", function() { return ParkingManageBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-confirmation/booking-confirmation.component */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts");




let ParkingManageBookingComponent = class ParkingManageBookingComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    ngOnInit() {
    }
    openConfirmation() {
        const dialogRef = this.dialog.open(_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["BookingConfirmationComponent"], {});
    }
};
ParkingManageBookingComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
ParkingManageBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-booking.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], ParkingManageBookingComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.scss ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLWZpbHRlci9wYXJraW5nLW1hbmFnZS1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ParkingManageFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageFilterComponent", function() { return ParkingManageFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManageFilterComponent = class ParkingManageFilterComponent {
    constructor() {
        this.filter = {};
        this.filterObj = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    filterSlot() {
        this.filterObj.emit(this.filter);
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('filterType'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingManageFilterComponent.prototype, "filterType", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('filterObj'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingManageFilterComponent.prototype, "filterObj", void 0);
ParkingManageFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-filter',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-filter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-filter.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageFilterComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlLXBhcmtpbmctc2xvdHMvcGFya2luZy1tYW5hZ2UtcGFya2luZy1zbG90cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ParkingManageParkingSlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageParkingSlotsComponent", function() { return ParkingManageParkingSlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







;


let ParkingManageParkingSlotsComponent = class ParkingManageParkingSlotsComponent {
    constructor(injector, dialog, vehicleService, sharedService, cookieService, router) {
        this.injector = injector;
        this.dialog = dialog;
        this.vehicleService = vehicleService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.router = router;
        this.isDataLoaded = true;
        this.slotDataList = [];
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    onEditTicket(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let parkingSlotId = dataRecord.parkingSlotId;
        this.router.navigateByUrl('/ams/parking-management/edit-parking-slot/' + parkingSlotId);
    }
    onTicketDelete(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let parkingSlotId = dataRecord.parkingSlotId;
        this.modalService.showConfirmModal(parkingSlotId);
    }
    searchSlot() {
        if (this.slotFilter != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.slotFilter;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.slotHeader.forEach(item => {
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
    getParkingSlot() {
        this.isDataLoaded = true;
        let parkingSlotParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vehicleService.getParkingSlotByApartmentId(parkingSlotParams).subscribe((res) => {
            var rawSlotRateType = res.filter(data => {
                return data.isActive;
            });
            let arrangeSlotRawData = {
                localdata: rawSlotRateType,
                datatype: "array"
            };
            this.slotDataList = new jqx.dataAdapter(arrangeSlotRawData);
            this.isDataLoaded = false;
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'ParkingSlots');
    }
    ngOnInit() {
        this.getParkingSlot();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.slotHeader = [{
                text: 'slot name',
                datafield: 'slotName',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'slot location',
                datafield: 'parkingSlotBlockNumber_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'slot main type',
                datafield: 'slotMainTypeName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'slot type',
                datafield: 'slotTypeName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'vehicle type',
                datafield: 'parkingTypeName',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'sq. m',
                datafield: 'sqrFt',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                minwidth: 120,
                renderer: columnrenderer
            }];
        //delete item
        this.apiUnsubcribe = this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                var params = {
                    parkingSlotId: item,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.vehicleService.deleteParkingSlot(params).subscribe((res) => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.getParkingSlot();
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiUnsubcribe.unsubscribe();
    }
};
ParkingManageParkingSlotsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
], ParkingManageParkingSlotsComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditTicket', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ParkingManageParkingSlotsComponent.prototype, "onEditTicket", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onTicketDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ParkingManageParkingSlotsComponent.prototype, "onTicketDelete", null);
ParkingManageParkingSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-parking-slots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-parking-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-parking-slots.component.scss */ "./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], ParkingManageParkingSlotsComponent);

function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onTicketDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;
function editTicketEvent(row) {
    var event = new CustomEvent('onEditTicket', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editTicketEvent = editTicketEvent;


/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC1hbGxvdHRlZC9wYXJraW5nLW1hbmFnZW1lbnQtYWxsb3R0ZWQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ParkingManagementAllottedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementAllottedComponent", function() { return ParkingManagementAllottedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");












let ParkingManagementAllottedComponent = class ParkingManagementAllottedComponent {
    constructor(injector, dialog, userService, parkingService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.parkingService = parkingService;
        this.apartmentService = apartmentService;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.apartmentBlockNumber = "";
        this.isBlockSelected = false;
        this.isDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemUserStartIndex = 0;
        this.itemUserLimit = 20;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    getUserIndexParams(event) {
        this.ItemUserStartIndex = event.ItemUserStartIndex;
        this.ItemUserEndIndex = event.ItemUserEndIndex;
    }
    getSlotType(slotId, index) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.slotTypeData, item => {
            if (item.lookupValueId === slotId)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.allSlotsData[index].slotType = data[0].lookupValueName.toLowerCase();
            return data[0].lookupValueName.toLowerCase();
        }
    }
    showVehicleInfo(index) {
        var vehicleId = this.allSlotsData[index].vehicleId;
        this.vehicleService.getVehicleByVehicleId(vehicleId).subscribe((res) => {
            var vehicleData = res[0];
            var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.vehicleTypeData, item => {
                if (item.lookupValueId === vehicleData.vehicleTypeId) {
                    return item;
                }
            });
            if (data === undefined || data.length == 0) {
                return '';
            }
            else {
                vehicleData.type = data[0].lookupValueName;
            }
            this.dialog.open(this.viewVehicleRef, {
                panelClass: 'material',
                disableClose: true,
                data: vehicleData
            });
        });
    }
    showSelectedBlockSlots() {
        this.isBlockSelected = true;
        this.isDataLoaded = false;
        this.allottedSlotListData = [];
        underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.allSlotsData, (item, index) => {
            var data = item.slotName.split(' ');
            var blockName = data[0];
            if (this.apartmentBlockNumber == blockName) {
                this.allottedSlotListData.push(item);
            }
            this.totalUserItems = this.allottedSlotListData.length;
            if (this.totalUserItems > this.itemUserLimit) {
                this.ItemUserEndIndex = this.itemUserLimit;
            }
            else {
                this.ItemUserEndIndex = this.totalUserItems;
            }
            this.vehicleService.getAllVehiclesByApartmentBlockUnitId(item.apartmentBlockUnitId).subscribe((data) => {
                if (data == undefined || data.length == 0) {
                    this.allSlotsData[index].isVehicleAvailable = false;
                }
                else {
                    this.allSlotsData[index].isVehicleAvailable = true;
                    this.allSlotsData[index].vehicleId = data[0].vehicleId;
                }
            });
            this.isDataLoaded = true;
        });
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
    ngOnInit() {
        let slotParams = {
            LookupTypeId: 18
        };
        //get slot type
        this.lookupService.getLookupValueByLookupTypeId(slotParams).subscribe((res) => {
            this.slotTypeData = res;
        }, error => {
        });
        let vehicleParams = {
            LookupTypeId: 2
        };
        //get vehicle type
        this.lookupService.getLookupValueByLookupTypeId(vehicleParams).subscribe((res) => {
            this.vehicleTypeData = res;
        }, error => {
        });
        let allSlotParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vehicleService.getParkingSlotByApartmentId(allSlotParams).subscribe((res) => {
            this.allSlotsData = res.filter(item => {
                return item.isActive;
            });
            underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.allSlotsData, (item, index) => {
                this.apartmentService.getApartmentBlockUnitById(item.apartmentBlockUnitId).subscribe((res) => {
                    this.allSlotsData[index].blockNo = res[0].apartmentBlockNumber;
                    this.allSlotsData[index].unitNo = res[0].apartmentBlockUnitNumber;
                    this.apartmentService.getAllApartmentBlockUnitUsersByApartmentBlockUnitId(item.apartmentBlockUnitId).subscribe((res) => {
                        if (res == undefined || res.length == 0) {
                            return '';
                        }
                        else {
                            var userId = res[0].userId;
                            this.userService.getUserById(userId).subscribe((res) => {
                                this.allSlotsData[index].userName = res[0].firstName + ' ' + res[0].lastName;
                                ;
                            });
                        }
                    });
                });
            });
        }, error => {
        });
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blocksData = res;
        }, error => {
            console.log(error);
        });
    }
};
ParkingManagementAllottedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_5__["ParkingService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_6__["VehicleService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewVehicleRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], ParkingManagementAllottedComponent.prototype, "viewVehicleRef", void 0);
ParkingManagementAllottedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-allotted',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-allotted.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-allotted.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_5__["ParkingService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_6__["VehicleService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
], ParkingManagementAllottedComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC1yZXBvcnRzL3BhcmtpbmctbWFuYWdlbWVudC1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ParkingManagementReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementReportsComponent", function() { return ParkingManagementReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManagementReportsComponent = class ParkingManagementReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingManagementReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-reports.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManagementReportsComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC1zZXR0aW5ncy9wYXJraW5nLWFkZC1zZXR1cC12ZWhpY2xlLXR5cGUvcGFya2luZy1hZGQtc2V0dXAtdmVoaWNsZS10eXBlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts":
/*!******************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: ParkingAddSetupVehicleTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAddSetupVehicleTypeComponent", function() { return ParkingAddSetupVehicleTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let ParkingAddSetupVehicleTypeComponent = class ParkingAddSetupVehicleTypeComponent {
    constructor(lookupService, sharedService, cookieService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.vehicleCategory = "";
        this.toggleDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.typeData && this.typeData.valueId) {
            this.vehicleCategory = this.typeData.valueName;
        }
    }
    submitAddVehicleForm() {
        if (this.config.category != 'edit') {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "lookupTypeId": this.typeId,
                "lookupValueName": this.vehicleCategory,
                "description": this.vehicleCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            let params = {
                lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe((res) => {
                if (res.message) {
                    this.sharedService.setAlertMessage(`${this.config.type} added successfully`);
                    this.emitConfig.emit({ isAdd: this.config.category, type: this.typeId });
                }
                else {
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.typeData.valueId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "lookupTypeId": this.typeId,
                "lookupValueName": this.vehicleCategory,
                "description": this.vehicleCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            let params = {
                lookupvalue: details
            };
            this.lookupService.updateLookupValue(params).subscribe((res) => {
                if (res.message) {
                    this.sharedService.setAlertMessage("Vehicle Type added successfully");
                    this.emitConfig.emit({ isAdd: this.config.category, type: this.typeId });
                }
                else {
                }
            });
        }
    }
    closeDialog(category) {
        this.toggleDialog.emit(category);
    }
};
ParkingAddSetupVehicleTypeComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingAddSetupVehicleTypeComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingAddSetupVehicleTypeComponent.prototype, "typeId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingAddSetupVehicleTypeComponent.prototype, "typeData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingAddSetupVehicleTypeComponent.prototype, "toggleDialog", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingAddSetupVehicleTypeComponent.prototype, "emitConfig", void 0);
ParkingAddSetupVehicleTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-add-setup-vehicle-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-add-setup-vehicle-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-add-setup-vehicle-type.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], ParkingAddSetupVehicleTypeComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC1zZXR0aW5ncy9wYXJraW5nLW1hbmFnZW1lbnQtc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: ParkingManagementSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementSettingsComponent", function() { return ParkingManagementSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Vehicle */ "./src/app/api/controllers/Vehicle.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");







let ParkingManagementSettingsComponent = class ParkingManagementSettingsComponent {
    constructor(injector, vehicleService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isVehicleDataLoaded = false;
        this.isSlotMainDataLoaded = false;
        this.isSlotDataLoaded = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    ngOnInit() {
        this.getVehicleType();
        this.getMainSlotType();
        this.getSlotType();
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                var params = {
                    lookupValueId: item.lookupValueId,
                    updateUserId: parseInt(this.cookieService.get('userId'))
                };
                this.lookupService.deleteLookupvalue(params).subscribe((res) => {
                    // if (res.message) {
                    this.refreshList({ type: item.typeId });
                    this.sharedService.setUnitListDeleteIndex(null);
                    // }
                });
            }
        });
    }
    getVehicleType() {
        let categoryParams = {
            LookupTypeId: 2
        };
        //get vehcile type
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            this.isVehicleDataLoaded = true;
            this.vehicleCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
    getMainSlotType() {
        let slotCategoryParams = {
            LookupTypeId: 71
        };
        //get main slot type
        this.lookupService.getLookupValueByLookupTypeId(slotCategoryParams).subscribe((res) => {
            this.isSlotMainDataLoaded = true;
            this.slotMainCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
    getSlotType() {
        let slotCategoryParams = {
            LookupTypeId: 18
        };
        //get slot type
        this.lookupService.getLookupValueByLookupTypeId(slotCategoryParams).subscribe((res) => {
            this.isSlotDataLoaded = true;
            this.slotCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
    deleteType(item, typeId) {
        item['typeId'] = typeId;
        this.modalService.showConfirmModal(item);
    }
    refreshList(e) {
        if (e.type == 2) {
            this.getVehicleType();
        }
        else if (e.type == 71) {
            this.getMainSlotType();
        }
        else {
            this.getSlotType();
        }
    }
};
ParkingManagementSettingsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
ParkingManagementSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-settings.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Vehicle__WEBPACK_IMPORTED_MODULE_2__["VehicleService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], ParkingManagementSettingsComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC1zbG90LXR5cGVzL3BhcmtpbmctbWFuYWdlbWVudC1zbG90LXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ParkingManagementSlotTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementSlotTypesComponent", function() { return ParkingManagementSlotTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let ParkingManagementSlotTypesComponent = class ParkingManagementSlotTypesComponent {
    constructor(lookupService, sharedService, cookieService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isSlotTypeSubmitted = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isMobile = false;
        this.isSlotTypeNew = false;
        this.isSlotTypeUpdate = false;
        this.slotType = "";
        this.slotTypeUpdateId = 0;
        this.isError = false;
        this.alertMessage = false;
        this.slot = {
            slotMainType: '',
            slotType: ''
        };
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    addNewSlotType() {
        this.isSlotTypeNew = true;
        this.isSlotTypeUpdate = false;
        setTimeout(() => {
            var elem = document.querySelector('.slot-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    updateSlotType(item) {
        this.isSlotTypeUpdate = true;
        this.isSlotTypeNew = false;
        this.slot.slotMainType = item.lookupValueName;
        this.slot.slotType = item.description;
        this.slotTypeUpdateId = item.lookupValueId;
        setTimeout(() => {
            var elem = document.querySelector('.slot-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    deleteSlotType(item, index) {
        this.isDataLoaded = false;
        var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(params).subscribe((res) => {
            this.getSlotType();
            // this.slotDataList.splice(index, 1);
            // this.isDataLoaded = true;
        });
    }
    removeSlotTypeBox() {
        this.isSlotTypeNew = false;
        this.isSlotTypeUpdate = false;
        this.isError = false;
        setTimeout(() => {
            var elem = document.querySelector('.slot-type-table-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    submitAddSlotTypeForm(form) {
        this.isSlotTypeSubmitted = false;
        if (this.isSlotTypeNew) {
            let details = {
                "lookupTypeId": 18,
                "lookupValueName": this.slot.slotMainType,
                "description": this.slot.slotType,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            let params = {
                lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe((res) => {
                if (res.message) {
                    this.isSlotTypeSubmitted = true;
                    this.sharedService.setAlertMessage("Slot Type added successfully");
                    this.isSlotTypeNew = !this.isSlotTypeNew;
                    this.getSlotType();
                }
                else {
                    this.isSlotTypeSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.slotTypeUpdateId,
                "lookupTypeId": 18,
                "lookupValueName": this.slot.slotMainType,
                "description": this.slot.slotType,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            let params = {
                lookupvalue: details
            };
            this.lookupService.updateLookupValue(params).subscribe((res) => {
                if (res.message) {
                    this.isSlotTypeSubmitted = true;
                    this.sharedService.setAlertMessage("Vehicle Type updated successfully");
                    this.isSlotTypeUpdate = !this.isSlotTypeUpdate;
                    this.getSlotType();
                }
                else {
                    this.isSlotTypeSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            });
        }
    }
    ngOnInit() {
        this.getSlotType();
        let slotMainParams = {
            LookupTypeId: 71
        };
        this.lookupService.getLookupValueByLookupTypeId(slotMainParams).subscribe((res) => {
            this.slotMainTypeDataList = res.filter(item => {
                return item.isActive;
            });
        });
    }
    /**
     * Get Slot Type
     */
    getSlotType() {
        let slotListParams = {
            LookupTypeId: 18
        };
        this.lookupService.getLookupValueByLookupTypeId(slotListParams).subscribe((res) => {
            this.slotDataList = res.filter(item => {
                return item.isActive;
            });
            this.totalItems = this.slotDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        });
    }
};
ParkingManagementSlotTypesComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
ParkingManagementSlotTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-slot-types',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-slot-types.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-slot-types.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], ParkingManagementSlotTypesComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC11bmFsbG90dGVkL3BhcmtpbmctbWFuYWdlbWVudC11bmFsbG90dGVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ParkingManagementUnallottedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementUnallottedComponent", function() { return ParkingManagementUnallottedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManagementUnallottedComponent = class ParkingManagementUnallottedComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingManagementUnallottedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-unallotted',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-unallotted.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-unallotted.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManagementUnallottedComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3BhcmtpbmctbWFuYWdlbWVudC12ZWhpY2xlLXR5cGVzL3BhcmtpbmctbWFuYWdlbWVudC12ZWhpY2xlLXR5cGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: ParkingManagementVehicleTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementVehicleTypesComponent", function() { return ParkingManagementVehicleTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let ParkingManagementVehicleTypesComponent = class ParkingManagementVehicleTypesComponent {
    constructor(injector, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.isVehicleTypeSubmitted = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isMobile = false;
        this.isVehicleTypeNew = false;
        this.isVehicleTypeUpdate = false;
        this.vehicleType = "";
        this.vehicleTypeUpdateId = 0;
        this.isError = false;
        this.alertMessage = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]);
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    addNewVehicleType() {
        this.isVehicleTypeNew = true;
        this.isVehicleTypeUpdate = false;
        setTimeout(() => {
            var elem = document.querySelector('.vehicle-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    updateVehicleType(item) {
        this.isVehicleTypeUpdate = true;
        this.isVehicleTypeNew = false;
        this.vehicleType = item.lookupValueName;
        this.vehicleTypeUpdateId = item.lookupValueId;
        setTimeout(() => {
            var elem = document.querySelector('.vehicle-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    deleteVehicleType(item) {
        this.modalService.showConfirmModal(item);
    }
    removeVehicleTypeBox() {
        this.isVehicleTypeNew = false;
        this.isVehicleTypeUpdate = false;
        this.isError = false;
        setTimeout(() => {
            var elem = document.querySelector('.vehicle-type-table-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    submitAddvehicleTypeForm(form) {
        this.isVehicleTypeSubmitted = false;
        if (this.isVehicleTypeNew) {
            let details = {
                "lookupTypeId": 2,
                "lookupValueName": this.vehicleType,
                "description": this.vehicleType,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            let params = {
                lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe((res) => {
                if (res.message) {
                    this.isVehicleTypeSubmitted = true;
                    this.sharedService.setAlertMessage("Vehicle Type added successfully");
                    this.isVehicleTypeNew = !this.isVehicleTypeNew;
                    this.getVehicleTypeList();
                    // this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res:any) => {
                    //   this.vehicleDataList = res.filter(item => {
                    //       return item.isActive;
                    //   });  
                    // });
                }
                else {
                    this.isVehicleTypeSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.vehicleTypeUpdateId,
                "lookupTypeId": 2,
                "lookupValueName": this.vehicleType,
                "description": this.vehicleType,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            let params = {
                lookupvalue: details
            };
            this.lookupService.updateLookupValue(params).subscribe((res) => {
                if (res.message) {
                    this.isVehicleTypeSubmitted = true;
                    this.isVehicleTypeUpdate = !this.isVehicleTypeUpdate;
                    this.sharedService.setAlertMessage("Vehicle Type updated successfully");
                    this.getVehicleTypeList();
                    // this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res:any) => {
                    //   this.vehicleDataList = res.filter(item => {
                    //       return item.isActive;
                    //   });   
                    // });
                }
                else {
                    this.isVehicleTypeSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            });
        }
    }
    ngOnInit() {
        this.getVehicleTypeList();
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                // this.isDataLoaded = false;
                var params = {
                    lookupValueId: item.lookupValueId,
                    updateUserId: parseInt(this.cookieService.get('userId'))
                };
                this.lookupService.deleteLookupvalue(params).subscribe((res) => {
                    this.vehicleDataList = this.vehicleDataList.filter((type) => type.lookupValueId !== item.lookupValueId);
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.getVehicleTypeList();
                    // this.isDataLoaded = true;
                });
            }
        });
    }
    /**
     * Get Vehilce Type List
     */
    getVehicleTypeList() {
        let vehicleDataListParams = {
            LookupTypeId: 2
        };
        this.lookupService.getLookupValueByLookupTypeId(vehicleDataListParams).subscribe((res) => {
            this.vehicleDataList = res.filter(item => {
                return item.isActive;
            });
            this.totalItems = this.vehicleDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        });
    }
};
ParkingManagementVehicleTypesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
ParkingManagementVehicleTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-vehicle-types',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-vehicle-types.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-vehicle-types.component.scss */ "./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], ParkingManagementVehicleTypesComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3Bhcmtpbmctc2V0dXAvcGFya2luZy1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ParkingSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingSetupComponent", function() { return ParkingSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingSetupComponent = class ParkingSetupComponent {
    ngOnInit() {
        this.navArray = [
            { link: 'settings', name: 'General' },
            { link: 'parking-slot-rate', name: 'Slot Rate' }
        ];
    }
};
ParkingSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-setup.component.scss */ "./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.scss")).default]
    })
], ParkingSetupComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.scss ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3Bhcmtpbmctc2xvdC1yYXRlL3Bhcmtpbmctc2xvdC1yYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ParkingSlotRateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingSlotRateComponent", function() { return ParkingSlotRateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");







let ParkingSlotRateComponent = class ParkingSlotRateComponent {
    constructor(parkingService, cookieService, injector, sharedService) {
        this.parkingService = parkingService;
        this.cookieService = cookieService;
        this.injector = injector;
        this.sharedService = sharedService;
        this.isCreateSlot = true;
        this.slotRateData = [];
        this.isShowCreateSlot = false;
        this.filterSlotRate = "";
        this.slotRateParam = {
            "id": 0,
            "name": "",
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "fee": 0,
            "isActive": true,
            "feeIntervalId": 1,
            "canCancelledBefore": 5,
            "insertedBy": 0,
            "insertedOn": "2020-05-15T17:24:51.028Z",
            "updatedBy": 0,
            "updatedOn": "2020-05-15T17:24:51.028Z",
            "finePercent": 1,
            "feeCalcultionType": ""
        };
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    onEditTicket(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.isCreateSlot = false;
        this.isShowCreateSlot = true;
        for (const key in dataRecord) {
            this.slotRateParam[key] = dataRecord[key];
        }
    }
    onTicketDelete(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let slotId = dataRecord.id;
        this.modalService.showConfirmModal(slotId);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                var params = {
                    parkingSlotId: item,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.parkingService.deleteParkingSlotType(params).subscribe((res) => {
                    // if (res.message) {
                    this.getSlotRateType();
                    this.sharedService.setUnitListDeleteIndex(null);
                    // }
                });
            }
        });
        this.slotRateHeader = [{
                text: 's no',
                width: 100,
                cellsrenderer: (index) => {
                    return `<div class="jqx-custom-inner-cell">${index + 1}</div>`;
                },
                renderer: columnrenderer
            }, {
                text: 'slot rate type',
                datafield: 'name',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'slot rate',
                datafield: 'fee',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'calculation type',
                datafield: 'feeCalcultionType',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        this.getSlotRateType();
    }
    getSlotRateType() {
        let getParam = {
            ApartmantId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.parkingService.getParkingAllocationType(getParam).subscribe((resp) => {
            var rawSlotRateType = resp.filter(data => {
                return data.isActive;
            });
            let arrangeSlotRawData = {
                localdata: rawSlotRateType,
                datatype: "array"
            };
            this.slotRateData = new jqx.dataAdapter(arrangeSlotRawData);
        }, error => {
        });
    }
    searchSlotRate() {
        if (this.filterSlotRate != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.filterSlotRate;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.slotRateHeader.forEach(item => {
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
    slotRateType() {
        if (this.isCreateSlot) {
            this.slotRateParam.insertedBy = parseInt(this.cookieService.get('userId'));
            this.slotRateParam.insertedOn = new Date().toISOString();
            let addParam = {
                parkingAllocationTypeDto: this.slotRateParam
            };
            this.parkingService.upsertParkingSlotType(addParam).subscribe(resp => {
                this.sharedService.setAlertMessage("Slot Rate Type Created Successfully");
                this.isShowCreateSlot = !this.isShowCreateSlot;
                this.getSlotRateType();
            }, error => {
            });
        }
        else {
            this.slotRateParam.updatedBy = parseInt(this.cookieService.get('userId'));
            this.slotRateParam.updatedOn = new Date().toISOString();
            let updateParam = {
                parkingAllocationTypeDto: this.slotRateParam
            };
            this.parkingService.upsertParkingSlotType(updateParam).subscribe(resp => {
                this.sharedService.setAlertMessage("Slot Rate Type Updated Successfully");
                this.isShowCreateSlot = !this.isShowCreateSlot;
                this.getSlotRateType();
            }, error => {
            });
        }
    }
};
ParkingSlotRateComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_6__["ParkingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__["jqxGridComponent"])
], ParkingSlotRateComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditTicket', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ParkingSlotRateComponent.prototype, "onEditTicket", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onTicketDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ParkingSlotRateComponent.prototype, "onTicketDelete", null);
ParkingSlotRateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-slot-rate',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-slot-rate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-slot-rate.component.scss */ "./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_6__["ParkingService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
], ParkingSlotRateComponent);

function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onTicketDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;
function editTicketEvent(row) {
    var event = new CustomEvent('onEditTicket', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editTicketEvent = editTicketEvent;


/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3Bhcmtpbmctdmlldy1hdmFpbGFibGUtc2xvdHMvcGFya2luZy12aWV3LWF2YWlsYWJsZS1zbG90cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ParkingViewAvailableSlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingViewAvailableSlotsComponent", function() { return ParkingViewAvailableSlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingViewAvailableSlotsComponent = class ParkingViewAvailableSlotsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingViewAvailableSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-view-available-slots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-view-available-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-view-available-slots.component.scss */ "./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingViewAvailableSlotsComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.scss ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3NldC1wYXJraW5nLWF2YWlsYWJsaXR5L2NvbW11bml0eS1wYXJraW5nLWF2YWlsYWJsaXR5L2NvbW11bml0eS1wYXJraW5nLWF2YWlsYWJsaXR5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: CommunityParkingAvailablityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityParkingAvailablityComponent", function() { return CommunityParkingAvailablityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let CommunityParkingAvailablityComponent = class CommunityParkingAvailablityComponent {
    constructor(parkingService, cookieService) {
        this.parkingService = parkingService;
        this.cookieService = cookieService;
        this.isDataLoaded = true;
    }
    communitySearch() {
        if (this.communityFilter != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.communityFilter;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.communityAllocationHeader.forEach(item => {
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
    filterData(event) {
        console.log(event);
    }
    getCommunityAvailability() {
        this.isDataLoaded = true;
        let params = {
            ApartmantId: parseInt(this.cookieService.get('apartmentId')),
            ApartmentBlockId: null,
            ParkingSlotId: null,
            StartDate: null,
            EndDate: null,
            StartTime: null,
            EndTime: null,
            SlotMainTypeID: 300 //CommunityOwnedId
        };
        this.parkingService.getAllRentedParking(params).subscribe((res) => {
            this.communityAllocationData = res;
            this.gridSourceData = {
                localdata: this.communityAllocationData,
                datatype: "array"
            };
            this.communityAllocationData = new jqx.dataAdapter(this.gridSourceData);
            this.isDataLoaded = false;
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'CommunityAvailability');
    }
    ngOnInit() {
        this.getCommunityAvailability();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.communityAllocationHeader = [{
                text: 'SLOT NO',
                datafield: 'slotType',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'SLOT Location',
                datafield: 'parkingSlotLocation',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Perm.Owner Name',
                datafield: 'staffName',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'START DATE',
                datafield: 'startDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'START TIME',
                datafield: 'startTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END DATE',
                datafield: 'endDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END TIME',
                datafield: 'endTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'CREATED BY',
                cellsalign: 'status',
                align: 'center',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }];
    }
};
CommunityParkingAvailablityComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], CommunityParkingAvailablityComponent.prototype, "datagrid", void 0);
CommunityParkingAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-community-parking-availablity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./community-parking-availablity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./community-parking-availablity.component.scss */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
], CommunityParkingAvailablityComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.scss ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3NldC1wYXJraW5nLWF2YWlsYWJsaXR5L2NyZWF0ZS1hdmFpbGFibGl0eS9jcmVhdGUtYXZhaWxhYmxpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: CreateAvailablityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAvailablityComponent", function() { return CreateAvailablityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let CreateAvailablityComponent = class CreateAvailablityComponent {
    constructor(parkingService, cookieService, sharedService, router, activateRouter) {
        this.parkingService = parkingService;
        this.cookieService = cookieService;
        this.sharedService = sharedService;
        this.router = router;
        this.activateRouter = activateRouter;
        this.slotSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.parkingSlotData = {};
    }
    onSelectSlot(event) {
        let selectedValue = event.option.value;
        this.parkingSlotData.displaySlotNumber = `${selectedValue.parkingSlotNo} location ${selectedValue.slotTypeName}(${selectedValue.permOwner} ${selectedValue.apartmentBlockNumber} ${selectedValue.apartmentBlockUnitNumber})`;
        this.parkingSlotData.parkingSlotNo = selectedValue.parkingSlotNo;
        this.parkingSlotData.parkingSlotID = selectedValue.parkingSlotID;
        this.parkingSlotData.slotTypeName = selectedValue.slotTypeName;
        this.parkingSlotData.permOwner = selectedValue.permOwner;
        this.parkingSlotData.slotTypeId = selectedValue.slotTypeId;
        this.parkingSlotData.parkingSlotBlockNumber = selectedValue.parkingSlotBlockNumber;
    }
    submitParkingSlot() {
        let entity = {
            "id": 0,
            "parkingId": this.parkingSlotData.parkingSlotID,
            "startDate": this.parkingSlotData.startDate,
            "endDate": this.parkingSlotData.endDate,
            "startTime": moment__WEBPACK_IMPORTED_MODULE_8__(this.parkingSlotData.startTime).format('HH:mm:ss'),
            "endTime": moment__WEBPACK_IMPORTED_MODULE_8__(this.parkingSlotData.endTime).format('HH:mm:ss'),
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "slotMainTypeId": this.type == 'unit' ? 299 : 300,
            "slotTypeId": this.parkingSlotData.slotTypeId,
            "parkingSlotBlockNumber": this.parkingSlotData.parkingSlotBlockNumber,
            "parkingSlotLocation": this.parkingSlotData.parkingSlotNo,
            "staffId": null,
            "staffName": null,
            "permOwnerUserId": 0,
            "permOwner": null,
            "tempOwnerUserId": 0,
            "tempOwner": null
        };
        let parking = {
            availabelParking: entity
        };
        this.parkingService.addAvailableParking(parking).subscribe((res) => {
            if (!isNaN(res.message)) {
                this.sharedService.setAlertMessage("Parking Slot Created successfully");
                this.router.navigate(['/ams/parking-management/set-parking-availablity/unit-parking-availablity']);
            }
            else if (res.message) {
                this.sharedService.setAlertMessage(res.message);
            }
            else {
                this.sharedService.setAlertMessage(res.errorMessage);
            }
        });
    }
    ngOnInit() {
        this.activateRouter.params.subscribe(param => this.type = param['type']);
        this.slotData$ = this.slotSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(data => data.length > 2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(term => {
            let entity = {
                ApartmentID: parseInt(this.cookieService.get('apartmentId')),
                KeywordSlotNo: term,
                SlotTypeID: this.type == 'unit' ? 299 : 300,
            };
            return this.parkingService.getParkingSlotNoByKeyword(entity);
        }));
        this.slotData$.subscribe(res => {
            if (res.length > 0) {
                this.parkingSlotList = res;
            }
        });
    }
};
CreateAvailablityComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
CreateAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-availablity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-availablity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-availablity.component.scss */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], CreateAvailablityComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3NldC1wYXJraW5nLWF2YWlsYWJsaXR5L3NldC1wYXJraW5nLWF2YWlsYWJsaXR5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: SetParkingAvailablityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetParkingAvailablityComponent", function() { return SetParkingAvailablityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SetParkingAvailablityComponent = class SetParkingAvailablityComponent {
    constructor() { }
    ngOnInit() {
        this.navArray = [
            { link: 'unit-parking-availablity', name: 'Set Availablity For Unit Parking' },
            { link: 'community-parking-availablity', name: 'Set Availablity For Community Parking' },
        ];
    }
};
SetParkingAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-parking-availablity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./set-parking-availablity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./set-parking-availablity.component.scss */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SetParkingAvailablityComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.scss":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.scss ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9jb21wb25lbnRzL3NldC1wYXJraW5nLWF2YWlsYWJsaXR5L3VuaXQtcGFya2luZy1hdmFpbGFibGl0eS91bml0LXBhcmtpbmctYXZhaWxhYmxpdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts":
/*!**************************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts ***!
  \**************************************************************************************************************************************************/
/*! exports provided: UnitParkingAvailablityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnitParkingAvailablityComponent", function() { return UnitParkingAvailablityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Parking */ "./src/app/api/controllers/Parking.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let UnitParkingAvailablityComponent = class UnitParkingAvailablityComponent {
    constructor(parkingService, cookieService) {
        this.parkingService = parkingService;
        this.cookieService = cookieService;
        this.isDataLoaded = true;
    }
    unitSearch() {
        if (this.unitFilter != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.unitFilter;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.unitAllocationHeader.forEach(item => {
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
    filterData(event) {
        console.log(event);
    }
    getUnitAvailability() {
        this.isDataLoaded = true;
        let params = {
            ApartmantId: parseInt(this.cookieService.get('apartmentId')),
            ApartmentBlockId: null,
            ParkingSlotId: null,
            StartDate: null,
            EndDate: null,
            StartTime: null,
            EndTime: null,
            SlotMainTypeID: 299 //UnitOwnedId
        };
        this.parkingService.getAllRentedParking(params).subscribe((res) => {
            this.unitAllocationData = res;
            this.gridSourceData = {
                localdata: this.unitAllocationData,
                datatype: "array"
            };
            this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
            this.isDataLoaded = false;
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'UnitAvailability');
    }
    ngOnInit() {
        this.getUnitAvailability();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.unitAllocationHeader = [{
                text: 'SLOT NO',
                datafield: 'slotType',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'SLOT Location',
                datafield: 'parkingSlotLocation',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Perm.Owner Name',
                datafield: 'permOwner',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Perm.Owner Unit',
                datafield: 'k',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'START DATE',
                datafield: 'startDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'START TIME',
                datafield: 'startTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END DATE',
                datafield: 'endDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'END TIME',
                datafield: 'endTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_5__(value, 'HH:mm:ss').format('hh:mm A') + '</div>';
                },
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'CREATED BY',
                cellsalign: 'status',
                align: 'center',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }];
    }
};
UnitParkingAvailablityComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], UnitParkingAvailablityComponent.prototype, "datagrid", void 0);
UnitParkingAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unit-parking-availablity',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./unit-parking-availablity.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./unit-parking-availablity.component.scss */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], UnitParkingAvailablityComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/parking-management-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/parking-management-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ParkingManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementRoutingModule", function() { return ParkingManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/parking-management-settings/parking-management-settings.component */ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts");
/* harmony import */ var _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/parking-management-allotted/parking-management-allotted.component */ "./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts");
/* harmony import */ var _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/parking-management-unallotted/parking-management-unallotted.component */ "./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts");
/* harmony import */ var _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/parking-management-reports/parking-management-reports.component */ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts");
/* harmony import */ var _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-slot-container/add-slot-container.component */ "./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.ts");
/* harmony import */ var _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/parking-manage-parking-slots/parking-manage-parking-slots.component */ "./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts");
/* harmony import */ var _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parking-create-parking-slot/parking-create-parking-slot.component */ "./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts");
/* harmony import */ var _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/parking-allocate-slots/parking-allocate-slots.component */ "./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/parking-manage-allocated-slots/parking-manage-allocated-slots.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts");
/* harmony import */ var _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/parking-create-parking-booking/parking-create-parking-booking.component */ "./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts");
/* harmony import */ var _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/parking-view-available-slots/parking-view-available-slots.component */ "./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking.component */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-admin-view-booking.component */ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts");
/* harmony import */ var _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/parking-setup/parking-setup.component */ "./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.ts");
/* harmony import */ var _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add-vehicle/add-vehicle.component */ "./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/parking-slot-rate/parking-slot-rate.component */ "./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts");
/* harmony import */ var _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/set-parking-availablity/set-parking-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts");
/* harmony import */ var _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts");
/* harmony import */ var _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts");
/* harmony import */ var _components_set_parking_availablity_create_availablity_create_availablity_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/set-parking-availablity/create-availablity/create-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.ts");



























const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    // { path: 'settings', component: ParkingManagementSettingsComponent},
    { path: 'setup', component: _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_20__["ParkingSetupComponent"],
        children: [
            { path: '', redirectTo: 'settings', pathMatch: 'full' },
            { path: 'settings', component: _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_3__["ParkingManagementSettingsComponent"] },
            { path: 'parking-slot-rate', component: _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_22__["ParkingSlotRateComponent"] },
        ] },
    { path: 'manage-parking-slots', component: _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_8__["ParkingManageParkingSlotsComponent"] },
    { path: 'create-parking-slot', component: _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_9__["ParkingCreateParkingSlotComponent"] },
    { path: 'edit-parking-slot/:id', component: _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_9__["ParkingCreateParkingSlotComponent"] },
    { path: 'manage-allocated-slots', component: _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_11__["ParkingManageAllocatedSlotsComponent"] },
    { path: 'allocate-slots', component: _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_10__["ParkingAllocateSlotsComponent"] },
    { path: 'manage-allocate-availability-list', component: _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_12__["ParkingManageAllocateAvailabilityListComponent"],
        children: [
            { path: '', redirectTo: 'unit-to-unit-allocation', pathMatch: 'full' },
            { path: 'unit-to-community', component: _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_16__["ParkingAaUnitToCommunityComponent"] },
            { path: 'community-to-others', component: _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_17__["ParkingAaCommunityToOthersComponent"] },
            { path: 'unit-to-unit-allocation', component: _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_15__["ParkingAaUnitToUnitAllocationComponent"] },
            { path: '**', redirectTo: 'unit-to-unit-allocation', pathMatch: 'full' }
        ]
    },
    { path: 'set-parking-availablity', component: _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_23__["SetParkingAvailablityComponent"],
        children: [
            { path: '', redirectTo: 'unit-parking-availablity', pathMatch: 'full' },
            { path: 'unit-parking-availablity', component: _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_24__["UnitParkingAvailablityComponent"] },
            { path: 'community-parking-availablity', component: _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_25__["CommunityParkingAvailablityComponent"] },
            { path: '**', redirectTo: 'unit-parking-availablity', pathMatch: 'full' },
        ]
    },
    { path: 'create-availability/:type', component: _components_set_parking_availablity_create_availablity_create_availablity_component__WEBPACK_IMPORTED_MODULE_26__["CreateAvailablityComponent"] },
    { path: 'manage-booking-slots', component: _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_18__["ParkingManageBookingComponent"] },
    { path: 'view-booking', component: _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_19__["ParkingAdminViewBookingComponent"] },
    { path: 'create-allocation/:type', component: _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_13__["ParkingCreateParkingBookingComponent"] },
    { path: 'view-available-slots', component: _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_14__["ParkingViewAvailableSlotsComponent"] },
    { path: 'manage-booking-slots', component: _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_18__["ParkingManageBookingComponent"] },
    { path: 'allotted', component: _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_4__["ParkingManagementAllottedComponent"] },
    { path: 'unallotted', component: _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementUnallottedComponent"] },
    { path: 'reports', component: _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_6__["ParkingManagementReportsComponent"] },
    { path: 'add-slot', component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_7__["AddSlotContainerComponent"] },
    { path: 'edit-slot/:id', component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_7__["AddSlotContainerComponent"] },
    { path: 'add-vehicle/:slotid', component: _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_21__["AddVehicleComponent"] },
    { path: 'edit-vehicle/:id', component: _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_21__["AddVehicleComponent"] },
    { path: 'edit-allotted-slot/:id', component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_7__["AddSlotContainerComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let ParkingManagementRoutingModule = class ParkingManagementRoutingModule {
};
ParkingManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ParkingManagementRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/parking-management.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/parking-management.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3BhcmtpbmctbWFuYWdlbWVudC9wYXJraW5nLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/parking-management/parking-management.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/parking-management.component.ts ***!
  \********************************************************************************/
/*! exports provided: ParkingManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementComponent", function() { return ParkingManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManagementComponent = class ParkingManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/parking-management/parking-management.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management.component.scss */ "./src/app/modules/ams/parking-management/parking-management.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManagementComponent);



/***/ }),

/***/ "./src/app/modules/ams/parking-management/parking-management.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/ams/parking-management/parking-management.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ParkingManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementModule", function() { return ParkingManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parking_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-management-routing.module */ "./src/app/modules/ams/parking-management/parking-management-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _parking_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-management.component */ "./src/app/modules/ams/parking-management/parking-management.component.ts");
/* harmony import */ var _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/parking-management-settings/parking-management-settings.component */ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts");
/* harmony import */ var _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/parking-management-allotted/parking-management-allotted.component */ "./src/app/modules/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts");
/* harmony import */ var _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/parking-management-unallotted/parking-management-unallotted.component */ "./src/app/modules/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts");
/* harmony import */ var _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parking-management-reports/parking-management-reports.component */ "./src/app/modules/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts");
/* harmony import */ var _components_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-slot/add-slot.component */ "./src/app/modules/ams/parking-management/components/add-slot/add-slot.component.ts");
/* harmony import */ var _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-slot-container/add-slot-container.component */ "./src/app/modules/ams/parking-management/components/add-slot-container/add-slot-container.component.ts");
/* harmony import */ var _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/parking-manage-parking-slots/parking-manage-parking-slots.component */ "./src/app/modules/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts");
/* harmony import */ var _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/parking-create-parking-slot/parking-create-parking-slot.component */ "./src/app/modules/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts");
/* harmony import */ var _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/parking-allocate-slots/parking-allocate-slots.component */ "./src/app/modules/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/parking-manage-allocated-slots/parking-manage-allocated-slots.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts");
/* harmony import */ var _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/parking-create-parking-booking/parking-create-parking-booking.component */ "./src/app/modules/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts");
/* harmony import */ var _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/parking-view-available-slots/parking-view-available-slots.component */ "./src/app/modules/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component */ "./src/app/modules/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking.component */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_community_to_other_parking_manage_booking_community_to_other_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_unit_to_community_parking_manage_booking_unit_to_community_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-admin-view-booking.component */ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_unit_parking_booking_view_community_owned_to_unit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component */ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_vistor_parking_booking_view_community_owned_to_vistor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component */ "./src/app/modules/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts");
/* harmony import */ var _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/parking-setup/parking-setup.component */ "./src/app/modules/ams/parking-management/components/parking-setup/parking-setup.component.ts");
/* harmony import */ var _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/add-vehicle/add-vehicle.component */ "./src/app/modules/ams/parking-management/components/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _components_parking_management_settings_parking_add_setup_vehicle_type_parking_add_setup_vehicle_type_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component */ "./src/app/modules/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts");
/* harmony import */ var _components_parking_management_vehicle_types_parking_management_vehicle_types_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/parking-management-vehicle-types/parking-management-vehicle-types.component */ "./src/app/modules/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts");
/* harmony import */ var _components_parking_management_slot_types_parking_management_slot_types_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/parking-management-slot-types/parking-management-slot-types.component */ "./src/app/modules/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts");
/* harmony import */ var _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/parking-slot-rate/parking-slot-rate.component */ "./src/app/modules/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts");
/* harmony import */ var _components_allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/allocated-slot-confirmation/allocated-slot-confirmation.component */ "./src/app/modules/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts");
/* harmony import */ var _components_parking_manage_booking_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/parking-manage-booking/booking-confirmation/booking-confirmation.component */ "./src/app/modules/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts");
/* harmony import */ var _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/set-parking-availablity/set-parking-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts");
/* harmony import */ var _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts");
/* harmony import */ var _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts");
/* harmony import */ var _components_set_parking_availablity_create_availablity_create_availablity_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/set-parking-availablity/create-availablity/create-availablity.component */ "./src/app/modules/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.ts");
/* harmony import */ var _components_parking_manage_filter_parking_manage_filter_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/parking-manage-filter/parking-manage-filter.component */ "./src/app/modules/ams/parking-management/components/parking-manage-filter/parking-manage-filter.component.ts");









































let ParkingManagementModule = class ParkingManagementModule {
};
ParkingManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_6__["ParkingManagementSettingsComponent"],
            _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_7__["ParkingManagementAllottedComponent"],
            _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_8__["ParkingManagementUnallottedComponent"],
            _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_9__["ParkingManagementReportsComponent"],
            _parking_management_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementComponent"],
            _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_12__["ParkingManageParkingSlotsComponent"],
            _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_13__["ParkingCreateParkingSlotComponent"],
            _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_14__["ParkingAllocateSlotsComponent"],
            _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_15__["ParkingManageAllocatedSlotsComponent"],
            _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_16__["ParkingManageAllocateAvailabilityListComponent"],
            _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_17__["ParkingCreateParkingBookingComponent"],
            _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_18__["ParkingViewAvailableSlotsComponent"],
            _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_22__["ParkingManageBookingComponent"],
            _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_19__["ParkingAaUnitToUnitAllocationComponent"],
            _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_20__["ParkingAaUnitToCommunityComponent"],
            _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_21__["ParkingAaCommunityToOthersComponent"],
            _components_parking_manage_booking_parking_manage_booking_community_to_other_parking_manage_booking_community_to_other_component__WEBPACK_IMPORTED_MODULE_23__["ParkingManageBookingCommunityToOtherComponent"],
            _components_parking_manage_booking_parking_manage_booking_unit_to_community_parking_manage_booking_unit_to_community_component__WEBPACK_IMPORTED_MODULE_24__["ParkingManageBookingUnitToCommunityComponent"],
            _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_25__["ParkingAdminViewBookingComponent"],
            _components_parking_admin_view_booking_parking_booking_view_community_owned_to_unit_parking_booking_view_community_owned_to_unit_component__WEBPACK_IMPORTED_MODULE_26__["ParkingBookingViewCommunityOwnedToUnitComponent"],
            _components_parking_admin_view_booking_parking_booking_view_community_owned_to_vistor_parking_booking_view_community_owned_to_vistor_component__WEBPACK_IMPORTED_MODULE_27__["ParkingBookingViewCommunityOwnedToVistorComponent"],
            _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_28__["ParkingSetupComponent"],
            _components_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_10__["AddSlotComponent"],
            _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_11__["AddSlotContainerComponent"],
            _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__["AddVehicleComponent"],
            _components_parking_management_settings_parking_add_setup_vehicle_type_parking_add_setup_vehicle_type_component__WEBPACK_IMPORTED_MODULE_30__["ParkingAddSetupVehicleTypeComponent"],
            _components_parking_management_vehicle_types_parking_management_vehicle_types_component__WEBPACK_IMPORTED_MODULE_31__["ParkingManagementVehicleTypesComponent"],
            _components_parking_management_slot_types_parking_management_slot_types_component__WEBPACK_IMPORTED_MODULE_32__["ParkingManagementSlotTypesComponent"],
            _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_33__["ParkingSlotRateComponent"],
            _components_allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_34__["AllocatedSlotConfirmationComponent"],
            _components_parking_manage_booking_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_35__["BookingConfirmationComponent"],
            _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_36__["SetParkingAvailablityComponent"],
            _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_37__["UnitParkingAvailablityComponent"],
            _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_38__["CommunityParkingAvailablityComponent"],
            _components_set_parking_availablity_create_availablity_create_availablity_component__WEBPACK_IMPORTED_MODULE_39__["CreateAvailablityComponent"],
            _components_parking_manage_filter_parking_manage_filter_component__WEBPACK_IMPORTED_MODULE_40__["ParkingManageFilterComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _parking_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParkingManagementRoutingModule"]
        ],
        bootstrap: [_parking_management_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementComponent"]]
    })
], ParkingManagementModule);



/***/ })

}]);
//# sourceMappingURL=modules-ams-parking-management-parking-management-module-es2015.js.map