(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-vendor-vendor-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.html":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVendorComponentsAllVendorsAllVendorsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vendors-view-wrapper\">\n\n\t<app-loader *ngIf=\"!isVendorCategoryLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isVendorCategoryLoaded\">\n\n\t\t<form #viewVendorForm=\"ngForm\" name=\"viewVendorForm\" novalidate>\n\n\t\t\t<div class=\"card mb-30\">\n\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"float-left\">\n\t\t\t\t\t\t<h5>Select Category</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Category Type*</label>\n\t\t\t\t\t\t\t\t<select name=\"vendorCategoryId\" id=\"vendorCategoryId\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendorCategoryId\"\n\t\t\t\t\t\t\t\t\t(ngModelChange)=\"getVendorCategoryName(vendorCategoryId)\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option value=\"All\" >All</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of vendorCategoryData\" [value]=\"item.lookupValueId\">\n\t\t\t\t\t\t\t\t\t\t{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</ng-container>\n\n\t<app-loader *ngIf=\"!isVendorLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isVendorLoaded && isVendorCategorySelected && isVendorCategoryLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>All {{categoryName}} Vendors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<select (change)=\"onFilterByVendorTypeChange()\" name=\"vendorTypeFilter\" id=\"vendorTypeFilter\" class=\"form-control filter-width\" [(ngModel)]=\"selectedType\" required>\n\t\t\t\t\t\t<option value=\"All\" selected>Select Vendor Type</option>\n\t\t\t\t\t\t<option value=225 >Goods</option>\n\t\t\t\t\t\t<option value=226 >Services</option>\n        </select>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"VendorData\"> -->\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"vendorData\"\n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t</li>\n\t\t\t\t<!-- <li class=\"list-inline-item\">\n\t\t\t\t\t<a (click)=\"vendorPrint(vendor)\" class=\"btn trans-white mt_5\">\n\t\t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t\t\t\t\t\t<span>Print</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li> -->\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\n\t\t\t\t\t<a class=\"btn lime-green mt_5\" routerLink=\"/ams/vendor/create-vendor\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t\t<span>Add Vendor</span>\n\t\t\t\t\t</a>\n\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\n\t\t<!-- <div class=\"card-body p-0\">\n\n  \t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Vendor Id\n\t\t\t\t      \t<span (click)=\"sortUnitData('vendorId')\" [ngClass]=\"getFieldOrderBy('vendorId')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"ID\" [(ngModel)]=\"columnField['vendorId']\" (ngModelChange)=\"selectColInput('vendorId')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Vendor Name\n\t\t\t\t      \t<span (click)=\"sortUnitData('vendorName')\" [ngClass]=\"getFieldOrderBy('vendorName')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Vendor Name\" [(ngModel)]=\"columnField['vendorName']\" (ngModelChange)=\"selectColInput('vendorName')\" >\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\">Contact Person\n\t\t\t\t       \t<span (click)=\"sortUnitData('contactPerson')\" [ngClass]=\"getFieldOrderBy('contactPerson')\"></span>\n\t\t\t\t       \t<input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\" [(ngModel)]=\"columnField['contactPerson']\" (ngModelChange)=\"selectColInput('contactPerson')\" >\n\t\t\t\t       </th>\n\t\t\t\t      <th scope=\"col\">Email\n\t\t\t\t      \t<span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Phone No\n\t\t\t\t      \t<span (click)=\"sortUnitData('phone1')\" [ngClass]=\"getFieldOrderBy('phone1')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Phone No\" [(ngModel)]=\"columnField['phone1']\" (ngModelChange)=\"selectColInput('phone1')\" >\n\t\t\t\t      </th>\n\t\t\t\t       <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let vendor of vendorListData | simpleSearch: vendorData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\" [ngClass]=\"vendor.isActive ? 'active' : 'notactive'\">\n\t\t\t\t      <td class=\"name\">{{vendor.vendorId}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.vendorName}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.contactPerson}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{vendor.phone1}}</td>\n\t\t\t\t      <td class=\"simple-actions\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\" #v (click)=\"showVendorInfo(vendor)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \tplacement=\"top\" [ngbPopover]=\"popAddCheckInContent\" triggers=\"mouseenter:mouseleave\"\n\t\t\t\t      \trouterLink=\"/ams/vendor/edit-vendor/{{vendor.vendorId}}\"\n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showDeleteConfirmModal(vendor.vendorId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination\n\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n  \t\t</div> -->\n\n\t</div>\n\n\t<ng-template #viewVendorRef let-vendor>\n    \t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Vendor Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t  <div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t  <div class=\"media-body\">\n\t\t\t\t\t    <h5 class=\"mt-0\">{{vendor.vendorName}}</h5>\n\t\t\t\t\t    <p class=\"grey\">{{vendor.email}}</p>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor ID</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vendorId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Contact Person</h6>\n\t\t\t\t\t\t\t<p>{{vendor.contactPerson}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.phone1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Alternate No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.phone2}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Address</h6>\n\t\t\t\t\t\t\t\t<p>{{vendor.address1}}</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor Category</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vendorCategoryName}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor Type</h6>\n\t\t\t\t\t\t\t\t<p>{{vendor.vendorTypeName}}</p>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor Legal Type</h6>\n\t\t\t\t\t\t\t\t<p>{{vendor.vendorLegalTypeName}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">VAT No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vatorTin}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax1 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax2 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax2}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax3 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax3}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax4 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax4}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</ng-template>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"vendorTableList\" [columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid>\n\t\t</div>\n\t</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.html":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVendorComponentsCreateVendorCreateVendorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vendor-create-wrapper\">\n\n\t<form #addVendorForm=\"ngForm\" name=\"addVendorForm\" (ngSubmit)=\"addOrUpdateVendor(addVendorForm)\" novalidate>\n\n\t\t<div class=\"card mb-30\" id=\"accordion\">\n\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"remainder\">\n\t\t\t\t\t<h5>\n\t\t\t\t\t\t<span *ngIf=\"!isEditVendor\">Create Vendor</span>\n\t\t\t\t\t\t<span *ngIf=\"isEditVendor\">Update Vendor</span>\n\t\t\t\t\t</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"remainder\">\n\t\t\t\t\t<span>All fields with * are required.</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/vendor/all-vendors\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body pb-0\" [ngClass]=\"isError ? 'h-39' : 'h-0 pt-0'\">\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\t\t\t</div>\n\n\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t<app-loader *ngIf=\"isVendorSubmitted\"></app-loader>\n\n\t\t\t\t<ng-container *ngIf=\"!isVendorSubmitted\">\n\n\t\t\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#vendorCollapseOne\"\n\t\t\t\t\t\t\taria-expanded=\"true\" aria-controls=\"collapseOne\">General</li>\n\t\t\t\t\t\t<div id=\"vendorCollapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\"\n\t\t\t\t\t\t\tdata-parent=\"#accordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor name<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorName\" [(ngModel)]=\"vendor.vendorName\" required>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Contact Person</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"contactPerson\" [(ngModel)]=\"vendor.contactPerson\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Phone Number<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter value\" name=\"contactNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.phone1\" required>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>vendor Fax Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"faxNumber\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.fax\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"address\" [(ngModel)]=\"vendor.address1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Email</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" #emailId=\"ngModel\"\n\t\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'invalid-border' : emailId.invalid}\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter value\" name=\"email\" [(ngModel)]=\"vendor.email\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Alternate Contact Number</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter value\" name=\"alternateContact\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.phone2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>vendor Category<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"vendorCategory\" id=\"vendorCategory\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.vendorCategoryId\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of vendorCategoryList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>vendor Legal Type<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"vendorType\" id=\"vendorType\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.legalTypeId\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of vendorTypeList\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Type<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"legalType\" id=\"goods\" [(ngModel)]=\"vendorTypeId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"225\" type=\"radio\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"goods\">Goods</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"legalType\" id=\"services\" [(ngModel)]=\"vendorTypeId\"\n\t\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"226\" type=\"radio\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"services\">Services</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Status<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"vendorStatus\" id=\"active\" [(ngModel)]=\"vendorStatus\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"true\" type=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"active\">Active</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"vendorStatus\" id=\"inactive\" [(ngModel)]=\"vendorStatus\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"false\" type=\"radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"radio-inline\" for=\"inactive\">Inactive</label>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#vendorCollapseTwo\"\n\t\t\t\t\t\t\taria-expanded=\"true\" aria-controls=\"collapseOne\">Payment Details</li>\n\t\t\t\t\t\t<div id=\"vendorCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\"\n\t\t\t\t\t\t\tdata-parent=\"#accordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>VAT/TIN<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"vatorTin\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.vatorTin\" required>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax1</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax1\" [(ngModel)]=\"vendor.tax1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax2</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax2\" [(ngModel)]=\"vendor.tax2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax3</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax3\" [(ngModel)]=\"vendor.tax3\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Tax4</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorTax4\" [(ngModel)]=\"vendor.tax4\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>GL Account Type<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t\t\t\t<select name=\"accountType\" id=\"accountType\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"vendor.glaccountTypeId\" required>\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of glAccountListData\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t[value]=\"item.glaccountId\">{{ item.glaccountName }}</option>\n\t\t\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Notes1</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorNotes1\" [(ngModel)]=\"vendor.notes1\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Notes2</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorNotes2\" [(ngModel)]=\"vendor.notes2\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<li class=\"list-group-item collapsed\" data-toggle=\"collapse\" data-target=\"#vendorCollapseThree\"\n\t\t\t\t\t\t\taria-expanded=\"true\" aria-controls=\"collapseOne\">Bank Details</li>\n\t\t\t\t\t\t<div id=\"vendorCollapseThree\" class=\"collapse\" aria-labelledby=\"headingOne\"\n\t\t\t\t\t\t\tdata-parent=\"#accordion\">\n\t\t\t\t\t\t\t<div class=\"details\">\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Payee Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorPayeeName\" [(ngModel)]=\"vendor.payeeName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Account No</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankAccNo\" [(ngModel)]=\"vendor.accountNumber\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Name</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankName\" [(ngModel)]=\"vendor.bankName\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Branch</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankBranch\" [(ngModel)]=\"vendor.bankBranch\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t\t\t<label>Vendor Bank Code</label>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\"\n\t\t\t\t\t\t\t\t\t\t\t\tname=\"vendorBankCode\" [(ngModel)]=\"vendor.bankCode\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVendorForm.invalid\">Submit</button>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\n\t</form>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.html":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVendorComponentsVendorReportsVendorReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"!selected_report_type \" class=\"gl-other-reports-wrapper\">\n\n\t<h4 class=\"main-title-mini\">Select the reports</h4>\n\t<div class=\"card\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<div class=\"simple-lists\">\n\t\t\t\t<ng-container *ngFor=\"let report of reportsTypes; let i = index\">\n\t\t\t\t\t<a (click)=\"selectReport(report.type)\">{{report.name}}</a>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div class=\"vendors-view-wrapper\">\n\n\t<app-loader *ngIf=\"!isVendorLoaded\"></app-loader>\n\n\t<div class=\"card table-card\" *ngIf=\"isVendorLoaded && selected_report_type \">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>{{selected_report_type}} Vendors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<!-- <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"VendorData\"> -->\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"vendorData\"\n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t</li>\n\t\t\t\t<!-- <li class=\"list-inline-item\">\n\t\t\t\t\t<a (click)=\"showVendorInfo(vendor)\" class=\"btn trans-white mt_5\">\n\t\t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n\t\t\t\t\t\t<span>Print</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li> -->\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"vendorTableList\" [columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid>\n\t\t</div>\n\n\t\t<!-- <div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-checker table-resizable\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">Vendor Id\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('vendorId')\" [ngClass]=\"getFieldOrderBy('vendorId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"ID\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['vendorId']\" (ngModelChange)=\"selectColInput('vendorId')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Vendor Name\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('vendorName')\" [ngClass]=\"getFieldOrderBy('vendorName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Vendor Name\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['vendorName']\" (ngModelChange)=\"selectColInput('vendorName')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Contact Person\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('contactPerson')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('contactPerson')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Contact Person\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['contactPerson']\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"selectColInput('contactPerson')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Email\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Phone No\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('phone1')\" [ngClass]=\"getFieldOrderBy('phone1')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Phone No\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['phone1']\" (ngModelChange)=\"selectColInput('phone1')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let vendor of vendorList | simpleSearch: vendorData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{vendor.vendorId}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.vendorName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.contactPerson}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{vendor.phone1}}</td>\n\t\t\t\t\t\t<td class=\"simple-actions\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"showVendorInfo(vendor)\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon view\" name=\"eye\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div> -->\n\n\t</div>\n\n\t<ng-template #viewVendorRef let-vendor>\n\t\t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Vendor Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<div class=\"icon mr-4\"><img src=\"assets/images/user-icon.svg\" width=\"36\" /></div>\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h5 class=\"mt-0\">{{vendor.vendorName}}</h5>\n\t\t\t\t\t\t\t<p class=\"grey\">{{vendor.email}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-body lists\">\n\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Vendor ID</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vendorId}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Contact Person</h6>\n\t\t\t\t\t\t\t<p>{{vendor.contactPerson}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Phone No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.phone1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">VAT No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.vatorTin}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax1 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax1}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax2 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax2}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax3 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax3}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t<h6 class=\"mt-0\">Tax4 No</h6>\n\t\t\t\t\t\t\t<p>{{vendor.tax4}}</p>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-template>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.html":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVendorComponentsVendorSetupVendorSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"vendors-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isVendorCategoryLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isVendorCategoryLoaded\">\n\t\t<h4 class=\"main-title-mini\">Vendor Categories</h4>\n\t\t<ng-container *ngFor=\"let item of vendorCategoryData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/vendor/all-vendors/{{item.lookupValueId}}\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updateVendorCategory(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon del\" name=\"x\" (click)=\"showRemoveCategoryConfirmModal(item)\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.lookupValueName}}</h6>\n\t\t\t\t\t\t<p class=\"float-left\">{{getVendorsCount(item.lookupValueId)}} Vendor(s)</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewVendorCategory()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add New Category</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-30\" *ngIf=\"isVendorCategoryNew || isVendorCategoryUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isVendorCategoryNew\">Add Vendor Category</h6>\n    \t\t\t<h6 *ngIf=\"!isVendorCategoryNew\">Update Vendor Category</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeCategoryBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\n\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isVendorCategorySubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isVendorCategorySubmitted\">\n\n\t\t\t\t<form #addVendorCategoryForm = \"ngForm\" name=\"addVendorCategoryForm\" (ngSubmit)=\"showConfirmModal(addVendorCategoryForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Category Type<span class=\"mandatory\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"VendorCategory\" [(ngModel)]=\"VendorCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVendorCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/vendor.component.html":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/vendor.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsVendorVendorComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\n  vendor works!\n</p>\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.scss":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVendorComponentsAllVendorsAllVendorsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mandatory {\n  color: red;\n  font-size: 16px;\n}\n\n.filter-width {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvYWxsLXZlbmRvcnMvYWxsLXZlbmRvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvYWxsLXZlbmRvcnMvYWxsLXZlbmRvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5maWx0ZXItd2lkdGh7XG4gIHdpZHRoOiAyMDBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AllVendorsComponent */

    /***/
    function srcAppModulesAmsVendorComponentsAllVendorsAllVendorsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AllVendorsComponent", function () {
        return AllVendorsComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Vendor */
      "./src/app/api/controllers/Vendor.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

      var AllVendorsComponent = /*#__PURE__*/function () {
        function AllVendorsComponent(router, route, injector, dialog, vendorService, lookupService, sharedService, cookieService) {
          _classCallCheck(this, AllVendorsComponent);

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

        _createClass(AllVendorsComponent, [{
          key: "vendorPrint",
          value: function vendorPrint(vendor) {
            this.dialog.open(this.viewVendorRef, {
              panelClass: 'material',
              disableClose: true,
              data: vendor
            });
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'vendorData');
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this = this;

            if (this.vendorData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.vendorData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "getIndexParams",
          value: function getIndexParams(event) {
            this.ItemStartIndex = event.ItemStartIndex;
            this.ItemEndIndex = event.ItemEndIndex;
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
            if (!underscore__WEBPACK_IMPORTED_MODULE_9__["isEmpty"](event)) {
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
          key: "getVendorCategoryName",
          value: function getVendorCategoryName(id) {
            var _this2 = this;

            this.selectedType = 'All';
            underscore__WEBPACK_IMPORTED_MODULE_9__["each"](this.vendorCategoryData, function (item, index) {
              if (item.lookupValueId == parseInt(id)) {
                _this2.categoryName = item.lookupValueName;
              }

              _this2.isVendorCategorySelected = true;
            });

            if (id == "All") {
              this.categoryName = "";
            }

            this.isVendorLoaded = false;
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.vendorService.getVendorByApartmentId(params).subscribe(function (res) {
              if (id != "All") {
                _this2.vendorListData = res.filter(function (item) {
                  return item.isActive && item.vendorCategoryId == parseInt(id);
                });
              } else {
                _this2.vendorListData = res.filter(function (item) {
                  return item.isActive;
                });
              }

              var _iterator = _createForOfIteratorHelper(_this2.vendorListData),
                  _step;

              try {
                var _loop = function _loop() {
                  var vendor = _step.value;

                  var category = _this2.vendorCategoryData.find(function (x) {
                    return x.lookupValueId == vendor.vendorCategoryId;
                  });

                  if (category) {
                    vendor.vendorCategoryName = category.lookupValueName;
                  }

                  var legaltype = _this2.vendorLegalTypeList && _this2.vendorLegalTypeList.find(function (x) {
                    return x.lookupValueId == vendor.legalTypeId;
                  });

                  if (legaltype) {
                    vendor.vendorLegalTypeName = legaltype.lookupValueName;
                  }

                  if (vendor.vendorTypeId && vendor.vendorTypeId == "225") {
                    vendor.vendorTypeName = 'Goods';
                  }

                  if (vendor.vendorTypeId && vendor.vendorTypeId == "226") {
                    vendor.vendorTypeName = 'Services';
                  }
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              var arrangeVendorRawData = {
                localdata: _this2.vendorListData,
                datatype: "array"
              };
              _this2.vendorTableList = new jqx.dataAdapter(arrangeVendorRawData);
              _this2.isVendorLoaded = true;
              _this2.totalItems = _this2.vendorListData.length;

              if (_this2.totalItems > _this2.itemLimit) {
                _this2.ItemEndIndex = _this2.itemLimit;
              } else {
                _this2.ItemEndIndex = _this2.totalItems;
              }
            }, function (error) {});
          }
        }, {
          key: "showDeleteConfirmModal",
          value: function showDeleteConfirmModal(id) {
            this.modalService.showConfirmModal(id);
          }
        }, {
          key: "showVendorInfo",
          value: function showVendorInfo(vendor) {
            console.log("vendor ", vendor);
            this.dialog.open(this.viewVendorRef, {
              panelClass: 'material',
              disableClose: true,
              data: vendor
            });
          }
        }, {
          key: "isNoItemsAvailable",
          value: function isNoItemsAvailable() {
            return this.totalItems == 0 ? true : false;
          }
        }, {
          key: "dialogClose",
          value: function dialogClose() {
            this.dialogRef.close();
          }
        }, {
          key: "onEditVendor",
          value: function onEditVendor(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            var vendorId = dataRecord.vendorId;
            this.router.navigateByUrl('/ams/vendor/edit-vendor/' + vendorId);
          }
        }, {
          key: "onVendorDelete",
          value: function onVendorDelete(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            var vendorId = dataRecord.vendorId;
            this.modalService.showConfirmModal(vendorId);
          }
        }, {
          key: "onViewVendor",
          value: function onViewVendor(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            this.dialogRef = this.dialog.open(this.viewVendorRef, {
              panelClass: 'material',
              disableClose: true,
              data: dataRecord
            });
          }
        }, {
          key: "onFilterByVendorTypeChange",
          value: function onFilterByVendorTypeChange() {
            var _this3 = this;

            if (this.selectedType == 'All') {
              this.vendorFilterList = this.vendorListData;
              var arrangeVendorRawData = {
                localdata: this.vendorFilterList,
                datatype: "array"
              };
              this.vendorTableList = new jqx.dataAdapter(arrangeVendorRawData);
            } else {
              this.vendorFilterList = this.vendorListData.filter(function (x) {
                return x.vendorTypeId == _this3.selectedType;
              });
              var _arrangeVendorRawData = {
                localdata: this.vendorFilterList,
                datatype: "array"
              };
              this.vendorTableList = new jqx.dataAdapter(_arrangeVendorRawData);
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.selectedType = 'All';

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Vendor ID',
              datafield: 'vendorId',
              minwidth: 130,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
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
            }, {
              text: 'Vendor Category',
              datafield: 'vendorCategoryName',
              minwidth: 200,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Vendor Type',
              datafield: 'vendorTypeName',
              minwidth: 200,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Vendor Status',
              datafield: 'vendorStatus',
              minwidth: 200,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
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
            }, {
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
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="viewVendor(' + row + ')"><i class="fa fa-eye icon view" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="editVendorEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrenderer
            }];
            var params = {
              LookupTypeId: 57
            };
            this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
              _this4.isVendorCategoryLoaded = true;
              _this4.vendorCategoryData = res.filter(function (item) {
                return item.isActive;
              }); //vendor type

              var vendorTypeParams = {
                LookupTypeId: 59
              };

              _this4.lookupService.getLookupValueByLookupTypeId(vendorTypeParams).subscribe(function (res) {
                _this4.vendorLegalTypeList = res.filter(function (item) {
                  return item.isActive;
                });

                _this4.getVendorCategoryName(_this4.vendorCategoryId);

                if (_this4.route.params['value'].id != undefined) {
                  _this4.vendorCategoryId = "" + _this4.route.params['value'].id;

                  _this4.getVendorCategoryName(_this4.vendorCategoryId);
                }
              });
            }); // delete vendor

            this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
              if (id != null) {
                var params = {
                  vendorId: id,
                  deleteBy: parseInt(_this4.cookieService.get('userId'))
                };

                _this4.vendorService.deleteVendor(params).subscribe(function (res) {
                  underscore__WEBPACK_IMPORTED_MODULE_9__["each"](_this4.vendorListData, function (type) {
                    if (type.vendorId == id) {
                      type.isActive = false;
                    }
                  });
                  setTimeout(function () {
                    _this4.vendorListData = _this4.vendorListData.filter(function (type) {
                      return type.vendorId !== id;
                    });
                    _this4.totalItems = _this4.vendorListData.length;

                    _this4.sharedService.setAlertMessage("Vendor deleted Successfully");

                    _this4.sharedService.setUnitListDeleteIndex(null);
                  }, 500);
                }, function (error) {
                  console.log(error);
                });
              }
            });
          }
        }]);

        return AllVendorsComponent;
      }();

      AllVendorsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
        }];
      };

      AllVendorsComponent.propDecorators = {
        viewVendorRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["viewVendorRef", {
            "static": false
          }]
        }],
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        onEditVendor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onEditVendor', ['$event.detail']]
        }],
        onVendorDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onVendorDelete', ['$event.detail']]
        }],
        onViewVendor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onViewVendor', ['$event.detail']]
        }]
      };
      AllVendorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-vendors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./all-vendors.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./all-vendors.component.scss */
        "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_4__["VendorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], AllVendorsComponent);

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
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.scss":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVendorComponentsCreateVendorCreateVendorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".invalid-border {\n  border: 1px solid #e2385e !important;\n}\n\n.mandatory {\n  color: red;\n  font-size: 16px;\n}\n\n.remainder {\n  color: rgba(255, 0, 0, 0.8);\n  font-size: 10px;\n  padding: 5px 0px 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvY3JlYXRlLXZlbmRvci9jcmVhdGUtdmVuZG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csb0NBQUE7QUFDSDs7QUFFQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvY3JlYXRlLXZlbmRvci9jcmVhdGUtdmVuZG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmludmFsaWQtYm9yZGVye1xuICAgYm9yZGVyOiAxcHggc29saWQgI2UyMzg1ZSAhaW1wb3J0YW50O1xufVxuXG4ubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucmVtYWluZGVye1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC44KTtcbiAgICBmb250LXNpemU6MTBweDtcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XG4gIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: CreateVendorComponent */

    /***/
    function srcAppModulesAmsVendorComponentsCreateVendorCreateVendorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateVendorComponent", function () {
        return CreateVendorComponent;
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


      var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Accounts */
      "./src/app/api/controllers/Accounts.ts");
      /* harmony import */


      var src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/BankAccount */
      "./src/app/api/controllers/BankAccount.ts");
      /* harmony import */


      var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Vendor */
      "./src/app/api/controllers/Vendor.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

      var CreateVendorComponent = /*#__PURE__*/function () {
        function CreateVendorComponent(router, route, injector, accountsService, vendorService, bankAccountService, lookupService, sharedService, cookieService) {
          _classCallCheck(this, CreateVendorComponent);

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

        _createClass(CreateVendorComponent, [{
          key: "getCategoryName",
          value: function getCategoryName() {}
        }, {
          key: "showUpdateConfirmModal",
          value: function showUpdateConfirmModal(id) {
            this.modalService.showVendorUpdateModal(id);
          }
        }, {
          key: "addOrUpdateVendor",
          value: function addOrUpdateVendor(form) {
            if (this.isEditVendor) {
              this.showUpdateConfirmModal(form);
            } else {
              this.submitAddVendorForm(form);
            }
          }
        }, {
          key: "submitAddVendorForm",
          value: function submitAddVendorForm(form) {
            this.isVendorSubmitted = true;
            this.isError = false;

            if (!this.isEditVendor) {
              var bank_details = {
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
                "updatedOn": new Date().toISOString()
              };
              var params = {
                bankAccountDetails: bank_details
              };
              this.bankAccountService.addBankAccountDetails(params).subscribe(function (bank_res) {
                if (bank_res) {
                  //map vendor bankAccountDetailsId from resp
                  console.log("Bank details", bank_res);
                }
              }, function (error) {});
              var details = {
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
                "updatedOn": new Date().toISOString()
              };
              var vendorParams = {
                vendor: details
              }; // this.vendorService.addVendor(vendorParams).subscribe((res:any) => {
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
            } else {
              var _bank_details = {
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
                "updatedOn": new Date().toISOString()
              };
              var bankAccParams = {
                bankAccountDetails: _bank_details
              };
              this.bankAccountService.updateBankAccountDetails(bankAccParams).subscribe(function (bank_res) {
                if (bank_res) {}
              }, function (error) {});
              var _details = {
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
                "updatedOn": new Date().toISOString()
              }; // this.vendorService.updateVendor(vendorParams).subscribe((res:any) => {
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
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.vendor = {};
            this.vendor.glaccountTypeId = "";
            this.vendor.vendorCategoryId = "";
            this.vendor.legalTypeId = "";
            this.vendorTypeId = "";

            if (this.route.params['value'].id != undefined) {
              this.isEditVendor = true;
              this.isVendorSubmitted = true;
              this.sharedService.vendorupdate.subscribe(function (id) {
                if (id) {
                  _this5.submitAddVendorForm(id);
                }
              });
              var vendorIdParam = {
                vendorId: this.route.params['value'].id
              };
              this.vendorService.getVendorById(vendorIdParam).subscribe(function (res) {
                _this5.vendor = res[0];
                _this5.vendorTypeId = "" + _this5.vendor.vendorTypeId;

                if (_this5.vendor.email == " ") {
                  _this5.vendor.email = undefined;
                }

                _this5.isVendorSubmitted = false;
              }, function (error) {});

              if (this.vendor.bankAccountDetailsId) {
                var bankAccountDetailsIdParam = {
                  bankAccountDetailsId: this.vendor.bankAccountDetailsId
                };
                this.bankAccountService.getBankAccountDetailsByBankAccountDetailsId(bankAccountDetailsIdParam).subscribe(function (bank_res) {// need to map response in vendor bank
                }, function (error) {});
              }
            }

            var accountParams = {
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              groupId: 3
            };
            this.accountsService.getGlAccountsByGroupId(accountParams).subscribe(function (res) {
              _this5.glAccountListData = res;
            });
            var params = {
              LookupTypeId: 57
            }; //vendor Category

            this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
              _this5.vendorCategoryList = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
            var vendorParams = {
              LookupTypeId: 59
            }; //vendor type

            this.lookupService.getLookupValueByLookupTypeId(vendorParams).subscribe(function (res) {
              _this5.vendorTypeList = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
          }
        }]);

        return CreateVendorComponent;
      }();

      CreateVendorComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
        }, {
          type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"]
        }, {
          type: src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_4__["BankAccountService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
        }];
      };

      CreateVendorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-vendor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-vendor.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-vendor.component.scss */
        "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_5__["VendorService"], src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_4__["BankAccountService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])], CreateVendorComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.scss":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVendorComponentsVendorReportsVendorReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3ZlbmRvci9jb21wb25lbnRzL3ZlbmRvci1yZXBvcnRzL3ZlbmRvci1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: VendorReportsComponent */

    /***/
    function srcAppModulesAmsVendorComponentsVendorReportsVendorReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorReportsComponent", function () {
        return VendorReportsComponent;
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


      var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Vendor */
      "./src/app/api/controllers/Vendor.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

      var VendorReportsComponent = /*#__PURE__*/function () {
        function VendorReportsComponent(dialog, vendorService, lookupService, cookieService) {
          _classCallCheck(this, VendorReportsComponent);

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

        _createClass(VendorReportsComponent, [{
          key: "getIndexParams",
          value: function getIndexParams(event) {
            this.ItemStartIndex = event.ItemStartIndex;
            this.ItemEndIndex = event.ItemEndIndex;
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
          key: "showVendorInfo",
          value: function showVendorInfo(vendor) {
            console.log("working", vendor);
            this.dialog.open(this.viewVendorRef, {
              panelClass: 'material',
              disableClose: true,
              data: vendor
            });
          }
        }, {
          key: "isNoItemsAvailable",
          value: function isNoItemsAvailable() {
            return this.totalItems == 0 ? true : false;
          }
        }, {
          key: "selectReport",
          value: function selectReport(type) {
            this.vendorList = [];
            this.selected_report_type = type;

            if (type == 'Active') {
              this.vendorList = this.allVendorListData.filter(function (item) {
                return item.isActive;
              });
            } else {
              this.vendorList = this.allVendorListData.filter(function (item) {
                return item.isActive == false;
              });
            }

            var arrangeVendorRawData = {
              localdata: this.vendorList,
              datatype: "array"
            };
            this.vendorTableList = new jqx.dataAdapter(arrangeVendorRawData);
            this.totalItems = this.vendorList.length;

            if (this.totalItems > this.itemLimit) {
              this.ItemEndIndex = this.itemLimit;
            } else {
              this.ItemEndIndex = this.totalItems;
            }
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this6 = this;

            if (this.vendorData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.vendorData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this6.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'vendorReports');
          }
        }, {
          key: "onViewVendor",
          value: function onViewVendor(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            this.dialog.open(this.viewVendorRef, {
              panelClass: 'material',
              disableClose: true,
              data: dataRecord
            });
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
            }, {
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
            }, {
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
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="viewVendor(' + row + ')"><i class="fa fa-eye icon view" aria-hidden="true"></i></div>';
              },
              renderer: columnrenderer
            }];
            this.vendor = {};
            this.vendorCategoryId = "All";
            this.vendor.categoryName = "";
            this.reportsTypes = [{
              name: 'Active Vendors',
              type: 'Active'
            }, {
              name: 'Inactive Vendors',
              type: 'Inactive'
            }];
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId'))
            };
            this.vendorService.getVendorByApartmentId(params).subscribe(function (res) {
              _this7.allVendorListData = res;
              _this7.isVendorLoaded = true;
            }, function (error) {});
            var vendorParams = {
              LookupTypeId: 57
            };
            this.lookupService.getLookupValueByLookupTypeId(vendorParams).subscribe(function (res) {
              _this7.vendorCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            });
          }
        }]);

        return VendorReportsComponent;
      }();

      VendorReportsComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__["VendorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }];
      };

      VendorReportsComponent.propDecorators = {
        viewVendorRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["viewVendorRef", {
            "static": false
          }]
        }],
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        onViewVendor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onViewVendor', ['$event.detail']]
        }]
      };
      VendorReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vendor-reports.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vendor-reports.component.scss */
        "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_3__["VendorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], VendorReportsComponent);

      function viewVendor(row) {
        var event = new CustomEvent('onViewVendor', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.viewVendor = viewVendor;
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.scss":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.scss ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVendorComponentsVendorSetupVendorSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mandatory {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvdmVuZG9yL2NvbXBvbmVudHMvdmVuZG9yLXNldHVwL3ZlbmRvci1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3ZlbmRvci9jb21wb25lbnRzL3ZlbmRvci1zZXR1cC92ZW5kb3Itc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: VendorSetupComponent */

    /***/
    function srcAppModulesAmsVendorComponentsVendorSetupVendorSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorSetupComponent", function () {
        return VendorSetupComponent;
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


      var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Vendor */
      "./src/app/api/controllers/Vendor.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");

      var VendorSetupComponent = /*#__PURE__*/function () {
        function VendorSetupComponent(injector, vendorService, lookupService, sharedService, cookieService) {
          _classCallCheck(this, VendorSetupComponent);

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

        _createClass(VendorSetupComponent, [{
          key: "addNewVendorCategory",
          value: function addNewVendorCategory() {
            this.VendorCategory = "";
            this.isVendorCategoryNew = true;
            this.isVendorCategoryUpdate = false;
          }
        }, {
          key: "updateVendorCategory",
          value: function updateVendorCategory(item) {
            this.isVendorCategoryUpdate = true;
            this.isVendorCategoryNew = false;
            this.VendorCategory = item.lookupValueName;
            this.VendorCategoryUpdateId = item.lookupValueId;
          }
        }, {
          key: "deleteVendorCategory",
          value: function deleteVendorCategory(item) {
            var _this8 = this;

            this.isVendorCategoryLoaded = false;
            console.log(item);
            var params = {
              lookupValueId: item.lookupValueId,
              updateUserId: parseInt(this.cookieService.get('userId'))
            };
            this.lookupService.deleteLookupvalue(params).subscribe(function (res) {
              //this.vendorCategoryData.splice(index, 1);
              _this8.loadVendorCategory();
            });
          }
        }, {
          key: "showConfirmModal",
          value: function showConfirmModal(form) {
            if (this.isVendorCategoryNew) {
              this.modalService.showCategoryModal(form);
            } else {
              this.submitVendorCategoryForm(form);
            }
          }
        }, {
          key: "showRemoveCategoryConfirmModal",
          value: function showRemoveCategoryConfirmModal(item) {
            console.log("item", item);
            this.modalService.showConfirmModal(item);
          }
        }, {
          key: "removeCategoryBox",
          value: function removeCategoryBox() {
            this.isVendorCategoryNew = false;
            this.isVendorCategoryUpdate = false;
            this.isError = false;
          }
        }, {
          key: "getVendorsCount",
          value: function getVendorsCount(id) {
            var data = this.vendorListData.filter(function (item) {
              return item.vendorCategoryId == id;
            });

            if (data === undefined || data.length === 0) {
              return 0;
            } else {
              return data.length;
            }
          }
        }, {
          key: "submitVendorCategoryForm",
          value: function submitVendorCategoryForm(form) {
            var _this9 = this;

            this.isVendorCategorySubmitted = false;
            this.isError = false;

            if (this.isVendorCategoryNew) {
              var details = {
                "lookupTypeId": 57,
                "lookupValueName": this.VendorCategory,
                "description": this.VendorCategory,
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
                  var categoryParams = {
                    LookupTypeId: 57
                  };

                  _this9.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
                    _this9.isVendorCategorySubmitted = true;

                    _this9.sharedService.setAlertMessage("Category added Successfully!");

                    _this9.vendorCategoryData = res.filter(function (item) {
                      return item.isActive;
                    });
                  });
                } else {
                  _this9.isVendorCategorySubmitted = true;
                  _this9.isError = true;
                  _this9.alertMessage = res.errorMessage;

                  if (_this9.alertMessage === "addLookupValue Not Added as it already exist.") {
                    _this9.alertMessage = "Invalid action. " + details.lookupValueName + " vendor category already exist.";
                  }
                }
              });
            } else {
              var _details2 = {
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
              var _params = {
                lookupvalue: _details2
              };
              this.lookupService.updateLookupValue(_params).subscribe(function (res) {
                if (res.message) {
                  var categoryParams = {
                    LookupTypeId: 57
                  };

                  _this9.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
                    _this9.isVendorCategorySubmitted = true;

                    _this9.sharedService.setAlertMessage("Category updated Successfully!");

                    _this9.vendorCategoryData = res.filter(function (item) {
                      return item.isActive;
                    });
                  });
                } else {
                  _this9.isVendorCategorySubmitted = true;
                  _this9.isError = true;
                  _this9.alertMessage = res.errorMessage;
                }
              });
            }

            this.VendorCategory = "";
          }
        }, {
          key: "loadVendorCategory",
          value: function loadVendorCategory() {
            var _this10 = this;

            var categoryParams = {
              LookupTypeId: 57
            };
            this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
              console.log("vendor category resp", res);
              _this10.vendorCategoryData = res.filter(function (item) {
                return item.isActive;
              });
              var vendorListParams = {
                apartmentId: parseInt(_this10.cookieService.get('apartmentId'))
              };

              _this10.vendorService.getVendorByApartmentId(vendorListParams).subscribe(function (res) {
                _this10.vendorListData = res;
                _this10.isVendorCategoryLoaded = true;
              }, function (error) {});
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.loadVendorCategory();
            this.sharedService.newcategoryadd.subscribe(function (is_category_form) {
              if (is_category_form) {
                _this11.submitVendorCategoryForm(is_category_form);
              }
            });
            this.sharedService.unitlistdeleteindexcast.subscribe(function (item_id) {
              if (item_id) {
                _this11.deleteVendorCategory(item_id);
              }
            }); //vendor category
          }
        }]);

        return VendorSetupComponent;
      }();

      VendorSetupComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_2__["VendorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }];
      };

      VendorSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vendor-setup.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vendor-setup.component.scss */
        "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_2__["VendorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], VendorSetupComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/vendor-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/modules/ams/vendor/vendor-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: VendorRoutingModule */

    /***/
    function srcAppModulesAmsVendorVendorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorRoutingModule", function () {
        return VendorRoutingModule;
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


      var _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/vendor-setup/vendor-setup.component */
      "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts");
      /* harmony import */


      var _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/create-vendor/create-vendor.component */
      "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts");
      /* harmony import */


      var _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/vendor-reports/vendor-reports.component */
      "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts");
      /* harmony import */


      var _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/all-vendors/all-vendors.component */
      "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      }, {
        path: 'settings',
        component: _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_3__["VendorSetupComponent"]
      }, {
        path: 'all-vendors',
        component: _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_6__["AllVendorsComponent"]
      }, {
        path: 'all-vendors/:id',
        component: _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_6__["AllVendorsComponent"]
      }, {
        path: 'create-vendor',
        component: _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_4__["CreateVendorComponent"]
      }, {
        path: 'edit-vendor/:id',
        component: _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_4__["CreateVendorComponent"]
      }, {
        path: 'reports',
        component: _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_5__["VendorReportsComponent"]
      }, {
        path: '**',
        redirectTo: 'settings',
        pathMatch: 'full'
      }];

      var VendorRoutingModule = function VendorRoutingModule() {
        _classCallCheck(this, VendorRoutingModule);
      };

      VendorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VendorRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/vendor.component.scss":
    /*!**********************************************************!*\
      !*** ./src/app/modules/ams/vendor/vendor.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsVendorVendorComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3ZlbmRvci92ZW5kb3IuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/vendor.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/modules/ams/vendor/vendor.component.ts ***!
      \********************************************************/

    /*! exports provided: VendorComponent */

    /***/
    function srcAppModulesAmsVendorVendorComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorComponent", function () {
        return VendorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var VendorComponent = /*#__PURE__*/function () {
        function VendorComponent() {
          _classCallCheck(this, VendorComponent);
        }

        _createClass(VendorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VendorComponent;
      }();

      VendorComponent.ctorParameters = function () {
        return [];
      };

      VendorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vendor',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vendor.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/vendor/vendor.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vendor.component.scss */
        "./src/app/modules/ams/vendor/vendor.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], VendorComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/vendor/vendor.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/modules/ams/vendor/vendor.module.ts ***!
      \*****************************************************/

    /*! exports provided: VendorModule */

    /***/
    function srcAppModulesAmsVendorVendorModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VendorModule", function () {
        return VendorModule;
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


      var _vendor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vendor-routing.module */
      "./src/app/modules/ams/vendor/vendor-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _vendor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vendor.component */
      "./src/app/modules/ams/vendor/vendor.component.ts");
      /* harmony import */


      var _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/vendor-setup/vendor-setup.component */
      "./src/app/modules/ams/vendor/components/vendor-setup/vendor-setup.component.ts");
      /* harmony import */


      var _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/create-vendor/create-vendor.component */
      "./src/app/modules/ams/vendor/components/create-vendor/create-vendor.component.ts");
      /* harmony import */


      var _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/vendor-reports/vendor-reports.component */
      "./src/app/modules/ams/vendor/components/vendor-reports/vendor-reports.component.ts");
      /* harmony import */


      var _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/all-vendors/all-vendors.component */
      "./src/app/modules/ams/vendor/components/all-vendors/all-vendors.component.ts");

      var VendorModule = function VendorModule() {
        _classCallCheck(this, VendorModule);
      };

      VendorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_vendor_component__WEBPACK_IMPORTED_MODULE_5__["VendorComponent"], _components_vendor_setup_vendor_setup_component__WEBPACK_IMPORTED_MODULE_6__["VendorSetupComponent"], _components_create_vendor_create_vendor_component__WEBPACK_IMPORTED_MODULE_7__["CreateVendorComponent"], _components_vendor_reports_vendor_reports_component__WEBPACK_IMPORTED_MODULE_8__["VendorReportsComponent"], _components_all_vendors_all_vendors_component__WEBPACK_IMPORTED_MODULE_9__["AllVendorsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _vendor_routing_module__WEBPACK_IMPORTED_MODULE_3__["VendorRoutingModule"]]
      })], VendorModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-vendor-vendor-module-es5.js.map