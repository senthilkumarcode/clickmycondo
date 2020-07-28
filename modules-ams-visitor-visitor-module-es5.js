(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-visitor-visitor-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsCheckinVisitorCheckinVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"checkin-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span >Visitor Check-In</span>\n\t\t\t\t</h5>\n\t </div>\n\t\t</div>\n\t\t<div class=\"card-body pb-0\" [ngClass]=\"isError ? 'h-39' : 'h-0 pt-0'\">\n\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\t\t</div>\n\t\t<div class=\"card-body\">\n            \n            <app-loader *ngIf=\"isVisitorSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted\">\n\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>First Name<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorFirstName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Last Name<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorLastName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Count<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Phone/Mobile No<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"number\" (blur)=\"IsvalidatePhoneNo($event.target.value)\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Date/Time of visit<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" (ngModelChange)=\"expectedDurationChange()\" [disabled]=\"true\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Out-time<span class=\"required\">*</span></label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [min]=\"minoutDate\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorOutTime\" (ngModelChange)=\"expectedDurationChange()\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration of visit<span class=\"required\">*</span></label>\n\t\t\t                    <input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorDuration\" [(ngModel)]=\"visitor.expectedDuration\" [disabled]=\"true\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Pass Number<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\" name=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Type<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" (ngModelChange)=\"changeVisitorType(visitTypeId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Category<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitByCategory\" \n\t\t\t\t\t\t\t        id=\"visitByCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant block-No<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\tname=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tid=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockNumber\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant Unit-No<span class=\"required\">*</span></label>\n\t\t\t                   \t<select \n\t\t\t\t\t\t\t\tname=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tid=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockUnitNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitNumber\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"iscommunityVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Staff Id<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Staff-id\" name=\"staffId\" [(ngModel)]=\"visitor.staffId\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Reason for visit<span class=\"required\">*</span></label>\n\t\t\t                    <textarea  type=\"text\" class=\"form-control purpose-box\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\" required></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\">Check In</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsVisitorCheckinVisitorCheckinComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"checkin-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>\n\t\t\t\t\t<span *ngIf=\"!isCheckout()\">Edit Expected Visitor</span>\n\t\t\t\t\t<span *ngIf=\"isCheckout()\">Visitor Check Out</span>\n\t\t\t\t</h5>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"!isCheckout()\" class=\"float-right\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn lime-green mt_5\" routerLink=\"/ams/visitor/expected-visitor\" routerLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\tCancel\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div *ngIf=\"isCheckout()\" class=\"float-right\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn lime-green mt_5\" routerLink=\"/ams/visitor/checkout\" routerLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\tCancel\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body pb-0\" [ngClass]=\"isError ? 'h-39' : 'h-0 pt-0'\">\n\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVisitorSubmitted && !isVisitorAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted && !isVisitorAdded\">\n\n\t\t\t\t<form #addVisitorForm=\"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"\n\t\t\t\t\tnovalidate>\n\n\t\t\t\t\t<div class=\"row\" *ngIf=\"!isCheckout()\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visitor Name<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.expectedVisitorName\" [disabled]=\"true\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visitor Count<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\"\n\t\t\t\t\t\t\t\t\tname=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" [disabled]=\"true\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Phone/Mobile<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"number\" (blur)=\"IsvalidatePhoneNo($event.target.value)\" class=\"form-control\" placeholder=\"Enter Number\"\n\t\t\t\t\t\t\t\t\tname=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\" [disabled]=\"true\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Date/Time of Visit<span class=\"required\">*</span></label>\n\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Date Time\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.expectedVisitorInTime\"\n\t\t\t\t\t\t\t\t\t[disabled]=\"true\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Actual Visitor In-time<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t <input class=\"form-control\" name=\"actualVisitorInTime\" [owlDateTime]=\"actualVisitorInTime\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"actualVisitorInTime\" placeholder=\"Date Time\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"actualInTime\"\n\t\t\t\t\t\t\t\t\t[disabled]=\"true\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #actualVisitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"actualVisitorInTime\">\n\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Time-out<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Date Time\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.expectedVisitorOutTime\" [min]=\"minExOutTime\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"expectedDurationChange(actualInTime, visitor.expectedVisitorOutTime)\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Duration<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\"\n\t\t\t\t\t\t\t\t\tname=\"visitorDuration\" [(ngModel)]=\"expectedDuration\" [disabled]=\"true\"\n\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Pass Number<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\"\n\t\t\t\t\t\t\t\t\tname=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Type<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select name=\"visitBy\" id=\"visitBy\" class=\"form-control\" [(ngModel)]=\"visitTypeId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"changeVisitorType(visitTypeId)\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Category<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select name=\"visitByCategory\" id=\"visitByCategory\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Tenant block-No<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select name=\"visitorblock-No\" id=\"visitorblock-No\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockNumber\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockNumber\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Tenant Unit-No<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select name=\"visitorUnit-No\" id=\"visitorUnit-No\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockUnitNumber\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitNumber\">\n\t\t\t\t\t\t\t\t\t\t{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"iscommunityVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Staff Id<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Staff-id\"\n\t\t\t\t\t\t\t\t\tname=\"staffId\" [(ngModel)]=\"visitor.staffId\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Purpose<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<textarea type=\"text\" class=\"form-control purpose-box\" placeholder=\"Enter purpose\"\n\t\t\t\t\t\t\t\t\tname=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\" required></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\" *ngIf=\"isCheckout()\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Visitor Name<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.visitorName\" [disabled]='true' required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Visitor Count<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\"\n\t\t\t\t\t\t\t\t\tname=\"visitorCount\" [(ngModel)]=\"visitor.visitorCount\" [disabled]='true' required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Phone/Mobile<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"number\" (blur)=\"IsvalidatePhoneNo($event.target.value)\" class=\"form-control\" placeholder=\"Enter Number\"\n\t\t\t\t\t\t\t\t\tname=\"phoneNo\" [(ngModel)]=\"visitor.visitorPhone\" [disabled]='true' required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Visitor In-time<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"visitorInTime\" [min]=\"minDate\" [max]=\"minDate\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Date Time\" [disabled]=\"true\" [(ngModel)]=\"visitor.visitorInTime\"\n\t\t\t\t\t\t\t\t\t[disabled]='true' required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Visitor Out-time<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"visitorOutTime\" [min]=\"minOutDate\"\n\t\t\t\t\t\t\t\t\tplaceholder=\"Date Time\" [(ngModel)]=\"visitor.visitorOutTime\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"expectedDurationChange(visitor.visitorInTime, visitor.visitorOutTime)\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime ></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Duration<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\"\n\t\t\t\t\t\t\t\t\tname=\"visitorDuration\" [(ngModel)]=\"expectedDuration\" [disabled]='true' required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Pass Number<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\"\n\t\t\t\t\t\t\t\t\tname=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" [disabled]='true'\n\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Type<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select name=\"visitBy\" id=\"visitBy\" class=\"form-control\" [(ngModel)]=\"visitTypeId\"\n\t\t\t\t\t\t\t\t\t[disabled]='true' required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Category<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select name=\"visitByCategory\" id=\"visitByCategory\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitCategoryId\" [disabled]='true'>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\"\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"!isCheckout()\">Check In</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" *ngIf=\"isCheckout()\">Check Out</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\t\t\n            <div class=\"message\" *ngIf=\"isVisitorAdded\">\n\t\t\t\t<div class=\"row\">\n                <div class=\"icon-wrapper float-left\">\n                    <i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n                </div>\n                <h5 class=\"float-left\" *ngIf=\"!isCheckout()\">Visitor Checked In successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isCheckout()\">Visitor Checked Out successfully!</h5>\n\t\t\t</div>\n\t\t\t<div class=\"row confirm\">\n\t\t\t\t<button class=\"btn blue mr-2\" (click)=\"navigateTo(isCheckout)\">Ok</button>\n\t\t\t</div>\n            </div>\n\n\n\t\t</div>\n\t</div>\n\n</div>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsVisitorCheckoutVisitorCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"checkedout-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Checked-in Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<!-- <table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorName')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('visitorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorPhone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorInTime')\">In-time <span [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorOutTime')\">Out-time <span [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockUnitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('blockUnitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.visitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.visitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorInTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorOutTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockNo}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockUnitNo}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckOutContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/visitor/edit-visitor/{{visitor.visitorId}}/checkout\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<img src=\"assets/images/checkout-icon.svg\" width=\"20\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ng-template #popAddCheckOutContent>\n\t\t\t\t      \t\t<div class=\"pop-desp\">\n\t\t\t\t      \t\t\t<h5>CheckOut</h5>\n\t\t\t\t      \t\t</div>\n\t\t\t\t      \t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsVisitorExpectedVisitorVisitorExpectedVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"expected-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Expected Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/visitor/create-expected-visitor\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"\n\t\t\t\t\t[state]=\"{ data: 'admin'}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Expected Visitor</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n  \t\t<div class=\"card-body p-0 customScroll\">\n  \t\t\t\n  \t\t\t<!-- <table class=\"table\" [ngClass]=\"isMobileView()\" mdbTable mdbTableScroll scrollX=\"true\" maxWidth=\"400\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tVisitor Name\n\t\t\t\t      \t<span (click)=\"sortUnitData('visitorName')\" [ngClass]=\"getFieldOrderBy('visitorName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['visitorName']\" (ngModelChange)=\"selectColInput('visitorName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tPhone Number\n\t\t\t\t      \t<span (click)=\"sortUnitData('visitorPhone')\" [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone No\" [(ngModel)]=\"columnField['visitorPhone']\" (ngModelChange)=\"selectColInput('visitorPhone')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Expected Date/Time of Visit<span (click)=\"sortUnitData('visitorInTime')\" [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Expected Time-out<span (click)=\"sortUnitData('visitorOutTime')\" [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\">Visitor Type<span (click)=\"sortUnitData('visitorOutTime')\" [ngClass]=\"getFieldOrderBy('visitorType')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\">Visitor category<span (click)=\"sortUnitData('visitorCategoryId_Label')\" [ngClass]=\"getFieldOrderBy('visitorCategoryId_Label')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\">Tower Unit<span (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.expectedVisitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedVisitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(visitor.expectedVisitorInTime)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{getTimeFormat(visitor.expectedVisitorOutTime)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{visitor.visitTypeName}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorCategoryId_Label}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.block_Unit}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/visitor/edit-visitor/{{visitor.expectedVisitorId}}/checkin\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<img src=\"assets/images/checkin-icon.svg\" width=\"20\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ng-template #popAddCheckInContent>\n\t\t\t\t      \t\t<div class=\"pop-desp\">\n\t\t\t\t      \t\t\t<h5>CheckIn</h5>\n\t\t\t\t      \t\t</div>\n\t\t\t\t      \t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\t\t\t\n\t\t\t<!-- <app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsVisitorHistoryVisitorHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"visitor-history-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Checked-Out Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<!-- <table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorName')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('visitorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorPhone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorInTime')\">In-time <span [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\" (click)=\"sortUnitData('visitorOutTime')\">Out-time <span [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\" (click)=\"sortUnitData('expectedVisitorInTime')\">Expected In-time <span [ngClass]=\"getFieldOrderBy('expectedVisitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('expectedVisitorOutTime')\">Expected Out-time <span [ngClass]=\"getFieldOrderBy('expectedVisitorOutTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockUnitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('blockUnitNo')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.visitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.visitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li *ngIf=\"visitor.expectedVisitorDuration != null\">\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedVisitorDuration}}</small>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Actual Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorInTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{visitor.visitorOutTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{visitor.expectedVisitorInTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorOutTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockNo}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockUnitNo}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t</jqxGrid>\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.html":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsVisitorReportsVisitorReportsDataVisitorReportsDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-report-data-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n        <div class=\"relative-card ml-auto float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/visitor/reports\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">All Rreports</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"card clear form-group\" id=\"accordion\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n                    Filter By\n                </li>\n                <div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"details\">\n\t\t\t\t\t\n\t\t\t<form #reportsFilterForm = \"ngForm\" name=\"reportsFilterForm\" (ngSubmit)=\"submitReportsFilterForm(reportsFilterForm)\"  novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"card-header no-border\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\n\t\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-2\">\n\t\t\t                   <label>Select Block No</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"blockId\" \n\t\t\t\t\t\t\t        id=\"blockId\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"blockId\">\n\t\t\t\t\t\t\t        <option [ngValue]=\"null\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of unitBlocksData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>start Date<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"startDate\" [owlDateTime]=\"startDate\" [owlDateTimeTrigger]=\"startDate\" placeholder=\"Date Time\" [(ngModel)]=\"start_date\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #startDate></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"startDate\">\n  \t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n                        </div>\n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>End Date<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"endDate\" [owlDateTime]=\"endDate\" [owlDateTimeTrigger]=\"endDate\" placeholder=\"Date\" [(ngModel)]=\"end_date\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #endDate></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"endDate\">\n  \t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n                        </div>\n                        <div class=\"col-sm-3\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Type</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\">\n\t\t\t\t\t\t\t        <option [ngValue]=\"null\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                       \n\t\t\t\t\t</div>\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <div class=\"list-inline float-right mt-4\">\n                                <button  class=\"btn blue mr-4\" [disabled]=\"reportsFilterForm.invalid\">Apply Filter</button>\n                                <button class=\"btn blue mr-2\" type=\"button\" (click)=\"cancel(reportsFilterForm)\">Clear Filter</button>\n                            </div>\n                        </div>\n                      </div>\n\t\t\t\t</div>\n                \n\t\t\t</form>\n\n\t\t</div>\n    </div>\t\n    </ul>\n</div>\n</div>\n\n\t\t<div class=\"card table-card\" *ngIf=\"isReportSubmitted\">\n\n\t\t\t<div class=\"card-header\">\n\t    \t\t<div class=\"float-left\">\n\t    \t\t\t<h5>{{pageName}} <span class=\"badge blue\">{{totalItems}}</span></h5>\n\t    \t\t</div>\n\t    \t\t<ul class=\"list-inline float-right\">\n\t    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportData\" (ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t\t</li>\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t    \t\t</ul>\n\t  \t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n\n\t\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.html":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsVisitorReportsVisitorReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-4\">Visitor Management Reports </h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"/ams/visitor/reports/{{report.lookupValueName}}/{{report.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.html":
    /*!*********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.html ***!
      \*********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorComponentsVisitorSetupVisitorSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"visitor-setup-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 vehicle-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Visitor Categories <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Visitor Categories</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"categoryData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewCategoryType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Category</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Sno <span [ngClass]=\"getFieldOrderBy('primayContact')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Visitor Category <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryDataList | simpleSearch: categoryData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{category.number}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.lookupValueName}}</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateCategoryType(category)\">\n\t\t\t\t\t\t\t<i class=\"fa fa-pencil icon edit\" title=\"Edit\" aria-hidden=\"true\"></i>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteCategoryType(category)\"><i class=\"fa fa-trash icon delete\" title=\"Delete\" aria-hidden=\"true\"></i></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 vehicle-type-card\" *ngIf=\"isCategoryTypeNew || isCategoryTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isCategoryTypeNew\">Add Visitor Category</h6>\n    \t\t\t<h6 *ngIf=\"!isCategoryTypeNew\">Update Visitor Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<!-- <app-alert-message [isError]=\"isError\"></app-alert-message> -->\n\n\t\t\t<app-loader *ngIf=\"!isCategoryTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isCategoryTypeSubmitted\">\n\n\t\t\t\t<form #addCategoryTypeForm = \"ngForm\" name=\"addCategoryTypeForm\"  (ngSubmit)=\"submitCategoryTypeForm(addCategoryTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Category*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"categoryType\" [(ngModel)]=\"categoryType\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addCategoryTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/visitor.component.html":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/visitor.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVisitorVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.scss":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsCheckinVisitorCheckinVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvY29tcG9uZW50cy9jaGVja2luLXZpc2l0b3IvY2hlY2tpbi12aXNpdG9yLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: CheckinVisitorComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsCheckinVisitorCheckinVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CheckinVisitorComponent", function () {
        return CheckinVisitorComponent;
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


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Visitor */
      "./src/app/api/controllers/Visitor.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/shared-toaster.service */
      "./src/app/shared/services/shared-toaster.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

      var CheckinVisitorComponent = /*#__PURE__*/function () {
        function CheckinVisitorComponent(router, route, userService, apartmentService, visitorService, lookupService, sharedService, sessionService, SharedToaster) {
          _classCallCheck(this, CheckinVisitorComponent);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.apartmentService = apartmentService;
          this.visitorService = visitorService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.SharedToaster = SharedToaster;
          this.isEditVisitor = false;
          this.isVisitorSubmitted = false;
          this.isVisitorAdded = false;
          this.isError = false;
          this.errorMessage = "";
          this.visitTypeId = "";
          this.isExpectedVisitor = false;
          this.isUnitVisitor = false;
          this.iscommunityVisitor = false;
          this.isValidphoneNumber = false;
          this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
        }

        _createClass(CheckinVisitorComponent, [{
          key: "IsvalidatePhoneNo",
          value: function IsvalidatePhoneNo(val) {
            var retVal = true;
            var rex = new RegExp(/^[+]?\d+$/);
            var isValid = rex.test(val);
            console.log(val.length);

            if (val.length > 13) {
              retVal = false;
              var errorDetails = {
                msg: "phone no length should be within 13 characters",
                type: "Error"
              };
              this.sharedService.setCustomAlertMessage(errorDetails);
            }

            if (!isValid) {
              retVal = false;
              var errorDetails = {
                msg: "Kindly enter proper phoneno",
                type: "Error"
              };
              this.sharedService.setCustomAlertMessage(errorDetails);
            }

            return retVal;
          }
        }, {
          key: "submitAddVisitorForm",
          value: function submitAddVisitorForm(form) {
            var _this = this;

            if (!this.IsvalidatePhoneNo(this.visitor.expectedVisitorPhone)) return true;
            this.isVisitorSubmitted = true;
            this.isError = false;
            var visitorDetails = {
              "apartmentUnitId": this.apartmentUnitId,
              "apartmentId": this.sessionService.apartmentId,
              "visitorName": this.visitor.expectedVisitorFirstName + ' ' + this.visitor.expectedVisitorLastName,
              "visitorCount": this.visitor.expectedVisitorCount,
              "visitorPhone": this.visitor.expectedVisitorPhone.toString(),
              "visitorVehicleTypeId": 1,
              "visitorVehicleNumber": "string",
              "visitingPlaceId": 1,
              "passNumber": this.visitor.passNumber,
              "isCheckedIn": true,
              "visitorInTime": this.visitor.expectedVisitorInTime,
              "isCheckedOut": false,
              "visitorOutTime": this.visitor.expectedVisitorOutTime,
              "expectedDuration": this.visitor.expectedDurationInHours,
              "meetingPersonId": 1,
              "meetingPersonName": "string",
              "visitTypeId": parseInt(this.visitTypeId),
              "visitorCategoryId": parseInt(this.visitCategoryId),
              "visitorsOrg": "string",
              "entryGateId": null,
              "exitGateId": null,
              "purpose": this.visitor.purpose,
              "enteredBy": parseInt(this.sessionService.userId),
              "isActive": true,
              "insertedBy": parseInt(this.sessionService.userId),
              "insertedOn": "2019-11-18T17:08:51.188Z",
              "updatedBy": parseInt(this.sessionService.userId),
              "updatedOn": "2019-11-18T17:08:51.188Z",
              "expectedVisitorId": null,
              "expectedVisitorInTime": null,
              "expectedVisitorOutTime": null,
              "expectedVisitorDuration": null
            };
            var params = {
              visitor: visitorDetails
            };
            this.visitorService.addVisitor(params).subscribe(function (res) {
              if (res.message) {
                _this.sharedService.setAlertMessage("Visitor Checked In successfully");

                _this.visitor = {};
                _this.visitTypeId = null;
                _this.visitCategoryId = null;
                _this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
                _this.isVisitorSubmitted = false;
              } else {
                _this.isVisitorSubmitted = false;
                _this.isError = true;
                _this.errorMessage = res.errorMessage;
              }
            }, function (error) {
              _this.isVisitorSubmitted = false;
              _this.isError = true;
              _this.errorMessage = error;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.minoutDate = new Date();
            this.visitor = {};
            var visitParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 15
            }; //visit type

            this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
              _this2.visitByData = res;
            }, function (error) {});
            var visitCategoryParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 100
            }; //visit type

            this.lookupService.getLookupValueByLookupTypeId(visitCategoryParams).subscribe(function (res) {
              _this2.visitCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
            var cateogoryParams = {
              userId: parseInt(this.sessionService.userId)
            };
            this.apartmentService.getApartmentBlockUnitByUserId(cateogoryParams).subscribe(function (res) {
              _this2.apartmentUnitId = res[0].apartmentBlockUnitId;
            }, function (error) {});
            this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
            this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
              _this2.blockUnitData = res;
            });
          }
        }, {
          key: "changeVisitorType",
          value: function changeVisitorType(id) {
            console.log(id);
            var result = this.visitByData.filter(function (filterId) {
              return id == filterId.lookupValueId;
            });
            console.log(result);
            this.isUnitVisitor = result[0].lookupValueName == 'Unit Visitor' ? true : false;
            this.iscommunityVisitor = result[0].lookupValueName == "Community Visitor" ? true : false;
          }
        }, {
          key: "expectedDurationChange",
          value: function expectedDurationChange() {
            if (this.minDate > moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorInTime).format('YYYY-MM-DD')) {
              this.visitor.expectedVisitorInTime = undefined;
              this.SharedToaster.openSnackBar("Please Select valid Date", '');
              return;
            }

            if (this.minDate > moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorOutTime).format('YYYY-MM-DD')) {
              this.visitor.expectedVisitorOutTime = undefined;
              this.SharedToaster.openSnackBar("Please Select Out-time greater than In-time", '');
              return;
            }

            console.log(this.visitor.expectedVisitorOutTime);

            if (this.visitor.expectedVisitorOutTime) {
              if (moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorInTime).format('YYYY-MM-DD') > moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorOutTime).format('YYYY-MM-DD')) {
                this.visitor.expectedVisitorOutTime = undefined;
                this.SharedToaster.openSnackBar("Please Select Out-time greater than In-time", '');
                return;
              }
            }

            var inDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorInTime);
            var outDate = moment__WEBPACK_IMPORTED_MODULE_10__(this.visitor.expectedVisitorOutTime);
            var diffDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
            this.visitor.expectedDuration = diffDuration.days() + " days " + this.isSingleDigit(diffDuration.hours()) + ":" + this.isSingleDigit(diffDuration.minutes()) + " hours";
            var sendDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
            var hours = sendDuration.asHours();
            this.visitor.expectedDurationInHours = Math.round(hours);
          }
        }, {
          key: "isSingleDigit",
          value: function isSingleDigit(digit) {
            if (digit <= 0) {
              return '00';
            } else {
              return digit.toString().length > 1 ? digit : '0' + digit;
            }
          }
        }]);

        return CheckinVisitorComponent;
      }();

      CheckinVisitorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]
        }];
      };

      CheckinVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkin-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./checkin-visitor.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./checkin-visitor.component.scss */
        "./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"], src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]])], CheckinVisitorComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorCheckinVisitorCheckinComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvY29tcG9uZW50cy92aXNpdG9yLWNoZWNraW4vdmlzaXRvci1jaGVja2luLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VisitorCheckinComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorCheckinVisitorCheckinComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorCheckinComponent", function () {
        return VisitorCheckinComponent;
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


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Visitor */
      "./src/app/api/controllers/Visitor.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/shared-toaster.service */
      "./src/app/shared/services/shared-toaster.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

      var VisitorCheckinComponent = /*#__PURE__*/function () {
        function VisitorCheckinComponent(router, route, userService, apartmentService, visitorService, lookupService, sharedService, sessionService, SharedToaster) {
          _classCallCheck(this, VisitorCheckinComponent);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.apartmentService = apartmentService;
          this.visitorService = visitorService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.SharedToaster = SharedToaster;
          this.isVisitorSubmitted = true;
          this.isVisitorAdded = false;
          this.isError = false;
          this.errorMessage = "";
          this.visitTypeId = "";
          this.isExpectedVisitor = false;
          this.visitorStatus = "";
          this.isUnitVisitor = false;
          this.iscommunityVisitor = false;
          this.isValidphoneNumber = false;
          this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
        }

        _createClass(VisitorCheckinComponent, [{
          key: "isCheckout",
          value: function isCheckout() {
            return this.visitorStatus == 'checkout' ? true : false;
          }
        }, {
          key: "IsvalidatePhoneNo",
          value: function IsvalidatePhoneNo(val) {
            var retVal = true;
            var rex = new RegExp(/^[+]?\d+$/);
            var isValid = rex.test(val);
            console.log(val.length);

            if (val.length > 13) {
              retVal = false;
              var errorDetails = {
                msg: "phone no length should be within 13 characters",
                type: "Error"
              };
              this.sharedService.setCustomAlertMessage(errorDetails);
            }

            if (!isValid) {
              retVal = false;
              var errorDetails = {
                msg: "Kindly enter proper phoneno",
                type: "Error"
              };
              this.sharedService.setCustomAlertMessage(errorDetails);
            }

            return retVal;
          }
        }, {
          key: "submitAddVisitorForm",
          value: function submitAddVisitorForm(form) {
            var _this3 = this;

            var num = this.isCheckout() ? this.visitor.visitorPhone : this.visitor.expectedVisitorPhone;
            if (!this.IsvalidatePhoneNo(num)) return true;
            this.isVisitorSubmitted = true;
            this.isError = false;

            if (!this.isCheckout()) {
              this.visitor.expectedDurationInHours = this.getDurationInHours(this.actualInTime, this.visitor.expectedVisitorOutTime);
              var visitorDetails = {
                "expectedVisitorId": parseInt(this.route.params['value'].id),
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": this.sessionService.apartmentId,
                "visitorName": this.visitor.expectedVisitorName,
                "visitorCount": this.visitor.expectedVisitorCount,
                "visitorPhone": this.visitor.expectedVisitorPhone.toString(),
                "visitorVehicleTypeId": 1,
                "visitorVehicleNumber": "string",
                "visitingPlaceId": 1,
                "passNumber": this.visitor.passNumber,
                "isCheckedIn": true,
                "visitorInTime": this.actualInTime,
                "isCheckedOut": false,
                "visitorOutTime": this.visitor.expectedVisitorOutTime,
                "expectedDuration": this.visitor.expectedDurationInHours,
                "meetingPersonId": 1,
                "meetingPersonName": "string",
                "visitTypeId": parseInt(this.visitTypeId),
                "visitorCategoryId": parseInt(this.visitCategoryId),
                "visitorsOrg": "string",
                "entryGateId": null,
                "exitGateId": null,
                "purpose": this.visitor.purpose,
                "enteredBy": parseInt(this.sessionService.userId),
                "isActive": true,
                "insertedBy": parseInt(this.sessionService.userId),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.sessionService.userId),
                "updatedOn": new Date().toISOString(),
                "expectedVisitorInTime": this.visitor.expectedVisitorInTime,
                "expectedVisitorOutTime": this.visitor.expectedVisitorOutTime,
                "expectedVisitorDuration": this.visitor.expectedDuration
              };
              var params = {
                visitor: visitorDetails
              };
              this.visitorService.addVisitor(params).subscribe(function (res) {
                if (res.message) {
                  _this3.isVisitorAdded = true; // this.sharedService.setAlertMessage("Visitor Checked In successfully");
                  // this.router.navigate(['/ams/visitor/expected-visitor'])
                } else {
                  _this3.isVisitorSubmitted = false;
                  _this3.isVisitorAdded = false;
                  _this3.isError = true;
                  _this3.errorMessage = res.errorMessage;
                }
              }, function (error) {
                _this3.isVisitorSubmitted = false;
                _this3.isVisitorAdded = false;
                _this3.isError = true;
                _this3.errorMessage = error;
              });
            } else {
              var _visitorDetails = {
                "visitorId": parseInt(this.route.params['value'].id),
                "checkOutTime": '2020-05-19T07:10:33.863',
                "updatedBy": parseInt(this.sessionService.userId)
              };
              this.visitorService.checkOutVisitor(_visitorDetails).subscribe(function (res) {
                if (res.message) {
                  _this3.isVisitorAdded = true; // this.sharedService.setAlertMessage("Visitor checked out successfully");
                } else {
                  _this3.isVisitorSubmitted = false;
                  _this3.isError = true;
                  _this3.isVisitorAdded = false;
                  _this3.errorMessage = res.errorMessage;
                }
              }, function (error) {
                _this3.isVisitorSubmitted = false;
                _this3.isError = true;
                _this3.errorMessage = error;
                _this3.isVisitorAdded = false;
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.visitor = {};

            if (this.route.params['value'].id != undefined) {
              this.visitorStatus = this.route.params['value'].type;

              if (this.visitorStatus == 'checkout') {
                this.visitorService.getVisitorById(this.route.params['value'].id).subscribe(function (res) {
                  var visitorIdParam = {
                    visitorId: _this4.route.params['value'].id
                  };

                  _this4.visitorService.getVisitorById(visitorIdParam).subscribe(function (res) {
                    _this4.visitor = res[0];
                    _this4.visitTypeId = _this4.visitor.visitTypeId;
                    _this4.visitCategoryId = _this4.visitor.visitorCategoryId;
                    _this4.visitor.purpose = '';
                    _this4.visitor.visitorOutTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
                    var inDate = moment__WEBPACK_IMPORTED_MODULE_10__(_this4.visitor.visitorInTime);
                    var outDate = moment__WEBPACK_IMPORTED_MODULE_10__(_this4.visitor.visitorOutTime);
                    var diffDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
                    _this4.expectedDuration = diffDuration.days() + " days " + _this4.isSingleDigit(diffDuration.hours()) + ":" + _this4.isSingleDigit(diffDuration.minutes()) + " hours";
                    _this4.isVisitorSubmitted = false;
                    _this4.minOutDate = new Date();
                  }, function (error) {});
                });
              } else if (this.visitorStatus == 'checkin') {
                var expectedVisitorIdParam = {
                  expectedVisitorId: this.route.params['value'].id
                };
                this.visitorService.getExpectedVisitorById(expectedVisitorIdParam).subscribe(function (res) {
                  _this4.visitor = res[0];
                  console.log('this.visitor', _this4.visitor);
                  _this4.visitor.purpose = '';
                  _this4.visitTypeId = _this4.visitor.visitTypeId;
                  _this4.visitCategoryId = _this4.visitor.visitorCategoryId;
                  _this4.actualInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
                  _this4.isVisitorSubmitted = false;
                  _this4.minExOutTime = new Date(_this4.actualInTime);
                  _this4.expectedDuration = _this4.getDuration(_this4.actualInTime, _this4.visitor.expectedVisitorOutTime);
                  _this4.visitor.expectedDurationInHours = _this4.getDurationInHours(_this4.actualInTime, _this4.visitor.expectedVisitorOutTime);
                }, function (error) {});
              }
            }

            var visitParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 15
            }; //visit type

            this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
              _this4.visitByData = res;
            }, function (error) {});
            var categoryParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 100
            }; //visit type

            this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
              _this4.visitCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
            var apartmentParams = {
              userId: parseInt(this.sessionService.userId)
            };
            this.apartmentService.getApartmentBlockUnitByUserId(apartmentParams).subscribe(function (res) {
              _this4.apartmentUnitId = res[0].apartmentBlockUnitId;
            }, function (error) {});
            this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
            this.visitor.visitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
            this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
              _this4.blockUnitData = res;
            });
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(param) {
            if (param) {
              this.router.navigate(['/ams/visitor/checkout']);
            } else {
              this.router.navigate(['/ams/visitor/expected-visitor']);
            }
          }
        }, {
          key: "changeVisitorType",
          value: function changeVisitorType(id) {
            console.log(id);
            var result = this.visitByData.filter(function (filterId) {
              return id == filterId.lookupValueId;
            });
            console.log(result);
            this.isUnitVisitor = result[0].lookupValueName == 'Unit Visitor' ? true : false;
            this.iscommunityVisitor = result[0].lookupValueName == "Community Visitor" ? true : false;
          }
        }, {
          key: "expectedDurationChange",
          value: function expectedDurationChange(date1, date2) {
            if (this.minDate > moment__WEBPACK_IMPORTED_MODULE_10__(date1).format('YYYY-MM-DD')) {
              this.visitor.expectedVisitorInTime = undefined;
              this.SharedToaster.openSnackBar("Please Select valid Date", '');
              return;
            }

            if (this.minDate > moment__WEBPACK_IMPORTED_MODULE_10__(date2).format('YYYY-MM-DD')) {
              this.visitor.expectedVisitorOutTime = undefined;
              this.SharedToaster.openSnackBar("Please Select Out-time greater than In-time", '');
              return;
            }

            if (date2) {
              if (moment__WEBPACK_IMPORTED_MODULE_10__(date1).format('YYYY-MM-DD') > moment__WEBPACK_IMPORTED_MODULE_10__(date2).format('YYYY-MM-DD')) {
                this.visitor.expectedVisitorOutTime = undefined;
                this.SharedToaster.openSnackBar("Please Select Out-time greater than In-time", '');
                return;
              }
            }

            this.expectedDuration = this.getDuration(date1, date2);
            this.visitor.expectedDurationInHours = this.getDurationInHours(date1, date2);
          }
        }, {
          key: "getDuration",
          value: function getDuration(date1, date2) {
            var inDate = moment__WEBPACK_IMPORTED_MODULE_10__(date1);
            var outDate = moment__WEBPACK_IMPORTED_MODULE_10__(date2);
            var diffDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
            return diffDuration.days() + " days " + this.isSingleDigit(diffDuration.hours()) + ":" + this.isSingleDigit(diffDuration.minutes()) + " hours";
          }
        }, {
          key: "getDurationInHours",
          value: function getDurationInHours(date1, date2) {
            var inDate = moment__WEBPACK_IMPORTED_MODULE_10__(date1);
            var outDate = moment__WEBPACK_IMPORTED_MODULE_10__(date2);
            var sendDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
            var hours = sendDuration.asHours();
            return Math.round(hours);
          }
        }, {
          key: "isSingleDigit",
          value: function isSingleDigit(digit) {
            if (digit <= 0) {
              return '00';
            } else {
              return digit.toString().length > 1 ? digit : '0' + digit;
            }
          }
        }]);

        return VisitorCheckinComponent;
      }();

      VisitorCheckinComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }, {
          type: src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]
        }];
      };

      VisitorCheckinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-checkin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-checkin.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-checkin.component.scss */
        "./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"], src_app_shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]])], VisitorCheckinComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorCheckoutVisitorCheckoutComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvY29tcG9uZW50cy92aXNpdG9yLWNoZWNrb3V0L3Zpc2l0b3ItY2hlY2tvdXQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: VisitorCheckoutComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorCheckoutVisitorCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorCheckoutComponent", function () {
        return VisitorCheckoutComponent;
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


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Visitor */
      "./src/app/api/controllers/Visitor.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
      "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var VisitorCheckoutComponent = /*#__PURE__*/function () {
        function VisitorCheckoutComponent(router, injector, apartmentService, visitorService, lookupService, sessionService, dialog) {
          _classCallCheck(this, VisitorCheckoutComponent);

          this.router = router;
          this.injector = injector;
          this.apartmentService = apartmentService;
          this.visitorService = visitorService;
          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.dialog = dialog;
          this.visitorData = "";
          this.isVisitorDataLoaded = false;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.result = '';
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
        }

        _createClass(VisitorCheckoutComponent, [{
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
          key: "getBlockUnit",
          value: function getBlockUnit(id) {}
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
          key: "getVisitorType",
          value: function getVisitorType() {}
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this5 = this;

            if (this.visitorData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.visitorData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this5.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          } //print button

        }, {
          key: "print",
          value: function print() {
            var _this6 = this;

            var confirmationMessage = "Are you sure, you want to Print?";
            var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]("Confirm Action", confirmationMessage);
            var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["CommonConfirmModalComponent"], {
              panelClass: 'material',
              disableClose: true,
              data: dialogData
            });
            dialogRef.afterClosed().subscribe(function (dialogResult) {
              _this6.result = dialogResult;

              if (_this6.result) {//code
              }
            });
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            var visitorId = dataRecord.visitorId;
            this.router.navigateByUrl('/ams/visitor/edit-visitor/' + visitorId + '/checkout');
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'visitorCheckOutData');
          }
        }, {
          key: "getDateTime",
          value: function getDateTime(val) {
            if (val != '') {
              return moment__WEBPACK_IMPORTED_MODULE_9__(val).format("MM/DD/YY hh:mm");
            } else {
              return '';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Id',
              datafield: 'serialNo',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Visitor Name',
              datafield: 'visitorName',
              width: 100,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Phone Number',
              datafield: 'visitorPhone',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'In-time',
              datafield: 'visitorInTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this7.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Out-time',
              datafield: 'visitorOutTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                console.log('value', value);
                return '<div class="jqx-custom-inner-cell">' + _this7.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Block No',
              datafield: 'blockNo',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Unit No',
              datafield: 'blockUnitNo',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Pass No',
              datafield: 'passNumber',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Visit Type',
              datafield: 'visitTypeName',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Action',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" onClick="navigateTo(' + row + ')" ><img src="assets/images/checkout-icon.svg" width="20" /> </a>' + '</div>';
              },
              renderer: columnrenderer
            }];
            var visitParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 15
            }; //get visit type

            this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
              _this7.visitTypeData = res;
            }, function (error) {});
            var apartmentParams = {
              apartmentId: this.sessionService.apartmentId
            };
            this.visitorService.getYetToCheckoutVisitorsByApartmentId(apartmentParams).subscribe(function (res) {
              //filter active true items
              _this7.visitorListData = res.filter(function (item) {
                if (item.block_Unit && item.block_Unit != null) {
                  var block = item.block_Unit.split(' ');
                  item.blockNo = block[0];
                  item.blockUnitNo = block[1];
                }

                return item.isActive && !item.isCheckedOut;
              }); // console.log(this.visitorListData);
              // //get block and unit details
              // _.each(this.visitorListData, (item, index) => {
              //   let apartmentBlockUnitIdParam ={
              //     apartmentBlockUnitId: item.apartmentUnitId
              //   }
              // this.apartmentService.getApartmentBlockUnitById(apartmentBlockUnitIdParam).subscribe((res:any) => {
              // 	this.visitorListData[index].blockNo = res[0].apartmentBlockNumber;
              // 	this.visitorListData[index].blockUnitNo = res[0].apartmentBlockUnitNumber;
              //   },
              //   error => {
              //   });
              // });

              _this7.gridSourceData = {
                localdata: _this7.visitorListData,
                datatype: "array"
              };
              _this7.listData = new jqx.dataAdapter(_this7.gridSourceData);
              _this7.totalItems = _this7.visitorListData.length;

              if (_this7.totalItems > _this7.itemLimit) {
                _this7.ItemEndIndex = _this7.itemLimit;
              } else {
                _this7.ItemEndIndex = _this7.totalItems;
              }

              _this7.isVisitorDataLoaded = true;
            });
          }
        }]);

        return VisitorCheckoutComponent;
      }();

      VisitorCheckoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
        }];
      };

      VisitorCheckoutComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        navigateTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:navigateTo', ['$event.detail']]
        }]
      };
      VisitorCheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-checkout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-checkout.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-checkout.component.scss */
        "./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])], VisitorCheckoutComponent);

      function navigateTo(row) {
        var event = new CustomEvent('navigateTo', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.navigateTo = navigateTo;
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorExpectedVisitorVisitorExpectedVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".customScroll {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.customScroll table thead th {\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvdmlzaXRvci9jb21wb25lbnRzL3Zpc2l0b3ItZXhwZWN0ZWQtdmlzaXRvci92aXNpdG9yLWV4cGVjdGVkLXZpc2l0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUlJO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRlIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1leHBlY3RlZC12aXNpdG9yL3Zpc2l0b3ItZXhwZWN0ZWQtdmlzaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21TY3JvbGx7XG4gICAgLy8gb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0aHtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRhYmxlIHRoZWFkIHRoe1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIFxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: VisitorExpectedVisitorComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorExpectedVisitorVisitorExpectedVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorExpectedVisitorComponent", function () {
        return VisitorExpectedVisitorComponent;
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


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Visitor */
      "./src/app/api/controllers/Visitor.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
      "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var VisitorExpectedVisitorComponent = /*#__PURE__*/function () {
        function VisitorExpectedVisitorComponent(router, injector, apartmentService, visitorService, lookupService, sessionService, dialog) {
          _classCallCheck(this, VisitorExpectedVisitorComponent);

          this.router = router;
          this.injector = injector;
          this.apartmentService = apartmentService;
          this.visitorService = visitorService;
          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.dialog = dialog;
          this.visitorData = "";
          this.isVisitorDataLoaded = false;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.selectedInput = "";
          this.columnField = {};
          this.result = '';
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
        }

        _createClass(VisitorExpectedVisitorComponent, [{
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
            if (!underscore__WEBPACK_IMPORTED_MODULE_7__["isEmpty"](event)) {
              this.selectedInput = type;
              this.columnField[type] = event[name];
            } else {
              this.columnField = {};
            }
          }
        }, {
          key: "getDateTime",
          value: function getDateTime(val) {
            if (val != '') {
              return moment__WEBPACK_IMPORTED_MODULE_8__(val).format("MM/DD/YY hh:mm");
            } else {
              return '';
            }
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
          key: "getTimeFormat",
          value: function getTimeFormat(dateTime) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(dateTime).format("YYYY-MM-DD HH:mm");
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Id',
              datafield: 'serialNo',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Visitor Name',
              datafield: 'expectedVisitorName',
              width: 100,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Phone Number',
              datafield: 'expectedVisitorPhone',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Expected Date/Time of Visit',
              datafield: 'expectedVisitorInTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this8.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Expected Time-out',
              datafield: 'expectedVisitorOutTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this8.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Visit Type',
              datafield: 'visitType_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Visitor category',
              datafield: 'visitorCategoryId_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Tower Unit',
              datafield: 'block_Unit',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" onClick="navigateTo(' + row + ')" ><img src="assets/images/checkin-icon.svg" width="20" /> </a>' + '</div>';
              },
              renderer: columnrenderer
            }];
            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.visitorService.getExpectedVisitorsByApartmentId(params).subscribe(function (res) {
              if (res.errorMessage) {
                _this8.isVisitorDataLoaded = true;
                _this8.visitorListData = [];
              } else {
                _this8.visitorListData = res;
                console.log("visitorListData", _this8.visitorListData[0].visitTypeId); //filter active true items

                _this8.visitorListData = res.filter(function (data) {
                  return data.isActive;
                });
                _this8.gridSourceData = {
                  localdata: _this8.visitorListData,
                  datatype: "array"
                };
                _this8.listData = new jqx.dataAdapter(_this8.gridSourceData);
                _this8.totalItems = _this8.visitorListData.length;
                _this8.isVisitorDataLoaded = true;
              }

              var visitParams = {
                ApartmentId: _this8.sessionService.apartmentId,
                LookupTypeId: 15
              }; //get visit type

              _this8.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
                _this8.visitTypeData = res;

                _this8.checkVisitTypeData();
              }, function (error) {});
            }, function (error) {});
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'expectedVisitorData');
          }
        }, {
          key: "checkVisitTypeData",
          value: function checkVisitTypeData() {
            var _this9 = this;

            this.visitTypeData.forEach(function (element) {
              if (element.lookupValueId == _this9.visitorListData[0].visitTypeId) {
                _this9.visitorListData[0].visitTypeName = element.lookupValueName.toLowerCase();
              }
            });
          }
        }, {
          key: "navigateTo",
          value: function navigateTo(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            var expectedVisitorId = dataRecord.expectedVisitorId;
            this.router.navigateByUrl('/ams/visitor/edit-visitor/' + expectedVisitorId + '/checkin');
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this10 = this;

            if (this.visitorData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.visitorData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this10.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          } //print button

        }, {
          key: "print",
          value: function print() {
            var _this11 = this;

            var confirmationMessage = "Are you sure, you want to Print?";
            var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmDialogModel"]("Confirm Action", confirmationMessage);
            var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["CommonConfirmModalComponent"], {
              panelClass: 'material',
              disableClose: true,
              data: dialogData
            });
            dialogRef.afterClosed().subscribe(function (dialogResult) {
              _this11.result = dialogResult;

              if (_this11.result) {//code
              }
            });
          }
        }]);

        return VisitorExpectedVisitorComponent;
      }();

      VisitorExpectedVisitorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]
        }];
      };

      VisitorExpectedVisitorComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        navigateTo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:navigateTo', ['$event.detail']]
        }]
      };
      VisitorExpectedVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-expected-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-expected-visitor.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-expected-visitor.component.scss */
        "./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])], VisitorExpectedVisitorComponent);

      function navigateTo(row) {
        var event = new CustomEvent('navigateTo', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.navigateTo = navigateTo;
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.scss":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorHistoryVisitorHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvY29tcG9uZW50cy92aXNpdG9yLWhpc3RvcnkvdmlzaXRvci1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VisitorHistoryComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorHistoryVisitorHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorHistoryComponent", function () {
        return VisitorHistoryComponent;
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


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Visitor */
      "./src/app/api/controllers/Visitor.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

      var VisitorHistoryComponent = /*#__PURE__*/function () {
        function VisitorHistoryComponent(injector, apartmentService, visitorService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, VisitorHistoryComponent);

          this.injector = injector;
          this.apartmentService = apartmentService;
          this.visitorService = visitorService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.visitorData = "";
          this.isVisitorDataLoaded = false;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
        }

        _createClass(VisitorHistoryComponent, [{
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
          key: "getBlockUnit",
          value: function getBlockUnit(id) {}
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
          key: "getVisitorType",
          value: function getVisitorType() {}
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'visitorHistoryData');
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this12 = this;

            if (this.visitorData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.visitorData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this12.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "getDateTime",
          value: function getDateTime(val) {
            if (val != '') {
              return moment__WEBPACK_IMPORTED_MODULE_8__(val).format("MM/DD/YY hh:mm");
            } else {
              return '';
            }
          }
        }, {
          key: "getBlock",
          value: function getBlock() {}
        }, {
          key: "getUnit",
          value: function getUnit() {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Id',
              datafield: 'serialNo',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Visitor Name',
              datafield: 'visitorName',
              width: 100,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Phone Number',
              datafield: 'visitorPhone',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'In-time',
              datafield: 'visitorInTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this13.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Out-time',
              datafield: 'visitorOutTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this13.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Expected In-time',
              datafield: 'expectedVisitorInTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this13.getDateTime(value) + '</div>';
              },
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Expected Out-time',
              datafield: 'expectedVisitorOutTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this13.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Block No',
              datafield: 'blockNo',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Unit No',
              datafield: 'blockUnitNo',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }];
            var visitTypeParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 15
            }; //get visit type

            this.lookupService.getLookupValueByLookupTypeId(visitTypeParams).subscribe(function (res) {
              _this13.visitTypeData = res;
            }, function (error) {});
            var visitListParams = {
              apartmentId: this.sessionService.apartmentId
            };
            this.visitorService.getVisitorsByApartmentId(visitListParams).subscribe(function (res) {
              //filter active true items
              _this13.visitorListData = res.filter(function (item) {
                if (item.block_Unit && item.block_Unit != null) {
                  var block = item.block_Unit.split(' ');
                  item.blockNo = block[0];
                  item.blockUnitNo = block[1];
                }

                return item.isActive && item.isCheckedOut;
              }); // console.log(this.visitorListData);
              // //get block and unit details
              // _.each(this.visitorListData, (item, index) => {
              // this.apartmentService.getApartmentBlockUnitById(item.apartmentUnitId).subscribe((res:any) => {
              // 	this.visitorListData[index].blockNo = res[0].apartmentBlockNumber;
              // 	this.visitorListData[index].blockUnitNo = res[0].apartmentBlockUnitNumber;
              //   },
              //   error => {
              //   });
              // });

              _this13.gridSourceData = {
                localdata: _this13.visitorListData,
                datatype: "array"
              };
              _this13.listData = new jqx.dataAdapter(_this13.gridSourceData);
              _this13.totalItems = _this13.visitorListData.length;
              _this13.isVisitorDataLoaded = true;
              _this13.totalItems = _this13.visitorListData.length;

              if (_this13.totalItems > _this13.itemLimit) {
                _this13.ItemEndIndex = _this13.itemLimit;
              } else {
                _this13.ItemEndIndex = _this13.totalItems;
              }

              _this13.isVisitorDataLoaded = true;
            });
          }
        }]);

        return VisitorHistoryComponent;
      }();

      VisitorHistoryComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }];
      };

      VisitorHistoryComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }]
      };
      VisitorHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-hitory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-history.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-history.component.scss */
        "./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])], VisitorHistoryComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.scss":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.scss ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorReportsVisitorReportsDataVisitorReportsDataComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvY29tcG9uZW50cy92aXNpdG9yLXJlcG9ydHMvdmlzaXRvci1yZXBvcnRzLWRhdGEvdmlzaXRvci1yZXBvcnRzLWRhdGEuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: VisitorReportsDataComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorReportsVisitorReportsDataVisitorReportsDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorReportsDataComponent", function () {
        return VisitorReportsDataComponent;
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


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Visitor */
      "./src/app/api/controllers/Visitor.ts");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

      var VisitorReportsDataComponent = /*#__PURE__*/function () {
        function VisitorReportsDataComponent(router, route, apartmentService, visitorService, lookupService, sessionService) {
          _classCallCheck(this, VisitorReportsDataComponent);

          this.router = router;
          this.route = route;
          this.apartmentService = apartmentService;
          this.visitorService = visitorService;
          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.pageName = "";
          this.isDataLoaded = false;
          this.blockId = null;
          this.blockNo = "";
          this.end_date = null;
          this.start_date = null;
          this.visitTypeId = null;
          this.isReportSubmitted = false;
        }

        _createClass(VisitorReportsDataComponent, [{
          key: "isMobileView",
          value: function isMobileView() {
            return window.innerWidth <= 767 ? 'table-responsive' : '';
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'VisitorReportsData');
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_6___default()(date).format("MM-DD-YYYY");
          }
        }, {
          key: "submitReportsFilterForm",
          value: function submitReportsFilterForm() {
            var params = {
              ApartmentID: this.sessionService.apartmentId,
              ApartmentBlockID: parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              VisitType: parseInt(this.visitTypeId)
            };
            this.getDetails(params);
          }
        }, {
          key: "getDetails",
          value: function getDetails(params) {
            var _this14 = this;

            var serviceName;
            var id = parseInt(this.route.params['value'].id);

            if (id == 365) {
              serviceName = this.visitorService.getReportsForVisitorsCheckedInMultiFilter(params);
            } else if (id == 366) {
              serviceName = this.visitorService.getReportsForVisitorsCheckedOutnMultiFilter(params);
            } else if (id == 367) {
              serviceName = this.visitorService.getReportsForExpectedVisitorsMultiFilter(params);
            }

            serviceName.subscribe(function (res) {
              if (res.errorMessage) {
                _this14.reportsDataList = [];
              } else {
                _this14.reportsDataList = res;
                _this14.gridSourceData = {
                  localdata: _this14.reportsDataList,
                  datatype: "array"
                };
                _this14.listData = new jqx.dataAdapter(_this14.gridSourceData);
                _this14.isReportSubmitted = true;
              }
            }, function (error) {});
          }
        }, {
          key: "getDateTime",
          value: function getDateTime(val) {
            if (val != '') {
              return moment__WEBPACK_IMPORTED_MODULE_6___default()(val).format("MM/DD/YY hh:mm");
            } else {
              return '';
            }
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this15 = this;

            if (this.reportData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.reportData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this15.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "cancel",
          value: function cancel(form) {
            form.reset();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.pageName = this.route.params['value'].name;
            var unitBlockParams = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe(function (res) {
              _this16.unitBlocksData = res;
            });
            var visitParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 15
            }; //visit type

            this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
              _this16.visitByData = res;
            }, function (error) {});
            this.isDataLoaded = true;

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Id',
              datafield: 'serialNo',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Visitor Name',
              datafield: 'visitorName',
              width: 100,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Phone Number',
              datafield: 'visitorPhone',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Date/Time of Visit',
              datafield: 'checkInDateTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this16.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Time-out',
              datafield: 'checkOutDateTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this16.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Visit Type',
              datafield: 'visitType',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Block No',
              datafield: 'blockNo',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Unit No',
              datafield: 'unitNo',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }];
          }
        }]);

        return VisitorReportsDataComponent;
      }();

      VisitorReportsDataComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }];
      };

      VisitorReportsDataComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }]
      };
      VisitorReportsDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-reports-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-reports-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-reports-data.component.scss */
        "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])], VisitorReportsDataComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.scss":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.scss ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorReportsVisitorReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvY29tcG9uZW50cy92aXNpdG9yLXJlcG9ydHMvdmlzaXRvci1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.ts":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: VisitorReportsComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorReportsVisitorReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorReportsComponent", function () {
        return VisitorReportsComponent;
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


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");

      var VisitorReportsComponent = /*#__PURE__*/function () {
        function VisitorReportsComponent(lookupService, sharedService, sessionService) {
          _classCallCheck(this, VisitorReportsComponent);

          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.isDataLoaded = false;
        }

        _createClass(VisitorReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            var details = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 87,
              MenuName: 'VisitorManagement'
            };
            this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
              //this.reportDataList = res;
              _this17.reportDataList = [{
                lookupValueName: 'List of Checked In Visitors',
                description: 'Provides the list of visitors checked-in for the specified duration',
                lookupValueId: 365
              }, {
                lookupValueName: 'List of Checked out Visitors',
                description: 'Provides the list of visitors checked-out for the specified duration',
                lookupValueId: 366
              }, {
                lookupValueName: 'List of Expected Visitors',
                description: 'Gives the list of visitors who are expected to check-in during the mentioned duration',
                lookupValueId: 367
              }];
              _this17.isDataLoaded = true;
            });
          }
        }]);

        return VisitorReportsComponent;
      }();

      VisitorReportsComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      };

      VisitorReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-reports.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-reports.component.scss */
        "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], VisitorReportsComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.scss":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.scss ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorSetupVisitorSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvY29tcG9uZW50cy92aXNpdG9yLXNldHVwL3Zpc2l0b3Itc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: VisitorSetupComponent */

    /***/
    function srcAppModulesAmsVisitorComponentsVisitorSetupVisitorSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorSetupComponent", function () {
        return VisitorSetupComponent;
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


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
      "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");

      var VisitorSetupComponent = /*#__PURE__*/function () {
        function VisitorSetupComponent(injector, lookupService, dialog, sharedService, sessionService) {
          _classCallCheck(this, VisitorSetupComponent);

          this.injector = injector;
          this.lookupService = lookupService;
          this.dialog = dialog;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.isDataLoaded = false;
          this.isCategoryTypeSubmitted = true;
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.isMobile = false;
          this.isCategoryTypeNew = false;
          this.isCategoryTypeUpdate = false;
          this.categoryType = "";
          this.categoryUpdateId = 0;
          this.isError = false;
          this.alertMessage = false;
          this.result = '';
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]);
        }

        _createClass(VisitorSetupComponent, [{
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
          key: "addNewCategoryType",
          value: function addNewCategoryType() {
            this.isCategoryTypeNew = true;
            this.isCategoryTypeUpdate = false;
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
          key: "updateCategoryType",
          value: function updateCategoryType(item) {
            this.isCategoryTypeUpdate = true;
            this.isCategoryTypeNew = false;
            this.categoryType = item.lookupValueName;
            this.categoryUpdateId = item.lookupValueId;
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
          key: "deleteCategoryType",
          value: function deleteCategoryType(item) {
            var _this18 = this;

            var confirmationMessage = "Are you sure you want to delete?";
            var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]("Confirm Action", confirmationMessage);
            var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["CommonConfirmModalComponent"], {
              panelClass: 'material',
              disableClose: true,
              data: dialogData
            });
            dialogRef.afterClosed().subscribe(function (dialogResult) {
              _this18.result = dialogResult;

              if (_this18.result) {
                var params = {
                  lookupValueId: item.lookupValueId,
                  updateUserId: parseInt(_this18.sessionService.userId)
                };

                _this18.lookupService.deleteLookupvalue(params).subscribe(function (res) {
                  if (res.message) {
                    var errorDetails = {
                      msg: 'Visitor category deleted successfully',
                      type: "Success"
                    };

                    _this18.sharedService.setCustomAlertMessage(errorDetails);

                    _this18.isDataLoaded = false;
                    var categoryParams = {
                      ApartmentId: _this18.sessionService.apartmentId,
                      LookupTypeId: 100
                    };

                    _this18.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
                      _this18.isDataLoaded = true;
                      _this18.categoryDataList = res.filter(function (item, i) {
                        item.number = i + 1;
                        return item.isActive;
                      });
                      _this18.totalItems = _this18.categoryDataList.length;

                      if (_this18.totalItems > _this18.itemLimit) {
                        _this18.ItemEndIndex = _this18.itemLimit;
                      } else {
                        _this18.ItemEndIndex = _this18.totalItems;
                      }

                      _this18.isDataLoaded = true;
                    });
                  } else {
                    _this18.isDataLoaded = true;
                  }
                });
              }
            });
          }
        }, {
          key: "removeCategoryTypeBox",
          value: function removeCategoryTypeBox() {
            this.isCategoryTypeNew = false;
            this.isCategoryTypeUpdate = false;
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
          key: "submitCategoryTypeForm",
          value: function submitCategoryTypeForm(form) {
            var _this19 = this;

            var confirmationMessage = "Are you sure you want to save this settings?";
            var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogModel"]("Confirm Action", confirmationMessage);
            var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["CommonConfirmModalComponent"], {
              panelClass: 'material',
              disableClose: true,
              data: dialogData
            });
            dialogRef.afterClosed().subscribe(function (dialogResult) {
              _this19.result = dialogResult;

              if (_this19.result) {
                //code
                _this19.isCategoryTypeSubmitted = false;

                if (_this19.isCategoryTypeNew) {
                  var details = {
                    "lookupTypeId": 100,
                    "lookupValueName": _this19.categoryType,
                    "description": 'Visitor Category',
                    "isActive": true,
                    "insertedBy": parseInt(_this19.sessionService.userId),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": null,
                    "updatedOn": null
                  };
                  var params = {
                    lookupvalue: details
                  };

                  _this19.lookupService.addLookupValue(params).subscribe(function (res) {
                    if (res.message) {
                      _this19.sharedService.setAlertMessage("Visitor Category added successfully");

                      _this19.isCategoryTypeNew = false;
                      _this19.isCategoryTypeSubmitted = true;
                      _this19.categoryType = '';
                      _this19.isDataLoaded = false;
                      var categoryParams = {
                        ApartmentId: _this19.sessionService.apartmentId,
                        LookupTypeId: 100
                      };

                      _this19.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
                        _this19.isDataLoaded = true;
                        _this19.categoryDataList = res.filter(function (item, i) {
                          item.number = i + 1;
                          return item.isActive;
                        });
                        _this19.totalItems = _this19.categoryDataList.length;

                        if (_this19.totalItems > _this19.itemLimit) {
                          _this19.ItemEndIndex = _this19.itemLimit;
                        } else {
                          _this19.ItemEndIndex = _this19.totalItems;
                        }

                        _this19.isDataLoaded = true;
                      });
                    } else {
                      _this19.isDataLoaded = true;
                      _this19.isCategoryTypeSubmitted = true;
                      _this19.isError = true;
                      _this19.alertMessage = res.errorMessage;
                      var errorDetails = {
                        msg: _this19.alertMessage,
                        type: "Error"
                      };

                      _this19.sharedService.setCustomAlertMessage(errorDetails);
                    }
                  });
                } else {
                  var _details = {
                    "lookupValueId": _this19.categoryUpdateId,
                    "ApartmentId": _this19.sessionService.apartmentId,
                    "lookupTypeId": 100,
                    "lookupValueName": _this19.categoryType,
                    "description": _this19.categoryType,
                    "isActive": true,
                    "updatedBy": parseInt(_this19.sessionService.userId),
                    "updatedOn": new Date().toISOString()
                  };
                  var _params = {
                    lookupvalue: _details
                  };

                  _this19.lookupService.updateLookupValue(_params).subscribe(function (res) {
                    if (res.message) {
                      var categoryParams = {
                        ApartmentId: _this19.sessionService.apartmentId,
                        LookupTypeId: 100
                      };

                      _this19.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
                        _this19.isCategoryTypeUpdate = false;
                        _this19.isCategoryTypeSubmitted = true;

                        _this19.sharedService.setAlertMessage("Visitor Category updated successfully");

                        _this19.categoryDataList = res.filter(function (item, i) {
                          item.number = i + 1;
                          return item.isActive;
                        });
                        _this19.totalItems = _this19.categoryDataList.length;

                        if (_this19.totalItems > _this19.itemLimit) {
                          _this19.ItemEndIndex = _this19.itemLimit;
                        } else {
                          _this19.ItemEndIndex = _this19.totalItems;
                        }
                      });
                    } else {
                      _this19.isCategoryTypeSubmitted = true;
                      _this19.isError = true;
                      _this19.alertMessage = res.errorMessage;
                      var errorDetails = {
                        msg: _this19.alertMessage,
                        type: "Error"
                      };

                      _this19.sharedService.setCustomAlertMessage(errorDetails);
                    }
                  });
                }
              } else {
                _this19.isCategoryTypeSubmitted = true;
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            var categoryListParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 100
            };
            this.lookupService.getLookupValueByLookupTypeId(categoryListParams).subscribe(function (res) {
              _this20.categoryDataList = res.filter(function (item, i) {
                item.number = i + 1;
                return item.isActive;
              });
              _this20.totalItems = _this20.categoryDataList.length;

              if (_this20.totalItems > _this20.itemLimit) {
                _this20.ItemEndIndex = _this20.itemLimit;
              } else {
                _this20.ItemEndIndex = _this20.totalItems;
              }

              _this20.isDataLoaded = true;
            });
          }
        }]);

        return VisitorSetupComponent;
      }();

      VisitorSetupComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      VisitorSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-setup.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-setup.component.scss */
        "./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], VisitorSetupComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/visitor-routing.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modules/ams/visitor/visitor-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: VisitorRoutingModule */

    /***/
    function srcAppModulesAmsVisitorVisitorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorRoutingModule", function () {
        return VisitorRoutingModule;
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


      var _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/visitor-setup/visitor-setup.component */
      "./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.ts");
      /* harmony import */


      var _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/visitor-checkin/visitor-checkin.component */
      "./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts");
      /* harmony import */


      var _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/visitor-checkout/visitor-checkout.component */
      "./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts");
      /* harmony import */


      var _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/visitor-expected-visitor/visitor-expected-visitor.component */
      "./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts");
      /* harmony import */


      var _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/visitor-reports/visitor-reports.component */
      "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.ts");
      /* harmony import */


      var _components_visitor_create_visitor_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/visitor-create/visitor-create.component */
      "./src/app/modules/ams/visitor/components/visitor-create/visitor-create.component.ts");
      /* harmony import */


      var _components_visitor_history_visitor_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/visitor-history/visitor-history.component */
      "./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.ts");
      /* harmony import */


      var _components_checkin_visitor_checkin_visitor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/checkin-visitor/checkin-visitor.component */
      "./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts");
      /* harmony import */


      var _components_visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/visitor-reports/visitor-reports-data/visitor-reports-data.component */
      "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      }, {
        path: 'settings',
        component: _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_3__["VisitorSetupComponent"]
      }, {
        path: 'checkin',
        component: _components_checkin_visitor_checkin_visitor_component__WEBPACK_IMPORTED_MODULE_10__["CheckinVisitorComponent"]
      }, {
        path: 'expected-visitor',
        component: _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_6__["VisitorExpectedVisitorComponent"]
      }, {
        path: 'add-visitor',
        component: _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__["VisitorCheckinComponent"]
      }, {
        path: 'edit-visitor/:id/:type',
        component: _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__["VisitorCheckinComponent"]
      }, {
        path: 'checkout',
        component: _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_5__["VisitorCheckoutComponent"]
      }, {
        path: 'reports',
        component: _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_7__["VisitorReportsComponent"]
      }, {
        path: 'reports/:name/:id',
        component: _components_visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_11__["VisitorReportsDataComponent"]
      }, {
        path: 'create-expected-visitor',
        component: _components_visitor_create_visitor_create_component__WEBPACK_IMPORTED_MODULE_8__["VisitorCreateComponent"]
      }, {
        path: 'history',
        component: _components_visitor_history_visitor_history_component__WEBPACK_IMPORTED_MODULE_9__["VisitorHistoryComponent"]
      }, {
        path: '**',
        redirectTo: 'settings',
        pathMatch: 'full'
      }];

      var VisitorRoutingModule = function VisitorRoutingModule() {
        _classCallCheck(this, VisitorRoutingModule);
      };

      VisitorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VisitorRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/visitor.component.scss":
    /*!************************************************************!*\
      !*** ./src/app/modules/ams/visitor/visitor.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVisitorVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpc2l0b3IvdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/visitor.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/modules/ams/visitor/visitor.component.ts ***!
      \**********************************************************/

    /*! exports provided: VisitorComponent */

    /***/
    function srcAppModulesAmsVisitorVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorComponent", function () {
        return VisitorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VisitorComponent = /*#__PURE__*/function () {
        function VisitorComponent() {
          _classCallCheck(this, VisitorComponent);
        }

        _createClass(VisitorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VisitorComponent;
      }();

      VisitorComponent.ctorParameters = function () {
        return [];
      };

      VisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/visitor/visitor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor.component.scss */
        "./src/app/modules/ams/visitor/visitor.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], VisitorComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/visitor/visitor.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/modules/ams/visitor/visitor.module.ts ***!
      \*******************************************************/

    /*! exports provided: VisitorModule */

    /***/
    function srcAppModulesAmsVisitorVisitorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorModule", function () {
        return VisitorModule;
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


      var _visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./visitor-routing.module */
      "./src/app/modules/ams/visitor/visitor-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _visitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./visitor.component */
      "./src/app/modules/ams/visitor/visitor.component.ts");
      /* harmony import */


      var _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/visitor-setup/visitor-setup.component */
      "./src/app/modules/ams/visitor/components/visitor-setup/visitor-setup.component.ts");
      /* harmony import */


      var _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/visitor-checkin/visitor-checkin.component */
      "./src/app/modules/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts");
      /* harmony import */


      var _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/visitor-checkout/visitor-checkout.component */
      "./src/app/modules/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts");
      /* harmony import */


      var _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/visitor-expected-visitor/visitor-expected-visitor.component */
      "./src/app/modules/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts");
      /* harmony import */


      var _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/visitor-reports/visitor-reports.component */
      "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports.component.ts");
      /* harmony import */


      var _components_visitor_history_visitor_history_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/visitor-history/visitor-history.component */
      "./src/app/modules/ams/visitor/components/visitor-history/visitor-history.component.ts");
      /* harmony import */


      var _components_visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/visitor-reports/visitor-reports-data/visitor-reports-data.component */
      "./src/app/modules/ams/visitor/components/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts");
      /* harmony import */


      var _components_checkin_visitor_checkin_visitor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/checkin-visitor/checkin-visitor.component */
      "./src/app/modules/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts");

      var VisitorModule = function VisitorModule() {
        _classCallCheck(this, VisitorModule);
      };

      VisitorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_visitor_component__WEBPACK_IMPORTED_MODULE_5__["VisitorComponent"], _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_6__["VisitorSetupComponent"], _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_7__["VisitorCheckinComponent"], _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_8__["VisitorCheckoutComponent"], _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_9__["VisitorExpectedVisitorComponent"], _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_10__["VisitorReportsComponent"], _components_visitor_history_visitor_history_component__WEBPACK_IMPORTED_MODULE_11__["VisitorHistoryComponent"], _components_checkin_visitor_checkin_visitor_component__WEBPACK_IMPORTED_MODULE_13__["CheckinVisitorComponent"], _components_visitor_reports_visitor_reports_data_visitor_reports_data_component__WEBPACK_IMPORTED_MODULE_12__["VisitorReportsDataComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__["VisitorRoutingModule"]],
        bootstrap: [_visitor_component__WEBPACK_IMPORTED_MODULE_5__["VisitorComponent"]]
      })], VisitorModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-visitor-visitor-module-es5.js.map