function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helpdesk-helpdesk-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\t\t\t\t\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"{{report.menuName}}/{{report.lookupValueID}}\" \n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-edit-staff-wrapper\">\n\t\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Edit Staff</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isStaffSubmitted && !isStaffAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isStaffSubmitted && !isStaffAdded\">\n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitStaffForm(addStaffForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Category*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"CategoryType\" \n\t\t\t\t\t\t\t        id=\"CategoryType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"staff.category\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isStaffAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\">Staff added successfully!</h5>\n\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-setup-wrapper\">\n\n\t<h5 class=\"mb-3\">Add Ticket Category</h5>\n\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-body\">\n\t\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isStaffLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isStaffLoaded\">\n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitStaffForm(addStaffForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Ticket Type*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"staffType\" \n\t\t\t\t\t\t\t        id=\"staffType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"staffType\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Ticket Category*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"staffCategory\" [(ngModel)]=\"staffCategory\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<ul class=\"list-inline mt-25\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn lime-green mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isCategoryDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Private Category</h5>\n\t\t\t</div>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"categoryPrivateData\" (ngModelChange)=\"selectColInput('ticketId')\" >\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t<table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Category <span (click)=\"sortUnitData('status')\" [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Supervisor <span (click)=\"sortUnitData('subcategory')\" [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Level-1 <span (click)=\"sortUnitData('level1')\" [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Level-2 <span (click)=\"sortUnitData('level2')\" [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t      <th scope=\"col\">L1 Escdays<span (click)=\"sortUnitData('l1day')\" [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\">L2 Escdays<span (click)=\"sortUnitData('l2day')\" [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryPrivateListData | simpleSearch: categoryPrivateData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.supervisor_name}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.level1}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.level2}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.l1escdays}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.l2escdays}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<!-- <a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/helpdesk/edit-staff/{{category.lookupValueId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t  </a> -->\n\t\t\t\t\t\t  <a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"openDialog(category);\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=27;showConfirmModal(i);\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div>\n\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Common Category</h5>\n\t\t\t</div>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"categoryCommonData\">\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\n\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('status')\">Category <span [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('subcategory')\">Supervisor <span [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level1')\">Level-1 <span [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('level2')\">Level-2 <span [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('l1day')\">Escalation to L1 day<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('l2day')\">Escalation to L2day<span [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryCommonListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: categoryCommonData ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td class=\"grey\"></td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/helpdesk/edit-staff/{{category.lookupValueId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=26;showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>\n  helpdesk-unassigned works!\n</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-create-ticket-wrapper\">\n\t\n\t<ng-container *ngFor=\"let ticket of ticketArray; let i = index\">\n\t\t<app-add-ticket [index]=\"i\" [array]=\"ticketArray\" (outputParams) = \"getTicketArray($event)\"></app-add-ticket>\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskHelpdeskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXJlcG9ydHMvaGVscGRlc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: HelpdeskReportsComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskReportsComponent", function () {
      return HelpdeskReportsComponent;
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

    var HelpdeskReportsComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskReportsComponent(lookupService, sharedService, cookieService) {
        _classCallCheck(this, HelpdeskReportsComponent);

        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
      }

      _createClass(HelpdeskReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var details = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 87,
            MenuName: 'HelpdeskTracker'
          };
          this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe(function (res) {
            _this.reportDataList = res;
            _this.isDataLoaded = true;
          });
        }
      }]);

      return HelpdeskReportsComponent;
    }();

    HelpdeskReportsComponent.ctorParameters = function () {
      return [{
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    HelpdeskReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-reports.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], HelpdeskReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXNldHVwL2hlbHBkZXNrLWVkaXQtc3RhZmYvaGVscGRlc2stZWRpdC1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: HelpdeskEditStaffComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskEditStaffComponent", function () {
      return HelpdeskEditStaffComponent;
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
    /*! ../../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_staff_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../api/services/staff.service */
    "./src/app/api/services/staff.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var HelpdeskEditStaffComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskEditStaffComponent(router, route, userService, staffService, lookupService, cookieService) {
        _classCallCheck(this, HelpdeskEditStaffComponent);

        this.router = router;
        this.route = route;
        this.userService = userService;
        this.staffService = staffService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isStaffSubmitted = false;
        this.isStaffAdded = false;
        this.isError = false;
        this.errorMessage = "";
      }

      _createClass(HelpdeskEditStaffComponent, [{
        key: "submitStaffForm",
        value: function submitStaffForm(form) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.staff = {};
          this.staff.category = ""; //staff category

          this.lookupService.getLookupValueByLookupTypeId(8).subscribe(function (res) {
            _this2.staffCategoryData = res;
          }, function (error) {});
        }
      }]);

      return HelpdeskEditStaffComponent;
    }();

    HelpdeskEditStaffComponent.ctorParameters = function () {
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
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    HelpdeskEditStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-edit-staff',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-edit-staff.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-edit-staff.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_staff_service__WEBPACK_IMPORTED_MODULE_4__["StaffService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], HelpdeskEditStaffComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXNldHVwL2hlbHBkZXNrLXNldHVwLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts ***!
    \************************************************************************************/

  /*! exports provided: HelpdeskSetupComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskSetupComponent", function () {
      return HelpdeskSetupComponent;
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

    var HelpdeskSetupComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskSetupComponent(injector, dialog, userService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, HelpdeskSetupComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.categoryPrivateData = "";
        this.categoryCommonData = "";
        this.isCategoryDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isStaffLoaded = false;
        this.staffType = "";
        this.staffCategory = "";
        this.staffDeleteTypeId = "";
        this.errorMessage = "";
        this.isError = false;
        this.selectedInput = "";
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(HelpdeskSetupComponent, [{
        key: "openDialog",
        value: function openDialog(data) {
          this.modalService.showTicketEditModal(data);
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
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "submitStaffForm",
        value: function submitStaffForm(form) {
          var _this3 = this;

          this.isError = false; //common category

          if (this.staffType == "26") {
            this.staffTypeId = 17;
            var categoryAvailable = underscore__WEBPACK_IMPORTED_MODULE_8__["some"](this.categoryCommonListData, function (item) {
              return item.lookupValueName === _this3.staffCategory;
            });

            if (categoryAvailable) {
              this.isError = true;
              this.errorMessage = 'Category already available';
              this.isStaffLoaded = true;
            } else {
              this.isStaffLoaded = false;
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
                _this3.isStaffLoaded = true;
                _this3.isCategoryDataLoaded = false;

                _this3.lookupService.getLookupValueByLookupTypeId(_this3.staffTypeId).subscribe(function (res) {
                  var categoryCommonListData = res.filter(function (item) {
                    return item.isActive;
                  });
                  _this3.categoryCommonListData = categoryCommonListData;
                  _this3.isCategoryDataLoaded = true;
                }, function (error) {});
              }, function (error) {});
            }
          } else {
            this.staffTypeId = 17;
            var categoryAvailable = underscore__WEBPACK_IMPORTED_MODULE_8__["some"](this.categoryPrivateListData, function (item) {
              return item.lookupValueName === _this3.staffCategory;
            });

            if (categoryAvailable) {
              this.isError = true;
              this.errorMessage = 'Category already available';
              this.isStaffLoaded = true;
            } else {
              this.isStaffLoaded = false;
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
                _this3.isStaffLoaded = true;
                _this3.isCategoryDataLoaded = false;

                _this3.lookupService.getLookupValueByLookupTypeId(_this3.staffTypeId).subscribe(function (res) {
                  var categoryPrivateListData = res.filter(function (item) {
                    return item.isActive;
                  });
                  _this3.categoryPrivateListData = categoryPrivateListData;
                  _this3.isCategoryDataLoaded = true;
                }, function (error) {});
              }, function (error) {});
            }
          }
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(type) {
          this.selectedInput = type;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          //get all staff type
          this.lookupService.getLookupValueByLookupTypeId(7).subscribe(function (res) {
            _this4.staffTypeData = res;
            _this4.isStaffLoaded = true;
          }, function (error) {}); //get all private category

          this.lookupService.getLookupValueByLookupTypeId(16).subscribe(function (res) {
            var categoryPrivateListData = res.filter(function (item) {
              return item['isActive'] === true;
            });
            categoryPrivateListData.forEach(function (element) {
              element.lookupValueName === "Electrical" ? (element.supervisor_name = "David", element.level1 = "john", element.level2 = "daniel", element.l1escdays = 8, element.l2escdays = 5) : element.lookupValueName === "Painting" ? element.supervisor_name = "John" : element.lookupValueName === "Refrigerator" ? element.supervisor_name = "Sam" : '';
            });
            console.log(categoryPrivateListData);
            _this4.categoryPrivateListData = categoryPrivateListData; //get all common category

            _this4.lookupService.getLookupValueByLookupTypeId(17).subscribe(function (res) {
              var categoryCommonListData = res.filter(function (item) {
                return item.isActive;
              });
              _this4.categoryCommonListData = categoryCommonListData;
              _this4.isCategoryDataLoaded = true;
            }, function (error) {});
          }, function (error) {}); // delete lookupvalue

          this.sharedService.unitlistdeleteindexcast.subscribe(function (index) {
            if (index != null) {
              if (_this4.staffDeleteTypeId == "27") {
                var params = {
                  lookupValueId: _this4.categoryPrivateListData[index].id,
                  updateUserId: parseInt(_this4.cookieService.get('userId'))
                };
              } else {
                var params = {
                  lookupValueId: _this4.categoryCommonListData[index].id,
                  updateUserId: parseInt(_this4.cookieService.get('userId'))
                };
              }

              _this4.isCategoryDataLoaded = false;

              _this4.userService.deleteUserById(params).subscribe(function (res) {
                if (_this4.staffDeleteTypeId == "26") {
                  _this4.categoryPrivateListData.splice(index, 1);
                } else {
                  _this4.categoryCommonListData.splice(index, 1);
                }

                _this4.isCategoryDataLoaded = true;

                _this4.sharedService.setUnitListDeleteIndex(null);
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }]);

      return HelpdeskSetupComponent;
    }();

    HelpdeskSetupComponent.ctorParameters = function () {
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

    HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-setup.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], HelpdeskSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVuYXNzaWduZWQvaGVscGRlc2stdW5hc3NpZ25lZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: HelpdeskUnassignedComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskUnassignedComponent", function () {
      return HelpdeskUnassignedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelpdeskUnassignedComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskUnassignedComponent() {
        _classCallCheck(this, HelpdeskUnassignedComponent);
      }

      _createClass(HelpdeskUnassignedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpdeskUnassignedComponent;
    }();

    HelpdeskUnassignedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-unassigned',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-unassigned.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-unassigned.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpdeskUnassignedComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVwZGF0ZS10aWNrZXQvaGVscGRlc2stdXBkYXRlLXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: HelpdeskUpdateTicketComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskUpdateTicketComponent", function () {
      return HelpdeskUpdateTicketComponent;
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

    var HelpdeskUpdateTicketComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskUpdateTicketComponent(router, route) {
        _classCallCheck(this, HelpdeskUpdateTicketComponent);

        this.router = router;
        this.route = route;
        this.ticketCount = 1;
        this.isEditTicket = false;
      }

      _createClass(HelpdeskUpdateTicketComponent, [{
        key: "addTicket",
        value: function addTicket() {
          this.ticketCount++;
          this.ticketArray = Array(this.ticketCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }, {
        key: "getTicketArray",
        value: function getTicketArray(event) {
          this.ticketArray = event;
          this.ticketCount = this.ticketArray.length;
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 576;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.route.params['value'].id != undefined) {
            this.isEditTicket = true;
          }

          this.ticketArray = Array(this.ticketCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }]);

      return HelpdeskUpdateTicketComponent;
    }();

    HelpdeskUpdateTicketComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    HelpdeskUpdateTicketComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-update-ticket',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-update-ticket.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-update-ticket.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], HelpdeskUpdateTicketComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/helpdesk-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: HelpdeskRoutingModule */

  /***/
  function srcAppAmsHelpdeskHelpdeskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskRoutingModule", function () {
      return HelpdeskRoutingModule;
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


    var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/helpdesk-setup/helpdesk-setup.component */
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
    /* harmony import */


    var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */
    "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
    /* harmony import */


    var _shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component */
    "./src/app/shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component.ts");
    /* harmony import */


    var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */
    "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
    /* harmony import */


    var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/helpdesk-reports/helpdesk-reports.component */
    "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
    /* harmony import */


    var _shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/add-ticket/add-ticket.component */
    "./src/app/shared/components/add-ticket/add-ticket.component.ts");
    /* harmony import */


    var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"]
    }, {
      path: 'edit-staff/:id',
      component: _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskEditStaffComponent"]
    }, {
      path: 'add-ticket',
      component: _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskUpdateTicketComponent"]
    }, {
      path: 'edit-ticket/:id',
      component: _shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__["AddTicketComponent"]
    }, {
      path: 'all-tickets',
      component: _shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskAllTicketsComponent"]
    }, {
      path: 'unassigned',
      component: _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskUnassignedComponent"]
    }, {
      path: 'reports',
      component: _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var HelpdeskRoutingModule = function HelpdeskRoutingModule() {
      _classCallCheck(this, HelpdeskRoutingModule);
    };

    HelpdeskRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HelpdeskRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/helpdesk.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskHelpdeskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9oZWxwZGVzay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/helpdesk.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk.component.ts ***!
    \****************************************************/

  /*! exports provided: HelpdeskComponent */

  /***/
  function srcAppAmsHelpdeskHelpdeskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskComponent", function () {
      return HelpdeskComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelpdeskComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskComponent() {
        _classCallCheck(this, HelpdeskComponent);
      }

      _createClass(HelpdeskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpdeskComponent;
    }();

    HelpdeskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk.component.scss */
      "./src/app/ams/helpdesk/helpdesk.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpdeskComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/helpdesk.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk.module.ts ***!
    \*************************************************/

  /*! exports provided: HelpdeskModule */

  /***/
  function srcAppAmsHelpdeskHelpdeskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelpdeskModule", function () {
      return HelpdeskModule;
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


    var _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./helpdesk-routing.module */
    "./src/app/ams/helpdesk/helpdesk-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _helpdesk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./helpdesk.component */
    "./src/app/ams/helpdesk/helpdesk.component.ts");
    /* harmony import */


    var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/helpdesk-setup/helpdesk-setup.component */
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
    /* harmony import */


    var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */
    "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
    /* harmony import */


    var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */
    "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
    /* harmony import */


    var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/helpdesk-reports/helpdesk-reports.component */
    "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
    /* harmony import */


    var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");

    var HelpdeskModule = function HelpdeskModule() {
      _classCallCheck(this, HelpdeskModule);
    };

    HelpdeskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskComponent"], _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskSetupComponent"], _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskUpdateTicketComponent"], _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskUnassignedComponent"], _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskReportsComponent"], _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskEditStaffComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskRoutingModule"]],
      bootstrap: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskComponent"]]
    })], HelpdeskModule);
    /***/
  }
}]);
//# sourceMappingURL=helpdesk-helpdesk-module-es5.js.map