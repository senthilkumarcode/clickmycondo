(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-documents-components-user-lists-user-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-lists.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-lists.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsDocumentsComponentsUserListsUserListsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.html":
    /*!**************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.html ***!
      \**************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsDocumentsComponentsUserListsUserTableListUserTableListComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-table-list-wrapper content-layout right-sidebar-fullheight-basic-inner-scroll\">\n    <mat-drawer-container (backdropClick)=\"onBackdropClicked()\">\n        <!-- Drawer -->\n        <mat-drawer [mode]=\"drawerMode\" [opened]=\"false\" [position]=\"'end'\" [disableClose]=\"true\" #matDrawer>\n            <router-outlet></router-outlet>\n        </mat-drawer>\n\n        <mat-drawer-content>\n            <div class=\"main\">\n                <!-- Loader -->\n                <app-loader *ngIf=\"!isUserDataLoaded\"></app-loader>\n                <!-- Table -->\n                <condo-card *ngIf=\"isUserDataLoaded\">\n                    <div CondoCardHeader>\n                        <div class=\"d-flex\">\n                            <div>\n                                <h4>User Document - Upload, Download and view the document</h4>\n                                <p class=\"text-secondary\">{{totalItems}} results</p>\n                            </div>\n                            <div class=\"ml-auto d-none d-md-block mr-3\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" [(ngModel)]=\"userSearch\" (ngModelChange)=\"searchData()\">\n                            </div>\n                            <div class=\"mr-3\">\n                                <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                            </div>\n                        </div>\n                    </div>\n                    <div CondoCardBody>\n                        <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\" [pageable]=\"true\" \n                            [filterable]=\"true\" [sortable]=\"true\" [source]=\"userListData\" [columns]=\"columnData\" [columnsresize]=\"true\"\n                            [enablehover]=\"false\" #datagrid>\n                        </jqxGrid> \n                    </div>\n                </condo-card>\n            </div>\n        </mat-drawer-content>\n    </mat-drawer-container>\n</div>\n    ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.html":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsDocumentsComponentsUserListsUserUploadDrawerUserUploadDrawerComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"user-upload-drawer-wrapper\">\n    <!-- <app-loader *ngIf=\"!isDataLoaded\"></app-loader> -->\n    <ng-container>\n        <div class=\"title\">\n            <h4> Upload </h4>\n            <div class=\"ml-auto\">\n                <button mat-icon-button (click)=\"goBack()\">\n                    <mat-icon [svgIcon]=\"'close'\"></mat-icon>\n                </button>\n            </div>\n        </div>\n        <p>Drawer Opened</p>\n    </ng-container>\n</div>";
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-list-resolver.service.ts":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-list-resolver.service.ts ***!
      \*******************************************************************************************/

    /*! exports provided: UserListResolverService */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserListResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListResolverService", function () {
        return UserListResolverService;
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


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");

      var UserListResolverService = /*#__PURE__*/function () {
        function UserListResolverService(router, sharedService) {
          _classCallCheck(this, UserListResolverService);

          this.router = router;
          this.sharedService = sharedService;
        }

        _createClass(UserListResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var id = this.sharedService.getMatDrawerId();

            if (id == null) {
              var parentUrl = state.url.split('/').slice(0, -2).join('/'); // Navigate to parent url

              this.router.navigateByUrl(parentUrl);
            }

            return;
          }
        }]);

        return UserListResolverService;
      }();

      UserListResolverService.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      };

      UserListResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])], UserListResolverService);
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-list-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-list-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: UserListRoutingModule */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListRoutingModule", function () {
        return UserListRoutingModule;
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


      var _user_lists_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-lists.component */
      "./src/app/modules/ams/documents/components/user-lists/user-lists.component.ts");
      /* harmony import */


      var _user_table_list_user_table_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-table-list/user-table-list.component */
      "./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.ts");
      /* harmony import */


      var _user_upload_drawer_user_upload_drawer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-upload-drawer/user-upload-drawer.component */
      "./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.ts");
      /* harmony import */


      var _user_list_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-list-resolver.service */
      "./src/app/modules/ams/documents/components/user-lists/user-list-resolver.service.ts");

      var routes = [{
        path: '',
        component: _user_lists_component__WEBPACK_IMPORTED_MODULE_3__["UserListsComponent"],
        children: [{
          path: '',
          redirectTo: 'list',
          pathMatch: 'full'
        }, {
          path: 'list',
          component: _user_table_list_user_table_list_component__WEBPACK_IMPORTED_MODULE_4__["UserTableListComponent"],
          children: [{
            path: ':type/:id',
            component: _user_upload_drawer_user_upload_drawer_component__WEBPACK_IMPORTED_MODULE_5__["UserUploadDrawerComponent"],
            pathMatch: 'full',
            resolve: {
              data: _user_list_resolver_service__WEBPACK_IMPORTED_MODULE_6__["UserListResolverService"]
            }
          }]
        }]
      }];

      var UserListRoutingModule = function UserListRoutingModule() {
        _classCallCheck(this, UserListRoutingModule);
      };

      UserListRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], UserListRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-list.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-list.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: UserListModule */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListModule", function () {
        return UserListModule;
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


      var _user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-list-routing.module */
      "./src/app/modules/ams/documents/components/user-lists/user-list-routing.module.ts");
      /* harmony import */


      var _user_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./user-lists.component */
      "./src/app/modules/ams/documents/components/user-lists/user-lists.component.ts");
      /* harmony import */


      var _user_table_list_user_table_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-table-list/user-table-list.component */
      "./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.ts");
      /* harmony import */


      var _user_upload_drawer_user_upload_drawer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./user-upload-drawer/user-upload-drawer.component */
      "./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.ts");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");

      var UserListModule = function UserListModule() {
        _classCallCheck(this, UserListModule);
      };

      UserListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_lists_component__WEBPACK_IMPORTED_MODULE_4__["UserListsComponent"], _user_table_list_user_table_list_component__WEBPACK_IMPORTED_MODULE_5__["UserTableListComponent"], _user_upload_drawer_user_upload_drawer_component__WEBPACK_IMPORTED_MODULE_6__["UserUploadDrawerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_8__["CondoCardModule"], _user_list_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserListRoutingModule"]]
      })], UserListModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-lists.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-lists.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserListsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2RvY3VtZW50cy9jb21wb25lbnRzL3VzZXItbGlzdHMvdXNlci1saXN0cy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-lists.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-lists.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: UserListsComponent */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserListsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserListsComponent", function () {
        return UserListsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var UserListsComponent = /*#__PURE__*/function () {
        function UserListsComponent() {
          _classCallCheck(this, UserListsComponent);
        }

        _createClass(UserListsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return UserListsComponent;
      }();

      UserListsComponent.ctorParameters = function () {
        return [];
      };

      UserListsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-lists',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-lists.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-lists.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-lists.component.scss */
        "./src/app/modules/ams/documents/components/user-lists/user-lists.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], UserListsComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.scss":
    /*!************************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.scss ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserTableListUserTableListComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "app-user-table-list {\n  display: flex;\n  flex: 1 1 auto;\n}\napp-user-table-list .mat-drawer-container .mat-drawer {\n  max-width: 480px !important;\n  width: 480px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvdXNlci1saXN0cy91c2VyLXRhYmxlLWxpc3QvdXNlci10YWJsZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUFDSjtBQUFJO0VBQ0ksMkJBQUE7RUFDQSx1QkFBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvdXNlci1saXN0cy91c2VyLXRhYmxlLWxpc3QvdXNlci10YWJsZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXVzZXItdGFibGUtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICAubWF0LWRyYXdlci1jb250YWluZXIgLm1hdC1kcmF3ZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA0ODBweCAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.ts":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: UserTableListComponent */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserTableListUserTableListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserTableListComponent", function () {
        return UserTableListComponent;
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


      var src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/api/controllers/Document */
      "./src/app/api/controllers/Document.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_jqwidgets_scripts_jqwidgets_ts_angular_jqxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid */
      "./src/app/shared/jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");

      var UserTableListComponent = /*#__PURE__*/function () {
        function UserTableListComponent(documentService, sessionService, changeDetectorRef, router, activeRouter, sharedService) {
          _classCallCheck(this, UserTableListComponent);

          this.documentService = documentService;
          this.sessionService = sessionService;
          this.changeDetectorRef = changeDetectorRef;
          this.router = router;
          this.activeRouter = activeRouter;
          this.sharedService = sharedService;
          this.isUserDataLoaded = false;
        }

        _createClass(UserTableListComponent, [{
          key: "onBackdropClicked",
          value: function onBackdropClicked() {
            // Get the current activated route
            var route = this.activeRouter;

            while (route.firstChild) {
              route = route.firstChild;
            } // Go to the parent route


            this.router.navigate(["./list"], {
              relativeTo: this.activeRouter.parent
            });
            this.matDrawer.close(); // Mark for check

            this.changeDetectorRef.markForCheck();
          }
        }, {
          key: "uploadDocument",
          value: function uploadDocument(detail) {
            var dataRecord = this.datagrid.getrowdata(detail.rowId);
            var route = this.activeRouter;

            while (route.firstChild) {
              route = route.firstChild;
            }

            this.sharedService.setMatDrawerId(dataRecord.userID);
            this.router.navigate([this.router.url + '/', 'edit', dataRecord.userID], {
              relativeTo: route
            });
            this.changeDetectorRef.markForCheck();
          }
        }, {
          key: "searchData",
          value: function searchData() {
            var _this = this;

            if (this.userSearch != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = this.userSearch;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.columnData.forEach(function (item) {
                if (item.datafield != 'Actions') {
                  _this.datagrid.addfilter(item.datafield, filtergroup, true);
                }
              });
              this.datagrid.applyfilters();
            } else {
              this.datagrid.clearfilters();
            }
          }
        }, {
          key: "getPrintParams",
          value: function getPrintParams(event) {
            this.datagrid.exportdata(event, 'User Document');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            var params = {
              ApartmentId: this.sessionService.apartmentId
            };
            this.documentService.getAllDocCountByApartmentId(params).subscribe(function (res) {
              _this2.isUserDataLoaded = true;

              if (res.length > 0) {
                _this2.totalItems = res.length;
                var userData = {
                  localdata: res.reverse(),
                  datatype: "array"
                };
                _this2.userListData = new jqx.dataAdapter(userData);
              }
            });

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.columnData = [{
              text: 'Name',
              datafield: 'firstName',
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'Tower No',
              datafield: 'apartmentBlockNumber',
              cellsrenderer: cellsrenderer,
              width: 300,
              renderer: columnrenderer
            }, {
              text: 'Unit NO',
              datafield: 'apartmentBlockUnitNumber',
              cellsrenderer: cellsrenderer,
              width: 300,
              renderer: columnrenderer
            }, {
              text: 'Documents',
              datafield: 'documents',
              cellsrenderer: cellsrenderer,
              width: 200,
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions">' + '<a href="javascript:void(0)" onClick="uploadDocDrawer(' + row + ')"><i class="fa fa-eye icon edit" aria-hidden="true"></i></a>' + '</div>';
              },
              width: 100,
              renderer: columnrenderer
            }];
          }
        }]);

        return UserTableListComponent;
      }();

      UserTableListComponent.ctorParameters = function () {
        return [{
          type: src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]
        }];
      };

      UserTableListComponent.propDecorators = {
        matDrawer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['matDrawer', {
            "static": true
          }]
        }],
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        uploadDocument: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onUploadDocDrawer', ['$event.detail']]
        }]
      };
      UserTableListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-table-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-table-list.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-table-list.component.scss */
        "./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_api_controllers_Document__WEBPACK_IMPORTED_MODULE_2__["DocumentService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])], UserTableListComponent);

      function uploadDocDrawer(row) {
        var event = new CustomEvent('onUploadDocDrawer', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      }

      window.uploadDocDrawer = uploadDocDrawer;
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.scss":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.scss ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserUploadDrawerUserUploadDrawerComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".user-upload-drawer-wrapper {\n  padding: 30px 25px 30px 25px;\n}\n.user-upload-drawer-wrapper .title {\n  display: flex;\n  margin: 0 0 30px 0;\n}\n.user-upload-drawer-wrapper .title h4 {\n  padding: 10px 0 0 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hbXMvZG9jdW1lbnRzL2NvbXBvbmVudHMvdXNlci1saXN0cy91c2VyLXVwbG9hZC1kcmF3ZXIvdXNlci11cGxvYWQtZHJhd2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNJLDhCQUFBO0FBR1oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2Ftcy9kb2N1bWVudHMvY29tcG9uZW50cy91c2VyLWxpc3RzL3VzZXItdXBsb2FkLWRyYXdlci91c2VyLXVwbG9hZC1kcmF3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci11cGxvYWQtZHJhd2VyLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDMwcHggMjVweCAzMHB4IDI1cHg7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICAgICAgICBoNCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMCAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.ts":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: UserUploadDrawerComponent */

    /***/
    function srcAppModulesAmsDocumentsComponentsUserListsUserUploadDrawerUserUploadDrawerComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserUploadDrawerComponent", function () {
        return UserUploadDrawerComponent;
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


      var _user_table_list_user_table_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../user-table-list/user-table-list.component */
      "./src/app/modules/ams/documents/components/user-lists/user-table-list/user-table-list.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");

      var UserUploadDrawerComponent = /*#__PURE__*/function () {
        function UserUploadDrawerComponent(sharedService, activeRouter, sessionService, changeDetectorRef, router, userTableListComponent) {
          _classCallCheck(this, UserUploadDrawerComponent);

          this.sharedService = sharedService;
          this.activeRouter = activeRouter;
          this.sessionService = sessionService;
          this.changeDetectorRef = changeDetectorRef;
          this.router = router;
          this.userTableListComponent = userTableListComponent;
        }

        _createClass(UserUploadDrawerComponent, [{
          key: "goBack",
          value: function goBack() {
            this.userTableListComponent.matDrawer.close();
            this.router.navigate(['.'], {
              relativeTo: this.activeRouter.parent
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            //Open the drawer
            this.apiUnsubcribe = this.sharedService.matdraweridcast.subscribe(function (id) {
              if (id != null && id == _this3.activeRouter.params['value'].id) {
                _this3.userTableListComponent.matDrawer.open();
              } //Mark for check


              _this3.changeDetectorRef.markForCheck();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.apiUnsubcribe.unsubscribe();
          }
        }]);

        return UserUploadDrawerComponent;
      }();

      UserUploadDrawerComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _user_table_list_user_table_list_component__WEBPACK_IMPORTED_MODULE_2__["UserTableListComponent"]
        }];
      };

      UserUploadDrawerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-upload-drawer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./user-upload-drawer.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./user-upload-drawer.component.scss */
        "./src/app/modules/ams/documents/components/user-lists/user-upload-drawer/user-upload-drawer.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _user_table_list_user_table_list_component__WEBPACK_IMPORTED_MODULE_2__["UserTableListComponent"]])], UserUploadDrawerComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-documents-components-user-lists-user-list-module-es5.js.map