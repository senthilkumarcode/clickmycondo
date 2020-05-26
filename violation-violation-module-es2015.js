(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["violation-violation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/add-violation.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/add-violation.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"directory-setup-wrapper\">\n\n        <h5 class=\"mb-3\">Add Violation</h5>\n        <div class=\"card mb-30\">\n            <div class=\"card-body\">\n                    \n                <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n    \n                <app-loader *ngIf=\"!isViolationLoaded\"></app-loader>\n    \n                <ng-container *ngIf=\"isViolationLoaded\">\n    \n                        <form #createDirectoryTypeForm = \"ngForm\" name=\"createDirectoryTypeForm\" (ngSubmit)=\"submitDirectoryTypeForm(createDirectoryTypeForm)\"  novalidate>\n    \n    \n                                <div class=\"row\">\n                                        \n                                       \n                                        \n                                        <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\" (click)=\"openSearchWorkPermit()\" role=\"button\" data-toggle=\"dropdown\" id=\"addWorkPermits\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                <span>Search WorkPermits</span>\n                                            </a>\n                                       \n                                        <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\" (click)=\"openSearchFacility()\" role=\"button\" data-toggle=\"dropdown\" id=\"addFacility\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                <span>Search Facility Booking</span>\n                                            </a>\n\n                                            <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\" (click)=\"openSearchparkingSlot()\" role=\"button\" data-toggle=\"dropdown\" id=\"addParking\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                    <span>Search Parking Slots</span>\n                                                </a>\n\n                                                <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\" (click)=\"openSearchBlockUnit()\" role=\"button\" data-toggle=\"dropdown\" id=\"addBlockUnit\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                        <span>Search Block/Unit</span>\n                                                    </a>\n                                                <div class=\"dropdown-menu page-menu\" aria-labelledby=\"addWorkPermits\" (click)=\"stopPropagation($event)\">\n                                                        <div class=\"page-menu-wrapper\">\n\n                                                                <app-loader *ngIf=\"!isAccountAdded\"></app-loader>\n                                                            \n                                                                <ng-container *ngIf=\"isAccountAdded\">\n                                                                    \n                                                                        <table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                                                                                <thead>\n                                                                                    <tr>\n                                                                                      <th scope=\"col\">Category ID<span></span></th>\n                                                                                      <th scope=\"col\">Category <span></span></th>\n                                                                                      <th scope=\"col\">Description <span></span></th>\n                                                                                      <th scope=\"col\">Action</th>\n                                                                                    </tr>\n                                                                                </thead>\n                                                                                <tbody>\n                                                                                   \n                                                                                </tbody>\n                                                                            </table>\n                                                                            \n                                                                            \n                                                                 \n                                                                </ng-container>\n                                                            \n                                                            </div>\n                                                </div>\n\n                                               \n\n                                                <div class=\"dropdown-menu page-menu\" aria-labelledby=\"addParking\" (click)=\"stopPropagation($event)\">\n                                                        <div class=\"page-menu-wrapper\">\n\n                                                                <app-loader *ngIf=\"!isAccountAdded\"></app-loader>\n                                                            \n                                                                <ng-container *ngIf=\"isAccountAdded\">\n                                                                    \n                                                                        <table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                                                                                <thead>\n                                                                                    <tr>\n                                                                                      <th scope=\"col\">Category ID<span></span></th>\n                                                                                      <th scope=\"col\">Category <span></span></th>\n                                                                                      <th scope=\"col\">Description <span></span></th>\n                                                                                      <th scope=\"col\">Action</th>\n                                                                                    </tr>\n                                                                                </thead>\n                                                                                <tbody>\n                                                                                   \n                                                                                </tbody>\n                                                                            </table>\n                                                                            \n                                                                            \n                                                                 \n                                                                </ng-container>\n                                                            \n                                                            </div>\n                                                </div>\n\n                                                <div class=\"dropdown-menu page-menu\" aria-labelledby=\"addBlockUnit\" (click)=\"stopPropagation($event)\">\n                                                        <div class=\"page-menu-wrapper\">\n\n                                                                <app-loader *ngIf=\"!isAccountAdded\"></app-loader>\n                                                            \n                                                                <ng-container *ngIf=\"isAccountAdded\">\n                                                                    \n                                                                        <table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                                                                                <thead>\n                                                                                    <tr>\n                                                                                      <th scope=\"col\">Category ID<span></span></th>\n                                                                                      <th scope=\"col\">Category <span></span></th>\n                                                                                      <th scope=\"col\">Description <span></span></th>\n                                                                                      <th scope=\"col\">Action</th>\n                                                                                    </tr>\n                                                                                </thead>\n                                                                                <tbody>\n                                                                                   \n                                                                                </tbody>\n                                                                            </table>\n                                                                            \n                                                                            \n                                                                 \n                                                                </ng-container>\n                                                            \n                                                            </div>\n                                                </div>\n                                    </div>\n            \n\n                                    <div class=\"row mt-5 col-6 clearfix\">\n                                            <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                                                <tbody>\n                                                    <tr>\n                                                        <td>\n                                                            Primary Contact Name:\n                                                        </td>\n                                                        <td>\n                                                            {{violationData.primaryContactName}}\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Unit/Tower:\n                                                        </td>\n                                                        <td>\n                                                                {{violationData.UnitTower}}\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Parking Slot:\n                                                        </td>\n                                                        <td>\n                                                                {{violationData.ParkingSlothul}}\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                    </div>\n\n                                    <div class=\"row mt-5 col-6\">\n                                            <table class=\"table\" [ngClass]=\"isMobileView()\">\n                                                <tbody>\n                                                    <tr>\n                                                        <td>\n                                                            Violation Category\n                                                        </td>\n                                                        <td>\n                                                                <!-- <mat-form-field>\n                                                                        <mat-select  (change)=\"onChangeCategoryID($event)\">\n                                                                        <mat-option *ngFor=\"let item of allViolationCategory\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</mat-option>\n                                                                        </mat-select>\n                                                                    </mat-form-field> -->\n\n                                                                    <select name=\"category\" id=\"category\" class=\"form-control\" required (change)=\"onChangeCategoryID($event)\">\n                                                                        <option value=\"\" disabled selected hidden>Select</option>\n                                                                        <option *ngFor=\"let item of allViolationCategory\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                                                                    </select>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Violation Rule No\n                                                        </td>\n                                                        <td>\n                                                                <!-- <mat-form-field>\n                                                                        <mat-select>\n                                                                        <mat-option *ngFor=\"let item of ruleListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</mat-option>\n                                                                        </mat-select>\n                                                                    </mat-form-field> -->\n\n                                                                    <select name=\"category\" id=\"category\" class=\"form-control\" required (change)=\"onChangeCategoryID($event)\">\n                                                                            <option value=\"\" disabled selected hidden>Select</option>\n                                                                            <option *ngFor=\"let item of ruleListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n                                                                        </select>\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Violation Comments\n                                                        </td>\n                                                        <td>\n<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"violationComments\"  required>                                            {{violationData.violationComments}}\n\n                                            <!-- {{violationData.violationComments}} -->\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Violation noticed on\n                                                        </td>\n                                                        <td>\n<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"violationNoticedOn\"  required>                                            {{violationData.violationComments}}\n\n                                                                <!-- {{violationData.violationNoticedOn}} -->\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Violation Occurence\n                                                        </td>\n                                                        <td>\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"violationOccurence\" value=\"{{violationData.violationOccurence}}\"  required>   \n                                                        </td>\n                                                    </tr>\n                                            \n                                                    <tr>\n                                                        <td>\n                                                            Unit Owner Name\n                                                        </td>\n                                                        <td>\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"unitOwnerName\" value=\"{{violationData.unitOwnerName}}\"  required>   \n                                                        </td>\n                                                    </tr>\n                                            \n                                                    <tr>\n                                                        <td>\n                                                            Penalty Amt\n                                                        </td>\n                                                        <td>\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"penaltyAmt\" value=\"{{violationData.penaltyAmt}}\"  required>   \n                                                                <!-- {{violationData.penaltyAmt}} -->\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Raised By\n                                                        </td>\n                                                        <td>\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"raisedBy\" value=\"{{violationData.raisedBy}}\"  required>   \n                                                                <!-- {{violationData.raisedBy}} -->\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Invoice No\n                                                        </td>\n                                                        <td>\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"invoiceNo\" value=\"{{violationData.invoiceNo}}\"  required>   \n                                                                <!-- {{violationData.invoiceNo}} -->\n                                                        </td>\n                                                    </tr>\n                                                    <tr>\n                                                        <td>\n                                                            Invoice Trigger\n                                                        </td>\n                                                        <td>\n                                                                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"invoiceTrigger\" value=\"{{violationData.invoiceTrigger}}\"  required>   \n                                                                <!-- {{violationData.invoiceTrigger}} -->\n                                                        </td>\n                                                    </tr>\n                                            \n                                                    <tr>\n                                                        <td>\n                                                            <input type=\"file\" name=\"file\" class=\"file-upload\">\n                                                        </td>\n                                                        <td>\n                                                                <button class=\"btn blue mr-2\" [disabled]=\"createDirectoryTypeForm.invalid\">Submit</button>\n                                                        </td>\n                                                    </tr>\n                                                </tbody>\n                                            </table>\n                                    </div>\n            \n                            </form>\n    \n    \n                \n                            <!-- <table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                                <thead>\n                                    <tr>\n                                      <th scope=\"col\" (click)=\"sortUnitData('directoryTypeId')\">Directory Type ID<span [ngClass]=\"getFieldOrderBy('directoryTypeId')\"></span></th>\n                                      <th scope=\"col\" (click)=\"sortUnitData('directoryTypeName')\">Directory Type <span [ngClass]=\"getFieldOrderBy('directoryTypeName')\"></span></th>\n                                      <th scope=\"col\" (click)=\"sortUnitData('description')\">Directory Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n                                      <th scope=\"col\">Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let directory of allDirectory | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: wpData ; let i = index\">\n                                      <td class=\"name\" >{{directory.directoryTypeId}}</td>\n                                      <td class=\"grey\" >{{directory.directoryTypeName}}</td>\n                                      <td class=\"grey\" >{{directory.description}}</td>\n                                      <td class=\"grey\">\n                                        <a class=\"\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n                                        <a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                      </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                            \n                            <app-pagination \n                                [totalItems]=\"totalItems\"  \n                                [ItemStartIndex]=\"ItemStartIndex\"\n                                [ItemEndIndex] = \"ItemEndIndex\"\n                                [itemLimit] = \"itemLimit\"\n                                (outputParams) = \"getIndexParams($event)\">\t\n                            </app-pagination> -->\n                </ng-container>\n    \n                \n            </div>\n    \n        </div>\n    \n        \n    \n    \n    \n    \n    \n    \n    </div>\n\n\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title>Search WorkPermits</h2>\n<div mat-dialog-content>\n\n  <form >\n\n        <ng-container >\n                    \n                <table  class=\"table shrink-table-facility\" [ngClass]=\"isMobileView()\">\n                        <thead>\n                            <tr>\n                              <th scope=\"col\" class=\"p-4\">ID<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">WPCategory <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">WpTitle <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Resident Name<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Tower-Unit<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Start date<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">End date<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Status<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"let facility of allFacility; let i = index\">\n                                        <td class=\"name p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.workPermitType}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.apartmentBlockNumber}}{{facility.apartmentBlockUnitNumber}}</td>\n                                        <td class=\"grey p-4\">{{facility.startDate |  date: 'dd-MM-yyyy'}}</td>\n                                        <td class=\"grey p-4\">{{facility.endDate |  date: 'dd-MM-yyyy' }}</td>\n                                        <td class=\"grey p-4\">{{facility.status }}</td>\n                                        <td class=\"grey p-4\">\n                                          <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\"(click)=\"onSelect(facility)\" role=\"button\"  id=\"addWorkPermits\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <span>Select</span>\n                                        </a>\n                                        </td>\n                                      </tr>\n                        </tbody>\n                    </table>\n                    \n                    \n         \n        </ng-container>\n    \n  </form>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title>Search BlockUnits</h2>\n<div mat-dialog-content>\n\n  <form >\n\n        <ng-container >\n                    \n                <table  class=\"table shrink-table-facility\" [ngClass]=\"isMobileView()\">\n                        <thead>\n                            <tr>\n                              <th scope=\"col\" class=\"p-4\">ID<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">WPCategory <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">WpTitle <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Resident Name<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Tower-Unit<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Start date<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">End date<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Status<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"let facility of allFacility; let i = index\">\n                                        <td class=\"name p-4\">{{facility.apartmentFacilityId}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.eventName}}</td>\n                                        <td class=\"grey p-4\">{{facility.bookedForDate |  date: 'dd-MM-yyyy'}}</td>\n                                        <td class=\"grey p-4\">{{facility.bookedFromTime |  date: 'hh:mm aa' }}</td>\n                                        <td class=\"grey p-4\">{{facility.bookedToTime |  date: 'hh:mm aa' }}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">\n                                          <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\"(click)=\"onSelect(facility)\" role=\"button\"  id=\"addWorkPermits\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <span>Select</span>\n                                        </a>\n                                        </td>\n                                      </tr>\n                        </tbody>\n                    </table>\n                    \n                    \n         \n        </ng-container>\n    \n  </form>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title>Search Facility</h2>\n<div mat-dialog-content>\n\n  <form >\n\n        <ng-container >\n                    \n                <table  class=\"table shrink-table-facility\" [ngClass]=\"isMobileView()\">\n                        <thead>\n                            <tr>\n                              <th scope=\"col\" class=\"p-4\">FacilityName<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Location <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Resident Name Block Unit <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Event Name <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Date<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Start time<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">End time<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Booked For Guest Name<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"let facility of allFacility; let i = index\">\n                                        <td class=\"name p-4\">{{facility.apartmentFacilityId}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.eventName}}</td>\n                                        <td class=\"grey p-4\">{{facility.bookedForDate |  date: 'dd-MM-yyyy'}}</td>\n                                        <td class=\"grey p-4\">{{facility.bookedFromTime |  date: 'hh:mm aa' }}</td>\n                                        <td class=\"grey p-4\">{{facility.bookedToTime |  date: 'hh:mm aa' }}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">\n                                          <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\"(click)=\"onSelect(facility)\" role=\"button\"  id=\"addWorkPermits\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <span>Select</span>\n                                        </a>\n                                        </td>\n                                      </tr>\n                        </tbody>\n                    </table>\n                    \n                    \n         \n        </ng-container>\n    \n  </form>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n \n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title>Search Facility</h2>\n<div mat-dialog-content>\n\n  <form >\n\n        <ng-container >\n                    \n                <table  class=\"table shrink-table-facility\" [ngClass]=\"isMobileView()\">\n                        <thead>\n                            <tr>\n                              <th scope=\"col\" class=\"p-4\">ParkingSlotNo<span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Type <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Perm owner <span></span></th>\n                              <th scope=\"col\" class=\"p-4\">Temp owner<span></span></th>\n                            \n                              <th scope=\"col\" class=\"p-4\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"let facility of allFacility; let i = index\">\n                                        <td class=\"name p-4\">{{facility.apartmentFacilityId}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.guestName}}</td>\n                                        <td class=\"grey p-4\">{{facility.eventName}}</td>\n                                       \n                                        <td class=\"grey p-4\">\n                                          <a class=\"btn lime-green mt_5 col-sm-2 btn-srch\" href=\"javascript:void(0)\"(click)=\"onSelect(facility)\" role=\"button\"  id=\"addWorkPermits\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                            <span>Select</span>\n                                        </a>\n                                        </td>\n                                      </tr>\n                        </tbody>\n                    </table>\n                    \n                    \n         \n        </ng-container>\n    \n  </form>\n\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"close()\">Cancel</button>\n  <button mat-button class=\"btn blue\" (click)=\"submit()\">\n    {{config.type=='ADD'? 'Submit':'Update'}}\n  </button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/stop-privilege/stop-privilege.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/stop-privilege/stop-privilege.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card table-card mb-30\">\n\n\n        <div class=\"card-body p-0\">\n            <form [formGroup]=\"userTable\">\n                <table class=\"table rule\" [ngClass]=\"isMobileView()\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Violation Id<span></span></th>\n                            <th scope=\"col\" colspan=\"15\"></th>\n    \n                            <th scope=\"col\" (click)=\"sortUnitData('phone')\">Rule No<span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n                            <th scope=\"col\" colspan=\"15\"></th>\n    \n                            <th scope=\"col\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls ; let i=index\">\n    \n                            <tr *ngIf=\"!group.get('isEditable').value\">\n                                <td>\n                                    {{group.get('category').value}}\n                                </td>\n                                <td colspan=\"15\">\n                                    <table class=\"table violation\" [ngClass]=\"isMobileView()\">\n                                        <thead>\n                                            <tr>\n    \n    \n                                                <th scope=\"col\">Unit Id<span></span></th>\n                                                <th scope=\"col\">Block Id<span></span></th>\n    \n    \n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <ng-container *ngFor=\"let violation of violationForm(i).controls ; let j=index\">\n                                                <tr *ngIf=\"!group.get('isEditable').value\">\n                                                    <td>\n    \n                                                        <mat-form-field>\n                                                            <input matInput type=\"text\" value=\" {{violation?.get('descViolationNo').value}}\">\n                                                        </mat-form-field>\n                                                    </td>\n                                                    <td>\n    \n                                                        <mat-form-field>\n                                                            <input matInput type=\"text\" value=\"{{violation?.get('stopprivledges').value}}\">\n                                                        </mat-form-field>\n                                                    </td>\n    \n    \n                                                </tr>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                    <table class=\"table violation\" [ngClass]=\"isMobileView()\">\n                                        <thead>\n                                            <tr>\n                                                <th scope=\"col\">Resident<span></span></th>\n                                                <th scope=\"col\">Category<span></span></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <ng-container *ngFor=\"let violation of violationForm(i).controls ; let j=index\">\n                                                <tr *ngIf=\"!group.get('isEditable').value\">\n                                                    <td>\n                                                        {{violation?.get('descViolationNo').value}}\n                                                    </td>\n                                                    <td>\n                                                        <mat-form-field>\n                                                            <mat-select  value=\"{{group.get('category').value}}\">\n                                                                <mat-option *ngFor=\"let item of allViolationCategory\"\n                                                                    [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</mat-option>\n                                                            </mat-select>\n                                                        </mat-form-field>\n    \n                                                    </td>\n    \n    \n                                                </tr>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                </td>\n    \n                                <td>\n                                    {{group.get('ruleno').value}}\n                                </td>\n    \n    \n                                <td colspan=\"15\">\n                                    <table class=\"table violation\" [ngClass]=\"isMobileView()\">\n                                        <thead>\n                                            <tr>\n    \n    \n                                                <th scope=\"col\">Stop What</th>\n                                                <th scope=\"col\">Until date</th>\n    \n    \n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <ng-container *ngFor=\"let violation of violationForm(i).controls ; let j=index\">\n                                                <tr *ngIf=\"!group.get('isEditable').value\">\n                                                    <td>\n                                                        <mat-form-field>\n                                                            <mat-select>\n                                                                <mat-option *ngFor=\"let item of allViolationPrivilege\"\n                                                                    [value]=\"item.stopPriveldgeDays\">{{\n                                                                    item.stopPriveldgeDays }}</mat-option>\n                                                            </mat-select>\n                                                        </mat-form-field>\n                                                    </td>\n                                                    <td>\n                                                        <mat-form-field>\n                                                            <input matInput type=\"text\" value=\"{{violation?.get('stopprivledges').value}}\">\n                                                        </mat-form-field>\n                                                    </td>\n    \n    \n                                                </tr>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                    <table class=\"table violation\" [ngClass]=\"isMobileView()\">\n                                        <thead>\n                                            <tr>\n    \n    \n    \n                                                <th scope=\"col\">Violation Comments</th>\n                                                <th scope=\"col\">Admin Comments</th>\n    \n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <ng-container *ngFor=\"let violation of violationForm(i).controls ; let j=index\">\n                                                <tr *ngIf=\"!group.get('isEditable').value\">\n                                                    <td>\n    \n                                                        <mat-form-field>\n                                                            <input matInput type=\"text\" value=\"{{violation?.get('descViolationNo').value}}\">\n                                                        </mat-form-field>\n                                                    </td>\n                                                    <td>\n    \n                                                        <mat-form-field>\n                                                            <input matInput type=\"text\" value=\"{{violation?.get('stopprivledges').value}}\">\n                                                        </mat-form-field>\n                                                    </td>\n    \n    \n                                                </tr>\n                                            </ng-container>\n                                        </tbody>\n                                    </table>\n                                </td>\n                                <td>\n                                    <div class=\"row\">\n                                        <button mat-raised-button class=\"col-6\" type=\"submit\" (click)=\"confirmPrivilege(i)\">Confirm </button>\n                                        <button mat-raised-button class=\"col-6\" type=\"submit\" (click)=\"cancelPrivilege(i)\">Cancel</button>\n                                    </div>\n                                </td>\n    \n    \n                            </tr>\n                        </ng-container>\n                    </tbody>\n    \n                </table>\n    \n            </form>\n    \n    \n        </div>\n    \n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"mb-3\">Edit Violation</h5>\n<div class=\"card mb-30\">\n    <div class=\"card-body\">\n\n\n\n        <ng-container>\n\n            <form #createForm=\"ngForm\" name=\"createForm\" (ngSubmit)=\"onSubmit(createForm)\"\n                novalidate>\n\n\n\n\n                <div class=\"row mt-5 col-12 clearfix\">\n                    <table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                        <tbody>\n                            <tr>\n                                <td>\n                                    Primary Contact Name:\n                                </td>\n                                <td>\n                                    {{violationData.primaryContactName}}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Unit/Tower:\n                                </td>\n                                <td>\n                                    {{violationData.UnitTower}}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Parking Slot:\n                                </td>\n                                <td>\n                                    {{violationData.ParkingSlothul}}\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n                <div class=\"row mt-5 col-12\">\n                    <table class=\"table\" [ngClass]=\"isMobileView()\">\n                        <tbody>\n                            <tr>\n                                <td>\n                                    Violation Category\n                                </td>\n                                <td>\n                                    <!-- <mat-form-field>\n                                            <mat-select  (change)=\"onChangeCategoryID($event)\">\n                                            <mat-option *ngFor=\"let item of allViolationCategory\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</mat-option>\n                                            </mat-select>\n                                        </mat-form-field> -->\n\n                                    <select name=\"category\" id=\"category\" class=\"form-control\" required (change)=\"onChangeCategoryID($event)\"\n                                        [(ngModel)]=\"violationData.violationCategory\" value=\"{{violationData.violationCategory}}\">\n                                        <option value=\"\" disabled selected>Select</option>\n                                        <option *ngFor=\"let item of allViolationCategory\" [value]=\"item.lookupValueId\">{{\n                                            item.lookupValueName }}</option>\n                                    </select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Violation Rule No\n                                </td>\n                                <td>\n                                    <!-- <mat-form-field>\n                                            <mat-select>\n                                            <mat-option *ngFor=\"let item of ruleListData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</mat-option>\n                                            </mat-select>\n                                        </mat-form-field> -->\n\n                                    <select name=\"category\" id=\"category\" class=\"form-control\" required [(ngModel)]=\"violationData.violationRuleNo\"\n                                        value=\"{{violationData.violationRuleNo}}\">\n                                        <option value=\"\" disabled selected>Select</option>\n                                        <option *ngFor=\"let item of ruleListData\" [value]=\"item.id\">{{ item.name }}</option>\n                                    </select>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Violation Comments\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"violationComments\"\n                                        required [(ngModel)]=\"violationData.violationComments\" value=\"{{violationData.violationComments}}\">\n                                    <!-- {{violationData.violationComments}} -->\n\n                                    <!-- {{violationData.violationComments}} -->\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Violation noticed on\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"violationNoticedOn\"\n                                        required [(ngModel)]=\"violationData.violationNoticedOn\" value=\"{{violationData.violationNoticedOn}}\">\n                                    <!-- {{violationData.violationComments}} -->\n\n                                    <!-- {{violationData.violationNoticedOn}} -->\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Violation Occurence\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"violationOccurence\"\n                                        value=\"{{violationData.violationOccurence}}\" required [(ngModel)]=\"violationData.violationOccurence\">\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>\n                                    Unit Owner Name\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"unitOwnerName\"\n                                        value=\"{{violationData.unitOwnerName}}\" required [(ngModel)]=\"violationData.unitOwnerName\">\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>\n                                    Penalty Amt\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"penaltyAmt\" value=\"{{violationData.penaltyAmt}}\"\n                                        required>\n                                    <!-- {{violationData.penaltyAmt}} -->\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Raised By\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"raisedBy\" value=\"{{violationData.raisedBy}}\"\n                                        required>\n                                    <!-- {{violationData.raisedBy}} -->\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Invoice No\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"invoiceNo\" [(ngModel)]=\"violationData.invoiceNo\" value=\"{{violationData.invoiceNo}}\"\n                                        required>\n                                    <!-- {{violationData.invoiceNo}} -->\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    Invoice Trigger\n                                </td>\n                                <td>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"invoiceTrigger\"\n                                        value=\"{{violationData.invoiceTrigger}}\" required>\n                                    <!-- {{violationData.invoiceTrigger}} -->\n                                </td>\n                            </tr>\n\n                            <tr>\n                                <td>\n                                    <input type=\"file\" name=\"file\" class=\"file-upload\">\n                                </td>\n                                <td>\n                                    <button class=\"btn blue mr-2\" [disabled]=\"createForm.invalid\">Submit</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n\n            </form>\n\n        </ng-container>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/view-violation/view-violation.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/view-violation/view-violation.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-setup-wrapper\">\n    \n        <div class=\"card clear ov mb-3\">\n                <div class=\"card-body no-border filter-box\">\n                    <div class='d-flex justify-content-between'>\n                      <h6><i-feather class=\"icon mr-2\" name=\"filter\"></i-feather>Filter By</h6>\n                  \n                      <div class=\"col-4\">\n                         <h6> <label>Today</label>/<label>Yesterday</label>/<label>Last 7 days</label></h6>\n                      </div>\n\n\n                    <!-- <div class=\"dropdown\">\n                            <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"AllBlockDropDown\" aria-haspopup=\"true\"\n                                aria-expanded=\"false\" (click)=\"getAllBlockData('all')\" [ngClass]=\"getSelected('all')\">\n                                <span>All Towers</span>\n                            </a>\n                        </div> -->\n                        <div class=\"col-6\">\n                        FROM:\n                        <div class=\"dropdown\">\n                                <app-simple-date-box \n                                [dateModel]=\"insertedOn\"\n                                (inputChange) = \"onDateChange($event, 'insertedOn')\"\n                                ></app-simple-date-box>\n                              </div>\n                              TO:\n                              <div class=\"dropdown\">\n                                    <app-simple-date-box \n                                    [dateModel]=\"insertedOn\"\n                                    (inputChange) = \"onDateChange($event, 'insertedOn')\"\n                                    ></app-simple-date-box>\n                                  </div>\n\n                                  </div>\n\n\n                    </div>\n                    <div class='d-flex justify-content-between'>\n                          \n                        <div class=\"col-4\">\n                        Tower\n                        <div class=\"dropdown\">\n                                <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"singleBlockDropDown\" aria-haspopup=\"true\"\n                                    aria-expanded=\"false\" [ngClass]=\"getSelected('single')\">\n                                    <span>{{singleBlock}}</span>\n                                    <div class=\"arrow\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></div>\n                                </a>\n                                <div class=\"dropdown-menu\" aria-labelledby=\"singleBlockDropDown\">\n                                    <a href=\"javascript:void(0)\" *ngFor=\"let block of blockListData\" (click)=\"getSingleBlock(block)\">{{block.apartmentBlockNumber}}</a>\n                                </div>\n                            </div>\n                          <!-- <div class=\"dropdown\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" >\n                          </div> -->\n                        </div>\n                          <div class=\"col-4\">\n                          Violation Category\n                          <div class=\"dropdown\">\n                                <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" id=\"singleBlockDropDown\" aria-haspopup=\"true\"\n                                    aria-expanded=\"false\" [ngClass]=\"getSelected('single')\">\n                                    <span>{{singleviolation}}</span>\n                                    <div class=\"arrow\"><i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></div>\n                                </a>\n                                <div class=\"dropdown-menu\" aria-labelledby=\"singleBlockDropDown\">\n                                    <a href=\"javascript:void(0)\" *ngFor=\"let block of allViolationCategory\" (click)=\"getSingleBlock(block)\">{{block.lookupValueName}}</a>\n                                </div>\n                            </div>\n                        </div>\n      \n                          </div>\n<div class='d-flex justify-content-between mt-4'>\n\n    <div class=\"col-12\">\n        Show disputed:\n        <input type=\"checkbox\" class=\"form-check-input ml-4\" id=\"selectDisputed\" name=\"selectDisputed\" [(ngModel)]=\"selectDisputed\">\n\n    </div>\n</div>\n\n<div class='d-flex justify-content-between mt-4'>\n    <div class=\"col-12\">\n        Waived Off:\n        <input type=\"checkbox\" class=\"form-check-input ml-4\" id=\"selectWaivedOff\" name=\"selectWaivedOff\" [(ngModel)]=\"selectWaivedOff\">\n    </div>\n</div>\n                  </div>\n            </div>\n    \n\t<div class=\"card clear form-group\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<!-- <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n                <div class=\"d-flex flex-row content-list\">\n                <div class=\"col-5\">\n                    <label>ID:</label><label>112334</label>\n                </div>\n                <div class=\"col-3\">\n                    <label>Tower A</label><label>102</label>\n                </div>\n                <div class=\"col-3\">\n                    <label>Vivek</label>\n                </div>\n                <div class=\"col-1\">\n                    <label></label>\n                </div>\n            </div>\n            <div class=\"d-flex flex-row content-list\">\n                <div class='col-5'>\n                    <label>Violation:</label><label>Parking Violations - </label>\n                </div>\n                <div class='col-3'>\n                    <label>Ilegal Parking </label>\n                </div>\n                <div class='col-3'>\n                    <label>3rd Time</label>\n                </div>\n                <div class=\"col-1\">\n                    <label></label>\n                </div>\n            </div>\n            <div class=\"d-flex flex-row content-list\">\n                <div class='col-5'>\n                    <label>1/20/2020</label>\n                </div>\n                <div class='col-3'>\n                    <label>Security person</label>\n                </div>\n                <div class='col-3'>\n                    <label>Amount :</label><label>200</label>\n                </div>\n                <div class='col-1'>\n                    <label></label>\n                </div>\n            </div>\n\t\t\t</li>\n\t\t\t<div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details-category\">\n\n\t\t\t<form #createCategoryTypeForm = \"ngForm\" name=\"createCategoryTypeForm\" (ngSubmit)=\"submitCreateCategoryTypeForm(createCategoryTypeForm)\"  novalidate>\n\t\t\t<div class=\"row p-category\">\n\t\t\t\t<div class=\"\n\t\t\t\tcol-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Category</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"categoryname\" [(ngModel)]=\"category.categoryname\" value=\"{{category.categoryname}}\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Enter\" name=\"Description\" [(ngModel)]=\"category.Description\" value=\"{{category.Description}}\" required></textarea>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<div class=\"input-box p-25\">\n\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"createCategoryTypeForm.invalid\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>\n\n\t\t\n\n\t\t\t\t\t\n\t\t\t</div>\n            </div> -->\n            <div *ngFor=\"let item of allViolationListData; let i=index\">\n                <li class=\"list-group-item {{i}}\"  data-toggle=\"collapse\" [attr.data-target]=\"item.id\"\n                    aria-expanded=\"true\" [attr.aria-controls]='item.id'>\n                    <!-- Create Violation Category &nbsp; -->\n                    <!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n                    <div class=\"d-flex flex-row content-list\">\n                        <div class=\"col-5\">\n                            <label>ID:</label><label>{{item.data.violationId}}</label>\n                        </div>\n                        <div class=\"col-3\">\n                            <label>Tower A</label><label>102</label>\n                        </div>\n                        <div class=\"col-3\">\n                            <label>{{item.data.personName}}</label>\n                        </div>\n                        <div class=\"col-1\">\n                            <label></label>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-row content-list\">\n                        <div class='col-5'>\n                            <label>Violation:</label><label>Parking Violations - </label>\n                        </div>\n                        <div class='col-3'>\n                            <label>Ilegal Parking </label>\n                        </div>\n                        <div class='col-3'>\n                            <label>3rd Time</label>\n                        </div>\n                        <div class=\"col-1\">\n                            <label class='pull-right'><a href=\"javascript:void(0)\">\n                                    <i-feather class=\"icon edit\" name=\"edit\" (click)=\"onEditOpen(i)\"></i-feather>\n                                </a></label>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-row content-list\">\n                        <div class='col-5'>\n                            <label>{{item.data.insertedOn | date: 'dd/MM/yyyy'}}</label>\n                        </div>\n                        <div class='col-3'>\n                            <label>Security person</label>\n                        </div>\n                        <div class='col-3'>\n                            <label>Amount :</label><label>{{item.data.penaltyAmount}}</label>\n                        </div>\n                        <div class='col-1'>\n                            <label></label>\n                        </div>\n                    </div>\n                </li>\n                <div id=\"typeCollapse_{{i}}\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                    <div class=\"details-category\">\n            \n            \n            \n                        <div class=\"row p-4 ml-2 mr-2\">\n            \n                            <a class=\"btn lime-green mt_5 col-sm-2 btn-srch mr-2\" href=\"javascript:void(0)\" (click)=\"openSearchWorkPermit()\"\n                                role=\"button\" data-toggle=\"dropdown\" id=\"addWorkPermits\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span>Waiveoff Penalty</span>\n                            </a>\n            \n                            <a class=\"btn lime-green mt_5 col-sm-2 btn-srch mr-2\" href=\"javascript:void(0)\" (click)=\"openSearchFacility()\"\n                                role=\"button\" data-toggle=\"dropdown\" id=\"addFacility\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span>Cancel Violation</span>\n                            </a>\n            \n                            <a class=\"btn lime-green mt_5 col-sm-2 btn-srch mr-2\" href=\"javascript:void(0)\" (click)=\"openSearchparkingSlot()\"\n                                role=\"button\" data-toggle=\"dropdown\" id=\"addParking\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span>Create Dispute</span>\n                            </a>\n            \n                            <a class=\"btn lime-green mt_5 col-sm-2 btn-srch mr-2\" href=\"javascript:void(0)\" (click)=\"openSearchBlockUnit()\"\n                                role=\"button\" data-toggle=\"dropdown\" id=\"addBlockUnit\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                <span>Cancel Dispute</span>\n                            </a>\n            \n            \n                            <div class=\"row clearfix col-12 mt-4\">\n                                <div class=\"col-12\">\n                                    <label>Dispute ID</label><label></label>\n                                </div>\n                                <div class=\"col-12\">\n                                    <label>Dispute Comments</label><label></label>\n                                </div>\n                                <div class=\"col-12\">\n                                    <label>Dispute Status</label><label></label>\n                                </div>\n            \n            \n            \n                            </div>\n            \n            \n            \n                        </div>\n            \n            \n            \n            \n                    </div>\n                </div>\n            \n            </div>\n\t\t\t</ul>\n\t\t</div>\n    </div>\n    \n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/violation-setup/violation-setup.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/violation-setup/violation-setup.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-setup-wrapper\">\n\t\n        <div class=\"card clear form-group\" id=\"accordion\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n                    Create Violation Category &nbsp;<!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n                </li>\n                <div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"details-category\">\n    \n                <form #createCategoryTypeForm = \"ngForm\" name=\"createCategoryTypeForm\" (ngSubmit)=\"submitCreateCategoryTypeForm(createCategoryTypeForm)\"  novalidate>\n                <div class=\"row p-category\">\n                    <div class=\"\n                    col-sm-4\">\n                        <div class=\"input-box\">\n                            <label>Category</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"categoryname\" [(ngModel)]=\"category.categoryname\" value=\"{{category.categoryname}}\" required>\n                        </div>\n                    </div>\n    \n                    <div class=\"col-sm-6\">\n                            <div class=\"input-box\">\n                                <label>Description</label>\n                                <textarea class=\"form-control\" placeholder=\"Enter\" name=\"Description\" [(ngModel)]=\"category.Description\" value=\"{{category.Description}}\" required></textarea>\n                            </div>\n                        </div>\n    \n                    <div class=\"col-sm-2\">\n                    <div class=\"input-box p-25\">\n                        <button class=\"btn blue mr-2\" [disabled]=\"createCategoryTypeForm.invalid\">Submit</button>\n                    </div>\n                    </div>\n                </div>\n                </form>\n    \n                <table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                    <thead>\n                        <tr>\n                          <th scope=\"col\" (click)=\"sortUnitData('lookupValueId')\">Category ID<span [ngClass]=\"getFieldOrderBy('lookupValueId')\"></span></th>\n                          <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Category <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n                          <th scope=\"col\" (click)=\"sortUnitData('description')\">Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n                          <th scope=\"col\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let violationcategory of allViolationCategory | orderBy : unitFieldType: unitOrder | slice:ItemStartIndex:ItemEndIndex | simpleSearch: wpData ; let i = index\">\n                          <td class=\"name\">{{violationcategory.lookupValueId}}</td>\n                          <td class=\"grey\">{{violationcategory.lookupValueName}}</td>\n                          <td class=\"grey\">{{violationcategory.description}}</td>\n                          <td class=\"grey\">\n                            <a class=\"\" (click)=\"editViolationCategory(violationcategory)\"><i-feather class=\"icon edit\" name=\"edit\" ></i-feather></a>&nbsp;\n                            <a class=\"\" (click)=\"deleteViolationCategory(violationcategory.lookupValueId)\"><i-feather class=\"icon delete\" name=\"trash\" ></i-feather></a>\n                          </td>\n                        </tr>\n                    </tbody>\n                </table>\n                \n                <app-pagination \n                    [totalItems]=\"totalItems\"  \n                    [ItemStartIndex]=\"ItemStartIndex\"\n                    [ItemEndIndex] = \"ItemEndIndex\"\n                    [itemLimit] = \"itemLimit\"\n                    (outputParams) = \"getIndexParams($event)\">\t\n                </app-pagination>\n    \n                        \n                </div>\n                </div>\t\n                </ul>\n            </div>\n        </div>\n    \n        <div class=\"card clear form-group\" id=\"accordion\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#natureCollapseOne\" aria-expanded=\"true\" aria-controls=\"naturecollapseOne\">\n                    Stop Privledge &nbsp;<!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n                </li>\n                <div id=\"natureCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"details-privilege\">\n    \n                <form #createsStopPrivledgeForm = \"ngForm\" name=\"createsStopPrivledgeForm\" (ngSubmit)=\"submitCreatesStopPrivledgeForm(createsStopPrivledgeForm)\"  novalidate>\n                <div class=\"row p-category\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"input-box\">\n                            <label>Violation Name*</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"ViolationName\" [(ngModel)]=\"privledge.ViolationName\" valu=\"{{privledge.ViolationName}}\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Stopwhat Description</label>\n                            <textarea class=\"form-control\" placeholder=\"Enter\" name=\"ViolationDescription\" [(ngModel)]=\"privledge.ViolationDescription\" value=\"{{privledge.ViolationDescription}}\" required></textarea>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <div class=\"input-box\">\n                            <label>Period of Stop Privledges</label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"PeriodOfPrivledges\" [(ngModel)]=\"privledge.PeriodOfPrivledges\" value=\"{{privledge.PeriodOfPrivledges}}\" required>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                    <div class=\"input-box p-25\">\n                        <button class=\"btn blue mr-2\" [disabled]=\"createsStopPrivledgeForm.invalid\">Submit</button>\n                    </div>\n                    </div>\n                </div>\n                </form>\n    \n                <table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n                    <thead>\n                        <tr>\n                          <th scope=\"col\" >StopPrivledgeID<span ></span></th>\n                          <th scope=\"col\" >Violation Name <span ></span></th>\n                          <th scope=\"col\" >Stopwhat Description <span></span></th>\n                          <th scope=\"col\" >Period of Stop Privledge <span></span></th>\n                          <th scope=\"col\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let privledge of allViolationPrivilege | orderBy : PunitFieldType: PunitOrder | slice:NWItemStartIndex:PItemEndIndex | simpleSearch: nwData ; let i = index\">\n                          <td class=\"name\">{{privledge.id}}</td>\n                          <td class=\"grey\">{{privledge.name}}</td>\n                          <td class=\"grey\">{{privledge.description}}</td>\n                          <td class=\"grey\">{{privledge.stopPriveldgeDays}}</td>\n                          <td class=\"grey\">\n                            <a class=\"\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"editViolationPrivilege(privledge)\"></i-feather></a>&nbsp;\n                            <a class=\"\"><i-feather class=\"icon delete\" name=\"trash\" ></i-feather></a>\n                          </td>\n                        </tr>\n                    </tbody>\n                </table>\n                \n                <app-pagination \n                    [totalItems]=\"PtotalItems\"  \n                    [ItemStartIndex]=\"PItemStartIndex\"\n                    [ItemEndIndex] = \"PItemEndIndex\"\n                    [itemLimit] = \"NWitemLimit\"\n                    (outputParams) = \"getPIndexParams($event)\">\t\n                </app-pagination>\n    \n                        \n                </div>\n                </div>\t\n                </ul>\n            </div>\n        </div>\n    \n        <div class=\"card clear form-group\" id=\"accordion\">\n            <div class=\"card-body p-0\">\n                <ul class=\"list-group tabs clear\">\n                <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#violationCollapseOne\" aria-expanded=\"true\" aria-controls=\"naturecollapseOne\">\n                    Create Violation Rule &nbsp;<!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n                </li>\n                <div id=\"violationCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                <div class=\"details\" id=\"details\">\n    \n            \n                <app-loader *ngIf=\"!isViolationDataLoaded\"></app-loader>\n    \n    <div class=\"card table-card mb-30\" *ngIf=\"isViolationDataLoaded\">\n    \n    \n        <div class=\"card-body p-0\">\n                <form [formGroup]=\"userTable\">\n        <table class=\"table rule\" [ngClass]=\"isMobileView()\">\n                <thead>\n                    <tr>\n                      <th scope=\"col\" (click)=\"sortUnitData('serviceType')\">Category<span [ngClass]=\"getFieldOrderBy('serviceType')\"></span></th>\n                      <th scope=\"col\" (click)=\"sortUnitData('phone')\">Rule No<span [ngClass]=\"getFieldOrderBy('phone')\"></span></th>\n                      <th scope=\"col\" colspan=\"15\"></th>\n    \n                      <th scope=\"col\">Action</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <ng-container formArrayName=\"tableRows\" *ngFor=\"let group of getFormControls.controls ; let i=index\">\n                      <tr *ngIf=\"group.get('isEditable').value\" [formGroupName]=\"i\">\n                        <td>\n                        <mat-form-field>\n                            <mat-select formControlName=\"category\">\n                            <mat-option *ngFor=\"let item of allViolationCategory\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n                        \n                        \n                        </td>\n                        <td>\n                          <mat-form-field>\n                                <input matInput type=\"text\" formControlName=\"ruleno\">\n                            \n                          </mat-form-field>\n                        </td>\n                        <td colspan=\"15\">\n                            <table class=\"table violation\" [ngClass]=\"isMobileView()\">\n                                <thead>\n                                    <tr>\n                                      <th scope=\"col\" >Violation No </th>\n                                      <th scope=\"col\" >Penalty Amount </th>\n                                      <th scope=\"col\" class=\"desc\" >Violation Description</th>\n                                      <th scope=\"col\" >Stop privilege</th>\n                                      <th scope=\"col\" ></th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container formArrayName=\"violationTable\" *ngFor=\"let violation of violationForm(i).controls ; let j=index\">\n                                      <tr  [formGroupName]=\"j\">\n                                            <td>\n                                                <label class=\"text-center label-index\">{{j + 1}}.</label>\n                                            </td>\n                                        <td>\n                                        <mat-form-field>\n                                            <input matInput type=\"text\" formControlName=\"fineViolationNo\">\n                                        </mat-form-field>\n                                        </td>\n                                        <td>\n                                          <mat-form-field class=\"desc-content\">\n                                                <input matInput type=\"text\" formControlName=\"descViolationNo\">\n                                            \n                                          </mat-form-field>\n                                        </td>\n                                        <td>\n                                          <mat-form-field>\n                                                \n                                                <mat-select formControlName=\"stopprivledges\">\n                                                    <mat-option *ngFor=\"let item of allViolationPrivilege\" [value]=\"item.stopPriveldgeDays\">{{ item.stopPriveldgeDays }}</mat-option>\n                                                    </mat-select>\n                                          </mat-form-field>\n                                        </td>\n                                        <td>\n                                            <div class=\"action-icon\">\n                                                <mat-icon class=\"delete\" (click)=\"clearviolationRow(i, j)\">close</mat-icon>\n                                                <mat-icon class=\"delete\" (click)=\"deleteviolationRow(i, j)\">delete_forever</mat-icon>\n                                            </div>\n                                        </td>\n                                      </tr>\n                                      </ng-container>\n                                </tbody>\n                                <tfoot>\n                                        \n                                                <button mat-raised-button type=\"submit\" (click)=\"addRowViolation(i)\">Add row</button>\n                                                \n                                             \n                                </tfoot>\n                                </table>\n                        </td>\n                        \n                        \n                        <td>\n                          <mat-icon class=\"delete\" (click)=\"deleteRow(i)\">delete_forever</mat-icon>\n                          <mat-icon class=\"done\" (click)=\"doneRow(group, i)\">done</mat-icon>\n                          \n                        </td>\n                      </tr>\n                      <tr *ngIf=\"!group.get('isEditable').value\" >\n                        <td>\n                          {{group.get('category').value}}\n                        </td>\n                        <td>\n                          {{group.get('ruleno').value}}\n                        </td>\n                        <td colspan=\"8\">\n                                <table class=\"table violation\" [ngClass]=\"isMobileView()\">\n                                        <thead>\n                                            <tr>\n                                              <th scope=\"col\" >Violation No </th>\n                                              <th scope=\"col\" >Fine Violation No </th>\n                                              <th scope=\"col\" >Desc Violation No</th>\n                                              <th scope=\"col\" >Stop Privledges</th>\n                                              <th scope=\"col\" ></th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <ng-container *ngFor=\"let violation of violationForm(i).controls ; let j=index\">\n                                              <tr *ngIf=\"!group.get('isEditable').value\">\n                                                    <td>\n                                                        <label class=\"text-center label-index\">{{j + 1}}.</label>\n                                                    \n                                                    </td>\n                                                    <td>\n                                                        {{violation?.get('fineViolationNo').value}}\n                                                    </td>\n                                                    <td>\n                                                        {{violation?.get('descViolationNo').value}}\n                                                    </td>\n                                                    <td>\n                                                        {{violation?.get('stopprivledges').value}}\n                                                    </td>\n                                                    <td>\n    \n                                                    </td>\n                                              </tr>\n                                              </ng-container>\n                                        </tbody>\n                                        </table>\n                        </td>\n                        \n                        \n                        <td>\n                                <mat-icon class=\"edit\" (click)=\"editRow(group)\">edit</mat-icon>\n                                \n                          \n                        </td>\n                      </tr>\n                    </ng-container>\n                  </tbody>\n                \n            </table>\n            <div class=\"action-container\">\n                    <button mat-raised-button type=\"submit\" (click)=\"addRow()\">Add row</button>\n                    <!-- <button mat-raised-button [disabled]=\"userTable.invalid\" type=\"submit\" (click)=\"submitForm()\">Submit</button> -->\n                  </div>\n            </form>\n    \n            <!-- <div class=\"output\">\n                    <p>Form Data:  {{userTable.value | json}}</p>\n                      <p>Is Valid: {{userTable.valid}}</p>\n                  </div> -->\n        </div>\n    \n    </div>\n    \n            \n                \n                <app-pagination \n                    [totalItems]=\"NWtotalItems\"  \n                    [ItemStartIndex]=\"NWItemStartIndex\"\n                    [ItemEndIndex] = \"NWItemEndIndex\"\n                    [itemLimit] = \"NWitemLimit\"\n                    (outputParams) = \"getIndexParams($event)\">\t\n                </app-pagination>\n    \n                        \n                </div>\n                </div>\t\n                </ul>\n            </div>\n        </div>\n    \n    </div>\n    \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/violation.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/violation.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>violation works!</p>\n");

/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/add-violation.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/add-violation.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-srch {\n  padding-left: 7px;\n  padding-right: 6px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n.shrink-table {\n  border: 1px solid #dee2e6;\n  background-color: #083d71;\n  color: #fff;\n}\n\n.shrink-table td, .shrink-table th {\n  border: 1px solid #083d71;\n}\n\n.file-upload {\n  display: inline;\n  padding: 4px;\n}\n\ntable {\n  border: 1px solid #dee2e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvYWRkLXZpb2xhdGlvbi9hZGQtdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvYWRkLXZpb2xhdGlvbi9hZGQtdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDSEo7O0FES0k7RUFDSSx5QkFBQTtBQ0hSOztBRFFBO0VBQ1EsZUFBQTtFQUNBLFlBQUE7QUNMUjs7QURRQTtFQUNJLHlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvYWRkLXZpb2xhdGlvbi9hZGQtdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzXCI7XG5cbi5idG4tc3JjaHtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNocmluay10YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODNkNzE7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDgzZDcxO1xuICAgIH1cbn1cblxuXG4uZmlsZS11cGxvYWQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbn1cblxudGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG4iLCIuYnRuLXNyY2gge1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNocmluay10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODNkNzE7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnNocmluay10YWJsZSB0ZCwgLnNocmluay10YWJsZSB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwODNkNzE7XG59XG5cbi5maWxlLXVwbG9hZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogNHB4O1xufVxuXG50YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/add-violation.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/add-violation.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AddViolationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddViolationComponent", function() { return AddViolationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _search_facility_search_facility_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-facility/search-facility.component */ "./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.ts");
/* harmony import */ var src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Violation */ "./src/app/api/controllers/Violation.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _searc_workpermits_searc_workpermits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./searc-workpermits/searc-workpermits.component */ "./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.ts");
/* harmony import */ var _search_parkingslots_search_parkingslots_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-parkingslots/search-parkingslots.component */ "./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.ts");
/* harmony import */ var _search_blockunit_search_blockunit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-blockunit/search-blockunit.component */ "./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.ts");











let AddViolationComponent = class AddViolationComponent {
    constructor(dialog, violationService, lookupService, sharedService, cookieService) {
        this.dialog = dialog;
        this.violationService = violationService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isViolationLoaded = false;
        this.errorMessage = '';
        this.isError = false;
        this.isAccountAdded = false;
        this.violationData = {
            primaryContactName: '',
            UnitTower: '',
            ParkingSlot: '',
            violationCategory: '',
            violationRuleNo: '',
            violationComments: '',
            violationNoticedOn: '',
            violationOccurence: '',
            unitOwnerName: '',
            penaltyAmt: '',
            raisedBy: '',
            invoiceNo: '',
            invoiceTrigger: ''
        };
    }
    ngOnInit() {
        this.isViolationLoaded = true;
        this.isAccountAdded = true;
        this.getViolationCategory();
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    openSearchFacility() {
        const dialogRef = this.dialog.open(_search_facility_search_facility_component__WEBPACK_IMPORTED_MODULE_3__["SearchFacilityComponent"], {
            // width: '900px',
            data: {
                type: 'search-facility'
            }
        });
        dialogRef.componentInstance.outputEvent.subscribe((res) => {
            this.ongetSearchData(res);
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    openSearchWorkPermit() {
        const dialogRef = this.dialog.open(_searc_workpermits_searc_workpermits_component__WEBPACK_IMPORTED_MODULE_8__["SearcWorkpermitsComponent"], {
            // width: '900px',
            data: {
                type: 'search-workpermit'
            }
        });
        dialogRef.componentInstance.outputEvent.subscribe((res) => {
            this.ongetSearchData(res);
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    openSearchparkingSlot() {
        const dialogRef = this.dialog.open(_search_parkingslots_search_parkingslots_component__WEBPACK_IMPORTED_MODULE_9__["SearchParkingslotsComponent"], {
            // width: '900px',
            data: {
                type: 'search-facility'
            }
        });
        dialogRef.componentInstance.outputEvent.subscribe((res) => {
            this.ongetSearchData(res);
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    openSearchBlockUnit() {
        const dialogRef = this.dialog.open(_search_blockunit_search_blockunit_component__WEBPACK_IMPORTED_MODULE_10__["SearchBlockunitComponent"], {
            // width: '900px',
            data: {
                type: 'search-facility'
            }
        });
        dialogRef.componentInstance.outputEvent.subscribe((res) => {
            this.ongetSearchData(res);
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    ongetSearchData(data) {
        console.log(data);
    }
    getViolationRule(violationCateogoryId) {
        const _apartment_Id = parseInt(this.cookieService.get('apartmentId'));
        const params1 = {
            apartmentId: _apartment_Id,
            ViolationCategoryId: violationCateogoryId
        };
        this.violationService.getViolationRule(params1).subscribe((rule) => {
            this.ruleListData = rule;
        }, error => {
            this.isError = true;
        });
    }
    getViolationCategory() {
        let params = {
            LookupTypeId: 78,
            active: 1
        };
        this.lookupService.getLookupValueByLookupTypeIdStatus(params).subscribe((res) => {
            this.allViolationCategory = res;
        });
    }
    onChangeCategoryID(event) {
        this.getViolationRule(event);
    }
    onSubmit() {
        const params = {
            Id: 0,
            ViolationStatusId: 0,
            Comments: '',
            ViolationRuleId: 0,
            ApartmentId: 0,
            ApartmentBlockUnitId: 0,
            NoticedOn: '',
            PenaltyAmt: 0,
            Raisedby: 1,
            InvoiceNo: 0,
            IsActive: true,
            InsertedBy: 1,
            InsertedOn: new Date().toISOString(),
            UpdatedBy: 1,
            UpdatedOn: new Date().toISOString(),
            IsDisputed: true,
            DisputedComment: '',
            ViolationOccurrence: 0
        };
        this.violationService.addViolations(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage(res.message);
                this.violationData = {
                    primaryContactName: '',
                    UnitTower: '',
                    ParkingSlot: '',
                    violationCategory: '',
                    violationRuleNo: '',
                    violationComments: '',
                    violationNoticedOn: '',
                    violationOccurence: '',
                    unitOwnerName: '',
                    penaltyAmt: '',
                    raisedBy: '',
                    invoiceNo: '',
                    invoiceTrigger: ''
                };
            }
            else {
            }
        });
    }
};
AddViolationComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_4__["ViolationService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
AddViolationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-violation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-violation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/add-violation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-violation.component.scss */ "./src/app/ams/violation/components/add-violation/add-violation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_4__["ViolationService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
], AddViolationComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aW9sYXRpb24vY29tcG9uZW50cy9hZGQtdmlvbGF0aW9uL3NlYXJjLXdvcmtwZXJtaXRzL3NlYXJjLXdvcmtwZXJtaXRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: SearcWorkpermitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearcWorkpermitsComponent", function() { return SearcWorkpermitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/WorkPermit */ "./src/app/api/controllers/WorkPermit.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let SearcWorkpermitsComponent = class SearcWorkpermitsComponent {
    constructor(dialogRef, data, facilityService, cookieService, workpermitService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.facilityService = facilityService;
        this.cookieService = cookieService;
        this.workpermitService = workpermitService;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = 'unitno';
        this.unitOrder = false;
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = data;
    }
    ngOnInit() {
        this.getWorkPermit();
    }
    close() {
        this.dialogRef.close(false);
    }
    getWorkPermit() {
        const params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            active: 1
        };
        this.workpermitService.getWorkPermitsByApartmentIdStatus(params).subscribe((res) => {
            this.allFacility = res;
            this.totalItems = this.allFacility.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    getFacilityName(id) {
        this.facilityService.getApartmentFacilityByFacilityId(id).subscribe((res) => {
            this.allFacility = res;
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    onSelect(facility) {
        console.log(facility);
        this.outputEvent.emit(facility);
        this.dialogRef.close();
    }
};
SearcWorkpermitsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__["FacilityService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SearcWorkpermitsComponent.prototype, "outputEvent", void 0);
SearcWorkpermitsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searc-workpermits',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./searc-workpermits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./searc-workpermits.component.scss */ "./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_4__["FacilityService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"]])
], SearcWorkpermitsComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aW9sYXRpb24vY29tcG9uZW50cy9hZGQtdmlvbGF0aW9uL3NlYXJjaC1ibG9ja3VuaXQvc2VhcmNoLWJsb2NrdW5pdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SearchBlockunitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBlockunitComponent", function() { return SearchBlockunitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/WorkPermit */ "./src/app/api/controllers/WorkPermit.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let SearchBlockunitComponent = class SearchBlockunitComponent {
    constructor(dialogRef, data, facilityService, cookieService, workpermitService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.facilityService = facilityService;
        this.cookieService = cookieService;
        this.workpermitService = workpermitService;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = 'unitno';
        this.unitOrder = false;
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = data;
    }
    ngOnInit() {
        this.getWorkPermit();
    }
    close() {
        this.dialogRef.close(false);
    }
    getWorkPermit() {
        const params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            active: 1
        };
        this.workpermitService.getWorkPermitsByApartmentIdStatus(params).subscribe((res) => {
            this.allFacility = res;
            this.totalItems = this.allFacility.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    getFacilityName(id) {
        this.facilityService.getApartmentFacilityByFacilityId(id).subscribe((res) => {
            this.allFacility = res;
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    onSelect(facility) {
        // console.log(facility);
        this.outputEvent.emit(facility);
        this.dialogRef.close();
    }
};
SearchBlockunitComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_4__["WorkPermitService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SearchBlockunitComponent.prototype, "outputEvent", void 0);
SearchBlockunitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-blockunit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-blockunit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-blockunit.component.scss */ "./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_4__["WorkPermitService"]])
], SearchBlockunitComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".p-4 {\n  padding: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvYWRkLXZpb2xhdGlvbi9zZWFyY2gtZmFjaWxpdHkvc2VhcmNoLWZhY2lsaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvYWRkLXZpb2xhdGlvbi9zZWFyY2gtZmFjaWxpdHkvc2VhcmNoLWZhY2lsaXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYW1zL3Zpb2xhdGlvbi9jb21wb25lbnRzL2FkZC12aW9sYXRpb24vc2VhcmNoLWZhY2lsaXR5L3NlYXJjaC1mYWNpbGl0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wLTR7XG4gICAgcGFkZGluZzogNHB4O1xufSIsIi5wLTQge1xuICBwYWRkaW5nOiA0cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: SearchFacilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFacilityComponent", function() { return SearchFacilityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let SearchFacilityComponent = class SearchFacilityComponent {
    constructor(dialogRef, data, facilityService, cookieService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.facilityService = facilityService;
        this.cookieService = cookieService;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = 'unitno';
        this.unitOrder = false;
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = data;
    }
    ngOnInit() {
        this.getFacility();
    }
    close() {
        this.dialogRef.close(false);
    }
    getFacility() {
        const params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            active: 1
        };
        this.facilityService.getApartmentFacilityBookingsByApartmentIdStatus(params).subscribe((res) => {
            this.allFacility = res;
            this.totalItems = this.allFacility.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    getFacilityName(id) {
        this.facilityService.getApartmentFacilityByFacilityId(id).subscribe((res) => {
            this.allFacility = res;
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    onSelect(facility) {
        this.outputEvent.emit(facility);
        this.dialogRef.close();
    }
};
SearchFacilityComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SearchFacilityComponent.prototype, "outputEvent", void 0);
SearchFacilityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-facility',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-facility.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-facility.component.scss */ "./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], SearchFacilityComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aW9sYXRpb24vY29tcG9uZW50cy9hZGQtdmlvbGF0aW9uL3NlYXJjaC1wYXJraW5nc2xvdHMvc2VhcmNoLXBhcmtpbmdzbG90cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SearchParkingslotsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchParkingslotsComponent", function() { return SearchParkingslotsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





let SearchParkingslotsComponent = class SearchParkingslotsComponent {
    constructor(dialogRef, data, facilityService, cookieService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.facilityService = facilityService;
        this.cookieService = cookieService;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        this.unitFieldType = 'unitno';
        this.unitOrder = false;
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = data;
    }
    ngOnInit() {
        this.getFacility();
    }
    close() {
        this.dialogRef.close(false);
    }
    getFacility() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            active: 1
        };
        this.facilityService.getApartmentFacilityBookingsByApartmentIdStatus(params).subscribe((res) => {
            this.allFacility = res;
            this.totalItems = this.allFacility.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    getFacilityName(id) {
        this.facilityService.getApartmentFacilityByFacilityId(id).subscribe((res) => {
            this.allFacility = res;
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    onSelect(facility) {
        console.log(facility);
        this.outputEvent.emit(facility);
        this.dialogRef.close();
    }
};
SearchParkingslotsComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], SearchParkingslotsComponent.prototype, "outputEvent", void 0);
SearchParkingslotsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-parkingslots',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-parkingslots.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-parkingslots.component.scss */ "./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_3__["FacilityService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], SearchParkingslotsComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/stop-privilege/stop-privilege.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/violation/components/stop-privilege/stop-privilege.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table th, .table td {\n  padding: 5px 25px !important;\n  width: 10px !important;\n  border: 1px solid #dae0cd !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvc3RvcC1wcml2aWxlZ2Uvc3RvcC1wcml2aWxlZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy92aW9sYXRpb24vY29tcG9uZW50cy9zdG9wLXByaXZpbGVnZS9zdG9wLXByaXZpbGVnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0VBRUEsc0JBQUE7RUFDQSxvQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYW1zL3Zpb2xhdGlvbi9jb21wb25lbnRzL3N0b3AtcHJpdmlsZWdlL3N0b3AtcHJpdmlsZWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHRoLCAudGFibGUgdGR7XG4gICAgcGFkZGluZzogNXB4IDI1cHggIWltcG9ydGFudDtcbiAgICAvLyBtYXgtd2lkdGg6IDEwcHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkYWUwY2QgIWltcG9ydGFudDtcbn1cblxuXG4iLCIudGFibGUgdGgsIC50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweCAyNXB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYWUwY2QgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/violation/components/stop-privilege/stop-privilege.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/violation/components/stop-privilege/stop-privilege.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StopPrivilegeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPrivilegeComponent", function() { return StopPrivilegeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Violation */ "./src/app/api/controllers/Violation.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");







let StopPrivilegeComponent = class StopPrivilegeComponent {
    constructor(lookupService, sharedService, cookieService, violationService, fb) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.violationService = violationService;
        this.fb = fb;
        this.unitFieldType = 'unitno';
        this.unitOrder = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        // Nature Pagination
        this.NWunitFieldType = 'unitno';
        this.NWunitOrder = false;
        this.NWItemStartIndex = 0;
        this.NWitemLimit = 20;
        this.isDataLoaded = false;
        this.isError = false;
        this.alertMessage = '';
        this.itemPositions = [];
        this.currentPosition = 0;
        this.isViolationDataLoaded = false;
        this.PItemStartIndex = 0;
        this.PitemLimit = 20;
        this.PunitFieldType = 'id';
        this.PunitOrder = false;
    }
    ngOnInit() {
        this.getViolationRule();
        this.getViolationCategory();
        this.getViolationPrivilege();
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
    }
    getPIndexParams(event) {
        this.PItemStartIndex = event.ItemStartIndex;
        this.PItemEndIndex = event.ItemEndIndex;
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType === type) {
            return this.unitOrder ? 'desc' : 'asc';
        }
        else
            return '';
    }
    getViolationCategory() {
        let params = {
            LookupTypeId: 78,
            active: 1
        };
        this.lookupService.getLookupValueByLookupTypeIdStatus(params).subscribe((res) => {
            this.allViolationCategory = res;
            this.isDataLoaded = true;
            this.totalItems = this.allViolationCategory.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    moveTabRight() {
        if (this.currentPosition + 1 < this.itemPositions.length) {
            document.getElementById('details').style.left = '-' + this.itemPositions[++this.currentPosition] + 'px';
        }
    }
    moveTabLeft() {
        if (this.currentPosition - 1 >= 0) {
            document.getElementById('details').style.left = '-' + this.itemPositions[--this.currentPosition] + 'px';
        }
    }
    ngAfterViewInit() {
        this.control = this.userTable.get('tableRows');
    }
    addRow() {
        const control = this.userTable.get('tableRows');
        control.push(this.initiateForm());
        this.violationControl = control.get('violationTable');
        this.addViolationRow();
    }
    deleteRow(index) {
        const control = this.userTable.get('tableRows');
        control.removeAt(index);
    }
    editRow(group) {
        group.get('isEditable').setValue(true);
    }
    doneRow(group, id) {
        group.get('isEditable').setValue(false);
        const control = group.get('violationTable');
        ;
        const fine = control.at(4); // .get('fineViolationNo').value;
        const ruleId = parseInt(group.get('ruleId').value);
        const lookupparams = {
            Id: ruleId,
            Name: group.get('ruleno').value,
            ViolationCategoryId: parseInt(group.get('category').value),
            // tslint:disable-next-line:radix
            FineViolationNo1: control.at(0) === undefined ? 0 : parseInt(control.at(0).get('fineViolationNo').value === '' ? '0' : control.at(0).get('fineViolationNo').value),
            DescViolationNo1: control.at(0) === undefined ? 0 : control.at(0).get('descViolationNo').value,
            ViolationPrivilegeId1: control.at(0) === undefined ? 0 : parseInt(control.at(0).get('stopprivledges').value === '' ? '0' : control.at(0).get('stopprivledges').value),
            FineViolationNo2: control.at(1) === undefined ? 0 : parseInt(control.at(1).get('fineViolationNo').value === '' ? '0' : control.at(1).get('fineViolationNo').value),
            DescViolationNo2: control.at(1) === undefined ? 0 : control.at(1).get('descViolationNo').value,
            ViolationPrivilegeId2: control.at(2) === undefined ? 0 : parseInt(control.at(1).get('stopprivledges').value === '' ? '0' : control.at(1).get('stopprivledges').value),
            FineViolationNo3: control.at(2) === undefined ? 0 : parseInt(control.at(2).get('fineViolationNo').value === '' ? '0' : control.at(2).get('fineViolationNo').value),
            DescViolationNo3: control.at(2) === undefined ? 0 : control.at(2).get('descViolationNo').value,
            ViolationPrivilegeId3: control.at(2) === undefined ? 0 : parseInt(control.at(2).get('stopprivledges').value === '' ? '0' : control.at(2).get('stopprivledges').value),
            FineViolationNo4: control.at(3) === undefined ? 0 : parseInt(control.at(3).get('fineViolationNo').value === '' ? '0' : control.at(3).get('fineViolationNo').value),
            DescViolationNo4: control.at(3) === undefined ? '' : control.at(3).get('descViolationNo').value,
            ViolationPrivilegeId4: control.at(3) === undefined ? 0 : parseInt(control.at(3).get('stopprivledges').value === '' ? '0' : control.at(3).get('stopprivledges').value),
            FineViolationNo5: control.at(4) === undefined ? 0 : parseInt(control.at(4).get('fineViolationNo').value === '' ? '0' : control.at(4).get('fineViolationNo').value),
            DescViolationNo5: control.at(4) === undefined ? '' : control.at(4).get('descViolationNo').value,
            ViolationPrivilegeId5: control.at(4) === undefined ? 0 : parseInt(control.at(4).get('stopprivledges').value === '' ? '0' : control.at(4).get('stopprivledges').value),
            IsActive: true,
            InsertedBy: parseInt(this.cookieService.get('userId')),
            InsertedOn: new Date().toISOString(),
            UpdatedBy: parseInt(this.cookieService.get('userId')),
            UpdatedOn: new Date().toISOString(),
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        if (ruleId === 0) {
            this.violationService.addViolationRule(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
        else {
            this.violationService.updateViolationRule(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
        // this.submitCreatesViolationPrivledgeForm(id);
    }
    deleteviolationRow(index, violationIndex) {
        const control = this.tableForm().at(index).get('violationTable');
        control.removeAt(violationIndex);
    }
    clearviolationRow(index, violationIndex) {
        const control = this.tableForm().at(index).get('violationTable');
        control.at(violationIndex).reset();
    }
    addViolationRow() {
        const mainForm = this.userTable.get('tableRows');
        const length = mainForm.length;
        const control = mainForm.controls[length - 1];
        const violation = control.get('violationTable');
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
    }
    addRowViolation(index) {
        const control = this.tableForm().at(index).get('violationTable');
        // const violation = control.get('violationTable') as FormArray;
        control.push(this.initiateViolationForm());
    }
    saveUserDetails() {
        console.log(this.userTable.value);
    }
    get getFormControls() {
        const control = this.userTable.get('tableRows');
        return control;
    }
    violationForm(empIndex) {
        const ctrl = this.tableForm().at(empIndex);
        const ctrl2 = ctrl.get('violationTable');
        return this.tableForm().at(empIndex).get('violationTable');
    }
    tableForm() {
        return this.userTable.get('tableRows');
    }
    submitForm() {
        const control = this.userTable.get('tableRows');
        this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
        console.log(this.touchedRows);
    }
    initiateForm() {
        return this.fb.group({
            ruleId: ['0'],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ruleno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            violationTable: this.fb.array([]),
            isEditable: [true]
        });
    }
    initiateViolationForm() {
        return this.fb.group({
            fineViolationNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            descViolationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            stopprivledges: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    getRuleByViolationCategory() {
        this.isDataLoaded = false;
        const params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            ViolationCategoryId: 1
        };
        this.violationService.getViolationRule(params).subscribe((res) => {
            this.ruleListData = res;
            const control = this.userTable.get('tableRows');
            control.clear();
            // tslint:disable-next-line:no-shadowed-variable
            this.ruleListData.forEach((element, index) => {
                const formcontrol = this.userTable.get('tableRows');
                formcontrol.push(this.fb.group({
                    directoryRecordId: [element.directoryRecordId],
                    serviceType: [element.serviceName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    email: [element.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                    contactperson: [element.contactPersonName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    phone: [element.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
                    isEditable: [false]
                }));
            });
            this.addRow();
            this.isDataLoaded = true;
        }, error => {
            this.isDataLoaded = true;
            this.isError = true;
            this.alertMessage = 'Some error occured';
        });
    }
    getViolationRule() {
        let params = {
            LookupTypeId: 78,
            active: 1
        };
        const apartment_Id = parseInt(this.cookieService.get('apartmentId'));
        this.lookupService.getLookupValueByLookupTypeIdStatus(params).subscribe((res) => {
            this.allViolationCategoryList = res;
            this.allViolationCategoryList.forEach((element1, index) => {
                const params1 = {
                    apartmentId: apartment_Id,
                    ViolationCategoryId: element1.ViolationCategoryId
                };
                this.violationService.getViolationRule(params1).subscribe((rule) => {
                    this.ruleListData = rule;
                    const control = this.userTable.get('tableRows');
                    // control.clear();
                    // tslint:disable-next-line:no-shadowed-variable
                    this.ruleListData.forEach((element, index) => {
                        const formcontrol = this.userTable.get('tableRows');
                        formcontrol.push(this.fb.group({
                            ruleId: [element.id],
                            category: [element.violationCategoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                            ruleno: [element.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                            violationTable: this.fb.array([]),
                            isEditable: [false]
                        }));
                        const violationnoArr = [];
                        const elem1 = element.fineViolationNo1 + ',' + element.descViolationNo1 + ',' + element.violationPrivilegeId1;
                        violationnoArr.push(elem1);
                        violationnoArr.forEach((element2, index) => {
                            const control1 = formcontrol.controls[formcontrol.length - 1];
                            const violation = control1.get('violationTable');
                            const _index = index + 1;
                            const _fineViolation = element['fineViolationNo' + _index];
                            const _descViolation = element['descViolationNo' + _index];
                            const _violationPrivilege = element['violationPrivilegeId' + _index];
                            violation.push(this.fb.group({
                                fineViolationNo: [_fineViolation, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                                descViolationNo: [_descViolation, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                                stopprivledges: [_violationPrivilege, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                            }));
                        });
                    });
                    this.isDataLoaded = true;
                }, error => {
                    this.isDataLoaded = true;
                    this.isError = true;
                    this.alertMessage = 'Some error occured';
                });
                this.NWtotalItems = this.allViolationCategoryList.length;
                if (this.NWtotalItems > this.itemLimit) {
                    this.NWItemEndIndex = this.itemLimit;
                }
                else {
                    this.NWItemEndIndex = this.NWtotalItems;
                }
            });
        });
    }
    getViolationPrivilege() {
        let privilegeparams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.violationService.getViolationPrivilege(privilegeparams).subscribe((res) => {
            this.allViolationPrivilege = res;
            this.isDataLoaded = true;
            this.PtotalItems = this.allViolationPrivilege.length;
            if (this.PtotalItems > this.PitemLimit) {
                this.PItemEndIndex = this.PitemLimit;
            }
            else {
                this.PItemEndIndex = this.PtotalItems;
            }
        });
    }
};
StopPrivilegeComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_3__["ViolationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
StopPrivilegeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stop-privilege',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./stop-privilege.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/stop-privilege/stop-privilege.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./stop-privilege.component.scss */ "./src/app/ams/violation/components/stop-privilege/stop-privilege.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_3__["ViolationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], StopPrivilegeComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-srch {\n  padding-left: 7px;\n  padding-right: 6px;\n  margin-right: 5px;\n  margin-left: 5px;\n}\n\n.shrink-table {\n  border: 1px solid #dee2e6;\n  background-color: #083d71;\n  color: #fff;\n}\n\n.shrink-table td, .shrink-table th {\n  border: 1px solid #083d71;\n}\n\n.file-upload {\n  display: inline;\n  padding: 4px;\n}\n\ntable {\n  border: 1px solid #dee2e6;\n}\n\n.card-body {\n  height: 390px;\n  width: 400px;\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvdmlldy12aW9sYXRpb24vZWRpdC12aW9sYXRpb24vZWRpdC12aW9sYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy92aW9sYXRpb24vY29tcG9uZW50cy92aWV3LXZpb2xhdGlvbi9lZGl0LXZpb2xhdGlvbi9lZGl0LXZpb2xhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FETUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQ0hKOztBREtJO0VBQ0kseUJBQUE7QUNIUjs7QURRQTtFQUNRLGVBQUE7RUFDQSxZQUFBO0FDTFI7O0FEUUE7RUFDSSx5QkFBQTtBQ0xKOztBRFNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvYW1zL3Zpb2xhdGlvbi9jb21wb25lbnRzL3ZpZXctdmlvbGF0aW9uL2VkaXQtdmlvbGF0aW9uL2VkaXQtdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vLi4vc2Nzcy92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uLy4uL3Njc3MvbWl4aW5zXCI7XG5AaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9zY3NzL2ZvbnRzXCI7XG5cbi5idG4tc3JjaHtcbiAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnNocmluay10YWJsZXtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwODNkNzE7XG4gICAgY29sb3I6ICNmZmY7XG5cbiAgICB0ZCwgdGgge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDgzZDcxO1xuICAgIH1cbn1cblxuXG4uZmlsZS11cGxvYWQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbn1cblxudGFibGUge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XG59XG5cblxuLmNhcmQtYm9keSB7XG4gICAgaGVpZ2h0OjM5MHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59IiwiLmJ0bi1zcmNoIHtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5zaHJpbmstdGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzZDcxO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zaHJpbmstdGFibGUgdGQsIC5zaHJpbmstdGFibGUgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDgzZDcxO1xufVxuXG4uZmlsZS11cGxvYWQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxudGFibGUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgaGVpZ2h0OiAzOTBweDtcbiAgd2lkdGg6IDQwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: EditViolationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditViolationComponent", function() { return EditViolationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Alert */ "./src/app/api/controllers/Alert.ts");
/* harmony import */ var src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Violation */ "./src/app/api/controllers/Violation.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");








let EditViolationComponent = class EditViolationComponent {
    constructor(violationService, lookupService, sharedService, cookieService, alertService, dialogRef, data) {
        this.violationService = violationService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.alertService = alertService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.outputEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.errorMessage = '';
        this.isError = false;
        this.isAccountAdded = false;
        this.violationData = {
            primaryContactName: '',
            UnitTower: '',
            ParkingSlot: '',
            violationCategory: '',
            violationRuleNo: '',
            violationComments: '',
            violationNoticedOn: '',
            violationOccurence: '',
            unitOwnerName: '',
            penaltyAmt: '',
            raisedBy: '',
            invoiceNo: '',
            invoiceTrigger: ''
        };
    }
    ngOnInit() {
        this.getViolationCategory();
    }
    ngAfterViewInit() {
        this.type = this.data.type;
        this.violationId = this.data.id;
        this.getviolationById(this.violationId);
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getViolationRule(violationCateogoryId) {
        const _apartment_Id = parseInt(this.cookieService.get('apartmentId'));
        const params1 = {
            apartmentId: _apartment_Id,
            ViolationCategoryId: violationCateogoryId
        };
        this.violationService.getViolationRule(params1).subscribe((rule) => {
            this.ruleListData = rule;
        }, error => {
            this.isError = true;
        });
    }
    getViolationCategory() {
        let params = {
            LookupTypeId: 78,
            active: 1
        };
        this.lookupService.getLookupValueByLookupTypeIdStatus(params).subscribe((res) => {
            this.allViolationCategory = res;
        });
    }
    onChangeCategoryID(event) {
        this.getViolationRule(event);
    }
    getviolationById(id) {
        this.alertService.getViolationById(id).subscribe((res) => {
            let getViolationData = res;
            this.getViolationRule(getViolationData[0].violationUserCategoryId);
            this.violationData = {
                primaryContactName: '',
                UnitTower: '',
                ParkingSlot: '',
                violationCategory: getViolationData[0].violationUserCategoryId,
                violationRuleNo: '',
                violationComments: '',
                violationNoticedOn: '',
                violationOccurence: '',
                unitOwnerName: getViolationData[0].personName,
                penaltyAmt: getViolationData[0].penaltyAmount,
                raisedBy: getViolationData[0].raisedBy,
                invoiceNo: '',
                invoiceTrigger: ''
            };
        });
    }
    onSubmit(form) {
        const params = {
            ViolationStatusId: 1,
            Comments: this.violationData.violationComments,
            ApartmentId: parseInt(this.cookieService.get("apartmentId")),
            ApartmentBlockUnitId: 0,
            ViolationRuleId: parseInt(this.violationData.violationRuleNo),
            ViolationOccurrence: parseInt(this.violationData.violationOccurence),
            UpdatedOn: new Date().toISOString(),
            UpdatedBy: parseInt(this.cookieService.get("userId")),
            Raisedby: parseInt(this.violationData.raisedBy),
            PenaltyAmt: parseInt(this.violationData.penaltyAmt),
            NoticedOn: this.violationData.violationNoticedOn,
            IsDisputed: true,
            IsActive: true,
            InvoiceNo: parseInt(this.violationData.invoiceNo),
            InsertedOn: new Date().toISOString(),
            InsertedBy: parseInt(this.cookieService.get("userId")),
            Id: this.violationId,
            DisputedComment: ''
        };
        this.violationService.updateViolations(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage(res.message);
            }
            else {
            }
        });
    }
};
EditViolationComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_5__["ViolationService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
    { type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EditViolationComponent.prototype, "outputEvent", void 0);
EditViolationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-violation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-violation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-violation.component.scss */ "./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_5__["ViolationService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
        src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_4__["AlertService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object])
], EditViolationComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/view-violation/view-violation.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/violation/components/view-violation/view-violation.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content-list {\n  justify-content: space-between;\n}\n\n.card .card-body .tabs li:after {\n  top: 75px;\n  right: 36px;\n}\n\n.pull-right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvdmlldy12aW9sYXRpb24vdmlldy12aW9sYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy92aW9sYXRpb24vY29tcG9uZW50cy92aWV3LXZpb2xhdGlvbi92aWV3LXZpb2xhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYW1zL3Zpb2xhdGlvbi9jb21wb25lbnRzL3ZpZXctdmlvbGF0aW9uL3ZpZXctdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtbGlzdCB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZCAuY2FyZC1ib2R5IC50YWJzIGxpOmFmdGVyIHtcbiAgICB0b3A6NzVweDtcbiAgICByaWdodDogMzZweDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodDtcbn0iLCIuY29udGVudC1saXN0IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FyZCAuY2FyZC1ib2R5IC50YWJzIGxpOmFmdGVyIHtcbiAgdG9wOiA3NXB4O1xuICByaWdodDogMzZweDtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/ams/violation/components/view-violation/view-violation.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/ams/violation/components/view-violation/view-violation.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ViewViolationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewViolationComponent", function() { return ViewViolationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _edit_violation_edit_violation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-violation/edit-violation.component */ "./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.ts");
/* harmony import */ var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Alert */ "./src/app/api/controllers/Alert.ts");








let ViewViolationComponent = class ViewViolationComponent {
    constructor(apartmentService, cookieService, lookupService, alertService, dialog) {
        this.apartmentService = apartmentService;
        this.cookieService = cookieService;
        this.lookupService = lookupService;
        this.alertService = alertService;
        this.dialog = dialog;
        this.isMobile = false;
        this.totalDueAmount = 0;
        this.netDueAmount = 0;
        this.allViolationListData = [];
        this.filterSelected = "all";
        this.singleBlock = "Select Tower";
        this.singleviolation = 'Select Violation';
    }
    ngOnInit() {
        this.category = {
            categoryId: 0,
            categoryname: '',
            Description: ''
        };
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.blockListData = res;
            this.getAllBlockData();
        });
        let Lookupparams = {
            LookupTypeId: 78,
            active: 1
        };
        this.lookupService.getLookupValueByLookupTypeIdStatus(Lookupparams).subscribe((res) => {
            this.allViolationCategory = res;
        });
        let statusparams = {
            active: 1
        };
        this.alertService.getAllViolationsByStatus(statusparams).subscribe((res) => {
            let list = res;
            list.forEach((element, index) => {
                // console.log(element);
                // console.log(index);
                this.allViolationListData.push({
                    id: '#typeCollapse_' + index,
                    data: element
                });
            });
        });
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getDueAmount(value) {
        return value != 'Due' ? true : false;
    }
    getSelected(type) {
        return this.filterSelected == type ? 'selected' : '';
    }
    clearFilter() {
        this.filterSelected = 'all';
        this.singleBlock = "Select Block";
    }
    getAllBlockData() {
        this.filterSelected = 'all';
        this.singleBlock = "Select Block";
        // this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
        // this.subLedgerDataList = new jqx.dataAdapter({
        //   localData: res,
        //   datatype: "array"
        // });
        // this.totalItems = this.subLedgerDataList.length;
        // this.netDueAmount = 0;
        // this.totalDueAmount = 0;
        // _.each(this.subLedgerDataList, (item, index) => {
        // 	this.netDueAmount = this.netDueAmount + item.due;
        // 	if(item.due >= 0)
        // 	this.totalDueAmount = this.totalDueAmount + item.due;
        // });
        // if(this.totalItems>this.itemLimit){
        // 	this.ItemEndIndex = this.itemLimit;
        // }
        // else {
        // 	this.ItemEndIndex = this.totalItems;
        // }
        // this.isSubLedgerDataLoaded = true;
        // })
    }
    getSingleBlock(block) {
        this.filterSelected = 'single';
        this.singleBlock = block.apartmentBlockNumber;
        this.selectedBlockId = block.apartmentBlockId;
        // this.accountsService.GetIncomeTrackerSubLedgersByApartmentId(parseInt(this.cookieService.get('apartmentId'))).subscribe((res:any) => {
        //   //filter active true items
        //   var subLedgerDataList = res.filter(item => {
        //     return item.apartmentBlockNumber == this.singleBlock;
        //   })
        //   this.subLedgerDataList = new jqx.dataAdapter({
        //         localData: subLedgerDataList,
        //         datatype: "array"
        //   });
        // 	this.totalItems = this.subLedgerDataList.length;
        // 	if(this.totalItems>this.itemLimit){
        // 		this.ItemEndIndex = this.itemLimit;
        // 	}
        // 	else {
        // 		this.ItemEndIndex = this.totalItems;
        // 	}
        // 	this.netDueAmount = 0;
        // 	this.totalDueAmount = 0;
        // 	_.each(this.subLedgerDataList, (item, index) => {
        // 		this.netDueAmount = this.netDueAmount + item.due;
        // 		if(item.due >= 0)
        // 		this.totalDueAmount = this.totalDueAmount + item.due;
        //   });
        // });
    }
    onDateChange(event, type) {
        if (event != null) {
            // this.selectedInput = type;
            // this.columnField[type] = moment(event).format("DD/MM/YYYY");
        }
        else {
            // this.columnField = {};
        }
    }
    onEditOpen(violationid) {
        const dialogRef = this.dialog.open(_edit_violation_edit_violation_component__WEBPACK_IMPORTED_MODULE_6__["EditViolationComponent"], {
            // width: '900px',
            data: {
                type: 'edit violation',
                id: violationid
            }
        });
        dialogRef.componentInstance.outputEvent.subscribe((res) => {
            // this.ongetSearchData(res);
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
};
ViewViolationComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
ViewViolationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-violation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-violation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/view-violation/view-violation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-violation.component.scss */ "./src/app/ams/violation/components/view-violation/view-violation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
], ViewViolationComponent);



/***/ }),

/***/ "./src/app/ams/violation/components/violation-setup/violation-setup.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/ams/violation/components/violation-setup/violation-setup.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details {\n  margin: 0 auto;\n  overflow: hidden;\n  position: relative;\n}\n.details .shrink-table {\n  min-width: 3000px;\n  margin: 0 0 0 12px;\n  transition: all 0.3s ease;\n  overflow: auto;\n}\n.details .buttons {\n  box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.25);\n  position: absolute;\n  right: 0;\n  z-index: 2;\n  background-color: #5cd694;\n  height: 49px;\n}\n.details .buttons a {\n  display: inline-block;\n  height: 100% !important;\n}\n.details .buttons a i {\n  font-size: 2.4rem;\n  color: #ffffff;\n  margin: 0 10px;\n  position: relative;\n  top: 2px;\n}\n.details .buttons a:hover, .details .buttons a:focus {\n  outline: none;\n}\n.details .buttons a:hover i, .details .buttons a:focus i {\n  color: #1f7a49;\n}\n.details {\n  overflow: auto;\n}\n.rule td, .rule th {\n  width: 20px;\n  border: 2px solid #dee2e6;\n  margin-left: auto !important;\n  margin-right: auto !important;\n}\n.rule td .mat-form-field, .rule th .mat-form-field {\n  width: 75px;\n}\n.rule td .edit, .rule th .edit {\n  cursor: pointer;\n}\n.rule td .delete, .rule th .delete {\n  cursor: pointer;\n}\n.rule td .done, .rule th .done {\n  cursor: pointer;\n}\n.rule td .violation td, .rule td .violation th, .rule th .violation td, .rule th .violation th {\n  width: 150px;\n  margin-left: auto !important;\n  margin-right: auto !important;\n  padding: 8px;\n}\n.rule td .violation td, .rule th .violation td {\n  padding-top: 0;\n  padding-bottom: 0;\n  text-align: center;\n}\n.rule td .violation td .label-index, .rule th .violation td .label-index {\n  margin-top: 20px;\n}\n.rule td .violation td .action-icon, .rule th .violation td .action-icon {\n  width: 40px;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 15px;\n  cursor: pointer;\n}\n.rule td .violation th, .rule th .violation th {\n  padding: 10px;\n}\n.rule td .violation .desc, .rule th .violation .desc {\n  width: 500px !important;\n  text-align: center;\n}\n.rule td .violation .desc-content, .rule th .violation .desc-content {\n  width: 170px !important;\n}\n.action-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n}\n.p-category {\n  padding: 10px;\n}\n.p-25 {\n  padding-top: 25px;\n}\n.edit, .delete {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvdmlvbGF0aW9uL2NvbXBvbmVudHMvdmlvbGF0aW9uLXNldHVwL3Zpb2xhdGlvbi1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2Ftcy92aW9sYXRpb24vY29tcG9uZW50cy92aW9sYXRpb24tc2V0dXAvdmlvbGF0aW9uLXNldHVwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9taXhpbnMuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQ0hDO0FDREw7QUZLSTtFQUlJLGlCQUFBO0VBQ0Esa0JBQUE7RUc2QlAseUJINUJPO0VBQ0EsY0FBQTtBRUpSO0FGT0k7RUdJRiw4Q0hITTtFR0lOLG1ESEpNO0VHS04sc0RITE07RUFDQSxrQkNqQkg7RURrQkcsUUFBQTtFQUNBLFVBQUE7RUFFQSx5QkN5Qks7RUR2QkwsWUFBQTtBRUxSO0FGTU87RUFDSSxxQkFBQTtFQUNBLHVCQ21JTDtBQ3ZJTjtBRktXO0VJK0NULGlCQUFBO0VKN0NhLGNDb0ZQO0VEbkZPLGNBQUE7RUFDQSxrQkM5QlY7RUQrQk8sUUFBQTtBRUhaO0FGS1c7RUFDSSxhQUFBO0FFSGY7QUZJZTtFQUNJLGNBQUE7QUVGbkI7QUZTQTtFQUNJLGNBQUE7QUVOSjtBRlVJO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRVBSO0FGVVE7RUFDSSxXQUFBO0FFUlo7QUZXUTtFQUNJLGVBQUE7QUVUWjtBRldRO0VBQ0ksZUFBQTtBRVRaO0FGV1E7RUFDSSxlQUFBO0FFVFo7QUZhWTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtBRVhoQjtBRmNZO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUVaaEI7QUZlZ0I7RUFFSSxnQkFBQTtBRWRwQjtBRmlCZ0I7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFZnBCO0FGa0JZO0VBQ0ssYUFBQTtBRWhCakI7QUZtQlk7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FFakJoQjtBRm9CWTtFQUNJLHVCQUFBO0FFbEJoQjtBRndCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUVyQko7QUZ5QkU7RUFDSSxhQUFBO0FFdEJOO0FGeUJFO0VBQ0ksaUJBQUE7QUV0Qk47QUZ5QkU7RUFDSSxlQUFBO0FFdEJOIiwiZmlsZSI6InNyYy9hcHAvYW1zL3Zpb2xhdGlvbi9jb21wb25lbnRzL3Zpb2xhdGlvbi1zZXR1cC92aW9sYXRpb24tc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmRldGFpbHMge1xuICAgIC8vIGhlaWdodDogNDVweDtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBwb3NpdGlvbjogJHJlbDtcbiAgICAuc2hyaW5rLXRhYmxlIHtcbiAgICAgICAgLy8gcG9zaXRpb246ICRhYnM7XG4gICAgICAgIC8vIGxlZnQ6MHB4O1xuICAgICAgICAvLyB0b3A6MHB4O1xuICAgICAgICBtaW4td2lkdGg6MzAwMHB4O1xuICAgICAgICBtYXJnaW46IDAgMCAwIDEycHg7XG4gICAgICAgIEBpbmNsdWRlIHRyYW5zaXRpb24oYWxsIDAuM3MgZWFzZSk7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBcbiAgICB9XG4gICAgLmJ1dHRvbnN7XG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3coMCAycHggMTBweCAxcHggcmdiYSgkYmxhY2ssIDAuMjUpKTtcbiAgICAgICAgcG9zaXRpb246ICRhYnM7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAvLyB0b3A6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW1lLWdyZWVuO1xuICAgICAgICAvLyB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA0OXB4O1xuICAgICAgIGEge1xuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgIGhlaWdodDogJGZ1bGw7XG4gICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgQGluY2x1ZGUgZnQtY2FsYygkZm9udC1tZWRpdW0tMDIpO1xuICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1x0XG4gICAgICAgICAgICAgICBwb3NpdGlvbjogJHJlbDtcbiAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICB9XG4gICAgICAgICAgICY6aG92ZXIsICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgICAgIGkge1xuICAgICAgICAgICAgICAgICAgIGNvbG9yOiBkYXJrZW4oJGxpbWUtZ3JlZW4sIDMwJSk7XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgIH1cbiAgICAgICB9IFx0XHRcbiAgICB9XG59XG5cbi5kZXRhaWxzIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJ1bGUge1xuICAgIHRkLCB0aCB7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGVlMmU2O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcblxuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogNzVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lZGl0IHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGVsZXRlIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZG9uZSB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAudmlvbGF0aW9uIHtcbiAgICAgICAgICAgIHRkLCB0aCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cbiAgICAgICAgICAgICAgICAubGFiZWwtaW5kZXgge1xuICAgICAgICAgICAgICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmFjdGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aCB7XG4gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzYyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGVzYy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGlvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuXG4gIC5wLWNhdGVnb3J5IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAucC0yNSB7XG4gICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgfVxuXG4gIC5lZGl0LCAuZGVsZXRlIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtdGluaWVyOjEwO1xuJGZvbnQtbWljcm86OTtcblxuLy8gb3RoZXJzXG4kZnVsbDoxMDAlICFpbXBvcnRhbnQ7XG5cblxuLy8gaW1hZ2VzXG4kaW1hZ2VzOiBcIi9hc3NldHMvaW1hZ2VzXCI7XG5cbiRoZWFkZXItaGVpZ2h0OiA3MHB4O1xuXG4iLCIuZGV0YWlscyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGV0YWlscyAuc2hyaW5rLXRhYmxlIHtcbiAgbWluLXdpZHRoOiAzMDAwcHg7XG4gIG1hcmdpbjogMCAwIDAgMTJweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmRldGFpbHMgLmJ1dHRvbnMge1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMnB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjZDY5NDtcbiAgaGVpZ2h0OiA0OXB4O1xufVxuLmRldGFpbHMgLmJ1dHRvbnMgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uZGV0YWlscyAuYnV0dG9ucyBhIGkge1xuICBmb250LXNpemU6IDIuNHJlbTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuLmRldGFpbHMgLmJ1dHRvbnMgYTpob3ZlciwgLmRldGFpbHMgLmJ1dHRvbnMgYTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZGV0YWlscyAuYnV0dG9ucyBhOmhvdmVyIGksIC5kZXRhaWxzIC5idXR0b25zIGE6Zm9jdXMgaSB7XG4gIGNvbG9yOiAjMWY3YTQ5O1xufVxuXG4uZGV0YWlscyB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucnVsZSB0ZCwgLnJ1bGUgdGgge1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZTJlNjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ucnVsZSB0ZCAubWF0LWZvcm0tZmllbGQsIC5ydWxlIHRoIC5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA3NXB4O1xufVxuLnJ1bGUgdGQgLmVkaXQsIC5ydWxlIHRoIC5lZGl0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJ1bGUgdGQgLmRlbGV0ZSwgLnJ1bGUgdGggLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ydWxlIHRkIC5kb25lLCAucnVsZSB0aCAuZG9uZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ydWxlIHRkIC52aW9sYXRpb24gdGQsIC5ydWxlIHRkIC52aW9sYXRpb24gdGgsIC5ydWxlIHRoIC52aW9sYXRpb24gdGQsIC5ydWxlIHRoIC52aW9sYXRpb24gdGgge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHg7XG59XG4ucnVsZSB0ZCAudmlvbGF0aW9uIHRkLCAucnVsZSB0aCAudmlvbGF0aW9uIHRkIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucnVsZSB0ZCAudmlvbGF0aW9uIHRkIC5sYWJlbC1pbmRleCwgLnJ1bGUgdGggLnZpb2xhdGlvbiB0ZCAubGFiZWwtaW5kZXgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnJ1bGUgdGQgLnZpb2xhdGlvbiB0ZCAuYWN0aW9uLWljb24sIC5ydWxlIHRoIC52aW9sYXRpb24gdGQgLmFjdGlvbi1pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ydWxlIHRkIC52aW9sYXRpb24gdGgsIC5ydWxlIHRoIC52aW9sYXRpb24gdGgge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnJ1bGUgdGQgLnZpb2xhdGlvbiAuZGVzYywgLnJ1bGUgdGggLnZpb2xhdGlvbiAuZGVzYyB7XG4gIHdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucnVsZSB0ZCAudmlvbGF0aW9uIC5kZXNjLWNvbnRlbnQsIC5ydWxlIHRoIC52aW9sYXRpb24gLmRlc2MtY29udGVudCB7XG4gIHdpZHRoOiAxNzBweCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnAtY2F0ZWdvcnkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucC0yNSB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4uZWRpdCwgLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcblxuXG5AbWl4aW4gYm9yZGVyLXJhZGl1cyAoJHJhZGl1cykge1xuXHQtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0LW1vei1ib3JkZXItcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMgKCRyYWRpdXMpIHtcbiAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBvcGFjaXR5ICgkdmFsdWUpIHtcbiAgb3BhY2l0eTogJHZhbHVlO1xuICAtbW96LW9wYWNpdHk6ICR2YWx1ZTtcbiAgLXdlYmtpdC1vcGFjaXR5OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93ICgkcnVsZXMuLi4pIHtcbiAgYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtbW96LWJveC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0ZXh0LXNoYWRvdyAoJHJ1bGVzKSB7XG4gIHRleHQtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLXdlYmtpdC10ZXh0LXNoYWRvdzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtICgkcnVsZXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICRydWxlcyAhaW1wb3J0YW50O1xuXHQtbW96LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdHRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiB0cmFuc2l0aW9uICgkcnVsZXMuLi4pIHtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdC1tb3otdHJhbnNpdGlvbjogJHJ1bGVzO1xuXHR0cmFuc2l0aW9uOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBhbmltYXRpb24tZGVsYXkgKCR2YWx1ZSkge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICAtbW96LWFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xuICBhbmltYXRpb24tZGVsYXk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaXppbmcgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWJveC1zaXppbmc6ICRydWxlcztcbiAgLW1vei1ib3gtc2l6aW5nOiAkcnVsZXM7XG4gIGJveC1zaXppbmc6ICRydWxlcztcbn1cblxuQG1peGluIGFwcGVhcmFuY2UgKCRydWxlcy4uLikge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6ICRydWxlcztcbiAgLW1vei1hcHBlYXJhbmNlOiAkcnVsZXM7XG59XG5cbkBtaXhpbiBkZXNlbGVjdCAoKSB7XG4gIC1tb3otdXNlci1zZWxlY3Q6IC1tb3otbm9uZTtcblx0LWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiB2aXNpYmlsaXR5ICgkcnVsZXMpIHtcbiAgdmlzaWJpbGl0eTogJHJ1bGVzO1xufVxuXG5AbWl4aW4gbm8tbXAgKCkge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gY2lyY2xlcygkciwgJGJnOm51bGwsICR0YzpudWxsKSB7XG4gIHdpZHRoOiAkcjtcbiAgaGVpZ2h0OiAkcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmc7XG4gIGNvbG9yOiAkdGM7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJHIpO1xufVxuXG5AbWl4aW4gbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcy4uLikge1xuICAvLyBEaXJlY3Rpb24gaGFzIGJlZW4gb21pdHRlZCBhbmQgaGFwcGVucyB0byBiZSBhIGNvbG9yLXN0b3BcbiAgQGlmIGlzLWRpcmVjdGlvbigkZGlyZWN0aW9uKSA9PSBmYWxzZSB7XG4gICAgJGNvbG9yLXN0b3BzOiAkZGlyZWN0aW9uLCAkY29sb3Itc3RvcHM7XG4gICAgJGRpcmVjdGlvbjogMTgwZGVnO1xuICB9XG5cbiAgYmFja2dyb3VuZDogbnRoKG50aCgkY29sb3Itc3RvcHMsIDEpLCAxKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbigkZGlyZWN0aW9uKSwgJGNvbG9yLXN0b3BzKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRkaXJlY3Rpb24sICRjb2xvci1zdG9wcyk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlciB7XG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge0Bjb250ZW50fVxuICAmOi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAgIHtAY29udGVudH1cbiAgJjo6LW1vei1wbGFjZWhvbGRlciAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyICAgICAge0Bjb250ZW50fSAgXG59XG5cblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ams/violation/components/violation-setup/violation-setup.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/ams/violation/components/violation-setup/violation-setup.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ViolationSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationSetupComponent", function() { return ViolationSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Violation */ "./src/app/api/controllers/Violation.ts");








let ViolationSetupComponent = class ViolationSetupComponent {
    constructor(router, route, lookupService, sharedService, cookieService, violationService, fb) {
        this.router = router;
        this.route = route;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.violationService = violationService;
        this.fb = fb;
        this.unitFieldType = 'unitno';
        this.unitOrder = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 20;
        // Nature Pagination
        this.NWunitFieldType = 'unitno';
        this.NWunitOrder = false;
        this.NWItemStartIndex = 0;
        this.NWitemLimit = 20;
        this.isDataLoaded = false;
        this.isError = false;
        this.alertMessage = '';
        this.itemPositions = [];
        this.currentPosition = 0;
        this.isViolationDataLoaded = false;
        this.PItemStartIndex = 0;
        this.PitemLimit = 20;
        this.PunitFieldType = 'id';
        this.PunitOrder = false;
    }
    ngOnInit() {
        this.category = {
            categoryId: 0,
            categoryname: '',
            Description: ''
        };
        this.privledge = {
            privilegeId: 0,
            ViolationName: '',
            ViolationDescription: '',
            PeriodOfPrivledges: ''
        };
        this.isViolationDataLoaded = true;
        this.getViolationCategory();
        this.getViolationPrivilege();
        this.getViolationRule();
        this.touchedRows = [];
        this.userTable = this.fb.group({
            tableRows: this.fb.array([])
        });
        this.addRow();
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    getIndexParams(event) {
        this.ItemStartIndex = event.ItemStartIndex;
        this.ItemEndIndex = event.ItemEndIndex;
    }
    getPIndexParams(event) {
        this.PItemStartIndex = event.ItemStartIndex;
        this.PItemEndIndex = event.ItemEndIndex;
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType === type) {
            return this.unitOrder ? 'desc' : 'asc';
        }
        else
            return '';
    }
    getViolationCategory() {
        let params = {
            LookupTypeId: 78,
            active: 1
        };
        this.lookupService.getLookupValueByLookupTypeIdStatus(params).subscribe((res) => {
            this.allViolationCategory = res;
            this.isDataLoaded = true;
            this.totalItems = this.allViolationCategory.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    submitCreateCategoryTypeForm(form) {
        const lookupparams = {
            lookupvalue: {
                lookupValueId: this.category.categoryId === 0 ? 0 : this.category.categoryId,
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                lookupTypeId: 78,
                lookupValueName: this.category.categoryname,
                description: this.category.Description,
                isActive: true,
                insertedBy: parseInt(this.cookieService.get('userId')),
                insertedOn: new Date().toISOString(),
                updatedBy: parseInt(this.cookieService.get('userId')),
                updatedOn: new Date().toISOString(),
                notes: '',
                isCommon: true,
                module: '',
                subModule: ''
            }
        };
        if (this.category.categoryId === 0) {
            this.lookupService.addLookupValue(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationCategory();
                    this.category = {
                        categoryId: 0,
                        categoryname: '',
                        Description: ''
                    };
                }
                else {
                }
            });
        }
        else {
            this.lookupService.updateLookupValue(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationCategory();
                    this.category = {
                        categoryId: 0,
                        categoryname: '',
                        Description: ''
                    };
                }
                else {
                }
            });
        }
    }
    deleteViolationCategory(id) {
        const params = {
            lookupValueId: id,
            // tslint:disable-next-line:radix
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(params).subscribe((res) => {
            if (res) {
                this.sharedService.setAlertMessage(res.message);
                this.getViolationCategory();
            }
            else {
            }
        });
    }
    editViolationCategory(violationcategory) {
        this.category = {
            categoryId: violationcategory.lookupValueId,
            categoryname: violationcategory.lookupValueName,
            Description: violationcategory.description
        };
    }
    getViolationPrivilege() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.violationService.getViolationPrivilege(params).subscribe((res) => {
            this.allViolationPrivilege = res;
            this.isDataLoaded = true;
            this.PtotalItems = this.allViolationPrivilege.length;
            if (this.PtotalItems > this.PitemLimit) {
                this.PItemEndIndex = this.PitemLimit;
            }
            else {
                this.PItemEndIndex = this.PtotalItems;
            }
        });
    }
    editViolationPrivilege(privilege) {
        this.privledge = {
            privilegeId: privilege.id,
            ViolationName: privilege.name,
            ViolationDescription: privilege.description,
            PeriodOfPrivledges: privilege.stopPriveldgeDays
        };
    }
    submitCreatesStopPrivledgeForm(form) {
        const lookupparams = {
            Id: this.privledge.privilegeId === 0 ? 0 : this.privledge.privilegeId,
            Name: this.privledge.ViolationName,
            Description: this.privledge.ViolationDescription,
            StopPriveldgeDays: this.privledge.PeriodOfPrivledges,
            IsActive: true,
            InsertedBy: parseInt(this.cookieService.get('userId')),
            InsertedOn: new Date().toISOString(),
            UpdatedBy: parseInt(this.cookieService.get('userId')),
            UpdatedOn: new Date().toISOString(),
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        if (this.privledge.privilegeId === 0) {
            this.violationService.addViolationPrivilege(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
        else {
            this.violationService.updateViolationPrivilege(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
    }
    moveTabRight() {
        if (this.currentPosition + 1 < this.itemPositions.length) {
            document.getElementById('details').style.left = '-' + this.itemPositions[++this.currentPosition] + 'px';
        }
    }
    moveTabLeft() {
        if (this.currentPosition - 1 >= 0) {
            document.getElementById('details').style.left = '-' + this.itemPositions[--this.currentPosition] + 'px';
        }
    }
    ngAfterViewInit() {
        this.control = this.userTable.get('tableRows');
    }
    addRow() {
        const control = this.userTable.get('tableRows');
        control.push(this.initiateForm());
        this.violationControl = control.get('violationTable');
        this.addViolationRow();
    }
    deleteRow(index) {
        const control = this.userTable.get('tableRows');
        control.removeAt(index);
    }
    editRow(group) {
        group.get('isEditable').setValue(true);
    }
    doneRow(group, id) {
        group.get('isEditable').setValue(false);
        const control = group.get('violationTable');
        ;
        const fine = control.at(4); // .get('fineViolationNo').value;
        const ruleId = parseInt(group.get('ruleId').value);
        const lookupparams = {
            Id: ruleId,
            Name: group.get('ruleno').value,
            ViolationCategoryId: parseInt(group.get('category').value),
            // tslint:disable-next-line:radix
            FineViolationNo1: control.at(0) === undefined ? 0 : parseInt(control.at(0).get('fineViolationNo').value === '' ? '0' : control.at(0).get('fineViolationNo').value),
            DescViolationNo1: control.at(0) === undefined ? 0 : control.at(0).get('descViolationNo').value,
            ViolationPrivilegeId1: control.at(0) === undefined ? 0 : parseInt(control.at(0).get('stopprivledges').value === '' ? '0' : control.at(0).get('stopprivledges').value),
            FineViolationNo2: control.at(1) === undefined ? 0 : parseInt(control.at(1).get('fineViolationNo').value === '' ? '0' : control.at(1).get('fineViolationNo').value),
            DescViolationNo2: control.at(1) === undefined ? 0 : control.at(1).get('descViolationNo').value,
            ViolationPrivilegeId2: control.at(2) === undefined ? 0 : parseInt(control.at(1).get('stopprivledges').value === '' ? '0' : control.at(1).get('stopprivledges').value),
            FineViolationNo3: control.at(2) === undefined ? 0 : parseInt(control.at(2).get('fineViolationNo').value === '' ? '0' : control.at(2).get('fineViolationNo').value),
            DescViolationNo3: control.at(2) === undefined ? 0 : control.at(2).get('descViolationNo').value,
            ViolationPrivilegeId3: control.at(2) === undefined ? 0 : parseInt(control.at(2).get('stopprivledges').value === '' ? '0' : control.at(2).get('stopprivledges').value),
            FineViolationNo4: control.at(3) === undefined ? 0 : parseInt(control.at(3).get('fineViolationNo').value === '' ? '0' : control.at(3).get('fineViolationNo').value),
            DescViolationNo4: control.at(3) === undefined ? '' : control.at(3).get('descViolationNo').value,
            ViolationPrivilegeId4: control.at(3) === undefined ? 0 : parseInt(control.at(3).get('stopprivledges').value === '' ? '0' : control.at(3).get('stopprivledges').value),
            FineViolationNo5: control.at(4) === undefined ? 0 : parseInt(control.at(4).get('fineViolationNo').value === '' ? '0' : control.at(4).get('fineViolationNo').value),
            DescViolationNo5: control.at(4) === undefined ? '' : control.at(4).get('descViolationNo').value,
            ViolationPrivilegeId5: control.at(4) === undefined ? 0 : parseInt(control.at(4).get('stopprivledges').value === '' ? '0' : control.at(4).get('stopprivledges').value),
            IsActive: true,
            InsertedBy: parseInt(this.cookieService.get('userId')),
            InsertedOn: new Date().toISOString(),
            UpdatedBy: parseInt(this.cookieService.get('userId')),
            UpdatedOn: new Date().toISOString(),
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        if (ruleId === 0) {
            this.violationService.addViolationRule(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
        else {
            this.violationService.updateViolationRule(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
        // this.submitCreatesViolationPrivledgeForm(id);
    }
    deleteviolationRow(index, violationIndex) {
        const control = this.tableForm().at(index).get('violationTable');
        control.removeAt(violationIndex);
    }
    clearviolationRow(index, violationIndex) {
        const control = this.tableForm().at(index).get('violationTable');
        control.at(violationIndex).reset();
    }
    addViolationRow() {
        const mainForm = this.userTable.get('tableRows');
        const length = mainForm.length;
        const control = mainForm.controls[length - 1];
        const violation = control.get('violationTable');
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
        violation.push(this.initiateViolationForm());
    }
    addRowViolation(index) {
        const control = this.tableForm().at(index).get('violationTable');
        // const violation = control.get('violationTable') as FormArray;
        control.push(this.initiateViolationForm());
    }
    saveUserDetails() {
        console.log(this.userTable.value);
    }
    get getFormControls() {
        const control = this.userTable.get('tableRows');
        return control;
    }
    // get getViolationFormControls() {
    //   debugger;
    //   const maincontrol = this.userTable.get('tableRows') as FormArray;
    //   const control = maincontrol.controls[0].get('violationTable') as FormArray;
    //   return control;
    // }
    violationForm(empIndex) {
        const ctrl = this.tableForm().at(empIndex);
        const ctrl2 = ctrl.get('violationTable');
        // return ctrl2;
        return this.tableForm().at(empIndex).get('violationTable');
    }
    tableForm() {
        return this.userTable.get('tableRows');
    }
    submitForm() {
        const control = this.userTable.get('tableRows');
        this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
        console.log(this.touchedRows);
    }
    initiateForm() {
        return this.fb.group({
            ruleId: ['0'],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            ruleno: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            violationTable: this.fb.array([]),
            isEditable: [true]
        });
    }
    initiateViolationForm() {
        return this.fb.group({
            fineViolationNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            descViolationNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            stopprivledges: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
    }
    //  //Get Work Type
    //  getDirectoryType(){
    //   this.lookupService.getLookupValueByLookupTypeId(78)).subscribe((res:any) => {
    //     this.allDirectory = res;
    //     this.isDirectoryTypeLoaded = true;
    //     this.totalItems = this.allDirectory.length;
    //     if(this.totalItems>this.itemLimit){
    //       this.ItemEndIndex = this.itemLimit;
    //     }
    //     else {
    //       this.ItemEndIndex = this.totalItems;
    //     }
    //   })
    // }
    getRuleByViolationCategory() {
        this.isDataLoaded = false;
        const params = {
            ApartmentId: parseInt(this.cookieService.get('apartmentId')),
            ViolationCategoryId: 1
        };
        this.violationService.getViolationRule(params).subscribe((res) => {
            this.ruleListData = res;
            const control = this.userTable.get('tableRows');
            control.clear();
            // tslint:disable-next-line:no-shadowed-variable
            this.ruleListData.forEach((element, index) => {
                const formcontrol = this.userTable.get('tableRows');
                formcontrol.push(this.fb.group({
                    directoryRecordId: [element.directoryRecordId],
                    serviceType: [element.serviceName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    email: [element.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                    contactperson: [element.contactPersonName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                    phone: [element.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(10)]],
                    isEditable: [false]
                }));
            });
            this.addRow();
            this.isDataLoaded = true;
        }, error => {
            this.isDataLoaded = true;
            this.isError = true;
            this.alertMessage = 'Some error occured';
        });
    }
    getViolationRule() {
        let params = {
            LookupTypeId: 78,
            active: 1
        };
        const apartment_Id = parseInt(this.cookieService.get('apartmentId'));
        this.lookupService.getLookupValueByLookupTypeIdStatus(params).subscribe((res) => {
            this.allViolationCategoryList = res;
            this.allViolationCategoryList.forEach((element1, index) => {
                const params1 = {
                    apartmentId: apartment_Id,
                    ViolationCategoryId: element1.ViolationCategoryId
                };
                this.violationService.getViolationRule(params1).subscribe((rule) => {
                    this.ruleListData = rule;
                    const control = this.userTable.get('tableRows');
                    // control.clear();
                    // tslint:disable-next-line:no-shadowed-variable
                    this.ruleListData.forEach((element, index) => {
                        const formcontrol = this.userTable.get('tableRows');
                        formcontrol.push(this.fb.group({
                            ruleId: [element.id],
                            category: [element.violationCategoryId, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                            ruleno: [element.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                            violationTable: this.fb.array([]),
                            isEditable: [false]
                        }));
                        const violationnoArr = [];
                        const elem1 = element.fineViolationNo1 + ',' + element.descViolationNo1 + ',' + element.violationPrivilegeId1;
                        const elem2 = element.fineViolationNo2 + ',' + element.descViolationNo2 + ',' + element.violationPrivilegeId2;
                        const elem3 = element.fineViolationNo3 + ',' + element.descViolationNo3 + ',' + element.violationPrivilegeId3;
                        const elem4 = element.fineViolationNo4 + ',' + element.descViolationNo4 + ',' + element.violationPrivilegeId4;
                        const elem5 = element.fineViolationNo5 + ',' + element.descViolationNo5 + ',' + element.violationPrivilegeId5;
                        violationnoArr.push(elem1);
                        violationnoArr.push(elem2);
                        violationnoArr.push(elem3);
                        violationnoArr.push(elem4);
                        violationnoArr.push(elem5);
                        violationnoArr.forEach((element2, index) => {
                            const control1 = formcontrol.controls[formcontrol.length - 1];
                            const violation = control1.get('violationTable');
                            const _index = index + 1;
                            const _fineViolation = element['fineViolationNo' + _index];
                            const _descViolation = element['descViolationNo' + _index];
                            const _violationPrivilege = element['violationPrivilegeId' + _index];
                            violation.push(this.fb.group({
                                fineViolationNo: [_fineViolation, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                                descViolationNo: [_descViolation, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                                stopprivledges: [_violationPrivilege, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                            }));
                            console.log(violation);
                        });
                    });
                    // // tslint:disable-next-line:no-shadowed-variable
                    // this.ruleListData.forEach((element, index) => {
                    //   const formcontrol =  this.userTable.get('tableRows') as FormArray;
                    //   formcontrol.push(this.fb.group({
                    //     directoryRecordId: [element.directoryRecordId],
                    //     serviceType: [element.serviceName, Validators.required],
                    //     email: [element.email, [Validators.email, Validators.required]],
                    //     contactperson: [element.contactPersonName, Validators.required],
                    //     phone: [element.phone, [Validators.required, Validators.maxLength(10)]],
                    //     isEditable: [false]
                    //   }));
                    // });
                    //  this.addRow();
                    this.isDataLoaded = true;
                }, error => {
                    this.isDataLoaded = true;
                    this.isError = true;
                    this.alertMessage = 'Some error occured';
                });
                this.NWtotalItems = this.allViolationCategoryList.length;
                if (this.NWtotalItems > this.itemLimit) {
                    this.NWItemEndIndex = this.itemLimit;
                }
                else {
                    this.NWItemEndIndex = this.NWtotalItems;
                }
            });
        });
    }
    submitCreatesViolationPrivledgeForm(id) {
        const control = this.tableForm().at(id).get('violationTable');
        const lookupparams = {
            Id: this.privledge.privilegeId === 0 ? 0 : this.privledge.privilegeId,
            Name: this.privledge.ViolationName,
            Description: this.privledge.ViolationDescription,
            ViolationCategoryId: 0,
            FineViolationNo1: 0,
            DescViolationNo1: '',
            ViolationPrivilegeId1: 0,
            FineViolationNo2: 0,
            DescViolationNo2: '',
            ViolationPrivilegeId2: 0,
            FineViolationNo3: 0,
            DescViolationNo3: '',
            ViolationPrivilegeId3: 0,
            FineViolationNo4: 0,
            DescViolationNo4: '',
            ViolationPrivilegeId4: 0,
            FineViolationNo5: 0,
            DescViolationNo5: '',
            ViolationPrivilegeId5: 0,
            IsActive: true,
            InsertedBy: parseInt(this.cookieService.get('userId')),
            InsertedOn: new Date().toISOString(),
            UpdatedBy: parseInt(this.cookieService.get('userId')),
            UpdatedOn: new Date().toISOString(),
            ApartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        if (this.privledge.privilegeId === 0) {
            this.violationService.addViolationRule(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
        else {
            this.violationService.updateViolationRule(lookupparams).subscribe((res) => {
                if (res) {
                    this.sharedService.setAlertMessage(res.message);
                    this.getViolationPrivilege();
                    this.privledge = {
                        privilegeId: 0,
                        ViolationName: '',
                        ViolationDescription: '',
                        PeriodOfPrivledges: ''
                    };
                }
                else {
                }
            });
        }
    }
};
ViolationSetupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] },
    { type: src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_7__["ViolationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
ViolationSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-violation-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./violation-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/components/violation-setup/violation-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./violation-setup.component.scss */ "./src/app/ams/violation/components/violation-setup/violation-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"],
        src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_7__["ViolationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], ViolationSetupComponent);



/***/ }),

/***/ "./src/app/ams/violation/violation-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/ams/violation/violation-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ViolationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationRoutingModule", function() { return ViolationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_violation_setup_violation_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/violation-setup/violation-setup.component */ "./src/app/ams/violation/components/violation-setup/violation-setup.component.ts");
/* harmony import */ var _components_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-violation/add-violation.component */ "./src/app/ams/violation/components/add-violation/add-violation.component.ts");
/* harmony import */ var _components_view_violation_view_violation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/view-violation/view-violation.component */ "./src/app/ams/violation/components/view-violation/view-violation.component.ts");
/* harmony import */ var _components_stop_privilege_stop_privilege_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/stop-privilege/stop-privilege.component */ "./src/app/ams/violation/components/stop-privilege/stop-privilege.component.ts");







const routes = [
    { path: '', redirectTo: 'setup', pathMatch: 'full' },
    { path: 'setup', component: _components_violation_setup_violation_setup_component__WEBPACK_IMPORTED_MODULE_3__["ViolationSetupComponent"] },
    { path: 'add-violation', component: _components_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_4__["AddViolationComponent"] },
    { path: 'view-violation', component: _components_view_violation_view_violation_component__WEBPACK_IMPORTED_MODULE_5__["ViewViolationComponent"] },
    { path: 'stop-privilege', component: _components_stop_privilege_stop_privilege_component__WEBPACK_IMPORTED_MODULE_6__["StopPrivilegeComponent"] }
];
let ViolationRoutingModule = class ViolationRoutingModule {
};
ViolationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViolationRoutingModule);



/***/ }),

/***/ "./src/app/ams/violation/violation.component.scss":
/*!********************************************************!*\
  !*** ./src/app/ams/violation/violation.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy92aW9sYXRpb24vdmlvbGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/violation/violation.component.ts":
/*!******************************************************!*\
  !*** ./src/app/ams/violation/violation.component.ts ***!
  \******************************************************/
/*! exports provided: ViolationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationComponent", function() { return ViolationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ViolationComponent = class ViolationComponent {
    constructor() { }
    ngOnInit() {
    }
};
ViolationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-violation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./violation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/violation/violation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./violation.component.scss */ "./src/app/ams/violation/violation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ViolationComponent);



/***/ }),

/***/ "./src/app/ams/violation/violation.module.ts":
/*!***************************************************!*\
  !*** ./src/app/ams/violation/violation.module.ts ***!
  \***************************************************/
/*! exports provided: ViolationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationModule", function() { return ViolationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _violation_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./violation-routing.module */ "./src/app/ams/violation/violation-routing.module.ts");
/* harmony import */ var _violation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./violation.component */ "./src/app/ams/violation/violation.component.ts");
/* harmony import */ var _components_violation_setup_violation_setup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/violation-setup/violation-setup.component */ "./src/app/ams/violation/components/violation-setup/violation-setup.component.ts");
/* harmony import */ var _components_view_violation_view_violation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view-violation/view-violation.component */ "./src/app/ams/violation/components/view-violation/view-violation.component.ts");
/* harmony import */ var _components_view_violation_edit_violation_edit_violation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/view-violation/edit-violation/edit-violation.component */ "./src/app/ams/violation/components/view-violation/edit-violation/edit-violation.component.ts");
/* harmony import */ var _components_stop_privilege_stop_privilege_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/stop-privilege/stop-privilege.component */ "./src/app/ams/violation/components/stop-privilege/stop-privilege.component.ts");
/* harmony import */ var _components_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-violation/add-violation.component */ "./src/app/ams/violation/components/add-violation/add-violation.component.ts");
/* harmony import */ var _components_add_violation_searc_workpermits_searc_workpermits_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-violation/searc-workpermits/searc-workpermits.component */ "./src/app/ams/violation/components/add-violation/searc-workpermits/searc-workpermits.component.ts");
/* harmony import */ var _components_add_violation_search_blockunit_search_blockunit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-violation/search-blockunit/search-blockunit.component */ "./src/app/ams/violation/components/add-violation/search-blockunit/search-blockunit.component.ts");
/* harmony import */ var _components_add_violation_search_facility_search_facility_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add-violation/search-facility/search-facility.component */ "./src/app/ams/violation/components/add-violation/search-facility/search-facility.component.ts");
/* harmony import */ var _components_add_violation_search_parkingslots_search_parkingslots_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add-violation/search-parkingslots/search-parkingslots.component */ "./src/app/ams/violation/components/add-violation/search-parkingslots/search-parkingslots.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");















let ViolationModule = class ViolationModule {
};
ViolationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _violation_component__WEBPACK_IMPORTED_MODULE_4__["ViolationComponent"],
            _components_violation_setup_violation_setup_component__WEBPACK_IMPORTED_MODULE_5__["ViolationSetupComponent"],
            _components_view_violation_view_violation_component__WEBPACK_IMPORTED_MODULE_6__["ViewViolationComponent"],
            _components_view_violation_edit_violation_edit_violation_component__WEBPACK_IMPORTED_MODULE_7__["EditViolationComponent"],
            _components_stop_privilege_stop_privilege_component__WEBPACK_IMPORTED_MODULE_8__["StopPrivilegeComponent"],
            _components_add_violation_add_violation_component__WEBPACK_IMPORTED_MODULE_9__["AddViolationComponent"],
            _components_add_violation_searc_workpermits_searc_workpermits_component__WEBPACK_IMPORTED_MODULE_10__["SearcWorkpermitsComponent"],
            _components_add_violation_search_blockunit_search_blockunit_component__WEBPACK_IMPORTED_MODULE_11__["SearchBlockunitComponent"],
            _components_add_violation_search_facility_search_facility_component__WEBPACK_IMPORTED_MODULE_12__["SearchFacilityComponent"],
            _components_add_violation_search_parkingslots_search_parkingslots_component__WEBPACK_IMPORTED_MODULE_13__["SearchParkingslotsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _violation_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViolationRoutingModule"]
        ]
    })
], ViolationModule);



/***/ })

}]);
//# sourceMappingURL=violation-violation-module-es2015.js.map