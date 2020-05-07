(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-permit-work-permit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-approvalview-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"text-right\" *ngIf=\"isDataLoaded\">\n\t\t<i-feather class=\"icon success-indicator\" name=\"check-circle\"></i-feather>&nbsp; Approve\n\t</div>\n\t<div class=\"card card-table\">\n\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>WorkPermit Approval List <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"wpData\" >\n    \t\t\t</li>\n    \t\t\t<!-- <li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> -->\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/work-permit/settings/create\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Work Permit</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th (click)=\"sortUnitData('workPermitId')\">WP ID<span [ngClass]=\"getFieldOrderBy('workPermitId')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('apartmentBlockNumber')\">Block <span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('apartmentBlockUnitNumber')\">Unit <span [ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('endorsedBy')\">Endorsed By<span [ngClass]=\"getFieldOrderBy('endorsedBy')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('workPermitType')\">WP Type <span [ngClass]=\"getFieldOrderBy('workPermitType')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('natureOfWork')\">Nature of Work <span [ngClass]=\"getFieldOrderBy('natureOfWork')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('startDate')\">Start Date <span [ngClass]=\"getFieldOrderBy('startDate')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('endDate')\">End Date <span [ngClass]=\"getFieldOrderBy('endDate')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('noOfPersonnels')\">Personnels <span [ngClass]=\"getFieldOrderBy('noOfPersonnels')\"></span></th>\n\t\t\t\t      <th>Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let wp of workPermitListData | sort : unitFieldType: unitOrder \n\t\t\t\t    | simpleSearch: wpData | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{wp.workPermitId}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.apartmentBlockNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.apartmentBlockUnitNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.endorsedBy}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.workPermitType}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.natureOfWork}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.startDate | date:'dd-MM-yy'}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.endDate | date:'dd-MM-yy'}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.noOfPersonnels}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a><i-feather class=\"icon view\" name=\"eye\"></i-feather>\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<i-feather class=\"icon approve\" name=\"check-circle\"></i-feather>\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-Create-wrapper\">\n\t\n\t\t<div class=\"card clear\">\n            <div class=\"card-header\">\n                <div class=\"float-left\">\n                    <h5>\n                        <span>Create WorkPermit</span>\n                    </h5>\n                </div>\n                <div class=\"float-right\">\n                    <a href=\"javascript:void(0)\" \n                    routerLink=\"/ams/work-permit/settings/approval\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"{exact:true}\">\n                        <i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n                    </a>\n                </div>\n            </div>\n\t\t\t\n\t\t\t<div class=\"card-body\">\n        \n      <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\t\t\t<app-loader *ngIf=\"isWorkpermitSubmitted\"></app-loader>\n\t\t\t<ng-container *ngIf=\"!isWorkpermitSubmitted\">\n\n        <form #createWorkPermitForm = \"ngForm\" name=\"createWorkPermitForm\" (ngSubmit)=\"submitCreateWorkPermitForm(addWorkPermitForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                <label>Name of Resident*</label>\n                <select \n                    name=\"WPApartment\" \n                    id=\"Apartment\" \n                    class=\"form-control\"\n                    [(ngModel)]=\"workpermit.WPApartment\" required>\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let apartment of allApartments;\" [value]=\"apartment.apartmentId\">{{apartment.apartmentName}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"input-box\">\n            <label>Tower*</label>\n            <select \n                name=\"WPTower\" \n                id=\"Tower\" \n                class=\"form-control\"\n                [(ngModel)]=\"workpermit.WPTower\" required>\n                <option value=\"\" disabled selected hidden>Select</option>\n                <option *ngFor=\"let tower of allTowers;\" [value]=\"tower.apartmentBlockUnitId\">{{tower.apartmentBlockNumber}}</option>\n            </select>\n        </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"input-box\">\n            <label>Unit User*</label>\n            <select \n                name=\"WPUnitUser\" \n                id=\"UnitUser\" \n                class=\"form-control\"\n                [(ngModel)]=\"workpermit.WPUnitUser\" required>\n                <option value=\"\" disabled selected hidden>Select</option>\n                <option *ngFor=\"let user of allUsers;\" [value]=\"user.userId\">{{user.firstName}}</option>\n            </select>\n        </div>\n        </div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n                <label>Name of Vendor/Contractor*</label>\n                <select \n                    name=\"WPVendor\" \n                    id=\"vendor\" \n                    class=\"form-control\"\n                    [(ngModel)]=\"workpermit.WPVendor\" required>\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let vendor of allVendors;\" [value]=\"vendor.vendorId\">{{vendor.vendorName}}</option>\n                </select>\n            </div>\n          </div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Name of Person In Charge*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"WPIncharge\" [(ngModel)]=\"workpermit.WPIncharge\" required>\n                \t\t</div>\n                    </div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Contact Number*</label>\n\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter\" name=\"WPContact\" [(ngModel)]=\"workpermit.WPContact\" required>\n                \t\t</div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"input-box\">\n                        <label>WorkPermit Type*</label>\n                        <!-- <angular2-multiselect \n                          name=\"WPNatureWork\"\n                          [data]=\"itemList\" \n                          [(ngModel)]=\"selectedItems\" \n                          [settings]=\"settings\" \n                          (onSelect)=\"onItemSelect($event)\"\n                          (onDeSelect)=\"OnItemDeSelect($event)\" \n                          (onSelectAll)=\"onSelectAll($event)\" \n                          (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect> -->\n                        <select \n                          name=\"WPPermitType\" \n                          id=\"PermitType\" \n                          class=\"form-control\"\n                          [(ngModel)]=\"workpermit.WPPermitType\" required>\n                          <option value=\"\" disabled selected hidden>Select</option>\n                          <option *ngFor=\"let worktype of allWorkType;\" [value]=\"worktype.lookupValueId\">{{worktype.lookupValueName}}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"input-box\">\n                        <label>Nature of work*</label>\n                        <select \n                          name=\"WPNatureWork\" \n                          id=\"NatureWork\" \n                          class=\"form-control\"\n                          [(ngModel)]=\"workpermit.WPNatureWork\" required>\n                          <option value=\"\" disabled selected hidden>Select</option>\n                          <option *ngFor=\"let natureworktype of allNatureWorkType;\" [value]=\"natureworktype.lookupValueId\">{{natureworktype.lookupValueName}}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\"></div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"input-box\">\n                            <label>Start Date</label>\n                            <input class=\"form-control\" name=\"WPStartdate\" [owlDateTime]=\"WPStartdate\" [owlDateTimeTrigger]=\"WPStartdate\" placeholder=\"Date\" [(ngModel)]=\"workpermit.WPStartdate\" required>\n                            <owl-date-time #WPStartdate [pickerType]=\"'calendar'\"></owl-date-time>\n                            <div class=\"date-btn\">\n                              <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"input-box\">\n                            <label>End Date</label>\n                            <input class=\"form-control\" name=\"WPEnddate\" [owlDateTime]=\"WPEnddate\" [owlDateTimeTrigger]=\"WPEnddate\" placeholder=\"Date\" [(ngModel)]=\"workpermit.WPEnddate\" required>\n                            <owl-date-time #WPEnddate [pickerType]=\"'calendar'\"></owl-date-time>\n                            <div class=\"date-btn\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"input-box\">\n                            <label>Start Time</label>\n                            <input class=\"form-control\" name=\"WPStarttime\" [owlDateTime]=\"WPStarttime\" [owlDateTimeTrigger]=\"WPStarttime\" placeholder=\"Time\" [(ngModel)]=\"workpermit.WPStarttime\" required>\n                            <owl-date-time #WPStarttime [pickerType]=\"'timer'\" [hour12Timer]=\"true\"></owl-date-time>\n                            <div class=\"date-btn\">\n                                    <i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"input-box\">\n                            <label>End Time</label>\n                            <input class=\"form-control\" name=\"WPEndtime\" [owlDateTime]=\"WPEndtime\" [owlDateTimeTrigger]=\"WPEndtime\" placeholder=\"Time\" [(ngModel)]=\"workpermit.WPEndtime\" required>\n                            <owl-date-time #WPEndtime [pickerType]=\"'timer'\" [hour12Timer]=\"true\"></owl-date-time>\n                            <div class=\"date-btn\">\n                                    <i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-6 mb-30\">\n                        <h5><b>List of Workers/Personnels</b></h5>\n                        <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                  <th width=\"35%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"WorkerName\" [(ngModel)]=\"Workers.WorkerName\">\n                                  </th>\n                                  <th width=\"60%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"WorkerDescription\" [(ngModel)]=\"Workers.WorkerDescription\">\n                                  </th>\n                                  <th width=\"5%\" align=\"right\">\n                                    <a class=\"btn lime-green\" (click)=\"addWorkers()\">\n                                    <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                                    </a>\n                                  </th>\n                                </tr>\n                            </thead>\n                        </table>\n                         <!-- workers collapse -->\n                         <div class=\"card clear\" id=\"accordion\">\n                          <div class=\"card-body p-0\">\n                            <ul class=\"list-group tabs clear\">\n                              <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#workersCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Added Workers List &nbsp;<span *ngIf=\"listWorkers.length!=0\">({{listWorkers.length}})</span>\n                              </li>\n                              <div id=\"workersCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                <div class=\"details\">\n                                  <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                                    <thead>\n                                        <tr>\n                                          <th width=\"40%\">Name</th>\n                                          <th width=\"55%\">Description</th>\n                                          <th align=\"right\" width=\"5%\">#</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"listWorkers.length!=0\">\n                                      <tr *ngFor=\"let worker of listWorkers;let i of index;\">\n                                        <td class=\"grey\">{{worker.name}}</td>\n                                        <td class=\"grey\">{{worker.description}}</td>\n                                        <td align=\"right\">\n                                          <a><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                        </td>\n                                      </tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                              </div>\t\n                            </ul>\n                          </div>\n                        </div>\n                        <!-- end workers collapse -->\n                    </div>\n\n                    <div class=\"col-sm-6 mb-30\">\n                        <h5><b>List of Materials</b></h5>\n                        <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                  <th width=\"30%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"MaterialName\" [(ngModel)]=\"Materials.MaterialName\">\n                                  </th>\n                                  <th width=\"15%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Qty\" name=\"MaterialQuantity\" [(ngModel)]=\"Materials.MaterialQuantity\">\n                                  </th>\n                                  <th width=\"50%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"MaterialDescription\" [(ngModel)]=\"Materials.MaterialDescription\">\n                                  </th>\n                                  <th width=\"5%\" align=\"right\">\n                                    <a class=\"btn lime-green\" (click)=\"addMaterials()\">\n                                      <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                                    </a>\n                                  </th>\n                                </tr>\n                            </thead>\n                        </table>\n                        <!-- material collapse -->\n                        <div class=\"card clear\" id=\"accordion\">\n                          <div class=\"card-body p-0\">\n                            <ul class=\"list-group tabs clear\">\n                              <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#materialCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Added Material List &nbsp;<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>\n                              </li>\n                              <div id=\"materialCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                <div class=\"details\">\n                                  <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                                    <thead>\n                                        <tr>\n                                          <th width=\"35%\">Name</th>\n                                          <th width=\"15%\">Qty</th>\n                                          <th width=\"45%\">Description</th>\n                                          <th align=\"right\" width=\"5%\">#</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"listMaterials.length!=0\">\n                                        <tr *ngFor=\"let material of listMaterials;let i of index;\">\n                                          <td class=\"grey\">{{material.name}}</td>\n                                          <td class=\"grey\">{{material.qty}}</td>\n                                          <td class=\"grey\">{{material.description}}</td>\n                                          <td align=\"right\">\n                                            <a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                          </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                              </div>\t\n                            </ul>\n                          </div>\n                        </div>\n                        <!-- end material collapse -->\n                    </div>\n\n                    <div class=\"col-sm-6 mb-30\">\n                        <h5><b>List of Tools</b></h5>\n                        <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                  <th width=\"30%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"ToolName\" [(ngModel)]=\"Tools.ToolName\">\n                                  </th>\n                                  <th width=\"15%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Qty\" name=\"ToolQuantity\" [(ngModel)]=\"Tools.ToolQuantity\">\n                                  </th>\n                                  <th width=\"50%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"ToolDescription\" [(ngModel)]=\"Tools.ToolDescription\">\n                                  </th>\n                                  <th width=\"5%\" align=\"right\">\n                                    <a class=\"btn lime-green\" (click)=\"addTools()\">\n                                      <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                                    </a>\n                                  </th>\n                                </tr>\n                            </thead>\n                        </table>\n                        <!-- tools collapse -->\n                        <div class=\"card clear\" id=\"accordion\">\n                          <div class=\"card-body p-0\">\n                            <ul class=\"list-group tabs clear\">\n                              <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#toolCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Added Tools List &nbsp;<span *ngIf=\"listTools.length!=0\">({{listTools.length}})</span>\n                              </li>\n                              <div id=\"toolCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                <div class=\"details\">\n                                  <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                                    <thead>\n                                        <tr>\n                                          <th width=\"35%\">Name</th>\n                                          <th width=\"15%\">Qty</th>\n                                          <th width=\"45%\">Description</th>\n                                          <th align=\"right\" width=\"5%\">#</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"listTools.length!=0\">\n                                        <tr *ngFor=\"let tool of listTools;let i of index;\">\n                                          <td class=\"grey\">{{tool.name}}</td>\n                                          <td class=\"grey\">{{tool.qty}}</td>\n                                          <td class=\"grey\">{{tool.description}}</td>\n                                          <td align=\"right\">\n                                            <a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                          </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                              </div>\t\n                            </ul>\n                          </div>\n                        </div>\n                        <!-- tools collapse end -->  \n                    </div>\n\n                    <div class=\"col-sm-12 mb-30\">\n                      <h4><b>Terms and Conditions</b></h4>\n                      <h5>1. This permit is valid only on the dates and time mentioned.</h5>\n                      <h5>2. Noisy works - 10 AM to 12 PM. Monday to Friday only.</h5>\n                  </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list-inline\">\n                  <li class=\"list-inline-item\">\n                    <a class=\"btn l-blue mt_5\">\n                      <i-feather class=\"icon print\" name=\"printer\"></i-feather>\n                      <span>Print</span>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list-inline float-right mt-4\">\n                  <li class=\"list-inline-item\">\n                    <button class=\"btn blue mr-2\" [disabled]=\"createWorkPermitForm.invalid\">Submit</button>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </form>\n        </ng-container>\n      </div>\n\t\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"general-workpermit-wrapper\">\n\t\n\t<app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n\n\t<div class=\"d-block mt-5\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-setup-wrapper\">\n\t\n\t<div class=\"card clear form-group\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n\t\t\t\tCreate WorkPermit Type &nbsp;<!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n\t\t\t</li>\n\t\t\t<div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n\t\t\t<form #createWorkPermitTypeForm = \"ngForm\" name=\"createWorkPermitTypeForm\" (ngSubmit)=\"submitCreateWorkPermitTypeForm(createWorkPermitTypeForm)\"  novalidate>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"\n\t\t\t\tcol-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>WorkPermit Type*</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"WPType\" [(ngModel)]=\"workpermit.WPtype\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>WorkPermit Description</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Enter\" name=\"WPDescription\" [(ngModel)]=\"workpermit.WPdescription\" required></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"createWorkPermitTypeForm.invalid\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t<table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueId')\">WorkPermit Type ID<span [ngClass]=\"getFieldOrderBy('lookupValueId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">WorkPermit Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('description')\">workPermit Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let worktype of allWorkType | sort : unitFieldType: unitOrder | \n\t\t\t\t    simpleSearch: wpData  | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t      <td class=\"name\">{{worktype.lookupValueId}}</td>\n\t\t\t\t      <td class=\"grey\">{{worktype.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{worktype.description}}</td>\n\t\t\t\t      <td class=\"grey\">\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t\t\t\t\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#natureCollapseOne\" aria-expanded=\"true\" aria-controls=\"naturecollapseOne\">\n\t\t\t\tCreate Nature of Work &nbsp;<!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n\t\t\t</li>\n\t\t\t<div id=\"natureCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n\t\t\t<form #createNatureofWorkForm = \"ngForm\" name=\"createNatureofWorkForm\" (ngSubmit)=\"submitCreateNatureofWorkForm(createNatureofWorkForm)\"  novalidate>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Nature of Work*</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"WPNature\" [(ngModel)]=\"naturework.WPtype\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Enter\" name=\"WPDescription\" [(ngModel)]=\"naturework.WPdescription\" required></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"createNatureofWorkForm.invalid\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t<table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueId')\">WorkPermit Type ID<span [ngClass]=\"getFieldOrderBy('lookupValueId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">WorkPermit Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('description')\">workPermit Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let naturework of allNatureWork | sort : NWunitFieldType: NWunitOrder | simpleSearch: nwData | slice:NWItemStartIndex:NWItemEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{naturework.lookupValueId}}</td>\n\t\t\t\t      <td class=\"grey\">{{naturework.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{naturework.description}}</td>\n\t\t\t\t      <td class=\"grey\">\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"NWtotalItems\"  \n\t\t\t\t[ItemStartIndex]=\"NWItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"NWItemEndIndex\"\n\t\t\t\t[itemLimit] = \"NWitemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t\t\t\t\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/work-permit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/work-permit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtYXBwcm92YWwvd29ya3Blcm1pdC1hcHByb3ZhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: WorkpermitApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkpermitApprovalComponent", function() { return WorkpermitApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/work-permit.service */ "./src/app/api/services/work-permit.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");







let WorkpermitApprovalComponent = class WorkpermitApprovalComponent {
    constructor(router, route, lookupService, sharedService, cookieService, workPermit) {
        this.router = router;
        this.route = route;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.workPermit = workPermit;
        this.isDataLoaded = false;
        this.wpData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    ngOnInit() {
        this.getWorkPermit();
    }
    getWorkPermit() {
        let apartMentID = parseInt(this.cookieService.get('apartmentId'));
        this.workPermit.getWorkPermitsByApartmentId(apartMentID).subscribe((res) => {
            this.workPermitListData = res;
            this.isDataLoaded = true;
            this.totalItems = this.workPermitListData.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
};
WorkpermitApprovalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"] }
];
WorkpermitApprovalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-approval',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-approval.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-approval.component.scss */ "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"],
        _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"]])
], WorkpermitApprovalComponent);



/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtY3JlYXRlL3dvcmtwZXJtaXQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: WorkpermitCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkpermitCreateComponent", function() { return WorkpermitCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/work-permit.service */ "./src/app/api/services/work-permit.service.ts");
/* harmony import */ var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../api/services/apartment.service */ "./src/app/api/services/apartment.service.ts");
/* harmony import */ var _api_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api/services/user.service */ "./src/app/api/services/user.service.ts");
/* harmony import */ var _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api/services/vendor.service */ "./src/app/api/services/vendor.service.ts");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let WorkpermitCreateComponent = class WorkpermitCreateComponent {
    constructor(router, route, vendor, apartmentService, workPermitService, userService, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.vendor = vendor;
        this.apartmentService = apartmentService;
        this.workPermitService = workPermitService;
        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        //Sub Form
        this.Workers = {
            WorkerName: '',
            WorkerDescription: ''
        };
        this.Materials = {
            MaterialName: '',
            MaterialQuantity: '',
            MaterialDescription: ''
        };
        this.Tools = {
            ToolName: '',
            ToolQuantity: '',
            ToolDescription: ''
        };
        //List Sub form
        this.listWorkers = [];
        this.listMaterials = [];
        this.listTools = [];
        //For Multiselect
        this.itemList = [];
        this.selectedItems = [];
        this.settings = {};
        //Extra Parameters
        this.isWorkpermitSubmitted = false;
        this.isError = false;
        this.errorMessage = "";
    }
    ngOnInit() {
        this.workpermit = {};
        //   this.itemList = [
        //     { "id": 1, "itemName": "Painting" },
        //     { "id": 2, "itemName": "Delivery" },
        //     { "id": 3, "itemName": "Pickup" },
        //     { "id": 4, "itemName": "Civil" },
        //     { "id": 5, "itemName": "Mechanical" },
        //     { "id": 6, "itemName": "Air-Conditioning" },
        //     { "id": 7, "itemName": "Cleaning" },
        //     { "id": 8, "itemName": "Others" },
        // ];
        // this.selectedItems = [
        //     { "id": 1, "itemName": "Painting" },
        //     { "id": 2, "itemName": "Delivery" },
        //     { "id": 3, "itemName": "Pickup" },
        //     { "id": 4, "itemName": "Civil" },
        // ];
        // this.settings = {
        //     text: "Select Work",
        //     selectAllText: 'Select All',
        //     unSelectAllText: 'UnSelect All',
        //     classes: "myclass custom-class"
        // };
        this.getVendors();
        this.getApartments();
        this.getTowers();
        this.getUnitUsers();
        this.getWorktype();
        this.getNatureWorktype();
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    //For Multiselect
    // onItemSelect(item: any) {
    //   console.log(item);
    //   console.log(this.selectedItems);
    // }
    // OnItemDeSelect(item: any) {
    //   console.log(item);
    //   console.log(this.selectedItems);
    // }
    // onSelectAll(items: any) {
    //   console.log(items);
    // }
    // onDeSelectAll(items: any) {
    //   console.log(items);
    // }
    //Get Vendors List
    getVendors() {
        this.vendor.getAllVendors().subscribe((res) => {
            this.allVendors = res;
        });
    }
    //Get Apartments List
    getApartments() {
        this.apartmentService.getAllApartments().subscribe((res) => {
            this.allApartments = res;
        });
    }
    //Get Towers List
    getTowers() {
        this.apartmentService.getAllApartmentBlockUnits().subscribe((res) => {
            this.allTowers = res;
        });
    }
    //Get Apartments List
    getUnitUsers() {
        this.userService.getAllUsers().subscribe((res) => {
            this.allUsers = res;
        });
    }
    //Get Work Type
    getWorktype() {
        this.lookupService.getLookupValueByLookupTypeId(90).subscribe((res) => {
            this.allWorkType = res;
        });
    }
    //Get Nature work Type
    getNatureWorktype() {
        this.lookupService.getLookupValueByLookupTypeId(89).subscribe((res) => {
            this.allNatureWorkType = res;
        });
    }
    //Add Sub Form
    //Workers
    addWorkers() {
        let name = this.Workers.WorkerName;
        let description = this.Workers.WorkerDescription;
        this.listWorkers.push({ name: name, description: description });
    }
    //Materials
    addMaterials() {
        let name = this.Materials.MaterialName;
        let qty = this.Materials.MaterialQuantity;
        let description = this.Materials.MaterialDescription;
        this.listMaterials.push({ name: name, qty: qty, description: description });
    }
    //Tools
    addTools() {
        let name = this.Tools.ToolName;
        let qty = this.Tools.ToolQuantity;
        let description = this.Tools.ToolDescription;
        this.listTools.push({ name: name, qty: qty, description: description });
    }
    //create work permit
    submitCreateWorkPermitForm(form) {
        this.isWorkpermitSubmitted = true;
        this.isError = false;
        //add user
        let workPermitDetails = {
            "apartmentId": this.workpermit.WPApartment,
            "apartmentUnitId": this.workpermit.WPTower,
            "userId": this.workpermit.WPUnitUser,
            "workPermitTypeId": this.workpermit.WPPermitType,
            "workNatureId": this.workpermit.WPNatureWork,
            "vendorId": this.workpermit.WPVendor,
            "inChargePerson": this.workpermit.WPIncharge,
            "contactNumber": this.workpermit.WPContact,
            "startDate": this.workpermit.WPStartdate,
            "endDate": this.workpermit.WPEnddate,
            "startTime": moment__WEBPACK_IMPORTED_MODULE_10__(this.workpermit.WPStarttime).format('hh:mm'),
            "endTime": moment__WEBPACK_IMPORTED_MODULE_10__(this.workpermit.WPEndtime).format('hh:mm'),
            "workPermitStatusId": 353,
            "isApproved": true,
            "approvedBy": null,
            "approvedOn": null,
            "termsConditions": "string",
            "description": "string",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null
        };
        //add user 
        this.workPermitService.addWorkPermit(workPermitDetails).subscribe((res) => {
            if (res.message) {
                var workPermitId = res.message;
                if (this.listWorkers.length != 0) {
                    for (var i = 0; i < this.listWorkers.length; i++) {
                        var workpermitworkers = {
                            "workPermitWorkersId": 0,
                            "apartmentId": this.workpermit.WPApartment,
                            "workPermitId": workPermitId,
                            "workerName": this.listWorkers[i].name,
                            "workDescription": this.listWorkers[i].description,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": new Date().toISOString(),
                            "updatedBy": null,
                            "updatedOn": null
                        };
                        this.workPermitService.addWorkPermitWorkers(workpermitworkers).subscribe((res) => {
                        });
                    }
                }
                if (this.listMaterials.length != 0) {
                    for (var i = 0; i < this.listMaterials.length; i++) {
                        var workpermitmaterials = {
                            "workPermitMaterialsId": 0,
                            "apartmentId": this.workpermit.WPApartment,
                            "workPermitId": workPermitId,
                            "material": this.listMaterials[i].name,
                            "quantity": this.listMaterials[i].qty,
                            "description": this.listMaterials[i].description,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": new Date().toISOString(),
                            "updatedBy": null,
                            "updatedOn": null
                        };
                        this.workPermitService.addWorkPermitMaterials(workpermitmaterials).subscribe((res) => {
                        });
                    }
                }
                if (this.listTools.length != 0) {
                    for (var i = 0; i < this.listTools.length; i++) {
                        var workpermittools = {
                            "workPermitToolsId": 0,
                            "apartmentId": this.workpermit.WPApartment,
                            "workPermitId": workPermitId,
                            "tool": this.listTools[i].name,
                            "quantity": this.listTools[i].qty,
                            "description": this.listTools[i].description,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": new Date().toISOString(),
                            "updatedBy": null,
                            "updatedOn": null
                        };
                        this.workPermitService.addWorkPermitTools(workpermittools).subscribe((res) => {
                        });
                    }
                }
                if (res.message) {
                    this.sharedService.setAlertMessage("Work Permit added successfully");
                    this.router.navigate(['/ams/work-permit/settings/approval']);
                }
            }
            else {
                this.isWorkpermitSubmitted = false;
                this.isError = true;
                this.errorMessage = res.errorMessage;
            }
        }, error => {
        });
    }
};
WorkpermitCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"] },
    { type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"] },
    { type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }
];
WorkpermitCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-create.component.scss */ "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"],
        _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"],
        _api_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])
], WorkpermitCreateComponent);



/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtc2V0dGluZy93b3JrcGVybWl0LXNldHRpbmcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: WorkpermitSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkpermitSettingComponent", function() { return WorkpermitSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WorkpermitSettingComponent = class WorkpermitSettingComponent {
    constructor() { }
    ngOnInit() {
        this.navArray = [
            { link: 'setup', name: 'Setup' },
            { link: 'approval', name: 'Approval List' },
            { link: 'create', name: 'Create work Permit' },
        ];
    }
};
WorkpermitSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-setting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-setting.component.scss */ "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WorkpermitSettingComponent);



/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtc2V0dXAvd29ya3Blcm1pdC1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: WorkpermitSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkpermitSetupComponent", function() { return WorkpermitSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../api/services/lookup.service */ "./src/app/api/services/lookup.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let WorkpermitSetupComponent = class WorkpermitSetupComponent {
    constructor(router, route, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.isDataLoaded = false;
        this.wpData = "";
        this.nwData = "";
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        //Nature Pagination
        this.NWunitFieldType = "unitno";
        this.NWunitOrder = true;
        this.NWItemStartIndex = 0;
        this.NWitemLimit = 10;
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
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    ngOnInit() {
        this.workpermit = {};
        this.naturework = {};
        this.getWorktype();
        this.getNaturework();
    }
    //Get Work Type
    getWorktype() {
        this.lookupService.getLookupValueByLookupTypeId(90).subscribe((res) => {
            this.allWorkType = res;
            this.isDataLoaded = true;
            this.totalItems = this.allWorkType.length;
            if (this.totalItems > this.itemLimit) {
                this.ItemEndIndex = this.itemLimit;
            }
            else {
                this.ItemEndIndex = this.totalItems;
            }
        });
    }
    //Get Work Type
    getNaturework() {
        this.lookupService.getLookupValueByLookupTypeId(89).subscribe((res) => {
            this.allNatureWork = res;
            this.isDataLoaded = true;
            this.NWtotalItems = this.allNatureWork.length;
            if (this.NWtotalItems > this.NWitemLimit) {
                this.NWItemEndIndex = this.NWitemLimit;
            }
            else {
                this.NWItemEndIndex = this.NWtotalItems;
            }
        });
    }
    submitCreateWorkPermitTypeForm(form) {
        let workpermittypes = {
            "lookupValueId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "lookupTypeId": 90,
            "lookupValueName": this.workpermit.WPtype,
            "description": this.workpermit.WPdescription,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null
        };
        this.lookupService.addLookupValue(workpermittypes).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("WorkPermit Type added successfully");
                this.getWorktype();
            }
        });
    }
    submitCreateNatureofWorkForm(form) {
        let workpermittypes = {
            "lookupValueId": 0,
            "apartmentId": parseInt(this.cookieService.get('apartmentId')),
            "lookupTypeId": 89,
            "lookupValueName": this.naturework.WPtype,
            "description": this.naturework.WPdescription,
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null
        };
        this.lookupService.addLookupValue(workpermittypes).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("WorkPermit Nature of work added successfully");
                this.getNaturework();
            }
        });
    }
};
WorkpermitSetupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
WorkpermitSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-setup.component.scss */ "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], WorkpermitSetupComponent);



/***/ }),

/***/ "./src/app/ams/work-permit/work-permit-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/ams/work-permit/work-permit-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WorkPermitRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPermitRoutingModule", function() { return WorkPermitRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/workpermit-setup/workpermit-setup.component */ "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts");
/* harmony import */ var _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/workpermit-approval/workpermit-approval.component */ "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts");
/* harmony import */ var _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/workpermit-create/workpermit-create.component */ "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts");






const routes = [
    { path: '', redirectTo: 'setup', pathMatch: 'full' },
    { path: 'setup', component: _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_3__["WorkpermitSetupComponent"] },
    { path: 'approval', component: _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_4__["WorkpermitApprovalComponent"] },
    { path: 'create', component: _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_5__["WorkpermitCreateComponent"] },
    { path: '**', redirectTo: 'setup', pathMatch: 'full' }
];
let WorkPermitRoutingModule = class WorkPermitRoutingModule {
};
WorkPermitRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WorkPermitRoutingModule);



/***/ }),

/***/ "./src/app/ams/work-permit/work-permit.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ams/work-permit/work-permit.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC93b3JrLXBlcm1pdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/ams/work-permit/work-permit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ams/work-permit/work-permit.component.ts ***!
  \**********************************************************/
/*! exports provided: WorkPermitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPermitComponent", function() { return WorkPermitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WorkPermitComponent = class WorkPermitComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkPermitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-permit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./work-permit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/work-permit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./work-permit.component.scss */ "./src/app/ams/work-permit/work-permit.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WorkPermitComponent);



/***/ }),

/***/ "./src/app/ams/work-permit/work-permit.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/ams/work-permit/work-permit.module.ts ***!
  \*******************************************************/
/*! exports provided: WorkPermitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPermitModule", function() { return WorkPermitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _work_permit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-permit-routing.module */ "./src/app/ams/work-permit/work-permit-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _work_permit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-permit.component */ "./src/app/ams/work-permit/work-permit.component.ts");
/* harmony import */ var _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/workpermit-setup/workpermit-setup.component */ "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts");
/* harmony import */ var _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/workpermit-approval/workpermit-approval.component */ "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts");
/* harmony import */ var _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/workpermit-create/workpermit-create.component */ "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts");
/* harmony import */ var _components_workpermit_setting_workpermit_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/workpermit-setting/workpermit-setting.component */ "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.ts");











let WorkPermitModule = class WorkPermitModule {
};
WorkPermitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_work_permit_component__WEBPACK_IMPORTED_MODULE_6__["WorkPermitComponent"], _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_7__["WorkpermitSetupComponent"], _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_8__["WorkpermitApprovalComponent"], _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_9__["WorkpermitCreateComponent"], _components_workpermit_setting_workpermit_setting_component__WEBPACK_IMPORTED_MODULE_10__["WorkpermitSettingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _work_permit_routing_module__WEBPACK_IMPORTED_MODULE_3__["WorkPermitRoutingModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["AngularMultiSelectModule"]
        ],
        bootstrap: [_work_permit_component__WEBPACK_IMPORTED_MODULE_6__["WorkPermitComponent"]]
    })
], WorkPermitModule);



/***/ })

}]);
//# sourceMappingURL=work-permit-work-permit-module-es2015.js.map