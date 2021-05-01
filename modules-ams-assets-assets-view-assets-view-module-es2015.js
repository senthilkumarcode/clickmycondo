(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-assets-assets-view-assets-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-view/assets-view.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-view/assets-view.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"manage-asset-wrapper\">\n\t<div class=\"main\">\n\t\t<!-- Loader -->\n\t\t<app-loader *ngIf=\"isDataLoaded\"></app-loader>\n\t\t<!-- Table -->\n\t\t<condo-card *ngIf=\"!isDataLoaded\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>All Assets</h4>\n\t\t\t\t\t\t<p>{{totalItems}} results</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-flex\">\n\t\t\t\t\t\t<input class=\"form-control d-none d-md-block mr-3\" type=\"text\" placeholder=\"Search...\" [(ngModel)]=\"histroySearch\"  (ngModelChange)=\"onSearchFilter()\">\n\t\t\t\t\t\t<app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n\t\t\t\t\t\t<button class=\"mx-3 d-md-w-100 w-50\" mat-flat-button [color]=\"'primary'\" (click)=\"addAsset()\">Add Asset</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"assetData\" [columns]=\"header\"\n\t\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n</div>\n\n<ng-template #actionPanel>\n\t<div class=\"bg-card popover-card p-0 table-action-menu\">\n\t\t<a href=\"javascript:void(0)\" (click)=\"editAsset(assetId)\">Edit Asset</a>\n\t\t<a href=\"javascript:void(0)\" (click)=\"deleteAsset(assetId)\">De-Activate Asset</a>\n\t\t<a href=\"javascript:void(0)\" (click)=\"addMaintanence(assetId)\">Add Maintenance</a>\n\t\t<a href=\"javascript:void(0)\" (click)=\"manageMaintanence(assetId)\">Manage Maintenance</a>\n\t\t<a href=\"javascript:void(0)\" (click)=\"viewMaintanenceHistory(assetId)\">View Maintenance History</a>\n\t</div>\n</ng-template>");

/***/ }),

/***/ "./src/app/modules/ams/assets/assets-view/assets-view-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-view/assets-view-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: AssetsViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsViewRoutingModule", function() { return AssetsViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/auth/guards/auth.guard */ "./src/app/core/auth/guards/auth.guard.ts");
/* harmony import */ var _assets_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets-view.component */ "./src/app/modules/ams/assets/assets-view/assets-view.component.ts");





const routes = [
    { path: '', component: _assets_view_component__WEBPACK_IMPORTED_MODULE_4__["AssetsViewComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: ':id', component: _assets_view_component__WEBPACK_IMPORTED_MODULE_4__["AssetsViewComponent"], canActivate: [src_app_core_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] }
];
let AssetsViewRoutingModule = class AssetsViewRoutingModule {
};
AssetsViewRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AssetsViewRoutingModule);



/***/ }),

/***/ "./src/app/modules/ams/assets/assets-view/assets-view.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-view/assets-view.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2Fzc2V0cy9hc3NldHMtdmlldy9hc3NldHMtdmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/assets/assets-view/assets-view.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-view/assets-view.component.ts ***!
  \*************************************************************************/
/*! exports provided: AssetsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsViewComponent", function() { return AssetsViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/api/controllers/Asset */ "./src/app/api/controllers/Asset.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");










let AssetsViewComponent = class AssetsViewComponent {
    constructor(_overlay, _viewContainerRef, assetService, sessionService, router, sharedService, injector) {
        this._overlay = _overlay;
        this._viewContainerRef = _viewContainerRef;
        this.assetService = assetService;
        this.sessionService = sessionService;
        this.router = router;
        this.sharedService = sharedService;
        this.injector = injector;
        this.isDataLoaded = true;
        this.totalItems = 0;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
    }
    ngOnInit() {
        this.getAllAssets();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.header = [
            {
                text: 'Asset Tag No',
                datafield: 'assetTagNo',
                width: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Asset Name',
                datafield: 'assetName',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Category',
                datafield: 'assetCategoryName',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Vendor Name ',
                datafield: 'vendorName',
                minwidth: 200,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            },
            {
                text: 'Condition',
                datafield: 'assetConditionName',
                cellsrenderer: cellsrenderer,
                minwidth: 200,
                renderer: columnrenderer
            }, {
                text: 'Purchase Cost',
                datafield: 'purchaseCost',
                cellsrenderer: cellsrenderer,
                width: 150,
                renderer: columnrenderer
            },
            {
                text: 'Actions',
                cellsalign: 'center',
                align: 'center',
                minwidth: 120,
                cellclassname: 'action-cell',
                cellsrenderer: (row) => {
                    let elemId = 'assetAction' + row;
                    return '<div class="simple-actions">'
                        + '<a href="javascript:void(0)" id="' + elemId + '" onClick="assetActionEvent(' + row + ')">'
                        + '<span class="action-dot"></span>'
                        + '<span class="action-dot"></span>'
                        + '<span class="action-dot"></span>'
                        + '</a>'
                        + '</div>';
                },
                renderer: columnrenderer
            }
        ];
        // delete item
        this.apiSubscription = this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    assetId: id,
                    deleteBy: parseInt(this.sessionService.userId)
                };
                this.assetService.deleteAsset(params).subscribe((res) => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    if (res.message) {
                        this.getAllAssets();
                        this.sharedService.openSnackBar("Asset deleted successfully", 'success');
                    }
                    else {
                        this.sharedService.openSnackBar(res.errorMessage, 'error');
                    }
                }, error => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    this.sharedService.openSnackBar('Server Error', 'error');
                });
            }
        });
    }
    getAllAssets() {
        let params = {};
        params.apartmentId = this.sessionService.apartmentId;
        this.assetService.getAllAssetByApartmentId(params).subscribe((res) => {
            if (res) {
                this.totalItems = res.length;
                this.gridSourceData = {
                    localdata: res.length > 0 ? res : [],
                    datatype: "array"
                };
                this.assetData = new jqx.dataAdapter(this.gridSourceData);
            }
            this.isDataLoaded = false;
        });
    }
    getPrintParams(event) {
        this.datagrid.exportdata(event, 'Asset Info', true, null, true, 'https://www.jqwidgets.com/export_server/dataexport.php');
    }
    addAsset() {
        this.router.navigateByUrl('/ams/assets/create');
    }
    onSearchFilter() {
        if (this.histroySearch != "") {
            let filterGroup = new jqx.filter();
            let filterOperator = 1;
            let filterValue = this.histroySearch;
            let filterCondition = 'contains';
            let filterData = filterGroup.createfilter('stringfilter', filterValue, filterCondition);
            filterGroup.operator = 'or';
            filterGroup.addfilter(filterOperator, filterData);
            this.datagrid.showfiltercolumnbackground(false);
            this.header.forEach(item => {
                if (item.datafield != 'Actions') {
                    this.datagrid.addfilter(item.datafield, filterGroup, true);
                }
            });
            this.datagrid.applyfilters();
        }
        else {
            this.datagrid.clearfilters();
        }
    }
    editAsset(id) {
        this.router.navigateByUrl('/ams/assets/edit-asset/' + id);
        this._selectPanelOverlayRef.detach();
    }
    deleteAsset(id) {
        this.showConfirmModal(id);
        this._selectPanelOverlayRef.detach();
    }
    addMaintanence(id) {
        this.router.navigate(['/ams/assets/create-maintenance'], { queryParams: { assetId: id, type: 'ADD' } });
        this._selectPanelOverlayRef.detach();
    }
    manageMaintanence(id) {
        this.router.navigateByUrl('/ams/assets/manage-maintenance/' + id);
        this._selectPanelOverlayRef.detach();
    }
    viewMaintanenceHistory(id) {
        this.router.navigateByUrl('/ams/assets/maintenance-history');
    }
    showConfirmModal(id) {
        this.modalService.showConfirmModal(id);
    }
    onAssetAction(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.assetId = dataRecord.assetId;
        var id = 'assetAction' + detail.rowId;
        this.assetAction(id);
    }
    assetAction(id) {
        // Create the overlay
        this._selectPanelOverlayRef = this._overlay.create({
            backdropClass: '',
            hasBackdrop: true,
            scrollStrategy: this._overlay.scrollStrategies.block(),
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(document.getElementById(id))
                .withFlexibleDimensions()
                .withViewportMargin(56)
                .withLockedPosition(false)
                .withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'top'
                }
            ])
        });
        // Create a portal from the template
        const templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["TemplatePortal"](this._actionPanel, this._viewContainerRef);
        // Attach the portal to the overlay
        this._selectPanelOverlayRef.attach(templatePortal);
        // Subscribe to the backdrop click
        this._selectPanelOverlayRef.backdropClick().subscribe(() => {
            // If overlay exists and attached...
            if (this._selectPanelOverlayRef && this._selectPanelOverlayRef.hasAttached()) {
                // Detach it
                this._selectPanelOverlayRef.detach();
            }
            // If template portal exists and attached...
            if (templatePortal && templatePortal.isAttached) {
                // Detach it
                templatePortal.detach();
            }
        });
    }
};
AssetsViewComponent.ctorParameters = () => [
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__["AssetService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
AssetsViewComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    _actionPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['actionPanel',] }],
    viewAssetsActionRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ["viewAssetsActionRef", { static: false },] }],
    onAssetAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onAssetAction', ['$event.detail'],] }]
};
AssetsViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-assets-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./assets-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/assets/assets-view/assets-view.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./assets-view.component.scss */ "./src/app/modules/ams/assets/assets-view/assets-view.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
        src_app_api_controllers_Asset__WEBPACK_IMPORTED_MODULE_7__["AssetService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], AssetsViewComponent);

let getClassName = value => {
    return value == "Delayed" ? 'normal-status' : value == "Ontime" ? 'low' : '';
};
window.getClassName = getClassName;
let viewMaintanenceHistory = row => {
    var event = new CustomEvent('viewMaintanenceHistory', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.viewMaintanenceHistory = viewMaintanenceHistory;
let assetActionEvent = row => {
    var event = new CustomEvent('onAssetAction', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
};
window.assetActionEvent = assetActionEvent;
// import { Component, OnInit, Injector, ViewChild, TemplateRef } from '@angular/core';
// import { Router, NavigationStart, NavigationEnd, ActivatedRoute } from '@angular/router';
// import { MatDialog } from '@angular/material/dialog';
// import { MatDialogRef } from "@angular/material/dialog";
// import { AssetsMaintenanceHistoryComponent } from './../assets-maintenance-history/assets-maintenance-history.component';
// import { AssetService } from 'src/app/api/controllers/Asset';
// import { VendorService } from 'src/app/api/controllers/Vendor';
// import { LookupService } from 'src/app/api/controllers/Lookup';
// import { SharedService } from 'src/app/shared/services/shared.service';
// import { ModalService } from 'src/app/shared/services/modal.service';
// import { SessionService } from 'src/app/core/session/session.service';
// import * as _ from 'underscore';
// @Component({
//   selector: 'app-assets-view',
//   templateUrl: './assets-view.component.html',
//   styleUrls: ['./assets-view.component.scss']
// })
// export class AssetsViewComponent implements OnInit {
//   assetCategoryData:any;
//   assetCategoryId:string = "";
//   vendorDataList:any;
//   assetConditionData:any;
//   isAssetCategorySelected:boolean = false;
//   isAssetLoaded:boolean = false;
//   assetData:string = "";
//   unitFieldType:string = "assetTagNo";
//   unitOrder:boolean = true;
//   ItemStartIndex:any = 0;
//   ItemEndIndex:any;
//   totalItems:any;
//   itemLimit:any = 10;
//   totalFilterItems:any;
//   modalService:any;
//   asset:any;
//   assetListData:any;
//   assetCategoryName:string = "";
//   assetMaintenaceDataList:any;
//   maintenanceData:any;
//   statusTypeData:any;
//   selectedInput:string = "";
//   columnField: any = {}
//   constructor(
//     private injector: Injector,
//     public dialog: MatDialog,
//     private router: Router,
//     private route: ActivatedRoute,
//     private assetService: AssetService,
//     private vendorService:VendorService,
//   	private lookupService: LookupService,
//     private sharedService:SharedService,
//     private sessionService:SessionService
//   ) { 
//     this.modalService = this.injector.get(ModalService);
//      router.events.forEach((event) => {
//       if(event instanceof NavigationEnd) {
//         let params = {
//           LookupTypeId: 19
//         }
//         this.lookupService.getLookupValueByLookupTypeId(params).subscribe((res:any) => {
//           this.assetCategoryData = res.filter(item => {
//             return item.isActive;
//           });
//           this.getAssetCategoryData(this.assetCategoryId);
//         });
//       }
//     });
//   }
//   getIndexParams(event){
//     this.ItemStartIndex = event.ItemStartIndex;
//     this.ItemEndIndex = event.ItemEndIndex;
//     this.itemLimit = event.itemLimit;
//   }
//   sortUnitData(type){
//     this.unitFieldType = type;
//     this.unitOrder = !this.unitOrder;
//   }
//   getFieldOrderBy(type) {
//     if(this.unitFieldType == type){
//       return this.unitOrder ? 'asc' : 'desc';
//     }
//     else return '';
//   }
//   showConfirmModal(id) {
//     this.modalService.showConfirmModal(id);
//   }
//   selectColInput(value){
//     this.selectedInput = value;
//   }
//   onSelectChange(event, type, name){
//     if(!_.isEmpty(event)){
//       this.selectedInput = type;
//       this.columnField[type] = event[name];
//     }
//     else {
//        this.columnField = {};
//     }
//   }
//   isMobileView() {
//     return window.innerWidth <= 767 ? 'table-responsive' : '';
//   }
//   isItemsAvailable(){
//     return this.totalItems > 0 ? true : false;
//   }
//   isNoItemsAvailable(){
//     return this.totalItems == 0 ? true : false;
//   }
//   getAssetCondition(asset, id){
//     var data = _.filter( this.assetConditionData, function( item ) {
//       if(item.lookupValueId === id)
//         return item;
//     });
//     if(data === undefined || data.length == 0){
//       return '';
//     }
//     else {
//       this.assetListData.map(obj=> {
//         if(obj.assetId == asset.assetId){
//           obj.assetCondition = data[0].lookupValueName.toLowerCase();
//         }
//       });
//       return data[0].lookupValueName.toLowerCase();
//     }
//   }
//   getAssetCategoryName(asset, id){
//     var data = _.filter( this.assetCategoryData, function( item ) {
//       if(item.lookupValueId === id)
//         return item;
//     });
//     if(data === undefined || data.length == 0){
//       return '';
//     }
//     else {
//       this.assetListData.map(obj=> {
//         if(obj.assetId == asset.assetId){
//           obj.assetCategory = data[0].lookupValueName.toLowerCase();
//         }
//       });
//       return data[0].lookupValueName.toLowerCase();
//     }
//   }
//   getvendorName(asset, id){
//     var data = _.filter( this.vendorDataList, function( item ) {
//       if(item.vendorId === id)
//         return item;
//     });
//     if(data === undefined || data.length == 0){
//       return '';
//     }
//     else {
//       this.assetListData.map(obj=> {
//         if(obj.assetId == asset.assetId){
//           obj.vendorTypeName = data[0].vendorName;
//         }
//       });
//       return data[0].vendorName;
//     }
//   }
//   getAssetCategory(){
//     if(this.assetCategoryId != "All"){
//       this.router.navigateByUrl('/ams/assets/view/'+parseInt(this.assetCategoryId));
//     }
//     else {
//       this.router.navigate(['/ams/assets/view/']);
//     }
//   }
//   getAssetCategoryData(id){
//     this.isAssetLoaded = false;
//     _.each(this.assetCategoryData, (item, index) => {
//       if(id != "All"){
//         if(item.lookupValueId == parseInt(id)){
//           this.assetCategoryName = item.lookupValueName;
//         }
//       }
//       else {
//         this.assetCategoryName = "";
//       }
//     });
//     let params = {
//       apartmentId: this.sessionService.apartmentId
//     }
//     this.assetService.getAllAssetByApartmentId(params).subscribe((res:any) => {
//       if(id != "All"){
//         this.assetListData = res.filter(item => {
//           return (item.assetCategoryId == parseInt(id)) && item.isActive
//         });
//       }
//       else {
//         this.assetListData = res.filter(item => {
//           return item.isActive
//         })
//       }
//       this.totalItems = this.assetListData.length;
//       if(this.totalItems>this.itemLimit){
//         this.ItemEndIndex = this.itemLimit;
//       }
//       else {
//         this.ItemEndIndex = this.totalItems;
//       }
//       this.isAssetLoaded = true;
//     });
//   }
//   showMaintenanceHistory(id){
//     this.dialog.open(AssetsMaintenanceHistoryComponent, {
//       panelClass: [ 'material', 'medium-02' ],
//       disableClose: true,
//       data: id
//     });
//   }
//   isMaintenanceAvailable(id){
//     var data = _.filter( this.assetMaintenaceDataList, function( item ) {
//       if(item.assetId === id)
//         return item;
//     });
//     if(data === undefined || data.length == 0){
//       return false;
//     }
//     else {
//       return true;
//     }
//   }
//   isMaintenanceDue(id){
//     var data = _.filter( this.assetMaintenaceDataList, function( item ) {
//       if(item.assetId === id)
//         return item;
//     });
//     if(data === undefined || data.length == 0){
//       return false;
//     }
//     else {
//      var check = _.some(data, item => {
//         return item.maintenanceStatusId == 273
//       });
//       return check ? true : false;
//     }
//   }
//   ngOnInit() {
//   	this.asset = {};
//     if(this.route.params['value'].id == undefined) {
//       this.assetCategoryId = "All"; 
//       let params = {
//         apartmentId: this.sessionService.apartmentId
//       }
//       this.assetService.getAllAssetByApartmentId(params).subscribe((res:any) => {
//         this.isAssetLoaded = false;
//         this.assetListData = res.filter(item => {
//           return item.isActive
//         })
//         this.totalItems = this.assetListData.length;
//         if(this.totalItems>this.itemLimit){
//           this.ItemEndIndex = this.itemLimit;
//         }
//         else {
//           this.ItemEndIndex = this.totalItems;
//         }
//         this.isAssetLoaded = true;
//       });
//     }
//     else {
//       this.assetCategoryId = ""+this.route.params['value'].id; 
//     }
//     let assetContparams = {
//       LookupTypeId: 23
//     }
//     //asset condition
//     this.lookupService.getLookupValueByLookupTypeId(assetContparams).subscribe((res:any) => {
//       this.assetConditionData = res.filter(item => {
//           return item.isActive;
//       });
//     });
//     let vendorParams = {
//       apartmentId: this.sessionService.apartmentId
//     }
//     this.vendorService.getVendorByApartmentId(vendorParams).subscribe((res:any) => {
//       this.vendorDataList = res.filter(item => {
//         return item.isActive;
//       });
//     });
//     let assetParams = {
//       apartmentId: this.sessionService.apartmentId
//     }
//     this.assetService.getAllAssetMaintenancePlanByApartmentId(assetParams).subscribe((res:any) => {
//       this.assetMaintenaceDataList = res.filter(item => {
//         return item.isActive;
//       })
//     })
//     let statusparams = {
//       LookupTypeId: 64
//     }
//     this.lookupService.getLookupValueByLookupTypeId(statusparams).subscribe((res:any) => {
//       this.statusTypeData = res;
//     },
//     error => {
//     });
//     // delete item
//     this.sharedService.unitlistdeleteindexcast.subscribe( id => {
//       if(id != null){
//         var params = {
//           assetId: id,
//           deleteBy: parseInt(this.sessionService.userId)
//         }
//         this.assetService.deleteAsset(params).subscribe((res:any) => {
//           _.each(this.assetListData, (type)=>{
//             if(type.assetId == id){
//               type.isActive = false;
//             }
//           })
//           setTimeout(() => {
//             this.assetListData = this.assetListData.filter((type) => type.assetId !== id);
//             this.totalItems = this.assetListData.length;
//             this.sharedService.setAlertMessage("Asset deleted");
//             this.sharedService.setUnitListDeleteIndex(null);
//           }, 500)
//         }, error => {
//         });
//       }
//     });
//   }
//   navigateToAddMaintenance(row) {
//     this.router.navigate( ['/ams/assets/create-maintenance'], { queryParams: { assetId: row.assetId,type:'ADD'}});
//   }
// }


/***/ }),

/***/ "./src/app/modules/ams/assets/assets-view/assets-view.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ams/assets/assets-view/assets-view.module.ts ***!
  \**********************************************************************/
/*! exports provided: AssetsViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsViewModule", function() { return AssetsViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");
/* harmony import */ var _assets_view_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets-view-routing.module */ "./src/app/modules/ams/assets/assets-view/assets-view-routing.module.ts");
/* harmony import */ var _assets_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets-view.component */ "./src/app/modules/ams/assets/assets-view/assets-view.component.ts");







let AssetsViewModule = class AssetsViewModule {
};
AssetsViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"],
            _assets_view_routing_module__WEBPACK_IMPORTED_MODULE_5__["AssetsViewRoutingModule"]
        ],
        bootstrap: [
            _assets_view_component__WEBPACK_IMPORTED_MODULE_6__["AssetsViewComponent"]
        ]
    })
], AssetsViewModule);



/***/ })

}]);
//# sourceMappingURL=modules-ams-assets-assets-view-assets-view-module-es2015.js.map