(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-roles-and-permissions-roles-and-permissions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsRolesAndPermissionsAddRoleAddRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"main\">\n\t\t<form #createParkingSlotForm=\"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t<condo-card>\n\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<h4>Create Roles</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t<div class=\"row m-0 pt-4\">\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Roles Type</label>\n\t\t\t\t\t\t\t\t<select name=\"roleTypeId\" [(ngModel)]=\"roleTypeId\"  class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of allRoles\" value=\"{{item.value}}\">{{item?.name}}</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t<label>Roles Name</label>\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"roleName\" [(ngModel)]=\"roleName\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t<textarea name=\"description\" [(ngModel)]=\"description\" cols=\"10\" rows=\"3\"></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row m-0 pb-4\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" (click)=\"addRole()\" >Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</condo-card>\n\t\t</form>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsRolesAndPermissionsRolesAndPermissionsListRolesAndPermissionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n\t<div class=\"main\">\n\t\t<condo-card >\n\t\t\t<div CondoCardHeader>\n\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>Roles And Permissions</h4>\n\t\t\t\t\t\t<!-- <p>{{totalItems}} results</p> -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-auto d-none d-md-block mr-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"mr-3\">\n\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" \n\t\t\t\t\t\thref=\"javascript:void(0)\"\n\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/add-roles-permissions\" \n\t\t\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">Create Roles</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div CondoCardBody>\n\t\t\t\t<jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n\t\t\t\t[filterable]=\"true\" [sortable]=\"true\" [source]=\"roleList\" [columns]=\"roleHeader\"\n\t\t\t\t[columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n\t\t\t</jqxGrid>\n\t\t\t</div>\n\t\t</condo-card>\n\t</div>\n    </div>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsRolesAndPermissionsSetPermissionsSetPermissionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"parking-create-parking-slot-wrapper\">\n    <div class=\"main\">\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>Set Permissions</h4>\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <div class=\"p-5\" >\n                    <div class=\"row\">\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <mat-selection-list #menu [multiple]=\"false\" (selectionChange)=\"changeMenu($event)\" >\n                                <mat-list-option *ngFor=\"let item of menuList;let i=index\" [value]=\"item\" [selected]=\"item.menuName === selectedMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\" checked>\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.menuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                            <mat-selection-list #submenu [multiple]=\"false\" (selectionChange)=\"changeSubMenu($event)\">\n                                <mat-list-option *ngFor=\"let item of subMenuList\" [value]=\"item\" [selected]=\"item.subMenuName === selectedSubMenuName\">\n                                    <!-- <div class=\"form-check recur-check float-left\">\n                                        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\">\n                                        <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                                    </div> -->\n                                    {{item?.subMenuName}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                        <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\" *ngIf=\"actionList && actionList.length\" >\n                            <mat-selection-list #menuActions (selectionChange)=\"changeActions($event)\">\n                                <mat-list-option *ngFor=\"let item of actionList\" [selected]=\"item.checked\" [value]=\"item\" >\n                                    {{item?.name | uppercase}}\n                                </mat-list-option>\n                            </mat-selection-list>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </condo-card>\n    </div>\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.scss":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsRolesAndPermissionsAddRoleAddRoleComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9hZGQtcm9sZS9hZGQtcm9sZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts":
    /*!**********************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: AddRoleComponent */

    /***/
    function srcAppModulesAmsRolesAndPermissionsAddRoleAddRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRoleComponent", function () {
        return AddRoleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/User */
      "./src/app/api/controllers/User.ts");
      /* harmony import */


      var src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Screen */
      "./src/app/api/controllers/Screen.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AddRoleComponent = /*#__PURE__*/function () {
        function AddRoleComponent(userService, router, screenService) {
          _classCallCheck(this, AddRoleComponent);

          this.userService = userService;
          this.router = router;
          this.screenService = screenService;
          this.allRoles = [];
        }

        _createClass(AddRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllRoles();
          }
        }, {
          key: "getAllRoles",
          value: function getAllRoles() {
            var _this = this;

            this.userService.getAllRoleTypes().subscribe(function (resp) {
              _this.allRoles = resp;

              if (_this.allRoles && _this.allRoles.length) {
                _this.allRoles.filter(function (key) {
                  if (key.value == 2 || key.value == 4 || key.value == 5) {
                    _this.allRoles.splice(_this.allRoles.indexOf(key), 1);
                  }
                });
              }
            });
          }
        }, {
          key: "addRole",
          value: function addRole() {
            var _this2 = this;

            var addMenuLevelParam = {
              "menuSecLevelId": 0,
              "apartmentId": parseInt(localStorage.getItem('apartmentId')),
              "name": this.roleName,
              "isActive": true,
              "insertedBy": parseInt(localStorage.getItem('userId')),
              "insertedOn": new Date().toISOString(),
              "updatedBy": parseInt(localStorage.getItem('userId')),
              "updatedOn": "2020-08-09T06:22:21.539Z"
            };
            var secLevelParam = {
              seclevel: addMenuLevelParam
            };
            this.screenService.addMenuSecLevel(secLevelParam).subscribe(function (resp) {
              if (resp && resp.message) {
                var addMenuRoleSecLevel = {
                  "menuRoleSecLevelId": 0,
                  "apartmentId": parseInt(localStorage.getItem('apartmentId')),
                  "roleId": parseInt(_this2.roleTypeId),
                  "secLevelId": resp.message,
                  "isActive": true,
                  "insertedBy": parseInt(localStorage.getItem('userId')),
                  "insertedOn": new Date().toISOString(),
                  "updatedBy": parseInt(localStorage.getItem('userId')),
                  "updatedOn": "2020-08-09T06:22:21.539Z"
                };
                var roleSecLevelParam = {
                  roleseclevel: addMenuRoleSecLevel
                };

                _this2.screenService.addMenuRoleSecLevel(roleSecLevelParam).subscribe(function (resp) {
                  _this2.router.navigate(['./']);
                });
              }
            });
          }
        }]);

        return AddRoleComponent;
      }();

      AddRoleComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]
        }];
      };

      AddRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-role',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-role.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-role.component.scss */
        "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]])], AddRoleComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsRolesAndPermissionsRolesAndPermissionsListRolesAndPermissionsListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9yb2xlcy1hbmQtcGVybWlzc2lvbnMtbGlzdC9yb2xlcy1hbmQtcGVybWlzc2lvbnMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: RolesAndPermissionsListComponent */

    /***/
    function srcAppModulesAmsRolesAndPermissionsRolesAndPermissionsListRolesAndPermissionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesAndPermissionsListComponent", function () {
        return RolesAndPermissionsListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var RolesAndPermissionsListComponent = /*#__PURE__*/function () {
        function RolesAndPermissionsListComponent(router) {
          _classCallCheck(this, RolesAndPermissionsListComponent);

          this.router = router;
          this.roleHeader = [];
          this.roleList = [];
          this.isEnableCreate = true;
        }

        _createClass(RolesAndPermissionsListComponent, [{
          key: "navigateToPermission",
          value: function navigateToPermission() {
            this.router.navigateByUrl('/ams/roles-permissions/set-permission');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
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
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" onClick="navigateToPermission()" class="btn mat-primary">Set Permissions</a></div>';
              },
              renderer: columnrenderer
            }, {
              text: 'action',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2" onClick="editTicketEvent(' + row + ')"><i class="fa fa-pencil icon edit" aria-hidden="true"></i></a><a href="javascript:void(0)" class="mr-2" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i></a></div>';
              },
              renderer: columnrenderer
            }];
            var localData = [{
              sno: 1,
              roleName: 'Admin',
              description: 'Admin Having All the Provisions'
            }, {
              sno: 2,
              roleName: 'Staff',
              description: 'Staff Having All the Provisions'
            }];
            var gridSourceData = {
              localdata: localData,
              datatype: "array"
            };
            this.roleList = new jqx.dataAdapter(gridSourceData);
            this.isEnableCreate = true;
          }
        }]);

        return RolesAndPermissionsListComponent;
      }();

      RolesAndPermissionsListComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      RolesAndPermissionsListComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        navigateToPermission: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:navigateToPermission']
        }]
      };
      RolesAndPermissionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles-and-permissions-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./roles-and-permissions-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./roles-and-permissions-list.component.scss */
        "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], RolesAndPermissionsListComponent);

      function navigateToPermission() {
        var event = new CustomEvent('navigateToPermission');
        window.dispatchEvent(event);
      }

      window.navigateToPermission = navigateToPermission;
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts":
    /*!********************************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts ***!
      \********************************************************************************************/

    /*! exports provided: RolesAndPermissionsRouting */

    /***/
    function srcAppModulesAmsRolesAndPermissionsRolesAndPermissionsRoutingModiuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesAndPermissionsRouting", function () {
        return RolesAndPermissionsRouting;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./roles-and-permissions-list/roles-and-permissions-list.component */
      "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
      /* harmony import */


      var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-role/add-role.component */
      "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts");
      /* harmony import */


      var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./set-permissions/set-permissions.component */
      "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'roles-permissions-list',
        pathMatch: 'full'
      }, {
        path: 'roles-permissions-list',
        component: _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"]
      }, {
        path: 'add-roles-permissions',
        component: _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__["AddRoleComponent"]
      }, {
        path: 'set-permission',
        component: _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__["SetPermissionsComponent"]
      }, {
        path: '**',
        redirectTo: 'roles-permissions-list',
        pathMatch: 'full'
      }];

      var RolesAndPermissionsRouting = function RolesAndPermissionsRouting() {
        _classCallCheck(this, RolesAndPermissionsRouting);
      };

      RolesAndPermissionsRouting = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RolesAndPermissionsRouting);
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/roles-and-permissions.module.ts":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/roles-and-permissions.module.ts ***!
      \***********************************************************************************/

    /*! exports provided: RolesAndPermissionsModule */

    /***/
    function srcAppModulesAmsRolesAndPermissionsRolesAndPermissionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RolesAndPermissionsModule", function () {
        return RolesAndPermissionsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./roles-and-permissions-list/roles-and-permissions-list.component */
      "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
      /* harmony import */


      var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./add-role/add-role.component */
      "./src/app/modules/ams/roles-and-permissions/add-role/add-role.component.ts");
      /* harmony import */


      var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./set-permissions/set-permissions.component */
      "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");
      /* harmony import */


      var _roles_and_permissions_routing_modiule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./roles-and-permissions-routing.modiule */
      "./src/app/modules/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/list */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
      /* harmony import */


      var _ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");

      var RolesAndPermissionsModule = function RolesAndPermissionsModule() {
        _classCallCheck(this, RolesAndPermissionsModule);
      };

      RolesAndPermissionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__["AddRoleComponent"], _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__["SetPermissionsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _ui_card_card_module__WEBPACK_IMPORTED_MODULE_9__["CondoCardModule"], _roles_and_permissions_routing_modiule__WEBPACK_IMPORTED_MODULE_6__["RolesAndPermissionsRouting"]]
      })], RolesAndPermissionsModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsRolesAndPermissionsSetPermissionsSetPermissionsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGVzLWFuZC1wZXJtaXNzaW9ucy9zZXQtcGVybWlzc2lvbnMvc2V0LXBlcm1pc3Npb25zLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts":
    /*!************************************************************************************************!*\
      !*** ./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: SetPermissionsComponent */

    /***/
    function srcAppModulesAmsRolesAndPermissionsSetPermissionsSetPermissionsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetPermissionsComponent", function () {
        return SetPermissionsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Screen */
      "./src/app/api/controllers/Screen.ts");

      var SetPermissionsComponent = /*#__PURE__*/function () {
        function SetPermissionsComponent(screenService) {
          _classCallCheck(this, SetPermissionsComponent);

          this.screenService = screenService;
          this.menuList = [];
        }

        _createClass(SetPermissionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getScreenList();
            this.actionList = [{
              name: 'add',
              functionId: 0,
              checked: false
            }, {
              name: 'edit',
              functionId: 0,
              checked: false
            }, {
              name: 'display',
              functionId: 0,
              checked: false
            }, {
              name: 'delete',
              functionId: 0,
              checked: false
            }];
          }
        }, {
          key: "getScreenList",
          value: function getScreenList() {
            var _this3 = this;

            var queryParamBase = {
              ApartmentId: parseInt(localStorage.getItem('apartmentId')),
              RoleId: parseInt(localStorage.getItem('roleId'))
            };
            this.screenService.getMenuFunctionByRoleIdMultiFilter(queryParamBase).subscribe(function (resp) {
              _this3.menuList = resp;

              if (_this3.menuList && _this3.menuList.length) {
                _this3.selectedMenuName = _this3.menuList[0].menuName;

                _this3.changeMenu('');
              }
            });
          }
        }, {
          key: "changeMenu",
          value: function changeMenu(event) {
            var _this4 = this;

            if (event) {
              this.selectedMenuName = event.option.value ? event.option.value.menuName : '';
            }

            if (this.selectedMenuName) {
              this.menuList.filter(function (key) {
                if (key.menuName == _this4.selectedMenuName) {
                  _this4.subMenuList = key.subMenuNames;
                  _this4.selectedSubMenuName = _this4.subMenuList.length ? _this4.subMenuList[0].subMenuName : '';

                  _this4.changeSubMenu('');
                }
              });
            }
          }
        }, {
          key: "changeSubMenu",
          value: function changeSubMenu(event) {
            var _this5 = this;

            if (event) {
              this.actions = event.option.value ? event.option.value.actions : {};
            } else {
              this.subMenuList.filter(function (key) {
                if (_this5.selectedSubMenuName == key.subMenuName) {
                  _this5.actions = key.actions;

                  _this5.mapActions();
                }
              });
            }
          }
        }, {
          key: "mapActions",
          value: function mapActions() {
            this.actionList[0].functionId = this.actions.add_FunctionId;
            this.actionList[1].functionId = this.actions.edit_FunctionId;
            this.actionList[2].functionId = this.actions.display_FunctionId;
            this.actionList[3].functionId = this.actions.delete_FunctionId;
            this.actionList[0].checked = this.actions.add;
            this.actionList[1].checked = this.actions.edit;
            this.actionList[2].checked = this.actions.display;
            this.actionList[3].checked = this.actions["delete"];
          }
        }, {
          key: "changeActions",
          value: function changeActions(event) {
            if (event.option.value) {
              var addFunctionParam = {
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
              var queryParamBase = {
                seclevelFunctionmap: addFunctionParam
              };
              this.screenService.addMenuSecLevelFunctionMapping(queryParamBase).subscribe(function (resp) {});
            }
          }
        }]);

        return SetPermissionsComponent;
      }();

      SetPermissionsComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]
        }];
      };

      SetPermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-permissions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./set-permissions.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./set-permissions.component.scss */
        "./src/app/modules/ams/roles-and-permissions/set-permissions/set-permissions.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]])], SetPermissionsComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-roles-and-permissions-roles-and-permissions-module-es5.js.map