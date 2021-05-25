(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-assets-assets-setup-assets-setup-depreciation-assets-setup-depreciation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"assets-setup-depreciation-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isError\">\n\n        <!-- Message -->\n       <condo-message *ngIf=\"message\" [appearance]=\"message.appearance\" [showIcon]=\"message.showIcon\" [type]=\"message.type\" [@shake]=\"message.shake\">\n         {{message.content}}\n       </condo-message>\n\n      </ng-container>\n\n    <ng-container *ngIf=\"isDataLoaded\">\n\n        <h4 class=\"my-4\">Depreciaton methods</h4>\n\n        <div>\n            <div class=\"bg-card shadow\">\n                <div class=\"setup-slide\" *ngFor=\"let list of depreciatonData\">\n                    <mat-slide-toggle *ngIf=\"list.isCommon\" [(ngModel)]=\"list.isCheck\"  (change)=\"updateDepreciatonList(list)\">{{list.lookupValueName}}</mat-slide-toggle>\n                    <p class=\"my-3 font-medium text-secondary\" *ngIf=\"!list.isCommon\">{{list.lookupValueName}}</p>\n                </div>\n            </div>\n        </div>\n\n    </ng-container>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation-routing.module.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation-routing.module.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: AssetsSetupDepreciationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsSetupDepreciationRoutingModule", function() { return AssetsSetupDepreciationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _assets_setup_depreciation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets-setup-depreciation.component */ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.ts");




const routes = [
    { path: '', component: _assets_setup_depreciation_component__WEBPACK_IMPORTED_MODULE_3__["AssetsSetupDepreciationComponent"] }
];
let AssetsSetupDepreciationRoutingModule = class AssetsSetupDepreciationRoutingModule {
};
AssetsSetupDepreciationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssetsSetupDepreciationRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.scss ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2Fzc2V0cy9hc3NldHMtc2V0dXAvYXNzZXRzLXNldHVwLWRlcHJlY2lhdGlvbi9hc3NldHMtc2V0dXAtZGVwcmVjaWF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AssetsSetupDepreciationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsSetupDepreciationComponent", function() { return AssetsSetupDepreciationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");





let AssetsSetupDepreciationComponent = class AssetsSetupDepreciationComponent {
    constructor(lookupService, sharedService, sessionService) {
        this.lookupService = lookupService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.isDataLoaded = false;
        this.isError = false;
        this.message = null;
    }
    getDepreciatonList() {
        this.isDataLoaded = false;
        let queryParamBase = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 104,
        };
        this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe((res) => {
            if (res) {
                this.isDataLoaded = true;
                this.depreciatonData = res ? res : [];
                if (this.depreciatonData && this.depreciatonData.length) {
                    this.depreciatonData.filter(val => {
                        val.isCheck = val.isDisabled == true ? false : true;
                    });
                }
            }
        });
    }
    updateDepreciatonList(data) {
        this.isDataLoaded = false;
        let reqObj = {
            "lookupValueId": data.lookupValueId,
            "lookupTypeId": 104,
            "lookupValueName": data.lookupValueName,
            "description": data.description,
            'apartmentId': this.sessionService.apartmentId,
            "isActive": true,
            "insertedBy": parseInt(this.sessionService.userId),
            "insertedOn": new Date(),
            "updatedBy": parseInt(this.sessionService.userId),
            "updatedOn": new Date(),
            "isDisabled": !data.isCheck
        };
        console.log(reqObj);
        let param = {
            lookupvalue: reqObj
        };
        this.lookupService.updateLookupValue(param).subscribe((res) => {
            if (res) {
                this.sharedService.openSnackBar("Depreciaton method  updated successfully", 'success');
                this.isDataLoaded = true;
                this.getDepreciatonList();
            }
            else if (res.body.errorMessage) {
                this.isDataLoaded = true;
            }
        });
    }
    ngOnInit() {
        this.getDepreciatonList();
    }
};
AssetsSetupDepreciationComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
AssetsSetupDepreciationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-setup-depreciation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-setup-depreciation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-setup-depreciation.component.scss */ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_2__["LookupService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], AssetsSetupDepreciationComponent);



/***/ }),

/***/ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.module.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AssetsSetupDepreciationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsSetupDepreciationModule", function() { return AssetsSetupDepreciationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/ui/list/list.module */ "./src/app/modules/ui/list/list.module.ts");
/* harmony import */ var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/ui/message/message.module */ "./src/app/modules/ui/message/message.module.ts");
/* harmony import */ var _assets_setup_depreciation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets-setup-depreciation.component */ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation.component.ts");
/* harmony import */ var _assets_setup_depreciation_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets-setup-depreciation-routing.module */ "./src/app/modules/ams/assets/assets-setup/assets-setup-depreciation/assets-setup-depreciation-routing.module.ts");










let AssetsSetupDepreciationModule = class AssetsSetupDepreciationModule {
};
AssetsSetupDepreciationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assets_setup_depreciation_component__WEBPACK_IMPORTED_MODULE_8__["AssetsSetupDepreciationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
            src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
            src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_7__["CondoMessageModule"],
            _assets_setup_depreciation_routing_module__WEBPACK_IMPORTED_MODULE_9__["AssetsSetupDepreciationRoutingModule"]
        ]
    })
], AssetsSetupDepreciationModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-ams-assets-assets-setup-assets-setup-depreciation-assets-setup-depreciation-module-es2015.js.map