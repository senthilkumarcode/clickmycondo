(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-bank-cash-bank-cash-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/bank-cash/bank-cash.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/bank-cash/bank-cash.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsBankCashBankCashComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>bank-cash works!</p>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.html":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsBankCashComponentsBankSettingsBankSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"bank-setup-wrapper\">\n\n\t<app-loader *ngIf=\"!isBankLoaded\"></app-loader>\n\n\t<div class=\"category-list list-boxes\" *ngIf=\"isBankLoaded\">\n\t\t<h4 class=\"main-title-mini\">Bank Accounts</h4>\n\t\t<ng-container *ngFor=\"let item of bankAccountData; let i = index\">\n\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t<div class=\"card\">\n\t\t\t\t\t<div class=\"card-body nohover\">\n\t\t\t\t\t\t<div class=\"icons\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showBankAccountInfo(unit)\"><i-feather class=\"icon view\" name=\"eye\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i-feather class=\"icon edit\" name=\"edit\" (click)=\"updatebankAccount(item, i)\"></i-feather></a>\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\" (click)=\"showConfirmModal(item.bankAccountDetailsId)\"><i-feather class=\"icon delete\" name=\"trash\"></i-feather></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h6>{{item.accountNumber}}</h6>\n\t\t\t\t\t\t<h6 class=\"mb-3 mt-0\">{{item.accountHolderName}}</h6>\n\t\t\t\t\t\t<p class=\"small\">{{item.bankName}} - {{item.branchName}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ng-container>\n\t\t<li class=\"list-inline-item\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"card-body new text-center\">\n\t\t\t\t\t<a href=\"javascript:void(0)\" class=\"rounded-btn green\" (click)=\"addNewbankAccount()\">\n\t\t\t\t\t\t<div class=\"icon\">+</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h6 class=\"tc-green\">Add Bank Account</h6>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</li>\n\t</div>\n\n\t<div class=\"card mt-5\" *ngIf=\"isBankNew || isBankUpdate\">\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h6 *ngIf=\"isBankNew\">Add Bank Account</h6>\n    \t\t\t<h6 *ngIf=\"!isBankNew\">Update Bank Account</h6>\n    \t\t</div>\n    \t\t<div class=\"float-right\" (click)=\"removeBankBox()\">\n    \t\t\t<i-feather class=\"icon del\" name=\"x\"></i-feather>\n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\">\n\t\t\t\n\t\t\t<app-alert-message [message]=\"alertTicketMessage\" [isError]=\"isError\"></app-alert-message>\n\n\t\t\t<app-loader *ngIf=\"!isBankSubmitted\"></app-loader>\n\n\t\t\t<ng-container *ngIf=\"isBankSubmitted\">\n\t\t\t\t\n\t\t\t\t<form #addbankAccountForm = \"ngForm\" name=\"addbankAccountForm\" (ngSubmit)=\"submitbankAccountForm(addbankAccountForm)\"  novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Bank Account No*</label>\n\t\t\t                    <input type=\"number\" OnlyNumber=\"true\" class=\"form-control\" placeholder=\"Enter\" name=\"bankAccountNo\" [(ngModel)]=\"bank.accountNumber\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Bank Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"bankName\" [(ngModel)]=\"bank.bankName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Bank Branch Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"branchName\" [(ngModel)]=\"bank.branchName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Account Holder Name*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"accountHolderName\" [(ngModel)]=\"bank.accountHolderName\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>IFSC Code*</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter\" name=\"accountifsc\" [(ngModel)]=\"bank.ifsc\" required>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box d-inline-block oh\">\n\t\t\t\t\t\t\t\t<div class=\"form-group mt-sm-35\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-check recur-check float-left\">\n\t\t\t\t\t\t\t\t\t    <input type=\"checkbox\" class=\"form-check-input\" id=\"accountisPrimary\" name=\"accountisPrimary\" [(ngModel)]=\"bank.isPrimary\">\n\t\t\t\t\t\t\t\t\t    <label class=\"form-check-label tiny\" for=\"accountisPrimary\">Is Primary</label>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\n\t\t\t</ng-container>\n\n\t\t</div>\n\t</div>\n\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/bank-cash/bank-cash-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/ams/bank-cash/bank-cash-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: BankCashRoutingModule */

    /***/
    function srcAppModulesAmsBankCashBankCashRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BankCashRoutingModule", function () {
        return BankCashRoutingModule;
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


      var _bank_cash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bank-cash.component */
      "./src/app/modules/ams/bank-cash/bank-cash.component.ts");
      /* harmony import */


      var _components_bank_settings_bank_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/bank-settings/bank-settings.component */
      "./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.ts");

      var routes = [{
        path: '',
        component: _bank_cash_component__WEBPACK_IMPORTED_MODULE_3__["BankCashComponent"]
      }, {
        path: 'bank',
        component: _bank_cash_component__WEBPACK_IMPORTED_MODULE_3__["BankCashComponent"]
      }, {
        path: 'settings',
        component: _components_bank_settings_bank_settings_component__WEBPACK_IMPORTED_MODULE_4__["BankSettingsComponent"]
      }];

      var BankCashRoutingModule = function BankCashRoutingModule() {
        _classCallCheck(this, BankCashRoutingModule);
      };

      BankCashRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BankCashRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/bank-cash/bank-cash.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/modules/ams/bank-cash/bank-cash.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsBankCashBankCashComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2JhbmstY2FzaC9iYW5rLWNhc2guY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/bank-cash/bank-cash.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/modules/ams/bank-cash/bank-cash.component.ts ***!
      \**************************************************************/

    /*! exports provided: BankCashComponent */

    /***/
    function srcAppModulesAmsBankCashBankCashComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BankCashComponent", function () {
        return BankCashComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var BankCashComponent = /*#__PURE__*/function () {
        function BankCashComponent() {
          _classCallCheck(this, BankCashComponent);
        }

        _createClass(BankCashComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BankCashComponent;
      }();

      BankCashComponent.ctorParameters = function () {
        return [];
      };

      BankCashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-cash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bank-cash.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/bank-cash/bank-cash.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bank-cash.component.scss */
        "./src/app/modules/ams/bank-cash/bank-cash.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BankCashComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/bank-cash/bank-cash.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/modules/ams/bank-cash/bank-cash.module.ts ***!
      \***********************************************************/

    /*! exports provided: BankCashModule */

    /***/
    function srcAppModulesAmsBankCashBankCashModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BankCashModule", function () {
        return BankCashModule;
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


      var _bank_cash_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./bank-cash-routing.module */
      "./src/app/modules/ams/bank-cash/bank-cash-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _bank_cash_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./bank-cash.component */
      "./src/app/modules/ams/bank-cash/bank-cash.component.ts");
      /* harmony import */


      var _components_bank_settings_bank_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/bank-settings/bank-settings.component */
      "./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.ts");

      var BankCashModule = function BankCashModule() {
        _classCallCheck(this, BankCashModule);
      };

      BankCashModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_bank_cash_component__WEBPACK_IMPORTED_MODULE_5__["BankCashComponent"], _components_bank_settings_bank_settings_component__WEBPACK_IMPORTED_MODULE_6__["BankSettingsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _bank_cash_routing_module__WEBPACK_IMPORTED_MODULE_3__["BankCashRoutingModule"]]
      })], BankCashModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.scss":
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.scss ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsBankCashComponentsBankSettingsBankSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2JhbmstY2FzaC9jb21wb25lbnRzL2Jhbmstc2V0dGluZ3MvYmFuay1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: BankSettingsComponent */

    /***/
    function srcAppModulesAmsBankCashComponentsBankSettingsBankSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BankSettingsComponent", function () {
        return BankSettingsComponent;
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


      var src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/BankAccount */
      "./src/app/api/controllers/BankAccount.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! moment-timezone */
      "./node_modules/moment-timezone/index.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_8__);

      var BankSettingsComponent = /*#__PURE__*/function () {
        function BankSettingsComponent(injector, dialog, bankAccountService, lookupService, sharedService, sessionService) {
          _classCallCheck(this, BankSettingsComponent);

          this.injector = injector;
          this.dialog = dialog;
          this.bankAccountService = bankAccountService;
          this.lookupService = lookupService;
          this.sharedService = sharedService;
          this.sessionService = sessionService;
          this.isBankLoaded = false;
          this.isBankSubmitted = true;
          this.isBankNew = false;
          this.isBankUpdate = false;
          this.alertMessage = "";
          this.isError = false;
          this.isSuccess = false;
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
        }

        _createClass(BankSettingsComponent, [{
          key: "addNewbankAccount",
          value: function addNewbankAccount() {
            this.isBankNew = true;
            this.isBankUpdate = false;
            this.bank = {};
          }
        }, {
          key: "updatebankAccount",
          value: function updatebankAccount(item) {
            this.isBankUpdate = true;
            this.isBankNew = false;
            this.bank = item;
          }
        }, {
          key: "removeBankBox",
          value: function removeBankBox() {
            this.isBankNew = false;
            this.isBankUpdate = false;
            this.isError = false;
          }
        }, {
          key: "showConfirmModal",
          value: function showConfirmModal(id) {
            this.modalService.showConfirmModal(id);
          }
        }, {
          key: "showBankAccountInfo",
          value: function showBankAccountInfo(acc) {}
        }, {
          key: "submitbankAccountForm",
          value: function submitbankAccountForm(form) {
            var _this = this;

            this.isBankSubmitted = false;

            if (this.isBankNew) {
              var details = {
                "apartmentId": this.sessionService.apartmentId,
                "bankName": this.bank.bankName,
                "branchName": this.bank.branchName,
                "accountNumber": this.bank.accountNumber,
                "accountHolderName": this.bank.accountHolderName,
                "ifsc": this.bank.ifsc,
                "isPrimary": this.bank.isPrimary,
                "isActive": true,
                "insertedBy": parseInt(this.sessionService.userId),
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null
              };
              var bankAccountDetails = {
                bankAccountDetails: details
              };
              this.bankAccountService.addBankAccountDetails(bankAccountDetails).subscribe(function (res) {
                if (res.message) {
                  _this.bankAccountService.getAllBankAccountDetails().subscribe(function (res) {
                    _this.isBankSubmitted = true;
                    _this.isBankNew = false;
                    _this.isBankUpdate = false;
                    _this.isSuccess = true;

                    _this.sharedService.setAlertMessage("Bank Account Added Successfully");

                    _this.bankAccountData = res.filter(function (item) {
                      return item.isActive && item.apartmentId == _this.sessionService.apartmentId;
                    });
                  });
                } else {
                  _this.isBankSubmitted = true;
                  _this.isError = true;
                  _this.alertMessage = res.errorMessage;
                }
              });
            } else {
              var _details = {
                "bankAccountDetailsId": this.bank.bankAccountDetailsId,
                "apartmentId": this.sessionService.apartmentId,
                "bankName": this.bank.bankName,
                "branchName": this.bank.branchName,
                "accountNumber": this.bank.accountNumber,
                "accountHolderName": this.bank.accountHolderName,
                "ifsc": this.bank.ifsc,
                "isPrimary": this.bank.isPrimary,
                "isActive": this.bank.isActive,
                "insertedBy": this.bank.insertedBy,
                "insertedOn": this.bank.insertedOn,
                "updatedBy": parseInt(this.sessionService.userId),
                "updatedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_8___default()().toISOString()
              };
              var _bankAccountDetails = {
                bankAccountDetails: _details
              };
              this.bankAccountService.updateBankAccountDetails(_bankAccountDetails).subscribe(function (res) {
                if (res.message) {
                  _this.bankAccountService.getAllBankAccountDetails().subscribe(function (res) {
                    _this.isBankSubmitted = true;
                    _this.isBankNew = false;
                    _this.isBankUpdate = false;
                    _this.isSuccess = true;

                    _this.sharedService.setAlertMessage("Bank Account Update Successfully");

                    _this.bankAccountData = res.filter(function (item) {
                      return item.isActive && item.apartmentId == _this.sessionService.apartmentId;
                    });
                  });
                } else {
                  _this.isBankSubmitted = true;
                  _this.isError = true;
                  _this.alertMessage = res.errorMessage;
                }
              });
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.bank = {};
            this.bankAccountService.getAllBankAccountDetails().subscribe(function (res) {
              _this2.isBankLoaded = true;
              _this2.bankAccountData = res.filter(function (item) {
                return item.isActive && item.apartmentId == _this2.sessionService.apartmentId;
              });
            }); // delete account

            this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
              if (id != null) {
                _this2.isBankLoaded = false;
                var params = {
                  bankAccountDetailsId: id,
                  deleteBy: parseInt(_this2.sessionService.userId)
                };

                _this2.bankAccountService.deleteBankAccountDetails(params).subscribe(function (res) {
                  _this2.bankAccountData = _this2.bankAccountData.filter(function (type) {
                    return type.bankAccountDetailsId !== id;
                  });
                  _this2.isBankLoaded = true;

                  _this2.sharedService.setAlertMessage("Bank Account deleted");

                  _this2.sharedService.setUnitListDeleteIndex(null);
                }, function (error) {});
              }
            });
          }
        }]);

        return BankSettingsComponent;
      }();

      BankSettingsComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_3__["BankAccountService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }];
      };

      BankSettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bank-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./bank-settings.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./bank-settings.component.scss */
        "./src/app/modules/ams/bank-cash/components/bank-settings/bank-settings.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_api_controllers_BankAccount__WEBPACK_IMPORTED_MODULE_3__["BankAccountService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]])], BankSettingsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-bank-cash-bank-cash-module-es5.js.map