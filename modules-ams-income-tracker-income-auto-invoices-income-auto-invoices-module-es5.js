(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-income-tracker-income-auto-invoices-income-auto-invoices-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.html":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.html ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsIncomeTrackerIncomeAutoInvoicesCreateMonthlyInvoiceCreateMonthlyInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"income-tracker-auto-monthly-invoice-wrapper\">\n\t<div class=\"main\">\n        <h4 class=\"mb-4\">Create Automatic Monthly Invoice</h4>\n\t\t<div>\n\t\t\t<form>\n\t\t\t\t<div class=\"bg-card shadow\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-box\">\n                                <label>Date Of Bill Creation</label>\n                                <input class=\"form-control\" name=\"dateOfBill\" [owlDateTime]=\"dateOfBill\" [owlDateTimeTrigger]=\"dateOfBill\"\n                                placeholder=\"Date\" [(ngModel)]=\"invoice.billCreationDate\" autocomplete=\"off\">\n                                <owl-date-time #dateOfBill [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\">\n                                    <mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <div class=\"input-box\">\n                                <label>Due Date</label>\n                                <input class=\"form-control\" name=\"dueDate\" [owlDateTime]=\"dueDate\" [owlDateTimeTrigger]=\"dueDate\"\n                                    placeholder=\"Date\" [(ngModel)]=\"invoice.dueDate\" autocomplete=\"off\">\n                                <owl-date-time #dueDate [pickerType]=\"'calendar'\"></owl-date-time>\n                                <div class=\"date-btn\">\n                                    <mat-icon svgIcon=\"feather:calendar\"></mat-icon>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\t\n\t\t\t\t</div>\n\t\t\t\t<div class=\"bg-card shadow p-0\">\n                    <div class=\"text-right pr-3 py-4\">\n                        <button mat-flat-button [color]=\"'primary'\" (click)=\"addForm()\">\n                            <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add\n                        </button>\n                    </div>\n                    <table id=\"setupAutoInvoicingAccordion\" class=\"table table-resizable\" [ngClass]=\"isMobileView()\" *ngIf=\"generateAutoInvoiceForm.length > 0\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">Bill Amount</th>\n                                <th scope=\"col\">Amount For Calc</th>\n                                <th scope=\"col\">Fixed Amount</th>\n                                <th scope=\"col\">GL Account</th>\n                                <th scope=\"col\">Description</th>\n                                <th scope=\"col\">Tax</th>\n                                <th scope=\"col\">Vat</th>\n                                <th scope=\"col\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <ng-container *ngFor=\"let item of generateAutoInvoiceForm; let i = index;\">\n                                <tr>\n                                    <td>\n                                        <select name=\"billAmountType\" [(ngModel)]=\"item.typeId\" (change)=\"billAmountChange(item)\" class=\"form-control\">\n                                            <option [ngValue]=\"null\" selected hidden>select</option>\n                                            <option *ngFor=\"let data of billAmountList\" [ngValue]=\"data.lookupValueId\">\n                                                {{ data.lookupValueName}}\n                                            </option>\n                                        </select>\n                                    </td>\n                                    <td>\n                                        <div class=\"input-container\">\n                                            <input class=\"form-control\" OnlyNumber=\"true\" name=\"amountCalculation\" placeholder=\"Amount\" \n                                            [(ngModel)]=\"item.varAmount\" [disabled]=\"item.typeId == 386\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"input-container\">\n                                            <input class=\"form-control\" OnlyNumber=\"true\" name=\"fixedAmount\" placeholder=\"Fixed\" \n                                            [(ngModel)]=\"item.fixedAmount\" [disabled]=\"item.typeId == 387 || item.typeId == 388\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <select name=\"accountId\" [(ngModel)]=\"item.glaccountId\" class=\"form-control\">\n                                            <option [ngValue]=\"null\" selected hidden>select</option>\n                                            <option *ngFor=\"let data of glAccountList\" [ngValue]=\"data.glaccountId\">\n                                                {{ data.glaccountNumber}} - {{ data.glaccountName }}\n                                            </option>\n                                        </select>\n                                    </td>\n                                    <td>\n                                        <div class=\"input-container\">\n                                            <input class=\"form-control\" type=\"text\" name=\"description\" placeholder=\"Description\" [(ngModel)]=\"item.description\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <select name=\"tax\" [(ngModel)]=\"item.taxId\" class=\"form-control\">\n                                            <option [ngValue]=\"null\" selected hidden>select</option>\n                                            <option *ngFor=\"let data of taxPecentageDataList\" [ngValue]=\"data.lookupValueId\">\n                                                {{ data.lookupValueName}}\n                                            </option>\n                                        </select>\n                                    </td>\n                                    <td>\n                                        <select name=\"vat\" [(ngModel)]=\"item.vatId\" class=\"form-control\">\n                                            <option [ngValue]=\"null\" selected hidden>select</option>\n                                            <option *ngFor=\"let data of vatPecentageDataList\" [ngValue]=\"data.lookupValueId\">\n                                                {{ data.lookupValueName}}\n                                            </option>\n                                        </select>\n                                    </td>\n                                    <td>\n                                        <mat-icon (click)=\"addAutoinvoiceConfig(item)\" svgIcon=\"mat_outline:save\" title=\"Save\"></mat-icon>\n                                        <mat-icon class=\"ml-2\" [svgIcon]=\"'close'\" title=\"Close\" (click)=\"closeForm()\"></mat-icon>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"bg-card shadow\" *ngIf=\"generateAutoInvoiceForm.length > 0\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <p class=\"text-muted\"><span class=\"required\">*</span> Based on Sq.m - Maintain Sq.m in each unit to calculate the cost per Unit</p>\n                            <p class=\"text-muted\"><span class=\"required\">*</span> Based on Consumption (Water) - Maintain Sq.m in each unit to calculate the cost per Unit</p>\n                            <p class=\"text-muted\"><span class=\"required\">*</span> Based on Power Units Consumption - Maintain Entry in utilities Menu</p>                     \n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"text-right\">\n                                <button mat-flat-button [color]=\"'primary'\" (click)=\"showInvoiceTable()\">Preview Invoice For All Units</button>\n                                <button class=\"ml-3\" mat-flat-button [color]=\"'accent'\">Create Final Invoice</button>\n                            </div>\n                        </div>\n                    </div>\n                 </div>\n\t\t\t</form>\n        </div>\n        <div *ngIf=\"invoiceTable\">\n            <app-view-monthly-invoice></app-view-monthly-invoice>\n        </div>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.html":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsIncomeTrackerIncomeAutoInvoicesViewMonthlyInvoiceViewMonthlyInvoiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div>\n    <condo-card>\n        <div CondoCardHeader>\n            <div class=\"d-flex\">\n                <div>\n                    <h4>Preview Invoices</h4>\n                    <p>{{totalItems}} results</p>\n                </div>\n                <div class=\"ml-auto d-none d-md-block mr-3\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"invoiceData\" (ngModelChange)=\"onGlSearchFilter()\">\n                </div>\n                <div>\n                    <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                </div>\n            </div>\n        </div>\n        <div CondoCardBody>\n            <jqxGrid \n                    [theme]=\"'material'\" \n                    [width]=\"'100%'\"\n                    [rowsheight]=\"48\"\n                    [autoheight]=\"true\"\n                    [pageable]=\"true\" \n                    [filterable]=\"true\" \n                    [sortable]=\"true\" \n                    [source]=\"prevInvoiceDataList\"\n                    [columns]=\"prevColumnData\"\n                    [enablehover]=\"false\"\n                #datagrid>\n            </jqxGrid>\n        </div>\n    </condo-card>\n\n    <ng-template #viewInvoiceDetailsRef>\n        <div class=\"invoice-info info-modal-box rel\">\n            <div class=\"d-flex p-4\">\n                <h4>Invoice Info</h4>\n                <mat-icon class=\"ml-auto\" [svgIcon]=\"'close'\" mat-dialog-close></mat-icon>\n            </div>\n            <app-loader *ngIf=\"!isInvoicePrintLoaded\"></app-loader>\n            <ng-container *ngIf=\"isInvoicePrintLoaded\">\n                <div id=\"InvoiceElement\">\n                    <div class=\"text-center bg-cool-gray-100 p-4\">\n                        <h4 class=\"pb-3\">{{apartmentDetails.apartmentName}}</h4>\n                        <h6>{{apartmentDetails.address1}}</h6>\n                        <div class=\"mt-2\">\n                            <p class=\"text-secondary\"><span class=\"font-medium mr-2\">Mobile No:</span>{{apartmentDetails.phoneNumber}}</p>\n                            <p class=\"text-secondary\"><span class=\"font-medium mr-2\">Email:</span>{{apartmentDetails.emailId}}</p>\n                        </div>\n                    </div>\n                    <div class=\"bg-card p-0 border-bottom\">\n                        <div class=\"d-flex pt-4 pb-4 border-bottom\">\n                            <div class=\"pl-4\">\n                                <p class=\"text-secondary\"><span class=\"font-medium mr-2\">Tower Unit:</span> {{prevInvoice.apartmentBlockNumber}}</p>\n                                <p class=\"text-secondary\"><span class=\"font-medium mr-2\">Contact Person:</span> {{prevInvoice.primaryContact}}</p>\n                            </div>\n                            <div class=\"ml-auto pr-4\">\n                                <p class=\"text-secondary\"><span class=\"font-medium mr-2\">Invoice ID:</span> {{prevInvoice.custInvoiceId}}</p>\n                                <p class=\"text-secondary\"><span class=\"font-medium mr-2\">Invoice Date:</span> {{getDate(invoice.postedOn)}}</p>\n                            </div>\n                        </div>\n                        <div class=\"\">{{invoice.length}}</div>\n                        <table class=\"table card-table\" [ngClass]=\"isMobileView()\">\n                            <thead>\n                                <tr>\n                                    <th>Income Accounts</th>\n                                    <th>Rate</th>\n                                    <th>Comments</th>\n                                    <th>Discount</th>\n                                    <th>Tax</th>\n                                    <th>Amount</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of prevInvoice.invoiceGLAccounts; let i = index\">\n                                    <td>{{item.glaccountName}}</td>\n                                    <td>{{item.amount}}</td>\n                                    <td>{{item.comments}}</td>\n                                    <td>{{item.discountAmount}} ({{item.discountTypeId}})</td>\n                                    <td>{{item.vatamount}} <!-- [{{ getVatType(custTaxDetails[i])}}%] --></td>\n                                    <td>{{item.lineItemTotal + item.vatamount}}</td>\n                                </tr>\n                                <tr>\n                                    <td colspan=\"5\">Final Discount:</td>\n                                    <td>{{invoice.invoicefinalinputdiscount}} ({{invoice.finalDiscountTypeName}})</td>\n                                </tr>\n                                <tr class=\"total font-medium\">\n                                    <td colspan=\"5\">Total Amount:</td>\n                                    <td>{{invoice.custInvoiceAmount}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"text-center m-5\">\n                    <button class=\"print\" mat-flat-button [color]=\"'primary'\" (click)=\"printInvoice()\">\n                        <mat-icon class=\"mr-2\" svgIcon=\"feather:printer\"></mat-icon>\n                        Print\n                    </button>\n                </div>\n            </ng-container>\n    \n    \n        </div>\n    </ng-template>\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.scss":
    /*!******************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.scss ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomeAutoInvoicesCreateMonthlyInvoiceCreateMonthlyInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2luY29tZS10cmFja2VyL2luY29tZS1hdXRvLWludm9pY2VzL2NyZWF0ZS1tb250aGx5LWludm9pY2UvY3JlYXRlLW1vbnRobHktaW52b2ljZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.ts":
    /*!****************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.ts ***!
      \****************************************************************************************************************************/

    /*! exports provided: CreateMonthlyInvoiceComponent */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomeAutoInvoicesCreateMonthlyInvoiceCreateMonthlyInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateMonthlyInvoiceComponent", function () {
        return CreateMonthlyInvoiceComponent;
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


      var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Accounts */
      "./src/app/api/controllers/Accounts.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment */
      "./node_modules/moment/moment.js");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var CreateMonthlyInvoiceComponent = /*#__PURE__*/function () {
        function CreateMonthlyInvoiceComponent(accountsService, lookupService, sharedService, sessionService, apartmentService, injector, router) {
          _classCallCheck(this, CreateMonthlyInvoiceComponent);

          this.accountsService = accountsService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.apartmentService = apartmentService;
          this.injector = injector;
          this.router = router;
          this.isAutoInvoicingDataLoaded = false;
          this.glAccountList = [];
          this.billAmountList = [];
          this.vatPecentageDataList = [];
          this.taxPecentageDataList = [];
          this.generateAutoInvoiceForm = [];
          this.showFields = -1;
          this.invoice = {};
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
        }

        _createClass(CreateMonthlyInvoiceComponent, [{
          key: "navigateViewInvoice",
          value: function navigateViewInvoice() {
            this.router.navigate(['ams/income/auto-invoices/view-invoice']);
          }
        }, {
          key: "isMobileView",
          value: function isMobileView() {
            return window.innerWidth <= 767 ? 'table-responsive' : '';
          }
        }, {
          key: "getDateFormat",
          value: function getDateFormat(date) {
            return moment__WEBPACK_IMPORTED_MODULE_8__(date).format("MM-DD-YYYY");
          }
        }, {
          key: "addForm",
          value: function addForm() {
            if (this.generateAutoInvoiceForm.length < 1) {
              var data = {
                typeId: null,
                varAmount: null,
                fixedAmount: null,
                glaccountId: null,
                description: '',
                vatId: null,
                taxId: null
              };
              this.generateAutoInvoiceForm.push(data);
            } //this.showFields = -1;

          }
        }, {
          key: "closeForm",
          value: function closeForm() {
            this.generateAutoInvoiceForm = [];
          }
        }, {
          key: "billAmountChange",
          value: function billAmountChange(data) {
            data.amountCalc = null;
            data.fixedAmount = null;
            data.glaccountId = null;
            data.description = '';
            data.vatId = null;
            data.taxId = null;
          }
        }, {
          key: "addAutoinvoiceConfig",
          value: function addAutoinvoiceConfig(data) {
            var entity = {
              "apartmentId": this.sessionService.apartmentId,
              "billCreationDate": this.invoice.billCreationDate,
              "dueDate": this.invoice.dueDate,
              "insertedBy": this.sessionService.userId,
              "autoInvoiceItem": [{
                "description": data.description,
                "glaccountId": data.glaccountId,
                "typeId": data.typeId,
                "taxId": data.taxId,
                "discountId": 0,
                "varAmount": data.varAmount,
                "fixedAmount": data.fixedAmount,
                "vatId": data.vatId
              }]
            };
            var res;

            if (res.message) {
              this.sharedService.openSnackBar('Auto Invoice Created Successfully', 'success');
            } else {
              this.sharedService.openSnackBar(res.errorMessage, 'error');
            }
          } //Preview Invoice Logic 

        }, {
          key: "showInvoiceTable",
          value: function showInvoiceTable() {
            this.invoiceTable = !this.invoiceTable;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            //Bill Amount List
            var billAmountParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 201
            };
            this.lookupService.getLookupValueByLookupTypeId(billAmountParams).subscribe(function (res) {
              if (res.length > 0) {
                _this.billAmountList = res;
              }
            }); //VAT List

            var vatListParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 77
            };
            this.lookupService.getLookupValueByLookupTypeId(vatListParams).subscribe(function (res) {
              if (res.length > 0) {
                _this.vatPecentageDataList = res;
              }
            }); //TAX List

            var taxListParams = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 183
            };
            this.lookupService.getLookupValueByLookupTypeId(taxListParams).subscribe(function (res) {
              if (res.length > 0) {
                _this.taxPecentageDataList = res;
              }
            }); //GL AccountList

            var queryParamBase = {
              apartmentId: this.sessionService.apartmentId,
              GLAccountTypeId: 165
            };
            this.accountsService.getGlAccountsIdbyGlAccountTypeId(queryParamBase).subscribe(function (res) {
              if (res.length > 0) {
                _this.glAccountList = res;
              }
            });
          }
        }]);

        return CreateMonthlyInvoiceComponent;
      }();

      CreateMonthlyInvoiceComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      CreateMonthlyInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-monthly-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./create-monthly-invoice.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./create-monthly-invoice.component.scss */
        "./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])], CreateMonthlyInvoiceComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-auto-invoices/income-auto-invoices-routing.module.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-auto-invoices/income-auto-invoices-routing.module.ts ***!
      \********************************************************************************************************/

    /*! exports provided: IncomeAutoInvoicesRoutingModule */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomeAutoInvoicesIncomeAutoInvoicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncomeAutoInvoicesRoutingModule", function () {
        return IncomeAutoInvoicesRoutingModule;
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


      var _create_monthly_invoice_create_monthly_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-monthly-invoice/create-monthly-invoice.component */
      "./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.ts");

      var routes = [{
        path: '',
        component: _create_monthly_invoice_create_monthly_invoice_component__WEBPACK_IMPORTED_MODULE_3__["CreateMonthlyInvoiceComponent"]
      }];

      var IncomeAutoInvoicesRoutingModule = function IncomeAutoInvoicesRoutingModule() {
        _classCallCheck(this, IncomeAutoInvoicesRoutingModule);
      };

      IncomeAutoInvoicesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], IncomeAutoInvoicesRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-auto-invoices/income-auto-invoices.module.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-auto-invoices/income-auto-invoices.module.ts ***!
      \************************************************************************************************/

    /*! exports provided: IncomeAutoInvoicesModule */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomeAutoInvoicesIncomeAutoInvoicesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IncomeAutoInvoicesModule", function () {
        return IncomeAutoInvoicesModule;
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


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/list/list.module */
      "./src/app/modules/ui/list/list.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _income_auto_invoices_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./income-auto-invoices-routing.module */
      "./src/app/modules/ams/income-tracker/income-auto-invoices/income-auto-invoices-routing.module.ts");
      /* harmony import */


      var _create_monthly_invoice_create_monthly_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./create-monthly-invoice/create-monthly-invoice.component */
      "./src/app/modules/ams/income-tracker/income-auto-invoices/create-monthly-invoice/create-monthly-invoice.component.ts");
      /* harmony import */


      var _view_monthly_invoice_view_monthly_invoice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./view-monthly-invoice/view-monthly-invoice.component */
      "./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.ts");

      var IncomeAutoInvoicesModule = function IncomeAutoInvoicesModule() {
        _classCallCheck(this, IncomeAutoInvoicesModule);
      };

      IncomeAutoInvoicesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_create_monthly_invoice_create_monthly_invoice_component__WEBPACK_IMPORTED_MODULE_8__["CreateMonthlyInvoiceComponent"], _view_monthly_invoice_view_monthly_invoice_component__WEBPACK_IMPORTED_MODULE_9__["ViewMonthlyInvoiceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_3__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_4__["SelectModule"], src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_5__["ListModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _income_auto_invoices_routing_module__WEBPACK_IMPORTED_MODULE_7__["IncomeAutoInvoicesRoutingModule"]]
      })], IncomeAutoInvoicesModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.scss":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.scss ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomeAutoInvoicesViewMonthlyInvoiceViewMonthlyInvoiceComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2luY29tZS10cmFja2VyL2luY29tZS1hdXRvLWludm9pY2VzL3ZpZXctbW9udGhseS1pbnZvaWNlL3ZpZXctbW9udGhseS1pbnZvaWNlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.ts":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: ViewMonthlyInvoiceComponent */

    /***/
    function srcAppModulesAmsIncomeTrackerIncomeAutoInvoicesViewMonthlyInvoiceViewMonthlyInvoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewMonthlyInvoiceComponent", function () {
        return ViewMonthlyInvoiceComponent;
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


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Accounts */
      "./src/app/api/controllers/Accounts.ts");
      /* harmony import */


      var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Apartment */
      "./src/app/api/controllers/Apartment.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/shared/services/constants.service */
      "./src/app/shared/services/constants.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var underscore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! underscore */
      "./node_modules/underscore/modules/index-all.js");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! html2canvas */
      "./node_modules/html2canvas/dist/html2canvas.js");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! jspdf */
      "./node_modules/jspdf/dist/jspdf.min.js");
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_14__);

      var ViewMonthlyInvoiceComponent = /*#__PURE__*/function () {
        function ViewMonthlyInvoiceComponent(_overlay, _viewContainerRef, dialog, router, accountsService, apartmentService, lookupService, sharedService, constantsService, sessionService) {
          _classCallCheck(this, ViewMonthlyInvoiceComponent);

          this._overlay = _overlay;
          this._viewContainerRef = _viewContainerRef;
          this.dialog = dialog;
          this.router = router;
          this.accountsService = accountsService;
          this.apartmentService = apartmentService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.constantsService = constantsService;
          this.sessionService = sessionService;
          this.prevInvoiceSearch = '';
          this.prevInvoice = {};
        }

        _createClass(ViewMonthlyInvoiceComponent, [{
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
              this.prevColumnData.forEach(function (item) {
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
          key: "onDownloadInvoice",
          value: function onDownloadInvoice(detail) {
            var _this3 = this;

            var row = this.datagrid.getrowdata(detail.rowId);
            this.prevInvoice = {};
            var invoiceParams = {
              apartmentId: this.sessionService.apartmentId,
              invoiceId: row.custInvoiceId
            };
            this.accountsService.getCustInvoicesByApartmentId(invoiceParams).subscribe(function (res) {
              _this3.prevInvoice = res[0];
              var params = {
                apartmentId: _this3.sessionService.apartmentId,
                invoiceId: 2
              };
              _this3.isInvoicePrintLoaded = true;
            });
            this.dialog.open(this.viewInvoiceDetailsRef, {
              panelClass: 'material-dialog-big'
            });
          }
        }, {
          key: "getAllInvoicesData",
          value: function getAllInvoicesData(fromDate, toDate) {
            var _this4 = this;

            var params = {
              apartmentId: this.sessionService.apartmentId,
              InvoiceFromDate: fromDate,
              InvoiceToDate: toDate
            };
            this.accountsService.getCustInvoicesByApartmentIdNew(params).subscribe(function (res) {
              var invoiceDataList = res.responseData.value;
              underscore__WEBPACK_IMPORTED_MODULE_12__["each"](invoiceDataList, function (item) {
                item.towerUnit = item.apartmentBlockNumber + ' ' + item.apartmentBlockUnitNumber;
              });
              _this4.prevTotalItems = invoiceDataList.length;
              var tableInfo = {
                localdata: invoiceDataList,
                datatype: "array"
              };
              _this4.prevInvoiceDataList = new jqx.dataAdapter(tableInfo);
            });
          }
        }, {
          key: "printInvoice",
          value: function printInvoice() {
            var data = document.getElementById('InvoiceElement');
            html2canvas__WEBPACK_IMPORTED_MODULE_13___default()(data).then(function (canvas) {
              var imgWidth = 208;
              var pageHeight = 295;
              var imgHeight = canvas.height * imgWidth / canvas.width;
              var heightLeft = imgHeight;
              var contentDataURL = canvas.toDataURL('image/png');
              var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_14__('p', 'mm', 'a4'); // A4 size page of PDF  

              var position = 0;
              pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
              pdf.save('invoice.pdf');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllInvoicesData('', '');

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.prevColumnData = [{
              text: 'Serial No',
              datafield: 'serialNo',
              width: 120,
              pinned: true,
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell"><a href="javascript:void(0)" class="mr-2 t-decor" onClick="downloadInvoiceEvent(' + row + ')">' + value + '</a></div>';
              },
              renderer: columnrenderer
            }, {
              text: 'Posted By',
              datafield: 'insertedBy_Label',
              minwidth: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Tower Unit',
              datafield: 'block_Unit',
              minwidth: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Due',
              datafield: 'custInvoiceAmount',
              minwidth: 150,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Due Date',
              datafield: 'dueDate',
              minwidth: 120,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }];
          }
        }]);

        return ViewMonthlyInvoiceComponent;
      }();

      ViewMonthlyInvoiceComponent.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_6__["AccountsService"]
        }, {
          type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }, {
          type: src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]
        }];
      };

      ViewMonthlyInvoiceComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        viewInvoiceDetailsRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ["viewInvoiceDetailsRef", {
            "static": false
          }]
        }],
        onDownloadInvoice: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onDownloadInvoice', ['$event.detail']]
        }]
      };
      ViewMonthlyInvoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-monthly-invoice',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./view-monthly-invoice.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./view-monthly-invoice.component.scss */
        "./src/app/modules/ams/income-tracker/income-auto-invoices/view-monthly-invoice/view-monthly-invoice.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_6__["AccountsService"], src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_7__["ApartmentService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_8__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"], src_app_shared_services_constants_service__WEBPACK_IMPORTED_MODULE_10__["ConstantsService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_11__["SessionService"]])], ViewMonthlyInvoiceComponent);

      var downloadInvoiceEvent = function downloadInvoiceEvent(row) {
        var event = new CustomEvent('onDownloadInvoice', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      };

      window.downloadInvoiceEvent = downloadInvoiceEvent;
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-income-tracker-income-auto-invoices-income-auto-invoices-module-es5.js.map