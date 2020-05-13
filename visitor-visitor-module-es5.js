function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-visitor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsCheckinVisitorCheckinVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"checkin-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span >Visitor Checkin</span>\n    \t\t\t</h5>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n            \n            <app-loader *ngIf=\"isVisitorSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted\">\n\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Count*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>In-time*</label>\n\t\t\t\t\t\t\t\t\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" (ngModelChange)=\"expectedDurationChange()\" [disabled]='true' required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Out-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorOutTime\" (ngModelChange)=\"expectedDurationChange()\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Duration*</label>\n\t\t\t                    <input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorDuration\" [(ngModel)]=\"visitor.expectedDuration\" [disabled]=\"true\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Pass Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\" name=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Type*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" (ngModelChange)=\"changeVisitorType(visitTypeId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Visit Category*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitByCategory\" \n\t\t\t\t\t\t\t        id=\"visitByCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant block-No*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\tname=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tid=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockNumber\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant Unit-No*</label>\n\t\t\t                   \t<select \n\t\t\t\t\t\t\t\tname=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tid=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockUnitNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitNumber\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"iscommunityVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Staff Id*</label>\n\t\t\t                    <input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Staff-id\" name=\"staffId\" [(ngModel)]=\"visitor.staffId\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Purpose</label>\n\t\t\t                    <textarea  type=\"text\" class=\"form-control\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\">Check In</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsVisitorCheckinVisitorCheckinComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"checkin-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditVisitor\">Create Expected Visitor</span>\n    \t\t\t\t<span *ngIf=\"isEditVisitor\">Edit Expected Visitor</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/visitor/expected-visitor\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVisitorSubmitted && !isVisitorAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted && !isVisitorAdded\">\n\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\" *ngIf=\"!isCheckout()\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Count*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visitor In-time*</label>\n\t\t\t\t\t\t\t\t\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" (ngModelChange)=\"expectedDurationChange()\" [disabled]='true' required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Out-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorOutTime\" (ngModelChange)=\"expectedDurationChange()\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration*</label>\n\t\t\t                    <input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorDuration\" [(ngModel)]=\"visitor.expectedDuration\" [disabled]=\"true\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Pass Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\" name=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Type*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" (ngModelChange)=\"changeVisitorType(visitTypeId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Category*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitByCategory\" \n\t\t\t\t\t\t\t        id=\"visitByCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant block-No*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\tname=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tid=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockNumber\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant Unit-No*</label>\n\t\t\t                   \t<select \n\t\t\t\t\t\t\t\tname=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tid=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockUnitNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitNumber\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"iscommunityVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Staff Id*</label>\n\t\t\t                    <input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Staff-id\" name=\"staffId\" [(ngModel)]=\"visitor.staffId\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Purpose</label>\n\t\t\t                    <textarea  type=\"text\" class=\"form-control\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\" *ngIf=\"isCheckout()\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.visitorName\" [disabled]='true' required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Count*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.visitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.visitorPhone\" [disabled]='true' required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor In-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" [min]=\"minDate\" [max]=\"minDate\" placeholder=\"Date Time\" [disabled]=\"true\" [(ngModel)]=\"visitor.visitorInTime\" (ngModelChange)=\"expectedDurationChange()\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime [min]=\"minDate\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Out-time</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\"  [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" [min]=\"minDate\" [max]=\"minDate\"  placeholder=\"Date Time\" [(ngModel)]=\"visitor.visitorOutTime\" (ngModelChange)=\"expectedDurationChange()\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime [min]=\"minDate\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration*</label>\n\t\t\t                    <input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedDuration\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Pass Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\" name=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" [disabled]='true' required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Type*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Category*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitByCategory\" \n\t\t\t\t\t\t\t        id=\"visitByCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\" *ngIf=\"!isCheckout()\">Check In</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\" *ngIf=\"isCheckout()\">Check Out</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isVisitorAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"!isCheckout()\">Visitor Checked In successfully!</h5>\n\t\t\t\t<h5 class=\"float-left\" *ngIf=\"isCheckout()\">Visitor Checked Out successfully!</h5>\n\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsVisitorCheckoutVisitorCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"checkedout-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Checked-in Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorName')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('visitorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorPhone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorInTime')\">In-time <span [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorOutTime')\">Out-time <span [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockUnitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('blockUnitNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.visitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.visitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorInTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorOutTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockNo}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockUnitNo}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckOutContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/visitor/edit-visitor/{{visitor.visitorId}}/checkout\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<img src=\"assets/images/checkout-icon.svg\" width=\"20\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ng-template #popAddCheckOutContent>\n\t\t\t\t      \t\t<div class=\"pop-desp\">\n\t\t\t\t      \t\t\t<h5>CheckOut</h5>\n\t\t\t\t      \t\t</div>\n\t\t\t\t      \t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-create/visitor-create.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-create/visitor-create.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsVisitorCreateVisitorCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"create-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span >Create Expected Visitor</span>\n    \t\t\t</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/visitor/expected-visitor\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n            \n            <app-loader *ngIf=\"isVisitorSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted\">\n\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Count*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Phone/Mobile*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visitor In-time*</label>\n\t\t\t\t\t\t\t\t\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" (ngModelChange)=\"expectedDurationChange()\" [disabled]='true' required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Out-time*</label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Date Time\" [(ngModel)]=\"visitor.expectedVisitorOutTime\" (ngModelChange)=\"expectedDurationChange()\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration*</label>\n\t\t\t                    <input OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorDuration\" [(ngModel)]=\"visitor.expectedDuration\" [disabled]=\"true\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Pass Number*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Number\" name=\"visitorPassNumber\" [(ngModel)]=\"visitor.passNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Type*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" (ngModelChange)=\"changeVisitorType(visitTypeId)\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Category*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitByCategory\" \n\t\t\t\t\t\t\t        id=\"visitByCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant block-No*</label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\tname=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tid=\"visitorblock-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockNumber\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isUnitVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Tenant Unit-No*</label>\n\t\t\t                   \t<select \n\t\t\t\t\t\t\t\tname=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tid=\"visitorUnit-No\" \n\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"visitor.apartmentBlockUnitNumber\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of blockUnitData\" [value]=\"item.apartmentBlockUnitNumber\">{{ item.apartmentBlockUnitNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"iscommunityVisitor\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Staff Id*</label>\n\t\t\t                    <input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Staff-id\" name=\"staffId\" [(ngModel)]=\"visitor.staffId\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Purpose</label>\n\t\t\t                    <textarea  type=\"text\" class=\"form-control\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\t\t\t\n\t\t</div>\n\t</div>\n\t\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsVisitorExpectedVisitorVisitorExpectedVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"expected-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Expected Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/visitor/create-expected-visitor\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"\n\t\t\t\t\t[state]=\"{ data: 'admin'}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Expected Visitor</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n  \t\t<div class=\"card-body p-0 customScroll\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\" mdbTable mdbTableScroll scrollX=\"true\" maxWidth=\"400\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tVisitor Name\n\t\t\t\t      \t<span (click)=\"sortUnitData('visitorName')\" [ngClass]=\"getFieldOrderBy('visitorName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['visitorName']\" (ngModelChange)=\"selectColInput('visitorName')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tPhone Number\n\t\t\t\t      \t<span (click)=\"sortUnitData('visitorPhone')\" [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone No\" [(ngModel)]=\"columnField['visitorPhone']\" (ngModelChange)=\"selectColInput('visitorPhone')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Expected in Date/Time<span (click)=\"sortUnitData('visitorInTime')\" [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Expected out Date/Time<span (click)=\"sortUnitData('visitorOutTime')\" [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\">Visitor Type<span (click)=\"sortUnitData('visitorOutTime')\" [ngClass]=\"getFieldOrderBy('visitorType')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\">Visitor category<span (click)=\"sortUnitData('visitorCategoryId_Label')\" [ngClass]=\"getFieldOrderBy('visitorCategoryId_Label')\"></span></th>\n\t\t\t\t\t  <th scope=\"col\">Tower Unit<span (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.expectedVisitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedVisitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{getTimeFormat(visitor.expectedVisitorInTime)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{getTimeFormat(visitor.expectedVisitorOutTime)}}</td>\n\t\t\t\t\t  <td class=\"grey\">{{visitor.visitTypeName}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorCategoryId_Label}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.block_Unit}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/visitor/edit-visitor/{{visitor.expectedVisitorId}}/checkin\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<img src=\"assets/images/checkin-icon.svg\" width=\"20\" />\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ng-template #popAddCheckInContent>\n\t\t\t\t      \t\t<div class=\"pop-desp\">\n\t\t\t\t      \t\t\t<h5>CheckIn</h5>\n\t\t\t\t      \t\t</div>\n\t\t\t\t      \t</ng-template>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-history/visitor-history.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-history/visitor-history.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsVisitorHistoryVisitorHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"visitor-history-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\t\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Checked-Out Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n\n    \t\t</ul>\n  \t\t</div>\n  \t\t\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorName')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('visitorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorPhone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('visitorPhone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorInTime')\">In-time <span [ngClass]=\"getFieldOrderBy('visitorInTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('visitorOutTime')\">Out-time <span [ngClass]=\"getFieldOrderBy('visitorOutTime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockNo')\">Block No<span [ngClass]=\"getFieldOrderBy('blockNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('blockUnitNo')\">Unit No <span [ngClass]=\"getFieldOrderBy('blockUnitNo')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">{{visitor.visitorName}}\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.visitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t\t\t</a>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorInTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.visitorOutTime | date:'MM/dd/yy, hh:mm'}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockNo}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{visitor.blockUnitNo}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsVisitorReportsVisitorReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Helpdesk reports </h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"{{report.menuName}}/{{report.lookupValueID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorComponentsVisitorSetupVisitorSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"visitor-setup-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30 vehicle-type-table-card\" *ngIf=\"isDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Visitor Categories <span class=\"badge blue\">{{totalItems}}</span></h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Edit and Delete Visitor Categories</p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"categoryData\" >\n    \t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" (click)=\"addNewCategoryType()\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Category</span>\n\t\t\t\t\t</a>\n\t    \t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Sno <span [ngClass]=\"getFieldOrderBy('primayContact')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Visitor Category <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th> \n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryDataList | simpleSearch: categoryData | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td>{{i + 1}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.lookupValueName}}</td> \n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"updateCategoryType(category)\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"deleteCategoryType(category)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t                </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\t\t</div>\n\n    </div>\n\n    <div class=\"card mb-30 vehicle-type-card\" *ngIf=\"isCategoryTypeNew || isCategoryTypeUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isCategoryTypeNew\">Add Visitor Category</h6>\n    \t\t\t<h6 *ngIf=\"!isCategoryTypeNew\">Update Visitor Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryTypeBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">  \n\t\t\t\n\t\t\t<app-alert-message [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isCategoryTypeSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isCategoryTypeSubmitted\">\n\n\t\t\t\t<form #addCategoryTypeForm = \"ngForm\" name=\"addCategoryTypeForm\"  (ngSubmit)=\"submitCategoryTypeForm(addCategoryTypeForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\"> \n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Visitor Category*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"categoryType\" [(ngModel)]=\"categoryType\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12 col-md-6 col-lg-4\">\n\t\t\t\t\t\t\t<button class=\"btn blue at-input\" [disabled]=\"addCategoryTypeForm.invalid\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/visitor.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/visitor.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsVisitorVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsCheckinVisitorCheckinVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvY2hlY2tpbi12aXNpdG9yL2NoZWNraW4tdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: CheckinVisitorComponent */

  /***/
  function srcAppAmsVisitorComponentsCheckinVisitorCheckinVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/visitor.service */
    "./src/app/api/services/visitor.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/shared-toaster.service */
    "./src/app/shared/services/shared-toaster.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var CheckinVisitorComponent =
    /*#__PURE__*/
    function () {
      function CheckinVisitorComponent(router, route, userService, apartmentService, visitorService, lookupService, sharedService, cookieService, SharedToaster) {
        _classCallCheck(this, CheckinVisitorComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.SharedToaster = SharedToaster;
        this.isEditVisitor = false;
        this.isVisitorSubmitted = false;
        this.isVisitorAdded = false;
        this.isError = false;
        this.errorMessage = "";
        this.visitTypeId = "";
        this.isExpectedVisitor = false;
        this.visitorStatus = "";
        this.isUnitVisitor = false;
        this.iscommunityVisitor = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
      }

      _createClass(CheckinVisitorComponent, [{
        key: "isCheckout",
        value: function isCheckout() {
          return this.visitorStatus == 'checkout' ? true : false;
        }
      }, {
        key: "submitAddVisitorForm",
        value: function submitAddVisitorForm(form) {
          var _this = this;

          this.isVisitorSubmitted = true;
          this.isError = false;
          var visitorDetails = {
            "apartmentUnitId": this.apartmentUnitId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "visitorName": this.visitor.expectedVisitorName,
            "visitorCount": this.visitor.expectedVisitorCount,
            "visitorPhone": this.visitor.expectedVisitorPhone,
            "visitorVehicleTypeId": 1,
            "visitorVehicleNumber": "string",
            "visitingPlaceId": 1,
            "passNumber": this.visitor.passNumber,
            "isCheckedIn": true,
            "visitorInTime": this.visitor.expectedVisitorInTime,
            "isCheckedOut": false,
            "visitorOutTime": null,
            "expectedDuration": this.visitor.expectedDurationInHours,
            "meetingPersonId": 1,
            "meetingPersonName": "string",
            "visitTypeId": parseInt(this.visitTypeId),
            "visitCategoryId": parseInt(this.visitCategoryId),
            "visitorsOrg": "string",
            "entryGateId": null,
            "exitGateId": null,
            "purpose": this.visitor.purpose,
            "enteredBy": parseInt(this.cookieService.get('userId')),
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": "2019-11-18T17:08:51.188Z",
            "updatedBy": 0,
            "updatedOn": "2019-11-18T17:08:51.188Z"
          };
          this.visitorService.addVisitor(visitorDetails).subscribe(function (res) {
            if (res.message) {
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

          this.visitor = {}; //visit type

          this.lookupService.getLookupValueByLookupTypeId(15).subscribe(function (res) {
            _this2.visitByData = res;
          }, function (error) {}); //visit type

          this.lookupService.getLookupValueByLookupTypeId(100).subscribe(function (res) {
            _this2.visitCategoryData = res;
          }, function (error) {});
          this.apartmentService.getApartmentBlockUnitByUserId(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
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
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]
      }];
    };

    CheckinVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-checkin-visitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./checkin-visitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./checkin-visitor.component.scss */
      "./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]])], CheckinVisitorComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsVisitorCheckinVisitorCheckinComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1jaGVja2luL3Zpc2l0b3ItY2hlY2tpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: VisitorCheckinComponent */

  /***/
  function srcAppAmsVisitorComponentsVisitorCheckinVisitorCheckinComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/visitor.service */
    "./src/app/api/services/visitor.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/shared-toaster.service */
    "./src/app/shared/services/shared-toaster.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var VisitorCheckinComponent =
    /*#__PURE__*/
    function () {
      function VisitorCheckinComponent(router, route, userService, apartmentService, visitorService, lookupService, sharedService, cookieService, SharedToaster) {
        _classCallCheck(this, VisitorCheckinComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.SharedToaster = SharedToaster;
        this.isEditVisitor = false;
        this.isVisitorSubmitted = false;
        this.isVisitorAdded = false;
        this.isError = false;
        this.errorMessage = "";
        this.visitTypeId = "";
        this.isExpectedVisitor = false;
        this.visitorStatus = "";
        this.isUnitVisitor = false;
        this.iscommunityVisitor = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
      }

      _createClass(VisitorCheckinComponent, [{
        key: "isCheckout",
        value: function isCheckout() {
          return this.visitorStatus == 'checkout' ? true : false;
        }
      }, {
        key: "submitAddVisitorForm",
        value: function submitAddVisitorForm(form) {
          var _this3 = this;

          this.isVisitorSubmitted = true;
          this.isError = false;

          if (!this.isEditVisitor) {
            console.log("fist");
            var expectedVisitorDetails = {
              "apartmentUnitId": this.apartmentUnitId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "visitorName": this.visitor.expectedVisitorName,
              "visitorCount": this.visitor.expectedVisitorCount,
              "visitorPhone": this.visitor.expectedVisitorPhone,
              "passNumber": this.visitor.passNumber,
              "visitorInTime": this.visitor.expectedVisitorInTime,
              "visitorOutTime": this.visitor.expectedVisitorOutTime,
              "expectedDuration": this.visitor.expectedDurationInHours,
              "meetingPersonId": 1,
              "visitTypeId": parseInt(this.visitTypeId),
              "visitCategoryId": parseInt(this.visitCategoryId),
              "visitorsOrg": "string",
              "entryGateId": null,
              'apartmentBlockNumber': this.visitor.apartmentBlockNumber,
              'apartmentUnitNumber': this.visitor.apartmentBlockUnitNumber,
              "exitGateId": null,
              "purpose": this.visitor.purpose,
              "enteredBy": parseInt(this.cookieService.get('userId')),
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-11-18T17:08:51.188Z",
              "updatedBy": 0,
              "updatedOn": "2019-11-18T17:08:51.188Z"
            };
            this.visitorService.addVisitor(expectedVisitorDetails).subscribe(function (res) {
              if (res.message) {
                _this3.isVisitorAdded = true;

                _this3.router.navigate(['/ams/visitor/checkout']);
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
          }

          if (this.isEditVisitor) {
            if (!this.isCheckout()) {
              var visitorDetails = {
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "visitorName": this.visitor.expectedVisitorName,
                "visitorCount": this.visitor.expectedVisitorCount,
                "visitorPhone": this.visitor.expectedVisitorPhone,
                "visitorVehicleTypeId": 1,
                "visitorVehicleNumber": "string",
                "visitingPlaceId": 1,
                "passNumber": this.visitor.passNumber,
                "isCheckedIn": true,
                "visitorInTime": this.visitor.expectedVisitorInTime,
                "isCheckedOut": false,
                "visitorOutTime": null,
                "expectedDuration": this.visitor.expectedDurationInHours,
                "meetingPersonId": 1,
                "meetingPersonName": "string",
                "visitTypeId": parseInt(this.visitTypeId),
                "visitCategoryId": parseInt(this.visitCategoryId),
                "visitorsOrg": "string",
                "entryGateId": null,
                "exitGateId": null,
                "purpose": this.visitor.purpose,
                "enteredBy": parseInt(this.cookieService.get('userId')),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-18T17:08:51.188Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-18T17:08:51.188Z"
              };
              this.visitorService.addVisitor(visitorDetails).subscribe(function (res) {
                if (res.message) {
                  _this3.isVisitorAdded = true;
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
                "apartmentUnitId": this.apartmentUnitId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "visitorName": this.visitor.visitorName,
                "visitorCount": this.visitor.visitorCount,
                "visitorPhone": this.visitor.visitorPhone,
                "visitorVehicleTypeId": 1,
                "visitorVehicleNumber": "string",
                "visitingPlaceId": 1,
                "passNumber": this.visitor.passNumber,
                "isCheckedIn": true,
                "visitorInTime": this.visitor.visitorInTime,
                "isCheckedOut": true,
                "visitorOutTime": this.visitor.visitorOutTime,
                "expectedDuration": this.visitor.expectedDurationInHours,
                "meetingPersonId": 1,
                "meetingPersonName": "string",
                "visitTypeId": parseInt(this.visitTypeId),
                "visitCategoryId": parseInt(this.visitCategoryId),
                "visitorsOrg": "string",
                "entryGateId": null,
                "exitGateId": null,
                "purpose": this.visitor.purpose,
                "enteredBy": parseInt(this.cookieService.get('userId')),
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-11-18T17:08:51.188Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-18T17:08:51.188Z"
              };
              this.visitorService.updateVisitor(_visitorDetails).subscribe(function (res) {
                if (res.message) {
                  _this3.isVisitorAdded = true;
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
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.visitor = {};

          if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
            this.visitorStatus = this.route.params['value'].type;

            if (this.route.params['value'].type == 'checkout') {
              this.visitorService.getVisitorById(this.route.params['value'].id).subscribe(function (res) {
                _this4.visitor = res[0];
                _this4.visitTypeId = _this4.visitor.visitTypeId;
                _this4.visitCategoryId = _this4.visitor.visitorCategoryId;
                _this4.visitor.purpose = '';
                _this4.visitor.visitorOutTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
                var inDate = moment__WEBPACK_IMPORTED_MODULE_10__(_this4.visitor.visitorInTime);
                var outDate = moment__WEBPACK_IMPORTED_MODULE_10__(_this4.visitor.visitorOutTime);
                var diffDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
                _this4.visitor.expectedDuration = diffDuration.days() + " days " + _this4.isSingleDigit(diffDuration.hours()) + ":" + _this4.isSingleDigit(diffDuration.minutes()) + " hours";
                var sendDuration = moment__WEBPACK_IMPORTED_MODULE_10__["duration"](outDate.diff(inDate));
                var hours = sendDuration.asHours();
                _this4.visitor.expectedDurationInHours = Math.round(hours);
              }, function (error) {});
            } else {
              this.visitorService.getExpectedVisitorById(this.route.params['value'].id).subscribe(function (res) {
                _this4.visitor = res[0];
                _this4.visitor.purpose = '';
                _this4.visitTypeId = _this4.visitor.visitTypeId;
                console.log(_this4.visitor);
              }, function (error) {});
            }
          } //visit type


          this.lookupService.getLookupValueByLookupTypeId(15).subscribe(function (res) {
            _this4.visitByData = res;
          }, function (error) {}); //visit type

          this.lookupService.getLookupValueByLookupTypeId(100).subscribe(function (res) {
            _this4.visitCategoryData = res;
          }, function (error) {});
          this.apartmentService.getApartmentBlockUnitByUserId(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
            _this4.apartmentUnitId = res[0].apartmentBlockUnitId;
          }, function (error) {});
          this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
          this.visitor.visitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this4.blockUnitData = res;
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

      return VisitorCheckinComponent;
    }();

    VisitorCheckinComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]
      }];
    };

    VisitorCheckinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor-checkin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor-checkin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor-checkin.component.scss */
      "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]])], VisitorCheckinComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsVisitorCheckoutVisitorCheckoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1jaGVja291dC92aXNpdG9yLWNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: VisitorCheckoutComponent */

  /***/
  function srcAppAmsVisitorComponentsVisitorCheckoutVisitorCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/visitor.service */
    "./src/app/api/services/visitor.service.ts");
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

    var VisitorCheckoutComponent =
    /*#__PURE__*/
    function () {
      function VisitorCheckoutComponent(injector, apartmentService, visitorService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, VisitorCheckoutComponent);

        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          //get visit type
          this.lookupService.getLookupValueByLookupTypeId(15).subscribe(function (res) {
            _this5.visitTypeData = res;
          }, function (error) {});
          this.visitorService.getYetToCheckoutVisitorsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            //filter active true items
            _this5.visitorListData = res.filter(function (item) {
              return item.isActive && !item.isCheckedOut;
            }); // console.log(this.visitorListData);
            //get block and unit details

            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](_this5.visitorListData, function (item, index) {
              _this5.apartmentService.getApartmentBlockUnitById(item.apartmentUnitId).subscribe(function (res) {
                _this5.visitorListData[index].blockNo = res[0].apartmentBlockNumber;
                _this5.visitorListData[index].blockUnitNo = res[0].apartmentBlockUnitNumber;
              }, function (error) {});
            });
            _this5.totalItems = _this5.visitorListData.length;

            if (_this5.totalItems > _this5.itemLimit) {
              _this5.ItemEndIndex = _this5.itemLimit;
            } else {
              _this5.ItemEndIndex = _this5.totalItems;
            }

            _this5.isVisitorDataLoaded = true;
          });
        }
      }]);

      return VisitorCheckoutComponent;
    }();

    VisitorCheckoutComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    VisitorCheckoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor-checkout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor-checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor-checkout.component.scss */
      "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], VisitorCheckoutComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-create/visitor-create.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-create/visitor-create.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsVisitorCreateVisitorCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1jcmVhdGUvdmlzaXRvci1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-create/visitor-create.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-create/visitor-create.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: VisitorCreateComponent */

  /***/
  function srcAppAmsVisitorComponentsVisitorCreateVisitorCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorCreateComponent", function () {
      return VisitorCreateComponent;
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/visitor.service */
    "./src/app/api/services/visitor.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/shared-toaster.service */
    "./src/app/shared/services/shared-toaster.service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var VisitorCreateComponent =
    /*#__PURE__*/
    function () {
      function VisitorCreateComponent(router, route, userService, apartmentService, visitorService, lookupService, sharedService, cookieService, SharedToaster) {
        _classCallCheck(this, VisitorCreateComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.SharedToaster = SharedToaster;
        this.isEditVisitor = false;
        this.isVisitorSubmitted = false;
        this.isVisitorAdded = false;
        this.isError = false;
        this.errorMessage = "";
        this.visitTypeId = "";
        this.isExpectedVisitor = false;
        this.visitorStatus = "";
        this.isUnitVisitor = false;
        this.iscommunityVisitor = false;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
      }

      _createClass(VisitorCreateComponent, [{
        key: "isCheckout",
        value: function isCheckout() {
          return this.visitorStatus == 'checkout' ? true : false;
        }
      }, {
        key: "submitAddVisitorForm",
        value: function submitAddVisitorForm(form) {
          var _this6 = this;

          this.isVisitorSubmitted = true;
          var visitorDetails = {
            "apartmentUnitId": this.apartmentUnitId,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "expectedVisitorName": this.visitor.expectedVisitorName,
            "expectedVisitorCount": this.visitor.expectedVisitorCount,
            "expectedVisitorPhone": this.visitor.expectedVisitorPhone.toString(),
            "expectedVisitorInTime": this.visitor.expectedVisitorInTime,
            "expectedVisitorOutTime": this.visitor.expectedVisitorOutTime,
            "expectedDuration": this.visitor.expectedDurationInHours,
            "passNumber": this.visitor.passNumber,
            "meetingPersonId": 1,
            "visitTypeId": parseInt(this.visitTypeId),
            "visitCategoryId": parseInt(this.visitCategoryId),
            "visitorsOrg": "string",
            "entryGateId": null,
            'apartmentBlockNumber': this.visitor.apartmentBlockNumber,
            'apartmentUnitNumber': this.visitor.apartmentBlockUnitNumber,
            "exitGateId": null,
            "purpose": this.visitor.purpose,
            "enteredBy": parseInt(this.cookieService.get('userId')),
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": "2019-11-18T17:08:51.188Z",
            "updatedBy": 0,
            "updatedOn": "2019-11-18T17:08:51.188Z"
          };
          this.visitorService.addExpectedVisitor(visitorDetails).subscribe(function (res) {
            if (res.message) {
              _this6.isVisitorSubmitted = true;

              _this6.sharedService.setAlertMessage("Visitor added successfully");

              _this6.router.navigate(['/ams/visitor/expected-visitor']);
            } else {
              _this6.isVisitorSubmitted = false;
              _this6.isError = true;
              _this6.errorMessage = res.errorMessage;
            }
          }, function (error) {
            _this6.isVisitorSubmitted = false;
            _this6.isError = true;
            _this6.errorMessage = error;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.visitor = {}; //visit type

          this.lookupService.getLookupValueByLookupTypeId(15).subscribe(function (res) {
            _this7.visitByData = res;
          }, function (error) {}); //visit type

          this.lookupService.getLookupValueByLookupTypeId(100).subscribe(function (res) {
            _this7.visitCategoryData = res;
          }, function (error) {});
          this.apartmentService.getApartmentBlockUnitByUserId(parseInt(this.cookieService.get('userId'))).subscribe(function (res) {
            _this7.apartmentUnitId = res[0].apartmentBlockUnitId;
          }, function (error) {});
          this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
          this.apartmentService.getApartmentBlockUnitByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this7.blockUnitData = res;
            console.log('this.blockUnitData', res);
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

      return VisitorCreateComponent;
    }();

    VisitorCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"]
      }, {
        type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]
      }];
    };

    VisitorCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-create/visitor-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor-create.component.scss */
      "./src/app/ams/visitor/components/visitor-create/visitor-create.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_6__["ApartmentService"], _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_7__["VisitorService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_9__["SharedToasterService"]])], VisitorCreateComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsVisitorExpectedVisitorVisitorExpectedVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".customScroll {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.customScroll table thead th {\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdmlzaXRvci9jb21wb25lbnRzL3Zpc2l0b3ItZXhwZWN0ZWQtdmlzaXRvci92aXNpdG9yLWV4cGVjdGVkLXZpc2l0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1leHBlY3RlZC12aXNpdG9yL3Zpc2l0b3ItZXhwZWN0ZWQtdmlzaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FESUk7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1leHBlY3RlZC12aXNpdG9yL3Zpc2l0b3ItZXhwZWN0ZWQtdmlzaXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b21TY3JvbGx7XG4gICAgLy8gb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0aHtcbiAgICAgICAgLy8gbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIHRhYmxlIHRoZWFkIHRoe1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIFxuICAgIH1cbn0iLCIuY3VzdG9tU2Nyb2xsIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b21TY3JvbGwgdGFibGUgdGhlYWQgdGgge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: VisitorExpectedVisitorComponent */

  /***/
  function srcAppAmsVisitorComponentsVisitorExpectedVisitorVisitorExpectedVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/visitor.service */
    "./src/app/api/services/visitor.service.ts");
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

    var VisitorExpectedVisitorComponent =
    /*#__PURE__*/
    function () {
      function VisitorExpectedVisitorComponent(injector, apartmentService, visitorService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, VisitorExpectedVisitorComponent);

        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "getTimeFormat",
        value: function getTimeFormat(dateTime) {
          return moment__WEBPACK_IMPORTED_MODULE_9__(dateTime).format("YYYY-MM-DD HH:mm");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.visitorService.getExpectedVisitorsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            //filter active true items
            _this8.visitorListData = res.filter(function (data) {
              return data.isActive;
            }); //get block and unit details

            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](_this8.visitorListData, function (item, index) {
              _this8.apartmentService.getApartmentBlockUnitById(item.apartmentUnitId).subscribe(function (res) {
                _this8.visitorListData[index].blockNo = res[0].apartmentBlockNumber;
                _this8.visitorListData[index].blockUnitNo = res[0].apartmentBlockUnitNumber; // console.log(res[0]);
              }, function (error) {});
            }); //get visit type

            _this8.lookupService.getLookupValueByLookupTypeId(15).subscribe(function (res) {
              _this8.visitTypeData = res;

              _this8.checkVisitTypeData();
            }, function (error) {}); //get visit category


            _this8.lookupService.getLookupValueByLookupTypeId(100).subscribe(function (res) {
              _this8.visitCategoryData = res;

              _this8.checkVisitCategoryData();
            }, function (error) {});

            _this8.totalItems = _this8.visitorListData.length;

            if (_this8.totalItems > _this8.itemLimit) {
              _this8.ItemEndIndex = _this8.itemLimit;
            } else {
              _this8.ItemEndIndex = _this8.totalItems;
            }

            _this8.isVisitorDataLoaded = true;
          });
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
        key: "checkVisitCategoryData",
        value: function checkVisitCategoryData() {
          var _this10 = this;

          console.log(this.visitorListData[0]);
          this.visitCategoryData.forEach(function (element) {
            if (element.lookupValueId == _this10.visitorListData[0].visitorCategoryId) {
              _this10.visitorListData[0].visitCategoryName = element.lookupValueName.toLowerCase();
            }
          });
        }
      }]);

      return VisitorExpectedVisitorComponent;
    }();

    VisitorExpectedVisitorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    VisitorExpectedVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor-expected-visitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor-expected-visitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor-expected-visitor.component.scss */
      "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], VisitorExpectedVisitorComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-history/visitor-history.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-history/visitor-history.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsVisitorHistoryVisitorHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1oaXN0b3J5L3Zpc2l0b3ItaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-history/visitor-history.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-history/visitor-history.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: VisitorHistoryComponent */

  /***/
  function srcAppAmsVisitorComponentsVisitorHistoryVisitorHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/visitor.service */
    "./src/app/api/services/visitor.service.ts");
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

    var VisitorHistoryComponent =
    /*#__PURE__*/
    function () {
      function VisitorHistoryComponent(injector, apartmentService, visitorService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, VisitorHistoryComponent);

        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
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
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          //get visit type
          this.lookupService.getLookupValueByLookupTypeId(15).subscribe(function (res) {
            _this11.visitTypeData = res;
          }, function (error) {});
          this.visitorService.getVisitorsByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            //filter active true items
            _this11.visitorListData = res.filter(function (item) {
              return item.isActive && item.isCheckedOut;
            }); // console.log(this.visitorListData);
            //get block and unit details

            underscore__WEBPACK_IMPORTED_MODULE_8__["each"](_this11.visitorListData, function (item, index) {
              _this11.apartmentService.getApartmentBlockUnitById(item.apartmentUnitId).subscribe(function (res) {
                _this11.visitorListData[index].blockNo = res[0].apartmentBlockNumber;
                _this11.visitorListData[index].blockUnitNo = res[0].apartmentBlockUnitNumber;
              }, function (error) {});
            });
            _this11.totalItems = _this11.visitorListData.length;

            if (_this11.totalItems > _this11.itemLimit) {
              _this11.ItemEndIndex = _this11.itemLimit;
            } else {
              _this11.ItemEndIndex = _this11.totalItems;
            }

            _this11.isVisitorDataLoaded = true;
          });
        }
      }]);

      return VisitorHistoryComponent;
    }();

    VisitorHistoryComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
      }, {
        type: _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    VisitorHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor-hitory',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-history/visitor-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor-history.component.scss */
      "./src/app/ams/visitor/components/visitor-history/visitor-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _api_services_visitor_service__WEBPACK_IMPORTED_MODULE_4__["VisitorService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], VisitorHistoryComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsVisitorReportsVisitorReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1yZXBvcnRzL3Zpc2l0b3ItcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: VisitorReportsComponent */

  /***/
  function srcAppAmsVisitorComponentsVisitorReportsVisitorReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var VisitorReportsComponent =
    /*#__PURE__*/
    function () {
      function VisitorReportsComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, VisitorReportsComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(VisitorReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var details = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 87,
            MenuName: 'VisitorManagement'
          };
          this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
            _this12.reportDataList = res;
            _this12.isDataLoaded = true;
          });
        }
      }]);

      return VisitorReportsComponent;
    }();

    VisitorReportsComponent.ctorParameters = function () {
      return [{
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    VisitorReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor-reports.component.scss */
      "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], VisitorReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorComponentsVisitorSetupVisitorSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL2NvbXBvbmVudHMvdmlzaXRvci1zZXR1cC92aXNpdG9yLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: VisitorSetupComponent */

  /***/
  function srcAppAmsVisitorComponentsVisitorSetupVisitorSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
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

    var VisitorSetupComponent =
    /*#__PURE__*/
    function () {
      function VisitorSetupComponent(injector, lookupService, sharedService, cookieService) {
        _classCallCheck(this, VisitorSetupComponent);

        this.injector = injector;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]);
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
          var _this13 = this;

          this.modalService.showConfirmModal(item); // delete item

          this.sharedService.unitlistdeleteindexcast.subscribe(function (item) {
            if (item != null) {
              _this13.isDataLoaded = false;
              var params = {
                lookupValueId: item.lookupValueId,
                updateUserId: parseInt(_this13.cookieService.get('userId'))
              };

              _this13.lookupService.deleteLookupvalue(params).subscribe(function (res) {
                _this13.categoryDataList = _this13.categoryDataList.filter(function (type) {
                  return type.lookupValueId !== item.lookupValueId;
                });

                _this13.sharedService.setUnitListDeleteIndex(null);

                _this13.isDataLoaded = true;
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
          var _this14 = this;

          this.isCategoryTypeSubmitted = false;

          if (this.isCategoryTypeNew) {
            var details = {
              "lookupTypeId": 100,
              "lookupValueName": this.categoryType,
              "description": 'Visitor Category',
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": 0,
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.addLookupValue(details).subscribe(function (res) {
              if (res.message) {
                _this14.lookupService.getLookupValueByLookupTypeId(100).subscribe(function (res) {
                  _this14.isCategoryTypeNew = false;
                  _this14.isCategoryTypeSubmitted = true;

                  _this14.sharedService.setAlertMessage("Visitor Category added successfully");

                  _this14.categoryDataList = res.filter(function (item) {
                    return item.isActive;
                  });
                });
              } else {
                _this14.isCategoryTypeSubmitted = true;
                _this14.isError = true;
                _this14.alertMessage = res.errorMessage;
              }
            });
          } else {
            var _details = {
              "lookupValueId": this.categoryUpdateId,
              "lookupTypeId": 100,
              "lookupValueName": this.categoryType,
              "description": this.categoryType,
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": "2019-11-20T16:51:24.105Z",
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.updateLookupValue(_details).subscribe(function (res) {
              if (res.message) {
                _this14.lookupService.getLookupValueByLookupTypeId(100).subscribe(function (res) {
                  _this14.isCategoryTypeUpdate = false;
                  _this14.isCategoryTypeSubmitted = true;

                  _this14.sharedService.setAlertMessage("Visitor Category updated successfully");

                  _this14.categoryDataList = res.filter(function (item) {
                    return item.isActive;
                  });
                });
              } else {
                _this14.isCategoryTypeSubmitted = true;
                _this14.isError = true;
                _this14.alertMessage = res.errorMessage;
              }
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.lookupService.getLookupValueByLookupTypeId(100).subscribe(function (res) {
            _this15.categoryDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this15.totalItems = _this15.categoryDataList.length;

            if (_this15.totalItems > _this15.itemLimit) {
              _this15.ItemEndIndex = _this15.itemLimit;
            } else {
              _this15.ItemEndIndex = _this15.totalItems;
            }

            _this15.isDataLoaded = true;
          });
        }
      }]);

      return VisitorSetupComponent;
    }();

    VisitorSetupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    VisitorSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor-setup.component.scss */
      "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], VisitorSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/visitor-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ams/visitor/visitor-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: VisitorRoutingModule */

  /***/
  function srcAppAmsVisitorVisitorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts");
    /* harmony import */


    var _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/visitor-checkin/visitor-checkin.component */
    "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts");
    /* harmony import */


    var _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/visitor-checkout/visitor-checkout.component */
    "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts");
    /* harmony import */


    var _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/visitor-expected-visitor/visitor-expected-visitor.component */
    "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts");
    /* harmony import */


    var _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/visitor-reports/visitor-reports.component */
    "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts");
    /* harmony import */


    var _components_visitor_create_visitor_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/visitor-create/visitor-create.component */
    "./src/app/ams/visitor/components/visitor-create/visitor-create.component.ts");
    /* harmony import */


    var _components_visitor_history_visitor_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/visitor-history/visitor-history.component */
    "./src/app/ams/visitor/components/visitor-history/visitor-history.component.ts");
    /* harmony import */


    var _components_checkin_visitor_checkin_visitor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/checkin-visitor/checkin-visitor.component */
    "./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts");

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
  "./src/app/ams/visitor/visitor.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/ams/visitor/visitor.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsVisitorVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aXNpdG9yL3Zpc2l0b3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/visitor/visitor.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/ams/visitor/visitor.component.ts ***!
    \**************************************************/

  /*! exports provided: VisitorComponent */

  /***/
  function srcAppAmsVisitorVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var VisitorComponent =
    /*#__PURE__*/
    function () {
      function VisitorComponent() {
        _classCallCheck(this, VisitorComponent);
      }

      _createClass(VisitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VisitorComponent;
    }();

    VisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-visitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./visitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/visitor/visitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./visitor.component.scss */
      "./src/app/ams/visitor/visitor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], VisitorComponent);
    /***/
  },

  /***/
  "./src/app/ams/visitor/visitor.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/ams/visitor/visitor.module.ts ***!
    \***********************************************/

  /*! exports provided: VisitorModule */

  /***/
  function srcAppAmsVisitorVisitorModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/ams/visitor/visitor-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _visitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./visitor.component */
    "./src/app/ams/visitor/visitor.component.ts");
    /* harmony import */


    var _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/visitor-setup/visitor-setup.component */
    "./src/app/ams/visitor/components/visitor-setup/visitor-setup.component.ts");
    /* harmony import */


    var _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/visitor-checkin/visitor-checkin.component */
    "./src/app/ams/visitor/components/visitor-checkin/visitor-checkin.component.ts");
    /* harmony import */


    var _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/visitor-checkout/visitor-checkout.component */
    "./src/app/ams/visitor/components/visitor-checkout/visitor-checkout.component.ts");
    /* harmony import */


    var _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/visitor-expected-visitor/visitor-expected-visitor.component */
    "./src/app/ams/visitor/components/visitor-expected-visitor/visitor-expected-visitor.component.ts");
    /* harmony import */


    var _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/visitor-reports/visitor-reports.component */
    "./src/app/ams/visitor/components/visitor-reports/visitor-reports.component.ts");
    /* harmony import */


    var _components_visitor_create_visitor_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/visitor-create/visitor-create.component */
    "./src/app/ams/visitor/components/visitor-create/visitor-create.component.ts");
    /* harmony import */


    var _components_visitor_history_visitor_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/visitor-history/visitor-history.component */
    "./src/app/ams/visitor/components/visitor-history/visitor-history.component.ts");
    /* harmony import */


    var _components_checkin_visitor_checkin_visitor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/checkin-visitor/checkin-visitor.component */
    "./src/app/ams/visitor/components/checkin-visitor/checkin-visitor.component.ts");

    var VisitorModule = function VisitorModule() {
      _classCallCheck(this, VisitorModule);
    };

    VisitorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_visitor_component__WEBPACK_IMPORTED_MODULE_5__["VisitorComponent"], _components_visitor_setup_visitor_setup_component__WEBPACK_IMPORTED_MODULE_6__["VisitorSetupComponent"], _components_visitor_checkin_visitor_checkin_component__WEBPACK_IMPORTED_MODULE_7__["VisitorCheckinComponent"], _components_visitor_checkout_visitor_checkout_component__WEBPACK_IMPORTED_MODULE_8__["VisitorCheckoutComponent"], _components_visitor_expected_visitor_visitor_expected_visitor_component__WEBPACK_IMPORTED_MODULE_9__["VisitorExpectedVisitorComponent"], _components_visitor_reports_visitor_reports_component__WEBPACK_IMPORTED_MODULE_10__["VisitorReportsComponent"], _components_visitor_create_visitor_create_component__WEBPACK_IMPORTED_MODULE_11__["VisitorCreateComponent"], _components_visitor_history_visitor_history_component__WEBPACK_IMPORTED_MODULE_12__["VisitorHistoryComponent"], _components_checkin_visitor_checkin_visitor_component__WEBPACK_IMPORTED_MODULE_13__["CheckinVisitorComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__["VisitorRoutingModule"]],
      bootstrap: [_visitor_component__WEBPACK_IMPORTED_MODULE_5__["VisitorComponent"]]
    })], VisitorModule);
    /***/
  }
}]);
//# sourceMappingURL=visitor-visitor-module-es5.js.map