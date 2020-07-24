(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-helpdesk-helpdesk-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-4\">Helpdesk Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"/ams/helpdesk/open-tickets\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"income-tracker-reports-customer-reports\">\n\n\t<h4 class=\"main-title-mini\">Open Tickets</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\n\t\t\t<form #openTicketReportForm = \"ngForm\" name=\"openTicketReportForm\" (ngSubmit)=\"submitOpenTicketForm(openTicketReportForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select\n\t\t\t\t\t\t        name=\"blockNo\"\n\t\t\t\t\t\t        id=\"blockNo\"\n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockId\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label> Date From</label>\n\t\t                    <input class=\"form-control\" name=\"reportDateFrom\" [owlDateTime]=\"reportDateFrom\" [owlDateTimeTrigger]=\"reportDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.fromDate\">\n\t\t\t\t\t\t\t<owl-date-time #reportDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"reportDateFrom\">\n\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label> Date To</label>\n\t\t                    <input class=\"form-control\" name=\"reportDateTo\" [owlDateTime]=\"reportDateTo\" [owlDateTimeTrigger]=\"reportDateTo\" placeholder=\"Date\" [(ngModel)]=\"report.toDate\">\n\t\t\t\t\t\t\t<owl-date-time #reportDateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"reportDateTo\">\n\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Ticket Status</label>\n\t\t                    <select\n\t\t\t\t\t\t        name=\"tktStatus\"\n\t\t\t\t\t\t        id=\"tktStatus\"\n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.status\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of ticketStatusList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }} </option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Ticket Type</label>\n                        <select\n                    name=\"tktType\"\n                    id=\"tktType\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.type\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of ticketTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }} </option>\n              </select>\n                  </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Assigned Staff</label>\n                        <select\n                    name=\"tktPriority\"\n                    id=\"tktPriority\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.assignedStaff\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of staffDataList\" [value]=\"item.staffId\">{{ item.firstName }} </option>\n              </select>\n                  </div>\n          </div>\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"openTicketReportForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted && report.fromDate && report.toDate\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.fromDate)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.toDate)}}</span> </p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n              <th scope=\"col\" (click)=\"sortUnitData('Block')\">Block<span [ngClass]=\"getFieldOrderBy('Block')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('Date')\">Created Date<span [ngClass]=\"getFieldOrderBy('Date')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Type')\">Type<span [ngClass]=\"getFieldOrderBy('Type')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Status')\">Status<span [ngClass]=\"getFieldOrderBy('Status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Category')\">Category<span [ngClass]=\"getFieldOrderBy('Category')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('User')\">User<span [ngClass]=\"getFieldOrderBy('User')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('Assigned')\">Assigned To<span [ngClass]=\"getFieldOrderBy('Assigned')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of openTicketReport | simpleSearch: reportsData | sort : unitFieldType: unitOrder| slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n              <td class=\"name\">{{report.blockNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.createdOn)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.ticketType}}</td>\n              <td class=\"grey\">{{report.ticketStatus}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.subject}}</td>\n              <td class=\"grey\">{{report.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.staffName}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination\n\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"add-ticket-cateory-wrapper\">\n    <h6 class=\"mb-3 text-center font-weight-bold\" *ngIf=\"data.type == 'common'\">COMMON TICKET CATEGORY</h6>\n    <h6 class=\"mb-3 text-center font-weight-bold\" *ngIf=\"data.type == 'private'\">PRIVATE TICKET CATEGORY</h6>\n    <p class=\"mt-2 mb-2 error\" *ngIf=\"errorMessage?.length > 0\">{{errorMessage}}</p>\n    <form>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <div class=\"input-box\">\n                    <label>Category Name<span class=\"mandatory\">*</span></label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Category Name\" name=\"categoryName\" [(ngModel)]=\"ticketCategoryData.categoryName\" (input)=\"errorMessage=''\" required>\n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"select-box\">\n                    <label>Default Supervisor</label>\n                    <angular2-multiselect [data]=\"staffsList.dropdownList\" name=\"staffsdropdown\" [(ngModel)]=\"staffsList.selectedItems\" \n                    (onSelect)=\"isExistUser()\" [settings]=\"staffsdropdownSettings\">\n                    </angular2-multiselect>\n                </div> \n            </div>\n            <div class=\"col-sm-12 mb-5\">\n                <h6 class=\"font-weight-bold heading-bg-color pt-3 pb-3 pl-1\">Esclation Setup (Optional)</h6>\n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"input-box\">\n                    <label class=\"mr-4\">Auto Esclate to Level 1 After</label>\n                    <input type=\"text\" class=\"form-control d-inline-block w-40\" placeholder=\"Days\" name=\"escdayone\" [(ngModel)]=\"ticketCategoryData.escalationDaysOne\">\n                    <label class=\"ml-4\">Days</label>\n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"input-box\">\n                    <label>Select Level-1 Manager</label>\n                    <angular2-multiselect [data]=\"staffsFirstList.dropdownList\" name=\"staffsdropdownOne\" [(ngModel)]=\"staffsFirstList.selectedItems\" \n                        (onSelect)=\"isExistUser()\" [settings]=\"staffsdropdownSettings\">\n                    </angular2-multiselect>\n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"input-box\">\n                    <label class=\"mr-4\">Auto Esclate to Level 2 After</label>\n                    <input type=\"text\" class=\"form-control d-inline-block w-40\" placeholder=\"Days\" name=\"escdaytwo\" [(ngModel)]=\"ticketCategoryData.escalationDaysTwo\">\n                    <label class=\"ml-4\">Days</label>\n                </div>\n            </div>\n            <div class=\"col-sm-12\">\n                <div class=\"input-box\">\n                    <label>Select Level-2 Manager</label>\n                    <angular2-multiselect [data]=\"staffsSecondList.dropdownList\" name=\"staffsdropdownTwo\" [(ngModel)]=\"staffsSecondList.selectedItems\"\n                        (onSelect)=\"isExistUser()\"  [settings]=\"staffsdropdownSettings\">\n                    </angular2-multiselect>\n                </div>\n            </div>\n        </div>\n        <div class=\"row btn-wrapper\">\n            <div class=\"col-sm-12 text-right\">\n                <a href=\"javascript:void(0)\" class=\"btn blue mr-3\" *ngIf=\"data.mode == 'create'\" [disabled]=\"errorMessage?.length > 0\" (click)=\"createCategory()\">Submit</a>\n                <a href=\"javascript:void(0)\" class=\"btn blue mr-3\" *ngIf=\"data.mode == 'edit'\" [disabled]=\"errorMessage?.length > 0\" (click)=\"updateCategory()\">Update</a>\n                <a href=\"javascript:void(0)\" class=\"btn trans-white\" (click)=\"onDismiss()\">Cancel</a>\n            </div>\n        </div>\n    </form>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupCommonCategoryCommonCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"common-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Common Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto d-none d-md-block mr-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"commonFilter\"  (ngModelChange)=\"commonSearch()\">\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">Add Common Ticket Category</button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"commonListData\"\n                [columns]=\"commonColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #commondatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n        ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html":
    /*!*************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html ***!
      \*************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"helpdesk-edit-staff-wrapper\">\n\t\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Edit Staff</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isStaffSubmitted && !isStaffAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isStaffSubmitted && !isStaffAdded\">\n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitStaffForm(addStaffForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Category*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"CategoryType\" \n\t\t\t\t\t\t\t        id=\"CategoryType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"staff.category\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isStaffAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\">Staff added successfully!</h5>\n\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html":
    /*!************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html ***!
      \************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"helpdesk-setup-wrapper\">  \n\t<div class=\"main\">\n\t\t<h4 class=\"mb-4\">Settings</h4>\n\t\t<!-- Tips -->\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<mat-accordion>\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>Tips</mat-panel-title>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t<div class=\"text-hint\">\n\t\t\t\t\t\t\t<p>Tips :  You have two types of Ticket Category to setup.</p>\n\t\t\t\t\t\t\t<p>Common category refer to the issues related to condo which is at common to all units (For Example : Swimming pool not clean)</p>\n\t\t\t\t\t\t\t<p>Private category refer to the issues inside  the units ( For Example : Plumbing inside the Condo)</p>\n\t\t\t\t\t\t\t<p class=\"mt-4\">We have some standard Common Categories created for you, you can assign a supervisor and assign escalation if you required.</p>\n\t\t\t\t\t\t\t<p>If you have supervisor assigned to a Category , tickets will get assigned to Supervisor automatically. Supervisor will have to re-assign the ticket to Staff.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t</div>\n\t\t<div class=\"bg-card shadow p-0\">\n\t\t\t<nav mat-tab-nav-bar>\n\t\t\t\t<a mat-tab-link *ngFor=\"let link of navArray\" [routerLink]=\"link.link\" \n\t\t\t\t\trouterLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\n\t\t\t\t{{link.name}}\n\t\t\t\t</a>\n\t\t\t</nav>\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html":
    /*!*******************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskSetupPrivateCategoryPrivateCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"private-category-wrapper\">\n    <!-- Loader -->\n    <app-loader *ngIf=\"isDataLoaded\"></app-loader>\n    <!-- Table -->\n    <condo-card *ngIf=\"!isDataLoaded\">\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Private Category</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto d-none d-md-block mr-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"privateFilter\"  (ngModelChange)=\"privateSearch()\">\n                </div>\n                <div class=\"mr-3\">\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n                <div>\n                    <button mat-flat-button [color]=\"'primary'\" (click)=\"addTicket('create','')\">Add Private Ticket Category</button>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                [theme]=\"'material'\"\n                [width]=\"'100%'\"\n                [rowsheight]=\"48\"\n                [autoheight]=\"true\"\n                [pageable]=\"true\"\n                [filterable]=\"true\"\n                [sortable]=\"true\"\n                [source]=\"privateListData\"\n                [columns]=\"privateColumns\"\n                [columnsresize]=\"true\"\n                [enablehover]=\"false\"\n                #privatedatagrid>\n            </jqxGrid> \n        </div>\n    </condo-card>\n</div>\n    ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"helpdesk-unassigned-wrapper\">\n\t<div class=\"main\">\n\t\t<!-- Loader -->\n\t\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\t\t<!-- Indicator -->\n\t\t<div class=\"d-flex justify-content-end\">\n\t\t\t<ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/common-ticket-icon.svg\"><span>Common</span></li>\n\t\t\t\t<li class=\"list-inline-item\"><img class=\"mb-1 mr-1\" width=\"17\" src=\"assets/images/private-ticket-icon.svg\"><span>Private</span></li>\n\t\t\t</ul>\n\t\t\n\t\t\t<ul class=\"legends ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-red-900\"></span><span>High</span></li>\n\t\t\t\t<li class=\"list-inline-item\"><span class=\"dots bg-orange-900\"></span>Medium</li>\n\t\t\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots bg-green-900\"></span>Low</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<!-- Table -->\n\t\t<condo-card *ngIf=\"isTicketDataLoaded\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>Unassigned Tickets</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\" (ngModelChange)=\"onGlSearchFilter()\" >\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid\n\t\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t[pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\"\n\t\t\t\t\t[sortable]=\"true\"\n\t\t\t\t\t[source]=\"ticketListData\"\n\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t#datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n</div>\n\t\t\n\t\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"helpdesk-create-ticket-wrapper\">\n\t\n\t<ng-container *ngFor=\"let ticket of ticketArray; let i = index\">\n\t\t<app-add-ticket [index]=\"i\" [array]=\"ticketArray\" (outputParams) = \"getTicketArray($event)\"></app-add-ticket>\n\t</ng-container>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsHelpdeskHelpdeskComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9oZWxwZGVzay1yZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: HelpdeskReportsComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

      var HelpdeskReportsComponent = /*#__PURE__*/function () {
        function HelpdeskReportsComponent(lookupService, cookieService) {
          _classCallCheck(this, HelpdeskReportsComponent);

          this.lookupService = lookupService;
          this.cookieService = cookieService;
          this.isDataLoaded = false;
        }

        _createClass(HelpdeskReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var details = {
              ApartmentId: parseInt(this.cookieService.get('apartmentId')),
              LookupTypeId: 87,
              MenuName: 'HelpdeskTracker'
            };
            this.reportDataList = [{
              lookupValueName: 'List of Open tickets',
              description: 'Gives the list of open tickets in the condo',
              type: 'customer'
            }];
            this.isDataLoaded = true; // this.lookupService.getLookupValuesByApartmentIdLookupTypeIdMenuName(details).subscribe((res:any) => {
            //
            //   this.reportDataList = res;
            //
            //   this.isDataLoaded = true;
            //
            // })
          }
        }]);

        return HelpdeskReportsComponent;
      }();

      HelpdeskReportsComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
        }];
      };

      HelpdeskReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-reports',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-reports.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-reports.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], HelpdeskReportsComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss":
    /*!*************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stcmVwb3J0cy9vcGVuLXRpY2tldHMtcmVwb3J0L29wZW4tdGlja2V0cy1yZXBvcnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: OpenTicketsReportComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OpenTicketsReportComponent", function () {
        return OpenTicketsReportComponent;
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


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

      var OpenTicketsReportComponent = /*#__PURE__*/function () {
        function OpenTicketsReportComponent(apartmentService, sharedService, staffService, ticketService, lookupService, cookieService) {
          _classCallCheck(this, OpenTicketsReportComponent);

          this.apartmentService = apartmentService;
          this.sharedService = sharedService;
          this.staffService = staffService;
          this.ticketService = ticketService;
          this.lookupService = lookupService;
          this.cookieService = cookieService;
          this.isBlockSelected = false;
          this.isUnitSelected = false;
          this.ItemStartIndex = 0;
          this.itemLimit = 8;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.isReportSubmitted = true;
          this.isDataLoaded = true;
          this.ticketTypeParams = {
            LookupTypeId: 7
          };
          this.priortyParams = {
            LookupTypeId: 9
          };
          this.statusParams = {
            LookupTypeId: 14
          };
          this.apartmentParams = {
            apartmentId: parseInt(this.cookieService.get('apartmentId'))
          };
        }

        _createClass(OpenTicketsReportComponent, [{
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
          key: "getDate",
          value: function getDate(date) {
            if (date) {
              return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
            }
          }
        }, {
          key: "getType",
          value: function getType(type_id) {
            var type = this.ticketTypeList.find(function (x) {
              return x.lookupValueId === type_id;
            });

            if (type) {
              return type.lookupValueName;
            }
          }
        }, {
          key: "getDateFormat",
          value: function getDateFormat(date) {
            if (date) {
              return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD");
            }
          }
        }, {
          key: "getTimeFormat",
          value: function getTimeFormat(dateTime) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(dateTime).format("YYYY-MM-DD HH:mm");
          }
        }, {
          key: "submitOpenTicketForm",
          value: function submitOpenTicketForm(form) {
            var _this = this;

            this.isReportSubmitted = true;
            this.isDataLoaded = false;
            this.ItemStartIndex = 0;
            var details = {
              ApartmentID: parseInt(this.cookieService.get('apartmentId')),
              ApartmentBlockID: parseInt(this.report.apartmentBlockId),
              StartDate: this.getDateFormat(this.report.fromDate),
              EndDate: this.getDateFormat(this.report.toDate),
              TicketStatus: parseInt(this.report.status),
              TicketType: parseInt(this.report.type),
              AssignedToStaffId: parseInt(this.report.assignedStaff)
            };
            this.ticketService.getReportsForListofOpenCloseTicketsMultiFilter(details).subscribe(function (res) {
              _this.openTicketReport = res;
              _this.totalItems = _this.openTicketReport.length;

              if (_this.totalItems > _this.itemLimit) {
                _this.ItemEndIndex = _this.itemLimit;
              } else {
                _this.ItemEndIndex = _this.totalItems;
              }

              _this.isDataLoaded = true;
              _this.isReportSubmitted = false;
            }, function (error) {});
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.report = {};
            this.report.apartmentBlockId = "";
            this.report.apartmentBlockUnitId = "";
            this.apartmentService.getApartmentBlockByApartmentId(this.apartmentParams).subscribe(function (res) {
              _this2.blockData = res;
            });
            this.lookupService.getLookupValueByLookupTypeId(this.ticketTypeParams).subscribe(function (res) {
              _this2.ticketTypeList = res;
            });
            this.lookupService.getLookupValueByLookupTypeId(this.statusParams).subscribe(function (res) {
              _this2.ticketStatusList = res;
            });
            this.staffService.getAllStaffsByApartmentId(this.apartmentParams).subscribe(function (res) {
              _this2.staffDataList = res;

              _this2.staffDataList.sort(function (a, b) {
                return a.firstName.localeCompare(b.firstName);
              });
            });
            this.lookupService.getLookupValueByLookupTypeId(this.priortyParams).subscribe(function (res) {
              _this2.ticketPriortyList = res;
            }, function (error) {});
          }
        }]);

        return OpenTicketsReportComponent;
      }();

      OpenTicketsReportComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
        }];
      };

      OpenTicketsReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-open-tickets-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./open-tickets-report.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./open-tickets-report.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], OpenTicketsReportComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvYWRkLXRpY2tldC1jYXRlZ29yeS9hZGQtdGlja2V0LWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: AddTicketCategoryComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupAddTicketCategoryAddTicketCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddTicketCategoryComponent", function () {
        return AddTicketCategoryComponent;
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


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");

      var AddTicketCategoryComponent = /*#__PURE__*/function () {
        function AddTicketCategoryComponent(dialogRef, staffService, cookieService, lookupService, ticketService, sharedService, data) {
          _classCallCheck(this, AddTicketCategoryComponent);

          this.dialogRef = dialogRef;
          this.staffService = staffService;
          this.cookieService = cookieService;
          this.lookupService = lookupService;
          this.ticketService = ticketService;
          this.sharedService = sharedService;
          this.data = data;
          this.ticketCategoryData = {};
          this.staffsdropdownSettings = {};
          this.staffsList = {
            "dropdownList": [],
            "selectedItems": []
          };
          this.staffsFirstList = {
            "dropdownList": [],
            "selectedItems": []
          };
          this.staffsSecondList = {
            "dropdownList": [],
            "selectedItems": []
          };
          this.editData = {};
        }

        _createClass(AddTicketCategoryComponent, [{
          key: "onDismiss",
          value: function onDismiss() {
            this.dialogRef.close(false);
          }
        }, {
          key: "isExistUser",
          value: function isExistUser() {
            var selectedUser = [];
            this.errorMessage = "";

            if (this.staffsList.selectedItems.length > 0) {
              selectedUser.push(this.staffsList.selectedItems[0].userId);
            }

            if (this.staffsFirstList.selectedItems.length > 0) {
              selectedUser.push(this.staffsFirstList.selectedItems[0].userId);
            }

            if (this.staffsSecondList.selectedItems.length > 0) {
              selectedUser.push(this.staffsSecondList.selectedItems[0].userId);
            }

            for (var i = 0; i < selectedUser.length; i++) {
              if (this.errorMessage == "Enter Different Staff/Manager") break;else {
                for (var j = 0; j < selectedUser.length; j++) {
                  if (i != j && selectedUser[i] == selectedUser[j]) {
                    this.errorMessage = "Enter Different Staff/Manager";
                    break;
                  }
                }
              }
            }
          }
        }, {
          key: "createCategory",
          value: function createCategory() {
            var _this3 = this;

            var entity = {
              description: this.ticketCategoryData.categoryName,
              lookupTypeId: this.data.type == 'private' ? 16 : 17,
              lookupValueName: this.ticketCategoryData.categoryName,
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              insertedBy: parseInt(this.cookieService.get('userId')),
              insertedOn: new Date().toISOString(),
              isActive: true,
              updatedBy: 0,
              updatedOn: null
            };
            var lookupvalue = {
              lookupvalue: entity
            };
            this.lookupService.addLookupValue(lookupvalue).subscribe(function (res) {
              if (!isNaN(res.message)) _this3.createEsclation(res.message);else _this3.errorMessage = res.errorMessage;
            });
          }
        }, {
          key: "createEsclation",
          value: function createEsclation(ticketCategoryId) {
            var _this4 = this;

            var addTicket = [];
            var esclator = {
              ticketCategoryId: ticketCategoryId,
              ticketTypeId: this.data.type == 'private' ? 27 : 24,
              isDefault: true,
              isActive: true,
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              insertedBy: parseInt(this.cookieService.get('userId')),
              insertedOn: new Date().toISOString(),
              updatedBy: this.data.mode == 'edit' ? parseInt(this.cookieService.get('userId')) : 0,
              updatedOn: this.data.mode == 'edit' ? new Date().toISOString() : null
            };

            for (var i = 0; i < 3; i++) {
              if (i == 0) {
                var esclatorMain = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerId : 0,
                  userId: this.staffsList.selectedItems.length > 0 ? this.staffsList.selectedItems[0].userId : null,
                  escalationLevelId: 0,
                  escalationDays: 0
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), esclatorMain));
              } else if (i == 1 && this.staffsFirstList.selectedItems.length > 0 && this.ticketCategoryData.escalationDaysOne) {
                var _esclatorMain = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdOne : 0,
                  userId: this.staffsFirstList.selectedItems[0].userId,
                  escalationLevelId: 1,
                  escalationDays: this.ticketCategoryData.escalationDaysOne
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), _esclatorMain));
              } else if (i == 2 && this.staffsSecondList.selectedItems.length && this.ticketCategoryData.escalationDaysTwo) {
                var _esclatorMain2 = {
                  ticketManagerId: this.data.mode == 'edit' ? this.ticketCategoryData.ticketManagerIdTwo : 0,
                  userId: this.staffsSecondList.selectedItems[0].userId,
                  escalationLevelId: 2,
                  escalationDays: this.ticketCategoryData.escalationDaysTwo
                };
                addTicket.push(Object.assign(Object.assign({}, esclator), _esclatorMain2));
              }
            }

            var params = {
              ticketManagers: addTicket
            };
            this.ticketService.addTicketManagerMultiple(params).subscribe(function (res) {
              if (!isNaN(res.message)) _this4.sharedService.setAlertMessage("Created Successfully");else if (res.message) _this4.sharedService.setAlertMessage("Updated Successfully");else _this4.sharedService.setAlertMessage(res.errorMessage);

              _this4.dialogRef.close(true);
            });
          }
        }, {
          key: "updateCategory",
          value: function updateCategory() {
            var _this5 = this;

            if (this.ticketCategoryData.categoryName != this.editData.ticketCategoryName) {
              var entity = {
                lookupValueId: this.editData.ticketCategoryId,
                description: this.ticketCategoryData.categoryName,
                lookupTypeId: this.data.type == 'private' ? 16 : 17,
                lookupValueName: this.ticketCategoryData.categoryName,
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                insertedBy: parseInt(this.cookieService.get('userId')),
                insertedOn: new Date().toISOString(),
                isActive: true,
                updatedBy: parseInt(this.cookieService.get('userId')),
                updatedOn: new Date().toISOString()
              };
              var lookupvalue = {
                lookupvalue: entity
              };
              this.lookupService.updateLookupValue(lookupvalue).subscribe(function (res) {
                if (res.message) _this5.createEsclation(_this5.editData.ticketCategoryId);else _this5.errorMessage = res.errorMessage;
              });
            } else {
              this.createEsclation(this.editData.ticketCategoryId);
            }
          }
        }, {
          key: "patchData",
          value: function patchData() {
            var _this6 = this;

            if (this.data.mode == 'edit' && this.data.categoryId) {
              var queryParamBase = {
                apartmentId: parseInt(this.cookieService.get('apartmentId')),
                ticketCategoryId: this.data.categoryId,
                ticketTypeId: this.data.type == 'private' ? 27 : 24
              };
              this.ticketService.getTicketManagerByTicketCategoryId(queryParamBase).subscribe(function (res) {
                _this6.editData = res[0];
                _this6.ticketCategoryData.categoryName = res[0].ticketCategoryName;
                _this6.ticketCategoryData.ticketManagerId = res[0].escalationLevelId0.ticketManagerId;
                _this6.staffsList.selectedItems = _this6.staffsList.dropdownList.filter(function (data) {
                  return data.userId == res[0].escalationLevelId0.userId;
                });

                if (res[0].escalationLevelId1) {
                  _this6.ticketCategoryData.escalationDaysOne = res[0].escalationLevelId1.escalationDays;
                  _this6.ticketCategoryData.ticketManagerIdOne = res[0].escalationLevelId1.ticketManagerId;
                  _this6.staffsFirstList.selectedItems = _this6.staffsFirstList.dropdownList.filter(function (data) {
                    return data.userId == res[0].escalationLevelId1.userId;
                  });
                }

                if (res[0].escalationLevelId2) {
                  _this6.ticketCategoryData.escalationDaysTwo = res[0].escalationLevelId2.escalationDays;
                  _this6.ticketCategoryData.ticketManagerIdTwo = res[0].escalationLevelId2.ticketManagerId;
                  _this6.staffsSecondList.selectedItems = _this6.staffsSecondList.dropdownList.filter(function (data) {
                    return data.userId == res[0].escalationLevelId2.userId;
                  });
                }
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.staffsdropdownSettings = {
              singleSelection: true,
              primaryKey: 'userId',
              labelKey: 'customLabel',
              enableSearchFilter: true,
              enableFilterSelectAll: false,
              autoPosition: false,
              maxHeight: 130
            };
            this.staffService.getAllStaffs().subscribe(function (res) {
              if (res.length) {
                res.forEach(function (ele) {
                  ele.customLabel = "".concat(ele.firstName, " ").concat(ele.lastName, " ").concat(ele.staffCategory_Label);
                });
                _this7.staffsList.dropdownList = res;
                _this7.staffsFirstList.dropdownList = res;
                _this7.staffsSecondList.dropdownList = res; //EditMode

                _this7.patchData();
              }
            }, function (error) {
              console.log(error);
            });
          }
        }]);

        return AddTicketCategoryComponent;
      }();

      AddTicketCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      AddTicketCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-ticket-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-ticket-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-ticket-category.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_3__["StaffService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], Object])], AddTicketCategoryComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupCommonCategoryCommonCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvY29tbW9uLWNhdGVnb3J5L2NvbW1vbi1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: CommonCategoryComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupCommonCategoryCommonCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonCategoryComponent", function () {
        return CommonCategoryComponent;
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


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../add-ticket-category/add-ticket-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");

      var CommonCategoryComponent = /*#__PURE__*/function () {
        function CommonCategoryComponent(router, dialog, ticketService, cookieService) {
          _classCallCheck(this, CommonCategoryComponent);

          this.router = router;
          this.dialog = dialog;
          this.ticketService = ticketService;
          this.cookieService = cookieService;
          this.commonFilter = "";
          this.isDataLoaded = true;
          this.totalItems = 0;
        }

        _createClass(CommonCategoryComponent, [{
          key: "addTicket",
          value: function addTicket(mode, categoryId) {
            var _this8 = this;

            var data = {
              type: 'common',
              mode: mode,
              categoryId: categoryId
            };
            var dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__["AddTicketCategoryComponent"], {
              width: '500px',
              height: 'auto',
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this8.getCommonCategoryList();
              }
            });
          }
        }, {
          key: "onCommonCatEdit",
          value: function onCommonCatEdit(detail) {
            var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
            this.addTicket('edit', dataRecord.ticketCategoryId);
          }
        }, {
          key: "onCommonCatDelete",
          value: function onCommonCatDelete(detail) {
            var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
            var lookupValueId = dataRecord.lookupValueId; // this.modalService.showConfirmModal(lookupValueId);
          }
        }, {
          key: "commonSearch",
          value: function commonSearch() {
            var _this9 = this;

            if (this.commonFilter != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.commonFilter;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.commondatagrid.showfiltercolumnbackground(false);
              this.commonColumns.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this9.commondatagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.commondatagrid.applyfilters();
            } else {
              this.commondatagrid.clearfilters();
            }
          }
        }, {
          key: "getCommonCategoryList",
          value: function getCommonCategoryList() {
            var _this10 = this;

            this.isDataLoaded = true;
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              ticketTypeId: 24
            };
            this.ticketService.getAllTicketManagerByApartmentId(params).subscribe(function (res) {
              if (res.length > 0) {
                _this10.totalItems = res.length;
                var data = {
                  localdata: res,
                  datatype: "array"
                };
                _this10.commonListData = new jqx.dataAdapter(data);
              }

              _this10.isDataLoaded = false;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.getCommonCategoryList();

            var cellsrendererCommon = function cellsrendererCommon(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrendererCommon = function columnrendererCommon(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.commonColumns = [{
              text: 'Category',
              datafield: 'ticketCategoryName',
              width: 200,
              pinned: true,
              cellsrenderer: cellsrendererCommon,
              renderer: columnrendererCommon
            }, {
              text: 'Supervisor',
              datafield: "escalationLevelId0",
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value) value = _this11.commonListData.loadedData[row].escalationLevelId0.userName;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 80,
              renderer: columnrendererCommon
            }, {
              text: 'Level-1',
              datafield: 'escalationLevelId1',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value) value = _this11.commonListData.loadedData[row].escalationLevelId1.userName;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 170,
              renderer: columnrendererCommon
            }, {
              text: 'L1 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (_this11.commonListData.loadedData[row].escalationLevelId1) value = _this11.commonListData.loadedData[row].escalationLevelId1.escalationDays;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 80,
              renderer: columnrendererCommon
            }, {
              text: 'Level-2',
              datafield: 'escalationLevelId2',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value) value = _this11.commonListData.loadedData[row].escalationLevelId2.userName;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 170,
              renderer: columnrendererCommon
            }, {
              text: 'L2 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (_this11.commonListData.loadedData[row].escalationLevelId2) value = _this11.commonListData.loadedData[row].escalationLevelId2.escalationDays;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 170,
              renderer: columnrendererCommon
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrendererCommon
            }];
          }
        }]);

        return CommonCategoryComponent;
      }();

      CommonCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
      };

      CommonCategoryComponent.propDecorators = {
        commondatagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['commondatagrid', {
            "static": false
          }]
        }],
        onCommonCatEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCommonCatEdit', ['$event.detail']]
        }],
        onCommonCatDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCommonCatDelete', ['$event.detail']]
        }]
      };
      CommonCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-common-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./common-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./common-category.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])], CommonCategoryComponent);

      function showConfirmDeleteEventCommon(row) {
        var event = new CustomEvent('onCommonCatDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEventCommon = showConfirmDeleteEventCommon;

      function editCommonCatEvent(row) {
        var event = new CustomEvent('onCommonCatEdit', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editCommonCatEvent = editCommonCatEvent;
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvaGVscGRlc2stZWRpdC1zdGFmZi9oZWxwZGVzay1lZGl0LXN0YWZmLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: HelpdeskEditStaffComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
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


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

      var HelpdeskEditStaffComponent = /*#__PURE__*/function () {
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
            var _this12 = this;

            this.staff = {};
            this.staff.category = "";
            var categoryParams = {
              LookupTypeId: 8
            }; //staff category

            this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
              _this12.staffCategoryData = res;
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
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
        }];
      };

      HelpdeskEditStaffComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-edit-staff',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-edit-staff.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-edit-staff.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], HelpdeskEditStaffComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay1zZXR1cC9oZWxwZGVzay1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXNldHVwL2hlbHBkZXNrLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hbmRhdG9yeXtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: HelpdeskSetupComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
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

      var HelpdeskSetupComponent = /*#__PURE__*/function () {
        function HelpdeskSetupComponent() {
          _classCallCheck(this, HelpdeskSetupComponent);
        }

        _createClass(HelpdeskSetupComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.navArray = [{
              link: 'private-category',
              name: 'Private Category'
            }, {
              link: 'common-category',
              name: 'Common Category'
            }];
          }
        }]);

        return HelpdeskSetupComponent;
      }();

      HelpdeskSetupComponent.ctorParameters = function () {
        return [];
      };

      HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-setup.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-setup.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpdeskSetupComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss":
    /*!*****************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupPrivateCategoryPrivateCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvcHJpdmF0ZS1jYXRlZ29yeS9wcml2YXRlLWNhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts":
    /*!***************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts ***!
      \***************************************************************************************************************/

    /*! exports provided: PrivateCategoryComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskSetupPrivateCategoryPrivateCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivateCategoryComponent", function () {
        return PrivateCategoryComponent;
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


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var _add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../add-ticket-category/add-ticket-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");

      var PrivateCategoryComponent = /*#__PURE__*/function () {
        function PrivateCategoryComponent(router, dialog, ticketService, cookieService) {
          _classCallCheck(this, PrivateCategoryComponent);

          this.router = router;
          this.dialog = dialog;
          this.ticketService = ticketService;
          this.cookieService = cookieService;
          this.isDataLoaded = true;
          this.totalItems = 0;
        }

        _createClass(PrivateCategoryComponent, [{
          key: "addTicket",
          value: function addTicket(mode, categoryId) {
            var _this13 = this;

            var data = {
              type: 'private',
              mode: mode,
              categoryId: categoryId
            };
            var dialogRef = this.dialog.open(_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_6__["AddTicketCategoryComponent"], {
              width: '500px',
              height: 'auto',
              data: data
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this13.getPrivateCategoryList();
              }
            });
          }
        }, {
          key: "onPrivateCatEdit",
          value: function onPrivateCatEdit(detail) {
            var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
            this.addTicket('edit', dataRecord.ticketCategoryId);
          }
        }, {
          key: "onPrivateCatDelete",
          value: function onPrivateCatDelete(detail) {
            var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
            var lookupValueId = dataRecord.lookupValueId; //this.modalService.showConfirmModal(lookupValueId);
          }
        }, {
          key: "privateSearch",
          value: function privateSearch() {
            var _this14 = this;

            if (this.privateFilter != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.privateFilter;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.privatedatagrid.showfiltercolumnbackground(false);
              this.privateColumns.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this14.privatedatagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.privatedatagrid.applyfilters();
            } else {
              this.privatedatagrid.clearfilters();
            }
          }
        }, {
          key: "getPrivateCategoryList",
          value: function getPrivateCategoryList() {
            var _this15 = this;

            this.isDataLoaded = true;
            var params = {
              apartmentId: parseInt(this.cookieService.get('apartmentId')),
              ticketTypeId: 27
            };
            this.ticketService.getAllTicketManagerByApartmentId(params).subscribe(function (res) {
              if (res.length > 0) {
                _this15.totalItems = res.length;
                var data = {
                  localdata: res,
                  datatype: "array"
                };
                _this15.privateListData = new jqx.dataAdapter(data);
              }

              _this15.isDataLoaded = false;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this16 = this;

            this.getPrivateCategoryList();

            var cellsrendererPrivate = function cellsrendererPrivate(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrendererPrivate = function columnrendererPrivate(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.privateColumns = [{
              text: 'Category',
              datafield: 'ticketCategoryName',
              width: 200,
              pinned: true,
              cellsrenderer: cellsrendererPrivate,
              renderer: columnrendererPrivate
            }, {
              text: 'Supervisor',
              datafield: "escalationLevelId0",
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value) value = _this16.privateListData.loadedData[row].escalationLevelId0.userName;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 80,
              renderer: columnrendererPrivate
            }, {
              text: 'Level-1',
              datafield: 'escalationLevelId1',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value) value = _this16.privateListData.loadedData[row].escalationLevelId1.userName;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 170,
              renderer: columnrendererPrivate
            }, {
              text: 'L1 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (_this16.privateListData.loadedData[row].escalationLevelId1) value = _this16.privateListData.loadedData[row].escalationLevelId1.escalationDays;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 80,
              renderer: columnrendererPrivate
            }, {
              text: 'Level-2',
              datafield: 'escalationLevelId2',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value) value = _this16.privateListData.loadedData[row].escalationLevelId2.userName;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 170,
              renderer: columnrendererPrivate
            }, {
              text: 'L2 escdays',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (_this16.privateListData.loadedData[row].escalationLevelId2) value = _this16.privateListData.loadedData[row].escalationLevelId2.escalationDays;else value = "";
                return '<div class="jqx-custom-inner-cell">' + value + '</div>';
              },
              minwidth: 170,
              renderer: columnrendererPrivate
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrendererPrivate
            }];
          }
        }]);

        return PrivateCategoryComponent;
      }();

      PrivateCategoryComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
        }];
      };

      PrivateCategoryComponent.propDecorators = {
        privatedatagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['privatedatagrid', {
            "static": false
          }]
        }],
        onPrivateCatEdit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onPrivateCatEdit', ['$event.detail']]
        }],
        onPrivateCatDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onPrivateCatDelete', ['$event.detail']]
        }]
      };
      PrivateCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-private-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./private-category.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./private-category.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]])], PrivateCategoryComponent);

      function showConfirmDeleteEventPrivate(row) {
        var event = new CustomEvent('onPrivateCatDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEventPrivate = showConfirmDeleteEventPrivate;

      function editPrivateCatEvent(row) {
        var event = new CustomEvent('onPrivateCatEdit', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editPrivateCatEvent = editPrivateCatEvent;
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stdW5hc3NpZ25lZC9oZWxwZGVzay11bmFzc2lnbmVkLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts":
    /*!******************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: HelpdeskUnassignedComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Ticket */
      "./src/app/api/controllers/Ticket.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-cookie-service */
      "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);

      var HelpdeskUnassignedComponent = /*#__PURE__*/function () {
        function HelpdeskUnassignedComponent(router, injector, userService, staffService, ticketService, lookupService, sharedService, cookieService) {
          _classCallCheck(this, HelpdeskUnassignedComponent);

          this.router = router;
          this.injector = injector;
          this.userService = userService;
          this.staffService = staffService;
          this.ticketService = ticketService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.cookieService = cookieService;
          this.ticketData = "";
          this.isTicketDataLoaded = false;
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
        }

        _createClass(HelpdeskUnassignedComponent, [{
          key: "onEditTicket",
          value: function onEditTicket(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            var ticketId = dataRecord.ticketId;
            this.router.navigateByUrl('/ams/helpdesk/edit-ticket/' + ticketId);
          }
        }, {
          key: "onTicketDelete",
          value: function onTicketDelete(detail) {
            this.modalService.showConfirmModal(detail.rowId);
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'helpdeskData');
          }
        }, {
          key: "isAdmin",
          value: function isAdmin() {
            return this.cookieService.get('userRoleType') == 'Admin' || this.cookieService.get('userRoleType') == 'Staff' ? true : false;
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this17 = this;

            if (this.ticketData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.ticketData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this17.datagrid.addfilter(item.datafield, filtergroup, true);
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
            var _this18 = this;

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Ticket ID',
              datafield: 'serialNo',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Type',
              datafield: 'ticketTypeId',
              cellsrenderer: function cellsrenderer(row, column, value) {
                if (value == 24) {
                  return '<div class="jqx-custom-inner-cell"><img src="assets/images/common-ticket-icon.svg"></div>';
                } else {
                  return '<div class="jqx-custom-inner-cell"><img src="assets/images/private-ticket-icon.svg"></div>';
                }
              },
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Status',
              datafield: 'ticketStatusId_Label',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell"><span class="badge small min text-capitalize ' + getClassName(value) + '">' + value + '</span></div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Category',
              datafield: 'ticketCategoryId_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Priority',
              datafield: 'ticketPriorityId_Label',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell"><span class="dots rt-3 ' + getClassName(value) + '"></span></div>';
              },
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Description',
              datafield: 'description',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Assigned to',
              datafield: 'assignedTo_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 150,
              renderer: columnrenderer
            }, {
              text: 'Requested By',
              datafield: 'raisedby_Label',
              cellsrenderer: cellsrenderer,
              minwidth: 150,
              renderer: columnrenderer
            }, {
              text: 'Date Requested',
              datafield: 'insertedOn',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_11__(value).format("DD-MM-YYYY hh:mm A") + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" title="Edit Ticket Details" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" title="Delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrenderer
            }];

            if (this.cookieService.get('userRoleType') == 'Admin' || this.cookieService.get('userRoleType') == 'Staff') {
              var params = {
                apartmentId: parseInt(this.cookieService.get('apartmentId'))
              };
              this.ticketService.getAllTicketsByApartmentId(params).subscribe(function (res) {
                //filter active true items
                var ticketListData = res.filter(function (data) {
                  return data.isActive && data.assignedTo == null;
                }); // for (var i = 0; i < ticketListData.length; i++) {
                //   if (ticketListData[i].ticketStatusId_Label == 'New') {
                //     ticketListData[i].ticketStatusId_Label = 'inprogress';
                //   }
                // }

                _this18.gridSourceData = {
                  localdata: ticketListData,
                  datatype: "array"
                };
                _this18.ticketListData = new jqx.dataAdapter(_this18.gridSourceData);
                _this18.isTicketDataLoaded = true;
              }, function (error) {});
            }

            if (this.cookieService.get('userRoleType') == 'Tenant' || this.cookieService.get('userRoleType') == 'Owner') {
              var _params = {
                raisedUserId: parseInt(this.cookieService.get('userId'))
              };
              this.ticketService.getTicketsByRaisedUserId(_params).subscribe(function (res) {
                //filter active true items
                var ticketListData = res.filter(function (data) {
                  return data.isActive;
                });
                _this18.gridSourceData = {
                  localdata: ticketListData,
                  datatype: "array"
                };
                _this18.ticketListData = new jqx.dataAdapter(_this18.gridSourceData);
                _this18.isTicketDataLoaded = true;
              }, function (error) {});
            } // delete item


            this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
              if (id != null) {
                var dataRecord = _this18.datagrid.getrowdata(id);

                var ticketId = dataRecord.ticketId;
                var _params2 = {
                  ticketId: ticketId,
                  deleteBy: parseInt(_this18.cookieService.get('userId'))
                };

                _this18.ticketService.deleteTicket(_params2).subscribe(function (res) {
                  /*_.each(this.ticketListData, (type)=>{
                    if(type.ticketId == id){
                      type.isActive = false;
                    }
                  })*/
                  setTimeout(function () {
                    /*this.ticketListData = this.ticketListData.filter((type) => type.ticketId !== id);*/
                    _this18.datagrid.deleterow(id);

                    _this18.totalItems = _this18.ticketListData.length;

                    _this18.sharedService.setAlertMessage("Ticket deleted");

                    _this18.sharedService.setUnitListDeleteIndex(null);
                  }, 500);
                }, function (error) {
                  console.log(error);
                });
              }
            });
          }
        }]);

        return HelpdeskUnassignedComponent;
      }();

      HelpdeskUnassignedComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"]
        }, {
          type: src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }, {
          type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
        }];
      };

      HelpdeskUnassignedComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        onEditTicket: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onEditTicket', ['$event.detail']]
        }],
        onTicketDelete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onTicketDelete', ['$event.detail']]
        }]
      };
      HelpdeskUnassignedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk-unassigned',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk-unassigned.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-unassigned.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], HelpdeskUnassignedComponent);

      function getClassName(value) {
        var name = value.split('-');
        return name[0].toLowerCase();
      }

      window.getClassName = getClassName;

      function showConfirmDeleteEvent(row) {
        var event = new CustomEvent('onTicketDelete', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.showConfirmDeleteEvent = showConfirmDeleteEvent;

      function editTicketEvent(row) {
        var event = new CustomEvent('onEditTicket', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.editTicketEvent = editTicketEvent;
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss":
    /*!**************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stdXBkYXRlLXRpY2tldC9oZWxwZGVzay11cGRhdGUtdGlja2V0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: HelpdeskUpdateTicketComponent */

    /***/
    function srcAppModulesAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
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

      var HelpdeskUpdateTicketComponent = /*#__PURE__*/function () {
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
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk-update-ticket.component.scss */
        "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], HelpdeskUpdateTicketComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: HelpdeskRoutingModule */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
      /* harmony import */


      var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
      /* harmony import */


      var src_app_shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component */
      "./src/app/shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component.ts");
      /* harmony import */


      var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/helpdesk-reports/helpdesk-reports.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
      /* harmony import */


      var src_app_shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/components/add-ticket/add-ticket.component */
      "./src/app/shared/components/add-ticket/add-ticket.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/helpdesk-reports/open-tickets-report/open-tickets-report.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/helpdesk-setup/private-category/private-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/helpdesk-setup/common-category/common-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'settings',
        pathMatch: 'full'
      }, {
        path: 'settings',
        component: _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"],
        children: [{
          path: '',
          redirectTo: 'private-category',
          pathMatch: 'full'
        }, {
          path: 'private-category',
          component: _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_11__["PrivateCategoryComponent"]
        }, {
          path: 'common-category',
          component: _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_12__["CommonCategoryComponent"]
        }, {
          path: '**',
          redirectTo: 'private-category',
          pathMatch: 'full'
        }]
      }, {
        path: 'edit-staff/:id',
        component: _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskEditStaffComponent"]
      }, {
        path: 'add-ticket',
        component: _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskUpdateTicketComponent"]
      }, {
        path: 'edit-ticket/:id',
        component: src_app_shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__["AddTicketComponent"]
      }, {
        path: 'all-tickets',
        component: src_app_shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskAllTicketsComponent"]
      }, {
        path: 'open-tickets',
        component: _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_10__["OpenTicketsReportComponent"]
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
    "./src/app/modules/ams/helpdesk/helpdesk.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2hlbHBkZXNrL2hlbHBkZXNrLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/helpdesk.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk.component.ts ***!
      \************************************************************/

    /*! exports provided: HelpdeskComponent */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskComponentTs(module, __webpack_exports__, __webpack_require__) {
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

      var HelpdeskComponent = /*#__PURE__*/function () {
        function HelpdeskComponent() {
          _classCallCheck(this, HelpdeskComponent);
        }

        _createClass(HelpdeskComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HelpdeskComponent;
      }();

      HelpdeskComponent.ctorParameters = function () {
        return [];
      };

      HelpdeskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-helpdesk',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./helpdesk.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/helpdesk/helpdesk.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./helpdesk.component.scss */
        "./src/app/modules/ams/helpdesk/helpdesk.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpdeskComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/helpdesk/helpdesk.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/modules/ams/helpdesk/helpdesk.module.ts ***!
      \*********************************************************/

    /*! exports provided: HelpdeskModule */

    /***/
    function srcAppModulesAmsHelpdeskHelpdeskModuleTs(module, __webpack_exports__, __webpack_require__) {
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
      "./src/app/modules/ams/helpdesk/helpdesk-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var _helpdesk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./helpdesk.component */
      "./src/app/modules/ams/helpdesk/helpdesk.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/helpdesk-setup/helpdesk-setup.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
      /* harmony import */


      var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
      /* harmony import */


      var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/helpdesk-reports/helpdesk-reports.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");
      /* harmony import */


      var _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/helpdesk-reports/open-tickets-report/open-tickets-report.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/helpdesk-setup/add-ticket-category/add-ticket-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/add-ticket-category/add-ticket-category.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/helpdesk-setup/common-category/common-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/common-category/common-category.component.ts");
      /* harmony import */


      var _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/helpdesk-setup/private-category/private-category.component */
      "./src/app/modules/ams/helpdesk/components/helpdesk-setup/private-category/private-category.component.ts");

      var HelpdeskModule = function HelpdeskModule() {
        _classCallCheck(this, HelpdeskModule);
      };

      HelpdeskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"], _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskSetupComponent"], _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskUpdateTicketComponent"], _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskUnassignedComponent"], _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskReportsComponent"], _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_11__["HelpdeskEditStaffComponent"], _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_12__["OpenTicketsReportComponent"], _components_helpdesk_setup_add_ticket_category_add_ticket_category_component__WEBPACK_IMPORTED_MODULE_13__["AddTicketCategoryComponent"], _components_helpdesk_setup_common_category_common_category_component__WEBPACK_IMPORTED_MODULE_14__["CommonCategoryComponent"], _components_helpdesk_setup_private_category_private_category_component__WEBPACK_IMPORTED_MODULE_15__["PrivateCategoryComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskRoutingModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_5__["CondoCardModule"]],
        bootstrap: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskComponent"]]
      })], HelpdeskModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-helpdesk-helpdesk-module-es5.js.map