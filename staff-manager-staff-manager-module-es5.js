function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-manager-staff-manager-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-entry/add-entry.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-entry/add-entry.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsAddEntryAddEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-add-entry-wrapper\">\n\t\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditEntry\">Add Entry</span>\n    \t\t\t\t<span *ngIf=\"isEditEntry\">Edit Entry</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/staff/attendance\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t\n\t\t<form #addEntryForm = \"ngForm\" name=\"addEntryForm\" (ngSubmit)=\"submitEntryForm(addEntryForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-alert-message [message]=\"alertEntryMessage\" [isError]=\"isEntryError\"></app-alert-message>\n\n\t\t\t\t<app-loader *ngIf=\"!isEntrySubmitted\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"isEntrySubmitted\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Name*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"staffId\" \n\t\t\t\t\t\t\t\t        id=\"staffId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.staffId\" \n\t\t\t\t\t\t\t\t        (ngModelChange)=\"getStaffJobTitle()\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffDataList\" [value]=\"item.staffId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Job title*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"ticketSubject\" [(ngModel)]=\"entry.jobTitle\" required>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>In-time*</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"staffInTime\" [owlDateTime]=\"staffInTime\" [owlDateTimeTrigger]=\"staffInTime\" placeholder=\"Date Time\" [(ngModel)]=\"entry.inTime\" required>\n\t\t\t\t\t\t\t\t\t<owl-date-time #staffInTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"staffInTime\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del-c float-left mr-1\" name=\"x-circle\" width=\"18\" *ngIf=\"entry.inTime != '' && entry.inTime != undefined\" (click)=\"entry.inTime=''\"></i-feather>\n\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t  \t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Out-time</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"staffOutTime\" [owlDateTime]=\"staffOutTime\" [owlDateTimeTrigger]=\"staffOutTime\" placeholder=\"Date Time\" [(ngModel)]=\"entry.outTime\">\n\t\t\t\t\t\t\t\t\t<owl-date-time #staffOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"staffOutTime\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del-c float-left mr-1\" name=\"x-circle\" width=\"18\" *ngIf=\"entry.outTime != '' && entry.outTime != undefined\" (click)=\"entry.outTime=''\"></i-feather>\n\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t  \t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>In Gate*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"inGateId\" \n\t\t\t\t\t\t\t\t        id=\"inGateId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.inGateId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of gatesDataList\" [value]=\"item.gateId\">{{ item.gateName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Out Gate*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"outGateId\" \n\t\t\t\t\t\t\t\t        id=\"outGateId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.outGateId\">\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of gatesDataList\" [value]=\"item.gateId\">{{ item.gateName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t<label>shift Type*</label>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t                            <input name=\"shiftType\" id=\"Morning\" [(ngModel)]=\"shiftType\" (ngModelChange)=\"getShifts()\" value=\"127\" type=\"radio\" required>\n\t\t\t                            <label class=\"radio-inline\" for=\"Morning\">Morning</label>\n\t\t                     \t\t</div>\n\t\t\t                    \t<div class=\"form-group\">\n\t\t\t                            <input name=\"shiftType\" id=\"Night\" [(ngModel)]=\"shiftType\" (ngModelChange)=\"getShifts()\" value=\"128\" type=\"radio\" required>\n\t\t\t                            <label class=\"radio-inline\" for=\"Night\">Night</label>\n\t\t\t                         </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isShiftSelected()\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Start Time*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"startTime\" \n\t\t\t\t\t\t\t\t        id=\"startTime\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.shiftId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of shiftsFilteredDataList\" [value]=\"item.shiftId\">{{ item.startTime }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Comments</label>\n\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"comments\" [(ngModel)]=\"entryComments\"></textarea>\n\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addEntryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t</ng-container>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n\t\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-staff/add-staff.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-staff/add-staff.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsAddStaffAddStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-add-staff-wrapper\">\n\n\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitAddStaffForm(addStaffForm)\"  novalidate>\n\n\t\t<div class=\"card mb-30\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>\n\t    \t\t\t\t<span *ngIf=\"!isEditStaff\">Add Staff</span>\n\t    \t\t\t\t<span *ngIf=\"isEditStaff\">Edit Staff</span>\n\t    \t\t\t</h5>\n\t    \t\t</div>\n\t    \t\t<div class=\"float-right\">\n\t    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/staff/maintain-staff\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t\t</a>\n    \t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\n\t\t\t\t<app-alert-message [message]=\"alertStaffMessage\" [isError]=\"isStaffError\" [isSuccess]=\"isStaffSuccess\"></app-alert-message>\n\n\t\t\t\t<app-loader *ngIf=\"isStaffSubmitted\"></app-loader>\n\t\t\t\t\n\t\t\t\t<ng-container *ngIf=\"!isStaffSubmitted\">\n\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#staffCollapseOne\" aria-expanded=\"true\" aria-controls=\"CollapseOne\">Personal Info</li>\n\t\t\t\t\t<div id=\"staffCollapseOne\" class=\"collapse show\" aria-labelledby=\"CollapseOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>First Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"firstName\" [(ngModel)]=\"staff.firstName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Last Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"staff.lastName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEditStaff\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Password*</label>\n\t\t\t\t\t                    <input type=\"password\" class=\"form-control\" placeholder=\"Enter value\" name=\"password\" [(ngModel)]=\"staff.password\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Date Of Birth</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"staffDOB\" [owlDateTime]=\"staffDOB\" [owlDateTimeTrigger]=\"staffDOB\" placeholder=\"Date\" [(ngModel)]=\"staff.dob\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #staffDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"staffDOB\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Address</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"address\" [(ngModel)]=\"staff.address\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Email*</label>\n\t\t\t\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"staffEmail\" [(ngModel)]=\"staff.emailId\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Contact Number</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"contactNumber\" [(ngModel)]=\"staff.contactNumber\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Alternate Contact Number</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"alternateContact\" [(ngModel)]=\"staff.alternateContact\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                   <label>Blood Group</label>\n\t\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t\t        name=\"bloodGroup\" \n\t\t\t\t\t\t\t\t\t        id=\"bloodGroup\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.bloodGroup\">\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of bloodGroupData\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Vehicle ID</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"staffVehicleId\" [(ngModel)]=\"staff.vehicleId\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"male\">Male</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"female\">Female</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Is Vendor*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"vendorType\" id=\"Yes\" [(ngModel)]=\"vendorType\" value=\"Yes\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"vendorType\" id=\"No\" [(ngModel)]=\"vendorType\" value=\"No\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"No\">No</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t <div class=\"col-sm-4\" *ngIf=\"isVendor()\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                   <label>Vendor Name*</label>\n\t\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t\t        name=\"vendorName\" \n\t\t\t\t\t\t\t\t\t        id=\"vendorName\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.vendorId\">\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of vendorNameList\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Health Issue Notes ( 35 characters)</label>\n\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"healthIssue\" [(ngModel)]=\"staff.healthIssue\"></textarea>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"staffComments\" [(ngModel)]=\"staff.comments\"></textarea>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-photo-selector\" (click)=\"uploaderPhoto.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploaderPhoto type=\"file\"\n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"staff.file\" (change)=\"uploadPhoto($event)\">\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Photo</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isPhotoAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfPhotos; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deletePhoto(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploaderFile.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploaderFile type=\"file\"\n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"staff.multifile\" (change)=\"uploadFile($event)\" multiple>\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload ID Card Docs</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#staffCollapseTwo\" aria-expanded=\"true\" aria-controls=\"CollapseTwo\">Salary & Leave</li>\n\t\t\t\t\t<div id=\"staffCollapseTwo\" class=\"collapse\" aria-labelledby=\"CollapseTwo\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Base Pay*</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"basePay\" [(ngModel)]=\"staff.basePay\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Allowance 1</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"allowance1\" [(ngModel)]=\"staff.allowance1\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Allowance 2</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"allowance2\" [(ngModel)]=\"staff.allowance2\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Allowance 3</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"allowance3\" [(ngModel)]=\"staff.allowance3\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Overtime Pay Per Hour</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"overtimePayperhour\" [(ngModel)]=\"staff.overtimePayperhour\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Deduction 1</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"deduction1\" [(ngModel)]=\"staff.deduction1\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Deduction 2</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"deduction2\" [(ngModel)]=\"staff.deduction2\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Deduction 3</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"deduction3\" [(ngModel)]=\"staff.deduction3\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Salary Per Day</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"perDaySalary\" [(ngModel)]=\"staff.perDaySalary\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Vacation Leave Days</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"vacationLeaveDays\" [(ngModel)]=\"staff.vacationLeaveDays\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Sick Leave Days</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"sickLeaveDays\" [(ngModel)]=\"staff.sickLeaveDays\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#staffCollapseThree\" aria-expanded=\"true\" aria-controls=\"CollapseThree\">Work Information</li>\n\t\t\t\t\t<div id=\"staffCollapseThree\" class=\"collapse\" aria-labelledby=\"CollapseThree\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Category*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"staffCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"staffCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.staffCategoryId\" \n\t\t\t\t\t\t\t\t\t        (ngModelChange)=\"getStaffType(staff.staffCategoryId)\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isCategoryEnabled()\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Sub Category*</label>\n\t\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t\t        name=\"staffSubCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"staffSubCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.staffSubCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Job Start Date</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"jobStartDate\" [owlDateTime]=\"jobStartDate\" [owlDateTimeTrigger]=\"jobStartDate\" placeholder=\"Date\" [(ngModel)]=\"staff.jobStartDate\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #jobStartDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"jobStartDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Job End Date</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"jobEndDate\" [owlDateTime]=\"jobEndDate\" [owlDateTimeTrigger]=\"jobEndDate\" placeholder=\"Date\" [(ngModel)]=\"staff.jobEndDate\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #jobEndDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"jobEndDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Planned Entry Time</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"plannedEntryTime\" [owlDateTime]=\"plannedEntryTime\" [owlDateTimeTrigger]=\"plannedEntryTime\" placeholder=\"Date Time\" [(ngModel)]=\"staff.plannedEntryTime\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #plannedEntryTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"plannedEntryTime\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Planned Exit Time</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"plannedExitTime\" [owlDateTime]=\"plannedExitTime\" [owlDateTimeTrigger]=\"plannedExitTime\" placeholder=\"Date Time\" [(ngModel)]=\"staff.plannedExitTime\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #plannedExitTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"plannedExitTime\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ul>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffAttendanceStaffAttendanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-attendance-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isEntryDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isEntryDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Entries <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"entryData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/staff/add-entry\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Attendance</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tName\n\t\t\t\t      \t<span (click)=\"sortUnitData('firstName')\" [ngClass]=\"getFieldOrderBy('firstName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"columnField['firstName']\" (ngModelChange)=\"selectColInput('firstName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tJob Title\n\t\t\t\t      \t<span (click)=\"sortUnitData('jobTitle')\" [ngClass]=\"getFieldOrderBy('jobTitle')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Job Title\" [(ngModel)]=\"columnField['jobTitle']\" (ngModelChange)=\"selectColInput('jobTitle')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">In Time <span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Out Time<span (click)=\"sortUnitData('outTime')\" [ngClass]=\"getFieldOrderBy('outTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\">In Gate <span (click)=\"sortUnitData('inGateId')\" [ngClass]=\"getFieldOrderBy('inGateId')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Out Gate <span (click)=\"sortUnitData('outGateId')\" [ngClass]=\"getFieldOrderBy('outGateId')\"></span></th>\n\t\t\t\t      <th scope=\"col\">comments <span (click)=\"sortUnitData('notes')\" [ngClass]=\"getFieldOrderBy('notes')\"></span></th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let entry of entryListData | simpleSearch: staffData | \n\t\t\t\t    sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{getStaffName(entry.staffId)}}</td>\n\t\t\t\t      <td class=\"name\">{{getJobTitle(entry.staffId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{entry.inTime}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{entry.outTime}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getInGateName(entry.inGateId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getOutGateName(entry.outGateId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{entry.notes}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/staff/edit-entry/{{entry.attendanceId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffGatesStaffGatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-gates-wrapper\">\n\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-header no-border\">\n\t\t\t\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5 class=\"lh-38\">Gates List <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n    \t\t<div class=\"float-right\">\n    \t\t\t<ul class=\"list-inline\">\n    \t\t\t\t<li class=\"list-inline-item\">\n\n\t\t    \t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addGate()\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Gate</span>\n\t\t    \t\t\t</a>\n\t\t    \t\t\t\n\t    \t\t\t</li>\n    \t\t\t</ul>\n    \t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<app-loader *ngIf=\"!isGateTableLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isGateTableLoaded\">\n\t\t\t\t\n\t\t\t\t<div class=\"simple-lists\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngFor=\"let gate of gateListData; let i = index\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t<h5>{{gate.gateName}}</h5>\n\t\t\t\t\t\t\t\t<p>{{gate.comments}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t\t<a class=\"icon-link mr-2\" href=\"javascript:void(0)\" (click)=\"editGate(gate.gateId)\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>\n\t\t\t\t      \t\t\t<a class=\"icon-link\" href=\"javascript:void(0)\" (click)=\"showConfirmModal(gate)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</div>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t\t<app-pagination \n\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t</app-pagination>\n\t</div>\n\n\t\n\t<div class=\"add-gate-card\" *ngIf=\"isAddGateLoaded\">\n\n\t\t<div class=\"card mb-30\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>\n\t    \t\t\t\t<span *ngIf=\"!isEditGate\">Add Gate</span>\n\t\t\t\t\t\t<span *ngIf=\"isEditGate\">Edit Gate</span>\n\t\t\t\t\t</h5>\n\t    \t\t</div>\n\t    \t\t<div class=\"float-right\" (click)=\"closeGate()\">\n\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n    \t\t</div>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<app-loader *ngIf=\"!isGateLoaded\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"isGateLoaded\">\n\t\t\t\t\t\n\t\t\t\t\t<form #addGateForm = \"ngForm\" name=\"addGateForm\" (ngSubmit)=\"submitGateForm(addGateForm)\"  novalidate>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Gate Name*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"gateName\" [(ngModel)]=\"gate.gateName\" required>\n\t\t\t\t        \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Comments</label>\n\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"healthIssue\" [(ngModel)]=\"gate.comments\" required></textarea>\n\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addGateForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffInactiveStaffStaffInactiveStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-manager-inactive-staff-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isStaffDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isStaffDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Inactive Staffs <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"staffData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Staff Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('firstName')\" [ngClass]=\"getFieldOrderBy('firstName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"columnField['firstName']\" (ngModelChange)=\"selectColInput('firstName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Email ID\n\t\t\t\t      \t<span (click)=\"sortUnitData('emailId')\" [ngClass]=\"getFieldOrderBy('emailId')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email ID\" [(ngModel)]=\"columnField['emailId']\" (ngModelChange)=\"selectColInput('emailId')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Category \n\t\t\t\t      \t<span (click)=\"sortUnitData('staffCategory')\" [ngClass]=\"getFieldOrderBy('staffCategory')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffCategory\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffTypeData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffCategory', 'lookupValueName')\">\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\">Sub Category\n\t\t\t\t       \t<span (click)=\"sortUnitData('staffSubCategory')\" [ngClass]=\"getFieldOrderBy('staffSubCategory')\"></span>\n\t\t\t\t       \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffSubCategory\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffSubCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffOfficalCategoryData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffSubCategory', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t       </th>\n\t\t\t\t      <th scope=\"col\">Phone Number \n\t\t\t\t      \t<span (click)=\"sortUnitData('contactNumber')\" [ngClass]=\"getFieldOrderBy('contactNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" [(ngModel)]=\"columnField['contactNumber']\" (ngModelChange)=\"selectColInput('contactNumber')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let staff of staffListData | simpleSearch: staffData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex; let i = index\">\n\t\t\t\t      <td class=\"name\">{{staff.firstName}}</td>\n\t\t\t\t      <td class=\"name\">{{staff.emailId}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getStaffCategory(staff, staff.staffCategoryId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getStaffSubCategory(staff, staff.staffSubCategoryId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{staff.contactNumber}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/staff/edit-staff/{{staff.staffId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffMaintainStaffStaffMaintainStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-manager-maintain-staff-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isStaffDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isStaffDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Staffs <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"staffData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/staff/add-staff\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Staff</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Staff Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('firstName')\" [ngClass]=\"getFieldOrderBy('firstName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"columnField['firstName']\" (ngModelChange)=\"selectColInput('firstName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Email ID\n\t\t\t\t      \t<span (click)=\"sortUnitData('emailId')\" [ngClass]=\"getFieldOrderBy('emailId')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email ID\" [(ngModel)]=\"columnField['emailId']\" (ngModelChange)=\"selectColInput('emailId')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Category \n\t\t\t\t      \t<span (click)=\"sortUnitData('staffCategory_Label')\" [ngClass]=\"getFieldOrderBy('staffCategory_Label')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffCategory_Label\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffTypeData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffCategory_Label', 'lookupValueName')\">\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\">Sub Category\n\t\t\t\t       \t<span (click)=\"sortUnitData('staffSubcategory_Label')\" [ngClass]=\"getFieldOrderBy('staffSubcategory_Label')\"></span>\n\t\t\t\t       \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffSubcategory_Label\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffSubCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffOfficalCategoryData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffSubcategory_Label', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t       </th>\n\t\t\t\t      <th scope=\"col\">Phone Number \n\t\t\t\t      \t<span (click)=\"sortUnitData('contactNumber')\" [ngClass]=\"getFieldOrderBy('contactNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" [(ngModel)]=\"columnField['contactNumber']\" (ngModelChange)=\"selectColInput('contactNumber')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let staff of staffListData | simpleSearch: staffData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex; let i = index\" [ngClass]=\"staff.isActive ? 'active' : 'notactive'\">\n\t\t\t\t      <td class=\"name\">{{staff.firstName}}</td>\n\t\t\t\t      <td class=\"name\">{{staff.emailId}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{staff.staffCategory_Label}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{staff.staffSubcategory_Label}}</td>\n\t\t\t\t      <td class=\"grey\">{{staff.contactNumber}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/staff/edit-staff/{{staff.staffId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(staff.staffId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffOvertimeStaffOvertimeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  staff-overtime works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffPayrollStaffPayrollComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  staff-payroll works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffReportsStaffReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  staff-reports works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffSetupStaffSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-setup-wrapper\">\n\n\t<h5 class=\"mb-3\">\n\t\t<span *ngIf=\"!isEditStaffCategory\">Add Staff Category</span>\n\t\t<span *ngIf=\"isEditStaffCategory\">Edit Staff Category</span>\n\t</h5>\n\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isStaffLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isStaffLoaded\">\n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitStaffForm(addStaffForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Category*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"staffType\" \n\t\t\t\t\t\t\t        id=\"staffType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"staffType\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Sub Category*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"staffCategory\" [(ngModel)]=\"staffCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<ul class=\"list-inline mt-25\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isCategoryDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Offical Staffs</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('status')\">Category <span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subcategory')\">Supervisor <span [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level1')\">Level-1 <span [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level2')\">Level-2 <span [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t      <!-- <th scope=\"col\" (click)=\"sortUnitData('l1day')\">L1 Escdays<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('l2day')\">L2 Escdays<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th> -->\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryOffcialListData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: categoryOffcialData ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <!-- <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td> -->\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"staffType=115;editStaffCategory(category)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=115;showConfirmModal(i);\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div>\n\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Personal Staffs</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('status')\">Category <span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subcategory')\">Supervisor <span [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level1')\">Level-1 <span [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level2')\">Level-2 <span [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t       <!-- <th scope=\"col\" (click)=\"sortUnitData('l1day')\">Escalation to L1 day<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('l2day')\">Escalation to L2day<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th> -->\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryPersonalListData | simpleSearch: categoryPersonalData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t       <!-- <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td> -->\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"staffType=116;editStaffCategory(category)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=116;showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div>\n\n\t<app-staff-gates></app-staff-gates>\n\n\t<app-staff-shifts></app-staff-shifts>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerComponentsStaffShiftsStaffShiftsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"staff-shifts-wrapper\">\n\n\t<div class=\"card mb-30 table-card\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Shifts <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t\n    \t\t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"shiftData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\n\t    \t\t\t\t<a class=\"btn lime-green\" (click)=\"addShift()\">\n\t    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t    \t\t\t\t\t<span>Add Shift</span>\n\t    \t\t\t\t</a>\n\n    \t\t\t\t</li>\n    \t\t\t</ul>\n\n    \t\t</div>\n  \t\t</div>\n\n\t\t<div class=\"card-body p-0\" *ngIf=\"isShiftTableLoaded\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('shiftType')\">Shift Type<span [ngClass]=\"getFieldOrderBy('shiftType')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('startTime')\">Shift Start Time<span [ngClass]=\"getFieldOrderBy('startTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('totalHours')\">Total (Hrs)<span [ngClass]=\"getFieldOrderBy('totalHours')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let shift of shiftsListData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: shiftData ; let i = index\">\n\t\t\t\t      <td class=\"name text-capitalize\">{{getShiftType(shift.shiftTypeId)}}</td>\n\t\t\t\t      <td class=\"name\">{{shift.startTime}}</td>\n\t\t\t\t      <td class=\"grey\">{{shift.totalHours}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \t(click)=\"editShift(shift)\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(shift)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n\t<div class=\"add-shift-card\" *ngIf=\"isAddShiftLoaded\">\n\n\t\t<div class=\"card mb-30\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5 *ngIf=\"!isEditShift\">Add Staff Shifts</h5>\n\t    \t\t\t<h5 *ngIf=\"isEditShift\">Edit Staff Shifts</h5>\n\t    \t\t</div>\n\t    \t\t<div class=\"float-right\" (click)=\"closeShift()\">\n\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isShiftsLoaded\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"isShiftsLoaded\">\n\t\t\t\t\t\n\t\t\t\t\t<form #addShiftForm = \"ngForm\" name=\"addShiftForm\" (ngSubmit)=\"submitShiftsForm(addShiftForm)\"  novalidate>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                   <label>Shift Type*</label>\n\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t        name=\"shiftTypeId\" \n\t\t\t\t\t\t\t\t        id=\"shiftTypeId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"shiftTypeId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of shiftTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Shift Start Time</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Date Time\" [(ngModel)]=\"shiftStartTime\">\n\t\t\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #startTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Total hrs</label>\n\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"shiftTotalHrs\" [(ngModel)]=\"shiftTotalHrs\" required>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addShiftForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/staff-manager.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/staff-manager.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsStaffManagerStaffManagerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/add-entry/add-entry.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/add-entry/add-entry.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsAddEntryAddEntryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvYWRkLWVudHJ5L2FkZC1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddEntryComponent */

  /***/
  function srcAppAmsStaffManagerComponentsAddEntryAddEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEntryComponent", function () {
      return AddEntryComponent;
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


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
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

    var AddEntryComponent =
    /*#__PURE__*/
    function () {
      function AddEntryComponent(router, route, staffService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AddEntryComponent);

        this.router = router;
        this.route = route;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditEntry = false;
        this.isEntrySubmitted = true;
        this.isEntryError = false;
        this.isEntrySuccess = false;
        this.alertEntryMessage = "";
        this.shiftType = "";
        this.jobTitle = "";
        this.entryComments = "";
      }

      _createClass(AddEntryComponent, [{
        key: "isAdmin",
        value: function isAdmin() {
          return this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff' ? true : false;
        }
      }, {
        key: "isShiftSelected",
        value: function isShiftSelected() {
          return this.shiftType != "" ? true : false;
        }
      }, {
        key: "getShifts",
        value: function getShifts() {
          var _this = this;

          this.shiftsFilteredDataList = this.shiftsDataList.filter(function (item) {
            return item.shiftTypeId == _this.shiftType;
          });
        }
      }, {
        key: "getStaffJobTitle",
        value: function getStaffJobTitle() {
          var _this2 = this;

          this.staffService.getStaffByStaffId(this.entry.staffId).subscribe(function (res) {
            _this2.selectedStaffCateogryId = res[0].staffCategoryId || null;
            _this2.selectedSubStaffCateogryId = res[0].staffSubCategoryId || null;

            if (_this2.selectedStaffCateogryId != null) {
              // offical staff
              if (_this2.selectedStaffCateogryId == 115) {
                var data = _this2.officalStaffsDataList.filter(function (item) {
                  if (item.lookupValueId == _this2.selectedSubStaffCateogryId) {
                    return item.lookupValueName;
                  }
                });

                if (data === undefined || data.length == 0) {
                  _this2.entry.jobTitle = "";
                } else {
                  _this2.entry.jobTitle = data[0].lookupValueName;
                }
              } else {
                var _data = _this2.personalStaffsDataList.filter(function (item) {
                  if (item.lookupValueId == _this2.selectedSubStaffCateogryId) {
                    return item.lookupValueName;
                  }
                });

                if (_data === undefined || _data.length == 0) {
                  _this2.entry.jobTitle = "";
                } else {
                  _this2.entry.jobTitle = _data[0].lookupValueName;
                }
              }
            } else {
              _this2.entry.jobTitle = "";
            }
          });
        }
      }, {
        key: "submitEntryForm",
        value: function submitEntryForm(form) {
          var _this3 = this;

          this.isEntrySubmitted = false;

          if (!this.isEditEntry) {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "staffId": parseInt(this.entry.staffId),
              "inTime": this.entry.inTime,
              "inGateId": parseInt(this.entry.inGateId),
              "outTime": this.entry.outTime,
              "outGateId": parseInt(this.entry.outGateId),
              "shiftId": parseInt(this.entry.shiftId),
              "notes": this.entryComments,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-12-04T05:43:41.299Z",
              "updatedBy": 0,
              "updatedOn": "2019-12-04T05:43:41.299Z"
            };
            this.staffService.addAttendance(details).subscribe(function (res) {
              if (res.message) {
                _this3.isEntrySubmitted = true;

                _this3.sharedService.setAlertMessage("Entry added successfully");

                _this3.router.navigate(['ams/staff/attendance']);
              } else {
                _this3.isEntrySubmitted = true;
                _this3.isEntryError = true;
                _this3.alertEntryMessage = res.errorMessage;
              }
            }, function (error) {
              _this3.isEntrySubmitted = true;
              _this3.isEntryError = true;
              _this3.alertEntryMessage = "Some error occured";
            });
          } else {
            var _details = {
              "attendanceId": parseInt(this.route.params['value'].id),
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "staffId": parseInt(this.entry.staffId),
              "inTime": this.entry.inTime,
              "inGateId": parseInt(this.entry.inGateId),
              "outTime": this.entry.outTime,
              "outGateId": parseInt(this.entry.outGateId),
              "shiftId": parseInt(this.entry.shiftId),
              "notes": this.entryComments,
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": "2019-12-04T05:43:41.299Z",
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": "2019-12-04T05:43:41.299Z"
            };
            this.staffService.updateAttendance(_details).subscribe(function (res) {
              if (res.message) {
                _this3.isEntrySubmitted = true;

                _this3.sharedService.setAlertMessage("Entry updated successfully");

                _this3.router.navigate(['ams/staff/attendance']);
              } else {
                _this3.isEntrySubmitted = true;
                _this3.isEntryError = true;
                _this3.alertEntryMessage = res.errorMessage;
              }
            }, function (error) {
              _this3.isEntrySubmitted = true;
              _this3.isEntryError = true;
              _this3.alertEntryMessage = "Some error occured";
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.entry = {};
          this.entry.staffId = "";
          this.entry.inGateId = "";
          this.entry.outGateId = "";
          this.entry.shiftId = "";

          if (this.route.params['value'].id != undefined) {
            this.isEditEntry = true;
            this.attendanceId = this.route.params['value'].id;
            this.staffService.getAttendanceByAttendanceId(this.route.params['value'].id).subscribe(function (res) {
              _this4.entry = res[0];

              _this4.getStaffJobTitle();

              _this4.staffService.getShiftByShiftId(_this4.entry.shiftId).subscribe(function (res) {
                _this4.shiftType = res[0].shiftTypeId.toString();

                _this4.getShifts();
              }, function (error) {});
            }, function (error) {});
          }

          this.staffService.getAllStaffsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this4.staffDataList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          this.staffService.getAllGatesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this4.gatesDataList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          this.staffService.getAllShiftsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this4.shiftsDataList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //get all shift types

          this.lookupService.getLookupValueByLookupTypeId(28).subscribe(function (res) {
            _this4.shiftTypeList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //get all offical staff 

          this.lookupService.getLookupValueByLookupTypeId(26).subscribe(function (res) {
            _this4.officalStaffsDataList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //get all personal staffs 

          this.lookupService.getLookupValueByLookupTypeId(27).subscribe(function (res) {
            _this4.personalStaffsDataList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
        }
      }]);

      return AddEntryComponent;
    }();

    AddEntryComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    AddEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-entry',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-entry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-entry/add-entry.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-entry.component.scss */
      "./src/app/ams/staff-manager/components/add-entry/add-entry.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], AddEntryComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/add-staff/add-staff.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/add-staff/add-staff.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsAddStaffAddStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvYWRkLXN0YWZmL2FkZC1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddStaffComponent */

  /***/
  function srcAppAmsStaffManagerComponentsAddStaffAddStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStaffComponent", function () {
      return AddStaffComponent;
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


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var AddStaffComponent =
    /*#__PURE__*/
    function () {
      function AddStaffComponent(router, route, userService, staffService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, AddStaffComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditStaff = false;
        this.isStaffSubmitted = false;
        this.isStaffAdded = false;
        this.isStaffError = false;
        this.isStaffSuccess = false;
        this.alertStaffMessage = "";
        this.vendorType = "";
        this.isTypeSelected = false;
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
        this.isPhotoAdded = false;
        this.photoList = [];
        this.listOfPhotos = [];
        this.userId = null;
        this.staffId = null;
        this.genderType = null;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AddStaffComponent, [{
        key: "isArrayOne",
        value: function isArrayOne() {
          return this.staffArray.length > 1 ? true : false;
        }
      }, {
        key: "deleteStaff",
        value: function deleteStaff() {
          this.staffArray.splice(this.index, 1);
          this.outputParams.emit(this.staffArray);
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          this.isFileAdded = true;

          for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({
              'name': selectedFile.name,
              'size': selectedFile.size
            });
          }
        }
      }, {
        key: "deleteFile",
        value: function deleteFile(index) {
          // Delete the item from fileNames list
          this.listOfFiles.splice(index, 1); // delete file from FileList

          this.fileList.splice(index, 1);
          this.selectedFile = null;

          if (this.fileList.length == 0 && this.listOfFiles.length == 0) {
            this.isFileAdded = false;
          }
        }
      }, {
        key: "uploadPhoto",
        value: function uploadPhoto(event) {
          this.isPhotoAdded = true;

          for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedPhoto = event.target.files[i];
            this.photoList.push(selectedPhoto);
            this.listOfPhotos.push({
              'name': selectedPhoto.name,
              'size': selectedPhoto.size
            });
          }
        }
      }, {
        key: "deletePhoto",
        value: function deletePhoto(index) {
          // Delete the item from fileNames list
          this.listOfPhotos.splice(index, 1); // delete file from FileList

          this.photoList.splice(index, 1);
          this.selectedPhoto = null;

          if (this.photoList.length == 0 && this.listOfPhotos.length == 0) {
            this.isPhotoAdded = false;
          }
        }
      }, {
        key: "bytesToSize",
        value: function bytesToSize(bytes) {
          if (bytes < 1024) return bytes + " Bytes";else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";else return (bytes / 1073741824).toFixed(3) + " GB";
        }
      }, {
        key: "isCategoryEnabled",
        value: function isCategoryEnabled() {
          if (!this.isEditStaff) {
            if (this.isTypeSelected) return true;else return false;
          } else {
            return true;
          }
        }
      }, {
        key: "getStaffType",
        value: function getStaffType(typeId) {
          var _this5 = this;

          this.isTypeSelected = true;

          if (typeId == "115") {
            //staff offical category
            this.lookupService.getLookupValueByLookupTypeId(26).subscribe(function (res) {
              _this5.staffCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
          } else {
            //staff personal category
            this.lookupService.getLookupValueByLookupTypeId(27).subscribe(function (res) {
              _this5.staffCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
          }
        }
      }, {
        key: "isVendor",
        value: function isVendor() {
          return this.vendorType == 'Yes' ? true : false;
        }
      }, {
        key: "submitAddStaffForm",
        value: function submitAddStaffForm(form) {
          var _this6 = this;

          this.isStaffSubmitted = true;
          this.isStaffError = false;

          if (!this.isEditStaff) {
            //add user
            var userDetails = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "firstName": this.staff.firstName,
              "middleName": "string",
              "lastName": this.staff.lastName,
              "emailId": this.staff.emailId,
              "password": this.staff.password,
              "salt": null,
              "address1": this.staff.address || "",
              "address2": "string",
              "city": "string",
              "state": "string",
              "country": "string",
              "zipCode": "string",
              "genderId": parseInt(this.genderType),
              "dob": this.staff.dob,
              "joinedOn": "2019-11-10T09:58:08.934Z",
              "bloodGroup": this.staff.bloodGroup,
              "phoneNumber": this.staff.contactNumber.toString(),
              "emergencyContactNumber": "string",
              "emergencyContactPerson": "string",
              "emergencyContactNumberSecondary": "string",
              "emergencyContactPersonSecondary": "string",
              "accessCardNumber": "string",
              "notes": "string",
              "profilePictureId": null,
              "isLiving": true,
              "isActive": true,
              "isApproved": true,
              "resetPassword": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "updatedBy": 0
            }; //add user 

            this.userService.addUser(userDetails).subscribe(function (res) {
              if (res.message) {
                _this6.userId = res.message;
                var userRole = {
                  "userId": _this6.userId,
                  "roleId": 5,
                  "isActive": true,
                  "insertedBy": parseInt(_this6.cookieService.get('userId')),
                  "insertedOn": "2019-11-10T10:00:28.212Z",
                  "updatedBy": 0,
                  "updatedOn": "2019-11-10T10:00:28.212Z"
                }; //add userrole

                _this6.userService.addUserRole(userRole).subscribe(function (res) {
                  if (res.message) {
                    var staffDetails = {
                      "apartmentId": parseInt(_this6.cookieService.get('apartmentId')),
                      "userId": _this6.userId,
                      "firstName": _this6.staff.firstName,
                      "middleName": "string",
                      "lastName": _this6.staff.lastName,
                      "emailId": _this6.staff.emailId,
                      "contactNumber": _this6.staff.contactNumber.toString(),
                      "alternateContact": _this6.staff.alternateContact.toString(),
                      "staffNumber": null,
                      "staffCategoryId": parseInt(_this6.staff.staffCategoryId),
                      "staffSubCategoryId": parseInt(_this6.staff.staffSubCategoryId),
                      "dob": _this6.staff.dob,
                      "genderId": parseInt(_this6.genderType),
                      "bloodGroup": _this6.staff.bloodGroup,
                      "vendorId": null,
                      "vehicleId": null,
                      "healthIssue": _this6.staff.healthIssue,
                      "comments": _this6.staff.comments,
                      "plannedEntryTime": _this6.staff.plannedEntryTime,
                      "plannedExitTime": _this6.staff.plannedExitTime,
                      "jobStartDate": _this6.staff.jobStartDate,
                      "jobEndDate": _this6.staff.jobEndDate,
                      "mtwtfss": "string",
                      "photoId": 4,
                      "idcardImg1": null,
                      "idcardImg2": null,
                      "vacationLeaveDays": parseInt(_this6.staff.vacationLeaveDays),
                      "sickLeaveDays": parseInt(_this6.staff.sickLeaveDays),
                      "basePay": _this6.staff.basePay,
                      "overtimePayperhour": _this6.staff.overtimePayperhour,
                      "allowance1": _this6.staff.allowance1,
                      "allowance2": _this6.staff.allowance2,
                      "allowance3": _this6.staff.allowance3,
                      "deduction1": _this6.staff.deduction1,
                      "deduction2": _this6.staff.deduction2,
                      "deduction3": _this6.staff.deduction3,
                      "perDaySalary": _this6.staff.perDaySalary,
                      "shiftId": null,
                      "jobTitleId": parseInt(_this6.staff.staffSubCategoryId),
                      "isActive": true,
                      "insertedBy": parseInt(_this6.cookieService.get('userId')),
                      "insertedOn": "2019-11-30T12:41:45.620Z",
                      "updatedBy": parseInt(_this6.cookieService.get('userId')),
                      "updatedOn": "2019-11-30T12:41:45.620Z"
                    };

                    _this6.staffService.addStaff(staffDetails).subscribe(function (res) {
                      _this6.isStaffSubmitted = false;

                      if (res.message) {
                        _this6.sharedService.setAlertMessage("Staff added successfully");

                        _this6.router.navigate(['ams/staff/maintain-staff']);
                      } else {
                        _this6.isStaffError = true;
                        _this6.alertStaffMessage = res.alertTicketMessage;
                      }
                    }, function (error) {
                      _this6.isStaffSubmitted = false;
                      _this6.isStaffError = true;
                      _this6.alertStaffMessage = res.errorMessage;
                    });
                  }
                }, function (error) {
                  console.log(error);
                });
              } else {
                _this6.isStaffSubmitted = false;
                _this6.isStaffError = true;
                _this6.alertStaffMessage = res.errorMessage;
              }
            }, function (error) {});
          } else {
            this.isStaffSubmitted = true;
            this.isStaffError = false; //edit user

            var _userDetails = {
              "userId": this.userId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "firstName": this.staff.firstName,
              "middleName": "string",
              "lastName": this.staff.lastName,
              "emailId": this.staff.emailId,
              "password": this.staff.password,
              "salt": null,
              "address1": this.staff.address || "",
              "address2": "string",
              "city": "string",
              "state": "string",
              "country": "string",
              "zipCode": "string",
              "genderId": parseInt(this.genderType),
              "dob": this.staff.dob,
              "joinedOn": "2019-11-10T09:58:08.934Z",
              "bloodGroup": this.staff.bloodGroup,
              "phoneNumber": this.staff.contactNumber.toString(),
              "emergencyContactNumber": "string",
              "emergencyContactPerson": "string",
              "emergencyContactNumberSecondary": "string",
              "emergencyContactPersonSecondary": "string",
              "accessCardNumber": "string",
              "notes": "string",
              "profilePictureId": null,
              "isLiving": true,
              "isActive": true,
              "isApproved": true,
              "resetPassword": true,
              "insertedBy": 0,
              "updatedBy": parseInt(this.cookieService.get('userId'))
            }; //edit user 

            this.userService.UpdateUser(_userDetails).subscribe(function (res) {
              if (res.message) {
                var staffDetails = {
                  "staffId": _this6.route.params['value'].id,
                  "apartmentId": parseInt(_this6.cookieService.get('apartmentId')),
                  "userId": _this6.userId,
                  "firstName": _this6.staff.firstName,
                  "middleName": "string",
                  "lastName": _this6.staff.lastName,
                  "emailId": _this6.staff.emailId,
                  "contactNumber": _this6.staff.contactNumber.toString(),
                  "alternateContact": _this6.staff.alternateContact.toString(),
                  "staffNumber": null,
                  "staffCategoryId": parseInt(_this6.staff.staffCategoryId),
                  "staffSubCategoryId": parseInt(_this6.staff.staffSubCategoryId),
                  "dob": _this6.staff.dob,
                  "genderId": parseInt(_this6.genderType),
                  "bloodGroup": _this6.staff.bloodGroup,
                  "vendorId": null,
                  "vehicleId": null,
                  "healthIssue": _this6.staff.healthIssue,
                  "comments": _this6.staff.comments,
                  "plannedEntryTime": _this6.staff.plannedEntryTime,
                  "plannedExitTime": _this6.staff.plannedExitTime,
                  "jobStartDate": _this6.staff.jobStartDate,
                  "jobEndDate": _this6.staff.jobEndDate,
                  "mtwtfss": "string",
                  "photoId": 4,
                  "idcardImg1": null,
                  "idcardImg2": null,
                  "vacationLeaveDays": parseInt(_this6.staff.vacationLeaveDays),
                  "sickLeaveDays": parseInt(_this6.staff.sickLeaveDays),
                  "basePay": _this6.staff.basePay,
                  "overtimePayperhour": _this6.staff.overtimePayperhour,
                  "allowance1": _this6.staff.allowance1,
                  "allowance2": _this6.staff.allowance2,
                  "allowance3": _this6.staff.allowance3,
                  "deduction1": _this6.staff.deduction1,
                  "deduction2": _this6.staff.deduction2,
                  "deduction3": _this6.staff.deduction3,
                  "perDaySalary": _this6.staff.perDaySalary,
                  "shiftId": null,
                  "jobTitleId": parseInt(_this6.staff.staffSubCategoryId),
                  "isActive": true,
                  "insertedBy": 0,
                  "insertedOn": "2019-11-30T12:41:45.620Z",
                  "updatedBy": parseInt(_this6.cookieService.get('userId')),
                  "updatedOn": "2019-11-30T12:41:45.620Z"
                }; //edit staff

                _this6.staffService.updateStaff(staffDetails).subscribe(function (res) {
                  _this6.isStaffSubmitted = false;

                  if (res.message) {
                    //this.isStaffSuccess = true;
                    //this.alertStaffMessage = "Staff updated successfully";
                    //this.staffId = res.message;
                    _this6.sharedService.setAlertMessage("Staff updated successfully");

                    _this6.router.navigate(['ams/staff/maintain-staff']);
                  } else {
                    _this6.isStaffError = true;
                    _this6.alertStaffMessage = res.alertTicketMessage;
                  }
                }, function (error) {
                  _this6.isStaffSubmitted = false;
                  _this6.isStaffError = true;
                  _this6.alertStaffMessage = res.errorMessage;
                });
              } else {
                _this6.isStaffSubmitted = false;
                _this6.isStaffError = true;
                _this6.alertStaffMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.staff = {};
          this.staff.bloodGroup = "";
          this.staff.staffCategoryId = "";
          this.staff.staffSubCategoryId = "";
          this.staff.contactNumber = "";
          this.staff.alternateContact = "";

          if (this.route.params['value'].id != undefined) {
            this.isEditStaff = true;
            this.isStaffAdded = true;
            this.staffId = this.route.params['value'].id;
            this.staffService.getStaffByStaffId(this.route.params['value'].id).subscribe(function (res) {
              _this7.staff = res[0];
              _this7.userId = _this7.staff.userId;
              _this7.genderType = _this7.staff.genderId.toString();

              _this7.getStaffType(_this7.staff.staffCategoryId);
            }, function (error) {});
          }

          this.lookupService.getLookupValueByLookupTypeId(24).subscribe(function (res) {
            _this7.bloodGroupData = res;
          }); //staff type

          this.lookupService.getLookupValueByLookupTypeId(25).subscribe(function (res) {
            _this7.staffTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //category type

          this.lookupService.getLookupValueByLookupTypeId(26).subscribe(function (res) {
            _this7.staffCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
        }
      }]);

      return AddStaffComponent;
    }();

    AddStaffComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddStaffComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddStaffComponent.prototype, "staffArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddStaffComponent.prototype, "outputParams", void 0);
    AddStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-staff',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-staff.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-staff/add-staff.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-staff.component.scss */
      "./src/app/ams/staff-manager/components/add-staff/add-staff.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], AddStaffComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffAttendanceStaffAttendanceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtYXR0ZW5kYW5jZS9zdGFmZi1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: StaffAttendanceComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffAttendanceStaffAttendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffAttendanceComponent", function () {
      return StaffAttendanceComponent;
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


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
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

    var StaffAttendanceComponent =
    /*#__PURE__*/
    function () {
      function StaffAttendanceComponent(router, route, staffService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, StaffAttendanceComponent);

        this.router = router;
        this.route = route;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEntryDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.entryData = "";
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(StaffAttendanceComponent, [{
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
        key: "getInGateName",
        value: function getInGateName(id) {
          var data = this.gateDataList.filter(function (item) {
            return item.gateId == id;
          });

          if (data === undefined || data.length === 0) {
            this.entry.inGateId = "";
            return "";
          } else {
            this.entry.inGateId = data[0].gateName;
            return data[0].gateName;
          }
        }
      }, {
        key: "getOutGateName",
        value: function getOutGateName(id) {
          var data = this.gateDataList.filter(function (item) {
            return item.gateId == id;
          });

          if (data === undefined || data.length === 0) {
            this.entry.outGateId = "";
            return "";
          } else {
            this.entry.outGateId = data[0].gateName;
            return data[0].gateName;
          }
        }
      }, {
        key: "getStaffName",
        value: function getStaffName(id) {
          var data = this.staffDetails.filter(function (item) {
            return item.staffId == id;
          });

          if (data === undefined || data.length === 0) {
            this.entry.firstName = "";
            return "";
          } else {
            this.entry.firstName = data[0].firstName;
            return data[0].firstName;
          }
        }
      }, {
        key: "getJobTitle",
        value: function getJobTitle(id) {
          var data = this.staffDetails.filter(function (item) {
            return item.staffId == id;
          });

          if (data === undefined || data.length === 0) {
            this.entry.jobTitle = "";
            return "";
          } else {
            var selectedStaffCateogryId = data[0].staffCategoryId;
            var selectedSubStaffCateogryId = data[0].staffSubCategoryId; // offical staff

            if (selectedStaffCateogryId == 115) {
              var name = this.officalStaffsDataList.filter(function (item) {
                if (item.lookupValueId == selectedSubStaffCateogryId) {
                  return item.lookupValueName;
                }
              });

              if (name === undefined || name.length == 0) {
                this.entry.jobTitle = "";
                return "";
              } else {
                this.entry.jobTitle = name[0].lookupValueName;
                return name[0].lookupValueName;
              }
            } else {
              var _name = this.personalStaffsDataList.filter(function (item) {
                if (item.lookupValueId == selectedSubStaffCateogryId) {
                  return item.lookupValueName;
                }
              });

              if (_name === undefined || _name.length == 0) {
                this.entry.jobTitle = "";
                return "";
              } else {
                this.entry.jobTitle = _name[0].lookupValueName;
                return _name[0].lookupValueName;
              }
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.entry = {};
          this.staffDetails = [];
          this.gateDataList = [];
          this.officalStaffsDataList = [];
          this.personalStaffsDataList = [];
          this.staffService.getAllAttendancesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            //filter active true items
            _this8.entryListData = res.filter(function (data) {
              return data.isActive;
            });
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](_this8.entryListData, function (item) {
              _this8.staffService.getStaffByStaffId(item.staffId).subscribe(function (staff) {
                _this8.staffDetails.push(staff[0]);
              });
            }); //get all gates

            _this8.staffService.getAllGatesByApartmentId(parseInt(_this8.cookieService.get('apartmentId'))).subscribe(function (res) {
              _this8.gateDataList = res;
            }); //get all offical staff 


            _this8.lookupService.getLookupValueByLookupTypeId(26).subscribe(function (res) {
              _this8.officalStaffsDataList = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {}); //get all personal staffs 


            _this8.lookupService.getLookupValueByLookupTypeId(27).subscribe(function (res) {
              _this8.personalStaffsDataList = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});

            _this8.totalItems = _this8.entryListData.length;

            if (_this8.totalItems > _this8.itemLimit) {
              _this8.ItemEndIndex = _this8.itemLimit;
            } else {
              _this8.ItemEndIndex = _this8.totalItems;
            }

            _this8.isEntryDataLoaded = true;
          });
        }
      }]);

      return StaffAttendanceComponent;
    }();

    StaffAttendanceComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    StaffAttendanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-attendance',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-attendance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-attendance.component.scss */
      "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], StaffAttendanceComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffGatesStaffGatesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtZ2F0ZXMvc3RhZmYtZ2F0ZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: StaffGatesComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffGatesStaffGatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffGatesComponent", function () {
      return StaffGatesComponent;
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


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var StaffGatesComponent =
    /*#__PURE__*/
    function () {
      function StaffGatesComponent(injector, dialog, staffService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, StaffGatesComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isGateLoaded = true;
        this.isGateTableLoaded = false;
        this.isAddGateLoaded = false;
        this.isEditGate = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(StaffGatesComponent, [{
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
        key: "submitGateForm",
        value: function submitGateForm(form) {
          var _this9 = this;

          this.isGateLoaded = false;

          if (!this.isEditGate) {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "gateName": this.gate.gateName,
              "comments": this.gate.comments,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": 0,
              "updatedOn": new Date().toISOString()
            };
            this.staffService.addGate(details).subscribe(function (res) {
              if (res.message) {
                _this9.isGateLoaded = true;

                _this9.sharedService.setAlertMessage("Gate added Successfully!");

                _this9.getAllGates();
              }
            }, function (error) {});
          } else {
            var _details2 = {
              "gateId": parseInt(this.gate.gateId),
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "gateName": this.gate.gateName,
              "comments": this.gate.comments,
              "isActive": this.gate.isActive,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString()
            };
            this.staffService.updateGate(_details2).subscribe(function (res) {
              if (res.message) {
                _this9.isGateLoaded = true;

                _this9.sharedService.setAlertMessage("Gate updated Successfully!");

                _this9.getAllGates();
              }
            }, function (error) {});
          }
        }
      }, {
        key: "getAllGates",
        value: function getAllGates() {
          var _this10 = this;

          this.staffService.getAllGatesByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this10.isGateTableLoaded = true;
            _this10.gateListData = res.filter(function (item) {
              return item.isActive;
            });
            _this10.totalItems = _this10.gateListData.length;

            if (_this10.totalItems > _this10.itemLimit) {
              _this10.ItemEndIndex = _this10.itemLimit;
            } else {
              _this10.ItemEndIndex = _this10.totalItems;
            }
          }, function (error) {});
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(item) {
          this.modalService.showConfirmModal(item);
        }
      }, {
        key: "addGate",
        value: function addGate() {
          var _this11 = this;

          this.isEditGate = false;
          this.isAddGateLoaded = false;
          setTimeout(function () {
            _this11.isAddGateLoaded = true;
          }, 10);
          setTimeout(function () {
            var elem = document.querySelector('.add-gate-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "editGate",
        value: function editGate(id) {
          var _this12 = this;

          this.isEditGate = true;
          this.isGateLoaded = false;
          this.staffService.getGateByGateId(id).subscribe(function (res) {
            _this12.isGateLoaded = true;
            _this12.gate = res[0];
            _this12.isAddGateLoaded = false;
            setTimeout(function () {
              _this12.isAddGateLoaded = true;
            }, 10);
            setTimeout(function () {
              var elem = document.querySelector('.add-gate-card');
              var scrollTo = elem.getBoundingClientRect().top - 100;
              window.scroll({
                top: scrollTo,
                behavior: 'smooth'
              });
            }, 100);
          }, function (error) {});
        }
      }, {
        key: "closeGate",
        value: function closeGate() {
          this.isAddGateLoaded = false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.gate = {};
          this.getAllGates(); // delete gate

          this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
            if (item != null) {
              _this13.isGateTableLoaded = false;
              var params = {
                gateId: item.gateId,
                deleteBy: parseInt(_this13.cookieService.get('userId'))
              };

              _this13.staffService.deleteGate(params).subscribe(function (res) {
                _this13.gateListData = _this13.gateListData.filter(function (type) {
                  return type.gateId !== item.gateId;
                });

                _this13.sharedService.setUnitListDeleteIndex(null);

                _this13.isGateTableLoaded = true;
              });
            }
          });
        }
      }]);

      return StaffGatesComponent;
    }();

    StaffGatesComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    StaffGatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-gates',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-gates.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-gates.component.scss */
      "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], StaffGatesComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffInactiveStaffStaffInactiveStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtaW5hY3RpdmUtc3RhZmYvc3RhZmYtaW5hY3RpdmUtc3RhZmYuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: StaffInactiveStaffComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffInactiveStaffStaffInactiveStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffInactiveStaffComponent", function () {
      return StaffInactiveStaffComponent;
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


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
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
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var StaffInactiveStaffComponent =
    /*#__PURE__*/
    function () {
      function StaffInactiveStaffComponent(staffService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, StaffInactiveStaffComponent);

        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isStaffDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.staffData = "";
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(StaffInactiveStaffComponent, [{
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
          if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](event)) {
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
        key: "getStaffCategory",
        value: function getStaffCategory(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.staffTypeData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.staffTypeId = data[0].lookupValueId;
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getStaffSubCategory",
        value: function getStaffSubCategory(id) {
          if (this.staffTypeId == 115) {
            var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.staffOfficalCategoryData, function (item) {
              if (item.lookupValueId === id) return item;
            });

            if (data === undefined || data.length == 0) {
              return '';
            } else {
              return data[0].lookupValueName;
            }
          } else {
            var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.staffPersonalCategoryData, function (item) {
              if (item.lookupValueId === id) return item;
            });

            if (data === undefined || data.length == 0) {
              return '';
            } else {
              return data[0].lookupValueName;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.staffService.getAllStaffsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            //filter inactive true items
            _this14.staffListData = res.filter(function (data) {
              return !data.isActive;
            });
            _this14.totalItems = _this14.staffListData.length;

            if (_this14.totalItems > _this14.itemLimit) {
              _this14.ItemEndIndex = _this14.itemLimit;
            } else {
              _this14.ItemEndIndex = _this14.totalItems;
            }

            _this14.isStaffDataLoaded = true;
          }); //staff type

          this.lookupService.getLookupValueByLookupTypeId(25).subscribe(function (res) {
            _this14.staffTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //offical category type

          this.lookupService.getLookupValueByLookupTypeId(26).subscribe(function (res) {
            _this14.staffOfficalCategoryData = res.filter(function (item) {
              return item.isActive;
            });
            console.log(_this14.staffOfficalCategoryData);
          }, function (error) {}); //personal category type

          this.lookupService.getLookupValueByLookupTypeId(27).subscribe(function (res) {
            _this14.staffPersonalCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
        }
      }]);

      return StaffInactiveStaffComponent;
    }();

    StaffInactiveStaffComponent.ctorParameters = function () {
      return [{
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    StaffInactiveStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-inactive-staff',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-inactive-staff.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-inactive-staff.component.scss */
      "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_staff_service__WEBPACK_IMPORTED_MODULE_2__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], StaffInactiveStaffComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffMaintainStaffStaffMaintainStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtbWFpbnRhaW4tc3RhZmYvc3RhZmYtbWFpbnRhaW4tc3RhZmYuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: StaffMaintainStaffComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffMaintainStaffStaffMaintainStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffMaintainStaffComponent", function () {
      return StaffMaintainStaffComponent;
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


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
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

    var StaffMaintainStaffComponent =
    /*#__PURE__*/
    function () {
      function StaffMaintainStaffComponent(router, route, injector, staffService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, StaffMaintainStaffComponent);

        this.router = router;
        this.route = route;
        this.injector = injector;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isStaffDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.staffData = "";
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(StaffMaintainStaffComponent, [{
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(id) {
          this.modalService.showConfirmModal(id);
        }
      }, {
        key: "getTimeFormat",
        value: function getTimeFormat(dateTime) {
          return moment__WEBPACK_IMPORTED_MODULE_9__(dateTime).format("YYYY-MM-DD HH:mm");
        }
      }, {
        key: "getStaffCategory",
        value: function getStaffCategory(staff, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.staffTypeData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.staffListData.map(function (obj) {
              if (obj.staffId == staff.staffId) {
                obj.staffCategory = data[0].lookupValueName;
              }
            });
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getStaffSubCategory",
        value: function getStaffSubCategory(staff, id) {
          if (this.staffTypeId == 115) {
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.staffOfficalCategoryData, function (item) {
              if (item.lookupValueId === id) return item;
            });

            if (data === undefined || data.length == 0) {
              return '';
            } else {
              this.staffListData.map(function (obj) {
                if (obj.staffId == staff.staffId) {
                  obj.staffSubCategory = data[0].lookupValueName;
                }
              });
              return data[0].lookupValueName;
            }
          } else {
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.staffPersonalCategoryData, function (item) {
              if (item.lookupValueId === id) return item;
            });

            if (data === undefined || data.length == 0) {
              return '';
            } else {
              this.staffListData.map(function (obj) {
                if (obj.staffId == staff.staffId) {
                  obj.staffSubCategory = data[0].lookupValueName;
                }
              });
              return data[0].lookupValueName;
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.staffService.getAllStaffsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            //filter active true items
            _this15.staffListData = res.filter(function (data) {
              return data.isActive;
            });
            _this15.totalItems = _this15.staffListData.length;

            if (_this15.totalItems > _this15.itemLimit) {
              _this15.ItemEndIndex = _this15.itemLimit;
            } else {
              _this15.ItemEndIndex = _this15.totalItems;
            }

            _this15.isStaffDataLoaded = true;
          }); //staff type

          this.lookupService.getLookupValueByLookupTypeId(25).subscribe(function (res) {
            _this15.staffTypeData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); //offical category type

          this.lookupService.getLookupValueByLookupTypeId(26).subscribe(function (res) {
            _this15.staffOfficalCategoryData = res.filter(function (item) {
              return item.isActive;
            });
            console.log(_this15.staffOfficalCategoryData);
          }, function (error) {}); //personal category type

          this.lookupService.getLookupValueByLookupTypeId(27).subscribe(function (res) {
            _this15.staffPersonalCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var params = {
                staffId: id,
                deleteBy: parseInt(_this15.cookieService.get('userId'))
              };

              _this15.staffService.deleteStaff(params).subscribe(function (res) {
                underscore__WEBPACK_IMPORTED_MODULE_8__["each"](_this15.staffListData, function (type) {
                  if (type.staffId == id) {
                    type.isActive = false;
                  }
                });
                setTimeout(function () {
                  _this15.staffListData = _this15.staffListData.filter(function (type) {
                    return type.staffId !== id;
                  });
                  _this15.totalItems = _this15.staffListData.length;

                  _this15.sharedService.setAlertMessage("Staff deleted");

                  _this15.sharedService.setUnitListDeleteIndex(null);
                }, 500);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return StaffMaintainStaffComponent;
    }();

    StaffMaintainStaffComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    StaffMaintainStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-maintain-staff',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-maintain-staff.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-maintain-staff.component.scss */
      "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], StaffMaintainStaffComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffOvertimeStaffOvertimeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtb3ZlcnRpbWUvc3RhZmYtb3ZlcnRpbWUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: StaffOvertimeComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffOvertimeStaffOvertimeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffOvertimeComponent", function () {
      return StaffOvertimeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaffOvertimeComponent =
    /*#__PURE__*/
    function () {
      function StaffOvertimeComponent() {
        _classCallCheck(this, StaffOvertimeComponent);
      }

      _createClass(StaffOvertimeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffOvertimeComponent;
    }();

    StaffOvertimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-overtime',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-overtime.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-overtime.component.scss */
      "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaffOvertimeComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffPayrollStaffPayrollComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtcGF5cm9sbC9zdGFmZi1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: StaffPayrollComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffPayrollStaffPayrollComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffPayrollComponent", function () {
      return StaffPayrollComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaffPayrollComponent =
    /*#__PURE__*/
    function () {
      function StaffPayrollComponent() {
        _classCallCheck(this, StaffPayrollComponent);
      }

      _createClass(StaffPayrollComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffPayrollComponent;
    }();

    StaffPayrollComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-payroll',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-payroll.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-payroll.component.scss */
      "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaffPayrollComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffReportsStaffReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtcmVwb3J0cy9zdGFmZi1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: StaffReportsComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffReportsStaffReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffReportsComponent", function () {
      return StaffReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaffReportsComponent =
    /*#__PURE__*/
    function () {
      function StaffReportsComponent() {
        _classCallCheck(this, StaffReportsComponent);
      }

      _createClass(StaffReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffReportsComponent;
    }();

    StaffReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-reports.component.scss */
      "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaffReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffSetupStaffSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtc2V0dXAvc3RhZmYtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: StaffSetupComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffSetupStaffSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffSetupComponent", function () {
      return StaffSetupComponent;
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


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var StaffSetupComponent =
    /*#__PURE__*/
    function () {
      function StaffSetupComponent(injector, dialog, userService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, StaffSetupComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.categoryOffcialData = "";
        this.categoryPersonalData = "";
        this.isCategoryDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isStaffLoaded = false;
        this.staffType = "";
        this.staffCategory = "";
        this.staffDeleteTypeId = "";
        this.errorMessage = "";
        this.isError = false;
        this.isEditStaffCategory = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(StaffSetupComponent, [{
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
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "editStaffCategory",
        value: function editStaffCategory(category) {
          this.isEditStaffCategory = true;
          this.staffCategory = category.lookupValueName;
          this.staffCategoryId = category.lookupValueId;
        }
      }, {
        key: "submitStaffForm",
        value: function submitStaffForm(form) {
          var _this16 = this;

          this.isError = false; //offical category

          if (this.staffType == "115") {
            this.staffTypeId = 26;
            var categoryAvailable = underscore__WEBPACK_IMPORTED_MODULE_8__["some"](this.categoryOffcialData, function (item) {
              return item.lookupValueName === _this16.staffCategory;
            });

            if (categoryAvailable) {
              this.isError = true;
              this.errorMessage = 'Category already available';
              this.isStaffLoaded = true;
            } else {
              this.isStaffLoaded = false;

              if (!this.isEditStaffCategory) {
                var details = {
                  "lookupTypeId": this.staffTypeId,
                  "lookupValueName": this.staffCategory,
                  "description": this.staffCategory,
                  "isActive": true,
                  "insertedBy": parseInt(this.cookieService.get('userId')),
                  "insertedOn": "2019-11-16T14:50:08.217Z",
                  "updatedBy": 0,
                  "updatedOn": "2019-11-16T14:50:08.217Z"
                };
                this.lookupService.addLookupValue(details).subscribe(function (res) {
                  _this16.isStaffLoaded = true;
                  _this16.isCategoryDataLoaded = false;

                  _this16.lookupService.getLookupValueByLookupTypeId(_this16.staffTypeId).subscribe(function (res) {
                    var categoryOffcialListData = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this16.categoryOffcialListData = categoryOffcialListData;
                    _this16.isCategoryDataLoaded = true;
                  }, function (error) {});
                }, function (error) {});
              } else {
                var _details3 = {
                  "lookupValueId": this.staffCategoryId,
                  "lookupTypeId": this.staffTypeId,
                  "lookupValueName": this.staffCategory,
                  "description": this.staffCategory,
                  "isActive": true,
                  "insertedBy": 0,
                  "insertedOn": "2019-11-16T14:50:08.217Z",
                  "updatedBy": parseInt(this.cookieService.get('userId')),
                  "updatedOn": "2019-11-16T14:50:08.217Z"
                };
                this.lookupService.updateLookupValue(_details3).subscribe(function (res) {
                  _this16.isStaffLoaded = true;
                  _this16.isCategoryDataLoaded = false;
                  _this16.isEditStaffCategory = false;

                  _this16.lookupService.getLookupValueByLookupTypeId(_this16.staffTypeId).subscribe(function (res) {
                    var categoryOffcialListData = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this16.categoryOffcialListData = categoryOffcialListData;
                    _this16.isCategoryDataLoaded = true;
                  }, function (error) {});
                }, function (error) {});
              }
            }
          } else {
            this.staffTypeId = 27;
            var categoryAvailable = underscore__WEBPACK_IMPORTED_MODULE_8__["some"](this.categoryPersonalData, function (item) {
              return item.lookupValueName === _this16.staffCategory;
            });

            if (categoryAvailable) {
              this.isError = true;
              this.errorMessage = 'Category already available';
              this.isStaffLoaded = true;
            } else {
              this.isStaffLoaded = false;

              if (!this.isEditStaffCategory) {
                var _details4 = {
                  "lookupTypeId": this.staffTypeId,
                  "lookupValueName": this.staffCategory,
                  "description": this.staffCategory,
                  "isActive": true,
                  "insertedBy": parseInt(this.cookieService.get('userId')),
                  "insertedOn": "2019-11-16T14:50:08.217Z",
                  "updatedBy": 0,
                  "updatedOn": "2019-11-16T14:50:08.217Z"
                };
                this.lookupService.addLookupValue(_details4).subscribe(function (res) {
                  _this16.isStaffLoaded = true;
                  _this16.isCategoryDataLoaded = false;

                  _this16.lookupService.getLookupValueByLookupTypeId(_this16.staffTypeId).subscribe(function (res) {
                    var categoryPersonalListData = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this16.categoryPersonalListData = categoryPersonalListData;
                    _this16.isCategoryDataLoaded = true;
                  }, function (error) {});
                }, function (error) {});
              } else {
                var _details5 = {
                  "lookupValueId": this.staffCategoryId,
                  "lookupTypeId": this.staffTypeId,
                  "lookupValueName": this.staffCategory,
                  "description": this.staffCategory,
                  "isActive": true,
                  "insertedBy": 0,
                  "insertedOn": "2019-11-16T14:50:08.217Z",
                  "updatedBy": parseInt(this.cookieService.get('userId')),
                  "updatedOn": "2019-11-16T14:50:08.217Z"
                };
                this.lookupService.updateLookupValue(_details5).subscribe(function (res) {
                  _this16.isStaffLoaded = true;
                  _this16.isCategoryDataLoaded = false;
                  _this16.isEditStaffCategory = false;

                  _this16.lookupService.getLookupValueByLookupTypeId(_this16.staffTypeId).subscribe(function (res) {
                    var categoryPersonalListData = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this16.categoryPersonalListData = categoryPersonalListData;
                    _this16.isCategoryDataLoaded = true;
                  }, function (error) {});
                }, function (error) {});
              }
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          //get all staff type
          this.lookupService.getLookupValueByLookupTypeId(25).subscribe(function (res) {
            _this17.staffCategoryData = res;
            _this17.isStaffLoaded = true;
          }, function (error) {}); //get all offical category

          this.lookupService.getLookupValueByLookupTypeId(26).subscribe(function (res) {
            var categoryOffcialListData = res.filter(function (item) {
              return item.isActive;
            });
            _this17.categoryOffcialListData = categoryOffcialListData; //get all personal category

            _this17.lookupService.getLookupValueByLookupTypeId(27).subscribe(function (res) {
              var categoryPersonalListData = res.filter(function (item) {
                return item.isActive;
              });
              _this17.categoryPersonalListData = categoryPersonalListData;
              _this17.isCategoryDataLoaded = true;
            }, function (error) {});
          }, function (error) {}); // delete lookupvalue

          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              if (_this17.staffDeleteTypeId == "115") {
                var params = {
                  lookupValueId: _this17.categoryOffcialListData[index].lookupValueId,
                  updateUserId: parseInt(_this17.cookieService.get('userId'))
                };
              } else {
                var params = {
                  lookupValueId: _this17.categoryPersonalListData[index].lookupValueId,
                  updateUserId: parseInt(_this17.cookieService.get('userId'))
                };
              }

              _this17.isCategoryDataLoaded = false;

              _this17.lookupService.deleteLookupvalue(params).subscribe(function (res) {
                if (_this17.staffDeleteTypeId == "115") {
                  _this17.categoryOffcialListData.splice(index, 1);
                } else {
                  _this17.categoryPersonalListData.splice(index, 1);
                }

                _this17.isCategoryDataLoaded = true;

                _this17.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return StaffSetupComponent;
    }();

    StaffSetupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    StaffSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-setup.component.scss */
      "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], StaffSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerComponentsStaffShiftsStaffShiftsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtc2hpZnRzL3N0YWZmLXNoaWZ0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: StaffShiftsComponent */

  /***/
  function srcAppAmsStaffManagerComponentsStaffShiftsStaffShiftsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffShiftsComponent", function () {
      return StaffShiftsComponent;
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


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
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
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");

    var StaffShiftsComponent =
    /*#__PURE__*/
    function () {
      function StaffShiftsComponent(injector, dialog, staffService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, StaffShiftsComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isShiftsLoaded = true;
        this.isShiftTableLoaded = false;
        this.shiftTypeId = "";
        this.shiftStartTime = "";
        this.shiftTotalHrs = 0;
        this.shiftData = "";
        this.shiftType = "";
        this.isEditShift = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.isAddShiftLoaded = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(StaffShiftsComponent, [{
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "getShiftType",
        value: function getShiftType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.shiftTypeList, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.shiftType = data[0].lookupValueName;
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
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
        key: "submitShiftsForm",
        value: function submitShiftsForm(form) {
          var _this18 = this;

          this.isShiftsLoaded = false;

          if (!this.isEditShift) {
            var details = {
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "shiftTypeId": parseInt(this.shiftTypeId),
              "startTime": moment__WEBPACK_IMPORTED_MODULE_8__(this.shiftStartTime).format('HH:mm'),
              "totalHours": this.shiftTotalHrs,
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": 0,
              "updatedOn": "2019-12-03T06:11:51.972Z"
            };
            this.staffService.addShift(details).subscribe(function (res) {
              if (res.message) {
                _this18.isShiftsLoaded = true;

                _this18.sharedService.setAlertMessage("Shift added Successfully!");

                _this18.getAllShifts();
              }
            }, function (error) {});
          } else {
            var _details6 = {
              "shiftId": this.shiftId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "shiftTypeId": parseInt(this.shiftTypeId),
              "startTime": moment__WEBPACK_IMPORTED_MODULE_8__(this.shiftStartTime).format('HH:mm'),
              "totalHours": this.shiftTotalHrs,
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString()
            };
            this.staffService.updateShift(_details6).subscribe(function (res) {
              if (res.message) {
                _this18.isShiftsLoaded = true;

                _this18.sharedService.setAlertMessage("Shift updated Successfully!");

                _this18.getAllShifts();
              }
            }, function (error) {});
          }
        }
      }, {
        key: "addShift",
        value: function addShift() {
          var _this19 = this;

          this.isEditShift = false;
          this.isAddShiftLoaded = false;
          setTimeout(function () {
            _this19.isAddShiftLoaded = true;
          }, 10);
          setTimeout(function () {
            var elem = document.querySelector('.add-shift-card');
            var scrollTo = elem.getBoundingClientRect().top;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 10);
        }
      }, {
        key: "editShift",
        value: function editShift(shift) {
          var _this20 = this;

          this.isAddShiftLoaded = false;
          setTimeout(function () {
            _this20.isAddShiftLoaded = true;
          }, 10);
          this.isEditShift = true;
          this.shiftTypeId = shift.shiftTypeId;
          this.shiftStartTime = moment__WEBPACK_IMPORTED_MODULE_8__(shift.startTime, 'HH:mm').toDate();
          this.shiftTotalHrs = shift.totalHours;
          this.shiftId = shift.shiftId;
          setTimeout(function () {
            var elem = document.querySelector('.add-shift-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
              top: scrollTo,
              behavior: 'smooth'
            });
          }, 100);
        }
      }, {
        key: "closeShift",
        value: function closeShift() {
          this.isAddShiftLoaded = false;
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(item) {
          this.modalService.showConfirmModal(item);
        }
      }, {
        key: "getAllShifts",
        value: function getAllShifts() {
          var _this21 = this;

          this.isShiftTableLoaded = false;
          this.staffService.getAllShiftsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this21.shiftsListData = res.filter(function (item) {
              return item.isActive;
            });
            _this21.totalItems = _this21.shiftsListData.length;

            if (_this21.totalItems > _this21.itemLimit) {
              _this21.ItemEndIndex = _this21.itemLimit;
            } else {
              _this21.ItemEndIndex = _this21.totalItems;
            }

            _this21.isShiftTableLoaded = true;
          }, function (error) {});
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.shift = {};
          this.getAllShifts(); //shift type

          this.lookupService.getLookupValueByLookupTypeId(28).subscribe(function (res) {
            _this22.shiftTypeList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {}); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
            if (item != null) {
              var params = {
                shiftId: item.shiftId,
                deleteBy: parseInt(_this22.cookieService.get('userId'))
              };
              _this22.isShiftTableLoaded = false;

              _this22.staffService.deleteShift(params).subscribe(function (res) {
                _this22.shiftsListData = _this22.shiftsListData.filter(function (type) {
                  return type.shiftId !== item.shiftId;
                });

                _this22.sharedService.setUnitListDeleteIndex(null);

                _this22.isShiftTableLoaded = true;
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return StaffShiftsComponent;
    }();

    StaffShiftsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    StaffShiftsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-shifts',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-shifts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-shifts.component.scss */
      "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_3__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], StaffShiftsComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/staff-manager-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ams/staff-manager/staff-manager-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: StaffManagerRoutingModule */

  /***/
  function srcAppAmsStaffManagerStaffManagerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffManagerRoutingModule", function () {
      return StaffManagerRoutingModule;
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


    var _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/staff-setup/staff-setup.component */
    "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts");
    /* harmony import */


    var _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/staff-maintain-staff/staff-maintain-staff.component */
    "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts");
    /* harmony import */


    var _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/staff-inactive-staff/staff-inactive-staff.component */
    "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts");
    /* harmony import */


    var _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/staff-attendance/staff-attendance.component */
    "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts");
    /* harmony import */


    var _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/staff-payroll/staff-payroll.component */
    "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts");
    /* harmony import */


    var _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/staff-overtime/staff-overtime.component */
    "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts");
    /* harmony import */


    var _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/staff-reports/staff-reports.component */
    "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts");
    /* harmony import */


    var _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/add-staff/add-staff.component */
    "./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts");
    /* harmony import */


    var _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/add-entry/add-entry.component */
    "./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_3__["StaffSetupComponent"]
    }, {
      path: 'maintain-staff',
      component: _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffMaintainStaffComponent"]
    }, {
      path: 'add-staff',
      component: _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_10__["AddStaffComponent"]
    }, {
      path: 'edit-staff/:id',
      component: _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_10__["AddStaffComponent"]
    }, {
      path: 'inactive-staff',
      component: _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_5__["StaffInactiveStaffComponent"]
    }, {
      path: 'overtime',
      component: _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_8__["StaffOvertimeComponent"]
    }, {
      path: 'attendance',
      component: _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_6__["StaffAttendanceComponent"]
    }, {
      path: 'add-entry',
      component: _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_11__["AddEntryComponent"]
    }, {
      path: 'edit-entry/:id',
      component: _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_11__["AddEntryComponent"]
    }, {
      path: 'payroll',
      component: _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_7__["StaffPayrollComponent"]
    }, {
      path: 'reports',
      component: _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_9__["StaffReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var StaffManagerRoutingModule = function StaffManagerRoutingModule() {
      _classCallCheck(this, StaffManagerRoutingModule);
    };

    StaffManagerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], StaffManagerRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/staff-manager.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/ams/staff-manager/staff-manager.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsStaffManagerStaffManagerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL3N0YWZmLW1hbmFnZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/staff-manager.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/ams/staff-manager/staff-manager.component.ts ***!
    \**************************************************************/

  /*! exports provided: StaffManagerComponent */

  /***/
  function srcAppAmsStaffManagerStaffManagerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffManagerComponent", function () {
      return StaffManagerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StaffManagerComponent =
    /*#__PURE__*/
    function () {
      function StaffManagerComponent() {
        _classCallCheck(this, StaffManagerComponent);
      }

      _createClass(StaffManagerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StaffManagerComponent;
    }();

    StaffManagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-staff-manager',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./staff-manager.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/staff-manager.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./staff-manager.component.scss */
      "./src/app/ams/staff-manager/staff-manager.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], StaffManagerComponent);
    /***/
  },

  /***/
  "./src/app/ams/staff-manager/staff-manager.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/ams/staff-manager/staff-manager.module.ts ***!
    \***********************************************************/

  /*! exports provided: StaffManagerModule */

  /***/
  function srcAppAmsStaffManagerStaffManagerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StaffManagerModule", function () {
      return StaffManagerModule;
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


    var _staff_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./staff-manager-routing.module */
    "./src/app/ams/staff-manager/staff-manager-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _staff_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./staff-manager.component */
    "./src/app/ams/staff-manager/staff-manager.component.ts");
    /* harmony import */


    var _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/staff-setup/staff-setup.component */
    "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts");
    /* harmony import */


    var _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/staff-maintain-staff/staff-maintain-staff.component */
    "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts");
    /* harmony import */


    var _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/staff-inactive-staff/staff-inactive-staff.component */
    "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts");
    /* harmony import */


    var _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/staff-attendance/staff-attendance.component */
    "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts");
    /* harmony import */


    var _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/staff-payroll/staff-payroll.component */
    "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts");
    /* harmony import */


    var _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/staff-overtime/staff-overtime.component */
    "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts");
    /* harmony import */


    var _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/staff-reports/staff-reports.component */
    "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts");
    /* harmony import */


    var _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/add-staff/add-staff.component */
    "./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts");
    /* harmony import */


    var _components_staff_gates_staff_gates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/staff-gates/staff-gates.component */
    "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.ts");
    /* harmony import */


    var _components_staff_shifts_staff_shifts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/staff-shifts/staff-shifts.component */
    "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.ts");
    /* harmony import */


    var _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/add-entry/add-entry.component */
    "./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts");

    var StaffManagerModule = function StaffManagerModule() {
      _classCallCheck(this, StaffManagerModule);
    };

    StaffManagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_staff_manager_component__WEBPACK_IMPORTED_MODULE_5__["StaffManagerComponent"], _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_6__["StaffSetupComponent"], _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_7__["StaffMaintainStaffComponent"], _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_8__["StaffInactiveStaffComponent"], _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_9__["StaffAttendanceComponent"], _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_10__["StaffPayrollComponent"], _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_11__["StaffOvertimeComponent"], _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_12__["StaffReportsComponent"], _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_13__["AddStaffComponent"], _components_staff_gates_staff_gates_component__WEBPACK_IMPORTED_MODULE_14__["StaffGatesComponent"], _components_staff_shifts_staff_shifts_component__WEBPACK_IMPORTED_MODULE_15__["StaffShiftsComponent"], _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_16__["AddEntryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _staff_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffManagerRoutingModule"]],
      bootstrap: [_staff_manager_component__WEBPACK_IMPORTED_MODULE_5__["StaffManagerComponent"]]
    })], StaffManagerModule);
    /***/
  }
}]);
//# sourceMappingURL=staff-manager-staff-manager-module-es5.js.map