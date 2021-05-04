(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-assets-add-maintenance-add-maintenance-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsAssetsAddMaintenanceAddMaintenanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"add-maintenance-assets-wrapper\">\n\t<div class=\"main\">\n\t\t<condo-message class=\"mb-3\" *ngIf=\"message\"\n\t\t\t[appearance]=\"message.appearance\"\n\t\t\t[showIcon]=\"message.showIcon\"\n\t\t\t[type]=\"message.type\"\n\t\t\t[@shake]=\"message.shake\">\n\t\t\t{{message.content}}\n\t\t</condo-message>\n\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t<h4 class=\"mb-4\">\t\t\t\n\t\t\t\t<span *ngIf=\"!isEdit\">Create Asset Maintenance </span>\n\t\t\t\t<span *ngIf=\"isEdit\">Edit Asset Maintenance </span>\t\t\t\n\t\t\t</h4>\t\t\t\n\t\t</div>\n\t\t<app-loader *ngIf=\"isAssetLoaded\"></app-loader>\n\t\t<form name=\"addMaintenanceForm\" #addMaintenanceForm=\"ngForm\" novalidate>\n\t\t\t<div class=\"bg-card shadow\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<condo-select\n\t\t\t\t\t\tlabelText=\"Select Asset\"                                     \n\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t fieldPlaceholder=\"Select Asset\"\n\t\t\t\t\t\t [fieldList]=\"assetList\"                                     \n\t\t\t\t\t\t fieldValue=\"customLabel\"\n\t\t\t\t\t\t fieldId=\"assetId\"\n\t\t\t\t\t\t [fieldModel]=\"maintenance.assetId\"\n\t\t\t\t\t\t (fieldParams)=\"setAssetId($event)\"></condo-select>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<mat-accordion>\n\t\t\t\t<mat-expansion-panel [expanded] = \"true\">\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Current Maintenance</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"row\">\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<condo-select\n\t\t\t\t\t\t\t\tlabelText=\"Maint Type\"                                     \n\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t fieldPlaceholder=\"Select Maint type\"\n\t\t\t\t\t\t\t\t [fieldList]=\"mainType\"                                     \n\t\t\t\t\t\t\t\t fieldValue=\"name\"\n\t\t\t\t\t\t\t\t fieldId=\"id\"\n\t\t\t\t\t\t\t\t [fieldModel]=\"maintenance.maintenanceTypeId\"\n\t\t\t\t\t\t\t\t (fieldParams)=\"setMaintTypeId($event)\"></condo-select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<condo-select\n\t\t\t\t\t\t\t\t\tlabelText=\"Maint Subtype\"                                     \n\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\tfieldPlaceholder=\"Select Maint Subtype\"\n\t\t\t\t\t\t\t\t\t[fieldList]=\"mainSubType\"                                     \n\t\t\t\t\t\t\t\t\tfieldValue=\"name\"\n\t\t\t\t\t\t\t\t\tfieldId=\"id\"\n\t\t\t\t\t\t\t\t\t[fieldModel]=\"maintenance.maintenanceSubtypeId\"\n\t\t\t\t\t\t\t\t\t(fieldParams)=\"setSubTypeId($event)\">\n\t\t\t\t\t\t\t\t</condo-select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\n\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\tlabelText=\"Planned Maintenance Date\"\n\t\t\t\t\t\t\t\t\tfieldName=\"maitainPlannedDate\"\n\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t[fieldModel]=\"maintenance.plannedMaintenanceDate\"\n\t\t\t\t\t\t\t\t\t(fieldParams)=\"getPlannedMaintenanceDate($event)\">\n\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\n\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\tlabelText=\"Actual Maintenance Date\"\n\t\t\t\t\t\t\t\t\tfieldName=\"actualMaintenance\"\n\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t[fieldModel]=\"maintenance.actualMaintDate\"\n\t\t\t\t\t\t\t\t\t(fieldParams)=\"getActualMaintDate($event)\">\n\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t</div> \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<condo-select\n\t\t\t\t\t\t\t\tlabelText=\"Staff Incharge\"                                     \n\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t fieldPlaceholder=\"Select Staff\"\n\t\t\t\t\t\t\t\t [fieldList]=\"staffList | orderBy : 'staffName'\"                                     \n\t\t\t\t\t\t\t\t fieldValue=\"customLabel\"\n\t\t\t\t\t\t\t\t fieldId=\"staffId\"\n\t\t\t\t\t\t\t\t [fieldModel]=\"maintenance.maintainedbyStaff\"\n\t\t\t\t\t\t\t\t (fieldParams)=\"setStaffId($event)\"></condo-select>\n\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t<label>Maintenance by Vendor*</label>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"isMaintainedbyStaff\" id=\"inactive\" [(ngModel)]=\"maintenance.isMaintainedbyStaff\"   (change)=\"maintenance.maintenanceByCompany =''\" [value]=\"true\" type=\"radio\" required>\n\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"inactive\">Yes</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"isMaintainedbyStaff\" id=\"active\" [(ngModel)]=\"maintenance.isMaintainedbyStaff\"  (change)=\"maintenance.maintenanceByCompany =''\" [value]=\"false\" type=\"radio\" required>\n\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"active\">No</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\"  *ngIf=\"maintenance.isMaintainedbyStaff\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Performed by Company/Vendor</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter Company/Vendor\" \n\t\t\t\t\t\t\t\t\tname=\"Company\" [(ngModel)]=\"maintenance.maintenanceByCompany\" >\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>  \n\t\t\t\t\t\t\t<div class=\"col-sm-12\" *ngIf=\"isEdit\">\n\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t<label>Status</label>                 \n\t\t\t\t\t\t\t\t\t<div class=\"d-flex\">                           \n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let list of statusList;let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t<input name=\"status\" type=\"radio\" id=\"status{{i}}\" [(ngModel)]=\"maintenance.maintenanceStatusId\" [value]=\"list.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline ml-2\" for=\"status{{i}}\" >\n\t\t\t\t\t\t\t\t\t\t\t\t{{list.lookupValueName | titlecase}}\n\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> \t\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Notes</label>\n\t\t\t\t\t\t\t\t\t<textarea placeholder=\"Enter Notes\" name=\"notes\" [(ngModel)]=\"maintenance.notes\" ></textarea>\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>                                \n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Maintenance Expenses</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\t\t\t\t\t\t  \n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Maintenance Labor Cost</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter Labor Cost\" \n\t\t\t\t\t\t\t\t\tname=\"maintLaborCost\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintLaborCost\" (change)=\"totalAmt()\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Maintenance Parts Cost</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter Parts Cost\" \n\t\t\t\t\t\t\t\t\tname=\"maintPartsCost\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintPartsCost\" (change)=\"totalAmt()\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>VAT</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter Vat\" \n\t\t\t\t\t\t\t\t\tname=\"maintVat\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintVat\" (change)=\"totalAmt()\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>With Holding Tax</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter With Holding Tax\" \n\t\t\t\t\t\t\t\t\tname=\"maintWithTax\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.maintWithTax\" (change)=\"totalAmt()\"  >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Total Discount</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter Total Discount\" \n\t\t\t\t\t\t\t\t\tname=\"totalTax\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.totalDiscount\" (change)=\"totalAmt()\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Total Billed Amount</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter Total Billed Amount\" \n\t\t\t\t\t\t\t\t\tname=\"maintenanceTotalBilledAmt\" OnlyNumber=\"true\" readonly [(ngModel)]=\"maintenance.maintenanceTotalBilledAmt\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Future Plan</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\n\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\tlabelText=\"Next Planned Maint. Date\"\n\t\t\t\t\t\t\t\t\tfieldName=\"plannedDate\"\n\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t[fieldModel]=\"maintenance.nextPlannedMaintenance\"\n\t\t\t\t\t\t\t\t\t(fieldParams)=\"getNextPlannedMaintenance($event)\">\n\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Alert/Remind Before Days</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\"  class=\"form-control\" placeholder=\"Enter Remind me days\" \n\t\t\t\t\t\t\t\t\tname=\"alertBeforeDays\" OnlyNumber=\"true\" [(ngModel)]=\"maintenance.alertBeforeDays\" >\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\t\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<app-upload\n\t\t\t\t\t\t\t\t\t\t[fileIds]=\"maintenance.fileDetailsIds\"\n\t\t\t\t\t\t\t\t\t\t[isEdit]=\"isEdit\"\n\t\t\t\t\t\t\t\t\t\t(outputParams)=\"getFileIds($event)\"\n\t\t\t\t\t\t\t\t\t></app-upload>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\n\t\t\t\t<!-- Dynamic Form -->\n\t\t\t\t<mat-expansion-panel *ngIf=\"assetId && dynamicForm?.length > 0\">\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Check List Form</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"row\" *ngFor=\"let data of dynamicForm;let i=index\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<!-- Input Field -->\n\t\t\t\t\t\t\t\t<div class=\"select-box\" *ngIf=\"data.type == 'text-field'\">\n\t\t\t\t\t\t\t\t\t<label>{{data.question}}</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" [name]=\"data.question\" [(ngModel)]=\"data.answer\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Check Box -->\n\t\t\t\t\t\t\t\t<div class=\"select-box\" *ngIf=\"data.type == 'check-box'\">\n\t\t\t\t\t\t\t\t\t<label>{{data.question}}</label>\n\t\t\t\t\t\t\t\t\t<div class=\"form-check\" *ngFor=\"let box of data.option;let j=index\">\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"form-check-input\" id=\"checkbox{{i}}{{j}}\" name=\"{{box.name}}{{i}}{{j}}\" [(ngModel)]=\"box.answer\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"checkbox{{i}}{{j}}\">{{box.name}}</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Radio Button -->\n\t\t\t\t\t\t\t\t<div class=\"select-box radio-box\" *ngIf=\"data.type == 'radio'\">\n\t\t\t\t\t\t\t\t\t<label>{{data.question}}</label>\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\" *ngFor=\"let opt of data.option;let j=index\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"ques{{i}}index{{j}}\" id=\"{{i}}index{{j}}\" [(ngModel)]=\"data.answer\" [value]=\"opt.name\" type=\"radio\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"{{i}}index{{j}}\">{{opt.name}}</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!-- Date -->\n\t\t\t\t\t\t\t\t<div class=\"select-box\" *ngIf=\"data.type == 'date'\">\n\t\t\t\t\t\t\t\t\t<label>{{data.question}}</label>\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"data.question{{i}}\" [owlDateTime]=\"dynamicDate\" [owlDateTimeTrigger]=\"dynamicDate\" \n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Date\"[(ngModel)]=\"data.answer\">\n\t\t\t\t\t\t\t\t\t<owl-date-time #dynamicDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"dynamicDate\">\n\t\t\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t\t<div class=\"mt-4\">\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t<button mat-flat-button *ngIf=\"!isEdit\"  [color]=\"'primary'\" (click)=\"addMaintenance()\" >Submit</button>\n\t\t\t\t\t<button mat-flat-button *ngIf=\"isEdit\"  [color]=\"'primary'\" (click)=\"updateMaintenance()\">Update</button>\n\t\t\t\t\t<button class=\"ml-3\" *ngIf=\"!isEdit\" mat-button (click)=\"clear()\">Cancel</button>\n\t\t\t\t\t<button class=\"ml-3\" *ngIf=\"isEdit\" mat-button (click)=\"back()\">Cancel</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t</form>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/assets/add-maintenance/add-maintenance-routing.module.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/ams/assets/add-maintenance/add-maintenance-routing.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: AddMaintenanceRoutingModule */

    /***/
    function srcAppModulesAmsAssetsAddMaintenanceAddMaintenanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMaintenanceRoutingModule", function () {
        return AddMaintenanceRoutingModule;
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


      var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/auth/guards/auth.guard */
      "./src/app/core/auth/guards/auth.guard.ts");
      /* harmony import */


      var _add_maintenance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-maintenance.component */
      "./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.ts");

      var routes = [{
        path: '',
        component: _add_maintenance_component__WEBPACK_IMPORTED_MODULE_4__["AddMaintenanceComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }, {
        path: ':id',
        component: _add_maintenance_component__WEBPACK_IMPORTED_MODULE_4__["AddMaintenanceComponent"],
        canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
      }];

      var AddMaintenanceRoutingModule = function AddMaintenanceRoutingModule() {
        _classCallCheck(this, AddMaintenanceRoutingModule);
      };

      AddMaintenanceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddMaintenanceRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsAssetsAddMaintenanceAddMaintenanceComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".cardOuter {\n  padding: 25px 20px;\n}\n\n.cancelBtn {\n  background: white;\n  border: 1px solid #dadada;\n}\n\n.uploadbtn {\n  padding-top: 25px;\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvYXNzZXRzL2FkZC1tYWludGVuYW5jZS9hZGQtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBRUksaUJBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Ftcy9hc3NldHMvYWRkLW1haW50ZW5hbmNlL2FkZC1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkT3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMjBweDsgXG59XG4uY2FuY2VsQnRuXG57XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RhZGFkYTtcbn1cbi51cGxvYWRidG57XG4gICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgbWFyZ2luOiAwcHg7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AddMaintenanceComponent */

    /***/
    function srcAppModulesAmsAssetsAddMaintenanceAddMaintenanceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMaintenanceComponent", function () {
        return AddMaintenanceComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
      "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Asset */
      "./src/app/api/controllers/Asset.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_condo_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/@condo/animations */
      "./src/@condo/animations/index.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);

      var AddMaintenanceComponent = /*#__PURE__*/function () {
        function AddMaintenanceComponent(route, assetService, lookupService, sessionService, sharedService, dialog, router, activatedRoute, staffService, _changeDetectorRef, translateService) {
          _classCallCheck(this, AddMaintenanceComponent);

          this.route = route;
          this.assetService = assetService;
          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.sharedService = sharedService;
          this.dialog = dialog;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.staffService = staffService;
          this._changeDetectorRef = _changeDetectorRef;
          this.translateService = translateService;
          this.asset = {};
          this.AssociationStaff = true;
          this.maintenance = {};
          this.addMaintForm = {};
          this.mainSubType = [];
          this.isFileAdded = false;
          this.fileList = [];
          this.listOfFiles = [];
          this.issueToStaff = [];
          this.staffList = [];
          this.assetSettings = {};
          this.statusList = [];
          this.dynamicForm = [];
          this.message = null;
        }

        _createClass(AddMaintenanceComponent, [{
          key: "getPlannedMaintenanceDate",
          value: function getPlannedMaintenanceDate(event) {
            this.maintenance.plannedMaintenanceDate = event;
          }
        }, {
          key: "getActualMaintDate",
          value: function getActualMaintDate(event) {
            this.maintenance.actualMaintDate = event;

            if (this.frequencyDays) {
              this.maintenance.nextPlannedMaintenance = moment__WEBPACK_IMPORTED_MODULE_13___default()(this.maintenance.actualMaintDate).add(this.frequencyDays, 'days');
            }
          }
        }, {
          key: "getNextPlannedMaintenance",
          value: function getNextPlannedMaintenance(event) {
            this.maintenance.nextPlannedMaintenance = event;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.maintenance.isMaintainedbyStaff = true;
            this.maintenance.maintenanceTypeId = '';
            this.maintenance.maintenanceSubtypeId = '';
            this.maintenance.maintainedbyStaff = ''; // this.assetSettings = {
            // 	singleSelection: true,
            // 	text: "Search",
            // 	selectAllText: 'Select All',
            // 	unSelectAllText: 'UnSelect All',
            // 	enableSearchFilter: true,
            // 	badgeShowLimit: 3,
            // 	// lazyLoading: true
            // };

            this.activatedRoute.queryParams.subscribe(function (params) {
              if (params && params.type == 'ADD') {
                _this.maintenance.assetId = params.assetId;
              }
            });
            this.route.paramMap.subscribe(function (params) {
              if (params) {
                _this.assetMaintenancePlanId = params.get('id');

                if (_this.assetMaintenancePlanId) {
                  var _params = {
                    assetMaintenancePlanId: _this.assetMaintenancePlanId
                  };
                  _this.isEdit = true;

                  _this.assetService.getAllAssetMaintenancePlanById(_params).subscribe(function (res) {
                    _this.maintenance = res[0] ? res[0] : {};
                    _this.maintenance.assetId = _this.maintenance ? _this.maintenance.assetId : '';
                    _this.maintenance.isMaintainedbyStaff = !_this.maintenance.isMaintainedbyStaff;
                    var customField = JSON.parse(_this.maintenance.customFields);
                    if (customField && customField.length > 0) _this.dynamicForm = customField;
                  }); //Status List


                  var queryParamBase = {
                    ApartmentId: _this.sessionService.apartmentId,
                    LookupTypeId: 64
                  };

                  _this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe(function (res) {
                    _this.statusList = res;
                  });
                }
              }
            });
            this.getAllMaintenance();
            this.getAsset();
            this.getAllStaff();
          }
        }, {
          key: "setMainSubType",
          value: function setMainSubType(id) {
            var _this2 = this;

            if (this.mainType && this.mainType.length > 0) {
              this.mainType.filter(function (val) {
                if (val.id == id) {
                  _this2.mainSubType = val.subCategory;
                }
              });
            }
          }
        }, {
          key: "setMaintTypeId",
          value: function setMaintTypeId(event) {
            this.maintenance.maintenanceTypeId = event[0].id;
            this.mainSubType = event[0] ? event[0].subCategory : [];
          }
        }, {
          key: "setSubTypeId",
          value: function setSubTypeId(event) {
            this.maintenance.maintenanceSubtypeId = event[0].id;
          }
        }, {
          key: "setStaffId",
          value: function setStaffId(event) {
            this.maintenance.maintainedbyStaff = event[0].staffId;
          }
        }, {
          key: "setAssetId",
          value: function setAssetId(event) {
            this.maintenance.assetId = event[0].assetId;
            this.dynamicForm = [];
            this.frequencyDays = event[0].maintFrequencyInDays;
            if (event[0].customFields) this.dynamicForm = JSON.parse(event[0].customFields);
          }
        }, {
          key: "getFileIds",
          value: function getFileIds(event) {
            this.maintenance.fileDetailsIds = event[0];
          }
        }, {
          key: "getAllStaff",
          value: function getAllStaff() {
            var _this3 = this;

            var staffParms = {
              apartmentId: this.sessionService.apartmentId,
              roleTypeIds: '1,3'
            };
            this.staffService.getAllStaffs(staffParms).subscribe(function (res) {
              if (res && res.length) {
                res.forEach(function (ele) {
                  ele.customLabel = "".concat(ele.roleName, " - ").concat(ele.staffCategoryName, " -- ").concat(ele.staffName);
                });
                _this3.staffList = res;
              }
            });
          }
        }, {
          key: "totalAmt",
          value: function totalAmt() {
            this.maintenance.maintenanceTotalBilledAmt = 0;
            this.maintenance.maintenanceTotalBilledAmt += this.maintenance.maintLaborCost ? Number(this.maintenance.maintLaborCost) : 0;
            this.maintenance.maintenanceTotalBilledAmt += this.maintenance.maintPartsCost ? Number(this.maintenance.maintPartsCost) : 0;
            this.maintenance.maintenanceTotalBilledAmt += this.maintenance.maintVat ? Number(this.maintenance.maintVat) : 0;
            this.maintenance.maintenanceTotalBilledAmt += this.maintenance.maintWithTax ? Number(this.maintenance.maintWithTax) : 0;
            this.maintenance.maintenanceTotalBilledAmt -= this.maintenance.totalDiscount ? Number(this.maintenance.totalDiscount) : 0;
          }
        }, {
          key: "addMaintenance",
          value: function addMaintenance() {
            var _this4 = this;

            this.message = null;

            if (!this.addMaintenanceForm.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.translateService.get('VALIDATION').subscribe(function (data) {
                _this4.message = {
                  appearance: 'outline',
                  content: "".concat(data.CONTENTREQUIREDFIELD),
                  shake: true,
                  showIcon: true,
                  type: 'error'
                };
              }); //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isAssetLoaded = true;
              var params = {
                assetMaintenancePlan: {
                  assetMaintenancePlanId: 0,
                  apartmentId: this.sessionService.apartmentId,
                  assetId: this.maintenance.assetId,
                  notes: this.maintenance.notes,
                  maintenanceStatusId: 418,
                  isActive: true,
                  insertedBy: this.sessionService.userId,
                  insertedOn: new Date().toISOString,
                  updatedBy: null,
                  updatedOn: null,
                  actualMaintDate: this.maintenance.actualMaintDate,
                  lastMaintenanceDate: this.maintenance.lastMaintenanceDate,
                  nextPlannedMaintenance: this.maintenance.nextPlannedMaintenance,
                  maintenanceTypeId: Number(this.maintenance.maintenanceTypeId),
                  maintenanceByCompany: this.maintenance.maintenanceByCompany ? this.maintenance.maintenanceByCompany : null,
                  maintenanceByPerson: null,
                  maintenanceCompanyContactNo: null,
                  maintLaborCost: this.maintenance.maintLaborCost,
                  maintPartsCost: this.maintenance.maintPartsCost,
                  maintVat: this.maintenance.maintVat,
                  maintWithTax: this.maintenance.maintWithTax,
                  maintenanceTotalBilledAmt: this.maintenance.maintenanceTotalBilledAmt,
                  isMaintainedbyStaff: !this.maintenance.isMaintainedbyStaff,
                  maintainedbyStaff: this.maintenance.maintainedbyStaff ? this.maintenance.maintainedbyStaff : null,
                  maintenanceSubtypeId: this.maintenance.maintenanceSubtypeId ? Number(this.maintenance.maintenanceSubtypeId) : null,
                  plannedMaintenanceDate: this.maintenance.plannedMaintenanceDate ? this.maintenance.plannedMaintenanceDate : null,
                  totalDiscount: this.maintenance.totalDiscount ? this.maintenance.totalDiscount : null,
                  alertBeforeDays: this.maintenance.alertBeforeDays ? Number(this.maintenance.alertBeforeDays) : null,
                  customFields: JSON.stringify(this.dynamicForm)
                }
              };
              this.assetService.addAssetMaintenancePlan(params).subscribe(function (res) {
                if (res.message) {
                  _this4.sharedService.openSnackBar("Asset Maintenance added successfully", 'success');

                  _this4.isAssetLoaded = false;

                  _this4.router.navigate(['ams/assets/manage-maintenance']);
                }
              });
            }
          }
        }, {
          key: "updateMaintenance",
          value: function updateMaintenance() {
            var _this5 = this;

            this.message = null;

            if (!this.addMaintenanceForm.valid) {
              window.scroll({
                top: 0,
                behavior: 'smooth'
              }); // Show the validation message

              this.translateService.get('VALIDATION').subscribe(function (data) {
                _this5.message = {
                  appearance: 'outline',
                  content: "".concat(data.CONTENTREQUIREDFIELD),
                  shake: true,
                  showIcon: true,
                  type: 'error'
                };
              }); //Mark for check

              this._changeDetectorRef.markForCheck();
            } else {
              this.isAssetLoaded = true;
              var params = {
                assetMaintenancePlan: {
                  assetMaintenancePlanId: this.maintenance.assetMaintenancePlanId,
                  apartmentId: this.sessionService.apartmentId,
                  assetId: this.maintenance.assetId,
                  notes: this.maintenance.notes,
                  maintenanceStatusId: this.maintenance.maintenanceStatusId,
                  isActive: true,
                  insertedBy: parseInt(this.sessionService.userId),
                  insertedOn: new Date().toISOString,
                  updatedBy: parseInt(this.sessionService.userId),
                  updatedOn: new Date().toISOString,
                  actualMaintDate: this.maintenance.actualMaintDate,
                  lastMaintenanceDate: this.maintenance.lastMaintenanceDate,
                  nextPlannedMaintenance: this.maintenance.nextPlannedMaintenance,
                  maintenanceTypeId: Number(this.maintenance.maintenanceTypeId),
                  maintenanceByCompany: this.maintenance.maintenanceByCompany ? this.maintenance.maintenanceByCompany : null,
                  maintenanceByPerson: null,
                  maintenanceCompanyContactNo: null,
                  maintLaborCost: Number(this.maintenance.maintLaborCost),
                  maintPartsCost: Number(this.maintenance.maintPartsCost),
                  maintVat: Number(this.maintenance.maintVat),
                  maintWithTax: Number(this.maintenance.maintWithTax),
                  maintenanceTotalBilledAmt: Number(this.maintenance.maintenanceTotalBilledAmt),
                  isMaintainedbyStaff: this.maintenance.isMaintainedbyStaff,
                  maintainedbyStaff: this.maintenance.maintainedbyStaff ? this.maintenance.maintainedbyStaff : null,
                  maintenanceSubtypeId: this.maintenance.maintenanceSubtypeId ? Number(this.maintenance.maintenanceSubtypeId) : null,
                  plannedMaintenanceDate: this.maintenance.plannedMaintenanceDate ? this.maintenance.plannedMaintenanceDate : null,
                  totalDiscount: this.maintenance.totalDiscount ? this.maintenance.totalDiscount : null,
                  alertBeforeDays: this.maintenance.alertBeforeDays ? Number(this.maintenance.alertBeforeDays) : null,
                  customFields: JSON.stringify(this.dynamicForm)
                }
              };
              this.assetService.updateAssetMaintenancePlan(params).subscribe(function (res) {
                if (res) {
                  _this5.sharedService.openSnackBar("Asset maintenance updated successfully", 'success');

                  _this5.router.navigate(['ams/assets/manage-maintenance']);
                }

                _this5.isAssetLoaded = false;
              });
            }
          }
        }, {
          key: "back",
          value: function back() {
            var _this6 = this;

            this.translateService.get('POPUP').subscribe(function (data) {
              var message = "".concat(data.CLOSETITLE);
              var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogModel"]("".concat(data.CONFIRMACTION), message);

              var dialogRef = _this6.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["CommonConfirmModalComponent"], {
                panelClass: 'material-dialog-medium',
                disableClose: true,
                data: dialogData
              });

              dialogRef.afterClosed().subscribe(function (dialogResult) {
                if (dialogResult) _this6.router.navigate(['/ams/assets/manage-maintenance']);
              });
            });
          }
        }, {
          key: "clear",
          value: function clear() {
            this.addMaintenanceForm.resetForm();
            this.maintenance = {};
          }
        }, {
          key: "getAllMaintenance",
          value: function getAllMaintenance() {
            var _this7 = this;

            var queryParamBase = {};
            queryParamBase = {
              apartmentId: this.sessionService.apartmentId,
              lookupTypeId: 167,
              subCategoryLookupTypeId: 168
            };
            this.isAssetLoaded = true;
            this.lookupService.getSubcategory(queryParamBase).subscribe(function (res) {
              if (res) {
                _this7.isAssetLoaded = false;
                _this7.mainType = res ? res : [];

                if (_this7.isEdit && _this7.maintenance.maintenanceTypeId) {
                  _this7.setMainSubType(_this7.maintenance.maintenanceTypeId);
                } else {// this.maintenance.maintenanceTypeId = this.mainType && this.mainType.length > 0 ? this.mainType[0].id : '';
                  // this.setMainSubType(this.maintenance.maintenanceTypeId);
                }
              }
            });
          }
          /**
           * get Asset list
           * @param
           */

        }, {
          key: "getAsset",
          value: function getAsset() {
            var _this8 = this;

            var params = {};
            params.apartmentId = this.sessionService.apartmentId;
            this.assetService.getAllAssetByApartmentId(params).subscribe(function (res) {
              if (res) {
                _this8.assetList = res ? res : [];

                _this8.assetList.forEach(function (data) {
                  data.customLabel = "".concat(data.assetName, " -- ").concat(data.assetLocationName, " - ").concat(data.assetSubLocationName);
                }); // this.maintenance.assetId = !this.maintenance.assetId ? (this.assetList && this.assetList.length > 0) && this.assetList[0].assetId :'';

              }
            });
          }
        }]);

        return AddMaintenanceComponent;
      }();

      AddMaintenanceComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__["AssetService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__["StaffService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]
        }];
      };

      AddMaintenanceComponent.propDecorators = {
        addMaintenanceForm: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['addMaintenanceForm', {
            "static": false
          }]
        }]
      };
      AddMaintenanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-maintenance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-maintenance.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_11__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-maintenance.component.scss */
        "./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__["AssetService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_10__["StaffService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateService"]])], AddMaintenanceComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/assets/add-maintenance/add-maintenance.module.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/ams/assets/add-maintenance/add-maintenance.module.ts ***!
      \******************************************************************************/

    /*! exports provided: AddMaintenanceModule */

    /***/
    function srcAppModulesAmsAssetsAddMaintenanceAddMaintenanceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddMaintenanceModule", function () {
        return AddMaintenanceModule;
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_upload_upload_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/upload/upload.module */
      "./src/app/modules/ui/upload/upload.module.ts");
      /* harmony import */


      var src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/datepicker/datepicker.module */
      "./src/app/modules/ui/datepicker/datepicker.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modules/ui/message/message.module */
      "./src/app/modules/ui/message/message.module.ts");
      /* harmony import */


      var src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/modules/ui/help-tooltip/help-tooltip.module */
      "./src/app/modules/ui/help-tooltip/help-tooltip.module.ts");
      /* harmony import */


      var _add_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./add-maintenance-routing.module */
      "./src/app/modules/ams/assets/add-maintenance/add-maintenance-routing.module.ts");
      /* harmony import */


      var _add_maintenance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./add-maintenance.component */
      "./src/app/modules/ams/assets/add-maintenance/add-maintenance.component.ts");

      var AddMaintenanceModule = function AddMaintenanceModule() {
        _classCallCheck(this, AddMaintenanceModule);
      };

      AddMaintenanceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_maintenance_component__WEBPACK_IMPORTED_MODULE_11__["AddMaintenanceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_7__["CondoCardModule"], src_app_modules_ui_datepicker_datepicker_module__WEBPACK_IMPORTED_MODULE_6__["DatepickerModule"].forRoot(), src_app_modules_ui_upload_upload_module__WEBPACK_IMPORTED_MODULE_5__["UploadModule"], src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_8__["CondoMessageModule"], src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_9__["HelpTooltipModule"], _add_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_10__["AddMaintenanceRoutingModule"]]
      })], AddMaintenanceModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-assets-add-maintenance-add-maintenance-module-es5.js.map