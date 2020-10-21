(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-income-tracker-income-pay-invoice-income-pay-invoice-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.html":
    /*!***************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.html ***!
      \***************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePayInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"income-pay-invoice-wrapper\">\n\t\n\t<div class=\"main\">\n\n\t\t<div class=\"bg-card shadow primary\" *ngIf=\"isAccountDataLoaded\">\n\t\t\t<div class=\"sub-details\">\n\t\t\t\t<p class=\"d-inline-block\">\n\t\t\t\t<span class=\"font-medium\">Bill to party: </span>\n\t\t\t\t{{accountDataList | isdefined:'billToParty' }}</p>\n\t\n\t\t\t\t<p class=\"d-inline-block ml-md-4\">\n\t\t\t\t<span class=\"font-medium\">Contact Person: </span>\n\t\t\t\t{{accountDataList | isdefined:'primayContact' }}</p>\n\t\n\t\t\t\t<p class=\"d-inline-block ml-md-4\">\n\t\t\t\t<span class=\"font-medium\">Block: </span>\n\t\t\t\t{{accountDataList | isdefined:'apartmentBlockNumber' }}</p>\n\t\t\t\t\n\t\t\t\t<p class=\"d-inline-block ml-md-4\">\n\t\t\t\t<span class=\"font-medium\">Unit: </span>\n\t\t\t\t{{accountDataList | isdefined:'apartmentBlockUnitNumber' }}</p>\n\t\n\t\t\t</div>\n\t\t</div>\n\t\n\t\t<app-loader *ngIf=\"!isInvoiceDataLoaded\"></app-loader>\n\t\n\t\t<ng-container *ngIf=\"isInvoiceDataLoaded\">\n\t\t\t\n\t\t\t<condo-card>\n\t\n\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4>Bills to be payed</h4>\n\t\t\t\t\t\t\t<p class=\"text-secondary\">{{totalItems}} Results</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"ml-auto mr-3\">\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" (ngModelChange)=\"onGlSearchFilter()\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t<jqxGrid \n\t\t\t\t\t\t[theme]=\"'material'\" \n\t\t\t\t\t\t[width]=\"'100%'\"\n\t\t\t\t\t\t[rowsheight]=\"48\"\n\t\t\t\t\t\t[autoheight]=\"true\"\n\t\t\t\t\t\t[pageable]=\"true\" \n\t\t\t\t\t\t[filterable]=\"true\" \n\t\t\t\t\t\t[sortable]=\"true\" \n\t\t\t\t\t\t[source]=\"invoiceDataList\"\n\t\t\t\t\t\t[columns]=\"columnData\"\n\t\t\t\t\t\t[enablehover]=\"false\"\n\t\t\t\t\t#datagrid>\n\t\t\t\t\t  </jqxGrid>\n\t\t\t\t</div>\n\t\n\t\t\t</condo-card>\n\t\n\t\t</ng-container>\n\t\n\t\t<app-income-post-collection class=\"post-collection-comp\" *ngIf=\"isInvoiceSelected\" [totalAmountArray]=\"totalAmountArray\" [invoiceIdArray]=\"selectedInvoiceIdArray\" (collectionParams)=\"isCollectionMade($event)\"></app-income-post-collection>\n\n\t</div>\n\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.html":
    /*!******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.html ***!
      \******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePostCollectionIncomePostCollectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"income-post-collection-wrapper mt-5\">\n\n\t<app-loader *ngIf=\"!isCollectionSubmitted\"></app-loader>\n\n\t<ng-container *ngIf=\"isCollectionSubmitted\">\n\n\t\t<h4 class=\"mb-4\">Post Collection</h4>\n\n\t\t<form #postIncomeCollectionForm = \"ngForm\" name=\"postIncomeCollectionForm\" (ngSubmit)=\"submitIncomePostCollectionForm()\"  novalidate>\n\n\t\t\t<div class=\"bg-card shadow\">\n\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Amount<span class=\"ml-2 text-warn font-medium\">*</span></label>\n\t\t\t\t\t\t\t<input type=\"number\" OnlyNumber=\"true\" [customMin] =\"minCollectionAmount\" [customMax] =\"maxCollectionAmount\" class=\"form-control\" #collectionAmount=\"ngModel\" placeholder=\"Enter text\" name=\"collectionAmount\" [(ngModel)]=\"collection.amount\" required [readonly]=\"isMultipleEntry\">\n\t\t\t\t\t\t\t<div *ngIf=\"collectionAmount.errors\">\n\t\t\t\t\t\t\t\t<p class=\"error\">Enter amount equal to or lesser than the selected entries</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\tlabelText=\"Instrument Type\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Select Type\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldList]=\"instrumentTypeListData\"\n\t\t\t\t\t\t\tfieldValue=\"lookupValueName\"\n\t\t\t\t\t\t\t[fieldModel]=\"collection.instrumentTypeId\"\n\t\t\t\t\t\t\tfieldId=\"lookupValueId\"\n\t\t\t\t\t\t\t(fieldParams)=\"getInstrumentType($event)\" \n\t\t\t\t\t\t></condo-select>\t\n\t\t\t\t\t</div>\n\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\tlabelText=\"Deposit Slip Number\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Select Number\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldList]=\"depositSlipLisData\"\n\t\t\t\t\t\t\tfieldValue=\"id\"\n\t\t\t\t\t\t\t[fieldModel]=\"collection.depositSlipNumber\"\n\t\t\t\t\t\t\tfieldId=\"id\"\n\t\t\t\t\t\t\t(fieldParams)=\"getDepositSlip($event)\" \n\t\t\t\t\t\t></condo-select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Post On*</label>\n\t\t\t\t\t\t\t<input class=\"form-control\" name=\"collectionPostOn\" [owlDateTime]=\"collectionPostOn\" [owlDateTimeTrigger]=\"collectionPostOn\" placeholder=\"Date\" [(ngModel)]=\"collection.postOn\">\n\t\t\t\t\t\t\t<owl-date-time #collectionPostOn [pickerType]=\"'calendar'\"></owl-date-time>\n\t\t\t\t\t\t\t<div class=\"date-btn\" [owlDateTimeTrigger]=\"collectionPostOn\">\n\t\t\t\t\t\t\t\t<mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\tlabelText=\"Payment Status\"\n\t\t\t\t\t\t\tfieldPlaceholder=\"Select Status\"\n\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t[fieldList]=\"paymentStatusListData\"\n\t\t\t\t\t\t\tfieldValue=\"lookupValueName\"\n\t\t\t\t\t\t\t[fieldModel]=\"collection.collectionStatusId\"\n\t\t\t\t\t\t\tfieldId=\"lookupValueId\"\n\t\t\t\t\t\t\t(fieldParams)=\"getPaymentStatus($event)\" \n\t\t\t\t\t\t></condo-select>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Comments</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter text\" name=\"comments\" [(ngModel)]=\"collection.comment\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\t\t\n\t\t\t</div>\n\n\t\t\t<div class=\"text-right\">\n\t\t\t\t<button class=\"mt-4\" mat-flat-button [color]=\"'primary'\">Submit</button>\n\t\t\t</div>\n\t\t</form>\n\n\t</ng-container>\n\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice-routing.module.ts":
    /*!****************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice-routing.module.ts ***!
      \****************************************************************************************************/

    /*! exports provided: routes, IncomePayInvoiceRoutingModule */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePayInvoiceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncomePayInvoiceRoutingModule", function () {
        return IncomePayInvoiceRoutingModule;
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


      var _income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./income-pay-invoice.component */
      "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.ts");

      var routes = [{
        path: ':id',
        component: _income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_3__["IncomePayInvoiceComponent"]
      }];

      var IncomePayInvoiceRoutingModule = function IncomePayInvoiceRoutingModule() {
        _classCallCheck(this, IncomePayInvoiceRoutingModule);
      };

      IncomePayInvoiceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IncomePayInvoiceRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.scss":
    /*!*************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.scss ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePayInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2luY29tZS10cmFja2VyL2luY29tZS1wYXktaW52b2ljZS9pbmNvbWUtcGF5LWludm9pY2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.ts":
    /*!***********************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.ts ***!
      \***********************************************************************************************/

    /*! exports provided: IncomePayInvoiceComponent */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePayInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncomePayInvoiceComponent", function () {
        return IncomePayInvoiceComponent;
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


      var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Accounts */
      "./src/app/api/controllers/Accounts.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");

      var IncomePayInvoiceComponent = /*#__PURE__*/function () {
        function IncomePayInvoiceComponent(route, accountsService, sharedService, sessionService) {
          _classCallCheck(this, IncomePayInvoiceComponent);

          this.route = route;
          this.accountsService = accountsService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.isInvoiceDataLoaded = false;
          this.invoiceData = "";
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.unitFieldType = "unitno";
          this.unitOrder = true;
          this.isMobile = false;
          this.isInvoiceSelected = false;
          this.selectAllInvoices = false;
          this.isAccountDataLoaded = false;
        }

        _createClass(IncomePayInvoiceComponent, [{
          key: "isCollectionMade",
          value: function isCollectionMade(event) {
            if (event) {
              this.totalAmountArray = [];
              this.selectedInvoiceIdArray = [];
              this.isInvoiceSelected = false;
              this.getCustInvoices();
            }
          }
        }, {
          key: "onCheckInvoiceHeader",
          value: function onCheckInvoiceHeader(detail) {
            var _this = this;

            var allDataRecords = this.datagrid.getrows();
            this.totalAmountArray = [];
            this.selectedInvoiceIdArray = [];
            allDataRecords.forEach(function (item) {
              item.checked = detail.checked;

              _this.totalAmountArray.push(item.remainingAmount);

              _this.selectedInvoiceIdArray.push(item.custInvoiceID);
            });
            this.isInvoiceSelected = allDataRecords.some(function (item) {
              return item.checked;
            });
            this.datagrid.refresh();
            setTimeout(function () {
              var elem = document.querySelector('.post-collection-comp');
              var scrollTo = elem.getBoundingClientRect().top - 100;
              window.scroll({
                top: scrollTo,
                behavior: 'smooth'
              });
            }, 100);
          }
        }, {
          key: "onCheckInvoiceRow",
          value: function onCheckInvoiceRow(detail) {
            var _this2 = this;

            var allDataRecords = this.datagrid.getrows();
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            dataRecord.checked = detail.checked;
            this.totalAmountArray = [];
            this.selectedInvoiceIdArray = [];
            allDataRecords.forEach(function (item) {
              if (item.checked) {
                length++;

                _this2.totalAmountArray.push(item.remainingAmount);

                _this2.selectedInvoiceIdArray.push(item.custInvoiceID);
              }
            });
            this.isInvoiceSelected = allDataRecords.some(function (item) {
              return item.checked;
            });
            setTimeout(function () {
              var elem = document.querySelector('.post-collection-comp');
              var scrollTo = elem.getBoundingClientRect().top - 100;
              window.scroll({
                top: scrollTo,
                behavior: 'smooth'
              });
            }, 100);
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'PayInvoiceData');
          }
        }, {
          key: "onGlSearchFilter",
          value: function onGlSearchFilter() {
            var _this3 = this;

            if (this.invoiceData != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.invoiceData;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this3.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "renderColumns",
          value: function renderColumns() {
            var _this4 = this;

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: '',
              datafield: 'checked',
              width: 80,
              pinned: true,
              sortable: false,
              menu: false,
              cellsrenderer: function cellsrenderer(row, column, value) {
                var chkedProperty;

                if (value) {
                  chkedProperty = 'checked="true"';
                } else {
                  chkedProperty = '';
                }

                return '<div class="jqx-custom-inner-cell">' + '<div class="form-group mb-0 w-100">' + '<div class="form-check text-center">' + '<input type="checkbox" class="form-check-input" onClick="checkInvoiceRowEvent(' + row + ', this.checked)" id="defaultChecker' + row + '" name="defaultChecker' + row + '" ' + chkedProperty + '>' + '<label class="form-check-label" for="defaultChecker' + row + '"></label>' + '</div>' + '</div>' + '</div>';
              },
              renderer: function renderer(value) {
                return '<div style="padding: 10px">' + '<div class="form-group mb-0 w-100">' + '<div class="form-check check-header text-center">' + '<input type="checkbox" id="selectAllDefaulters" name="selectAllDefaulters" onClick="checkInvoiceHeaderEvent(event, this.checked)" >' + '<label class="form-check-label" for="selectAllDefaulters"></label>' + '</div>' + '</div>' + '</div>';
              }
            }, {
              text: 'Bill No',
              datafield: 'custInvoiceID',
              width: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Bill Date',
              datafield: 'custInvoiceDate',
              width: 120,
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format(_this4.timeZone.date) + '</div>';
              },
              renderer: columnrenderer
            }, {
              text: 'Due Date',
              datafield: 'dueDate',
              width: 120,
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + moment__WEBPACK_IMPORTED_MODULE_6__(value).format(_this4.timeZone.date) + '</div>';
              },
              renderer: columnrenderer
            }, {
              text: 'Comments',
              datafield: 'comments',
              minwidth: 180,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Bill Amount',
              datafield: 'billAmount',
              minwidth: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Remaining Amount',
              datafield: 'remainingAmount',
              minwidth: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }];
          }
        }, {
          key: "getCustInvoices",
          value: function getCustInvoices() {
            var _this5 = this;

            var params = {
              ApartmentBlockUnitID: this.route.params['value'].id
            };
            this.accountsService.getArBalancewithDueByAptBlkUnitId(params).subscribe(function (res) {
              var invoiceDataList = res;
              _this5.gridSourceData = {
                localdata: invoiceDataList,
                datatype: "array"
              };
              _this5.invoiceDataList = new jqx.dataAdapter(_this5.gridSourceData);
              _this5.totalItems = invoiceDataList.length;
              _this5.isInvoiceDataLoaded = true;

              _this5.renderColumns();
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.sharedService.timezonecast.subscribe(function (timeZone) {
              return _this6.timeZone = timeZone;
            });
            this.getCustInvoices();
            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.accountsService.getIncomeTrackerSubLedgersByApartmentId(params).subscribe(function (res) {
              _this6.accountDataList = res.filter(function (item) {
                return item.apartmentBlockUnitId == _this6.route.params['value'].id;
              });
              _this6.isAccountDataLoaded = true;
            });
            var accountParams = {
              apartmentId: this.sessionService.apartmentId,
              groupId: 3
            };
            this.accountsService.getGlAccountsByGroupId(accountParams).subscribe(function (res) {
              _this6.glAccountListData = res;
            });
            this.sharedService.setActionIncomeTrackerIndex(this.route.params['value'].id);
          }
        }]);

        return IncomePayInvoiceComponent;
      }();

      IncomePayInvoiceComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      IncomePayInvoiceComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        onCheckInvoiceHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCheckInvoiceHeader', ['$event.detail']]
        }],
        onCheckInvoiceRow: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onCheckInvoiceRow', ['$event.detail']]
        }]
      };
      IncomePayInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-pay-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./income-pay-invoice.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./income-pay-invoice.component.scss */
        "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], IncomePayInvoiceComponent);

      var checkInvoiceHeaderEvent = function checkInvoiceHeaderEvent(event, isChecked) {
        event.stopPropagation();
        var newEvent = new CustomEvent('onCheckInvoiceHeader', {
          detail: {
            checked: isChecked
          }
        });
        window.dispatchEvent(newEvent);
      };

      window.checkInvoiceHeaderEvent = checkInvoiceHeaderEvent;

      var checkInvoiceRowEvent = function checkInvoiceRowEvent(row, isChecked) {
        var event = new CustomEvent('onCheckInvoiceRow', {
          detail: {
            rowId: row,
            checked: isChecked
          }
        });
        window.dispatchEvent(event);
      };

      window.checkInvoiceRowEvent = checkInvoiceRowEvent;
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.module.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: IncomePayInvoiceModule */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePayInvoiceModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncomePayInvoiceModule", function () {
        return IncomePayInvoiceModule;
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/list/list.module */
      "./src/app/modules/ui/list/list.module.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _income_pay_invoice_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./income-pay-invoice-routing.module */
      "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice-routing.module.ts");
      /* harmony import */


      var _income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./income-pay-invoice.component */
      "./src/app/modules/ams/income-tracker/income-pay-invoice/income-pay-invoice.component.ts");
      /* harmony import */


      var _income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./income-post-collection/income-post-collection.component */
      "./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.ts");

      var IncomePayInvoiceModule = function IncomePayInvoiceModule() {
        _classCallCheck(this, IncomePayInvoiceModule);
      };

      IncomePayInvoiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePayInvoiceComponent"], _income_post_collection_income_post_collection_component__WEBPACK_IMPORTED_MODULE_10__["IncomePostCollectionComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_income_pay_invoice_routing_module__WEBPACK_IMPORTED_MODULE_8__["routes"]), src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"], src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"], _income_pay_invoice_routing_module__WEBPACK_IMPORTED_MODULE_8__["IncomePayInvoiceRoutingModule"]],
        bootstrap: [_income_pay_invoice_component__WEBPACK_IMPORTED_MODULE_9__["IncomePayInvoiceComponent"]]
      })], IncomePayInvoiceModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.scss":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.scss ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePostCollectionIncomePostCollectionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2luY29tZS10cmFja2VyL2luY29tZS1wYXktaW52b2ljZS9pbmNvbWUtcG9zdC1jb2xsZWN0aW9uL2luY29tZS1wb3N0LWNvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.ts":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.ts ***!
      \**************************************************************************************************************************/

    /*! exports provided: IncomePostCollectionComponent */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomePayInvoiceIncomePostCollectionIncomePostCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncomePostCollectionComponent", function () {
        return IncomePostCollectionComponent;
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


      var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Accounts */
      "./src/app/api/controllers/Accounts.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment-timezone */
      "./node_modules/moment-timezone/index.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_8__);

      var IncomePostCollectionComponent = /*#__PURE__*/function () {
        function IncomePostCollectionComponent(_activatedRoute, _router, accountsService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, IncomePostCollectionComponent);

          this._activatedRoute = _activatedRoute;
          this._router = _router;
          this.accountsService = accountsService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.collection = {};
          this.isCollectionSubmitted = false;
          this.isError = false;
          this.alertMessage = "";
          this.minCollectionAmount = 1;
          this.maxCollectionAmount = 0;
          this.isMultipleEntry = false;
          this.collectionParams = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        }

        _createClass(IncomePostCollectionComponent, [{
          key: "getInstrumentType",
          value: function getInstrumentType(event) {
            this.collection.instrumentTypeId = event[0].lookupValueId;
          }
        }, {
          key: "getDepositSlip",
          value: function getDepositSlip(event) {
            this.collection.depositSlipNumber = event[0].id;
          }
        }, {
          key: "getPaymentStatus",
          value: function getPaymentStatus(event) {
            this.collection.collectionStatusId = event[0].lookupValueId;
          }
        }, {
          key: "isCreditNotePaymentMode",
          value: function isCreditNotePaymentMode() {
            return this.collection.instrumentTypeId == 153 || this.collection.instrumentTypeId == 155 ? true : false;
          }
        }, {
          key: "isCustomerAdvancesPaymentMode",
          value: function isCustomerAdvancesPaymentMode() {
            return this.collection.instrumentTypeId == 219 ? true : false;
          }
        }, {
          key: "isSecurityDepositPaymentMode",
          value: function isSecurityDepositPaymentMode() {
            return this.collection.instrumentTypeId == 220 ? true : false;
          }
        }, {
          key: "reduceCreditNoteAmount",
          value: function reduceCreditNoteAmount() {
            var _this7 = this;

            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceIdArray, function (item, index) {
              var details = {
                "apartmentId": _this7.sessionService.apartmentId,
                "apartmentBlockUnitId": parseInt(_this7.apartmentBlockUnitId),
                "blockUnitUserId": null,
                "custCreditNoteId": null,
                "glaccountId": null,
                "invoiceId": item,
                "collectionId": null,
                "transactionType": 1,
                "amount": _this7.getCollectionAmount(_this7.totalAmountArray[index]),
                "comment": "",
                "comment2": "",
                "active": true,
                "insertedBy": _this7.sessionService.userId,
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null
              };
              var params = {
                custCreditNote: details
              };

              _this7.accountsService.addCustCreditNotes(params).subscribe(function (res) {
                if (index == _this7.invoiceIdArray.length - 1) {
                  _this7.addCollection();
                }
              }, function (error) {});
            });
          }
        }, {
          key: "reduceCustomerAdvancesAmount",
          value: function reduceCustomerAdvancesAmount() {
            var _this8 = this;

            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceIdArray, function (item, index) {
              var details = {
                "apartmentId": _this8.sessionService.apartmentId,
                "apartmentBlockUnitId": parseInt(_this8.apartmentBlockUnitId),
                "blockUnitUserId": null,
                "glaccountId": null,
                "invoiceId": item,
                "collectionId": null,
                "transactionType": 1,
                "amount": _this8.getCollectionAmount(_this8.totalAmountArray[index]),
                "comment": "",
                "comment2": "",
                "active": true,
                "insertedBy": _this8.sessionService.userId,
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null
              };
              var params = {
                custAdvance: details
              };

              _this8.accountsService.addAdvance(params).subscribe(function (res) {
                if (index == _this8.invoiceIdArray.length - 1) {
                  _this8.addCollection();
                }
              }, function (error) {});
            });
          }
        }, {
          key: "reduceSecurityDepositAmount",
          value: function reduceSecurityDepositAmount() {
            var _this9 = this;

            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceIdArray, function (item, index) {
              var details = {
                "apartmentId": _this9.sessionService.apartmentId,
                "apartmentBlockUnitId": parseInt(_this9.apartmentBlockUnitId),
                "blockUnitUserId": null,
                "securityDepositId": 0,
                "glaccountId": null,
                "invoiceId": item,
                "collectionId": null,
                "transactionType": 1,
                "amount": _this9.getCollectionAmount(_this9.totalAmountArray[index]),
                "comment": "",
                "comment2": "",
                "active": true,
                "insertedBy": _this9.sessionService.userId,
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null
              };
              var params = {
                custSecurity: details
              };

              _this9.accountsService.addSecurityDeposit(params).subscribe(function (res) {
                if (index == _this9.invoiceIdArray.length - 1) {
                  _this9.addCollection();
                }
              }, function (error) {});
            });
          }
        }, {
          key: "submitIncomePostCollectionForm",
          value: function submitIncomePostCollectionForm() {
            if (this.isCreditNotePaymentMode()) {
              this.reduceCreditNoteAmount();
            }

            if (this.isCustomerAdvancesPaymentMode()) {
              this.reduceCustomerAdvancesAmount();
            }

            if (this.isSecurityDepositPaymentMode()) {
              this.reduceSecurityDepositAmount();
            }
          }
        }, {
          key: "getCollectionAmount",
          value: function getCollectionAmount(amount) {
            if (!this.isMultipleEntry) return this.collection.amount;else return amount;
          }
        }, {
          key: "addCollection",
          value: function addCollection() {
            var _this10 = this;

            var custInvoiceObjArray = [];
            underscore__WEBPACK_IMPORTED_MODULE_7__["each"](this.invoiceIdArray, function (item, index) {
              var details = {
                "apartmentId": _this10.sessionService.apartmentId,
                "collectionId": 0,
                "invoiceId": item,
                "glAccountId": 0,
                "instrumentTypeId": parseInt(_this10.collection.instrumentTypeId),
                "amount": _this10.getCollectionAmount(_this10.totalAmountArray[index]),
                "comment": "",
                "isActive": true,
                "insertedBy": parseInt(_this10.sessionService.userId),
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null
              };
              custInvoiceObjArray.push(details);
            });
            this.isCollectionSubmitted = false;
            var collectionDetails = {
              "apartmentId": this.sessionService.apartmentId,
              "receiptNumber": 0,
              "receiptDate": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
              "amount": parseInt(this.collection.amount),
              "instrumentTypeId": parseInt(this.collection.instrumentTypeId),
              "postOn": this.collection.postOn || moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
              "collectionAccountTypeId": 165,
              "depositSlipNumber": 0,
              "postExcessAmountTo": 0,
              "collectionStatusId": parseInt(this.collection.collectionStatusId),
              "collectionStatus": "",
              "isEmailSent": true,
              "isSmssent": true,
              "comment": this.collection.comment || "",
              "isActive": true,
              "insertedBy": parseInt(this.sessionService.userId),
              "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
              "updatedBy": null,
              "updatedOn": null,
              "invoiceId": this.invoiceIdArray[0],
              "transReference1": "",
              "transReference2": "",
              "glAcctIndicator": "Asset",
              "collectionInvoice": custInvoiceObjArray
            };
            var params = {
              collection: collectionDetails
            };
            this.accountsService.addCollection(params).subscribe(function (res) {
              if (res.message) {
                _this10.isCollectionSubmitted = true;

                _this10.sharedService.setAlertMessage("Collection done successfully");

                _this10.collectionParams.emit(true);
              } else {
                _this10.isCollectionSubmitted = true;
                _this10.isError = true;
                _this10.alertMessage = res.errorMessage;
              }
            }, function (error) {
              _this10.isCollectionSubmitted = true;
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.collection = {};
            this.collection.instrumentTypeId = "";
            this.collection.collectionAccountTypeId = "";
            this.collection.depositSlipNumber = "";
            this.collection.collectionStatusId = "";
            this.apartmentBlockUnitId = this._activatedRoute.params['value'].id;
            var paymentListParams = {
              LookupTypeId: 34
            }; //payment status

            this.lookupService.getLookupValueByLookupTypeId(paymentListParams).subscribe(function (res) {
              _this11.paymentStatusListData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
            var insListParams = {
              LookupTypeId: 33
            }; //payment mode

            this.lookupService.getLookupValueByLookupTypeId(insListParams).subscribe(function (res) {
              _this11.instrumentTypeListData = res.filter(function (item) {
                return item.isActive;
              });
            }, function (error) {});
            var accountParams = {
              apartmentId: this.sessionService.apartmentId,
              groupId: 3
            };
            this.accountsService.getGlAccountsByGroupId(accountParams).subscribe(function (res) {
              _this11.glAccountListData = res;
            });
            this.depositSlipLisData = [{
              id: 1
            }, {
              id: 2
            }, {
              id: 3
            }, {
              id: 4
            }];
            this.isCollectionSubmitted = true;
            this.collection.amount = parseFloat(this.totalAmountArray[0]).toFixed(2);
            this.maxCollectionAmount = this.collection.amount;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this.totalAmountArray.length > 1) {
              this.isMultipleEntry = true;
              this.collection.amount = this.totalAmountArray.reduce(function (a, b) {
                return a + b;
              }).toFixed(2);
              this.maxCollectionAmount = this.collection.amount;
            } else {
              this.isMultipleEntry = false;
              this.collection.amount = parseFloat(this.totalAmountArray[0]).toFixed(2);
              this.maxCollectionAmount = this.collection.amount;
            }
          }
        }]);

        return IncomePostCollectionComponent;
      }();

      IncomePostCollectionComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]
        }];
      };

      IncomePostCollectionComponent.propDecorators = {
        totalAmountArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        invoiceIdArray: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        collectionParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      };
      IncomePostCollectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-income-post-collection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./income-post-collection.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./income-post-collection.component.scss */
        "./src/app/modules/ams/income-tracker/income-pay-invoice/income-post-collection/income-post-collection.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_3__["AccountsService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_5__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])], IncomePostCollectionComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-income-tracker-income-pay-invoice-income-pay-invoice-module-es5.js.map