function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["helpdesk-helpdesk-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reports-wrapper\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<h5 class=\"mb-3\">Reports</h5>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-6 mb-20\" *ngFor=\"let report of reportDataList\">\n\n\t\t\t\t\t<div class=\"card report-card\">\n\t\t\t\t\t\t<a class=\"t-no-decor\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink = \"/ams/helpdesk/open-tickets\"\n\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t<div class=\"card-header\">\n\t\t\t\t\t\t\t\t<h6>{{report.lookupValueName}}</h6>\n\t\t\t\t\t\t\t\t<p>{{report.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<div class=\"card-body\">\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</ng-container>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"income-tracker-reports-customer-reports\">\n\n\t<h4 class=\"main-title-mini\">Open Tickets</h4>\n\n\t<div class=\"card clear\">\n\n\t\t<div class=\"card-body\">\n\n\t\t\t<form #openTicketReportForm = \"ngForm\" name=\"openTicketReportForm\" (ngSubmit)=\"submitOpenTicketForm(openTicketReportForm)\"  novalidate>\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Block No</label>\n\t\t                    <select\n\t\t\t\t\t\t        name=\"blockNo\"\n\t\t\t\t\t\t        id=\"blockNo\"\n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.apartmentBlockId\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of blockData\" [value]=\"item.apartmentBlockId\">{{ item.apartmentBlockNumber }}</option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label> Date From</label>\n\t\t                    <input class=\"form-control\" name=\"reportDateFrom\" [owlDateTime]=\"reportDateFrom\" [owlDateTimeTrigger]=\"reportDateFrom\" placeholder=\"Date\" [(ngModel)]=\"report.fromDate\">\n\t\t\t\t\t\t\t<owl-date-time #reportDateFrom [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"reportDateFrom\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t                    <label> Date To</label>\n\t\t                    <input class=\"form-control\" name=\"reportDateTo\" [owlDateTime]=\"reportDateTo\" [owlDateTimeTrigger]=\"reportDateTo\" placeholder=\"Date\" [(ngModel)]=\"report.toDate\">\n\t\t\t\t\t\t\t<owl-date-time #reportDateTo [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"reportDateTo\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon date float-left\" name=\"calendar\" width=\"18\"></i-feather>\n\t\t\t\t\t\t\t</div>\n\t\t        \t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"select-box\">\n\t\t                    <label>Ticket Status</label>\n\t\t                    <select\n\t\t\t\t\t\t        name=\"tktStatus\"\n\t\t\t\t\t\t        id=\"tktStatus\"\n\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t        [(ngModel)]=\"report.status\">\n\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t        <option *ngFor=\"let item of ticketStatusList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }} </option>\n\t\t\t\t\t\t\t</select>\n\t            \t\t</div>\n\t\t\t\t\t</div>\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Ticket Type</label>\n                        <select\n                    name=\"tktType\"\n                    id=\"tktType\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.type\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of ticketTypeList\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }} </option>\n              </select>\n                  </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"select-box\">\n                        <label>Assigned Staff</label>\n                        <select\n                    name=\"tktPriority\"\n                    id=\"tktPriority\"\n                    class=\"form-control\"\n                    [(ngModel)]=\"report.assignedStaff\">\n                    <option value=\"\" disabled selected hidden>Select</option>\n                    <option *ngFor=\"let item of staffDataList\" [value]=\"item.staffId\">{{ item.firstName }} </option>\n              </select>\n                  </div>\n          </div>\n\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<button class=\"btn blue\" [disabled]=\"openTicketReportForm.invalid\">Generate</button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</form>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<div class=\"card clear mt-30\" *ngIf=\"isDataLoaded && !isReportSubmitted\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"list-inline float-left\">\n    \t\t\t<h5>Reports <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t\t<p *ngIf=\"!isReportSubmitted && report.fromDate && report.toDate\">Transactions From <span class=\"tc-blue m-bold\">{{getDate(report.fromDate)}}</span> To <span class=\"tc-blue m-bold\">{{getDate(report.toDate)}}</span> </p>\n    \t\t</div>\n    \t\t<ul class=\"list-inline float-right\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"reportsData\" >\n    \t\t\t</li>\n    \t\t</ul>\n  \t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t<table class=\"table table-stretch table-responsive\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n              <th scope=\"col\" (click)=\"sortUnitData('Block')\">Block<span [ngClass]=\"getFieldOrderBy('Block')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('Date')\">Created Date<span [ngClass]=\"getFieldOrderBy('Date')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Type')\">Type<span [ngClass]=\"getFieldOrderBy('Type')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Status')\">Status<span [ngClass]=\"getFieldOrderBy('Status')\"></span></th>\n\t\t\t\t      <th scope=\"col\" (click)=\"sortUnitData('Category')\">Category<span [ngClass]=\"getFieldOrderBy('Category')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('User')\">User<span [ngClass]=\"getFieldOrderBy('User')\"></span></th>\n              <th scope=\"col\" (click)=\"sortUnitData('Assigned')\">Assigned To<span [ngClass]=\"getFieldOrderBy('Assigned')\"></span></th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let report of openTicketReport | simpleSearch: reportsData | sort : unitFieldType: unitOrder| slice:ItemStartIndex:ItemEndIndex  ; let i = index\">\n              <td class=\"name\">{{report.blockNo}}</td>\n\t\t\t\t      <td class=\"grey\">{{getDate(report.createdOn)}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.ticketType}}</td>\n              <td class=\"grey\">{{report.ticketStatus}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.subject}}</td>\n              <td class=\"grey\">{{report.userName}}</td>\n\t\t\t\t      <td class=\"grey\">{{report.staffName}}</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table>\n\t\t\t<div class=\"button-wrapper border-top\" *ngIf=\"isNoItemsAvailable()\">\n    \t\t\t<p class=\"snippet\">No Records Found</p>\n\t\t\t</div>\n\t\t\t<app-pagination\n\t\t\t\t[totalItems]=\"totalItems\"\n\t\t\t\t[ItemStartIndex]=\"ItemStartIndex\"\n\t\t\t\t[ItemEndIndex] = \"ItemEndIndex\"\n\t\t\t\t[itemLimit] = \"itemLimit\"\n\t\t\t\t(outputParams) = \"getIndexParams($event)\">\n\t\t\t</app-pagination>\n\n\t\t</div>\n\n\t</div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-edit-staff-wrapper\">\n\t\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>Edit Staff</h5>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/helpdesk/settings\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<i-feather class=\"icon back\" name=\"chevron-left\"></i-feather>\n\t\t\t\t</a>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"isStaffSubmitted && !isStaffAdded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"!isStaffSubmitted && !isStaffAdded\">\n\n\t\t\t\t<form #addStaffForm = \"ngForm\" name=\"addStaffForm\" (ngSubmit)=\"submitStaffForm(addStaffForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Category*</label>\n\t\t\t                    <select \n\t\t\t\t\t\t\t        name=\"CategoryType\" \n\t\t\t\t\t\t\t        id=\"CategoryType\" \n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"staff.category\" required>\n\t\t\t\t\t\t\t        <option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of staffCategoryData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\" [disabled]=\"addStaffForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t\t<div class=\"message\" *ngIf=\"isStaffAdded\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\">Staff added successfully!</h5>\n\t\t\t</div>\n\n\t\t\t\n\t\t</div>\n\t</div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-setup-wrapper\">\n\n\t<h5 class=\"mb-3\">Add Ticket Category</h5>\n\n\t<div class=\"card mb-30\">\n\t\t<div class=\"card-body\">\n\n\t\t\t<!-- <app-alert-message [message]=\"errorMessage\" [isAlert]=\"isError\"></app-alert-message> -->\n\n\t\t\t<app-loader *ngIf=\"!isTicketAddLoaded\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isTicketAddLoaded\">\n\n\t\t\t\t<form #addCategoryForm=\"ngForm\" name=\"addCategoryForm\" (ngSubmit)=\"submitTicketCategoryForm(addCategoryForm)\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Ticket Type<span class=\"mandatory\">*</span></label>\n\t\t\t                    <select\n\t\t\t\t\t\t\t        name=\"ticketType\"\n\t\t\t\t\t\t\t        id=\"ticketType\"\n\t\t\t\t\t\t\t        class=\"form-control\"\n\t\t\t\t\t\t\t        [(ngModel)]=\"ticketType\" required>\n\t\t\t\t\t\t\t\t\t<option value=\"\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t\t\t<option *ngIf = \"isError\" disabled selected hidden>Select</option>\n\t\t\t\t\t\t\t        <option *ngFor=\"let item of ticketTypeData\" [value]=\"item.lookupValueId\">{{ item.lookupValueName }}</option>\n\t\t\t\t\t\t\t    </select>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Ticket Category<span class=\"mandatory\">*</span></label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"ticketCategory\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"ticketCategory\" required>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<ul class=\"list-inline mt-25\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn lime-green mr-2\"\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"addCategoryForm.invalid\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\n\t\t</div>\n\n\t</div>\n\n\t<app-loader *ngIf=\"!isCategoryDataLoaded\"></app-loader>\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Private Category</h5>\n\t\t\t</div>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\"\n\t\t\t[(ngModel)]=\"categoryPrivateData\"\n\t\t\t(ngModelChange)=\"onGlSearchFilterPrivate()\">\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\t\t\t\t<jqxGrid\n\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\"\n\t\t\t\t[source]=\"categoryPrivateListData\"\n\t\t\t\t[columns]=\"privateData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#privatedatagrid>\n\t\t\t</jqxGrid>\n\n\t\t<!-- <table class=\"table table-resizable table-checker\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t    <tr>\n\t\t\t\t      <th scope=\"col\">Category <span (click)=\"sortUnitData('status')\" [ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Supervisor <span (click)=\"sortUnitData('subcategory')\" [ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Level-1 <span (click)=\"sortUnitData('level1')\" [ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t      <th scope=\"col\">Level-2 <span (click)=\"sortUnitData('level2')\" [ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t      <th scope=\"col\">L1 Escdays<span (click)=\"sortUnitData('l1day')\" [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t      <th scope=\"col\">L2 Escdays<span (click)=\"sortUnitData('l2day')\" [ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\n\t\t\t\t      <th scope=\"col\">Action</th>\n\t\t\t\t    </tr>\n\t\t\t    </thead>\n\t\t\t    <tbody>\n\t\t\t\t    <tr *ngFor=\"let category of categoryPrivateListData | simpleSearch: categoryPrivateData | sort : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex ; let i = index\">\n\t\t\t\t      <td>{{category.lookupValueName}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.supervisor_name}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.level1}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.level2}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.l1escdays}}</td>\n\t\t\t\t      <td class=\"grey\">{{category.l2escdays}}</td>\n\t\t\t\t      <td>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t      \trouterLink=\"/ams/helpdesk/edit-staff/{{category.lookupValueId}}\"\n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t  </a>\n\t\t\t\t\t\t  <a href=\"javascript:void(0)\" class=\"mr-2\" (click)=\"openDialog(category);\">\n\t\t\t\t      \t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t      \t</a>\n\t\t\t\t      \t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=27;showConfirmModal(i);\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\n\t\t</div>\n\n\t</div>\n\n\n\t<div class=\"card table-card mb-30\" *ngIf=\"isCategoryDataLoaded\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n\t\t\t\t<h5>Common Category</h5>\n\t\t\t</div>\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search\"\n\t\t\t[(ngModel)]=\"categoryCommonData\"\n\t\t\t(ngModelChange)=\"onGlSearchFilterCommon()\">\n\t\t</div>\n\n\t\t<div class=\"card-body p-0\">\n\n\t\t\t\t<jqxGrid\n\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\"\n\t\t\t\t[source]=\"categoryCommonListData\"\n\t\t\t\t[columns]=\"commonData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#commondatagrid>\n\t\t\t</jqxGrid>\n\t\t<!-- <table class=\"table\" [ngClass]=\"isMobileView()\">\n\t\t\t\t<thead>\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('status')\">Category <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('status')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('subcategory')\">Supervisor <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('subcategory')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('level1')\">Level-1 <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('level1')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('level2')\">Level-2 <span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('level2')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('l1day')\">Escalation to L1 day<span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\t\t\t\t\t\t<th scope=\"col\" (click)=\"sortUnitData('l2day')\">Escalation to L2day<span\n\t\t\t\t\t\t\t\t[ngClass]=\"getFieldOrderBy('l1day')\"></span></th>\n\n\t\t\t\t\t\t<th scope=\"col\">Action</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t\t<tbody>\n\t\t\t\t\t<tr\n\t\t\t\t\t\t*ngFor=\"let category of categoryCommonListData | orderBy : unitFieldType: unitOrder | slice:ItemUserStartIndex:ItemUserEndIndex | simpleSearch: categoryCommonData ; let i = index\">\n\t\t\t\t\t\t<td>{{category.lookupValueName}}</td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td class=\"grey\"></td>\n\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"mr-2\"\n\t\t\t\t\t\t\t\trouterLink=\"/ams/helpdesk/edit-staff/{{category.lookupValueId}}\"\n\t\t\t\t\t\t\t\trouterLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon edit\" name=\"edit\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"staffDeleteTypeId=26;showConfirmModal(i)\">\n\t\t\t\t\t\t\t\t<i-feather class=\"icon delete\" name=\"trash\"></i-feather>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</td>\n\t\t\t\t    </tr>\n\t\t\t    </tbody>\n\t\t\t</table> -->\n\n\t\t</div>\n\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "›<div class=\"helpdesk-all-tickets-wrapper\">\n\n\t<app-loader *ngIf=\"!isTicketDataLoaded\"></app-loader>\n\t<ul class=\"legends list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots common\"></span><span>Common</span></li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots private\"></span>Private</li>\n\t</ul>\n\n\t<ul class=\"legends ml-3 list-inline\" *ngIf=\"isTicketDataLoaded\">\n\t\t<li class=\"list-inline-item\"><span class=\"dots high\"></span><span>High</span></li>\n\t\t<li class=\"list-inline-item\"><span class=\"dots medium\"></span>Medium</li>\n\t\t<li class=\"list-inline-item mr-0\"><span class=\"dots low\"></span>Low</li>\n\t</ul>\n\n\n\t<div class=\"card clear table-card\" *ngIf=\"isTicketDataLoaded\">\n\n\t\t<div class=\"card-header\">\n    \t\t<div class=\"float-left\">\n    \t\t\t<h5>Unassigned Tickets <span class=\"badge lime-green\">{{totalItems}}</span></h5>\n    \t\t</div>\n    \t\t<ul class=\"list-inline\">\n    \t\t\t<li class=\"list-inline-item search d-none d-md-inline-block\">\n    \t\t\t\t<i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n    \t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"ticketData\"\n    \t\t\t\t(ngModelChange)=\"onGlSearchFilter()\" >\n    \t\t\t</li>\n    \t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n    \t\t\t<!-- <li class=\"list-inline-item\">\n\n    \t\t\t\t<a class=\"btn lime-green mt_5\"\n    \t\t\t\trouterLink=\"/ams/helpdesk/add-ticket\"\n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Add Ticket</span>\n    \t\t\t\t</a>\n\n    \t\t\t</li> -->\n    \t\t</ul>\n  \t\t</div>\n\n  \t\t<div class=\"card-body p-0\">\n\n  \t\t\t  <jqxGrid\n\t\t\t\t[theme]=\"'material'\"\n\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t[pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\"\n\t\t\t\t[sortable]=\"true\"\n\t\t\t\t[source]=\"ticketListData\"\n\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t[columnsresize]=\"true\"\n\t\t\t\t[enablehover]=\"false\"\n\t\t\t#datagrid>\n\t\t\t</jqxGrid>\n\n\n  \t\t</div>\n\n\t</div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html":
  /*!********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html ***!
    \********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"helpdesk-create-ticket-wrapper\">\n\t\n\t<ng-container *ngFor=\"let ticket of ticketArray; let i = index\">\n\t\t<app-add-ticket [index]=\"i\" [array]=\"ticketArray\" (outputParams) = \"getTicketArray($event)\"></app-add-ticket>\n\t</ng-container>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsHelpdeskHelpdeskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXJlcG9ydHMvaGVscGRlc2stcmVwb3J0cy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: HelpdeskReportsComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskReportsHelpdeskReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HelpdeskReportsComponent =
    /*#__PURE__*/
    function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-reports.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])], HelpdeskReportsComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXJlcG9ydHMvb3Blbi10aWNrZXRzLXJlcG9ydC9vcGVuLXRpY2tldHMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: OpenTicketsReportComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskReportsOpenTicketsReportOpenTicketsReportComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/services/shared.service */
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


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var OpenTicketsReportComponent =
    /*#__PURE__*/
    function () {
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
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./open-tickets-report.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_6__["StaffService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_7__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])], OpenTicketsReportComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXNldHVwL2hlbHBkZXNrLWVkaXQtc3RhZmYvaGVscGRlc2stZWRpdC1zdGFmZi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: HelpdeskEditStaffComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskEditStaffHelpdeskEditStaffComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HelpdeskEditStaffComponent =
    /*#__PURE__*/
    function () {
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
          var _this3 = this;

          this.staff = {};
          this.staff.category = "";
          var categoryParams = {
            LookupTypeId: 8
          }; //staff category

          this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
            _this3.staffCategoryData = res;
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-edit-staff.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])], HelpdeskEditStaffComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mandatory {\n  color: red;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW50aGlsa3VtYXJzZWV0aGFyYW1hbi9Eb2N1bWVudHMvd29ya3MvY2xpY2tteWNvbmRvL2FwcC1uZzkvc3JjL2FwcC9hbXMvaGVscGRlc2svY29tcG9uZW50cy9oZWxwZGVzay1zZXR1cC9oZWxwZGVzay1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYW1zL2hlbHBkZXNrL2NvbXBvbmVudHMvaGVscGRlc2stc2V0dXAvaGVscGRlc2stc2V0dXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuZGF0b3J5e1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iLCIubWFuZGF0b3J5IHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts ***!
    \************************************************************************************/

  /*! exports provided: HelpdeskSetupComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskSetupHelpdeskSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/api/controllers/User */
    "./src/app/api/controllers/User.ts");
    /* harmony import */


    var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/api/controllers/Lookup */
    "./src/app/api/controllers/Lookup.ts");
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


    var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
    "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/components/common-confirm-modal/common-confirm-modal.component */
    "./src/app/shared/components/common-confirm-modal/common-confirm-modal.component.ts");

    var HelpdeskSetupComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskSetupComponent(injector, dialog, userService, lookupService, sharedService, cookieService, router) {
        _classCallCheck(this, HelpdeskSetupComponent);

        this.injector = injector;
        this.dialog = dialog;
        this.userService = userService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.cookieService = cookieService;
        this.router = router;
        this.categoryPrivateData = "";
        this.categoryCommonData = "";
        this.isCategoryDataLoaded = false;
        this.unitFieldType = "unitno";
        this.unitOrder = true;
        this.isTicketAddLoaded = false;
        this.ticketType = "";
        this.ticketCategory = "";
        this.staffDeleteTypeId = "";
        this.errorMessage = "";
        this.isError = false;
        this.selectedInput = "";
        this.result = '';
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
      }

      _createClass(HelpdeskSetupComponent, [{
        key: "openDialog",
        value: function openDialog(data) {
          this.modalService.showTicketEditModal(data);
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
        key: "showConfirmModal",
        value: function showConfirmModal(index) {
          this.modalService.showConfirmModal(index);
        }
      }, {
        key: "submitTicketCategoryForm",
        value: function submitTicketCategoryForm(form) {
          var _this4 = this;

          this.isError = false;
          var message = "Are you sure you want to save this Ticket Category?";
          var dialogData = new src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogModel"]("Confirm Action", message);
          var dialogRef = this.dialog.open(src_app_shared_components_common_confirm_modal_common_confirm_modal_component__WEBPACK_IMPORTED_MODULE_10__["CommonConfirmModalComponent"], {
            panelClass: 'material',
            disableClose: true,
            data: dialogData
          });
          dialogRef.afterClosed().subscribe(function (dialogResult) {
            _this4.result = dialogResult;

            if (_this4.result) {
              //common category
              if (_this4.ticketType == "24") {
                _this4.ticketTypeId = 17;

                var categoryAvailable = _this4.commonCategory.find(function (x) {
                  return x.lookupValueName == _this4.ticketCategory;
                });

                if (categoryAvailable) {
                  _this4.isError = true;
                  _this4.errorMessage = 'Ticket Category already available';
                  var errorDetails = {
                    msg: _this4.errorMessage,
                    type: "Error"
                  };

                  _this4.sharedService.setCustomAlertMessage(errorDetails);

                  form.reset();
                  _this4.isTicketAddLoaded = true;
                } else {
                  _this4.isTicketAddLoaded = false;
                  var details = {
                    "lookupTypeId": _this4.ticketTypeId,
                    "lookupValueName": _this4.ticketCategory,
                    "description": _this4.ticketCategory,
                    "isActive": true,
                    "insertedBy": parseInt(_this4.cookieService.get('userId')),
                    "insertedOn": "2019-11-16T14:50:08.217Z",
                    "updatedBy": 0,
                    "updatedOn": "2019-11-16T14:50:08.217Z"
                  };
                  var params = {
                    lookupvalue: details
                  };

                  _this4.lookupService.addLookupValue(params).subscribe(function (res) {
                    _this4.isTicketAddLoaded = true;
                    _this4.isCategoryDataLoaded = false;

                    if (res.message) {
                      var errorDetails = {
                        msg: 'Ticket Category added succesfully',
                        type: "Success"
                      };

                      _this4.sharedService.setCustomAlertMessage(errorDetails);

                      var _params = {
                        LookupTypeId: _this4.ticketTypeId
                      };

                      _this4.lookupService.getLookupValueByLookupTypeId(_params).subscribe(function (res) {
                        var categoryCommonListData = res.filter(function (item) {
                          return item.isActive;
                        });
                        _this4.categoryCommonListData = categoryCommonListData;

                        _this4.categoryCommonListData.sort(function (a, b) {
                          return a.lookupValueName.localeCompare(b.lookupValueName);
                        });

                        _this4.gridSourceDataCommon = {
                          localdata: _this4.categoryCommonListData,
                          datatype: "array"
                        };
                        _this4.categoryCommonListData = new jqx.dataAdapter(_this4.gridSourceDataCommon);
                        _this4.isCategoryDataLoaded = true;
                      }, function (error) {});
                    } else {
                      _this4.errorMessage = res.errorMessage;
                      var errorDetails = {
                        msg: _this4.errorMessage,
                        type: "Error"
                      };

                      _this4.sharedService.setCustomAlertMessage(errorDetails);
                    }
                  }, function (error) {});
                }

                form.reset();
                _this4.isError = true;
                _this4.isTicketAddLoaded = true;
              } else {
                _this4.ticketTypeId = 16;

                var _categoryAvailable = _this4.privateCategory.find(function (x) {
                  return x.lookupValueName == _this4.ticketCategory;
                });

                if (_categoryAvailable) {
                  _this4.isError = true;
                  _this4.errorMessage = 'Ticket Category already available';
                  var errorDetails = {
                    msg: _this4.errorMessage,
                    type: "Error"
                  };

                  _this4.sharedService.setCustomAlertMessage(errorDetails);

                  form.reset();
                  _this4.isTicketAddLoaded = true;
                } else {
                  _this4.isTicketAddLoaded = false;
                  var details = {
                    "lookupTypeId": _this4.ticketTypeId,
                    "lookupValueName": _this4.ticketCategory,
                    "description": _this4.ticketCategory,
                    "isActive": true,
                    "insertedBy": parseInt(_this4.cookieService.get('userId')),
                    "insertedOn": "2019-11-16T14:50:08.217Z",
                    "updatedBy": 0,
                    "updatedOn": "2019-11-16T14:50:08.217Z"
                  };
                  var _params2 = {
                    lookupvalue: details
                  };

                  _this4.lookupService.addLookupValue(_params2).subscribe(function (res) {
                    _this4.isTicketAddLoaded = true;
                    _this4.isCategoryDataLoaded = false;
                    var params = {
                      LookupTypeId: _this4.ticketTypeId
                    };

                    if (res.message) {
                      var errorDetails = {
                        msg: 'Ticket Category added succesfully',
                        type: "Success"
                      };

                      _this4.sharedService.setCustomAlertMessage(errorDetails);

                      _this4.lookupService.getLookupValueByLookupTypeId(params).subscribe(function (res) {
                        var categoryPrivateListData = res.filter(function (item) {
                          return item.isActive;
                        });
                        _this4.categoryPrivateListData = categoryPrivateListData;

                        _this4.categoryPrivateListData.sort(function (a, b) {
                          return a.lookupValueName.localeCompare(b.lookupValueName);
                        });

                        _this4.gridSourceDataPrivate = {
                          localdata: _this4.categoryPrivateListData,
                          datatype: "array"
                        };
                        _this4.categoryPrivateListData = new jqx.dataAdapter(_this4.gridSourceDataPrivate);
                        _this4.isCategoryDataLoaded = true;
                      }, function (error) {});
                    } else {
                      _this4.errorMessage = res.errorMessage;
                      if (_this4.errorMessage == 'addLookupValue Not Added as it already exist.') var errorDetails = {
                        msg: 'Ticket Category not added as it already exist',
                        type: "Error"
                      };

                      _this4.sharedService.setCustomAlertMessage(errorDetails);
                    }
                  }, function (error) {});

                  form.reset();
                  _this4.isError = true;
                  _this4.isTicketAddLoaded = true;
                }
              }
            } else {
              _this4.isTicketAddLoaded = true;
            }
          });
        }
      }, {
        key: "selectColInput",
        value: function selectColInput(type) {
          this.selectedInput = type;
        }
      }, {
        key: "onGlSearchFilterPrivate",
        value: function onGlSearchFilterPrivate() {
          var _this5 = this;

          if (this.categoryPrivateData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.categoryPrivateData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.privatedatagrid.showfiltercolumnbackground(false);
            this.privateData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this5.privatedatagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.privatedatagrid.applyfilters();
          } else {
            this.privatedatagrid.clearfilters();
          }
        }
      }, {
        key: "onGlSearchFilterCommon",
        value: function onGlSearchFilterCommon() {
          var _this6 = this;

          if (this.categoryCommonData != "") {
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.categoryCommonData;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.commondatagrid.showfiltercolumnbackground(false);
            this.commonData.forEach(function (item) {
              if (item.datafield != 'Actions') {
                _this6.commondatagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.commondatagrid.applyfilters();
          } else {
            this.commondatagrid.clearfilters();
          }
        }
      }, {
        key: "onPrivateCatEdit",
        value: function onPrivateCatEdit(detail) {
          var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
          var lookupValueId = dataRecord.lookupValueId;
          this.router.navigateByUrl('/ams/helpdesk/edit-staff/' + lookupValueId);
        }
      }, {
        key: "onCommonCatEdit",
        value: function onCommonCatEdit(detail) {
          var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
          var lookupValueId = dataRecord.lookupValueId;
          this.router.navigateByUrl('/ams/helpdesk/edit-staff/' + lookupValueId);
        }
      }, {
        key: "onPrivateCatDelete",
        value: function onPrivateCatDelete(detail) {
          var dataRecord = this.privatedatagrid.getrowdata(detail.rowId);
          var lookupValueId = dataRecord.lookupValueId;
          this.modalService.showConfirmModal(lookupValueId);
        }
      }, {
        key: "onCommonCatDelete",
        value: function onCommonCatDelete(detail) {
          var dataRecord = this.commondatagrid.getrowdata(detail.rowId);
          var lookupValueId = dataRecord.lookupValueId;
          this.modalService.showConfirmModal(lookupValueId);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          //private
          var cellsrendererPrivate = function cellsrendererPrivate(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrendererPrivate = function columnrendererPrivate(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          }; //private


          this.privateData = [{
            text: 'Category',
            datafield: 'description',
            width: 200,
            pinned: true,
            cellsrenderer: cellsrendererPrivate,
            renderer: columnrendererPrivate
          }, {
            text: 'Supervisor',
            datafield: 'ticketTypeId_Label',
            cellsrenderer: cellsrendererPrivate,
            minwidth: 80,
            renderer: columnrendererPrivate
          }, {
            text: 'Level-1',
            datafield: 'level1',
            cellsrenderer: cellsrendererPrivate,
            minwidth: 170,
            renderer: columnrendererPrivate
          }, {
            text: 'Level-2',
            datafield: 'level12',
            cellsrenderer: cellsrendererPrivate,
            minwidth: 170,
            renderer: columnrendererPrivate
          }, {
            text: 'L1 escdays',
            datafield: 'l1escdays',
            cellsrenderer: cellsrendererPrivate,
            minwidth: 80,
            renderer: columnrendererPrivate
          }, {
            text: 'L2 escdays',
            datafield: 'l2escdays',
            cellsrenderer: cellsrendererPrivate,
            minwidth: 170,
            renderer: columnrendererPrivate
          }, {
            text: 'Actions',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellsrenderer: function cellsrenderer(row) {
              return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editPrivateCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventPrivate(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
            },
            renderer: columnrendererPrivate
          }]; //common

          var cellsrendererCommon = function cellsrendererCommon(row, column, value) {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
          };

          var columnrendererCommon = function columnrendererCommon(value) {
            return '<div style="padding: 14px">' + value + '</div>';
          }; // common


          this.commonData = [{
            text: 'Category',
            datafield: 'lookupValueName',
            width: 200,
            pinned: true,
            cellsrenderer: cellsrendererCommon,
            renderer: columnrendererCommon
          }, {
            text: 'Supervisor',
            datafield: 'ticketTypeId_Label',
            cellsrenderer: cellsrendererCommon,
            minwidth: 80,
            renderer: columnrendererCommon
          }, {
            text: 'Level-1',
            datafield: 'level1',
            cellsrenderer: cellsrendererCommon,
            minwidth: 170,
            renderer: columnrendererCommon
          }, {
            text: 'Level-2',
            datafield: 'level12',
            cellsrenderer: cellsrendererCommon,
            minwidth: 170,
            renderer: columnrendererCommon
          }, {
            text: 'Escalation to l1 day',
            datafield: 'l1escdays',
            cellsrenderer: cellsrendererCommon,
            minwidth: 80,
            renderer: columnrendererCommon
          }, {
            text: 'Escalation to l1 day',
            datafield: 'l2escdays',
            cellsrenderer: cellsrendererCommon,
            minwidth: 170,
            renderer: columnrendererCommon
          }, {
            text: 'Actions',
            cellsalign: 'center',
            align: 'center',
            width: 120,
            cellsrenderer: function cellsrenderer(row) {
              return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editCommonCatEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEventCommon(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
            },
            renderer: columnrendererCommon
          }]; //get all ticketType type

          var ticketType = {
            LookupTypeId: 7
          };
          this.lookupService.getLookupValueByLookupTypeId(ticketType).subscribe(function (res) {
            _this7.ticketTypeData = res;
            _this7.isTicketAddLoaded = true;
          }, function (error) {}); //get all category

          this.getTicketListByCategory(); // delete lookupvalue

          this.sharedService.unitlistdeleteindexcast.subscribe(function (lookupValue) {
            _this7.isCategoryDataLoaded = false;

            if (lookupValue != null) {
              var deleteParam = {
                "lookupValueId": lookupValue,
                "updateUserId": parseInt(_this7.cookieService.get('userId'))
              };

              _this7.lookupService.deleteLookupvalue(deleteParam).subscribe(function (res) {
                _this7.getTicketListByCategory();
              }, function (error) {
                _this7.isError = true;
                _this7.errorMessage = 'Could not delete ticket category ';
              });
            }
          });
        }
      }, {
        key: "getTicketListByCategory",
        value: function getTicketListByCategory() {
          var _this8 = this;

          var categoryParams = {
            LookupTypeId: 16
          };
          this.lookupService.getLookupValueByLookupTypeId(categoryParams).subscribe(function (res) {
            _this8.privateCategory = res.filter(function (item) {
              return item['isActive'] === true;
            });
            var categoryPrivateListData = res.filter(function (item) {
              return item['isActive'] === true;
            });
            categoryPrivateListData.forEach(function (element) {
              element.lookupValueName === "Electrical" ? (element.supervisor_name = "David", element.level1 = "john", element.level2 = "daniel", element.l1escdays = 8, element.l2escdays = 5) : element.lookupValueName === "Painting" ? element.supervisor_name = "John" : element.lookupValueName === "Refrigerator" ? element.supervisor_name = "Sam" : '';
            });
            _this8.categoryPrivateListData = categoryPrivateListData;

            _this8.categoryPrivateListData.sort(function (a, b) {
              return a.lookupValueName.localeCompare(b.lookupValueName);
            });

            _this8.gridSourceDataPrivate = {
              localdata: _this8.categoryPrivateListData,
              datatype: "array"
            };
            _this8.categoryPrivateListData = new jqx.dataAdapter(_this8.gridSourceDataPrivate); //get all common category

            var commonListParams = {
              LookupTypeId: 17
            };

            _this8.lookupService.getLookupValueByLookupTypeId(commonListParams).subscribe(function (res) {
              _this8.commonCategory = res.filter(function (item) {
                return item['isActive'] === true;
              });
              var categoryCommonListData = res.filter(function (item) {
                return item.isActive;
              });
              _this8.categoryCommonListData = categoryCommonListData;

              _this8.categoryCommonListData.sort(function (a, b) {
                return a.lookupValueName.localeCompare(b.lookupValueName);
              });

              _this8.gridSourceDataCommon = {
                localdata: _this8.categoryCommonListData,
                datatype: "array"
              };
              _this8.categoryCommonListData = new jqx.dataAdapter(_this8.gridSourceDataCommon);
              _this8.isCategoryDataLoaded = true;
            }, function (error) {});
          }, function (error) {});
        }
      }]);

      return HelpdeskSetupComponent;
    }();

    HelpdeskSetupComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
      }, {
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('privatedatagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])], HelpdeskSetupComponent.prototype, "privatedatagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('commondatagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__["jqxGridComponent"])], HelpdeskSetupComponent.prototype, "commondatagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onPrivateCatEdit', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], HelpdeskSetupComponent.prototype, "onPrivateCatEdit", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCommonCatEdit', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], HelpdeskSetupComponent.prototype, "onCommonCatEdit", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onPrivateCatDelete', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], HelpdeskSetupComponent.prototype, "onPrivateCatDelete", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onCommonCatDelete', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], HelpdeskSetupComponent.prototype, "onCommonCatDelete", null);
    HelpdeskSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-setup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-setup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-setup.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], HelpdeskSetupComponent);

    function showConfirmDeleteEventPrivate(row) {
      var event = new CustomEvent('onPrivateCatDelete', {
        detail: {
          rowId: row
        }
      });
      window.dispatchEvent(event);
    }

    window.showConfirmDeleteEventPrivate = showConfirmDeleteEventPrivate;

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
  "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVuYXNzaWduZWQvaGVscGRlc2stdW5hc3NpZ25lZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: HelpdeskUnassignedComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUnassignedHelpdeskUnassignedComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/services/modal.service */
    "./src/app/shared/services/modal.service.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var HelpdeskUnassignedComponent =
    /*#__PURE__*/
    function () {
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
        this.modalService = this.injector.get(_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
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
          return this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff' ? true : false;
        }
      }, {
        key: "onGlSearchFilter",
        value: function onGlSearchFilter() {
          var _this9 = this;

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
                _this9.datagrid.addfilter(item.datafield, filtergroup, true);
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
          var _this10 = this;

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
            datafield: 'ticketTypeId_Label',
            cellsrenderer: function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell"><span class="dots rt-3 ' + getClassName(value) + '"></span></div>';
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
            cellsrenderer: cellsrenderer,
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

          if (this.cookieService.get('userRole') == 'Admin' || this.cookieService.get('userRole') == 'Staff') {
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

              _this10.gridSourceData = {
                localdata: ticketListData,
                datatype: "array"
              };
              _this10.ticketListData = new jqx.dataAdapter(_this10.gridSourceData);
              _this10.isTicketDataLoaded = true;
            }, function (error) {});
          }

          if (this.cookieService.get('userRole') == 'Tenant' || this.cookieService.get('userRole') == 'Owner') {
            var _params3 = {
              raisedUserId: parseInt(this.cookieService.get('userId'))
            };
            this.ticketService.getTicketsByRaisedUserId(_params3).subscribe(function (res) {
              //filter active true items
              var ticketListData = res.filter(function (data) {
                return data.isActive;
              });
              _this10.gridSourceData = {
                localdata: ticketListData,
                datatype: "array"
              };
              _this10.ticketListData = new jqx.dataAdapter(_this10.gridSourceData);
              _this10.isTicketDataLoaded = true;
            }, function (error) {});
          } // delete item


          this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
            if (id != null) {
              var dataRecord = _this10.datagrid.getrowdata(id);

              var ticketId = dataRecord.ticketId;
              var _params4 = {
                ticketId: ticketId,
                deleteBy: parseInt(_this10.cookieService.get('userId'))
              };

              _this10.ticketService.deleteTicket(_params4).subscribe(function (res) {
                /*_.each(this.ticketListData, (type)=>{
                  if(type.ticketId == id){
                    type.isActive = false;
                  }
                })*/
                setTimeout(function () {
                  /*this.ticketListData = this.ticketListData.filter((type) => type.ticketId !== id);*/
                  _this10.datagrid.deleterow(id);

                  _this10.totalItems = _this10.ticketListData.length;

                  _this10.sharedService.setAlertMessage("Ticket deleted");

                  _this10.sharedService.setUnitListDeleteIndex(null);
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
        type: _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_3__["jqxGridComponent"])], HelpdeskUnassignedComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onEditTicket', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], HelpdeskUnassignedComponent.prototype, "onEditTicket", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:onTicketDelete', ['$event.detail']), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], HelpdeskUnassignedComponent.prototype, "onTicketDelete", null);
    HelpdeskUnassignedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk-unassigned',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk-unassigned.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-unassigned.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_5__["StaffService"], src_app_api_controllers_Ticket__WEBPACK_IMPORTED_MODULE_6__["TicketService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]])], HelpdeskUnassignedComponent);

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
  "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss":
  /*!******************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9jb21wb25lbnRzL2hlbHBkZXNrLXVwZGF0ZS10aWNrZXQvaGVscGRlc2stdXBkYXRlLXRpY2tldC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: HelpdeskUpdateTicketComponent */

  /***/
  function srcAppAmsHelpdeskComponentsHelpdeskUpdateTicketHelpdeskUpdateTicketComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HelpdeskUpdateTicketComponent =
    /*#__PURE__*/
    function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk-update-ticket.component.scss */
      "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], HelpdeskUpdateTicketComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/helpdesk-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: HelpdeskRoutingModule */

  /***/
  function srcAppAmsHelpdeskHelpdeskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
    /* harmony import */


    var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */
    "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
    /* harmony import */


    var _shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component */
    "./src/app/shared/components/helpdesk-all-tickets/helpdesk-all-tickets.component.ts");
    /* harmony import */


    var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */
    "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
    /* harmony import */


    var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/helpdesk-reports/helpdesk-reports.component */
    "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
    /* harmony import */


    var _shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/add-ticket/add-ticket.component */
    "./src/app/shared/components/add-ticket/add-ticket.component.ts");
    /* harmony import */


    var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");
    /* harmony import */


    var _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/helpdesk-reports/open-tickets-report/open-tickets-report.component */
    "./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'settings',
      pathMatch: 'full'
    }, {
      path: 'settings',
      component: _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_3__["HelpdeskSetupComponent"]
    }, {
      path: 'edit-staff/:id',
      component: _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskEditStaffComponent"]
    }, {
      path: 'add-ticket',
      component: _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_4__["HelpdeskUpdateTicketComponent"]
    }, {
      path: 'edit-ticket/:id',
      component: _shared_components_add_ticket_add_ticket_component__WEBPACK_IMPORTED_MODULE_8__["AddTicketComponent"]
    }, {
      path: 'all-tickets',
      component: _shared_components_helpdesk_all_tickets_helpdesk_all_tickets_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskAllTicketsComponent"]
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
  "./src/app/ams/helpdesk/helpdesk.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsHelpdeskHelpdeskComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9oZWxwZGVzay9oZWxwZGVzay5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/helpdesk.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk.component.ts ***!
    \****************************************************/

  /*! exports provided: HelpdeskComponent */

  /***/
  function srcAppAmsHelpdeskHelpdeskComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HelpdeskComponent =
    /*#__PURE__*/
    function () {
      function HelpdeskComponent() {
        _classCallCheck(this, HelpdeskComponent);
      }

      _createClass(HelpdeskComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HelpdeskComponent;
    }();

    HelpdeskComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-helpdesk',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./helpdesk.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/helpdesk/helpdesk.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./helpdesk.component.scss */
      "./src/app/ams/helpdesk/helpdesk.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], HelpdeskComponent);
    /***/
  },

  /***/
  "./src/app/ams/helpdesk/helpdesk.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/ams/helpdesk/helpdesk.module.ts ***!
    \*************************************************/

  /*! exports provided: HelpdeskModule */

  /***/
  function srcAppAmsHelpdeskHelpdeskModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/ams/helpdesk/helpdesk-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _helpdesk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./helpdesk.component */
    "./src/app/ams/helpdesk/helpdesk.component.ts");
    /* harmony import */


    var _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/helpdesk-setup/helpdesk-setup.component */
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-setup.component.ts");
    /* harmony import */


    var _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/helpdesk-update-ticket/helpdesk-update-ticket.component */
    "./src/app/ams/helpdesk/components/helpdesk-update-ticket/helpdesk-update-ticket.component.ts");
    /* harmony import */


    var _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/helpdesk-unassigned/helpdesk-unassigned.component */
    "./src/app/ams/helpdesk/components/helpdesk-unassigned/helpdesk-unassigned.component.ts");
    /* harmony import */


    var _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/helpdesk-reports/helpdesk-reports.component */
    "./src/app/ams/helpdesk/components/helpdesk-reports/helpdesk-reports.component.ts");
    /* harmony import */


    var _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component */
    "./src/app/ams/helpdesk/components/helpdesk-setup/helpdesk-edit-staff/helpdesk-edit-staff.component.ts");
    /* harmony import */


    var _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/helpdesk-reports/open-tickets-report/open-tickets-report.component */
    "./src/app/ams/helpdesk/components/helpdesk-reports/open-tickets-report/open-tickets-report.component.ts");

    var HelpdeskModule = function HelpdeskModule() {
      _classCallCheck(this, HelpdeskModule);
    };

    HelpdeskModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskComponent"], _components_helpdesk_setup_helpdesk_setup_component__WEBPACK_IMPORTED_MODULE_6__["HelpdeskSetupComponent"], _components_helpdesk_update_ticket_helpdesk_update_ticket_component__WEBPACK_IMPORTED_MODULE_7__["HelpdeskUpdateTicketComponent"], _components_helpdesk_unassigned_helpdesk_unassigned_component__WEBPACK_IMPORTED_MODULE_8__["HelpdeskUnassignedComponent"], _components_helpdesk_reports_helpdesk_reports_component__WEBPACK_IMPORTED_MODULE_9__["HelpdeskReportsComponent"], _components_helpdesk_setup_helpdesk_edit_staff_helpdesk_edit_staff_component__WEBPACK_IMPORTED_MODULE_10__["HelpdeskEditStaffComponent"], _components_helpdesk_reports_open_tickets_report_open_tickets_report_component__WEBPACK_IMPORTED_MODULE_11__["OpenTicketsReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _helpdesk_routing_module__WEBPACK_IMPORTED_MODULE_3__["HelpdeskRoutingModule"]],
      bootstrap: [_helpdesk_component__WEBPACK_IMPORTED_MODULE_5__["HelpdeskComponent"]]
    })], HelpdeskModule);
    /***/
  }
}]);
//# sourceMappingURL=helpdesk-helpdesk-module-es5.js.map