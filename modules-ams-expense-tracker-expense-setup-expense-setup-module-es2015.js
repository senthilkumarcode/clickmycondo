(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-expense-tracker-expense-setup-expense-setup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"expense-tracker-setup-wrapper\">  \n    <div class=\"main\">\n      <h4 class=\"mb-4\">Settings</h4>\n      <div class=\"bg-card shadow p-0\">\n        <nav mat-tab-nav-bar>\n          <a mat-tab-link \n            *ngFor=\"let link of navArray\" \n            [routerLink]=\"link.link\" \n            routerLinkActive #rla=\"routerLinkActive\" [active]=\"rla.isActive\">\n            {{link.name}}\n          </a>\n        </nav>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.html":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.html ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"expense-tracker-setup-general-wrapper mt-3\">\n    <form>\n        <mat-accordion>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>Select TAX</mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-panel-description>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 col-lg-6\">\n                            <div class=\"input-box\">\n                                <label>% TAX</label>\n                                <input  type=\"text\" class=\"form-control\" placeholder=\"TAX\" [(ngModel)]=\"taxData.lookupValueName\" \n                                name=\"taxPercentage\" [disabled]=\"isEditTax\">\n                                <div class=\"date-btn\">\n                                    <mat-icon *ngIf=\"isEditTax\" (click)=\"isEditTax = !isEditTax\" svgIcon=\"feather:edit\"></mat-icon>\n                                    <mat-icon *ngIf=\"!isEditTax\" (click)=\"saveTax()\" svgIcon=\"feather:save\"></mat-icon>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </mat-panel-description>\n            </mat-expansion-panel>\n            <mat-expansion-panel>\n                <mat-expansion-panel-header>\n                    <mat-panel-title>Select With Holding TAX</mat-panel-title>\n                </mat-expansion-panel-header>\n                <mat-panel-description>\n                    <div class=\"row\">\n                        <div class=\"col-md-12 col-lg-6\">\n                            \n                        </div>\n                    </div>\n                </mat-panel-description>\n            </mat-expansion-panel>\n        </mat-accordion>\n    </form>\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/ams/expense-tracker/expense-setup/expense-setup-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ExpenseSetupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseSetupRoutingModule", function() { return ExpenseSetupRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _expense_setup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-setup.component */ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.ts");
/* harmony import */ var _expense_tracker_setup_general_expense_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-tracker-setup-general/expense-tracker-setup-general.component */ "./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.ts");





const routes = [
    { path: '', component: _expense_setup_component__WEBPACK_IMPORTED_MODULE_3__["ExpenseSetupComponent"],
        children: [
            { path: '', redirectTo: 'general' },
            { path: 'general', component: _expense_tracker_setup_general_expense_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseTrackerSetupGeneralComponent"] }
        ]
    }
];
let ExpenseSetupRoutingModule = class ExpenseSetupRoutingModule {
};
ExpenseSetupRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ExpenseSetupRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2V4cGVuc2UtdHJhY2tlci9leHBlbnNlLXNldHVwL2V4cGVuc2Utc2V0dXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ExpenseSetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseSetupComponent", function() { return ExpenseSetupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExpenseSetupComponent = class ExpenseSetupComponent {
    constructor() {
        this.navArray = [
            { link: 'general', name: 'General' },
        ];
    }
    ngOnInit() {
    }
};
ExpenseSetupComponent.ctorParameters = () => [];
ExpenseSetupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-setup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./expense-setup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./expense-setup.component.scss */ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExpenseSetupComponent);



/***/ }),

/***/ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ExpenseSetupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseSetupModule", function() { return ExpenseSetupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _expense_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense-setup-routing.module */ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup-routing.module.ts");
/* harmony import */ var _expense_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expense-setup.component */ "./src/app/modules/ams/expense-tracker/expense-setup/expense-setup.component.ts");
/* harmony import */ var _expense_tracker_setup_general_expense_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-tracker-setup-general/expense-tracker-setup-general.component */ "./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/ui/list/list.module */ "./src/app/modules/ui/list/list.module.ts");










let ExpenseSetupModule = class ExpenseSetupModule {
};
ExpenseSetupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_expense_setup_component__WEBPACK_IMPORTED_MODULE_4__["ExpenseSetupComponent"], _expense_tracker_setup_general_expense_tracker_setup_general_component__WEBPACK_IMPORTED_MODULE_5__["ExpenseTrackerSetupGeneralComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_7__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_8__["SelectModule"],
            src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_9__["ListModule"],
            _expense_setup_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExpenseSetupRoutingModule"]
        ]
    })
], ExpenseSetupModule);



/***/ }),

/***/ "./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2V4cGVuc2UtdHJhY2tlci9leHBlbnNlLXNldHVwL2V4cGVuc2UtdHJhY2tlci1zZXR1cC1nZW5lcmFsL2V4cGVuc2UtdHJhY2tlci1zZXR1cC1nZW5lcmFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.ts":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: ExpenseTrackerSetupGeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseTrackerSetupGeneralComponent", function() { return ExpenseTrackerSetupGeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Accounts */ "./src/app/api/controllers/Accounts.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");






let ExpenseTrackerSetupGeneralComponent = class ExpenseTrackerSetupGeneralComponent {
    constructor(accountsService, lookupService, sharedService, sessionService) {
        this.accountsService = accountsService;
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        // tax
        this.taxData = {};
        this.isEditTax = true;
    }
    getCustomerTaxList() {
        //Tax
        let taxListParams = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 183
        };
        this.lookupService.getLookupValueByLookupTypeId(taxListParams).subscribe((res) => {
            if (res.length > 0)
                this.taxData = res[0];
        });
    }
    saveTax() {
        if (this.taxData.lookupValueId) {
            //Edit
            let params = {
                lookupvalue: {
                    "lookupValueId": this.taxData.lookupValueId,
                    "apartmentId": this.sessionService.apartmentId,
                    "lookupTypeId": 183,
                    "lookupValueName": this.taxData.lookupValueName,
                    "description": this.taxData.lookupValueName,
                    "isActive": true,
                    "updatedBy": parseInt(this.sessionService.userId),
                    "updatedOn": new Date().toISOString(),
                }
            };
            this.lookupService.updateLookupValue(params).subscribe((res) => {
                if (res) {
                    this.getCustomerTaxList();
                    this.isEditTax = true;
                }
            });
        }
        else {
            //create
            let params = {
                lookupvalue: {
                    "apartmentId": this.sessionService.apartmentId,
                    "lookupTypeId": 183,
                    "lookupValueName": this.taxData.lookupValueName,
                    "description": this.taxData.lookupValueName,
                    "isActive": true,
                    "insertedBy": parseInt(this.sessionService.userId),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": null,
                    "updatedOn": null,
                }
            };
            this.lookupService.addLookupValue(params).subscribe((res) => {
                if (res) {
                    this.taxData.lookupValueId = res.message;
                    this.isEditTax = true;
                }
            });
        }
    }
    ngOnInit() {
        this.getCustomerTaxList();
    }
};
ExpenseTrackerSetupGeneralComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
ExpenseTrackerSetupGeneralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-tracker-setup-general',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./expense-tracker-setup-general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./expense-tracker-setup-general.component.scss */ "./src/app/modules/ams/expense-tracker/expense-setup/expense-tracker-setup-general/expense-tracker-setup-general.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Accounts__WEBPACK_IMPORTED_MODULE_2__["AccountsService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
], ExpenseTrackerSetupGeneralComponent);



/***/ })

}]);
//# sourceMappingURL=modules-ams-expense-tracker-expense-setup-expense-setup-module-es2015.js.map