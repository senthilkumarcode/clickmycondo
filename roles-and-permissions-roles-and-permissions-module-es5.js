function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-and-permissions-roles-and-permissions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/add-role/add-role.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/add-role/add-role.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsRolesAndPermissionsAddRoleAddRoleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/roles-permissions\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Roles List</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tCreate Roles\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Fill in the details</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n\n\t\t\t\t<form #createParkingSlotForm = \"ngForm\" name=\"addSlotForm\" novalidate>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"input-box\">\n\t\t\t                    <label>Roles Name</label>\n\t\t\t                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter value\" name=\"roleName\">\n\t                \t\t</div>\n                        </div>\n                        \n                        <div class=\"col-sm-6\">\n\t\t\t\t\t\t\t<div class=\"select-box\">\n\t\t\t                    <label>Description</label>\n\t\t\t                   <textarea name=\"description\" id=\"\" cols=\"10\" rows=\"3\"></textarea>\n\t                \t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t<ul class=\"list-inline float-right mt-4\">\n\t\t\t\t\t\t\t\t<li class=\"list-inline-item\">\n\t\t\t\t\t\t\t\t\t<button class=\"btn blue mr-2\">Submit</button>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form> \n\n\t\t\t<div class=\"message hidden\">\n\t\t\t\t<div class=\"icon-wrapper float-left\">\n\t\t\t\t\t<i-feather class=\"icon float-left\" name=\"check\" width=\"20\"></i-feather>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"float-left\" >Role Added successfully!</h5> \n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsRolesAndPermissionsRolesAndPermissionsListRolesAndPermissionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-aa-unit-to-unit-allocation-wrapper\">\n    <div class=\"card table-card clear mt-3\">\n        <div class=\"card-header\">\n            <div class=\"float-left\">\n                <h5>Roles And Permissions</h5>\n            </div>\n            <ul class=\"list-inline\">\n                <li class=\"list-inline-item search d-none d-md-inline-block\">\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n                </li>\n               \n    \t\t\t<li class=\"list-inline-item\" *ngIf=\"isEnableCreate\"  > \n                    <a class=\"btn lime-green mt_5\" href=\"javascript:void(0)\"\n                    routerLink=\"/ams/roles-permissions/add-roles-permissions\" \n                    routerLinkActive=\"active\"\n                    [routerLinkActiveOptions] = \"{exact:true}\">\n    \t\t\t\t\t<i-feather class=\"icon plus\" name=\"plus\"></i-feather>\n    \t\t\t\t\t<span>Create Roles</span>\n    \t\t\t\t</a>\n    \t\t\t</li>\n            </ul>\n        </div>\n\n        <div class=\"card-body p-0\">\n            <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\"\n                [filterable]=\"true\" [sortable]=\"true\" [source]=\"roleList\" [columns]=\"roleHeader\"\n                [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n            </jqxGrid>\n        </div>\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAmsRolesAndPermissionsSetPermissionsSetPermissionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parking-create-parking-slot-wrapper\">\n\t<div class=\"relative-card float-right\">\n\t\t<div class=\"relative-icon\">\n\t\t\t<a href=\"javascript:void(0)\"\n\t\t\t\trouterLink=\"/ams/roles-permissions\" \n\t\t\t\trouterLinkActive=\"active\"\n\t\t\t\t[routerLinkActiveOptions] = \"{exact:true}\">\n\t\t\t\t<div class=\"icon-wrapper\">\n\t\t\t\t\t<img class=\"svg white\" src=\"assets/images/car-icon.svg\" width=\"17\">\n\t\t\t\t</div>\n\t\t\t\t<span class=\"d-inline-block\">View Roles List</span>\n\t\t\t</a>\n\t\t</div>\n\t</div>\n\t<div class=\"card clear mb-30\">\n\t\t\n\t\t<div class=\"card-header\">\n\t\t\t<div class=\"float-left\">\n    \t\t\t<h5>\n    \t\t\t\tSet Permissions\n    \t\t\t</h5>\n    \t\t\t<p class=\"d-none d-md-inline-block\">Admin (...)</p>\n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n    \t\t<div class=\"float-right\">\n    \t\t\t \n    \t\t</div>\n\t\t</div>\n\t\t<div class=\"card-body\"> \n            <div class=\"row\">\n                <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                    <mat-selection-list #shoes [multiple]=\"false\">\n                        <mat-list-option *ngFor=\"let item of ['Parking Management','Profile Setting','Inventory Management','Dashboard','Asset Management']\">\n                            <div class=\"form-check recur-check float-left\">\n                                <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\" checked >\n                                <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                            </div>\n                        </mat-list-option>\n                      </mat-selection-list>\n                </div>\n                <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                    <mat-selection-list #shoes [multiple]=\"false\">\n                        <mat-list-option *ngFor=\"let item of ['Setup','Manage Booking','Booking History']\">\n                            <div class=\"form-check recur-check float-left\">\n                                <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\">\n                                <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                            </div>\n                        </mat-list-option>\n                      </mat-selection-list>\n                </div>\n                <div class=\"col-md-4 col-lg-4 col-sm-6 col-xs-6\">\n                    <mat-list role=\"list\">\n                        <mat-list-item role=\"listitem\" *ngFor=\"let item of ['View','Create','Edit','Delete']\"> \n                              <div class=\"form-check recur-check float-left\">\n                            <input type=\"checkbox\" class=\"form-check-input\" id=\"{{item}}\" name=\"{{item}}\">\n                            <label class=\"form-check-label tiny\" for=\"{{item}}\">{{item}}</label>\n                        </div>\n                        <!-- <mat-divider></mat-divider> -->\n                    </mat-list-item>\n                      </mat-list>\n                </div>\n            </div>\n\t\t</div>\n\t</div>\n</div>";
    /***/
  },

  /***/
  "./src/app/ams/roles-and-permissions/add-role/add-role.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/add-role/add-role.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsRolesAndPermissionsAddRoleAddRoleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9yb2xlcy1hbmQtcGVybWlzc2lvbnMvYWRkLXJvbGUvYWRkLXJvbGUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/roles-and-permissions/add-role/add-role.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/add-role/add-role.component.ts ***!
    \**************************************************************************/

  /*! exports provided: AddRoleComponent */

  /***/
  function srcAppAmsRolesAndPermissionsAddRoleAddRoleComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var AddRoleComponent =
    /*#__PURE__*/
    function () {
      function AddRoleComponent() {
        _classCallCheck(this, AddRoleComponent);
      }

      _createClass(AddRoleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddRoleComponent;
    }();

    AddRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-role',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-role.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/add-role/add-role.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./add-role.component.scss */
      "./src/app/ams/roles-and-permissions/add-role/add-role.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AddRoleComponent);
    /***/
  },

  /***/
  "./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsRolesAndPermissionsRolesAndPermissionsListRolesAndPermissionsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9yb2xlcy1hbmQtcGVybWlzc2lvbnMvcm9sZXMtYW5kLXBlcm1pc3Npb25zLWxpc3Qvcm9sZXMtYW5kLXBlcm1pc3Npb25zLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: RolesAndPermissionsListComponent */

  /***/
  function srcAppAmsRolesAndPermissionsRolesAndPermissionsListRolesAndPermissionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var RolesAndPermissionsListComponent =
    /*#__PURE__*/
    function () {
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
              return '<div class="simple-actions"><a href="javascript:void(0)" onClick="navigateToPermission()" ><button  mat-button class="btn blue">Set Permissions</button></a></div>';
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

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datagrid', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_2__["jqxGridComponent"])], RolesAndPermissionsListComponent.prototype, "datagrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:navigateToPermission'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)], RolesAndPermissionsListComponent.prototype, "navigateToPermission", null);
    RolesAndPermissionsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-roles-and-permissions-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./roles-and-permissions-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./roles-and-permissions-list.component.scss */
      "./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], RolesAndPermissionsListComponent);

    function navigateToPermission() {
      var event = new CustomEvent('navigateToPermission');
      window.dispatchEvent(event);
    }

    window.navigateToPermission = navigateToPermission;
    /***/
  },

  /***/
  "./src/app/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts ***!
    \************************************************************************************/

  /*! exports provided: RolesAndPermissionsRouting */

  /***/
  function srcAppAmsRolesAndPermissionsRolesAndPermissionsRoutingModiuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
    /* harmony import */


    var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-role/add-role.component */
    "./src/app/ams/roles-and-permissions/add-role/add-role.component.ts");
    /* harmony import */


    var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./set-permissions/set-permissions.component */
    "./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");

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
  "./src/app/ams/roles-and-permissions/roles-and-permissions.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/roles-and-permissions.module.ts ***!
    \***************************************************************************/

  /*! exports provided: RolesAndPermissionsModule */

  /***/
  function srcAppAmsRolesAndPermissionsRolesAndPermissionsModuleTs(module, __webpack_exports__, __webpack_require__) {
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
    "./src/app/ams/roles-and-permissions/roles-and-permissions-list/roles-and-permissions-list.component.ts");
    /* harmony import */


    var _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-role/add-role.component */
    "./src/app/ams/roles-and-permissions/add-role/add-role.component.ts");
    /* harmony import */


    var _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./set-permissions/set-permissions.component */
    "./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.ts");
    /* harmony import */


    var _roles_and_permissions_routing_modiule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./roles-and-permissions-routing.modiule */
    "./src/app/ams/roles-and-permissions/roles-and-permissions-routing.modiule.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");

    var RolesAndPermissionsModule = function RolesAndPermissionsModule() {
      _classCallCheck(this, RolesAndPermissionsModule);
    };

    RolesAndPermissionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_roles_and_permissions_list_roles_and_permissions_list_component__WEBPACK_IMPORTED_MODULE_3__["RolesAndPermissionsListComponent"], _add_role_add_role_component__WEBPACK_IMPORTED_MODULE_4__["AddRoleComponent"], _set_permissions_set_permissions_component__WEBPACK_IMPORTED_MODULE_5__["SetPermissionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _roles_and_permissions_routing_modiule__WEBPACK_IMPORTED_MODULE_6__["RolesAndPermissionsRouting"]]
    })], RolesAndPermissionsModule);
    /***/
  },

  /***/
  "./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAmsRolesAndPermissionsSetPermissionsSetPermissionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ftcy9yb2xlcy1hbmQtcGVybWlzc2lvbnMvc2V0LXBlcm1pc3Npb25zL3NldC1wZXJtaXNzaW9ucy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SetPermissionsComponent */

  /***/
  function srcAppAmsRolesAndPermissionsSetPermissionsSetPermissionsComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var SetPermissionsComponent =
    /*#__PURE__*/
    function () {
      function SetPermissionsComponent() {
        _classCallCheck(this, SetPermissionsComponent);
      }

      _createClass(SetPermissionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SetPermissionsComponent;
    }();

    SetPermissionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-set-permissions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./set-permissions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./set-permissions.component.scss */
      "./src/app/ams/roles-and-permissions/set-permissions/set-permissions.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SetPermissionsComponent);
    /***/
  }
}]);
//# sourceMappingURL=roles-and-permissions-roles-and-permissions-module-es5.js.map