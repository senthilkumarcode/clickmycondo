function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-visitor-user-visitor-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserVisitorComponentsCreateVisitorAddVisitorAddVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-visitor-wrapper\">\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\t<span *ngIf=\"!isEditVisitor\">Create Expected Visitor</span>\n    \t\t\t\t<span *ngIf=\"isEditVisitor\">Edit Expected Visitor</span>\n    \t\t\t</h5>\n    \t\t</div>\n\t\t\t<div *ngIf=\"showCancel\" class=\"float-right\">\n\t\t\t\t<a href=\"javascript:void(0)\" class=\"btn lime-green mt_5\" routerLink=\"/user/visitor/my-visitors\" routerLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\tCancel\n\t\t\t\t</a>\n\t\t\t</div>\n    \t\t<div class=\"float-right\" *ngIf=\"isArrayOne() && !isEditVisitor\" (click)=\"deleteVisitor()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isVisitorSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isVisitorSubmitted\">\n\n\t\t\t\t<form #addVisitorForm = \"ngForm\" name=\"addVisitorForm\" (ngSubmit)=\"submitAddVisitorForm(addVisitorForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Name<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" name=\"visitorName\" [(ngModel)]=\"visitor.expectedVisitorName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Count<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Count\" name=\"visitorCount\" [(ngModel)]=\"visitor.expectedVisitorCount\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Phone/Mobile<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"number\" (blur)=\"IsvalidatePhoneNo($event.target.value)\" class=\"form-control\" placeholder=\"Enter Number\" name=\"phoneNo\" [(ngModel)]=\"visitor.expectedVisitorPhone\">\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor In-time<span class=\"required\">*</span></label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorInTime\" [owlDateTime]=\"visitorInTime\" [owlDateTimeTrigger]=\"visitorInTime\" placeholder=\"Select In-Time\" [(ngModel)]=\"visitor.expectedVisitorInTime\" [disabled]=\"!isEditVisitor\">\n\t\t\t\t\t\t\t\t<owl-date-time #visitorInTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorInTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Visitor Out-time<span class=\"required\">*</span></label>\n\t\t\t                    <input class=\"form-control\" name=\"visitorOutTime\" [owlDateTime]=\"visitorOutTime\" [owlDateTimeTrigger]=\"visitorOutTime\" placeholder=\"Select Out-Time\" [min]=\"minExOutTime\" [(ngModel)]=\"visitor.expectedVisitorOutTime\" (ngModelChange)=\"expectedDurationChange(visitor.expectedVisitorInTime, visitor.expectedVisitorOutTime)\">\n\t\t\t\t\t\t\t\t<owl-date-time #visitorOutTime></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"visitorOutTime\">\n  \t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n  \t\t\t\t\t\t\t\t</div>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Expected Duration<span class=\"required\">*</span></label>\n\t\t\t                    <input type=\"text\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter Duration\" name=\"visitorDuration\" [(ngModel)]=\"visitor.expectedDuration\" [disabled]=\"true\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Type<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t        name=\"visitBy\" \n\t\t\t\t\t\t\t        id=\"visitBy\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"visitTypeId\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of visitByData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box radio-box\">\n\t\t\t\t\t\t\t\t<label>Expected Visit Category<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select \n\t\t\t\t\t\t\t\t\tname=\"visitByCategory\" \n\t\t\t\t\t\t\t\t\tid=\"visitByCategory\" \n\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"visitCategoryId\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of visitCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Purpose<span class=\"required\">*</span></label>\n\t\t\t                    <textarea  type=\"text\" class=\"form-control purpose-box\" placeholder=\"Enter purpose\" name=\"visitorpurpose\" [(ngModel)]=\"visitor.purpose\" required></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addVisitorForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n  \n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/create-visitor.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/create-visitor.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserVisitorComponentsCreateVisitorCreateVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"create-visitor-wrapper\">\n\t<ng-container *ngFor=\"let visitor of visitorArray; let i = index\">\n\t\t<app-add-visitor [index]=\"i\" [array]=\"visitorArray\" (outputParams) = \"getVisitorArray($event)\"></app-add-visitor>\n\t</ng-container>\n\t<!-- <a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addVisitor()\" *ngIf=\"!isEditVisitor\" [ngClass]=\"isMobileView() ? 'mobile' : ''\">\n\t\t<div class=\"icon\">+<span class=\"text d-sm-none ml-2\">Add Visitor</span></div>\n\t</a> -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/my-visitor/my-visitor.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/my-visitor/my-visitor.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserVisitorComponentsMyVisitorMyVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-visitor-wrapper\">\n\t\n\t<app-loader *ngIf=\"!isVisitorDataLoaded\"></app-loader>\n\n\n\t<div class=\"card table-card\" *ngIf=\"isVisitorDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>All Visitors <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"visitorData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/user/visitor/add-visitor\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\"\n\t\t\t\t\t[state]=\"{ data: 'user'}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Visitor</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-filter-box *ngIf=\"isVisitorDataLoaded\" [totalItems]=\"totalFilterItems\"  (outputParams) = \"getFilterData($event)\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<!-- <table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Visitor Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone Number <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('intime')\">In-time <span [ngClass]=\"getFieldOrderBy('intime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('outtime')\">Out-time <span [ngClass]=\"getFieldOrderBy('outtime')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('type')\">Visit Type <span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let visitor of visitorListData | simpleSearch: visitorData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" placement=\"right\" [ngbPopover]=\"popContent\" triggers=\"mouseenter:mouseleave\">\n\t\t\t\t      \t{{visitor.expectedVisitorName}}</a>\n\t\t\t\t      \t<ng-template #popContent>\n\t\t\t\t\t\t    <div class=\"pop-desp\">\n\t\t\t\t\t\t    \t<ul>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Visitor Count</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedVisitorCount}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t\t<li>\n\t\t\t\t\t\t    \t\t\t<h5>Expected Duration</h5>\n\t\t\t\t\t\t    \t\t\t<small>{{visitor.expectedDuration}}</small>\n\t\t\t\t\t\t    \t\t</li>\n\t\t\t\t\t\t    \t</ul>\n\t\t\t\t\t\t    </div>\n\t\t\t\t\t\t</ng-template>\n\t\t\t\t      </td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorPhone}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorInTime}}</td>\n\t\t\t\t      <td class=\"grey\">{{visitor.expectedVisitorOutTime}}</td>\n\t\t\t\t      <td class=\"grey text-capitalize\">{{getVisitType(visitor.visitTypeId)}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/user/visitor/edit-visitor/{{visitor.expectedVisitorId}}\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(i)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/user-visitor.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/user-visitor.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserUserVisitorUserVisitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/shared/services/shared-toaster.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/shared-toaster.service.ts ***!
    \***********************************************************/

  /*! exports provided: SharedToasterService */

  /***/
  function srcAppSharedServicesSharedToasterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedToasterService", function () {
      return SharedToasterService;
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


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SharedToasterService =
    /*#__PURE__*/
    function () {
      function SharedToasterService(snackBar) {
        _classCallCheck(this, SharedToasterService);

        this.snackBar = snackBar;
      }

      _createClass(SharedToasterService, [{
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action, {
            duration: 2000
          });
        }
      }]);

      return SharedToasterService;
    }();

    SharedToasterService.ctorParameters = function () {
      return [{
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    SharedToasterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])], SharedToasterService);
    /***/
  },

  /***/
  "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserVisitorComponentsCreateVisitorAddVisitorAddVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL2NvbXBvbmVudHMvY3JlYXRlLXZpc2l0b3IvYWRkLXZpc2l0b3IvYWRkLXZpc2l0b3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: AddVisitorComponent */

  /***/
  function srcAppUserUserVisitorComponentsCreateVisitorAddVisitorAddVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddVisitorComponent", function () {
      return AddVisitorComponent;
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


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/api/controllers/Visitor */
    "./src/app/api/controllers/Visitor.ts");
    /* harmony import */


    var _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/services/shared-toaster.service */
    "./src/app/shared/services/shared-toaster.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var AddVisitorComponent =
    /*#__PURE__*/
    function () {
      function AddVisitorComponent(router, route, userService, apartmentService, visitorService, lookupService, sharedService, cookieService, SharedToaster) {
        _classCallCheck(this, AddVisitorComponent);

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
        this.isError = false;
        this.errorMessage = "";
        this.visitor = {
          expectedVisitorInTime: ''
        };
        this.visitTypeId = "";
        this.showCancel = false;
        this.isValidphoneNumber = false;
        this.outputParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format('YYYY-MM-DD');
        this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
      }

      _createClass(AddVisitorComponent, [{
        key: "isArrayOne",
        value: function isArrayOne() {
          return this.visitorArray.length > 1 ? true : false;
        }
      }, {
        key: "deleteVisitor",
        value: function deleteVisitor() {
          this.visitorArray.splice(this.index, 1);
          this.outputParams.emit(this.visitorArray);
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
          var _this = this;

          if (!this.IsvalidatePhoneNo(this.visitor.expectedVisitorPhone)) return true;
          this.isVisitorSubmitted = true;
          this.isError = false;

          if (!this.isEditVisitor) {
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
              "visitorCategoryId": parseInt(this.visitCategoryId),
              "visitorsOrg": "string",
              "entryGateId": null,
              'apartmentBlockNumber': this.visitor.apartmentBlockNumber,
              'apartmentUnitNumber': this.visitor.apartmentBlockUnitNumber,
              "exitGateId": null,
              "purpose": this.visitor.purpose,
              "enteredBy": parseInt(this.cookieService.get('userId')),
              "isActive": true,
              "insertedBy": parseInt(this.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": null,
              "updatedOn": null
            };
            var params = {
              expectedVisitor: visitorDetails
            };
            this.visitorService.addExpectedVisitor(params).subscribe(function (res) {
              if (res.message) {
                _this.isVisitorSubmitted = true;

                _this.sharedService.setAlertMessage("Visitor added successfully");

                _this.router.navigate(['user/visitor/my-visitor']);
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
          } else {
            this.visitor.expectedDurationInHours = this.getDurationInHours(this.visitor.expectedVisitorInTime, this.visitor.expectedVisitorOutTime);
            var _visitorDetails = {
              "expectedVisitorId": parseInt(this.route.params['value'].id),
              "apartmentUnitId": this.apartmentUnitId,
              "apartmentId": parseInt(this.cookieService.get('apartmentId')),
              "expectedVisitorName": this.visitor.expectedVisitorName,
              "expectedVisitorCount": this.visitor.expectedVisitorCount,
              "expectedVisitorPhone": this.visitor.expectedVisitorPhone.toString(),
              "expectedVisitorInTime": new Date(this.visitor.expectedVisitorInTime).toISOString(),
              "expectedVisitorOutTime": new Date(this.visitor.expectedVisitorOutTime).toISOString(),
              "expectedDuration": this.visitor.expectedDurationInHours,
              "passNumber": this.visitor.passNumber,
              "meetingPersonId": 1,
              "visitTypeId": parseInt(this.visitTypeId),
              "visitorsOrg": "string",
              "entryGateId": null,
              'apartmentBlockNumber': this.visitor.apartmentBlockNumber,
              'apartmentUnitNumber': this.visitor.apartmentBlockUnitNumber,
              "exitGateId": null,
              "purpose": this.visitor.purpose,
              "enteredBy": parseInt(this.cookieService.get('userId')),
              "isActive": true,
              "insertedBy": this.visitor.insertedBy,
              "insertedOn": this.visitor.insertedOn,
              "updatedBy": parseInt(this.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "visitorCategoryId": parseInt(this.visitCategoryId)
            };
            var _params = {
              expectedVisitor: _visitorDetails
            };
            this.visitorService.updateExpectedVisitor(_params).subscribe(function (res) {
              if (res.message) {
                _this.isVisitorSubmitted = true;

                _this.sharedService.setAlertMessage("Visitor updated successfully");

                _this.router.navigate(['user/visitor/my-visitor']);
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
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.visitor = {};
          console.log('this.route', this.route.snapshot.routeConfig.path);

          if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
          }

          if (this.route.snapshot.routeConfig.path == 'add-visitor' || this.route.params['value'].id != undefined) {
            this.showCancel = true;
          }

          if (this.route.params['value'].id != undefined) {
            this.isEditVisitor = true;
            var _params2 = {
              expectedVisitorId: parseInt(this.route.params['value'].id)
            };
            this.visitorService.getExpectedVisitorById(_params2).subscribe(function (res) {
              _this2.visitor = res[0];
              _this2.visitor.purpose = '';
              _this2.visitTypeId = _this2.visitor.visitTypeId;
              _this2.visitCategoryId = _this2.visitor.visitorCategoryId;
              _this2.visitor.expectedDuration = _this2.getDuration(_this2.visitor.expectedVisitorInTime, _this2.visitor.expectedVisitorOutTime);
            }, function (error) {});
          }

          var visitParams = {
            LookupTypeId: 15
          }; //visit type

          this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
            _this2.visitByData = res;
          }, function (error) {});
          var params = {
            LookupTypeId: 9
          }; //visit category

          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            console.log(res);
          }, function (error) {});
          var visitCategoryParams = {
            LookupTypeId: 100
          };
          this.lookupService.getLookupValueByLookupTypeId(visitCategoryParams).subscribe(function (res) {
            _this2.visitCategoryData = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
          var apartmentUnitParams = {
            userId: parseInt(this.cookieService.get('userId'))
          };
          this.apartmentService.getApartmentBlockUnitByUserId(apartmentUnitParams).subscribe(function (res) {
            _this2.apartmentUnitId = res[0].apartmentBlockUnitId;
          }, function (error) {});
          this.visitor.expectedVisitorInTime = moment__WEBPACK_IMPORTED_MODULE_10__(new Date());
          this.minExOutTime = new Date(this.visitor.expectedVisitorInTime);
        }
      }, {
        key: "expectedDurationChange",
        value: function expectedDurationChange(date1, date2) {
          // if(this.minDate > moment(this.visitor.expectedVisitorInTime).format('YYYY-MM-DD')){
          //   console.log("min date");
          //   this.visitor.expectedVisitorInTime = undefined;
          //   this.SharedToaster.openSnackBar("Please Select valid Date",'');
          //   return;
          // }
          // if(this.minDate > moment(this.visitor.expectedVisitorOutTime).format('YYYY-MM-DD')){
          //   console.log(this.visitor.expectedVisitorOutTime);
          //   this.visitor.expectedVisitorOutTime = undefined;
          //   console.log(this.visitor.expectedVisitorOutTime);
          //   this.SharedToaster.openSnackBar("Please Select valid Date",'');
          //   return;
          // }
          console.log('this.visitor.expectedVisitorOutTime', this.visitor.expectedVisitorOutTime);
          this.visitor.expectedVisitorOutTime = moment__WEBPACK_IMPORTED_MODULE_10__(date2);
          this.visitor.expectedDuration = this.getDuration(date1, date2);
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
          console.log('isSingleDigit:', digit.toString().length, digit);

          if (digit <= 0) {
            return '00';
          } else {
            return digit.toString().length > 1 ? digit : '0' + digit;
          }
        }
      }]);

      return AddVisitorComponent;
    }();

    AddVisitorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_6__["VisitorService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
      }, {
        type: _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__["SharedToasterService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('index'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddVisitorComponent.prototype, "index", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('array'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddVisitorComponent.prototype, "visitorArray", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AddVisitorComponent.prototype, "outputParams", void 0);
    AddVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-visitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-visitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-visitor.component.scss */
      "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_6__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], _shared_services_shared_toaster_service__WEBPACK_IMPORTED_MODULE_7__["SharedToasterService"]])], AddVisitorComponent);
    /***/
  },

  /***/
  "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/user/user-visitor/components/create-visitor/create-visitor.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserVisitorComponentsCreateVisitorCreateVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL2NvbXBvbmVudHMvY3JlYXRlLXZpc2l0b3IvY3JlYXRlLXZpc2l0b3IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: CreateVisitorComponent */

  /***/
  function srcAppUserUserVisitorComponentsCreateVisitorCreateVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateVisitorComponent", function () {
      return CreateVisitorComponent;
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

    var CreateVisitorComponent =
    /*#__PURE__*/
    function () {
      function CreateVisitorComponent(router, route) {
        _classCallCheck(this, CreateVisitorComponent);

        this.router = router;
        this.route = route;
        this.visitorCount = 1;
        this.isEditVisitor = false;
      }

      _createClass(CreateVisitorComponent, [{
        key: "addVisitor",
        value: function addVisitor() {
          this.visitorCount++;
          this.visitorArray = Array(this.visitorCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }, {
        key: "getVisitorArray",
        value: function getVisitorArray(event) {
          this.visitorArray = event;
          this.visitorCount = this.visitorArray.length;
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
            this.isEditVisitor = true;
          }

          this.visitorArray = Array(this.visitorCount).fill(0).map(function (x, i) {
            return i;
          });
        }
      }]);

      return CreateVisitorComponent;
    }();

    CreateVisitorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    CreateVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-visitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-visitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/create-visitor/create-visitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-visitor.component.scss */
      "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], CreateVisitorComponent);
    /***/
  },

  /***/
  "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/user/user-visitor/components/my-visitor/my-visitor.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserVisitorComponentsMyVisitorMyVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL2NvbXBvbmVudHMvbXktdmlzaXRvci9teS12aXNpdG9yLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: MyVisitorComponent */

  /***/
  function srcAppUserUserVisitorComponentsMyVisitorMyVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyVisitorComponent", function () {
      return MyVisitorComponent;
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
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
    "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var MyVisitorComponent =
    /*#__PURE__*/
    function () {
      function MyVisitorComponent(router, injector, apartmentService, visitorService, lookupService, sharedService, cookieService, dialog) {
        _classCallCheck(this, MyVisitorComponent);

        this.router = router;
        this.injector = injector;
        this.apartmentService = apartmentService;
        this.visitorService = visitorService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.visitorData = "";
        this.isVisitorDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(MyVisitorComponent, [{
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
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this3 = this;

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
                _this3.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "getVisitType",
        value: function getVisitType(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.visitTypeData, function (item) {
            if (item.lookupValueId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName.toLowerCase();
          }
        }
      }, {
        key: "getPrintParams",
        value: function getPrintParams(event) {
          this.datagrid.exportdata(event, 'MyVisitorData');
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "showConfirmModal",
        value: function showConfirmModal(detail) {
          var _this4 = this;

          var data = this.datagrid.getrowdata(detail.rowId);
          var message = "Are you sure want to delete?";
          var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var type = data.type;
              var serviceName;

              if (type == 'Planned Visitor') {
                var params = {
                  expectedVisitorId: data.expectedVisitorId,
                  deleteBy: parseInt(_this4.cookieService.get('userId'))
                };
                serviceName = _this4.visitorService.deleteExpectedVisitorById(params);
              } else if (type == 'UnPlanned Visitor') {
                var params_ = {
                  visitorId: data.visitorId,
                  deleteBy: parseInt(_this4.cookieService.get('userId'))
                };
                serviceName = _this4.visitorService.deleteVisitorById(params_);
              }

              _this4.isVisitorDataLoaded = false;
              serviceName.subscribe(function (res) {
                _this4.visitorService.getAllUnplannedVisitors().subscribe(function (res) {
                  var data1 = res.filter(function (data) {
                    data.type = 'UnPlanned Visitor';
                    return data.isActive && data.apartmentUnitId == _this4.apartmentUnitId;
                  });

                  _this4.visitorService.getAllPlannedVisitors().subscribe(function (res) {
                    var data2 = res.filter(function (data) {
                      data.type = 'Planned Visitor';
                      return data.isActive && data.apartmentUnitId == _this4.apartmentUnitId;
                    });
                    var param = {
                      apartmentUnitId: _this4.apartmentUnitId
                    };

                    _this4.visitorService.getExpectedVisitorsByApartmentUnitId(param).subscribe(function (res) {
                      var data3 = res.filter(function (data) {
                        data.visitorName = data.expectedVisitorName;
                        data.visitorPhone = data.expectedVisitorPhone;
                        data.visitorInTime = data.expectedVisitorInTime;
                        data.visitorOutTime = data.expectedVisitorOutTime;
                        data.type = 'Planned Visitor';
                        data.showEdit = true;
                        return data.isActive;
                      });
                      var data_ = data2.concat(data1);
                      _this4.visitorListData = data3.concat(data_);
                      _this4.gridSourceData = {
                        localdata: _this4.visitorListData,
                        datatype: "array"
                      };
                      _this4.listData = new jqx.dataAdapter(_this4.gridSourceData);
                      _this4.totalItems = _this4.visitorListData.length;
                      _this4.isVisitorDataLoaded = true;
                    }, function (error) {});
                  }, function (error) {});
                }, function (error) {});
              }, function (error) {
                console.log(error);
              });
            }
          });
        }
      }, {
        key: "navigateTo",
        value: function navigateTo(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          var expectedVisitorId = dataRecord.expectedVisitorId;
          this.router.navigateByUrl('/user/visitor/edit-visitor/' + expectedVisitorId);
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
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

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
            text: 'Type',
            datafield: 'type',
            width: 100,
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
              return '<div class="jqx-custom-inner-cell">' + _this5.getDateTime(value) + '</div>';
            },
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Out-time',
            datafield: 'visitorOutTime',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + _this5.getDateTime(value) + '</div>';
            },
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Visit Type',
            datafield: 'visitTypeId',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + _this5.getVisitType(value) + '</div>';
            },
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Actions',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellsrenderer: function cellsrenderer(row) {
              var data = _this5.visitorListData[row];

              if (data.type == 'Planned Visitor' && data.showEdit) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="navigateTo(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmModal(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
              } else {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="showConfirmModal(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
              }
            },
            renderer: columnrenderer
          }];
          var apartmentUnitParams = {
            userId: parseInt(this.cookieService.get('userId'))
          };
          this.apartmentService.getApartmentBlockUnitByUserId(apartmentUnitParams).subscribe(function (res) {
            _this5.apartmentUnitId = res[0].apartmentBlockUnitId;
            var params = {
              apartmentUnitId: _this5.apartmentUnitId
            };
            console.log(_this5.apartmentUnitId);

            _this5.visitorService.getAllUnplannedVisitors().subscribe(function (res) {
              var data1 = res.filter(function (data) {
                data.type = 'UnPlanned Visitor';
                return data.isActive && data.apartmentUnitId == _this5.apartmentUnitId;
              });

              _this5.visitorService.getAllPlannedVisitors().subscribe(function (res) {
                var data2 = res.filter(function (data) {
                  data.type = 'Planned Visitor';
                  data.visitorId = null;
                  return data.isActive && data.apartmentUnitId == _this5.apartmentUnitId;
                });

                _this5.visitorService.getExpectedVisitorsByApartmentUnitId(params).subscribe(function (res) {
                  var data3 = res.filter(function (data) {
                    data.visitorName = data.expectedVisitorName;
                    data.visitorPhone = data.expectedVisitorPhone;
                    data.visitorInTime = data.expectedVisitorInTime;
                    data.visitorOutTime = data.expectedVisitorOutTime;
                    data.type = 'Planned Visitor';
                    data.visitorId = null;
                    data.showEdit = true;
                    return data.isActive;
                  });
                  var data_ = data2.concat(data1);
                  _this5.visitorListData = data3.concat(data_);
                  _this5.gridSourceData = {
                    localdata: _this5.visitorListData,
                    datatype: "array"
                  };
                  _this5.listData = new jqx.dataAdapter(_this5.gridSourceData);
                  _this5.totalItems = _this5.visitorListData.length;
                  _this5.isVisitorDataLoaded = true;
                }, function (error) {});
              }, function (error) {});
            }, function (error) {});
          }, function (error) {});
          var visitParams = {
            LookupTypeId: 15
          }; //get visit type

          this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
            _this5.visitTypeData = res;
          }, function (error) {});
        }
      }]);

      return MyVisitorComponent;
    }();

    MyVisitorComponent.ctorParameters = function () {
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
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_10__["jqxGridComponent"])], MyVisitorComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:showConfirmModal', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MyVisitorComponent.prototype, "showConfirmModal", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:navigateTo', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MyVisitorComponent.prototype, "navigateTo", null);
    MyVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-visitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./my-visitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/components/my-visitor/my-visitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./my-visitor.component.scss */
      "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_4__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]])], MyVisitorComponent);

    function navigateTo(row) {
      var event = new CustomEvent('navigateTo', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.navigateTo = navigateTo;

    function showConfirmModal(row) {
      var event = new CustomEvent('showConfirmModal', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.showConfirmModal = showConfirmModal;
    /***/
  },

  /***/
  "./src/app/user/user-visitor/user-visitor-routing.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/user-visitor/user-visitor-routing.module.ts ***!
    \******************************************************************/

  /*! exports provided: UserVisitorRoutingModule */

  /***/
  function srcAppUserUserVisitorUserVisitorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserVisitorRoutingModule", function () {
      return UserVisitorRoutingModule;
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


    var _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/create-visitor/create-visitor.component */
    "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts");
    /* harmony import */


    var _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/my-visitor/my-visitor.component */
    "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'my-visitor',
      pathMatch: 'full'
    }, {
      path: 'my-visitor',
      component: _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_4__["MyVisitorComponent"]
    }, {
      path: 'create-visitor',
      component: _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__["CreateVisitorComponent"]
    }, {
      path: 'add-visitor',
      component: _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__["CreateVisitorComponent"]
    }, {
      path: 'edit-visitor/:id',
      component: _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_3__["CreateVisitorComponent"]
    }, {
      path: '**',
      redirectTo: 'my-visitor',
      pathMatch: 'full'
    }];

    var UserVisitorRoutingModule = function UserVisitorRoutingModule() {
      _classCallCheck(this, UserVisitorRoutingModule);
    };

    UserVisitorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserVisitorRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user-visitor/user-visitor.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/user/user-visitor/user-visitor.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserUserVisitorUserVisitorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci12aXNpdG9yL3VzZXItdmlzaXRvci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/user-visitor/user-visitor.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/user/user-visitor/user-visitor.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserVisitorComponent */

  /***/
  function srcAppUserUserVisitorUserVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserVisitorComponent", function () {
      return UserVisitorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserVisitorComponent =
    /*#__PURE__*/
    function () {
      function UserVisitorComponent() {
        _classCallCheck(this, UserVisitorComponent);
      }

      _createClass(UserVisitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserVisitorComponent;
    }();

    UserVisitorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-visitor',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-visitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-visitor/user-visitor.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-visitor.component.scss */
      "./src/app/user/user-visitor/user-visitor.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserVisitorComponent);
    /***/
  },

  /***/
  "./src/app/user/user-visitor/user-visitor.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user/user-visitor/user-visitor.module.ts ***!
    \**********************************************************/

  /*! exports provided: UserVisitorModule */

  /***/
  function srcAppUserUserVisitorUserVisitorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserVisitorModule", function () {
      return UserVisitorModule;
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


    var _user_visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-visitor-routing.module */
    "./src/app/user/user-visitor/user-visitor-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _user_visitor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-visitor.component */
    "./src/app/user/user-visitor/user-visitor.component.ts");
    /* harmony import */


    var _components_create_visitor_add_visitor_add_visitor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/create-visitor/add-visitor/add-visitor.component */
    "./src/app/user/user-visitor/components/create-visitor/add-visitor/add-visitor.component.ts");
    /* harmony import */


    var _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/create-visitor/create-visitor.component */
    "./src/app/user/user-visitor/components/create-visitor/create-visitor.component.ts");
    /* harmony import */


    var _components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/my-visitor/my-visitor.component */
    "./src/app/user/user-visitor/components/my-visitor/my-visitor.component.ts");

    var UserVisitorModule = function UserVisitorModule() {
      _classCallCheck(this, UserVisitorModule);
    };

    UserVisitorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_components_my_visitor_my_visitor_component__WEBPACK_IMPORTED_MODULE_8__["MyVisitorComponent"], _components_create_visitor_create_visitor_component__WEBPACK_IMPORTED_MODULE_7__["CreateVisitorComponent"], _components_create_visitor_add_visitor_add_visitor_component__WEBPACK_IMPORTED_MODULE_6__["AddVisitorComponent"], _user_visitor_component__WEBPACK_IMPORTED_MODULE_5__["UserVisitorComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _user_visitor_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserVisitorRoutingModule"]],
      bootstrap: [_user_visitor_component__WEBPACK_IMPORTED_MODULE_5__["UserVisitorComponent"]]
    })], UserVisitorModule);
    /***/
  }
}]);
//# sourceMappingURL=user-visitor-user-visitor-module-es5.js.map