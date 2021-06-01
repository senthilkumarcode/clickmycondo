(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-violation-violation-setup-violation-setup-privilege-violation-setup-privilege-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.html":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsViolationViolationSetupViolationSetupPrivilegeViolationSetupPrivilegeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"violation-setup-privilege\">\n\n    <app-loader *ngIf=\"!isViolationCategoryLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isViolationCategoryLoaded\">\n\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>Stop Privilege</h4>\n                        <p>{{totalItems}} results</p>\n                    </div>\n                    <div class=\"ml-auto mr-3\">\n                        <app-table-search [input]=\"violationSearch\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3\">\n                        <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                    </div>\n                    <div>\n                        <button mat-flat-button [color]=\"'primary'\" (click)=\"addStopPrivilege()\">\n                            <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add Stop Privilege\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\"\n                        [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [source]=\"stopPrivilageList\"\n                        [columns]=\"stopPrivilageHeader\" [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n                </jqxGrid>\n            </div>\n        </condo-card>\n\n    </ng-container>\n\n</div>\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege-routing.module.ts":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege-routing.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: ViolationSetupPrivilegeRoutingModule */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupPrivilegeViolationSetupPrivilegeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViolationSetupPrivilegeRoutingModule", function () {
        return ViolationSetupPrivilegeRoutingModule;
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


      var _violation_setup_privilege_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./violation-setup-privilege.component */
      "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.ts");

      var routes = [{
        path: '',
        component: _violation_setup_privilege_component__WEBPACK_IMPORTED_MODULE_3__["ViolationSetupPrivilegeComponent"]
      }];

      var ViolationSetupPrivilegeRoutingModule = function ViolationSetupPrivilegeRoutingModule() {
        _classCallCheck(this, ViolationSetupPrivilegeRoutingModule);
      };

      ViolationSetupPrivilegeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViolationSetupPrivilegeRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.scss":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.scss ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupPrivilegeViolationSetupPrivilegeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpb2xhdGlvbi92aW9sYXRpb24tc2V0dXAvdmlvbGF0aW9uLXNldHVwLXByaXZpbGVnZS92aW9sYXRpb24tc2V0dXAtcHJpdmlsZWdlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.ts":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: ViolationSetupPrivilegeComponent */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupPrivilegeViolationSetupPrivilegeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViolationSetupPrivilegeComponent", function () {
        return ViolationSetupPrivilegeComponent;
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


      var src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/Violation */
      "./src/app/api/controllers/Violation.ts");
      /* harmony import */


      var src_app_modules_ams_violation_violation_setup_violation_setup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ams/violation/violation-setup/violation-setup.service */
      "./src/app/modules/ams/violation/violation-setup/violation-setup.service.ts");
      /* harmony import */


      var src_app_modules_collective_add_lookup_add_lookup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/collective/add-lookup/add-lookup.service */
      "./src/app/modules/collective/add-lookup/add-lookup.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");

      var ViolationSetupPrivilegeComponent = /*#__PURE__*/function () {
        function ViolationSetupPrivilegeComponent(injector, violationSetupService, addLookupService, violationService, lookupService, sessionService, sharedService) {
          _classCallCheck(this, ViolationSetupPrivilegeComponent);

          this.injector = injector;
          this.violationSetupService = violationSetupService;
          this.addLookupService = addLookupService;
          this.violationService = violationService;
          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.sharedService = sharedService;
          this.isViolationCategoryLoaded = false;
          this.violationSearch = '';
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
        }

        _createClass(ViolationSetupPrivilegeComponent, [{
          key: "onGlSearchFilter",
          value: function onGlSearchFilter(event) {
            var _this = this;

            if (event != "") {
              var filtergroup = new jqx.filter();
              var filter_or_operator = 1;
              var filtervalue = event;
              var filtercondition = 'contains';
              var filterData = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
              filtergroup.operator = 'or';
              filtergroup.addfilter(filter_or_operator, filterData);
              this.datagrid.showfiltercolumnbackground(false);
              this.stopPrivilageHeader.forEach(function (item) {
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
            this.datagrid.exportdata(event, 'Violation Category', true, null, true, 'https://www.jqwidgets.com/export_server/dataexport.php');
          }
        }, {
          key: "addStopPrivilege",
          value: function addStopPrivilege() {
            var id = this.sharedService.guid();
            this.violationSetupService.setViolationSetupMatDrawer({
              id: id,
              data: null,
              category: 'stop-privilege',
              isedit: false
            });
          }
        }, {
          key: "editStopPrivilege",
          value: function editStopPrivilege(detail) {
            var data = this.datagrid.getrowdata(detail.rowId);
            this.violationSetupService.setViolationSetupMatDrawer({
              id: data.lookupValueId,
              data: data,
              category: 'stop-privilege',
              isedit: true
            });
          }
        }, {
          key: "deleteViolation",
          value: function deleteViolation(detail) {
            this.modalService.showConfirmModal(detail.rowId);
          }
        }, {
          key: "getViolationPrivilege",
          value: function getViolationPrivilege() {
            var _this2 = this;

            this.isViolationCategoryLoaded = false;
            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.violationService.getViolationPrivilege(params).subscribe(function (res) {
              if (res.length > 0) {
                var violationPrivilageSourceData = {
                  localdata: res.reverse(),
                  datatype: "array"
                };
                _this2.totalItems = violationPrivilageSourceData.localdata.length;
                _this2.stopPrivilageList = new jqx.dataAdapter(violationPrivilageSourceData);
              }

              _this2.isViolationCategoryLoaded = true;
            }, function (error) {
              _this2.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.getViolationPrivilege();

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.stopPrivilageHeader = [{
              text: 'id',
              datafield: 'id',
              width: 100,
              pinned: true,
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'stop privilage name',
              datafield: 'name',
              cellsrenderer: cellsrenderer,
              minwidth: 80,
              renderer: columnrenderer
            }, {
              text: 'stop description',
              datafield: 'description',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Priod of stop privilage',
              datafield: 'stopPriveldgeDays',
              cellsrenderer: cellsrenderer,
              minwidth: 170,
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 120,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"> <a href="javascript:void(0)" class="mr-2" onClick="editCategory(' + row + ')"><i class="icon fa fa-pencil" aria-hidden="true"></i> </a> <a href="javascript:void(0)" onClick="showConfirmDeleteEvent(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i> </a></div>';
              },
              renderer: columnrenderer
            }];
            this.apiSubscibe = this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
              if (id != null) {
                var dataRecord = _this3.datagrid.getrowdata(id);

                var params = {
                  lookupValueId: dataRecord.lookupValueId,
                  updateUserId: _this3.sessionService.userId
                };

                _this3.lookupService.deleteLookupvalue(params).subscribe(function (res) {
                  _this3.sharedService.setUnitListDeleteIndex(null);

                  if (res.message) {
                    _this3.datagrid.deleterow(id);

                    _this3.datagrid.refresh();

                    _this3.sharedService.openSnackBar(res.message, 'success');
                  } else {
                    _this3.sharedService.openSnackBar(res.errorMessage, 'error');
                  }
                });
              }
            });
          }
        }]);

        return ViolationSetupPrivilegeComponent;
      }();

      ViolationSetupPrivilegeComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_modules_ams_violation_violation_setup_violation_setup_service__WEBPACK_IMPORTED_MODULE_4__["ViolationSetupService"]
        }, {
          type: src_app_modules_collective_add_lookup_add_lookup_service__WEBPACK_IMPORTED_MODULE_5__["AddLookupService"]
        }, {
          type: src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_3__["ViolationService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]
        }];
      };

      ViolationSetupPrivilegeComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        editStopPrivilege: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onEditViolation', ['$event.detail']]
        }],
        deleteViolation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onDeleteViolation', ['$event.detail']]
        }]
      };
      ViolationSetupPrivilegeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-violation-setup-privilege',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./violation-setup-privilege.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./violation-setup-privilege.component.scss */
        "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_modules_ams_violation_violation_setup_violation_setup_service__WEBPACK_IMPORTED_MODULE_4__["ViolationSetupService"], src_app_modules_collective_add_lookup_add_lookup_service__WEBPACK_IMPORTED_MODULE_5__["AddLookupService"], src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_3__["ViolationService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])], ViolationSetupPrivilegeComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.module.ts":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: ViolationSetupPrivilegeModule */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupPrivilegeViolationSetupPrivilegeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViolationSetupPrivilegeModule", function () {
        return ViolationSetupPrivilegeModule;
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


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/modules/ui/card/card.module */
      "./src/app/modules/ui/card/card.module.ts");
      /* harmony import */


      var _violation_setup_privilege_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./violation-setup-privilege-routing.module */
      "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege-routing.module.ts");
      /* harmony import */


      var _violation_setup_privilege_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./violation-setup-privilege.component */
      "./src/app/modules/ams/violation/violation-setup/violation-setup-privilege/violation-setup-privilege.component.ts");

      var ViolationSetupPrivilegeModule = function ViolationSetupPrivilegeModule() {
        _classCallCheck(this, ViolationSetupPrivilegeModule);
      };

      ViolationSetupPrivilegeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_violation_setup_privilege_component__WEBPACK_IMPORTED_MODULE_6__["ViolationSetupPrivilegeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], _violation_setup_privilege_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViolationSetupPrivilegeRoutingModule"]]
      })], ViolationSetupPrivilegeModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-violation-violation-setup-violation-setup-privilege-violation-setup-privilege-module-es5.js.map