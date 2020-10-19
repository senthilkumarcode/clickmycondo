(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-my-property-property-configuration-property-towers-property-towers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.html":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.html ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"property-tower-wrapper\">\n\n\t<app-loader *ngIf=\"!isTowersLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isTowersLoaded\">\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t<div class=\"d-flex justify-content-end mb-3\">\n\t\t\t\t\t<div class=\"link\" (click)=\"showEditForm()\">\n\t\t\t\t\t\t<mat-icon  [color]=\"'primary'\" *ngIf=\"isEdit\" [svgIcon]=\"'arrow_back'\"></mat-icon>\n\t\t\t\t\t\t<mat-icon class=\"icon-md\" [color]=\"'primary'\" *ngIf=\"!isEdit\" svgIcon=\"feather:edit\"></mat-icon>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<ng-container *ngIf=\"!isEdit\">\n\n\t\t\t<form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate>\n\t\t\t\t\n\t\t\t\t<div class=\"data-wrapper\">\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Construction Area SQ.M</label>\n\t\t\t\t\t\t\t\t<p>{{tower.blockConstructedArea | notAvail}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Common Area SQ.M</label>\n\t\t\t\t\t\t\t\t<p>{{tower.blockCommonArea | notAvail}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Units under construction</label>\n\t\t\t\t\t\t\t\t<p>{{tower.unitsUnderConstruction | notAvail}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Total Units</label>\n\t\t\t\t\t\t\t\t<p>{{totalItems}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\n\t\t\t\t</div>\n\t\n\t\t\t</form>\n\t\n\t\t</ng-container>\n\t\n\t\t<ng-container *ngIf=\"isEdit\">\n\t\t\t\n\t\t\t<form #propertyDetailsForm = \"ngForm\" name=\"propertyDetailsForm\" novalidate (ngSubmit)=\"submitPropertyDetailsForm(propertyDetailsForm)\">\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Construction Area SQ.M</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockConstructedArea\" [(ngModel)]=\"tower.blockConstructedArea\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Common Area SQ.M</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"blockCommonArea\" [(ngModel)]=\"tower.blockCommonArea\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t<label>Units under construction SQ.M</label>\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"constructionInProgress\" [(ngModel)]=\"tower.unitsUnderConstruction\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\">Submit</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\n\t\t\t</form>\n\t\n\t\t</ng-container>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"property-details-wrapper mt-5\">\n\n\t<app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n\t<ng-container *ngIf=\"isDataLoaded\">\n\n\t\t<div class=\"d-flex flex-column mb-4\">\n\t\t\t<h6 class=\"text-secondary\" *ngIf=\"isBlockAvailable\">{{blockListData.length}} Records found</h6>\n\t\t</div>\n\n\t</ng-container>\n\n\t<div class=\"bg-card shadow warn\" *ngIf=\"isDataLoaded && !isBlockAvailable\">\n\t\t<h6>No Towers Available</h6>\n\t</div>\n\n\t<ng-container *ngIf=\"isDataLoaded && isBlockAvailable\">\n\n\t\t<mat-accordion>\n\n\t\t\t<mat-expansion-panel [expanded]=\"i == 0\" *ngFor=\"let tower of blockListData; let i = index\">\n\n\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t<h6 class=\"mb-2\">{{tower.apartmentBlockNumber}}</h6>\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t<mat-panel-description>\n\t\t\t\t\t<app-property-tower-info [tower]=\"tower\"></app-property-tower-info>\n\t\t\t\t</mat-panel-description>\n\n\t\t\t</mat-expansion-panel>\n\n\t\t</mat-accordion>\n\n\t</ng-container>\n\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.scss ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktdG93ZXJzL3Byb3BlcnR5LXRvd2VyLWluZm8vcHJvcGVydHktdG93ZXItaW5mby5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.ts":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.ts ***!
  \*************************************************************************************************************************************/
/*! exports provided: PropertyTowerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTowerInfoComponent", function() { return PropertyTowerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_5__);






let PropertyTowerInfoComponent = class PropertyTowerInfoComponent {
    constructor(apartmentService, sharedService, sessionService) {
        this.apartmentService = apartmentService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.isEdit = false;
        this.isTowersLoaded = false;
    }
    showEditForm() {
        this.isEdit = !this.isEdit;
    }
    submitPropertyDetailsForm(form) {
        let details = {
            "apartmentBlockId": parseInt(this.tower.apartmentBlockId),
            "apartmentBlockNumber": this.tower.apartmentBlockNumber,
            "description": this.tower.description,
            "apartmentId": this.sessionService.apartmentId,
            "isActive": this.tower.isActive,
            "insertedBy": parseInt(this.tower.insertedBy),
            "insertedOn": this.tower.insertedOn,
            "updatedBy": this.sessionService.userId,
            "updatedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_5___default()().toISOString(),
            "totalNounits": parseInt(this.totalItems),
            "blockConstructedArea": parseInt(this.tower.blockConstructedArea),
            "unitsUnderConstruction": parseInt(this.tower.unitsUnderConstruction),
            "blockCommonArea": parseInt(this.tower.blockCommonArea)
        };
        let params = {
            apartmentBlock: details
        };
        this.apartmentService.updateApartmentBlock(params).subscribe((res) => {
            if (res.message) {
                this.isEdit = false;
                this.sharedService.setAlertMessage(this.tower.apartmentBlockNumber + " updated successfully");
            }
            else {
                this.isEdit = false;
            }
        });
    }
    ngOnInit() {
        let params = {
            apartmentBlockId: parseInt(this.tower.apartmentBlockId)
        };
        this.apartmentService.getApartmentBlockUnitByBlockId(params).subscribe((res) => {
            this.totalItems = res.length;
            this.isTowersLoaded = true;
        });
    }
};
PropertyTowerInfoComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
PropertyTowerInfoComponent.propDecorators = {
    tower: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
PropertyTowerInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-tower-info',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./property-tower-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./property-tower-info.component.scss */ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_2__["ApartmentService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], PropertyTowerInfoComponent);



/***/ }),

/***/ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers-routing.module.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers-routing.module.ts ***!
  \******************************************************************************************************************/
/*! exports provided: routes, PropertyTowersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTowersRoutingModule", function() { return PropertyTowersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _property_towers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property-towers.component */ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts");




const routes = [
    { path: '', component: _property_towers_component__WEBPACK_IMPORTED_MODULE_3__["PropertyTowersComponent"] }
];
let PropertyTowersRoutingModule = class PropertyTowersRoutingModule {
};
PropertyTowersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PropertyTowersRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL215LXByb3BlcnR5L3Byb3BlcnR5LWNvbmZpZ3VyYXRpb24vcHJvcGVydHktdG93ZXJzL3Byb3BlcnR5LXRvd2Vycy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: PropertyTowersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTowersComponent", function() { return PropertyTowersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/controllers/Apartment */ "./src/app/api/controllers/Apartment.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");







let PropertyTowersComponent = class PropertyTowersComponent {
    constructor(router, dialog, apartmentService, sessionService) {
        this.router = router;
        this.dialog = dialog;
        this.apartmentService = apartmentService;
        this.sessionService = sessionService;
        this.isDataLoaded = false;
        this.isBlockAvailable = false;
        this.filterSelected = "all";
        this.singleBlock = "Select Tower";
    }
    onGlSearchFilter() {
        if (this.towerData != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = this.towerData;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.columnData.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    renderColumns() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
    }
    ngOnInit() {
        let params = {
            apartmentId: this.sessionService.apartmentId
        };
        this.apartmentService.getApartmentBlockByApartmentId(params).subscribe((res) => {
            this.blockListData = res;
            this.isDataLoaded = true;
            if (this.blockListData.length > 0) {
                this.isBlockAvailable = true;
            }
            else {
                this.isBlockAvailable = false;
            }
        });
    }
};
PropertyTowersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
];
PropertyTowersComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }]
};
PropertyTowersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-towers',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./property-towers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./property-towers.component.scss */ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_api_controllers_Apartment__WEBPACK_IMPORTED_MODULE_5__["ApartmentService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
], PropertyTowersComponent);



/***/ }),

/***/ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.module.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.module.ts ***!
  \**********************************************************************************************************/
/*! exports provided: PropertyTowersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyTowersModule", function() { return PropertyTowersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _property_towers_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-towers-routing.module */ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var _property_towers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./property-towers.component */ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-towers.component.ts");
/* harmony import */ var _property_tower_info_property_tower_info_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./property-tower-info/property-tower-info.component */ "./src/app/modules/ams/my-property/property-configuration/property-towers/property-tower-info/property-tower-info.component.ts");











let PropertyTowersModule = class PropertyTowersModule {
};
PropertyTowersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_property_towers_component__WEBPACK_IMPORTED_MODULE_8__["PropertyTowersComponent"], _property_tower_info_property_tower_info_component__WEBPACK_IMPORTED_MODULE_9__["PropertyTowerInfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_6__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_7__["SelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_property_towers_routing_module__WEBPACK_IMPORTED_MODULE_4__["routes"]),
            _property_towers_routing_module__WEBPACK_IMPORTED_MODULE_4__["PropertyTowersRoutingModule"]
        ],
        bootstrap: [
            _property_towers_component__WEBPACK_IMPORTED_MODULE_8__["PropertyTowersComponent"]
        ]
    })
], PropertyTowersModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-ams-my-property-property-configuration-property-towers-property-towers-module-es2015.js.map