(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets-assets-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add-asset-maintenance-wrapper\">\n\t\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t</a>\n\t\t</div>\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\" (click)=\"showMaintenanceHistory(assetId)\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Maintenance History</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditAssetMaintenance\">Add Asset Maintenance</span>\n    \t\t\t\t<span *ngIf=\"isEditAssetMaintenance\">Edit Asset Maintenance</span>\n    \t\t\t</h5>\n    \t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card-header at-header\" *ngIf=\"isAssetMaintenanceLoaded\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<div class=\"sub-details\">\n\t\t\t\t\t<p class=\"d-inline-block ft\"><span>Asset Name: </span>{{assetData.assetName}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Category: </span>{{getAssetCategoryName(assetData.assetCategoryId)}}</p>\n\t\t\t\t\t<p class=\"d-inline-block ft ml-md-4\"><span>Purchase Date: </span>{{getDateFormat(assetData.purchaseDate)}}</p>\n    \t\t\t</div>\n    \t\t</div>\n\t  \t</div>\n\n\t\t<form #addAssetMaintenanceForm = \"ngForm\" name=\"addAssetMaintenanceForm\" (ngSubmit)=\"submitAssetMaintenanceForm(addAssetMaintenanceForm)\"  novalidate>\n\n\t\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\" ></app-alert-message>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"isEditAssetMaintenance\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Actual Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"actualMaintDate\" [owlDateTime]=\"actualMaintDate\" [owlDateTimeTrigger]=\"actualMaintDate\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.actualMaintDate\" required>\n\t\t\t\t\t\t\t<owl-date-time #actualMaintDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n               \t \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Last Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"lastMaintenanceDate\" [owlDateTime]=\"lastMaintenanceDate\" [owlDateTimeTrigger]=\"lastMaintenanceDate\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.lastMaintenanceDate\" required>\n\t\t\t\t\t\t\t<owl-date-time #lastMaintenanceDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t\t\t\t\t\t \t <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Next Planned Maintenance Date*</label>\n\t\t                   <input class=\"form-control\" name=\"nextPlannedMaintenance\" [owlDateTime]=\"nextPlannedMaintenance\" [owlDateTimeTrigger]=\"nextPlannedMaintenance\" placeholder=\"Date\" [(ngModel)]=\"assetMaintenance.nextPlannedMaintenance\" required>\n\t\t\t\t\t\t\t<owl-date-time #nextPlannedMaintenance [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t\t\t\t\t \t \t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t \t </div>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                   <label>Notes*</label>\n\t\t                   <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetNotes\" [(ngModel)]=\"assetMaintenance.notes\" required>\n\t\t               \t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t<label>Maintenance Status*</label>\n\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\tname=\"assetMaintenanceStatus\" \n\t\t\t\t\t\t\tid=\"assetMaintenanceStatus\" \n\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t[(ngModel)]=\"assetMaintenance.maintenanceStatusId\" required>\n\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t<option *ngFor=\"let item of statusTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetMaintenanceForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-create-wrapper\">\n\t\n\t<form #addAssetForm = \"ngForm\" name=\"addAssetForm\" (ngSubmit)=\"submitAddAssetForm(addAssetForm)\"  novalidate>\n\n\t\t<h3 class=\"main-title float-left mt-3\">\n\t\t\t\n\t\t\t<span *ngIf=\"!isEditAsset\">Create Asset</span>\n    \t\t<span *ngIf=\"isEditAsset\">Edit Asset</span>\n\n\t\t</h3>\n\n\t\t<div class=\"relative-card float-right\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\t\trouterLink=\"/ams/assets/view\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/boxes-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">View Assets</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"card clear mb-30\" id=\"accordion\">\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#assetCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">General</li>\n\t\t\t\t\t<div id=\"assetCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset tag No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetTagNo\" [(ngModel)]=\"asset.assetTagNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Asset Category*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.assetCategoryId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset Name*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetName\" [(ngModel)]=\"asset.assetName\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Manufacturer Details*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"ManufacturerDetails\" [(ngModel)]=\"asset.manufacturerDetails\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Model No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"modelNo\" [(ngModel)]=\"asset.modelNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Condition*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetConditionId\" id=\"used\" [(ngModel)]=\"asset.assetConditionId\"  value=\"103\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"used\">Used</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetConditionId\" id=\"new\" [(ngModel)]=\"asset.assetConditionId\" value=\"105\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"new\">New</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Asset Location</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetLocation\" [(ngModel)]=\"asset.assetLocation\">\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Depreciation (in percentage)*</label>\n\t\t\t\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter\" name=\"depreciation\" [(ngModel)]=\"asset.depreciationPercentage\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Installation Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"installationDate\" [owlDateTimeTrigger]=\"installationDate\" placeholder=\"Date\" [(ngModel)]=\"asset.installationDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #installationDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Status*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetStatus\" id=\"inactive\" [(ngModel)]=\"asset.isActive\"  [value]=\"true\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"inactive\">Inactive</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"assetStatus\" id=\"active\" [(ngModel)]=\"asset.isActive\" [value]=\"false\" type=\"radio\" required>\n\t\t\t\t                            <label class=\"radio-inline\" for=\"active\">Active</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Retired No</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"retiredOnDate\" [owlDateTime]=\"retiredOnDate\" [owlDateTimeTrigger]=\"retiredOnDate\" placeholder=\"Date\" [(ngModel)]=\"asset.retiredOn\">\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #retiredOnDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Comments</label>\n\t\t\t\t\t                    <textarea placeholder=\"some text here\" name=\"staffComments\" [(ngModel)]=\"asset.comments\"></textarea>\n\t\t\t\t\t                </div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\">\n\t\t\t\t\t\t\t\t\t    <input class=\"form-control\"  #uploader type=\"file\"\n\t\t\t\t\t\t\t\t\t    (change)=\"uploadFile($event)\" multiple>\n\t\t\t\t\t\t\t\t\t    <i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Upload Image</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"file-desp\" *ngIf=\"isFileAdded\">\n\t\t\t\t\t\t\t\t\t\t\t<div *ngFor=\"let item of listOfFiles; let i = index\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"name mr-3\">{{item.name}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"size\">{{bytesToSize(item.size)}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile(i)\"></i-feather>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#assetCollapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseOne\">Purchase Details</li>\n\t\t\t\t\t<div id=\"assetCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t                    <label>Vendor Name*</label>\n\t\t\t\t\t                    <select \n\t\t\t\t\t\t\t\t\t        name=\"vendorId\" \n\t\t\t\t\t\t\t\t\t        id=\"vendorId\" \n\t\t\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t\t\t        [(ngModel)]=\"asset.vendorId\" required>\n\t\t\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t        <option *ngFor=\"let item of vendorDataList\" [value]=\"item.vendorId\">{{ item.vendorName }}</option>\n\t\t\t\t\t\t\t\t\t    </select>\n\t\t\t\t            \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Order No*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"purchaseOrderNo\" [(ngModel)]=\"asset.purchaseOrderNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Date*</label>\n\t\t\t\t\t                    <input class=\"form-control\" name=\"purchaseDate\" [owlDateTime]=\"purchaseDate\" [owlDateTimeTrigger]=\"purchaseDate\" placeholder=\"Date\" [(ngModel)]=\"asset.purchaseDate\" required>\n\t\t\t\t\t\t\t\t\t\t<owl-date-time #purchaseDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t\t\t<div class=\"date-btn\">\n\t\t  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t  \t\t\t\t\t\t\t\t</div>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Purchase Cost*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"purchaseCost\" [(ngModel)]=\"asset.purchaseCost\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Warranty Months*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"warrantyMonths\" [(ngModel)]=\"asset.warrantyMonths\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t                    <label>Serial Number*</label>\n\t\t\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"serialNo\" [(ngModel)]=\"asset.serialNo\" required>\n\t\t\t                \t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t<label>Is Leased*</label>\n\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isLeased\" id=\"Yes\" [(ngModel)]=\"asset.isLeased\"  [value]=\"true\" type=\"radio\">\n\t\t\t\t                            <label class=\"radio-inline\" for=\"Yes\">Yes</label>\n\t\t\t                     \t\t</div>\n\t\t\t\t                    \t<div class=\"form-group\">\n\t\t\t\t                            <input name=\"isLeased\" id=\"No\" [(ngModel)]=\"asset.isLeased\" [value]=\"false\" type=\"radio\">\n\t\t\t\t                            <label class=\"radio-inline\" for=\"No\">No</label>\n\t\t\t\t                         </div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-maintenance-history-wrapper\">\n\t\n\t\t\n\t\t<div class=\"header-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Maintenance History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body p-0 border-bottom\">\n\t\t\t\t\t<ul class=\"legends list-inline\">\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span><span>Over Due</span></li>\n\t\t\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Due</li>\n\t\t\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Done</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t\t<app-loader *ngIf=\"!isAssetMaintenanceLoaded\"></app-loader>\n\n\t\t\t\t\t<ng-container *ngIf=\"isAssetMaintenanceLoaded\">\n\n\t\t\t\t\t\t<div class=\"lists free-flow\" *ngFor=\"let maintenance of maintenanceDataList | slice:ItemStartIndex:ItemEndIndex; let i = index; last as isLast\" [ngClass]=\" [ getMaintenanceStatus(maintenance.maintenanceStatusId), isLast ? 'last' : '']\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Actual Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"maintenance.actualMaintDate != null\">{{getDateFormat(maintenance.actualMaintDate)}}</p>\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"maintenance.actualMaintDate == null\">-</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Last Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p>{{getDateFormat(maintenance.lastMaintenanceDate)}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 column\">\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Next Planned Maintenance</h6>\n\t\t\t\t\t\t\t\t\t\t<p>{{getDateFormat(maintenance.nextPlannedMaintenance)}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<app-pagination \n\t\t\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t\t\t</app-pagination>\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  assets-reports works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isAssetCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isAssetCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Asset Categories</h4>\n\t\t<ng-container *ngFor=\"let item of assetCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/view/{{item.lookupValueId}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateAssetCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"d-none\"><i-feather class=\"icon del\" name=\"x\" (click)=\"deleteAssetCategory(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p>{{item.assetCount}} Assets</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewAssetCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isAssetCategoryNew || isAssetCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isAssetCategoryNew\">Add Asset Category</h6>\n    \t\t\t<h6 *ngIf=\"!isAssetCategoryNew\">Update Asset Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isCategoryError\" [isSuccess]=\"isCategorySuccess\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isAssetCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isAssetCategorySubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addAssetCategoryForm = \"ngForm\" name=\"addAssetCategoryForm\" (ngSubmit)=\"submitAssetCategoryForm(addAssetCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"assetCategory\" [(ngModel)]=\"assetCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addAssetCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  assets-update works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"assets-view-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isAssetLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isAssetLoaded\">\n\n\t\t<form #viewAssetForm = \"ngForm\" name=\"viewAssetForm\" novalidate>\n\n\t\t\t<div class=\"card mb-30\">\n\t\t\t\t\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t    \t\t\t<h5>Select Category</h5>\n\t\t    \t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box mb-3\">\n\t\t\t                    <label>Category Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"assetCategory\" \n\t\t\t\t\t\t\t        id=\"assetCategory\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"assetCategoryId\" (ngModelChange) = \"getAssetCategory()\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option value=\"All\">All</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of assetCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t            \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<div class=\"card card-table ov\" *ngIf=\"isAssetLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All {{assetCategoryName}} Assets <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"assetData\" >\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/assets/create-asset\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Asset</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('assetTagNo')\">Asset Tag No <span [ngClass]=\"getFieldOrderBy('assetTagNo')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('assetName')\">Asset Name <span [ngClass]=\"getFieldOrderBy('assetName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('assetCategoryName')\">Category <span [ngClass]=\"getFieldOrderBy('assetCategoryName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('vendorName')\">Vendor Name <span [ngClass]=\"getFieldOrderBy('vendorName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Condition')\">Condition <span [ngClass]=\"getFieldOrderBy('Condition')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('purchaseCost')\">Purchase Cost<span [ngClass]=\"getFieldOrderBy('purchaseCost')\"></span></th>\n\t\t\t\t      <th class=\"text-center\" scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let asset of assetListData | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: assetData ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{asset.assetTagNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{asset.assetName}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getAssetCategoryName(asset.assetCategoryId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getvendorName(asset.vendorId)}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getAssetCondition(asset.assetConditionId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{asset.purchaseCost}}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"assetDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"assetDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset/{{asset.assetId}}\">Edit Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(asset)\">Delete Asset</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/add-asset-maintenance/{{asset.assetId}}/new\" *ngIf=\"!isMaintenanceDue(asset.assetId)\">Add Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/assets/edit-asset-maintenance/{{asset.assetId}}\" *ngIf=\"isMaintenanceAvailable(asset.assetId) && isMaintenanceDue(asset.assetId)\">Edit Maintenance</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showMaintenanceHistory(asset.assetId)\" *ngIf=\"isMaintenanceAvailable(asset.assetId)\">View Maintenance History</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./src/app/ams/assets/assets-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ams/assets/assets-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AssetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsRoutingModule", function() { return AssetsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/assets-setup/assets-setup.component */ "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts");
/* harmony import */ var _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/assets-create/assets-create.component */ "./src/app/ams/assets/components/assets-create/assets-create.component.ts");
/* harmony import */ var _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/assets-reports/assets-reports.component */ "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts");
/* harmony import */ var _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/assets-view/assets-view.component */ "./src/app/ams/assets/components/assets-view/assets-view.component.ts");
/* harmony import */ var _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-asset-maintenance/add-asset-maintenance.component */ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts");








const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_3__["AssetsSetupComponent"] },
    { path: 'create-asset', component: _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__["AssetsCreateComponent"] },
    { path: 'edit-asset/:id', component: _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_4__["AssetsCreateComponent"] },
    { path: 'add-asset-maintenance/:id/:type', component: _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["AddAssetMaintenanceComponent"] },
    { path: 'edit-asset-maintenance/:id', component: _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_7__["AddAssetMaintenanceComponent"] },
    { path: 'view', component: _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"] },
    { path: 'view/:id', component: _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"] },
    { path: 'reports', component: _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_5__["AssetsReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let AssetsRoutingModule = class AssetsRoutingModule {
};
AssetsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssetsRoutingModule);



/***/ }),

/***/ "./src/app/ams/assets/assets.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ams/assets/assets.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvYXNzZXRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/assets/assets.component.ts":
/*!************************************************!*\
  !*** ./src/app/ams/assets/assets.component.ts ***!
  \************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetsComponent = class AssetsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/assets.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets.component.scss */ "./src/app/ams/assets/assets.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AssetsComponent);



/***/ }),

/***/ "./src/app/ams/assets/assets.module.ts":
/*!*********************************************!*\
  !*** ./src/app/ams/assets/assets.module.ts ***!
  \*********************************************/
/*! exports provided: AssetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsModule", function() { return AssetsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets-routing.module */ "./src/app/ams/assets/assets-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets.component */ "./src/app/ams/assets/assets.component.ts");
/* harmony import */ var _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/assets-setup/assets-setup.component */ "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts");
/* harmony import */ var _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/assets-create/assets-create.component */ "./src/app/ams/assets/components/assets-create/assets-create.component.ts");
/* harmony import */ var _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/assets-reports/assets-reports.component */ "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts");
/* harmony import */ var _components_assets_update_assets_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/assets-update/assets-update.component */ "./src/app/ams/assets/components/assets-update/assets-update.component.ts");
/* harmony import */ var _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/assets-view/assets-view.component */ "./src/app/ams/assets/components/assets-view/assets-view.component.ts");
/* harmony import */ var _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-asset-maintenance/add-asset-maintenance.component */ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts");
/* harmony import */ var _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/assets-maintenance-history/assets-maintenance-history.component */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");













let AssetsModule = class AssetsModule {
};
AssetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _assets_component__WEBPACK_IMPORTED_MODULE_5__["AssetsComponent"],
            _components_assets_setup_assets_setup_component__WEBPACK_IMPORTED_MODULE_6__["AssetsSetupComponent"],
            _components_assets_create_assets_create_component__WEBPACK_IMPORTED_MODULE_7__["AssetsCreateComponent"],
            _components_assets_reports_assets_reports_component__WEBPACK_IMPORTED_MODULE_8__["AssetsReportsComponent"],
            _components_assets_update_assets_update_component__WEBPACK_IMPORTED_MODULE_9__["AssetsUpdateComponent"],
            _components_assets_view_assets_view_component__WEBPACK_IMPORTED_MODULE_10__["AssetsViewComponent"],
            _components_add_asset_maintenance_add_asset_maintenance_component__WEBPACK_IMPORTED_MODULE_11__["AddAssetMaintenanceComponent"],
            _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_12__["AssetsMaintenanceHistoryComponent"]
        ],
        entryComponents: [
            _components_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_12__["AssetsMaintenanceHistoryComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
            _assets_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssetsRoutingModule"]
        ],
        bootstrap: [_assets_component__WEBPACK_IMPORTED_MODULE_5__["AssetsComponent"]]
    })
], AssetsModule);



/***/ }),

/***/ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hZGQtYXNzZXQtbWFpbnRlbmFuY2UvYWRkLWFzc2V0LW1haW50ZW5hbmNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AddAssetMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssetMaintenanceComponent", function() { return AddAssetMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets-maintenance-history/assets-maintenance-history.component */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
/* harmony import */ var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/asset.service */ "./src/app/api/services/asset.service.ts");
/* harmony import */ var _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../.././api/services/vendor.service */ "./src/app/api/services/vendor.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let AddAssetMaintenanceComponent = class AddAssetMaintenanceComponent {
    constructor(injector, dialog, router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditAssetMaintenance = false;
        this.isError = false;
        this.alertMessage = "";
        this.isAssetMaintenanceLoaded = false;
        this.isAssetMaintenanceSubmitted = false;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
    }
    getAssetCategoryName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetCategoryData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getDateFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_12__(date).format("MM/DD/YYYY");
    }
    submitAssetMaintenanceForm(form) {
        if (!this.isEditAssetMaintenance) {
            let details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetId": parseInt(this.route.params['value'].id),
                "notes": this.assetMaintenance.notes,
                "maintenanceStatusId": parseInt(this.assetMaintenance.maintenanceStatusId),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
                "actualMaintDate": this.assetMaintenance.actualMaintDate,
                "lastMaintenanceDate": this.assetMaintenance.lastMaintenanceDate,
                "nextPlannedMaintenance": this.assetMaintenance.nextPlannedMaintenance
            };
            this.assetService.addAssetMaintenancePlan(details).subscribe((res) => {
                if (res.message) {
                    this.isAssetMaintenanceSubmitted = false;
                    this.sharedService.setAlertMessage("Asset Maintenance added successfully");
                    this.router.navigate(['ams/assets/view']);
                }
                else {
                    this.isAssetMaintenanceSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetMaintenanceSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            let details = {
                "assetMaintenancePlanId": this.assetMaintenance.assetMaintenancePlanId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetId": parseInt(this.route.params['value'].id),
                "notes": this.assetMaintenance.notes,
                "maintenanceStatusId": parseInt(this.assetMaintenance.maintenanceStatusId),
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "actualMaintDate": this.assetMaintenance.actualMaintDate,
                "lastMaintenanceDate": this.assetMaintenance.lastMaintenanceDate,
                "nextPlannedMaintenance": this.assetMaintenance.nextPlannedMaintenance
            };
            this.assetService.updateAssetMaintenancePlan(details).subscribe((res) => {
                if (res.message) {
                    this.isAssetMaintenanceSubmitted = false;
                    this.sharedService.setAlertMessage("Asset Maintenance updated successfully");
                    this.router.navigate(['ams/assets/view']);
                }
                else {
                    this.isAssetMaintenanceSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetMaintenanceSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    showMaintenanceHistory(id) {
        console.log(id);
        this.dialog.open(_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__["AssetsMaintenanceHistoryComponent"], {
            panelClass: ['material', 'medium-02'],
            disableClose: true,
            data: id
        });
    }
    ngOnInit() {
        this.assetMaintenance = {};
        this.assetMaintenance.maintenanceStatusId = "";
        this.assetMaintenance.notes = "";
        if (this.route.params['value'].id != undefined && this.route.params['value'].type == undefined) {
            this.isEditAssetMaintenance = true;
            this.assetService.getAllAssetMaintenancePlanByAssetId(this.route.params['value'].id).subscribe((res) => {
                this.allAssetMaintenanceData = res;
                var assetMaintenance = this.allAssetMaintenanceData.filter(item => {
                    return item.maintenanceStatusId == 273; // only due items
                });
                this.assetMaintenance = assetMaintenance[0];
            });
        }
        this.assetId = this.route.params['value'].id;
        this.lookupService.getLookupValueByLookupTypeId(64).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
        this.assetService.getAllAssetByAssetId(this.route.params['value'].id).subscribe((res) => {
            this.isAssetMaintenanceLoaded = true;
            this.assetData = res[0];
        });
        this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res) => {
            this.assetCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
AddAssetMaintenanceComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"] },
    { type: _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
];
AddAssetMaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-asset-maintenance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-asset-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-asset-maintenance.component.scss */ "./src/app/ams/assets/components/add-asset-maintenance/add-asset-maintenance.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"],
        _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
], AddAssetMaintenanceComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-create/assets-create.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-create/assets-create.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtY3JlYXRlL2Fzc2V0cy1jcmVhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-create/assets-create.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-create/assets-create.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssetsCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsCreateComponent", function() { return AssetsCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/asset.service */ "./src/app/api/services/asset.service.ts");
/* harmony import */ var _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../.././api/services/vendor.service */ "./src/app/api/services/vendor.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");








let AssetsCreateComponent = class AssetsCreateComponent {
    constructor(router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
        this.assetStatus = "";
        this.isEditAsset = false;
        this.isAssetSubmitted = false;
        this.isError = false;
        this.alertMessage = "";
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
    submitAddAssetForm(form) {
        if (!this.isEditAsset) {
            var addAssetDetails = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetTagNo": this.asset.assetTagNo,
                "assetCategoryId": parseInt(this.asset.assetCategoryId),
                "assetName": this.asset.assetName,
                "manufacturerDetails": this.asset.manufacturerDetails,
                "modelNo": this.asset.modelNo,
                "assetConditionId": parseInt(this.asset.assetConditionId),
                "assetLocation": this.asset.assetLocation,
                "depreciationPercentage": parseInt(this.asset.depreciationPercentage),
                "assetImageId": 1,
                "installationDate": this.asset.installationDate,
                "vendorId": parseInt(this.asset.vendorId),
                "purchaseOrderNo": this.asset.purchaseOrderNo,
                "purchaseDate": this.asset.purchaseDate,
                "purchaseCost": parseInt(this.asset.purchaseCost),
                "warrantyMonths": parseInt(this.asset.warrantyMonths),
                "retiredOn": this.asset.retiredOn,
                "comments": this.asset.comments,
                "isActive": this.asset.isActive,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
                "serialNo": this.asset.serialNo,
                "assetDescription1": "string",
                "assetDescription2": "string",
                "unitOfMeasure": null,
                "quantity": null,
                "costCenter": null,
                "inventoryNumber": null,
                "salvageValue": null,
                "assetTypeId": null,
                "assetSubcategoryId": null,
                "assetOwnerId": null,
                "isLeased": this.asset.isLeased,
                "totalAssetPrice": null,
                "contractNumber": "string",
                "contractExpirydate": "2020-02-03T08:13:52.526Z",
                "contractAmount": null,
                "contractPaymentTerm": "string",
                "costCenterid": null
            };
            var addAssetParams = {
                file: this.fileList[0],
                asset: addAssetDetails
            };
            this.assetService.addAssetAsync(addAssetParams).subscribe((res) => {
                if (res.message) {
                    this.isAssetSubmitted = false;
                    this.sharedService.setAlertMessage("Asset added successfully");
                    this.router.navigate(['ams/assets/view']);
                }
                else {
                    this.isAssetSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
        else {
            var editAssetDetails = {
                "assetId": this.asset.assetId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "assetTagNo": this.asset.assetTagNo,
                "assetCategoryId": parseInt(this.asset.assetCategoryId),
                "assetName": this.asset.assetName,
                "manufacturerDetails": this.asset.manufacturerDetails,
                "modelNo": this.asset.modelNo,
                "assetConditionId": parseInt(this.asset.assetConditionId),
                "assetLocation": this.asset.assetLocation,
                "depreciationPercentage": parseInt(this.asset.depreciationPercentage),
                "assetImageId": 1,
                "installationDate": this.asset.installationDate,
                "vendorId": parseInt(this.asset.vendorId),
                "purchaseOrderNo": this.asset.purchaseOrderNo,
                "purchaseDate": this.asset.purchaseDate,
                "purchaseCost": parseInt(this.asset.purchaseCost),
                "warrantyMonths": parseInt(this.asset.warrantyMonths),
                "retiredOn": this.asset.retiredOn,
                "comments": this.asset.comments,
                "isActive": this.asset.isActive,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "serialNo": this.asset.serialNo,
                "assetDescription1": "string",
                "assetDescription2": "string",
                "unitOfMeasure": null,
                "quantity": null,
                "costCenter": null,
                "inventoryNumber": null,
                "salvageValue": null,
                "assetTypeId": null,
                "assetSubcategoryId": null,
                "assetOwnerId": null,
                "isLeased": this.asset.isLeased,
                "totalAssetPrice": null,
                "contractNumber": "string",
                "contractExpirydate": "2020-02-03T08:13:52.526Z",
                "contractAmount": null,
                "contractPaymentTerm": "string",
                "costCenterid": null
            };
            var editAssetParams = {
                file: this.fileList[0],
                asset: editAssetDetails
            };
            this.assetService.updateAssetAsync(editAssetParams).subscribe((res) => {
                if (res.message) {
                    this.isAssetSubmitted = false;
                    this.sharedService.setAlertMessage("Asset updated successfully");
                    this.router.navigate(['ams/assets/view']);
                }
                else {
                    this.isAssetSubmitted = false;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isAssetSubmitted = false;
                this.isError = true;
                this.alertMessage = "Some error occured";
            });
        }
    }
    ngOnInit() {
        this.asset = {};
        this.asset.assetCategoryId = "";
        this.asset.assetConditionId = "";
        this.asset.vendorId = "";
        if (this.route.params['value'].id != undefined) {
            this.isEditAsset = true;
            this.assetService.getAllAssetByAssetId(this.route.params['value'].id).subscribe((res) => {
                this.asset = res[0];
            });
        }
        this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res) => {
            this.assetCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
        this.vendorService.getVendorByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.vendorDataList = res.filter(item => {
                return item.isActive;
            });
        });
        //maintenance status 
        this.lookupService.getLookupValueByLookupTypeId(64).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
    }
};
AssetsCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"] },
    { type: _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
AssetsCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-create/assets-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets-create.component.scss */ "./src/app/ams/assets/components/assets-create/assets-create.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
        _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_4__["VendorService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AssetsCreateComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss":
/*!************************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".assets-maintenance-history-wrapper .card .lists:not(.last) {\n  border-bottom: 1px solid #eaeaea;\n}\n.assets-maintenance-history-wrapper .card .lists.done, .assets-maintenance-history-wrapper .card .lists.overdue, .assets-maintenance-history-wrapper .card .lists.due {\n  position: relative;\n}\n.assets-maintenance-history-wrapper .card .lists.done:after, .assets-maintenance-history-wrapper .card .lists.overdue:after, .assets-maintenance-history-wrapper .card .lists.due:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 100% !important;\n}\n.assets-maintenance-history-wrapper .card .lists.due:after {\n  background-color: #ff9800;\n}\n.assets-maintenance-history-wrapper .card .lists.overdue:after {\n  background-color: #e2385e;\n}\n.assets-maintenance-history-wrapper .card .lists.done:after {\n  background-color: #5bcc73;\n}\n.assets-maintenance-history-wrapper .card .lists li {\n  padding: 15px 15px 0 20px;\n}\n.assets-maintenance-history-wrapper .card .lists li .column {\n  margin: 0 0 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL2FwcC9hbXMvYXNzZXRzL2NvbXBvbmVudHMvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkvYXNzZXRzLW1haW50ZW5hbmNlLWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9BZG1pbi9Eb2N1bWVudHMvd29ya3Mvdml2ZWsvOTktYXBhcnRtZW50L2FwcC1uZzgvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0c7RUFDQyxnQ0FBQTtBQ05KO0FEUUc7RUFDQyxrQkVOQztBREFMO0FET0k7RUFDQyxXQUFBO0VBQ0Esa0JFVkE7RUZXQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSx1QkUyR0M7QURoSE47QURTSTtFQUNDLHlCRVNNO0FEaEJYO0FEV0k7RUFDQyx5QkVYUTtBREViO0FEYUk7RUFDQyx5QkVXUTtBRHRCYjtBRGNHO0VBQ0MseUJBQUE7QUNaSjtBRGFJO0VBQ0ksa0JBQUE7QUNYUiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS9hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuXG4uYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciB7XG5cdC5jYXJkIHtcblx0XHQubGlzdHMge1xuXHRcdFx0Jjpub3QoLmxhc3QpIHtcblx0XHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRncmV5LTQ1MDtcdFxuXHRcdFx0fVxuXHRcdFx0Ji5kb25lLCAmLm92ZXJkdWUsICYuZHVlIHtcblx0XHRcdFx0cG9zaXRpb246ICRyZWw7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRcdFx0cG9zaXRpb246ICRhYnM7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0d2lkdGg6IDhweDtcblx0XHRcdFx0XHRoZWlnaHQ6ICRmdWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmLmR1ZSB7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRzLW9yYW5nZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Ji5vdmVyZHVlIHtcblx0XHRcdFx0JjphZnRlciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1yZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdCYuZG9uZSB7XG5cdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsaSB7XG5cdFx0XHRcdHBhZGRpbmc6IDE1cHggMTVweCAwIDIwcHg7XG5cdFx0XHRcdC5jb2x1bW4ge1xuICAgIFx0XHRcdFx0bWFyZ2luOiAwIDAgMTBweCAwO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59IiwiLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzOm5vdCgubGFzdCkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kb25lLCAuYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMub3ZlcmR1ZSwgLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLmR1ZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kb25lOmFmdGVyLCAuYXNzZXRzLW1haW50ZW5hbmNlLWhpc3Rvcnktd3JhcHBlciAuY2FyZCAubGlzdHMub3ZlcmR1ZTphZnRlciwgLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLmR1ZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cy5kdWU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xufVxuLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLm92ZXJkdWU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzODVlO1xufVxuLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzLmRvbmU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJjYzczO1xufVxuLmFzc2V0cy1tYWludGVuYW5jZS1oaXN0b3J5LXdyYXBwZXIgLmNhcmQgLmxpc3RzIGxpIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDAgMjBweDtcbn1cbi5hc3NldHMtbWFpbnRlbmFuY2UtaGlzdG9yeS13cmFwcGVyIC5jYXJkIC5saXN0cyBsaSAuY29sdW1uIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG4kcy1vcmFuZ2U6ICNmZjk4MDA7XG4kZC1vcmFuZ2U6ICM3ZDY1MjA7XG4kcy15ZWxsb3c6ICNmZmViM2I7XG4kcy12aW9sZXQ6ICM2NzNhYjc7XG5cbiRncmV5LTMwMDogI2YwZjNmMztcbiRncmV5LTIwMDogI2Y2ZjhmODtcbiRncmV5LTUwMDogI2U2ZTZlNjtcbiRoLWN5YW46ICMwM2NjYTY7XG4kZHMtY3lhbjogIzgxYjI5YTtcbiRoZC1ibHVlOiAjMDQyODU0O1xuXG4kbGltZS1ncmVlbjogIzViY2M3MztcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG4vL2ZvbnQtc2l6ZXNcbiRmdC1iYXNlOjEwO1xuJGZvbnQtYmlnLTAzOjUwO1xuJGZvbnQtYmlnOjM4O1xuJGZvbnQtYmlnLTAyOjM2O1xuJGZvbnQtaDI6MzQ7XG4kZm9udC1tZWRpdW0tMDI6MjQ7XG4kZm9udC1tZWRpdW0tMDM6MjY7XG4kZm9udC1oMzoyODtcbiRmb250LWgzLTAyOjMyO1xuJGZvbnQtaDQ6IDIyO1xuJGZvbnQtbWVkaXVtOjIwO1xuJGZvbnQtYmFzZToxODtcbiRmb250LW5vcm1hbC0wMjoxNTtcbiRmb250LW5vcm1hbDoxNjtcbiRmb250LXNtYWxsOjE0O1xuJGZvbnQtc21hbGxlcjoxMztcbiRmb250LXRpbnk6MTI7XG4kZm9udC10aW5pZXI6MTA7XG4kZm9udC1taWNybzo5O1xuXG4vLyBvdGhlcnNcbiRmdWxsOjEwMCUgIWltcG9ydGFudDtcblxuXG4vLyBpbWFnZXNcbiRpbWFnZXM6IFwiL2Fzc2V0cy9pbWFnZXNcIjtcblxuJGhlYWRlci1oZWlnaHQ6IDcwcHg7Il19 */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: AssetsMaintenanceHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsMaintenanceHistoryComponent", function() { return AssetsMaintenanceHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/asset.service */ "./src/app/api/services/asset.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let AssetsMaintenanceHistoryComponent = class AssetsMaintenanceHistoryComponent {
    constructor(assetId, assetService, lookupService, sharedService, cookieService) {
        this.assetId = assetId;
        this.assetService = assetService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAssetMaintenanceLoaded = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 5;
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
    }
    getDateFormat(date) {
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD");
    }
    getMaintenanceStatus(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.statusTypeData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase().replace(/-/g, ' ');
        }
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    ngOnInit() {
        this.assetService.getAllAssetMaintenancePlanByAssetId(this.assetId).subscribe((res) => {
            this.isAssetMaintenanceLoaded = true;
            this.maintenanceDataList = res;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.totalItems = this.maintenanceDataList.length;
        });
        this.lookupService.getLookupValueByLookupTypeId(64).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
    }
};
AssetsMaintenanceHistoryComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
AssetsMaintenanceHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-maintenance-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets-maintenance-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets-maintenance-history.component.scss */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _api_services_asset_service__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], AssetsMaintenanceHistoryComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-reports/assets-reports.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-reports/assets-reports.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtcmVwb3J0cy9hc3NldHMtcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-reports/assets-reports.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-reports/assets-reports.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AssetsReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsReportsComponent", function() { return AssetsReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetsReportsComponent = class AssetsReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssetsReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-reports/assets-reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets-reports.component.scss */ "./src/app/ams/assets/components/assets-reports/assets-reports.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AssetsReportsComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-setup/assets-setup.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-setup/assets-setup.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtc2V0dXAvYXNzZXRzLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-setup/assets-setup.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-setup/assets-setup.component.ts ***!
  \******************************************************************************/
/*! exports provided: AssetsSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsSetupComponent", function() { return AssetsSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/services/asset.service */ "./src/app/api/services/asset.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);







let AssetsSetupComponent = class AssetsSetupComponent {
    constructor(assetService, lookupService, sharedService, cookieService) {
        this.assetService = assetService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isAssetCategoryLoaded = false;
        this.isAssetCategorySubmitted = true;
        this.isAssetCategoryNew = false;
        this.isAssetCategoryUpdate = false;
        this.assetCategory = "";
        this.assetCategoryUpdateId = 0;
        this.alertTicketMessage = "";
        this.isCategoryError = false;
        this.isCategorySuccess = false;
    }
    addNewAssetCategory() {
        this.isAssetCategoryNew = true;
        this.isAssetCategoryUpdate = false;
    }
    updateAssetCategory(item) {
        this.isAssetCategoryUpdate = true;
        this.isAssetCategoryNew = false;
        this.assetCategory = item.lookupValueName;
        this.assetCategoryUpdateId = item.lookupValueId;
    }
    deleteAssetCategory(item, index) {
        this.isAssetCategoryLoaded = false;
        console.log(item);
        var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(params).subscribe((res) => {
            this.assetCategoryData.splice(index, 1);
            this.isAssetCategoryLoaded = true;
        });
    }
    removeCategoryBox() {
        this.isAssetCategoryNew = false;
        this.isAssetCategoryUpdate = false;
        this.isCategoryError = false;
    }
    submitAssetCategoryForm(form) {
        this.isAssetCategorySubmitted = false;
        if (this.isAssetCategoryNew) {
            let details = {
                "lookupTypeId": 19,
                "lookupValueName": this.assetCategory,
                "description": this.assetCategory,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": 0,
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.addLookupValue(details).subscribe((res) => {
                if (res.message) {
                    this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res) => {
                        this.isAssetCategorySubmitted = true;
                        this.isCategorySuccess = true;
                        this.alertTicketMessage = "Category Added Successfully!";
                        this.assetCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isAssetCategorySubmitted = true;
                    this.isCategoryError = true;
                    this.alertTicketMessage = res.errorMessage;
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.assetCategoryUpdateId,
                "lookupTypeId": 19,
                "lookupValueName": this.assetCategory,
                "description": this.assetCategory,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": "2019-11-20T16:51:24.105Z",
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": "2019-11-20T16:51:24.105Z"
            };
            this.lookupService.updateLookupValue(details).subscribe((res) => {
                if (res.message) {
                    this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res) => {
                        this.isAssetCategorySubmitted = true;
                        this.isCategorySuccess = true;
                        this.alertTicketMessage = "Category Updated Successfully!";
                        this.assetCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isAssetCategorySubmitted = true;
                    this.isCategoryError = true;
                    this.alertTicketMessage = res.errorMessage;
                }
            });
        }
    }
    ngOnInit() {
        this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res) => {
            this.isAssetCategoryLoaded = true;
            this.assetCategoryData = res.filter(item => {
                return item.isActive;
            });
            underscore__WEBPACK_IMPORTED_MODULE_6__["each"](this.assetCategoryData, item => {
                this.assetService.getAllAssetByCategoryId(item.lookupValueId).subscribe((res) => {
                    if (res == undefined || res.length == 0) {
                        item.assetCount = 0;
                    }
                    else {
                        item.assetCount = res.length;
                    }
                }, error => {
                });
            });
        });
    }
};
AssetsSetupComponent.ctorParameters = () => [
    { type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
AssetsSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-setup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-setup/assets-setup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets-setup.component.scss */ "./src/app/ams/assets/components/assets-setup/assets-setup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_asset_service__WEBPACK_IMPORTED_MODULE_2__["AssetService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], AssetsSetupComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-update/assets-update.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-update/assets-update.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtdXBkYXRlL2Fzc2V0cy11cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-update/assets-update.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-update/assets-update.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssetsUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsUpdateComponent", function() { return AssetsUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AssetsUpdateComponent = class AssetsUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
AssetsUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-update/assets-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets-update.component.scss */ "./src/app/ams/assets/components/assets-update/assets-update.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AssetsUpdateComponent);



/***/ }),

/***/ "./src/app/ams/assets/components/assets-view/assets-view.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-view/assets-view.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9hc3NldHMvY29tcG9uZW50cy9hc3NldHMtdmlldy9hc3NldHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/assets/components/assets-view/assets-view.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/ams/assets/components/assets-view/assets-view.component.ts ***!
  \****************************************************************************/
/*! exports provided: AssetsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsViewComponent", function() { return AssetsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../assets-maintenance-history/assets-maintenance-history.component */ "./src/app/ams/assets/components/assets-maintenance-history/assets-maintenance-history.component.ts");
/* harmony import */ var _api_services_asset_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/asset.service */ "./src/app/api/services/asset.service.ts");
/* harmony import */ var _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../.././api/services/vendor.service */ "./src/app/api/services/vendor.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_11__);












let AssetsViewComponent = class AssetsViewComponent {
    constructor(injector, dialog, router, route, assetService, vendorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.assetCategoryId = "";
        this.isAssetCategorySelected = false;
        this.isAssetLoaded = false;
        this.assetData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.assetCategoryName = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.lookupService.getLookupValueByLookupTypeId(19).subscribe((res) => {
                    this.assetCategoryData = res.filter(item => {
                        return item.isActive;
                    });
                    this.getAssetCategoryData(this.assetCategoryId);
                });
            }
        });
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
        }
        else
            return '';
    }
    showConfirmModal(index) {
        this.modalService.showConfirmModal(index);
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isItemsAvailable() {
        return this.totalItems > 0 ? true : false;
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    getAssetCondition(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetConditionData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getAssetCategoryName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetCategoryData, function (item) {
            if (item.lookupValueId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName.toLowerCase();
        }
    }
    getvendorName(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.vendorDataList, function (item) {
            if (item.vendorId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].vendorName;
        }
    }
    getAssetCategory() {
        if (this.assetCategoryId != "All") {
            this.router.navigateByUrl('/ams/assets/view/' + parseInt(this.assetCategoryId));
        }
        else {
            this.router.navigate(['/ams/assets/view/']);
        }
    }
    getAssetCategoryData(id) {
        this.isAssetLoaded = false;
        underscore__WEBPACK_IMPORTED_MODULE_11__["each"](this.assetCategoryData, (item, index) => {
            if (id != "All") {
                if (item.lookupValueId == parseInt(id)) {
                    this.assetCategoryName = item.lookupValueName;
                }
            }
            else {
                this.assetCategoryName = "";
            }
        });
        this.assetService.getAllAssetByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            if (id != "All") {
                this.assetListData = res.filter(item => {
                    return (item.assetCategoryId == parseInt(id)) && item.isActive;
                });
            }
            else {
                this.assetListData = res.filter(item => {
                    return item.isActive;
                });
            }
            this.totalItems = this.assetListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isAssetLoaded = true;
        });
    }
    showMaintenanceHistory(id) {
        this.dialog.open(_assets_maintenance_history_assets_maintenance_history_component__WEBPACK_IMPORTED_MODULE_4__["AssetsMaintenanceHistoryComponent"], {
            panelClass: ['material', 'medium-02'],
            disableClose: true,
            data: id
        });
    }
    isMaintenanceAvailable(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetMaintenaceDataList, function (item) {
            if (item.assetId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return false;
        }
        else {
            return true;
        }
    }
    isMaintenanceDue(id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_11__["filter"](this.assetMaintenaceDataList, function (item) {
            if (item.assetId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return false;
        }
        else {
            var check = underscore__WEBPACK_IMPORTED_MODULE_11__["some"](data, item => {
                return item.maintenanceStatusId == 273;
            });
            return check ? true : false;
        }
    }
    ngOnInit() {
        this.asset = {};
        if (this.route.params['value'].id == undefined) {
            this.assetCategoryId = "All";
            this.assetService.getAllAssetByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
                this.isAssetLoaded = false;
                this.assetListData = res.filter(item => {
                    return item.isActive;
                });
                this.totalItems = this.assetListData.length;
                if (this.totalItems > this.itemLimit) {
                    this.ItemEndIndex = this.itemLimit;
                }
                else {
                    this.ItemEndIndex = this.totalItems;
                }
                this.isAssetLoaded = true;
            });
        }
        else {
            this.assetCategoryId = "" + this.route.params['value'].id;
        }
        //asset condition
        this.lookupService.getLookupValueByLookupTypeId(23).subscribe((res) => {
            this.assetConditionData = res.filter(item => {
                return item.isActive;
            });
        });
        this.vendorService.getVendorByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.vendorDataList = res.filter(item => {
                return item.isActive;
            });
        });
        this.assetService.getAllAssetMaintenancePlanByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res) => {
            this.assetMaintenaceDataList = res.filter(item => {
                return item.isActive;
            });
        });
        this.lookupService.getLookupValueByLookupTypeId(64).subscribe((res) => {
            this.statusTypeData = res;
        }, error => {
        });
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(item => {
            if (item != null) {
                var params = {
                    assetId: item.assetId,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.assetService.deleteAsset(params).subscribe((res) => {
                    const index = this.assetListData.indexOf(item);
                    this.assetListData.splice(index, 1);
                    this.sharedService.setUnitListDeleteIndex(null);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
AssetsViewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"] },
    { type: _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
];
AssetsViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./assets-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/assets/components/assets-view/assets-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./assets-view.component.scss */ "./src/app/ams/assets/components/assets-view/assets-view.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_asset_service__WEBPACK_IMPORTED_MODULE_5__["AssetService"],
        _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])
], AssetsViewComponent);



/***/ })

}]);
//# sourceMappingURL=assets-assets-module-es2015.js.map