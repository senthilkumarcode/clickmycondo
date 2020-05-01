(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parking-management-parking-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-slots-container-wrapper\">\n\t<ng-container *ngFor=\"let slot of slotArray; let i = index\">\n\t\t<app-add-slot [index]=\"i\" [array]=\"slotArray\" (outputParams) = \"getSlotArray($event)\"></app-add-slot>\n\t</ng-container>\n\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addSlot()\" *ngIf=\"!isEditSlot\">\n\t\t<span class=\"icon\">+</span>\n\t</a>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot/add-slot.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot/add-slot.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-slot-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditSlot\">Add Slot</span>\n    \t\t\t\t<span *ngIf=\"isEditSlot\">Edit Slot</span>\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"isArrayOne() && !isEditSlot\" (click)=\"deleteSlot()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isSlotSubmitted && !isSlotAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isSlotSubmitted && !isSlotAdded\">\n\n\t\t\t\t<form #addSlotForm = \"ngForm\" name=\"addSlotForm\" (ngSubmit)=\"submitAddSlotForm(addSlotForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\" [(ngModel)]=\"slot.slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Slot Type</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"slotType\" id=\"Member\" [(ngModel)]=\"slotType\"  value=\"81\" type=\"radio\">\n\t\t                            <label class=\"radio-inline\" for=\"Member\">Member</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"slotType\" id=\"Guest\" [(ngModel)]=\"slotType\" value=\"82\" type=\"radio\">\n\t\t                            <label class=\"radio-inline\" for=\"Guest\">Guest</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\" *ngIf=\"isSlotSelected || isEditSlot\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.apartmentBlockUnitId\" required [disabled]=\"!isBlockSelected\">\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Comment</label>\n\t\t\t                    <textarea placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"slot.comment\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addSlotForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isSlotAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isEditSlot\">Slot added successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isEditSlot\">Slot updated successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-vehicle-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditVehicle\">Add Vehicle</span>\n    \t\t\t\t<span *ngIf=\"isEditVehicle\">Edit Vehicle</span>\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/allotted\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVehicleSubmitted && !isVehicleAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVehicleSubmitted && !isVehicleAdded\">\n\n\t\t\t\t<form #addVehicleForm = \"ngForm\" name=\"addVehicleForm\" (ngSubmit)=\"submitAddVehicleForm(addVehicleForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleNumber\" [(ngModel)]=\"vehicle.vehicleNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"vehicleType\" \n\t\t\t\t\t\t\t        id=\"vehicleType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"vehicleTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of vehicleTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Manufacturer</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleManufacturer\" [(ngModel)]=\"vehicle.vehicleManufacturer\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Model</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleModel\" [(ngModel)]=\"vehicle.vehicleModel\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Driver Number</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleDriverNumber\" [(ngModel)]=\"vehicle.vehicleDriverNumber\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Color</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleColor\" [(ngModel)]=\"vehicle.vehicleColor\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVehicleForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isVehicleAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isEditVehicle\">Vehicle added successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isEditVehicle\">Vehicle updated successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-admin-view-booking-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block mt-5\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-booking-community-to-other-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>View Booking</h5>\n              <p class=\"d-none d-md-inline-block\">View Booking Community Owned to Unit</p>\n          </div>\n          \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                        <th scope=\"col\">Slot Name</th>\n                        <th scope=\"col\">Slot Type</th>\n                        <th scope=\"col\">Unit No </th>\n                        <th scope=\"col\">Resident Name</th> \n                        <th scope=\"col\">Vehicle NO</th> \n                        <th scope=\"col\">Start Date & Time</th>\n                        <th scope=\"col\">End Date & Time</th> \n                        <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                        <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n                       \n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-parkings-slots-wrapper\">\n        <div class=\"card clear table-card mt-30\">\n          <div class=\"card-header\">\n              <div class=\"float-left\">\n                  <h5>View Booking</h5>\n                  <p class=\"d-none d-md-inline-block\">View Booking Community Owned to Unit</p>\n              </div>\n               \n          </div>\n    \n            <div class=\"card-body p-0\">  \n                  <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                            <th scope=\"col\">Slot Name</th>\n                            <th scope=\"col\">Slot Type</th>\n                            <th scope=\"col\">Rented by (type)</th>\n                            <th scope=\"col\">Unit No </th>\n                            <th scope=\"col\">Resident Name</th> \n                            <th scope=\"col\">Vehicle ID</th> \n                            <th scope=\"col\">Vehicle NO</th> \n                            <th scope=\"col\">Visitor Name</th> \n                            <th scope=\"col\">Visitor Contact</th> \n                            <th scope=\"col\">Start Date & Time</th>\n                            <th scope=\"col\">End Date & Time</th> \n                            <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                            <th class=\"text-center\" scope=\"col\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody> \n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n    \n                          \n                      </tbody>\n                  </table> \n              </div>\n           \n                  <app-pagination \n                      [totalItems]=\"20\"  \n                      [ItemStartIndex]=\"1\"\n                      [ItemEndIndex] = \"20\"\n                      [itemLimit] = \"5\" >\t\n                  </app-pagination>\n              \n          </div>\n        </div> \n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-allocate-slots-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-allocated-slots\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Allocated Slots</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\"> \n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tAllocate Parking Slot\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form name=\"addSlotForm\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotBlockno\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotType\" \n\t\t\t\t\t\t\t        id=\"SlotType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Unit Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"UnitBlockNo\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Permanent Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"PermanentUnitNo\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Status</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"Status\" \n\t\t\t\t\t\t\t        id=\"Status\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Staff</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"Staffid\" \n\t\t\t\t\t\t\t        id=\"Staffid\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"301\">Staff 1</option>\n\t\t\t\t\t\t\t\t\t<option value=\"301\">Staff 1</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Slot added successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-allocate-availability-list\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Parking Booking</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tCreate Parking Booking\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #createParkingSlotForm = \"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\">\n\t                \t\t</div>\n                        </div>\n                        \n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotType\" \n\t\t\t\t\t\t\t        id=\"SlotType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockno\">\n\t                \t\t</div>\n                        </div>\n                        \n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Permanent UnitNo</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"permanentUnitno\">\n                            </div>\n                        </div>\n\t\t\t\t \n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\"> \n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Unit Owner</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Temp block</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"tempblock\">\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Temp Unit</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"tempunit\">\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Temp Owner</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"tempowner\">\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\"> \n                        \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n                    </div>\n\n                    <div class=\"row\">     \n                        <div class=\"col-sm-3\"> \n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Rate Type</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"slotRateType\" \n\t\t\t\t\t\t\t        id=\"slotRateType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Daily\">Daily</option>\n                                    <option value=\"No Fee\">No Fee</option>\n                                    <option value=\"Monthly\">Monthly</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Price</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"price\">\n                            </div>\n                        </div> \n                        \n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Status</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"slotRateType\" \n\t\t\t\t\t\t\t        id=\"slotRateType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Assign\">Assign</option>\n                                    <option value=\"Allocate\">Allocate</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Slot added successfully!</h5> \n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-parking-slots\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Parking Slot</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tCreate Parking Slot\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #createParkingSlotForm = \"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotBlockno\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Main Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotMainType\" \n\t\t\t\t\t\t\t        id=\"SlotMainType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotType\" \n\t\t\t\t\t\t\t        id=\"SlotType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Parking Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"ParkingType\" \n\t\t\t\t\t\t\t        id=\"ParkingType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Car</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Van</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Sq.M</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"sqm\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Slot added successfully!</h5> \n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n\n    <div class=\"card table-card clear\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Community to Others Allocation</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n                </li>\n                \n                <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n                    routerLink=\"/ams/parking-management/create-parking-booking\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Create a Booking</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n  \n          <div class=\"card-body p-0\"> \n              <div class=\"scrolling allocate-availability-table outer\">\n                  <div class=\"inner\">\n                  <table class=\"table table-hover\">\n                      <thead>\n                          <tr>\n                              <th scope=\"col\">Slot Name</th>\n                              <th scope=\"col\">Slot Type</th>\n                              <th scope=\"col\">Slot Block No</th> \n                              <th scope=\"col\">Temp Owner</th>\n                              <th scope=\"col\">Start Date & time</th>\n                              <th scope=\"col\">End Date & Time</th>\n                              <th scope=\"col\">Slot RateT ype</th>\n                              <th scope=\"col\">Price</th>\n                              <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                              <th class=\"text-center\" scope=\"col\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody> \n                      \n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Community Visitor</td>\n                            <td class=\"grey\">A2</td> \n                            <td class=\"name\">Community</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Assign</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Community UnAssigned</td>\n                            <td class=\"grey\">A2</td> \n                            <td class=\"name\">Community</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Assign</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                          \n                      </tbody>\n                  </table> \n                  \n              </div>\n          </div>\n          <app-pagination \n                [totalItems]=\"20\"  \n                [ItemStartIndex]=\"1\"\n                [ItemEndIndex] = \"20\"\n                [itemLimit] = \"5\" >\t\n            </app-pagination>\n        </div>\n      </div>\n     \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n    <div class=\"card table-card clear\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Unit to Community</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n                </li>\n                \n                <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n                    routerLink=\"/ams/parking-management/create-parking-booking\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Create a Booking</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n  \n          <div class=\"card-body p-0\"> \n              <div class=\"scrolling allocate-availability-table outer\">\n                  <div class=\"inner\">\n                  <table class=\"table table-hover\">\n                      <thead>\n                          <tr>\n                              <th scope=\"col\">Slot Name</th>\n                              <th scope=\"col\">Slot Type</th>\n                              <th scope=\"col\">Slot Block No</th>\n                              <th scope=\"col\">Permanent Unit No</th>\n                              <th scope=\"col\">Unit Block No</th> \n                              <th scope=\"col\">Temp Owner</th>\n                              <th scope=\"col\">Start Date & time</th>\n                              <th scope=\"col\">End Date & Time</th>\n                              <th scope=\"col\">Slot RateT ype</th>\n                              <th scope=\"col\">Price</th>\n                              <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                              <th class=\"text-center\" scope=\"col\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody> \n                      \n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">Community</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Allocate</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        \n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">Community</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Allocate</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">Community</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Allocate</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">Community</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Allocate</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr> \n                      </tbody>\n                  </table> \n                  \n              </div>\n          </div>\n          <app-pagination \n                [totalItems]=\"20\"  \n                [ItemStartIndex]=\"1\"\n                [ItemEndIndex] = \"20\"\n                [itemLimit] = \"5\" >\t\n            </app-pagination>\n        </div>\n      </div>    \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">  \n    <div class=\"card table-card clear\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Unit to Unit Allocation</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n                </li>\n                \n                <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n                    routerLink=\"/ams/parking-management/create-parking-booking\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Create a Booking</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n  \n          <div class=\"card-body p-0\"> \n              <div class=\"scrolling allocate-availability-table outer\">\n                  <div class=\"inner\">\n                  <table class=\"table table-hover\">\n                      <thead>\n                          <tr>\n                              <th scope=\"col\">Slot Name</th>\n                              <th scope=\"col\">Slot Type</th>\n                              <th scope=\"col\">Slot Block No</th>\n                              <th scope=\"col\">Permanent Unit No</th>\n                              <th scope=\"col\">Unit Block No</th> \n                              <th scope=\"col\">Temp Block</th>\n                              <th scope=\"col\">Temp Unit</th>\n                              <th scope=\"col\">Temp Owner</th>\n                              <th scope=\"col\">Start Date & time</th>\n                              <th scope=\"col\">End Date & Time</th>\n                              <th scope=\"col\">Slot RateT ype</th>\n                              <th scope=\"col\">Price</th>\n                              <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                              <th class=\"text-center\" scope=\"col\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody> \n                      \n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">B</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"name\">Subash</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Assign</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">B</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"name\">Subash</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Assign</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">B</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"name\">Subash</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Assign</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">B</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"name\">Subash</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Assign</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr> \n                        <tr>\n                            <td>A101</td> \n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A2</td>\n                            <td class=\"grey\">302</td>\n                            <td class=\"name\">Vivek</td>\n                            <td class=\"name\">B</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"name\">Subash</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">01/01/2019 10:00AM</td>\n                            <td class=\"name\">Daily</td>\n                            <td class=\"name\">Price</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Assign</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n\n                          \n                      </tbody>\n                  </table> \n                  \n              </div>\n          </div>\n          <app-pagination \n                [totalItems]=\"20\"  \n                [ItemStartIndex]=\"1\"\n                [ItemEndIndex] = \"20\"\n                [itemLimit] = \"5\" >\t\n            </app-pagination>\n        </div>\n      </div>  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block mt-5\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-allocated-slots-wrapper\">\n    <ul class=\"legends list-inline\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>UnAllocated</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Allocated</li>\n\t</ul>\n    <div class=\"card table-card mt-30 clear\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Allocated Slots</h5>\n              <p class=\"d-none d-md-inline-block\">View Allocated Slots</p>\n          </div>\n          <ul class=\"list-inline\">\n              <li class=\"list-inline-item search d-none d-md-inline-block\">\n                  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n              </li>\n              \n              <li class=\"list-inline-item\"> \n                  <a class=\"btn lime-green mt_5\"\n                  routerLink=\"/ams/parking-management/allocate-slots\" \n                  routerLinkActive=\"active\"\n                  [routerLinkActiveOptions] = \"\">\n                      <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                      <span>Allocate Parking Slots</span>\n                  </a>\n              </li>\n          </ul>\n      </div>\n\n        <div class=\"card-body p-0\"> \n            <div class=\"scrolling outer\">\n                <div class=\"inner\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Slot Name</th>\n                            <th scope=\"col\">Slot Block No</th>\n                            <th scope=\"col\">Slot Type</th>\n                            <th scope=\"col\">Unit Block No</th>\n                            <th scope=\"col\">Permanent Unit No</th>\n                            <th scope=\"col\">Staff ID</th>\n                            <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                            <th class=\"text-center\" scope=\"col\">Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>A101</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Allocated</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Allocated</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                            <td class=\"name\">301</td>\n                            <td class=\"text-center\"><span class=\"tc-green\">Allocated</span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        \n                    </tbody>\n                </table> \n                \n            </div>\n        </div>\n        <app-pagination \n            [totalItems]=\"20\"  \n            [ItemStartIndex]=\"1\"\n            [ItemEndIndex] = \"20\"\n            [itemLimit] = \"5\" >\t\n        </app-pagination>\n      </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-booking-community-to-other-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Booking</h5>\n              <p class=\"d-none d-md-inline-block\">Manage Booking Community to Other</p>\n          </div>\n           \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                      <th scope=\"col\">Slot Type</th>\n                      <th scope=\"col\">Rented by (type)</th>\n                      <th scope=\"col\">Unit No </th>\n                      <th scope=\"col\">Resident Name</th>\n                      <th scope=\"col\">Visitor ID</th>\n                      <th scope=\"col\">Vehicle NO</th>\n                      <th scope=\"col\">Visitor Name</th>\n                      <th scope=\"col\">Visitor Contact</th>\n                      <th scope=\"col\">Start Date & Time</th>\n                      <th scope=\"col\">End Date & Time</th>\n                      <th scope=\"col\">Slot Rate Type</th>\n                      <th scope=\"col\">Fees</th>\n                      <th scope=\"col\">Paid (Y/N)</th>\n                      <th scope=\"col\">Paid Date & Time</th>\n                      <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                      <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-booking-unit-to-community-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Booking</h5>\n              <p class=\"d-none d-md-inline-block\">Manage Booking Unit to Community</p>\n          </div>\n          \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                      <th scope=\"col\">Slot Name</th>\n                      <th scope=\"col\">Slot Type</th>\n                      <th scope=\"col\">Rented by (type)</th>\n                      <th scope=\"col\">Unit No </th>\n                      <th scope=\"col\">Resident Name</th>\n                      <th scope=\"col\">Visitor ID</th>\n                      <th scope=\"col\">Vehicle NO</th>\n                      <th scope=\"col\">Visitor Name</th>\n                      <th scope=\"col\">Visitor Contact</th>\n                      <th scope=\"col\">Start Date & Time</th>\n                      <th scope=\"col\">End Date & Time</th>\n                      <th scope=\"col\">Slot Rate Type</th>\n                      <th scope=\"col\">Fees</th>\n                      <th scope=\"col\">Paid (Y/N)</th>\n                      <th scope=\"col\">Paid Date & Time</th>\n                      <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                      <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-mangae-booking-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block mt-5\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-manage-parkings-slots-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n    <ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n        <li class=\"list-inline-item\"><span class=\"dots medium\"></span>Medium</li>\n        <li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Low</li>\n    </ul>\n\n  \t<div class=\"card table-card mt-30 clear\" *ngIf=\"isDataLoaded\">\n        <div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Parking Slots <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Manage Parking lots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"parkingSlotData\" >\n    \t\t\t</li>\n    \t\t\t\n    \t\t\t<li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/parking-management/create-parking-slot\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Parking Slot</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n\t\t</div>\n\n  \t\t<div class=\"card-body p-0\"> \n            <div class=\"scrolling outer\">\n                <div class=\"inner\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                        <th scope=\"col\">Slot Name</th>\n                        <th scope=\"col\">Slot BlockNo</th>\n                        <th scope=\"col\">Slot Main Type</th>\n                        <th scope=\"col\">Slot Type</th>\n                        <th scope=\"col\">Parking Type</th>\n                        <th scope=\"col\">Sq.M</th>\n                        <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                        <th class=\"text-center\" scope=\"col\">Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let slot of parkingSlotDataList | simpleSearch: parkingSlotData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n                        <td class=\"name\">{{slot.slotName}}</td>\n                        <td class=\"grey\">{{getBlockNo(slot.apartmentBlockUnitId)}}</td>\n                        <td class=\"grey text-capitalize\">{{getSlotMainType(slot.apartmentBlockUnitId)}}</td>\n                        <td class=\"grey\">{{getSlotType(slot.slotTypeId)}}</td>\n                        <td class=\"grey\">{{getVehicleType(slot.parkingTypeId)}}</td>\n                        <td class=\"name text-center\">{{slot.sqrFt}}</td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/edit-parking-slot/{{slot.parkingSlotId}}\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" (click)=\"showConfirmModal(slot)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                    </tbody>\n                </table> \n            </div>\n        </div>\n\n        <app-pagination \n            [totalItems]=\"totalItems\"  \n            [ItemStartIndex]=\"ItemStartIndex\"\n            [ItemEndIndex] = \"ItemEndIndex\"\n            [itemLimit] = \"itemLimit\"\n            (outputParams) = \"getIndexParams($event)\">  \n        </app-pagination>\n            \n\t\t</div>\n  \t</div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-management-allotted-wrapper\">\n\t\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Select Block</h5>\n    \t\t</div>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n\t\t\t<form name=\"selectBlockForm\" novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockNumber\"\n\t\t\t\t\t\t        (ngModelChange)=\"showSelectedBlockSlots()\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\t\t\t  \n\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockNumber\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t    </select>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n  \t</div>\n\n  \t<app-loader *ngIf=\"!isDataLoaded && isBlockSelected\"></app-loader>\n\n  \t<div class=\"card table-card mt-30\" *ngIf=\"isDataLoaded\">\n  \t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Allotted Slots</h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n  \t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('slotName')\">Slot Name <span [ngClass]=\"getFieldOrderBy('slotName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('userName')\">Person Name <span [ngClass]=\"getFieldOrderBy('userName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('slotType')\">Slot Type <span [ngClass]=\"getFieldOrderBy('slotType')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Flat No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Vehicle Details <span></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let slot of allottedSlotListData | simpleSearch: unitData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex; let i = index\">\n\t\t\t\t      <td>{{slot.slotName}}</td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popNameContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{slot.userName}}</a>\n\t\t\t\t      \t<ng-template #popNameContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.type}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>From Date</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.fromdate}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>To Date</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.todate}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Comments</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.notes}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getSlotType(slot.slotTypeId, i)}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.blockNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.unitNo}}</td>\n\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-green\"  *ngIf=\"slot.isVehicleAvailable\" (click)=\"showVehicleInfo(i)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-blue\"  *ngIf=\"slot.isVehicleAvailable\" routerLink=\"/ams/parking-management/edit-vehicle/{{slot.vehicleId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t<i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>\n\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-s-blue\"  *ngIf=\"!slot.isVehicleAvailable\" (click)=\"showVehicleInfo(i)\" placement=\"top\" [ngbPopover]=\"popVehicleContent\" triggers=\"mouseenter:mouseleave\" routerLink=\"/ams/parking-management/add-vehicle/{{slot.parkingSlotId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t<i-feather class=\"icon plus\" name=\"plus\"></i-feather></a>\n\t\t\t\t      \t<ng-template #popVehicleContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<h5>Add Vehicle</h5>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      \n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n  \t</div>\n\n  \t<ng-template #viewVehicleRef let-vehicle>\n    \t<div class=\"vehicle-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Vehicle Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Number</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Type</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.type}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Manufacturer</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleManufacturer}}<span *ngIf=\"vehicle.vehicleManufacturer === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Model</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleModel}}<span *ngIf=\"vehicle.vehicleModel === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Driver Number</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleDriverNumber}}<span *ngIf=\"vehicle.vehicleDriverNumber === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Color</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleColor}}<span *ngIf=\"vehicle.vehicleColor === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  parking-management-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-add-setup-vehicle-type-wrapper\">\n\t<form #addVehicleForm = \"ngForm\" name=\"addVehicleForm\" (ngSubmit)=\"submitAddVehicleForm(addVehicleForm)\"  novalidate>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"input-box\">\n\t                <label>Category Type*</label>\n\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"vehicleCategory\" [(ngModel)]=\"vehicleCategory\" required>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVehicleForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-settings\">\n\t\n\n\t<div class=\"row\">\n\t\t\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Vehicle Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isVehicleDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isVehicleDataLoaded\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of vehicleCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">{{item.lookupValueName}}\n\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"editVehicleDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"editVehicleDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t      \t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"edit\" [vehicleId]=\"item.lookupValueId\"></app-parking-add-setup-vehicle-type>\n\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" data-toggle=\"dropdown\" id=\"addVehicleDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tAdd<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"addVehicleDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t      \t\t\t<app-parking-add-setup-vehicle-type type=\"add\"></app-parking-add-setup-vehicle-type>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Slot Main Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isSlotMainDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isSlotMainDataLoaded\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of slotMainCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">{{item.lookupValueName}}\n\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"editVehicleDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"editVehicleDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t      \t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"edit\" [vehicleId]=\"item.lookupValueId\"></app-parking-add-setup-vehicle-type>\n\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" data-toggle=\"dropdown\" id=\"addVehicleDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tAdd<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"addVehicleDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t      \t\t\t<app-parking-add-setup-vehicle-type type=\"add\"></app-parking-add-setup-vehicle-type>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Slot Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isSlotDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isSlotDataLoaded\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let item of slotCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">{{item.lookupValueName}}\n\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"editSlotDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"editSlotDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t      \t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"edit\" [vehicleId]=\"item.lookupValueId\"></app-parking-add-setup-vehicle-type>\n\t\t\t    \t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" data-toggle=\"dropdown\" id=\"addSlotDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\tAdd<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"addSlotDropDown\" (click)=\"stopPropagation($event)\">\n\t\t\t      \t\t\t<app-parking-add-setup-vehicle-type type=\"add\"></app-parking-add-setup-vehicle-type>\n\t\t\t    \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\t\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-management-slot-types-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 slot-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slot Type <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Slot types</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"slotData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewSlotType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Slot</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n                      <th scope=\"col\">S.No</th>\n                      <th scope=\"col\">Slot Main Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Slot Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let slot of slotDataList | simpleSearch: slotData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{i + 1}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\"></td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateSlotType(slot)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteSlotType(vehicle)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 slot-type-card\" *ngIf=\"isSlotTypeNew || isSlotTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isSlotTypeNew\">Add Slot Type</h6>\n    \t\t\t<h6 *ngIf=\"!isSlotTypeNew\">Update Slot Type</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeSlotTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<app-alert-message [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isSlotTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isSlotTypeSubmitted\">\n\n\t\t\t\t<form #addSlotTypeForm = \"ngForm\" name=\"addSlotTypeForm\"  (ngSubmit)=\"submitAddSlotTypeForm(addSlotTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Slot Main Type*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"slotMainType\" \n\t\t\t\t\t\t\t        id=\"slotMainType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.slotMainType\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of slotMainTypeDataList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label> Slot Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\" SlotType\"   required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addSlotTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  parking-management-unallotted works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-management-vehicle-types-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 vehicle-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Vechile Type <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Vehicle types</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"vehicleData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewVehicleType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Vehicle</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Sno <span [ngClass]=\"getFieldOrderBy('primayContact')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Vehicle Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let vehicle of vehicleDataList | simpleSearch: vehicleData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{i + 1}}</td>\n\t\t\t\t      <td class=\"grey\">{{vehicle.lookupValueName}}</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateVehicleType(vehicle)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteVehicleType(vehicle)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 vehicle-type-card\" *ngIf=\"isVehicleTypeNew || isVehicleTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isVehicleTypeNew\">Add Vehicle Type</h6>\n    \t\t\t<h6 *ngIf=\"!isVehicleTypeNew\">Update Vehicle Type</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeVehicleTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<app-alert-message [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isVehicleTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isVehicleTypeSubmitted\">\n\n\t\t\t\t<form #addvehicleTypeForm = \"ngForm\" name=\"addvehicleTypeForm\"  (ngSubmit)=\"submitAddvehicleTypeForm(addvehicleTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"vehicleType\" [(ngModel)]=\"vehicleType\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addvehicleTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-setup/parking-setup.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-setup/parking-setup.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-setup-wrapper\">\n\n\t<app-parking-management-vehicle-types></app-parking-management-vehicle-types>\n\n\t<app-parking-management-slot-types></app-parking-management-slot-types>\n    \n    <!-- <div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n                <h5> Setup Slot Main Type </h5>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t<ng-container>\n\n\t\t\t\t<form #addslotypeForm = \"ngForm\" name=\"addslotypeForm\" novalidate>\n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Main Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"SlotMainType\" \n\t\t\t\t\t\t\t        id=\"SlotMainType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"Unit Owned\">Unit Owned</option>\n                                    <option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label> Slot Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\" SlotType\"   required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n  \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Setup Slot Type </h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n                      <th scope=\"col\">Sno <span></span></th>\n                      <th scope=\"col\">Slot Main Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Slot Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr>\n\t\t\t\t      <td>01</td>\n                      <td class=\"grey\">Unit Owned</td> \n                      <td class=\"grey\">Unit Owned</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n                    </tr>\n                    <tr>\n                        <td>02</td>\n                        <td class=\"grey\">Community Owned</td> \n                        <td class=\"grey\">Community UnAssigned</td> \n                        <td>\n                            <a href=\"javascript:void(0)\" class=\"mr-2\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                          </td>\n                      </tr>\n                      <tr>  \n                        <td>03</td>\n                        <td class=\"grey\">Community Owned</td> \n                        <td class=\"grey\">Community Visitor</td> \n                        <td>\n                            <a href=\"javascript:void(0)\" class=\"mr-2\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                          </td>\n                      </tr>\n                      <tr>  \n                        <td>04</td>\n                        <td class=\"grey\">Community Owned</td> \n                        <td class=\"grey\">Community Amenity</td> \n                        <td>\n                            <a href=\"javascript:void(0)\" class=\"mr-2\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                          </td>\n                      </tr>\n                      <tr>  \n                        <td>05</td>\n                        <td class=\"grey\">Community Owned</td> \n                        <td class=\"grey\">Staff Parking</td> \n                        <td>\n                            <a href=\"javascript:void(0)\" class=\"mr-2\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                          </td>\n                      </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div> -->\n\n    <div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n                <h5>Setup Slot Rate Type</h5>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t<ng-container>\n\n\t\t\t\t<form #addslotypeForm = \"ngForm\" name=\"addslotypeForm\" novalidate>\n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Rate Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"SlotRateType\" \n\t\t\t\t\t\t\t        id=\"SlotRateType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"per_hour\">Per Hour</option>\n                                    <option value=\"daily_24_hrs\">Daily 24 hrs</option>\n                                    <option value=\"monthly\">Monthly</option>\n                                    <option value=\"yearly\">Yearly</option>\n                                    <option value=\"quarterly\">Quarterly</option>\n                                    <option value=\"overnight_12_hrs\">Overnight 12 hrs</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label> Rate*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"rate\"   required>\n\t                \t\t</div>\n                        </div>\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Calculation Type *</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"CalculationType \" \n\t\t\t\t\t\t\t        id=\"CalculationType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"onetime\">Onetime</option>\n                                    <option value=\"daily\">Daily</option>\n                                    <option value=\"monthly\">Monthly</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n  \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slot Rate Type</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n                      <th scope=\"col\">Sno <span></span></th>\n                      <th scope=\"col\">Slot Rate Type <span></span></th> \n                      <th scope=\"col\">Slot Rate <span></span></th> \n                      <th scope=\"col\">Calculation Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr>\n\t\t\t\t      <td>01</td>\n                      <td class=\"grey\">Per Hour</td> \n                      <td class=\"grey\">20</td> \n                      <td class=\"grey\">Onetime</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n                    </tr>\n\n                    <tr>\n                        <td>02</td>\n                        <td class=\"grey\">Daily 24 hrs</td> \n                        <td class=\"grey\">100</td> \n                        <td class=\"grey\">Onetime</td> \n                        <td>\n                            <a href=\"javascript:void(0)\" class=\"mr-2\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                          </td>\n                      </tr>\n\n                      <tr>\n                        <td>03</td>\n                        <td class=\"grey\">Monthly</td> \n                        <td class=\"grey\">2000</td> \n                        <td class=\"grey\">Onetime</td> \n                        <td>\n                            <a href=\"javascript:void(0)\" class=\"mr-2\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                          </td>\n                      </tr>\n\n                      <tr>\n                        <td>04</td>\n                        <td class=\"grey\">Yearly</td> \n                        <td class=\"grey\">20000</td> \n                        <td class=\"grey\">Onetime</td> \n                        <td>\n                            <a href=\"javascript:void(0)\" class=\"mr-2\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                          </td>\n                      </tr>\n                    \n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div> \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-view-available-slots-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>View Available lots</h5> \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                    </div>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Tower</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"tower\" \n\t\t\t\t\t\t\t        id=\"tower\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div> \n                     \n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Type </label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"stype\" \n\t\t\t\t\t\t\t        id=\"stype\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Unit Owned\" >Unit Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                    </div>\n \n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-left mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form> \n\t\t\t\n\t\t</div>\n\n\t</div>\n \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Add and Edit the slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> \n    \t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body p-0\"> \n\t\t\t<div class=\"scrolling outer\">\n                <div class=\"inner\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Available Slot<span></span></th>\n\t\t\t\t      <th scope=\"col\">Tower <span ></span></th>\n\t\t\t\t      <th scope=\"col\">Unit owned/Community Owned<span></span></th>  \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A102</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A103</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-3</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t     </tbody> \n\t\t\t\t</table> \n\t\t\t</div>\n\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"10\"  \n\t\t\t\t[ItemStartIndex]=\"1\"\n\t\t\t\t[ItemEndIndex] = \"10\"\n\t\t\t\t[itemLimit] = \"5\"\n\t\t\t\t(outputParams) = \"1\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/parking-management.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/parking-management.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.scss":
/*!********************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtc2xvdC1jb250YWluZXIvYWRkLXNsb3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts ***!
  \******************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-slot-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-slot-container.component.scss */ "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AddSlotContainerComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/add-slot/add-slot.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/add-slot/add-slot.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtc2xvdC9hZGQtc2xvdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/add-slot/add-slot.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/add-slot/add-slot.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSlotComponent", function() { return AddSlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/vehicle.service */ "./src/app/api/services/vehicle.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
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
        this.apartmentService.getApartmentBlockUnitByBlockId(parseInt(this.slot.apartmentBlockId)).subscribe((res) => {
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
            this.vehicleService.addParkingSlot(details).subscribe((res) => {
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
            this.vehicleService.updateParkingSlot(details).subscribe((res) => {
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
        //get apartment blocks
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
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
                    this.apartmentService.getApartmentBlockUnitByBlockId(parseInt(this.slot.apartmentBlockId)).subscribe((res) => {
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
    { type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot/add-slot.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-slot.component.scss */ "./src/app/ams/parking-management/components/add-slot/add-slot.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AddSlotComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtdmVoaWNsZS9hZGQtdmVoaWNsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AddVehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function() { return AddVehicleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/vehicle.service */ "./src/app/api/services/vehicle.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
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
            this.vehicleService.addVehicle(details).subscribe((res) => {
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
                    this.vehicleService.addApartmentBlockUnitVehicle(mapVehicleDetails).subscribe((res) => {
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
            this.vehicleService.updateVehicle(details).subscribe((res) => {
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
        //get vehicle type
        this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
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
    { type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddVehicleComponent.prototype, "outputParams", void 0);
AddVehicleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-vehicle',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-vehicle.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-vehicle.component.scss */ "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AddVehicleComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ParkingAdminViewBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAdminViewBookingComponent", function() { return ParkingAdminViewBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingAdminViewBookingComponent = class ParkingAdminViewBookingComponent {
    constructor() { }
    ngOnInit() {
        this.navArray = [
            { link: 'view-booking-community-owned-to-unit', name: 'Community Owned to unit' },
            { link: 'view-booking-community-owned-to-visitor', name: 'Community Owned to Visitor' }
        ];
    }
};
ParkingAdminViewBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-admin-view-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-admin-view-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-admin-view-booking.component.scss */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingAdminViewBookingComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy9wYXJraW5nLWJvb2tpbmctdmlldy1jb21tdW5pdHktb3duZWQtdG8tdW5pdC9wYXJraW5nLWJvb2tpbmctdmlldy1jb21tdW5pdHktb3duZWQtdG8tdW5pdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts ***!
  \*************************************************************************************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-booking-view-community-owned-to-unit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-booking-view-community-owned-to-unit.component.scss */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingBookingViewCommunityOwnedToUnitComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy9wYXJraW5nLWJvb2tpbmctdmlldy1jb21tdW5pdHktb3duZWQtdG8tdmlzdG9yL3BhcmtpbmctYm9va2luZy12aWV3LWNvbW11bml0eS1vd25lZC10by12aXN0b3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts ***!
  \*****************************************************************************************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-booking-view-community-owned-to-vistor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-booking-view-community-owned-to-vistor.component.scss */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingBookingViewCommunityOwnedToVistorComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFsbG9jYXRlLXNsb3RzL3BhcmtpbmctYWxsb2NhdGUtc2xvdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts ***!
  \**************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-allocate-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-allocate-slots.component.scss */ "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingAllocateSlotsComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWNyZWF0ZS1wYXJraW5nLWJvb2tpbmcvcGFya2luZy1jcmVhdGUtcGFya2luZy1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ParkingCreateParkingBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingCreateParkingBookingComponent", function() { return ParkingCreateParkingBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingCreateParkingBookingComponent = class ParkingCreateParkingBookingComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingCreateParkingBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-create-parking-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-create-parking-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-create-parking-booking.component.scss */ "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingCreateParkingBookingComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWNyZWF0ZS1wYXJraW5nLXNsb3QvcGFya2luZy1jcmVhdGUtcGFya2luZy1zbG90LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ParkingCreateParkingSlotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingCreateParkingSlotComponent", function() { return ParkingCreateParkingSlotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingCreateParkingSlotComponent = class ParkingCreateParkingSlotComponent {
    constructor() {
        this.isEditSlot = false;
        this.isSlotAdded = false;
    }
    ngOnInit() {
    }
};
ParkingCreateParkingSlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-create-parking-slot',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-create-parking-slot.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-create-parking-slot.component.scss */ "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingCreateParkingSlotComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLWFhLWNvbW11bml0eS10by1vdGhlcnMvcGFya2luZy1hYS1jb21tdW5pdHktdG8tb3RoZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts":
/*!************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: ParkingAaCommunityToOthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAaCommunityToOthersComponent", function() { return ParkingAaCommunityToOthersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingAaCommunityToOthersComponent = class ParkingAaCommunityToOthersComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingAaCommunityToOthersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-aa-community-to-others',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-aa-community-to-others.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-aa-community-to-others.component.scss */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingAaCommunityToOthersComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLWFhLXVuaXQtdG8tY29tbXVuaXR5L3BhcmtpbmctYWEtdW5pdC10by1jb21tdW5pdHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts":
/*!********************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: ParkingAaUnitToCommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAaUnitToCommunityComponent", function() { return ParkingAaUnitToCommunityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingAaUnitToCommunityComponent = class ParkingAaUnitToCommunityComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingAaUnitToCommunityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-aa-unit-to-community',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-aa-unit-to-community.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-aa-unit-to-community.component.scss */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingAaUnitToCommunityComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLWFhLXVuaXQtdG8tdW5pdC1hbGxvY2F0aW9uL3BhcmtpbmctYWEtdW5pdC10by11bml0LWFsbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: ParkingAaUnitToUnitAllocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAaUnitToUnitAllocationComponent", function() { return ParkingAaUnitToUnitAllocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingAaUnitToUnitAllocationComponent = class ParkingAaUnitToUnitAllocationComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingAaUnitToUnitAllocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-aa-unit-to-unit-allocation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-aa-unit-to-unit-allocation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-aa-unit-to-unit-allocation.component.scss */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingAaUnitToUnitAllocationComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss":
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts":
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts ***!
  \****************************************************************************************************************************************************/
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
            { link: 'unit-to-unit-allocation', name: 'Unit to Unit Allocation' },
            { link: 'unit-to-community', name: 'Unit to Community' },
            { link: 'community-to-others', name: 'Community to Others' }
        ];
    }
};
ParkingManageAllocateAvailabilityListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-allocate-availability-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-allocate-availability-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-allocate-availability-list.component.scss */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageAllocateAvailabilityListComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZWQtc2xvdHMvcGFya2luZy1tYW5hZ2UtYWxsb2NhdGVkLXNsb3RzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ParkingManageAllocatedSlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageAllocatedSlotsComponent", function() { return ParkingManageAllocatedSlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManageAllocatedSlotsComponent = class ParkingManageAllocatedSlotsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ParkingManageAllocatedSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-allocated-slots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-allocated-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-allocated-slots.component.scss */ "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageAllocatedSlotsComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1ib29raW5nL3BhcmtpbmctbWFuYWdlLWJvb2tpbmctY29tbXVuaXR5LXRvLW90aGVyL3BhcmtpbmctbWFuYWdlLWJvb2tpbmctY29tbXVuaXR5LXRvLW90aGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts ***!
  \***************************************************************************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-booking-community-to-other.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-booking-community-to-other.component.scss */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageBookingCommunityToOtherComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1ib29raW5nL3BhcmtpbmctbWFuYWdlLWJvb2tpbmctdW5pdC10by1jb21tdW5pdHkvcGFya2luZy1tYW5hZ2UtYm9va2luZy11bml0LXRvLWNvbW11bml0eS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts ***!
  \*************************************************************************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-booking-unit-to-community.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-booking-unit-to-community.component.scss */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageBookingUnitToCommunityComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1ib29raW5nL3BhcmtpbmctbWFuYWdlLWJvb2tpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ParkingManageBookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageBookingComponent", function() { return ParkingManageBookingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingManageBookingComponent = class ParkingManageBookingComponent {
    constructor() {
        this.parkingSlotData = "";
    }
    ngOnInit() {
        this.navArray = [
            { link: 'manage-booking-community-to-other', name: 'Community to Other' },
            { link: 'manage-booking-unit-to-community', name: 'Unit to Community' }
        ];
    }
};
ParkingManageBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-booking',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-booking.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-booking.component.scss */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManageBookingComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1wYXJraW5nLXNsb3RzL3BhcmtpbmctbWFuYWdlLXBhcmtpbmctc2xvdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: ParkingManageParkingSlotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManageParkingSlotsComponent", function() { return ParkingManageParkingSlotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/vehicle.service */ "./src/app/api/services/vehicle.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");











let ParkingManageParkingSlotsComponent = class ParkingManageParkingSlotsComponent {
    constructor(injector, dialog, userService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.slotFieldType = "unitno";
        this.slotData = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
    }
    sortUnitData(type) {
        this.slotFieldType = type;
        this.slotData = !this.slotData;
    }
    getFieldOrderBy(type) {
        if (this.slotFieldType == type) {
            return this.slotData ? 'desc' : 'asc';
        }
        else
            return '';
    }
    getBlockNo(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.apartmentBlockUnitDataList, function (item) {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].apartmentBlockNumber + " " + data[0].apartmentBlockUnitNumber;
        }
    }
    getSlotMainType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.slotMainTypeDataList, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    getSlotType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.slotTypeDataList, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    getVehicleType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.vehicleTypeDataList, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName;
        }
    }
    showConfirmModal(item) {
        this.modalService.showConfirmModal(item);
    }
    ngOnInit() {
        this.vehicleService.getParkingSlotByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.parkingSlotDataList = res.filter(item => {
                return item.isActive;
            });
            this.totalItems = this.parkingSlotDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        });
        this.apartmentService.getApartmentBlockUnitByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.apartmentBlockUnitDataList = res.filter(item => {
                return item.isActive;
            });
        });
        //slot main type
        this.lookupService.getLookupValueByLookupTypeId(71).subscribe((res) => {
            this.slotMainTypeDataList = res.filter(item => {
                return item.isActive;
            });
        });
        //slot type
        this.lookupService.getLookupValueByLookupTypeId(18).subscribe((res) => {
            this.slotTypeDataList = res.filter(item => {
                return item.isActive;
            });
            console.log(this.slotTypeDataList);
        });
        //vehicle type
        this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
            this.slotTypeDataList = res.filter(item => {
                return item.isActive;
            });
            console.log(this.slotTypeDataList);
        });
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                this.isDataLoaded = false;
                var params = {
                    parkingSlotId: item.parkingSlotId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.vehicleService.deleteParkingSlot(params).subscribe((res) => {
                    this.parkingSlotDataList = this.parkingSlotDataList.filter((type) => type.parkingSlotId !== item.parkingSlotId);
                    this.isDataLoaded = true;
                });
            }
        });
    }
};
ParkingManageParkingSlotsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }
];
ParkingManageParkingSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-manage-parking-slots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-manage-parking-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-manage-parking-slots.component.scss */ "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])
], ParkingManageParkingSlotsComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtYWxsb3R0ZWQvcGFya2luZy1tYW5hZ2VtZW50LWFsbG90dGVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ParkingManagementAllottedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementAllottedComponent", function() { return ParkingManagementAllottedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/vehicle.service */ "./src/app/api/services/vehicle.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");











let ParkingManagementAllottedComponent = class ParkingManagementAllottedComponent {
    constructor(injector, dialog, userService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    getUserIndexParams(event) {
        this.ItemUserStartIndex = event.ItemUserStartIndex;
        this.ItemUserEndIndex = event.ItemUserEndIndex;
    }
    getSlotType(slotId, index) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.slotTypeData, item => {
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
            var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.vehicleTypeData, item => {
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
        underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.allSlotsData, (item, index) => {
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
        //get slot type
        this.lookupService.getLookupValueByLookupTypeId(18).subscribe((res) => {
            this.slotTypeData = res;
        }, error => {
        });
        //get vehicle type
        this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
            this.vehicleTypeData = res;
        }, error => {
        });
        this.vehicleService.getParkingSlotByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.allSlotsData = res.filter(item => {
                return item.isActive;
            });
            underscore__WEBPACK_IMPORTED_MODULE_10__["each"](this.allSlotsData, (item, index) => {
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
        this.apartmentService.getApartmentBlockByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.blocksData = res;
        }, error => {
            console.log(error);
        });
    }
};
ParkingManagementAllottedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewVehicleRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], ParkingManagementAllottedComponent.prototype, "viewVehicleRef", void 0);
ParkingManagementAllottedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-allotted',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-allotted.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-allotted.component.scss */ "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_5__["VehicleService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])
], ParkingManagementAllottedComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtcmVwb3J0cy9wYXJraW5nLW1hbmFnZW1lbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts ***!
  \**********************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-reports.component.scss */ "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManagementReportsComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtc2V0dGluZ3MvcGFya2luZy1hZGQtc2V0dXAtdmVoaWNsZS10eXBlL3BhcmtpbmctYWRkLXNldHVwLXZlaGljbGUtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: ParkingAddSetupVehicleTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingAddSetupVehicleTypeComponent", function() { return ParkingAddSetupVehicleTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../api/services/vehicle.service */ "./src/app/api/services/vehicle.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let ParkingAddSetupVehicleTypeComponent = class ParkingAddSetupVehicleTypeComponent {
    constructor(vehicleService, lookupService, sharedService, cookieService) {
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.vehicleCategory = "";
    }
    submitAddVehicleForm(form) {
        if (this.type != 'edit') {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "lookupTypeId": 2,
                "lookupValueName": this.vehicleCategory,
                "description": this.vehicleCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.addLookupValue(details).subscribe((res) => {
                if (res.message) {
                    this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
                    });
                }
                else {
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.vehicleId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "lookupTypeId": 2,
                "lookupValueName": this.vehicleCategory,
                "description": this.vehicleCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString()
            };
            this.lookupService.updateLookupValue(details).subscribe((res) => {
                if (res.message) {
                }
                else {
                }
            });
        }
    }
    ngOnInit() {
    }
};
ParkingAddSetupVehicleTypeComponent.ctorParameters = () => [
    { type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingAddSetupVehicleTypeComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], ParkingAddSetupVehicleTypeComponent.prototype, "vehicleId", void 0);
ParkingAddSetupVehicleTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-add-setup-vehicle-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-add-setup-vehicle-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-add-setup-vehicle-type.component.scss */ "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], ParkingAddSetupVehicleTypeComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtc2V0dGluZ3MvcGFya2luZy1tYW5hZ2VtZW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: ParkingManagementSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementSettingsComponent", function() { return ParkingManagementSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/vehicle.service */ "./src/app/api/services/vehicle.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






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
    }
    ngOnInit() {
        //get vehcile type
        this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
            this.isVehicleDataLoaded = true;
            this.vehicleCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
        //get main slot type
        this.lookupService.getLookupValueByLookupTypeId(71).subscribe((res) => {
            this.isSlotMainDataLoaded = true;
            this.slotMainCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
        //get slot type
        this.lookupService.getLookupValueByLookupTypeId(18).subscribe((res) => {
            this.isSlotDataLoaded = true;
            this.slotCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
ParkingManagementSettingsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
ParkingManagementSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-settings.component.scss */ "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _api_services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], ParkingManagementSettingsComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtc2xvdC10eXBlcy9wYXJraW5nLW1hbmFnZW1lbnQtc2xvdC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: ParkingManagementSlotTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementSlotTypesComponent", function() { return ParkingManagementSlotTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
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
        this.slotType = item.lookupValueName;
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
            this.slotDataList.splice(index, 1);
            this.isDataLoaded = true;
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
    }
    ngOnInit() {
        this.slot = {};
        this.slot.slotMainType = "";
        this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
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
        this.lookupService.getLookupValueByLookupTypeId(71).subscribe((res) => {
            this.slotMainTypeDataList = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
ParkingManagementSlotTypesComponent.ctorParameters = () => [
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
ParkingManagementSlotTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-slot-types',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-slot-types.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-slot-types.component.scss */ "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], ParkingManagementSlotTypesComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtdW5hbGxvdHRlZC9wYXJraW5nLW1hbmFnZW1lbnQtdW5hbGxvdHRlZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts ***!
  \****************************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-unallotted.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-unallotted.component.scss */ "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManagementUnallottedComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtdmVoaWNsZS10eXBlcy9wYXJraW5nLW1hbmFnZW1lbnQtdmVoaWNsZS10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: ParkingManagementVehicleTypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementVehicleTypesComponent", function() { return ParkingManagementVehicleTypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]);
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
                "lookupTypeId": 20,
                "lookupValueName": this.vehicleType,
                "description": this.vehicleType,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.addLookupValue(details).subscribe((res) => {
                if (res.message) {
                    this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
                        this.isVehicleTypeSubmitted = true;
                        this.sharedService.setAlertMessage("Vehicle Type added successfully");
                        this.vehicleDataList = res.filter(item => {
                            return item.isActive;
                        });
                    });
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
            this.lookupService.updateLookupValue(details).subscribe((res) => {
                if (res.message) {
                    this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
                        this.isVehicleTypeSubmitted = true;
                        this.sharedService.setAlertMessage("Vehicle Type updated successfully");
                        this.vehicleDataList = res.filter(item => {
                            return item.isActive;
                        });
                    });
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
        this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res) => {
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
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                this.isDataLoaded = false;
                var params = {
                    lookupValueId: item.lookupValueId,
                    updateUserId: parseInt(this.cookieService.get('userId'))
                };
                this.lookupService.deleteLookupvalue(params).subscribe((res) => {
                    this.vehicleDataList = this.vehicleDataList.filter((type) => type.lookupValueId !== item.lookupValueId);
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.isDataLoaded = true;
                });
            }
        });
    }
};
ParkingManagementVehicleTypesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
ParkingManagementVehicleTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-management-vehicle-types',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management-vehicle-types.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management-vehicle-types.component.scss */ "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], ParkingManagementVehicleTypesComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-setup/parking-setup.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLXNldHVwL3Bhcmtpbmctc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ParkingSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingSetupComponent", function() { return ParkingSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ParkingSetupComponent = class ParkingSetupComponent {
    ngOnInit() {
    }
};
ParkingSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-parking-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-setup/parking-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-setup.component.scss */ "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.scss")).default]
    })
], ParkingSetupComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLXZpZXctYXZhaWxhYmxlLXNsb3RzL3Bhcmtpbmctdmlldy1hdmFpbGFibGUtc2xvdHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts ***!
  \**************************************************************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-view-available-slots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-view-available-slots.component.scss */ "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingViewAvailableSlotsComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/parking-management-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/ams/parking-management/parking-management-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ParkingManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementRoutingModule", function() { return ParkingManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.././auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/parking-management-settings/parking-management-settings.component */ "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts");
/* harmony import */ var _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/parking-management-allotted/parking-management-allotted.component */ "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts");
/* harmony import */ var _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/parking-management-unallotted/parking-management-unallotted.component */ "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts");
/* harmony import */ var _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/parking-management-reports/parking-management-reports.component */ "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts");
/* harmony import */ var _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-slot-container/add-slot-container.component */ "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts");
/* harmony import */ var _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parking-manage-parking-slots/parking-manage-parking-slots.component */ "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts");
/* harmony import */ var _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/parking-create-parking-slot/parking-create-parking-slot.component */ "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts");
/* harmony import */ var _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/parking-allocate-slots/parking-allocate-slots.component */ "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/parking-manage-allocated-slots/parking-manage-allocated-slots.component */ "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts");
/* harmony import */ var _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/parking-create-parking-booking/parking-create-parking-booking.component */ "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts");
/* harmony import */ var _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/parking-view-available-slots/parking-view-available-slots.component */ "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking.component */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_community_to_other_parking_manage_booking_community_to_other_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_unit_to_community_parking_manage_booking_unit_to_community_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-admin-view-booking.component */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_unit_parking_booking_view_community_owned_to_unit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_vistor_parking_booking_view_community_owned_to_vistor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts");
/* harmony import */ var _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/parking-setup/parking-setup.component */ "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts");
/* harmony import */ var _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/add-vehicle/add-vehicle.component */ "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts");



























const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_4__["ParkingManagementSettingsComponent"] },
    { path: 'setup', component: _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_25__["ParkingSetupComponent"] },
    { path: 'manage-parking-slots', component: _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_9__["ParkingManageParkingSlotsComponent"] },
    { path: 'create-parking-slot', component: _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_10__["ParkingCreateParkingSlotComponent"] },
    { path: 'edit-parking-slot/:id', component: _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_10__["ParkingCreateParkingSlotComponent"] },
    { path: 'allocate-slots', component: _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_11__["ParkingAllocateSlotsComponent"] },
    { path: 'manage-allocated-slots', component: _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_12__["ParkingManageAllocatedSlotsComponent"] },
    { path: 'manage-allocate-availability-list', component: _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_13__["ParkingManageAllocateAvailabilityListComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'unit-to-unit-allocation', pathMatch: 'full' },
            { path: 'unit-to-community', component: _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_17__["ParkingAaUnitToCommunityComponent"] },
            { path: 'community-to-others', component: _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_18__["ParkingAaCommunityToOthersComponent"] },
            { path: 'unit-to-unit-allocation', component: _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_16__["ParkingAaUnitToUnitAllocationComponent"] },
            { path: '**', redirectTo: 'unit-to-unit-allocation', pathMatch: 'full' }
        ]
    },
    { path: 'manage-booking-slots', component: _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_19__["ParkingManageBookingComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'manage-booking-community-to-other', pathMatch: 'full' },
            { path: 'manage-booking-community-to-other', component: _components_parking_manage_booking_parking_manage_booking_community_to_other_parking_manage_booking_community_to_other_component__WEBPACK_IMPORTED_MODULE_20__["ParkingManageBookingCommunityToOtherComponent"] },
            { path: 'manage-booking-unit-to-community', component: _components_parking_manage_booking_parking_manage_booking_unit_to_community_parking_manage_booking_unit_to_community_component__WEBPACK_IMPORTED_MODULE_21__["ParkingManageBookingUnitToCommunityComponent"] },
            { path: '**', redirectTo: 'manage-booking-community-to-other', pathMatch: 'full' }
        ]
    },
    { path: 'view-booking', component: _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_22__["ParkingAdminViewBookingComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'view-booking-community-owned-to-unit', pathMatch: 'full' },
            { path: 'view-booking-community-owned-to-unit', component: _components_parking_admin_view_booking_parking_booking_view_community_owned_to_unit_parking_booking_view_community_owned_to_unit_component__WEBPACK_IMPORTED_MODULE_23__["ParkingBookingViewCommunityOwnedToUnitComponent"] },
            { path: 'view-booking-community-owned-to-visitor', component: _components_parking_admin_view_booking_parking_booking_view_community_owned_to_vistor_parking_booking_view_community_owned_to_vistor_component__WEBPACK_IMPORTED_MODULE_24__["ParkingBookingViewCommunityOwnedToVistorComponent"] },
            { path: '**', redirectTo: 'view-booking-community-owned-to-unit', pathMatch: 'full' }
        ]
    },
    { path: 'create-parking-booking', component: _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_14__["ParkingCreateParkingBookingComponent"] },
    { path: 'view-available-slots', component: _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_15__["ParkingViewAvailableSlotsComponent"] },
    { path: 'manage-booking-slots', component: _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_19__["ParkingManageBookingComponent"] },
    { path: 'allotted', component: _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementAllottedComponent"] },
    { path: 'unallotted', component: _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_6__["ParkingManagementUnallottedComponent"] },
    { path: 'reports', component: _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_7__["ParkingManagementReportsComponent"] },
    { path: 'add-slot', component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__["AddSlotContainerComponent"] },
    { path: 'edit-slot/:id', component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__["AddSlotContainerComponent"] },
    { path: 'add-vehicle/:slotid', component: _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_26__["AddVehicleComponent"] },
    { path: 'edit-vehicle/:id', component: _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_26__["AddVehicleComponent"] },
    { path: 'edit-allotted-slot/:id', component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__["AddSlotContainerComponent"] },
    { path: 'create-parking-booking', component: _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_14__["ParkingCreateParkingBookingComponent"] },
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

/***/ "./src/app/ams/parking-management/parking-management.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/ams/parking-management/parking-management.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvcGFya2luZy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/parking-management/parking-management.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ams/parking-management/parking-management.component.ts ***!
  \************************************************************************/
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./parking-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/parking-management.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./parking-management.component.scss */ "./src/app/ams/parking-management/parking-management.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ParkingManagementComponent);



/***/ }),

/***/ "./src/app/ams/parking-management/parking-management.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/ams/parking-management/parking-management.module.ts ***!
  \*********************************************************************/
/*! exports provided: ParkingManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParkingManagementModule", function() { return ParkingManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _parking_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parking-management-routing.module */ "./src/app/ams/parking-management/parking-management-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _parking_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parking-management.component */ "./src/app/ams/parking-management/parking-management.component.ts");
/* harmony import */ var _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/parking-management-settings/parking-management-settings.component */ "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts");
/* harmony import */ var _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/parking-management-allotted/parking-management-allotted.component */ "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts");
/* harmony import */ var _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/parking-management-unallotted/parking-management-unallotted.component */ "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts");
/* harmony import */ var _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parking-management-reports/parking-management-reports.component */ "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts");
/* harmony import */ var _components_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-slot/add-slot.component */ "./src/app/ams/parking-management/components/add-slot/add-slot.component.ts");
/* harmony import */ var _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-slot-container/add-slot-container.component */ "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts");
/* harmony import */ var _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/parking-manage-parking-slots/parking-manage-parking-slots.component */ "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts");
/* harmony import */ var _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/parking-create-parking-slot/parking-create-parking-slot.component */ "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts");
/* harmony import */ var _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/parking-allocate-slots/parking-allocate-slots.component */ "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/parking-manage-allocated-slots/parking-manage-allocated-slots.component */ "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts");
/* harmony import */ var _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/parking-create-parking-booking/parking-create-parking-booking.component */ "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts");
/* harmony import */ var _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/parking-view-available-slots/parking-view-available-slots.component */ "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts");
/* harmony import */ var _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component */ "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking.component */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_community_to_other_parking_manage_booking_community_to_other_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts");
/* harmony import */ var _components_parking_manage_booking_parking_manage_booking_unit_to_community_parking_manage_booking_unit_to_community_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component */ "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-admin-view-booking.component */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_unit_parking_booking_view_community_owned_to_unit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts");
/* harmony import */ var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_vistor_parking_booking_view_community_owned_to_vistor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component */ "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts");
/* harmony import */ var _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/parking-setup/parking-setup.component */ "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts");
/* harmony import */ var _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/add-vehicle/add-vehicle.component */ "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts");
/* harmony import */ var _components_parking_management_settings_parking_add_setup_vehicle_type_parking_add_setup_vehicle_type_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component */ "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts");
/* harmony import */ var _components_parking_management_vehicle_types_parking_management_vehicle_types_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/parking-management-vehicle-types/parking-management-vehicle-types.component */ "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts");
/* harmony import */ var _components_parking_management_slot_types_parking_management_slot_types_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/parking-management-slot-types/parking-management-slot-types.component */ "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts");

































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
            _components_parking_management_slot_types_parking_management_slot_types_component__WEBPACK_IMPORTED_MODULE_32__["ParkingManagementSlotTypesComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _parking_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParkingManagementRoutingModule"]
        ],
        bootstrap: [_parking_management_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementComponent"]]
    })
], ParkingManagementModule);



/***/ })

}]);
//# sourceMappingURL=parking-management-parking-management-module-es2015.js.map