function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-permit-work-permit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsWorkPermitComponentsWorkpermitApprovalWorkpermitApprovalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"workpermit-approvalview-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"text-right\" *ngIf=\"isDataLoaded\">\n\t\t<i-feather class=\"icon success-indicator\" name=\"check-circle\"></i-feather>&nbsp; Approve\n\t</div>\n\t<div class=\"card card-table\">\n\t\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>WorkPermit Approval List <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"wpData\" >\n    \t\t\t</li>\n    \t\t\t<!-- <li class=\"list-inline-item\">\n    \t\t\t\t<a class=\"btn l-blue mt_5\">\n    \t\t\t\t\t<i-feather class=\"icon print\" name=\"printer\"></i-feather>\n    \t\t\t\t\t<span>Print</span>\n    \t\t\t\t</a>\n    \t\t\t</li> -->\n    \t\t\t<li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/work-permit/settings/create\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Work Permit</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<app-filter-box *ngIf=\"isDataLoaded\" [totalItems]=\"totalFilterItems\" class=\"d-sm-block d-none\"></app-filter-box>\n\n  \t\t<div class=\"card-body p-0\">\n  \t\t\t\n  \t\t\t<table class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th (click)=\"sortUnitData('workPermitId')\">WP ID<span [ngClass]=\"getFieldOrderBy('workPermitId')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('apartmentBlockNumber')\">Block <span [ngClass]=\"getFieldOrderBy('apartmentBlockNumber')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('apartmentBlockUnitNumber')\">Unit <span [ngClass]=\"getFieldOrderBy('apartmentBlockUnitNumber')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('endorsedBy')\">Endorsed By<span [ngClass]=\"getFieldOrderBy('endorsedBy')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('workPermitType')\">WP Type <span [ngClass]=\"getFieldOrderBy('workPermitType')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('natureOfWork')\">Nature of Work <span [ngClass]=\"getFieldOrderBy('natureOfWork')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('startDate')\">Start Date <span [ngClass]=\"getFieldOrderBy('startDate')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('endDate')\">End Date <span [ngClass]=\"getFieldOrderBy('endDate')\"></span></th>\n\t\t\t\t      <th (click)=\"sortUnitData('noOfPersonnels')\">Personnels <span [ngClass]=\"getFieldOrderBy('noOfPersonnels')\"></span></th>\n\t\t\t\t      <th>Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let wp of workPermitListData | sort : unitFieldType: unitOrder \n\t\t\t\t    | simpleSearch: wpData | slice:ItemStartIndex:ItemEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{wp.workPermitId}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.apartmentBlockNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.apartmentBlockUnitNumber}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.endorsedBy}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.workPermitType}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.natureOfWork}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.startDate | date:'dd-MM-yy'}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.endDate | date:'dd-MM-yy'}}</td>\n\t\t\t\t      <td class=\"grey\">{{wp.noOfPersonnels}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a><i-feather class=\"icon view\" name=\"eye\"></i-feather>\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t<i-feather class=\"icon approve\" name=\"check-circle\"></i-feather>\n\t\t\t\t\t\t</a>&nbsp;\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n  \t\t</div>\n\n\t</div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsWorkPermitComponentsWorkpermitCreateWorkpermitCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"workpermit-Create-wrapper\">\n\t\n\t\t<div class=\"card clear\">\n            <div class=\"card-header\">\n                <div class=\"float-left\">\n                    <h5>\n                        <span>Create WorkPermit</span>\n                    </h5>\n                </div>\n                <div class=\"float-right\">\n                    <a href=\"javascript:void(0)\" \n                    routerLink=\"/ams/work-permit/settings/approval\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"{exact:true}\">\n                        <i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n                    </a>\n                </div>\n            </div>\n\t\t\t\n\t\t\t<div class=\"card-body\">\n        \n      <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\t\t\t<app-loader *ngIf=\"isWorkpermitSubmitted\"></app-loader>\n\t\t\t<ng-container *ngIf=\"!isWorkpermitSubmitted\">\n\n        <form #createWorkPermitForm = \"ngForm\" name=\"createWorkPermitForm\" (ngSubmit)=\"submitCreateWorkPermitForm(addWorkPermitForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                <label>Name of Resident*</label>\n                <select \n                    name=\"WPApartment\" \n                    id=\"Apartment\" \n                    class=\"form-control\"\n                    [(ngModel)]=\"workpermit.WPApartment\" required>\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let apartment of allApartments;\" [value]=\"apartment.apartmentId\">{{apartment.apartmentName}}</option>\n                </select>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"input-box\">\n            <label>Tower*</label>\n            <select \n                name=\"WPTower\" \n                id=\"Tower\" \n                class=\"form-control\"\n                [(ngModel)]=\"workpermit.WPTower\" required>\n                <option value=\"\" disabled selected hidden>Select</option>\n                <option *ngFor=\"let tower of allTowers;\" [value]=\"tower.apartmentBlockUnitId\">{{tower.apartmentBlockNumber}}</option>\n            </select>\n        </div>\n        </div>\n        <div class=\"col-sm-4\">\n          <div class=\"input-box\">\n            <label>Unit User*</label>\n            <select \n                name=\"WPUnitUser\" \n                id=\"UnitUser\" \n                class=\"form-control\"\n                [(ngModel)]=\"workpermit.WPUnitUser\" required>\n                <option value=\"\" disabled selected hidden>Select</option>\n                <option *ngFor=\"let user of allUsers;\" [value]=\"user.userId\">{{user.firstName}}</option>\n            </select>\n        </div>\n        </div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n                <label>Name of Vendor/Contractor*</label>\n                <select \n                    name=\"WPVendor\" \n                    id=\"vendor\" \n                    class=\"form-control\"\n                    [(ngModel)]=\"workpermit.WPVendor\" required>\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let vendor of allVendors;\" [value]=\"vendor.vendorId\">{{vendor.vendorName}}</option>\n                </select>\n            </div>\n          </div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Name of Person In Charge*</label>\n\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"WPIncharge\" [(ngModel)]=\"workpermit.WPIncharge\" required>\n                \t\t</div>\n                    </div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label>Contact Number*</label>\n\t\t                    <input type=\"number\" class=\"form-control\" placeholder=\"Enter\" name=\"WPContact\" [(ngModel)]=\"workpermit.WPContact\" required>\n                \t\t</div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"input-box\">\n                        <label>WorkPermit Type*</label>\n                        <!-- <angular2-multiselect \n                          name=\"WPNatureWork\"\n                          [data]=\"itemList\" \n                          [(ngModel)]=\"selectedItems\" \n                          [settings]=\"settings\" \n                          (onSelect)=\"onItemSelect($event)\"\n                          (onDeSelect)=\"OnItemDeSelect($event)\" \n                          (onSelectAll)=\"onSelectAll($event)\" \n                          (onDeSelectAll)=\"onDeSelectAll($event)\">\n                        </angular2-multiselect> -->\n                        <select \n                          name=\"WPPermitType\" \n                          id=\"PermitType\" \n                          class=\"form-control\"\n                          [(ngModel)]=\"workpermit.WPPermitType\" required>\n                          <option value=\"\" disabled selected hidden>Select</option>\n                          <option *ngFor=\"let worktype of allWorkType;\" [value]=\"worktype.lookupValueId\">{{worktype.lookupValueName}}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                      <div class=\"input-box\">\n                        <label>Nature of work*</label>\n                        <select \n                          name=\"WPNatureWork\" \n                          id=\"NatureWork\" \n                          class=\"form-control\"\n                          [(ngModel)]=\"workpermit.WPNatureWork\" required>\n                          <option value=\"\" disabled selected hidden>Select</option>\n                          <option *ngFor=\"let natureworktype of allNatureWorkType;\" [value]=\"natureworktype.lookupValueId\">{{natureworktype.lookupValueName}}</option>\n                        </select>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-4\"></div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"input-box\">\n                            <label>Start Date</label>\n                            <input class=\"form-control\" name=\"WPStartdate\" [owlDateTime]=\"WPStartdate\" [owlDateTimeTrigger]=\"WPStartdate\" placeholder=\"Date\" [(ngModel)]=\"workpermit.WPStartdate\" required>\n                            <owl-date-time #WPStartdate [pickerType]=\"'calendar'\"></owl-date-time>\n                            <div class=\"date-btn\">\n                              <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"input-box\">\n                            <label>End Date</label>\n                            <input class=\"form-control\" name=\"WPEnddate\" [owlDateTime]=\"WPEnddate\" [owlDateTimeTrigger]=\"WPEnddate\" placeholder=\"Date\" [(ngModel)]=\"workpermit.WPEnddate\" required>\n                            <owl-date-time #WPEnddate [pickerType]=\"'calendar'\"></owl-date-time>\n                            <div class=\"date-btn\">\n                                    <i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"input-box\">\n                            <label>Start Time</label>\n                            <input class=\"form-control\" name=\"WPStarttime\" [owlDateTime]=\"WPStarttime\" [owlDateTimeTrigger]=\"WPStarttime\" placeholder=\"Time\" [(ngModel)]=\"workpermit.WPStarttime\" required>\n                            <owl-date-time #WPStarttime [pickerType]=\"'timer'\" [hour12Timer]=\"true\"></owl-date-time>\n                            <div class=\"date-btn\">\n                                    <i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <div class=\"input-box\">\n                            <label>End Time</label>\n                            <input class=\"form-control\" name=\"WPEndtime\" [owlDateTime]=\"WPEndtime\" [owlDateTimeTrigger]=\"WPEndtime\" placeholder=\"Time\" [(ngModel)]=\"workpermit.WPEndtime\" required>\n                            <owl-date-time #WPEndtime [pickerType]=\"'timer'\" [hour12Timer]=\"true\"></owl-date-time>\n                            <div class=\"date-btn\">\n                                    <i-feather class=\"icon date float-left\" name=\"clock\" width=\"18\"></i-feather>\n                                </div>\n                        </div>\n                    </div>\n\n                    <div class=\"col-sm-6 mb-30\">\n                        <h5><b>List of Workers/Personnels</b></h5>\n                        <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                  <th width=\"35%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"WorkerName\" [(ngModel)]=\"Workers.WorkerName\">\n                                  </th>\n                                  <th width=\"60%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"WorkerDescription\" [(ngModel)]=\"Workers.WorkerDescription\">\n                                  </th>\n                                  <th width=\"5%\" align=\"right\">\n                                    <a class=\"btn lime-green\" (click)=\"addWorkers()\">\n                                    <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                                    </a>\n                                  </th>\n                                </tr>\n                            </thead>\n                        </table>\n                         <!-- workers collapse -->\n                         <div class=\"card clear\" id=\"accordion\">\n                          <div class=\"card-body p-0\">\n                            <ul class=\"list-group tabs clear\">\n                              <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#workersCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Added Workers List &nbsp;<span *ngIf=\"listWorkers.length!=0\">({{listWorkers.length}})</span>\n                              </li>\n                              <div id=\"workersCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                <div class=\"details\">\n                                  <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                                    <thead>\n                                        <tr>\n                                          <th width=\"40%\">Name</th>\n                                          <th width=\"55%\">Description</th>\n                                          <th align=\"right\" width=\"5%\">#</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"listWorkers.length!=0\">\n                                      <tr *ngFor=\"let worker of listWorkers;let i of index;\">\n                                        <td class=\"grey\">{{worker.name}}</td>\n                                        <td class=\"grey\">{{worker.description}}</td>\n                                        <td align=\"right\">\n                                          <a><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                        </td>\n                                      </tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                              </div>\t\n                            </ul>\n                          </div>\n                        </div>\n                        <!-- end workers collapse -->\n                    </div>\n\n                    <div class=\"col-sm-6 mb-30\">\n                        <h5><b>List of Materials</b></h5>\n                        <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                  <th width=\"30%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"MaterialName\" [(ngModel)]=\"Materials.MaterialName\">\n                                  </th>\n                                  <th width=\"15%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Qty\" name=\"MaterialQuantity\" [(ngModel)]=\"Materials.MaterialQuantity\">\n                                  </th>\n                                  <th width=\"50%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"MaterialDescription\" [(ngModel)]=\"Materials.MaterialDescription\">\n                                  </th>\n                                  <th width=\"5%\" align=\"right\">\n                                    <a class=\"btn lime-green\" (click)=\"addMaterials()\">\n                                      <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                                    </a>\n                                  </th>\n                                </tr>\n                            </thead>\n                        </table>\n                        <!-- material collapse -->\n                        <div class=\"card clear\" id=\"accordion\">\n                          <div class=\"card-body p-0\">\n                            <ul class=\"list-group tabs clear\">\n                              <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#materialCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Added Material List &nbsp;<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>\n                              </li>\n                              <div id=\"materialCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                <div class=\"details\">\n                                  <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                                    <thead>\n                                        <tr>\n                                          <th width=\"35%\">Name</th>\n                                          <th width=\"15%\">Qty</th>\n                                          <th width=\"45%\">Description</th>\n                                          <th align=\"right\" width=\"5%\">#</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"listMaterials.length!=0\">\n                                        <tr *ngFor=\"let material of listMaterials;let i of index;\">\n                                          <td class=\"grey\">{{material.name}}</td>\n                                          <td class=\"grey\">{{material.qty}}</td>\n                                          <td class=\"grey\">{{material.description}}</td>\n                                          <td align=\"right\">\n                                            <a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                          </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                              </div>\t\n                            </ul>\n                          </div>\n                        </div>\n                        <!-- end material collapse -->\n                    </div>\n\n                    <div class=\"col-sm-6 mb-30\">\n                        <h5><b>List of Tools</b></h5>\n                        <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                  <th width=\"30%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"ToolName\" [(ngModel)]=\"Tools.ToolName\">\n                                  </th>\n                                  <th width=\"15%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Qty\" name=\"ToolQuantity\" [(ngModel)]=\"Tools.ToolQuantity\">\n                                  </th>\n                                  <th width=\"50%\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Description\" name=\"ToolDescription\" [(ngModel)]=\"Tools.ToolDescription\">\n                                  </th>\n                                  <th width=\"5%\" align=\"right\">\n                                    <a class=\"btn lime-green\" (click)=\"addTools()\">\n                                      <i-feather class=\"icon plus\" name=\"plus\"></i-feather>Add\n                                    </a>\n                                  </th>\n                                </tr>\n                            </thead>\n                        </table>\n                        <!-- tools collapse -->\n                        <div class=\"card clear\" id=\"accordion\">\n                          <div class=\"card-body p-0\">\n                            <ul class=\"list-group tabs clear\">\n                              <li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#toolCollapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                                Added Tools List &nbsp;<span *ngIf=\"listTools.length!=0\">({{listTools.length}})</span>\n                              </li>\n                              <div id=\"toolCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                                <div class=\"details\">\n                                  <table class=\"mini-table\" [ngClass]=\"isMobileView()\">\n                                    <thead>\n                                        <tr>\n                                          <th width=\"35%\">Name</th>\n                                          <th width=\"15%\">Qty</th>\n                                          <th width=\"45%\">Description</th>\n                                          <th align=\"right\" width=\"5%\">#</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody *ngIf=\"listTools.length!=0\">\n                                        <tr *ngFor=\"let tool of listTools;let i of index;\">\n                                          <td class=\"grey\">{{tool.name}}</td>\n                                          <td class=\"grey\">{{tool.qty}}</td>\n                                          <td class=\"grey\">{{tool.description}}</td>\n                                          <td align=\"right\">\n                                            <a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n                                          </td>\n                                        </tr>\n                                    </tbody>\n                                </table>\n                                </div>\n                              </div>\t\n                            </ul>\n                          </div>\n                        </div>\n                        <!-- tools collapse end -->  \n                    </div>\n\n                    <div class=\"col-sm-12 mb-30\">\n                      <h4><b>Terms and Conditions</b></h4>\n                      <h5>1. This permit is valid only on the dates and time mentioned.</h5>\n                      <h5>2. Noisy works - 10 AM to 12 PM. Monday to Friday only.</h5>\n                  </div>\n\n            </div>\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <ul class=\"list-inline\">\n                  <li class=\"list-inline-item\">\n                    <a class=\"btn l-blue mt_5\">\n                      <i-feather class=\"icon print\" name=\"printer\"></i-feather>\n                      <span>Print</span>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n              <div class=\"col-sm-6\">\n                <ul class=\"list-inline float-right mt-4\">\n                  <li class=\"list-inline-item\">\n                    <button class=\"btn blue mr-2\" [disabled]=\"createWorkPermitForm.invalid\">Submit</button>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </form>\n        </ng-container>\n      </div>\n\t\t</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.html":
  /*!***************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.html ***!
    \***************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsWorkPermitComponentsWorkpermitSettingWorkpermitSettingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"general-workpermit-wrapper\">\n\t\n\t<app-nav-pills-tabs [navArray] =\"navArray\"></app-nav-pills-tabs>\n\n\t<div class=\"d-block mt-5\">\n\t\t<div class=\"pt-3\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsWorkPermitComponentsWorkpermitSetupWorkpermitSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"workpermit-setup-wrapper\">\n\t\n\t<div class=\"card clear form-group\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#typeCollapseOne\" aria-expanded=\"true\" aria-controls=\"typecollapseOne\">\n\t\t\t\tCreate WorkPermit Type &nbsp;<!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n\t\t\t</li>\n\t\t\t<div id=\"typeCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n\t\t\t<form #createWorkPermitTypeForm = \"ngForm\" name=\"createWorkPermitTypeForm\" (ngSubmit)=\"submitCreateWorkPermitTypeForm(createWorkPermitTypeForm)\"  novalidate>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"\n\t\t\t\tcol-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>WorkPermit Type*</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"WPType\" [(ngModel)]=\"workpermit.WPtype\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>WorkPermit Description</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Enter\" name=\"WPDescription\" [(ngModel)]=\"workpermit.WPdescription\" required></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"createWorkPermitTypeForm.invalid\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t<table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueId')\">WorkPermit Type ID<span [ngClass]=\"getFieldOrderBy('lookupValueId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">WorkPermit Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('description')\">workPermit Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let worktype of allWorkType | sort : unitFieldType: unitOrder | \n\t\t\t\t    simpleSearch: wpData  | slice:ItemStartIndex:ItemEndIndex; let i = index\">\n\t\t\t\t      <td class=\"name\">{{worktype.lookupValueId}}</td>\n\t\t\t\t      <td class=\"grey\">{{worktype.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{worktype.description}}</td>\n\t\t\t\t      <td class=\"grey\">\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"totalItems\"  \n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t\t\t\t\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n\t<div class=\"card clear\" id=\"accordion\">\n\t\t<div class=\"card-body p-0\">\n\t\t\t<ul class=\"list-group tabs clear\">\n\t\t\t<li class=\"list-group-item\" data-toggle=\"collapse\" data-target=\"#natureCollapseOne\" aria-expanded=\"true\" aria-controls=\"naturecollapseOne\">\n\t\t\t\tCreate Nature of Work &nbsp;<!--<span *ngIf=\"listMaterials.length!=0\">({{listMaterials.length}})</span>-->\n\t\t\t</li>\n\t\t\t<div id=\"natureCollapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n\t\t\t<div class=\"details\">\n\n\t\t\t<form #createNatureofWorkForm = \"ngForm\" name=\"createNatureofWorkForm\" (ngSubmit)=\"submitCreateNatureofWorkForm(createNatureofWorkForm)\"  novalidate>\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Nature of Work*</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"WPNature\" [(ngModel)]=\"naturework.WPtype\" required>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t<textarea class=\"form-control\" placeholder=\"Enter\" name=\"WPDescription\" [(ngModel)]=\"naturework.WPdescription\" required></textarea>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"createNatureofWorkForm.invalid\">Submit</button>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t</form>\n\n\t\t\t<table  class=\"table shrink-table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueId')\">WorkPermit Type ID<span [ngClass]=\"getFieldOrderBy('lookupValueId')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">WorkPermit Type <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('description')\">workPermit Description <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let naturework of allNatureWork | sort : NWunitFieldType: NWunitOrder | simpleSearch: nwData | slice:NWItemStartIndex:NWItemEndIndex ; let i = index\">\n\t\t\t\t      <td class=\"name\">{{naturework.lookupValueId}}</td>\n\t\t\t\t      <td class=\"grey\">{{naturework.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{naturework.description}}</td>\n\t\t\t\t      <td class=\"grey\">\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon edit\" name=\"edit\"></i-feather></a>&nbsp;\n\t\t\t\t\t\t<a class=\"\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t  </td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t\n\t\t\t<app-pagination \n\t\t\t\t[totalItems]=\"NWtotalItems\"  \n\t\t\t\t[ItemStartIndex]=\"NWItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"NWItemEndIndex\"\n\t\t\t\t[itemLimit] = \"NWitemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\t\n\t\t\t</app-pagination>\n\n\t\t\t\t\t\n\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\n</div>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/work-permit.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/work-permit.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsWorkPermitWorkPermitComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.scss":
  /*!***************************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.scss ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitApprovalWorkpermitApprovalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtYXBwcm92YWwvd29ya3Blcm1pdC1hcHByb3ZhbC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: WorkpermitApprovalComponent */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitApprovalWorkpermitApprovalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkpermitApprovalComponent", function () {
      return WorkpermitApprovalComponent;
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


    var _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/work-permit.service */
    "./src/app/api/services/work-permit.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var WorkpermitApprovalComponent =
    /*#__PURE__*/
    function () {
      function WorkpermitApprovalComponent(router, route, lookupService, sharedService, cookieService, workPermit) {
        _classCallCheck(this, WorkpermitApprovalComponent);

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

      _createClass(WorkpermitApprovalComponent, [{
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getWorkPermit();
        }
      }, {
        key: "getWorkPermit",
        value: function getWorkPermit() {
          var _this = this;

          var apartMentID = parseInt(this.cookieService.get('apartmentId'));
          this.workPermit.getWorkPermitsByApartmentId(apartMentID).subscribe(function (res) {
            _this.workPermitListData = res;
            _this.isDataLoaded = true;
            _this.totalItems = _this.workPermitListData.length;

            if (_this.totalItems > _this.itemLimit) {
              _this.ItemEndIndex = _this.itemLimit;
            } else {
              _this.ItemEndIndex = _this.totalItems;
            }
          });
        }
      }]);

      return WorkpermitApprovalComponent;
    }();

    WorkpermitApprovalComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
      }, {
        type: _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"]
      }];
    };

    WorkpermitApprovalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-workpermit-approval',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./workpermit-approval.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./workpermit-approval.component.scss */
      "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"]])], WorkpermitApprovalComponent);
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitCreateWorkpermitCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtY3JlYXRlL3dvcmtwZXJtaXQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: WorkpermitCreateComponent */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitCreateWorkpermitCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkpermitCreateComponent", function () {
      return WorkpermitCreateComponent;
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


    var _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../api/services/work-permit.service */
    "./src/app/api/services/work-permit.service.ts");
    /* harmony import */


    var _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../api/services/apartment.service */
    "./src/app/api/services/apartment.service.ts");
    /* harmony import */


    var _api_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../api/services/user.service */
    "./src/app/api/services/user.service.ts");
    /* harmony import */


    var _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../api/services/vendor.service */
    "./src/app/api/services/vendor.service.ts");
    /* harmony import */


    var _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../api/services/lookup.service */
    "./src/app/api/services/lookup.service.ts");
    /* harmony import */


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
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

    var WorkpermitCreateComponent =
    /*#__PURE__*/
    function () {
      function WorkpermitCreateComponent(router, route, vendor, apartmentService, workPermitService, userService, lookupService, sharedService, cookieService) {
        _classCallCheck(this, WorkpermitCreateComponent);

        this.router = router;
        this.route = route;
        this.vendor = vendor;
        this.apartmentService = apartmentService;
        this.workPermitService = workPermitService;
        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService; //Sub Form

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
        }; //List Sub form

        this.listWorkers = [];
        this.listMaterials = [];
        this.listTools = []; //For Multiselect

        this.itemList = [];
        this.selectedItems = [];
        this.settings = {}; //Extra Parameters

        this.isWorkpermitSubmitted = false;
        this.isError = false;
        this.errorMessage = "";
      }

      _createClass(WorkpermitCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.workpermit = {}; //   this.itemList = [
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
      }, {
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        } //For Multiselect
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

      }, {
        key: "getVendors",
        value: function getVendors() {
          var _this2 = this;

          this.vendor.getAllVendors().subscribe(function (res) {
            _this2.allVendors = res;
          });
        } //Get Apartments List

      }, {
        key: "getApartments",
        value: function getApartments() {
          var _this3 = this;

          this.apartmentService.getAllApartments().subscribe(function (res) {
            _this3.allApartments = res;
          });
        } //Get Towers List

      }, {
        key: "getTowers",
        value: function getTowers() {
          var _this4 = this;

          this.apartmentService.getAllApartmentBlockUnits().subscribe(function (res) {
            _this4.allTowers = res;
          });
        } //Get Apartments List

      }, {
        key: "getUnitUsers",
        value: function getUnitUsers() {
          var _this5 = this;

          this.userService.getAllUsers().subscribe(function (res) {
            _this5.allUsers = res;
          });
        } //Get Work Type

      }, {
        key: "getWorktype",
        value: function getWorktype() {
          var _this6 = this;

          this.lookupService.getLookupValueByLookupTypeId(90).subscribe(function (res) {
            _this6.allWorkType = res;
          });
        } //Get Nature work Type

      }, {
        key: "getNatureWorktype",
        value: function getNatureWorktype() {
          var _this7 = this;

          this.lookupService.getLookupValueByLookupTypeId(89).subscribe(function (res) {
            _this7.allNatureWorkType = res;
          });
        } //Add Sub Form
        //Workers

      }, {
        key: "addWorkers",
        value: function addWorkers() {
          var name = this.Workers.WorkerName;
          var description = this.Workers.WorkerDescription;
          this.listWorkers.push({
            name: name,
            description: description
          });
        } //Materials

      }, {
        key: "addMaterials",
        value: function addMaterials() {
          var name = this.Materials.MaterialName;
          var qty = this.Materials.MaterialQuantity;
          var description = this.Materials.MaterialDescription;
          this.listMaterials.push({
            name: name,
            qty: qty,
            description: description
          });
        } //Tools

      }, {
        key: "addTools",
        value: function addTools() {
          var name = this.Tools.ToolName;
          var qty = this.Tools.ToolQuantity;
          var description = this.Tools.ToolDescription;
          this.listTools.push({
            name: name,
            qty: qty,
            description: description
          });
        } //create work permit

      }, {
        key: "submitCreateWorkPermitForm",
        value: function submitCreateWorkPermitForm(form) {
          var _this8 = this;

          this.isWorkpermitSubmitted = true;
          this.isError = false; //add user

          var workPermitDetails = {
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
          }; //add user 

          this.workPermitService.addWorkPermit(workPermitDetails).subscribe(function (res) {
            if (res.message) {
              var workPermitId = res.message;

              if (_this8.listWorkers.length != 0) {
                for (var i = 0; i < _this8.listWorkers.length; i++) {
                  var workpermitworkers = {
                    "workPermitWorkersId": 0,
                    "apartmentId": _this8.workpermit.WPApartment,
                    "workPermitId": workPermitId,
                    "workerName": _this8.listWorkers[i].name,
                    "workDescription": _this8.listWorkers[i].description,
                    "isActive": true,
                    "insertedBy": parseInt(_this8.cookieService.get('userId')),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": null,
                    "updatedOn": null
                  };

                  _this8.workPermitService.addWorkPermitWorkers(workpermitworkers).subscribe(function (res) {});
                }
              }

              if (_this8.listMaterials.length != 0) {
                for (var i = 0; i < _this8.listMaterials.length; i++) {
                  var workpermitmaterials = {
                    "workPermitMaterialsId": 0,
                    "apartmentId": _this8.workpermit.WPApartment,
                    "workPermitId": workPermitId,
                    "material": _this8.listMaterials[i].name,
                    "quantity": _this8.listMaterials[i].qty,
                    "description": _this8.listMaterials[i].description,
                    "isActive": true,
                    "insertedBy": parseInt(_this8.cookieService.get('userId')),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": null,
                    "updatedOn": null
                  };

                  _this8.workPermitService.addWorkPermitMaterials(workpermitmaterials).subscribe(function (res) {});
                }
              }

              if (_this8.listTools.length != 0) {
                for (var i = 0; i < _this8.listTools.length; i++) {
                  var workpermittools = {
                    "workPermitToolsId": 0,
                    "apartmentId": _this8.workpermit.WPApartment,
                    "workPermitId": workPermitId,
                    "tool": _this8.listTools[i].name,
                    "quantity": _this8.listTools[i].qty,
                    "description": _this8.listTools[i].description,
                    "isActive": true,
                    "insertedBy": parseInt(_this8.cookieService.get('userId')),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": null,
                    "updatedOn": null
                  };

                  _this8.workPermitService.addWorkPermitTools(workpermittools).subscribe(function (res) {});
                }
              }

              if (res.message) {
                _this8.sharedService.setAlertMessage("Work Permit added successfully");

                _this8.router.navigate(['/ams/work-permit/settings/approval']);
              }
            } else {
              _this8.isWorkpermitSubmitted = false;
              _this8.isError = true;
              _this8.errorMessage = res.errorMessage;
            }
          }, function (error) {});
        }
      }]);

      return WorkpermitCreateComponent;
    }();

    WorkpermitCreateComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"]
      }, {
        type: _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"]
      }, {
        type: _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"]
      }, {
        type: _api_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]
      }];
    };

    WorkpermitCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-workpermit-create',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./workpermit-create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./workpermit-create.component.scss */
      "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_vendor_service__WEBPACK_IMPORTED_MODULE_6__["VendorService"], _api_services_apartment_service__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"], _api_services_work_permit_service__WEBPACK_IMPORTED_MODULE_3__["WorkPermitService"], _api_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_7__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]])], WorkpermitCreateComponent);
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.scss":
  /*!*************************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.scss ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitSettingWorkpermitSettingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtc2V0dGluZy93b3JrcGVybWl0LXNldHRpbmcuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: WorkpermitSettingComponent */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitSettingWorkpermitSettingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkpermitSettingComponent", function () {
      return WorkpermitSettingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WorkpermitSettingComponent =
    /*#__PURE__*/
    function () {
      function WorkpermitSettingComponent() {
        _classCallCheck(this, WorkpermitSettingComponent);
      }

      _createClass(WorkpermitSettingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navArray = [{
            link: 'setup',
            name: 'Setup'
          }, {
            link: 'approval',
            name: 'Approval List'
          }, {
            link: 'create',
            name: 'Create work Permit'
          }];
        }
      }]);

      return WorkpermitSettingComponent;
    }();

    WorkpermitSettingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-workpermit-setting',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./workpermit-setting.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./workpermit-setting.component.scss */
      "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], WorkpermitSettingComponent);
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitSetupWorkpermitSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC9jb21wb25lbnRzL3dvcmtwZXJtaXQtc2V0dXAvd29ya3Blcm1pdC1zZXR1cC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: WorkpermitSetupComponent */

  /***/
  function srcAppAmsWorkPermitComponentsWorkpermitSetupWorkpermitSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkpermitSetupComponent", function () {
      return WorkpermitSetupComponent;
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

    var WorkpermitSetupComponent =
    /*#__PURE__*/
    function () {
      function WorkpermitSetupComponent(router, route, lookupService, sharedService, cookieService) {
        _classCallCheck(this, WorkpermitSetupComponent);

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
        this.itemLimit = 10; //Nature Pagination

        this.NWunitFieldType = "unitno";
        this.NWunitOrder = true;
        this.NWItemStartIndex = 0;
        this.NWitemLimit = 10;
      }

      _createClass(WorkpermitSetupComponent, [{
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
        key: "isMobileView",
        value: function isMobileView() {
          return window.innerWidth <= 767 ? 'table-responsive' : '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.workpermit = {};
          this.naturework = {};
          this.getWorktype();
          this.getNaturework();
        } //Get Work Type

      }, {
        key: "getWorktype",
        value: function getWorktype() {
          var _this9 = this;

          this.lookupService.getLookupValueByLookupTypeId(90).subscribe(function (res) {
            _this9.allWorkType = res;
            _this9.isDataLoaded = true;
            _this9.totalItems = _this9.allWorkType.length;

            if (_this9.totalItems > _this9.itemLimit) {
              _this9.ItemEndIndex = _this9.itemLimit;
            } else {
              _this9.ItemEndIndex = _this9.totalItems;
            }
          });
        } //Get Work Type

      }, {
        key: "getNaturework",
        value: function getNaturework() {
          var _this10 = this;

          this.lookupService.getLookupValueByLookupTypeId(89).subscribe(function (res) {
            _this10.allNatureWork = res;
            _this10.isDataLoaded = true;
            _this10.NWtotalItems = _this10.allNatureWork.length;

            if (_this10.NWtotalItems > _this10.NWitemLimit) {
              _this10.NWItemEndIndex = _this10.NWitemLimit;
            } else {
              _this10.NWItemEndIndex = _this10.NWtotalItems;
            }
          });
        }
      }, {
        key: "submitCreateWorkPermitTypeForm",
        value: function submitCreateWorkPermitTypeForm(form) {
          var _this11 = this;

          var workpermittypes = {
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
          this.lookupService.addLookupValue(workpermittypes).subscribe(function (res) {
            if (res.message) {
              _this11.sharedService.setAlertMessage("WorkPermit Type added successfully");

              _this11.getWorktype();
            }
          });
        }
      }, {
        key: "submitCreateNatureofWorkForm",
        value: function submitCreateNatureofWorkForm(form) {
          var _this12 = this;

          var workpermittypes = {
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
          this.lookupService.addLookupValue(workpermittypes).subscribe(function (res) {
            if (res.message) {
              _this12.sharedService.setAlertMessage("WorkPermit Nature of work added successfully");

              _this12.getNaturework();
            }
          });
        }
      }]);

      return WorkpermitSetupComponent;
    }();

    WorkpermitSetupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
      }];
    };

    WorkpermitSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-workpermit-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./workpermit-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./workpermit-setup.component.scss */
      "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], WorkpermitSetupComponent);
    /***/
  },

  /***/
  "./src/app/ams/work-permit/work-permit-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/ams/work-permit/work-permit-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: WorkPermitRoutingModule */

  /***/
  function srcAppAmsWorkPermitWorkPermitRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkPermitRoutingModule", function () {
      return WorkPermitRoutingModule;
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


    var _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/workpermit-setup/workpermit-setup.component */
    "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts");
    /* harmony import */


    var _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/workpermit-approval/workpermit-approval.component */
    "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts");
    /* harmony import */


    var _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/workpermit-create/workpermit-create.component */
    "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'setup',
      pathMatch: 'full'
    }, {
      path: 'setup',
      component: _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_3__["WorkpermitSetupComponent"]
    }, {
      path: 'approval',
      component: _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_4__["WorkpermitApprovalComponent"]
    }, {
      path: 'create',
      component: _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_5__["WorkpermitCreateComponent"]
    }, {
      path: '**',
      redirectTo: 'setup',
      pathMatch: 'full'
    }];

    var WorkPermitRoutingModule = function WorkPermitRoutingModule() {
      _classCallCheck(this, WorkPermitRoutingModule);
    };

    WorkPermitRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], WorkPermitRoutingModule);
    /***/
  },

  /***/
  "./src/app/ams/work-permit/work-permit.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/ams/work-permit/work-permit.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsWorkPermitWorkPermitComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy93b3JrLXBlcm1pdC93b3JrLXBlcm1pdC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/work-permit/work-permit.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/ams/work-permit/work-permit.component.ts ***!
    \**********************************************************/

  /*! exports provided: WorkPermitComponent */

  /***/
  function srcAppAmsWorkPermitWorkPermitComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkPermitComponent", function () {
      return WorkPermitComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WorkPermitComponent =
    /*#__PURE__*/
    function () {
      function WorkPermitComponent() {
        _classCallCheck(this, WorkPermitComponent);
      }

      _createClass(WorkPermitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WorkPermitComponent;
    }();

    WorkPermitComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-permit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./work-permit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/work-permit/work-permit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./work-permit.component.scss */
      "./src/app/ams/work-permit/work-permit.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], WorkPermitComponent);
    /***/
  },

  /***/
  "./src/app/ams/work-permit/work-permit.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/ams/work-permit/work-permit.module.ts ***!
    \*******************************************************/

  /*! exports provided: WorkPermitModule */

  /***/
  function srcAppAmsWorkPermitWorkPermitModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkPermitModule", function () {
      return WorkPermitModule;
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


    var _work_permit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./work-permit-routing.module */
    "./src/app/ams/work-permit/work-permit-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-multiselect-dropdown */
    "./node_modules/angular2-multiselect-dropdown/__ivy_ngcc__/fesm2015/angular2-multiselect-dropdown.js");
    /* harmony import */


    var _work_permit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./work-permit.component */
    "./src/app/ams/work-permit/work-permit.component.ts");
    /* harmony import */


    var _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/workpermit-setup/workpermit-setup.component */
    "./src/app/ams/work-permit/components/workpermit-setup/workpermit-setup.component.ts");
    /* harmony import */


    var _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/workpermit-approval/workpermit-approval.component */
    "./src/app/ams/work-permit/components/workpermit-approval/workpermit-approval.component.ts");
    /* harmony import */


    var _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/workpermit-create/workpermit-create.component */
    "./src/app/ams/work-permit/components/workpermit-create/workpermit-create.component.ts");
    /* harmony import */


    var _components_workpermit_setting_workpermit_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/workpermit-setting/workpermit-setting.component */
    "./src/app/ams/work-permit/components/workpermit-setting/workpermit-setting.component.ts");

    var WorkPermitModule = function WorkPermitModule() {
      _classCallCheck(this, WorkPermitModule);
    };

    WorkPermitModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_work_permit_component__WEBPACK_IMPORTED_MODULE_6__["WorkPermitComponent"], _components_workpermit_setup_workpermit_setup_component__WEBPACK_IMPORTED_MODULE_7__["WorkpermitSetupComponent"], _components_workpermit_approval_workpermit_approval_component__WEBPACK_IMPORTED_MODULE_8__["WorkpermitApprovalComponent"], _components_workpermit_create_workpermit_create_component__WEBPACK_IMPORTED_MODULE_9__["WorkpermitCreateComponent"], _components_workpermit_setting_workpermit_setting_component__WEBPACK_IMPORTED_MODULE_10__["WorkpermitSettingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _work_permit_routing_module__WEBPACK_IMPORTED_MODULE_3__["WorkPermitRoutingModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["AngularMultiSelectModule"]],
      bootstrap: [_work_permit_component__WEBPACK_IMPORTED_MODULE_6__["WorkPermitComponent"]]
    })], WorkPermitModule);
    /***/
  }
}]);
//# sourceMappingURL=work-permit-work-permit-module-es5.js.map