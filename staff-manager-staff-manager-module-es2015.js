(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["staff-manager-staff-manager-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-entry/add-entry.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-entry/add-entry.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-add-entry-wrapper\">\n\t\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditEntry\">Add Entry</span>\n    \t\t\t\t<span *ngIf=\"isEditEntry\">Edit Entry</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/staff/attendance\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t\n\t\t<form #addEntryForm = \"ngForm\" name=\"addEntryForm\" (ngSubmit)=\"submitEntryForm(addEntryForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-alert-message [message]=\"alertEntryMessage\" [isError]=\"isEntryError\"></app-alert-message>\n\n\t\t\t\t<app-loader *ngIf=\"!isEntrySubmitted\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"isEntrySubmitted\">\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Name*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"staffId\" \n\t\t\t\t\t\t\t\t        id=\"staffId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.staffId\" \n\t\t\t\t\t\t\t\t        (ngModelChange)=\"getStaffJobTitle()\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffDataList\" [value]=\"item.staffId\">{{ item.firstName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Job title*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"ticketSubject\" [(ngModel)]=\"entry.jobTitle\" required>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>In-time*</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"staffInTime\" [owlDateTime]=\"staffInTime\" [owlDateTimeTrigger]=\"staffInTime\" placeholder=\"Date Time\" [(ngModel)]=\"entry.inTime\" required>\n\t\t\t\t\t\t\t\t\t<owl-date-time #staffInTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"staffInTime\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del-c float-left mr-1\" name=\"x-circle\" width=\"18\" *ngIf=\"entry.inTime != '' && entry.inTime != undefined\" (click)=\"entry.inTime=''\"></i-feather>\n\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t  \t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Out-time</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"staffOutTime\" [owlDateTime]=\"staffOutTime\" [owlDateTimeTrigger]=\"staffOutTime\" placeholder=\"Date Time\" [(ngModel)]=\"entry.outTime\">\n\t\t\t\t\t\t\t\t\t<owl-date-time #staffOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"staffOutTime\">\n\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del-c float-left mr-1\" name=\"x-circle\" width=\"18\" *ngIf=\"entry.outTime != '' && entry.outTime != undefined\" (click)=\"entry.outTime=''\"></i-feather>\n\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t  \t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>In Gate*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"inGateId\" \n\t\t\t\t\t\t\t\t        id=\"inGateId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.inGateId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of gatesDataList\" [value]=\"item.gateId\">{{ item.gateName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Out Gate*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"outGateId\" \n\t\t\t\t\t\t\t\t        id=\"outGateId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.outGateId\">\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of gatesDataList\" [value]=\"item.gateId\">{{ item.gateName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t<label>shift Type*</label>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t                            <input name=\"shiftType\" id=\"Morning\" [(ngModel)]=\"shiftType\" (ngModelChange)=\"getShifts()\" value=\"127\" type=\"radio\" required>\n\t\t\t                            <label class=\"radio-inline\" for=\"Morning\">Morning</label>\n\t\t                     \t\t</div>\n\t\t\t                    \t<div class=\"form-group\">\n\t\t\t                            <input name=\"shiftType\" id=\"Night\" [(ngModel)]=\"shiftType\" (ngModelChange)=\"getShifts()\" value=\"128\" type=\"radio\" required>\n\t\t\t                            <label class=\"radio-inline\" for=\"Night\">Night</label>\n\t\t\t                         </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isShiftSelected()\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                    <label>Start Time*</label>\n\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t        name=\"startTime\" \n\t\t\t\t\t\t\t\t        id=\"startTime\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"entry.shiftId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of shiftsFilteredDataList\" [value]=\"item.shiftId\">{{ item.startTime }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Comments</label>\n\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"comments\" [(ngModel)]=\"entryComments\"></textarea>\n\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addEntryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t</ng-container>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n\t\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-staff/add-staff.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-staff/add-staff.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-add-staff-wrapper\">\n\n\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitAddStaffForm(addStaffForm)\"  novalidate>\n\n\t\t<div class=\"card mb-30\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>\n\t    \t\t\t\t<span *ngIf=\"!isEditStaff\">Add Staff</span>\n\t    \t\t\t\t<span *ngIf=\"isEditStaff\">Edit Staff</span>\n\t    \t\t\t</h5>\n\t    \t\t</div>\n\t    \t\t<div class=\"float-right\">\n\t    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/staff/maintain-staff\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t\t</a>\n    \t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"card-body p-0\" id=\"accordion\">\n\n\t\t\t\t<app-alert-message [message]=\"alertStaffMessage\" [isError]=\"isStaffError\" [isSuccess]=\"isStaffSuccess\"></app-alert-message>\n\n\t\t\t\t<app-loader *ngIf=\"isStaffSubmitted\"></app-loader>\n\t\t\t\t\n\t\t\t\t<ng-container *ngIf=\"!isStaffSubmitted\">\n\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#staffCollapseOne\" aria-expanded=\"true\" aria-controls=\"CollapseOne\">Personal Info</li>\n\t\t\t\t\t<div id=\"staffCollapseOne\" class=\"collapse show\" aria-labelledby=\"CollapseOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>First Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"firstName\" [(ngModel)]=\"staff.firstName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Last Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"lastName\" [(ngModel)]=\"staff.lastName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"!isEditStaff\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Password*</label>\n\t\t\t\t\t                    <input type=\"password\" class=\"form-control\" placeholder=\"Enter value\" name=\"password\" [(ngModel)]=\"staff.password\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Date Of Birth</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"staffDOB\" [owlDateTime]=\"staffDOB\" [owlDateTimeTrigger]=\"staffDOB\" placeholder=\"Date\" [(ngModel)]=\"staff.dob\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #staffDOB [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"staffDOB\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Address</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"address\" [(ngModel)]=\"staff.address\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Email*</label>\n\t\t\t\t\t                    <input type=\"email\" class=\"form-control\" placeholder=\"Enter value\" name=\"staffEmail\" [(ngModel)]=\"staff.emailId\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Contact Number</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"contactNumber\" [(ngModel)]=\"staff.contactNumber\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Alternate Contact Number</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"alternateContact\" [(ngModel)]=\"staff.alternateContact\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                   <label>Blood Group</label>\n\t\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t\t        name=\"bloodGroup\" \n\t\t\t\t\t\t\t\t\t        id=\"bloodGroup\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.bloodGroup\">\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of bloodGroupData\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Vehicle ID</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"staffVehicleId\" [(ngModel)]=\"staff.vehicleId\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Gender*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"genderType\" id=\"male\" [(ngModel)]=\"genderType\"  value=\"43\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"male\">Male</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"genderType\" id=\"female\" [(ngModel)]=\"genderType\" value=\"44\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"female\">Female</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Is Vendor*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"vendorType\" id=\"Yes\" [(ngModel)]=\"vendorType\" value=\"Yes\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"vendorType\" id=\"No\" [(ngModel)]=\"vendorType\" value=\"No\" type=\"radio\" >\n\t\t\t\t                            <label class=\"radio-inline\" for=\"No\">No</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t <div class=\"col-sm-4\" *ngIf=\"isVendor()\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                   <label>Vendor Name*</label>\n\t\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t\t        name=\"vendorName\" \n\t\t\t\t\t\t\t\t\t        id=\"vendorName\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.vendorId\">\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of vendorNameList\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Health Issue Notes ( 35 characters)</label>\n\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"healthIssue\" [(ngModel)]=\"staff.healthIssue\"></textarea>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"staffComments\" [(ngModel)]=\"staff.comments\"></textarea>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-photo-selector\" (click)=\"uploaderPhoto.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploaderPhoto type=\"file\"\n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"staff.file\" (change)=\"uploadPhoto($event)\">\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Photo</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isPhotoAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfPhotos; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deletePhoto(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploaderFile.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploaderFile type=\"file\"\n\t\t\t\t\t\t\t\t\t    [(ngModel)]=\"staff.multifile\" (change)=\"uploadFile($event)\" multiple>\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload ID Card Docs</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#staffCollapseTwo\" aria-expanded=\"true\" aria-controls=\"CollapseTwo\">Salary & Leave</li>\n\t\t\t\t\t<div id=\"staffCollapseTwo\" class=\"collapse\" aria-labelledby=\"CollapseTwo\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Base Pay*</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"basePay\" [(ngModel)]=\"staff.basePay\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Allowance 1</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"allowance1\" [(ngModel)]=\"staff.allowance1\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Allowance 2</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"allowance2\" [(ngModel)]=\"staff.allowance2\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Allowance 3</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"allowance3\" [(ngModel)]=\"staff.allowance3\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Overtime Pay Per Hour</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"overtimePayperhour\" [(ngModel)]=\"staff.overtimePayperhour\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Deduction 1</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"deduction1\" [(ngModel)]=\"staff.deduction1\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Deduction 2</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"deduction2\" [(ngModel)]=\"staff.deduction2\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Deduction 3</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"deduction3\" [(ngModel)]=\"staff.deduction3\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Salary Per Day</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"perDaySalary\" [(ngModel)]=\"staff.perDaySalary\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Vacation Leave Days</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"vacationLeaveDays\" [(ngModel)]=\"staff.vacationLeaveDays\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Sick Leave Days</label>\n\t\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"sickLeaveDays\" [(ngModel)]=\"staff.sickLeaveDays\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#staffCollapseThree\" aria-expanded=\"true\" aria-controls=\"CollapseThree\">Work Information</li>\n\t\t\t\t\t<div id=\"staffCollapseThree\" class=\"collapse\" aria-labelledby=\"CollapseThree\" data-parent=\"#accordion\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Category*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"staffCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"staffCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.staffCategoryId\" \n\t\t\t\t\t\t\t\t\t        (ngModelChange)=\"getStaffType(staff.staffCategoryId)\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isCategoryEnabled()\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Sub Category*</label>\n\t\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t\t        name=\"staffSubCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"staffSubCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"staff.staffSubCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Job Start Date</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"jobStartDate\" [owlDateTime]=\"jobStartDate\" [owlDateTimeTrigger]=\"jobStartDate\" placeholder=\"Date\" [(ngModel)]=\"staff.jobStartDate\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #jobStartDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"jobStartDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Job End Date</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"jobEndDate\" [owlDateTime]=\"jobEndDate\" [owlDateTimeTrigger]=\"jobEndDate\" placeholder=\"Date\" [(ngModel)]=\"staff.jobEndDate\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #jobEndDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"jobEndDate\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Planned Entry Time</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"plannedEntryTime\" [owlDateTime]=\"plannedEntryTime\" [owlDateTimeTrigger]=\"plannedEntryTime\" placeholder=\"Date Time\" [(ngModel)]=\"staff.plannedEntryTime\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #plannedEntryTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"plannedEntryTime\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Planned Exit Time</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"plannedExitTime\" [owlDateTime]=\"plannedExitTime\" [owlDateTimeTrigger]=\"plannedExitTime\" placeholder=\"Date Time\" [(ngModel)]=\"staff.plannedExitTime\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #plannedExitTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"plannedExitTime\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</ul>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t<div class=\"row\" *ngIf=\"!isStaffSubmitted\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-attendance-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isEntryDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isEntryDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Entries <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" \n\t\t\t\t\tplaceholder=\"Search...\" [(ngModel)]=\"entryData\" \n\t\t\t\t\t(ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/staff/add-entry\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Attendance</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\"\n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"entryListData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n  \t\t\t<!-- <table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tName\n\t\t\t\t      \t<span (click)=\"sortUnitData('firstName')\" [ngClass]=\"getFieldOrderBy('firstName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"columnField['firstName']\" (ngModelChange)=\"selectColInput('firstName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tJob Title\n\t\t\t\t      \t<span (click)=\"sortUnitData('jobTitle')\" [ngClass]=\"getFieldOrderBy('jobTitle')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Job Title\" [(ngModel)]=\"columnField['jobTitle']\" (ngModelChange)=\"selectColInput('jobTitle')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">In Time <span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Out Time<span (click)=\"sortUnitData('outTime')\" [ngClass]=\"getFieldOrderBy('outTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\">In Gate <span (click)=\"sortUnitData('inGateId')\" [ngClass]=\"getFieldOrderBy('inGateId')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Out Gate <span (click)=\"sortUnitData('outGateId')\" [ngClass]=\"getFieldOrderBy('outGateId')\"></span></th>\n\t\t\t\t      <th scope=\"col\">comments <span (click)=\"sortUnitData('notes')\" [ngClass]=\"getFieldOrderBy('notes')\"></span></th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let entry of entryListData | simpleSearch: staffData | \n\t\t\t\t    sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{getStaffName(entry.staffId)}}</td>\n\t\t\t\t      <td class=\"name\">{{getJobTitle(entry.staffId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{entry.inTime}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{entry.outTime}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getInGateName(entry.inGateId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getOutGateName(entry.outGateId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{entry.notes}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/staff/edit-entry/{{entry.attendanceId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n  \t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-gates-wrapper\">\n\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-header no-border\">\n\t\t\t\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5 class=\"lh-38\">Gates List <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n    \t\t<div class=\"float-right\">\n    \t\t\t<ul class=\"list-inline\">\n    \t\t\t\t<li class=\"list-inline-item\">\n\n\t\t    \t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addGate()\">\n\t\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t\t<span>Add Gate</span>\n\t\t    \t\t\t</a>\n\t\t    \t\t\t\n\t    \t\t\t</li>\n    \t\t\t</ul>\n    \t\t</div>\n\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\t\n\t\t\t<app-loader *ngIf=\"!isGateTableLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isGateTableLoaded\">\n\t\t\t\t\n\t\t\t\t<div class=\"simple-lists\">\n\t\t\t\t\t\n\t\t\t\t\t<ng-container *ngFor=\"let gate of gateListData; let i = index\">\n\t\t\t\t\t\t<li class=\"list-group-item\">\n\t\t\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t\t\t<h5>{{gate.gateName}}</h5>\n\t\t\t\t\t\t\t\t<p>{{gate.comments}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t\t\t\t<a class=\"icon-link mr-2\" href=\"javascript:void(0)\" (click)=\"editGate(gate.gateId)\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>\n\t\t\t\t      \t\t\t<a class=\"icon-link\" href=\"javascript:void(0)\" (click)=\"showConfirmModal(gate)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</div>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t\t<app-pagination \n\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t</app-pagination>\n\t</div>\n\n\t\n\t<div class=\"add-gate-card\" *ngIf=\"isAddGateLoaded\">\n\n\t\t<div class=\"card mb-30\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>\n\t    \t\t\t\t<span *ngIf=\"!isEditGate\">Add Gate</span>\n\t\t\t\t\t\t<span *ngIf=\"isEditGate\">Edit Gate</span>\n\t\t\t\t\t</h5>\n\t    \t\t</div>\n\t    \t\t<div class=\"float-right\" (click)=\"closeGate()\">\n\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n    \t\t</div>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<app-loader *ngIf=\"!isGateLoaded\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"isGateLoaded\">\n\t\t\t\t\t\n\t\t\t\t\t<form #addGateForm = \"ngForm\" name=\"addGateForm\" (ngSubmit)=\"submitGateForm(addGateForm)\"  novalidate>\n\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Gate Name*</label>\n\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"gateName\" [(ngModel)]=\"gate.gateName\" required>\n\t\t\t\t        \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Comments</label>\n\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"healthIssue\" [(ngModel)]=\"gate.comments\" required></textarea>\n\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addGateForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-manager-inactive-staff-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isStaffDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isStaffDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Inactive Staffs <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" \n\t\t\t\t\t[(ngModel)]=\"staffData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n\t\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"staffListData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\t\t\t\n  \t\t\t<!-- <table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Staff Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('firstName')\" [ngClass]=\"getFieldOrderBy('firstName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"columnField['firstName']\" (ngModelChange)=\"selectColInput('firstName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Email ID\n\t\t\t\t      \t<span (click)=\"sortUnitData('emailId')\" [ngClass]=\"getFieldOrderBy('emailId')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email ID\" [(ngModel)]=\"columnField['emailId']\" (ngModelChange)=\"selectColInput('emailId')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Category \n\t\t\t\t      \t<span (click)=\"sortUnitData('staffCategory')\" [ngClass]=\"getFieldOrderBy('staffCategory')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffCategory\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffTypeData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffCategory', 'lookupValueName')\">\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\">Sub Category\n\t\t\t\t       \t<span (click)=\"sortUnitData('staffSubCategory')\" [ngClass]=\"getFieldOrderBy('staffSubCategory')\"></span>\n\t\t\t\t       \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffSubCategory\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffSubCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffOfficalCategoryData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffSubCategory', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t       </th>\n\t\t\t\t      <th scope=\"col\">Phone Number \n\t\t\t\t      \t<span (click)=\"sortUnitData('contactNumber')\" [ngClass]=\"getFieldOrderBy('contactNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" [(ngModel)]=\"columnField['contactNumber']\" (ngModelChange)=\"selectColInput('contactNumber')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let staff of staffListData | simpleSearch: staffData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex; let i = index\">\n\t\t\t\t      <td class=\"name\">{{staff.firstName}}</td>\n\t\t\t\t      <td class=\"name\">{{staff.emailId}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getStaffCategory(staff, staff.staffCategoryId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getStaffSubCategory(staff, staff.staffSubCategoryId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{staff.contactNumber}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/staff/edit-staff/{{staff.staffId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n  \t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-manager-maintain-staff-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isStaffDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isStaffDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Staffs <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\"\n\t\t\t\t\t [(ngModel)]=\"staffData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn trans-white mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/staff/add-staff\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Staff</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t  <jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"staffListData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid> \n\t\t\t   \n\t\t\t\n  \t\t\t<!-- <table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Staff Name \n\t\t\t\t      \t<span (click)=\"sortUnitData('firstName')\" [ngClass]=\"getFieldOrderBy('firstName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Staff Name\" [(ngModel)]=\"columnField['firstName']\" (ngModelChange)=\"selectColInput('firstName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Email ID\n\t\t\t\t      \t<span (click)=\"sortUnitData('emailId')\" [ngClass]=\"getFieldOrderBy('emailId')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email ID\" [(ngModel)]=\"columnField['emailId']\" (ngModelChange)=\"selectColInput('emailId')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Category \n\t\t\t\t      \t<span (click)=\"sortUnitData('staffCategory_Label')\" [ngClass]=\"getFieldOrderBy('staffCategory_Label')\"></span>\n\t\t\t\t      \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffCategory_Label\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffTypeData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffCategory_Label', 'lookupValueName')\">\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\">Sub Category\n\t\t\t\t       \t<span (click)=\"sortUnitData('staffSubcategory_Label')\" [ngClass]=\"getFieldOrderBy('staffSubcategory_Label')\"></span>\n\t\t\t\t       \t<app-simple-select-box\n\t\t\t\t\t\t\tfieldName = \"staffSubcategory_Label\" \n\t\t\t\t\t\t\tfieldText = \"\"\n\t\t\t\t\t\t\tfieldItemName=\"lookupValueName\"\n\t\t\t\t\t\t\tisLabel = \"false\"\n\t\t\t\t\t\t\t[fieldModel] = \"staffSubCategoryId\"\n\t\t\t\t\t\t\tfieldPlaceholder = \"Select\"\n\t\t\t\t\t\t\t[fieldRequired] = \"'required'\"\n\t\t\t\t\t\t\t[fieldList] = \"staffOfficalCategoryData\"\n\t\t\t\t\t\t\t(inputChange) = \"onSelectChange($event, 'staffSubcategory_Label', 'lookupValueName')\">\t\t\t\t\t\t\t\n\t\t\t\t\t\t</app-simple-select-box>\n\t\t\t\t       </th>\n\t\t\t\t      <th scope=\"col\">Phone Number \n\t\t\t\t      \t<span (click)=\"sortUnitData('contactNumber')\" [ngClass]=\"getFieldOrderBy('contactNumber')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone Number\" [(ngModel)]=\"columnField['contactNumber']\" (ngModelChange)=\"selectColInput('contactNumber')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let staff of staffListData | simpleSearch: staffData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex; let i = index\" [ngClass]=\"staff.isActive ? 'active' : 'notactive'\">\n\t\t\t\t      <td class=\"name\">{{staff.firstName}}</td>\n\t\t\t\t      <td class=\"name\">{{staff.emailId}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{staff.staffCategory_Label}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{staff.staffSubcategory_Label}}</td>\n\t\t\t\t      <td class=\"grey\">{{staff.contactNumber}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/staff/edit-staff/{{staff.staffId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(staff.staffId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n  \t\t</div>\n\n\t</div>\n\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  staff-overtime works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  staff-payroll works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  staff-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-setup-wrapper\">\n\n\t<h5 class=\"mb-3\">\n\t\t<span *ngIf=\"!isEditStaffCategory\">Add Staff Category</span>\n\t\t<span *ngIf=\"isEditStaffCategory\">Edit Staff Category</span>\n\t</h5>\n\n\t<div class=\"card mb-30\">\n\t\t\n\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isStaffLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isStaffLoaded\">\n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitStaffForm(addStaffForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Category*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"staffType\" \n\t\t\t\t\t\t\t        id=\"staffType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"staffType\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Sub Category*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"staffCategory\" [(ngModel)]=\"staffCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<ul class=\"list-inline mt-25\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isCategoryDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Offical Staffs</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('status')\">Category <span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subcategory')\">Supervisor <span [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level1')\">Level-1 <span [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level2')\">Level-2 <span [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t      <!-- <th scope=\"col\" (click)=\"sortUnitData('l1day')\">L1 Escdays<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('l2day')\">L2 Escdays<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th> -->\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryOffcialListData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: categoryOffcialData ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <!-- <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td> -->\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"staffType=115;editStaffCategory(category)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=115;showConfirmModal(i);\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div>\n\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Personal Staffs</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('status')\">Category <span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subcategory')\">Supervisor <span [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level1')\">Level-1 <span [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level2')\">Level-2 <span [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t       <!-- <th scope=\"col\" (click)=\"sortUnitData('l1day')\">Escalation to L1 day<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('l2day')\">Escalation to L2day<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th> -->\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryPersonalListData | simpleSearch: categoryPersonalData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t       <!-- <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td> -->\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"staffType=116;editStaffCategory(category)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=116;showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div>\n\n\t<app-staff-gates></app-staff-gates>\n\n\t<app-staff-shifts></app-staff-shifts>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"staff-shifts-wrapper\">\n\n\t<div class=\"card mb-30 table-card\">\n\t\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Shifts <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t\n    \t\t\t<ul class=\"list-inline\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"shiftData\" >\n\t    \t\t\t</li>\n\t    \t\t\t<li class=\"list-inline-item\">\n\n\t    \t\t\t\t<a class=\"btn lime-green\" (click)=\"addShift()\">\n\t    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t    \t\t\t\t\t<span>Add Shift</span>\n\t    \t\t\t\t</a>\n\n    \t\t\t\t</li>\n    \t\t\t</ul>\n\n    \t\t</div>\n  \t\t</div>\n\n\t\t<div class=\"card-body p-0\" *ngIf=\"isShiftTableLoaded\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('shiftType')\">Shift Type<span [ngClass]=\"getFieldOrderBy('shiftType')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('startTime')\">Shift Start Time<span [ngClass]=\"getFieldOrderBy('startTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('totalHours')\">Total (Hrs)<span [ngClass]=\"getFieldOrderBy('totalHours')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let shift of shiftsListData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: shiftData ; let i = index\">\n\t\t\t\t      <td class=\"name text-capitalize\">{{getShiftType(shift.shiftTypeId)}}</td>\n\t\t\t\t      <td class=\"name\">{{shift.startTime}}</td>\n\t\t\t\t      <td class=\"grey\">{{shift.totalHours}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tclass=\"mr-2\" \n\t\t\t\t      \t(click)=\"editShift(shift)\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(shift)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n\t<div class=\"add-shift-card\" *ngIf=\"isAddShiftLoaded\">\n\n\t\t<div class=\"card mb-30\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5 *ngIf=\"!isEditShift\">Add Staff Shifts</h5>\n\t    \t\t\t<h5 *ngIf=\"isEditShift\">Edit Staff Shifts</h5>\n\t    \t\t</div>\n\t    \t\t<div class=\"float-right\" (click)=\"closeShift()\">\n\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-loader *ngIf=\"!isShiftsLoaded\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"isShiftsLoaded\">\n\t\t\t\t\t\n\t\t\t\t\t<form #addShiftForm = \"ngForm\" name=\"addShiftForm\" (ngSubmit)=\"submitShiftsForm(addShiftForm)\"  novalidate>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t                   <label>Shift Type*</label>\n\t\t\t\t                   <select \n\t\t\t\t\t\t\t\t        name=\"shiftTypeId\" \n\t\t\t\t\t\t\t\t        id=\"shiftTypeId\" \n\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t        [(ngModel)]=\"shiftTypeId\" required>\n\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of shiftTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t                </div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Shift Start Time</label>\n\t\t\t\t                    <input class=\"form-control\" name=\"startTime\" [owlDateTime]=\"startTime\" [owlDateTimeTrigger]=\"startTime\" placeholder=\"Date Time\" [(ngModel)]=\"shiftStartTime\">\n\t\t\t\t\t\t\t\t\t<owl-date-time [pickerType]=\"'timer'\" #startTime></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startTime\">\n\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t                    <label>Total hrs</label>\n\t\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter value\" name=\"shiftTotalHrs\" [(ngModel)]=\"shiftTotalHrs\" required>\n\t\t                \t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addShiftForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</form>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/staff-manager.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/staff-manager.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/add-entry/add-entry.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/add-entry/add-entry.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvYWRkLWVudHJ5L2FkZC1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEntryComponent", function() { return AddEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let AddEntryComponent = class AddEntryComponent {
    constructor(router, route, staffService, lookupService, sharedService, cookieService) {
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
    isAdmin() {
        return (this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff') ? true : false;
    }
    isShiftSelected() {
        return this.shiftType != "" ? true : false;
    }
    getShifts() {
        this.shiftsFilteredDataList = this.shiftsDataList.filter(item => {
            return item.shiftTypeId == this.shiftType;
        });
    }
    getStaffJobTitle() {
        this.staffService.getStaffByStaffId(this.entry.staffId).subscribe((res) => {
            this.selectedStaffCateogryId = res[0].staffCategoryId || null;
            this.selectedSubStaffCateogryId = res[0].staffSubCategoryId || null;
            if (this.selectedStaffCateogryId != null) {
                // offical staff
                if (this.selectedStaffCateogryId == 115) {
                    let data = this.officalStaffsDataList.filter(item => {
                        if (item.lookupValueId == this.selectedSubStaffCateogryId) {
                            return item.lookupValueName;
                        }
                    });
                    if (data === undefined || data.length == 0) {
                        this.entry.jobTitle = "";
                    }
                    else {
                        this.entry.jobTitle = data[0].lookupValueName;
                    }
                }
                else {
                    let data = this.personalStaffsDataList.filter(item => {
                        if (item.lookupValueId == this.selectedSubStaffCateogryId) {
                            return item.lookupValueName;
                        }
                    });
                    if (data === undefined || data.length == 0) {
                        this.entry.jobTitle = "";
                    }
                    else {
                        this.entry.jobTitle = data[0].lookupValueName;
                    }
                }
            }
            else {
                this.entry.jobTitle = "";
            }
        });
    }
    submitEntryForm(form) {
        this.isEntrySubmitted = false;
        if (!this.isEditEntry) {
            let details = {
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
            let params = {
                attendance: details
            };
            this.staffService.addAttendance(params).subscribe((res) => {
                if (res.message) {
                    this.isEntrySubmitted = true;
                    this.sharedService.setAlertMessage("Entry added successfully");
                    this.router.navigate(['ams/staff/attendance']);
                }
                else {
                    this.isEntrySubmitted = true;
                    this.isEntryError = true;
                    this.alertEntryMessage = res.errorMessage;
                }
            }, error => {
                this.isEntrySubmitted = true;
                this.isEntryError = true;
                this.alertEntryMessage = "Some error occured";
            });
        }
        else {
            let details = {
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
            let params = {
                attendance: details
            };
            this.staffService.updateAttendance(params).subscribe((res) => {
                if (res.message) {
                    this.isEntrySubmitted = true;
                    this.sharedService.setAlertMessage("Entry updated successfully");
                    this.router.navigate(['ams/staff/attendance']);
                }
                else {
                    this.isEntrySubmitted = true;
                    this.isEntryError = true;
                    this.alertEntryMessage = res.errorMessage;
                }
            }, error => {
                this.isEntrySubmitted = true;
                this.isEntryError = true;
                this.alertEntryMessage = "Some error occured";
            });
        }
    }
    ngOnInit() {
        this.entry = {};
        this.entry.staffId = "";
        this.entry.inGateId = "";
        this.entry.outGateId = "";
        this.entry.shiftId = "";
        if (this.route.params['value'].id != undefined) {
            this.isEditEntry = true;
            this.attendanceId = this.route.params['value'].id;
            this.staffService.getAttendanceByAttendanceId(this.route.params['value'].id).subscribe((res) => {
                this.entry = res[0];
                this.getStaffJobTitle();
                this.staffService.getShiftByShiftId(this.entry.shiftId).subscribe((res) => {
                    this.shiftType = res[0].shiftTypeId.toString();
                    this.getShifts();
                }, error => {
                });
            }, error => {
            });
        }
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.staffService.getAllStaffsByApartmentId(params).subscribe((res) => {
            this.staffDataList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let gatesParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.staffService.getAllGatesByApartmentId(gatesParams).subscribe((res) => {
            this.gatesDataList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let shiftParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.staffService.getAllShiftsByApartmentId(shiftParams).subscribe((res) => {
            this.shiftsDataList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        //get all shift types
        let shiftTypeParams = {
            LookupTypeId: 28
        };
        this.lookupService.getLookupValueByLookupTypeId(shiftTypeParams).subscribe((res) => {
            this.shiftTypeList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let officalListParams = {
            LookupTypeId: 26
        };
        //get all offical staff 
        this.lookupService.getLookupValueByLookupTypeId(officalListParams).subscribe((res) => {
            this.officalStaffsDataList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let personalListParams = {
            LookupTypeId: 27
        };
        //get all personal staffs 
        this.lookupService.getLookupValueByLookupTypeId(personalListParams).subscribe((res) => {
            this.personalStaffsDataList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
    }
};
AddEntryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
AddEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-entry/add-entry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-entry.component.scss */ "./src/app/ams/staff-manager/components/add-entry/add-entry.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], AddEntryComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/components/add-staff/add-staff.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/add-staff/add-staff.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvYWRkLXN0YWZmL2FkZC1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStaffComponent", function() { return AddStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");








let AddStaffComponent = class AddStaffComponent {
    constructor(router, route, userService, staffService, lookupService, sharedService, cookieService) {
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
    isArrayOne() {
        return this.staffArray.length > 1 ? true : false;
    }
    deleteStaff() {
        this.staffArray.splice(this.index, 1);
        this.outputParams.emit(this.staffArray);
    }
    uploadFile(event) {
        this.isFileAdded = true;
        for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedFile = event.target.files[i];
            this.fileList.push(selectedFile);
            this.listOfFiles.push({ 'name': selectedFile.name, 'size': selectedFile.size });
        }
    }
    deleteFile(index) {
        // Delete the item from fileNames list
        this.listOfFiles.splice(index, 1);
        // delete file from FileList
        this.fileList.splice(index, 1);
        this.selectedFile = null;
        if (this.fileList.length == 0 && this.listOfFiles.length == 0) {
            this.isFileAdded = false;
        }
    }
    uploadPhoto(event) {
        this.isPhotoAdded = true;
        for (var i = 0; i <= event.target.files.length - 1; i++) {
            var selectedPhoto = event.target.files[i];
            this.photoList.push(selectedPhoto);
            this.listOfPhotos.push({ 'name': selectedPhoto.name, 'size': selectedPhoto.size });
        }
    }
    deletePhoto(index) {
        // Delete the item from fileNames list
        this.listOfPhotos.splice(index, 1);
        // delete file from FileList
        this.photoList.splice(index, 1);
        this.selectedPhoto = null;
        if (this.photoList.length == 0 && this.listOfPhotos.length == 0) {
            this.isPhotoAdded = false;
        }
    }
    bytesToSize(bytes) {
        if (bytes < 1024)
            return bytes + " Bytes";
        else if (bytes < 1048576)
            return (bytes / 1024).toFixed(3) + " KB";
        else if (bytes < 1073741824)
            return (bytes / 1048576).toFixed(3) + " MB";
        else
            return (bytes / 1073741824).toFixed(3) + " GB";
    }
    isCategoryEnabled() {
        if (!this.isEditStaff) {
            if (this.isTypeSelected)
                return true;
            else
                return false;
        }
        else {
            return true;
        }
    }
    getStaffType(typeId) {
        this.isTypeSelected = true;
        if (typeId == "115") {
            let params = {
                LookupTypeId: 26
            };
            //staff offical category
            this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                this.staffCategoryData = res.filter(item => {
                    return item.isActive;
                });
            }, error => {
            });
        }
        else {
            let params = {
                LookupTypeId: 27
            };
            //staff personal category
            this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                this.staffCategoryData = res.filter(item => {
                    return item.isActive;
                });
            }, error => {
            });
        }
    }
    isVendor() {
        return this.vendorType == 'Yes' ? true : false;
    }
    submitAddStaffForm(form) {
        this.isStaffSubmitted = true;
        this.isStaffError = false;
        if (!this.isEditStaff) {
            //add user
            let userDetails = {
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
            };
            let userParams = {
                user: userDetails
            };
            //add user 
            this.userService.addUser(userParams).subscribe((res) => {
                if (res.message) {
                    this.userId = res.message;
                    let userRole = {
                        "userId": this.userId,
                        "roleId": 5,
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": "2019-11-10T10:00:28.212Z",
                        "updatedBy": 0,
                        "updatedOn": "2019-11-10T10:00:28.212Z"
                    };
                    let roleParams = {
                        userRole: userRole
                    };
                    //add userrole
                    this.userService.addUserRole(roleParams).subscribe((res) => {
                        if (res.message) {
                            let staffDetails = {
                                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                                "userId": this.userId,
                                "firstName": this.staff.firstName,
                                "middleName": "string",
                                "lastName": this.staff.lastName,
                                "emailId": this.staff.emailId,
                                "contactNumber": this.staff.contactNumber.toString(),
                                "alternateContact": this.staff.alternateContact.toString(),
                                "staffNumber": null,
                                "staffCategoryId": parseInt(this.staff.staffCategoryId),
                                "staffSubCategoryId": parseInt(this.staff.staffSubCategoryId),
                                "dob": this.staff.dob,
                                "genderId": parseInt(this.genderType),
                                "bloodGroup": this.staff.bloodGroup,
                                "vendorId": null,
                                "vehicleId": null,
                                "healthIssue": this.staff.healthIssue,
                                "comments": this.staff.comments,
                                "plannedEntryTime": this.staff.plannedEntryTime,
                                "plannedExitTime": this.staff.plannedExitTime,
                                "jobStartDate": this.staff.jobStartDate,
                                "jobEndDate": this.staff.jobEndDate,
                                "mtwtfss": "string",
                                "photoId": 4,
                                "idcardImg1": null,
                                "idcardImg2": null,
                                "vacationLeaveDays": parseInt(this.staff.vacationLeaveDays),
                                "sickLeaveDays": parseInt(this.staff.sickLeaveDays),
                                "basePay": this.staff.basePay,
                                "overtimePayperhour": this.staff.overtimePayperhour,
                                "allowance1": this.staff.allowance1,
                                "allowance2": this.staff.allowance2,
                                "allowance3": this.staff.allowance3,
                                "deduction1": this.staff.deduction1,
                                "deduction2": this.staff.deduction2,
                                "deduction3": this.staff.deduction3,
                                "perDaySalary": this.staff.perDaySalary,
                                "shiftId": null,
                                "jobTitleId": parseInt(this.staff.staffSubCategoryId),
                                "isActive": true,
                                "insertedBy": parseInt(this.cookieService.get('userId')),
                                "insertedOn": "2019-11-30T12:41:45.620Z",
                                "updatedBy": parseInt(this.cookieService.get('userId')),
                                "updatedOn": "2019-11-30T12:41:45.620Z"
                            };
                            let staffParams = {
                                staff: staffDetails
                            };
                            this.staffService.addStaff(staffParams).subscribe((res) => {
                                this.isStaffSubmitted = false;
                                if (res.message) {
                                    this.sharedService.setAlertMessage("Staff added successfully");
                                    this.router.navigate(['ams/staff/maintain-staff']);
                                }
                                else {
                                    this.isStaffError = true;
                                    this.alertStaffMessage = res.alertTicketMessage;
                                }
                            }, error => {
                                this.isStaffSubmitted = false;
                                this.isStaffError = true;
                                this.alertStaffMessage = res.errorMessage;
                            });
                        }
                    }, error => {
                        console.log(error);
                    });
                }
                else {
                    this.isStaffSubmitted = false;
                    this.isStaffError = true;
                    this.alertStaffMessage = res.errorMessage;
                }
            }, error => {
            });
        }
        else {
            this.isStaffSubmitted = true;
            this.isStaffError = false;
            //edit user
            let userDetails = {
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
            };
            let userParams = {
                user: userDetails
            };
            //edit user 
            this.userService.updateUser(userParams).subscribe((res) => {
                if (res.message) {
                    let staffDetails = {
                        "staffId": this.route.params['value'].id,
                        "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                        "userId": this.userId,
                        "firstName": this.staff.firstName,
                        "middleName": "string",
                        "lastName": this.staff.lastName,
                        "emailId": this.staff.emailId,
                        "contactNumber": this.staff.contactNumber.toString(),
                        "alternateContact": this.staff.alternateContact.toString(),
                        "staffNumber": null,
                        "staffCategoryId": parseInt(this.staff.staffCategoryId),
                        "staffSubCategoryId": parseInt(this.staff.staffSubCategoryId),
                        "dob": this.staff.dob,
                        "genderId": parseInt(this.genderType),
                        "bloodGroup": this.staff.bloodGroup,
                        "vendorId": null,
                        "vehicleId": null,
                        "healthIssue": this.staff.healthIssue,
                        "comments": this.staff.comments,
                        "plannedEntryTime": this.staff.plannedEntryTime,
                        "plannedExitTime": this.staff.plannedExitTime,
                        "jobStartDate": this.staff.jobStartDate,
                        "jobEndDate": this.staff.jobEndDate,
                        "mtwtfss": "string",
                        "photoId": 4,
                        "idcardImg1": null,
                        "idcardImg2": null,
                        "vacationLeaveDays": parseInt(this.staff.vacationLeaveDays),
                        "sickLeaveDays": parseInt(this.staff.sickLeaveDays),
                        "basePay": this.staff.basePay,
                        "overtimePayperhour": this.staff.overtimePayperhour,
                        "allowance1": this.staff.allowance1,
                        "allowance2": this.staff.allowance2,
                        "allowance3": this.staff.allowance3,
                        "deduction1": this.staff.deduction1,
                        "deduction2": this.staff.deduction2,
                        "deduction3": this.staff.deduction3,
                        "perDaySalary": this.staff.perDaySalary,
                        "shiftId": null,
                        "jobTitleId": parseInt(this.staff.staffSubCategoryId),
                        "isActive": true,
                        "insertedBy": 0,
                        "insertedOn": "2019-11-30T12:41:45.620Z",
                        "updatedBy": parseInt(this.cookieService.get('userId')),
                        "updatedOn": "2019-11-30T12:41:45.620Z"
                    };
                    let staffParams = {
                        staff: staffDetails
                    };
                    //edit staff
                    this.staffService.updateStaff(staffParams).subscribe((res) => {
                        this.isStaffSubmitted = false;
                        if (res.message) {
                            //this.isStaffSuccess = true;
                            //this.alertStaffMessage = "Staff updated successfully";
                            //this.staffId = res.message;
                            this.sharedService.setAlertMessage("Staff updated successfully");
                            this.router.navigate(['ams/staff/maintain-staff']);
                        }
                        else {
                            this.isStaffError = true;
                            this.alertStaffMessage = res.alertTicketMessage;
                        }
                    }, error => {
                        this.isStaffSubmitted = false;
                        this.isStaffError = true;
                        this.alertStaffMessage = res.errorMessage;
                    });
                }
                else {
                    this.isStaffSubmitted = false;
                    this.isStaffError = true;
                    this.alertStaffMessage = res.errorMessage;
                }
            });
        }
    }
    ngOnInit() {
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
            this.staffService.getStaffByStaffId(this.route.params['value'].id).subscribe((res) => {
                this.staff = res[0];
                this.userId = this.staff.userId;
                this.genderType = this.staff.genderId.toString();
                this.getStaffType(this.staff.staffCategoryId);
            }, error => {
            });
        }
        let groupParams = {
            LookupTypeId: 24
        };
        this.lookupService.getLookupValueByLookupTypeId(groupParams).subscribe((res) => {
            this.bloodGroupData = res;
        });
        let staffParams = {
            LookupTypeId: 25
        };
        //staff type
        this.lookupService.getLookupValueByLookupTypeId(staffParams).subscribe((res) => {
            this.staffTypeData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let categoryParams = {
            LookupTypeId: 26
        };
        //category type
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            this.staffCategoryData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
    }
};
AddStaffComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddStaffComponent.prototype, "index", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddStaffComponent.prototype, "staffArray", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AddStaffComponent.prototype, "outputParams", void 0);
AddStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-staff',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/add-staff/add-staff.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-staff.component.scss */ "./src/app/ams/staff-manager/components/add-staff/add-staff.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AddStaffComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtYXR0ZW5kYW5jZS9zdGFmZi1hdHRlbmRhbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: StaffAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffAttendanceComponent", function() { return StaffAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/constants.service */ "./src/app/shared/services/constants.service.ts");










let StaffAttendanceComponent = class StaffAttendanceComponent {
    constructor(staffService, lookupService, cookieService, constantsService, router) {
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.constantsService = constantsService;
        this.router = router;
        this.isEntryDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.entryData = "";
        this.selectedInput = "";
        this.columnField = {};
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
    selectColInput(value) {
        this.selectedInput = value;
    }
    onSelectChange(event, type, name) {
        if (!underscore__WEBPACK_IMPORTED_MODULE_6__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
        }
        else {
            this.columnField = {};
        }
    }
    getInGateName(id) {
        var data = this.gateDataList.filter(item => {
            return item.gateId == id;
        });
        if (data === undefined || data.length === 0) {
            this.entry.inGateId = "";
            return "";
        }
        else {
            this.entry.inGateId = data[0].gateName;
            return data[0].gateName;
        }
    }
    getOutGateName(id) {
        var data = this.gateDataList.filter(item => {
            return item.gateId == id;
        });
        if (data === undefined || data.length === 0) {
            this.entry.outGateId = "";
            return "";
        }
        else {
            this.entry.outGateId = data[0].gateName;
            return data[0].gateName;
        }
    }
    getStaffName(id) {
        var data = this.staffDetails.filter(item => {
            return item.staffId == id;
        });
        if (data === undefined || data.length === 0) {
            this.entry.firstName = "";
            return "";
        }
        else {
            this.entry.firstName = data[0].firstName;
            return data[0].firstName;
        }
    }
    getJobTitle(id) {
        var data = this.staffDetails.filter(item => {
            return item.staffId == id;
        });
        if (data === undefined || data.length === 0) {
            this.entry.jobTitle = "";
            return "";
        }
        else {
            var selectedStaffCateogryId = data[0].staffCategoryId;
            var selectedSubStaffCateogryId = data[0].staffSubCategoryId;
            // offical staff
            if (selectedStaffCateogryId == 115) {
                let name = this.officalStaffsDataList.filter(item => {
                    if (item.lookupValueId == selectedSubStaffCateogryId) {
                        return item.lookupValueName;
                    }
                });
                if (name === undefined || name.length == 0) {
                    this.entry.jobTitle = "";
                    return "";
                }
                else {
                    this.entry.jobTitle = name[0].lookupValueName;
                    return name[0].lookupValueName;
                }
            }
            else {
                let name = this.personalStaffsDataList.filter(item => {
                    if (item.lookupValueId == selectedSubStaffCateogryId) {
                        return item.lookupValueName;
                    }
                });
                if (name === undefined || name.length == 0) {
                    this.entry.jobTitle = "";
                    return "";
                }
                else {
                    this.entry.jobTitle = name[0].lookupValueName;
                    return name[0].lookupValueName;
                }
            }
        }
    }
    onGlSearchFilter() {
        if (this.entryData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.entryData;
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
    onEditAttendenceStaff(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let attendanceId = dataRecord.attendanceId;
        this.router.navigateByUrl('/ams/staff/edit-entry/' + attendanceId);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Name',
                datafield: 'apartmentId',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Job itle',
                datafield: 'attendanceId',
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Intime',
                datafield: 'inTime',
                minwidth: 120,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Outtime',
                datafield: 'outTime',
                minwidth: 120,
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format(this.constantsService.dateFormat) + '</div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'Ingate',
                datafield: 'inGateId',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Outgate',
                datafield: 'outGateId',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Comments',
                datafield: 'insertedBy',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                minwidth: 120,
                cellsrenderer: (row, coloumn, value) => {
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" class="mr-2" onClick="editAttendenceStaff(' + row + ')">'
                        + '<i class="icon fa fa-pencil edit" aria-hidden="true"></i>'
                        + '</a>'
                        + '</div>';
                },
                renderer: columnrenderer
            }];
        this.entry = {};
        this.staffDetails = [];
        this.gateDataList = [];
        this.officalStaffsDataList = [];
        this.personalStaffsDataList = [];
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.staffService.getAllAttendancesByApartmentId(params).subscribe((res) => {
            //filter active true items
            this.entryListData = res.filter(data => {
                return data.isActive;
            });
            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.entryListData, item => {
                this.staffService.getStaffByStaffId(item.staffId).subscribe((staff) => {
                    this.staffDetails.push(staff[0]);
                });
            });
            console.log('entryListData', this.entryListData);
            this.gridSourceData = {
                localdata: this.entryListData,
                datatype: "array"
            };
            this.entryListData = new jqx.dataAdapter(this.gridSourceData);
            let dataListparams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            //get all gates
            this.staffService.getAllGatesByApartmentId(dataListparams).subscribe((res) => {
                this.gateDataList = res;
            });
            let officialListparams = {
                LookupTypeId: 26
            };
            //get all offical staff 
            this.lookupService.getLookupValueByLookupTypeId(officialListparams).subscribe((res) => {
                this.officalStaffsDataList = res.filter(item => {
                    return item.isActive;
                });
            }, error => {
            });
            let personalListparams = {
                LookupTypeId: 27
            };
            //get all personal staffs 
            this.lookupService.getLookupValueByLookupTypeId(personalListparams).subscribe((res) => {
                this.personalStaffsDataList = res.filter(item => {
                    return item.isActive;
                });
            }, error => {
            });
            this.totalItems = this.entryListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isEntryDataLoaded = true;
        });
    }
};
StaffAttendanceComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_2__["StaffService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_9__["ConstantsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])
], StaffAttendanceComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditAttendenceStaff', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], StaffAttendanceComponent.prototype, "onEditAttendenceStaff", null);
StaffAttendanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-attendance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-attendance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-attendance.component.scss */ "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_2__["StaffService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_9__["ConstantsService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], StaffAttendanceComponent);

function editAttendenceStaff(row) {
    var event = new CustomEvent('onEditAttendenceStaff', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editAttendenceStaff = editAttendenceStaff;


/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtZ2F0ZXMvc3RhZmYtZ2F0ZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StaffGatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffGatesComponent", function() { return StaffGatesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let StaffGatesComponent = class StaffGatesComponent {
    constructor(injector, dialog, staffService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.staffService = staffService;
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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
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
    submitGateForm(form) {
        this.isGateLoaded = false;
        if (!this.isEditGate) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "gateName": this.gate.gateName,
                "comments": this.gate.comments,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString()
            };
            let params = {
                gate: details
            };
            this.staffService.addGate(params).subscribe((res) => {
                if (res.message) {
                    this.isGateLoaded = true;
                    this.sharedService.setAlertMessage("Gate added Successfully!");
                    this.getAllGates();
                }
            }, error => {
            });
        }
        else {
            let details = {
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
            let params = {
                gate: details
            };
            this.staffService.updateGate(params).subscribe((res) => {
                if (res.message) {
                    this.isGateLoaded = true;
                    this.sharedService.setAlertMessage("Gate updated Successfully!");
                    this.getAllGates();
                }
            }, error => {
            });
        }
    }
    getAllGates() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.staffService.getAllGatesByApartmentId(params).subscribe((res) => {
            this.isGateTableLoaded = true;
            this.gateListData = res.filter(item => {
                return item.isActive;
            });
            this.totalItems = this.gateListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        }, error => {
        });
    }
    showConfirmModal(item) {
        this.modalService.showConfirmModal(item);
    }
    addGate() {
        this.isEditGate = false;
        this.isAddGateLoaded = false;
        setTimeout(() => {
            this.isAddGateLoaded = true;
        }, 10);
        setTimeout(() => {
            var elem = document.querySelector('.add-gate-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    editGate(id) {
        this.isEditGate = true;
        this.isGateLoaded = false;
        this.staffService.getGateByGateId(id).subscribe((res) => {
            this.isGateLoaded = true;
            this.gate = res[0];
            this.isAddGateLoaded = false;
            setTimeout(() => {
                this.isAddGateLoaded = true;
            }, 10);
            setTimeout(() => {
                var elem = document.querySelector('.add-gate-card');
                var scrollTo = elem.getBoundingClientRect().top - 100;
                window.scroll({
                    top: scrollTo,
                    behavior: 'smooth'
                });
            }, 100);
        }, error => {
        });
    }
    closeGate() {
        this.isAddGateLoaded = false;
    }
    ngOnInit() {
        this.gate = {};
        this.getAllGates();
        // delete gate
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                this.isGateTableLoaded = false;
                var params = {
                    gateId: item.gateId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.staffService.deleteGate(params).subscribe((res) => {
                    this.gateListData = this.gateListData.filter((type) => type.gateId !== item.gateId);
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.isGateTableLoaded = true;
                });
            }
        });
    }
};
StaffGatesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
StaffGatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-gates',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-gates.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-gates.component.scss */ "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], StaffGatesComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtaW5hY3RpdmUtc3RhZmYvc3RhZmYtaW5hY3RpdmUtc3RhZmYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StaffInactiveStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffInactiveStaffComponent", function() { return StaffInactiveStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");









let StaffInactiveStaffComponent = class StaffInactiveStaffComponent {
    constructor(staffService, lookupService, sharedService, cookieService, router) {
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.router = router;
        this.isStaffDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.staffData = "";
        this.selectedInput = "";
        this.columnField = {};
        this.params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
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
    selectColInput(value) {
        this.selectedInput = value;
    }
    onSelectChange(event, type, name) {
        if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
        }
        else {
            this.columnField = {};
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getStaffCategory(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.staffTypeData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.staffTypeId = data[0].lookupValueId;
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getStaffSubCategory(id) {
        if (this.staffTypeId == 115) {
            var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.staffOfficalCategoryData, function (item) {
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
        else {
            var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.staffPersonalCategoryData, function (item) {
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
    }
    onGlSearchFilter() {
        if (this.staffData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.staffData;
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
    onEditMainstaff(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let staffId = dataRecord.staffId;
        this.router.navigateByUrl('/ams/staff/edit-staff/' + staffId);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Staff Name',
                datafield: 'ticketId',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Email ID',
                datafield: 'ticketTypeId_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Category',
                datafield: 'ticketStatusId_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Sub Category',
                datafield: 'ticketCategoryId_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Phone Number',
                datafield: 'ticketPriorityId_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" onClick="editMainstaff(' + row + ')"><i class="icon fa fa-pencil edit" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        this.staffService.getAllStaffsByApartmentId(this.params).subscribe((res) => {
            //filter inactive true items
            this.staffListData = res.filter(data => {
                return !data.isActive;
            });
            this.gridSourceData = {
                localdata: this.staffListData,
                datatype: "array"
            };
            this.staffListData = new jqx.dataAdapter(this.gridSourceData);
            console.log("staffListData Inactive", this.staffListData);
            this.totalItems = this.staffListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isStaffDataLoaded = true;
        });
        let staffParams = {
            LookupTypeId: 25
        };
        //staff type
        this.lookupService.getLookupValueByLookupTypeId(staffParams).subscribe((res) => {
            this.staffTypeData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let staffOfficialParams = {
            LookupTypeId: 26
        };
        //offical category type
        this.lookupService.getLookupValueByLookupTypeId(staffOfficialParams).subscribe((res) => {
            this.staffOfficalCategoryData = res.filter(item => {
                return item.isActive;
            });
            console.log(this.staffOfficalCategoryData);
        }, error => {
        });
        let staffPersonalParams = {
            LookupTypeId: 27
        };
        //personal category type
        this.lookupService.getLookupValueByLookupTypeId(staffPersonalParams).subscribe((res) => {
            this.staffPersonalCategoryData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
    }
};
StaffInactiveStaffComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])
], StaffInactiveStaffComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditMainstaff', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], StaffInactiveStaffComponent.prototype, "onEditMainstaff", null);
StaffInactiveStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-inactive-staff',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-inactive-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-inactive-staff.component.scss */ "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StaffInactiveStaffComponent);

function editMainstaff(row) {
    var event = new CustomEvent('onEditMainstaff', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editMainstaff = editMainstaff;


/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtbWFpbnRhaW4tc3RhZmYvc3RhZmYtbWFpbnRhaW4tc3RhZmYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StaffMaintainStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMaintainStaffComponent", function() { return StaffMaintainStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");











let StaffMaintainStaffComponent = class StaffMaintainStaffComponent {
    constructor(injector, staffService, lookupService, sharedService, cookieService, router) {
        this.injector = injector;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.router = router;
        this.isStaffDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.staffData = "";
        this.selectedInput = "";
        this.columnField = {};
        this.params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
        if (!underscore__WEBPACK_IMPORTED_MODULE_8__["isEmpty"](event)) {
            this.selectedInput = type;
            this.columnField[type] = event[name];
        }
        else {
            this.columnField = {};
        }
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    showConfirmModal(id) {
        this.modalService.showConfirmModal(id);
    }
    getTimeFormat(dateTime) {
        return moment__WEBPACK_IMPORTED_MODULE_9__(dateTime).format("YYYY-MM-DD HH:mm");
    }
    getStaffCategory(staff, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.staffTypeData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.staffListData.map(obj => {
                if (obj.staffId == staff.staffId) {
                    obj.staffCategory = data[0].lookupValueName;
                }
            });
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getStaffSubCategory(staff, id) {
        if (this.staffTypeId == 115) {
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.staffOfficalCategoryData, function (item) {
                if (item.lookupValueId === id)
                    return item;
            });
            if (data === undefined || data.length == 0) {
                return '';
            }
            else {
                this.staffListData.map(obj => {
                    if (obj.staffId == staff.staffId) {
                        obj.staffSubCategory = data[0].lookupValueName;
                    }
                });
                return data[0].lookupValueName;
            }
        }
        else {
            var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.staffPersonalCategoryData, function (item) {
                if (item.lookupValueId === id)
                    return item;
            });
            if (data === undefined || data.length == 0) {
                return '';
            }
            else {
                this.staffListData.map(obj => {
                    if (obj.staffId == staff.staffId) {
                        obj.staffSubCategory = data[0].lookupValueName;
                    }
                });
                return data[0].lookupValueName;
            }
        }
    }
    onGlSearchFilter() {
        if (this.staffData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.staffData;
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
    onEditMainstaff(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let staffId = dataRecord.staffId;
        this.router.navigateByUrl('/ams/staff/edit-staff/' + staffId);
    }
    onAllStaffDelete(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let staffId = dataRecord.staffId;
        this.modalService.showConfirmModal(staffId);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Staff Name',
                datafield: 'firstName',
                width: 100,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Email Id',
                datafield: 'emailId',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Category',
                datafield: 'staffCategory_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Phone Number',
                datafield: 'phoneNumber_Label',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" onClick="editMainstaff(' + row + ')"><i class="icon fa fa-pencil edit" aria-hidden="true"></i> </a> <a href="javascript:void(0)" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i> </a></div>';
                },
                renderer: columnrenderer
            }];
        this.staffService.getAllStaffsByApartmentId(this.params).subscribe((res) => {
            //filter active true items
            this.staffListData = res.filter(data => {
                return data.isActive;
            });
            this.gridSourceData = {
                localdata: this.staffListData,
                datatype: "array"
            };
            this.staffListData = new jqx.dataAdapter(this.gridSourceData);
            console.log("staffListData", this.staffListData);
            this.totalItems = this.staffListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isStaffDataLoaded = true;
        });
        let staffParams = {
            LookupTypeId: 25
        };
        //staff type
        this.lookupService.getLookupValueByLookupTypeId(staffParams).subscribe((res) => {
            this.staffTypeData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let officialParams = {
            LookupTypeId: 26
        };
        //offical category type
        this.lookupService.getLookupValueByLookupTypeId(officialParams).subscribe((res) => {
            this.staffOfficalCategoryData = res.filter(item => {
                return item.isActive;
            });
            console.log(this.staffOfficalCategoryData);
        }, error => {
        });
        let officialCategoryParams = {
            LookupTypeId: 27
        };
        //personal category type
        this.lookupService.getLookupValueByLookupTypeId(officialCategoryParams).subscribe((res) => {
            this.staffPersonalCategoryData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    staffId: id,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.staffService.deleteStaff(params).subscribe((res) => {
                    underscore__WEBPACK_IMPORTED_MODULE_8__["each"](this.staffListData, (type) => {
                        if (type.staffId == id) {
                            type.isActive = false;
                        }
                    });
                    setTimeout(() => {
                        this.staffListData = this.staffListData.filter((type) => type.staffId !== id);
                        this.totalItems = this.staffListData.length;
                        this.sharedService.setAlertMessage("Staff deleted");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
StaffMaintainStaffComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__["jqxGridComponent"])
], StaffMaintainStaffComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditMainstaff', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], StaffMaintainStaffComponent.prototype, "onEditMainstaff", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onAllStaffDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], StaffMaintainStaffComponent.prototype, "onAllStaffDelete", null);
StaffMaintainStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-maintain-staff',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-maintain-staff.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-maintain-staff.component.scss */ "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StaffMaintainStaffComponent);

function editMainstaff(row) {
    var event = new CustomEvent('onEditMainstaff', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editMainstaff = editMainstaff;
function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onAllStaffDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;


/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtb3ZlcnRpbWUvc3RhZmYtb3ZlcnRpbWUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: StaffOvertimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffOvertimeComponent", function() { return StaffOvertimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StaffOvertimeComponent = class StaffOvertimeComponent {
    constructor() { }
    ngOnInit() {
    }
};
StaffOvertimeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-overtime',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-overtime.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-overtime.component.scss */ "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StaffOvertimeComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtcGF5cm9sbC9zdGFmZi1wYXlyb2xsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StaffPayrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffPayrollComponent", function() { return StaffPayrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StaffPayrollComponent = class StaffPayrollComponent {
    constructor() { }
    ngOnInit() {
    }
};
StaffPayrollComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-payroll',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-payroll.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-payroll.component.scss */ "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StaffPayrollComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtcmVwb3J0cy9zdGFmZi1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts ***!
  \***************************************************************************************/
/*! exports provided: StaffReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffReportsComponent", function() { return StaffReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StaffReportsComponent = class StaffReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
StaffReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-reports.component.scss */ "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StaffReportsComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtc2V0dXAvc3RhZmYtc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts ***!
  \***********************************************************************************/
/*! exports provided: StaffSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffSetupComponent", function() { return StaffSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");








let StaffSetupComponent = class StaffSetupComponent {
    constructor(injector, dialog, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
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
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    editStaffCategory(category) {
        this.isEditStaffCategory = true;
        this.staffCategory = category.lookupValueName;
        this.staffCategoryId = category.lookupValueId;
    }
    submitStaffForm(form) {
        this.isError = false;
        //offical category
        if (this.staffType == "115") {
            this.staffTypeId = 26;
            var categoryAvailable = underscore__WEBPACK_IMPORTED_MODULE_7__["some"](this.categoryOffcialData, item => {
                return item.lookupValueName === this.staffCategory;
            });
            if (categoryAvailable) {
                this.isError = true;
                this.errorMessage = 'Category already available';
                this.isStaffLoaded = true;
            }
            else {
                this.isStaffLoaded = false;
                if (!this.isEditStaffCategory) {
                    let details = {
                        "lookupTypeId": this.staffTypeId,
                        "lookupValueName": this.staffCategory,
                        "description": this.staffCategory,
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": "2019-11-16T14:50:08.217Z",
                        "updatedBy": 0,
                        "updatedOn": "2019-11-16T14:50:08.217Z"
                    };
                    let params = {
                        lookupvalue: details
                    };
                    this.lookupService.addLookupValue(params).subscribe((res) => {
                        this.isStaffLoaded = true;
                        this.isCategoryDataLoaded = false;
                        let params = {
                            LookupTypeId: this.staffTypeId
                        };
                        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                            var categoryOffcialListData = res.filter(item => {
                                return item.isActive;
                            });
                            this.categoryOffcialListData = categoryOffcialListData;
                            this.isCategoryDataLoaded = true;
                        }, error => {
                        });
                    }, error => {
                    });
                }
                else {
                    let details = {
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
                    let params = {
                        lookupvalue: details
                    };
                    this.lookupService.updateLookupValue(params).subscribe((res) => {
                        this.isStaffLoaded = true;
                        this.isCategoryDataLoaded = false;
                        this.isEditStaffCategory = false;
                        let params = {
                            LookupTypeId: this.staffTypeId
                        };
                        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                            var categoryOffcialListData = res.filter(item => {
                                return item.isActive;
                            });
                            this.categoryOffcialListData = categoryOffcialListData;
                            this.isCategoryDataLoaded = true;
                        }, error => {
                        });
                    }, error => {
                    });
                }
            }
        }
        else {
            this.staffTypeId = 27;
            var categoryAvailable = underscore__WEBPACK_IMPORTED_MODULE_7__["some"](this.categoryPersonalData, item => {
                return item.lookupValueName === this.staffCategory;
            });
            if (categoryAvailable) {
                this.isError = true;
                this.errorMessage = 'Category already available';
                this.isStaffLoaded = true;
            }
            else {
                this.isStaffLoaded = false;
                if (!this.isEditStaffCategory) {
                    let details = {
                        "lookupTypeId": this.staffTypeId,
                        "lookupValueName": this.staffCategory,
                        "description": this.staffCategory,
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": "2019-11-16T14:50:08.217Z",
                        "updatedBy": 0,
                        "updatedOn": "2019-11-16T14:50:08.217Z"
                    };
                    let params = {
                        lookupvalue: details
                    };
                    this.lookupService.addLookupValue(params).subscribe((res) => {
                        this.isStaffLoaded = true;
                        this.isCategoryDataLoaded = false;
                        let params = {
                            LookupTypeId: this.staffTypeId
                        };
                        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                            var categoryPersonalListData = res.filter(item => {
                                return item.isActive;
                            });
                            this.categoryPersonalListData = categoryPersonalListData;
                            this.isCategoryDataLoaded = true;
                        }, error => {
                        });
                    }, error => {
                    });
                }
                else {
                    let details = {
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
                    let params = {
                        lookupvalue: details
                    };
                    this.lookupService.updateLookupValue(params).subscribe((res) => {
                        this.isStaffLoaded = true;
                        this.isCategoryDataLoaded = false;
                        this.isEditStaffCategory = false;
                        let params = {
                            LookupTypeId: this.staffTypeId
                        };
                        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
                            var categoryPersonalListData = res.filter(item => {
                                return item.isActive;
                            });
                            this.categoryPersonalListData = categoryPersonalListData;
                            this.isCategoryDataLoaded = true;
                        }, error => {
                        });
                    }, error => {
                    });
                }
            }
        }
    }
    ngOnInit() {
        let params = {
            LookupTypeId: 25
        };
        //get all staff type
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.staffCategoryData = res;
            this.isStaffLoaded = true;
        }, error => {
        });
        let categoryParams = {
            LookupTypeId: 26
        };
        //get all offical category
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            var categoryOffcialListData = res.filter(item => {
                return item.isActive;
            });
            this.categoryOffcialListData = categoryOffcialListData;
            let categoryPersonalParams = {
                LookupTypeId: 27
            };
            //get all personal category
            this.lookupService.getLookupValueByLookupTypeId(categoryPersonalParams).subscribe((res) => {
                var categoryPersonalListData = res.filter(item => {
                    return item.isActive;
                });
                this.categoryPersonalListData = categoryPersonalListData;
                this.isCategoryDataLoaded = true;
            }, error => {
            });
        }, error => {
        });
        // delete lookupvalue
        this.sharedService.unitlistdeleteindexcast.subscribe(index => {
            if (index != null) {
                if (this.staffDeleteTypeId == "115") {
                    var params = {
                        lookupValueId: this.categoryOffcialListData[index].lookupValueId,
                        updateUserId: parseInt(this.cookieService.get('userId'))
                    };
                }
                else {
                    var params = {
                        lookupValueId: this.categoryPersonalListData[index].lookupValueId,
                        updateUserId: parseInt(this.cookieService.get('userId'))
                    };
                }
                this.isCategoryDataLoaded = false;
                this.lookupService.deleteLookupvalue(params).subscribe((res) => {
                    if (this.staffDeleteTypeId == "115") {
                        this.categoryOffcialListData.splice(index, 1);
                    }
                    else {
                        this.categoryPersonalListData.splice(index, 1);
                    }
                    this.isCategoryDataLoaded = true;
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
StaffSetupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
StaffSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-setup.component.scss */ "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], StaffSetupComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL2NvbXBvbmVudHMvc3RhZmYtc2hpZnRzL3N0YWZmLXNoaWZ0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StaffShiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffShiftsComponent", function() { return StaffShiftsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");










let StaffShiftsComponent = class StaffShiftsComponent {
    constructor(injector, dialog, staffService, lookupService, sharedService, cookieService) {
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getShiftType(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.shiftTypeList, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.shiftType = data[0].lookupValueName;
            return data[0].lookupValueName.toLowerCase();
        }
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
    submitShiftsForm(form) {
        this.isShiftsLoaded = false;
        if (!this.isEditShift) {
            let details = {
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
            let params = {
                shift: details
            };
            this.staffService.addShift(params).subscribe((res) => {
                if (res.message) {
                    this.isShiftsLoaded = true;
                    this.sharedService.setAlertMessage("Shift added Successfully!");
                    this.getAllShifts();
                }
            }, error => {
            });
        }
        else {
            let details = {
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
            let params = {
                shift: details
            };
            this.staffService.updateShift(params).subscribe((res) => {
                if (res.message) {
                    this.isShiftsLoaded = true;
                    this.sharedService.setAlertMessage("Shift updated Successfully!");
                    this.getAllShifts();
                }
            }, error => {
            });
        }
    }
    addShift() {
        this.isEditShift = false;
        this.isAddShiftLoaded = false;
        setTimeout(() => {
            this.isAddShiftLoaded = true;
        }, 10);
        setTimeout(() => {
            var elem = document.querySelector('.add-shift-card');
            var scrollTo = elem.getBoundingClientRect().top;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 10);
    }
    editShift(shift) {
        this.isAddShiftLoaded = false;
        setTimeout(() => {
            this.isAddShiftLoaded = true;
        }, 10);
        this.isEditShift = true;
        this.shiftTypeId = shift.shiftTypeId;
        this.shiftStartTime = moment__WEBPACK_IMPORTED_MODULE_8__(shift.startTime, 'HH:mm').toDate();
        this.shiftTotalHrs = shift.totalHours;
        this.shiftId = shift.shiftId;
        setTimeout(() => {
            var elem = document.querySelector('.add-shift-card');
            var scrollTo = elem.getBoundingClientRect().top - 100;
            window.scroll({
                top: scrollTo,
                behavior: 'smooth'
            });
        }, 100);
    }
    closeShift() {
        this.isAddShiftLoaded = false;
    }
    showConfirmModal(item) {
        this.modalService.showConfirmModal(item);
    }
    getAllShifts() {
        this.isShiftTableLoaded = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.staffService.getAllShiftsByApartmentId(params).subscribe((res) => {
            this.shiftsListData = res.filter(item => {
                return item.isActive;
            });
            this.totalItems = this.shiftsListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isShiftTableLoaded = true;
        }, error => {
        });
    }
    ngOnInit() {
        this.shift = {};
        this.getAllShifts();
        let params = {
            LookupTypeId: 28
        };
        //shift type
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.shiftTypeList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                var params = {
                    shiftId: item.shiftId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.isShiftTableLoaded = false;
                this.staffService.deleteShift(params).subscribe((res) => {
                    this.shiftsListData = this.shiftsListData.filter((type) => type.shiftId !== item.shiftId);
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.isShiftTableLoaded = true;
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
StaffShiftsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
StaffShiftsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-shifts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-shifts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-shifts.component.scss */ "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], StaffShiftsComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/staff-manager-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ams/staff-manager/staff-manager-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: StaffManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffManagerRoutingModule", function() { return StaffManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/staff-setup/staff-setup.component */ "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts");
/* harmony import */ var _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/staff-maintain-staff/staff-maintain-staff.component */ "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts");
/* harmony import */ var _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/staff-inactive-staff/staff-inactive-staff.component */ "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts");
/* harmony import */ var _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/staff-attendance/staff-attendance.component */ "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts");
/* harmony import */ var _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/staff-payroll/staff-payroll.component */ "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts");
/* harmony import */ var _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/staff-overtime/staff-overtime.component */ "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts");
/* harmony import */ var _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/staff-reports/staff-reports.component */ "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts");
/* harmony import */ var _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-staff/add-staff.component */ "./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts");
/* harmony import */ var _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-entry/add-entry.component */ "./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts");












const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_3__["StaffSetupComponent"] },
    { path: 'maintain-staff', component: _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffMaintainStaffComponent"] },
    { path: 'add-staff', component: _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_10__["AddStaffComponent"] },
    { path: 'edit-staff/:id', component: _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_10__["AddStaffComponent"] },
    { path: 'inactive-staff', component: _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_5__["StaffInactiveStaffComponent"] },
    { path: 'overtime', component: _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_8__["StaffOvertimeComponent"] },
    { path: 'attendance', component: _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_6__["StaffAttendanceComponent"] },
    { path: 'add-entry', component: _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_11__["AddEntryComponent"] },
    { path: 'edit-entry/:id', component: _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_11__["AddEntryComponent"] },
    { path: 'payroll', component: _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_7__["StaffPayrollComponent"] },
    { path: 'reports', component: _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_9__["StaffReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let StaffManagerRoutingModule = class StaffManagerRoutingModule {
};
StaffManagerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StaffManagerRoutingModule);



/***/ }),

/***/ "./src/app/ams/staff-manager/staff-manager.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/ams/staff-manager/staff-manager.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9zdGFmZi1tYW5hZ2VyL3N0YWZmLW1hbmFnZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/staff-manager/staff-manager.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ams/staff-manager/staff-manager.component.ts ***!
  \**************************************************************/
/*! exports provided: StaffManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffManagerComponent", function() { return StaffManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StaffManagerComponent = class StaffManagerComponent {
    constructor() { }
    ngOnInit() {
    }
};
StaffManagerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-staff-manager',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./staff-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/staff-manager/staff-manager.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./staff-manager.component.scss */ "./src/app/ams/staff-manager/staff-manager.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StaffManagerComponent);



/***/ }),

/***/ "./src/app/ams/staff-manager/staff-manager.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/staff-manager/staff-manager.module.ts ***!
  \***********************************************************/
/*! exports provided: StaffManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffManagerModule", function() { return StaffManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _staff_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff-manager-routing.module */ "./src/app/ams/staff-manager/staff-manager-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _staff_manager_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./staff-manager.component */ "./src/app/ams/staff-manager/staff-manager.component.ts");
/* harmony import */ var _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/staff-setup/staff-setup.component */ "./src/app/ams/staff-manager/components/staff-setup/staff-setup.component.ts");
/* harmony import */ var _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/staff-maintain-staff/staff-maintain-staff.component */ "./src/app/ams/staff-manager/components/staff-maintain-staff/staff-maintain-staff.component.ts");
/* harmony import */ var _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/staff-inactive-staff/staff-inactive-staff.component */ "./src/app/ams/staff-manager/components/staff-inactive-staff/staff-inactive-staff.component.ts");
/* harmony import */ var _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/staff-attendance/staff-attendance.component */ "./src/app/ams/staff-manager/components/staff-attendance/staff-attendance.component.ts");
/* harmony import */ var _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/staff-payroll/staff-payroll.component */ "./src/app/ams/staff-manager/components/staff-payroll/staff-payroll.component.ts");
/* harmony import */ var _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/staff-overtime/staff-overtime.component */ "./src/app/ams/staff-manager/components/staff-overtime/staff-overtime.component.ts");
/* harmony import */ var _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/staff-reports/staff-reports.component */ "./src/app/ams/staff-manager/components/staff-reports/staff-reports.component.ts");
/* harmony import */ var _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-staff/add-staff.component */ "./src/app/ams/staff-manager/components/add-staff/add-staff.component.ts");
/* harmony import */ var _components_staff_gates_staff_gates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/staff-gates/staff-gates.component */ "./src/app/ams/staff-manager/components/staff-gates/staff-gates.component.ts");
/* harmony import */ var _components_staff_shifts_staff_shifts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/staff-shifts/staff-shifts.component */ "./src/app/ams/staff-manager/components/staff-shifts/staff-shifts.component.ts");
/* harmony import */ var _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add-entry/add-entry.component */ "./src/app/ams/staff-manager/components/add-entry/add-entry.component.ts");

















let StaffManagerModule = class StaffManagerModule {
};
StaffManagerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _staff_manager_component__WEBPACK_IMPORTED_MODULE_5__["StaffManagerComponent"],
            _components_staff_setup_staff_setup_component__WEBPACK_IMPORTED_MODULE_6__["StaffSetupComponent"],
            _components_staff_maintain_staff_staff_maintain_staff_component__WEBPACK_IMPORTED_MODULE_7__["StaffMaintainStaffComponent"],
            _components_staff_inactive_staff_staff_inactive_staff_component__WEBPACK_IMPORTED_MODULE_8__["StaffInactiveStaffComponent"],
            _components_staff_attendance_staff_attendance_component__WEBPACK_IMPORTED_MODULE_9__["StaffAttendanceComponent"],
            _components_staff_payroll_staff_payroll_component__WEBPACK_IMPORTED_MODULE_10__["StaffPayrollComponent"],
            _components_staff_overtime_staff_overtime_component__WEBPACK_IMPORTED_MODULE_11__["StaffOvertimeComponent"],
            _components_staff_reports_staff_reports_component__WEBPACK_IMPORTED_MODULE_12__["StaffReportsComponent"],
            _components_add_staff_add_staff_component__WEBPACK_IMPORTED_MODULE_13__["AddStaffComponent"],
            _components_staff_gates_staff_gates_component__WEBPACK_IMPORTED_MODULE_14__["StaffGatesComponent"],
            _components_staff_shifts_staff_shifts_component__WEBPACK_IMPORTED_MODULE_15__["StaffShiftsComponent"],
            _components_add_entry_add_entry_component__WEBPACK_IMPORTED_MODULE_16__["AddEntryComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _staff_manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["StaffManagerRoutingModule"]
        ],
        bootstrap: [_staff_manager_component__WEBPACK_IMPORTED_MODULE_5__["StaffManagerComponent"]]
    })
], StaffManagerModule);



/***/ })

}]);
//# sourceMappingURL=staff-manager-staff-manager-module-es2015.js.map