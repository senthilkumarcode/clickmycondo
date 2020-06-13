(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["moveinout-tracker-moveinout-tracker-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"user-movein-maintain-wrapper\">\n\n\t<div class=\"d-flex align-items-center\">\n\t\t<h5 class=\"mb-4\">\n\t\t\t<span>Add Movein</span>\n\t\t</h5>\n\n\t\t<div class=\"relative-card ml-auto\">\n\t\t\t<div class=\"relative-icon\">\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/movein\" routerLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t<img class=\"svg\" src=\"assets/images/book-icon.svg\" width=\"17\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class=\"d-inline-block\">All MoveIn</span>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear mb-3 details-card\">\n\t\t<div class=\"card-header no-border\" *ngIf=\"isDataLoaded\">\n\t\t\t<div class=\"sub-details\">\n\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/user-liner-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">User </h6>\n\t\t\t\t\t\t\t<p>{{userName}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/apartment2-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">Block No </h6>\n\t\t\t\t\t\t\t<p>{{apartmentBlockNumber}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"lists\">\n\t\t\t\t\t<div class=\"media\">\n\t\t\t\t\t\t<img class=\"mr-3 svg\" src=\"assets/images/apartment2-icon.svg\" width=\"20\">\n\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t<h6 class=\"head\">Unit No </h6>\n\t\t\t\t\t\t\t<p>{{apartmentBlockUnitNumber}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear\">\n\n\t\t<form #createMoveInForm=\"ngForm\" name=\"createMoveInForm\" (ngSubmit)=\"submitCreateMoveInForm(createMoveInForm)\"\n\t\t\tnovalidate>\n\n\t\t\t<div class=\"card-body\">\n\n\t\t\t\t<app-loader *ngIf=\"!isMoveinSubmitted\"></app-loader>\n\n\t\t\t\t<app-alert-message [message]=\"alertMessage\" [isError]=\"isError\"></app-alert-message>\n\n\t\t\t\t<ng-container *ngIf=\"isMoveinSubmitted\">\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Family Count<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter count\"\n\t\t\t\t\t\t\t\t\tname=\"familyCount\" [(ngModel)]=\"movein.familyCount\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>MoveIn Date<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"moveInDate\" [owlDateTime]=\"moveInDate\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"moveInDate\" placeholder=\"Date\" (change)=\"dateChange()\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"movein.inDate\" [min]=\"min\" required>\n\t\t\t\t\t\t\t\t<owl-date-time #moveInDate [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"moveInDate\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span *ngIf=\"showDateError\" style=\"color:red\">Date should be equal to or greater than\n\t\t\t\t\t\t\t\t\tcurrent date</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>MoveIn Time<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"moveInTime\" [owlDateTime]=\"moveInTime\"\n\t\t\t\t\t\t\t\t\t[owlDateTimeTrigger]=\"moveInTime\" placeholder=\"Date\" [(ngModel)]=\"movein.inTime\"\n\t\t\t\t\t\t\t\t\trequired>\n\t\t\t\t\t\t\t\t<owl-date-time #moveInTime [pickerType]=\"'timer'\"></owl-date-time>\n\t\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"moveInTime\">\n\t\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t\t<label>Requested By<span class=\"required\">*</span></label>\n\t\t\t\t\t\t\t\t<select name=\"raisedBy\" id=\"raisedBy\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"movein.reqUserId\">\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of raisedByData\" [value]=\"item.userId\">{{ item.firstName }}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Comments</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"comment\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"movein.comment\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-sm-4\">\n\t\t\t\t\t\t\t<label for=\"\" class=\"control-label\">Are you a foreign national?</label>\n\t\t\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"category\"\n\t\t\t\t\t\t\t\t\t\tname=\"inlineRadio1\" id=\"inlineRadio1\" value=\"Yes\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"inlineRadio1\">Yes</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-check form-check-inline\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-check-input\" type=\"radio\" [(ngModel)]=\"category\"\n\t\t\t\t\t\t\t\t\t\tname=\"inlineRadio1\" id=\"inlineRadio2\" value=\"No\">\n\t\t\t\t\t\t\t\t\t<label class=\"form-check-label\" for=\"inlineRadio2\">No</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"movein-box\">\n\t\t\t\t\t\t\t\t<p>Information message:</p>\n\t\t\t\t\t\t\t\t<p>upload below mandatory documents*</p>\n\t\t\t\t\t\t\t\t<p>Driving licence</p>\n\t\t\t\t\t\t\t\t<p>Passport</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</ng-container>\n\n\t\t\t</div>\n\t\t\t<div class=\"card-body border-top\"\n\t\t\t\t*ngIf=\"isMoveinSubmitted && !isFileDetailsAvailable\">\n\t\t\t\t<div *ngIf=\"uploadResponse.status == ''\">\n\t\t\t\t\t<h6 class=\"sub-title mb-20\">\n\t\t\t\t\t\t<span class=\"icon-wrapper\">\n\t\t\t\t\t\t\t<i-feather class=\"icon upload\" name=\"upload\"></i-feather>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<span>Document to upload</span>\n\t\t\t\t\t</h6>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box select-box\">\n\t\t\t\t\t\t\t\t<label>Document type</label>\n\t\t\t\t\t\t\t\t<select name=\"documentConfigId\" id=\"documentConfigId\" class=\"form-control\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"documentConfigId\">\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of documentDataList\" [value]=\"item.id\">\n\t\t\t\t\t\t\t\t\t\t{{ item.description }}\n\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Comments</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"comment\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"documentComment\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t<div class=\"input-box mb-0\">\n\t\t\t\t\t\t\t\t<label class=\"btn sf lime-green\" for=\"my-file-selector\" (click)=\"uploader.click()\"\n\t\t\t\t\t\t\t\t\t[ngClass]=\"documentConfigId == '' ? 'disabled' : ''\">\n\t\t\t\t\t\t\t\t\t<input class=\"form-control\" #uploader type=\"file\"\n\t\t\t\t\t\t\t\t\t\t(change)=\"uploadFile($event.target.files)\" [(ngModel)]=\"movein.file\" multiple>\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-paperclip mr-2\" aria-hidden=\"true\"></i> Add file</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"progress\" *ngIf=\"uploadResponse.status == 'progress'\">\n\t\t\t\t\t<div class=\"progress-bar progress-bar-striped\" role=\"progressbar\"\n\t\t\t\t\t\t[style.width.%]=\"uploadResponse.message\" aria-valuenow=\"10\" aria-valuemin=\"0\"\n\t\t\t\t\t\taria-valuemax=\"100\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body border-top\" *ngIf=\"isMoveinSubmitted && isFileDetailsAvailable\">\n\t\t\t\t<h6 class=\"sub-title mb-20\">Document</h6>\n\n\t\t\t\t<ng-container>\n\t\t\t\t\t<div class=\"file-desp\">\n\t\t\t\t\t\t<span class=\"name mr-3\">\n\t\t\t\t\t\t\t<a [href]=\"fileUrl\" target=\"_blank\">{{filePath}}</a>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<i-feather class=\"icon del\" name=\"x\" (click)=\"deleteFile()\"></i-feather>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\n\n\t\t\t<div class=\"card-body border-top\" *ngIf=\"isMoveinSubmitted\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12 text-right\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"!createMoveInForm.valid\">Submit</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t</form>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"movein-admin-history-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n    <ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n        <li class=\"list-inline-item\"><span><img src=\"assets/images/movein-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n                    alt=\"Moved In\"></span>Moved In</li>\n        <li class=\"list-inline-item\"><span><img src=\"assets/images/moveout-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n            alt=\"Moved In\"></span>Moved Out</li>\n        <li class=\"list-inline-item\"><span class=\"dots grey-850\"></span>Cancelled</li>\n        <li class=\"list-inline-item\"><span class=\"dots m-yellow\"></span>Rejected</li>\n    </ul>\n    <div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>History <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n            </div>\n\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInOutHitoryData\" (ngModelChange)=\"onGlSearchFilter()\">\n                </li>\n                <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n\n            <!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n                <thead>\n                    <tr>\n                        <th scope=\"col\">\n                            Name\n                            <span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Name\"\n                                [(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\">\n                        </th>\n                        <th scope=\"col\">\n                            Unit Details <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n                                [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Block No\"\n                                [(ngModel)]=\"columnField['apartmentBlockNumber']\"\n                                (ngModelChange)=\"selectColInput('apartmentBlockNumber')\">\n                        </th>\n\n                        <th scope=\"col\">\n                            Phone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Phone\"\n                                [(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\">\n                        </th>\n                        <th scope=\"col\">\n                            Email <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n                                [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\">\n                        </th>\n                        <th scope=\"col\">Date\n                            <span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n                            <app-simple-date-box [dateModel]=\"inDateData\"\n                                (inputChange)=\"onDateChange($event, 'inDateData')\"></app-simple-date-box>\n                        </th>\n                        <th scope=\"col\">Time\n                            <span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n                                [(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\">\n                        </th>\n                        <th scope=\"col\">Status\n                            <span (click)=\"sortUnitData('statusId')\" [ngClass]=\"getFieldOrderBy('statusId')\"></span>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Status\"\n                                [(ngModel)]=\"columnField['statusId']\" (ngModelChange)=\"selectColInput('statusId')\">\n                        </th>\n                        <th></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr\n                        *ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInOutHitoryData | columnSearch: columnField:selectedInput ; let i = index\">\n                        <td class=\"name\">{{movein.userName}}</td>\n                        <td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}},\n                            {{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}\n                        </td>\n                        <td class=\"grey\">{{movein.mobile}}</td>\n                        <td class=\"grey\">{{movein.email}}</td>\n                        <td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n                        <td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n                        <td class=\"grey\">\n                            <span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(movein.statusId)\"></span>\n                        </td>\n                        <td>\n                            <div class=\"icon-wrapper\" *ngIf=\"movein.statusId == 375\">\n                                <img src=\"assets/images/movein-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n                                    alt=\"Moved In\">\n                            </div>\n                        </td>\n                    </tr>\n\n                </tbody>\n\n            </table>\n            <div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n                <p class=\"snippet\">No Data Available</p>\n            </div>\n            <app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n                [itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n            </app-pagination> -->\n            <jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"movein-maintain-wrapper\">\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveIn <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tBlock No <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Unit No <span (click)=\"sortUnitData('apartmentBlockUnitNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{movein.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveInCancelDropDown\"\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/eye-icon.svg\" class=\"svg\" width=\"17\" height=\"17\" alt=\"Move In\">\n\t\t\t\t\t\t\t</div></a>\n\t\t\t\t\t\t\t<div *ngIf=\"movein.comments != null && movein.comments !=''\" class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveInCancelDropDown\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">{{ movein.comments }}</a></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"movein-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t</ul>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveIn <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveInData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<button class=\"btn lime-green\" (click)=\"navigateToMovein()\" type=\"button\">Add MoveIn</button>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Name\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['userName']\" (ngModelChange)=\"selectColInput('userName')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tUnit Details <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Block No\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['apartmentBlockNumber']\"\n\t\t\t\t\t\t\t\t(ngModelChange)=\"selectColInput('apartmentBlockNumber')\">\n\t\t\t\t\t\t</th>\n\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Phone\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inDateData')\" [ngClass]=\"getFieldOrderBy('inDateData')\"></span>\n\t\t\t\t\t\t\t<app-simple-date-box [dateModel]=\"inDateData\"\n\t\t\t\t\t\t\t\t(inputChange)=\"onDateChange($event, 'inDateData')\"></app-simple-date-box>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Expected Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Email\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Status\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('statusId')\" [ngClass]=\"getFieldOrderBy('statusId')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Status\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['statusId']\" (ngModelChange)=\"selectColInput('statusId')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\">\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let movein of moveInDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveInData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{movein.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(movein, movein.apartmentBlockUnitId)}},\n\t\t\t\t\t\t\t{{getBlockUnitNo(movein, movein.apartmentBlockUnitId)}}\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{movein.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(movein, movein.inDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(movein.inTime) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t<span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(movein.statusId)\"></span>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveInDropDown\"\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t\t<span class=\"action-dot\"></span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveInDropDown\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveIn(movein, 'approve')\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 372\">Approve</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveIn(movein, 'reject')\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 372\">Reject</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"no-link grey\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 373\">Approved</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"no-link grey\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"movein.statusId == 374\">Rejected</a>\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showMoveInDetails(movein)\">View</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\" *ngIf=\"movein.statusId == 373\" (click)=\"chekInUser(movein, i)\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/checkin-icon.svg\" class=\"svg\" width=\"17\" height=\"17\"\n\t\t\t\t\t\t\t\t\talt=\"Check In\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-movein-cancel></app-movein-cancel>\n<hr>\n<app-moveout-cancel></app-moveout-cancel>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"movein-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>General</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Foreign Nationals</li>\n\t</ul>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card clear table-card\">\n\t\t\t\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<div class=\"float-left\">\n\t    \t\t\t<h5>Documents required</h5>\n\t\t\t\t</div>\n\t\t\t\t<button class=\"float-right btn lime-green\" (click)=\"openDocCriteria()\" type=\"button\">Add Document Criteria</button>\n\t\t\t</div>\n\t\t\t<div class=\"card-body p-0\">\n\t\t\t\t\n\t\t\t\t<table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t    <tr>\n\t\t\t\t\t       <th scope=\"col\" (click)=\"sortUnitData('description')\">Name<span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t\t\t   <!-- <th scope=\"col\" (click)=\"sortUnitData('isMandate')\">Is Mandatory <span [ngClass]=\"getFieldOrderBy('isMandate')\"></span></th> -->\n\t\t\t\t\t\t   <th scope=\"col\" (click)=\"sortUnitData('documentTypeId')\">Category <span [ngClass]=\"getFieldOrderBy('documentTypeId')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('owner')\">Owner <span [ngClass]=\"getFieldOrderBy('owner')\"></span></th>\n\t\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('tenant')\">Tenant<span [ngClass]=\"getFieldOrderBy('tenant')\"></span></th>\n\t\t\t\t\t\t  <th scope=\"col\" (click)=\"sortUnitData('type')\">Type<span [ngClass]=\"getFieldOrderBy('type')\"></span></th>\n\t\t\t\t\t\t  <th></th>\n\t\t\t\t\t    </tr>\n\t\t\t\t    </thead>\n\t\t\t\t     <tbody>\n\t\t\t\t\t    <tr *ngFor=\"let document of documentDataList | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t\t    \t<td class=\"name\">{{document.description}}</td>\n\t\t\t\t\t    \t<!-- <td class=\"name\">{{getStatus(document.isMandate)}}</td> -->\n\t\t\t\t\t    \t<td class=\"name\">{{getCategory(document.documentTypeId)}}</td>\n\t\t\t\t\t    \t<td>\n\t\t\t\t\t\t\t\t<label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" [(ngModel)]=\"document.owner\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t\t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t     \t </td>\n\t\t\t\t\t\t\t <td>\n\t\t\t\t\t\t\t\t <label class=\"switch float-left\">\n\t\t\t\t\t\t\t\t \t<input type=\"checkbox\" [(ngModel)]=\"document.tenant\" [ngClass]=\"document.isMandate ? '' : 'no-link'\">\n\t\t\t\t\t\t\t\t \t<span class=\"slider round\" (click)=\"updateDocType(document)\" [ngClass]=\"document.isMandate ? '' : 'no-link'\"></span>\n\t\t\t\t\t\t\t\t </label>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t\t<!-- <span class=\"dots rt-3\" [ngClass]=\"getDocumentType(document.documentTypeId)\"></span> -->\n\t\t\t\t\t\t\t\t<span [ngClass]=\"{ 'dots': true, 'low':document.isForeignNational==null || !document.isForeignNational, 'medium': document.isForeignNational }\"></span>\n\t\t\t\t\t\t\t\t<bdi>{{document.isForeignNational?'Foreign':'General'}} National</bdi>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<img title=\"Edit\" src=\"assets/images/edit-icon-blue.svg\" class=\"icon-edit mr-3\" (click)=\"openDocCriteriaEdit(document)\" alt=\"\">\n\t\t\t\t\t\t\t\t<img title=\"Remove\" src=\"assets/images/bin-icon-red.svg\" class=\"icon-bin\" alt=\"\" (click)=\"openDeleteConfirm(document.id)\">\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t    </tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<app-pagination \n\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t</app-pagination>\n\t\t\t</div>\n\n\t\t</div>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"moveout-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>MoveOut <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n\t\t\t</div>\n\t\t\t<ul class=\"list-inline\">\n\t\t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n\t\t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveOutData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t</ul>\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tName\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tBlock No <span (click)=\"sortUnitData('apartmentBlockNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Unit No <span (click)=\"sortUnitData('apartmentBlockUnitNumber')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">\n\t\t\t\t\t\t\tEmail <span (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Date\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('outDateData')\"\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('outDateData')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\">Time\n\t\t\t\t\t\t\t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t\t\t\tActions\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let moveout of moveOutDataList | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: moveOutData | columnSearch: columnField:selectedInput ; let i = index\">\n\t\t\t\t\t\t<td class=\"name\">{{moveout.userName}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockNo(moveout, moveout.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{getBlockUnitNo(moveout, moveout.apartmentBlockUnitId)}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{moveout.mobile}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{moveout.email}}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getDate(moveout, moveout.outDate) }}</td>\n\t\t\t\t\t\t<td class=\"grey\">{{ getTime(moveout.outTime) }}</td>\n\t\t\t\t\t\t<td class=\"name actions text-center\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveOutCancelDropDown\"\n\t\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t\t\t\t<img src=\"assets/images/eye-icon.svg\" class=\"svg\" width=\"17\" height=\"17\" alt=\"Move In\">\n\t\t\t\t\t\t\t</div></a>\n\t\t\t\t\t\t\t<div *ngIf=\"moveout.comments != null && moveout.comments !=''\" class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveOutCancelDropDown\">\n\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\">{{ moveout.comments }}</a></div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\n\t\t\t\t</tbody>\n\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n\t\t\t\t<p class=\"snippet\">No Data Available</p>\n\t\t\t</div>\n\t\t\t<app-pagination [totalItems]=\"totalItems\" [ItemStartIndex]=\"ItemStartIndex\" [ItemEndIndex]=\"ItemEndIndex\"\n\t\t\t\t[itemLimit]=\"itemLimit\" (outputParams)=\"getIndexParams($event)\">\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t</div>\n\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"moveout-maintain-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ul class=\"legends list-inline\" *ngIf=\"isDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span>Un Approved</li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots low\"></span>Approved</li>\n\t</ul>\n\n\t<div class=\"card clear table-card\" *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>MoveOut <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"moveOutData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t<button class=\"btn lime-green\" (click)=\"navigateToMoveOut()\" type=\"button\">Add MoveOut</button>\n\t\t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n  \t\t\t\t\n  \t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tName \n\t\t\t\t      \t<span (click)=\"sortUnitData('userName')\" [ngClass]=\"getFieldOrderBy('userName')\"></span>\n\t\t\t            <input type=\"text\" class=\"form-control\" placeholder=\"Name\" [(ngModel)]=\"columnField['userName']\" \n\t\t\t            (ngModelChange)=\"selectColInput('userName')\" >\n\t\t\t\t      </th>\n\t\t\t\t\t  <th scope=\"col\">\n\t\t\t\t\t\tTower Unit <span  (click)=\"sortUnitData('block_Unit')\" [ngClass]=\"getFieldOrderBy('block_Unit')\"></span>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Tower Unit\" [(ngModel)]=\"columnField['block_Unit']\" (ngModelChange)=\"selectColInput('block_Unit')\" >\n\t\t\t\t\t  </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tPhone <span (click)=\"sortUnitData('mobile')\" [ngClass]=\"getFieldOrderBy('mobile')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" [(ngModel)]=\"columnField['mobile']\" (ngModelChange)=\"selectColInput('mobile')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">\n\t\t\t\t      \tEmail <span  (click)=\"sortUnitData('email')\" [ngClass]=\"getFieldOrderBy('email')\"></span>\n\t\t\t\t      \t <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['email']\" (ngModelChange)=\"selectColInput('email')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Date \n\t\t\t\t      \t<span (click)=\"sortUnitData('outDateData')\" [ngClass]=\"getFieldOrderBy('outDateData')\"></span>\n\t\t\t\t      \t<app-simple-date-box \n\t\t\t\t\t      \t[dateModel]=\"outDateData\"\n\t\t\t\t\t      \t(inputChange) = \"onDateChange($event, 'outDateData')\"\n\t\t\t\t\t    ></app-simple-date-box>\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\">Time \n\t\t\t\t      \t<span (click)=\"sortUnitData('inTime')\" [ngClass]=\"getFieldOrderBy('inTime')\"></span>\n\t\t\t\t      \t<input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"columnField['inTime']\" (ngModelChange)=\"selectColInput('inTime')\" >\n\t\t\t\t      </th>\n\t\t\t\t      <th scope=\"col\" class=\"simple-actions\">\n\t\t\t\t      Actions\n\t\t\t\t      <input type=\"text\" class=\"form-control vis-h\" placeholder=\"Action\" [(ngModel)]=\"columnField['action']\" (ngModelChange)=\"selectColInput('action')\" >\n\t\t\t\t  \t  </th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t     <tbody>\n\t\t\t\t    <tr *ngFor=\"let moveout of moveOutDataList | simpleSearch: moveOutData | columnSearch: columnField:selectedInput | sort : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\"><span class=\"dots mr-3\" [ngClass]=\"getApproveStatus(moveout.approvedBy)\"></span>{{moveout.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.block_Unit}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.mobile}}</td>\n\t\t\t\t      <td class=\"grey\">{{moveout.email}}</td>\n\t\t\t\t      <td class=\"grey\">{{ getDate(moveout, moveout.outDate) }}</td>\n\t\t\t\t      <td class=\"grey\">{{ getTime(moveout.outTime) }}</td>\n\t\t\t\t      <td class=\"name actions text-center\">\n\t\t\t\t      \t<a href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" id=\"moveOutDropDown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t\t<span class=\"action-dot\"></span>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<div class=\"dropdown-menu action-menu dropdown-menu-right\" aria-labelledby=\"moveOutDropDown\">\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" (click)=\"approveMoveOut(moveout)\" *ngIf=\"moveout.approvedBy == null\">Approve/Reject</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" class=\"no-link grey\" *ngIf=\"moveout.approvedBy != null\">Approved</a>\n\t\t\t\t      \t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/moveinout-tracker/edit-moveout/{{moveout.id}}\">Edit</a>\n\t\t\t\t      \t</div>\n    \t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t\t    \n\t\t\t    </tbody>\n\n  \t\t\t</table>\n  \t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination> -->\n\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n  \t\t</div>\n\t\t\n\t</div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/moveinout-tracker.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/moveinout-tracker.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL2NyZWF0ZS1tb3ZlaW4vY3JlYXRlLW1vdmVpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CreateMoveinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMoveinComponent", function() { return CreateMoveinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/MoveInOut */ "./src/app/api/controllers/MoveInOut.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/api/controllers/FileDetails */ "./src/app/api/controllers/FileDetails.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/file-upload.service */ "./src/app/shared/services/file-upload.service.ts");
/* harmony import */ var src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/file-download.service */ "./src/app/shared/services/file-download.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");














let CreateMoveinComponent = class CreateMoveinComponent {
    constructor(router, route, sanitizer, moveInOutService, userService, apartmentService, lookupService, sharedService, cookieService, fileUploadService, fileDownloadService, fileDetailsService) {
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.moveInOutService = moveInOutService;
        this.userService = userService;
        this.apartmentService = apartmentService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.fileUploadService = fileUploadService;
        this.fileDownloadService = fileDownloadService;
        this.fileDetailsService = fileDetailsService;
        this.apartmentBlockNumber = "";
        this.apartmentBlockUnitNumber = "";
        this.isMoveinSubmitted = true;
        this.isError = false;
        this.alertMessage = "";
        this.isDataLoaded = false;
        this.userName = "";
        this.documentConfigId = "";
        this.documentComment = "";
        this.isFileAdded = false;
        this.fileList = [];
        this.listOfFiles = [];
        this.error = "";
        this.isFileDetailsAvailable = false;
        this.fileUrl = "";
        this.min = new Date();
        this.showDateError = false;
    }
    getBlock() {
        let params = {
            apartmentBlockUnitId: parseInt(this.apartmentBlockUnitId)
        };
        this.apartmentService.getApartmentBlockUnitById(params).subscribe((res) => {
            this.apartmentBlockNumber = res[0].apartmentBlockNumber;
            this.apartmentBlockUnitNumber = res[0].apartmentBlockUnitNumber;
        }, error => {
            console.log(error);
        });
    }
    isUploadProgess() {
        return this.uploadResponse.status == "progress" ? true : false;
    }
    isUploadCompleted() {
        return this.uploadResponse.status == "completed" ? true : false;
    }
    uploadFile(event) {
        this.fileData = event[0];
        let userId = parseInt(this.cookieService.get('userId'));
        this.fileUploadService.upload(this.fileData, userId).subscribe((res) => {
            if (res != undefined) {
                this.uploadResponse = res;
            }
            if (this.isUploadCompleted()) {
                let newParams = {
                    fileDetailsId: this.uploadResponse.fileId,
                    apartmentId: Number(this.cookieService.get('apartmentId'))
                };
                this.fileDetailsService.getFileDetailsById(newParams).subscribe((res) => {
                    this.filePath = res[0].filePath;
                    this.downloadFile(this.filePath);
                });
            }
        });
    }
    downloadFile(filePath) {
        this.fileDownloadService.downloadFile(filePath).subscribe((res) => {
            this.isFileDetailsAvailable = true;
            let splitFile = filePath.split('.');
            const blob = res.body;
            let objectURL = URL.createObjectURL(blob);
            let sanitizeUrl = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            this.fileUrl = sanitizeUrl;
        });
    }
    deleteFile() {
        let details = {
            "fileDetailsId": this.uploadResponse.fileId,
            "fileName": this.filePath,
            "filePath": this.filePath,
            "fileSize": 0,
            "description": this.filePath,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "apartmentId": parseInt(this.cookieService.get('apartmentId'))
        };
        let params = {
            fileDetails: details
        };
        this.fileDetailsService.deleteFileDetails(params).subscribe((res) => {
            this.isFileDetailsAvailable = false;
            this.uploadResponse = { status: '', message: '', fileId: null };
        });
    }
    // uploadFile(event){
    //   this.isFileAdded = true;
    //   for (var i = 0; i <= event.target.files.length - 1; i++) {
    //     var selectedFile = event.target.files[i];
    //     this.fileList.push(selectedFile);
    //     this.listOfFiles.push({'name':selectedFile.name, 'size':selectedFile.size});
    //     console.log(this.fileList[0]);
    //   }
    // }
    // deleteFile(index){
    //   // Delete the item from fileNames list
    //   this.listOfFiles.splice(index, 1);
    //   // delete file from FileList
    //   this.fileList.splice(index, 1);
    //   this.selectedFile = null;
    //   if(this.fileList.length == 0 && this.listOfFiles.length == 0){
    //     this.isFileAdded = false;
    //   }
    // }
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
    isFileEmpty() {
        return this.fileList.length == 0;
    }
    dateChange() {
        this.showDateError = false;
    }
    submitCreateMoveInForm(form) {
        let selectedDate = new Date(this.movein.inDate);
        let now = new Date();
        if (selectedDate < now) {
            this.showDateError = true;
        }
        else {
            this.isMoveinSubmitted = false;
            let details = {
                "inDate": this.movein.inDate,
                "inTime": moment__WEBPACK_IMPORTED_MODULE_8__(this.movein.inTime).format('HH:mm:ss'),
                "familyCount": this.movein.familyCount,
                "comments": this.movein.comment,
                "apartmentBlockUnitId": parseInt(this.apartmentBlockUnitId),
                "reqUserId": this.movein.reqUserId,
                "statusId": 372,
                "approvedBy": null,
                "approvedDate": null,
                "isActive": true,
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
                "apartmentId": parseInt(this.cookieService.get('apartmentId')),
                "userName": this.userName,
                "mobile": this.raisedByData[0].phoneNumber,
                "email": this.raisedByData[0].emailId,
                "block_Unit": this.apartmentBlockNumber + ' ' + this.apartmentBlockUnitNumber,
                "requestType": "MoveIn",
                "statusName": "Pending Approval",
            };
            let params = {
                moveIn: details
            };
            this.moveInOutService.addMoveIn(params).subscribe((res) => {
                if (res.message) {
                    let fileDetails = {
                        "moveInId": parseInt(res.message),
                        "moveInOutConfigId": parseInt(this.documentConfigId),
                        "fileDetailsId": this.uploadResponse.fileId,
                        "comments": this.documentComment,
                        "isActive": true,
                        "insertedBy": parseInt(this.cookieService.get('userId')),
                        "insertedOn": new Date().toISOString(),
                        "updatedBy": null,
                        "updatedOn": null
                    };
                    let fileParams = {
                        moveIn: fileDetails,
                        file: this.fileData,
                        apartmentId: parseInt(this.cookieService.get('apartmentId'))
                    };
                    this.moveInOutService.addMoveInDetails(fileParams).subscribe((res) => {
                        if (res.message) {
                            this.isMoveinSubmitted = true;
                            this.sharedService.setAlertMessage("Movein added successfully");
                            this.router.navigate(['ams/moveinout-tracker/movein']);
                        }
                        else {
                            this.isMoveinSubmitted = true;
                            this.isError = true;
                            this.alertMessage = res.errorMessage;
                        }
                    }, error => {
                        this.isMoveinSubmitted = true;
                    });
                }
                else {
                    this.isMoveinSubmitted = true;
                    this.isError = true;
                    this.alertMessage = res.errorMessage;
                }
            }, error => {
                this.isMoveinSubmitted = true;
            });
        }
    }
    ngOnInit() {
        this.uploadResponse = { status: '', message: '', fileId: null };
        this.getUserRole = this.cookieService.get('userRole');
        this.movein = {};
        let params = {
            userId: parseInt(this.cookieService.get('userId'))
        };
        this.apartmentService.getAllApartmentBlockUnitUsersByUserId(params).subscribe((res) => {
            if (res == undefined || res.length == 0) {
                this.apartmentBlockUnitId = "";
            }
            else {
                this.apartmentBlockUnitId = "" + res[0].apartmentBlockUnitId;
                this.getBlock();
            }
        }, error => {
        });
        let blockParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //get apartment blocks
        this.apartmentService.getApartmentBlockByApartmentId(blockParams).subscribe((res) => {
            this.blocksData = res;
        });
        let statusParams = {
            LookupTypeId: 73
        };
        //status 
        this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe((res) => {
            this.statusTypeData = res.filter(item => {
                return item.isActive;
            });
        }, error => {
        });
        let docParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.moveInOutService.getMoveInOutConfigByApartmentId(docParams).subscribe((res) => {
            this.documentDataList = res.filter(item => {
                return item.isActive;
            });
        }, error => {
            console.log(error);
        });
        let userParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        //get all users
        this.userService.getAllUsersByApartmentId(userParams).subscribe((res) => {
            this.userDetails = res;
            this.raisedByData = res;
            this.raisedByData = res.filter(item => {
                return item.userId == parseInt(this.cookieService.get('userId'));
            });
            this.movein.reqUserId = this.raisedByData[0].userId;
            this.userName = this.raisedByData[0].firstName + ' ' + this.raisedByData[0].lastName;
            this.isDataLoaded = true;
        }, error => {
        });
    }
};
CreateMoveinComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"] },
    { type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_4__["MoveInOutService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] },
    { type: src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_11__["FileUploadService"] },
    { type: src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_12__["FileDownloadService"] },
    { type: src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_9__["FileDetailsService"] }
];
CreateMoveinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-movein',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-movein.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-movein.component.scss */ "./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"],
        src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_4__["MoveInOutService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
        src_app_shared_services_file_upload_service__WEBPACK_IMPORTED_MODULE_11__["FileUploadService"],
        src_app_shared_services_file_download_service__WEBPACK_IMPORTED_MODULE_12__["FileDownloadService"],
        src_app_api_controllers_FileDetails__WEBPACK_IMPORTED_MODULE_9__["FileDetailsService"]])
], CreateMoveinComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1hZG1pbi1oaXN0b3J5L21vdmVpbi1hZG1pbi1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: MoveinAdminHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinAdminHistoryComponent", function() { return MoveinAdminHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/MoveInOut */ "./src/app/api/controllers/MoveInOut.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");










let MoveinAdminHistoryComponent = class MoveinAdminHistoryComponent {
    constructor(injector, moveInOutService, apartmentService, lookupService, cookieService) {
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
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
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
    onDateChange(event, type) {
        if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_8__(event).format("DD/MM/YYYY");
        }
        else {
            this.columnField = {};
        }
    }
    getDate(movein, date) {
        this.moveInDataList.map(obj => {
            if (obj.id == movein.id) {
                obj.inDateData = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
            }
        });
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
    }
    getTime(time) {
        var timeData = moment__WEBPACK_IMPORTED_MODULE_8__(time, 'HH:mm:ss').toDate();
        return moment__WEBPACK_IMPORTED_MODULE_8__(timeData).format('HH:mm A');
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
    getBlockNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveInDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
                }
            });
            return data[0].apartmentBlockNumber;
        }
    }
    getBlockUnitNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveInDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
                }
            });
            return data[0].apartmentBlockUnitNumber;
        }
    }
    onGlSearchFilter() {
        if (this.moveInOutHitoryData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.moveInOutHitoryData;
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
        this.datagrid.exportdata(event, 'moveinHistoryData');
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
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
                width: 120,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Unit Details',
                datafield: 'block_Unit',
                cellsrenderer: cellsrenderer,
                width: 120,
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
                text: 'Request Type',
                datafield: 'requestType',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Date',
                datafield: 'date',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format("DD/MM/YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Time',
                datafield: 'time',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getTime(value) + '</div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Status',
                datafield: 'statusId',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    console.log('Hi', value);
                    if (value == 374) {
                        return '<div class="dots-mr"><span class="dots m-yellow"></span></div>';
                    }
                    else if (value == 380) {
                        return '<div class="dots-mr"><span class="dots grey-850"></span></div>';
                    }
                    else if (value == 375) {
                        return '<div class="icon-wrapper dots-mr"><img src="assets/images/movein-icon.svg" class="svg" width="17" height="17" alt="Moved In"></div>';
                    }
                    else if (value == 376) {
                        return '<div class="icon-wrapper dots-mr"><img src="assets/images/moveout-icon.svg" class="svg" width="17" height="17" alt="Moved In"></div>';
                    }
                },
                renderer: columnrenderer
            }];
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: "374,375,380"
        };
        this.moveInOutService.getMoveInByStatusIds(params).subscribe((res) => {
            let data1 = res.filter(item => {
                item.time = item.inTime;
                item.date = item.inDate;
                item.outTime = '';
                item.outDate = '';
                item.noDue = '';
                return item.isActive;
            });
            let params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                statusIds: "374,376,380"
            };
            this.moveInOutService.getMoveOutByStatusIds(params).subscribe((res) => {
                let data2 = res.filter(item => {
                    item.time = item.outTime;
                    item.date = item.outDate;
                    item.inDate = '';
                    item.inTime = '';
                    return item.isActive;
                });
                this.moveInDataList = data1.concat(data2);
                console.log('this.moveInDataList', this.moveInDataList);
                this.gridSourceData = {
                    localdata: this.moveInDataList,
                    datatype: "array"
                };
                this.listData = new jqx.dataAdapter(this.gridSourceData);
                this.totalItems = this.moveInDataList.length;
                this.isDataLoaded = true;
            });
        });
        this.apartmentService.getAllApartmentBlockUnits().subscribe((res) => {
            this.blockUnitData = res;
        });
        this.getStatusName();
    }
    getStatusName() {
        let params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 92
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.statusNames = res.filter(item => {
                return item.isActive;
            });
            this.statusNames.forEach(element => {
                this.statusType[element.lookupValueId] = element;
            });
        });
    }
};
MoveinAdminHistoryComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_9__["jqxGridComponent"])
], MoveinAdminHistoryComponent.prototype, "datagrid", void 0);
MoveinAdminHistoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movein-admin-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movein-admin-history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movein-admin-history.component.scss */ "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], MoveinAdminHistoryComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1jYW5jZWwvbW92ZWluLWNhbmNlbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: MoveinCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinCancelComponent", function() { return MoveinCancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/MoveInOut */ "./src/app/api/controllers/MoveInOut.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let MoveinCancelComponent = class MoveinCancelComponent {
    constructor(moveInOutService, apartmentService, cookieService) {
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
    getDate(movein, date) {
        this.moveInDataList.map(obj => {
            if (obj.id == movein.id) {
                obj.inDateData = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
            }
        });
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
    }
    getTime(time) {
        var timeData = moment__WEBPACK_IMPORTED_MODULE_7__(time, 'HH:mm:ss').toDate();
        return moment__WEBPACK_IMPORTED_MODULE_7__(timeData).format('HH:mm A');
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    isNoItemsAvailable() {
        return this.totalItems == 0 ? true : false;
    }
    getBlockNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveInDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
                }
            });
            return data[0].apartmentBlockNumber;
        }
    }
    getBlockUnitNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveInDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
                }
            });
            return data[0].apartmentBlockUnitNumber;
        }
    }
    onGlSearchFilter() {
        if (this.moveInData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.moveInData;
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
        this.datagrid.exportdata(event, 'moveInCancelData');
    }
    getApproveStatus(data) {
        if (data == null)
            return 'high';
        else
            return 'low';
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
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
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format("DD/MM/YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Expected Time',
                datafield: 'inTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getTime(value) + '</div>';
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
                cellsrenderer: (row, column, value) => {
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutCancelDropDown" aria-haspopup="true" aria-expanded="false">'
                        + '<div class="icon-wrapper">'
                        + ' <img src="assets/images/eye-icon.svg" class="svg" width="17" height="17" alt="Move In">'
                        + ' </div></a>'
                        + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutCancelDropDown">'
                        + ' <a href="javascript:void(0)">' + value + '</a></div>'
                        + '</div>';
                },
                renderer: columnrenderer
            }];
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: "380"
        };
        // tslint:disable-next-line:radix
        this.moveInOutService.getMoveInByStatusIds(params).subscribe((res) => {
            this.moveInDataList = res.filter(item => {
                return item.isActive;
            });
            this.gridSourceData = {
                localdata: this.moveInDataList,
                datatype: "array"
            };
            this.listData = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = this.moveInDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        });
        this.apartmentService.getAllApartmentBlockUnits().subscribe((res) => {
            this.blockUnitData = res;
        });
    }
};
MoveinCancelComponent.ctorParameters = () => [
    { type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], MoveinCancelComponent.prototype, "datagrid", void 0);
MoveinCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movein-cancel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movein-cancel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movein-cancel.component.scss */ "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], MoveinCancelComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1tYWludGFpbi9tb3ZlaW4tbWFpbnRhaW4uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: MoveinMaintainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinMaintainComponent", function() { return MoveinMaintainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/MoveInOut */ "./src/app/api/controllers/MoveInOut.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_components_view_movein_detail_view_movein_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/components/view-movein-detail/view-movein-detail.component */ "./src/app/shared/components/view-movein-detail/view-movein-detail.component.ts");















let MoveinMaintainComponent = class MoveinMaintainComponent {
    constructor(injector, moveInOutService, apartmentService, lookupService, sharedService, cookieService, dialog, router) {
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
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
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
    onDateChange(event, type) {
        if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_10__(event).format("DD/MM/YYYY");
        }
        else {
            this.columnField = {};
        }
    }
    getDate(movein, date) {
        this.moveInDataList.map(obj => {
            if (obj.id == movein.id) {
                obj.inDateData = moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
            }
        });
        return moment__WEBPACK_IMPORTED_MODULE_10__(date).format("DD/MM/YYYY");
    }
    getTime(time) {
        var timeData = moment__WEBPACK_IMPORTED_MODULE_10__(time, 'HH:mm:ss').toDate();
        return moment__WEBPACK_IMPORTED_MODULE_10__(timeData).format('HH:mm A');
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'moveInMaintainData');
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
    getBlockNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveInDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
                }
            });
            return data[0].apartmentBlockNumber;
        }
    }
    getBlockUnitNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_9__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveInDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
                }
            });
            return data[0].apartmentBlockUnitNumber;
        }
    }
    getApproveStatus(id) {
        if (this.statusType[id] && id == 372) {
            return 'high';
        }
        else if (this.statusType[id] && id == 373) {
            return 'low';
        }
        else if (this.statusType[id] && id == 374) {
            return 'm-yellow';
        }
        else if (this.statusType[id] && id == 380) {
            return 'grey-850';
        }
    }
    approveMoveIn(detail) {
        let data = this.datagrid.getrowdata(detail.rowId);
        let type = detail.column;
        let details = {
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
        let params = {
            moveIn: details
        };
        this.isDataLoaded = false;
        this.moveInOutService.updateMoveIn(params).subscribe((res) => {
            if (res.message) {
                let msg = type == 'approve' ? 'Movein approved successfully' : 'Movein Request Rejected';
                this.sharedService.setAlertMessage(msg);
                let params = {
                    apartmentId: parseInt(this.cookieService.get('apartmentId')),
                    statusIds: "372,373"
                };
                this.moveInOutService.getMoveInByStatusIds(params).subscribe((res) => {
                    this.moveInDataList = res.filter(item => {
                        return item.isActive;
                    });
                    this.gridSourceData = {
                        localdata: this.moveInDataList,
                        datatype: "array"
                    };
                    this.listData = new jqx.dataAdapter(this.gridSourceData);
                    this.totalItems = this.moveInDataList.length;
                    this.isDataLoaded = true;
                });
            }
            else {
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
        });
    }
    onGlSearchFilter() {
        if (this.moveInData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.moveInData;
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
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
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
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_10__(value).format("DD/MM/YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Expected Time',
                datafield: 'inTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getTime(value) + '</div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Status',
                datafield: 'statusId',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    if (value == 372) {
                        return '<div class="dots-mr"><span class="dots high dots-mr"></span></div>';
                    }
                    else if (value == 373) {
                        return '<div class="dots-mr"><span class="dots low dots-mr"></span></div>';
                    }
                },
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                minwidth: 120,
                cellclassname: 'action-cell',
                cellsrenderer: (row, column, value) => {
                    let id_ = this.moveInDataList[row].statusId;
                    if (id_ == 372) {
                        return '<div class="simple-actions">'
                            + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveInDropDown" aria-haspopup="true" aria-expanded="false">'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '</a>'
                            + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveInDropDown">'
                            + '<a href="javascript:void(0)" onClick="approveMoveIn(' + row + ', \'approve\')" >Approve</a>'
                            + ' <a href="javascript:void(0)" onClick="approveMoveIn(' + row + ', \'reject\')" >Reject</a>'
                            + '<a href="javascript:void(0)" onClick="showMoveInDetails(' + row + ', \'edit\')">Edit</a>'
                            + '</div>'
                            + '</div>';
                    }
                    else if (id_ == 373) {
                        return '<div class="simple-actions">'
                            + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveInDropDown" aria-haspopup="true" aria-expanded="false">'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '</a>'
                            + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveInDropDown">'
                            + ' <a  href="javascript:void(0)" class="no-link grey" *ngIf="id_ == 373">Approved</a>'
                            + '<a href="javascript:void(0)" onClick="showMoveInDetails(' + row + ', \'view\')">View</a>'
                            + '</div>'
                            + '</div>';
                    }
                    else if (id_ == 374) {
                        return '<div class="simple-actions">'
                            + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveInDropDown" aria-haspopup="true" aria-expanded="false">'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '</a>'
                            + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveInDropDown">'
                            + '<a href="javascript:void(0)" class="no-link grey" *ngIf="id_ == 374">Rejected</a>'
                            + '<a href="javascript:void(0)" onClick="showMoveInDetails(' + row + ', \'reject\')">View</a>'
                            + '</div>'
                            + '</div>';
                    }
                },
                renderer: columnrenderer
            }, {
                text: 'Check-In',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    let id_ = this.moveInDataList[row].statusId;
                    if (id_ == 373) {
                        return '<div class="icon-wrapper dots-mr"  onClick="chekInUser(' + row + ')">'
                            + '<img src="assets/images/checkin-icon.svg" class="svg" width="17" height="17" alt="Check In">'
                            + '</div>';
                    }
                },
                renderer: columnrenderer
            }];
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: "372,373"
        };
        this.moveInOutService.getMoveInByStatusIds(params).subscribe((res) => {
            this.moveInDataList = res.filter(item => {
                return item.isActive;
            });
            this.gridSourceData = {
                localdata: this.moveInDataList,
                datatype: "array"
            };
            this.listData = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = this.moveInDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        });
        this.apartmentService.getAllApartmentBlockUnits().subscribe((res) => {
            this.blockUnitData = res;
        });
        this.getStatusName();
    }
    showMoveInDetails(detail) {
        let details = this.datagrid.getrowdata(detail.rowId);
        let type_ = detail.column;
        const dialogRef = this.dialog.open(src_app_shared_components_view_movein_detail_view_movein_detail_component__WEBPACK_IMPORTED_MODULE_14__["ViewMoveinDetailComponent"], {
            width: '400px',
            data: {
                data: details,
                type: type_
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.isDataLoaded = false;
                let params = {
                    apartmentId: parseInt(this.cookieService.get('apartmentId')),
                    statusIds: "372,373"
                };
                this.moveInOutService.getMoveInByStatusIds(params).subscribe((res) => {
                    this.moveInDataList = res.filter(item => {
                        return item.isActive;
                    });
                    this.gridSourceData = {
                        localdata: this.moveInDataList,
                        datatype: "array"
                    };
                    this.listData = new jqx.dataAdapter(this.gridSourceData);
                    this.totalItems = this.moveInDataList.length;
                    this.isDataLoaded = true;
                });
            }
        });
    }
    chekInUser(detail) {
        let data = this.datagrid.getrowdata(detail.rowId);
        const message = `Do you want to check In?`;
        const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmDialogModel"]("Confirm Action", message);
        const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                let details = {
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
                    "updatedBy": parseInt(this.cookieService.get('userId')),
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
                let params = {
                    moveIn: details
                };
                this.isDataLoaded = false;
                this.moveInOutService.updateMoveIn(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setAlertMessage("Checked In successfully");
                        let params = {
                            apartmentId: parseInt(this.cookieService.get('apartmentId')),
                            statusIds: "372,373"
                        };
                        this.moveInOutService.getMoveInByStatusIds(params).subscribe((res) => {
                            this.moveInDataList = res.filter(item => {
                                return item.isActive;
                            });
                            this.gridSourceData = {
                                localdata: this.moveInDataList,
                                datatype: "array"
                            };
                            this.listData = new jqx.dataAdapter(this.gridSourceData);
                            this.totalItems = this.moveInDataList.length;
                            this.isDataLoaded = true;
                        });
                    }
                    else {
                        this.isError = true;
                        this.isDataLoaded = true;
                        this.alertMessage = res.errorMessage;
                    }
                }, error => {
                    this.isDataLoaded = true;
                });
            }
        });
    }
    getStatusName() {
        let params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            LookupTypeId: 92
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.statusNames = res.filter(item => {
                return item.isActive;
            });
            this.statusNames.forEach(element => {
                this.statusType[element.lookupValueId] = element;
            });
        });
    }
    navigateToMovein() {
        this.router.navigate(['ams/moveinout-tracker/create-movein']);
    }
};
MoveinMaintainComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_13__["jqxGridComponent"])
], MoveinMaintainComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:approveMoveIn', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoveinMaintainComponent.prototype, "approveMoveIn", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:showMoveInDetails', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoveinMaintainComponent.prototype, "showMoveInDetails", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:chekInUser', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoveinMaintainComponent.prototype, "chekInUser", null);
MoveinMaintainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movein-maintain',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movein-maintain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movein-maintain.component.scss */ "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
], MoveinMaintainComponent);

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
function showMoveInDetails(row, type) {
    var event = new CustomEvent('showMoveInDetails', {
        detail: {
            rowId: row,
            column: type
        }
    });
    window.dispatchEvent(event);
}
window.showMoveInDetails = showMoveInDetails;
function chekInUser(row) {
    var event = new CustomEvent('chekInUser', {
        detail: {
            rowId: row,
        }
    });
    window.dispatchEvent(event);
}
window.chekInUser = chekInUser;


/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1tb3Zlb3V0LWNhbmNlbC9tb3ZlaW4tbW92ZW91dC1jYW5jZWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: MoveinMoveoutCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinMoveoutCancelComponent", function() { return MoveinMoveoutCancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MoveinMoveoutCancelComponent = class MoveinMoveoutCancelComponent {
    ngOnInit() {
    }
};
MoveinMoveoutCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movein-moveout-cancel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movein-moveout-cancel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movein-moveout-cancel.component.scss */ "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.scss")).default]
    })
], MoveinMoveoutCancelComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1yZXBvcnRzL21vdmVpbi1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MoveinReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinReportsComponent", function() { return MoveinReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MoveinReportsComponent = class MoveinReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
MoveinReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movein-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movein-reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movein-reports.component.scss */ "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MoveinReportsComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVpbi1zZXR1cC9tb3ZlaW4tc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MoveinSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinSetupComponent", function() { return MoveinSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/MoveInOut */ "./src/app/api/controllers/MoveInOut.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/components/add-doc-criteria/add-doc-criteria.component */ "./src/app/shared/components/add-doc-criteria/add-doc-criteria.component.ts");
/* harmony import */ var src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");










let MoveinSetupComponent = class MoveinSetupComponent {
    constructor(moveInOutService, lookupService, sharedService, cookieService, dialog) {
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
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getStatus(value) {
        if (value) {
            return 'YES';
        }
        else {
            return 'NO';
        }
    }
    getCategory(Id) {
        if (this.documentTypeListObject[Id]) {
            return this.documentTypeListObject[Id].lookupValueName;
        }
        else {
            return '';
        }
    }
    getDocumentType(priorityId) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.documentTypeDataList, function (item) {
            if (item.lookupValueId === priorityId)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            return data[0].lookupValueName == 'General' ? 'low' : 'medium';
        }
    }
    updateDocType(document) {
        setTimeout(() => {
            this.isDataLoaded = false;
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
                "insertedBy": parseInt(this.cookieService.get('userId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(this.cookieService.get('userId')),
                "updatedOn": new Date().toISOString(),
                "apartmentId": parseInt(this.cookieService.get('apartmentId'))
            };
            let params = {
                moveInOutConfig: details
            };
            this.moveInOutService.updateMoveInOutConfig(params).subscribe((res) => {
                if (res.message) {
                    this.isDataLoaded = true;
                    this.sharedService.setAlertMessage("MoveIn Configuration updated successfully");
                }
                else {
                    this.isDataLoaded = true;
                }
            }, error => {
                this.isDataLoaded = true;
            });
        }, 1000);
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.moveInOutService.getMoveInOutConfigByApartmentId(params).subscribe((res) => {
            this.documentDataList = res.filter(item => {
                return item.isActive;
            });
            this.totalItems = this.documentDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        }, error => {
            console.log(error);
        });
        //document type
        let docListparams = {
            LookupTypeId: 72
        };
        this.lookupService.getLookupValueByLookupTypeId(docListparams).subscribe((res) => {
            this.documentTypeDataList = res.filter(item => {
                return item.isActive;
            });
            this.documentTypeDataList.forEach(element => {
                this.documentTypeListObject[element.lookupValueId] = element;
            });
        }, error => {
        });
    }
    openDocCriteria() {
        const dialogRef = this.dialog.open(src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__["AddDocCriteriaComponent"], {
            width: '400px',
            data: {
                type: 'ADD'
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.details) {
                let document = result.details;
                this.isDataLoaded = false;
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
                    "insertedBy": parseInt(this.cookieService.get('userId')),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": null,
                    "updatedOn": null,
                    "apartmentId": parseInt(this.cookieService.get('apartmentId'))
                };
                let params = {
                    moveInOutConfig: details
                };
                this.moveInOutService.addMoveInOutConfig(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setAlertMessage("Document Criteria Added successfully");
                        let params = {
                            apartmentId: parseInt(this.cookieService.get('apartmentId'))
                        };
                        this.moveInOutService.getMoveInOutConfigByApartmentId(params).subscribe((res) => {
                            this.documentDataList = res.filter(item => {
                                return item.isActive;
                            });
                            this.isDataLoaded = true;
                        }, error => {
                            this.isDataLoaded = true;
                        });
                    }
                });
            }
        });
    }
    openDocCriteriaEdit(docData) {
        const dialogRef = this.dialog.open(src_app_shared_components_add_doc_criteria_add_doc_criteria_component__WEBPACK_IMPORTED_MODULE_8__["AddDocCriteriaComponent"], {
            width: '400px',
            data: {
                type: 'EDIT',
                data: docData
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.details) {
                let document = result.details;
                this.isDataLoaded = false;
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
                    "updatedBy": parseInt(this.cookieService.get('userId')),
                    "updatedOn": new Date().toISOString(),
                    "apartmentId": parseInt(this.cookieService.get('apartmentId'))
                };
                let params = {
                    moveInOutConfig: details
                };
                this.moveInOutService.updateMoveInOutConfig(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setAlertMessage("Document Criteria updated successfully");
                        let params = {
                            apartmentId: parseInt(this.cookieService.get('apartmentId'))
                        };
                        this.moveInOutService.getMoveInOutConfigByApartmentId(params).subscribe((res) => {
                            this.documentDataList = res.filter(item => {
                                return item.isActive;
                            });
                            this.isDataLoaded = true;
                        }, error => {
                            this.isDataLoaded = true;
                        });
                    }
                });
            }
        });
    }
    openDeleteConfirm(docId) {
        const dialogRef = this.dialog.open(src_app_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalComponent"], {
            width: '400px',
            id: docId
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.isDataLoaded = false;
                let params = {
                    Id: parseInt(docId),
                    deleteBy: parseInt(this.cookieService.get('userId'))
                };
                this.moveInOutService.deleteMoveInOutConfig(params).subscribe((res) => {
                    if (res.message) {
                        let params = {
                            apartmentId: parseInt(this.cookieService.get('apartmentId'))
                        };
                        this.moveInOutService.getMoveInOutConfigByApartmentId(params).subscribe((res) => {
                            this.documentDataList = res.filter(item => {
                                return item.isActive;
                            });
                            this.totalItems = this.documentDataList.length;
                            if (this.totalItems > this.itemLimit) {
                                this.ItemEndIndex = this.itemLimit;
                            }
                            else {
                                this.ItemEndIndex = this.totalItems;
                            }
                            this.isDataLoaded = true;
                        }, error => {
                            console.log(error);
                        });
                    }
                }, error => {
                    console.log(error);
                    this.isDataLoaded = true;
                });
            }
        });
    }
};
MoveinSetupComponent.ctorParameters = () => [
    { type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
MoveinSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movein-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./movein-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./movein-setup.component.scss */ "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], MoveinSetupComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVvdXQtY2FuY2VsL21vdmVvdXQtY2FuY2VsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MoveoutCancelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveoutCancelComponent", function() { return MoveoutCancelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/MoveInOut */ "./src/app/api/controllers/MoveInOut.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let MoveoutCancelComponent = class MoveoutCancelComponent {
    constructor(moveInOutService, apartmentService, sharedService, cookieService) {
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
    selectColInput(value) {
        this.selectedInput = value;
    }
    onDateChange(event, type) {
        if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_8__(event).format("DD/MM/YYYY");
        }
        else {
            this.columnField = {};
        }
    }
    onGlSearchFilter() {
        if (this.moveOutData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.moveOutData;
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
    getDate(movein, date) {
        this.moveOutDataList.map(obj => {
            if (obj.id == movein.id) {
                obj.outDateData = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
            }
        });
        return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD/MM/YYYY");
    }
    getTime(time) {
        var timeData = moment__WEBPACK_IMPORTED_MODULE_8__(time, 'HH:mm:ss').toDate();
        return moment__WEBPACK_IMPORTED_MODULE_8__(timeData).format('HH:mm A');
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
    getBlockNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveOutDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
                }
            });
            return data[0].apartmentBlockNumber;
        }
    }
    getBlockUnitNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_7__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveOutDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
                }
            });
            return data[0].apartmentBlockUnitNumber;
        }
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'moveOutCancelData');
    }
    getApproveStatus(data) {
        if (data == null)
            return 'high';
        else
            return 'low';
    }
    approveMoveOut(data) {
        var moveOutData = data;
        moveOutData.approvedBy = parseInt(this.cookieService.get('userId'));
        moveOutData.approvedDate = new Date().toISOString();
        this.isMoveOutSubmitted = false;
        this.moveInOutService.updateMoveOut(moveOutData).subscribe((res) => {
            if (res.message) {
                this.isMoveOutSubmitted = true;
                this.sharedService.setAlertMessage("Moveout approved successfully");
            }
            else {
                this.isMoveOutSubmitted = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isMoveOutSubmitted = true;
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
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_8__(value).format("DD/MM/YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Expected Time',
                datafield: 'outTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getTime(value) + '</div>';
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
                cellsrenderer: (row, column, value) => {
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutCancelDropDown" aria-haspopup="true" aria-expanded="false">'
                        + '<div class="icon-wrapper">'
                        + ' <img src="assets/images/eye-icon.svg" class="svg" width="17" height="17" alt="Move In">'
                        + ' </div></a>'
                        + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutCancelDropDown">'
                        + ' <a href="javascript:void(0)">' + value + '</a></div>'
                        + '</div>';
                },
                renderer: columnrenderer
            }];
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: "380"
        };
        this.moveInOutService.getMoveOutByStatusIds(params).subscribe((res) => {
            this.moveOutDataList = res.filter(item => {
                return item.isActive;
            });
            console.log(this.moveOutDataList);
            this.gridSourceData = {
                localdata: this.moveOutDataList,
                datatype: "array"
            };
            this.listData = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = this.moveOutDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        });
        this.apartmentService.getAllApartmentBlockUnits().subscribe((res) => {
            this.blockUnitData = res;
        });
    }
};
MoveoutCancelComponent.ctorParameters = () => [
    { type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])
], MoveoutCancelComponent.prototype, "datagrid", void 0);
MoveoutCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moveout-cancel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./moveout-cancel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./moveout-cancel.component.scss */ "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_3__["MoveInOutService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
], MoveoutCancelComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9jb21wb25lbnRzL21vdmVvdXQtbWFpbnRhaW4vbW92ZW91dC1tYWludGFpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: MoveoutMaintainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveoutMaintainComponent", function() { return MoveoutMaintainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/MoveInOut */ "./src/app/api/controllers/MoveInOut.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */ "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_components_moveout_detail_edit_moveout_detail_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/components/moveout-detail-edit/moveout-detail-edit.component */ "./src/app/shared/components/moveout-detail-edit/moveout-detail-edit.component.ts");













let MoveoutMaintainComponent = class MoveoutMaintainComponent {
    constructor(router, moveInOutService, apartmentService, sharedService, cookieService, dialog) {
        this.router = router;
        this.moveInOutService = moveInOutService;
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.dialog = dialog;
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
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
        this.itemLimit = event.itemLimit;
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
    onDateChange(event, type) {
        if (event != null) {
            this.selectedInput = type;
            this.columnField[type] = moment__WEBPACK_IMPORTED_MODULE_7__(event).format("DD/MM/YYYY");
        }
        else {
            this.columnField = {};
        }
    }
    getDate(movein, date) {
        this.moveOutDataList.map(obj => {
            if (obj.id == movein.id) {
                obj.outDateData = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
            }
        });
        return moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD/MM/YYYY");
    }
    getTime(time) {
        var timeData = moment__WEBPACK_IMPORTED_MODULE_7__(time, 'HH:mm:ss').toDate();
        return moment__WEBPACK_IMPORTED_MODULE_7__(timeData).format('HH:mm A');
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
    getBlockNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveOutDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockNumber = data[0].apartmentBlockNumber;
                }
            });
            return data[0].apartmentBlockNumber;
        }
    }
    getBlockUnitNo(item, id) {
        var data = underscore__WEBPACK_IMPORTED_MODULE_6__["filter"](this.blockUnitData, item => {
            if (item.apartmentBlockUnitId === id)
                return item;
        });
        if (data === undefined || data.length == 0) {
            return '';
        }
        else {
            this.moveOutDataList.map(obj => {
                if (obj.id == item.id) {
                    obj.apartmentBlockUnitNumber = data[0].apartmentBlockUnitNumber;
                }
            });
            return data[0].apartmentBlockUnitNumber;
        }
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'moveOutMaintainData');
    }
    navigateToMoveOut() {
        this.router.navigate(['ams/moveinout-tracker/create-moveout']);
    }
    getApproveStatus(data) {
        if (data == null)
            return 'high';
        else
            return 'low';
    }
    showMoveOutDetails(detail) {
        let details = this.datagrid.getrowdata(detail.rowId);
        let type_ = detail.column;
        const dialogRef = this.dialog.open(src_app_shared_components_moveout_detail_edit_moveout_detail_edit_component__WEBPACK_IMPORTED_MODULE_12__["MoveOutDetailEditComponent"], {
            width: '400px',
            data: {
                data: details,
                type: type_
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.isDataLoaded = false;
                let params = {
                    apartmentId: parseInt(this.cookieService.get('apartmentId')),
                    statusIds: "372,373"
                };
                this.moveInOutService.getMoveOutByStatusIds(params).subscribe((res) => {
                    this.moveOutDataList = res.filter(item => {
                        return item.isActive;
                    });
                    this.gridSourceData = {
                        localdata: this.moveOutDataList,
                        datatype: "array"
                    };
                    this.listData = new jqx.dataAdapter(this.gridSourceData);
                    this.totalItems = this.moveOutDataList.length;
                    this.isDataLoaded = true;
                });
            }
        });
    }
    checkOutUser(detail) {
        const message = `Do you want to check Out?`;
        const dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModel"]("Confirm Action", message);
        const dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                let data = this.datagrid.getrowdata(detail.rowId);
                var moveOutData = data;
                let details = {
                    "id": moveOutData.id,
                    "outDate": moveOutData.outDate,
                    "outTime": moveOutData.outTime,
                    "comments": moveOutData.comments,
                    "isActive": moveOutData.isActive,
                    "familyCount": moveOutData.familyCount,
                    "apartmentBlockUnitId": moveOutData.apartmentBlockUnitId,
                    "reqUserId": moveOutData.reqUserId,
                    "statusId": 376,
                    "noDue": moveOutData.noDue,
                    "approvedBy": parseInt(this.cookieService.get('userId')),
                    "approvedDate": new Date().toISOString(),
                    "insertedBy": moveOutData.insertedBy,
                    "insertedOn": moveOutData.insertedOn,
                    "updatedBy": parseInt(this.cookieService.get('userId')),
                    "updatedOn": new Date().toISOString(),
                    "apartmentId": moveOutData.apartmentId,
                    "userName": moveOutData.userName,
                    "mobile": moveOutData.mobile,
                    "email": moveOutData.email,
                    "block_Unit": moveOutData.block_Unit,
                    "requestType": moveOutData.requestType,
                    "statusName": 'MovedOut',
                    "serialNo": moveOutData.serialNo
                };
                let params = {
                    moveOut: details
                };
                this.moveInOutService.updateMoveOut(params).subscribe((res) => {
                    if (res.message) {
                        this.sharedService.setAlertMessage("Moved Out successfully");
                        this.isDataLoaded = false;
                        let params = {
                            apartmentId: parseInt(this.cookieService.get('apartmentId')),
                            statusIds: "372,373"
                        };
                        this.moveInOutService.getMoveOutByStatusIds(params).subscribe((res) => {
                            this.moveOutDataList = res.filter(item => {
                                return item.isActive;
                            });
                            console.log(this.moveOutDataList);
                            this.gridSourceData = {
                                localdata: this.moveOutDataList,
                                datatype: "array"
                            };
                            this.listData = new jqx.dataAdapter(this.gridSourceData);
                            this.totalItems = this.moveOutDataList.length;
                            this.isDataLoaded = true;
                        });
                    }
                    else {
                        this.isDataLoaded = true;
                        this.isError = true;
                        this.alertMessage = res.errorMessage;
                    }
                }, error => {
                    this.isMoveOutSubmitted = true;
                });
            }
        });
    }
    approveMoveOut(detail) {
        let data = this.datagrid.getrowdata(detail.rowId);
        let type = detail.column;
        var moveOutData = data;
        console.log('moveOutData', moveOutData, moment__WEBPACK_IMPORTED_MODULE_7__(moveOutData.outTime).format('HH:mm:ss'));
        let details = {
            "id": moveOutData.id,
            "outDate": moveOutData.outDate,
            "outTime": moveOutData.outTime,
            "comments": moveOutData.comments,
            "isActive": moveOutData.isActive,
            "familyCount": moveOutData.familyCount,
            "apartmentBlockUnitId": moveOutData.apartmentBlockUnitId,
            "reqUserId": moveOutData.reqUserId,
            "statusId": type == 'approve' ? 373 : 374,
            "noDue": moveOutData.noDue,
            "approvedBy": type == 'approve' ? parseInt(this.cookieService.get('userId')) : moveOutData.approvedBy,
            "approvedDate": type == 'approve' ? new Date().toISOString() : moveOutData.approvedDate,
            "insertedBy": moveOutData.insertedBy,
            "insertedOn": moveOutData.insertedOn,
            "updatedBy": parseInt(this.cookieService.get('userId')),
            "updatedOn": new Date().toISOString(),
            "apartmentId": moveOutData.apartmentId,
            "userName": moveOutData.userName,
            "mobile": moveOutData.mobile,
            "email": moveOutData.email,
            "block_Unit": moveOutData.block_Unit,
            "requestType": moveOutData.requestType,
            "statusName": type == 'approve' ? 'Approved' : 'Rejected',
            "serialNo": moveOutData.serialNo
        };
        let params = {
            moveOut: details
        };
        this.moveInOutService.updateMoveOut(params).subscribe((res) => {
            if (res.message) {
                let msg = type == 'approve' ? 'MoveOut approved successfully' : 'MoveOut Request Rejected';
                this.sharedService.setAlertMessage(msg);
                this.isDataLoaded = false;
                let params = {
                    apartmentId: parseInt(this.cookieService.get('apartmentId')),
                    statusIds: "372,373"
                };
                this.moveInOutService.getMoveOutByStatusIds(params).subscribe((res) => {
                    this.moveOutDataList = res.filter(item => {
                        return item.isActive;
                    });
                    console.log(this.moveOutDataList);
                    this.gridSourceData = {
                        localdata: this.moveOutDataList,
                        datatype: "array"
                    };
                    this.listData = new jqx.dataAdapter(this.gridSourceData);
                    this.totalItems = this.moveOutDataList.length;
                    this.isDataLoaded = true;
                });
            }
            else {
                this.isDataLoaded = true;
                this.isError = true;
                this.alertMessage = res.errorMessage;
            }
        }, error => {
            this.isMoveOutSubmitted = true;
        });
    }
    onGlSearchFilter() {
        if (this.moveOutData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.moveOutData;
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
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
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
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_7__(value).format("DD/MM/YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'Time',
                datafield: 'outTime',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + this.getTime(value) + '</div>';
                },
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Status',
                datafield: 'statusId',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    if (value == 372) {
                        return '<div class="dots-mr"><span class="dots high"></span></div>';
                    }
                    else if (value == 373) {
                        return '<div class="dots-mr"><span class="dots low"></span></div>';
                    }
                },
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                minwidth: 120,
                cellclassname: 'action-cell',
                cellsrenderer: (row, column, value) => {
                    let id_ = this.moveOutDataList[row].statusId;
                    if (id_ == 372) {
                        return '<div class="simple-actions">'
                            + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutDropDown" aria-haspopup="true" aria-expanded="false">'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '</a>'
                            + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutDropDown">'
                            + '<a href="javascript:void(0)" onClick="approveMoveOut(' + row + ', \'approve\')">Approve</a>'
                            + ' <a href="javascript:void(0)" onClick="approveMoveOut(' + row + ', \'reject\')" >Reject</a>'
                            + '<a href="javascript:void(0)" onClick="showMoveOutDetails(' + row + ', \'edit\')">Edit</a>'
                            + '</div>'
                            + '</div>';
                    }
                    else if (id_ == 373) {
                        return '<div class="simple-actions">'
                            + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveOutDropDown" aria-haspopup="true" aria-expanded="false">'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '</a>'
                            + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveOutDropDown">'
                            + '<a href="javascript:void(0)" class="no-link grey">Approved</a>'
                            + '<a href="javascript:void(0)" onClick="showMoveOutDetails(' + row + ', \'view\')">View</a>'
                            + '</div>'
                            + '</div>';
                    }
                    else if (id_ == 374) {
                        return '<div class="simple-actions">'
                            + '<a href="javascript:void(0)" role="button" data-toggle="dropdown" id="moveInDropDown" aria-haspopup="true" aria-expanded="false">'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '<span class="action-dot"></span>'
                            + '</a>'
                            + '<div class="dropdown-menu action-menu dropdown-menu-right" aria-labelledby="moveInDropDown">'
                            + '<a href="javascript:void(0)" class="no-link grey" *ngIf="id_ == 374">Rejected</a>'
                            + '<a href="javascript:void(0)" onClick="showMoveOutDetails(' + row + ', \'view\')">View</a>'
                            + '</div>'
                            + '</div>';
                    }
                },
                renderer: columnrenderer
            }, {
                text: 'Check-Out',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    let id_ = this.moveOutDataList[row].statusId;
                    if (id_ == 373) {
                        return '<div class="icon-wrapper dots-mr"  onClick="checkOutUser(' + row + ')">'
                            + '<img src="assets/images/checkout-icon.svg" class="svg" width="17" height="17" alt="Check Out">'
                            + '</div>';
                    }
                },
                renderer: columnrenderer
            }];
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: "372,373"
        };
        this.moveInOutService.getMoveOutByStatusIds(params).subscribe((res) => {
            this.moveOutDataList = res.filter(item => {
                return item.isActive;
            });
            console.log(this.moveOutDataList);
            this.gridSourceData = {
                localdata: this.moveOutDataList,
                datatype: "array"
            };
            this.listData = new jqx.dataAdapter(this.gridSourceData);
            this.totalItems = this.moveOutDataList.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
            this.isDataLoaded = true;
        });
        this.apartmentService.getAllApartmentBlockUnits().subscribe((res) => {
            this.blockUnitData = res;
        });
    }
    navigateTo(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let id = dataRecord.id;
        this.router.navigateByUrl('/ams/moveinout-tracker/edit-moveout/' + id);
    }
};
MoveoutMaintainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] },
    { type: src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])
], MoveoutMaintainComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:showMoveOutDetails', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoveoutMaintainComponent.prototype, "showMoveOutDetails", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:checkOutUser', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoveoutMaintainComponent.prototype, "checkOutUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:approveMoveOut', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoveoutMaintainComponent.prototype, "approveMoveOut", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:navigateTo', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], MoveoutMaintainComponent.prototype, "navigateTo", null);
MoveoutMaintainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moveout-maintain',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./moveout-maintain.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./moveout-maintain.component.scss */ "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"],
        src_app_api_controllers_MoveInOut__WEBPACK_IMPORTED_MODULE_2__["MoveInOutService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_3__["ApartmentService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
], MoveoutMaintainComponent);

function navigateTo(row) {
    var event = new CustomEvent('navigateTo', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.navigateTo = navigateTo;
function approveMoveOut(row, type) {
    var event = new CustomEvent('approveMoveOut', {
        detail: {
            rowId: row,
            column: type
        }
    });
    window.dispatchEvent(event);
}
window.approveMoveOut = approveMoveOut;
function checkOutUser(row) {
    var event = new CustomEvent('checkOutUser', {
        detail: {
            rowId: row,
        }
    });
    window.dispatchEvent(event);
}
window.checkOutUser = checkOutUser;
function showMoveOutDetails(row, type) {
    var event = new CustomEvent('showMoveOutDetails', {
        detail: {
            rowId: row,
            column: type
        }
    });
    window.dispatchEvent(event);
}
window.showMoveOutDetails = showMoveOutDetails;


/***/ }),

/***/ "./src/app/ams/moveinout-tracker/moveinout-tracker-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/moveinout-tracker-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: MoveinoutTrackerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinoutTrackerRoutingModule", function() { return MoveinoutTrackerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movein-setup/movein-setup.component */ "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts");
/* harmony import */ var _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/movein-maintain/movein-maintain.component */ "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts");
/* harmony import */ var _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/moveout-maintain/moveout-maintain.component */ "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts");
/* harmony import */ var _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movein-reports/movein-reports.component */ "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts");
/* harmony import */ var _shared_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/user-movein/user-movein.component */ "./src/app/shared/components/user-movein/user-movein.component.ts");
/* harmony import */ var _shared_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/user-moveout/user-moveout.component */ "./src/app/shared/components/user-moveout/user-moveout.component.ts");
/* harmony import */ var _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movein-moveout-cancel/movein-moveout-cancel.component */ "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts");
/* harmony import */ var _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movein-admin-history/movein-admin-history.component */ "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts");
/* harmony import */ var _components_create_movein_create_movein_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-movein/create-movein.component */ "./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.ts");












const routes = [
    { path: '', redirectTo: 'settings', pathMatch: 'full' },
    { path: 'settings', component: _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_3__["MoveinSetupComponent"] },
    { path: 'movein', component: _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_4__["MoveinMaintainComponent"] },
    { path: 'edit-movein/:id', component: _shared_components_user_movein_user_movein_component__WEBPACK_IMPORTED_MODULE_7__["UserMoveinComponent"] },
    { path: 'moveout', component: _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_5__["MoveoutMaintainComponent"] },
    { path: 'edit-moveout/:id', component: _shared_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_8__["UserMoveoutComponent"] },
    { path: 'reports', component: _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_6__["MoveinReportsComponent"] },
    { path: 'cancelled', component: _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_9__["MoveinMoveoutCancelComponent"] },
    { path: 'create-movein', component: _components_create_movein_create_movein_component__WEBPACK_IMPORTED_MODULE_11__["CreateMoveinComponent"] },
    { path: 'create-moveout', component: _shared_components_user_moveout_user_moveout_component__WEBPACK_IMPORTED_MODULE_8__["UserMoveoutComponent"] },
    { path: 'movein-history', component: _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_10__["MoveinAdminHistoryComponent"] },
    { path: '**', redirectTo: 'settings', pathMatch: 'full' }
];
let MoveinoutTrackerRoutingModule = class MoveinoutTrackerRoutingModule {
};
MoveinoutTrackerRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MoveinoutTrackerRoutingModule);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/moveinout-tracker.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/moveinout-tracker.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9tb3ZlaW5vdXQtdHJhY2tlci9tb3ZlaW5vdXQtdHJhY2tlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/moveinout-tracker/moveinout-tracker.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/moveinout-tracker.component.ts ***!
  \**********************************************************************/
/*! exports provided: MoveinoutTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinoutTrackerComponent", function() { return MoveinoutTrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MoveinoutTrackerComponent = class MoveinoutTrackerComponent {
    constructor() { }
    ngOnInit() {
    }
};
MoveinoutTrackerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moveinout-tracker',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./moveinout-tracker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/moveinout-tracker/moveinout-tracker.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./moveinout-tracker.component.scss */ "./src/app/ams/moveinout-tracker/moveinout-tracker.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], MoveinoutTrackerComponent);



/***/ }),

/***/ "./src/app/ams/moveinout-tracker/moveinout-tracker.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ams/moveinout-tracker/moveinout-tracker.module.ts ***!
  \*******************************************************************/
/*! exports provided: MoveinoutTrackerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveinoutTrackerModule", function() { return MoveinoutTrackerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moveinout-tracker-routing.module */ "./src/app/ams/moveinout-tracker/moveinout-tracker-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./moveinout-tracker.component */ "./src/app/ams/moveinout-tracker/moveinout-tracker.component.ts");
/* harmony import */ var _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movein-setup/movein-setup.component */ "./src/app/ams/moveinout-tracker/components/movein-setup/movein-setup.component.ts");
/* harmony import */ var _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/movein-maintain/movein-maintain.component */ "./src/app/ams/moveinout-tracker/components/movein-maintain/movein-maintain.component.ts");
/* harmony import */ var _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/moveout-maintain/moveout-maintain.component */ "./src/app/ams/moveinout-tracker/components/moveout-maintain/moveout-maintain.component.ts");
/* harmony import */ var _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movein-reports/movein-reports.component */ "./src/app/ams/moveinout-tracker/components/movein-reports/movein-reports.component.ts");
/* harmony import */ var _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/movein-moveout-cancel/movein-moveout-cancel.component */ "./src/app/ams/moveinout-tracker/components/movein-moveout-cancel/movein-moveout-cancel.component.ts");
/* harmony import */ var _components_movein_cancel_movein_cancel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/movein-cancel/movein-cancel.component */ "./src/app/ams/moveinout-tracker/components/movein-cancel/movein-cancel.component.ts");
/* harmony import */ var _components_moveout_cancel_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/moveout-cancel/moveout-cancel.component */ "./src/app/ams/moveinout-tracker/components/moveout-cancel/moveout-cancel.component.ts");
/* harmony import */ var _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/movein-admin-history/movein-admin-history.component */ "./src/app/ams/moveinout-tracker/components/movein-admin-history/movein-admin-history.component.ts");
/* harmony import */ var _components_create_movein_create_movein_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/create-movein/create-movein.component */ "./src/app/ams/moveinout-tracker/components/create-movein/create-movein.component.ts");















let MoveinoutTrackerModule = class MoveinoutTrackerModule {
};
MoveinoutTrackerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"],
            _components_movein_setup_movein_setup_component__WEBPACK_IMPORTED_MODULE_6__["MoveinSetupComponent"],
            _components_movein_maintain_movein_maintain_component__WEBPACK_IMPORTED_MODULE_7__["MoveinMaintainComponent"],
            _components_movein_admin_history_movein_admin_history_component__WEBPACK_IMPORTED_MODULE_13__["MoveinAdminHistoryComponent"],
            _components_moveout_maintain_moveout_maintain_component__WEBPACK_IMPORTED_MODULE_8__["MoveoutMaintainComponent"],
            _components_movein_reports_movein_reports_component__WEBPACK_IMPORTED_MODULE_9__["MoveinReportsComponent"],
            _components_movein_moveout_cancel_movein_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_10__["MoveinMoveoutCancelComponent"],
            _components_movein_cancel_movein_cancel_component__WEBPACK_IMPORTED_MODULE_11__["MoveinCancelComponent"],
            _components_moveout_cancel_moveout_cancel_component__WEBPACK_IMPORTED_MODULE_12__["MoveoutCancelComponent"],
            _components_create_movein_create_movein_component__WEBPACK_IMPORTED_MODULE_14__["CreateMoveinComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _moveinout_tracker_routing_module__WEBPACK_IMPORTED_MODULE_3__["MoveinoutTrackerRoutingModule"]
        ],
        bootstrap: [_moveinout_tracker_component__WEBPACK_IMPORTED_MODULE_5__["MoveinoutTrackerComponent"]]
    })
], MoveinoutTrackerModule);



/***/ })

}]);
//# sourceMappingURL=moveinout-tracker-moveinout-tracker-module-es2015.js.map