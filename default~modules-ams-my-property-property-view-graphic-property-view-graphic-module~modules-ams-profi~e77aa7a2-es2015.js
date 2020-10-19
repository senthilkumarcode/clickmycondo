(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-ams-my-property-property-view-graphic-property-view-graphic-module~modules-ams-profi~e77aa7a2"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<condo-card>\n    <div CondoCardHeader>\n        <div class=\"d-flex\">\n            <h4>{{isEdit ? 'Edit Property' : 'Add Property'}}</h4>\n        </div>\n    </div>\n    <div CondoCardBody>\n        <div class=\"p-5\">\n            <div class=\"row\">\n                <!-- <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"input-box\">\n                        <label>Node Id</label>\n                        <input type=\"text\" class=\"form-control\" disabled [ngModel]=\"addPropertyParam.nodeId\"\n                            name=\"nodeId\">\n                    </div>\n                </div>     -->\n                 <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"input-box\">\n                        <label>Radius</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addPropertyParam.id\"\n                            name=\"radius\">\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-12\">\n                    <div class=\"input-box\">\n                        <label>POI Id</label>\n                        <input type=\"text\" class=\"form-control\" disabled [ngModel]=\"addPropertyParam.propertyPoiid\"\n                            name=\"propertyPoiid\">\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 \">\n                    <div class=\"select-box\">\n                        <label>Property Type</label>\n                        <select [(ngModel)]=\"addPropertyParam.propertyPoitype\" (change)=\"selectPropertyType()\"\n                            name=\"propertyPoitype\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of propertyTypeList\" value=\"{{item.lookupValueId}}\">\n                                {{item.lookupValueName}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 318\">\n                    <div class=\"select-box\">\n                        <label>Units</label>\n                        <select [(ngModel)]=\"addPropertyParam.blockUnitId\" name=\"blockUnitId\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of unitList\" value=\"{{item.apartmentBlockUnitId}}\">\n                                {{item.apartmentBlockUnitNumber}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 320\">\n                    <div class=\"select-box\">\n                        <label>Facility Type</label>\n                        <select [(ngModel)]=\"addPropertyParam.facilityId\" name=\"facilityId\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of facilityList\" value=\"{{item.apartmentFacilityId}}\">\n                                {{item.facilityName}}\n                            </option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 319\">\n                    <div class=\"select-box\">\n                        <label>Asset Category</label>\n                        <select [(ngModel)]=\"assetCategory\" name=\"assetCategory\" (change)=\"getAssetSubCategory()\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of assetCategoryList\" value=\"{{item.id}}\">{{item.name}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 319 && assetCategory\">\n                    <div class=\"select-box\">\n                        <label>Asset Sub Category</label>\n                        <select [(ngModel)]=\"assetSubCategory\" name=\"assetSubCategory\" (change)=\"selectAsset()\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of assetSubCategoryList\" value=\"{{item.id}}\">{{item.name}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\"\n                    *ngIf=\"addPropertyParam.propertyPoitype == 319 && assetCategory && assetSubCategory\">\n                    <div class=\"select-box\">\n                        <label>Asset</label>\n                        <select [(ngModel)]=\"addPropertyParam.assetId\" name=\"assetId\" class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                            <option *ngFor=\"let item of assetList\" value=\"{{item.assetId}}\">{{item.assetName}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\" *ngIf=\"false\" >\n                    <div class=\"select-box\">\n                        <label>Infrastrcuture</label>\n                        <select [(ngModel)]=\"addPropertyParam.infrastructureId\" name=\"infrastructureId\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3\" *ngIf=\"false\">\n                    <div class=\"select-box\">\n                        <label>Operational Maintanance</label>\n                        <select [(ngModel)]=\"addPropertyParam.opMaintenanceId\" name=\"opMaintenanceId\"\n                            class=\"form-control\">\n                            <option value=\"\" disabled selected hidden>Select</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                    <div class=\"input-box\">\n                        <label>Description</label>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"addPropertyParam.description\"\n                            name=\"description\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-12 d-flex justify-content-end mt-3\">\n                    <button mat-flat-button mat-dialog-close>Cancel</button>\n                    <button mat-flat-button [color]=\"'primary'\" *ngIf=\"!isEdit\" (click)=\"addProperty()\">Submit</button>\n                    <button mat-flat-button [color]=\"'primary'\"  *ngIf=\"isEdit\"  (click)=\"updateProperty()\">Update</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</condo-card>");

/***/ }),

/***/ "./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Byb2ZpbGUtc2V0dGluZ3MvY29tcG9uZW50cy9hZGQtcHJvcGVydHktZGlhbG9nL2FkZC1wcm9wZXJ0eS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AddPropertyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPropertyDialogComponent", function() { return AddPropertyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Facility */ "./src/app/api/controllers/Facility.ts");
/* harmony import */ var src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/api/controllers/PropertyManager */ "./src/app/api/controllers/PropertyManager.ts");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_10__);











let AddPropertyDialogComponent = class AddPropertyDialogComponent {
    constructor(lookupService, apartmentService, facilityService, sessionService, propertyService, assetService, sharedService, dialogRef, data) {
        this.lookupService = lookupService;
        this.apartmentService = apartmentService;
        this.facilityService = facilityService;
        this.sessionService = sessionService;
        this.propertyService = propertyService;
        this.assetService = assetService;
        this.sharedService = sharedService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.propertyTypeList = [];
        this.unitList = [];
        this.facilityList = [];
        this.assetCategoryList = [];
        this.assetSubCategoryList = [];
        this.assetList = [];
        this.assetRawList = [];
        this.isEdit = false;
        this.addPropertyParam = {
            "propertyPoiid": 0,
            "propertyPoitype": 0,
            "nodeId": 0,
            "x": 0,
            "y": 0,
            "id": 6,
            "blockUnitId": 0,
            "assetId": null,
            "facilityId": null,
            "infrastructureId": null,
            "opMaintenanceId": null,
            "apartmentId": this.sessionService.apartmentId,
            "isActive": true,
            "insertedBy": this.sessionService.userId,
            "insertedOn": "2020-07-06T14:48:10.120Z",
            "updatedBy": this.sessionService.userId,
            "updatedOn": "2020-07-06T14:48:10.120Z",
            "description": ""
        };
        this.addPropertyParam.nodeId = this.data.nodeId;
        this.addPropertyParam.id = this.data.radius;
        // this.addPropertyParam.x = this.data.x;
        // this.addPropertyParam.y = this.data.y;
        if (this.data.type == 'add') {
            this.isEdit = false;
        }
        else {
            this.isEdit = true;
            this.addPropertyParam.propertyPoiid = Number(this.data.poiId);
            this.getProperty();
        }
        // for (const key in this.data) {
        //   if(this.addPropertyParam.hasOwnProperty(key)){
        //     this.addPropertyParam[key] = this.data[key];
        //   }
        // }
    }
    ngOnInit() {
        this.getPropertyType();
    }
    getProperty() {
        let queryParamBase = {
            apartmentId: this.sessionService.apartmentId,
            propertyPOIID: this.addPropertyParam.propertyPoiid,
        };
        this.propertyService.getPropertyPoiUnitById(queryParamBase).subscribe((resp) => {
            if (resp[0]) {
                for (const key in resp[0]) {
                    if (this.addPropertyParam.hasOwnProperty(key)) {
                        this.addPropertyParam[key] = resp[0][key];
                    }
                }
                this.selectPropertyType();
            }
        });
    }
    getPropertyType() {
        let getLookUpParam = {
            ApartmentId: this.sessionService.apartmentId,
            LookupTypeId: 196
        };
        this.lookupService.getLookupValueByLookupTypeId(getLookUpParam).subscribe((resp) => {
            this.propertyTypeList = resp;
        }, error => {
        });
    }
    selectPropertyType() {
        switch (Number(this.addPropertyParam.propertyPoitype)) {
            case 316:
                break;
            case 318:
                this.getUnitList();
                break;
            case 319:
                this.getAssetCategory();
                this.getAsset();
                break;
            case 320:
                this.getFacilityList();
                break;
            case 321:
                break;
            case 322:
                break;
            default:
                break;
        }
    }
    getUnitList() {
        let getUnitParam = {
            apartmentBlockId: this.data.apartmentBlockId
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(getUnitParam).subscribe((resp) => {
            this.unitList = resp;
        });
    }
    getFacilityList() {
        let getFacilityParam = {
            apartmentId: this.sessionService.apartmentId
        };
        this.facilityService.getApartmentFacilitiesByApartmentId(getFacilityParam).subscribe((resp) => {
            this.facilityList = resp;
        });
    }
    getAssetCategory() {
        let queryParamBase = {
            apartmentId: this.sessionService.apartmentId,
            lookupTypeId: 19,
            subCategoryLookupTypeId: 68,
        };
        this.lookupService.getSubcategory(queryParamBase).subscribe((res) => {
            if (res) {
                this.assetCategoryList = res ? res : [];
            }
        });
    }
    getAssetSubCategory() {
        this.assetCategoryList.filter(key => {
            if (key.id == this.assetCategory) {
                this.assetSubCategoryList = key.subCategory;
            }
        });
    }
    getAsset() {
        let getAllAsset = {
            apartmentId: this.sessionService.apartmentId
        };
        this.assetService.getAllAssetByApartmentId(getAllAsset).subscribe((resp) => {
            this.assetRawList = resp;
        });
    }
    selectAsset() {
        this.assetRawList.filter(key => {
            if (key.assetSubcategoryId == this.assetSubCategory) {
                this.assetList.push(key);
            }
        });
    }
    setPropertyType(id) {
        switch (this.addPropertyParam.propertyPoitype) {
            case 316:
                break;
            case 318:
                this.assignUnitData(id);
                break;
            case 319:
                break;
            case 320:
                break;
            case 321:
                break;
            case 322:
                break;
            default:
                break;
        }
    }
    assignUnitData(poiId) {
        let unitData = new Object();
        unitData['type'] = "318";
        unitData['poiId'] = poiId;
        unitData['radius'] = this.addPropertyParam.id;
        this.unitList.filter(key => {
            if (key.apartmentBlockUnitId == this.addPropertyParam.blockUnitId) {
                for (const item in key) {
                    if (key[item] === true && key[item] != null) {
                        unitData[item] = item;
                    }
                }
            }
        });
        delete unitData.isActive;
        this.dialogRef.close(unitData);
    }
    addProperty() {
        this.addPropertyParam.insertedOn = moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()().toISOString();
        this.addPropertyParam.updatedOn = moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()().toISOString();
        this.addPropertyParam.id = Number(this.addPropertyParam.id);
        this.addPropertyParam.blockUnitId = Number(this.addPropertyParam.blockUnitId);
        this.addPropertyParam.propertyPoitype = Number(this.addPropertyParam.propertyPoitype);
        let addProperty = {
            propertyPoi: this.addPropertyParam
        };
        this.propertyService.addPropertyPoi(addProperty).subscribe((resp) => {
            if (resp && resp.message) {
                this.sharedService.openSnackBar('Property Poi Added Successfully', 'success');
                this.setPropertyType(resp.message);
            }
        });
    }
    updateProperty() {
        this.addPropertyParam.updatedOn = moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()().toISOString();
        let addProperty = {
            propertyPoi: this.addPropertyParam
        };
        this.propertyService.updatePropertyPoi(addProperty).subscribe((resp) => {
            if (resp && resp.message) {
                this.sharedService.openSnackBar('Property Poi Updated Successfully', 'success');
                this.setPropertyType(resp.message);
            }
        });
    }
};
AddPropertyDialogComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"] },
    { type: src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__["FacilityService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"] },
    { type: src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_6__["PropertyManagerService"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__["AssetService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
AddPropertyDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-property-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-property-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-property-dialog.component.scss */ "./src/app/modules/ams/profile-settings/components/add-property-dialog/add-property-dialog.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_3__["LookupService"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_4__["ApartmentService"],
        src_app_api_controllers_Facility__WEBPACK_IMPORTED_MODULE_5__["FacilityService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"],
        src_app_api_controllers_PropertyManager__WEBPACK_IMPORTED_MODULE_6__["PropertyManagerService"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__["AssetService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], AddPropertyDialogComponent);



/***/ })

}]);
//# sourceMappingURL=default~modules-ams-my-property-property-view-graphic-property-view-graphic-module~modules-ams-profi~e77aa7a2-es2015.js.map