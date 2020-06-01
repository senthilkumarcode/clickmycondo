function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["moveinout-tracker-moveinout-tracker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsMoveinoutTrackerComponentsMoveinAdminHistoryMoveinAdminHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movein-admin-history-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n    <ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n        <li class=\"list-inline-item\"><span><img src=\"assets/images/movein-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n                    alt=\"Moved In\"></span>Moved In</li>\n        <li class=\"list-inline-item\"><span class=\"dots grey-850\"></span>Cancelled</li>\n        <li class=\"list-inline-item\"><span class=\"dots m-yellow\"></span>Rejected</li>\n    </ul>\n    <div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInOutHitoryData\" (ngModelChange)=\"onGlSearchFilter()\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n\n            <!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n                <thead>\n                    <tr>\n                        <th scope=\"col\">\n                            Name\n                            <span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\"\n                                [(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\">\n                        </th>\n                        <th scope=\"col\">\n                            Unit Details <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n                                [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Block No\"\n                                [(ngModel)]=\"columnField['apartmentBlockNumber']\"\n                                (ngModelChange)=\"selectColInput('apartmentBlockNumber')\">\n                        </th>\n\n                        <th scope=\"col\">\n                            Phone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Phone\"\n                                [(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\">\n                        </th>\n                        <th scope=\"col\">\n                            Email <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n                                [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\">\n                        </th>\n                        <th scope=\"col\">Date\n                            <span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n                            <app-simple-date-box [dateModel]=\"inDateData\"\n                                (inputChange)=\"onDateChange($event, 'inDateData')\"></app-simple-date-box>\n                        </th>\n                        <th scope=\"col\">Time\n                            <span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n                                [(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\">\n                        </th>\n                        <th scope=\"col\">Status\n                            <span (click)=\"sortUnitData('statusId')\" [ngClass]=\"getFieldOrderBy('statusId')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Status\"\n                                [(ngModel)]=\"columnField['statusId']\" (ngModelChange)=\"selectColInput('statusId')\">\n                        </th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr\n                        *ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInOutHitoryData | columnSearch: columnField:selectedInput ; let i = index\">\n                        <td class=\"name\">{{movein.userName}}</td>\n                        <td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}},\n                            {{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}\n                        </td>\n                        <td class=\"grey\">{{movein.mobile}}</td>\n                        <td class=\"grey\">{{movein.email}}</td>\n                        <td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n                        <td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n                        <td class=\"grey\">\n                            <span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(movein.statusId)\"></span>\n                        </td>\n                        <td>\n                            <div class=\"icon-wrapper\" *ngIf=\"movein.statusId == 375\">\n                                <img src=\"assets/images/movein-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n                                    alt=\"Moved In\">\n                            </div>\n                        </td>\n                    </tr>\n\n                </tbody>\n\n            </table>\n            <div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n                <p class=\"snippet\">No Data Available</p>\n            </div>\n            <app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n                [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n            </app-pagination> -->\n            <jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n        </div>\n\n    </div>\n\n</div>";
    /***/
  },

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


    __webpack_exports__["default"] = "<div class=\"movein-maintain-wrapper\">\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear card-table\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveIn <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tBlock No <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Unit No <span (click)=\"sortUnitData('apartmentBlockUnitNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{movein.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveInCancelDropDown\"\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/eye-icon.svg\" class=\"svg\" width=\"17\" height=\"17\" alt=\"Move In\">\n\t\t\t\t\t\t\t</div></a>\n\t\t\t\t\t\t\t<div *ngIf=\"movein.comments != null && movein.comments !=''\" class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveInCancelDropDown\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">{{ movein.comments }}</a></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t</div>\n\n\t</div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"movein-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t</ul>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveIn <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<button class=\"btn lime-green\" (click)=\"navigateToMovein()\" type=\"button\">Add MoveIn</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tUnit Details <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Block No\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['apartmentBlockNumber']\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"selectColInput('apartmentBlockNumber')\">\n\t\t\t\t\t\t</th>\n\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Phone\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box [dateModel]=\"inDateData\"\n\t\t\t\t\t\t\t\t(inputChange)=\"onDateChange($event, 'inDateData')\"></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('statusId')\" [ngClass]=\"getFieldOrderBy('statusId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Status\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['statusId']\" (ngModelChange)=\"selectColInput('statusId')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{movein.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}},\n\t\t\t\t\t\t\t{{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t<span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(movein.statusId)\"></span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveInDropDown\"\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveInDropDown\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveIn(movein, 'approve')\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 372\">Approve</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveIn(movein, 'reject')\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 372\">Reject</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"no-link grey\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 373\">Approved</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"no-link grey\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 374\">Rejected</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showMoveInDetails(movein)\">View</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\" *ngIf=\"movein.statusId == 373\" (click)=\"chekInUser(movein, i)\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/checkin-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n\t\t\t\t\t\t\t\t\talt=\"Check In\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t</div>\n\n\t</div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"movein-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>General</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Foreign Nationals</li>\n\t</ul>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Documents required</h5>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"float-right btn lime-green\" (click)=\"openDocCriteria()\" type=\"button\">Add Document Criteria</button>\n\t\t\t</div>\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('description')\">Name<span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t\t\t   <!-- <th scope=\"col\" (click)=\"sortUnitData('isMandate')\">Is Mandatory <span [ngClass]=\"getFieldOrderBy('isMandate')\"></span></th> -->\n\t\t\t\t\t\t   <th scope=\"col\" (click)=\"sortUnitData('documentTypeId')\">Category <span [ngClass]=\"getFieldOrderBy('documentTypeId')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('owner')\">Owner <span [ngClass]=\"getFieldOrderBy('owner')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('tenant')\">Tenant<span [ngClass]=\"getFieldOrderBy('tenant')\"></span></th>\n\t\t\t\t\t\t  <th scope=\"col\" (click)=\"sortUnitData('type')\">Type<span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t\t\t  <th></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let document of documentDataList | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t\t    \t<td class=\"name\">{{document.description}}</td>\n\t\t\t\t\t    \t<!-- <td class=\"name\">{{getStatus(document.isMandate)}}</td> -->\n\t\t\t\t\t    \t<td class=\"name\">{{getCategory(document.documentTypeId)}}</td>\n\t\t\t\t\t    \t<td>\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"document.owner\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t\t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t     \t </td>\n\t\t\t\t\t\t\t <td>\n\t\t\t\t\t\t\t\t <label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t \t<input type=\"checkbox\" [(ngModel)]=\"document.tenant\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t \t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t </label>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t\t<!-- <span class=\"dots rt-3\" [ngClass]=\"getDocumentType(document.documentTypeId)\"></span> -->\n\t\t\t\t\t\t\t\t<span [ngClass]=\"{ 'dots': true, 'low':document.isForeignNational==null || !document.isForeignNational, 'medium': document.isForeignNational }\"></span>\n\t\t\t\t\t\t\t\t<bdi>{{document.isForeignNational?'Foreign':'General'}} National</bdi>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<img title=\"Edit\" src=\"assets/images/edit-icon-blue.svg\" class=\"icon-edit mr-3\" (click)=\"openDocCriteriaEdit(document)\" alt=\"\">\n\t\t\t\t\t\t\t\t<img title=\"Remove\" src=\"assets/images/bin-icon-red.svg\" class=\"icon-bin\" alt=\"\" (click)=\"openDeleteConfirm(document.id)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"moveout-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear card-table\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveOut <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveOutData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tBlock No <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Unit No <span (click)=\"sortUnitData('apartmentBlockUnitNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('outDateData')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('outDateData')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let moveout of moveOutDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveOutData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{moveout.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(moveout, moveout.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockUnitNo(moveout, moveout.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{moveout.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{moveout.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(moveout, moveout.outDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(moveout.outTime) }}</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveOutCancelDropDown\"\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/eye-icon.svg\" class=\"svg\" width=\"17\" height=\"17\" alt=\"Move In\">\n\t\t\t\t\t\t\t</div></a>\n\t\t\t\t\t\t\t<div *ngIf=\"moveout.comments != null && moveout.comments !=''\" class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveOutCancelDropDown\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">{{ moveout.comments }}</a></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t</div>\n\n\t</div>\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"moveout-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t</ul>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>MoveOut <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveOutData\" (ngModelChange)=\"onGlSearchFilter()\">\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n  \t\t\t\t\n  \t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tName \n\t\t\t\t      \t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['userName']\" \n\t\t\t            (ngModelChange)=\"selectColInput('userName')\" >\n\t\t\t\t      </th>\n\t\t\t\t\t  <th scope=\"col\">\n\t\t\t\t\t\tTower Unit <span  (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Tower Unit\" [(ngModel)]=\"columnField['block_Unit']\" (ngModelChange)=\"selectColInput('block_Unit')\" >\n\t\t\t\t\t  </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tEmail <span  (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Date \n\t\t\t\t      \t<span (click)=\"sortUnitData('outDateData')\" [ngClass]=\"getFieldOrderBy('outDateData')\"></span>\n\t\t\t\t      \t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"outDateData\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'outDateData')\"\n\t\t\t\t\t    ></app-simple-date-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Time \n\t\t\t\t      \t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t    <tr *ngFor=\"let moveout of moveOutDataList | simpleSearch: moveOutData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\"><span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(moveout.approvedBy)\"></span>{{moveout.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.block_Unit}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.mobile}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{ getDate(moveout, moveout.outDate) }}</td>\n\t\t\t\t      <td class=\"grey\">{{ getTime(moveout.outTime) }}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveOutDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveOutDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveOut(moveout)\" *ngIf=\"moveout.approvedBy == null\">Approve/Reject</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" class=\"no-link grey\" *ngIf=\"moveout.approvedBy != null\">Approved</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/edit-moveout/{{moveout.id}}\">Edit</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t\t    \n\t\t\t    </tbody>\n\n  \t\t\t</table>\n  \t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n  \t\t</div>\n\t\t\n\t</div>\n\n</div>";
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
  "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.scss":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.scss ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinAdminHistoryMoveinAdminHistoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1hZG1pbi1oaXN0b3J5L21vdmVpbi1hZG1pbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: MoveinAdminHistoryComponent */

  /***/
  function srcAppAmsMoveinoutTrackerComponentsMoveinAdminHistoryMoveinAdminHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoveinAdminHistoryComponent", function () {
      return MoveinAdminHistoryComponent;
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


    var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/MoveInOut */
    "./src/app/api/controllers/MoveInOut.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var MoveinAdminHistoryComponent =
    /*#__PURE__*/
    function () {
      function MoveinAdminHistoryComponent(injector, moveInOutService, apartmentService, lookupService, cookieService) {
        _classCallCheck(this, MoveinAdminHistoryComponent);

        this.injector = injector;
        this.moveInOutService = moveInOutService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.moveInOutHitoryData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.isError = false;
        this.alertMessage = "";
        this.selectedInput = "";
        this.columnField = {};
        this.statusType = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
      }

      _createClass(MoveinAdminHistoryComponent, [{
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
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_8__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getDate",
        value: function getDate(movein, date) {
          this.moveInDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.inDateData = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
            }
          });
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var timeData = moment__WEBPACK_IMPORTED_MODULE_8__(time, 'HH:mm:ss').toDate();
          return moment__WEBPACK_IMPORTED_MODULE_8__(timeData).format('HH:mm A');
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
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, function (item) {
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
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, function (item) {
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
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this = this;

          if (this.moveInOutHitoryData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.moveInOutHitoryData;
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
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

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
            text: 'Name',
            datafield: 'userName',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Unit Details',
            datafield: 'block_Unit',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Phone',
            datafield: 'mobile',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Email',
            datafield: 'email',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Date',
            datafield: 'inDate',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format("DD/MM/YYYY") + '</div>';
            },
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Time',
            datafield: 'inTime',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + _this2.getTime(value) + '</div>';
            },
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Status',
            datafield: 'statusId',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellsrenderer: function cellsrenderer(row, column, value) {
              console.log('Hi', value);

              if (value == 374) {
                return '<span class="dots m-yellow"></span>';
              } else if (value == 380) {
                return '<span class="dots grey-850"></span>';
              } else if (value == 375) {
                return '<div class="icon-wrapper"><img src="assets/images/movein-icon.svg" class="svg" width="17" height="17" alt="Moved In"></div>';
              }
            },
            renderer: columnrenderer
          }];
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: "374,375,380"
          };
          this.moveInOutService.getMoveInByStatusIds(params).subscribe(function (res) {
            _this2.moveInDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this2.gridSourceData = {
              localdata: _this2.moveInDataList,
              datatype: "array"
            };
            _this2.listData = new jqx.dataAdapter(_this2.gridSourceData);
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
          this.getStatusName();
        }
      }, {
        key: "getStatusName",
        value: function getStatusName() {
          var _this3 = this;

          var params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 92
          };
          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this3.statusNames = res.filter(function (item) {
              return item.isActive;
            });

            _this3.statusNames.forEach(function (element) {
              _this3.statusType[element.lookupValueId] = element;
            });
          });
        }
      }]);

      return MoveinAdminHistoryComponent;
    }();

    MoveinAdminHistoryComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__["jqxGridComponent"])], MoveinAdminHistoryComponent.prototype, "datagrid", void 0);
    MoveinAdminHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-admin-history',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-admin-history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-admin-history.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], MoveinAdminHistoryComponent);
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


    var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/MoveInOut */
    "./src/app/api/controllers/MoveInOut.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
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
      function MoveinCancelComponent(moveInOutService, apartmentService, cookieService) {
        _classCallCheck(this, MoveinCancelComponent);

        this.moveInOutService = moveInOutService;
        this.apartmentService = apartmentService;
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
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this4 = this;

          if (this.moveInData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.moveInData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this4.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
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
            text: 'Name',
            datafield: 'userName',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Unit Details',
            datafield: 'block_Unit',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Phone',
            datafield: 'mobile',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Email',
            datafield: 'email',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Expected Date',
            datafield: 'inDate',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format("DD/MM/YYYY") + '</div>';
            },
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Expected Time',
            datafield: 'inTime',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + _this5.getTime(value) + '</div>';
            },
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Actions',
            datafield: 'comments',
            cellsalign: 'center',
            align: 'center',
            minwidth: 120,
            cellclassname: 'action-cell',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutCancelDropDown" aria-haspopup="true" aria-expanded="false">' + '<div class="icon-wrapper">' + ' <img src="assets/images/eye-icon.svg" class="svg" width="17" height="17" alt="Move In">' + ' </div></a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutCancelDropDown">' + ' <a href="javascript:void(0)">' + value + '</a></div>' + '</div>';
            },
            renderer: columnrenderer
          }];
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          }; // tslint:disable-next-line:radix

          this.moveInOutService.getMoveInByApartmentId(params).subscribe(function (res) {
            _this5.moveInDataList = res.filter(function (item) {
              return item.statusId === 380;
            });
            _this5.gridSourceData = {
              localdata: _this5.moveInDataList,
              datatype: "array"
            };
            _this5.listData = new jqx.dataAdapter(_this5.gridSourceData);
            _this5.totalItems = _this5.moveInDataList.length;

            if (_this5.totalItems > _this5.itemLimit) {
              _this5.ItemEndIndex = _this5.itemLimit;
            } else {
              _this5.ItemEndIndex = _this5.totalItems;
            }

            _this5.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this5.blockUnitData = res;
          });
        }
      }]);

      return MoveinCancelComponent;
    }();

    MoveinCancelComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])], MoveinCancelComponent.prototype, "datagrid", void 0);
    MoveinCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-cancel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-cancel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-cancel.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])], MoveinCancelComponent);
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


    var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/MoveInOut */
    "./src/app/api/controllers/MoveInOut.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
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


    var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
    "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

    var MoveinMaintainComponent =
    /*#__PURE__*/
    function () {
      function MoveinMaintainComponent(injector, moveInOutService, apartmentService, lookupService, sharedService, cookieService, dialog, router) {
        _classCallCheck(this, MoveinMaintainComponent);

        this.injector = injector;
        this.moveInOutService = moveInOutService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
        this.router = router;
        this.isDataLoaded = false;
        this.moveInData = "";
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.isMobile = false;
        this.isError = false;
        this.alertMessage = "";
        this.selectedInput = "";
        this.columnField = {};
        this.statusType = {};
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
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
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_10__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getDate",
        value: function getDate(movein, date) {
          this.moveInDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.inDateData = moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
            }
          });
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
        key: "getBlockNo",
        value: function getBlockNo(item, id) {
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.blockUnitData, function (item) {
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
          var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.blockUnitData, function (item) {
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
          if (this.statusType[id] && id == 372) {
            return 'high';
          } else if (this.statusType[id] && id == 373) {
            return 'low';
          } else if (this.statusType[id] && id == 374) {
            return 'm-yellow';
          } else if (this.statusType[id] && id == 380) {
            return 'grey-850';
          }
        }
      }, {
        key: "approveMoveIn",
        value: function approveMoveIn(detail) {
          var _this6 = this;

          var data = this.datagrid.getrowdata(detail.rowId);
          var type = detail.column;
          var details = {
            "id": data.id,
            "inDate": data.inDate,
            "inTime": data.inTime,
            "familyCount": data.familyCount,
            "comments": data.comments,
            "isActive": data.isActive,
            "apartmentBlockUnitId": data.apartmentBlockUnitId,
            "reqUserId": data.reqUserId,
            "statusId": type == 'approve' ? 373 : 374,
            "approvedBy": type == 'approve' ? parseInt(this.cookieService.get('userId')) : data.approvedBy,
            "approvedDate": type == 'approve' ? new Date().toISOString() : data.approvedDate,
            "insertedBy": data.insertedBy,
            "insertedOn": data.insertedOn,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString(),
            "apartmentId": data.apartmentId,
            "userName": data.userName,
            "mobile": data.mobile,
            "email": data.email,
            "block_Unit": data.block_Unit,
            "requestType": data.requestType,
            "statusName": type == 'approve' ? "Approved" : "Rejected",
            "serialNo": data.serialNo
          };
          var params = {
            moveIn: details
          };
          this.moveInOutService.updateMoveIn(params).subscribe(function (res) {
            if (res.message) {
              if (type == 'approve') {
                _this6.sharedService.setAlertMessage("Movein approved successfully");

                data.statusId = 373;
                data.statusName = 'Approved';
                data.approvedBy = parseInt(_this6.cookieService.get('userId'));
              } else {
                data.statusId = 374;
                data.statusName = 'Rejected';
                data.approvedBy = null;
              }
            } else {
              _this6.isError = true;
              _this6.alertMessage = res.errorMessage;
            }
          }, function (error) {});
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this7 = this;

          if (this.moveInData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.moveInData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this7.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
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
            text: 'Name',
            datafield: 'userName',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Unit Details',
            datafield: 'block_Unit',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Phone',
            datafield: 'mobile',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Email',
            datafield: 'email',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Expected Date',
            datafield: 'inDate',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_10__(value).format("DD/MM/YYYY") + '</div>';
            },
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Expected Time',
            datafield: 'inTime',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + _this8.getTime(value) + '</div>';
            },
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Status',
            datafield: 'statusId',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellsrenderer: function cellsrenderer(row, column, value) {
              if (value == 372) {
                return '<span class="dots high"></span>';
              } else if (value == 373) {
                return '<span class="dots low"></span>';
              }
            },
            renderer: columnrenderer
          }, {
            text: 'Actions',
            cellsalign: 'center',
            align: 'center',
            minwidth: 120,
            cellclassname: 'action-cell',
            cellsrenderer: function cellsrenderer(row, column, value) {
              var id_ = _this8.moveInDataList[row].statusId;

              if (id_ == 372) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveInDropDown" aria-haspopup="true" aria-expanded="false">' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '</a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveInDropDown">' + '<a href="javascript:void(0)" onClick="approveMoveIn(' + row + ', \'approve\')" >Approve</a>' + ' <a href="javascript:void(0)" onClick="approveMoveIn(' + row + ', \'reject\')" *ngIf="id_ == 372">Reject</a>' + '<a href="javascript:void(0)" onClick="showMoveInDetails(' + row + ')">View</a>' + '</div>' + '</div>';
              } else if (id_ == 373) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveInDropDown" aria-haspopup="true" aria-expanded="false">' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '</a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveInDropDown">' + ' <a  href="javascript:void(0)" class="no-link grey" *ngIf="id_ == 373">Approved</a>' + '<a href="javascript:void(0)" onClick="showMoveInDetails(' + row + ')">View</a>' + '</div>' + '</div>';
              } else if (id_ == 374) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveInDropDown" aria-haspopup="true" aria-expanded="false">' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '</a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveInDropDown">' + '<a href="javascript:void(0)" class="no-link grey" *ngIf="id_ == 374">Rejected</a>' + '<a href="javascript:void(0)" onClick="showMoveInDetails(' + row + ')">View</a>' + '</div>' + '</div>';
              }
            },
            renderer: columnrenderer
          }, {
            text: '',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellsrenderer: function cellsrenderer(row, column, value) {
              var id_ = _this8.moveInDataList[row].statusId;

              if (id_ == 373) {
                return '<div class="icon-wrapper"  onClick="chekInUser(' + row + ')">' + '<img src="assets/images/checkin-icon.svg" class="svg" width="17" height="17" alt="Check In">' + '</div>';
              }
            },
            renderer: columnrenderer
          }];
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: "372,373"
          };
          this.moveInOutService.getMoveInByStatusIds(params).subscribe(function (res) {
            _this8.moveInDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this8.gridSourceData = {
              localdata: _this8.moveInDataList,
              datatype: "array"
            };
            _this8.listData = new jqx.dataAdapter(_this8.gridSourceData);
            _this8.totalItems = _this8.moveInDataList.length;

            if (_this8.totalItems > _this8.itemLimit) {
              _this8.ItemEndIndex = _this8.itemLimit;
            } else {
              _this8.ItemEndIndex = _this8.totalItems;
            }

            _this8.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this8.blockUnitData = res;
          });
          this.getStatusName();
        }
      }, {
        key: "showMoveInDetails",
        value: function showMoveInDetails(detail) {
          var details = this.datagrid.getrowdata(detail.rowId);
          this.modalService.showMoveInDetails(details);
        }
      }, {
        key: "chekInUser",
        value: function chekInUser(detail) {
          var _this9 = this;

          var data = this.datagrid.getrowdata(detail.rowId);
          var message = "Do you want to check In?";
          var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            if (dialogResult) {
              var details = {
                "id": data.id,
                "inDate": data.inDate,
                "inTime": data.inTime,
                "familyCount": data.familyCount,
                "comments": data.comments,
                "isActive": data.isActive,
                "apartmentBlockUnitId": data.apartmentBlockUnitId,
                "reqUserId": data.reqUserId,
                "statusId": 375,
                "approvedBy": data.approvedBy,
                "approvedDate": data.approvedDate,
                "insertedBy": data.insertedBy,
                "insertedOn": data.insertedOn,
                "updatedBy": parseInt(_this9.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "apartmentId": data.apartmentId,
                "userName": data.userName,
                "mobile": data.mobile,
                "email": data.email,
                "block_Unit": data.block_Unit,
                "requestType": data.requestType,
                "statusName": 'Movedin',
                "serialNo": data.serialNo
              };
              var params = {
                moveIn: details
              };
              _this9.isDataLoaded = false;

              _this9.moveInOutService.updateMoveIn(params).subscribe(function (res) {
                if (res.message) {
                  _this9.sharedService.setAlertMessage("Checked In successfully");

                  var _params = {
                    apartmentId: parseInt(_this9.cookieService.get('apartmentId')),
                    statusIds: "372,373"
                  };

                  _this9.moveInOutService.getMoveInByStatusIds(_params).subscribe(function (res) {
                    _this9.moveInDataList = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this9.gridSourceData = {
                      localdata: _this9.moveInDataList,
                      datatype: "array"
                    };
                    _this9.listData = new jqx.dataAdapter(_this9.gridSourceData);
                    _this9.totalItems = _this9.moveInDataList.length;
                  });

                  _this9.isDataLoaded = true;
                } else {
                  _this9.isError = true;
                  _this9.isDataLoaded = true;
                  _this9.alertMessage = res.errorMessage;
                }
              }, function (error) {
                _this9.isDataLoaded = true;
              });
            }
          });
        }
      }, {
        key: "getStatusName",
        value: function getStatusName() {
          var _this10 = this;

          var params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 92
          };
          this.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
            _this10.statusNames = res.filter(function (item) {
              return item.isActive;
            });

            _this10.statusNames.forEach(function (element) {
              _this10.statusType[element.lookupValueId] = element;
            });
          });
        }
      }, {
        key: "navigateToMovein",
        value: function navigateToMovein() {
          this.router.navigate(['ams/moveinout-tracker/create-movein']);
        }
      }]);

      return MoveinMaintainComponent;
    }();

    MoveinMaintainComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_13__["jqxGridComponent"])], MoveinMaintainComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:approveMoveIn', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MoveinMaintainComponent.prototype, "approveMoveIn", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:showMoveInDetails', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MoveinMaintainComponent.prototype, "showMoveInDetails", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:chekInUser', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MoveinMaintainComponent.prototype, "chekInUser", null);
    MoveinMaintainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movein-maintain',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./movein-maintain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./movein-maintain.component.scss */
      "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])], MoveinMaintainComponent);

    function approveMoveIn(row, type) {
      var event = new CustomEvent('approveMoveIn', {
        detail: {
          rowId: row,
          column: type
        }
      });
      window.dispatchEvent(event);
    }

    window.approveMoveIn = approveMoveIn;

    function showMoveInDetails(row) {
      var event = new CustomEvent('showMoveInDetails', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.showMoveInDetails = showMoveInDetails;

    function chekInUser(row) {
      var event = new CustomEvent('chekInUser', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.chekInUser = chekInUser;
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


    var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/MoveInOut */
    "./src/app/api/controllers/MoveInOut.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
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
          var _this11 = this;

          setTimeout(function () {
            _this11.isDataLoaded = false;
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
              "insertedBy": parseInt(_this11.cookieService.get('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(_this11.cookieService.get('userId')),
              "updatedOn": new Date().toISOString(),
              "apartmentId": parseInt(_this11.cookieService.get('apartmentId'))
            };
            var params = {
              moveInOutConfig: details
            };

            _this11.moveInOutService.updateMoveInOutConfig(params).subscribe(function (res) {
              if (res.message) {
                _this11.isDataLoaded = true;

                _this11.sharedService.setAlertMessage("MoveIn Configuration updated successfully");
              } else {
                _this11.isDataLoaded = true;
              }
            }, function (error) {
              _this11.isDataLoaded = true;
            });
          }, 1000);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.moveInOutService.getMoveInOutConfigByApartmentId(params).subscribe(function (res) {
            _this12.documentDataList = res.filter(function (item) {
              return item.isActive;
            });
            _this12.totalItems = _this12.documentDataList.length;

            if (_this12.totalItems > _this12.itemLimit) {
              _this12.ItemEndIndex = _this12.itemLimit;
            } else {
              _this12.ItemEndIndex = _this12.totalItems;
            }

            _this12.isDataLoaded = true;
          }, function (error) {
            console.log(error);
          }); //document type

          var docListparams = {
            LookupTypeId: 72
          };
          this.lookupService.getLookupValueByLookupTypeId(docListparams).subscribe(function (res) {
            _this12.documentTypeDataList = res.filter(function (item) {
              return item.isActive;
            });

            _this12.documentTypeDataList.forEach(function (element) {
              _this12.documentTypeListObject[element.lookupValueId] = element;
            });
          }, function (error) {});
        }
      }, {
        key: "openDocCriteria",
        value: function openDocCriteria() {
          var _this13 = this;

          var dialogRef = this.dialog.open(src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__["AddDocCriteriaComponent"], {
            width: '400px',
            data: {
              type: 'ADD'
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result.details) {
              var document = result.details;
              _this13.isDataLoaded = false;
              var details = {
                "description": document.description,
                "documentTypeId": parseInt(document.documentTypeId),
                "owner": document.owner,
                "tenant": document.tenant,
                "isMoveIn": document.isMoveIn,
                "comments": document.comments,
                "isMandate": document.isMandate,
                "isActive": document.isActive,
                "isForeignNational": document.isForeignNational,
                "insertedBy": parseInt(_this13.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
                "apartmentId": parseInt(_this13.cookieService.get('apartmentId'))
              };
              var params = {
                moveInOutConfig: details
              };

              _this13.moveInOutService.addMoveInOutConfig(params).subscribe(function (res) {
                if (res.message) {
                  _this13.sharedService.setAlertMessage("Document Criteria Added successfully");

                  var _params2 = {
                    apartmentId: parseInt(_this13.cookieService.get('apartmentId'))
                  };

                  _this13.moveInOutService.getMoveInOutConfigByApartmentId(_params2).subscribe(function (res) {
                    _this13.documentDataList = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this13.isDataLoaded = true;
                  }, function (error) {
                    _this13.isDataLoaded = true;
                  });
                }
              });
            }
          });
        }
      }, {
        key: "openDocCriteriaEdit",
        value: function openDocCriteriaEdit(docData) {
          var _this14 = this;

          var dialogRef = this.dialog.open(src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__["AddDocCriteriaComponent"], {
            width: '400px',
            data: {
              type: 'EDIT',
              data: docData
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result.details) {
              var document = result.details;
              _this14.isDataLoaded = false;
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
                "isForeignNational": document.isForeignNational,
                "insertedBy": document.insertedBy,
                "insertedOn": document.insertedOn,
                "updatedBy": parseInt(_this14.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "apartmentId": parseInt(_this14.cookieService.get('apartmentId'))
              };
              var params = {
                moveInOutConfig: details
              };

              _this14.moveInOutService.updateMoveInOutConfig(params).subscribe(function (res) {
                if (res.message) {
                  _this14.sharedService.setAlertMessage("Document Criteria updated successfully");

                  var _params3 = {
                    apartmentId: parseInt(_this14.cookieService.get('apartmentId'))
                  };

                  _this14.moveInOutService.getMoveInOutConfigByApartmentId(_params3).subscribe(function (res) {
                    _this14.documentDataList = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this14.isDataLoaded = true;
                  }, function (error) {
                    _this14.isDataLoaded = true;
                  });
                }
              });
            }
          });
        }
      }, {
        key: "openDeleteConfirm",
        value: function openDeleteConfirm(docId) {
          var _this15 = this;

          var dialogRef = this.dialog.open(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalComponent"], {
            width: '400px',
            id: docId
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this15.isDataLoaded = false;
              var params = {
                Id: parseInt(docId),
                deleteBy: parseInt(_this15.cookieService.get('userId'))
              };

              _this15.moveInOutService.deleteMoveInOutConfig(params).subscribe(function (res) {
                if (res.message) {
                  var _params4 = {
                    apartmentId: parseInt(_this15.cookieService.get('apartmentId'))
                  };

                  _this15.moveInOutService.getMoveInOutConfigByApartmentId(_params4).subscribe(function (res) {
                    _this15.documentDataList = res.filter(function (item) {
                      return item.isActive;
                    });
                    _this15.totalItems = _this15.documentDataList.length;

                    if (_this15.totalItems > _this15.itemLimit) {
                      _this15.ItemEndIndex = _this15.itemLimit;
                    } else {
                      _this15.ItemEndIndex = _this15.totalItems;
                    }

                    _this15.isDataLoaded = true;
                  }, function (error) {
                    console.log(error);
                  });
                }
              }, function (error) {
                console.log(error);
                _this15.isDataLoaded = true;
              });
            }
          });
        }
      }]);

      return MoveinSetupComponent;
    }();

    MoveinSetupComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
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
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])], MoveinSetupComponent);
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/MoveInOut */
    "./src/app/api/controllers/MoveInOut.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! underscore */
    "./node_modules/underscore/modules/index-all.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var MoveoutCancelComponent =
    /*#__PURE__*/
    function () {
      function MoveoutCancelComponent(moveInOutService, apartmentService, sharedService, cookieService) {
        _classCallCheck(this, MoveoutCancelComponent);

        this.moveInOutService = moveInOutService;
        this.apartmentService = apartmentService;
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
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_8__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this16 = this;

          if (this.moveOutData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.moveOutData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this16.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "getDate",
        value: function getDate(movein, date) {
          this.moveOutDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.outDateData = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
            }
          });
          return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
        }
      }, {
        key: "getTime",
        value: function getTime(time) {
          var timeData = moment__WEBPACK_IMPORTED_MODULE_8__(time, 'HH:mm:ss').toDate();
          return moment__WEBPACK_IMPORTED_MODULE_8__(timeData).format('HH:mm A');
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
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, function (item) {
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
          var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, function (item) {
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
          var _this17 = this;

          var moveOutData = data;
          moveOutData.approvedBy = parseInt(this.cookieService.get('userId'));
          moveOutData.approvedDate = new Date().toISOString();
          this.isMoveOutSubmitted = false;
          this.moveInOutService.updateMoveOut(moveOutData).subscribe(function (res) {
            if (res.message) {
              _this17.isMoveOutSubmitted = true;

              _this17.sharedService.setAlertMessage("Moveout approved successfully");
            } else {
              _this17.isMoveOutSubmitted = true;
              _this17.isError = true;
              _this17.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this17.isMoveOutSubmitted = true;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

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
            text: 'Name',
            datafield: 'userName',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Unit Details',
            datafield: 'block_Unit',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Phone',
            datafield: 'mobile',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Email',
            datafield: 'email',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Expected Date',
            datafield: 'outDate',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format("DD/MM/YYYY") + '</div>';
            },
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Expected Time',
            datafield: 'outTime',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + _this18.getTime(value) + '</div>';
            },
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Actions',
            cellsalign: 'center',
            datafield: 'comments',
            align: 'center',
            minwidth: 120,
            cellclassname: 'action-cell',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutCancelDropDown" aria-haspopup="true" aria-expanded="false">' + '<div class="icon-wrapper">' + ' <img src="assets/images/eye-icon.svg" class="svg" width="17" height="17" alt="Move In">' + ' </div></a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutCancelDropDown">' + ' <a href="javascript:void(0)">' + value + '</a></div>' + '</div>';
            },
            renderer: columnrenderer
          }];
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.moveInOutService.getMoveOutByApartmentId(params).subscribe(function (res) {
            _this18.moveOutDataList = res.filter(function (item) {
              return res.statusId === 380;
            });
            console.log(_this18.moveOutDataList);
            _this18.gridSourceData = {
              localdata: _this18.moveOutDataList,
              datatype: "array"
            };
            _this18.listData = new jqx.dataAdapter(_this18.gridSourceData);
            _this18.totalItems = _this18.moveOutDataList.length;

            if (_this18.totalItems > _this18.itemLimit) {
              _this18.ItemEndIndex = _this18.itemLimit;
            } else {
              _this18.ItemEndIndex = _this18.totalItems;
            }

            _this18.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this18.blockUnitData = res;
          });
        }
      }]);

      return MoveoutCancelComponent;
    }();

    MoveoutCancelComponent.ctorParameters = function () {
      return [{
        type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], MoveoutCancelComponent.prototype, "datagrid", void 0);
    MoveoutCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moveout-cancel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./moveout-cancel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./moveout-cancel.component.scss */
      "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], MoveoutCancelComponent);
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


    var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/api/controllers/MoveInOut */
    "./src/app/api/controllers/MoveInOut.ts");
    /* harmony import */


    var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/Apartment */
    "./src/app/api/controllers/Apartment.ts");
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


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MoveoutMaintainComponent =
    /*#__PURE__*/
    function () {
      function MoveoutMaintainComponent(router, moveInOutService, apartmentService, sharedService, cookieService) {
        _classCallCheck(this, MoveoutMaintainComponent);

        this.router = router;
        this.moveInOutService = moveInOutService;
        this.apartmentService = apartmentService;
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
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_7__(event).format("DD/MM/YYYY");
          } else {
            this.columnField = {};
          }
        }
      }, {
        key: "getDate",
        value: function getDate(movein, date) {
          this.moveOutDataList.map(function (obj) {
            if (obj.id == movein.id) {
              obj.outDateData = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
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
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, function (item) {
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
          var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, function (item) {
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
        value: function approveMoveOut(detail) {
          var _this19 = this;

          var data = this.datagrid.getrowdata(detail.rowId);
          var moveOutData = data;
          moveOutData.approvedBy = parseInt(this.cookieService.get('userId'));
          moveOutData.approvedDate = new Date().toISOString();
          this.isMoveOutSubmitted = false;
          this.moveInOutService.updateMoveOut(moveOutData).subscribe(function (res) {
            if (res.message) {
              _this19.isMoveOutSubmitted = true;

              _this19.sharedService.setAlertMessage("Moveout approved successfully");
            } else {
              _this19.isMoveOutSubmitted = true;
              _this19.isError = true;
              _this19.alertMessage = res.errorMessage;
            }
          }, function (error) {
            _this19.isMoveOutSubmitted = true;
          });
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this20 = this;

          if (this.moveOutData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.moveOutData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this20.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          } else {
            this.datagrid.clearfilters();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

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
            text: 'Name',
            datafield: 'userName',
            width: 100,
            cellsrenderer: cellsrenderer,
            renderer: columnrenderer
          }, {
            text: 'Tower Unit',
            datafield: 'block_Unit',
            cellsrenderer: cellsrenderer,
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Phone',
            datafield: 'mobile',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Email',
            datafield: 'email',
            cellsrenderer: cellsrenderer,
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Date',
            datafield: 'outDate',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format("DD/MM/YYYY") + '</div>';
            },
            minwidth: 80,
            renderer: columnrenderer
          }, {
            text: 'Time',
            datafield: 'outTime',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + _this21.getTime(value) + '</div>';
            },
            minwidth: 170,
            renderer: columnrenderer
          }, {
            text: 'Actions',
            cellsalign: 'center',
            align: 'center',
            minwidth: 120,
            cellclassname: 'action-cell',
            cellsrenderer: function cellsrenderer(row, column, value) {
              var id_ = _this21.moveOutDataList[row].approvedBy;

              if (id_ == null) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutDropDown" aria-haspopup="true" aria-expanded="false">' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '</a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutDropDown">' + '<a href="javascript:void(0)" onClick="approveMoveOut(' + row + ')">Approve</a>' + '<a href="javascript:void(0)" onClick="navigateTo(' + row + ')">Edit</a>' + '</div>' + '</div>';
              } else if (id_ == !null) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutDropDown" aria-haspopup="true" aria-expanded="false">' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '<span class="action-dot"></span>' + '</a>' + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutDropDown">' + '<a href="javascript:void(0)" class="no-link grey">Approved</a>' + '<a href="javascript:void(0)" routerLink="/ams/moveinout-tracker/edit-moveout/{{moveout.id}}">Edit</a>' + '</div>' + '</div>';
              }
            },
            renderer: columnrenderer
          }];
          var params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
          this.moveInOutService.getMoveOutByApartmentId(params).subscribe(function (res) {
            _this21.moveOutDataList = res.filter(function (item) {
              return item.isActive;
            });
            console.log(_this21.moveOutDataList);
            _this21.gridSourceData = {
              localdata: _this21.moveOutDataList,
              datatype: "array"
            };
            _this21.listData = new jqx.dataAdapter(_this21.gridSourceData);
            _this21.totalItems = _this21.moveOutDataList.length;

            if (_this21.totalItems > _this21.itemLimit) {
              _this21.ItemEndIndex = _this21.itemLimit;
            } else {
              _this21.ItemEndIndex = _this21.totalItems;
            }

            _this21.isDataLoaded = true;
          });
          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this21.blockUnitData = res;
          });
        }
      }, {
        key: "navigateTo",
        value: function navigateTo(detail) {
          var dataRecord = this.datagrid.getrowdata(detail.rowId);
          var id = dataRecord.id;
          this.router.navigateByUrl('/ams/moveinout-tracker/edit-moveout/' + id);
        }
      }]);

      return MoveoutMaintainComponent;
    }();

    MoveoutMaintainComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"]
      }, {
        type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])], MoveoutMaintainComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:approveMoveIn', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MoveoutMaintainComponent.prototype, "approveMoveOut", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:navigateTo', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], MoveoutMaintainComponent.prototype, "navigateTo", null);
    MoveoutMaintainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-moveout-maintain',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./moveout-maintain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./moveout-maintain.component.scss */
      "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], MoveoutMaintainComponent);

    function navigateTo(row) {
      var event = new CustomEvent('navigateTo', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.navigateTo = navigateTo;

    function approveMoveOut(row) {
      var event = new CustomEvent('approveMoveOut', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.approveMoveOut = approveMoveOut;
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
    /* harmony import */


    var _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/movein-admin-history/movein-admin-history.component */
    "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts");

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
      path: 'create-movein',
      component: _shared_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_7__["UserMoveinComponent"]
    }, {
      path: 'movein-history',
      component: _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_10__["MoveinAdminHistoryComponent"]
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
    /* harmony import */


    var _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/movein-admin-history/movein-admin-history.component */
    "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts");

    var MoveinoutTrackerModule = function MoveinoutTrackerModule() {
      _classCallCheck(this, MoveinoutTrackerModule);
    };

    MoveinoutTrackerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"], _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_6__["MoveinSetupComponent"], _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_7__["MoveinMaintainComponent"], _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_13__["MoveinAdminHistoryComponent"], _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_8__["MoveoutMaintainComponent"], _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_9__["MoveinReportsComponent"], _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_10__["MoveinMoveoutCancelComponent"], _components_movein_cancel_movein_cancel_component__WEBPACK_IMPORTED_MODULE_11__["MoveinCancelComponent"], _components_moveout_cancel_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_12__["MoveoutCancelComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoveinoutTrackerRoutingModule"]],
      bootstrap: [_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"]]
    })], MoveinoutTrackerModule);
    /***/
  }
}]);
//# sourceMappingURL=moveinout-tracker-moveinout-tracker-module-es5.js.map