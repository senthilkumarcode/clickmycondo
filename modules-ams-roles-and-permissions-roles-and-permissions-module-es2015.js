(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-roles-and-permissions-roles-and-permissions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"main\">\n\t\t<condo-message class=\"mb-3\" *ngIf=\"message\"\n\t\t\t[appearance]=\"message.appearance\"\n\t\t\t[showIcon]=\"message.showIcon\"\n\t\t\t[type]=\"message.type\"\n\t\t\t[@shake]=\"message.shake\">\n\t\t\t{{message.content}}\n\t\t</condo-message>\n\t\t<form #rolesForm=\"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t<condo-card>\n\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t<span *ngIf=\"isCreate\">Create Roles</span>\n\t\t\t\t\t\t\t<span *ngIf=\"!isCreate\">Edit Roles</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t<div class=\"p-5\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t<label>Roles Type*</label>\n\t\t\t\t\t\t\t\t\t<select name=\"roleTypeId\" [(ngModel)]=\"roleInfo.roleTypeId\" class=\"form-control\" required>\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of allRoles\" [ngValue]=\"item.value\">{{item?.name}}\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Roles Name*</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"roleName\" [(ngModel)]=\"roleInfo.roleName\" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<textarea name=\"description\" [(ngModel)]=\"roleInfo.description\" cols=\"10\"\n\t\t\t\t\t\t\t\t\t\trows=\"3\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t<button class=\"mr-3\" mat-flat-button\n\t\t\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/roles-type-list\" routerLinkActive=\"active\"\n\t\t\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">Cancel</button>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" *ngIf=\"isCreate\"\n\t\t\t\t\t\t\t\t\t(click)=\"addRole()\">Submit</button>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" *ngIf=\"!isCreate\"\n\t\t\t\t\t\t\t\t\t(click)=\"updateRole()\">Update</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</condo-card>\n\t\t</form>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"main\">\n\t\t<form #rolesForm=\"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t<condo-message class=\"mb-3\" *ngIf=\"message\"\n\t\t\t\t[appearance]=\"message.appearance\"\n\t\t\t\t[showIcon]=\"message.showIcon\"\n\t\t\t\t[type]=\"message.type\"\n\t\t\t\t[@shake]=\"message.shake\">\n\t\t\t\t{{message.content}}\n\t\t\t</condo-message>\n\t\t\t<condo-card>\n\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t\t<span *ngIf=\"isCreate\">Create Menu Control</span>\n\t\t\t\t\t\t\t\t<span *ngIf=\"!isCreate\">Edit Menu Control</span>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t<div class=\"p-5\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\t\t\tlabelText=\"Role Type\"\n\t\t\t\t\t\t\t\t\tfieldPlaceholder=\"Select Role Type\"\n\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\t[fieldList]=\"allRoles\"\n\t\t\t\t\t\t\t\t\tfieldValue=\"name\"\n\t\t\t\t\t\t\t\t\t[fieldModel]=\"roleTypeId\"\n\t\t\t\t\t\t\t\t\tfieldId=\"value\"\n\t\t\t\t\t\t\t\t\t(fieldParams)=\"setRoleType($event)\" \n\t\t\t\t\t\t\t\t></condo-select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\" *ngIf=\"roleTypeId\">\n\t\t\t\t\t\t\t\t<condo-select \n\t\t\t\t\t\t\t\t\tlabelText=\"{{roleTypeId == 1 ? 'Admin' : 'Staff'}} Role\"\n\t\t\t\t\t\t\t\t\tfieldPlaceholder=\"Select {{roleTypeId == 1 ? 'Admin' : 'Staff'}} Role\"\n\t\t\t\t\t\t\t\t\t[fieldRequired]=\"'required'\"\n\t\t\t\t\t\t\t\t\t[fieldList]=\"roleList\"\n\t\t\t\t\t\t\t\t\tfieldValue=\"roleName\"\n\t\t\t\t\t\t\t\t\t[fieldModel]=\"roleId\"\n\t\t\t\t\t\t\t\t\tfieldId=\"roleId\"\n\t\t\t\t\t\t\t\t\t(fieldParams)=\"setRole($event)\" \n\t\t\t\t\t\t\t\t></condo-select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Menu Control Name*</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"name\" required>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<textarea name=\"description\" [(ngModel)]=\"description\" cols=\"10\"\n\t\t\t\t\t\t\t\t\t\trows=\"3\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t<button class=\"mr-3\" mat-flat-button\n\t\t\t\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/role-permissions-list\" routerLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">Cancel</button>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" *ngIf=\"isCreate\"\n\t\t\t\t\t\t\t\t\t(click)=\"addRole()\">Submit</button>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" *ngIf=\"!isCreate\"\n\t\t\t\t\t\t\t\t\t(click)=\"updateRole()\">Update</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</condo-card>\n\t\t</form>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isShowRoleList\"></app-loader>\n\t\t<condo-card *ngIf=\"isShowRoleList\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t<h4>Roles for Staff & Admin</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto mr-3\">\n\t\t\t\t\t\t<app-table-search [input]=\"roleTypeSearch\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" href=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/role-type\" routerLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">Create Role</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"roleTypeList\" [columns]=\"roleHeader\"\n\t\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n\t<div class=\"main\">\n\t\t<app-loader *ngIf=\"!isShowRoleList\"></app-loader>\n\t\t<condo-card *ngIf=\"isShowRoleList\">\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div class=\"d-flex align-items-center\">\n\t\t\t\t\t\t<h4>Roles And Permissions</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto mr-3\">\n\t\t\t\t\t\t<app-table-search [input]=\"roleSearch\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" href=\"javascript:void(0)\"\n\t\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/configure-roles\" routerLinkActive=\"active\"\n\t\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">Add Menu Control</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"roleList\" [columns]=\"roleHeader\"\n\t\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parking-create-parking-slot-wrapper\">\n    <div class=\"main\">\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>Set Permissions</h4>\n                        <p>{{menuList.length}} results</p>\n                    </div>\n                    <div class=\"ml-auto d-none d-md-block mr-3\">\n                        <button mat-flat-button \n                        routerLink=\"/ams/roles-permissions/role-permissions-list\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Back to Role List</button>\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <app-loader *ngIf=\"!isDataLoaded\" ></app-loader>\n                <div class=\"p-5\" *ngIf=\"isDataLoaded\" > \n                    <div class=\"row\">\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <h5 class=\"mb-4\">Menu</h5>\n                            <mat-selection-list #menu [multiple]=\"false\" (selectionChange)=\"changeMenu($event)\">\n                                <mat-list-option *ngFor=\"let item of menuList;let i=index\" [value]=\"item\"\n                                    [selected]=\"item.menuName === selectedMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\" checked>\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.menuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <h5 class=\"mb-4\">Sub-Menu</h5>\n                            <mat-selection-list #submenu [multiple]=\"false\" (selectionChange)=\"changeSubMenu($event)\">\n                                <mat-list-option *ngFor=\"let item of subMenuList\" [value]=\"item\"\n                                    [selected]=\"item.subMenuName === selectedSubMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\">\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.subMenuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\" *ngIf=\"actionList && actionList.length\">\n                            <h5 class=\"mb-4\">Action</h5>\n                            <!-- Temporary Solution -->\n                            <mat-selection-list #menuActions (selectionChange)=\"changeActions($event)\">\n                                <mat-list-option [selected]=\"isEnabled\" [value]=\"actionList\">\n                                    Enable  \n                                </mat-list-option>\n                            </mat-selection-list>\n\n                            <!-- Permanent Solution -->\n\n                            <!-- <mat-selection-list #menuActions (selectionChange)=\"changeActions($event)\">\n                                <mat-list-option *ngFor=\"let item of actionList\" [selected]=\"item.checked\"\n                                    [value]=\"item\">\n                                    {{item?.name | uppercase}}\n                                </mat-list-option>\n                            </mat-selection-list> -->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </condo-card>\n    </div>\n</div>");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_condo_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@condo/animations */ "./src/@condo/animations/index.ts");








let AddRoleComponent = class AddRoleComponent {
    constructor(userService, router, activatedRoute, sessionService, sharedService, _changeDetectorRef) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.sharedService = sharedService;
        this._changeDetectorRef = _changeDetectorRef;
        this.allRoles = [];
        this.isCreate = true;
        this.roleInfo = {};
        this.message = null;
    }
    addRole() {
        this.message = null;
        if (!this.form.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this._changeDetectorRef.markForCheck();
        }
        else {
            let addRoleParam = {
                "roleId": 0,
                "apartmentId": this.sessionService.apartmentId,
                "roleName": this.roleInfo.roleName,
                "description": this.roleInfo.description,
                "isActive": true,
                "insertedBy": this.sessionService.userId,
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null,
                "roleTypeId": this.roleInfo.roleTypeId
            };
            let roleParam = {
                role: addRoleParam
            };
            this.userService.addRole(roleParam).subscribe((resp) => {
                if (resp.message) {
                    this.router.navigate(['roles-type-list'], { relativeTo: this.activatedRoute.parent });
                    this.sharedService.openSnackBar('Role Added Successfully', 'success');
                }
                else
                    this.sharedService.openSnackBar(resp.errorMessage, 'error');
            }, (error) => {
                this.sharedService.openSnackBar('Server Error', 'error');
            });
        }
    }
    updateRole() {
        this.message = null;
        if (!this.form.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this._changeDetectorRef.markForCheck();
        }
        else {
            let addRoleParam = {
                "roleId": this.roleInfo.roleId,
                "apartmentId": this.sessionService.apartmentId,
                "roleName": this.roleInfo.roleName,
                "description": this.roleInfo.description,
                "isActive": true,
                "insertedBy": this.roleInfo.insertedBy,
                "insertedOn": this.roleInfo.insertedOn,
                "updatedBy": this.sessionService.userId,
                "updatedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().toISOString(),
                "roleTypeId": this.roleInfo.roleTypeId
            };
            let roleParam = {
                role: addRoleParam
            };
            this.userService.updateRole(roleParam).subscribe((resp) => {
                if (resp.message) {
                    this.router.navigate(['roles-type-list'], { relativeTo: this.activatedRoute.parent });
                    this.sharedService.openSnackBar(resp.message, 'success');
                }
                else
                    this.sharedService.openSnackBar(resp.errorMessage, 'error');
            }, (error) => {
                this.sharedService.openSnackBar('Server Error', 'error');
            });
        }
    }
    ngOnInit() {
        if (this.activatedRoute.params['value'].id != undefined) {
            this.isCreate = false;
            let queryParamBase = {
                roleId: this.activatedRoute.params['value'].id
            };
            this.userService.getRoleByRoleId(queryParamBase).subscribe(resp => {
                this.roleInfo = resp[0];
            });
        }
        this.userService.getAllRoleTypes().subscribe((resp) => {
            if (Array.isArray(resp)) {
                this.allRoles = resp.filter(data => {
                    if (data.value == 1 || data.value == 3) {
                        return data;
                    }
                });
            }
        });
    }
};
AddRoleComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AddRoleComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['rolesForm',] }]
};
AddRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-role',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_7__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-role.component.scss */ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], AddRoleComponent);



/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9jb25maWd1cmUtcm9sZXMvY29uZmlndXJlLXJvbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfigureRolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureRolesComponent", function() { return ConfigureRolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/Screen */ "./src/app/api/controllers/Screen.ts");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_condo_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/@condo/animations */ "./src/@condo/animations/index.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");









let ConfigureRolesComponent = class ConfigureRolesComponent {
    constructor(userService, router, activatedRoute, sessionService, sharedService, _changeDetectorRef, screenService) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.sessionService = sessionService;
        this.sharedService = sharedService;
        this._changeDetectorRef = _changeDetectorRef;
        this.screenService = screenService;
        this.allRoles = [];
        this.roleList = [];
        this.isCreate = true;
        this.message = null;
    }
    setRoleType(event) {
        this.roleId = null;
        this.roleTypeId = event[0].value;
        this.getRoleList();
    }
    getRoleList() {
        //Admin Role Type
        var paramsRoles = {
            RoleTypeId: this.roleTypeId,
            ApartmentId: this.sessionService.apartmentId
        };
        this.userService.getAllRolesByRoleTypeIdByApartmentId(paramsRoles).subscribe((res) => {
            this.roleList = res;
        });
    }
    setRole(event) {
        this.roleId = event[0].roleId;
    }
    addRole() {
        this.message = null;
        if (!this.form.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this._changeDetectorRef.markForCheck();
        }
        else {
            let addMenuLevelParam = {
                "menuSecLevelId": 0,
                "apartmentId": this.sessionService.apartmentId,
                "name": this.name,
                "isActive": true,
                "insertedBy": this.sessionService.userId,
                "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().toISOString(),
                "updatedBy": null,
                "updatedOn": null
            };
            let secLevelParam = {
                seclevel: addMenuLevelParam
            };
            this.screenService.addMenuSecLevel(secLevelParam).subscribe((resp) => {
                if (resp && resp.message) {
                    let addMenuRoleSecLevel = {
                        "menuRoleSecLevelId": 0,
                        "apartmentId": this.sessionService.apartmentId,
                        "roleId": this.roleId,
                        "secLevelId": resp.message,
                        "isActive": true,
                        "insertedBy": this.sessionService.userId,
                        "insertedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().toISOString(),
                        "updatedBy": null,
                        "updatedOn": null
                    };
                    let roleSecLevelParam = {
                        roleseclevel: addMenuRoleSecLevel
                    };
                    this.screenService.addMenuRoleSecLevel(roleSecLevelParam).subscribe((resp) => {
                        if (resp.message) {
                            this.sharedService.openSnackBar('Menu Control Added Successfully', 'success');
                            this.router.navigate(['/ams/roles-permissions/role-permissions-list']);
                        }
                        else {
                            this.sharedService.openSnackBar(resp.errorMessage, 'error');
                        }
                    }, (error) => {
                        this.sharedService.openSnackBar('Server Error', 'error');
                    });
                }
            });
        }
    }
    updateRole() {
        this.message = null;
        if (!this.form.valid) {
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
            // Show the validation message
            this.message = {
                appearance: 'outline',
                content: "Fill the Required Fields",
                shake: true,
                showIcon: true,
                type: 'error'
            };
            //Mark for check
            this._changeDetectorRef.markForCheck();
        }
        else {
            let updataParam = {
                "menuSecLevelId": this.menuRole.secLevelId,
                "apartmentId": this.sessionService.apartmentId,
                "name": this.name,
                "isActive": true,
                "insertedBy": this.menuRole.insertedBy,
                "insertedOn": this.menuRole.insertedOn,
                "updatedBy": this.sessionService.userId,
                "updatedOn": moment_timezone__WEBPACK_IMPORTED_MODULE_6___default()().toISOString()
            };
            let updateRoleParam = {
                menuSecLevel: updataParam
            };
            this.screenService.updateMenuSecLevel(updateRoleParam).subscribe((resp) => {
                if (resp.message) {
                    this.sharedService.openSnackBar('Menu Control Updated', 'success');
                    this.router.navigate(['/ams/roles-permissions/role-permissions-list']);
                }
                else {
                    this.sharedService.openSnackBar(resp.errorMessage, 'error');
                }
            }, (error) => {
                this.sharedService.openSnackBar('Server Error', 'error');
            });
        }
    }
    ngOnInit() {
        if (this.activatedRoute.params['value'].id != undefined) {
            this.menuRoleSecLevelId = this.activatedRoute.params['value'].id;
            this.isCreate = false;
            let queryParamBase = {
                apartmentId: this.sessionService.apartmentId,
                menuRoleSecLevelId: this.menuRoleSecLevelId,
            };
            this.screenService.getMenuRoleSecLevelbyRoleSecLevelId(queryParamBase).subscribe(resp => {
                this.menuRole = resp[0];
                this.roleId = this.menuRole.roleId;
                this.name = this.menuRole.secLevelName;
                this.roleTypeId = this.menuRole.roleTypeId;
                this.getRoleList();
            });
        }
        this.userService.getAllRoleTypes().subscribe((resp) => {
            if (Array.isArray(resp)) {
                this.allRoles = resp.filter(data => {
                    if (data.value == 1 || data.value == 3) {
                        return data;
                    }
                });
            }
        });
    }
};
ConfigureRolesComponent.ctorParameters = () => [
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"] }
];
ConfigureRolesComponent.propDecorators = {
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['rolesForm',] }]
};
ConfigureRolesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configure-roles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./configure-roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        animations: src_condo_animations__WEBPACK_IMPORTED_MODULE_7__["CondoAnimations"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./configure-roles.component.scss */ "./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]])
], ConfigureRolesComponent);



/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9yb2xlLXR5cGUtbGlzdC9yb2xlLXR5cGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RoleTypeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleTypeListComponent", function() { return RoleTypeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/controllers/User */ "./src/app/api/controllers/User.ts");
/* harmony import */ var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/session/session.service */ "./src/app/core/session/session.service.ts");
/* harmony import */ var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */ "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
/* harmony import */ var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/modal.service */ "./src/app/shared/services/modal.service.ts");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");









let RoleTypeListComponent = class RoleTypeListComponent {
    constructor(router, userService, sharedService, sessionService, injector) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.sessionService = sessionService;
        this.injector = injector;
        this.roleHeader = [];
        this.isEnableCreate = true;
        this.isShowRoleList = false;
        this.roleTypeSearch = '';
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]);
    }
    onEditRole(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let roleId = dataRecord.roleId;
        this.router.navigateByUrl('/ams/roles-permissions/edit-role-type/' + roleId);
    }
    onDeleteRole(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let roleId = dataRecord.roleId;
        this.modalService.showConfirmModal(roleId);
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
            this.roleHeader.forEach(item => {
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
    getRolePermissionList() {
        this.isShowRoleList = false;
        let param = {
            ApartmentId: this.sessionService.apartmentId,
            roleTypeIDs: '1,3,5',
        };
        this.userService.getAllRolesbyMultipleRoleTypeId(param).subscribe((resp) => {
            let refMenuData = resp.filter(data => {
                return data.isActive;
            });
            let gridSourceData = {
                localdata: refMenuData,
                datatype: "array"
            };
            this.roleTypeList = new jqx.dataAdapter(gridSourceData);
            this.isShowRoleList = true;
            this.isEnableCreate = true;
        });
    }
    ngOnInit() {
        this.getRolePermissionList();
        var cellsrenderer = (row, column, value) => {
            return '<div class="jqx-custom-inner-cell">' + value + '</div>';
        };
        var columnrenderer = (value) => {
            return '<div style="padding: 14px">' + value + '</div>';
        };
        this.roleHeader = [{
                text: 'Role Type',
                datafield: 'roleTypeName',
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer,
                minwidth: 120
            }, {
                text: 'role name',
                datafield: 'roleName',
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer,
                minwidth: 120
            }, {
                text: 'description',
                datafield: 'description',
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer,
                minwidth: 120
            }, {
                text: 'action',
                datafield: 'roleTypeId',
                cellsalign: 'center',
                align: 'center',
                width: 120,
                cellsrenderer: (row, column, value) => {
                    if (value != 5) {
                        return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="onEditRole(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a>'
                            + '<a href="javascript:void(0)" class="mr-2" onClick="onDeleteRole(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a>'
                            + '</div>';
                    }
                    else {
                        return '';
                    }
                },
                renderer: columnrenderer
            }];
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    roleId: id,
                    deleteBy: this.sessionService.userId,
                };
                this.userService.deleteRole(params).subscribe((res) => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    if (res.message) {
                        this.getRolePermissionList();
                        this.sharedService.openSnackBar('Role deleted Successfully', 'success');
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
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
    }
};
RoleTypeListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
RoleTypeListComponent.propDecorators = {
    datagrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['datagrid', { static: false },] }],
    onEditRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onEditRole', ['$event.detail'],] }],
    onDeleteRole: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['window:onDeleteRole', ['$event.detail'],] }]
};
RoleTypeListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-role-type-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./role-type-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./role-type-list.component.scss */ "./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_3__["UserService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], RoleTypeListComponent);

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
        this.roleSearch = '';
        this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]);
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
            this.roleHeader.forEach(item => {
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
    navigateToPermission(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        this.router.navigate(['/ams/roles-permissions/set-permission'], { queryParams: { secLevelId: dataRecord.secLevelId, roleId: dataRecord.roleId } });
    }
    onEditRole(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let menuRoleSecLevelId = dataRecord.menuRoleSecLevelId;
        this.router.navigateByUrl('/ams/roles-permissions/edit-configure-roles/' + menuRoleSecLevelId);
    }
    onDeleteRole(detail) {
        let dataRecord = this.datagrid.getrowdata(detail.rowId);
        let menuRoleSecLevelId = dataRecord.menuRoleSecLevelId;
        this.modalService.showConfirmModal(menuRoleSecLevelId);
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
                renderer: columnrenderer,
                minwidth: 120
            }, {
                text: 'menu control name',
                datafield: 'secLevelName',
                cellsrenderer: cellsrenderer,
                renderer: columnrenderer,
                minwidth: 120
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
        this.apiSubscribe = this.sharedService.unitlistdeleteindexcast.subscribe(id => {
            if (id != null) {
                var params = {
                    menuRoleSecLevelId: id,
                    deleteBy: parseInt(this.sessionService.userId)
                };
                this.screenService.deleteMenuRoleSecLevel(params).subscribe((res) => {
                    this.sharedService.setUnitListDeleteIndex(null);
                    if (res.message) {
                        this.getRolePermissionList();
                        this.sharedService.openSnackBar(res.message, 'success');
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
        this.getRolePermissionList();
    }
    ngOnDestroy() {
        this.apiSubscribe.unsubscribe();
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
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts");
/* harmony import */ var _configure_roles_configure_roles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configure-roles/configure-roles.component */ "./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.ts");
/* harmony import */ var _role_type_list_role_type_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./role-type-list/role-type-list.component */ "./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.ts");
/* harmony import */ var _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles-and-permissions-list/roles-and-permissions-list.component */ "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
/* harmony import */ var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./set-permissions/set-permissions.component */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");








const routes = [
    { path: '', redirectTo: 'roles-permissions-list', pathMatch: 'full' },
    { path: 'roles-permissions-list', component: _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_6__["RolesAndPermissionsListComponent"] },
    { path: 'roles-type-list', component: _role_type_list_role_type_list_component__WEBPACK_IMPORTED_MODULE_5__["RoleTypeListComponent"] },
    { path: 'set-permission', component: _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_7__["SetPermissionsComponent"] },
    { path: 'role-type', component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__["AddRoleComponent"] },
    { path: 'edit-role-type/:id', component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__["AddRoleComponent"] },
    { path: 'configure-roles', component: _configure_roles_configure_roles_component__WEBPACK_IMPORTED_MODULE_4__["ConfigureRolesComponent"] },
    { path: 'edit-configure-roles/:id', component: _configure_roles_configure_roles_component__WEBPACK_IMPORTED_MODULE_4__["ConfigureRolesComponent"] },
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
/* harmony import */ var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-role/add-role.component */ "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts");
/* harmony import */ var _configure_roles_configure_roles_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./configure-roles/configure-roles.component */ "./src/app/modules/ams/roles-and-permissions/configure-roles/configure-roles.component.ts");
/* harmony import */ var _role_type_list_role_type_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./role-type-list/role-type-list.component */ "./src/app/modules/ams/roles-and-permissions/role-type-list/role-type-list.component.ts");
/* harmony import */ var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modules/ui/select/select.module */ "./src/app/modules/ui/select/select.module.ts");
/* harmony import */ var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modules/ui/message/message.module */ "./src/app/modules/ui/message/message.module.ts");














let RolesAndPermissionsModule = class RolesAndPermissionsModule {
};
RolesAndPermissionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"], _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_4__["SetPermissionsComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_9__["AddRoleComponent"], _configure_roles_configure_roles_component__WEBPACK_IMPORTED_MODULE_10__["ConfigureRolesComponent"], _role_type_list_role_type_list_component__WEBPACK_IMPORTED_MODULE_11__["RoleTypeListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CondoCardModule"],
            src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_12__["SelectModule"],
            src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_13__["CondoMessageModule"],
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
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let SetPermissionsComponent = class SetPermissionsComponent {
    constructor(_router, screenService, sharedService, activatedRoute, changeDetection, sessionService) {
        this._router = _router;
        this.screenService = screenService;
        this.sharedService = sharedService;
        this.activatedRoute = activatedRoute;
        this.changeDetection = changeDetection;
        this.sessionService = sessionService;
        this.menuList = [];
        this.isDataLoaded = false;
        this.isEnabled = false;
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
        this.isDataLoaded = false;
        let queryParamBase = {
            ApartmentId: this.sessionService.apartmentId,
            RoleId: parseInt(this.roleId),
            secLevelId: parseInt(this.secLevelId)
        };
        this.screenService.getMenuFunctionByRoleIdMultiFilter(queryParamBase).subscribe((resp) => {
            this.menuList = resp.responseData.value;
            if (this.menuList && this.menuList.length) {
                this.selectedMenuName = this.menuList[0].menuName;
                this.changeMenu('');
            }
            this.isDataLoaded = true;
        });
    }
    changeMenu(event) {
        if (event) {
            this.selectedMenuName = event.option.value ? event.option.value.menuName : '';
        }
        if (this.selectedMenuName) {
            this.menuList.filter(key => {
                if (key.menuName == this.selectedMenuName) {
                    this.subMenuList = [...key.subMenuNames];
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
                    this.actions = Object.assign({}, key.actions);
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
        //Temporary Solution
        this.isEnabled = this.actionList.every((data) => data.checked);
    }
    changeActions(event) {
        ;
        let isActive = event.option._selected;
        this.isDataLoaded = false;
        let multipleApiCall = [];
        this.actionList.forEach((data) => {
            if (data.functionId != 0) {
                let queryParamBase = {
                    apartmentId: this.sessionService.apartmentId,
                    menuSecLevelFunctionId: data.functionId,
                    isActive: isActive,
                    updatedBy: this.sessionService.roleId,
                };
                multipleApiCall.push(this.screenService.updateMenuSecLevelFunctionMapping(queryParamBase));
            }
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(...multipleApiCall).subscribe((res) => {
            let success;
            success = res.every((data) => {
                if (data.message)
                    return true;
                else
                    return false;
            });
            if (success) {
                let url = this._router.url;
                this._router.navigateByUrl('/ams/dummy', { skipLocationChange: true }).then(() => {
                    this._router.navigate(['/ams']);
                });
                this.changeDetection.detectChanges();
                let operation = ['add', 'edit', 'display', 'delete'];
                for (let menu of this.menuList) {
                    if (menu.menuName == this.selectedMenuName) {
                        for (let submenu of menu.subMenuNames) {
                            if (submenu.subMenuName == this.selectedSubMenuName) {
                                for (let key in submenu.actions) {
                                    if (operation.includes(key)) {
                                        submenu.actions[key] = isActive;
                                    }
                                }
                            }
                            break;
                        }
                        break;
                    }
                }
                this.sharedService.openSnackBar(`Permission Updated!`, 'success');
            }
            else
                this.sharedService.openSnackBar(`Permission Not Updated!`, 'error');
            this.isDataLoaded = true;
            this.isEnabled = isActive;
        });
        // let queryParamBase = {
        //   apartmentId: this.sessionService.apartmentId,
        //   menuSecLevelFunctionId: event.option.value.functionId,
        //   isActive: !event.option.value.checked,
        //   updatedBy: this.sessionService.roleId,
        // };
        // this.screenService.updateMenuSecLevelFunctionMapping(queryParamBase).subscribe(
        //   (resp: any) => {
        //     this.sharedService.openSnackBar(`${event.option.value.name} Permission Updated!`, 'success')
        //   });
    }
};
SetPermissionsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"] },
    { type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] }
];
SetPermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-permissions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./set-permissions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./set-permissions.component.scss */ "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"],
        src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]])
], SetPermissionsComponent);



/***/ })

}]);
//# sourceMappingURL=modules-ams-roles-and-permissions-roles-and-permissions-module-es2015.js.map