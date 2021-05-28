(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-ams-inventory-inventory-setup-inventory-setup-warehouse-inventory-setup-warehouse-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.html":
    /*!****************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.html ***!
      \****************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppModulesAmsInventoryInventorySetupInventorySetupWarehouseInventorySetupWarehouseComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"inventory-setup-warehouse-wrapper\">\n\n    <app-loader *ngIf=\"!isDataLoaded\"></app-loader>\n\n    <ng-container *ngIf=\"isError\">\n\n        <!-- Message -->\n       <condo-message *ngIf=\"message\" [appearance]=\"message.appearance\" [showIcon]=\"message.showIcon\" [type]=\"message.type\" [@shake]=\"message.shake\">\n         {{message.content}}\n       </condo-message>\n\n      </ng-container>\n\n    <ng-container *ngIf=\"isDataLoaded\">\n\n        <h4 class=\"my-4\">Settings</h4>\n        \n        <condo-card>\n            <div CondoCardHeader>\n                <div class=\"d-flex\">\n                    <div>\n                        <h5>All Warehouse</h5>\n                        <p class=\"text-secondary\">{{totalItems}} Items</p>\n                    </div>\n                    <div class=\"ml-auto d-none d-md-block mr-3\">\n                        <input type=\"text\" class=\"form-control  \" placeholder=\"Search...\"\n                            [(ngModel)]=\"searchWarehouse\">\n                    </div>\n                </div>\n            </div>\n            <div CondoCardBody>\n                <form>\n                    <table class=\"table\" [ngClass]=\"isMobileView()\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\" (click)=\"sortUnitData('warehouseName')\">Warehouse Name\n                                    <span [ngClass]=\"getFieldOrderBy('warehouseName')\"></span></th>\n                                <th scope=\"col\" (click)=\"sortUnitData('towerLocation')\">Tower Location\n                                    <span [ngClass]=\"getFieldOrderBy('towerLocation')\"></span></th>\n                                <th scope=\"col\" (click)=\"sortUnitData('descripition')\">Descripition\n                                    <span [ngClass]=\"getFieldOrderBy('descripition')\"></span></th>\n                                <th scope=\"col\" (click)=\"sortUnitData('owner')\">Owner\n                                    <span [ngClass]=\"getFieldOrderBy('owner')\"></span></th>\n                                <th scope=\"col\" (click)=\"sortUnitData('supervisor')\">Supervisor\n                                    <span [ngClass]=\"getFieldOrderBy('supervisor')\"></span></th>\n                                <th scope=\"col\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <ng-container>\n                                <tr class=\"shadow\">\n                                    <td class=\"td-container\">\n                                        <div class=\"input-box\">\n                                            <input type=\"text\" class=\"form-control\" name=\"warName\"\n                                                [(ngModel)]=\"row.warehouseName\">\n                                                <help-tooltip title=\"wareHouseName\"></help-tooltip>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"input-box\">\n                                            <select class=\"form-control\" name=\"warLocation\"\n                                                [(ngModel)]=\"row.towerLocation\">\n                                                <option value=\"\" disabled selected hidden>Select</option>\n                                                <option *ngFor=\"let item of  locationList  | orderBy : 'description'\"\n                                                    [value]=\"item.apartmentBlockId\">{{ item.description }}\n                                                </option>\n                                            </select>\n                                        </div>\n\n                                    </td>\n                                    <td class=\"td-description\">\n\n                                        <div class=\"input-box\">\n                                            <input type=\"text\" class=\"form-control\" name=\"descrip\"\n                                                [(ngModel)]=\"row.descripition\">\n                                                <help-tooltip title=\"inventoryDescription\"></help-tooltip>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"select-box\">\n                                            <select name=\"warOwner\" id=\"warOwner\" class=\"form-control\"\n                                                [(ngModel)]=\"row.owner\">\n                                                <option value=\"\" disabled selected hidden>Select</option>\n                                                <option *ngFor=\"let item of staffList  | orderBy : 'staffName'\" [ngValue]=\"item.staffId\"> \n                                                    {{item.staffName}}, {{item.roleName}} - {{item.staffCategoryName}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"input-box\">\n                                            <select class=\"form-control\" name=\"warSupervisor\" [(ngModel)]=\"row.supervisor\">\n                                                <option value=\"\" disabled selected hidden>Select</option>\n                                                <option *ngFor=\"let item of staffList  | orderBy : 'staffName'\" [ngValue]=\"item.staffId\"> \n                                                    {{item.staffName}}, {{item.roleName}} - {{item.staffCategoryName}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <mat-icon class=\"mt-4 pt-1\" svgIcon=\"mat_outline:save\"\n                                            [ngClass]=\"!row.warehouseName ?'custom-icon-disabled':''\"\n                                            (click)=\"addWareHouse(row)\"></mat-icon>\n\n                                    </td>\n                                </tr>\t\t\t\t\t\t\t\t\t\t\t\n                            </ng-container>\n                            <ng-container\n                                *ngFor=\"let list of warehouseData  | simpleSearch: searchWarehouse;let inventoryIndex=index\">\n                                <tr>\n                                    <td>\n                                        <span [ngClass]=\"wareHouseIndex == inventoryIndex?'d-none':''\">\n                                            {{list.warehouseName}}\n                                        </span>\n                                        <div class=\"input-box\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                                            <input type=\"text\" class=\"form-control\" name=\"warehouseName\"\n                                                [(ngModel)]=\"list.warehouseName\">\n                                        </div>\n\n                                    </td>\n                                    <td>\n                                        <span [ngClass]=\"wareHouseIndex == inventoryIndex?'d-none':''\">\n                                            <span *ngFor=\" let loc of locationList\">\n                                                <span\n                                                    *ngIf=\"list.towerLocation == loc.apartmentBlockId\">{{loc.description}}</span>\n                                            </span>\n                                        </span>\n\n                                        <div class=\"input-box\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                                            <select class=\"form-control\" name=\"location\"\n                                                [(ngModel)]=\"list.towerLocation\">\n                                                <option value=\"\" disabled selected hidden>Select</option>\n                                                <option *ngFor=\"let item of  locationList\"\n                                                    [value]=\"item.apartmentBlockId\">{{ item.description }}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <span [ngClass]=\"wareHouseIndex == inventoryIndex?'d-none':''\">\n                                            {{list.descripition}}\n                                        </span>\n\n                                        <div class=\"input-box\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                                            <input type=\"text\" class=\"form-control\" name=\"descripition\"\n                                                [(ngModel)]=\"list.descripition\">\n                                        </div>\n\n                                    </td>\n                                    <td>\n\n                                        <span [ngClass]=\"wareHouseIndex == inventoryIndex?'d-none':''\">\n                                            <span> {{list.ownerLabel}} </span>\n                                        </span>\n\n                                        <div class=\"input-box\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                                            <select class=\"form-control\" name=\"owner\" [(ngModel)]=\"list.owner\">\n                                                <option value=\"\" disabled selected hidden>Select</option>\n                                                <option *ngFor=\"let item of staffList  | orderBy : 'staffName'\" [ngValue]=\"item.staffId\"> \n                                                    {{item.staffName}}, {{item.roleName}} - {{item.staffCategoryName}}\n                                                </option>\n                                            </select>\n\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <span [ngClass]=\"wareHouseIndex == inventoryIndex?'d-none':''\">\n                                            <span> {{list.supervisorLabel}} </span>\n                                        </span>\n                                        <div class=\"input-box\" *ngIf=\"wareHouseIndex == inventoryIndex\">\n                                            <select class=\"form-control\" name=\"supervisor\" [(ngModel)]=\"list.supervisor\">\n                                                <option value=\"\" disabled selected hidden>Select</option>\n                                                <option *ngFor=\"let item of staffList  | orderBy : 'staffName'\" [ngValue]=\"item.staffId\"> \n                                                    {{item.staffName}}, {{item.roleName}} - {{item.staffCategoryName}}\n                                                </option>\n                                            </select>\n                                        </div>\n                                    </td>\n                                    <td>\n                                        <div class=\"d-flex align-items-center \">\n\n                                            <span [ngClass]=\"wareHouseIndex == inventoryIndex?'d-none':''\">\n                                                <mat-icon [svgIcon]=\"'feather:edit'\" class=\"pt-2\"\n                                                    (click)=\"wareHouseIndex = inventoryIndex;setCurrentData(list)\"></mat-icon>\n                                            </span>\n\n                                            <div class=\"pt-3 d-flex\">\n                                                <mat-icon class=\"pt-1\" svgIcon=\"mat_outline:save\"\n                                                    [ngClass]=\"!list.warehouseId || !list.warehouseId || !list.towerLocation || !list.descripition || !list.owner || !list.supervisor?'custom-icon-disabled':''\"\n                                                    *ngIf=\"wareHouseIndex == inventoryIndex\"\n                                                    (click)=\"updateWareHouse(list)\"></mat-icon>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n                                                    <mat-icon [svgIcon]=\"'close'\" class=\"pt-1\" title=\"cancel\"\n                                                    *ngIf=\"wareHouseIndex == inventoryIndex\"\n                                                    (click)=\"wareHouseIndex = -1;cancelWarHouse()\"></mat-icon>\n                                            </div>\n                                            <span [ngClass]=\"wareHouseIndex == inventoryIndex?'d-none':''\">\n                                                <mat-icon [svgIcon]=\"'feather:trash'\"\n                                                    class=\"pt-2 text-red-900\"\n                                                    (click)=\"deleteRow(list)\"></mat-icon>\n                                            </span>\n                                        </div>\n                                    </td>\n                                </tr>\n                            </ng-container>\n                        </tbody>\n                    </table>\n\n                </form>\n\n\n            </div>\n        </condo-card>\n\n    </ng-container>\n\n</div>\n";
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse-routing.module.ts":
    /*!*****************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse-routing.module.ts ***!
      \*****************************************************************************************************************************/

    /*! exports provided: InventorySetupWarehouseRoutingModule */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupWarehouseInventorySetupWarehouseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventorySetupWarehouseRoutingModule", function () {
        return InventorySetupWarehouseRoutingModule;
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


      var _inventory_setup_warehouse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory-setup-warehouse.component */
      "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.ts");

      var routes = [{
        path: '',
        component: _inventory_setup_warehouse_component__WEBPACK_IMPORTED_MODULE_3__["InventorySetupWarehouseComponent"]
      }];

      var InventorySetupWarehouseRoutingModule = function InventorySetupWarehouseRoutingModule() {
        _classCallCheck(this, InventorySetupWarehouseRoutingModule);
      };

      InventorySetupWarehouseRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventorySetupWarehouseRoutingModule);
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.scss":
    /*!**************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.scss ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupWarehouseInventorySetupWarehouseComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYW1zL2ludmVudG9yeS9pbnZlbnRvcnktc2V0dXAvaW52ZW50b3J5LXNldHVwLXdhcmVob3VzZS9pbnZlbnRvcnktc2V0dXAtd2FyZWhvdXNlLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.ts":
    /*!************************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.ts ***!
      \************************************************************************************************************************/

    /*! exports provided: InventorySetupWarehouseComponent */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupWarehouseInventorySetupWarehouseComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventorySetupWarehouseComponent", function () {
        return InventorySetupWarehouseComponent;
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

      var InventorySetupWarehouseComponent = /*#__PURE__*/function () {
        function InventorySetupWarehouseComponent(dialog, injector, purchaseOrderService, staffService, sharedService, lookupService, sessionService) {
          _classCallCheck(this, InventorySetupWarehouseComponent);

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
          this.unitFieldType = "unitno";
          this.unitOrder = false;
          this.row = {};
          this.warehouseData = [];
          this.tempWarehouseData = [];
          this.backupWarhouse = {};
          this.modalService = this.injector.get(src_app_shared_services_modal_service__WEBPACK_IMPORTED_MODULE_8__["ModalService"]);
        }

        _createClass(InventorySetupWarehouseComponent, [{
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
          key: "filterWareHouse",
          value: function filterWareHouse(value) {
            this.warehouseData = this.tempWarehouseData.filter(function (item) {
              item.warehouseName.toString().toLowerCase().indexOf(value.toLowerCase()) > -1;
            });
          }
        }, {
          key: "getAllStaff",
          value: function getAllStaff() {
            var _this = this;

            var staffParms = {
              apartmentId: this.sessionService.apartmentId,
              roleTypeIds: this.sessionService.roleTypeId
            };
            this.staffService.getAllStaffs(staffParms).subscribe(function (res) {
              if (res.length) {
                _this.staffList = res;
              }
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "getAllGetAllWarehouse",
          value: function getAllGetAllWarehouse() {
            var _this2 = this;

            var queryParamBase = {};
            queryParamBase = {
              apartmentId: this.sessionService.apartmentId
            };
            this.isDataLoaded = false;
            this.purchaseOrderService.getAllWarehouseByApartmentId(queryParamBase).subscribe(function (res) {
              if (res) {
                _this2.warehouseData = res && res.length > 0 ? res.reverse() : [];
                _this2.isDataLoaded = true;
                _this2.tempWarehouseData = _this2.warehouseData;
                _this2.totalItems = _this2.warehouseData.length;

                if (_this2.warehouseData && _this2.warehouseData.length > 0) {
                  _this2.warehouseData.filter(function (val) {
                    if (val.warehouseName == '') {
                      delete val.warehouseName;
                      delete val.warehouseId;
                    }
                  });
                }

                if (_this2.totalItems > _this2.itemLimit) {
                  _this2.ItemEndIndex = _this2.itemLimit;
                } else {
                  _this2.ItemEndIndex = _this2.totalItems;
                }
              }
            });
          }
        }, {
          key: "addWareHouse",
          value: function addWareHouse(data) {
            var _this3 = this;

            var reqObj = {};
            reqObj = {
              "warehouseId": data.warehouseId,
              "apartmentId": this.sessionService.apartmentId,
              "warehouseName": data.warehouseName,
              "towerLocation": data.towerLocation,
              "unitOfMeasureId": null,
              "descripition": data.descripition,
              "owner": data.owner,
              "supervisor": data.supervisor,
              "isActive": true,
              "insertedBy": parseInt(this.sessionService.userId),
              "insertedOn": new Date().toISOString,
              "updatedBy": 0,
              "updatedOn": new Date().toISOString
            };
            var params = {};
            params.warehouseobj = reqObj;
            this.purchaseOrderService.addWarehouse(params).subscribe(function (res) {
              if (res.message) {
                _this3.sharedService.openSnackBar('Warehouse added Successfully', 'success');

                _this3.isDataLoaded = true;
                _this3.row = {};

                _this3.getAllGetAllWarehouse();
              }
            });
          }
        }, {
          key: "updateWareHouse",
          value: function updateWareHouse(data) {
            var _this4 = this;

            var reqObj = {};
            reqObj = {
              "warehouseId": data.warehouseId,
              "apartmentId": this.sessionService.apartmentId,
              "warehouseName": data.warehouseName,
              "towerLocation": data.towerLocation,
              "unitOfMeasureId": null,
              "descripition": data.descripition,
              "owner": data.owner,
              "supervisor": data.supervisor,
              "isActive": true,
              "insertedBy": parseInt(this.sessionService.userId),
              "insertedOn": new Date().toISOString,
              "updatedBy": parseInt(this.sessionService.userId),
              "updatedOn": new Date().toISOString
            };
            var params = {};
            params.warehouseobj = reqObj;
            this.purchaseOrderService.updateWarehouse(params).subscribe(function (res) {
              if (res) {
                _this4.sharedService.setAlertMessage("Warehouse Updated successfully");

                _this4.isDataLoaded = true;
                _this4.wareHouseIndex = -1;
              }
            });
          }
        }, {
          key: "setCurrentData",
          value: function setCurrentData(data) {
            this.backupWarhouse = Object.assign({}, data);
          }
        }, {
          key: "cancelWarHouse",
          value: function cancelWarHouse() {
            var _this5 = this;

            var index = this.warehouseData.findIndex(function (data) {
              return data.warehouseId == _this5.backupWarhouse.warehouseId;
            });
            this.warehouseData.splice(index, 1, this.backupWarhouse);
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(data) {
            this.modalService.showConfirmModal(data.warehouseId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllGetAllWarehouse();
            this.getAllStaff();
          }
        }]);

        return InventorySetupWarehouseComponent;
      }();

      InventorySetupWarehouseComponent.ctorParameters = function () {
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

      InventorySetupWarehouseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inventory-setup-warehouse',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inventory-setup-warehouse.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.html"))["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inventory-setup-warehouse.component.scss */
        "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.scss"))["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_app_api_controllers_PurchaseOrder__WEBPACK_IMPORTED_MODULE_3__["PurchaseOrderService"], src_app_api_controllers_Staff__WEBPACK_IMPORTED_MODULE_4__["StaffService"], src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"], src_app_api_controllers_Lookup__WEBPACK_IMPORTED_MODULE_7__["LookupService"], src_app_core_session_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])], InventorySetupWarehouseComponent);
      /***/
    },

    /***/
    "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.module.ts":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.module.ts ***!
      \*********************************************************************************************************************/

    /*! exports provided: InventorySetupWarehouseModule */

    /***/
    function srcAppModulesAmsInventoryInventorySetupInventorySetupWarehouseInventorySetupWarehouseModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventorySetupWarehouseModule", function () {
        return InventorySetupWarehouseModule;
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


      var _inventory_setup_warehouse_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./inventory-setup-warehouse-routing.module */
      "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse-routing.module.ts");
      /* harmony import */


      var _inventory_setup_warehouse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./inventory-setup-warehouse.component */
      "./src/app/modules/ams/inventory/inventory-setup/inventory-setup-warehouse/inventory-setup-warehouse.component.ts");

      var InventorySetupWarehouseModule = function InventorySetupWarehouseModule() {
        _classCallCheck(this, InventorySetupWarehouseModule);
      };

      InventorySetupWarehouseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inventory_setup_warehouse_component__WEBPACK_IMPORTED_MODULE_10__["InventorySetupWarehouseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_modules_ui_card_card_module__WEBPACK_IMPORTED_MODULE_4__["CondoCardModule"], src_app_modules_ui_select_select_module__WEBPACK_IMPORTED_MODULE_5__["SelectModule"], src_app_modules_ui_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"], src_app_modules_ui_message_message_module__WEBPACK_IMPORTED_MODULE_7__["CondoMessageModule"], src_app_modules_ui_help_tooltip_help_tooltip_module__WEBPACK_IMPORTED_MODULE_8__["HelpTooltipModule"], _inventory_setup_warehouse_routing_module__WEBPACK_IMPORTED_MODULE_9__["InventorySetupWarehouseRoutingModule"]]
      })], InventorySetupWarehouseModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=src-app-modules-ams-inventory-inventory-setup-inventory-setup-warehouse-inventory-setup-warehouse-module-es5.js.map