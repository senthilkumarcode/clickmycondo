(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-violation-violation-setup-violation-setup-category-violation-setup-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"violation-setup-category-wrapper\">\n    \n    <app-loader *ngIf=\"!isViolationCategoryLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isViolationCategoryLoaded\">\n\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>Violation Category</h4>\n                        <p>{{totalItems}} results</p>\n                    </div>\n                    <div class=\"ml-auto mr-3\">\n                        <app-table-search [input]=\"violationSearch\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3\">\n                        <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                    </div>\n                    <div>\n                        <button mat-flat-button [color]=\"'primary'\" (click)=\"addViolationCategory()\">\n                            <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add Violation Category\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\"\n                        [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [source]=\"violationCategoryList\"\n                        [columns]=\"violationCategoryHeader\" [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n                </jqxGrid>\n            </div>\n        </condo-card>\n\n    </ng-container>\n\n</div>\n");

/***/ }),

/***/ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category-routing.module.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category-routing.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ViolationSetupCategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationSetupCategoryRoutingModule", function() { return ViolationSetupCategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _violation_setup_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./violation-setup-category.component */ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.ts");




const routes = [{
        path: '', component: _violation_setup_category_component__WEBPACK_IMPORTED_MODULE_3__["ViolationSetupCategoryComponent"]
    }];
let ViolationSetupCategoryRoutingModule = class ViolationSetupCategoryRoutingModule {
};
ViolationSetupCategoryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ViolationSetupCategoryRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpb2xhdGlvbi92aW9sYXRpb24tc2V0dXAvdmlvbGF0aW9uLXNldHVwLWNhdGVnb3J5L3Zpb2xhdGlvbi1zZXR1cC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: ViolationSetupCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationSetupCategoryComponent", function() { return ViolationSetupCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_modules_collective_add_lookup_add_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/collective/add-lookup/add-lookup.service */ "./src/app/modules/collective/add-lookup/add-lookup.service.ts");
/* harmony import */ var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Lookup */ "./src/app/api/controllers/Lookup.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");








let ViolationSetupCategoryComponent = class ViolationSetupCategoryComponent {
    constructor(injector, addLookupService, lookupService, sessionService, sharedService) {
        this.injector = injector;
        this.addLookupService = addLookupService;
        this.lookupService = lookupService;
        this.sessionService = sessionService;
        this.sharedService = sharedService;
        this.isViolationCategoryLoaded = false;
        this.violationSearch = '';
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]);
    }
    onGlSearchFilter(event) {
        if (event != "") {
            let filtergroup = new jqx.filter();
            let filter_or_operator = 1;
            let filtervalue = event;
            let filtercondition = 'contains';
            let filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
            filtergroup.operator = 'or';
            filtergroup.addfilter(filter_or_operator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.violationCategoryHeader.forEach(item => {
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
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'Violation Category', true, null, true, 'https://www.jqwidgets.com/export_server/dataexport.php');
    }
    addViolationCategory() {
        var id = this.sharedService.guid();
        this.addLookupService.setAddLookupMatDrawer({ id: id, data: null, category: 'violation-category', isedit: false });
    }
    editViolationCategory(detail) {
        let data = this.datagrid.getrowdata(detail.rowId);
        this.addLookupService.setAddLookupMatDrawer({ id: data.lookupValueId, data: data, category: 'violation-category', isedit: true });
    }
    deleteViolation(detail) {
        this.modalService.showConfirmModal(detail.rowId);
    }
    getViolationCategory() {
        this.isViolationCategoryLoaded = false;
        let params = {
            LookupTypeId: 78,
            ApartmentId: this.sessionService.apartmentId
        };
        this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res) => {
            if (res.length > 0) {
                let violationSourceData = {
                    localdata: res.reverse(),
                    datatype: "array"
                };
                this.totalItems = violationSourceData.localdata.length;
                this.violationCategoryList = new jqx.dataAdapter(violationSourceData);
            }
            this.isViolationCategoryLoaded = true;
        }, (error) => {
            this.sharedService.openSnackBar('Server Error', 'error');
        });
    }
    ngOnInit() {
        this.getViolationCategory();
        this.addLookupService.addlookupentryrefreshcast.subscribe((res) => {
            if (res) {
                this.getViolationCategory();
            }
        });
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.violationCategoryHeader = [{
                text: 'category',
                datafield: 'lookupValueName',
                cellsrenderer: cellsrenderer,
                width: 450,
                renderer: columnrenderer
            }, {
                text: 'description',
                datafield: 'description',
                cellsrenderer: cellsrenderer,
                minwidth: 170,
                renderer: columnrenderer
            }, {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" onClick="editCategory(' + row + ')"><i class="icon fa fa-pencil" aria-hidden="true"></i> </a> <a href="javascript:void(0)" onClick="deleteCategory(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i> </a></div>';
                },
                renderer: columnrenderer
            }];
        //delete item
        this.apiSubscibe = this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                let dataRecord = this.datagrid.getrowdata(id);
                let params = {
                    lookupValueId: dataRecord.lookupValueId,
                    updateUserId: this.sessionService.userId
                };
                this.lookupService.deleteLookupvalue(params).subscribe((res) => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    if (res.message) {
                        this.datagrid.deleterow(id);
                        this.datagrid.refresh();
                        this.sharedService.openSnackBar("Violation category deleted successfully", 'success');
                    }
                    else {
                        this.sharedService.openSnackBar(res.errorMessage, 'error');
                    }
                });
            }
        });
    }
    ngOnDestroy() {
        this.apiSubscibe.unsubscribe();
    }
};
ViolationSetupCategoryComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_app_modules_collective_add_lookup_add_lookup_service__WEBPACK_IMPORTED_MODULE_3__["AddLookupService"] },
    { type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
ViolationSetupCategoryComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    editViolationCategory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onEditViolation', ['$event.detail'],] }],
    deleteViolation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onDeleteViolation', ['$event.detail'],] }]
};
ViolationSetupCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-violation-setup-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./violation-setup-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./violation-setup-category.component.scss */ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_app_modules_collective_add_lookup_add_lookup_service__WEBPACK_IMPORTED_MODULE_3__["AddLookupService"],
        src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_4__["LookupService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
], ViolationSetupCategoryComponent);

let editCategory = row => {
    let event = new CustomEvent('onEditViolation', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.editCategory = editCategory;
let deleteCategory = row => {
    let event = new CustomEvent('onDeleteViolation', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.deleteCategory = deleteCategory;


/***/ }),

/***/ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ViolationSetupCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViolationSetupCategoryModule", function() { return ViolationSetupCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var _violation_setup_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./violation-setup-category-routing.module */ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category-routing.module.ts");
/* harmony import */ var _violation_setup_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./violation-setup-category.component */ "./src/app/modules/ams/violation/violation-setup/violation-setup-category/violation-setup-category.component.ts");







let ViolationSetupCategoryModule = class ViolationSetupCategoryModule {
};
ViolationSetupCategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_violation_setup_category_component__WEBPACK_IMPORTED_MODULE_6__["ViolationSetupCategoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            _violation_setup_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViolationSetupCategoryRoutingModule"]
        ]
    })
], ViolationSetupCategoryModule);



/***/ })

}]);
//# sourceMappingURL=src-app-modules-ams-violation-violation-setup-violation-setup-category-violation-setup-category-module-es2015.js.map