(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-inventory-inventory-setup-inventory-setup-material-type-inventory-setup-material-type-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.html":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.html ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"inventory-setup-material-type-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isError\">\n\n        <!-- Message -->\n       <condo-message *ngIf=\"message\" [appearance]=\"message.appearance\" [showIcon]=\"message.showIcon\" [type]=\"message.type\" [@shake]=\"message.shake\">\n         {{message.content}}\n       </condo-message>\n\n      </ng-container>\n\n    <ng-container *ngIf=\"isDataLoaded\">\n\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>All Material Type</h4>\n                        <p class=\"text-secondary\">{{materialList?.length}} Items</p>\n                    </div>\n                    <div class=\"ml-auto d-none d-md-block mr-3\">\n                        <input type=\"text\" class=\"form-control  \" placeholder=\"Search...\" name=\"searchType\"\n                            [(ngModel)]=\"searchType\">\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <form>\n                    <table class=\"table\" [ngClass]=\"isMobileView()\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Material Type Name\n                                    <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n                                <th scope=\"col\" (click)=\"sortUnitData('description')\">Descripition\n                                    <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n                                <th scope=\"col\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <ng-container>\n                                <tr class=\"create-box-shadow\">\n                                    <td>\n                                        <div class=\"input-box\">\n                                            <input type=\"text\" class=\"form-control\" name=\"typeName\"\n                                                [(ngModel)]=\"typeRow.lookupValueName\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"input-box\">\n                                            <input type=\"text\" class=\"form-control\" name=\"descrip\"\n                                                [(ngModel)]=\"typeRow.description\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <mat-icon class=\"mt-4 p-1\" svgIcon=\"mat_outline:save\"\n                                            [ngClass]=\"!typeRow.lookupValueName || !typeRow.description ?'custom-icon-disabled':''\"\n                                            (click)=\"addMaterialType(typeRow)\"></mat-icon>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                            <ng-container\n                                *ngFor=\"let typeList of materialList | simpleSearch: searchType;let materialIndex=index\">\n                                <tr>\n                                    <td>\n                                        <span\n                                            [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">{{typeList.lookupValueName}}</span>\n    \n                                        <div class=\"input-box\" *ngIf=\"currMaterialIndex == materialIndex\">\n    \n                                            <input type=\"text\" class=\"form-control\" name=\"lookupValueName\"\n                                                [(ngModel)]=\"typeList.lookupValueName\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <span [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">\n                                            {{typeList.description}}\n                                        </span>\n    \n                                        <div class=\"input-box\" *ngIf=\"currMaterialIndex == materialIndex\">\n    \n                                            <input type=\"text\" class=\"form-control\" name=\"description\"\n                                                [(ngModel)]=\"typeList.description\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"d-flex  align-items-center\">\n    \n                                            <span\n                                                [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">\n                                                <mat-icon [svgIcon]=\"'feather:edit'\" class=\"pt-2\"\n                                                    (click)=\"currMaterialIndex = materialIndex;setCurrentData(typeList)\"></mat-icon>\n                                            </span>\n                                            <div class=\"pt-3 d-flex\">\n                                                <mat-icon class=\"pt-1\" svgIcon=\"mat_outline:save\"\n                                                    [ngClass]=\"!typeList.lookupValueName || !typeList.description ?'custom-icon-disabled':''\"\n                                                    *ngIf=\"currMaterialIndex == materialIndex\"\n                                                    (click)=\"updateMaterial(typeList)\"></mat-icon>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                <mat-icon [svgIcon]=\"'close'\" class=\"pt-1\" title=\"cancel\"\n                                                    *ngIf=\"currMaterialIndex == materialIndex\"\n                                                    (click)=\"currMaterialIndex = -1;cancelMaterialType()\"></mat-icon>\n                                            </div>\n                                            <span\n                                                [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">\n                                                <mat-icon [svgIcon]=\"'feather:trash-2'\"\n                                                    class=\"pt-2 text-red-900\"\n                                                    (click)=\"deleteRow(typeList)\"></mat-icon>\n                                            </span>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                        </tbody>\n                    </table>\n    \n                </form>\t\t\t\t\n    \n            </div>\n        </condo-card>\n\n    </ng-container>\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type-routing.module.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type-routing.module.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: InventorySetupMaterialTypeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySetupMaterialTypeRoutingModule", function() { return InventorySetupMaterialTypeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory-setup-material-type.component */ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts");




const routes = [{
        path: '', component: _inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_3__["InventorySetupMaterialTypeComponent"]
    }];
let InventorySetupMaterialTypeRoutingModule = class InventorySetupMaterialTypeRoutingModule {
};
InventorySetupMaterialTypeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InventorySetupMaterialTypeRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.scss":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.scss ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ludmVudG9yeS9pbnZlbnRvcnktc2V0dXAvaW52ZW50b3J5LXNldHVwLW1hdGVyaWFsLXR5cGUvaW52ZW50b3J5LXNldHVwLW1hdGVyaWFsLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: InventorySetupMaterialTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySetupMaterialTypeComponent", function() { return InventorySetupMaterialTypeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/PurchaseOrder */ "./src/app/api/controllers/PurchaseOrder.ts");
/* harmony import */ var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Staff */ "./src/app/api/controllers/Staff.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");









let InventorySetupMaterialTypeComponent = class InventorySetupMaterialTypeComponent {
    constructor(dialog, injector, purchaseOrderService, staffService, sharedService, lookupService, sessionService) {
        this.dialog = dialog;
        this.injector = injector;
        this.purchaseOrderService = purchaseOrderService;
        this.staffService = staffService;
        this.sharedService = sharedService;
        this.lookupService = lookupService;
        this.sessionService = sessionService;
        this.isDataLoaded = false;
        this.isError = false;
        this.ItemStartIndex = 0;
        this.itemLimit = 10;
        this.materialList = [];
        this.tempMaterialList = [];
        this.typeItemStartIndex = 0;
        this.typeItemLimit = 10;
        this.typeRow = {};
        this.searchType = "";
        this.unitFieldType = "unitno";
        this.unitOrder = false;
        this.backupMaterialType = {};
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    isMobileView() {
        return window.innerWidth <= 767 ? 'table-responsive' : '';
    }
    sortUnitData(type) {
        this.unitFieldType = type;
        this.unitOrder = !this.unitOrder;
    }
    getFieldOrderBy(type) {
        if (this.unitFieldType == type) {
            return this.unitOrder ? 'desc' : 'asc';
        }
        else
            return '';
    }
    getAllMaterial() {
        let queryParamBase = {};
        queryParamBase = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 186
        };
        this.isDataLoaded = false;
        this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe((res) => {
            if (res) {
                this.isDataLoaded = true;
                this.materialList = res ? res.reverse() : [];
                this.tempMaterialList = this.materialList;
                this.typeTotalItems = this.materialList.length;
                if (this.typeTotalItems > this.typeItemLimit) {
                    this.typeItemEndIndex = this.typeItemLimit;
                }
                else {
                    this.typeItemEndIndex = this.typeTotalItems;
                }
            }
        });
    }
    addMaterialType(data) {
        let reqObj = {};
        reqObj = {
            "lookupValueId": 0,
            'apartmentId': this.sessionService.apartmentId,
            "lookupTypeId": 186,
            "lookupValueName": data.lookupValueName,
            "description": data.description,
            "isActive": true,
            "insertedBy": parseInt(this.sessionService.userId),
            "insertedOn": new Date(),
            "updatedBy": parseInt(this.sessionService.userId),
            "updatedOn": new Date(),
            "isDisabled": true
        };
        this.isDataLoaded = false;
        let param = {};
        param.lookupvalue = reqObj;
        this.lookupService.addLookupValue(param).subscribe((res) => {
            if (res.code == 200) {
                this.isDataLoaded = true;
                this.typeRow = {};
                this.getAllMaterial();
                this.sharedService.openSnackBar('Material Type created successFully', 'success');
            }
            else {
                this.isDataLoaded = true;
                this.sharedService.openSnackBar('Material Type already exists', 'error');
            }
        }, (error) => {
            this.sharedService.openSnackBar('Server Error', 'error');
        });
    }
    updateMaterial(data) {
        let reqObj = {};
        reqObj = {
            "lookupValueId": data.lookupValueId,
            "lookupTypeId": 186,
            "lookupValueName": data.lookupValueName,
            "description": data.description,
            'apartmentId': this.sessionService.apartmentId,
            "isActive": true,
            "insertedBy": parseInt(this.sessionService.userId),
            "insertedOn": new Date(),
            "updatedBy": parseInt(this.sessionService.userId),
            "updatedOn": new Date(),
            "isDisabled": true
        };
        this.isDataLoaded = false;
        let param = {};
        param.lookupvalue = reqObj;
        this.lookupService.updateLookupValue(param).subscribe((res) => {
            if (res.message) {
                this.isDataLoaded = true;
                this.currMaterialIndex = -1;
                this.sharedService.openSnackBar('Material Type updated successfully', 'success');
            }
            else {
                this.isDataLoaded = true;
                this.sharedService.openSnackBar(res.errorMessage, 'error');
            }
        }, (error) => {
            this.sharedService.openSnackBar('Server Error', 'error');
        });
    }
    setCurrentData(data) {
        this.backupMaterialType = Object.assign({}, data);
    }
    cancelMaterialType() {
        let index = this.materialList.findIndex((data) => data.lookupValueId == this.backupMaterialType.lookupValueId);
        this.materialList.splice(index, 1, this.backupMaterialType);
    }
    deleteRow(data) {
        this.modalService.showConfirmModal(data.lookupValueId);
    }
    ngOnInit() {
        this.getAllMaterial();
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let param = {
                    lookupValueId: id,
                    updateUserId: this.sessionService.userId
                };
                this.lookupService.deleteLookupvalue(param).subscribe((res) => {
                    setTimeout(() => {
                        this.sharedService.openSnackBar("Material Type deleted successfully", 'success');
                        this.sharedService.setUnitListDeleteIndex(null);
                        this.getAllMaterial();
                    }, 500);
                }, error => {
                    console.log(error);
                });
            }
        });
    }
};
InventorySetupMaterialTypeComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"] },
    { type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] }
];
InventorySetupMaterialTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-setup-material-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inventory-setup-material-type.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inventory-setup-material-type.component.scss */ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"],
        src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
], InventorySetupMaterialTypeComponent);



/***/ }),

/***/ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.module.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.module.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: InventorySetupMaterialTypeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventorySetupMaterialTypeModule", function() { return InventorySetupMaterialTypeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/ui/list/list.module */ "./src/app/modules/ui/list/list.module.ts");
/* harmony import */ var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/ui/message/message.module */ "./src/app/modules/ui/message/message.module.ts");
/* harmony import */ var src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/ui/help-tooltip/help-tooltip.module */ "./src/app/modules/ui/help-tooltip/help-tooltip.module.ts");
/* harmony import */ var _inventory_setup_material_type_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inventory-setup-material-type-routing.module */ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type-routing.module.ts");
/* harmony import */ var _inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inventory-setup-material-type.component */ "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts");











let InventorySetupMaterialTypeModule = class InventorySetupMaterialTypeModule {
};
InventorySetupMaterialTypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_10__["InventorySetupMaterialTypeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"],
            src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
            src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_7__["CondoMessageModule"],
            src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_8__["HelpTooltipModule"],
            _inventory_setup_material_type_routing_module__WEBPACK_IMPORTED_MODULE_9__["InventorySetupMaterialTypeRoutingModule"]
        ]
    })
], InventorySetupMaterialTypeModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-ams-inventory-inventory-setup-inventory-setup-material-type-inventory-setup-material-type-module-es2015.js.map