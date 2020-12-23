(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-dashboard-dashboard-module~modules-common-visitor-visitor-report-visitor-report-~210a0dfd"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.html":
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.html ***!
      \**********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesCommonVisitorVisitorReportVisitorReportsVisitorReportsDataVisitorReportsDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-report-data-wrapper content-layout right-sidebar-fullheight-basic-inner-scroll\">\n\n\t\t<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"true\" #matDrawer>\n\t\t\t\t<mat-drawer class=\"col-lg-3 col-md-3 col-sm-3 col-xs-3 p-0\" #filter mode=\"over\" position=\"end\">\n\t\t\t\t\t<div class=\"helpdesk-filter-drawer p-5\">\n\t\t\t\t\t\t<div class=\"title row\">\n\t\t\t\t\t\t\t<h4> Status </h4>\n\t\t\t\t\t\t\t<div class=\"ml-auto\">\n\t\t\t\t\t\t\t\t<button mat-icon-button (click)=\"goBack()\">\n\t\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'close'\"></mat-icon>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t<form>\n\t\t\t\t\n\t\t\t\t\t\t\t\t<div class=\"filter-box cleafix\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"d-flex align-items-center mb-4\">\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button class=\"mr-3\" [ngClass]=\"filterSelected == 'all' ? 'mat-primary' : 'mat-lined'\" (click)=\"getAllBlockData('all')\">All\n\t\t\t\t\t\t\t\t\t\t\t\t\tTowers</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [ngClass]=\"filterSelected != 'all' ? 'mat-primary' : 'mat-lined'\" [matMenuTriggerFor]=\"singleBlockActions\">{{singleBlock}}</button>\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-menu class=\"mat-actions-menu\" [xPosition]=\"'before'\" #singleBlockActions=\"matMenu\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let block of unitBlocksData\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-menu-item (click)=\"getSingleBlock(block)\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t{{block.apartmentBlockNumber}}\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-menu>\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<condo-select labelText=\"Tower No\" fieldPlaceholder=\"Select Tower\" [fieldRequired]=\"'required'\" [fieldList]=\"unitBlocksData\"\n\t\t\t\t\t\t\t\t\t\t fieldValue=\"apartmentBlockNumber\" [fieldModel]=\"blockId\" fieldId=\"apartmentBlockId\" (fieldParams)=\"getSelectedBlock($event)\"></condo-select>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\t\t\tlabelText=\"Start Date\"\n\t\t\t\t\t\t\t\t\t\t\tfieldName=\"startDate\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldModel]=\"start_date\"\n\t\t\t\t\t\t\t\t\t\t\t(fieldParams)=\"getStartDate($event)\">\n\t\t\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\n\t\t\t\t\t\t\t\t\t\t<app-datepicker\n\t\t\t\t\t\t\t\t\t\t\tlabelText=\"End Date\"\n\t\t\t\t\t\t\t\t\t\t\tfieldName=\"endDate\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\t\t\ttype=\"date\"\n\t\t\t\t\t\t\t\t\t\t\t[fieldModel]=\"end_date\"\n\t\t\t\t\t\t\t\t\t\t\t(fieldParams)=\"getEndDate($event)\">\n\t\t\t\t\t\t\t\t\t\t</app-datepicker>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t<condo-select labelText=\"Visit Type\" fieldPlaceholder=\"Select Visit Type\" [fieldRequired]=\"''\" [fieldList]=\"visitByData\"\n\t\t\t\t\t\t\t\t\t\t fieldValue=\"lookupValueName\" [fieldModel]=\"visitTypeId\" fieldId=\"lookupValueId\" (fieldParams)=\"getSelectedVisit($event)\"></condo-select>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"text-right mt-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"filterApply()\">Apply</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button mat-button (click)=\"clearFilter()\">Cancel</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</mat-drawer>\n\t\t\t\t<mat-drawer-content>\n\t    <div class=\"main\">\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\t<condo-card *ngIf=\"isReportSubmitted\">\n\t\n\t\t\t<div CondoCardHeader>\n        <div class=\"d-flex\">\n\t\t\t        <div class=\"float-right\" *ngIf=\"!allLink\">\n\t\t\t\t\t\t\t\n\t\t\t\t<a href=\"javascript:void(0)\" routerLink=\"/ams/visitor/reports\" \n\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:ticket\"></mat-icon>All Reports\n\t\t\t\t\t\n\t\t\t\t</a>\n\t\t\t\n\t\t\t</div>\n\t\t</div>\n\t\t\t\n\n\t\t\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h5>{{pageName}}</h5>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto  my-auto\">\n\t\t\t\t\t\t<app-table-search [input]=\"reportData\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t<app-print-dropdown (outputParams)=\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3 my-auto ml-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'accent'\" (click)=\"filter.toggle()\" class=\"d-none d-md-block\">\n\t\t\t\t\t\t\t<mat-icon class=\"mr-2\" svgIcon=\"heroicons_outline:filter\"></mat-icon>Filter\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button class=\"d-block d-md-none table-add-btn\" mat-button (click)=\"filter.toggle()\">\n\t\t\t\t\t\t\t\t<mat-icon [svgIcon]=\"'heroicons_outline:filter'\"></mat-icon>\n\t\t\t\t\t\t\t  </button>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t  <div CondoCardBody>\n\t\t\t\t<jqxGrid \n\t\t\t[theme]=\"'material'\" \n\t\t\t[width]=\"'100%'\"\n\t\t\t[rowsheight]=\"48\"\n\t\t\t[autoheight]=\"true\"\n\t\t\t[pageable]=\"true\" \n\t\t\t[filterable]=\"true\" \n\t\t\t[sortable]=\"true\" \n\t\t\t[source]=\"listData\"\n\t\t\t[columns]=\"columnData\"\n\t\t\t[columnsresize]=\"true\"\n\t\t\t[enablehover]=\"false\"\n\t\t#datagrid>\n\t\t</jqxGrid> \n\t\t\t</div>\n\n\t\t<!-- </div> -->\n\n\t</condo-card>\n</div>\n</mat-drawer-content>\n</mat-drawer-container>\n\t\n\n</div>\n";
      /***/
    },

    /***/
    "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.scss":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.scss ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesCommonVisitorVisitorReportVisitorReportsVisitorReportsDataVisitorReportsDataComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-visitor-reports-data {\n  display: flex;\n  flex: 1 1 auto;\n}\napp-visitor-reports-data .mat-drawer-container .mat-drawer {\n  max-width: 480px !important;\n  width: 480px !important;\n}\napp-visitor-reports-data .mat-drawer-container .mat-drawer .helpdesk-filter-drawer {\n  padding: 30px 25px 30px 25px;\n}\napp-visitor-reports-data .mat-drawer-container .mat-drawer .helpdesk-filter-drawer .title {\n  display: flex;\n  margin: 0 0 30px 0;\n}\napp-visitor-reports-data .mat-drawer-container .mat-drawer .helpdesk-filter-drawer .title h4 {\n  padding: 10px 0 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb21tb24vdmlzaXRvci92aXNpdG9yLXJlcG9ydC92aXNpdG9yLXJlcG9ydHMvdmlzaXRvci1yZXBvcnRzLWRhdGEvdmlzaXRvci1yZXBvcnRzLWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSwyQkFBQTtFQUNBLHVCQUFBO0FBRVI7QUFEUTtFQUNJLDRCQUFBO0FBR1o7QUFGWTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQUloQjtBQUhnQjtFQUNJLDhCQUFBO0FBS3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb21tb24vdmlzaXRvci92aXNpdG9yLXJlcG9ydC92aXNpdG9yLXJlcG9ydHMvdmlzaXRvci1yZXBvcnRzLWRhdGEvdmlzaXRvci1yZXBvcnRzLWRhdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtdmlzaXRvci1yZXBvcnRzLWRhdGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgLm1hdC1kcmF3ZXItY29udGFpbmVyIC5tYXQtZHJhd2VyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgLmhlbHBkZXNrLWZpbHRlci1kcmF3ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMzBweCAyNXB4IDMwcHggMjVweDtcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCAzMHB4IDA7XG4gICAgICAgICAgICAgICAgaDQge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.ts ***!
      \******************************************************************************************************************************/

    /*! exports provided: VisitorReportsDataComponent */

    /***/
    function srcAppModulesCommonVisitorVisitorReportVisitorReportsVisitorReportsDataVisitorReportsDataComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VisitorReportsDataComponent", function () {
        return VisitorReportsDataComponent;
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


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Visitor */
      "./src/app/api/controllers/Visitor.ts");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
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

      var VisitorReportsDataComponent = /*#__PURE__*/function () {
        function VisitorReportsDataComponent(route, apartmentService, visitorService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, VisitorReportsDataComponent);

          this.route = route;
          this.apartmentService = apartmentService;
          this.visitorService = visitorService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.pageName = "";
          this.isDataLoaded = false;
          this.blockId = null;
          this.blockNo = "";
          this.end_date = null;
          this.start_date = null;
          this.visitTypeId = null;
          this.reportData = "";
          this.isReportSubmitted = false;
          this.filterData = {
            ticketStatus: '',
            staff: null,
            supervisor: null
          };
          this.filterSelected = "all";
          this.singleBlock = "Select Tower";
          this.allLink = false;
        }

        _createClass(VisitorReportsDataComponent, [{
          key: "getStartDate",
          value: function getStartDate(event) {
            this.start_date = event;
          }
        }, {
          key: "getEndDate",
          value: function getEndDate(event) {
            this.end_date = event;
          }
        }, {
          key: "isMobileView",
          value: function isMobileView() {
            return window.innerWidth <= 767 ? 'table-responsive' : '';
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'VisitorReportsData');
          }
        }, {
          key: "getDate",
          value: function getDate(date) {
            return moment__WEBPACK_IMPORTED_MODULE_10__(date).add(this.timeZone.offset, 'hours').format(this.timeZone.time);
          }
        }, {
          key: "submitReportsFilterForm",
          value: function submitReportsFilterForm() {
            var params = {
              ApartmentID: this.sessionService.apartmentId,
              ApartmentBlockID: parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              VisitType: parseInt(this.visitTypeId)
            };
            this.getDetails(params);
          }
        }, {
          key: "getDetails",
          value: function getDetails(params) {
            var _this = this;

            var serviceName;
            var id = parseInt(this.route.params['value'].id);

            if (id == 365) {
              serviceName = this.visitorService.getReportsForVisitorsCheckedInMultiFilter(params);
            } else if (id == 366) {
              serviceName = this.visitorService.getReportsForVisitorsCheckedOutnMultiFilter(params);
            } else if (id == 367) {
              serviceName = this.visitorService.getReportsForExpectedVisitorsMultiFilter(params);
            } else if (id == 368) {
              serviceName = this.visitorService.getReportsForVisitorsNotCheckedOutMultiFilter(params);
            } else if (id == 369) {
              serviceName = this.visitorService.getReportsForExpectedVisitorsNotCheckedInMultiFilter(params);
            }

            serviceName.subscribe(function (res) {
              if (res.errorMessage) {
                _this.reportsDataList = [];
              } else {
                _this.reportsDataList = res;
                _this.totalItems = _this.reportsDataList.length;
                _this.gridSourceData = {
                  localdata: _this.reportsDataList,
                  datatype: "array"
                };
                _this.listData = new jqx.dataAdapter(_this.gridSourceData);
                _this.isReportSubmitted = true;
                _this.isDataLoaded = true;
              }
            }, function (error) {
              _this.isReportSubmitted = true;
              _this.isDataLoaded = true;
            });
          }
        }, {
          key: "getDateTime",
          value: function getDateTime(val) {
            if (val != '') {
              return moment__WEBPACK_IMPORTED_MODULE_10__(val).format("MM/DD/YY hh:mm");
            } else {
              return '';
            }
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this2 = this;

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
                  _this2.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "getSelectedBlock",
          value: function getSelectedBlock(event) {
            this.blockId = event[0].apartmentBlockId;
          }
        }, {
          key: "getSelectedVisit",
          value: function getSelectedVisit(event) {
            this.visitTypeId = event[0].lookupValueId;
          }
        }, {
          key: "filterApply",
          value: function filterApply() {
            this.goBack();
            this.isDataLoaded = false;
            var params = {
              ApartmentID: this.sessionService.apartmentId,
              // tslint:disable-next-line:radix
              ApartmentBlockID: parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              // tslint:disable-next-line:radix
              VisitType: parseInt(this.visitTypeId)
            };
            this.getDetails(params);
          }
        }, {
          key: "clearFilter",
          value: function clearFilter() {
            this.blockId = null;
            this.start_date = null;
            this.end_date = null;
            this.visitTypeId = null; // =this.getTicketByAdmin();

            var params = {
              ApartmentID: this.sessionService.apartmentId,
              // tslint:disable-next-line:radix
              ApartmentBlockID: parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              // tslint:disable-next-line:radix
              VisitType: parseInt(this.visitTypeId)
            };
            this.getDetails(params);
            this.goBack();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.matDrawer.close();
          }
        }, {
          key: "cancel",
          value: function cancel(form) {
            form.reset();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.sharedService.timezonecast.subscribe(function (timeZone) {
              return _this3.timeZone = timeZone;
            });
            this.pageName = this.route.params['value'].name;
            this.allLink = this.route.params['value'].link;
            var unitBlockParams = {
              apartmentId: this.sessionService.apartmentId
            };
            this.apartmentService.getApartmentBlockByApartmentId(unitBlockParams).subscribe(function (res) {
              _this3.unitBlocksData = res;
            });
            var visitParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 15
            }; //visit type

            this.lookupService.getLookupValueByLookupTypeId(visitParams).subscribe(function (res) {
              _this3.visitByData = res;
            }, function (error) {});
            this.isDataLoaded = true;

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
              text: 'Visitor Name',
              datafield: 'visitorName',
              width: 200,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Phone Number',
              datafield: 'visitorPhone',
              cellsrenderer: cellsrenderer,
              minwidth: 150,
              renderer: columnrenderer
            }, {
              text: 'Date/Time of Visit',
              datafield: 'visitorInTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this3.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Time-out',
              datafield: 'visitorOutTime',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + _this3.getDateTime(value) + '</div>';
              },
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Visit Type',
              datafield: 'visitType',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'Tower No',
              datafield: 'blockNo',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Unit No',
              datafield: 'unitNo',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }];
            var params = {
              ApartmentID: this.sessionService.apartmentId,
              // tslint:disable-next-line:radix
              ApartmentBlockID: parseInt(this.blockId),
              StartDate: this.getDate(this.start_date),
              EndDate: this.getDate(this.end_date),
              // tslint:disable-next-line:radix
              VisitType: parseInt(this.visitTypeId)
            };
            this.getDetails(params);
          }
        }, {
          key: "getAllBlockData",
          value: function getAllBlockData() {
            this.filterSelected = 'all';
            this.singleBlock = "Select Tower";
            this.blockId = "";
            this.datagrid.clearfilters();
          }
        }, {
          key: "getSingleBlock",
          value: function getSingleBlock(block) {
            var _this4 = this;

            this.filterSelected = 'single';
            this.singleBlock = block.apartmentBlockNumber;
            this.blockId = block.apartmentBlockId;
            var filtergroup = new jqx.filter();
            var filter_or_operator = 1;
            var filtervalue = this.singleBlock;
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
          }
        }]);

        return VisitorReportsDataComponent;
      }();

      VisitorReportsDataComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }];
      };

      VisitorReportsDataComponent.propDecorators = {
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
      VisitorReportsDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-visitor-reports-data',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./visitor-reports-data.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./visitor-reports-data.component.scss */
        "./src/app/modules/common/visitor/visitor-report/visitor-reports/visitor-reports-data/visitor-reports-data.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"], src_app_api_controllers_Visitor__WEBPACK_IMPORTED_MODULE_7__["VisitorService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])], VisitorReportsDataComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~modules-ams-dashboard-dashboard-module~modules-common-visitor-visitor-report-visitor-report-~210a0dfd-es5.js.map