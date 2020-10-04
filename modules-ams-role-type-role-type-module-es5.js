(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-ams-role-type-role-type-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/role-type/components/add-role/add-role.component.html":
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/role-type/components/add-role/add-role.component.html ***!
      \*************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsRoleTypeComponentsAddRoleAddRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"main\">\n\t\t<form #createParkingSlotForm=\"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t<condo-card>\n\t\t\t\t<div CondoCardHeader>\n\t\t\t\t\t<div class=\"d-flex\">\n\t\t\t\t\t\t\t<h4>Create Roles</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div CondoCardBody>\n\t\t\t\t\t<div class=\"p-5\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t<label>Roles Type</label>\n\t\t\t\t\t\t\t\t\t<select name=\"roleTypeId\" [(ngModel)]=\"roleTypeId\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let item of allRoles\" value=\"{{item.value}}\">{{item?.name}}\n\t\t\t\t\t\t\t\t\t\t</option>\n\t\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t\t\t\t\t\t\t<label>Roles Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"roleName\" [(ngModel)]=\"roleName\">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<textarea name=\"description\" [(ngModel)]=\"description\" cols=\"10\"\n\t\t\t\t\t\t\t\t\t\trows=\"3\"></textarea>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12 d-flex justify-content-end\">\n\t\t\t\t\t\t\t\t<button class=\"mr-3\" mat-flat-button\n\t\t\t\t\t\t\t\t\trouterLink=\"/ams/roles-permissions/role-permissions-list\" routerLinkActive=\"active\"\n\t\t\t\t\t\t\t\t\t[routerLinkActiveOptions]=\"{exact:true}\">Cancel</button>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" *ngIf=\"isCreate\"\n\t\t\t\t\t\t\t\t\t(click)=\"addRole()\">Submit</button>\n\t\t\t\t\t\t\t\t<button mat-flat-button [color]=\"'primary'\" *ngIf=\"!isCreate\"\n\t\t\t\t\t\t\t\t\t(click)=\"updateRole()\">Update</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</condo-card>\n\t\t</form>\n\t</div>\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/role-type/components/add-role/add-role.component.scss":
    /*!***********************************************************************************!*\
      !*** ./src/app/modules/ams/role-type/components/add-role/add-role.component.scss ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsRoleTypeComponentsAddRoleAddRoleComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3JvbGUtdHlwZS9jb21wb25lbnRzL2FkZC1yb2xlL2FkZC1yb2xlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/role-type/components/add-role/add-role.component.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/ams/role-type/components/add-role/add-role.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: AddRoleComponent */

    /***/
    function srcAppModulesAmsRoleTypeComponentsAddRoleAddRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");

      var AddRoleComponent = /*#__PURE__*/function () {
        function AddRoleComponent(userService, router, activatedRoute, sessionService, screenService) {
          _classCallCheck(this, AddRoleComponent);

          this.userService = userService;
          this.router = router;
          this.activatedRoute = activatedRoute;
          this.sessionService = sessionService;
          this.screenService = screenService;
          this.allRoles = [];
          this.isCreate = true;
        }

        _createClass(AddRoleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.activatedRoute.params['value'].id != undefined) {
              this.menuRoleSecLevelId = this.activatedRoute.params['value'].id;
              this.isCreate = false;
              this.getRole();
            }

            this.getAllRoles();
          }
        }, {
          key: "getRole",
          value: function getRole() {
            var _this = this;

            var queryParamBase = {
              apartmentId: this.sessionService.apartmentId,
              menuRoleSecLevelId: this.menuRoleSecLevelId
            };
            this.screenService.getMenuRoleSecLevelbyRoleSecLevelId(queryParamBase).subscribe(function (resp) {
              _this.menuRole = resp[0];
              _this.roleTypeId = _this.menuRole.roleId;
              _this.roleName = _this.menuRole.roleName;
            });
          }
        }, {
          key: "getAllRoles",
          value: function getAllRoles() {
            var _this2 = this;

            this.userService.getAllRoleTypes().subscribe(function (resp) {
              _this2.allRoles = resp;

              if (_this2.allRoles && _this2.allRoles.length) {
                _this2.allRoles.filter(function (key) {
                  if (key.value == 2 || key.value == 4 || key.value == 5) {
                    _this2.allRoles.splice(_this2.allRoles.indexOf(key), 1);
                  }
                });
              }
            });
          }
        }, {
          key: "addRole",
          value: function addRole() {
            var _this3 = this;

            var addMenuLevelParam = {
              "menuSecLevelId": 0,
              "apartmentId": this.sessionService.apartmentId,
              "name": this.roleName,
              "isActive": true,
              "insertedBy": this.sessionService.userId,
              "insertedOn": new Date().toISOString(),
              "updatedBy": this.sessionService.userId,
              "updatedOn": "2020-08-09T06:22:21.539Z"
            };
            var secLevelParam = {
              seclevel: addMenuLevelParam
            };
            this.screenService.addMenuSecLevel(secLevelParam).subscribe(function (resp) {
              if (resp && resp.message) {
                var addMenuRoleSecLevel = {
                  "menuRoleSecLevelId": 0,
                  "apartmentId": _this3.sessionService.apartmentId,
                  "roleId": parseInt(_this3.roleTypeId),
                  "secLevelId": resp.message,
                  "isActive": true,
                  "insertedBy": _this3.sessionService.userId,
                  "insertedOn": new Date().toISOString(),
                  "updatedBy": _this3.sessionService.userId,
                  "updatedOn": "2020-08-09T06:22:21.539Z"
                };
                var roleSecLevelParam = {
                  roleseclevel: addMenuRoleSecLevel
                };

                _this3.screenService.addMenuRoleSecLevel(roleSecLevelParam).subscribe(function (resp) {
                  _this3.router.navigate(['/ams/roles-permissions/role-permissions-list']);
                });
              }
            });
          }
        }, {
          key: "updateRole",
          value: function updateRole() {
            var _this4 = this;

            var updataParam = {
              "menuSecLevelId": this.menuRole.menuRoleSecLevelId,
              "apartmentId": this.sessionService.apartmentId,
              "name": this.roleName,
              "isActive": true,
              "insertedBy": 0,
              "insertedOn": new Date().toISOString(),
              "updatedBy": this.sessionService.userId,
              "updatedOn": new Date().toISOString()
            };
            var updateRoleParam = {
              menuSecLevel: updataParam
            };
            this.screenService.updateMenuSecLevel(updateRoleParam).subscribe(function (resp) {
              _this4.router.navigate(['/ams/roles-permissions/role-permissions-list']);
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
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }, {
          type: src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]
        }];
      };

      AddRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-role',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-role.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/role-type/components/add-role/add-role.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-role.component.scss */
        "./src/app/modules/ams/role-type/components/add-role/add-role.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_User__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], src_app_api_controllers_Screen__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]])], AddRoleComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/role-type/role-type-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/ams/role-type/role-type-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RoleTypeRoutingModule */

    /***/
    function srcAppModulesAmsRoleTypeRoleTypeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleTypeRoutingModule", function () {
        return RoleTypeRoutingModule;
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


      var _components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/add-role/add-role.component */
      "./src/app/modules/ams/role-type/components/add-role/add-role.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'roles-type-list',
        pathMatch: 'full'
      }, {
        path: 'add-roles-permissions',
        component: _components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__["AddRoleComponent"]
      }, {
        path: 'edit-roles-permissions/:id',
        component: _components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__["AddRoleComponent"]
      }, {
        path: '**',
        redirectTo: 'roles-type-list',
        pathMatch: 'full'
      }];

      var RoleTypeRoutingModule = function RoleTypeRoutingModule() {
        _classCallCheck(this, RoleTypeRoutingModule);
      };

      RoleTypeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RoleTypeRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/role-type/role-type.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/modules/ams/role-type/role-type.module.ts ***!
      \***********************************************************/

    /*! exports provided: RoleTypeModule */

    /***/
    function srcAppModulesAmsRoleTypeRoleTypeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoleTypeModule", function () {
        return RoleTypeModule;
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


      var _components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/add-role/add-role.component */
      "./src/app/modules/ams/role-type/components/add-role/add-role.component.ts");
      /* harmony import */


      var _role_type_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./role-type-routing.module */
      "./src/app/modules/ams/role-type/role-type-routing.module.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");

      var RoleTypeModule = function RoleTypeModule() {
        _classCallCheck(this, RoleTypeModule);
      };

      RoleTypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__["AddRoleComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _role_type_routing_module__WEBPACK_IMPORTED_MODULE_4__["RoleTypeRoutingModule"]]
      })], RoleTypeModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=modules-ams-role-type-role-type-module-es5.js.map