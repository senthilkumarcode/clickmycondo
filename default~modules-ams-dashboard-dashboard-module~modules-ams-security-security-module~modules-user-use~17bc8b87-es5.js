(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-dashboard-dashboard-module~modules-ams-security-security-module~modules-user-use~17bc8b87"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.html":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsSecurityComponentsSecurityReportsSecurityReportsDataSecurityReportsDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"security-reports-data-wrapper\">\n\t\t<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n\t\t\t\t<mat-drawer #filter mode=\"over\" position=\"end\">\n\t\t\t\t\t<div class=\"helpdesk-filter-drawer p-5\">\n\t\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t<h4> Filter By </h4>\n\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<div class=\"mt-3\">\n\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t<div class=\"filter-box cleafix\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3\" [ngClass]=\"filterSelected == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllBlockData('all')\">All\n\t\t\t\t\t\t\t\t\t\t\t\t\tTowers</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [ngClass]=\"filterSelected != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleBlockActions\">{{singleBlock}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleBlockActions=\"matMenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let block of blockData\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item (click)=\"getSingleBlock(block)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{block.apartmentBlockNumber}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t\t\t<div class=\"filter-box cleafix\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3\" [ngClass]=\"filterSelectedNote == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllNoteData('all')\">All\n\t\t\t\t\t\t\t\t\t\t\t\t\tSubject</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3\" [ngClass]=\"filterSelectedNote != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleNoteActions\">{{singleNote}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleNoteActions=\"matMenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let note of securityCategoryData\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item (click)=\"getSelectNote(note)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{note.lookupValueName}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t\t<div class=\"filter-box cleafix mb-5\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3\" [ngClass]=\"filterSelectedType == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllTypeData('all')\">All\n\t\t\t\t\t\t\t\t\t\t\t\t\tAlert</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3\" [ngClass]=\"filterSelectedType != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleTypeActions\">{{singleType}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleTypeActions=\"matMenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let type of alertTypeStatus\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item (click)=\"getSelectType(type)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{type.lookupValueName}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\t\t\tlabelText=\"Start Date\"\n\t\t\t\t\t\t\t\t\t\t\tfieldName=\"startDate\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'null'\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldModel]=\"report.startDate\"\n\t\t\t\t\t\t\t\t\t\t\t(fieldParams)=\"getStartDate($event)\">\n\t\t\t\t\t\t\t\t\t\t</app-datepicker>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\t\t\tlabelText=\"End Date\"\n\t\t\t\t\t\t\t\t\t\t\tfieldName=\"endDate\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'null'\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldModel]=\"report.endDate\"\n\t\t\t\t\t\t\t\t\t\t\t(fieldParams)=\"getEndDate($event)\">\n\t\t\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t</mat-drawer>\n\t\t\t\t<mat-drawer-content>\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t\t<ng-container *ngIf=\"isDataLoaded\"> \n\n\t\t\t<condo-card *ngIf=\"!isReportSubmitted\">\n\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"float-right\" *ngIf=\"!allLink\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/security/reports\"  class=\"ml-auto my-auto\"\n\t\t\t\t\t\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2 ml-3\" svgIcon=\"heroicons_outline:document-report\"></mat-icon>All Reports\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4>{{pageName}}</h4>\n\t\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\t<div class=\"ml-auto my-auto\">\n\t\t\t\t\t\t\t\t<app-table-search [input]=\"reportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"d-md-block mr-3 my-auto ml-3\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n\t\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t<button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n\t\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"listData\" [columns]=\"columnData\"\n\t\t\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t\t\t</jqxGrid>\n\t\t\t\t</div>\n\t\t\t</condo-card>\n\n\t\t</ng-container>\n\t</div>\n</mat-drawer-content>\n</mat-drawer-container>\n</div>\n\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.scss":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.scss ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsSecurityComponentsSecurityReportsSecurityReportsDataSecurityReportsDataComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3NlY3VyaXR5L2NvbXBvbmVudHMvc2VjdXJpdHktcmVwb3J0cy9zZWN1cml0eS1yZXBvcnRzLWRhdGEvc2VjdXJpdHktcmVwb3J0cy1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.ts":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: SecurityReportsDataComponent */

    /***/
    function srcAppModulesAmsSecurityComponentsSecurityReportsSecurityReportsDataSecurityReportsDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SecurityReportsDataComponent", function () {
        return SecurityReportsDataComponent;
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


      var src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Alert */
      "./src/app/api/controllers/Alert.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _core_session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../../core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);

      var SecurityReportsDataComponent = /*#__PURE__*/function () {
        function SecurityReportsDataComponent(apartmentService, route, alertService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, SecurityReportsDataComponent);

          this.apartmentService = apartmentService;
          this.route = route;
          this.alertService = alertService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.pageName = "";
          this.allLink = false;
          this.ItemStartIndex = 0;
          this.itemLimit = 8;
          this.unitFieldType = "unitno";
          this.unitOrder = false;
          this.isReportSubmitted = true;
          this.isDataLoaded = false;
          this.reportData = "";
          this.filterSelected = "all";
          this.singleBlock = "Select Tower";
          this.filterSelectedNote = "all";
          this.singleNote = "Select Subject";
          this.filterSelectedType = "all";
          this.singleType = "Select Alert";
          this.minDate = null;
        }

        _createClass(SecurityReportsDataComponent, [{
          key: "getIndexParams",
          value: function getIndexParams(event) {
            this.ItemStartIndex = event.ItemStartIndex;
            this.ItemEndIndex = event.ItemEndIndex;
            this.itemLimit = event.itemLimit;
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
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
            return moment__WEBPACK_IMPORTED_MODULE_10__(date).add(this.timeZone.offset, 'hours').format(this.timeZone.date);
          }
        }, {
          key: "getDateTime",
          value: function getDateTime(date) {
            return moment__WEBPACK_IMPORTED_MODULE_10__(date).format(this.timeZone.time24);
          }
        }, {
          key: "submitSecurityAlertReports",
          value: function submitSecurityAlertReports(form) {
            var _this2 = this;

            this.isReportSubmitted = true;
            this.isDataLoaded = false;
            var details = {
              ApartmentBlockID: parseInt(this.report.apartmentBlockID),
              StartDate: this.getDateTime(this.report.startDate),
              EndDate: this.getDateTime(this.report.endDate),
              ApartmentID: this.sessionService.apartmentId,
              EmergencyCategoryTypeID: parseInt(this.report.emergencyCategoryTypeID),
              AlertTypeStatusID: parseInt(this.report.alertTypeStatusID)
            };
            this.alertService.getReportsForSecurityPanicAlertMultiFilter(details).subscribe(function (res) {
              _this2.alertReportsDataList = res;

              _this2.alertReportsDataList.forEach(function (item, i) {
                item.sNo = i + 1;
              });

              _this2.gridSourceData = {
                localdata: _this2.alertReportsDataList,
                datatype: "array"
              };
              _this2.listData = new jqx.dataAdapter(_this2.gridSourceData);
              _this2.totalItems = _this2.alertReportsDataList.length;

              if (_this2.totalItems > _this2.itemLimit) {
                _this2.ItemEndIndex = _this2.itemLimit;
              } else {
                _this2.ItemEndIndex = _this2.totalItems;
              }

              _this2.isDataLoaded = true;
              _this2.isReportSubmitted = false;
            }, function (error) {});
          }
        }, {
          key: "getSelectedBlock",
          value: function getSelectedBlock(event) {
            this.report.apartmentBlockID = event[0].apartmentBlockId;
          }
        }, {
          key: "getSelectedEmergency",
          value: function getSelectedEmergency(event) {
            this.report.emergencyCategoryTypeID = event[0].lookupValueId;
          }
        }, {
          key: "getSelectedAlert",
          value: function getSelectedAlert(event) {
            this.report.alertTypeStatusID = event[0].lookupValueId;
          }
        }, {
          key: "getStartDate",
          value: function getStartDate(event) {
            this.report.startDate = event;
            this.fromInput();
          }
        }, {
          key: "getEndDate",
          value: function getEndDate(event) {
            this.report.endDate = event;
            this.fromInput();
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            var _this3 = this;

            this.goBack();
            this.isDataLoaded = false;
            var details = {
              ApartmentBlockID: parseInt(this.report.apartmentBlockID),
              StartDate: this.getDateTime(this.report.startDate),
              EndDate: this.getDateTime(this.report.endDate),
              ApartmentID: parseInt(this.sessionService.apartmentId),
              EmergencyCategoryTypeID: parseInt(this.report.emergencyCategoryTypeID),
              AlertTypeStatusID: parseInt(this.report.alertTypeStatusID)
            };
            this.alertService.getReportsForSecurityPanicAlertMultiFilter(details).subscribe(function (res) {
              _this3.alertReportsDataList = res;

              _this3.alertReportsDataList.forEach(function (item, i) {
                item.sNo = i + 1;
              });

              _this3.gridSourceData = {
                localdata: _this3.alertReportsDataList,
                datatype: "array"
              };
              _this3.listData = new jqx.dataAdapter(_this3.gridSourceData);
              _this3.totalItems = _this3.alertReportsDataList.length;

              if (_this3.totalItems > _this3.itemLimit) {
                _this3.ItemEndIndex = _this3.itemLimit;
              } else {
                _this3.ItemEndIndex = _this3.totalItems;
              }

              _this3.isDataLoaded = true;
              _this3.isReportSubmitted = false;
            }, function (error) {
              _this3.isDataLoaded = true;
              _this3.isReportSubmitted = false;
            });
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            var _this4 = this;

            this.report.apartmentBlockID = null;
            this.report.emergencyCategoryTypeID = null;
            this.report.alertTypeStatusID = null;
            this.report.startDate = null;
            this.report.endDate = null;
            this.minDate = null; // =this.getTicketByAdmin();

            var details = {
              ApartmentBlockID: parseInt(this.report.apartmentBlockID),
              StartDate: this.getDateTime(this.report.startDate),
              EndDate: this.getDateTime(this.report.endDate),
              ApartmentID: parseInt(this.sessionService.apartmentId),
              EmergencyCategoryTypeID: parseInt(this.report.emergencyCategoryTypeID),
              AlertTypeStatusID: parseInt(this.report.alertTypeStatusID)
            };
            this.alertService.getReportsForSecurityPanicAlertMultiFilter(details).subscribe(function (res) {
              _this4.alertReportsDataList = res;

              _this4.alertReportsDataList.forEach(function (item, i) {
                item.sNo = i + 1;
              });

              _this4.gridSourceData = {
                localdata: _this4.alertReportsDataList,
                datatype: "array"
              };
              _this4.listData = new jqx.dataAdapter(_this4.gridSourceData);
              _this4.totalItems = _this4.alertReportsDataList.length;

              if (_this4.totalItems > _this4.itemLimit) {
                _this4.ItemEndIndex = _this4.itemLimit;
              } else {
                _this4.ItemEndIndex = _this4.totalItems;
              }

              _this4.isDataLoaded = true;
              _this4.isReportSubmitted = false;
            }, function (error) {
              _this4.isDataLoaded = true;
              _this4.isReportSubmitted = false;
            });
            this.goBack();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.matDrawer.close();
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'SecurityReportsData');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.sharedService.timezonecast.subscribe(function (timeZone) {
              return _this5.timeZone = timeZone;
            });
            this.pageName = this.route.params['value'].name;
            this.report = {};
            this.report.apartmentID = "";
            this.report.apartmentBlockID = "";
            this.report.emergencyCategoryTypeID = "";
            this.report.alertTypeStatusID = "";
            this.report.startDate = null;
            this.report.endDate = null;
            var apartment_params = {
              apartmentId: parseInt(this.sessionService.apartmentId)
            };
            this.apartmentService.getApartmentBlockByApartmentId(apartment_params).subscribe(function (res) {
              _this5.blockData = res;
            });
            var sec_params = {
              LookupTypeId: 29,
              ApartmentId: this.sessionService.apartmentId
            };
            this.lookupService.getLookupValueByLookupTypeId(sec_params).subscribe(function (res) {
              _this5.securityCategoryData = res.filter(function (item) {
                return item.isActive;
              });
            });
            var alert_params = {
              LookupTypeId: 30,
              ApartmentId: this.sessionService.apartmentId
            };
            this.lookupService.getLookupValueByLookupTypeId(alert_params).subscribe(function (res) {
              _this5.alertTypeStatus = res.filter(function (item) {
                return item.isActive;
              });
            });
            this.report.alertTypeStatusID = this.route.params['value'].type === undefined ? "" : this.route.params['value'].type;
            this.allLink = this.route.params['value'].link;

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'S.No',
              datafield: 'sNo',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Creation Date',
              datafield: 'creationDate',
              width: 200,
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this5.getDate(value) + '</div>';
              },
              renderer: columnrenderer
            }, {
              text: 'Unit No',
              datafield: 'unitNo',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              maxwidth: 160,
              renderer: columnrenderer
            }, {
              text: 'Tower',
              datafield: 'blockNo',
              cellsrenderer: cellsrenderer,
              minwidth: 120,
              maxwidth: 180,
              renderer: columnrenderer
            }, {
              text: 'Category',
              datafield: 'category',
              cellsrenderer: cellsrenderer,
              minwidth: 120,
              maxwidth: 180,
              renderer: columnrenderer
            }, {
              text: 'Subject',
              datafield: 'notes',
              cellsrenderer: cellsrenderer,
              minwidth: 120,
              maxwidth: 180,
              renderer: columnrenderer
            }, {
              text: 'Status',
              datafield: 'alertStatus',
              cellsrenderer: cellsrenderer,
              minwidth: 120,
              maxwidth: 150,
              renderer: columnrenderer
            }];
            var details = {
              ApartmentBlockID: parseInt(this.report.apartmentBlockID),
              StartDate: this.report.startDate === null ? moment__WEBPACK_IMPORTED_MODULE_10__(new Date("2020-01-01")).format("MM/DD/YYYY hh:mm aa") : this.getDateTime(this.report.startDate),
              EndDate: this.report.endDate === null ? moment__WEBPACK_IMPORTED_MODULE_10__(new Date()).format(this.timeZone.time) : this.getDateTime(this.report.endDate),
              ApartmentID: parseInt(this.sessionService.apartmentId),
              EmergencyCategoryTypeID: parseInt(this.report.emergencyCategoryTypeID),
              AlertTypeStatusID: parseInt(this.report.alertTypeStatusID)
            };
            this.alertService.getReportsForSecurityPanicAlertMultiFilter(details).subscribe(function (res) {
              _this5.alertReportsDataList = res;

              _this5.alertReportsDataList.forEach(function (item, i) {
                item.sNo = i + 1;
              });

              _this5.gridSourceData = {
                localdata: _this5.alertReportsDataList,
                datatype: "array"
              };
              _this5.listData = new jqx.dataAdapter(_this5.gridSourceData);
              _this5.totalItems = _this5.alertReportsDataList.length;

              if (_this5.totalItems > _this5.itemLimit) {
                _this5.ItemEndIndex = _this5.itemLimit;
              } else {
                _this5.ItemEndIndex = _this5.totalItems;
              }

              _this5.isDataLoaded = true;
              _this5.isReportSubmitted = false;
            }, function (error) {
              _this5.isDataLoaded = true;
              _this5.isReportSubmitted = false;
            });
          }
        }, {
          key: "getAllBlockData",
          value: function getAllBlockData() {
            this.filterSelected = 'all';
            this.singleBlock = "Select Tower";
            this.report.apartmentBlockID = "";
            this.datagrid.removefilter('blockNo', true);
          }
        }, {
          key: "getSingleBlock",
          value: function getSingleBlock(block) {
            var _this6 = this;

            this.filterSelected = 'single';
            this.singleBlock = block.apartmentBlockNumber;
            this.report.apartmentBlockID = block.apartmentBlockId;
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.singleBlock;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'and';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield === 'blockNo') {
                _this6.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          }
        }, {
          key: "getAllNoteData",
          value: function getAllNoteData() {
            this.filterSelectedNote = 'all';
            this.singleNote = "Select Subject";
            this.report.emergencyCategoryTypeID = ""; // this.datagrid.clearfilters();

            this.datagrid.removefilter('notes', true);
          }
        }, {
          key: "getSelectNote",
          value: function getSelectNote(note) {
            var _this7 = this;

            this.filterSelectedNote = 'single';
            this.singleNote = note.lookupValueName;
            this.report.emergencyCategoryTypeID = note.lookupValueId;
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.singleNote;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'and';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield === 'notes') {
                _this7.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          }
        }, {
          key: "getAllTypeData",
          value: function getAllTypeData() {
            this.filterSelectedType = 'all';
            this.singleType = "Select Alert";
            this.report.alertTypeStatusID = "";
            this.datagrid.removefilter('alertStatus', true);
          }
        }, {
          key: "getSelectType",
          value: function getSelectType(note) {
            var _this8 = this;

            this.filterSelectedType = 'single';
            this.singleType = note.lookupValueName;
            this.report.alertTypeStatusID = note.lookupValueId;
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.singleNote;
            var filtercondition = 'contains';
            var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'and';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(function (item) {
              if (item.datafield === 'alertStatus') {
                _this8.datagrid.addfilter(item.datafield, filtergroup, true);
              }
            });
            this.datagrid.applyfilters();
          }
        }, {
          key: "fromInput",
          value: function fromInput() {
            var from = new Date(this.report.startDate);
            var to = new Date(this.report.endDate);

            if (from > to) {
              this.report.endDate = '';
            }

            this.minDate = new Date(this.report.startDate);
          }
        }]);

        return SecurityReportsDataComponent;
      }();

      SecurityReportsDataComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]
        }];
      };

      SecurityReportsDataComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        matDrawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['matDrawer', {
            "static": true
          }]
        }]
      };
      SecurityReportsDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security-reports-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./security-reports-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./security-reports-data.component.scss */
        "./src/app/modules/ams/security/components/security-reports/security-reports-data/security-reports-data.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_api_controllers_Alert__WEBPACK_IMPORTED_MODULE_3__["AlertService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]])], SecurityReportsDataComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-ams-dashboard-dashboard-module~modules-ams-security-security-module~modules-user-use~17bc8b87-es5.js.map