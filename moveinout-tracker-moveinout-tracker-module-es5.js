function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["moveinout-tracker-moveinout-tracker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveinMaintainMoveinMaintainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movein-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t</ul>\n\n\t<div class=\"card clear card-table\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>MoveIn <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n  \t\t\t\t\n  \t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">Block Details <span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('email')\">Email <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('inDate')\">Date <span [ngClass]=\"getFieldOrderBy('inDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('inTime')\">Time <span [ngClass]=\"getFieldOrderBy('inTime')\"></span></th>\n\t\t\t\t      <th class=\"text-center\" scope=\"col\">Actions</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t    <tr *ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInData ; let i = index\">\n\t\t\t\t      <td class=\"name\"><span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(movein.approvedBy)\"></span>{{movein.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockDetails(movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{movein.mobile}}</td>\n\t\t\t\t      <td class=\"grey\">{{movein.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{ getDate(movein.inDate) }}</td>\n\t\t\t\t      <td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveInDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveInDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveIn(movein)\" *ngIf=\"movein.approvedBy == null\">Approve/Reject</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" class=\"no-link grey\" *ngIf=\"movein.approvedBy != null\">Approved</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/edit-movein/{{movein.id}}\">Edit</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t\t    \n\t\t\t    </tbody>\n\n  \t\t\t</table>\n  \t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n  \t\t</div>\n\t\t\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveinReportsMoveinReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveinSetupMoveinSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movein-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>General</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Foreign Nationals</li>\n\t</ul>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card clear card-table\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Documents required</h5>\n\t    \t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('description')\">Name<span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('isMandate')\">Is Mandatory <span [ngClass]=\"getFieldOrderBy('isMandate')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('owner')\">Owner <span [ngClass]=\"getFieldOrderBy('owner')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('tenant')\">Tenant<span [ngClass]=\"getFieldOrderBy('tenant')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('type')\">Type<span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let document of documentDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t\t    \t<td class=\"name\">{{document.description}}</td>\n\t\t\t\t\t    \t<td class=\"name\">{{getStatus(document.isMandate)}}</td>\n\t\t\t\t\t    \t<td>\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"document.owner\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t\t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t     \t </td>\n\t\t\t\t\t\t\t <td>\n\t\t\t\t\t\t\t\t <label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t \t<input type=\"checkbox\" [(ngModel)]=\"document.tenant\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t \t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t </label>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"name\">\n\t\t\t\t\t\t\t\t<span class=\"dots rt-3\" [ngClass]=\"getDocumentType(document.documentTypeId)\"></span>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveoutMaintainMoveoutMaintainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"moveout-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t</ul>\n\n\t<div class=\"card clear card-table\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>MoveOut <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveOutData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n  \t\t\t\t\n  \t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('name')\">Name <span [ngClass]=\"getFieldOrderBy('name')\"></span></th>\n\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('apartmentBlockNumber')\">Block Details <span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Phone <span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('email')\">Email <span [ngClass]=\"getFieldOrderBy('email')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('inDate')\">Date <span [ngClass]=\"getFieldOrderBy('inDate')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('inTime')\">Time <span [ngClass]=\"getFieldOrderBy('inTime')\"></span></th>\n\t\t\t\t      <th class=\"text-center\" scope=\"col\">Actions</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t    <tr *ngFor=\"let moveout of moveOutDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveOutData ; let i = index\">\n\t\t\t\t      <td class=\"name\"><span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(moveout.approvedBy)\"></span>{{moveout.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{getBlockDetails(moveout.apartmentBlockUnitId)}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.mobile}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{ getDate(moveout.outDate) }}</td>\n\t\t\t\t      <td class=\"grey\">{{ getTime(moveout.outTime) }}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveOutDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveOutDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"showDuesInfo(moveout)\" *ngIf=\"moveout.approvedBy == null\">Approve/Reject</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" class=\"no-link grey\" *ngIf=\"moveout.approvedBy != null\">Approved</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/edit-moveout/{{moveout.id}}\">Edit</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t\t    \n\t\t\t    </tbody>\n\n  \t\t\t</table>\n  \t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n  \t\t</div>\n\t\t\n\t</div>\n\n\t<ng-template #viewMoveoutUserRef let-moveout>\n\t\t<div class=\"user-info\">\n\t\t\t<div class=\"close-icon\" mat-dialog-close>\n\t\t\t\t<i-feather class=\"icon del\" name=\"x\" width=\"20\"></i-feather>\n\t\t\t</div>\n\t\t\t<div class=\"title\">\n\t\t\t\t<h5>Dues Info</h5>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t\t<app-loader *ngIf=\"!isMoveOutSubmitted\" class=\"m-3\"></app-loader>\n\n\t\t\t\t\t<div class=\"row\" *ngIf=\"isMoveOutSubmitted && isError\">\n\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t<h5 class=\"p-3t tc-red\">{{alertMessage}}</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<ng-container *ngIf=\"isMoveOutSubmitted\">\n\n\t\t\t\t\t\t<div class=\"d-lists\">\n\t\t\t\t\t\t\t<h6 class=\"head\">All Penalities</h6>\n\t\t\t\t\t\t\t<div class=\"symbol\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon\" name=\"check\" width=\"20\" [ngClass]=\"moveout.noDue ? 'valid' : ''\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"d-lists\">\n\t\t\t\t\t\t\t<h6 class=\"head\">All Dues</h6>\n\t\t\t\t\t\t\t<div class=\"symbol\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon\" name=\"check\" width=\"20\" [ngClass]=\"moveout.noDue ? 'valid' : ''\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 text-center\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue m-4\" [disabled]=\"!moveout.noDue\" (click)=\"approveMoveOut(moveout)\">Approve</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</ng-container>\n\n\t\t\t\t</div>\n\t\t\t</div>\n    \t</div>\n\t</ng-template>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/moveinout-tracker.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/moveinout-tracker.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerMoveinoutTrackerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinMaintainMoveinMaintainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1tYWludGFpbi9tb3ZlaW4tbWFpbnRhaW4uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: MoveinMaintainComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinMaintainMoveinMaintainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinMaintainComponent", function () {
      return MoveinMaintainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/move-in-out.service */
    "./src/app/api/services/move-in-out.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
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
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var MoveinMaintainComponent =
    /*#__PURE__*/
    function () {
      function MoveinMaintainComponent(moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, MoveinMaintainComponent);

        this.moveInOutService = moveInOutService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.moveInData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.isMoveInSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
      }

      _createClass(MoveinMaintainComponent, [{
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
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var timeData = moment__WEBPACK_IMPORTED_MODULE_9__(time, 'HH:mm:ss').toDate();
          return moment__WEBPACK_IMPORTED_MODULE_9__(timeData).format('HH:mm A');
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "getBlockDetails",
        value: function getBlockDetails(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].apartmentBlockNumber + ' ' + data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getApproveStatus",
        value: function getApproveStatus(data) {
          if (data == null) return 'high';else return 'low';
        }
      }, {
        key: "approveMoveIn",
        value: function approveMoveIn(data) {
          var _this = this;

          var moveInData = data;
          moveInData.approvedBy = parseInt(this.cookieService.get('userId'));
          moveInData.approvedDate = new Date().toISOString();
          this.isMoveInSubmitted = false;
          this.moveInOutService.updateMoveIn(moveInData).subscribe(function (res) {
            if (res.message) {
              _this.isMoveInSubmitted = true;

              _this.sharedService.setAlertMessage("Movein approved successfully");
            } else {
              _this.isMoveInSubmitted = true;
              _this.isError = true;
              _this.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this.isMoveInSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.moveInOutService.getMoveInByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this2.moveInDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this2.totalItems = _this2.moveInDataList.length;

            if (_this2.totalItems > _this2.itemLimit) {
              _this2.ItemEndIndex = _this2.itemLimit;
            } else {
              _this2.ItemEndIndex = _this2.totalItems;
            }

            _this2.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this2.blockUnitData = res;
          });
        }
      }]);

      return MoveinMaintainComponent;
    }();

    MoveinMaintainComponent.ctorParameters = function () {
      return [{
        type: _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    MoveinMaintainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-maintain',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movein-maintain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movein-maintain.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], MoveinMaintainComponent);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinReportsMoveinReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1yZXBvcnRzL21vdmVpbi1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MoveinReportsComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinReportsMoveinReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinReportsComponent", function () {
      return MoveinReportsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MoveinReportsComponent =
    /*#__PURE__*/
    function () {
      function MoveinReportsComponent() {
        _classCallCheck(this, MoveinReportsComponent);
      }

      _createClass(MoveinReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoveinReportsComponent;
    }();

    MoveinReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-reports',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movein-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movein-reports.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MoveinReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinSetupMoveinSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1zZXR1cC9tb3ZlaW4tc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: MoveinSetupComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinSetupMoveinSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinSetupComponent", function () {
      return MoveinSetupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/move-in-out.service */
    "./src/app/api/services/move-in-out.service.ts");
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
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_6__);

    var MoveinSetupComponent =
    /*#__PURE__*/
    function () {
      function MoveinSetupComponent(moveInOutService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, MoveinSetupComponent);

        this.moveInOutService = moveInOutService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isMobile = false;
        this.isDataLoaded = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
      }

      _createClass(MoveinSetupComponent, [{
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
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "getStatus",
        value: function getStatus(value) {
          if (value) {
            return 'YES';
          } else {
            return 'NO';
          }
        }
      }, {
        key: "getDocumentType",
        value: function getDocumentType(priorityId) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.documentTypeDataList, function (item) {
            if (item.lookupValueId === priorityId) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].lookupValueName == 'General' ? 'low' : 'medium';
          }
        }
      }, {
        key: "updateDocType",
        value: function updateDocType(document) {
          var _this3 = this;

          setTimeout(function () {
            _this3.isDataLoaded = false;
            var details = {
              "id": parseInt(document.id),
              "description": document.description,
              "documentTypeId": parseInt(document.documentTypeId),
              "owner": document.owner,
              "tenant": document.tenant,
              "isMoveIn": document.isMoveIn,
              "comments": document.comments,
              "isMandate": document.isMandate,
              "isActive": document.isActive,
              "insertedBy": parseInt(_this3.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(_this3.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "apartmentId": parseInt(_this3.cookieService.get('apartmentId'))
            };

            _this3.moveInOutService.updateMoveInOutConfig(details).subscribe(function (res) {
              if (res.message) {
                _this3.isDataLoaded = true;

                _this3.sharedService.setAlertMessage("MoveIn Configuration updated successfully");
              } else {
                _this3.isDataLoaded = true;
              }
            }, function (error) {
              _this3.isDataLoaded = true;
            });
          }, 1000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.moveInOutService.getMoveInOutConfigByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this4.documentDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this4.totalItems = _this4.documentDataList.length;

            if (_this4.totalItems > _this4.itemLimit) {
              _this4.ItemEndIndex = _this4.itemLimit;
            } else {
              _this4.ItemEndIndex = _this4.totalItems;
            }

            _this4.isDataLoaded = true;
          }, function (error) {
            console.log(error);
          }); //document type

          this.lookupService.getLookupValueByLookupTypeId(72).subscribe(function (res) {
            _this4.documentTypeDataList = res.filter(function (item) {
              return item.isActive;
            });
          }, function (error) {});
        }
      }]);

      return MoveinSetupComponent;
    }();

    MoveinSetupComponent.ctorParameters = function () {
      return [{
        type: _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    MoveinSetupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-setup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movein-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movein-setup.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], MoveinSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveoutMaintainMoveoutMaintainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVvdXQtbWFpbnRhaW4vbW92ZW91dC1tYWludGFpbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: MoveoutMaintainComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveoutMaintainMoveoutMaintainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveoutMaintainComponent", function () {
      return MoveoutMaintainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/move-in-out.service */
    "./src/app/api/services/move-in-out.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/underscore.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

    var MoveoutMaintainComponent =
    /*#__PURE__*/
    function () {
      function MoveoutMaintainComponent(injector, dialog, moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, MoveoutMaintainComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.moveInOutService = moveInOutService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.moveOutData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.isMoveOutSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
      }

      _createClass(MoveoutMaintainComponent, [{
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
            return this.unitOrder ? 'desc' : 'asc';
          } else return '';
        }
      }, {
        key: "getDate",
        value: function getDate(date) {
          return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var timeData = moment__WEBPACK_IMPORTED_MODULE_10__(time, 'HH:mm:ss').toDate();
          return moment__WEBPACK_IMPORTED_MODULE_10__(timeData).format('HH:mm A');
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isItemsAvailable",
        value: function isItemsAvailable() {
          return this.totalItems > 0 ? true : false;
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "getBlockDetails",
        value: function getBlockDetails(id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            return data[0].apartmentBlockNumber + ' ' + data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getApproveStatus",
        value: function getApproveStatus(data) {
          if (data == null) return 'high';else return 'low';
        }
      }, {
        key: "showDuesInfo",
        value: function showDuesInfo(data) {
          this.dialogRef = this.dialog.open(this.viewMoveoutUserRef, {
            panelClass: 'material',
            disableClose: true,
            data: data
          });
        }
      }, {
        key: "approveMoveOut",
        value: function approveMoveOut(data) {
          var _this5 = this;

          var moveOutData = data;
          moveOutData.approvedBy = parseInt(this.cookieService.get('userId'));
          moveOutData.approvedDate = new Date().toISOString();
          this.isMoveOutSubmitted = false;
          this.moveInOutService.updateMoveOut(moveOutData).subscribe(function (res) {
            if (res.message) {
              _this5.isMoveOutSubmitted = true;

              _this5.dialogRef.close();

              _this5.sharedService.setAlertMessage("Moveout approved successfully");
            } else {
              _this5.isMoveOutSubmitted = true;
              _this5.isError = true;
              _this5.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this5.isMoveOutSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.moveInOutService.getMoveOutByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this6.moveOutDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this6.totalItems = _this6.moveOutDataList.length;

            if (_this6.totalItems > _this6.itemLimit) {
              _this6.ItemEndIndex = _this6.itemLimit;
            } else {
              _this6.ItemEndIndex = _this6.totalItems;
            }

            _this6.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this6.blockUnitData = res;
          });
        }
      }]);

      return MoveoutMaintainComponent;
    }();

    MoveoutMaintainComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("viewMoveoutUserRef", {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])], MoveoutMaintainComponent.prototype, "viewMoveoutUserRef", void 0);
    MoveoutMaintainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moveout-maintain',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./moveout-maintain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./moveout-maintain.component.scss */
      "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]])], MoveoutMaintainComponent);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/moveinout-tracker-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/moveinout-tracker-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: MoveinoutTrackerRoutingModule */

  /***/
  function srcAppAmsMoveinoutTrackerMoveinoutTrackerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinoutTrackerRoutingModule", function () {
      return MoveinoutTrackerRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/movein-setup/movein-setup.component */
    "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts");
    /* harmony import */


    var _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/movein-maintain/movein-maintain.component */
    "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts");
    /* harmony import */


    var _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/moveout-maintain/moveout-maintain.component */
    "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts");
    /* harmony import */


    var _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/movein-reports/movein-reports.component */
    "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts");
    /* harmony import */


    var _user_user_moveinout_tracker_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../user/user-moveinout-tracker/components/user-movein/user-movein.component */
    "./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.ts");
    /* harmony import */


    var _user_user_moveinout_tracker_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../user/user-moveinout-tracker/components/user-moveout/user-moveout.component */
    "./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_3__["MoveinSetupComponent"]
    }, {
      path: 'movein',
      component: _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_4__["MoveinMaintainComponent"]
    }, {
      path: 'edit-movein/:id',
      component: _user_user_moveinout_tracker_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_7__["UserMoveinComponent"]
    }, {
      path: 'moveout',
      component: _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_5__["MoveoutMaintainComponent"]
    }, {
      path: 'edit-moveout/:id',
      component: _user_user_moveinout_tracker_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_8__["UserMoveoutComponent"]
    }, {
      path: 'reports',
      component: _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_6__["MoveinReportsComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var MoveinoutTrackerRoutingModule = function MoveinoutTrackerRoutingModule() {
      _classCallCheck(this, MoveinoutTrackerRoutingModule);
    };

    MoveinoutTrackerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MoveinoutTrackerRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/moveinout-tracker.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/moveinout-tracker.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerMoveinoutTrackerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9tb3ZlaW5vdXQtdHJhY2tlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/moveinout-tracker.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/moveinout-tracker.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MoveinoutTrackerComponent */

  /***/
  function srcAppAmsMoveinoutTrackerMoveinoutTrackerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinoutTrackerComponent", function () {
      return MoveinoutTrackerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MoveinoutTrackerComponent =
    /*#__PURE__*/
    function () {
      function MoveinoutTrackerComponent() {
        _classCallCheck(this, MoveinoutTrackerComponent);
      }

      _createClass(MoveinoutTrackerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoveinoutTrackerComponent;
    }();

    MoveinoutTrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moveinout-tracker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./moveinout-tracker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/moveinout-tracker.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./moveinout-tracker.component.scss */
      "./src/app/ams/moveinout-tracker/moveinout-tracker.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MoveinoutTrackerComponent);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/moveinout-tracker.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/moveinout-tracker.module.ts ***!
    \*******************************************************************/

  /*! exports provided: MoveinoutTrackerModule */

  /***/
  function srcAppAmsMoveinoutTrackerMoveinoutTrackerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinoutTrackerModule", function () {
      return MoveinoutTrackerModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./moveinout-tracker-routing.module */
    "./src/app/ams/moveinout-tracker/moveinout-tracker-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./moveinout-tracker.component */
    "./src/app/ams/moveinout-tracker/moveinout-tracker.component.ts");
    /* harmony import */


    var _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/movein-setup/movein-setup.component */
    "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts");
    /* harmony import */


    var _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/movein-maintain/movein-maintain.component */
    "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts");
    /* harmony import */


    var _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/moveout-maintain/moveout-maintain.component */
    "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts");
    /* harmony import */


    var _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/movein-reports/movein-reports.component */
    "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts");
    /* harmony import */


    var _user_user_moveinout_tracker_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../user/user-moveinout-tracker/components/user-movein/user-movein.component */
    "./src/app/user/user-moveinout-tracker/components/user-movein/user-movein.component.ts");
    /* harmony import */


    var _user_user_moveinout_tracker_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../user/user-moveinout-tracker/components/user-moveout/user-moveout.component */
    "./src/app/user/user-moveinout-tracker/components/user-moveout/user-moveout.component.ts");

    var MoveinoutTrackerModule = function MoveinoutTrackerModule() {
      _classCallCheck(this, MoveinoutTrackerModule);
    };

    MoveinoutTrackerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"], _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_6__["MoveinSetupComponent"], _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_7__["MoveinMaintainComponent"], _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_8__["MoveoutMaintainComponent"], _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_9__["MoveinReportsComponent"], _user_user_moveinout_tracker_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_10__["UserMoveinComponent"], _user_user_moveinout_tracker_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_11__["UserMoveoutComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(), _moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoveinoutTrackerRoutingModule"]],
      bootstrap: [_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"]]
    })], MoveinoutTrackerModule);
    /***/
  }
}]);
//# sourceMappingURL=moveinout-tracker-moveinout-tracker-module-es5.js.map