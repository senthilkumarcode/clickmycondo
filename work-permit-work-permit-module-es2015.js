(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-permit-work-permit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-approvalview-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"text-right\" *ngIf=\"isDataLoaded\">\n\t\t<i-feather class=\"icon success-indicator\" name=\"check-circle\"></i-feather>&nbsp; Approve\n\t</div>\n\t<div class=\"card card-table\">\n\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>WorkPermit Approval List <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"wpData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t\t<li class=\"list-inline-item create-btn-permit\">\n    \t\t\t\t<a class=\"btn lime-green mt_5\" routerLink=\"/ams/work-permit/create\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Work Permit</span>\n    \t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"list-inline-item add-icon-permit\">\n\t\t\t\t\t<a class=\"lime-green mt_5\" routerLink=\"/ams/work-permit/create\" routerLinkActive=\"active\" [routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"workPermitListData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid> \n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-approvalview-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<!-- <div class=\"text-right\" *ngIf=\"isDataLoaded\">\n\t\t<i-feather class=\"icon success-indicator\" name=\"check-circle\"></i-feather>&nbsp; Approve\n\t</div> -->\n\t<div class=\"card card-table\">\n\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>WorkPermit Approved List <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"wpData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t</li>\n\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t<li class=\"list-inline-item\"></li>  <!-- This Line is Must, If you removed console error occurred -->\n    \t\t</ul>\n  \t\t</div>\n\t\t<div class=\"card-body p-0\">\n\t\t\t<jqxGrid \n\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\" \n\t\t\t\t[filterable]=\"true\" \n\t\t\t\t[sortable]=\"true\" \n\t\t\t\t[source]=\"workPermitListData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid> \n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"workpermit-Create-wrapper\" id=\"my-canvas\">\n  <div class=\"card clear\">\n    <div class=\"card-header\">\n      <div class=\"row header\">\n        <div class=\"col-sm-4 col-12\">\n          <h6>\n            <span *ngIf=\"pageType=='create'\">Create WorkPermit</span>\n            <span *ngIf=\"pageType=='edit'\">Edit WorkPermit</span>\n            <span *ngIf=\"pageType=='view' && !showPrintData\">View WorkPermit</span>\n            <p *ngIf=\"pageType=='view' && apartmentInfo && showPrintData\">WorkPermit No: {{workpermit.workPermitId}}</p>\n          </h6>\n        </div>\n        <div class=\"col-sm-4 col-12\">\n          <div *ngIf=\"pageType=='view' && apartmentInfo && showPrintData\"> \n            <h6>{{apartmentInfo.apartmentName}} Apartments</h6>\n            <p>{{apartmentInfo.address1}},{{apartmentInfo.city}}</p>\n          </div>\n        </div>\n        <div class=\"col-sm-4 col-12 text-right\" *ngIf=\"pageType =='view'\">\n            <i-feather class=\"icon print link\" (click)=\"print()\" name=\"printer\"></i-feather>\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\">\n      <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n      <app-loader *ngIf=\"isWorkpermitSubmitted\"></app-loader>\n      <ng-container *ngIf=\"!isWorkpermitSubmitted\">\n        <form #createWorkPermitForm=\"ngForm\" name=\"createWorkPermitForm\" (ngSubmit)=\"submitCreateWorkPermitForm(addWorkPermitForm)\" novalidate>\n          <div class=\"row\">\n            <div class=\"col-sm-4\" *ngIf=\"isAdmin()\">\n              <div class=\"input-box\">\n                <label>Tower*</label>\n                <select name=\"WPTower\" id=\"Tower\" class=\"form-control\" [(ngModel)]=\"workpermit.WPTower\" (ngModelChange)=\"getUnits('')\" required [disabled]=\"pageType=='view' ? true : false\">\n                  <option value=\"\" disabled selected hidden>Select</option>\n                  <option *ngFor=\"let tower of allTowers;\" [value]=\"tower.apartmentBlockId\">\n                    {{tower.apartmentBlockNumber}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\" *ngIf=\"isAdmin() && workpermit.WPTower\">\n              <div class=\"select-box\">\n                <label>Unit No*</label>\n                <select name=\"WPApartment\" id=\"Apartment\" class=\"form-control\" [(ngModel)]=\"selectedUnit\" required [disabled]=\"pageType=='view' ? true : false\">\n                  <option value=\"\" disabled selected hidden>Select</option>\n                  <option *ngFor=\"let unit of unitData;\" [value]=\"unit.apartmentBlockUnitId\">\n                    {{unit.apartmentBlockUnitNumber}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\" *ngIf=\"isAdmin()\">\n              <div class=\"input-box\">\n                <label>Primary Contact*</label>\n                <select name=\"WPUnitUser\" id=\"UnitUser\" class=\"form-control\" [(ngModel)]=\"workpermit.WPUnitUser\" required [disabled]=\"pageType=='view' ? true : false\">\n                  <option value=\"\" disabled selected hidden>Select</option>\n                  <option *ngFor=\"let user of allUsers;\" [value]=\"user.userId\">{{user.firstName}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>WorkPermit Type*</label>\n                <!-- <angular2-multiselect \n              name=\"WPNatureWork\"\n              [data]=\"itemList\" \n              [(ngModel)]=\"selectedItems\" \n              [settings]=\"settings\" \n              (onSelect)=\"onItemSelect($event)\"\n              (onDeSelect)=\"OnItemDeSelect($event)\" \n              (onSelectAll)=\"onSelectAll($event)\" \n              (onDeSelectAll)=\"onDeSelectAll($event)\">\n            </angular2-multiselect> -->\n                <select name=\"WPPermitType\" id=\"PermitType\" class=\"form-control\" [(ngModel)]=\"workpermit.WPPermitType\"\n                  required [disabled]=\"pageType=='view' ? true : false\">\n                  <option value=\"\" disabled selected hidden>Select</option>\n                  <option *ngFor=\"let worktype of allWorkType;\" [value]=\"worktype.lookupValueId\">\n                    {{worktype.lookupValueName}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Nature of work*</label>\n                <select name=\"WPNatureWork\" id=\"NatureWork\" class=\"form-control\" [(ngModel)]=\"workpermit.WPNatureWork\"\n                  required [disabled]=\"pageType=='view' ? true : false\">\n                  <option value=\"\" disabled selected hidden>Select</option>\n                  <option *ngFor=\"let natureworktype of allNatureWorkType;\" [value]=\"natureworktype.lookupValueId\">\n                    {{natureworktype.lookupValueName}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Contact Number*</label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"Enter\" name=\"WPContact\"\n                  [(ngModel)]=\"workpermit.WPContact\" required [disabled]=\"pageType=='view' ? true : false\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Name of Vendor/Contractor*</label>\n                <select name=\"WPVendor\" id=\"vendor\" class=\"form-control\" [(ngModel)]=\"workpermit.WPVendor\" required [disabled]=\"pageType=='view' ? true : false\">\n                  <option value=\"\" disabled selected hidden>Select</option>\n                  <option *ngFor=\"let vendor of allVendors;\" [value]=\"vendor.vendorId\">{{vendor.vendorName}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Name of Person In Charge*</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"WPIncharge\"\n                  [(ngModel)]=\"workpermit.WPIncharge\" required [disabled]=\"pageType=='view' ? true : false\">\n              </div>\n            </div>\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-4\" *ngIf=\"isAdmin() && !workpermit.WPTower\"></div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>Start Date</label>\n                <input class=\"form-control\" name=\"WPStartdate\" [owlDateTime]=\"WPStartdate\"\n                  [owlDateTimeTrigger]=\"WPStartdate\" placeholder=\"Date\" [(ngModel)]=\"workpermit.WPStartdate\" required [disabled]=\"pageType=='view' ? true : false\">\n                <owl-date-time #WPStartdate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-4\">\n              <div class=\"input-box\">\n                <label>End Date</label>\n                <input class=\"form-control\" name=\"WPEnddate\" [owlDateTime]=\"WPEnddate\" [owlDateTimeTrigger]=\"WPEnddate\"\n                  placeholder=\"Date\" [(ngModel)]=\"workpermit.WPEnddate\" required [disabled]=\"pageType=='view' ? true : false\">\n                <owl-date-time #WPEnddate [pickerType]=\"'calendar'\"></owl-date-time>\n                <div class=\"date-btn\">\n                  <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-box\">\n                <label>Start Time</label>\n                <input class=\"form-control\" name=\"WPStarttime\" [owlDateTime]=\"WPStarttime\"\n                  [owlDateTimeTrigger]=\"WPStarttime\" placeholder=\"Time\" [(ngModel)]=\"workpermit.WPStarttime\" required [disabled]=\"pageType=='view' ? true : false\">\n                <owl-date-time #WPStarttime [pickerType]=\"'timer'\"></owl-date-time>\n                <div class=\"date-btn\">\n                  <i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-2\">\n              <div class=\"input-box\">\n                <label>End Time</label>\n                <input class=\"form-control\" name=\"WPEndtime\" [owlDateTime]=\"WPEndtime\" [owlDateTimeTrigger]=\"WPEndtime\"\n                  placeholder=\"Time\" [(ngModel)]=\"workpermit.WPEndtime\" required [disabled]=\"pageType=='view' ? true : false\">\n                <owl-date-time #WPEndtime [pickerType]=\"'timer'\"></owl-date-time>\n                <div class=\"date-btn\">\n                  <i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6 mb-30\">\n              <p class=\"font-med mb-2\" *ngIf=\"pageType!='view'\"><b>List of Workers/Personnels</b></p>\n              <table *ngIf=\"pageType!='view'\" class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                <thead>\n                  <tr>\n                    <th width=\"35%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"WorkerName\"\n                        [(ngModel)]=\"Workers.WorkerName\" maxlength=\"16\">\n                    </th>\n                    <th width=\"60%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"WorkerDescription\"\n                        [(ngModel)]=\"Workers.WorkerDescription\">\n                    </th>\n                    <th width=\"5%\" align=\"right\">\n                      <a class=\"btn lime-green\" (click)=\"addWorkers()\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                      </a>\n                    </th>\n                  </tr>\n                </thead>\n              </table>\n              <div class=\"card clear\" id=\"accordion1\">\n                <div class=\"card-body p-0\">\n                  <ul class=\"list-group tabs clear\">\n                    <li class=\"list-group-item\" #accordion1 data-toggle=\"collapse\" data-target=\"#workersCollapseOne\"\n                      aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                      <span class=\"font-med\">Workers List</span>&nbsp;<span *ngIf=\"listWorkers.length!==0\">({{listWorkers.length}})</span>\n                    </li>\n                    <div id=\"workersCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion1\">\n                      <div class=\"details\">\n                        <table class=\"mini-table-1\" [ngClass]=\"isMobileView()\">\n                          <thead>\n                            <tr>\n                              <th class=\"name\">Name</th>\n                              <th class=\"inc-desc\" [ngClass]=\"{'inc-wdesc':pageType=='view'}\">Description</th>\n                              <th class=\"action\" *ngIf=\"pageType!='view'\">Action</th>\n                            </tr>\n                          </thead>\n                          <tbody *ngIf=\"listWorkers.length!=0\">\n                            <tr *ngFor=\"let worker of listWorkers;index as i;\">\n                              <td class=\"name\">{{worker.name}}</td>\n                              <td class=\"inc-desc\" [ngClass]=\"{'inc-wdesc':pageType=='view'}\">{{worker.description}}</td>\n                              <td class=\"action\" *ngIf=\"pageType!='view'\">\n                                <a class=\"pr-2\" (click)=\"editlistItems(i, 'listofWorker',worker)\">\n                                  <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                                </a>\n                                <a (click)=\"deletelistItems(i, 'listofWorker')\">\n                                  <i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n                                </a>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6 mb-30\">\n              <p class=\"font-med mb-2\" *ngIf=\"pageType!='view'\"><b>List of Materials</b></p>\n              <table class=\"mini-table\" [ngClass]=\"isMobileView()\" *ngIf=\"pageType!='view'\">\n                <thead>\n                  <tr>\n                    <th width=\"30%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"MaterialName\"\n                        [(ngModel)]=\"Materials.MaterialName\" maxlength=\"16\">\n                    </th>\n                    <th width=\"15%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Qty\" name=\"MaterialQuantity\"\n                        [(ngModel)]=\"Materials.MaterialQuantity\">\n                    </th>\n                    <th width=\"50%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"MaterialDescription\"\n                        [(ngModel)]=\"Materials.MaterialDescription\">\n                    </th>\n                    <th width=\"5%\" align=\"right\">\n                      <a class=\"btn lime-green\" (click)=\"addMaterials()\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                      </a>\n                    </th>\n                  </tr>\n                </thead>\n              </table>\n\n              <div class=\"card clear\" id=\"accordion2\">\n                <div class=\"card-body p-0\">\n                  <ul class=\"list-group tabs clear\">\n                    <li class=\"list-group-item font-med\" #accordion2 data-toggle=\"collapse\" data-target=\"#materialCollapseTwo\"\n                      aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                      <span class=\"font-med\">Material List</span> &nbsp;<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>\n                    </li>\n                    <div id=\"materialCollapseTwo\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion2\">\n                      <div class=\"details\">\n                        <table class=\"mini-table-1\" [ngClass]=\"isMobileView()\">\n                          <thead>\n                            <tr>\n                              <th class=\"name\">Name</th>\n                              <th class=\"action\">Qty</th>\n                              <th class=\"desc\" [ngClass]=\"{'inc-desc':pageType=='view'}\">Description</th>\n                              <th class=\"action\" *ngIf=\"pageType!='view'\">Action</th>\n                            </tr>\n                          </thead>\n                          <tbody *ngIf=\"listMaterials.length!=0\">\n                            <tr *ngFor=\"let material of listMaterials;index as i;\">\n                              <td class=\"name\">{{material.name}}</td>\n                              <td class=\"action\">{{material.qty}}</td>\n                              <td class=\"desc\" [ngClass]=\"{'inc-desc':pageType=='view'}\">{{material.description}}</td>\n                              <td class=\"action\" *ngIf=\"pageType!='view'\">\n                                <a class=\"pr-2\" (click)=\"editlistItems(i, 'materialList',material)\">\n                                  <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                                </a>\n                                <a class=\"\" (click)=\"deletelistItems(i, 'materialList')\">\n                                  <i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n                                </a>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-sm-6 mb-30\">\n              <p class=\"font-med mb-2\" *ngIf=\"pageType!='view'\"><b>List of Tools</b></p>\n              <table class=\"mini-table\" [ngClass]=\"isMobileView()\" *ngIf=\"pageType!='view'\">\n                <thead>\n                  <tr>\n                    <th width=\"30%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"ToolName\"\n                        [(ngModel)]=\"Tools.ToolName\" maxlength=\"16\">\n                    </th>\n                    <th width=\"15%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Qty\" name=\"ToolQuantity\"\n                        [(ngModel)]=\"Tools.ToolQuantity\">\n                    </th>\n                    <th width=\"50%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"ToolDescription\"\n                        [(ngModel)]=\"Tools.ToolDescription\">\n                    </th>\n                    <th width=\"5%\" align=\"right\">\n                      <a class=\"btn lime-green\" (click)=\"addTools()\">\n                        <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                      </a>\n                    </th>\n                  </tr>\n                </thead>\n              </table>\n\n              <div class=\"card clear\" id=\"accordion3\">\n                <div class=\"card-body p-0\">\n                  <ul class=\"list-group tabs clear\">\n                    <li class=\"list-group-item font-med\" #accordion3 data-toggle=\"collapse\" data-target=\"#toolCollapseOne\"\n                      aria-expanded=\"false\" aria-controls=\"collapseOne\">\n                      <span class=\"font-med\">Tools List</span> &nbsp;<span *ngIf=\"listTools.length!=0\">({{listTools.length}})</span>\n                    </li>\n                    <div id=\"toolCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion3\">\n                      <div class=\"details\">\n                        <table class=\"mini-table-1\" [ngClass]=\"isMobileView()\">\n                          <thead>\n                            <tr>\n                              <th class=\"name\">Name</th>\n                              <th class=\"action\">Qty</th>\n                              <th class=\"desc\" [ngClass]=\"{'inc-desc':pageType=='view'}\">Description</th>\n                              <th class=\"action\" *ngIf=\"pageType!='view'\">Action</th>\n                            </tr>\n                          </thead>\n                          <tbody *ngIf=\"listTools.length!=0\">\n                            <tr *ngFor=\"let tool of listTools;index as i;\">\n                              <td class=\"name\">{{tool.name}}</td>\n                              <td class=\"action\">{{tool.qty}}</td>\n                              <td class=\"desc\" [ngClass]=\"{'inc-desc':pageType=='view'}\">{{tool.description}}</td>\n                              <td class=\"action\" *ngIf=\"pageType!='view'\">\n                                <a class=\"pr-2\" (click)=\"editlistItems(i, 'toolList',tool)\">\n                                  <i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n                                </a>\n                                <a class=\"\" (click)=\"deletelistItems(i, 'toolList')\">\n                                  <i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n                                </a>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row mt-5\">\n            <div class=\"col-sm-6\">\n              <p class=\"font-med\">Terms and Condition</p>\n              <p class=\"text-muted\">{{workpermit.terms}}</p>\n            </div>\n            <div class=\"col-sm-6 text-right\" *ngIf=\"pageType!='view'\">\n              <button class=\"btn blue\" [disabled]=\"createWorkPermitForm.invalid\">Submit</button>\n            </div>\n          </div>\n        </form>\n      </ng-container>\n    </div>\n  </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"document-setup-wrapper\">\n\t<ul class=\"icon-tabs btn-group\">\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link\" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('WorkPermit')\" [ngClass]=\"selectedTab == 'WorkPermit' ? 'active' : ''\">    \n\t\t\t\tCreate WorkPermit Type\n\t\t\t</a> \n\t\t</li>\n\t\t<li class=\"nav-item\">\n\t\t\t<a class=\"nav-link \" href=\"javascript:void(0)\" role=\"tab\" (click)=\"showTab('Nature')\" [ngClass]=\"selectedTab == 'Nature' ? 'active' : ''\" >      \n\t\t\t\tCreate Nature of Work \n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\t<div class=\"tab-content\">\n\t\t<div class=\"tab-pane\" id=\"dues\" [ngClass]=\"selectedTab == 'WorkPermit' ? 'active' : ''\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<form #createWorkPermitTypeForm = \"ngForm\" name=\"createWorkPermitTypeForm\" novalidate>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>WorkPermit Type*</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Workpermit Type\" name=\"WPType\" [(ngModel)]=\"workpermit.WPtype\" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>WorkPermit Description</label>\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Description\" name=\"WPDescription\" [(ngModel)]=\"workpermit.WPdescription\" required></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 mt-4\" *ngIf=\"!workpermitEditmode\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2 mt-3\" [disabled]=\"createWorkPermitTypeForm.invalid\" (click)=\"submitCreateWorkPermitTypeForm()\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-3 mt-4\" *ngIf=\"workpermitEditmode\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2 mt-3\" [disabled]=\"createWorkPermitTypeForm.invalid\" (click)=\"updateCreateWorkPermitTypeForm()\">Update</button>\n\t\t\t\t\t\t\t\t<button class=\"btn mt-3\" [disabled]=\"createWorkPermitTypeForm.invalid\" (click)=\"cancelEditMode('work')\">Cancel</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">WorkPermit Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('description')\">WorkPermit Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let worktype of allWorkType | sort : unitFieldType: unitOrder | \n\t\t\t\t\t\t\tsimpleSearch: wpData  | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t\t\t\t<td class=\"grey\">{{worktype.lookupValueName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{worktype.description}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t\t<a class=\"link\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"editWork(worktype,'work')\"></i-feather></a>&nbsp;\n\t\t\t\t\t\t\t\t<a class=\"link\"><i-feather class=\"icon delete\" name=\"trash\" (click)=\"deleteWork(worktype,'work')\"></i-feather></a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<app-pagination \n\t\t\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t\t</app-pagination>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t\t<div class=\"tab-pane\" id=\"advance\" [ngClass]=\"selectedTab == 'Nature' ? 'active' : ''\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t<form #createNatureofWorkForm = \"ngForm\" name=\"createNatureofWorkForm\" novalidate>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Nature of Work*</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Nature of Work\" name=\"WPNature\" [(ngModel)]=\"naturework.WPtype\" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-5\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Description\" name=\"WPDescription\" [(ngModel)]=\"naturework.WPdescription\" required></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-2 mt-4\" *ngIf=\"!natureEditMode\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2 mt-3 link\" [disabled]=\"createNatureofWorkForm.invalid\" (click)=\"submitCreateNatureofWorkForm()\">Submit</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-3 mt-4\" *ngIf=\"natureEditMode\">\n\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2 mt-3 link\" [disabled]=\"createNatureofWorkForm.invalid\" (click)=\"updateCreateNatureofWorkForm()\">Update</button>\n\t\t\t\t\t\t\t\t<button class=\"btn mt-3 link\" [disabled]=\"createNatureofWorkForm.invalid\" (click)=\"cancelEditMode('nature')\">Cancel</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t<table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Nature of Work Type<span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('description')\">Nature of Work Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t<tr *ngFor=\"let naturework of allNatureWork | sort : NWunitFieldType: NWunitOrder | simpleSearch: nwData | slice:NWItemStartIndex:NWItemEndIndex ; let i = index\">\n\t\t\t\t\t\t\t<td class=\"grey\">{{naturework.lookupValueName}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">{{naturework.description}}</td>\n\t\t\t\t\t\t\t<td class=\"grey\">\n\t\t\t\t\t\t\t\t<a class=\"link\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"editWork(naturework,'nature')\"></i-feather></a>&nbsp;\n\t\t\t\t\t\t\t\t<a class=\"link\"><i-feather class=\"icon delete\" name=\"trash\" (click)=\"deleteWork(naturework,'nature')\"></i-feather></a>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</tbody>\n\t\t\t\t\t</table>\n\t\t\t\t\t<app-pagination \n\t\t\t\t\t\t[totalItems]=\"NWtotalItems\"  \n\t\t\t\t\t\t[ItemStartIndex]=\"NWItemStartIndex\"\n\t\t\t\t\t\t[ItemEndIndex] = \"NWItemEndIndex\"\n\t\t\t\t\t\t[itemLimit] = \"NWitemLimit\"\n\t\t\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t\t\t</app-pagination>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"status-modal-wrapper\">\n    <form>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"input-box radio-box\">\n                    <label>Status</label>\n                    <div class=\"form-group\" *ngFor=\"let data of statusTypeData;let i=index\">\n                        <input name=\"assetConditionId\" [id]=\"i\" [(ngModel)]=\"status\" [value]=\"data.lookupValueId\" type=\"radio\">\n                        <label class=\"radio-inline\" [for]=\"i\">{{data.lookupValueName}}</label>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\" [ngClass]=\"status == 357 ? '' : 'space-field'\">\n            <div class=\"col-sm-12\" *ngIf=\"status == 357\">\n                <div class=\"input-box\">\n                    <label>Reason</label>\n                    <textarea placeholder=\"some text here\" rows=\"2\" name=\"comments\"></textarea>\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-wrapper\">\n            <div class=\"col-sm-12 text-right\">\n                <a href=\"javascript:void(0)\" class=\"btn blue mr-3\" (click)=\"onConfirm()\">Submit</a>\n                <a href=\"javascript:void(0)\" class=\"btn trans-white\" (click)=\"onDismiss()\">Cancel</a>\n            </div>\n        </div>\n    </form>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 767px) {\n  .create-btn-permit {\n    display: none;\n  }\n}\n\n@media (min-width: 767px) {\n  .add-icon-permit {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LWFwcHJvdmFsL3dvcmtwZXJtaXQtYXBwcm92YWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtYXBwcm92YWwvd29ya3Blcm1pdC1hcHByb3ZhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQURKO0lBRU8sYUFBQTtFQ0NMO0FBQ0Y7O0FER0k7RUFESjtJQUVRLGFBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL3dvcmstcGVybWl0L2NvbXBvbmVudHMvd29ya3Blcm1pdC1hcHByb3ZhbC93b3JrcGVybWl0LWFwcHJvdmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1idG4tcGVybWl0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hZGQtaWNvbi1wZXJtaXQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAgNzY3cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgfVxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY3JlYXRlLWJ0bi1wZXJtaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC5hZGQtaWNvbi1wZXJtaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/WorkPermit */ "./src/app/api/controllers/WorkPermit.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _workpermit_status_workpermit_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../workpermit-status/workpermit-status.component */ "./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.ts");









let WorkpermitApprovalComponent = class WorkpermitApprovalComponent {
    constructor(router, route, cookieService, workPermit, dialog) {
        this.router = router;
        this.route = route;
        this.cookieService = cookieService;
        this.workPermit = workPermit;
        this.dialog = dialog;
        this.wpData = "";
        this.isDataLoaded = false;
    }
    getWorkApprovalList() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: '353,354,356,357,358,359'
        };
        this.workPermit.getAllWorkPermitsByStatues(params).subscribe((res) => {
            this.workPermitListData = res;
            this.totalItems = this.workPermitListData.length;
            this.gridSourceData = {
                localdata: this.workPermitListData,
                datatype: "array"
            };
            this.workPermitListData = new jqx.dataAdapter(this.gridSourceData);
            this.isDataLoaded = true;
        });
    }
    onGlSearchFilter() {
        if (this.wpData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.wpData;
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
    onEditTicket(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let permitId = dataRecord.workPermitId;
        this.router.navigate(['/ams/work-permit/create'], { queryParams: { id: permitId, type: 'edit' } });
    }
    onViewTicket(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let permitId = dataRecord.workPermitId;
        this.router.navigate(['/ams/work-permit/create'], { queryParams: { id: permitId, type: 'view' } });
    }
    onstatusPermit(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let entity = {
            workpermitId: dataRecord.workPermitId,
            statusId: dataRecord.statusId
        };
        const dialogRef = this.dialog.open(_workpermit_status_workpermit_status_component__WEBPACK_IMPORTED_MODULE_8__["WorkpermitStatusComponent"], {
            width: '600px',
            height: '350px',
            data: entity
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getWorkApprovalList();
            }
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'ApprovalList');
    }
    ngOnInit() {
        this.getWorkApprovalList();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'WP ID',
                datafield: 'workPermitId',
                width: 80,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'BLOCK',
                datafield: 'apartmentBlockNumber',
                minwidth: 130,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer,
            }, {
                text: 'UNIT',
                datafield: 'apartmentBlockUnitNumber',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'ENDORSED BY',
                datafield: 'endorsedBy',
                cellsrenderer: cellsrenderer,
                minwidth: 140,
                renderer: columnrenderer
            }, {
                text: 'WP TYPE',
                datafield: 'workPermitType',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'NATURE OF WORK',
                datafield: 'natureOfWork',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: '	START DATE',
                datafield: 'startDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'END DATE',
                datafield: 'endDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'PERSONNELS',
                datafield: 'noOfPersonnels',
                cellsalign: 'center',
                align: 'center',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer,
            }, {
                text: 'Status',
                datafield: 'status',
                cellsalign: 'center',
                align: 'center',
                cellsrenderer: cellsrenderer,
                minwidth: 160,
                renderer: columnrenderer,
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" class="mr-3" onClick="viewPermitEvent(' + row + ')"><i class="fa fa-eye icon view" aria-hidden="true"></i></a>'
                        + '<a href="javascript:void(0)" class="mr-3" onClick="editPermitEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a>'
                        + '<a href="javascript:void(0)" onClick="statusPermitEvent(' + row + ')"><i class="fa fa-check-circle icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
    }
};
WorkpermitApprovalComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], WorkpermitApprovalComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:oneditPermit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], WorkpermitApprovalComponent.prototype, "onEditTicket", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onviewPermit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], WorkpermitApprovalComponent.prototype, "onViewTicket", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onstatusPermit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], WorkpermitApprovalComponent.prototype, "onstatusPermit", null);
WorkpermitApprovalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-approval',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-approval.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-approval.component.scss */ "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
], WorkpermitApprovalComponent);

function statusPermitEvent(row) {
    var event = new CustomEvent('onstatusPermit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.statusPermitEvent = statusPermitEvent;
function editPermitEvent(row) {
    var event = new CustomEvent('oneditPermit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.editPermitEvent = editPermitEvent;
function viewPermitEvent(row) {
    var event = new CustomEvent('onviewPermit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.viewPermitEvent = viewPermitEvent;


/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media (max-width: 767px) {\n  .create-btn-permit {\n    display: none;\n  }\n}\n\n@media (min-width: 767px) {\n  .add-icon-permit {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LWFwcHJvdmVkLWxpc3Qvd29ya3Blcm1pdC1hcHByb3ZlZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LWFwcHJvdmVkLWxpc3Qvd29ya3Blcm1pdC1hcHByb3ZlZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBREo7SUFFTyxhQUFBO0VDQ0w7QUFDRjs7QURHSTtFQURKO0lBRVEsYUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LWFwcHJvdmVkLWxpc3Qvd29ya3Blcm1pdC1hcHByb3ZlZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1idG4tcGVybWl0IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5cbi5hZGQtaWNvbi1wZXJtaXQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAgNzY3cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgfVxufSIsIkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY3JlYXRlLWJ0bi1wZXJtaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC5hZGQtaWNvbi1wZXJtaXQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: WorkpermitApprovedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkpermitApprovedListComponent", function() { return WorkpermitApprovedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/WorkPermit */ "./src/app/api/controllers/WorkPermit.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







let WorkpermitApprovedListComponent = class WorkpermitApprovedListComponent {
    constructor(router, cookieService, workPermit) {
        this.router = router;
        this.cookieService = cookieService;
        this.workPermit = workPermit;
        this.wpData = "";
        this.isDataLoaded = false;
    }
    onGlSearchFilter() {
        if (this.wpData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.wpData;
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
    onViewTicket(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let permitId = dataRecord.workPermitId;
        this.router.navigate(['/ams/work-permit/create'], { queryParams: { id: permitId, type: 'view' } });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'ApprovedList');
    }
    ngOnInit() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId')),
            statusIds: '355'
        };
        this.workPermit.getAllWorkPermitsByStatues(params).subscribe((res) => {
            this.workPermitListData = res;
            this.totalItems = this.workPermitListData.length;
            this.gridSourceData = {
                localdata: this.workPermitListData,
                datatype: "array"
            };
            this.workPermitListData = new jqx.dataAdapter(this.gridSourceData);
            this.isDataLoaded = true;
        });
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.columnData = [{
                text: 'WP ID',
                datafield: 'workPermitId',
                width: 80,
                pinned: true,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'BLOCK',
                datafield: 'apartmentBlockNumber',
                minwidth: 130,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer,
            }, {
                text: 'UNIT',
                datafield: 'apartmentBlockUnitNumber',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'ENDORSED BY',
                datafield: 'endorsedBy',
                cellsrenderer: cellsrenderer,
                minwidth: 140,
                renderer: columnrenderer
            }, {
                text: 'WP TYPE',
                datafield: 'workPermitType',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: 'NATURE OF WORK',
                datafield: 'natureOfWork',
                cellsrenderer: cellsrenderer,
                minwidth: 150,
                renderer: columnrenderer
            }, {
                text: '	START DATE',
                datafield: 'startDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'END DATE',
                datafield: 'endDate',
                cellsrenderer: (row, column, value) => {
                    return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format("DD-MM-YYYY") + '</div>';
                },
                minwidth: 80,
                renderer: columnrenderer
            }, {
                text: 'PERSONNELS',
                datafield: 'noOfPersonnels',
                cellsalign: 'center',
                align: 'center',
                cellsrenderer: cellsrenderer,
                minwidth: 80,
                renderer: columnrenderer,
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" class="mr-3" onClick="viewPermitEvent(' + row + ')"><i class="fa fa-eye icon view" aria-hidden="true"></i></a>';
                },
                renderer: columnrenderer
            }];
    }
};
WorkpermitApprovedListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', { static: false }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__["jqxGridComponent"])
], WorkpermitApprovedListComponent.prototype, "datagrid", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onviewPermit', ['$event.detail']),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], WorkpermitApprovedListComponent.prototype, "onViewTicket", null);
WorkpermitApprovedListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-approved-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-approved-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-approved-list.component.scss */ "./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
        src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"]])
], WorkpermitApprovedListComponent);

function viewPermitEvent(row) {
    var event = new CustomEvent('onviewPermit', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.viewPermitEvent = viewPermitEvent;


/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".font-med {\n  font-size: 1.4rem;\n}\n\n.lime-green {\n  color: #5cd694;\n}\n\n.header p {\n  padding-top: 0 !important;\n}\n\n@media (max-width: 767px) {\n  .header div:nth-of-type(2) {\n    padding-top: 10px !important;\n  }\n}\n\n.mini-table-1 {\n  width: 100%;\n}\n\n.mini-table-1 th {\n  font-size: 1.3rem;\n}\n\n.mini-table-1 td {\n  font-size: 1.3rem;\n}\n\n.mini-table-1 .name {\n  width: 30%;\n  max-width: 30%;\n  min-width: 30%;\n}\n\n.mini-table-1 .action {\n  width: 10%;\n  max-width: 10%;\n  min-width: 10%;\n}\n\n.mini-table-1 .desc {\n  width: 50%;\n  max-width: 50%;\n  min-width: 50%;\n}\n\n@media (max-width: 767px) {\n  .mini-table-1 .desc {\n    display: none !important;\n  }\n}\n\n.mini-table-1 .inc-desc {\n  width: 60%;\n  max-width: 60%;\n  min-width: 60%;\n}\n\n@media (max-width: 767px) {\n  .mini-table-1 .inc-desc {\n    display: none !important;\n  }\n}\n\n.mini-table-1 .inc-wdesc {\n  width: 70%;\n  max-width: 70%;\n  min-width: 70%;\n}\n\n@media (max-width: 767px) {\n  .mini-table-1 .inc-wdesc {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LWNyZWF0ZS93b3JrcGVybWl0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvZm9udHMuc2NzcyIsInNyYy9hcHAvYW1zL3dvcmstcGVybWl0L2NvbXBvbmVudHMvd29ya3Blcm1pdC1jcmVhdGUvd29ya3Blcm1pdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VDMEVFLGlCQUFBO0FDNUVGOztBRk1BO0VBQ0ksY0cwQ1M7QUQ3Q2I7O0FGUUk7RUFDSSx5QkFBQTtBRUxSOztBRlFRO0VBREo7SUFFUSw0QkFBQTtFRUxWO0FBQ0Y7O0FGVUE7RUFDSSxXQUFBO0FFUEo7O0FGUUk7RUNtREYsaUJBQUE7QUN4REY7O0FGUUk7RUNnREYsaUJBQUE7QUNyREY7O0FGUUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUVOUjs7QUZRSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRU5SOztBRlFJO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FFTlI7O0FGT1E7RUFKSjtJQUtRLHdCQUFBO0VFSlY7QUFDRjs7QUZNSTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBRUpSOztBRktRO0VBSko7SUFLUSx3QkFBQTtFRUZWO0FBQ0Y7O0FGSUk7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUVGUjs7QUZHUTtFQUpKO0lBS1Esd0JBQUE7RUVBVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYW1zL3dvcmstcGVybWl0L2NvbXBvbmVudHMvd29ya3Blcm1pdC1jcmVhdGUvd29ya3Blcm1pdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwifnNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvZm9udHNcIjtcblxuLmZvbnQtbWVkIHtcbiAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsKTtcbn1cblxuLmxpbWUtZ3JlZW4ge1xuICAgIGNvbG9yOiRsaW1lLWdyZWVuXG59XG5cblxuLmhlYWRlciB7XG4gICAgcCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGRpdjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAgNzY3cHgpIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLm1pbmktdGFibGUtMSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGgge1xuICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LXNtYWxsZXIpO1xuICAgIH1cbiAgICB0ZCB7XG4gICAgICAgIEBpbmNsdWRlIGZ0LWNhbGMoJGZvbnQtc21hbGxlcik7IFxuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICAgIHdpZHRoOjMwJTtcbiAgICAgICAgbWF4LXdpZHRoOjMwJTtcbiAgICAgICAgbWluLXdpZHRoOjMwJTtcbiAgICB9XG4gICAgLmFjdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgIG1heC13aWR0aDoxMCU7XG4gICAgICAgIG1pbi13aWR0aDoxMCU7XG4gICAgfVxuICAgIC5kZXNjIHtcbiAgICAgICAgd2lkdGg6NTAlO1xuICAgICAgICBtYXgtd2lkdGg6NTAlO1xuICAgICAgICBtaW4td2lkdGg6NTAlO1xuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogIDc2N3B4KSB7XG4gICAgICAgICAgICBkaXNwbGF5IDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbmMtZGVzYyB7XG4gICAgICAgIHdpZHRoOjYwJTtcbiAgICAgICAgbWF4LXdpZHRoOjYwJTtcbiAgICAgICAgbWluLXdpZHRoOjYwJTsgXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAgNzY3cHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXkgOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmluYy13ZGVzYyB7XG4gICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgbWF4LXdpZHRoOjcwJTtcbiAgICAgICAgbWluLXdpZHRoOjcwJTtcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICA3NjdweCkge1xuICAgICAgICAgICAgZGlzcGxheSA6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iLCIuZm9udC1tZWQge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmxpbWUtZ3JlZW4ge1xuICBjb2xvcjogIzVjZDY5NDtcbn1cblxuLmhlYWRlciBwIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyIGRpdjpudGgtb2YtdHlwZSgyKSB7XG4gICAgcGFkZGluZy10b3A6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG4ubWluaS10YWJsZS0xIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWluaS10YWJsZS0xIHRoIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4ubWluaS10YWJsZS0xIHRkIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4ubWluaS10YWJsZS0xIC5uYW1lIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWF4LXdpZHRoOiAzMCU7XG4gIG1pbi13aWR0aDogMzAlO1xufVxuLm1pbmktdGFibGUtMSAuYWN0aW9uIHtcbiAgd2lkdGg6IDEwJTtcbiAgbWF4LXdpZHRoOiAxMCU7XG4gIG1pbi13aWR0aDogMTAlO1xufVxuLm1pbmktdGFibGUtMSAuZGVzYyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogNTAlO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWluaS10YWJsZS0xIC5kZXNjIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5taW5pLXRhYmxlLTEgLmluYy1kZXNjIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIG1pbi13aWR0aDogNjAlO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5taW5pLXRhYmxlLTEgLmluYy1kZXNjIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5taW5pLXRhYmxlLTEgLmluYy13ZGVzYyB7XG4gIHdpZHRoOiA3MCU7XG4gIG1heC13aWR0aDogNzAlO1xuICBtaW4td2lkdGg6IDcwJTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWluaS10YWJsZS0xIC5pbmMtd2Rlc2Mge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIl19 */");

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
/* harmony import */ var src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/WorkPermit */ "./src/app/api/controllers/WorkPermit.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/Vendor */ "./src/app/api/controllers/Vendor.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_12__);













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
        this.pageType = 'create';
        this.selectedUnit = '';
        this.showPrintData = false;
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
        this.getTowers();
        this.getUnitUsers();
        this.getWorktype();
        this.getNatureWorktype();
        this.getAllWorkPermitVendors();
        this.route.queryParams.subscribe((params) => {
            if (params.id && params.type) {
                let entity = {
                    workPermitId: parseInt(params.id),
                    apartmentId: Number(this.cookieService.get('apartmentId'))
                };
                this.pageType = params.type;
                this.getApartmentDetails(params.type);
                this.workPermitService.getWorkPermitById(entity).subscribe((res) => {
                    this.workpermit.workPermitId = parseInt(params.id);
                    this.workpermit.WPUnitUser = res[0].userId;
                    this.workpermit.WPPermitType = res[0].workPermitTypeId;
                    this.workpermit.WPNatureWork = res[0].workNatureId;
                    this.workpermit.WPVendor = res[0].vendorId;
                    this.workpermit.WPIncharge = res[0].inChargePerson;
                    this.workpermit.WPContact = res[0].contactNumber;
                    this.workpermit.WPStartdate = res[0].startDate;
                    this.workpermit.WPEnddate = res[0].endDate;
                    this.workpermit.workPermitStatusId = res[0].workPermitStatusId,
                        this.workpermit.WPStarttime = moment__WEBPACK_IMPORTED_MODULE_10__(res[0].startTime, 'HH:mm').format();
                    this.workpermit.WPEndtime = moment__WEBPACK_IMPORTED_MODULE_10__(res[0].endTime, 'HH:mm').format();
                    this.workpermit.serialNo = res[0].serialNo;
                    this.workpermit.terms = res[0].termsConditions;
                    this.apartmentService.getApartmentBlockUnitById(res[0].apartmentUnitId).subscribe((data) => {
                        this.workpermit.WPTower = data[0].apartmentBlockId;
                        this.getUnits(res[0].apartmentUnitId);
                    });
                });
                this.workPermitService.getWorkPermitWorkersByWorkPermitId(entity).subscribe((res) => {
                    if (res.length > 0) {
                        res.forEach((data) => {
                            let entity = {
                                "id": data.workPermitWorkersId,
                                "name": data.workerName,
                                "description": data.workDescription,
                            };
                            this.listWorkers.push(entity);
                        });
                    }
                });
                this.workPermitService.getWorkPermitMaterialsByWorkPermitId(entity).subscribe((res) => {
                    if (res.length > 0) {
                        res.forEach((data) => {
                            let entity = {
                                "id": data.workPermitMaterialsId,
                                "name": data.material,
                                "qty": data.quantity,
                                "description": data.description,
                            };
                            this.listMaterials.push(entity);
                        });
                    }
                });
                this.workPermitService.getWorkPermitToolsByWorkPermitId(entity).subscribe((res) => {
                    if (res.length > 0) {
                        res.forEach((data) => {
                            let entity = {
                                "id": data.workPermitToolsId,
                                "name": data.tool,
                                "qty": data.quantity,
                                "description": data.description,
                            };
                            this.listTools.push(entity);
                        });
                    }
                });
            }
            else {
                this.termsAndCondition();
            }
        });
    }
    isAdmin() {
        return this.cookieService.get('userRole') == "Admin";
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    // Apartment Info for View Mode 
    getApartmentDetails(mode) {
        if (mode == 'view') {
            let apartment = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                active: 1
            };
            this.apartmentService.getApartmentByApartmentId(apartment).subscribe((apart) => {
                this.apartmentInfo = apart[0];
            });
        }
    }
    //Get All workpermit vendors list
    getAllWorkPermitVendors() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.vendor.getAllWorkPermitVendorByApartmentId(params).subscribe((res) => {
            this.allVendors = res;
        });
    }
    //Get Towers List
    getTowers() {
        let params = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.allTowers = res;
        });
    }
    getUnits(id) {
        let params = {
            apartmentBlockId: parseInt(this.workpermit.WPTower)
        };
        this.selectedUnit = id;
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.unitData = res;
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
        let params = {
            LookupTypeId: 90
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.allWorkType = res;
        });
    }
    //Get Nature work Type
    getNatureWorktype() {
        let params = {
            LookupTypeId: 89
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            this.allNatureWorkType = res;
        });
    }
    //Add Sub Form
    //Workers
    addWorkers() {
        let name = this.Workers.WorkerName;
        let description = this.Workers.WorkerDescription;
        if (name.length > 0) {
            this.listWorkers.push({ name: name, description: description });
            this.Workers.WorkerName = "";
            this.Workers.WorkerDescription = "";
        }
    }
    //Materials
    addMaterials() {
        let name = this.Materials.MaterialName;
        let qty = this.Materials.MaterialQuantity;
        let description = this.Materials.MaterialDescription;
        if (name.length > 0) {
            this.listMaterials.push({ name: name, qty: qty, description: description });
            this.Materials.MaterialName = "";
            this.Materials.MaterialQuantity = "";
            this.Materials.MaterialDescription = "";
        }
    }
    //Tools
    addTools() {
        let name = this.Tools.ToolName;
        let qty = this.Tools.ToolQuantity;
        let description = this.Tools.ToolDescription;
        if (name.length > 0) {
            this.listTools.push({ name: name, qty: qty, description: description });
            this.Tools.ToolName = "";
            this.Tools.ToolQuantity = "";
            this.Tools.ToolDescription = "";
        }
    }
    // delete listWorkers
    deletelistItems(index, listName) {
        if (listName === 'listofWorker') {
            this.listWorkers.splice(index, 1);
        }
        else if (listName === 'materialList') {
            this.listMaterials.splice(index, 1);
        }
        else {
            this.listTools.splice(index, 1);
        }
    }
    //edit listWorkers 
    editlistItems(index, listName, data) {
        if (listName === 'listofWorker') {
            this.Workers.WorkerName = data.name;
            this.Workers.WorkerDescription = data.description;
            this.listWorkers.splice(index, 1);
        }
        else if (listName === 'materialList') {
            this.Materials.MaterialName = data.name;
            this.Materials.MaterialQuantity = data.qty;
            this.Materials.MaterialDescription = data.description;
            this.listMaterials.splice(index, 1);
        }
        else {
            this.Tools.ToolName = data.name;
            this.Tools.ToolQuantity = data.qty;
            this.Tools.ToolDescription = data.description;
            this.listTools.splice(index, 1);
        }
    }
    termsAndCondition() {
        this.apartmentService.getAllTermsConditionsByApartmentIdTermsNo({ ApartmentId: parseInt(this.cookieService.get('apartmentId')), TermsNo: "1" }).subscribe((res) => {
            this.workpermit.terms = res[0].termsTemplate;
        });
    }
    //create work permit
    submitCreateWorkPermitForm(form) {
        this.isWorkpermitSubmitted = true;
        this.isError = false;
        let params = {};
        params.workPermit = {
            'workpermitId': this.pageType == 'edit' ? this.workpermit.workPermitId : 0,
            "apartmentId": Number(this.cookieService.get('apartmentId')),
            "apartmentUnitId": Number(this.selectedUnit),
            "userId": Number(this.workpermit.WPUnitUser),
            "workPermitTypeId": Number(this.workpermit.WPPermitType),
            "workNatureId": Number(this.workpermit.WPNatureWork),
            "vendorId": Number(this.workpermit.WPVendor),
            "inChargePerson": this.workpermit.WPIncharge,
            "contactNumber": this.workpermit.WPContact,
            "startDate": this.workpermit.WPStartdate,
            "endDate": this.workpermit.WPEnddate,
            "startTime": moment__WEBPACK_IMPORTED_MODULE_10__(this.workpermit.WPStarttime).format('HH:mm'),
            "endTime": moment__WEBPACK_IMPORTED_MODULE_10__(this.workpermit.WPEndtime).format('HH:mm'),
            "workPermitStatusId": this.pageType == 'edit' ? this.workpermit.workPermitStatusId : 354,
            "isApproved": true,
            "approvedBy": null,
            "approvedOn": null,
            "termsConditions": this.workpermit.terms,
            "description": "string",
            "isActive": true,
            "insertedBy": parseInt(this.cookieService.get('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": null,
            "updatedOn": null,
            "serialNo": this.pageType == 'edit' ? this.workpermit.serialNo : 0,
        };
        let parentMethod = this.pageType == 'edit' ? 'updateWorkPermit' : 'addWorkPermit';
        this.workPermitService[parentMethod](params).subscribe((res) => {
            if (res.message) {
                var workPermitId = res.message;
                if (this.listWorkers.length != 0) {
                    let childWork = this.pageType == 'edit' ? 'updateWorkPermitWorkers' : 'addWorkPermitWorkers';
                    for (var i = 0; i < this.listWorkers.length; i++) {
                        var workpermitworkers = {
                            "workPermitWorkersId": this.pageType == 'edit' ? this.listWorkers[i].id ? this.listWorkers[i].id : 0 : 0,
                            "apartmentId": Number(this.cookieService.get('apartmentId')),
                            "workPermitId": this.pageType == 'edit' ? this.workpermit.workPermitId : workPermitId,
                            "workerName": this.listWorkers[i].name,
                            "workDescription": this.listWorkers[i].description,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": new Date().toISOString(),
                            "updatedBy": null,
                            "updatedOn": null
                        };
                        this.workPermitService[childWork](workpermitworkers).subscribe((res) => {
                        });
                    }
                }
                if (this.listMaterials.length != 0) {
                    let childMaterial = this.pageType == 'edit' ? 'updateWorkPermitMaterials' : 'addWorkPermitMaterials';
                    for (var i = 0; i < this.listMaterials.length; i++) {
                        var workpermitmaterials = {
                            "workPermitMaterialsId": this.pageType == 'edit' ? this.listMaterials[i].id ? this.listMaterials[i].id : 0 : 0,
                            "apartmentId": Number(this.cookieService.get('apartmentId')),
                            "workPermitId": this.pageType == 'edit' ? this.workpermit.workPermitId : workPermitId,
                            "material": this.listMaterials[i].name,
                            "quantity": this.listMaterials[i].qty,
                            "description": this.listMaterials[i].description,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": new Date().toISOString(),
                            "updatedBy": null,
                            "updatedOn": null
                        };
                        this.workPermitService[childMaterial](workpermitmaterials).subscribe((res) => {
                        });
                    }
                }
                if (this.listTools.length != 0) {
                    let childTool = this.pageType == 'edit' ? 'updateWorkPermitTools' : 'addWorkPermitTools';
                    for (var i = 0; i < this.listTools.length; i++) {
                        var workpermittools = {
                            "workPermitToolsId": this.pageType == 'edit' ? this.listTools[i].id ? this.listTools[i].id : 0 : 0,
                            "apartmentId": Number(this.cookieService.get('apartmentId')),
                            "workPermitId": this.pageType == 'edit' ? this.workpermit.workPermitId : workPermitId,
                            "tool": this.listTools[i].name,
                            "quantity": this.listTools[i].qty,
                            "description": this.listTools[i].description,
                            "isActive": true,
                            "insertedBy": parseInt(this.cookieService.get('userId')),
                            "insertedOn": new Date().toISOString(),
                            "updatedBy": null,
                            "updatedOn": null
                        };
                        this.workPermitService[childTool](workpermittools).subscribe((res) => {
                        });
                    }
                }
                if (res.message) {
                    if (this.pageType == 'edit') {
                        this.sharedService.setAlertMessage(`${workPermitId} Work Permit added successfully`);
                    }
                    else {
                        this.sharedService.setAlertMessage(`Work Permit added successfully`);
                    }
                    this.router.navigate(['/ams/work-permit/approval']);
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
    print() {
        this.showPrintData = true;
        if (this.accordion1.nativeElement.getAttribute('aria-expanded') == 'false') {
            this.accordion1.nativeElement.click();
        }
        if (this.accordion2.nativeElement.getAttribute('aria-expanded') == 'false') {
            this.accordion2.nativeElement.click();
        }
        if (this.accordion3.nativeElement.getAttribute('aria-expanded') == 'false') {
            this.accordion3.nativeElement.click();
        }
        setTimeout(() => {
            var data = document.getElementById('my-canvas');
            html2canvas__WEBPACK_IMPORTED_MODULE_11___default()(data).then(canvas => {
                // Few necessary setting options  
                var imgWidth = 208;
                var pageHeight = 295;
                var imgHeight = canvas.height * imgWidth / canvas.width;
                var heightLeft = imgHeight;
                const contentDataURL = canvas.toDataURL('image/png');
                let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_12__('p', 'mm', 'a4'); // A4 size page of PDF  
                var position = 0;
                pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
                pdf.save('work-permit.pdf');
                this.showPrintData = false;
            });
        }, 1000);
    }
};
WorkpermitCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordion1'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], WorkpermitCreateComponent.prototype, "accordion1", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordion2'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], WorkpermitCreateComponent.prototype, "accordion2", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordion3'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], WorkpermitCreateComponent.prototype, "accordion3", void 0);
WorkpermitCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-create',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-create.component.scss */ "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_api_controllers_Vendor__WEBPACK_IMPORTED_MODULE_6__["VendorService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
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
/* harmony default export */ __webpack_exports__["default"] = (".icon-tabs {\n  display: flex;\n  justify-content: center;\n}\n.icon-tabs li {\n  width: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n  padding: 0;\n  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -moz-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  -webkit-box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1);\n  border-radius: 6px !important;\n}\n.icon-tabs li a {\n  color: #585858;\n  font-family: \"Montserrat\", sans-serif;\n  font-weight: 500;\n  letter-spacing: 0.2px;\n  font-size: 1.6rem;\n  padding: 10px 25px;\n  position: relative;\n  background-color: #ffffff;\n}\n.icon-tabs li a.active {\n  background-color: #3f51b5;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LXNldHVwL3dvcmtwZXJtaXQtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtc2V0dXAvd29ya3Blcm1pdC1zZXR1cC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL3Njc3MvbWl4aW5zLnNjc3MiLCIvVXNlcnMvc2VudGhpbGt1bWFyc2VldGhhcmFtYW4vRG9jdW1lbnRzL3dvcmtzL2NsaWNrbXljb25kby9hcHAtbmc5L3NyYy9zY3NzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL3NlbnRoaWxrdW1hcnNlZXRoYXJhbWFuL0RvY3VtZW50cy93b3Jrcy9jbGlja215Y29uZG8vYXBwLW5nOS9zcmMvc2Nzcy9mb250cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDSEo7QURJSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFRVlOLDZDRlhNO0VFWU4sa0RGWk07RUVhTixxREZiTTtFRUxQLDZCQUFBO0FEUUQ7QUREUTtFQUNJLGNHa0ZEO0VDbERULHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQTZCQSxpQkFBQTtFSjVEVSxrQkFBQTtFQUNBLGtCR2RQO0VIZU8seUJHa0dKO0FGN0ZSO0FESlk7RUFDSSx5Qkd1Q1A7RUh0Q08sY0crRlI7QUZ6RlIiLCJmaWxlIjoic3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LXNldHVwL3dvcmtwZXJtaXQtc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbkBpbXBvcnQgXCJ+c3JjL3Njc3MvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwifnNyYy9zY3NzL21peGluc1wiO1xuQGltcG9ydCBcIn5zcmMvc2Nzcy9mb250c1wiO1xuLmljb24tdGFic3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGxpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDJweCAzcHggLTFweCByZ2JhKCRibGFjaywgMC4xKSk7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoNnB4KTtcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogJGdyZXktNzAwO1xuICAgICAgICAgICAgQGluY2x1ZGUgaGVhZC1tZWRpdW07XG4gICAgICAgICAgICBAaW5jbHVkZSBmdC1jYWxjKCRmb250LW5vcm1hbCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHBvc2l0aW9uOiAkcmVsO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xuICAgICAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtLWJsdWU7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG59IiwiLmljb24tdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24tdGFicyBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDNweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDJweCAzcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbn1cbi5pY29uLXRhYnMgbGkgYSB7XG4gIGNvbG9yOiAjNTg1ODU4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjJweDtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIHBhZGRpbmc6IDEwcHggMjVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLmljb24tdGFicyBsaSBhLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIlxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xuXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzICgkcmFkaXVzKSB7XG5cdC13ZWJraXQtYm9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xuXHQtbW96LWJvcmRlci1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcblx0Ym9yZGVyLXJhZGl1czogJHJhZGl1cyAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1cyAoJHJhZGl1cykge1xuICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbiAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkcmFkaXVzICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIG9wYWNpdHkgKCR2YWx1ZSkge1xuICBvcGFjaXR5OiAkdmFsdWU7XG4gIC1tb3otb3BhY2l0eTogJHZhbHVlO1xuICAtd2Via2l0LW9wYWNpdHk6ICR2YWx1ZTtcbn1cblxuQG1peGluIGJveC1zaGFkb3cgKCRydWxlcy4uLikge1xuICBib3gtc2hhZG93OiAkcnVsZXM7XG4gIC1tb3otYm94LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICRydWxlcztcbn1cblxuQG1peGluIHRleHQtc2hhZG93ICgkcnVsZXMpIHtcbiAgdGV4dC1zaGFkb3c6ICRydWxlcztcbiAgLW1vei10ZXh0LXNoYWRvdzogJHJ1bGVzO1xuICAtd2Via2l0LXRleHQtc2hhZG93OiAkcnVsZXM7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0gKCRydWxlcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHJ1bGVzICFpbXBvcnRhbnQ7XG5cdC1tb3otdHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcblx0dHJhbnNmb3JtOiAkcnVsZXMgIWltcG9ydGFudDtcbn1cblxuQG1peGluIHRyYW5zaXRpb24gKCRydWxlcy4uLikge1xuXHQtd2Via2l0LXRyYW5zaXRpb246ICRydWxlcztcblx0LW1vei10cmFuc2l0aW9uOiAkcnVsZXM7XG5cdHRyYW5zaXRpb246ICRydWxlcztcbn1cblxuQG1peGluIGFuaW1hdGlvbi1kZWxheSAoJHZhbHVlKSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAkdmFsdWU7XG4gIGFuaW1hdGlvbi1kZWxheTogJHZhbHVlO1xufVxuXG5AbWl4aW4gYm94LXNpemluZyAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYm94LXNpemluZzogJHJ1bGVzO1xuICAtbW96LWJveC1zaXppbmc6ICRydWxlcztcbiAgYm94LXNpemluZzogJHJ1bGVzO1xufVxuXG5AbWl4aW4gYXBwZWFyYW5jZSAoJHJ1bGVzLi4uKSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogJHJ1bGVzO1xuICAtbW96LWFwcGVhcmFuY2U6ICRydWxlcztcbn1cblxuQG1peGluIGRlc2VsZWN0ICgpIHtcbiAgLW1vei11c2VyLXNlbGVjdDogLW1vei1ub25lO1xuXHQta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdC1vLXVzZXItc2VsZWN0OiBub25lO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIHZpc2liaWxpdHkgKCRydWxlcykge1xuICB2aXNpYmlsaXR5OiAkcnVsZXM7XG59XG5cbkBtaXhpbiBuby1tcCAoKSB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBjaXJjbGVzKCRyLCAkYmc6bnVsbCwgJHRjOm51bGwpIHtcbiAgd2lkdGg6ICRyO1xuICBoZWlnaHQ6ICRyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiZztcbiAgY29sb3I6ICR0YztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkcik7XG59XG5cbkBtaXhpbiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzLi4uKSB7XG4gIC8vIERpcmVjdGlvbiBoYXMgYmVlbiBvbWl0dGVkIGFuZCBoYXBwZW5zIHRvIGJlIGEgY29sb3Itc3RvcFxuICBAaWYgaXMtZGlyZWN0aW9uKCRkaXJlY3Rpb24pID09IGZhbHNlIHtcbiAgICAkY29sb3Itc3RvcHM6ICRkaXJlY3Rpb24sICRjb2xvci1zdG9wcztcbiAgICAkZGlyZWN0aW9uOiAxODBkZWc7XG4gIH1cblxuICBiYWNrZ3JvdW5kOiBudGgobnRoKCRjb2xvci1zdG9wcywgMSksIDEpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKCRkaXJlY3Rpb24pLCAkY29sb3Itc3RvcHMpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGRpcmVjdGlvbiwgJGNvbG9yLXN0b3BzKTtcbn1cblxuQG1peGluIGZsaXAoJGRpcmVjdGlvbikge1xuICB0cmFuc2Zvcm0gOiByb3RhdGVZKCRkaXJlY3Rpb24pO1xufVxuXG5AbWl4aW4gcGxhY2Vob2xkZXIge1xuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtAY29udGVudH1cbiAgJjotbW96LXBsYWNlaG9sZGVyICAgICAgICAgICB7QGNvbnRlbnR9XG4gICY6Oi1tb3otcGxhY2Vob2xkZXIgICAgICAgICAge0Bjb250ZW50fVxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciAgICAgIHtAY29udGVudH0gIFxufVxuXG5cbiIsIlxuJGZ0YTogRm9udEF3ZXNvbWU7XG5cbiRmZDpmaXhlZDtcbiRhYnM6YWJzb2x1dGU7XG4kcmVsOnJlbGF0aXZlO1xuJHN0OnN0YXRpYztcblxuJGRhcmstYmx1ZTogIzA4M2Q3MTtcbiRkYXJrLWJsdWUtMDI6ICMyMzZhYWY7XG4kZGFyay1ibHVlLTAzOiAjMTM0YjgyO1xuJGxpZ2h0LWJsdWU6ICM4MzkxYTE7XG4kbGlnaHQtYmx1ZS0wMjogI2VlZjBmMztcbiRncmV5LWJsdWU6ICNmM2Y4ZmY7XG4kcy1ibHVlOiAjMDNhOWY0O1xuJGxpZ2h0LXJlZDogI2ZmNTQ3YjtcbiRtLWxpZ2h0LXJlZDogI2ZmNzY4ODtcbiRicmlnaHQtcmVkOiAjZTIzODVlO1xuJHMtcmVkOiAjZWE3OTYyO1xuJHMtcmVkLTAyOiAjZmYzNjM4O1xuJHMtcmVkLTAzOiAjZjQ0MzM2O1xuJG0tcmVkOiAjZDc1NzNkO1xuJGRtLXJlZDogIzhlNGQ0MDtcbiRsLXBhbGUtcmVkOiAjZmZmM2Y1O1xuJGgtcGFsZS1yZWQ6ICNmZmZiZmI7XG4kZ3JleS1yZWQgOiAjZjFkZGRkO1xuJHMtY3lhbjogIzAwYmNkNDtcbiRkLWN5YW46ICMwMjI5MjU7XG4kZC1jeWFuLTAyOiAjMDlhNTk2O1xuJGQtY3lhbi0wMzojMDBkMWZhO1xuJHZkLWN5YW46ICMwMDZkNmQ7XG4kcGFsZS1jeWFuOiAjZDhmZmZiO1xuJHMtZ3JleTogI2NjY2NjYztcbiRsLWdyZXk6ICNkOGUwZTY7XG5cbiRsaC1yZWQ6I2UyM2YwNmM0O1xuJGxoLXllbGxvdzojZGNiZTA4O1xuJHMtb3JhbmdlOiAjZmY5ODAwO1xuJGQtb3JhbmdlOiAjN2Q2NTIwO1xuJGQtb3JhbmdlLTAyOiAjNTI0NzI4O1xuJHMteWVsbG93OiAjZmZlYjNiO1xuJG0teWVsbG93OiAjZmZjMTA3O1xuJHMtdmlvbGV0OiAjNjczYWI3O1xuXG4kZ3JleS0zMDA6ICNmMGYzZjM7XG4kZ3JleS0yMDA6ICNmNmY4Zjg7XG4kZ3JleS01MDA6ICNlNmU2ZTY7XG4kaC1jeWFuOiAjMDNjY2E2O1xuJGRzLWN5YW46ICM4MWIyOWE7XG4kaGQtYmx1ZTogIzA0Mjg1NDtcblxuJGxpbWUtZ3JlZW46ICM1Y2Q2OTQ7IC8vIzViY2M3M1xuJGxpbWUtZ3JlZW4tMDI6ICM1Y2Q2N2M7XG4kbGltZS1ncmVlbi0wMzogIzUyYzU3MDtcbiRsaWdodC1ncmVlbjogI2VkZjVlMDtcbiRtLWdyZWVuOiAjNTRiOTQxO1xuJGQtZ3JlZW46ICMzODk1ODM7XG4kZC1ncmVlbi0wMjogI2RhZTBjZDtcbiRkcy1ncmVlbjogI2U0ZTdkZjtcbiRkcy1ncmVlbi0wMjogI2Y0ZjdlZjtcblxuJG0tYmx1ZTogIzNmNTFiNTtcbiRzLWJsdWU6ICM1MjllZmY7XG4kZHMtYmx1ZTogIzYwN2Q4YjtcbiRtZHMtYmx1ZTogIzYwN2Q4YjtcbiRsLWJsdWU6ICNlYWVmZmQ7XG4kbGctYmx1ZTogI2UwZTNlYztcbiRsZy1ibHVlLTAyOiAjZjRmNGY3O1xuJGxnLWJsdWUtMDM6I2RhZTJlNjtcbiRsZy1ibHVlLTA0OiAjNzI3ZjhlO1xuJGxnLWJsdWUtMDU6ICNlN2VjZWM7XG4kbGctYmx1ZS0wNjogI2U5ZWNlZjtcbiRsZy1ibHVlLTA3OiAjZTFmNWZlO1xuXG4vL2VtZWdlbmN5IGNvbG9yczpcbiRlLW1lZC0wMTogIzAwYmNkNDtcbiRlLW1lZC0wMjogIzIxOTZmMztcblxuJGUtdGgtMDE6ICNmN2QwNjE7XG4kZS10aC0wMjogI2VmNjBhNTtcblxuJGUtZmUtMDE6ICNGRjk4MDA7XG4kZS1mZS0wMjogI0U5MUU2MztcblxuJGUtc2hyLTAxOiAjNjRhMWZkO1xuJGUtc2hyLTAyOiAjOTEwMGZmO1xuXG4kZS1wYy0wMTogIzYxYTFlMTtcbiRlLXBjLTAyOiAjMDZiZjU4O1xuXG4kZS1vdC0wMTogIzYxYTFlMTtcbiRlLW90LTAyOiAjMzdlNzg1O1xuXG4kZ3JleS05MDA6ICMxOTFjMWU7XG4kZ3JleS04NTA6ICM2ODY5NmI7XG4kZ3JleS04MDA6ICMzNzM5NDY7IC8vIzQyNDg1NjtcbiRncmV5LTc1MDogIzc5Nzk3OTtcbiRncmV5LTcwMDogIzU4NTg1ODtcbiRncmV5LTYwMDogI2RlZGVkZTtcbiRncmV5LTY1MDogIzVmNWY1ZjtcbiRncmV5LTU1MDogI2IxYjFiMTtcbiRncmV5LTQ4MDogI2M1YzZjNztcbiRncmV5LTQ2MDogI2RlZTJlNjtcbiRncmV5LTQ3MDogI2U1ZTVlNTtcbiRncmV5LTQ1MDogI2VhZWFlYTsgLy8jZGVlMGU0O1xuJGdyZXktNDQwOiAjQzlEMERGO1xuJGdyZXktNDMwOiAjZTRlNGU0O1xuJGdyZXktNDEwOiAjZWNmMGY1O1xuJGdyZXktNDAwOiAjZWFlYWVhO1xuJGdyZXktMzUwOiAjOGU4ZThlO1xuJGdyZXktMjUwOiAjZjVmNWY1O1xuJGdyZXktMjIwOiAjZmFmYWZhO1xuJGdyZXktMjEwOiAjZjNmNWY3O1xuJGdyZXktMTUwOiAjZjlmOWY5O1xuJGdyZXktMTIwOiAjZjdmN2Y3O1xuJGdyZXktMTMwOiAjZjZmNmY3O1xuJGdyZXktMTAwOiAjZmRmZGZkO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kYmxhY2s6ICMwMDAwMDA7XG4kdHJhbnM6IHRyYW5zcGFyZW50O1xuXG5cbi8vcHVibGljIHBhZ2VzIGNvbG9yc1xuJGRzLXY6IzM0MjYzYztcbiRsLWdyZXktMDE6I2YyZjJmMjtcbiRsLWdyZXktMDI6I2RkZGRkZDtcbiRncmV5LXY6ICM2ZTY3NzM7XG4kZC1ncmV5LTAxOiM4YThhOGE7XG4kc3QtYmx1ZTojMDU4MmM4O1xuJHN0LWJsdWUtMDE6ICMxY2EwZDU7XG4kc3QtYmx1ZS0wMjogIzAxOTdkNDtcbiRwbS1ibHVlOiMyMjk2ZWY7XG4kZ3JleS1wOiNmNmVlZjM7XG4kcC1yZWQ6ICNmZjRmNWE7XG4kcC1ncmV5LTAxOiAjMmYyZjJmO1xuJHAtZ3JleS0wMjogIzRkNGE0YTtcbiRwLWdyZXktMDM6ICM2MzYxNjE7XG5cblxuLy9mb250LXNpemVzXG4kZnQtYmFzZToxMDtcbiRmb250LWJpZy0wMzo1MDtcbiRmb250LWJpZzozODtcbiRmb250LWJpZy0wMjozNjtcbiRmb250LWgyOjM0O1xuJGZvbnQtbWVkaXVtLTAyOjI0O1xuJGZvbnQtbWVkaXVtLTAzOjI2O1xuJGZvbnQtbWVkaXVtLTA0OjMwO1xuJGZvbnQtaDM6Mjg7XG4kZm9udC1oMy0wMjozMjtcbiRmb250LWg0OiAyMjtcbiRmb250LW1lZGl1bToyMDtcbiRmb250LWJhc2U6MTg7XG4kZm9udC1ub3JtYWwtMDI6MTU7XG4kZm9udC1ub3JtYWw6MTY7XG4kZm9udC1zbWFsbDoxNDtcbiRmb250LXNtYWxsZXI6MTM7XG4kZm9udC10aW55OjEyO1xuJGZvbnQtYmFzZS0wMjoxMTtcbiRmb250LXRpbmllcjoxMDtcbiRmb250LW1pY3JvOjk7XG5cbi8vIG90aGVyc1xuJGZ1bGw6MTAwJSAhaW1wb3J0YW50O1xuXG5cbi8vIGltYWdlc1xuJGltYWdlczogXCIvYXNzZXRzL2ltYWdlc1wiO1xuXG4kaGVhZGVyLWhlaWdodDogNzBweDtcblxuIiwiXG5AaW1wb3J0IFwidmFyaWFibGVzXCI7XG5cbkBtaXhpbiBwdWJsaWMtbGlnaHQge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG5AbWl4aW4gcHVibGljLW1lZGl1bSB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBwdWJsaWMtYm9sZCB7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbkBtaXhpbiBoZWFkLWxpZ2h0IHtcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG59XG5cbkBtaXhpbiBoZWFkLXJlZ3VsYXIge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gaGVhZC1tZWRpdW0ge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG5cbkBtaXhpbiBoZWFkLWJvbGQge1xuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGluaGVyaXQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xufVxuXG5AbWl4aW4gZGVzcC1yZWd1bGFyIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4OyAgIFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBpbmhlcml0O1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogaW5oZXJpdDtcbn1cblxuQG1peGluIGRlc3AtbWVkaXVtIHtcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbn1cblxuQG1peGluIGZ0LWNhbGMoJHBpeGVscykge1xuICBmb250LXNpemU6ICggJHBpeGVscyAvICRmdC1iYXNlICkgKyByZW07XG59XG4iXX0= */");

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
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let WorkpermitSetupComponent = class WorkpermitSetupComponent {
    constructor(router, route, lookupService, sharedService, cookieService) {
        this.router = router;
        this.route = route;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.workpermitEditmode = false;
        this.natureEditMode = false;
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
    // Tab
    showTab(type) {
        this.selectedTab = type;
    }
    // Tab
    isActive(type) {
        return this.selectedTab == type ? true : false;
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
    //Get Work Type
    getWorktype() {
        let params = {
            LookupTypeId: 90
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
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
        let params = {
            LookupTypeId: 89
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
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
    editWork(data, type) {
        if (type == 'work') {
            this.workpermitEditmode = true;
            this.workpermit.WPtype = data.lookupValueName;
            this.workpermit.WPdescription = data.description;
            this.workpermit.lookupValueId = data.lookupValueId;
        }
        else {
            this.natureEditMode = true;
            this.naturework.WPtype = data.lookupValueName;
            this.naturework.WPdescription = data.description;
            this.naturework.lookupValueId = data.lookupValueId;
        }
    }
    cancelEditMode(type) {
        if (type == 'work') {
            this.workpermitEditmode = false;
            this.workpermit.WPtype = '';
            this.workpermit.WPdescription = '';
            this.workpermit.lookupValueId = '';
        }
        else {
            this.natureEditMode = false;
            this.naturework.WPtype = '';
            this.naturework.WPdescription = '';
            this.naturework.lookupValueId = '';
        }
    }
    submitCreateWorkPermitTypeForm() {
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
        let params = {
            lookupvalue: workpermittypes
        };
        this.lookupService.addLookupValue(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("WorkPermit Type added successfully");
                this.getWorktype();
            }
        });
    }
    submitCreateNatureofWorkForm() {
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
        let params = {
            lookupvalue: workpermittypes
        };
        this.lookupService.addLookupValue(params).subscribe((res) => {
            if (res.message) {
                this.sharedService.setAlertMessage("WorkPermit Nature of work added successfully");
                this.getNaturework();
            }
        });
    }
    updateCreateWorkPermitTypeForm() {
        let workpermittypes = {
            "lookupValueId": this.workpermit.lookupValueId,
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
        let params = {
            lookupvalue: workpermittypes
        };
        this.lookupService.updateLookupValue(params).subscribe((res) => {
            if (res.message) {
                this.workpermitEditmode = false;
                this.sharedService.setAlertMessage("WorkPermit Type added successfully");
                this.getWorktype();
            }
        });
    }
    updateCreateNatureofWorkForm() {
        let workpermittypes = {
            "lookupValueId": this.naturework.lookupValueId,
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
        let params = {
            lookupvalue: workpermittypes
        };
        this.lookupService.updateLookupValue(params).subscribe((res) => {
            if (res.message) {
                this.natureEditMode = false;
                this.sharedService.setAlertMessage("WorkPermit Nature of work added successfully");
                this.getNaturework();
            }
        });
    }
    deleteWork(data, type) {
        let params = {
            lookupValueId: data.lookupValueId,
            updateUserId: parseInt(this.cookieService.get('userId'))
        };
        this.lookupService.deleteLookupvalue(params).subscribe((res) => {
            if (res) {
                if (type == 'work') {
                    this.getWorktype();
                }
                else {
                    this.getNaturework();
                }
            }
        });
    }
    ngOnInit() {
        this.workpermit = {};
        this.naturework = {};
        this.getWorktype();
        this.getNaturework();
        this.selectedTab = 'WorkPermit'; //Default selected tab
    }
};
WorkpermitSetupComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
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
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], WorkpermitSetupComponent);



/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".input-box textarea {\n  height: auto;\n}\n\n.space-field {\n  margin-top: 114px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvd29yay1wZXJtaXQvY29tcG9uZW50cy93b3JrcGVybWl0LXN0YXR1cy93b3JrcGVybWl0LXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL3dvcmstcGVybWl0L2NvbXBvbmVudHMvd29ya3Blcm1pdC1zdGF0dXMvd29ya3Blcm1pdC1zdGF0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0FDQVI7O0FESUE7RUFDSSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYW1zL3dvcmstcGVybWl0L2NvbXBvbmVudHMvd29ya3Blcm1pdC1zdGF0dXMvd29ya3Blcm1pdC1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtYm94IHtcbiAgICB0ZXh0YXJlYSB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG59XG5cbi5zcGFjZS1maWVsZHtcbiAgICBtYXJnaW4tdG9wOiAxMTRweDtcbn0iLCIuaW5wdXQtYm94IHRleHRhcmVhIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc3BhY2UtZmllbGQge1xuICBtYXJnaW4tdG9wOiAxMTRweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: WorkpermitStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkpermitStatusComponent", function() { return WorkpermitStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/WorkPermit */ "./src/app/api/controllers/WorkPermit.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");






let WorkpermitStatusComponent = class WorkpermitStatusComponent {
    constructor(dialogRef, data, lookupService, workPermitService, cookieService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.lookupService = lookupService;
        this.workPermitService = workPermitService;
        this.cookieService = cookieService;
    }
    onConfirm() {
        let params = {
            workPermit: {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                workPermitStatusId: this.status,
                workPermitId: this.data.workpermitId,
                insertedBy: parseInt(this.cookieService.get('userId')),
                insertedOn: new Date().toISOString(),
                isApproved: true,
                approvedBy: parseInt(this.cookieService.get('userId')),
                approvedOn: new Date().toISOString(),
            }
        };
        this.workPermitService.updateWorkPermitStatusById(params).subscribe((data) => {
            this.dialogRef.close(true);
        });
    }
    onDismiss() {
        // Close the dialog, return false
        this.dialogRef.close(false);
    }
    ngOnInit() {
        let statusParams = {
            LookupTypeId: 91
        };
        this.lookupService.getLookupValueByLookupTypeId(statusParams).subscribe((res) => {
            this.statusTypeData = res;
            this.status = this.data.statusId;
        });
    }
};
WorkpermitStatusComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_4__["WorkPermitService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
WorkpermitStatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workpermit-status',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./workpermit-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./workpermit-status.component.scss */ "./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_api_controllers_WorkPermit__WEBPACK_IMPORTED_MODULE_4__["WorkPermitService"],
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
], WorkpermitStatusComponent);



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
/* harmony import */ var _components_workpermit_approved_list_workpermit_approved_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/workpermit-approved-list/workpermit-approved-list.component */ "./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.ts");







const routes = [
    { path: '', redirectTo: 'setup', pathMatch: 'full' },
    { path: 'setup', component: _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_3__["WorkpermitSetupComponent"] },
    { path: 'approval', component: _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_4__["WorkpermitApprovalComponent"] },
    { path: 'create', component: _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_5__["WorkpermitCreateComponent"] },
    { path: 'approved', component: _components_workpermit_approved_list_workpermit_approved_list_component__WEBPACK_IMPORTED_MODULE_6__["WorkpermitApprovedListComponent"] },
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
/* harmony import */ var _components_workpermit_status_workpermit_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/workpermit-status/workpermit-status.component */ "./src/app/ams/work-permit/components/workpermit-status/workpermit-status.component.ts");
/* harmony import */ var _components_workpermit_approved_list_workpermit_approved_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/workpermit-approved-list/workpermit-approved-list.component */ "./src/app/ams/work-permit/components/workpermit-approved-list/workpermit-approved-list.component.ts");













let WorkPermitModule = class WorkPermitModule {
};
WorkPermitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_work_permit_component__WEBPACK_IMPORTED_MODULE_6__["WorkPermitComponent"], _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_7__["WorkpermitSetupComponent"], _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_8__["WorkpermitApprovalComponent"], _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_9__["WorkpermitCreateComponent"], _components_workpermit_setting_workpermit_setting_component__WEBPACK_IMPORTED_MODULE_10__["WorkpermitSettingComponent"], _components_workpermit_status_workpermit_status_component__WEBPACK_IMPORTED_MODULE_11__["WorkpermitStatusComponent"], _components_workpermit_approved_list_workpermit_approved_list_component__WEBPACK_IMPORTED_MODULE_12__["WorkpermitApprovedListComponent"]],
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