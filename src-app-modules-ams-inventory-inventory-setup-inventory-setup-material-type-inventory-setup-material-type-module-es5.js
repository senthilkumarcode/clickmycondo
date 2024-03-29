(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-inventory-inventory-setup-inventory-setup-material-type-inventory-setup-material-type-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.html":
    /*!************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.html ***!
      \************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsInventoryInventorySetupInventorySetupMaterialTypeInventorySetupMaterialTypeComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"inventory-setup-material-type-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isError\">\n\n        <!-- Message -->\n       <condo-message *ngIf=\"message\" [appearance]=\"message.appearance\" [showIcon]=\"message.showIcon\" [type]=\"message.type\" [@shake]=\"message.shake\">\n         {{message.content}}\n       </condo-message>\n\n      </ng-container>\n\n    <ng-container *ngIf=\"isDataLoaded\">\n\n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h4>All Material Type</h4>\n                        <p class=\"text-secondary\">{{materialList?.length}} Items</p>\n                    </div>\n                    <div class=\"ml-auto d-none d-md-block mr-3\">\n                        <input type=\"text\" class=\"form-control  \" placeholder=\"Search...\" name=\"searchType\"\n                            [(ngModel)]=\"searchType\">\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <form>\n                    <table class=\"table\" [ngClass]=\"isMobileView()\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" (click)=\"sortUnitData('lookupValueName')\">Material Type Name\n                                    <span [ngClass]=\"getFieldOrderBy('lookupValueName')\"></span></th>\n                                <th scope=\"col\" (click)=\"sortUnitData('description')\">Descripition\n                                    <span [ngClass]=\"getFieldOrderBy('description')\"></span></th>\n                                <th scope=\"col\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <ng-container>\n                                <tr class=\"create-box-shadow\">\n                                    <td>\n                                        <div class=\"input-box\">\n                                            <input type=\"text\" class=\"form-control\" name=\"typeName\"\n                                                [(ngModel)]=\"typeRow.lookupValueName\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"input-box\">\n                                            <input type=\"text\" class=\"form-control\" name=\"descrip\"\n                                                [(ngModel)]=\"typeRow.description\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <mat-icon class=\"mt-4 p-1\" svgIcon=\"mat_outline:save\"\n                                            [ngClass]=\"!typeRow.lookupValueName || !typeRow.description ?'custom-icon-disabled':''\"\n                                            (click)=\"addMaterialType(typeRow)\"></mat-icon>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                            <ng-container\n                                *ngFor=\"let typeList of materialList | simpleSearch: searchType;let materialIndex=index\">\n                                <tr>\n                                    <td>\n                                        <span\n                                            [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">{{typeList.lookupValueName}}</span>\n    \n                                        <div class=\"input-box\" *ngIf=\"currMaterialIndex == materialIndex\">\n    \n                                            <input type=\"text\" class=\"form-control\" name=\"lookupValueName\"\n                                                [(ngModel)]=\"typeList.lookupValueName\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <span [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">\n                                            {{typeList.description}}\n                                        </span>\n    \n                                        <div class=\"input-box\" *ngIf=\"currMaterialIndex == materialIndex\">\n    \n                                            <input type=\"text\" class=\"form-control\" name=\"description\"\n                                                [(ngModel)]=\"typeList.description\">\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"d-flex  align-items-center\">\n    \n                                            <span\n                                                [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">\n                                                <mat-icon [svgIcon]=\"'feather:edit'\" class=\"pt-2\"\n                                                    (click)=\"currMaterialIndex = materialIndex;setCurrentData(typeList)\"></mat-icon>\n                                            </span>\n                                            <div class=\"pt-3 d-flex\">\n                                                <mat-icon class=\"pt-1\" svgIcon=\"mat_outline:save\"\n                                                    [ngClass]=\"!typeList.lookupValueName || !typeList.description ?'custom-icon-disabled':''\"\n                                                    *ngIf=\"currMaterialIndex == materialIndex\"\n                                                    (click)=\"updateMaterial(typeList)\"></mat-icon>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                <mat-icon [svgIcon]=\"'close'\" class=\"pt-1\" title=\"cancel\"\n                                                    *ngIf=\"currMaterialIndex == materialIndex\"\n                                                    (click)=\"currMaterialIndex = -1;cancelMaterialType()\"></mat-icon>\n                                            </div>\n                                            <span\n                                                [ngClass]=\"currMaterialIndex == materialIndex?'d-none':''\">\n                                                <mat-icon [svgIcon]=\"'feather:trash-2'\"\n                                                    class=\"pt-2 text-red-900\"\n                                                    (click)=\"deleteRow(typeList)\"></mat-icon>\n                                            </span>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                        </tbody>\n                    </table>\n    \n                </form>\t\t\t\t\n    \n            </div>\n        </condo-card>\n\n    </ng-container>\n\n</div>\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type-routing.module.ts":
    /*!*************************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type-routing.module.ts ***!
      \*************************************************************************************************************************************/

    /*! exports provided: InventorySetupMaterialTypeRoutingModule */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupMaterialTypeInventorySetupMaterialTypeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventorySetupMaterialTypeRoutingModule", function () {
        return InventorySetupMaterialTypeRoutingModule;
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


      var _inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory-setup-material-type.component */
      "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts");

      var routes = [{
        path: '',
        component: _inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_3__["InventorySetupMaterialTypeComponent"]
      }];

      var InventorySetupMaterialTypeRoutingModule = function InventorySetupMaterialTypeRoutingModule() {
        _classCallCheck(this, InventorySetupMaterialTypeRoutingModule);
      };

      InventorySetupMaterialTypeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventorySetupMaterialTypeRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.scss":
    /*!**********************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.scss ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupMaterialTypeInventorySetupMaterialTypeComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ludmVudG9yeS9pbnZlbnRvcnktc2V0dXAvaW52ZW50b3J5LXNldHVwLW1hdGVyaWFsLXR5cGUvaW52ZW50b3J5LXNldHVwLW1hdGVyaWFsLXR5cGUuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts":
    /*!********************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts ***!
      \********************************************************************************************************************************/

    /*! exports provided: InventorySetupMaterialTypeComponent */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupMaterialTypeInventorySetupMaterialTypeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventorySetupMaterialTypeComponent", function () {
        return InventorySetupMaterialTypeComponent;
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


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
      /* harmony import */


      var src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/api/controllers/PurchaseOrder */
      "./src/app/api/controllers/PurchaseOrder.ts");
      /* harmony import */


      var src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/api/controllers/Staff */
      "./src/app/api/controllers/Staff.ts");
      /* harmony import */


      var src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/session/session.service */
      "./src/app/core/session/session.service.ts");
      /* harmony import */


      var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/shared.service */
      "./src/app/shared/services/shared.service.ts");
      /* harmony import */


      var src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/api/controllers/Lookup */
      "./src/app/api/controllers/Lookup.ts");
      /* harmony import */


      var src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/modal.service */
      "./src/app/shared/services/modal.service.ts");

      var InventorySetupMaterialTypeComponent = /*#__PURE__*/function () {
        function InventorySetupMaterialTypeComponent(dialog, injector, purchaseOrderService, staffService, sharedService, lookupService, sessionService) {
          _classCallCheck(this, InventorySetupMaterialTypeComponent);

          this.dialog = dialog;
          this.injector = injector;
          this.purchaseOrderService = purchaseOrderService;
          this.staffService = staffService;
          this.sharedService = sharedService;
          this.lookupService = lookupService;
          this.sessionService = sessionService;
          this.isDataLoaded = false;
          this.isError = false;
          this.ItemStartIndex = 0;
          this.itemLimit = 10;
          this.materialList = [];
          this.tempMaterialList = [];
          this.typeItemStartIndex = 0;
          this.typeItemLimit = 10;
          this.typeRow = {};
          this.searchType = "";
          this.unitFieldType = "unitno";
          this.unitOrder = false;
          this.backupMaterialType = {};
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
        }

        _createClass(InventorySetupMaterialTypeComponent, [{
          key: "isMobileView",
          value: function isMobileView() {
            return window.innerWidth <= 767 ? 'table-responsive' : '';
          }
        }, {
          key: "sortUnitData",
          value: function sortUnitData(type) {
            this.unitFieldType = type;
            this.unitOrder = !this.unitOrder;
          }
        }, {
          key: "getFieldOrderBy",
          value: function getFieldOrderBy(type) {
            if (this.unitFieldType == type) {
              return this.unitOrder ? 'desc' : 'asc';
            } else return '';
          }
        }, {
          key: "getAllMaterial",
          value: function getAllMaterial() {
            var _this = this;

            var queryParamBase = {};
            queryParamBase = {
              ApartmentId: this.sessionService.apartmentId,
              LookupTypeId: 186
            };
            this.isDataLoaded = false;
            this.lookupService.getLookupValueByLookupTypeId(queryParamBase).subscribe(function (res) {
              if (res) {
                _this.isDataLoaded = true;
                _this.materialList = res ? res.reverse() : [];
                _this.tempMaterialList = _this.materialList;
                _this.typeTotalItems = _this.materialList.length;

                if (_this.typeTotalItems > _this.typeItemLimit) {
                  _this.typeItemEndIndex = _this.typeItemLimit;
                } else {
                  _this.typeItemEndIndex = _this.typeTotalItems;
                }
              }
            });
          }
        }, {
          key: "addMaterialType",
          value: function addMaterialType(data) {
            var _this2 = this;

            var reqObj = {};
            reqObj = {
              "lookupValueId": 0,
              'apartmentId': this.sessionService.apartmentId,
              "lookupTypeId": 186,
              "lookupValueName": data.lookupValueName,
              "description": data.description,
              "isActive": true,
              "insertedBy": parseInt(this.sessionService.userId),
              "insertedOn": new Date(),
              "updatedBy": parseInt(this.sessionService.userId),
              "updatedOn": new Date(),
              "isDisabled": true
            };
            this.isDataLoaded = false;
            var param = {};
            param.lookupvalue = reqObj;
            this.lookupService.addLookupValue(param).subscribe(function (res) {
              if (res.code == 200) {
                _this2.isDataLoaded = true;
                _this2.typeRow = {};

                _this2.getAllMaterial();

                _this2.sharedService.openSnackBar('Material Type created successFully', 'success');
              } else {
                _this2.isDataLoaded = true;

                _this2.sharedService.openSnackBar('Material Type already exists', 'error');
              }
            }, function (error) {
              _this2.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "updateMaterial",
          value: function updateMaterial(data) {
            var _this3 = this;

            var reqObj = {};
            reqObj = {
              "lookupValueId": data.lookupValueId,
              "lookupTypeId": 186,
              "lookupValueName": data.lookupValueName,
              "description": data.description,
              'apartmentId': this.sessionService.apartmentId,
              "isActive": true,
              "insertedBy": parseInt(this.sessionService.userId),
              "insertedOn": new Date(),
              "updatedBy": parseInt(this.sessionService.userId),
              "updatedOn": new Date(),
              "isDisabled": true
            };
            this.isDataLoaded = false;
            var param = {};
            param.lookupvalue = reqObj;
            this.lookupService.updateLookupValue(param).subscribe(function (res) {
              if (res.message) {
                _this3.isDataLoaded = true;
                _this3.currMaterialIndex = -1;

                _this3.sharedService.openSnackBar('Material Type updated successfully', 'success');
              } else {
                _this3.isDataLoaded = true;

                _this3.sharedService.openSnackBar(res.errorMessage, 'error');
              }
            }, function (error) {
              _this3.sharedService.openSnackBar('Server Error', 'error');
            });
          }
        }, {
          key: "setCurrentData",
          value: function setCurrentData(data) {
            this.backupMaterialType = Object.assign({}, data);
          }
        }, {
          key: "cancelMaterialType",
          value: function cancelMaterialType() {
            var _this4 = this;

            var index = this.materialList.findIndex(function (data) {
              return data.lookupValueId == _this4.backupMaterialType.lookupValueId;
            });
            this.materialList.splice(index, 1, this.backupMaterialType);
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(data) {
            this.modalService.showConfirmModal(data.lookupValueId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.getAllMaterial();
            this.sharedService.unitlistdeleteindexcast.subscribe(function (id) {
              if (id != null) {
                var param = {
                  lookupValueId: id,
                  updateUserId: _this5.sessionService.userId
                };

                _this5.lookupService.deleteLookupvalue(param).subscribe(function (res) {
                  setTimeout(function () {
                    _this5.sharedService.openSnackBar("Material Type deleted successfully", 'success');

                    _this5.sharedService.setUnitListDeleteIndex(null);

                    _this5.getAllMaterial();
                  }, 500);
                }, function (error) {
                  console.log(error);
                });
              }
            });
          }
        }]);

        return InventorySetupMaterialTypeComponent;
      }();

      InventorySetupMaterialTypeComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]
        }, {
          type: src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"]
        }, {
          type: src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"]
        }, {
          type: src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"]
        }, {
          type: src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]
        }];
      };

      InventorySetupMaterialTypeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-setup-material-type',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inventory-setup-material-type.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inventory-setup-material-type.component.scss */
        "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], InventorySetupMaterialTypeComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.module.ts":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: InventorySetupMaterialTypeModule */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupMaterialTypeInventorySetupMaterialTypeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventorySetupMaterialTypeModule", function () {
        return InventorySetupMaterialTypeModule;
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


      var src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/modules/ui/select/select.module */
      "./src/app/modules/ui/select/select.module.ts");
      /* harmony import */


      var src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/modules/ui/list/list.module */
      "./src/app/modules/ui/list/list.module.ts");
      /* harmony import */


      var src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/modules/ui/message/message.module */
      "./src/app/modules/ui/message/message.module.ts");
      /* harmony import */


      var src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/modules/ui/help-tooltip/help-tooltip.module */
      "./src/app/modules/ui/help-tooltip/help-tooltip.module.ts");
      /* harmony import */


      var _inventory_setup_material_type_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./inventory-setup-material-type-routing.module */
      "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type-routing.module.ts");
      /* harmony import */


      var _inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./inventory-setup-material-type.component */
      "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-material-type/inventory-setup-material-type.component.ts");

      var InventorySetupMaterialTypeModule = function InventorySetupMaterialTypeModule() {
        _classCallCheck(this, InventorySetupMaterialTypeModule);
      };

      InventorySetupMaterialTypeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventory_setup_material_type_component__WEBPACK_IMPORTED_MODULE_10__["InventorySetupMaterialTypeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"], src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"], src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_7__["CondoMessageModule"], src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_8__["HelpTooltipModule"], _inventory_setup_material_type_routing_module__WEBPACK_IMPORTED_MODULE_9__["InventorySetupMaterialTypeRoutingModule"]]
      })], InventorySetupMaterialTypeModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-inventory-inventory-setup-inventory-setup-material-type-inventory-setup-material-type-module-es5.js.map