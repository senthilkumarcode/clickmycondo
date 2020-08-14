(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-roles-and-permissions-roles-and-permissions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"main\">\n\t\t<form #createParkingSlotForm=\"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t<condo-card>\n\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4>Create Roles</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t<div class=\"row m-0 pt-4\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Roles Type</label>\n\t\t\t\t\t\t\t\t<select name=\"roleTypeId\" [(ngModel)]=\"roleTypeId\"  class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of allRoles\" value=\"{{item.value}}\">{{item?.name}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Roles Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"roleName\" [(ngModel)]=\"roleName\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t<textarea name=\"description\" [(ngModel)]=\"description\" cols=\"10\" rows=\"3\"></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row m-0 pb-4\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"addRole()\" >Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</condo-card>\n\t\t</form>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n\t<div class=\"main\">\n\t\t<condo-card >\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>Roles And Permissions</h4>\n\t\t\t\t\t\t<!-- <p>{{totalItems}} results</p> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" \n\t\t\t\t\t\thref=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/add-roles-permissions\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Create Roles</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"roleList\" [columns]=\"roleHeader\"\n\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n    <div class=\"main\">\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>Set Permissions</h4>\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <div class=\"p-5\" >\n                    <div class=\"row\">\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <mat-selection-list #menu [multiple]=\"false\" (selectionChange)=\"changeMenu($event)\" >\n                                <mat-list-option *ngFor=\"let item of menuList;let i=index\" [value]=\"item\" [selected]=\"item.menuName === selectedMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\" checked>\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.menuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <mat-selection-list #submenu [multiple]=\"false\" (selectionChange)=\"changeSubMenu($event)\">\n                                <mat-list-option *ngFor=\"let item of subMenuList\" [value]=\"item\" [selected]=\"item.subMenuName === selectedSubMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\">\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.subMenuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\" *ngIf=\"actionList && actionList.length\" >\n                            <mat-selection-list #menuActions (selectionChange)=\"changeActions($event)\">\n                                <mat-list-option *ngFor=\"let item of actionList\" [selected]=\"item.checked\" [value]=\"item\" >\n                                    {{item?.name | uppercase}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </condo-card>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9hZGQtcm9sZS9hZGQtcm9sZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function() { return AddRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Screen */ "./src/app/api/controllers/Screen.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let AddRoleComponent = class AddRoleComponent {
    constructor(userService, router, screenService) {
        this.userService = userService;
        this.router = router;
        this.screenService = screenService;
        this.allRoles = [];
    }
    ngOnInit() {
        this.getAllRoles();
    }
    getAllRoles() {
        this.userService.getAllRoleTypes().subscribe((resp) => {
            this.allRoles = resp;
            if (this.allRoles && this.allRoles.length) {
                this.allRoles.filter(key => {
                    if (key.value == 2 || key.value == 4 || key.value == 5) {
                        this.allRoles.splice(this.allRoles.indexOf(key), 1);
                    }
                });
            }
        });
    }
    addRole() {
        let addMenuLevelParam = {
            "menuSecLevelId": 0,
            "apartmentId": parseInt(localStorage.getItem('apartmentId')),
            "name": this.roleName,
            "isActive": true,
            "insertedBy": parseInt(localStorage.getItem('userId')),
            "insertedOn": new Date().toISOString(),
            "updatedBy": parseInt(localStorage.getItem('userId')),
            "updatedOn": "2020-08-09T06:22:21.539Z"
        };
        let secLevelParam = {
            seclevel: addMenuLevelParam
        };
        this.screenService.addMenuSecLevel(secLevelParam).subscribe((resp) => {
            if (resp && resp.message) {
                let addMenuRoleSecLevel = {
                    "menuRoleSecLevelId": 0,
                    "apartmentId": parseInt(localStorage.getItem('apartmentId')),
                    "roleId": parseInt(this.roleTypeId),
                    "secLevelId": resp.message,
                    "isActive": true,
                    "insertedBy": parseInt(localStorage.getItem('userId')),
                    "insertedOn": new Date().toISOString(),
                    "updatedBy": parseInt(localStorage.getItem('userId')),
                    "updatedOn": "2020-08-09T06:22:21.539Z"
                };
                let roleSecLevelParam = {
                    roleseclevel: addMenuRoleSecLevel
                };
                this.screenService.addMenuRoleSecLevel(roleSecLevelParam).subscribe(resp => {
                    this.router.navigate(['./']);
                });
            }
        });
    }
};
AddRoleComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"] }
];
AddRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-role',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-role.component.scss */ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]])
], AddRoleComponent);



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




let RolesAndPermissionsListComponent = class RolesAndPermissionsListComponent {
    constructor(router) {
        this.router = router;
        this.roleHeader = [];
        this.roleList = [];
        this.isEnableCreate = true;
    }
    navigateToPermission() {
        this.router.navigateByUrl('/ams/roles-permissions/set-permission');
    }
    ngOnInit() {
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.roleHeader = [{
                text: 'sno',
                datafield: 'sno',
                width: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Role Name',
                datafield: 'roleName',
                minwidth: 100,
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer
            }, {
                text: 'Description',
                datafield: 'description',
                cellsrenderer: cellsrenderer,
                minwidth: 100,
                renderer: columnrenderer
            }, {
                text: 'set permission',
                cellsalign: 'center',
                align: 'center',
                width: 200,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" onClick="navigateToPermission()" class="btn mat-primary">Set Permissions</a></div>';
                },
                renderer: columnrenderer
            },
            {
                text: 'action',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row) => {
                    return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
                },
                renderer: columnrenderer
            }];
        let localData = [
            {
                sno: 1,
                roleName: 'Admin',
                description: 'Admin Having All the Provisions'
            },
            {
                sno: 2,
                roleName: 'Staff',
                description: 'Staff Having All the Provisions'
            }
        ];
        let gridSourceData = {
            localdata: localData,
            datatype: "array"
        };
        this.roleList = new jqx.dataAdapter(gridSourceData);
        this.isEnableCreate = true;
    }
};
RolesAndPermissionsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RolesAndPermissionsListComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    navigateToPermission: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:navigateToPermission',] }]
};
RolesAndPermissionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-and-permissions-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./roles-and-permissions-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./roles-and-permissions-list.component.scss */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RolesAndPermissionsListComponent);

function navigateToPermission() {
    var event = new CustomEvent('navigateToPermission');
    window.dispatchEvent(event);
}
window.navigateToPermission = navigateToPermission;


/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts ***!
  \********************************************************************************************/
/*! exports provided: RolesAndPermissionsRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesAndPermissionsRouting", function() { return RolesAndPermissionsRouting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles-and-permissions-list/roles-and-permissions-list.component */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts");
/* harmony import */ var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-permissions/set-permissions.component */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");






const routes = [
    { path: '', redirectTo: 'roles-permissions-list', pathMatch: 'full' },
    { path: 'roles-permissions-list', component: _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"] },
    { path: 'add-roles-permissions', component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__["AddRoleComponent"] },
    { path: 'set-permission', component: _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__["SetPermissionsComponent"] },
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
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts");
/* harmony import */ var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./set-permissions/set-permissions.component */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");
/* harmony import */ var _roles_and_permissions_routing_modiule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles-and-permissions-routing.modiule */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/card/card.module */ "./src/app/modules/ui/card/card.module.ts");










let RolesAndPermissionsModule = class RolesAndPermissionsModule {
};
RolesAndPermissionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__["AddRoleComponent"], _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__["SetPermissionsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CondoCardModule"],
            _roles_and_permissions_routing_modiule__WEBPACK_IMPORTED_MODULE_6__["RolesAndPermissionsRouting"]
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



let SetPermissionsComponent = class SetPermissionsComponent {
    constructor(screenService) {
        this.screenService = screenService;
        this.menuList = [];
    }
    ngOnInit() {
        this.getScreenList();
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
            ApartmentId: parseInt(localStorage.getItem('apartmentId')),
            RoleId: parseInt(localStorage.getItem('roleId')),
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
            let addFunctionParam = {
                "menuSecLevelFunctionId": 0,
                "apartmentId": parseInt(localStorage.getItem('apartmentId')),
                "secLevelId": null,
                "functionId": event.option.value.functionId,
                "orderNo": 0,
                "isActive": !event.option.value.checked,
                "insertedBy": parseInt(localStorage.getItem('roleId')),
                "insertedOn": new Date().toISOString(),
                "updatedBy": parseInt(localStorage.getItem('roleId')),
                "updatedOn": "2020-08-13T12:10:58.204Z"
            };
            let queryParamBase = {
                seclevelFunctionmap: addFunctionParam
            };
            this.screenService.addMenuSecLevelFunctionMapping(queryParamBase).subscribe((resp) => {
            });
        }
    }
};
SetPermissionsComponent.ctorParameters = () => [
    { type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"] }
];
SetPermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-permissions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./set-permissions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./set-permissions.component.scss */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]])
], SetPermissionsComponent);



/***/ })

}]);
//# sourceMappingURL=modules-ams-roles-and-permissions-roles-and-permissions-module-es2015.js.map