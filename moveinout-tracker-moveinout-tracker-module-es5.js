function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["moveinout-tracker-moveinout-tracker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveinCancelMoveinCancelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movein-maintain-wrapper\">\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear card-table\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveIn <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInData\">\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tBlock No <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Unit No <span (click)=\"sortUnitData('apartmentBlockUnitNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{movein.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/eye-icon.svg\" class=\"svg\" width=\"17\" height=\"17\" alt=\"Move In\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

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


    __webpack_exports__["default"] = "<div class=\"movein-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots m-yellow\"></span>Rejected</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots grey-850\"></span>Cancelled</li>\n\t</ul>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveIn <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<button class=\"btn lime-green\" type=\"button\">Add MoveIn</button>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInData\">\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tBlock No <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Block No\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['apartmentBlockNumber']\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"selectColInput('apartmentBlockNumber')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Unit No <span (click)=\"sortUnitData('apartmentBlockUnitNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Unit No\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['apartmentBlockUnitNumber']\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"selectColInput('apartmentBlockUnitNumber')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Phone\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box [dateModel]=\"inDateData\"\n\t\t\t\t\t\t\t\t(inputChange)=\"onDateChange($event, 'inDateData')\"></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('statusId')\" [ngClass]=\"getFieldOrderBy('statusId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Status\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['statusId']\" (ngModelChange)=\"selectColInput('statusId')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{movein.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t<span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(movein.statusId)\"></span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveInDropDown\"\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveInDropDown\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveIn(movein)\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.approvedBy == null\">Approve</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveIn(movein)\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.approvedBy == null\">Reject</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"no-link grey\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.approvedBy != null\">Approved</a>\n\t\t\t\t\t\t\t\t<!-- <a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/edit-movein/{{movein.id}}\">Edit</a> -->\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showMoveInDetails(movein)\">View</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\" *ngIf=\"movein.approvedBy != null\" (click)=\"moveInUser(movein)\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/movein-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n\t\t\t\t\t\t\t\t\talt=\"Move In\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\t\t</div>\n\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.html":
  /*!***************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.html ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveinMoveoutCancelMoveinMoveoutCancelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-movein-cancel></app-movein-cancel>\n<hr>\n<app-moveout-cancel></app-moveout-cancel>";
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


    __webpack_exports__["default"] = "<div class=\"movein-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>General</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Foreign Nationals</li>\n\t</ul>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Documents required</h5>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"float-right btn lime-green\" (click)=\"openDocCriteria()\" type=\"button\">Add Document Criteria</button>\n\t\t\t</div>\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('description')\">Name<span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t\t\t   <!-- <th scope=\"col\" (click)=\"sortUnitData('isMandate')\">Is Mandatory <span [ngClass]=\"getFieldOrderBy('isMandate')\"></span></th> -->\n\t\t\t\t\t\t   <th scope=\"col\" (click)=\"sortUnitData('documentTypeId')\">Category <span [ngClass]=\"getFieldOrderBy('documentTypeId')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('owner')\">Owner <span [ngClass]=\"getFieldOrderBy('owner')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('tenant')\">Tenant<span [ngClass]=\"getFieldOrderBy('tenant')\"></span></th>\n\t\t\t\t\t\t  <th scope=\"col\" (click)=\"sortUnitData('type')\">Type<span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t\t\t  <th></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let document of documentDataList | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t\t    \t<td class=\"name\">{{document.description}}</td>\n\t\t\t\t\t    \t<!-- <td class=\"name\">{{getStatus(document.isMandate)}}</td> -->\n\t\t\t\t\t    \t<td class=\"name\">{{getCategory(document.documentTypeId)}}</td>\n\t\t\t\t\t    \t<td>\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"document.owner\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t\t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t     \t </td>\n\t\t\t\t\t\t\t <td>\n\t\t\t\t\t\t\t\t <label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t \t<input type=\"checkbox\" [(ngModel)]=\"document.tenant\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t \t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t </label>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t\t<!-- <span class=\"dots rt-3\" [ngClass]=\"getDocumentType(document.documentTypeId)\"></span> -->\n\t\t\t\t\t\t\t\t<span [ngClass]=\"{ 'dots': true, 'low':isForeignNational==null, 'medium': isForeignNational!==null }\"></span>\n\t\t\t\t\t\t\t\t<bdi>{{isForeignNational?'Foreign':'General'}} National</bdi>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<img title=\"Edit\" src=\"assets/images/edit-icon-blue.svg\" class=\"icon-edit mr-3\" (click)=\"openDocCriteriaEdit(document)\" alt=\"\">\n\t\t\t\t\t\t\t\t<img title=\"Remove\" src=\"assets/images/bin-icon-red.svg\" class=\"icon-bin\" alt=\"\" (click)=\"openDeleteConfirm(document.id)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveoutCancelMoveoutCancelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"moveout-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear card-table\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveOut <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveOutData\">\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tBlock No <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Unit No <span (click)=\"sortUnitData('apartmentBlockUnitNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('outDateData')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('outDateData')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let moveout of moveOutDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveOutData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{moveout.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(moveout, moveout.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockUnitNo(moveout, moveout.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{moveout.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{moveout.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(moveout, moveout.outDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(moveout.outTime) }}</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/eye-icon.svg\" class=\"svg\" width=\"17\" height=\"17\" alt=\"Move In\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\t\t</div>\n\n\t</div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"moveout-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t</ul>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>MoveOut <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveOutData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n  \t\t\t\t\n  \t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tName \n\t\t\t\t      \t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['userName']\" \n\t\t\t            (ngModelChange)=\"selectColInput('userName')\" >\n\t\t\t\t      </th>\n\t\t\t\t\t  <th scope=\"col\">\n\t\t\t\t\t\tTower Unit <span  (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Tower Unit\" [(ngModel)]=\"columnField['block_Unit']\" (ngModelChange)=\"selectColInput('block_Unit')\" >\n\t\t\t\t\t  </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tEmail <span  (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Date \n\t\t\t\t      \t<span (click)=\"sortUnitData('outDateData')\" [ngClass]=\"getFieldOrderBy('outDateData')\"></span>\n\t\t\t\t      \t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"outDateData\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'outDateData')\"\n\t\t\t\t\t    ></app-simple-date-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Time \n\t\t\t\t      \t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t    <tr *ngFor=\"let moveout of moveOutDataList | simpleSearch: moveOutData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\"><span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(moveout.approvedBy)\"></span>{{moveout.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.block_Unit}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.mobile}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{ getDate(moveout, moveout.outDate) }}</td>\n\t\t\t\t      <td class=\"grey\">{{ getTime(moveout.outTime) }}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveOutDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveOutDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveOut(moveout)\" *ngIf=\"moveout.approvedBy == null\">Approve/Reject</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" class=\"no-link grey\" *ngIf=\"moveout.approvedBy != null\">Approved</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/edit-moveout/{{moveout.id}}\">Edit</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t\t    \n\t\t\t    </tbody>\n\n  \t\t\t</table>\n  \t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n  \t\t</div>\n\t\t\n\t</div>\n\n</div>";
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
  "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinCancelMoveinCancelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1jYW5jZWwvbW92ZWluLWNhbmNlbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: MoveinCancelComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinCancelMoveinCancelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinCancelComponent", function () {
      return MoveinCancelComponent;
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


    var _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../api/services/move-in-out.service */
    "./src/app/api/services/move-in-out.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

    var MoveinCancelComponent =
    /*#__PURE__*/
    function () {
      function MoveinCancelComponent(moveInOutService, apartmentService, lookupService, cookieService) {
        _classCallCheck(this, MoveinCancelComponent);

        this.moveInOutService = moveInOutService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
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
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(MoveinCancelComponent, [{
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
        value: function getDate(movein, date) {
          this.moveInDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.inDateData = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
            }
          });
          return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var timeData = moment__WEBPACK_IMPORTED_MODULE_7__(time, 'HH:mm:ss').toDate();
          return moment__WEBPACK_IMPORTED_MODULE_7__(timeData).format('HH:mm A');
        }
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "isNoItemsAvailable",
        value: function isNoItemsAvailable() {
          return this.totalItems == 0 ? true : false;
        }
      }, {
        key: "getBlockNo",
        value: function getBlockNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveInDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
              }
            });
            return data[0].apartmentBlockNumber;
          }
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveInDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
              }
            });
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getApproveStatus",
        value: function getApproveStatus(data) {
          if (data == null) return 'high';else return 'low';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // tslint:disable-next-line:radix
          this.moveInOutService.getMoveInByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this.moveInDataList = res.filter(function (item) {
              return res.statusId === 380;
            });
            _this.totalItems = _this.moveInDataList.length;

            if (_this.totalItems > _this.itemLimit) {
              _this.ItemEndIndex = _this.itemLimit;
            } else {
              _this.ItemEndIndex = _this.totalItems;
            }

            _this.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this.blockUnitData = res;
          });
        }
      }]);

      return MoveinCancelComponent;
    }();

    MoveinCancelComponent.ctorParameters = function () {
      return [{
        type: _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    MoveinCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-cancel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-cancel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-cancel.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], MoveinCancelComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
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


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);

    var MoveinMaintainComponent =
    /*#__PURE__*/
    function () {
      function MoveinMaintainComponent(injector, moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService, dialog) {
        _classCallCheck(this, MoveinMaintainComponent);

        this.injector = injector;
        this.moveInOutService = moveInOutService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
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
        this.selectedInput = "";
        this.columnField = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
      }

      _createClass(MoveinMaintainComponent, [{
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
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_11__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getDate",
        value: function getDate(movein, date) {
          this.moveInDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.inDateData = moment__WEBPACK_IMPORTED_MODULE_11__(date).format("DD/MM/YYYY");
            }
          });
          return moment__WEBPACK_IMPORTED_MODULE_11__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var timeData = moment__WEBPACK_IMPORTED_MODULE_11__(time, 'HH:mm:ss').toDate();
          return moment__WEBPACK_IMPORTED_MODULE_11__(timeData).format('HH:mm A');
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
        key: "getBlockNo",
        value: function getBlockNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveInDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
              }
            });
            return data[0].apartmentBlockNumber;
          }
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_10__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveInDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
              }
            });
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getApproveStatus",
        value: function getApproveStatus(id) {
          switch (id) {
            case 372:
              return 'high';
              break;

            case 373:
              return 'low';
              break;

            case 374:
              return 'm-yellow';
              break;

            case 380:
              return 'grey-850';
              break;
          }
        }
      }, {
        key: "approveMoveIn",
        value: function approveMoveIn(data) {
          var _this2 = this;

          var moveInData = data;
          moveInData.approvedBy = parseInt(this.cookieService.get('userId'));
          moveInData.approvedDate = new Date().toISOString();
          this.isMoveInSubmitted = false;
          this.moveInOutService.updateMoveIn(moveInData).subscribe(function (res) {
            if (res.message) {
              _this2.isMoveInSubmitted = true;

              _this2.sharedService.setAlertMessage("Movein approved successfully");
            } else {
              _this2.isMoveInSubmitted = true;
              _this2.isError = true;
              _this2.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this2.isMoveInSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.moveInOutService.getMoveInByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this3.moveInDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this3.totalItems = _this3.moveInDataList.length;

            if (_this3.totalItems > _this3.itemLimit) {
              _this3.ItemEndIndex = _this3.itemLimit;
            } else {
              _this3.ItemEndIndex = _this3.totalItems;
            }

            _this3.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this3.blockUnitData = res;
          });
        }
      }, {
        key: "showMoveInDetails",
        value: function showMoveInDetails(details) {
          this.modalService.showMoveInDetails(details);
        }
      }, {
        key: "moveInUser",
        value: function moveInUser(data) {}
      }]);

      return MoveinMaintainComponent;
    }();

    MoveinMaintainComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
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
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }];
    };

    MoveinMaintainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-maintain',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-maintain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-maintain.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])], MoveinMaintainComponent);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.scss":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.scss ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinMoveoutCancelMoveinMoveoutCancelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1tb3Zlb3V0LWNhbmNlbC9tb3ZlaW4tbW92ZW91dC1jYW5jZWwuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: MoveinMoveoutCancelComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinMoveoutCancelMoveinMoveoutCancelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinMoveoutCancelComponent", function () {
      return MoveinMoveoutCancelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MoveinMoveoutCancelComponent =
    /*#__PURE__*/
    function () {
      function MoveinMoveoutCancelComponent() {
        _classCallCheck(this, MoveinMoveoutCancelComponent);
      }

      _createClass(MoveinMoveoutCancelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoveinMoveoutCancelComponent;
    }();

    MoveinMoveoutCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-moveout-cancel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-moveout-cancel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-moveout-cancel.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.scss"))["default"]]
    })], MoveinMoveoutCancelComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    MoveinReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-reports',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-reports.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-reports.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MoveinReportsComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/components/add-doc-criteria/add-doc-criteria.component */
    "./src/app/shared/components/add-doc-criteria/add-doc-criteria.component.ts");
    /* harmony import */


    var src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/confirm-modal/confirm-modal.component */
    "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");

    var MoveinSetupComponent =
    /*#__PURE__*/
    function () {
      function MoveinSetupComponent(moveInOutService, lookupService, sharedService, cookieService, dialog) {
        _classCallCheck(this, MoveinSetupComponent);

        this.moveInOutService = moveInOutService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.isMobile = false;
        this.isDataLoaded = false;
        this.documentTypeListObject = {};
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
        key: "getStatus",
        value: function getStatus(value) {
          if (value) {
            return 'YES';
          } else {
            return 'NO';
          }
        }
      }, {
        key: "getCategory",
        value: function getCategory(Id) {
          if (this.documentTypeListObject[Id]) {
            return this.documentTypeListObject[Id].lookupValueName;
          } else {
            return '';
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
          var _this4 = this;

          setTimeout(function () {
            _this4.isDataLoaded = false;
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
              "insertedBy": parseInt(_this4.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(_this4.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "apartmentId": parseInt(_this4.cookieService.get('apartmentId'))
            };

            _this4.moveInOutService.updateMoveInOutConfig(details).subscribe(function (res) {
              if (res.message) {
                _this4.isDataLoaded = true;

                _this4.sharedService.setAlertMessage("MoveIn Configuration updated successfully");
              } else {
                _this4.isDataLoaded = true;
              }
            }, function (error) {
              _this4.isDataLoaded = true;
            });
          }, 1000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.moveInOutService.getMoveInOutConfigByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this5.documentDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this5.totalItems = _this5.documentDataList.length;

            if (_this5.totalItems > _this5.itemLimit) {
              _this5.ItemEndIndex = _this5.itemLimit;
            } else {
              _this5.ItemEndIndex = _this5.totalItems;
            }

            _this5.isDataLoaded = true;
          }, function (error) {
            console.log(error);
          }); //document type

          this.lookupService.getLookupValueByLookupTypeId(72).subscribe(function (res) {
            _this5.documentTypeDataList = res.filter(function (item) {
              return item.isActive;
            });

            _this5.documentTypeDataList.forEach(function (element) {
              _this5.documentTypeListObject[element.lookupValueId] = element;
            });
          }, function (error) {});
        }
      }, {
        key: "openDocCriteria",
        value: function openDocCriteria() {
          var dialogRef = this.dialog.open(src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__["AddDocCriteriaComponent"], {
            width: '400px',
            data: {
              type: 'ADD'
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {});
        }
      }, {
        key: "openDocCriteriaEdit",
        value: function openDocCriteriaEdit(docData) {
          var dialogRef = this.dialog.open(src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__["AddDocCriteriaComponent"], {
            width: '400px',
            data: {
              type: 'EDIT',
              data: docData
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {});
        }
      }, {
        key: "openDeleteConfirm",
        value: function openDeleteConfirm(docId) {
          var dialogRef = this.dialog.open(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalComponent"], {
            id: docId
          });
          dialogRef.afterClosed().subscribe(function (result) {// this.sharedService.unitlistdeleteindexcast.subscribe(
            //   (r) => {
            //     if (r == docId) {
            //       alert('deleted');
            //     }
            //   }
            // );
          });
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
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
      }];
    };

    MoveinSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-setup.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])], MoveinSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveoutCancelMoveoutCancelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVvdXQtY2FuY2VsL21vdmVvdXQtY2FuY2VsLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MoveoutCancelComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveoutCancelMoveoutCancelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveoutCancelComponent", function () {
      return MoveoutCancelComponent;
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

    var MoveoutCancelComponent =
    /*#__PURE__*/
    function () {
      function MoveoutCancelComponent(moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, MoveoutCancelComponent);

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
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(MoveoutCancelComponent, [{
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
        key: "selectColInput",
        value: function selectColInput(value) {
          this.selectedInput = value;
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_9__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getDate",
        value: function getDate(movein, date) {
          this.moveOutDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.outDateData = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
            }
          });
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
        key: "getBlockNo",
        value: function getBlockNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveOutDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
              }
            });
            return data[0].apartmentBlockNumber;
          }
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveOutDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
              }
            });
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getApproveStatus",
        value: function getApproveStatus(data) {
          if (data == null) return 'high';else return 'low';
        }
      }, {
        key: "approveMoveOut",
        value: function approveMoveOut(data) {
          var _this6 = this;

          var moveOutData = data;
          moveOutData.approvedBy = parseInt(this.cookieService.get('userId'));
          moveOutData.approvedDate = new Date().toISOString();
          this.isMoveOutSubmitted = false;
          this.moveInOutService.updateMoveOut(moveOutData).subscribe(function (res) {
            if (res.message) {
              _this6.isMoveOutSubmitted = true;

              _this6.sharedService.setAlertMessage("Moveout approved successfully");
            } else {
              _this6.isMoveOutSubmitted = true;
              _this6.isError = true;
              _this6.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this6.isMoveOutSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.moveInOutService.getMoveOutByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this7.moveOutDataList = res.filter(function (item) {
              return res.statusId === 381;
            });
            console.log(_this7.moveOutDataList);
            _this7.totalItems = _this7.moveOutDataList.length;

            if (_this7.totalItems > _this7.itemLimit) {
              _this7.ItemEndIndex = _this7.itemLimit;
            } else {
              _this7.ItemEndIndex = _this7.totalItems;
            }

            _this7.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this7.blockUnitData = res;
          });
        }
      }]);

      return MoveoutCancelComponent;
    }();

    MoveoutCancelComponent.ctorParameters = function () {
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

    MoveoutCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moveout-cancel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./moveout-cancel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./moveout-cancel.component.scss */
      "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], MoveoutCancelComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
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

    var MoveoutMaintainComponent =
    /*#__PURE__*/
    function () {
      function MoveoutMaintainComponent(moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, MoveoutMaintainComponent);

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
        this.unitOrder = true;
        this.isMobile = false;
        this.isMoveOutSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.selectedInput = "";
        this.columnField = {};
      }

      _createClass(MoveoutMaintainComponent, [{
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
        key: "onDateChange",
        value: function onDateChange(event, type) {
          if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_9__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getDate",
        value: function getDate(movein, date) {
          this.moveOutDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.outDateData = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("DD/MM/YYYY");
            }
          });
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
        key: "getBlockNo",
        value: function getBlockNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveOutDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
              }
            });
            return data[0].apartmentBlockNumber;
          }
        }
      }, {
        key: "getBlockUnitNo",
        value: function getBlockUnitNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_8__["filter"](this.blockUnitData, function (item) {
            if (item.apartmentBlockUnitId === id) return item;
          });

          if (data === undefined || data.length == 0) {
            return '';
          } else {
            this.moveOutDataList.map(function (obj) {
              if (obj.id == item.id) {
                obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
              }
            });
            return data[0].apartmentBlockUnitNumber;
          }
        }
      }, {
        key: "getApproveStatus",
        value: function getApproveStatus(data) {
          if (data == null) return 'high';else return 'low';
        }
      }, {
        key: "approveMoveOut",
        value: function approveMoveOut(data) {
          var _this8 = this;

          var moveOutData = data;
          moveOutData.approvedBy = parseInt(this.cookieService.get('userId'));
          moveOutData.approvedDate = new Date().toISOString();
          this.isMoveOutSubmitted = false;
          this.moveInOutService.updateMoveOut(moveOutData).subscribe(function (res) {
            if (res.message) {
              _this8.isMoveOutSubmitted = true;

              _this8.sharedService.setAlertMessage("Moveout approved successfully");
            } else {
              _this8.isMoveOutSubmitted = true;
              _this8.isError = true;
              _this8.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this8.isMoveOutSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.moveInOutService.getMoveOutByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe(function (res) {
            _this9.moveOutDataList = res.filter(function (item) {
              return item.isActive;
            });
            console.log(_this9.moveOutDataList);
            _this9.totalItems = _this9.moveOutDataList.length;

            if (_this9.totalItems > _this9.itemLimit) {
              _this9.ItemEndIndex = _this9.itemLimit;
            } else {
              _this9.ItemEndIndex = _this9.totalItems;
            }

            _this9.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this9.blockUnitData = res;
          });
        }
      }]);

      return MoveoutMaintainComponent;
    }();

    MoveoutMaintainComponent.ctorParameters = function () {
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

    MoveoutMaintainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moveout-maintain',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./moveout-maintain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./moveout-maintain.component.scss */
      "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_api_services_move_in_out_service__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])], MoveoutMaintainComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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


    var _shared_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/user-movein/user-movein.component */
    "./src/app/shared/components/user-movein/user-movein.component.ts");
    /* harmony import */


    var _shared_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/user-moveout/user-moveout.component */
    "./src/app/shared/components/user-moveout/user-moveout.component.ts");
    /* harmony import */


    var _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/movein-moveout-cancel/movein-moveout-cancel.component */
    "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts");

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
      component: _shared_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_7__["UserMoveinComponent"]
    }, {
      path: 'moveout',
      component: _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_5__["MoveoutMaintainComponent"]
    }, {
      path: 'edit-moveout/:id',
      component: _shared_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_8__["UserMoveoutComponent"]
    }, {
      path: 'reports',
      component: _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_6__["MoveinReportsComponent"]
    }, {
      path: 'cancelled',
      component: _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_9__["MoveinMoveoutCancelComponent"]
    }, {
      path: '**',
      redirectTo: 'settings',
      pathMatch: 'full'
    }];

    var MoveinoutTrackerRoutingModule = function MoveinoutTrackerRoutingModule() {
      _classCallCheck(this, MoveinoutTrackerRoutingModule);
    };

    MoveinoutTrackerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

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

    MoveinoutTrackerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moveinout-tracker',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./moveinout-tracker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/moveinout-tracker.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./moveinout-tracker.component.scss */
      "./src/app/ams/moveinout-tracker/moveinout-tracker.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MoveinoutTrackerComponent);
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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


    var _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/movein-moveout-cancel/movein-moveout-cancel.component */
    "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts");
    /* harmony import */


    var _components_movein_cancel_movein_cancel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/movein-cancel/movein-cancel.component */
    "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.ts");
    /* harmony import */


    var _components_moveout_cancel_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/moveout-cancel/moveout-cancel.component */
    "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.ts");

    var MoveinoutTrackerModule = function MoveinoutTrackerModule() {
      _classCallCheck(this, MoveinoutTrackerModule);
    };

    MoveinoutTrackerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"], _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_6__["MoveinSetupComponent"], _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_7__["MoveinMaintainComponent"], _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_8__["MoveoutMaintainComponent"], _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_9__["MoveinReportsComponent"], _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_10__["MoveinMoveoutCancelComponent"], _components_movein_cancel_movein_cancel_component__WEBPACK_IMPORTED_MODULE_11__["MoveinCancelComponent"], _components_moveout_cancel_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_12__["MoveoutCancelComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoveinoutTrackerRoutingModule"]],
      bootstrap: [_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"]]
    })], MoveinoutTrackerModule);
    /***/
  }
}]);
//# sourceMappingURL=moveinout-tracker-moveinout-tracker-module-es5.js.map