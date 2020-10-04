(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-roles-and-permissions-roles-and-permissions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n\t<div class=\"main\">\n\t\t<condo-card>\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div class=\"d-flex align-items-center\" >\n\t\t\t\t\t\t<h4>Roles And Permissions</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/add-roles-permissions\" routerLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">Create Roles</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody *ngIf=\"isShowRoleList\" >\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"roleList\" [columns]=\"roleHeader\"\n\t\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n    <div class=\"main\">\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>Set Permissions</h4>\n                    </div>\n                    <div class=\"ml-auto d-none d-md-block mr-3\">\n                        <button mat-flat-button \n                        routerLink=\"/ams/roles-permissions/role-permissions-list\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Cancel</button>\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <div class=\"p-5\"> \n                    <div class=\"row\">\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <mat-selection-list #menu [multiple]=\"false\" (selectionChange)=\"changeMenu($event)\">\n                                <mat-list-option *ngFor=\"let item of menuList;let i=index\" [value]=\"item\"\n                                    [selected]=\"item.menuName === selectedMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\" checked>\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.menuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <mat-selection-list #submenu [multiple]=\"false\" (selectionChange)=\"changeSubMenu($event)\">\n                                <mat-list-option *ngFor=\"let item of subMenuList\" [value]=\"item\"\n                                    [selected]=\"item.subMenuName === selectedSubMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\">\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.subMenuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\" *ngIf=\"actionList && actionList.length\">\n                            <mat-selection-list #menuActions (selectionChange)=\"changeActions($event)\">\n                                <mat-list-option *ngFor=\"let item of actionList\" [selected]=\"item.checked\"\n                                    [value]=\"item\">\n                                    {{item?.name | uppercase}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </condo-card>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss":
/*!************************************************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9yb2xlcy1hbmQtcGVybWlzc2lvbnMtbGlzdC9yb2xlcy1hbmQtcGVybWlzc2lvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: RolesAndPermissionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesAndPermissionsListComponent", function() { return RolesAndPermissionsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/Screen */ "./src/app/api/controllers/Screen.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");








let RolesAndPermissionsListComponent = class RolesAndPermissionsListComponent {
    constructor(router, screenService, sharedService, sessionService, injector) {
        this.router = router;
        this.screenService = screenService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.injector = injector;
        this.roleHeader = [];
        this.isEnableCreate = true;
        this.isShowRoleList = false;
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
    }
    navigateToPermission(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.router.navigate(['/ams/roles-permissions/set-permission'], { queryParams: { secLevelId: dataRecord.secLevelId, roleId: dataRecord.roleId } });
    }
    onEditRole(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let menuRoleSecLevelId = dataRecord.menuRoleSecLevelId;
        this.router.navigateByUrl('/ams/roles-permissions/edit-roles-permissions/' + menuRoleSecLevelId);
    }
    onDeleteRole(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let menuRoleSecLevelId = dataRecord.menuRoleSecLevelId;
        this.modalService.showConfirmModal(menuRoleSecLevelId);
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.roleHeader = [{
                text: 'role name',
                datafield: 'roleName',
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'menu security name',
                datafield: 'secLevelName',
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'set permission',
                cellsalign: 'center',
                align: 'center',
                width: 200,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" onClick="navigateToPermission(' + row + ')" class="btn mat-primary">Set Permissions</a></div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'action',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="onEditRole(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="onDeleteRole(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        // delete item
        this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    menuRoleSecLevelId: id,
                    deleteBy: parseInt(this.sessionService.userId)
                };
                this.screenService.deleteMenuRoleSecLevel(params).subscribe((res) => {
                    this.getRolePermissionList();
                }, error => {
                    console.log(error);
                });
            }
        });
        this.getRolePermissionList();
    }
    getRolePermissionList() {
        this.isShowRoleList = false;
        let param = {
            apartmentId: this.sessionService.apartmentId
        };
        this.screenService.getAllDefaultMenuRoleSecLevelbyApartmentId(param).subscribe((resp) => {
            let refMenuData = resp.filter(data => {
                return data.isActive;
            });
            let gridSourceData = {
                localdata: refMenuData,
                datatype: "array"
            };
            this.roleList = new jqx.dataAdapter(gridSourceData);
            this.isShowRoleList = true;
            this.isEnableCreate = true;
        });
    }
};
RolesAndPermissionsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_4__["ScreenService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
RolesAndPermissionsListComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    navigateToPermission: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:navigateToPermission', ['$event.detail'],] }],
    onEditRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onEditRole', ['$event.detail'],] }],
    onDeleteRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onDeleteRole', ['$event.detail'],] }]
};
RolesAndPermissionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-and-permissions-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./roles-and-permissions-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./roles-and-permissions-list.component.scss */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_4__["ScreenService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], RolesAndPermissionsListComponent);

function navigateToPermission(row) {
    var event = new CustomEvent('navigateToPermission', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.navigateToPermission = navigateToPermission;
function onEditRole(row) {
    var event = new CustomEvent('onEditRole', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.onEditRole = onEditRole;
function onDeleteRole(row) {
    var event = new CustomEvent('onDeleteRole', {
        detail: {
            rowId: row
        }
    });
    window.dispatchEvent(event);
}
window.onDeleteRole = onDeleteRole;


/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: RolesAndPermissionsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesAndPermissionsRouting", function() { return RolesAndPermissionsRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles-and-permissions-list/roles-and-permissions-list.component */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
/* harmony import */ var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-permissions/set-permissions.component */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");





const routes = [
    { path: '', redirectTo: 'roles-permissions-list', pathMatch: 'full' },
    { path: 'roles-permissions-list', component: _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"] },
    { path: 'set-permission', component: _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_4__["SetPermissionsComponent"] },
    { path: '**', redirectTo: 'roles-permissions-list', pathMatch: 'full' }
];
let RolesAndPermissionsRouting = class RolesAndPermissionsRouting {
};
RolesAndPermissionsRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RolesAndPermissionsRouting);



/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RolesAndPermissionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesAndPermissionsModule", function() { return RolesAndPermissionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles-and-permissions-list/roles-and-permissions-list.component */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
/* harmony import */ var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set-permissions/set-permissions.component */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");
/* harmony import */ var _roles_and_permissions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles-and-permissions-routing.module */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");









let RolesAndPermissionsModule = class RolesAndPermissionsModule {
};
RolesAndPermissionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"], _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_4__["SetPermissionsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CondoCardModule"],
            _roles_and_permissions_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolesAndPermissionsRouting"]
        ]
    })
], RolesAndPermissionsModule);



/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9zZXQtcGVybWlzc2lvbnMvc2V0LXBlcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts ***!
  \************************************************************************************************/
/*! exports provided: SetPermissionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPermissionsComponent", function() { return SetPermissionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/Screen */ "./src/app/api/controllers/Screen.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");





let SetPermissionsComponent = class SetPermissionsComponent {
    constructor(screenService, activatedRoute, sessionService) {
        this.screenService = screenService;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.menuList = [];
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.secLevelId = params['secLevelId'];
            this.roleId = params['roleId'];
            this.getScreenList();
        });
        this.actionList = [
            {
                name: 'add',
                functionId: 0,
                checked: false
            },
            {
                name: 'edit',
                functionId: 0,
                checked: false
            },
            {
                name: 'display',
                functionId: 0,
                checked: false
            },
            {
                name: 'delete',
                functionId: 0,
                checked: false
            }
        ];
    }
    getScreenList() {
        let queryParamBase = {
            ApartmentId: this.sessionService.apartmentId,
            RoleId: parseInt(this.roleId),
            secLevelId: parseInt(this.secLevelId)
        };
        this.screenService.getMenuFunctionByRoleIdMultiFilter(queryParamBase).subscribe((resp) => {
            this.menuList = resp;
            if (this.menuList && this.menuList.length) {
                this.selectedMenuName = this.menuList[0].menuName;
                this.changeMenu('');
            }
        });
    }
    changeMenu(event) {
        if (event) {
            this.selectedMenuName = event.option.value ? event.option.value.menuName : '';
        }
        if (this.selectedMenuName) {
            this.menuList.filter(key => {
                if (key.menuName == this.selectedMenuName) {
                    this.subMenuList = key.subMenuNames;
                    this.selectedSubMenuName = this.subMenuList.length ? this.subMenuList[0].subMenuName : '';
                    this.changeSubMenu('');
                }
            });
        }
    }
    changeSubMenu(event) {
        if (event) {
            this.actions = event.option.value ? event.option.value.actions : {};
            this.mapActions();
        }
        else {
            this.subMenuList.filter(key => {
                if (this.selectedSubMenuName == key.subMenuName) {
                    this.actions = key.actions;
                    this.mapActions();
                }
            });
        }
    }
    mapActions() {
        this.actionList[0].functionId = this.actions.add_FunctionId;
        this.actionList[1].functionId = this.actions.edit_FunctionId;
        this.actionList[2].functionId = this.actions.display_FunctionId;
        this.actionList[3].functionId = this.actions.delete_FunctionId;
        this.actionList[0].checked = this.actions.add;
        this.actionList[1].checked = this.actions.edit;
        this.actionList[2].checked = this.actions.display;
        this.actionList[3].checked = this.actions.delete;
    }
    changeActions(event) {
        if (event.option.value) {
            let queryParamBase = {
                apartmentId: this.sessionService.apartmentId,
                menuSecLevelFunctionId: event.option.value.functionId,
                isActive: !event.option.value.checked,
                updatedBy: this.sessionService.roleId,
            };
            this.screenService.updateMenuSecLevelFunctionMapping(queryParamBase).subscribe((resp) => {
            });
        }
    }
};
SetPermissionsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
SetPermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-permissions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./set-permissions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./set-permissions.component.scss */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], SetPermissionsComponent);



/***/ })

}]);
//# sourceMappingURL=modules-ams-roles-and-permissions-roles-and-permissions-module-es2015.js.map