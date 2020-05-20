function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["parking-management-parking-management-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.html":
  /*!**********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.html ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsAddSlotContainerAddSlotContainerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-slots-container-wrapper\">\n\t<ng-container *ngFor=\"let slot of slotArray; let i = index\">\n\t\t<app-add-slot [index]=\"i\" [array]=\"slotArray\" (outputParams) = \"getSlotArray($event)\"></app-add-slot>\n\t</ng-container>\n\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addSlot()\" *ngIf=\"!isEditSlot\">\n\t\t<span class=\"icon\">+</span>\n\t</a>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot/add-slot.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot/add-slot.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsAddSlotAddSlotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-slot-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditSlot\">Add Slot</span>\n    \t\t\t\t<span *ngIf=\"isEditSlot\">Edit Slot</span>\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"!isArrayOne()\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"isArrayOne() && !isEditSlot\" (click)=\"deleteSlot()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isSlotSubmitted && !isSlotAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isSlotSubmitted && !isSlotAdded\">\n\n\t\t\t\t<form #addSlotForm = \"ngForm\" name=\"addSlotForm\" (ngSubmit)=\"submitAddSlotForm(addSlotForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\" [(ngModel)]=\"slot.slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Slot Type</label>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t                            <input name=\"slotType\" id=\"Member\" [(ngModel)]=\"slotType\"  value=\"81\" type=\"radio\">\n\t\t                            <label class=\"radio-inline\" for=\"Member\">Member</label>\n\t                     \t\t</div>\n\t\t                    \t<div class=\"form-group\">\n\t\t                            <input name=\"slotType\" id=\"Guest\" [(ngModel)]=\"slotType\" value=\"82\" type=\"radio\">\n\t\t                            <label class=\"radio-inline\" for=\"Guest\">Guest</label>\n\t\t                         </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Block No*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.apartmentBlockId\" (ngModelChange)=\"getUnits()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-6\" *ngIf=\"isSlotSelected || isEditSlot\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Unit No*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"unitNo\" \n\t\t\t\t\t\t\t        id=\"unitNo\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.apartmentBlockUnitId\" required [disabled]=\"!isBlockSelected\">\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitData\" [value]=\"item.apartmentBlockUnitId\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Comment</label>\n\t\t\t                    <textarea placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"slot.comment\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addSlotForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isSlotAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isEditSlot\">Slot added successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isEditSlot\">Slot updated successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsAddVehicleAddVehicleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-vehicle-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditVehicle\">Add Vehicle</span>\n    \t\t\t\t<span *ngIf=\"isEditVehicle\">Edit Vehicle</span>\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/parking-management/allotted\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVehicleSubmitted && !isVehicleAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVehicleSubmitted && !isVehicleAdded\">\n\n\t\t\t\t<form #addVehicleForm = \"ngForm\" name=\"addVehicleForm\" (ngSubmit)=\"submitAddVehicleForm(addVehicleForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleNumber\" [(ngModel)]=\"vehicle.vehicleNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"vehicleType\" \n\t\t\t\t\t\t\t        id=\"vehicleType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"vehicleTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of vehicleTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Manufacturer</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleManufacturer\" [(ngModel)]=\"vehicle.vehicleManufacturer\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Model</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleModel\" [(ngModel)]=\"vehicle.vehicleModel\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Driver Number</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleDriverNumber\" [(ngModel)]=\"vehicle.vehicleDriverNumber\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Color</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"vehicleColor\" [(ngModel)]=\"vehicle.vehicleColor\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVehicleForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isVehicleAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isEditVehicle\">Vehicle added successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isEditVehicle\">Vehicle updated successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsAllocatedSlotConfirmationAllocatedSlotConfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Slot Confirmation Unit Owned</h2>\n<div mat-dialog-content>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"name\" class=\"control-label  w-100\">Allocate</label>\n      <label for=\"name\" class=\"control-label\">A 101</label>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"name\" class=\"control-label w-100\">Located In</label>\n        <label for=\"name\" class=\"control-label\">Block No</label>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"control-label  w-100\">Type</label>\n        <label for=\"name\" class=\"control-label\">Unit Owned</label>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"control-label  w-100\">Contact Name</label>\n        <label for=\"name\" class=\"control-label\">Name</label>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"type\" class=\"control-label  w-100\">Unit</label>\n        <select formControlName=\"type\" class=\"form-control\">\n          <option value=\"\">Choose</option>\n          <!-- <option *ngFor=\"let t of documentTypeDataList\" [value]=\"t.lookupValueId\">{{t.lookupValueName}}</option> -->\n        </select>\n        <!-- <div *ngIf=\"canShowError('type')\">\n          <p class=\"error-txt\" *ngIf=\"hasError('type','required')\">Document type is required</p>\n        </div> -->\n      </div>\n      <div class=\"form-group\">\n        <label for=\"type\" class=\"control-label\">Block</label>\n        <select formControlName=\"type\" class=\"form-control\">\n          <option value=\"\">Choose</option>\n          <!-- <option *ngFor=\"let t of documentTypeDataList\" [value]=\"t.lookupValueId\">{{t.lookupValueName}}</option> -->\n        </select>\n        <!-- <div *ngIf=\"canShowError('type')\">\n          <p class=\"error-txt\" *ngIf=\"hasError('type','required')\">Document type is required</p>\n        </div> -->\n      </div>\n    <div class=\"form-group mt-4\">\n      <label for=\"description\">Comments</label>\n      <textarea class=\"form-control\" formControlName=\"description\" rows=\"3\"></textarea>\n    </div>\n  </form>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n  <button mat-button class=\"btn blue\">\n    <!-- {{config.type=='ADD'? 'Submit':'Update'}} -->\n    Submit\n  </button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingAdminViewBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-view-available-slots-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 class=\"mt-3\" >View Available lots</h5> \n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<ul class=\"list-inline float-left\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                    </div>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Tower</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"tower\" \n\t\t\t\t\t\t\t        id=\"tower\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div> \n                     \n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Type </label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"stype\" \n\t\t\t\t\t\t\t        id=\"stype\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                    </div>\n \n\t\t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-left mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t</form> \n\t\t\t\n\t\t</div>\n\n\t</div>\n \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Add and Edit the slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> \n    \t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body p-0\"> \n\t\t\t<div class=\"scrolling outer\">\n                <div class=\"inner\">\n\t\t\t\t\t<table class=\"table\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t  <th scope=\"col\">Slot No<span></span></th>\n\t\t\t\t\t\t\t  <th scope=\"col\">Slot Location<span ></span></th>\n\t\t\t\t\t\t\t  <th scope=\"col\">Parking Type<span></span></th>  \n\t\t\t\t\t\t\t  <th scope=\"col\">From Date</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">From Time</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">To Date</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">To Time</th>\n\t\t\t\t\t\t\t  <th scope=\"col\">Visitor ID</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t <tbody>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t\t\t<td class=\"grey\">Car</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">03:57</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">05:50</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">100001</td> \n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t\t\t<td class=\"grey\">Car</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">03:57</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">05:50</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">100001</td> \n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t\t\t<td class=\"grey\">Car</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">03:57</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">5/12/2020</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">05:50</td> \n\t\t\t\t\t\t\t\t<td class=\"grey\">100001</td> \n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\n\t\t\t\t\t\t </tbody> \n\t\t\t\t\t\t</table> \n\t\t\t</div>\n\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"10\"  \n\t\t\t\t[ItemStartIndex]=\"1\"\n\t\t\t\t[ItemEndIndex] = \"10\"\n\t\t\t\t[itemLimit] = \"5\"\n\t\t\t\t(outputParams) = \"1\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html":
  /*!*****************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html ***!
    \*****************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingBookingViewCommunityOwnedToUnitParkingBookingViewCommunityOwnedToUnitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-manage-booking-community-to-other-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>View Booking</h5>\n              <p class=\"d-none d-md-inline-block\">View Booking Community Owned to Unit</p>\n          </div>\n          \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                        <th scope=\"col\">Slot Name</th>\n                        <th scope=\"col\">Slot Type</th>\n                        <th scope=\"col\">Unit No </th>\n                        <th scope=\"col\">Resident Name</th> \n                        <th scope=\"col\">Vehicle NO</th> \n                        <th scope=\"col\">Start Date & Time</th>\n                        <th scope=\"col\">End Date & Time</th> \n                        <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                        <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n\n                      <tr>\n                        <td>A201</td>\n                        <td class=\"name\">Community Visitor </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">TB34343 </td> \n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td> \n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                       \n                       \n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html":
  /*!*********************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html ***!
    \*********************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingBookingViewCommunityOwnedToVistorParkingBookingViewCommunityOwnedToVistorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-manage-parkings-slots-wrapper\">\n        <div class=\"card clear table-card mt-30\">\n          <div class=\"card-header\">\n              <div class=\"float-left\">\n                  <h5>View Booking</h5>\n                  <p class=\"d-none d-md-inline-block\">View Booking Community Owned to Unit</p>\n              </div>\n               \n          </div>\n    \n            <div class=\"card-body p-0\">  \n                  <div class=\"table-responsive\">\n                  <table class=\"table\">\n                      <thead>\n                          <tr>\n                            <th scope=\"col\">Slot Name</th>\n                            <th scope=\"col\">Slot Type</th>\n                            <th scope=\"col\">Rented by (type)</th>\n                            <th scope=\"col\">Unit No </th>\n                            <th scope=\"col\">Resident Name</th> \n                            <th scope=\"col\">Vehicle ID</th> \n                            <th scope=\"col\">Vehicle NO</th> \n                            <th scope=\"col\">Visitor Name</th> \n                            <th scope=\"col\">Visitor Contact</th> \n                            <th scope=\"col\">Start Date & Time</th>\n                            <th scope=\"col\">End Date & Time</th> \n                            <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                            <th class=\"text-center\" scope=\"col\">Actions</th>\n                          </tr>\n                      </thead>\n                      <tbody> \n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n\n                          <tr>\n                            <td>A201</td>\n                            <td class=\"name\">Community Visitor </td>\n                            <td class=\"grey\">Resident</td>\n                            <td class=\"grey text-capitalize\">A101</td> \n                            <td class=\"grey\">Anila</td>\n                            <td class=\"grey\">4545343</td>\n                            <td class=\"grey\">TB34343 </td> \n                            <td class=\"name text-center\">Joey</td>\n                            <td class=\"name text-center\">878687687</td>\n                            <td class=\"name text-center\"></td>\n                            <td class=\"name text-center\"></td>  \n                            <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                                class=\"mr-2\" \n                                placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                                routerLink=\"/ams/parking-management/manage-parking-lots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                          </tr>\n    \n                          \n                      </tbody>\n                  </table> \n              </div>\n           \n                  <app-pagination \n                      [totalItems]=\"20\"  \n                      [ItemStartIndex]=\"1\"\n                      [ItemEndIndex] = \"20\"\n                      [itemLimit] = \"5\" >\t\n                  </app-pagination>\n              \n          </div>\n        </div> \n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingAllocateSlotsParkingAllocateSlotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-allocate-slots-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-allocated-slots\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Allocated Slots</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\"> \n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tAllocate Parking Slot\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form name=\"addSlotForm\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotBlockno\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotType\" \n\t\t\t\t\t\t\t        id=\"SlotType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Unit Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"UnitBlockNo\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Permanent Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"PermanentUnitNo\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Status</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"Status\" \n\t\t\t\t\t\t\t        id=\"Status\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Staff</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"Staffid\" \n\t\t\t\t\t\t\t        id=\"Staffid\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"301\">Staff 1</option>\n\t\t\t\t\t\t\t\t\t<option value=\"301\">Staff 1</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Slot added successfully!</h5>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingCreateParkingBookingParkingCreateParkingBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-allocate-availability-list\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Parking Booking</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tCreate Parking Booking\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #createParkingSlotForm = \"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"slotName\">\n\t                \t\t</div>\n                        </div>\n                        \n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotType\" \n\t\t\t\t\t\t\t        id=\"SlotType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Unit Owned\">Unit Owned</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Community Owned\">Community Owned</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockno\">\n\t                \t\t</div>\n                        </div>\n                        \n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Permanent UnitNo</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"permanentUnitno\">\n                            </div>\n                        </div>\n\t\t\t\t \n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\"> \n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Unit Owner</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n                            </div>\n                        </div>\n                        \n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Temp block</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"tempblock\">\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Temp Unit</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"tempunit\">\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Temp Owner</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"tempowner\">\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\"> \n                        \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div>\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n                    </div>\n\n                    <div class=\"row\">     \n                        <div class=\"col-sm-3\"> \n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Rate Type</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"slotRateType\" \n\t\t\t\t\t\t\t        id=\"slotRateType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Daily\">Daily</option>\n                                    <option value=\"No Fee\">No Fee</option>\n                                    <option value=\"Monthly\">Monthly</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Price</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"price\">\n                            </div>\n                        </div> \n                        \n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Status</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"slotRateType\" \n\t\t\t\t\t\t\t        id=\"slotRateType\" \n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"Assign\">Assign</option>\n                                    <option value=\"Allocate\">Allocate</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Slot added successfully!</h5> \n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingCreateParkingSlotParkingCreateParkingSlotComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/parking-management/manage-parking-slots\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Parking Slot</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t{{isCreateSlot ? 'Create Parking Slot' : 'Update Parking Slot'}}\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #createParkingSlotForm = \"ngForm\" name=\"addSlotForm\" (ngSubmit)=\"parkingSlot()\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" [(ngModel)]=\"createSlot.slotName\" name=\"slotName\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Slot Block No</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" [(ngModel)]=\"createSlot.parkingSlotBlockNumber\" name=\"slotBlockno\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Main Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotMainType\" \n\t\t\t\t\t\t\t\t\tid=\"SlotMainType\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createSlot.slotMainTypeId\"\n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of slotMainTypeList\"  value=\"{{item.lookupValueId}}\">{{item.lookupValueName}}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Slot Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"SlotType\" \n\t\t\t\t\t\t\t\t\tid=\"SlotType\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createSlot.slotTypeId\"\n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of slotTypeList\"  value=\"{{item.lookupValueId}}\">{{item.lookupValueName}}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Parking Type</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"ParkingType\" \n\t\t\t\t\t\t\t\t\tid=\"ParkingType\" \n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"createSlot.parkingTypeId\"\n\t\t\t\t\t\t\t        class=\"form-control\" >\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of parkingTypeList\"  value=\"{{item.id}}\">{{item.name}}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Sq.M</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"createSlot.sqrFt\"  placeholder=\"Enter value\" name=\"sqm\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Slot added successfully!</h5> \n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html":
  /*!****************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html ***!
    \****************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaCommunityToOthersParkingAaCommunityToOthersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n    <mat-accordion class=\"pt-5\">\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <div class=\"flex wd-100\">\n                        <div class=\"flex wd-50\">Filter</div>\n                    </div>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <!-- <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5 class=\"mt-3\" >View Available lots</h5> \n                    </div>\n                    <div class=\"float-right\">\n                        <ul class=\"list-inline float-left\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            \n        \n            </div> -->\n            <div class=\"card-body\"> \n        \n                <form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n                                <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                                <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Tower</label>\n                                <select \n                                    name=\"tower\" \n                                    id=\"tower\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n                                </select>\n                            </div>\n                        </div> \n                     \n                        <!-- <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Type </label>\n                                <select \n                                    name=\"stype\" \n                                    id=\"stype\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n                                </select>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-9 d-flex justify-content-end align-items-center\">\n                            <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                        </div>\n                    </div>\n \n                    <!-- <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <ul class=\"list-inline float-left mt-4\">\n                                <li class=\"list-inline-item\">\n                                    <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                </form> \n            \n        </div>\n            \n        </mat-expansion-panel>\n    </mat-accordion>\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Community to Others Allocation</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n                </li>\n                \n                <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n                    routerLink=\"/ams/parking-management/create-parking-booking\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Allocate</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n  \n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n      </div>\n     \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html":
  /*!************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html ***!
    \************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaUnitToCommunityParkingAaUnitToCommunityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n    <mat-accordion class=\"pt-5\">\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <div class=\"flex wd-100\">\n                        <div class=\"flex wd-50\">Filter</div>\n                    </div>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <!-- <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5 class=\"mt-3\" >View Available lots</h5> \n                    </div>\n                    <div class=\"float-right\">\n                        <ul class=\"list-inline float-left\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            \n        \n            </div> -->\n            <div class=\"card-body\"> \n        \n                <form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n                                <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                                <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Tower</label>\n                                <select \n                                    name=\"tower\" \n                                    id=\"tower\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n                                </select>\n                            </div>\n                        </div> \n                     \n                        <!-- <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Type </label>\n                                <select \n                                    name=\"stype\" \n                                    id=\"stype\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n                                </select>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-9 d-flex justify-content-end align-items-center\">\n                            <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                        </div>\n                    </div>\n \n                    <!-- <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <ul class=\"list-inline float-left mt-4\">\n                                <li class=\"list-inline-item\">\n                                    <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                </form> \n            \n        </div>\n            \n        </mat-expansion-panel>\n    </mat-accordion>\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Unit to Community</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n                </li>\n                \n                <li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n                    routerLink=\"/ams/parking-management/create-parking-booking\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Allocate</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n  \n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n      </div>    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html":
  /*!************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html ***!
    \************************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaUnitToUnitAllocationParkingAaUnitToUnitAllocationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <mat-accordion class=\"pt-5\">\n        <mat-expansion-panel>\n            <mat-expansion-panel-header>\n                <mat-panel-title>\n                    <div class=\"flex wd-100\">\n                        <div class=\"flex wd-50\">Filter</div>\n                    </div>\n                </mat-panel-title>\n            </mat-expansion-panel-header>\n            <!-- <div class=\"card\">\n                <div class=\"card-header\">\n                    <div class=\"float-left\">\n                        <h5 class=\"mt-3\" >View Available lots</h5> \n                    </div>\n                    <div class=\"float-right\">\n                        <ul class=\"list-inline float-left\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            \n        \n            </div> -->\n            <div class=\"card-body\"> \n        \n                <form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n                                <owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n                                <owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n                                      <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                  </div>\n                            </div>\n                        </div> \n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Tower</label>\n                                <select \n                                    name=\"tower\" \n                                    id=\"tower\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n                                </select>\n                            </div>\n                        </div> \n                     \n                        <!-- <div class=\"col-sm-3\">\n                            <div class=\"select-box\">\n                                <label>Type </label>\n                                <select \n                                    name=\"stype\" \n                                    id=\"stype\" \n                                    class=\"form-control\"\n                                    required>\n                                    <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n                                </select>\n                            </div>\n                        </div> -->\n                        <div class=\"col-sm-9 d-flex justify-content-end align-items-center\">\n                            <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                        </div>\n                    </div>\n \n                    <!-- <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <ul class=\"list-inline float-left mt-4\">\n                                <li class=\"list-inline-item\">\n                                    <button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n                                </li>\n                            </ul>\n                        </div>\n                    </div> -->\n\n                </form> \n            \n        </div>\n            \n        </mat-expansion-panel>\n    </mat-accordion>\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Unit to Unit Allocation</h5>\n                <p class=\"d-none d-md-inline-block\">Manage Allocation Availability</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" routerLink=\"/ams/parking-management/create-parking-booking\"\n                        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Allocate</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html":
  /*!********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html ***!
    \********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingManageAllocateAvailabilityListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageAllocatedSlotsParkingManageAllocatedSlotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-mangae-allocated-slots-wrapper\">\n    <ul class=\"legends list-inline\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>UnAllocated</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Allocated</li>\n\t</ul>\n    <div class=\"card table-card mt-30 clear\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Allocated Slots</h5>\n              <p class=\"d-none d-md-inline-block\">View Allocated Slots</p>\n          </div>\n          <ul class=\"list-inline d-flex\">\n              <li class=\"list-inline-item search d-none d-md-inline-block\">\n                  <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n              </li>\n              <li class=\"list-inline-item wpx-160\"> \n                <select \n                    name=\"tower\" \n                    id=\"tower\" \n                    class=\"form-control\"\n                    required>\n                    <option value=\"\" disabled selected hidden>Select Tower</option>\n                    <option value=\"Tower-1\" >Tower-1</option>\n                    <option value=\"Tower-2\" >Tower-2</option>\n                    <option value=\"Tower-3\" >Tower-3</option>\n                    <option value=\"Tower-4\" >Tower-4</option>\n                </select>\n                  <!-- <a class=\"btn lime-green mt_5\"\n                  routerLink=\"/ams/parking-management/allocate-slots\" \n                  routerLinkActive=\"active\"\n                  [routerLinkActiveOptions] = \"\">\n                      <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                      <span>Allocate Parking Slots</span>\n                  </a> -->\n              </li>\n          </ul>\n      </div>\n\n        <div class=\"card-body p-0\"> \n            <div class=\"scrolling outer\">\n                <div class=\"inner\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Slot Name</th>\n                            <th scope=\"col\">Slot Block No</th>\n                            <th scope=\"col\">Slot Type</th>\n                            <th scope=\"col\">Unit Block No</th>\n                            <th scope=\"col\">Permanent Unit No</th>\n                            <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                            <th scope=\"col\" class=\"text-center\">Allocations</th>\n                            <th class=\"text-center\" scope=\"col\">Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>A101</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                             \n                            <td class=\"text-center\"><span class=\"tc-green\">Allocated</span></td>\n                            <td class=\"text-center   \">\n                                <a href=\"javascript:void(0)\" (click)=\"openConfirmation()\"  ><i-feather name=\"user-check\"></i-feather></a>\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-x\"></i-feather></a>\n                            </td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                             \n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center   \">\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-check\"></i-feather></a>\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-x\"></i-feather></a>\n                            </td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                             \n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center   \">\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-check\"></i-feather></a>\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-x\"></i-feather></a>\n                            </td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                             \n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center   \">\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-check\"></i-feather></a>\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-x\"></i-feather></a>\n                            </td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                             \n                            <td class=\"text-center\"><span class=\"tc-red\">UnAllocated</span></td>\n                            <td class=\"text-center   \">\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-check\"></i-feather></a>\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-x\"></i-feather></a>\n                            </td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                             \n                            <td class=\"text-center\"><span class=\"tc-green\">Allocated</span></td>\n                            <td class=\"text-center   \">\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-check\"></i-feather></a>\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-x\"></i-feather></a>\n                            </td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        <tr>\n                            <td>A102</td>\n                            <td class=\"name\">B101</td>\n                            <td class=\"grey text-capitalize\">A</td>\n                            <td class=\"grey\">Unit Owned</td>\n                            <td class=\"grey\">A</td>\n                             \n                            <td class=\"text-center\"><span class=\"tc-green\">Allocated</span></td>\n                            <td class=\"text-center   \">\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-check\"></i-feather></a>\n                                <a href=\"javascript:void(0)\" ><i-feather name=\"user-x\"></i-feather></a>\n                            </td>\n                            <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/allocate-slots\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"\">\n                                <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                            </a>\n                            <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                        \n                    </tbody>\n                </table> \n                \n            </div>\n        </div>\n        <app-pagination \n            [totalItems]=\"20\"  \n            [ItemStartIndex]=\"1\"\n            [ItemEndIndex] = \"20\"\n            [itemLimit] = \"5\" >\t\n        </app-pagination>\n      </div>\n    </div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.html":
  /*!*************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.html ***!
    \*************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageBookingBookingConfirmationBookingConfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>You are Booking Sot: A101 locatedin Tower 1</h2>\n<div mat-dialog-content>\n    <form>\n<div class=\"row\">\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>From</label>\n                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\"\n                    placeholder=\"Start Date\">\n                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>To</label>\n                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\"\n                    placeholder=\"End Date\">\n                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>Visitor ID</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n            <div class=\"input-box\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n            </div>\n        </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Phone</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Vehicle No</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Email</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Rate</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-sm-3\">\n        <div class=\"input-box\">\n            <label>Total Amount</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"uniteowner\">\n        </div>\n    </div>\n</div>\n</form>\n\n</div>\n<div mat-dialog-actions>\n    <button mat-button (click)=\"close()\">Cancel</button>\n    <button mat-button class=\"btn blue\">\n        <!-- {{config.type=='ADD'? 'Submit':'Update'}} -->\n        Submit\n    </button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html":
  /*!*******************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html ***!
    \*******************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingCommunityToOtherParkingManageBookingCommunityToOtherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-manage-booking-community-to-other-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Booking</h5>\n              <p class=\"d-none d-md-inline-block\">Manage Booking Community to Other</p>\n          </div>\n           \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                      <th scope=\"col\">Slot Type</th>\n                      <th scope=\"col\">Rented by (type)</th>\n                      <th scope=\"col\">Unit No </th>\n                      <th scope=\"col\">Resident Name</th>\n                      <th scope=\"col\">Visitor ID</th>\n                      <th scope=\"col\">Vehicle NO</th>\n                      <th scope=\"col\">Visitor Name</th>\n                      <th scope=\"col\">Visitor Contact</th>\n                      <th scope=\"col\">Start Date & Time</th>\n                      <th scope=\"col\">End Date & Time</th>\n                      <th scope=\"col\">Slot Rate Type</th>\n                      <th scope=\"col\">Fees</th>\n                      <th scope=\"col\">Paid (Y/N)</th>\n                      <th scope=\"col\">Paid Date & Time</th>\n                      <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                      <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html":
  /*!*****************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html ***!
    \*****************************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingUnitToCommunityParkingManageBookingUnitToCommunityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-manage-booking-unit-to-community-wrapper\">\n    <div class=\"card clear table-card mt-30\">\n      <div class=\"card-header\">\n          <div class=\"float-left\">\n              <h5>Manage Booking</h5>\n              <p class=\"d-none d-md-inline-block\">Manage Booking Unit to Community</p>\n          </div>\n          \n      </div>\n\n        <div class=\"card-body p-0\">  \n              <div class=\"table-responsive\">\n              <table class=\"table\">\n                  <thead>\n                      <tr>\n                      <th scope=\"col\">Slot Name</th>\n                      <th scope=\"col\">Slot Type</th>\n                      <th scope=\"col\">Rented by (type)</th>\n                      <th scope=\"col\">Unit No </th>\n                      <th scope=\"col\">Resident Name</th>\n                      <th scope=\"col\">Visitor ID</th>\n                      <th scope=\"col\">Vehicle NO</th>\n                      <th scope=\"col\">Visitor Name</th>\n                      <th scope=\"col\">Visitor Contact</th>\n                      <th scope=\"col\">Start Date & Time</th>\n                      <th scope=\"col\">End Date & Time</th>\n                      <th scope=\"col\">Slot Rate Type</th>\n                      <th scope=\"col\">Fees</th>\n                      <th scope=\"col\">Paid (Y/N)</th>\n                      <th scope=\"col\">Paid Date & Time</th>\n                      <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                      <th class=\"text-center\" scope=\"col\">Actions</th>\n                      </tr>\n                  </thead>\n                  <tbody> \n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n                      <tr>\n                        <td>A101</td>\n                        <td>Community Visitor</td>\n                        <td class=\"name\">Resident </td>\n                        <td class=\"grey text-capitalize\">A101</td>\n                        <td class=\"grey\">Anila</td>\n                        <td class=\"grey\">N/A </td>\n                        <td class=\"name text-center\">TB34343</td>\n                        <td class=\"grey\">Joey</td>\n                        <td class=\"grey\">878687687 </td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\"></td>\n                        <td class=\"name text-center\">Daily</td>\n                        <td class=\"name text-center\">250</td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"name text-center\"> </td>\n                        <td class=\"text-center\"><span class=\"dots ml-1 low\"></span></td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/manage-parking-lots\" \n                        routerLinkActive=\"active\"\n                        [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" ><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                      </tr>\n\n   \n                  </tbody>\n              </table> \n          </div>\n       \n              <app-pagination \n                  [totalItems]=\"20\"  \n                  [ItemStartIndex]=\"1\"\n                  [ItemEndIndex] = \"20\"\n                  [itemLimit] = \"5\" >\t\n              </app-pagination>\n          \n      </div>\n    </div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-view-available-slots-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5 class=\"mt-3\" >View Available lots</h5> \n\t\t\t</div>\n\t\t\t<div class=\"float-right\">\n\t\t\t\t<ul class=\"list-inline float-left\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                    </div>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Tower</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"tower\" \n\t\t\t\t\t\t\t        id=\"tower\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div> \n                     \n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Type </label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"stype\" \n\t\t\t\t\t\t\t        id=\"stype\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\" Community Owned\" > Community Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                    </div>\n \n\t\t\t\t\t<!-- <div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-left mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div> -->\n\n\t\t\t\t</form> \n\t\t\t\n\t\t</div>\n\n\t</div>\n \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Add and Edit the slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> \n    \t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body p-0\"> \n\t\t\t<div class=\"scrolling outer\">\n                <div class=\"inner\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Available Slot<span></span></th>\n\t\t\t\t      <th scope=\"col\">Tower <span ></span></th>\n\t\t\t\t      <th scope=\"col\">Community Owned/Community Temp Owned<span></span></th>  \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\t (click)=\"openConfirmation()\"  >\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A102</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A103</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-3</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\"> Community Owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t     </tbody> \n\t\t\t\t</table> \n\t\t\t</div>\n\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"10\"  \n\t\t\t\t[ItemStartIndex]=\"1\"\n\t\t\t\t[ItemEndIndex] = \"10\"\n\t\t\t\t[itemLimit] = \"5\"\n\t\t\t\t(outputParams) = \"1\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManageParkingSlotsParkingManageParkingSlotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-manage-parkings-slots-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n    <ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n        <li class=\"list-inline-item\"><span class=\"dots medium\"></span>Medium</li>\n        <li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Low</li>\n    </ul>\n\n  \t<div class=\"card table-card mt-30 clear\" *ngIf=\"isDataLoaded\">\n        <div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Parking Slots <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Manage Parking lots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"parkingSlotData\" >\n    \t\t\t</li>\n    \t\t\t\n    \t\t\t<li class=\"list-inline-item\"> \n                    <a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/parking-management/create-parking-slot\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Parking Slot</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n\t\t</div>\n\n  \t\t<div class=\"card-body p-0\"> \n            <div class=\"scrolling outer\">\n                <div class=\"inner\">\n                <table class=\"table\">\n                    <thead>\n                        <tr>\n                        <th scope=\"col\">Slot Name</th>\n                        <th scope=\"col\">Slot BlockNo</th>\n                        <th scope=\"col\">Slot Main Type</th>\n                        <th scope=\"col\">Slot Type</th>\n                        <th scope=\"col\">Parking Type</th>\n                        <th scope=\"col\">Sq.M</th>\n                        <th class=\"max-50 text-center\" scope=\"col\">Status</th>\n                        <th class=\"text-center\" scope=\"col\">Actions</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let slot of parkingSlotDataList | simpleSearch: parkingSlotData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n                        <td class=\"name\">{{slot.slotName}}</td>\n                        <!-- <td class=\"grey\">{{getBlockNo(slot.apartmentBlockUnitId)}}</td> -->\n                        <td class=\"grey\">{{slot.parkingSlotBlockNumber}}</td>\n                        <td class=\"grey text-capitalize\">{{getSlotMainType(slot.slotMainTypeId)}}</td>\n                        <td class=\"grey\">{{getSlotType(slot.slotTypeId)}}</td>\n                        <td class=\"grey\">{{getParkingType(slot.parkingTypeId)}}</td>\n                        <td class=\"name text-center\">{{slot.sqrFt}}</td>\n                        <td class=\"text-center\">\n                            {{slot?.slotStatusId}}\n                            <!-- <span class=\"dots ml-1 low\"></span> -->\n                        </td>\n                        <td class=\"text-center\"><a href=\"javascript:void(0)\"\n                            class=\"mr-2\" \n                            placement=\"top\"  triggers=\"mouseenter:mouseleave\"\n                            routerLink=\"/ams/parking-management/edit-parking-slot/{{slot.parkingSlotId}}\" \n                            routerLinkActive=\"active\"\n                            [routerLinkActiveOptions] = \"{exact:true}\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\" (click)=\"showConfirmModal(slot)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a></td>\n                        </tr>\n                    </tbody>\n                </table> \n            </div>\n        </div>\n\n        <app-pagination \n            [totalItems]=\"totalItems\"  \n            [ItemStartIndex]=\"ItemStartIndex\"\n            [ItemEndIndex] = \"ItemEndIndex\"\n            [itemLimit] = \"itemLimit\"\n            (outputParams) = \"getIndexParams($event)\">  \n        </app-pagination>\n            \n\t\t</div>\n  \t</div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManagementAllottedParkingManagementAllottedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-management-allotted-wrapper\">\n\t\n\t<div class=\"card\">\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Select Block</h5>\n    \t\t</div>\n  \t\t</div>\n  \t\t<div class=\"card-body\">\n\t\t\t<form name=\"selectBlockForm\" novalidate>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select \n\t\t\t\t\t\t        name=\"blockNo\" \n\t\t\t\t\t\t        id=\"blockNo\" \n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"apartmentBlockNumber\"\n\t\t\t\t\t\t        (ngModelChange)=\"showSelectedBlockSlots()\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\t\t\t  \n\t\t\t\t\t\t        <option *ngFor=\"let item of blocksData\" [value]=\"item.apartmentBlockNumber\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t    </select>\n                \t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n  \t</div>\n\n  \t<app-loader *ngIf=\"!isDataLoaded && isBlockSelected\"></app-loader>\n\n  \t<div class=\"card table-card mt-30\" *ngIf=\"isDataLoaded\">\n  \t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Allotted Slots</h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"unitData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n  \t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('slotName')\">Slot Name <span [ngClass]=\"getFieldOrderBy('slotName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('userName')\">Person Name <span [ngClass]=\"getFieldOrderBy('userName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('slotType')\">Slot Type <span [ngClass]=\"getFieldOrderBy('slotType')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No <span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('unitNo')\">Flat No <span [ngClass]=\"getFieldOrderBy('unitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Vehicle Details <span></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let slot of allottedSlotListData | simpleSearch: unitData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex; let i = index\">\n\t\t\t\t      <td>{{slot.slotName}}</td>\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popNameContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{slot.userName}}</a>\n\t\t\t\t      \t<ng-template #popNameContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Status</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.type}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>From Date</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.fromdate}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>To Date</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.todate}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Comments</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{slot.notes}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getSlotType(slot.slotTypeId, i)}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.blockNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.unitNo}}</td>\n\t\t\t\t      <td class=\"name text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-green\"  *ngIf=\"slot.isVehicleAvailable\" (click)=\"showVehicleInfo(i)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-blue\"  *ngIf=\"slot.isVehicleAvailable\" routerLink=\"/ams/parking-management/edit-vehicle/{{slot.vehicleId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t<i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>\n\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2 tc-s-blue\"  *ngIf=\"!slot.isVehicleAvailable\" (click)=\"showVehicleInfo(i)\" placement=\"top\" [ngbPopover]=\"popVehicleContent\" triggers=\"mouseenter:mouseleave\" routerLink=\"/ams/parking-management/add-vehicle/{{slot.parkingSlotId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t<i-feather class=\"icon plus\" name=\"plus\"></i-feather></a>\n\t\t\t\t      \t<ng-template #popVehicleContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<h5>Add Vehicle</h5>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      \n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalUserItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemUserStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemUserEndIndex\"\n\t\t\t\t[itemLimit] = \"itemUserLimit\"\n\t\t\t\t(outputParams) = \"getUserIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n  \t</div>\n\n  \t<ng-template #viewVehicleRef let-vehicle>\n    \t<div class=\"vehicle-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Vehicle Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Number</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleNumber}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Type</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.type}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Manufacturer</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleManufacturer}}<span *ngIf=\"vehicle.vehicleManufacturer === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Model</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleModel}}<span *ngIf=\"vehicle.vehicleModel === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Driver Number</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleDriverNumber}}<span *ngIf=\"vehicle.vehicleDriverNumber === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vehicle Color</h6>\n\t\t\t\t\t\t\t<p>{{vehicle.vehicleColor}}<span *ngIf=\"vehicle.vehicleColor === null\">-</span></p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html":
  /*!**************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html ***!
    \**************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManagementReportsParkingManagementReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  parking-management-reports works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html":
  /*!**************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html ***!
    \**************************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManagementSettingsParkingAddSetupVehicleTypeParkingAddSetupVehicleTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-add-setup-vehicle-type-wrapper\">\n\t<form #addVehicleForm = \"ngForm\" name=\"addVehicleForm\" (ngSubmit)=\"submitAddVehicleForm(addVehicleForm)\"  novalidate>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"input-box\">\n\t                <label>{{config.type}}</label>\n\t                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"vehicleCategory\" [(ngModel)]=\"vehicleCategory\" required>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVehicleForm.invalid\">{{config.category == 'add'? 'Submit':'Update'}}</button>\n\t\t\t\t<button class=\"btn mr-2\" (click)=\"closeDialog(false)\"  >Cancel</button>\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html":
  /*!****************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManagementSettingsParkingManagementSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-settings\">\n\n\n\t<div class=\"row\">\n\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Vehicle Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isVehicleDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isVehicleDataLoaded\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of vehicleCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">\n\t\t\t\t\t\t\t\t\t<span>{{item.lookupValueName}}</span>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" placement=\"left\" triggers=\"manual\" #vehicleType=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"vehicleType.open()\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<i-feather (click)=\"deleteType(item,2)\"   class=\"icon x-circle\" name=\"x-circle\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Vehicle Type',category:'edit'}\"  [typeId]=\"2\" [typeData]=\"{valueId:item.lookupValueId,valueName:item.lookupValueName}\" (emitConfig)=\"refreshList($event);vehicleType.close()\" (toggleDialog)=\"vehicleType.close()\"  >\n\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" placement=\"left\" triggers=\"manual\" #vehicleType=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"vehicleType.open()\">\n\t\t\t\t\t\t\t\tAdd\n\t\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Vehicle Type',category:'add'}\" [typeId]=\"2\" (emitConfig)=\"refreshList($event);vehicleType.close()\" (toggleDialog)=\"vehicleType.close()\" ></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Slot Main Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isSlotMainDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isSlotMainDataLoaded\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of slotMainCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">\n\t\t\t\t\t\t\t\t\t<span>{{item.lookupValueName}}</span>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" placement=\"left\" triggers=\"manual\" #mainSlot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"mainSlot.open()\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\"\n\t\t\t\t\t\t\t\t\t\t\taria-labelledby=\"editVehicleDropDown\">\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"edit\"\n\t\t\t\t\t\t\t\t\t\t\t\t[typeId]=\"item.lookupValueId\"></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Main Type',category:'edit'}\" [typeId]=\"71\" [typeData]=\"{valueId:item.lookupValueId,valueName:item.lookupValueName}\" (emitConfig)=\"refreshList($event);mainSlot.close()\" (toggleDialog)=\"mainSlot.close()\">\n\t\t\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<i-feather (click)=\"deleteType(item,71)\"   class=\"icon x-circle\" name=\"x-circle\"></i-feather>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" placement=\"left\" triggers=\"manual\" #mainSlot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"mainSlot.open()\" >\n\t\t\t\t\t\t\t\tAdd<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Main Type',category:'add'}\" [typeId]=\"71\" (emitConfig)=\"refreshList($event);mainSlot.close()\" (toggleDialog)=\"mainSlot.close()\" ></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"addVehicleDropDown\">\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"add\"></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class=\"col-sm-12\">\n\t\t\t<div class=\"card ov mb-4\">\n\t\t\t\t<div class=\"card-body badges-body\">\n\t\t\t\t\t<h5>Slot Type</h5>\n\n\t\t\t\t\t<app-loader *ngIf=\"!isSlotDataLoaded\"></app-loader>\n\n\t\t\t\t\t<div class=\"badge-list\" *ngIf=\"isSlotDataLoaded\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let item of slotCategoryData; let i = index; let odd = odd\">\n\t\t\t\t\t\t\t\t<div class=\"badge badge-pill\" [ngClass]=\"odd ? 'badge-light' : 'badge-dark'\">\n\t\t\t\t\t\t\t\t\t<span>{{item.lookupValueName}}</span>\n\t\t\t\t\t\t\t\t\t<div class=\"ml-auto update-box\">\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\"  placement=\"left\" triggers=\"manual\" #slot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"slot.open()\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\"\n\t\t\t\t\t\t\t\t\t\t\taria-labelledby=\"editSlotDropDown\">\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"edit\"\n\t\t\t\t\t\t\t\t\t\t\t\t[typeId]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Type',category:'edit'}\" [typeId]=\"18\" [typeData]=\"{valueId:item.lookupValueId,valueName:item.lookupValueName}\" (emitConfig)=\"refreshList($event);slot.close()\" (toggleDialog)=\"slot.close()\">\n\t\t\t\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<i-feather (click)=\"deleteType(item,18)\"   class=\"icon x-circle\" name=\"x-circle\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<div class=\"badge badge-pill new\" role=\"button\" placement=\"left\" triggers=\"manual\" #slot=\"ngbPopover\" [ngbPopover]=\"popContent\" [autoClose]=\"false\" (click)=\"slot.open()\">\n\t\t\t\t\t\t\t\tAdd<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<ng-template #popContent>\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type [config]=\"{type:'Slot Type',category:'add'}\" [typeId]=\"18\" (emitConfig)=\"refreshList($event);slot.close()\" (toggleDialog)=\"slot.close()\" ></app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t\t<!-- <div class=\"dropdown-menu page-menu badge-menu\" aria-labelledby=\"addSlotDropDown\">\n\t\t\t\t\t\t\t\t<app-parking-add-setup-vehicle-type type=\"add\">\n\t\t\t\t\t\t\t\t</app-parking-add-setup-vehicle-type>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\t\n\n\t\t\t</div>\n\n\n\n\t\t</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManagementSlotTypesParkingManagementSlotTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-management-slot-types-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 slot-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slot Type <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Slot types</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"slotData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewSlotType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Slot</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n                      <th scope=\"col\">S.No</th>\n                      <th scope=\"col\">Slot Main Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Slot Type <span></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let slot of slotDataList | simpleSearch: slotData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{i + 1}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{slot.description}}</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateSlotType(slot)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteSlotType(slot)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 slot-type-card\" *ngIf=\"isSlotTypeNew || isSlotTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isSlotTypeNew\">Add Slot Type</h6>\n    \t\t\t<h6 *ngIf=\"!isSlotTypeNew\">Update Slot Type</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeSlotTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<app-alert-message [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isSlotTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isSlotTypeSubmitted\">\n\n\t\t\t\t<form #addSlotTypeForm = \"ngForm\" name=\"addSlotTypeForm\"  (ngSubmit)=\"submitAddSlotTypeForm(addSlotTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                   <label>Slot Main Type*</label>\n\t\t\t                   <select \n\t\t\t\t\t\t\t        name=\"slotMainType\" \n\t\t\t\t\t\t\t        id=\"slotMainType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"slot.slotMainType\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of slotMainTypeDataList\" [value]=\"item.lookupValueName\">{{item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label> Slot Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\" SlotType\"  [(ngModel)]=\"slot.slotType\"   required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div> \n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addSlotTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManagementUnallottedParkingManagementUnallottedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  parking-management-unallotted works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html":
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html ***!
    \**************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingManagementVehicleTypesParkingManagementVehicleTypesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-management-vehicle-types-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 vehicle-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Vechile Type <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Vehicle types</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"vehicleData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewVehicleType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Vehicle</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Sno <span [ngClass]=\"getFieldOrderBy('primayContact')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Vehicle Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let vehicle of vehicleDataList | simpleSearch: vehicleData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{i + 1}}</td>\n\t\t\t\t      <td class=\"grey\">{{vehicle.lookupValueName}}</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateVehicleType(vehicle)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteVehicleType(vehicle)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 vehicle-type-card\" *ngIf=\"isVehicleTypeNew || isVehicleTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isVehicleTypeNew\">Add Vehicle Type</h6>\n    \t\t\t<h6 *ngIf=\"!isVehicleTypeNew\">Update Vehicle Type</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeVehicleTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<app-alert-message [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isVehicleTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isVehicleTypeSubmitted\">\n\n\t\t\t\t<form #addvehicleTypeForm = \"ngForm\" name=\"addvehicleTypeForm\"  (ngSubmit)=\"submitAddvehicleTypeForm(addvehicleTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Vehicle Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"vehicleType\" [(ngModel)]=\"vehicleType\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addvehicleTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-setup/parking-setup.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-setup/parking-setup.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingSetupParkingSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-setup-wrapper\">\n\t\t<app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n\t\t<div class=\"d-block mt-5\">\n\t\t\t<div class=\"pt-3\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingSlotRateParkingSlotRateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-setup-wrapper\">\n<div class=\"card mb-30\">\n    <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5 class=\"mt-3\" >Setup Slot Rate Type</h5>\n        </div>\n        <div class=\"float-right\">\n            <ul class=\"list-inline float-right\">\n                <li class=\"list-inline-item\">\n                    <button class=\"btn blue mr-2\">Submit</button>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"card-body\">  \n        <ng-container>\n\n            <form #addslotypeForm = \"ngForm\" name=\"addslotypeForm\" novalidate>\n                <div class=\"row\"> \n                    <div class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Slot Rate Type*</label>\n                            <select \n                                name=\"SlotRateType\" \n                                id=\"SlotRateType\" \n                                class=\"form-control\"\n                                required>\n                                <option value=\"per_hour\">Per Hour</option>\n                                <option value=\"daily_24_hrs\">Daily 24 hrs</option>\n                                <option value=\"monthly\">Monthly</option>\n                                <option value=\"yearly\">Yearly</option>\n                                <option value=\"quarterly\">Quarterly</option>\n                                <option value=\"overnight_12_hrs\">Overnight 12 hrs</option> \n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"input-box\">\n                            <label> Rate*</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"rate\"   required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"select-box\">\n                            <label>Calculation Type *</label>\n                            <select \n                                name=\"CalculationType \" \n                                id=\"CalculationType\" \n                                class=\"form-control\"\n                                required>\n                                <option value=\"onetime\">Onetime</option>\n                                <option value=\"daily\">Daily</option>\n                                <option value=\"monthly\">Monthly</option> \n                            </select>\n                        </div>\n                    </div>\n                </div>\n\n                <!-- <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <ul class=\"list-inline float-right mt-4\">\n                            <li class=\"list-inline-item\">\n                                <button class=\"btn blue mr-2\">Submit</button>\n                            </li>\n                        </ul>\n                    </div>\n                </div> -->\n\n            </form>\n\n        </ng-container>\n\n        \n    </div>\n\n</div>\n\n\n<div class=\"card table-card mb-30\">\n    <div class=\"card-header\">\n        <div class=\"float-left\">\n            <h5>Slot Rate Type</h5>\n        </div>\n    </div>\n\n    <div class=\"card-body p-0\">\n    \n    <table class=\"table\">\n            <thead>\n                <tr>\n                  <th scope=\"col\">Sno <span></span></th>\n                  <th scope=\"col\">Slot Rate Type <span></span></th> \n                  <th scope=\"col\">Slot Rate <span></span></th> \n                  <th scope=\"col\">Calculation Type <span></span></th> \n                  <th scope=\"col\">Action</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                  <td>01</td>\n                  <td class=\"grey\">Per Hour</td> \n                  <td class=\"grey\">20</td> \n                  <td class=\"grey\">Onetime</td> \n                  <td>\n                      <a href=\"javascript:void(0)\" class=\"mr-2\">\n                          <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                      </a>\n                      <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                    </td>\n                </tr>\n\n                <tr>\n                    <td>02</td>\n                    <td class=\"grey\">Daily 24 hrs</td> \n                    <td class=\"grey\">100</td> \n                    <td class=\"grey\">Onetime</td> \n                    <td>\n                        <a href=\"javascript:void(0)\" class=\"mr-2\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                      </td>\n                  </tr>\n\n                  <tr>\n                    <td>03</td>\n                    <td class=\"grey\">Monthly</td> \n                    <td class=\"grey\">2000</td> \n                    <td class=\"grey\">Onetime</td> \n                    <td>\n                        <a href=\"javascript:void(0)\" class=\"mr-2\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                      </td>\n                  </tr>\n\n                  <tr>\n                    <td>04</td>\n                    <td class=\"grey\">Yearly</td> \n                    <td class=\"grey\">20000</td> \n                    <td class=\"grey\">Onetime</td> \n                    <td>\n                        <a href=\"javascript:void(0)\" class=\"mr-2\">\n                            <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                        </a>\n                        <a href=\"javascript:void(0)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                      </td>\n                  </tr>\n                \n            </tbody>\n        </table>\n\n    </div>\n\n</div> \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html":
  /*!******************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html ***!
    \******************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsParkingViewAvailableSlotsParkingViewAvailableSlotsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-view-available-slots-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>View Available lots</h5> \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Date</label>\n                                <input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Start Date\" >\n                                <owl-date-time #startDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>Start Time</label>\n                                <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"Start Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #startTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Date</label>\n                                <input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"End Date\" >\n                                <owl-date-time #endDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                            </div>\n                        </div> \n\n                        <div class=\"col-sm-3\">\n                            <div class=\"input-box\">\n                                <label>End Time</label>\n                                <input class=\"form-control\" name=\"endTime\" [owlDateTime]=\"endTime\" [owlDateTimeTrigger]=\"endTime\" placeholder=\"End Time\">\n\t\t\t\t\t\t\t\t<owl-date-time #endTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n                            </div>\n                        </div> \n\n                    </div>\n\n\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Tower</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"tower\" \n\t\t\t\t\t\t\t        id=\"tower\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Tower-1\" >Tower-1</option>\n                                    <option value=\"Tower-2\" >Tower-2</option>\n                                    <option value=\"Tower-3\" >Tower-3</option>\n                                    <option value=\"Tower-4\" >Tower-4</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div> \n                     \n                        <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Type </label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"stype\" \n\t\t\t\t\t\t\t        id=\"stype\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n                                    <option value=\"Unit Owned\" >Unit Owned</option>\n                                    <option value=\"Community Owned\" >Community Owned</option> \n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n                        </div>\n                    </div>\n \n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-left mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Search</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form> \n\t\t\t\n\t\t</div>\n\n\t</div>\n \n\n\t<div class=\"card table-card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Slots</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Add and Edit the slots</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"  >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> \n    \t\t</ul>\n\t\t</div>\n\t\t<div class=\"card-body p-0\"> \n\t\t\t<div class=\"scrolling outer\">\n                <div class=\"inner\">\n\t\t\t<table class=\"table\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Available Slot<span></span></th>\n\t\t\t\t      <th scope=\"col\">Tower <span ></span></th>\n\t\t\t\t      <th scope=\"col\">Unit owned/Community Owned<span></span></th>  \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A102</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A101</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A103</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-3</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-2</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<td>A104</td>\n\t\t\t\t\t\t<td class=\"grey text-capitalize\">Tower-1</td>\n\t\t\t\t\t\t<td class=\"grey\">Unit owned </td> \n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a class=\"btn lime-green mt_5\"\n\t\t\t\t\t\t\trouterLink=\"/ams/parking-management/add-slot\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<span>Book</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t     </tbody> \n\t\t\t\t</table> \n\t\t\t</div>\n\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"10\"  \n\t\t\t\t[ItemStartIndex]=\"1\"\n\t\t\t\t[ItemEndIndex] = \"10\"\n\t\t\t\t[itemLimit] = \"5\"\n\t\t\t\t(outputParams) = \"1\">\t\n\t\t\t</app-pagination>\n\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.html":
  /*!********************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.html ***!
    \********************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsSetParkingAvailablityCommunityParkingAvailablityCommunityParkingAvailablityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Make Community Parking Available</h5>\n                <p class=\"d-none d-md-inline-block\">You are making Community Parking Available for Booking</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" routerLink=\"/ams/parking-management/create-parking-booking\"\n                        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Set Availablity</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsSetParkingAvailablityCreateAvailablityCreateAvailablityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>create-availablity works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.html":
  /*!********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.html ***!
    \********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsSetParkingAvailablitySetParkingAvailablityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-mangae-allocated-slots-list-wrapper\">  \n\n    <app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n    <div class=\"d-block\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n    </div>\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.html":
  /*!**********************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.html ***!
    \**********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementComponentsSetParkingAvailablityUnitParkingAvailablityUnitParkingAvailablityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Make Unit Parking Available</h5>\n                <p class=\"d-none d-md-inline-block\">You are making Resident Parking Available(on behalf ofresident)</p>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n\n                <li class=\"list-inline-item\">\n                    <a class=\"btn lime-green mt_5\" routerLink=\"/ams/parking-management/create-parking-booking\"\n                        routerLinkActive=\"active\" [routerLinkActiveOptions]=\"\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n                        <span>Set Availablity</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"unitAllocationData\" [columns]=\"unitAllocationHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/parking-management.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/parking-management.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsParkingManagementParkingManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.scss":
  /*!********************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.scss ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsAddSlotContainerAddSlotContainerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtc2xvdC1jb250YWluZXIvYWRkLXNsb3QtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts ***!
    \******************************************************************************************************/

  /*! exports provided: AddSlotContainerComponent */

  /***/
  function srcAppAmsParkingManagementComponentsAddSlotContainerAddSlotContainerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSlotContainerComponent", function () {
      return AddSlotContainerComponent;
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

    var AddSlotContainerComponent =
    /*#__PURE__*/
    function () {
      function AddSlotContainerComponent(router, route) {
        _classCallCheck(this, AddSlotContainerComponent);

        this.router = router;
        this.route = route;
        this.slotCount = 1;
        this.isEditSlot = false;
      }

      _createClass(AddSlotContainerComponent, [{
        key: "addSlot",
        value: function addSlot() {
          this.slotCount++;
          this.slotArray = Array(this.slotCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }, {
        key: "getSlotArray",
        value: function getSlotArray(event) {
          this.slotCount = event;
          this.slotArray = Array(this.slotCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.route.params['value'].id != undefined) {
            this.isEditSlot = true;
          }

          this.slotArray = Array(this.slotCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }]);

      return AddSlotContainerComponent;
    }();

    AddSlotContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    AddSlotContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-slot-container',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-slot-container.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-slot-container.component.scss */
      "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], AddSlotContainerComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/add-slot/add-slot.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/add-slot/add-slot.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsAddSlotAddSlotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtc2xvdC9hZGQtc2xvdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/add-slot/add-slot.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/add-slot/add-slot.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AddSlotComponent */

  /***/
  function srcAppAmsParkingManagementComponentsAddSlotAddSlotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSlotComponent", function () {
      return AddSlotComponent;
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


    var src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/vehicle */
    "./src/app/api/controllers/vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/apartment */
    "./src/app/api/controllers/apartment.ts");
    /* harmony import */


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AddSlotComponent =
    /*#__PURE__*/
    function () {
      function AddSlotComponent(router, route, vehicleService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AddSlotComponent);

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

      _createClass(AddSlotComponent, [{
        key: "isArrayOne",
        value: function isArrayOne() {
          return this.slotArray.length > 1 ? true : false;
        }
      }, {
        key: "deleteSlot",
        value: function deleteSlot() {
          this.slotArray.splice(this.index, 1);
          this.outputParams.emit(this.slotArray.length);
        }
      }, {
        key: "getUnits",
        value: function getUnits() {
          var _this = this;

          var blockParams = {
            apartmentBlockId: parseInt(this.slot.apartmentBlockId)
          };
          this.apartmentService.getApartmentBlockUnitByBlockId(blockParams).subscribe(function (res) {
            _this.isSlotSelected = true;
            _this.isBlockSelected = true;
            _this.unitData = res;
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "submitAddSlotForm",
        value: function submitAddSlotForm(form) {
          var _this2 = this;

          this.isSlotSubmitted = true;

          if (!this.isEditSlot) {
            var details = {
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
            var params = {
              parkingSlot: details
            };
            this.vehicleService.addParkingSlot(params).subscribe(function (res) {
              if (res.message) {
                _this2.isSlotAdded = true;
              } else {
                _this2.isSlotSubmitted = false;
                _this2.isSlotAdded = false;
                _this2.isError = true;
                _this2.errorMessage = res.errorMessage;
              }
            }, function (error) {});
          } else {
            var _details = {
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
            var _params = {
              parkingSlot: _details
            };
            this.vehicleService.updateParkingSlot(_params).subscribe(function (res) {
              if (res.message) {
                _this2.isSlotAdded = true;
              } else {
                _this2.isSlotSubmitted = false;
                _this2.isSlotAdded = false;
                _this2.isError = true;
                _this2.errorMessage = res.errorMessage;
              }
            }, function (error) {});
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.slot = {};
          this.slotType = "";
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          }; //get apartment blocks

          this.apartmentService.getApartmentBlockByApartmentId(params).subscribe(function (res) {
            _this3.blocksData = res;
          });

          if (this.route.params['value'].id != undefined) {
            this.isEditSlot = true;
            this.isBlockSelected = false;
            this.vehicleService.getParkingSlotById(this.route.params['value'].id).subscribe(function (res) {
              _this3.slot = res[0];
              _this3.slotType = _this3.slot.slotTypeId.toString();
              _this3.slot.apartmentBlockUnitId = res[0].apartmentBlockUnitId.toString(); //get block unit

              _this3.apartmentService.getApartmentBlockUnitById(_this3.slot.apartmentBlockUnitId).subscribe(function (block) {
                _this3.slot.apartmentBlockId = block[0].apartmentBlockId.toString();
                var params = {
                  apartmentBlockId: parseInt(_this3.slot.apartmentBlockId)
                };

                _this3.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe(function (res) {
                  _this3.isSlotSelected = true;
                  _this3.unitData = res;
                }, function (error) {
                  console.log(error);
                });
              }, function (error) {});
            }, function (error) {});
          }
        }
      }]);

      return AddSlotComponent;
    }();

    AddSlotComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"]
      }, {
        type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddSlotComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddSlotComponent.prototype, "slotArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddSlotComponent.prototype, "outputParams", void 0);
    AddSlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-slot',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-slot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-slot/add-slot.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-slot.component.scss */
      "./src/app/ams/parking-management/components/add-slot/add-slot.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"], src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], AddSlotComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsAddVehicleAddVehicleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hZGQtdmVoaWNsZS9hZGQtdmVoaWNsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AddVehicleComponent */

  /***/
  function srcAppAmsParkingManagementComponentsAddVehicleAddVehicleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVehicleComponent", function () {
      return AddVehicleComponent;
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


    var src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/vehicle */
    "./src/app/api/controllers/vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/apartment */
    "./src/app/api/controllers/apartment.ts");
    /* harmony import */


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AddVehicleComponent =
    /*#__PURE__*/
    function () {
      function AddVehicleComponent(router, route, vehicleService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AddVehicleComponent);

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

      _createClass(AddVehicleComponent, [{
        key: "submitAddVehicleForm",
        value: function submitAddVehicleForm(form) {
          var _this4 = this;

          this.isVehicleSubmitted = true;

          if (!this.isEditVehicle) {
            var details = {
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
            var params = {
              vehicle: details
            };
            this.vehicleService.addVehicle(params).subscribe(function (res) {
              if (res.message) {
                var vehicleId = res.message;
                var mapVehicleDetails = {
                  "apartmentBlockUnitId": _this4.apartmentBlockUnitId,
                  "vehicleId": vehicleId,
                  "userId": parseInt(_this4.cookieService.get('userId')),
                  "documentId": 0,
                  "parkingSlotId": parseInt(_this4.route.params['value'].slotid),
                  "stickerNumber": "string",
                  "rfid": "string",
                  "fromDate": "2019-11-20T07:23:30.495Z",
                  "toDate": "2019-11-20T07:23:30.495Z",
                  "isPassIssued": true,
                  "isActive": true,
                  "insertedBy": parseInt(_this4.cookieService.get('userId')),
                  "insertedOn": "2019-11-20T07:23:30.495Z",
                  "updatedBy": 0,
                  "updatedOn": "2019-11-20T07:23:30.495Z"
                };
                var _params2 = {
                  apartmentBlockUnitVehicle: mapVehicleDetails
                };

                _this4.vehicleService.addApartmentBlockUnitVehicle(_params2).subscribe(function (res) {
                  if (res.message) {
                    _this4.isVehicleAdded = true;
                  }
                });
              } else {
                _this4.isVehicleSubmitted = false;
                _this4.isVehicleAdded = false;
                _this4.isError = true;
                _this4.errorMessage = res.errorMessage;
              }
            }, function (error) {});
          } else {
            var _details2 = {
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
            var _params3 = {
              vehicle: _details2
            };
            this.vehicleService.updateVehicle(_params3).subscribe(function (res) {
              if (res.message) {
                _this4.isVehicleAdded = true;
              } else {
                _this4.isVehicleSubmitted = false;
                _this4.isVehicleAdded = false;
                _this4.isError = true;
                _this4.errorMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.vehicle = {};
          var params = {
            LookupTypeId: 2
          }; //get vehicle type

          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this5.vehicleTypeData = res;
            console.log(res);
          });

          if (this.route.params['value'].id != undefined) {
            this.isEditVehicle = true;
            this.vehicleService.getVehicleByVehicleId(this.route.params['value'].id).subscribe(function (res) {
              _this5.vehicle = res[0];
              _this5.vehicleTypeId = res[0].vehicleTypeId.toString();
            });
          }

          if (this.route.params['value'].slotid != undefined) {
            this.vehicleService.getParkingSlotById(this.route.params['value'].slotid).subscribe(function (res) {
              _this5.apartmentBlockUnitId = res[0].apartmentBlockUnitId;
            });
          }
        }
      }]);

      return AddVehicleComponent;
    }();

    AddVehicleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"]
      }, {
        type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddVehicleComponent.prototype, "outputParams", void 0);
    AddVehicleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-vehicle',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-vehicle.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-vehicle.component.scss */
      "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_3__["VehicleService"], src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], AddVehicleComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.scss":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.scss ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsAllocatedSlotConfirmationAllocatedSlotConfirmationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9hbGxvY2F0ZWQtc2xvdC1jb25maXJtYXRpb24vYWxsb2NhdGVkLXNsb3QtY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: AllocatedSlotConfirmationComponent */

  /***/
  function srcAppAmsParkingManagementComponentsAllocatedSlotConfirmationAllocatedSlotConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllocatedSlotConfirmationComponent", function () {
      return AllocatedSlotConfirmationComponent;
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

    var AllocatedSlotConfirmationComponent =
    /*#__PURE__*/
    function () {
      function AllocatedSlotConfirmationComponent(dialogRef, data) {
        _classCallCheck(this, AllocatedSlotConfirmationComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(AllocatedSlotConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {}
      }]);

      return AllocatedSlotConfirmationComponent;
    }();

    AllocatedSlotConfirmationComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    AllocatedSlotConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-allocated-slot-confirmation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./allocated-slot-confirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./allocated-slot-confirmation.component.scss */
      "./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], AllocatedSlotConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingAdminViewBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: ParkingAdminViewBookingComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingAdminViewBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingAdminViewBookingComponent", function () {
      return ParkingAdminViewBookingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingAdminViewBookingComponent =
    /*#__PURE__*/
    function () {
      function ParkingAdminViewBookingComponent() {
        _classCallCheck(this, ParkingAdminViewBookingComponent);
      }

      _createClass(ParkingAdminViewBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingAdminViewBookingComponent;
    }();

    ParkingAdminViewBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-admin-view-booking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-admin-view-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-admin-view-booking.component.scss */
      "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingAdminViewBookingComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss":
  /*!***************************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss ***!
    \***************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingBookingViewCommunityOwnedToUnitParkingBookingViewCommunityOwnedToUnitComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy9wYXJraW5nLWJvb2tpbmctdmlldy1jb21tdW5pdHktb3duZWQtdG8tdW5pdC9wYXJraW5nLWJvb2tpbmctdmlldy1jb21tdW5pdHktb3duZWQtdG8tdW5pdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts":
  /*!*************************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts ***!
    \*************************************************************************************************************************************************************************************/

  /*! exports provided: ParkingBookingViewCommunityOwnedToUnitComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingBookingViewCommunityOwnedToUnitParkingBookingViewCommunityOwnedToUnitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingBookingViewCommunityOwnedToUnitComponent", function () {
      return ParkingBookingViewCommunityOwnedToUnitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingBookingViewCommunityOwnedToUnitComponent =
    /*#__PURE__*/
    function () {
      function ParkingBookingViewCommunityOwnedToUnitComponent() {
        _classCallCheck(this, ParkingBookingViewCommunityOwnedToUnitComponent);
      }

      _createClass(ParkingBookingViewCommunityOwnedToUnitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingBookingViewCommunityOwnedToUnitComponent;
    }();

    ParkingBookingViewCommunityOwnedToUnitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-booking-view-community-owned-to-unit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-booking-view-community-owned-to-unit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-booking-view-community-owned-to-unit.component.scss */
      "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingBookingViewCommunityOwnedToUnitComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss":
  /*!*******************************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss ***!
    \*******************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingBookingViewCommunityOwnedToVistorParkingBookingViewCommunityOwnedToVistorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFkbWluLXZpZXctYm9va2luZy9wYXJraW5nLWJvb2tpbmctdmlldy1jb21tdW5pdHktb3duZWQtdG8tdmlzdG9yL3BhcmtpbmctYm9va2luZy12aWV3LWNvbW11bml0eS1vd25lZC10by12aXN0b3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts":
  /*!*****************************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts ***!
    \*****************************************************************************************************************************************************************************************/

  /*! exports provided: ParkingBookingViewCommunityOwnedToVistorComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAdminViewBookingParkingBookingViewCommunityOwnedToVistorParkingBookingViewCommunityOwnedToVistorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingBookingViewCommunityOwnedToVistorComponent", function () {
      return ParkingBookingViewCommunityOwnedToVistorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingBookingViewCommunityOwnedToVistorComponent =
    /*#__PURE__*/
    function () {
      function ParkingBookingViewCommunityOwnedToVistorComponent() {
        _classCallCheck(this, ParkingBookingViewCommunityOwnedToVistorComponent);
      }

      _createClass(ParkingBookingViewCommunityOwnedToVistorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingBookingViewCommunityOwnedToVistorComponent;
    }();

    ParkingBookingViewCommunityOwnedToVistorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-booking-view-community-owned-to-vistor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-booking-view-community-owned-to-vistor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-booking-view-community-owned-to-vistor.component.scss */
      "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingBookingViewCommunityOwnedToVistorComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAllocateSlotsParkingAllocateSlotsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWFsbG9jYXRlLXNsb3RzL3BhcmtpbmctYWxsb2NhdGUtc2xvdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: ParkingAllocateSlotsComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingAllocateSlotsParkingAllocateSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingAllocateSlotsComponent", function () {
      return ParkingAllocateSlotsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingAllocateSlotsComponent =
    /*#__PURE__*/
    function () {
      function ParkingAllocateSlotsComponent() {
        _classCallCheck(this, ParkingAllocateSlotsComponent);

        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
      }

      _createClass(ParkingAllocateSlotsComponent, [{
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
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingAllocateSlotsComponent;
    }();

    ParkingAllocateSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-allocate-slots',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-allocate-slots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-allocate-slots.component.scss */
      "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingAllocateSlotsComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingCreateParkingBookingParkingCreateParkingBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWNyZWF0ZS1wYXJraW5nLWJvb2tpbmcvcGFya2luZy1jcmVhdGUtcGFya2luZy1ib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: ParkingCreateParkingBookingComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingCreateParkingBookingParkingCreateParkingBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingCreateParkingBookingComponent", function () {
      return ParkingCreateParkingBookingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingCreateParkingBookingComponent =
    /*#__PURE__*/
    function () {
      function ParkingCreateParkingBookingComponent() {
        _classCallCheck(this, ParkingCreateParkingBookingComponent);
      }

      _createClass(ParkingCreateParkingBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingCreateParkingBookingComponent;
    }();

    ParkingCreateParkingBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-create-parking-booking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-create-parking-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-create-parking-booking.component.scss */
      "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingCreateParkingBookingComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingCreateParkingSlotParkingCreateParkingSlotComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLWNyZWF0ZS1wYXJraW5nLXNsb3QvcGFya2luZy1jcmVhdGUtcGFya2luZy1zbG90LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: ParkingCreateParkingSlotComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingCreateParkingSlotParkingCreateParkingSlotComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingCreateParkingSlotComponent", function () {
      return ParkingCreateParkingSlotComponent;
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


    var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/apartment */
    "./src/app/api/controllers/apartment.ts");
    /* harmony import */


    var src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/parking */
    "./src/app/api/controllers/parking.ts");
    /* harmony import */


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ParkingCreateParkingSlotComponent =
    /*#__PURE__*/
    function () {
      function ParkingCreateParkingSlotComponent(apartmentService, parkingService, lookupService, activatedRoute) {
        _classCallCheck(this, ParkingCreateParkingSlotComponent);

        this.apartmentService = apartmentService;
        this.parkingService = parkingService;
        this.lookupService = lookupService;
        this.activatedRoute = activatedRoute;
        this.isEditSlot = false;
        this.isSlotAdded = false;
        this.slotMainTypeList = [];
        this.slotTypeList = [];
        this.parkingTypeList = [];
        this.isCreateSlot = true;
      }

      _createClass(ParkingCreateParkingSlotComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.createSlot = {
            "parkingSlotId": 0,
            "apartmentId": 0,
            "apartmentBlockUnitId": 0,
            "slotName": "",
            "slotTypeId": 0,
            "slotStatusId": 0,
            "comment": "",
            "isActive": true,
            "insertedBy": 0,
            "insertedOn": "2020-05-09T11:11:03.794Z",
            "updatedBy": 0,
            "updatedOn": "2020-05-09T11:11:03.794Z",
            "parkingTypeId": 0,
            "parkingSlotBlockNumber": 0,
            "sqrFt": 0,
            "slotMainTypeId": 0,
            "permSlotStatusId": 0
          };
          this.getMasterData();
          this.activatedRoute.queryParams.subscribe(function (params) {
            _this6.slotId = params['id'];

            if (_this6.slotId) {
              _this6.isCreateSlot = false;

              _this6.getParkingSlot();
            } else {
              _this6.isCreateSlot = true;
            }
          });
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this7 = this;

          var slotMainList = {
            LookupTypeId: 71
          }; //slot main type

          this.lookupService.getLookupValueByLookupTypeId(slotMainList).subscribe(function (res) {
            _this7.slotMainTypeList = res.filter(function (item) {
              return item.isActive;
            });
          });
          var slotTypeParams = {
            LookupTypeId: 18
          }; //slot type

          this.lookupService.getLookupValueByLookupTypeId(slotTypeParams).subscribe(function (res) {
            _this7.slotTypeList = res.filter(function (item) {
              return item.isActive;
            });
          }); //parking type

          this.parkingService.getParkingType().subscribe(function (resp) {
            _this7.parkingTypeList = resp;
          }, function (error) {});
        }
      }, {
        key: "getParkingSlot",
        value: function getParkingSlot() {
          var _this8 = this;

          this.parkingService.getParkingSlot(this.slotId).subscribe(function (resp) {
            var slotDetails = resp[0];

            for (var key in slotDetails) {
              _this8.createSlot[key] = slotDetails[key];
            }
          }, function (error) {});
        }
      }]);

      return ParkingCreateParkingSlotComponent;
    }();

    ParkingCreateParkingSlotComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"]
      }, {
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    ParkingCreateParkingSlotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-create-parking-slot',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-create-parking-slot.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-create-parking-slot.component.scss */
      "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_3__["ParkingService"], src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])], ParkingCreateParkingSlotComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss":
  /*!**************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss ***!
    \**************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaCommunityToOthersParkingAaCommunityToOthersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLWFhLWNvbW11bml0eS10by1vdGhlcnMvcGFya2luZy1hYS1jb21tdW5pdHktdG8tb3RoZXJzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts ***!
    \************************************************************************************************************************************************************************/

  /*! exports provided: ParkingAaCommunityToOthersComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaCommunityToOthersParkingAaCommunityToOthersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingAaCommunityToOthersComponent", function () {
      return ParkingAaCommunityToOthersComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var ParkingAaCommunityToOthersComponent =
    /*#__PURE__*/
    function () {
      function ParkingAaCommunityToOthersComponent() {
        _classCallCheck(this, ParkingAaCommunityToOthersComponent);
      }

      _createClass(ParkingAaCommunityToOthersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
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
            cellsrenderer: function cellsrenderer(row) {
              return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
            },
            renderer: columnrenderer
          }]; //  var ticketListData = res.filter(data => {
          //   return data.isActive
          // })

          var localData = [{
            slotType: 'Unit Owned',
            slotBlockNo: '1001',
            tempBlock: 'Temp Block',
            tempUnit: 'Temp Unit',
            startDateTime: "Start Date Time",
            endDateTime: "End Date Time",
            slotRateType: "Slot Rate Type",
            Price: '1000',
            status: 'Active'
          }];
          this.gridSourceData = {
            localdata: localData,
            datatype: "array"
          };
          this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
        }
      }]);

      return ParkingAaCommunityToOthersComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], ParkingAaCommunityToOthersComponent.prototype, "datagrid", void 0);
    ParkingAaCommunityToOthersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-aa-community-to-others',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-aa-community-to-others.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-aa-community-to-others.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingAaCommunityToOthersComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaUnitToCommunityParkingAaUnitToCommunityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLWFhLXVuaXQtdG8tY29tbXVuaXR5L3BhcmtpbmctYWEtdW5pdC10by1jb21tdW5pdHkuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts":
  /*!********************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: ParkingAaUnitToCommunityComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaUnitToCommunityParkingAaUnitToCommunityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingAaUnitToCommunityComponent", function () {
      return ParkingAaUnitToCommunityComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var ParkingAaUnitToCommunityComponent =
    /*#__PURE__*/
    function () {
      function ParkingAaUnitToCommunityComponent() {
        _classCallCheck(this, ParkingAaUnitToCommunityComponent);
      }

      _createClass(ParkingAaUnitToCommunityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
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
            cellsrenderer: function cellsrenderer(row) {
              return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
            },
            renderer: columnrenderer
          }]; //  var ticketListData = res.filter(data => {
          //   return data.isActive
          // })

          var localData = [{
            slotType: 'Unit Owned',
            slotBlockNo: '1001',
            tempBlock: 'Temp Block',
            tempUnit: 'Temp Unit',
            startDateTime: "Start Date Time",
            endDateTime: "End Date Time",
            slotRateType: "Slot Rate Type",
            Price: '1000',
            status: 'Active'
          }];
          this.gridSourceData = {
            localdata: localData,
            datatype: "array"
          };
          this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
        }
      }]);

      return ParkingAaUnitToCommunityComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], ParkingAaUnitToCommunityComponent.prototype, "datagrid", void 0);
    ParkingAaUnitToCommunityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-aa-unit-to-community',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-aa-unit-to-community.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-aa-unit-to-community.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingAaUnitToCommunityComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss":
  /*!**********************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss ***!
    \**********************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaUnitToUnitAllocationParkingAaUnitToUnitAllocationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLWFhLXVuaXQtdG8tdW5pdC1hbGxvY2F0aW9uL3BhcmtpbmctYWEtdW5pdC10by11bml0LWFsbG9jYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts":
  /*!********************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts ***!
    \********************************************************************************************************************************************************************************/

  /*! exports provided: ParkingAaUnitToUnitAllocationComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingAaUnitToUnitAllocationParkingAaUnitToUnitAllocationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingAaUnitToUnitAllocationComponent", function () {
      return ParkingAaUnitToUnitAllocationComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var ParkingAaUnitToUnitAllocationComponent =
    /*#__PURE__*/
    function () {
      function ParkingAaUnitToUnitAllocationComponent() {
        _classCallCheck(this, ParkingAaUnitToUnitAllocationComponent);
      }

      _createClass(ParkingAaUnitToUnitAllocationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
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
            cellsrenderer: function cellsrenderer(row) {
              return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
            },
            renderer: columnrenderer
          }]; //  var ticketListData = res.filter(data => {
          //   return data.isActive
          // })

          var localData = [{
            slotType: 'Unit Owned',
            slotBlockNo: '1001',
            tempBlock: 'Temp Block',
            tempUnit: 'Temp Unit',
            startDateTime: "Start Date Time",
            endDateTime: "End Date Time",
            slotRateType: "Slot Rate Type",
            Price: '1000',
            status: 'Active'
          }];
          this.gridSourceData = {
            localdata: localData,
            datatype: "array"
          };
          this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
        }
      }]);

      return ParkingAaUnitToUnitAllocationComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], ParkingAaUnitToUnitAllocationComponent.prototype, "datagrid", void 0);
    ParkingAaUnitToUnitAllocationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-aa-unit-to-unit-allocation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-aa-unit-to-unit-allocation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-aa-unit-to-unit-allocation.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingAaUnitToUnitAllocationComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss":
  /*!******************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingManageAllocateAvailabilityListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZS1hdmFpbGFiaWxpdHktbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts":
  /*!****************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: ParkingManageAllocateAvailabilityListComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocateAvailabilityListParkingManageAllocateAvailabilityListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManageAllocateAvailabilityListComponent", function () {
      return ParkingManageAllocateAvailabilityListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingManageAllocateAvailabilityListComponent =
    /*#__PURE__*/
    function () {
      function ParkingManageAllocateAvailabilityListComponent() {
        _classCallCheck(this, ParkingManageAllocateAvailabilityListComponent);
      }

      _createClass(ParkingManageAllocateAvailabilityListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navArray = [{
            link: 'unit-to-unit-allocation',
            name: 'Unit to Unit Temp.Allocation'
          }, {
            link: 'unit-to-community',
            name: 'Unit to Community'
          }, {
            link: 'community-to-others',
            name: 'Community to Others'
          }];
        }
      }]);

      return ParkingManageAllocateAvailabilityListComponent;
    }();

    ParkingManageAllocateAvailabilityListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-manage-allocate-availability-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-manage-allocate-availability-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-manage-allocate-availability-list.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingManageAllocateAvailabilityListComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocatedSlotsParkingManageAllocatedSlotsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1hbGxvY2F0ZWQtc2xvdHMvcGFya2luZy1tYW5hZ2UtYWxsb2NhdGVkLXNsb3RzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: ParkingManageAllocatedSlotsComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageAllocatedSlotsParkingManageAllocatedSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManageAllocatedSlotsComponent", function () {
      return ParkingManageAllocatedSlotsComponent;
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


    var _allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../allocated-slot-confirmation/allocated-slot-confirmation.component */
    "./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var ParkingManageAllocatedSlotsComponent =
    /*#__PURE__*/
    function () {
      function ParkingManageAllocatedSlotsComponent(dialog) {
        _classCallCheck(this, ParkingManageAllocatedSlotsComponent);

        this.dialog = dialog;
      }

      _createClass(ParkingManageAllocatedSlotsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openConfirmation",
        value: function openConfirmation() {
          var dialogRef = this.dialog.open(_allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_2__["AllocatedSlotConfirmationComponent"], {}); // dialogRef.afterClosed().subscribe(result => {
          //   console.log('The dialog was closed');
          //   this.animal = result;
          // });
        }
      }]);

      return ParkingManageAllocatedSlotsComponent;
    }();

    ParkingManageAllocatedSlotsComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    ParkingManageAllocatedSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-manage-allocated-slots',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-manage-allocated-slots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-manage-allocated-slots.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])], ParkingManageAllocatedSlotsComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.scss":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.scss ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingBookingConfirmationBookingConfirmationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1ib29raW5nL2Jvb2tpbmctY29uZmlybWF0aW9uL2Jvb2tpbmctY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: BookingConfirmationComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingBookingConfirmationBookingConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingConfirmationComponent", function () {
      return BookingConfirmationComponent;
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

    var BookingConfirmationComponent =
    /*#__PURE__*/
    function () {
      function BookingConfirmationComponent(dialogRef, data) {
        _classCallCheck(this, BookingConfirmationComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(BookingConfirmationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close() {}
      }]);

      return BookingConfirmationComponent;
    }();

    BookingConfirmationComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    BookingConfirmationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking-confirmation',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./booking-confirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./booking-confirmation.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], BookingConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss":
  /*!*****************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss ***!
    \*****************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingCommunityToOtherParkingManageBookingCommunityToOtherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1ib29raW5nL3BhcmtpbmctbWFuYWdlLWJvb2tpbmctY29tbXVuaXR5LXRvLW90aGVyL3BhcmtpbmctbWFuYWdlLWJvb2tpbmctY29tbXVuaXR5LXRvLW90aGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts ***!
    \***************************************************************************************************************************************************************************/

  /*! exports provided: ParkingManageBookingCommunityToOtherComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingCommunityToOtherParkingManageBookingCommunityToOtherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManageBookingCommunityToOtherComponent", function () {
      return ParkingManageBookingCommunityToOtherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingManageBookingCommunityToOtherComponent =
    /*#__PURE__*/
    function () {
      function ParkingManageBookingCommunityToOtherComponent() {
        _classCallCheck(this, ParkingManageBookingCommunityToOtherComponent);

        this.isMobile = false;
      }

      _createClass(ParkingManageBookingCommunityToOtherComponent, [{
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingManageBookingCommunityToOtherComponent;
    }();

    ParkingManageBookingCommunityToOtherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-manage-booking-community-to-other',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-manage-booking-community-to-other.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-manage-booking-community-to-other.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingManageBookingCommunityToOtherComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss":
  /*!***************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss ***!
    \***************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingUnitToCommunityParkingManageBookingUnitToCommunityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1ib29raW5nL3BhcmtpbmctbWFuYWdlLWJvb2tpbmctdW5pdC10by1jb21tdW5pdHkvcGFya2luZy1tYW5hZ2UtYm9va2luZy11bml0LXRvLWNvbW11bml0eS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts":
  /*!*************************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts ***!
    \*************************************************************************************************************************************************************************/

  /*! exports provided: ParkingManageBookingUnitToCommunityComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingUnitToCommunityParkingManageBookingUnitToCommunityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManageBookingUnitToCommunityComponent", function () {
      return ParkingManageBookingUnitToCommunityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingManageBookingUnitToCommunityComponent =
    /*#__PURE__*/
    function () {
      function ParkingManageBookingUnitToCommunityComponent() {
        _classCallCheck(this, ParkingManageBookingUnitToCommunityComponent);
      }

      _createClass(ParkingManageBookingUnitToCommunityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingManageBookingUnitToCommunityComponent;
    }();

    ParkingManageBookingUnitToCommunityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-manage-booking-unit-to-community',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-manage-booking-unit-to-community.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-manage-booking-unit-to-community.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingManageBookingUnitToCommunityComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1ib29raW5nL3BhcmtpbmctbWFuYWdlLWJvb2tpbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: ParkingManageBookingComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageBookingParkingManageBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManageBookingComponent", function () {
      return ParkingManageBookingComponent;
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


    var _booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./booking-confirmation/booking-confirmation.component */
    "./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts");

    var ParkingManageBookingComponent =
    /*#__PURE__*/
    function () {
      function ParkingManageBookingComponent(dialog) {
        _classCallCheck(this, ParkingManageBookingComponent);

        this.dialog = dialog;
      }

      _createClass(ParkingManageBookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openConfirmation",
        value: function openConfirmation() {
          var dialogRef = this.dialog.open(_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["BookingConfirmationComponent"], {});
        }
      }]);

      return ParkingManageBookingComponent;
    }();

    ParkingManageBookingComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    ParkingManageBookingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-manage-booking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-manage-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-manage-booking.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], ParkingManageBookingComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageParkingSlotsParkingManageParkingSlotsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZS1wYXJraW5nLXNsb3RzL3BhcmtpbmctbWFuYWdlLXBhcmtpbmctc2xvdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: ParkingManageParkingSlotsComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManageParkingSlotsParkingManageParkingSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManageParkingSlotsComponent", function () {
      return ParkingManageParkingSlotsComponent;
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


    var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/apartment */
    "./src/app/api/controllers/apartment.ts");
    /* harmony import */


    var src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/parking */
    "./src/app/api/controllers/parking.ts");
    /* harmony import */


    var src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/vehicle */
    "./src/app/api/controllers/vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var ParkingManageParkingSlotsComponent =
    /*#__PURE__*/
    function () {
      function ParkingManageParkingSlotsComponent(injector, dialog, parkingService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ParkingManageParkingSlotsComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.parkingService = parkingService;
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

      _createClass(ParkingManageParkingSlotsComponent, [{
        key: "getIndexParams",
        value: function getIndexParams(event) {
          this.ItemStartIndex = event.ItemStartIndex;
          this.ItemEndIndex = event.ItemEndIndex;
          this.itemLimit = event.itemLimit;
        }
      }, {
        key: "sortUnitData",
        value: function sortUnitData(type) {
          this.slotFieldType = type;
          this.slotData = !this.slotData;
        }
      }, {
        key: "getFieldOrderBy",
        value: function getFieldOrderBy(type) {
          if (this.slotFieldType == type) {
            return this.slotData ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "getBlockNo",
        value: function getBlockNo(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.apartmentBlockUnitDataList, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].apartmentBlockNumber + " " + data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getSlotMainType",
        value: function getSlotMainType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.slotMainTypeDataList, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getSlotType",
        value: function getSlotType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.slotTypeDataList, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName;
          }
        }
      }, {
        key: "getParkingType",
        value: function getParkingType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.parkingTypeList, function (item) {
            if (item.id === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].name;
          }
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(item) {
          this.modalService.showConfirmModal(item);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.getMasterData(); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
            if (item != null) {
              _this9.isDataLoaded = false;
              var params = {
                parkingSlotId: item.parkingSlotId,
                deleteBy: parseInt(_this9.cookieService.get('userId'))
              };

              _this9.vehicleService.deleteParkingSlot(params).subscribe(function (res) {
                _this9.parkingSlotDataList = _this9.parkingSlotDataList.filter(function (type) {
                  return type.parkingSlotId !== item.parkingSlotId;
                });
                _this9.isDataLoaded = true;
              });
            }
          });
        }
        /**
         * get Msater Data
         */

      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this10 = this;

          var blockUnitParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockUnitByApartmentId(blockUnitParams).subscribe(function (res) {
            _this10.apartmentBlockUnitDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
          var slotMainParams = {
            LookupTypeId: 71
          }; //slot main type

          this.lookupService.getLookupValueByLookupTypeId(slotMainParams).subscribe(function (res) {
            _this10.slotMainTypeDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
          var slotTypeParams = {
            LookupTypeId: 18
          }; //slot type

          this.lookupService.getLookupValueByLookupTypeId(slotTypeParams).subscribe(function (res) {
            _this10.slotTypeDataList = res.filter(function (item) {
              return item.isActive;
            });
            console.log(_this10.slotTypeDataList);
          });
          var vehicleTypeParams = {
            LookupTypeId: 2
          }; //vehicle type

          this.lookupService.getLookupValueByLookupTypeId(vehicleTypeParams).subscribe(function (res) {
            _this10.vehicleTypeDataList = res.filter(function (item) {
              return item.isActive;
            });
          }); //parking type

          this.parkingService.getParkingType().subscribe(function (resp) {
            _this10.parkingTypeList = resp;
          }, function (error) {});
          this.getParkingSlot();
        }
        /**
         * get parking slot
         */

      }, {
        key: "getParkingSlot",
        value: function getParkingSlot() {
          var _this11 = this;

          var parkingSlotParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.vehicleService.getParkingSlotByApartmentId(parkingSlotParams).subscribe(function (res) {
            _this11.parkingSlotDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this11.totalItems = _this11.parkingSlotDataList.length;

            if (_this11.totalItems > _this11.itemLimit) {
              _this11.ItemEndIndex = _this11.itemLimit;
            } else {
              _this11.ItemEndIndex = _this11.totalItems;
            }

            _this11.isDataLoaded = true;
          });
        }
      }]);

      return ParkingManageParkingSlotsComponent;
    }();

    ParkingManageParkingSlotsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"]
      }, {
        type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_5__["VehicleService"]
      }, {
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
      }];
    };

    ParkingManageParkingSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-manage-parking-slots',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-manage-parking-slots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-manage-parking-slots.component.scss */
      "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_4__["ParkingService"], src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_5__["VehicleService"], src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])], ParkingManageParkingSlotsComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementAllottedParkingManagementAllottedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtYWxsb3R0ZWQvcGFya2luZy1tYW5hZ2VtZW50LWFsbG90dGVkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: ParkingManagementAllottedComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementAllottedParkingManagementAllottedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementAllottedComponent", function () {
      return ParkingManagementAllottedComponent;
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


    var src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/user */
    "./src/app/api/controllers/user.ts");
    /* harmony import */


    var src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/apartment */
    "./src/app/api/controllers/apartment.ts");
    /* harmony import */


    var src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/parking */
    "./src/app/api/controllers/parking.ts");
    /* harmony import */


    var src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/vehicle */
    "./src/app/api/controllers/vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var ParkingManagementAllottedComponent =
    /*#__PURE__*/
    function () {
      function ParkingManagementAllottedComponent(injector, dialog, userService, parkingService, apartmentService, vehicleService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ParkingManagementAllottedComponent);

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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
      }

      _createClass(ParkingManagementAllottedComponent, [{
        key: "getUserIndexParams",
        value: function getUserIndexParams(event) {
          this.ItemUserStartIndex = event.ItemUserStartIndex;
          this.ItemUserEndIndex = event.ItemUserEndIndex;
        }
      }, {
        key: "getSlotType",
        value: function getSlotType(slotId, index) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.slotTypeData, function (item) {
            if (item.lookupValueId === slotId) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.allSlotsData[index].slotType = data[0].lookupValueName.toLowerCase();
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "showVehicleInfo",
        value: function showVehicleInfo(index) {
          var _this12 = this;

          var vehicleId = this.allSlotsData[index].vehicleId;
          this.vehicleService.getVehicleByVehicleId(vehicleId).subscribe(function (res) {
            var vehicleData = res[0];
            var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](_this12.vehicleTypeData, function (item) {
              if (item.lookupValueId === vehicleData.vehicleTypeId) {
                return item;
              }
            });

            if (data === undefined || data.length == 0) {
              return '';
            } else {
              vehicleData.type = data[0].lookupValueName;
            }

            _this12.dialog.open(_this12.viewVehicleRef, {
              panelClass: 'material',
              disableClose: true,
              data: vehicleData
            });
          });
        }
      }, {
        key: "showSelectedBlockSlots",
        value: function showSelectedBlockSlots() {
          var _this13 = this;

          this.isBlockSelected = true;
          this.isDataLoaded = false;
          this.allottedSlotListData = [];
          underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.allSlotsData, function (item, index) {
            var data = item.slotName.split(' ');
            var blockName = data[0];

            if (_this13.apartmentBlockNumber == blockName) {
              _this13.allottedSlotListData.push(item);
            }

            _this13.totalUserItems = _this13.allottedSlotListData.length;

            if (_this13.totalUserItems > _this13.itemUserLimit) {
              _this13.ItemUserEndIndex = _this13.itemUserLimit;
            } else {
              _this13.ItemUserEndIndex = _this13.totalUserItems;
            }

            _this13.vehicleService.getAllVehiclesByApartmentBlockUnitId(item.apartmentBlockUnitId).subscribe(function (data) {
              if (data == undefined || data.length == 0) {
                _this13.allSlotsData[index].isVehicleAvailable = false;
              } else {
                _this13.allSlotsData[index].isVehicleAvailable = true;
                _this13.allSlotsData[index].vehicleId = data[0].vehicleId;
              }
            });

            _this13.isDataLoaded = true;
          });
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          var slotParams = {
            LookupTypeId: 18
          }; //get slot type

          this.lookupService.getLookupValueByLookupTypeId(slotParams).subscribe(function (res) {
            _this14.slotTypeData = res;
          }, function (error) {});
          var vehicleParams = {
            LookupTypeId: 2
          }; //get vehicle type

          this.lookupService.getLookupValueByLookupTypeId(vehicleParams).subscribe(function (res) {
            _this14.vehicleTypeData = res;
          }, function (error) {});
          var allSlotParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.vehicleService.getParkingSlotByApartmentId(allSlotParams).subscribe(function (res) {
            _this14.allSlotsData = res.filter(function (item) {
              return item.isActive;
            });
            underscore__WEBPACK_IMPORTED_MODULE_11__["each"](_this14.allSlotsData, function (item, index) {
              _this14.apartmentService.getApartmentBlockUnitById(item.apartmentBlockUnitId).subscribe(function (res) {
                _this14.allSlotsData[index].blockNo = res[0].apartmentBlockNumber;
                _this14.allSlotsData[index].unitNo = res[0].apartmentBlockUnitNumber;

                _this14.apartmentService.getAllApartmentBlockUnitUsersByApartmentBlockUnitId(item.apartmentBlockUnitId).subscribe(function (res) {
                  if (res == undefined || res.length == 0) {
                    return '';
                  } else {
                    var userId = res[0].userId;

                    _this14.userService.getUserById(userId).subscribe(function (res) {
                      _this14.allSlotsData[index].userName = res[0].firstName + ' ' + res[0].lastName;
                      ;
                    });
                  }
                });
              });
            });
          }, function (error) {});
          var blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe(function (res) {
            _this14.blocksData = res;
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return ParkingManagementAllottedComponent;
    }();

    ParkingManagementAllottedComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_5__["ParkingService"]
      }, {
        type: src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_6__["VehicleService"]
      }, {
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewVehicleRef", {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], ParkingManagementAllottedComponent.prototype, "viewVehicleRef", void 0);
    ParkingManagementAllottedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-management-allotted',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-management-allotted.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-management-allotted.component.scss */
      "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_api_controllers_user__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_parking__WEBPACK_IMPORTED_MODULE_5__["ParkingService"], src_app_api_controllers_apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_6__["VehicleService"], src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], ParkingManagementAllottedComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementReportsParkingManagementReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtcmVwb3J0cy9wYXJraW5nLW1hbmFnZW1lbnQtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: ParkingManagementReportsComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementReportsParkingManagementReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementReportsComponent", function () {
      return ParkingManagementReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingManagementReportsComponent =
    /*#__PURE__*/
    function () {
      function ParkingManagementReportsComponent() {
        _classCallCheck(this, ParkingManagementReportsComponent);
      }

      _createClass(ParkingManagementReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingManagementReportsComponent;
    }();

    ParkingManagementReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-management-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-management-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-management-reports.component.scss */
      "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingManagementReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss":
  /*!************************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementSettingsParkingAddSetupVehicleTypeParkingAddSetupVehicleTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtc2V0dGluZ3MvcGFya2luZy1hZGQtc2V0dXAtdmVoaWNsZS10eXBlL3BhcmtpbmctYWRkLXNldHVwLXZlaGljbGUtdHlwZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts":
  /*!**********************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts ***!
    \**********************************************************************************************************************************************************/

  /*! exports provided: ParkingAddSetupVehicleTypeComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementSettingsParkingAddSetupVehicleTypeParkingAddSetupVehicleTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingAddSetupVehicleTypeComponent", function () {
      return ParkingAddSetupVehicleTypeComponent;
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


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var ParkingAddSetupVehicleTypeComponent =
    /*#__PURE__*/
    function () {
      function ParkingAddSetupVehicleTypeComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, ParkingAddSetupVehicleTypeComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.vehicleCategory = "";
        this.toggleDialog = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitConfig = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ParkingAddSetupVehicleTypeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.typeData && this.typeData.valueId) {
            this.vehicleCategory = this.typeData.valueName;
          }
        }
      }, {
        key: "submitAddVehicleForm",
        value: function submitAddVehicleForm() {
          var _this15 = this;

          if (this.config.category != 'edit') {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "lookupTypeId": this.typeId,
              "lookupValueName": this.vehicleCategory,
              "description": this.vehicleCategory,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": 0,
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            var params = {
              lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe(function (res) {
              if (res.message) {
                _this15.sharedService.setAlertMessage("".concat(_this15.config.type, " added successfully"));

                _this15.emitConfig.emit({
                  isAdd: _this15.config.category,
                  type: _this15.typeId
                });
              } else {}
            });
          } else {
            var _details3 = {
              "lookupValueId": this.typeData.valueId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "lookupTypeId": this.typeId,
              "lookupValueName": this.vehicleCategory,
              "description": this.vehicleCategory,
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString()
            };
            var _params4 = {
              lookupvalue: _details3
            };
            this.lookupService.updateLookupValue(_params4).subscribe(function (res) {
              if (res.message) {
                _this15.sharedService.setAlertMessage("Vehicle Type added successfully");

                _this15.emitConfig.emit({
                  isAdd: _this15.config.category,
                  type: _this15.typeId
                });
              } else {}
            });
          }
        }
      }, {
        key: "closeDialog",
        value: function closeDialog(category) {
          this.toggleDialog.emit(category);
        }
      }]);

      return ParkingAddSetupVehicleTypeComponent;
    }();

    ParkingAddSetupVehicleTypeComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ParkingAddSetupVehicleTypeComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ParkingAddSetupVehicleTypeComponent.prototype, "typeId", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ParkingAddSetupVehicleTypeComponent.prototype, "typeData", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ParkingAddSetupVehicleTypeComponent.prototype, "toggleDialog", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], ParkingAddSetupVehicleTypeComponent.prototype, "emitConfig", void 0);
    ParkingAddSetupVehicleTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-add-setup-vehicle-type',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-add-setup-vehicle-type.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-add-setup-vehicle-type.component.scss */
      "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], ParkingAddSetupVehicleTypeComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementSettingsParkingManagementSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtc2V0dGluZ3MvcGFya2luZy1tYW5hZ2VtZW50LXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: ParkingManagementSettingsComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementSettingsParkingManagementSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementSettingsComponent", function () {
      return ParkingManagementSettingsComponent;
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


    var src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/vehicle */
    "./src/app/api/controllers/vehicle.ts");
    /* harmony import */


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");

    var ParkingManagementSettingsComponent =
    /*#__PURE__*/
    function () {
      function ParkingManagementSettingsComponent(injector, vehicleService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ParkingManagementSettingsComponent);

        this.injector = injector;
        this.vehicleService = vehicleService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isVehicleDataLoaded = false;
        this.isSlotMainDataLoaded = false;
        this.isSlotDataLoaded = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(ParkingManagementSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.getVehicleType();
          this.getMainSlotType();
          this.getSlotType(); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
            if (item != null) {
              var params = {
                lookupValueId: item.lookupValueId,
                updateUserId: parseInt(_this16.cookieService.get('userId'))
              };

              _this16.lookupService.deleteLookupvalue(params).subscribe(function (res) {
                // if (res.message) {
                _this16.refreshList({
                  type: item.typeId
                });

                _this16.sharedService.setUnitListDeleteIndex(null); // }

              });
            }
          });
        }
      }, {
        key: "getVehicleType",
        value: function getVehicleType() {
          var _this17 = this;

          var categoryParams = {
            LookupTypeId: 2
          }; //get vehcile type

          this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
            _this17.isVehicleDataLoaded = true;
            _this17.vehicleCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }, {
        key: "getMainSlotType",
        value: function getMainSlotType() {
          var _this18 = this;

          var slotCategoryParams = {
            LookupTypeId: 71
          }; //get main slot type

          this.lookupService.getLookupValueByLookupTypeId(slotCategoryParams).subscribe(function (res) {
            _this18.isSlotMainDataLoaded = true;
            _this18.slotMainCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }, {
        key: "getSlotType",
        value: function getSlotType() {
          var _this19 = this;

          var slotCategoryParams = {
            LookupTypeId: 18
          }; //get slot type

          this.lookupService.getLookupValueByLookupTypeId(slotCategoryParams).subscribe(function (res) {
            _this19.isSlotDataLoaded = true;
            _this19.slotCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
      }, {
        key: "deleteType",
        value: function deleteType(item, typeId) {
          item['typeId'] = typeId;
          this.modalService.showConfirmModal(item);
        }
      }, {
        key: "refreshList",
        value: function refreshList(e) {
          if (e.type == 2) {
            this.getVehicleType();
          } else if (e.type == 71) {
            this.getMainSlotType();
          } else {
            this.getSlotType();
          }
        }
      }]);

      return ParkingManagementSettingsComponent;
    }();

    ParkingManagementSettingsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]
      }, {
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    ParkingManagementSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-management-settings',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-management-settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-management-settings.component.scss */
      "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_vehicle__WEBPACK_IMPORTED_MODULE_2__["VehicleService"], src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], ParkingManagementSettingsComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementSlotTypesParkingManagementSlotTypesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtc2xvdC10eXBlcy9wYXJraW5nLW1hbmFnZW1lbnQtc2xvdC10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: ParkingManagementSlotTypesComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementSlotTypesParkingManagementSlotTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementSlotTypesComponent", function () {
      return ParkingManagementSlotTypesComponent;
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


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var ParkingManagementSlotTypesComponent =
    /*#__PURE__*/
    function () {
      function ParkingManagementSlotTypesComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, ParkingManagementSlotTypesComponent);

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

      _createClass(ParkingManagementSlotTypesComponent, [{
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "addNewSlotType",
        value: function addNewSlotType() {
          this.isSlotTypeNew = true;
          this.isSlotTypeUpdate = false;
          setTimeout(function () {
            var elem = document.querySelector('.slot-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "updateSlotType",
        value: function updateSlotType(item) {
          this.isSlotTypeUpdate = true;
          this.isSlotTypeNew = false;
          this.slot.slotMainType = item.lookupValueName;
          this.slot.slotType = item.description;
          this.slotTypeUpdateId = item.lookupValueId;
          setTimeout(function () {
            var elem = document.querySelector('.slot-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "deleteSlotType",
        value: function deleteSlotType(item, index) {
          var _this20 = this;

          this.isDataLoaded = false;
          var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
          };
          this.lookupService.deleteLookupvalue(params).subscribe(function (res) {
            _this20.getSlotType(); // this.slotDataList.splice(index, 1);
            // this.isDataLoaded = true;

          });
        }
      }, {
        key: "removeSlotTypeBox",
        value: function removeSlotTypeBox() {
          this.isSlotTypeNew = false;
          this.isSlotTypeUpdate = false;
          this.isError = false;
          setTimeout(function () {
            var elem = document.querySelector('.slot-type-table-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "submitAddSlotTypeForm",
        value: function submitAddSlotTypeForm(form) {
          var _this21 = this;

          this.isSlotTypeSubmitted = false;

          if (this.isSlotTypeNew) {
            var details = {
              "lookupTypeId": 18,
              "lookupValueName": this.slot.slotMainType,
              "description": this.slot.slotType,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": 0,
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            var params = {
              lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe(function (res) {
              if (res.message) {
                _this21.isSlotTypeSubmitted = true;

                _this21.sharedService.setAlertMessage("Slot Type added successfully");

                _this21.isSlotTypeNew = !_this21.isSlotTypeNew;

                _this21.getSlotType();
              } else {
                _this21.isSlotTypeSubmitted = true;
                _this21.isError = true;
                _this21.alertMessage = res.errorMessage;
              }
            });
          } else {
            var _details4 = {
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
            var _params5 = {
              lookupvalue: _details4
            };
            this.lookupService.updateLookupValue(_params5).subscribe(function (res) {
              if (res.message) {
                _this21.isSlotTypeSubmitted = true;

                _this21.sharedService.setAlertMessage("Vehicle Type updated successfully");

                _this21.isSlotTypeUpdate = !_this21.isSlotTypeUpdate;

                _this21.getSlotType();
              } else {
                _this21.isSlotTypeSubmitted = true;
                _this21.isError = true;
                _this21.alertMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.getSlotType();
          var slotMainParams = {
            LookupTypeId: 71
          };
          this.lookupService.getLookupValueByLookupTypeId(slotMainParams).subscribe(function (res) {
            _this22.slotMainTypeDataList = res.filter(function (item) {
              return item.isActive;
            });
          });
        }
        /**
         * Get Slot Type
         */

      }, {
        key: "getSlotType",
        value: function getSlotType() {
          var _this23 = this;

          var slotListParams = {
            LookupTypeId: 18
          };
          this.lookupService.getLookupValueByLookupTypeId(slotListParams).subscribe(function (res) {
            _this23.slotDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this23.totalItems = _this23.slotDataList.length;

            if (_this23.totalItems > _this23.itemLimit) {
              _this23.ItemEndIndex = _this23.itemLimit;
            } else {
              _this23.ItemEndIndex = _this23.totalItems;
            }

            _this23.isDataLoaded = true;
          });
        }
      }]);

      return ParkingManagementSlotTypesComponent;
    }();

    ParkingManagementSlotTypesComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    ParkingManagementSlotTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-management-slot-types',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-management-slot-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-management-slot-types.component.scss */
      "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], ParkingManagementSlotTypesComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementUnallottedParkingManagementUnallottedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtdW5hbGxvdHRlZC9wYXJraW5nLW1hbmFnZW1lbnQtdW5hbGxvdHRlZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: ParkingManagementUnallottedComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementUnallottedParkingManagementUnallottedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementUnallottedComponent", function () {
      return ParkingManagementUnallottedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingManagementUnallottedComponent =
    /*#__PURE__*/
    function () {
      function ParkingManagementUnallottedComponent() {
        _classCallCheck(this, ParkingManagementUnallottedComponent);
      }

      _createClass(ParkingManagementUnallottedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingManagementUnallottedComponent;
    }();

    ParkingManagementUnallottedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-management-unallotted',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-management-unallotted.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-management-unallotted.component.scss */
      "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingManagementUnallottedComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss":
  /*!************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementVehicleTypesParkingManagementVehicleTypesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLW1hbmFnZW1lbnQtdmVoaWNsZS10eXBlcy9wYXJraW5nLW1hbmFnZW1lbnQtdmVoaWNsZS10eXBlcy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: ParkingManagementVehicleTypesComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingManagementVehicleTypesParkingManagementVehicleTypesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementVehicleTypesComponent", function () {
      return ParkingManagementVehicleTypesComponent;
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


    var src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/lookup */
    "./src/app/api/controllers/lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var ParkingManagementVehicleTypesComponent =
    /*#__PURE__*/
    function () {
      function ParkingManagementVehicleTypesComponent(injector, lookupService, sharedService, cookieService) {
        _classCallCheck(this, ParkingManagementVehicleTypesComponent);

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

      _createClass(ParkingManagementVehicleTypesComponent, [{
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "addNewVehicleType",
        value: function addNewVehicleType() {
          this.isVehicleTypeNew = true;
          this.isVehicleTypeUpdate = false;
          setTimeout(function () {
            var elem = document.querySelector('.vehicle-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "updateVehicleType",
        value: function updateVehicleType(item) {
          this.isVehicleTypeUpdate = true;
          this.isVehicleTypeNew = false;
          this.vehicleType = item.lookupValueName;
          this.vehicleTypeUpdateId = item.lookupValueId;
          setTimeout(function () {
            var elem = document.querySelector('.vehicle-type-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "deleteVehicleType",
        value: function deleteVehicleType(item) {
          this.modalService.showConfirmModal(item);
        }
      }, {
        key: "removeVehicleTypeBox",
        value: function removeVehicleTypeBox() {
          this.isVehicleTypeNew = false;
          this.isVehicleTypeUpdate = false;
          this.isError = false;
          setTimeout(function () {
            var elem = document.querySelector('.vehicle-type-table-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "submitAddvehicleTypeForm",
        value: function submitAddvehicleTypeForm(form) {
          var _this24 = this;

          this.isVehicleTypeSubmitted = false;

          if (this.isVehicleTypeNew) {
            var details = {
              "lookupTypeId": 2,
              "lookupValueName": this.vehicleType,
              "description": this.vehicleType,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": 0,
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            var params = {
              lookupvalue: details
            };
            this.lookupService.addLookupValue(params).subscribe(function (res) {
              if (res.message) {
                _this24.isVehicleTypeSubmitted = true;

                _this24.sharedService.setAlertMessage("Vehicle Type added successfully");

                _this24.isVehicleTypeNew = !_this24.isVehicleTypeNew;

                _this24.getVehicleTypeList(); // this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res:any) => {
                //   this.vehicleDataList = res.filter(item => {
                //       return item.isActive;
                //   });  
                // });

              } else {
                _this24.isVehicleTypeSubmitted = true;
                _this24.isError = true;
                _this24.alertMessage = res.errorMessage;
              }
            });
          } else {
            var _details5 = {
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
            var _params6 = {
              lookupvalue: _details5
            };
            this.lookupService.updateLookupValue(_params6).subscribe(function (res) {
              if (res.message) {
                _this24.isVehicleTypeSubmitted = true;
                _this24.isVehicleTypeUpdate = !_this24.isVehicleTypeUpdate;

                _this24.sharedService.setAlertMessage("Vehicle Type updated successfully");

                _this24.getVehicleTypeList(); // this.lookupService.getLookupValueByLookupTypeId(2).subscribe((res:any) => {
                //   this.vehicleDataList = res.filter(item => {
                //       return item.isActive;
                //   });   
                // });

              } else {
                _this24.isVehicleTypeSubmitted = true;
                _this24.isError = true;
                _this24.alertMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.getVehicleTypeList(); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
            if (item != null) {
              // this.isDataLoaded = false;
              var params = {
                lookupValueId: item.lookupValueId,
                updateUserId: parseInt(_this25.cookieService.get('userId'))
              };

              _this25.lookupService.deleteLookupvalue(params).subscribe(function (res) {
                _this25.vehicleDataList = _this25.vehicleDataList.filter(function (type) {
                  return type.lookupValueId !== item.lookupValueId;
                });

                _this25.sharedService.setUnitListDeleteIndex(null);

                _this25.getVehicleTypeList(); // this.isDataLoaded = true;

              });
            }
          });
        }
        /**
         * Get Vehilce Type List
         */

      }, {
        key: "getVehicleTypeList",
        value: function getVehicleTypeList() {
          var _this26 = this;

          var vehicleDataListParams = {
            LookupTypeId: 2
          };
          this.lookupService.getLookupValueByLookupTypeId(vehicleDataListParams).subscribe(function (res) {
            _this26.vehicleDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this26.totalItems = _this26.vehicleDataList.length;

            if (_this26.totalItems > _this26.itemLimit) {
              _this26.ItemEndIndex = _this26.itemLimit;
            } else {
              _this26.ItemEndIndex = _this26.totalItems;
            }

            _this26.isDataLoaded = true;
          });
        }
      }]);

      return ParkingManagementVehicleTypesComponent;
    }();

    ParkingManagementVehicleTypesComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    ParkingManagementVehicleTypesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-management-vehicle-types',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-management-vehicle-types.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-management-vehicle-types.component.scss */
      "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], ParkingManagementVehicleTypesComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.scss":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-setup/parking-setup.component.scss ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingSetupParkingSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLXNldHVwL3Bhcmtpbmctc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ParkingSetupComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingSetupParkingSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingSetupComponent", function () {
      return ParkingSetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingSetupComponent =
    /*#__PURE__*/
    function () {
      function ParkingSetupComponent() {
        _classCallCheck(this, ParkingSetupComponent);
      }

      _createClass(ParkingSetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navArray = [{
            link: 'settings',
            name: 'General'
          }, {
            link: 'parking-slot-rate',
            name: 'Slot Rate'
          }];
        }
      }]);

      return ParkingSetupComponent;
    }();

    ParkingSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-setup/parking-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-setup.component.scss */
      "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.scss"))["default"]]
    })], ParkingSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingSlotRateParkingSlotRateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLXNsb3QtcmF0ZS9wYXJraW5nLXNsb3QtcmF0ZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ParkingSlotRateComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingSlotRateParkingSlotRateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingSlotRateComponent", function () {
      return ParkingSlotRateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingSlotRateComponent =
    /*#__PURE__*/
    function () {
      function ParkingSlotRateComponent() {
        _classCallCheck(this, ParkingSlotRateComponent);
      }

      _createClass(ParkingSlotRateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingSlotRateComponent;
    }();

    ParkingSlotRateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-slot-rate',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-slot-rate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-slot-rate.component.scss */
      "./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingSlotRateComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsParkingViewAvailableSlotsParkingViewAvailableSlotsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9wYXJraW5nLXZpZXctYXZhaWxhYmxlLXNsb3RzL3Bhcmtpbmctdmlldy1hdmFpbGFibGUtc2xvdHMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts":
  /*!**************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts ***!
    \**************************************************************************************************************************/

  /*! exports provided: ParkingViewAvailableSlotsComponent */

  /***/
  function srcAppAmsParkingManagementComponentsParkingViewAvailableSlotsParkingViewAvailableSlotsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingViewAvailableSlotsComponent", function () {
      return ParkingViewAvailableSlotsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingViewAvailableSlotsComponent =
    /*#__PURE__*/
    function () {
      function ParkingViewAvailableSlotsComponent() {
        _classCallCheck(this, ParkingViewAvailableSlotsComponent);
      }

      _createClass(ParkingViewAvailableSlotsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingViewAvailableSlotsComponent;
    }();

    ParkingViewAvailableSlotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-view-available-slots',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-view-available-slots.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-view-available-slots.component.scss */
      "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingViewAvailableSlotsComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.scss":
  /*!******************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.scss ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablityCommunityParkingAvailablityCommunityParkingAvailablityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9zZXQtcGFya2luZy1hdmFpbGFibGl0eS9jb21tdW5pdHktcGFya2luZy1hdmFpbGFibGl0eS9jb21tdW5pdHktcGFya2luZy1hdmFpbGFibGl0eS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts":
  /*!****************************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: CommunityParkingAvailablityComponent */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablityCommunityParkingAvailablityCommunityParkingAvailablityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommunityParkingAvailablityComponent", function () {
      return CommunityParkingAvailablityComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var CommunityParkingAvailablityComponent =
    /*#__PURE__*/
    function () {
      function CommunityParkingAvailablityComponent() {
        _classCallCheck(this, CommunityParkingAvailablityComponent);
      }

      _createClass(CommunityParkingAvailablityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.unitAllocationHeader = [{
            text: 'SLOT NO',
            datafield: 'slotType',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'SLOT BLOCK',
            datafield: 'slotBlockNo',
            minwidth: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'SLOT UNIT',
            datafield: 'tempBlock',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'FULL NAME',
            datafield: 'tempUnit',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'START DATE',
            datafield: 'startDateTime',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'START TIME',
            datafield: 'endDateTime',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'END DATE',
            datafield: 'slotRateType',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'END TIME',
            datafield: 'price',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'CREATED BY',
            cellsalign: 'status',
            align: 'center',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }]; //  var ticketListData = res.filter(data => {
          //   return data.isActive
          // })

          var localData = [{
            slotType: 'Unit Owned',
            slotBlockNo: '1001',
            tempBlock: 'Temp Block',
            tempUnit: 'Temp Unit',
            startDateTime: "Start Date Time",
            endDateTime: "End Date Time",
            slotRateType: "Slot Rate Type",
            Price: '1000',
            status: 'Active'
          }];
          this.gridSourceData = {
            localdata: localData,
            datatype: "array"
          };
          this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
        }
      }]);

      return CommunityParkingAvailablityComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], CommunityParkingAvailablityComponent.prototype, "datagrid", void 0);
    CommunityParkingAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-community-parking-availablity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./community-parking-availablity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./community-parking-availablity.component.scss */
      "./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CommunityParkingAvailablityComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.scss":
  /*!********************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.scss ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablityCreateAvailablityCreateAvailablityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9zZXQtcGFya2luZy1hdmFpbGFibGl0eS9jcmVhdGUtYXZhaWxhYmxpdHkvY3JlYXRlLWF2YWlsYWJsaXR5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: CreateAvailablityComponent */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablityCreateAvailablityCreateAvailablityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAvailablityComponent", function () {
      return CreateAvailablityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CreateAvailablityComponent =
    /*#__PURE__*/
    function () {
      function CreateAvailablityComponent() {
        _classCallCheck(this, CreateAvailablityComponent);
      }

      _createClass(CreateAvailablityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CreateAvailablityComponent;
    }();

    CreateAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-availablity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-availablity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-availablity.component.scss */
      "./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CreateAvailablityComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.scss":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.scss ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablitySetParkingAvailablityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9zZXQtcGFya2luZy1hdmFpbGFibGl0eS9zZXQtcGFya2luZy1hdmFpbGFibGl0eS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: SetParkingAvailablityComponent */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablitySetParkingAvailablityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetParkingAvailablityComponent", function () {
      return SetParkingAvailablityComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SetParkingAvailablityComponent =
    /*#__PURE__*/
    function () {
      function SetParkingAvailablityComponent() {
        _classCallCheck(this, SetParkingAvailablityComponent);
      }

      _createClass(SetParkingAvailablityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navArray = [{
            link: 'unit-parking-availablity',
            name: 'Set Availablity For Unit Parking'
          }, {
            link: 'community-parking-availablity',
            name: 'Set Availablity For Community Parking'
          }];
        }
      }]);

      return SetParkingAvailablityComponent;
    }();

    SetParkingAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-set-parking-availablity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./set-parking-availablity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./set-parking-availablity.component.scss */
      "./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SetParkingAvailablityComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.scss":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.scss ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablityUnitParkingAvailablityUnitParkingAvailablityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvY29tcG9uZW50cy9zZXQtcGFya2luZy1hdmFpbGFibGl0eS91bml0LXBhcmtpbmctYXZhaWxhYmxpdHkvdW5pdC1wYXJraW5nLWF2YWlsYWJsaXR5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts":
  /*!******************************************************************************************************************************************!*\
    !*** ./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts ***!
    \******************************************************************************************************************************************/

  /*! exports provided: UnitParkingAvailablityComponent */

  /***/
  function srcAppAmsParkingManagementComponentsSetParkingAvailablityUnitParkingAvailablityUnitParkingAvailablityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnitParkingAvailablityComponent", function () {
      return UnitParkingAvailablityComponent;
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var UnitParkingAvailablityComponent =
    /*#__PURE__*/
    function () {
      function UnitParkingAvailablityComponent() {
        _classCallCheck(this, UnitParkingAvailablityComponent);
      }

      _createClass(UnitParkingAvailablityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var cellsrenderer = function cellsrenderer(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrenderer = function columnrenderer(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          };

          this.unitAllocationHeader = [{
            text: 'SLOT NO',
            datafield: 'slotType',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'SLOT BLOCK',
            datafield: 'slotBlockNo',
            minwidth: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'SLOT UNIT',
            datafield: 'tempBlock',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'FULL NAME',
            datafield: 'tempUnit',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'START DATE',
            datafield: 'startDateTime',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'START TIME',
            datafield: 'endDateTime',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'END DATE',
            datafield: 'slotRateType',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'END TIME',
            datafield: 'price',
            cellsrenderer: cellsrenderer,
            minwidth: 100,
            renderer: columnrenderer
          }, {
            text: 'CREATED BY',
            cellsalign: 'status',
            align: 'center',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }]; //  var ticketListData = res.filter(data => {
          //   return data.isActive
          // })

          var localData = [{
            slotType: 'Unit Owned',
            slotBlockNo: '1001',
            tempBlock: 'Temp Block',
            tempUnit: 'Temp Unit',
            startDateTime: "Start Date Time",
            endDateTime: "End Date Time",
            slotRateType: "Slot Rate Type",
            Price: '1000',
            status: 'Active'
          }];
          this.gridSourceData = {
            localdata: localData,
            datatype: "array"
          };
          this.unitAllocationData = new jqx.dataAdapter(this.gridSourceData);
        }
      }]);

      return UnitParkingAvailablityComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], UnitParkingAvailablityComponent.prototype, "datagrid", void 0);
    UnitParkingAvailablityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-unit-parking-availablity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./unit-parking-availablity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./unit-parking-availablity.component.scss */
      "./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UnitParkingAvailablityComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/parking-management-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/ams/parking-management/parking-management-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ParkingManagementRoutingModule */

  /***/
  function srcAppAmsParkingManagementParkingManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementRoutingModule", function () {
      return ParkingManagementRoutingModule;
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


    var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../.././auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/parking-management-settings/parking-management-settings.component */
    "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts");
    /* harmony import */


    var _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/parking-management-allotted/parking-management-allotted.component */
    "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts");
    /* harmony import */


    var _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/parking-management-unallotted/parking-management-unallotted.component */
    "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts");
    /* harmony import */


    var _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/parking-management-reports/parking-management-reports.component */
    "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts");
    /* harmony import */


    var _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/add-slot-container/add-slot-container.component */
    "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts");
    /* harmony import */


    var _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/parking-manage-parking-slots/parking-manage-parking-slots.component */
    "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts");
    /* harmony import */


    var _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/parking-create-parking-slot/parking-create-parking-slot.component */
    "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts");
    /* harmony import */


    var _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/parking-allocate-slots/parking-allocate-slots.component */
    "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts");
    /* harmony import */


    var _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/parking-manage-allocated-slots/parking-manage-allocated-slots.component */
    "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts");
    /* harmony import */


    var _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/parking-create-parking-booking/parking-create-parking-booking.component */
    "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts");
    /* harmony import */


    var _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/parking-view-available-slots/parking-view-available-slots.component */
    "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts");
    /* harmony import */


    var _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/parking-manage-booking/parking-manage-booking.component */
    "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts");
    /* harmony import */


    var _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/parking-admin-view-booking/parking-admin-view-booking.component */
    "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts");
    /* harmony import */


    var _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/parking-setup/parking-setup.component */
    "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts");
    /* harmony import */


    var _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/add-vehicle/add-vehicle.component */
    "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts");
    /* harmony import */


    var _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/parking-slot-rate/parking-slot-rate.component */
    "./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts");
    /* harmony import */


    var _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/set-parking-availablity/set-parking-availablity.component */
    "./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts");
    /* harmony import */


    var _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component */
    "./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts");
    /* harmony import */


    var _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component */
    "./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, // { path: 'settings', component: ParkingManagementSettingsComponent},
    {
      path: 'setup',
      component: _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_21__["ParkingSetupComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      }, {
        path: 'settings',
        component: _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_4__["ParkingManagementSettingsComponent"]
      }, {
        path: 'parking-slot-rate',
        component: _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_23__["ParkingSlotRateComponent"]
      }]
    }, {
      path: 'manage-parking-slots',
      component: _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_9__["ParkingManageParkingSlotsComponent"]
    }, {
      path: 'create-parking-slot',
      component: _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_10__["ParkingCreateParkingSlotComponent"]
    }, {
      path: 'edit-parking-slot/:id',
      component: _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_10__["ParkingCreateParkingSlotComponent"]
    }, {
      path: 'manage-allocated-slots',
      component: _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_12__["ParkingManageAllocatedSlotsComponent"]
    }, {
      path: 'allocate-slots',
      component: _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_11__["ParkingAllocateSlotsComponent"]
    }, {
      path: 'manage-allocate-availability-list',
      component: _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_13__["ParkingManageAllocateAvailabilityListComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'unit-to-unit-allocation',
        pathMatch: 'full'
      }, {
        path: 'unit-to-community',
        component: _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_17__["ParkingAaUnitToCommunityComponent"]
      }, {
        path: 'community-to-others',
        component: _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_18__["ParkingAaCommunityToOthersComponent"]
      }, {
        path: 'unit-to-unit-allocation',
        component: _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_16__["ParkingAaUnitToUnitAllocationComponent"]
      }, {
        path: '**',
        redirectTo: 'unit-to-unit-allocation',
        pathMatch: 'full'
      }]
    }, {
      path: 'set-parking-availablity',
      component: _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_24__["SetParkingAvailablityComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'unit-parking-availablity',
        pathMatch: 'full'
      }, {
        path: 'unit-parking-availablity',
        component: _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_25__["UnitParkingAvailablityComponent"]
      }, {
        path: 'community-parking-availablity',
        component: _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_26__["CommunityParkingAvailablityComponent"]
      }, {
        path: '**',
        redirectTo: 'unit-parking-availablity',
        pathMatch: 'full'
      }]
    }, {
      path: 'manage-booking-slots',
      component: _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_19__["ParkingManageBookingComponent"]
    }, {
      path: 'view-booking',
      component: _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_20__["ParkingAdminViewBookingComponent"]
    }, {
      path: 'create-parking-booking',
      component: _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_14__["ParkingCreateParkingBookingComponent"]
    }, {
      path: 'view-available-slots',
      component: _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_15__["ParkingViewAvailableSlotsComponent"]
    }, {
      path: 'manage-booking-slots',
      component: _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_19__["ParkingManageBookingComponent"]
    }, {
      path: 'allotted',
      component: _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementAllottedComponent"]
    }, {
      path: 'unallotted',
      component: _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_6__["ParkingManagementUnallottedComponent"]
    }, {
      path: 'reports',
      component: _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_7__["ParkingManagementReportsComponent"]
    }, {
      path: 'add-slot',
      component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__["AddSlotContainerComponent"]
    }, {
      path: 'edit-slot/:id',
      component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__["AddSlotContainerComponent"]
    }, {
      path: 'add-vehicle/:slotid',
      component: _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_22__["AddVehicleComponent"]
    }, {
      path: 'edit-vehicle/:id',
      component: _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_22__["AddVehicleComponent"]
    }, {
      path: 'edit-allotted-slot/:id',
      component: _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_8__["AddSlotContainerComponent"]
    }, {
      path: 'create-parking-booking',
      component: _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_14__["ParkingCreateParkingBookingComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var ParkingManagementRoutingModule = function ParkingManagementRoutingModule() {
      _classCallCheck(this, ParkingManagementRoutingModule);
    };

    ParkingManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ParkingManagementRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/parking-management.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/ams/parking-management/parking-management.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsParkingManagementParkingManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9wYXJraW5nLW1hbmFnZW1lbnQvcGFya2luZy1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/parking-management/parking-management.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/ams/parking-management/parking-management.component.ts ***!
    \************************************************************************/

  /*! exports provided: ParkingManagementComponent */

  /***/
  function srcAppAmsParkingManagementParkingManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementComponent", function () {
      return ParkingManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ParkingManagementComponent =
    /*#__PURE__*/
    function () {
      function ParkingManagementComponent() {
        _classCallCheck(this, ParkingManagementComponent);
      }

      _createClass(ParkingManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ParkingManagementComponent;
    }();

    ParkingManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-parking-management',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./parking-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/parking-management/parking-management.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./parking-management.component.scss */
      "./src/app/ams/parking-management/parking-management.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ParkingManagementComponent);
    /***/
  },

  /***/
  "./src/app/ams/parking-management/parking-management.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/ams/parking-management/parking-management.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ParkingManagementModule */

  /***/
  function srcAppAmsParkingManagementParkingManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParkingManagementModule", function () {
      return ParkingManagementModule;
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


    var _parking_management_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./parking-management-routing.module */
    "./src/app/ams/parking-management/parking-management-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _parking_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./parking-management.component */
    "./src/app/ams/parking-management/parking-management.component.ts");
    /* harmony import */


    var _components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/parking-management-settings/parking-management-settings.component */
    "./src/app/ams/parking-management/components/parking-management-settings/parking-management-settings.component.ts");
    /* harmony import */


    var _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/parking-management-allotted/parking-management-allotted.component */
    "./src/app/ams/parking-management/components/parking-management-allotted/parking-management-allotted.component.ts");
    /* harmony import */


    var _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/parking-management-unallotted/parking-management-unallotted.component */
    "./src/app/ams/parking-management/components/parking-management-unallotted/parking-management-unallotted.component.ts");
    /* harmony import */


    var _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/parking-management-reports/parking-management-reports.component */
    "./src/app/ams/parking-management/components/parking-management-reports/parking-management-reports.component.ts");
    /* harmony import */


    var _components_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/add-slot/add-slot.component */
    "./src/app/ams/parking-management/components/add-slot/add-slot.component.ts");
    /* harmony import */


    var _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/add-slot-container/add-slot-container.component */
    "./src/app/ams/parking-management/components/add-slot-container/add-slot-container.component.ts");
    /* harmony import */


    var _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/parking-manage-parking-slots/parking-manage-parking-slots.component */
    "./src/app/ams/parking-management/components/parking-manage-parking-slots/parking-manage-parking-slots.component.ts");
    /* harmony import */


    var _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/parking-create-parking-slot/parking-create-parking-slot.component */
    "./src/app/ams/parking-management/components/parking-create-parking-slot/parking-create-parking-slot.component.ts");
    /* harmony import */


    var _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/parking-allocate-slots/parking-allocate-slots.component */
    "./src/app/ams/parking-management/components/parking-allocate-slots/parking-allocate-slots.component.ts");
    /* harmony import */


    var _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/parking-manage-allocated-slots/parking-manage-allocated-slots.component */
    "./src/app/ams/parking-management/components/parking-manage-allocated-slots/parking-manage-allocated-slots.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-manage-allocate-availability-list.component.ts");
    /* harmony import */


    var _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/parking-create-parking-booking/parking-create-parking-booking.component */
    "./src/app/ams/parking-management/components/parking-create-parking-booking/parking-create-parking-booking.component.ts");
    /* harmony import */


    var _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/parking-view-available-slots/parking-view-available-slots.component */
    "./src/app/ams/parking-management/components/parking-view-available-slots/parking-view-available-slots.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-unit-allocation/parking-aa-unit-to-unit-allocation.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-unit-to-community/parking-aa-unit-to-community.component.ts");
    /* harmony import */


    var _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component */
    "./src/app/ams/parking-management/components/parking-manage-allocate-availability-list/parking-aa-community-to-others/parking-aa-community-to-others.component.ts");
    /* harmony import */


    var _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/parking-manage-booking/parking-manage-booking.component */
    "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking.component.ts");
    /* harmony import */


    var _components_parking_manage_booking_parking_manage_booking_community_to_other_parking_manage_booking_community_to_other_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component */
    "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-community-to-other/parking-manage-booking-community-to-other.component.ts");
    /* harmony import */


    var _components_parking_manage_booking_parking_manage_booking_unit_to_community_parking_manage_booking_unit_to_community_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component */
    "./src/app/ams/parking-management/components/parking-manage-booking/parking-manage-booking-unit-to-community/parking-manage-booking-unit-to-community.component.ts");
    /* harmony import */


    var _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/parking-admin-view-booking/parking-admin-view-booking.component */
    "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-admin-view-booking.component.ts");
    /* harmony import */


    var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_unit_parking_booking_view_community_owned_to_unit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component */
    "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-unit/parking-booking-view-community-owned-to-unit.component.ts");
    /* harmony import */


    var _components_parking_admin_view_booking_parking_booking_view_community_owned_to_vistor_parking_booking_view_community_owned_to_vistor_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component */
    "./src/app/ams/parking-management/components/parking-admin-view-booking/parking-booking-view-community-owned-to-vistor/parking-booking-view-community-owned-to-vistor.component.ts");
    /* harmony import */


    var _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/parking-setup/parking-setup.component */
    "./src/app/ams/parking-management/components/parking-setup/parking-setup.component.ts");
    /* harmony import */


    var _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/add-vehicle/add-vehicle.component */
    "./src/app/ams/parking-management/components/add-vehicle/add-vehicle.component.ts");
    /* harmony import */


    var _components_parking_management_settings_parking_add_setup_vehicle_type_parking_add_setup_vehicle_type_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component */
    "./src/app/ams/parking-management/components/parking-management-settings/parking-add-setup-vehicle-type/parking-add-setup-vehicle-type.component.ts");
    /* harmony import */


    var _components_parking_management_vehicle_types_parking_management_vehicle_types_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/parking-management-vehicle-types/parking-management-vehicle-types.component */
    "./src/app/ams/parking-management/components/parking-management-vehicle-types/parking-management-vehicle-types.component.ts");
    /* harmony import */


    var _components_parking_management_slot_types_parking_management_slot_types_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/parking-management-slot-types/parking-management-slot-types.component */
    "./src/app/ams/parking-management/components/parking-management-slot-types/parking-management-slot-types.component.ts");
    /* harmony import */


    var _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/parking-slot-rate/parking-slot-rate.component */
    "./src/app/ams/parking-management/components/parking-slot-rate/parking-slot-rate.component.ts");
    /* harmony import */


    var _components_allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/allocated-slot-confirmation/allocated-slot-confirmation.component */
    "./src/app/ams/parking-management/components/allocated-slot-confirmation/allocated-slot-confirmation.component.ts");
    /* harmony import */


    var _components_parking_manage_booking_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/parking-manage-booking/booking-confirmation/booking-confirmation.component */
    "./src/app/ams/parking-management/components/parking-manage-booking/booking-confirmation/booking-confirmation.component.ts");
    /* harmony import */


    var _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/set-parking-availablity/set-parking-availablity.component */
    "./src/app/ams/parking-management/components/set-parking-availablity/set-parking-availablity.component.ts");
    /* harmony import */


    var _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component */
    "./src/app/ams/parking-management/components/set-parking-availablity/unit-parking-availablity/unit-parking-availablity.component.ts");
    /* harmony import */


    var _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component */
    "./src/app/ams/parking-management/components/set-parking-availablity/community-parking-availablity/community-parking-availablity.component.ts");
    /* harmony import */


    var _components_set_parking_availablity_create_availablity_create_availablity_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/set-parking-availablity/create-availablity/create-availablity.component */
    "./src/app/ams/parking-management/components/set-parking-availablity/create-availablity/create-availablity.component.ts");

    var ParkingManagementModule = function ParkingManagementModule() {
      _classCallCheck(this, ParkingManagementModule);
    };

    ParkingManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_parking_management_settings_parking_management_settings_component__WEBPACK_IMPORTED_MODULE_6__["ParkingManagementSettingsComponent"], _components_parking_management_allotted_parking_management_allotted_component__WEBPACK_IMPORTED_MODULE_7__["ParkingManagementAllottedComponent"], _components_parking_management_unallotted_parking_management_unallotted_component__WEBPACK_IMPORTED_MODULE_8__["ParkingManagementUnallottedComponent"], _components_parking_management_reports_parking_management_reports_component__WEBPACK_IMPORTED_MODULE_9__["ParkingManagementReportsComponent"], _parking_management_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementComponent"], _components_parking_manage_parking_slots_parking_manage_parking_slots_component__WEBPACK_IMPORTED_MODULE_12__["ParkingManageParkingSlotsComponent"], _components_parking_create_parking_slot_parking_create_parking_slot_component__WEBPACK_IMPORTED_MODULE_13__["ParkingCreateParkingSlotComponent"], _components_parking_allocate_slots_parking_allocate_slots_component__WEBPACK_IMPORTED_MODULE_14__["ParkingAllocateSlotsComponent"], _components_parking_manage_allocated_slots_parking_manage_allocated_slots_component__WEBPACK_IMPORTED_MODULE_15__["ParkingManageAllocatedSlotsComponent"], _components_parking_manage_allocate_availability_list_parking_manage_allocate_availability_list_component__WEBPACK_IMPORTED_MODULE_16__["ParkingManageAllocateAvailabilityListComponent"], _components_parking_create_parking_booking_parking_create_parking_booking_component__WEBPACK_IMPORTED_MODULE_17__["ParkingCreateParkingBookingComponent"], _components_parking_view_available_slots_parking_view_available_slots_component__WEBPACK_IMPORTED_MODULE_18__["ParkingViewAvailableSlotsComponent"], _components_parking_manage_booking_parking_manage_booking_component__WEBPACK_IMPORTED_MODULE_22__["ParkingManageBookingComponent"], _components_parking_manage_allocate_availability_list_parking_aa_unit_to_unit_allocation_parking_aa_unit_to_unit_allocation_component__WEBPACK_IMPORTED_MODULE_19__["ParkingAaUnitToUnitAllocationComponent"], _components_parking_manage_allocate_availability_list_parking_aa_unit_to_community_parking_aa_unit_to_community_component__WEBPACK_IMPORTED_MODULE_20__["ParkingAaUnitToCommunityComponent"], _components_parking_manage_allocate_availability_list_parking_aa_community_to_others_parking_aa_community_to_others_component__WEBPACK_IMPORTED_MODULE_21__["ParkingAaCommunityToOthersComponent"], _components_parking_manage_booking_parking_manage_booking_community_to_other_parking_manage_booking_community_to_other_component__WEBPACK_IMPORTED_MODULE_23__["ParkingManageBookingCommunityToOtherComponent"], _components_parking_manage_booking_parking_manage_booking_unit_to_community_parking_manage_booking_unit_to_community_component__WEBPACK_IMPORTED_MODULE_24__["ParkingManageBookingUnitToCommunityComponent"], _components_parking_admin_view_booking_parking_admin_view_booking_component__WEBPACK_IMPORTED_MODULE_25__["ParkingAdminViewBookingComponent"], _components_parking_admin_view_booking_parking_booking_view_community_owned_to_unit_parking_booking_view_community_owned_to_unit_component__WEBPACK_IMPORTED_MODULE_26__["ParkingBookingViewCommunityOwnedToUnitComponent"], _components_parking_admin_view_booking_parking_booking_view_community_owned_to_vistor_parking_booking_view_community_owned_to_vistor_component__WEBPACK_IMPORTED_MODULE_27__["ParkingBookingViewCommunityOwnedToVistorComponent"], _components_parking_setup_parking_setup_component__WEBPACK_IMPORTED_MODULE_28__["ParkingSetupComponent"], _components_add_slot_add_slot_component__WEBPACK_IMPORTED_MODULE_10__["AddSlotComponent"], _components_add_slot_container_add_slot_container_component__WEBPACK_IMPORTED_MODULE_11__["AddSlotContainerComponent"], _components_add_vehicle_add_vehicle_component__WEBPACK_IMPORTED_MODULE_29__["AddVehicleComponent"], _components_parking_management_settings_parking_add_setup_vehicle_type_parking_add_setup_vehicle_type_component__WEBPACK_IMPORTED_MODULE_30__["ParkingAddSetupVehicleTypeComponent"], _components_parking_management_vehicle_types_parking_management_vehicle_types_component__WEBPACK_IMPORTED_MODULE_31__["ParkingManagementVehicleTypesComponent"], _components_parking_management_slot_types_parking_management_slot_types_component__WEBPACK_IMPORTED_MODULE_32__["ParkingManagementSlotTypesComponent"], _components_parking_slot_rate_parking_slot_rate_component__WEBPACK_IMPORTED_MODULE_33__["ParkingSlotRateComponent"], _components_allocated_slot_confirmation_allocated_slot_confirmation_component__WEBPACK_IMPORTED_MODULE_34__["AllocatedSlotConfirmationComponent"], _components_parking_manage_booking_booking_confirmation_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_35__["BookingConfirmationComponent"], _components_set_parking_availablity_set_parking_availablity_component__WEBPACK_IMPORTED_MODULE_36__["SetParkingAvailablityComponent"], _components_set_parking_availablity_unit_parking_availablity_unit_parking_availablity_component__WEBPACK_IMPORTED_MODULE_37__["UnitParkingAvailablityComponent"], _components_set_parking_availablity_community_parking_availablity_community_parking_availablity_component__WEBPACK_IMPORTED_MODULE_38__["CommunityParkingAvailablityComponent"], _components_set_parking_availablity_create_availablity_create_availablity_component__WEBPACK_IMPORTED_MODULE_39__["CreateAvailablityComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _parking_management_routing_module__WEBPACK_IMPORTED_MODULE_3__["ParkingManagementRoutingModule"]],
      bootstrap: [_parking_management_component__WEBPACK_IMPORTED_MODULE_5__["ParkingManagementComponent"]]
    })], ParkingManagementModule);
    /***/
  }
}]);
//# sourceMappingURL=parking-management-parking-management-module-es5.js.map