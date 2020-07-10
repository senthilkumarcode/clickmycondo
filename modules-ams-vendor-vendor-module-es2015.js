(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-vendor-vendor-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendors-view-wrapper\">\n\n\t<app-loader *ngIf=\"!isVendorCategoryLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isVendorCategoryLoaded\">\n\n\t\t<form #viewVendorForm=\"ngForm\" name=\"viewVendorForm\" novalidate>\n\n\t\t\t<div class=\"card mb-30\">\n\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h5>Select Category</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Category Type*</label>\n\t\t\t\t\t\t\t\t<select name=\"vendorCategoryId\" id=\"vendorCategoryId\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendorCategoryId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getVendorCategoryName(vendorCategoryId)\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"All\" >All</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of vendorCategoryData\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<app-loader *ngIf=\"!isVendorLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isVendorLoaded && isVendorCategorySelected && isVendorCategoryLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>All {{categoryName}} Vendors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<select (change)=\"onFilterByVendorTypeChange()\" name=\"vendorTypeFilter\" id=\"vendorTypeFilter\" class=\"form-control filter-width\" [(ngModel)]=\"selectedType\" required>\n\t\t\t\t\t\t<option value=\"All\" selected>Select Vendor Type</option>\n\t\t\t\t\t\t<option value=225 >Goods</option>\n\t\t\t\t\t\t<option value=226 >Services</option>\n        </select>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"VendorData\"> -->\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"vendorData\"\n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t</li>\n\t\t\t\t<!-- <li class=\"list-inline-item\">\n\t\t\t\t\t<a (click)=\"vendorPrint(vendor)\" class=\"btn trans-white mt_5\">\n\t\t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t\t\t\t\t\t<span>Print</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li> -->\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" routerLink=\"/ams/vendor/create-vendor\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Vendor</span>\n\t\t\t\t\t</a>\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\n\t\t<!-- <div class=\"card-body p-0\">\n\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Vendor Id\n\t\t\t\t      \t<span (click)=\"sortUnitData('vendorId')\" [ngClass]=\"getFieldOrderBy('vendorId')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"columnField['vendorId']\" (ngModelChange)=\"selectColInput('vendorId')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Vendor Name\n\t\t\t\t      \t<span (click)=\"sortUnitData('vendorName')\" [ngClass]=\"getFieldOrderBy('vendorName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Vendor Name\" [(ngModel)]=\"columnField['vendorName']\" (ngModelChange)=\"selectColInput('vendorName')\" >\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\">Contact Person\n\t\t\t\t       \t<span (click)=\"sortUnitData('contactPerson')\" [ngClass]=\"getFieldOrderBy('contactPerson')\"></span>\n\t\t\t\t       \t<input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\" [(ngModel)]=\"columnField['contactPerson']\" (ngModelChange)=\"selectColInput('contactPerson')\" >\n\t\t\t\t       </th>\n\t\t\t\t      <th scope=\"col\">Email\n\t\t\t\t      \t<span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Phone No\n\t\t\t\t      \t<span (click)=\"sortUnitData('phone1')\" [ngClass]=\"getFieldOrderBy('phone1')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone No\" [(ngModel)]=\"columnField['phone1']\" (ngModelChange)=\"selectColInput('phone1')\" >\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let vendor of vendorListData | simpleSearch: vendorData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\" [ngClass]=\"vendor.isActive ? 'active' : 'notactive'\">\n\t\t\t\t      <td class=\"name\">{{vendor.vendorId}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.vendorName}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.contactPerson}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.phone1}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" #v (click)=\"showVendorInfo(vendor)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/vendor/edit-vendor/{{vendor.vendorId}}\"\n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showDeleteConfirmModal(vendor.vendorId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination\n\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n  \t\t</div> -->\n\n\t</div>\n\n\t<ng-template #viewVendorRef let-vendor>\n    \t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Vendor Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{vendor.vendorName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{vendor.email}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor ID</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vendorId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Contact Person</h6>\n\t\t\t\t\t\t\t<p>{{vendor.contactPerson}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.phone1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Alternate No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.phone2}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t\t<p>{{vendor.address1}}</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor Category</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vendorCategoryName}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor Type</h6>\n\t\t\t\t\t\t\t\t<p>{{vendor.vendorTypeName}}</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor Legal Type</h6>\n\t\t\t\t\t\t\t\t<p>{{vendor.vendorLegalTypeName}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">VAT No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vatorTin}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax1 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax2 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax2}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax3 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax3}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax4 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax4}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"vendorTableList\" [columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid>\n\t\t</div>\n\t</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendor-create-wrapper\">\n\n\t<form #addVendorForm=\"ngForm\" name=\"addVendorForm\" (ngSubmit)=\"addOrUpdateVendor(addVendorForm)\" novalidate>\n\n\t\t<div class=\"card mb-30\" id=\"accordion\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"remainder\">\n\t\t\t\t\t<h5>\n\t\t\t\t\t\t<span *ngIf=\"!isEditVendor\">Create Vendor</span>\n\t\t\t\t\t\t<span *ngIf=\"isEditVendor\">Update Vendor</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"remainder\">\n\t\t\t\t\t<span>All fields with * are required.</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/vendor/all-vendors\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pb-0\" [ngClass]=\"isError ? 'h-39' : 'h-0 pt-0'\">\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t<app-loader *ngIf=\"isVendorSubmitted\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"!isVendorSubmitted\">\n\n\t\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#vendorCollapseOne\"\n\t\t\t\t\t\t\taria-expanded=\"true\" aria-controls=\"collapseOne\">General</li>\n\t\t\t\t\t\t<div id=\"vendorCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n\t\t\t\t\t\t\tdata-parent=\"#accordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor name<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorName\" [(ngModel)]=\"vendor.vendorName\" required>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Contact Person</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"contactPerson\" [(ngModel)]=\"vendor.contactPerson\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Phone Number<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter value\" name=\"contactNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.phone1\" required>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>vendor Fax Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"faxNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.fax\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"address\" [(ngModel)]=\"vendor.address1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" #emailId=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'invalid-border' : emailId.invalid}\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter value\" name=\"email\" [(ngModel)]=\"vendor.email\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Alternate Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter value\" name=\"alternateContact\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.phone2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>vendor Category<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"vendorCategory\" id=\"vendorCategory\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.vendorCategoryId\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of vendorCategoryList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>vendor Legal Type<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"vendorType\" id=\"vendorType\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.legalTypeId\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of vendorTypeList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Type<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"legalType\" id=\"goods\" [(ngModel)]=\"vendorTypeId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"225\" type=\"radio\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"goods\">Goods</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"legalType\" id=\"services\" [(ngModel)]=\"vendorTypeId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"226\" type=\"radio\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"services\">Services</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Status<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"vendorStatus\" id=\"active\" [(ngModel)]=\"vendorStatus\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"true\" type=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"active\">Active</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"vendorStatus\" id=\"inactive\" [(ngModel)]=\"vendorStatus\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"false\" type=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"inactive\">Inactive</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#vendorCollapseTwo\"\n\t\t\t\t\t\t\taria-expanded=\"true\" aria-controls=\"collapseOne\">Payment Details</li>\n\t\t\t\t\t\t<div id=\"vendorCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\"\n\t\t\t\t\t\t\tdata-parent=\"#accordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>VAT/TIN<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"vatorTin\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.vatorTin\" required>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax1</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax1\" [(ngModel)]=\"vendor.tax1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax2</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax2\" [(ngModel)]=\"vendor.tax2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax3</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax3\" [(ngModel)]=\"vendor.tax3\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax4</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax4\" [(ngModel)]=\"vendor.tax4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>GL Account Type<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"accountType\" id=\"accountType\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.glaccountTypeId\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of glAccountListData\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.glaccountId\">{{ item.glaccountName }}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Notes1</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorNotes1\" [(ngModel)]=\"vendor.notes1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Notes2</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorNotes2\" [(ngModel)]=\"vendor.notes2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#vendorCollapseThree\"\n\t\t\t\t\t\t\taria-expanded=\"true\" aria-controls=\"collapseOne\">Bank Details</li>\n\t\t\t\t\t\t<div id=\"vendorCollapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\"\n\t\t\t\t\t\t\tdata-parent=\"#accordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Payee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorPayeeName\" [(ngModel)]=\"vendor.payeeName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Account No</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankAccNo\" [(ngModel)]=\"vendor.accountNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankName\" [(ngModel)]=\"vendor.bankName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Branch</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankBranch\" [(ngModel)]=\"vendor.bankBranch\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Code</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankCode\" [(ngModel)]=\"vendor.bankCode\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVendorForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!selected_report_type \" class=\"gl-other-reports-wrapper\">\n\n\t<h4 class=\"main-title-mini\">Select the reports</h4>\n\t<div class=\"card\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<div class=\"simple-lists\">\n\t\t\t\t<ng-container *ngFor=\"let report of reportsTypes; let i = index\">\n\t\t\t\t\t<a (click)=\"selectReport(report.type)\">{{report.name}}</a>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class=\"vendors-view-wrapper\">\n\n\t<app-loader *ngIf=\"!isVendorLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isVendorLoaded && selected_report_type \">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>{{selected_report_type}} Vendors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"VendorData\"> -->\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"vendorData\"\n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t</li>\n\t\t\t\t<!-- <li class=\"list-inline-item\">\n\t\t\t\t\t<a (click)=\"showVendorInfo(vendor)\" class=\"btn trans-white mt_5\">\n\t\t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t\t\t\t\t\t<span>Print</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li> -->\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"vendorTableList\" [columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid>\n\t\t</div>\n\n\t\t<!-- <div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">Vendor Id\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('vendorId')\" [ngClass]=\"getFieldOrderBy('vendorId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"ID\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['vendorId']\" (ngModelChange)=\"selectColInput('vendorId')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Vendor Name\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('vendorName')\" [ngClass]=\"getFieldOrderBy('vendorName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Vendor Name\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['vendorName']\" (ngModelChange)=\"selectColInput('vendorName')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Contact Person\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('contactPerson')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('contactPerson')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['contactPerson']\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"selectColInput('contactPerson')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Email\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Phone No\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('phone1')\" [ngClass]=\"getFieldOrderBy('phone1')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Phone No\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['phone1']\" (ngModelChange)=\"selectColInput('phone1')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let vendor of vendorList | simpleSearch: vendorData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{vendor.vendorId}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.vendorName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.contactPerson}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.phone1}}</td>\n\t\t\t\t\t\t<td class=\"simple-actions\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showVendorInfo(vendor)\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon view\" name=\"eye\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div> -->\n\n\t</div>\n\n\t<ng-template #viewVendorRef let-vendor>\n\t\t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Vendor Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h5 class=\"mt-0\">{{vendor.vendorName}}</h5>\n\t\t\t\t\t\t\t<p class=\"grey\">{{vendor.email}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor ID</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vendorId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Contact Person</h6>\n\t\t\t\t\t\t\t<p>{{vendor.contactPerson}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.phone1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">VAT No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vatorTin}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax1 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax2 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax2}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax3 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax3}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax4 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax4}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-template>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vendors-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isVendorCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isVendorCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Vendor Categories</h4>\n\t\t<ng-container *ngFor=\"let item of vendorCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/vendor/all-vendors/{{item.lookupValueId}}\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateVendorCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon del\" name=\"x\" (click)=\"showRemoveCategoryConfirmModal(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p class=\"float-left\">{{getVendorsCount(item.lookupValueId)}} Vendor(s)</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewVendorCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isVendorCategoryNew || isVendorCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isVendorCategoryNew\">Add Vendor Category</h6>\n    \t\t\t<h6 *ngIf=\"!isVendorCategoryNew\">Update Vendor Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isVendorCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isVendorCategorySubmitted\">\n\n\t\t\t\t<form #addVendorCategoryForm = \"ngForm\" name=\"addVendorCategoryForm\" (ngSubmit)=\"showConfirmModal(addVendorCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type<span class=\"mandatory\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"VendorCategory\" [(ngModel)]=\"VendorCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVendorCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/vendor.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/vendor.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  vendor works!\n</p>\n");

/***/ }),

/***/ "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n  font-size: 16px;\n}\n\n.filter-width {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9tb2R1bGVzL2Ftcy92ZW5kb3IvY29tcG9uZW50cy9hbGwtdmVuZG9ycy9hbGwtdmVuZG9ycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvYWxsLXZlbmRvcnMvYWxsLXZlbmRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvYWxsLXZlbmRvcnMvYWxsLXZlbmRvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5maWx0ZXItd2lkdGh7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiIsIi5tYW5kYXRvcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5maWx0ZXItd2lkdGgge1xuICB3aWR0aDogMjAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts ***!
  \************************************************************************************/
/*! exports provided: AllVendorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllVendorsComponent", function() { return AllVendorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");











let AllVendorsComponent = class AllVendorsComponent {
    constructor(router, route, injector, dialog, vendorService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.injector = injector;
        this.dialog = dialog;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.vendorCategoryId = "All";
        this.isVendorCategoryLoaded = false;
        this.isVendorCategorySelected = false;
        this.isVendorLoaded = true;
        this.vendorData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.categoryName = "";
        this.selectedInput = "";
        this.columnField = {};
        this.vendorTableList = [];
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
    }
    vendorPrint(vendor) {
        this.dialog.open(this.viewVendorRef, {
            panelClass: 'material',
            disableClose: true,
            data: vendor
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'vendorData');
    }
    onGlSearchFilter() {
        if (this.vendorData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.vendorData;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getVendorCategoryName(id) {
        this.selectedType = 'All';
        underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.vendorCategoryData, (item, index) => {
            if (item.lookupValueId == parseInt(id)) {
                this.categoryName = item.lookupValueName;
            }
            this.isVendorCategorySelected = true;
        });
        if (id == "All") {
            this.categoryName = "";
        }
        this.isVendorLoaded = false;
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendorService.getVendorByApartmentId(params).subscribe((res) => {
            if (id != "All") {
                this.vendorListData = res.filter(item => {
                    return (item.isActive && item.vendorCategoryId == parseInt(id));
                });
            }
            else {
                this.vendorListData = res.filter(item => {
                    return item.isActive;
                });
            }
            for (let vendor of this.vendorListData) {
                let category = this.vendorCategoryData.find(x => x.lookupValueId == vendor.vendorCategoryId);
                if (category) {
                    vendor.vendorCategoryName = category.lookupValueName;
                }
                let legaltype = this.vendorLegalTypeList && this.vendorLegalTypeList.find(x => x.lookupValueId == vendor.legalTypeId);
                if (legaltype) {
                    vendor.vendorLegalTypeName = legaltype.lookupValueName;
                }
                if (vendor.vendorTypeId && vendor.vendorTypeId == "225") {
                    vendor.vendorTypeName = 'Goods';
                }
                if (vendor.vendorTypeId && vendor.vendorTypeId == "226") {
                    vendor.vendorTypeName = 'Services';
                }
            }
            let arrangeVendorRawData = {
                localdata: this.vendorListData,
                datatype: "array"
            };
            this.vendorTableList = new jqx.dataAdapter(arrangeVendorRawData);
            this.isVendorLoaded = true;
            this.totalItems = this.vendorListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        }, error => {
        });
    }
    showDeleteConfirmModal(id) {
        this.modalService.showConfirmModal(id);
    }
    showVendorInfo(vendor) {
        console.log("vendor ", vendor);
        this.dialog.open(this.viewVendorRef, {
            panelClass: 'material',
            disableClose: true,
            data: vendor
        });
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    dialogClose() {
        this.dialogRef.close();
    }
    onEditVendor(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let vendorId = dataRecord.vendorId;
        this.router.navigateByUrl('/ams/vendor/edit-vendor/' + vendorId);
    }
    onVendorDelete(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let vendorId = dataRecord.vendorId;
        this.modalService.showConfirmModal(vendorId);
    }
    onViewVendor(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.dialogRef = this.dialog.open(this.viewVendorRef, {
            panelClass: 'material',
            disableClose: true,
            data: dataRecord
        });
    }
    onFilterByVendorTypeChange() {
        if (this.selectedType == 'All') {
            this.vendorFilterList = this.vendorListData;
            let arrangeVendorRawData = {
                localdata: this.vendorFilterList,
                datatype: "array"
            };
            this.vendorTableList = new jqx.dataAdapter(arrangeVendorRawData);
        }
        else {
            this.vendorFilterList = this.vendorListData.filter(x => x.vendorTypeId == this.selectedType);
            let arrangeVendorRawData = {
                localdata: this.vendorFilterList,
                datatype: "array"
            };
            this.vendorTableList = new jqx.dataAdapter(arrangeVendorRawData);
        }
    }
    ngOnInit() {
        this.selectedType = 'All';
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Vendor ID',
                datafield: 'vendorId',
                minwidth: 130,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Vendor Name',
                datafield: 'vendorName',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Contact Person',
                datafield: 'contactPerson',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Vendor Category',
                datafield: 'vendorCategoryName',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Vendor Type',
                datafield: 'vendorTypeName',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Vendor Status',
                datafield: 'vendorStatus',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Phone No',
                datafield: 'phone1',
                minwidth: 170,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'VAT',
                datafield: 'vatorTin',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Percentage Tax',
                datafield: 'tax1',
                minwidth: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'With Holding Tax',
                datafield: 'tax2',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                minwidth: 150,
                cellclassname: 'action-cell',
                cellsrenderer: (row, column, value) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="viewVendor(' + row + ')"><i class="fa fa-eye icon view" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="editVendorEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        let params = {
            LookupTypeId: 57
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.isVendorCategoryLoaded = true;
            this.vendorCategoryData = res.filter(item => {
                return item.isActive;
            });
            //vendor type
            let vendorTypeParams = {
                LookupTypeId: 59
            };
            this.lookupService.getLookupValueByLookupTypeId(vendorTypeParams).subscribe((res) => {
                this.vendorLegalTypeList = res.filter(item => {
                    return item.isActive;
                });
                this.getVendorCategoryName(this.vendorCategoryId);
                if (this.route.params['value'].id != undefined) {
                    this.vendorCategoryId = "" + this.route.params['value'].id;
                    this.getVendorCategoryName(this.vendorCategoryId);
                }
            });
        });
        // delete vendor
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    vendorId: id,
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.vendorService.deleteVendor(params).subscribe((res) => {
                    underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.vendorListData, (type) => {
                        if (type.vendorId == id) {
                            type.isActive = false;
                        }
                    });
                    setTimeout(() => {
                        this.vendorListData = this.vendorListData.filter((type) => type.vendorId !== id);
                        this.totalItems = this.vendorListData.length;
                        this.sharedService.setAlertMessage("Vendor deleted Successfully");
                        this.sharedService.setUnitListDeleteIndex(null);
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
AllVendorsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewVendorRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], AllVendorsComponent.prototype, "viewVendorRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__["jqxGridComponent"])
], AllVendorsComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditVendor', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AllVendorsComponent.prototype, "onEditVendor", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onVendorDelete', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AllVendorsComponent.prototype, "onVendorDelete", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onViewVendor', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AllVendorsComponent.prototype, "onViewVendor", null);
AllVendorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-vendors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-vendors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-vendors.component.scss */ "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])
], AllVendorsComponent);

function viewVendor(row) {
    var event = new CustomEvent('onViewVendor', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.viewVendor = viewVendor;
function showConfirmDeleteEvent(row) {
    var event = new CustomEvent('onVendorDelete', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.showConfirmDeleteEvent = showConfirmDeleteEvent;
function editVendorEvent(row) {
    var event = new CustomEvent('onEditVendor', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editVendorEvent = editVendorEvent;


/***/ }),

/***/ "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-border {\n  border: 1px solid #e2385e !important;\n}\n\n.mandatory {\n  color: red;\n  font-size: 16px;\n}\n\n.remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9tb2R1bGVzL2Ftcy92ZW5kb3IvY29tcG9uZW50cy9jcmVhdGUtdmVuZG9yL2NyZWF0ZS12ZW5kb3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvYW1zL3ZlbmRvci9jb21wb25lbnRzL2NyZWF0ZS12ZW5kb3IvY3JlYXRlLXZlbmRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNHLG9DQUFBO0FDQ0g7O0FERUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGOztBRENBO0VBQ0ksMkJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3ZlbmRvci9jb21wb25lbnRzL2NyZWF0ZS12ZW5kb3IvY3JlYXRlLXZlbmRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWJvcmRlcntcbiAgIGJvcmRlcjogMXB4IHNvbGlkICNlMjM4NWUgIWltcG9ydGFudDtcbn1cblxuLm1hbmRhdG9yeXtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnJlbWFpbmRlcntcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XG4gICAgZm9udC1zaXplOjEwcHg7XG4gICAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xuICB9XG4iLCIuaW52YWxpZC1ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTIzODVlICFpbXBvcnRhbnQ7XG59XG5cbi5tYW5kYXRvcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yZW1haW5kZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZzogNXB4IDBweCAwcHggMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateVendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateVendorComponent", function() { return CreateVendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/BankAccount */ "./src/app/api/controllers/BankAccount.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");










let CreateVendorComponent = class CreateVendorComponent {
    constructor(router, route, injector, accountsService, vendorService, bankAccountService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.injector = injector;
        this.accountsService = accountsService;
        this.vendorService = vendorService;
        this.bankAccountService = bankAccountService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isEditVendor = false;
        this.legalType = "";
        this.vendorTypeId = "";
        this.vendorStatus = true;
        this.isVendorSubmitted = false;
        this.isVendorAdded = false;
        this.isError = false;
        this.alertMessage = "";
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    getCategoryName() {
    }
    showUpdateConfirmModal(id) {
        this.modalService.showVendorUpdateModal(id);
    }
    addOrUpdateVendor(form) {
        if (this.isEditVendor) {
            this.showUpdateConfirmModal(form);
        }
        else {
            this.submitAddVendorForm(form);
        }
    }
    submitAddVendorForm(form) {
        this.isVendorSubmitted = true;
        this.isError = false;
        if (!this.isEditVendor) {
            let bank_details = {
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "bankName": this.vendor.bankName,
                "branchName": this.vendor.bankBranch,
                "accountNumber": this.vendor.accountNumber,
                "accountHolderName": this.vendor.payeeName,
                "ifsc": this.vendor.bankCode,
                "isPrimary": true,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
            };
            let params = {
                bankAccountDetails: bank_details
            };
            this.bankAccountService.addBankAccountDetails(params).subscribe((bank_res) => {
                if (bank_res) {
                    //map vendor bankAccountDetailsId from resp
                    console.log("Bank details", bank_res);
                }
            }, error => {
            });
            let details = {
                "vendorTypeId": this.vendorTypeId,
                "vendorName": this.vendor.vendorName,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "legalTypeId": parseInt(this.vendor.legalTypeId),
                "vatorTin": this.vendor.vatorTin,
                "tax1": this.vendor.tax1 || " ",
                "tax2": this.vendor.tax2 || " ",
                "tax3": this.vendor.tax3 || " ",
                "tax4": this.vendor.tax4 || " ",
                "contactPerson": this.vendor.contactPerson,
                "email": this.vendor.email || " ",
                "phone1": this.vendor.phone1 || " ",
                "phone2": this.vendor.phone2 || " ",
                "fax": this.vendor.fax,
                "address1": this.vendor.address1 || " ",
                "address2": "string",
                "city": "string",
                "state": "string",
                "pin": "string",
                "vendorCategoryId": parseInt(this.vendor.vendorCategoryId),
                "vendorStatus": this.vendorStatus,
                "notes1": this.vendor.notes1 || " ",
                "notes2": this.vendor.notes2 || " ",
                "glaccountTypeId": parseInt(this.vendor.glaccountTypeId),
                "bankAccountDetailsId": null,
                "isActive": this.vendorStatus,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": new Date().toISOString(),
            };
            let vendorParams = {
                vendor: details
            };
            // this.vendorService.addVendor(vendorParams).subscribe((res:any) => {
            //   if(res.message) {
            //     this.isVendorSubmitted = false;
            //     this.sharedService.setAlertMessage("Vendor added successfully");
            //     this.router.navigate(['ams/vendor/all-vendors', parseInt(this.vendor.vendorCategoryId)]);
            //   }
            //   else {
            //     this.isVendorSubmitted = false;
            //     this.isError = true;
            //     this.alertMessage = res.errorMessage;
            //   }
            // },
            // error => {
            //   this.isVendorSubmitted = false;
            //   this.isError = true;
            //   this.alertMessage = "Some error occured";
            // });
        }
        else {
            let bank_details = {
                "bankAccountDetailsId": this.vendor.bankAccountDetailsId,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "bankName": this.vendor.bankName,
                "branchName": this.vendor.bankBranch,
                "accountNumber": this.vendor.accountNumber,
                "accountHolderName": this.vendor.payeeName,
                "ifsc": this.vendor.bankCode,
                "isPrimary": true,
                "isActive": true,
                "insertedBy": 0,
                "insertedOn": new Date().toISOString(),
                "updatedBy": 0,
                "updatedOn": new Date().toISOString(),
            };
            let bankAccParams = {
                bankAccountDetails: bank_details
            };
            this.bankAccountService.updateBankAccountDetails(bankAccParams).subscribe((bank_res) => {
                if (bank_res) {
                }
            }, error => {
            });
            let details = {
                "vendorId": parseInt(this.vendor.vendorId),
                "vendorTypeId": this.vendorTypeId,
                "vendorName": this.vendor.vendorName,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "legalTypeId": parseInt(this.vendor.legalTypeId),
                "vatorTin": this.vendor.vatorTin,
                "tax1": this.vendor.tax1 || " ",
                "tax2": this.vendor.tax2 || " ",
                "tax3": this.vendor.tax3 || " ",
                "tax4": this.vendor.tax4 || " ",
                "contactPerson": this.vendor.contactPerson,
                "email": this.vendor.email || " ",
                "phone1": this.vendor.phone1 || " ",
                "phone2": this.vendor.phone2 || " ",
                "fax": this.vendor.fax,
                "address1": this.vendor.address1 || " ",
                "address2": "string",
                "city": "string",
                "state": "string",
                "pin": "string",
                "vendorCategoryId": parseInt(this.vendor.vendorCategoryId),
                "vendorStatus": this.vendorStatus,
                "notes1": this.vendor.notes1 || " ",
                "notes2": this.vendor.notes2 || " ",
                "glaccountTypeId": parseInt(this.vendor.glaccountTypeId),
                "bankAccountDetailsId": null,
                "isActive": this.vendorStatus,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
            };
            // this.vendorService.updateVendor(vendorParams).subscribe((res:any) => {
            //   if(res.message) {
            //     this.isVendorSubmitted = false;
            //     this.sharedService.setAlertMessage("Vendor updated successfully");
            //     this.router.navigate(['ams/vendor/all-vendors', parseInt(this.vendor.vendorCategoryId)]);
            //   }
            //   else {
            //     this.isVendorSubmitted = false;
            //     this.isError = true;
            //     this.alertMessage = res.errorMessage;
            //   }
            // },
            // error => {
            //   this.isVendorSubmitted = false;
            //   this.isError = true;
            //   this.alertMessage = "Some error occured";
            // });
        }
    }
    ngOnInit() {
        this.vendor = {};
        this.vendor.glaccountTypeId = "";
        this.vendor.vendorCategoryId = "";
        this.vendor.legalTypeId = "";
        this.vendorTypeId = "";
        if (this.route.params['value'].id != undefined) {
            this.isEditVendor = true;
            this.isVendorSubmitted = true;
            this.sharedService.vendorupdate.subscribe(id => {
                if (id) {
                    this.submitAddVendorForm(id);
                }
            });
            let vendorIdParam = {
                vendorId: this.route.params['value'].id
            };
            this.vendorService.getVendorById(vendorIdParam).subscribe((res) => {
                this.vendor = res[0];
                this.vendorTypeId = "" + this.vendor.vendorTypeId;
                if (this.vendor.email == " ") {
                    this.vendor.email = undefined;
                }
                this.isVendorSubmitted = false;
            }, error => {
            });
            if (this.vendor.bankAccountDetailsId) {
                let bankAccountDetailsIdParam = {
                    bankAccountDetailsId: this.vendor.bankAccountDetailsId
                };
                this.bankAccountService.getBankAccountDetailsByBankAccountDetailsId(bankAccountDetailsIdParam).subscribe((bank_res) => {
                    // need to map response in vendor bank
                }, error => {
                });
            }
        }
        var accountParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            groupId: 3
        };
        this.accountsService.getGlAccountsByGroupId(accountParams).subscribe((res) => {
            this.glAccountListData = res;
        });
        let params = {
            LookupTypeId: 57
        };
        //vendor Category
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.vendorCategoryList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let vendorParams = {
            LookupTypeId: 59
        };
        //vendor type
        this.lookupService.getLookupValueByLookupTypeId(vendorParams).subscribe((res) => {
            this.vendorTypeList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
    }
};
CreateVendorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"] },
    { type: src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_4__["BankAccountService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }
];
CreateVendorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-vendor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-vendor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-vendor.component.scss */ "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"],
        src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_4__["BankAccountService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])
], CreateVendorComponent);



/***/ }),

/***/ "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3ZlbmRvci9jb21wb25lbnRzL3ZlbmRvci1yZXBvcnRzL3ZlbmRvci1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts ***!
  \******************************************************************************************/
/*! exports provided: VendorReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorReportsComponent", function() { return VendorReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");








let VendorReportsComponent = class VendorReportsComponent {
    constructor(dialog, vendorService, lookupService, cookieService) {
        this.dialog = dialog;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.vendorCategoryId = "";
        this.vendorData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.categoryName = "";
        this.selectedInput = "";
        this.columnField = {};
        this.isVendorLoaded = false;
        this.vendorTableList = [];
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
            return this.unitOrder ? 'asc' : 'desc';
        }
        else
            return '';
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    showVendorInfo(vendor) {
        console.log("working", vendor);
        this.dialog.open(this.viewVendorRef, {
            panelClass: 'material',
            disableClose: true,
            data: vendor
        });
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    selectReport(type) {
        this.vendorList = [];
        this.selected_report_type = type;
        if (type == 'Active') {
            this.vendorList = this.allVendorListData.filter(item => {
                return item.isActive;
            });
        }
        else {
            this.vendorList = this.allVendorListData.filter(item => {
                return (item.isActive == false);
            });
        }
        let arrangeVendorRawData = {
            localdata: this.vendorList,
            datatype: "array"
        };
        this.vendorTableList = new jqx.dataAdapter(arrangeVendorRawData);
        this.totalItems = this.vendorList.length;
        if (this.totalItems > this.itemLimit) {
            this.ItemEndIndex = this.itemLimit;
        }
        else {
            this.ItemEndIndex = this.totalItems;
        }
    }
    onGlSearchFilter() {
        if (this.vendorData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.vendorData;
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
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'vendorReports');
    }
    onViewVendor(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.dialog.open(this.viewVendorRef, {
            panelClass: 'material',
            disableClose: true,
            data: dataRecord
        });
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'Vendor ID',
                datafield: 'vendorId',
                minwidth: 130,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Contact Person',
                datafield: 'contactPerson',
                minwidth: 250,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Phone No',
                datafield: 'phone1',
                minwidth: 170,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'VAT',
                datafield: 'vatorTin',
                minwidth: 160,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Percentage Tax',
                datafield: 'tax1',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'With Holding Tax',
                datafield: 'tax2',
                minwidth: 150,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                minwidth: 150,
                cellclassname: 'action-cell',
                cellsrenderer: (row, column, value) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="viewVendor(' + row + ')"><i class="fa fa-eye icon view" aria-hidden="true"></i></div>';
                },
                renderer: columnrenderer
            }];
        this.vendor = {};
        this.vendorCategoryId = "All";
        this.vendor.categoryName = "";
        this.reportsTypes = [
            { name: 'Active Vendors', type: 'Active' },
            { name: 'Inactive Vendors', type: 'Inactive' }
        ];
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendorService.getVendorByApartmentId(params).subscribe((res) => {
            this.allVendorListData = res;
            this.isVendorLoaded = true;
        }, error => {
        });
        let vendorParams = {
            LookupTypeId: 57
        };
        this.lookupService.getLookupValueByLookupTypeId(vendorParams).subscribe((res) => {
            this.vendorCategoryData = res.filter(item => {
                return item.isActive;
            });
        });
    }
};
VendorReportsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__["VendorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewVendorRef", { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
], VendorReportsComponent.prototype, "viewVendorRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__["jqxGridComponent"])
], VendorReportsComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onViewVendor', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], VendorReportsComponent.prototype, "onViewVendor", null);
VendorReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendor-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendor-reports.component.scss */ "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__["VendorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], VendorReportsComponent);

function viewVendor(row) {
    var event = new CustomEvent('onViewVendor', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.viewVendor = viewVendor;


/***/ }),

/***/ "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mandatory {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9tb2R1bGVzL2Ftcy92ZW5kb3IvY29tcG9uZW50cy92ZW5kb3Itc2V0dXAvdmVuZG9yLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2Ftcy92ZW5kb3IvY29tcG9uZW50cy92ZW5kb3Itc2V0dXAvdmVuZG9yLXNldHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvdmVuZG9yLXNldHVwL3ZlbmRvci1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5kYXRvcnl7XG4gIGNvbG9yOiByZWQ7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: VendorSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorSetupComponent", function() { return VendorSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");







let VendorSetupComponent = class VendorSetupComponent {
    constructor(injector, vendorService, lookupService, sharedService, cookieService) {
        this.injector = injector;
        this.vendorService = vendorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isVendorCategoryLoaded = false;
        this.isVendorCategorySubmitted = true;
        this.isVendorCategoryNew = false;
        this.isVendorCategoryUpdate = false;
        this.VendorCategory = "";
        this.VendorCategoryUpdateId = 0;
        this.alertMessage = "";
        this.isError = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    addNewVendorCategory() {
        this.VendorCategory = "";
        this.isVendorCategoryNew = true;
        this.isVendorCategoryUpdate = false;
    }
    updateVendorCategory(item) {
        this.isVendorCategoryUpdate = true;
        this.isVendorCategoryNew = false;
        this.VendorCategory = item.lookupValueName;
        this.VendorCategoryUpdateId = item.lookupValueId;
    }
    deleteVendorCategory(item) {
        this.isVendorCategoryLoaded = false;
        console.log(item);
        var params = {
            lookupValueId: item.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(params).subscribe((res) => {
            //this.vendorCategoryData.splice(index, 1);
            this.loadVendorCategory();
        });
    }
    showConfirmModal(form) {
        if (this.isVendorCategoryNew) {
            this.modalService.showCategoryModal(form);
        }
        else {
            this.submitVendorCategoryForm(form);
        }
    }
    showRemoveCategoryConfirmModal(item) {
        console.log("item", item);
        this.modalService.showConfirmModal(item);
    }
    removeCategoryBox() {
        this.isVendorCategoryNew = false;
        this.isVendorCategoryUpdate = false;
        this.isError = false;
    }
    getVendorsCount(id) {
        var data = this.vendorListData.filter(item => {
            return item.vendorCategoryId == id;
        });
        if (data === undefined || data.length === 0) {
            return 0;
        }
        else {
            return data.length;
        }
    }
    submitVendorCategoryForm(form) {
        this.isVendorCategorySubmitted = false;
        this.isError = false;
        if (this.isVendorCategoryNew) {
            let details = {
                "lookupTypeId": 57,
                "lookupValueName": this.VendorCategory,
                "description": this.VendorCategory,
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
                    let categoryParams = {
                        LookupTypeId: 57
                    };
                    this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
                        this.isVendorCategorySubmitted = true;
                        this.sharedService.setAlertMessage("Category added Successfully!");
                        this.vendorCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isVendorCategorySubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                    if (this.alertMessage === "addLookupValue Not Added as it already exist.") {
                        this.alertMessage = "Invalid action. " + details.lookupValueName + " vendor category already exist.";
                    }
                }
            });
        }
        else {
            let details = {
                "lookupValueId": this.VendorCategoryUpdateId,
                "lookupTypeId": 57,
                "lookupValueName": this.VendorCategory,
                "description": this.VendorCategory,
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
                    let categoryParams = {
                        LookupTypeId: 57
                    };
                    this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
                        this.isVendorCategorySubmitted = true;
                        this.sharedService.setAlertMessage("Category updated Successfully!");
                        this.vendorCategoryData = res.filter(item => {
                            return item.isActive;
                        });
                    });
                }
                else {
                    this.isVendorCategorySubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            });
        }
        this.VendorCategory = "";
    }
    loadVendorCategory() {
        let categoryParams = {
            LookupTypeId: 57
        };
        this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe((res) => {
            console.log("vendor category resp", res);
            this.vendorCategoryData = res.filter(item => {
                return item.isActive;
            });
            let vendorListParams = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.vendorService.getVendorByApartmentId(vendorListParams).subscribe((res) => {
                this.vendorListData = res;
                this.isVendorCategoryLoaded = true;
            }, error => {
            });
        });
    }
    ngOnInit() {
        this.loadVendorCategory();
        this.sharedService.newcategoryadd.subscribe(is_category_form => {
            if (is_category_form) {
                this.submitVendorCategoryForm(is_category_form);
            }
        });
        this.sharedService.unitlistdeleteindexcast.subscribe(item_id => {
            if (item_id) {
                this.deleteVendorCategory(item_id);
            }
        });
        //vendor category
    }
};
VendorSetupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_2__["VendorService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
VendorSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendor-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendor-setup.component.scss */ "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_2__["VendorService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], VendorSetupComponent);



/***/ }),

/***/ "./src/app/modules/ams/vendor/vendor-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/ams/vendor/vendor-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: VendorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorRoutingModule", function() { return VendorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/vendor-setup/vendor-setup.component */ "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts");
/* harmony import */ var _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/create-vendor/create-vendor.component */ "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts");
/* harmony import */ var _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vendor-reports/vendor-reports.component */ "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts");
/* harmony import */ var _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/all-vendors/all-vendors.component */ "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts");







const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_3__["VendorSetupComponent"] },
    { path: 'all-vendors', component: _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_6__["AllVendorsComponent"] },
    { path: 'all-vendors/:id', component: _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_6__["AllVendorsComponent"] },
    { path: 'create-vendor', component: _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_4__["CreateVendorComponent"] },
    { path: 'edit-vendor/:id', component: _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_4__["CreateVendorComponent"] },
    { path: 'reports', component: _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_5__["VendorReportsComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let VendorRoutingModule = class VendorRoutingModule {
};
VendorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VendorRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/vendor/vendor.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/ams/vendor/vendor.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3ZlbmRvci92ZW5kb3IuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/vendor/vendor.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/ams/vendor/vendor.component.ts ***!
  \********************************************************/
/*! exports provided: VendorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorComponent", function() { return VendorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let VendorComponent = class VendorComponent {
    constructor() { }
    ngOnInit() {
    }
};
VendorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vendor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/vendor.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vendor.component.scss */ "./src/app/modules/ams/vendor/vendor.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], VendorComponent);



/***/ }),

/***/ "./src/app/modules/ams/vendor/vendor.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/ams/vendor/vendor.module.ts ***!
  \*****************************************************/
/*! exports provided: VendorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendorModule", function() { return VendorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _vendor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor-routing.module */ "./src/app/modules/ams/vendor/vendor-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _vendor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vendor.component */ "./src/app/modules/ams/vendor/vendor.component.ts");
/* harmony import */ var _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vendor-setup/vendor-setup.component */ "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts");
/* harmony import */ var _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-vendor/create-vendor.component */ "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts");
/* harmony import */ var _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/vendor-reports/vendor-reports.component */ "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts");
/* harmony import */ var _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/all-vendors/all-vendors.component */ "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts");










let VendorModule = class VendorModule {
};
VendorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _vendor_component__WEBPACK_IMPORTED_MODULE_5__["VendorComponent"],
            _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_6__["VendorSetupComponent"],
            _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_7__["CreateVendorComponent"],
            _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_8__["VendorReportsComponent"],
            _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_9__["AllVendorsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _vendor_routing_module__WEBPACK_IMPORTED_MODULE_3__["VendorRoutingModule"]
        ]
    })
], VendorModule);



/***/ })

}]);
//# sourceMappingURL=modules-ams-vendor-vendor-module-es2015.js.map