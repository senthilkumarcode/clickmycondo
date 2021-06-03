(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-violation-violation-setup-violation-setup-rules-violation-setup-rules-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.html":
    /*!********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.html ***!
      \********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsViolationViolationSetupViolationSetupRulesViolationSetupRulesComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"violation-setup-rules\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isDataLoaded\">\n\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>Violation Rules</h4>\n                        <p>{{totalItems}} results</p>\n                    </div>\n                    <div class=\"ml-auto mr-3\">\n                        <app-table-search [input]=\"violationSearch\" (outputParams)=\"onGlSearchFilter($event)\"></app-table-search>\n                    </div>\n                    <div class=\"mr-3\">\n                        <app-print-dropdown (outputParams) =\"getPrintParams($event)\"></app-print-dropdown>\n                    </div>\n                    <div>\n                        <button mat-flat-button [color]=\"'primary'\" (click)=\"addRules()\">\n                            <mat-icon class=\"mr-2\" [svgIcon]=\"'add'\"></mat-icon>Add Violation Rules\n                        </button>\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <jqxGrid [theme]=\"'material'\" [width]=\"'100%'\" [rowsheight]=\"48\" [autoheight]=\"true\"\n                        [pageable]=\"true\" [filterable]=\"true\" [sortable]=\"true\" [source]=\"violationRuleList\"\n                        [columns]=\"violationRuleHeader\" [columnsresize]=\"true\" [enablehover]=\"false\" #datagrid>\n                </jqxGrid>\n            </div>\n        </condo-card>\n\n    </ng-container>\n\n</div>\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules-routing.module.ts":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules-routing.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: ViolationSetupRulesRoutingModule */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupRulesViolationSetupRulesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViolationSetupRulesRoutingModule", function () {
        return ViolationSetupRulesRoutingModule;
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


      var _violation_setup_rules_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./violation-setup-rules.component */
      "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.ts");

      var routes = [{
        path: '',
        component: _violation_setup_rules_component__WEBPACK_IMPORTED_MODULE_3__["ViolationSetupRulesComponent"]
      }];

      var ViolationSetupRulesRoutingModule = function ViolationSetupRulesRoutingModule() {
        _classCallCheck(this, ViolationSetupRulesRoutingModule);
      };

      ViolationSetupRulesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViolationSetupRulesRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.scss":
    /*!******************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.scss ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupRulesViolationSetupRulesComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL3Zpb2xhdGlvbi92aW9sYXRpb24tc2V0dXAvdmlvbGF0aW9uLXNldHVwLXJ1bGVzL3Zpb2xhdGlvbi1zZXR1cC1ydWxlcy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.ts":
    /*!****************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.ts ***!
      \****************************************************************************************************************/

    /*! exports provided: ViolationSetupRulesComponent */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupRulesViolationSetupRulesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViolationSetupRulesComponent", function () {
        return ViolationSetupRulesComponent;
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
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! moment-timezone */
      "./node_modules/moment-timezone/index.js");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_10__);

      var ViolationSetupRulesComponent = /*#__PURE__*/function () {
        function ViolationSetupRulesComponent(injector, violationSetupService, addLookupService, violationService, lookupService, sessionService, sharedService) {
          _classCallCheck(this, ViolationSetupRulesComponent);

          this.injector = injector;
          this.violationSetupService = violationSetupService;
          this.addLookupService = addLookupService;
          this.violationService = violationService;
          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.sharedService = sharedService;
          this.isDataLoaded = false;
          this.violationSearch = '';
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_9__["ModalService"]);
        }

        _createClass(ViolationSetupRulesComponent, [{
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
              this.violationRuleHeader.forEach(function (item) {
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
          key: "addRules",
          value: function addRules() {
            var id = this.sharedService.guid();
            this.violationSetupService.setViolationSetupMatDrawer({
              id: id,
              data: null,
              category: 'rules',
              isedit: false,
              isview: false
            });
          }
        }, {
          key: "editRules",
          value: function editRules(detail) {
            var data = this.datagrid.getrowdata(detail.rowId);
            this.violationSetupService.setViolationSetupMatDrawer({
              id: data.id,
              data: data,
              category: 'rules',
              isedit: true,
              isview: false
            });
          }
        }, {
          key: "viewRules",
          value: function viewRules(detail) {
            var data = this.datagrid.getrowdata(detail.rowId);
            this.violationSetupService.setViolationSetupMatDrawer({
              id: data.id,
              data: data,
              category: 'rules',
              isedit: false,
              isview: true
            });
          }
        }, {
          key: "deleteRules",
          value: function deleteRules(detail) {
            this.modalService.showConfirmModal(detail.rowId);
          }
        }, {
          key: "getViolationRules",
          value: function getViolationRules() {
            var _this2 = this;

            this.isDataLoaded = false;
            var params = {
              apartmentId: this.sessionService.apartmentId
            };
            this.violationService.getViolationRule(params).subscribe(function (res) {
              if (res.length > 0) {
                var violationPrivilageSourceData = {
                  localdata: res.reverse(),
                  datatype: "array"
                };
                _this2.totalItems = violationPrivilageSourceData.localdata.length;
                _this2.violationRuleList = new jqx.dataAdapter(violationPrivilageSourceData);
              }

              _this2.isDataLoaded = true;
            }, function (error) {
              _this2.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.getViolationRules();
            this.violationSetupService.violationsetupentryrefreshcast.subscribe(function (res) {
              if (res) {
                _this3.getViolationRules();
              }
            });

            var cellsrenderer = function cellsrenderer(row, column, value) {
              return '<div class="jqx-custom-inner-cell">' + value + '</div>';
            };

            var columnrenderer = function columnrenderer(value) {
              return '<div style="padding: 14px">' + value + '</div>';
            };

            this.violationRuleHeader = [{
              text: 'category name',
              datafield: 'name',
              cellsrenderer: cellsrenderer,
              renderer: columnrenderer
            }, {
              text: 'inserted on',
              datafield: 'insertedOn',
              cellsrenderer: function cellsrenderer(row, column, value) {
                return '<div class="jqx-custom-inner-cell">' + moment_timezone__WEBPACK_IMPORTED_MODULE_10___default()(value).format("DD-MM-YYYY") + '</div>';
              },
              width: 250,
              renderer: columnrenderer
            }, {
              text: 'Actions',
              cellsalign: 'center',
              align: 'center',
              width: 100,
              cellsrenderer: function cellsrenderer(row) {
                return '<div class="simple-actions"><a href="javascript:void(0)" class="mr-2 text-secondary" onClick="viewRules(' + row + ')" ><i class="icon fa fa-eye" aria-hidden="true"></i></a> <a href="javascript:void(0)" class="mr-2" onClick="editRules(' + row + ')"><i class="icon fa fa-pencil" aria-hidden="true"></i> </a> <a href="javascript:void(0)" onClick="deleteRules(' + row + ')"><i class="fa fa-trash icon delete" aria-hidden="true"></i> </a></div>';
              },
              renderer: columnrenderer
            }]; //delete item

            this.apiSubscibe = this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
              if (id != null) {
                var dataRecord = _this3.datagrid.getrowdata(id);

                var params = {
                  lookupValueId: dataRecord.id,
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

        return ViolationSetupRulesComponent;
      }();

      ViolationSetupRulesComponent.ctorParameters = function () {
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

      ViolationSetupRulesComponent.propDecorators = {
        datagrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['datagrid', {
            "static": false
          }]
        }],
        editRules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onEditRules', ['$event.detail']]
        }],
        viewRules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onViewRules', ['$event.detail']]
        }],
        deleteRules: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:onDeleteRules', ['$event.detail']]
        }]
      };
      ViolationSetupRulesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-violation-setup-rules',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./violation-setup-rules.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./violation-setup-rules.component.scss */
        "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_modules_ams_violation_violation_setup_violation_setup_service__WEBPACK_IMPORTED_MODULE_4__["ViolationSetupService"], src_app_modules_collective_add_lookup_add_lookup_service__WEBPACK_IMPORTED_MODULE_5__["AddLookupService"], src_app_api_controllers_Violation__WEBPACK_IMPORTED_MODULE_3__["ViolationService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_6__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_7__["SessionService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"]])], ViolationSetupRulesComponent);

      var editRules = function editRules(row) {
        var event = new CustomEvent('onEditRules', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      };

      window.editRules = editRules;

      var viewRules = function viewRules(row) {
        var event = new CustomEvent('onViewRules', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      };

      window.viewRules = viewRules;

      var deleteRules = function deleteRules(row) {
        var event = new CustomEvent('onDeleteRules', {
          detail: {
            rowId: row
          }
        });
        window.dispatchEvent(event);
      };

      window.deleteRules = deleteRules;
      /***/
    },

    /***/
    "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.module.ts":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.module.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: ViolationSetupRulesModule */

    /***/
    function srcAppModulesAmsViolationViolationSetupViolationSetupRulesViolationSetupRulesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViolationSetupRulesModule", function () {
        return ViolationSetupRulesModule;
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


      var _violation_setup_rules_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./violation-setup-rules-routing.module */
      "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules-routing.module.ts");
      /* harmony import */


      var _violation_setup_rules_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./violation-setup-rules.component */
      "./src/app/modules/ams/violation/violation-setup/violation-setup-rules/violation-setup-rules.component.ts");

      var ViolationSetupRulesModule = function ViolationSetupRulesModule() {
        _classCallCheck(this, ViolationSetupRulesModule);
      };

      ViolationSetupRulesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_violation_setup_rules_component__WEBPACK_IMPORTED_MODULE_6__["ViolationSetupRulesComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], _violation_setup_rules_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViolationSetupRulesRoutingModule"]]
      })], ViolationSetupRulesModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-violation-violation-setup-violation-setup-rules-violation-setup-rules-module-es5.js.map